import type { Event } from '~/lib/data'
import { Link } from '@tanstack/react-router'
import { formatDate, getImportanceColor, getImportanceLabel } from '~/lib/data'

export function EventCard({ event }: { event: Event }) {
  return (
    <Link
      to="/events/$slug"
      params={{ slug: event.slug }}
      className="block group"
    >
      <div className="relative pl-8 pb-10 border-l-2 border-chronicle-border group-last:border-transparent">
        {/* Timeline dot */}
        <div className="absolute -left-[5px] top-1.5 w-2.5 h-2.5 rounded-full bg-chronicle-accent ring-4 ring-chronicle-bg" />

        {/* Date */}
        <span className="text-xs text-chronicle-muted mb-1 block">
          {formatDate(event.date, event.datePrecision)}
        </span>

        {/* Content card */}
        <div className="p-4 rounded-lg border border-chronicle-border bg-chronicle-surface/50 group-hover:bg-chronicle-surface group-hover:border-chronicle-accent/30 transition-all duration-200">
          <div className="flex items-start justify-between gap-3 mb-2">
            <h3 className="font-semibold text-white group-hover:text-chronicle-accent-light transition-colors">
              {event.title}
            </h3>
            <span className={`shrink-0 text-[10px] px-1.5 py-0.5 rounded border ${getImportanceColor(event.importance)}`}>
              {event.importance}
            </span>
          </div>
          <p className="text-sm text-chronicle-muted line-clamp-2">{event.summary}</p>

          {/* Concepts */}
          {event.concepts.length > 0 && (
            <div className="flex flex-wrap gap-1 mt-3">
              {event.concepts.slice(0, 5).map((c) => (
                <span key={c} className="concept-tag text-[11px]">{c}</span>
              ))}
            </div>
          )}
        </div>
      </div>
    </Link>
  )
}

export function EventGrid({ events }: { events: Event[] }) {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
      {events.map((event) => (
        <Link
          key={event.id}
          to="/events/$slug"
          params={{ slug: event.slug }}
          className="p-5 rounded-lg border border-chronicle-border bg-chronicle-surface/50 hover:bg-chronicle-surface hover:border-chronicle-accent/30 transition-all duration-200 group"
        >
          <div className="flex items-center gap-2 mb-2">
            <span className={`text-[10px] px-1.5 py-0.5 rounded border ${getImportanceColor(event.importance)}`}>
              {event.importance}
            </span>
            <span className="text-xs text-chronicle-muted">{formatDate(event.date, event.datePrecision)}</span>
          </div>
          <h3 className="font-semibold text-white mb-1.5 group-hover:text-chronicle-accent-light transition-colors">
            {event.title}
          </h3>
          <p className="text-sm text-chronicle-muted line-clamp-2">{event.summary}</p>
        </Link>
      ))}
    </div>
  )
}
