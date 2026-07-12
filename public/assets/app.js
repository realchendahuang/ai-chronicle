(() => {
  const root = document.documentElement
  const body = document.body
  const basePath = body.dataset.basePath || ''
  const assetVersion = body.dataset.assetVersion || ''
  const assetUrl = (name) => `${basePath}/assets/${name}${assetVersion ? `?v=${assetVersion}` : ''}`
  const themeMeta = document.querySelector('meta[name="theme-color"]')
  const themeToggle = document.querySelector('[data-theme-toggle]')
  const languageToggle = document.querySelector('[data-language-toggle]')
  const languageLabel = document.querySelector('[data-language-label]')
  const originalTitle = document.title

  const setTheme = (theme, persist = true) => {
    root.dataset.theme = theme
    themeMeta?.setAttribute('content', theme === 'light' ? '#f7f9fc' : '#070b12')
    const english = root.dataset.lang === 'en'
    themeToggle?.setAttribute('aria-label', theme === 'light'
      ? (english ? 'Switch to dark mode' : '切换到深色模式')
      : (english ? 'Switch to light mode' : '切换到浅色模式'))
    themeToggle?.setAttribute('title', theme === 'light'
      ? (english ? 'Dark mode' : '深色模式')
      : (english ? 'Light mode' : '浅色模式'))
    if (persist) localStorage.setItem('ai-chronicle-theme', theme)
  }

  setTheme(root.dataset.theme === 'light' ? 'light' : 'dark', false)
  themeToggle?.addEventListener('click', () => setTheme(root.dataset.theme === 'light' ? 'dark' : 'light'))

  let translations = null
  let translationRequest = null
  const originalText = new WeakMap()
  const originalAttributes = new WeakMap()

  const loadTranslations = async () => {
    if (translations) return translations
    if (!translationRequest) {
      translationRequest = fetch(assetUrl('i18n-en.json'))
        .then((response) => {
          if (!response.ok) throw new Error(`Translations failed: ${response.status}`)
          return response.json()
        })
        .then((data) => {
          translations = data
          return data
        })
    }
    return translationRequest
  }

  const preserveSpacing = (value, replacement) => {
    const leading = value.match(/^\s*/)?.[0] || ''
    const trailing = value.match(/\s*$/)?.[0] || ''
    return `${leading}${replacement}${trailing}`
  }

  const translateTree = (scope, dictionary, language) => {
    if (!(scope instanceof Element) && scope !== document.body) return

    scope.querySelectorAll('[data-localized]').forEach((element) => {
      element.textContent = language === 'en' ? element.dataset.en : element.dataset.zh
    })

    const walker = document.createTreeWalker(scope, NodeFilter.SHOW_TEXT)
    const textNodes = []
    while (walker.nextNode()) textNodes.push(walker.currentNode)
    textNodes.forEach((node) => {
      if (node.parentElement?.closest('[data-localized], [data-native-article], script, style')) return
      if (!originalText.has(node)) originalText.set(node, node.nodeValue || '')
      const source = originalText.get(node) || ''
      const key = source.trim()
      node.nodeValue = language === 'en' && dictionary[key]
        ? preserveSpacing(source, dictionary[key])
        : source
    })

    scope.querySelectorAll('[placeholder], [aria-label], [title]').forEach((element) => {
      if (element.matches('[data-theme-toggle], [data-language-toggle]')) return
      if (!originalAttributes.has(element)) originalAttributes.set(element, {})
      const stored = originalAttributes.get(element)
      ;['placeholder', 'aria-label', 'title'].forEach((attribute) => {
        if (!element.hasAttribute(attribute)) return
        if (!(attribute in stored)) stored[attribute] = element.getAttribute(attribute)
        const source = stored[attribute]
        element.setAttribute(attribute, language === 'en' && dictionary[source] ? dictionary[source] : source)
      })
    })
  }

  const setLanguage = async (language, persist = true) => {
    const normalized = language === 'en' ? 'en' : 'zh'
    root.dataset.lang = normalized
    root.lang = normalized === 'en' ? 'en' : 'zh-CN'
    if (persist) localStorage.setItem('ai-chronicle-lang', normalized)

    const dictionary = normalized === 'en' ? await loadTranslations() : (translations || {})
    translateTree(document.body, dictionary, normalized)
    document.querySelectorAll('[data-localized-alt]').forEach((image) => {
      image.alt = normalized === 'en' ? image.dataset.altEn : image.dataset.altZh
    })
    document.title = normalized === 'en' && dictionary[originalTitle]
      ? dictionary[originalTitle]
      : originalTitle
    if (languageLabel) languageLabel.textContent = normalized === 'en' ? '中' : 'EN'
    languageToggle?.setAttribute('aria-label', normalized === 'en' ? '切换到中文' : 'Switch to English')
    languageToggle?.setAttribute('title', normalized === 'en' ? '中文' : 'English')
    const timelineResultCount = document.querySelector('[data-result-count]')
    if (timelineResultCount) {
      const visibleEvents = [...document.querySelectorAll('[data-event-card]')].filter((card) => !card.hidden).length
      timelineResultCount.textContent = normalized === 'en'
        ? `${visibleEvents} ${visibleEvents === 1 ? 'event' : 'events'}`
        : `${visibleEvents} 个事件`
    }
    setTheme(root.dataset.theme === 'light' ? 'light' : 'dark', false)
  }

  languageToggle?.addEventListener('click', () => setLanguage(root.dataset.lang === 'en' ? 'zh' : 'en'))
  setLanguage(root.dataset.lang === 'en' ? 'en' : 'zh', false).catch(() => {})

  const header = document.querySelector('[data-site-header]')
  const menuToggle = document.querySelector('[data-menu-toggle]')
  const mobileNav = document.querySelector('[data-mobile-nav]')

  const syncHeader = () => header?.classList.toggle('is-scrolled', window.scrollY > 8)
  window.addEventListener('scroll', syncHeader, { passive: true })
  syncHeader()

  menuToggle?.addEventListener('click', () => {
    const open = mobileNav?.classList.toggle('is-open') || false
    menuToggle.setAttribute('aria-expanded', String(open))
  })

  const dialog = document.querySelector('[data-search-dialog]')
  const searchInput = document.querySelector('[data-global-search]')
  const searchResults = document.querySelector('[data-search-results]')
  const searchHint = document.querySelector('[data-search-hint]')
  let searchIndex = []

  const loadSearchIndex = async () => {
    if (searchIndex.length) return searchIndex
    const response = await fetch(assetUrl('search-index.json'))
    if (!response.ok) throw new Error(`Search index failed: ${response.status}`)
    searchIndex = await response.json()
    return searchIndex
  }

  const escapeText = (value) => String(value)
    .replaceAll('&', '&amp;')
    .replaceAll('<', '&lt;')
    .replaceAll('>', '&gt;')
    .replaceAll('"', '&quot;')

  const renderSearch = async (query) => {
    if (!searchResults || !searchHint) return
    const normalized = query.trim().toLowerCase()
    searchHint.hidden = normalized.length > 0
    if (!normalized) {
      searchResults.innerHTML = ''
      return
    }

    try {
      const index = await loadSearchIndex()
      const typeOrder = ['事件', '概念', '公司', '模型', '主题', '产业链']
      const matches = index
        .map((item) => {
          const title = `${item.title} ${translations?.[item.title] || ''}`.toLowerCase()
          const detail = `${item.description} ${item.keywords || ''} ${item.type} ${translations?.[item.description] || ''} ${translations?.[item.type] || ''}`.toLowerCase()
          let score = 0
          if (title === normalized) score = 100
          else if (title.startsWith(normalized)) score = 70
          else if (title.includes(normalized)) score = 50
          else if (detail.includes(normalized)) score = 20
          return { ...item, score }
        })
        .filter((item) => item.score > 0)
        .sort((left, right) => right.score - left.score || left.title.localeCompare(right.title, 'zh-CN'))

      const grouped = typeOrder
        .map((type) => [type, matches.filter((item) => item.type === type).slice(0, 3)])
        .filter(([, items]) => items.length)

      searchResults.innerHTML = grouped.length
        ? grouped.map(([type, items]) => `<section class="search-result-group">
          <h2>${escapeText(type)}</h2>
          ${items.map((item) => `
            <a class="search-result" href="${escapeText(item.url)}">
              <div><b>${escapeText(item.title)}</b><small>${escapeText(item.description)}</small></div>
              <svg aria-hidden="true" viewBox="0 0 20 20" fill="none"><path d="M4 10h11M11 5.5 15.5 10 11 14.5" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/></svg>
            </a>`).join('')}
        </section>`).join('')
        : '<div class="search-empty">没有找到对应内容，试试更短的关键词。</div>'
      if (root.dataset.lang === 'en' && translations) translateTree(searchResults, translations, 'en')
    } catch {
      searchResults.innerHTML = '<div class="search-empty">搜索索引暂时不可用。</div>'
      if (root.dataset.lang === 'en' && translations) translateTree(searchResults, translations, 'en')
    }
  }

  const openSearch = () => {
    if (!dialog) return
    dialog.showModal()
    requestAnimationFrame(() => searchInput?.focus())
    loadSearchIndex().catch(() => {})
  }

  const closeSearch = () => dialog?.close()
  document.querySelectorAll('[data-search-open]').forEach((button) => button.addEventListener('click', openSearch))
  document.querySelector('[data-search-close]')?.addEventListener('click', closeSearch)
  searchInput?.addEventListener('input', (event) => renderSearch(event.target.value))
  document.querySelectorAll('[data-search-suggestion]').forEach((button) => {
    button.addEventListener('click', () => {
      if (!searchInput) return
      searchInput.value = button.dataset.searchSuggestion || ''
      renderSearch(searchInput.value)
      searchInput.focus()
    })
  })
  dialog?.addEventListener('click', (event) => {
    if (event.target === dialog) closeSearch()
  })
  document.addEventListener('keydown', (event) => {
    if ((event.metaKey || event.ctrlKey) && event.key.toLowerCase() === 'k') {
      event.preventDefault()
      dialog?.open ? closeSearch() : openSearch()
    }
  })

  const timelineCards = [...document.querySelectorAll('[data-event-card]')]
  const timelineRoot = document.querySelector('[data-timeline-root]')
  const timelineStream = document.querySelector('[data-timeline-stream]')
  const timelineGroups = [...document.querySelectorAll('[data-year-group]')]
  const overviewEvents = [...document.querySelectorAll('[data-overview-event]')]
  const timelineSearch = document.querySelector('[data-timeline-search]')
  const topicFilter = document.querySelector('[data-topic-filter]')
  const resultCount = document.querySelector('[data-result-count]')
  const emptyState = document.querySelector('[data-empty-state]')
  const levelButtons = [...document.querySelectorAll('[data-level]')]
  const resetButtons = [...document.querySelectorAll('[data-reset-filters]')]
  const orderToggle = document.querySelector('[data-timeline-order-toggle]')
  const startFromBeginning = document.querySelector('[data-start-from-beginning]')
  let activeLevel = 'all'

  const setTimelineOrder = (order) => {
    if (!timelineRoot || !timelineStream) return
    const ascending = order === 'asc'
    timelineRoot.dataset.timelineOrder = ascending ? 'asc' : 'desc'
    const groups = [...timelineGroups].sort((left, right) => {
      const difference = Number(left.dataset.year) - Number(right.dataset.year)
      return ascending ? difference : -difference
    })
    groups.forEach((group) => {
      const rows = [...group.querySelectorAll('[data-event-card]')].sort((left, right) => {
        const difference = String(left.dataset.date).localeCompare(String(right.dataset.date))
        return ascending ? difference : -difference
      })
      const container = group.querySelector('.timeline-year-events')
      rows.forEach((row) => container?.append(row))
      timelineStream.append(group)
    })
    if (orderToggle) {
      const zh = ascending ? '正序 · 旧→新' : '倒序 · 新→旧'
      const en = ascending ? 'Oldest first' : 'Newest first'
      orderToggle.innerHTML = `<span data-localized data-zh="${zh}" data-en="${en}">${root.dataset.lang === 'en' ? en : zh}</span>`
      orderToggle.setAttribute('aria-label', root.dataset.lang === 'en' ? en : zh)
    }
    scheduleTimelineProgress()
  }

  orderToggle?.addEventListener('click', () => {
    setTimelineOrder(timelineRoot?.dataset.timelineOrder === 'asc' ? 'desc' : 'asc')
  })
  startFromBeginning?.addEventListener('click', () => {
    setTimelineOrder('asc')
    timelineStream?.scrollIntoView({ behavior: 'smooth', block: 'start' })
  })

  const syncTimelineProgress = () => {
    if (!timelineRoot || !timelineStream) return
    const anchor = Math.min(window.innerHeight * .42, 360)
    const streamRect = timelineStream.getBoundingClientRect()
    const verticalProgress = Math.max(0, Math.min(1, (anchor - streamRect.top) / Math.max(streamRect.height, 1)))
    timelineRoot.style.setProperty('--timeline-progress', String(verticalProgress))

    const visibleGroups = [...timelineStream.querySelectorAll('[data-year-group]')].filter((group) => !group.hidden)
    let currentGroup = visibleGroups[0]
    visibleGroups.forEach((group) => {
      if (group.getBoundingClientRect().top <= anchor) currentGroup = group
    })
    timelineGroups.forEach((group) => group.classList.toggle('is-current', group === currentGroup))

    if (!currentGroup) {
      timelineRoot.style.setProperty('--chronology-progress', '0')
      return
    }
    const startYear = Number(timelineRoot.dataset.startYear)
    const endYear = Number(timelineRoot.dataset.endYear)
    const currentYear = Number(currentGroup.dataset.year)
    const chronologyProgress = endYear === startYear ? 0 : (currentYear - startYear) / (endYear - startYear)
    timelineRoot.style.setProperty('--chronology-progress', String(Math.max(0, Math.min(1, chronologyProgress))))
  }

  let timelineProgressFrame = 0
  const scheduleTimelineProgress = () => {
    if (timelineProgressFrame) return
    timelineProgressFrame = requestAnimationFrame(() => {
      timelineProgressFrame = 0
      syncTimelineProgress()
    })
  }

  const syncTimeline = () => {
    const query = timelineSearch?.value.trim().toLowerCase() || ''
    const topic = topicFilter?.value || 'all'
    let visible = 0

    timelineCards.forEach((card) => {
      const levelMatches = activeLevel === 'all' || card.dataset.level === activeLevel
      const topicMatches = topic === 'all' || card.dataset.topics?.split(' ').includes(topic)
      const searchMatches = !query || card.dataset.search?.includes(query)
      const show = levelMatches && topicMatches && searchMatches
      card.hidden = !show
      if (show) visible += 1
    })

    timelineGroups.forEach((group) => {
      group.hidden = !group.querySelector('[data-event-card]:not([hidden])')
    })
    overviewEvents.forEach((dot) => {
      const card = timelineCards.find((item) => item.dataset.eventId === dot.dataset.overviewEvent)
      dot.hidden = !card || card.hidden
    })

    const hasFilters = Boolean(query) || topic !== 'all' || activeLevel !== 'all'
    resetButtons.forEach((button) => { button.hidden = !hasFilters })
    timelineRoot?.classList.toggle('is-filtered', hasFilters)
    if (resultCount) resultCount.textContent = root.dataset.lang === 'en'
      ? `${visible} ${visible === 1 ? 'event' : 'events'}`
      : `${visible} 个事件`
    if (emptyState) emptyState.hidden = visible > 0
    scheduleTimelineProgress()
  }

  levelButtons.forEach((button) => {
    button.addEventListener('click', () => {
      activeLevel = button.dataset.level || 'all'
      levelButtons.forEach((item) => item.setAttribute('aria-pressed', String(item === button)))
      syncTimeline()
    })
  })
  timelineSearch?.addEventListener('input', syncTimeline)
  topicFilter?.addEventListener('change', syncTimeline)
  resetButtons.forEach((button) => button.addEventListener('click', () => {
      activeLevel = 'all'
      if (timelineSearch) timelineSearch.value = ''
      if (topicFilter) topicFilter.value = 'all'
      levelButtons.forEach((item) => item.setAttribute('aria-pressed', String(item.dataset.level === 'all')))
      syncTimeline()
      timelineSearch?.focus()
    }))

  if (timelineRoot) {
    window.addEventListener('scroll', scheduleTimelineProgress, { passive: true })
    window.addEventListener('resize', scheduleTimelineProgress)
    syncTimeline()
    setTimelineOrder(timelineRoot.dataset.timelineOrder || 'desc')
    scheduleTimelineProgress()
  }

  const indexItems = [...document.querySelectorAll('[data-index-item]')]
  const indexSearch = document.querySelector('[data-index-search]')
  const indexButtons = [...document.querySelectorAll('[data-index-filter] [data-value]')]
  let activeKind = 'all'

  const syncIndex = () => {
    const query = indexSearch?.value.trim().toLowerCase() || ''
    indexItems.forEach((item) => {
      const kindMatches = activeKind === 'all' || item.dataset.kind === activeKind
      const searchMatches = !query || item.dataset.search?.includes(query)
      item.hidden = !(kindMatches && searchMatches)
    })
  }

  indexButtons.forEach((button) => {
    button.addEventListener('click', () => {
      activeKind = button.dataset.value || 'all'
      indexButtons.forEach((item) => item.setAttribute('aria-pressed', String(item === button)))
      syncIndex()
    })
  })
  indexSearch?.addEventListener('input', syncIndex)
})()
