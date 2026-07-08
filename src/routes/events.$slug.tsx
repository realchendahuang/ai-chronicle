import { createFileRoute, Link } from '@tanstack/react-router'
import { getEventBySlug, getEvents, getConcepts, formatDate, getImportanceColor, getImportanceLabel } from '~/lib/data'

export const Route = createFileRoute('/events/$slug')({
  loader: async ({ params }) => {
    const event = await getEventBySlug(params.slug)
    const allEvents = await getEvents()
    const allConcepts = await getConcepts()
    if (!event) throw new Error('Event not found')
    return { event, allEvents, allConcepts }
  },
  component: EventDetailPage,
})

function EventDetailPage() {
  const { event, allEvents, allConcepts } = Route.useLoaderData()

  const relatedEvents = allEvents.filter((e) => event.relatedEvents.includes(e.id))
  const eventConcepts = allConcepts.filter((c) => event.concepts.includes(c.id))

  return (
    <div className="min-h-screen pt-20 pb-16">
      <div className="max-w-3xl mx-auto px-4">
        {/* Header */}
        <div className="mb-12">
          <div className="flex items-center gap-3 mb-3">
            <span className={`text-xs px-2 py-0.5 rounded border ${getImportanceColor(event.importance)}`}>
              {getImportanceLabel(event.importance)}
            </span>
            <span className="text-sm text-chronicle-muted">
              {formatDate(event.date, event.datePrecision)}
            </span>
            {event.eventType.map((t) => (
              <span key={t} className="text-xs text-chronicle-muted bg-chronicle-surface px-2 py-0.5 rounded">{t}</span>
            ))}
          </div>
          <h1 className="text-4xl font-bold text-white mb-3">{event.title}</h1>
          {event.subtitle && (
            <p className="text-lg text-chronicle-muted">{event.subtitle}</p>
          )}
        </div>

        {/* Summary box */}
        <div className="p-5 rounded-lg border border-chronicle-accent/30 bg-chronicle-accent/5 mb-10">
          <p className="text-white font-medium">{event.summary}</p>
        </div>

        {/* Concepts */}
        {eventConcepts.length > 0 && (
          <div className="mb-10">
            <h2 className="text-lg font-semibold text-white mb-3">涉及概念</h2>
            <div className="flex flex-wrap gap-2">
              {eventConcepts.map((c) => (
                <Link
                  key={c.id}
                  to="/concepts/$slug"
                  params={{ slug: c.slug }}
                  className="concept-tag"
                >
                  {c.title}
                </Link>
              ))}
            </div>
          </div>
        )}

        {/* Before & After */}
        {event.beforeAfter && (
          <div className="grid grid-cols-2 gap-4 mb-10">
            <div className="p-4 rounded-lg border border-chronicle-border bg-chronicle-surface/30">
              <div className="text-xs text-chronicle-muted mb-1">在它之前</div>
              <div className="text-sm text-chronicle-text">{event.beforeAfter.before}</div>
            </div>
            <div className="p-4 rounded-lg border border-chronicle-border bg-chronicle-surface/30">
              <div className="text-xs text-chronicle-muted mb-1">在它之后</div>
              <div className="text-sm text-chronicle-text">{event.beforeAfter.after}</div>
            </div>
          </div>
        )}

        {/* Impact */}
        {event.impact && (
          <div className="mb-10">
            <h2 className="text-lg font-semibold text-white mb-3">行业影响</h2>
            <div className="grid grid-cols-2 gap-3">
              {Object.entries(event.impact).map(([key, val]) => val && (
                <div key={key} className="p-3 rounded-lg border border-chronicle-border bg-chronicle-surface/30">
                  <div className="text-xs text-chronicle-muted mb-1 capitalize">{key}</div>
                  <div className="text-sm text-chronicle-text">{val}</div>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* Related Events */}
        {relatedEvents.length > 0 && (
          <div className="mb-10">
            <h2 className="text-lg font-semibold text-white mb-3">关联事件</h2>
            <div className="grid grid-cols-2 gap-3">
              {relatedEvents.map((re) => (
                <Link
                  key={re.id}
                  to="/events/$slug"
                  params={{ slug: re.slug }}
                  className="p-3 rounded-lg border border-chronicle-border bg-chronicle-surface/30 hover:border-chronicle-accent/30 hover:bg-chronicle-surface transition-all"
                >
                  <div className="text-xs text-chronicle-muted mb-1">{formatDate(re.date, re.datePrecision)}</div>
                  <div className="text-sm text-white font-medium">{re.title}</div>
                </Link>
              ))}
            </div>
          </div>
        )}

        {/* Status */}
        <div className="text-xs text-chronicle-muted border-t border-chronicle-border pt-6 mt-10">
          事件状态：{event.status} · 最后更新：{event.date}
        </div>
      </div>
    </div>
  )
}
