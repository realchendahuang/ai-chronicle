import { createFileRoute } from '@tanstack/react-router'
import { getEvents } from '~/lib/data'
import { EventCard } from '~/components/EventCard'
import { useState } from 'react'

export const Route = createFileRoute('/timeline')({
  loader: async () => {
    const events = await getEvents()
    return { events: events.sort((a, b) => new Date(a.date).getTime() - new Date(b.date).getTime()) }
  },
  component: TimelinePage,
})

const importanceOptions = ['全部', 'S', 'A', 'B', 'C']

function TimelinePage() {
  const { events } = Route.useLoaderData()
  const [filter, setFilter] = useState('全部')

  const filtered = filter === '全部' ? events : events.filter((e) => e.importance === filter)

  // Group by year
  const grouped: Record<string, typeof filtered> = {}
  filtered.forEach((e) => {
    const year = e.date.split('-')[0]
    if (!grouped[year]) grouped[year] = []
    grouped[year].push(e)
  })
  const years = Object.keys(grouped).sort((a, b) => parseInt(a) - parseInt(b))

  return (
    <div className="min-h-screen pt-20 pb-16">
      <div className="max-w-4xl mx-auto px-4">
        {/* Header */}
        <div className="mb-12 text-center">
          <h1 className="text-4xl font-bold text-white mb-3">AI 编年史</h1>
          <p className="text-chronicle-muted">从 1956 年达特茅斯会议至今</p>
        </div>

        {/* Filters */}
        <div className="flex items-center gap-2 mb-10 justify-center">
          {importanceOptions.map((opt) => (
            <button
              key={opt}
              onClick={() => setFilter(opt)}
              className={`px-3 py-1.5 text-xs rounded-full border transition-colors ${
                filter === opt
                  ? 'bg-chronicle-accent text-white border-chronicle-accent'
                  : 'border-chronicle-border text-chronicle-muted hover:text-white hover:border-chronicle-accent/50'
              }`}
            >
              {opt === '全部' ? '全部' : `${opt} 级`}
            </button>
          ))}
        </div>

        {/* Timeline */}
        <div className="ml-4">
          {years.map((year) => (
            <div key={year} className="mb-2">
              <div className="sticky top-20 z-10 mb-4">
                <span className="text-2xl font-bold text-white/80">{year}</span>
              </div>
              <div>
                {grouped[year].map((event) => (
                  <EventCard key={event.id} event={event} />
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}
