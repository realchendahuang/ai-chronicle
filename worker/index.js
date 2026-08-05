const originBase = 'https://ai-chronicle-9i3.pages.dev'

export default {
  async fetch(request) {
    const url = new URL(request.url)
    const path = url.pathname

    if (path === '/ai-chronicle') {
      return Response.redirect(`${url.origin}/ai-chronicle/`, 308)
    }

    if (path.startsWith('/ai-chronicle/')) {
      const targetUrl = new URL(path + url.search, originBase)

      try {
        // Bypass any cached copy: Pages HTML must always reflect the latest deployment.
        const originResponse = await fetch(new Request(targetUrl, request), {
          cache: 'no-store',
        })
        const headers = new Headers(originResponse.headers)
        const isHtml = (originResponse.headers.get('content-type') || '').includes('text/html')
        if (isHtml) {
          // Never let edge caches serve stale HTML; assets keep their own cache rules.
          headers.set('cache-control', 'no-cache, must-revalidate')
        }
        return new Response(originResponse.body, {
          status: originResponse.status,
          statusText: originResponse.statusText,
          headers,
        })
      } catch (error) {
        console.error(JSON.stringify({
          message: 'AI Chronicle origin fetch failed',
          path,
          error: error instanceof Error ? error.message : String(error),
        }))
        return new Response('AI Chronicle is temporarily unavailable.', {
          status: 502,
          headers: { 'content-type': 'text/plain; charset=utf-8' },
        })
      }
    }

    return fetch(request)
  },
}
