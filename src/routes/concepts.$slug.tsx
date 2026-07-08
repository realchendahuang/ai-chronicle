import { createFileRoute, Link } from '@tanstack/react-router'
import { getConceptBySlug, getEvents, getConcepts } from '~/lib/data'

export const Route = createFileRoute('/concepts/$slug')({
  loader: async ({ params }) => {
    const concept = await getConceptBySlug(params.slug)
    const allEvents = await getEvents()
    const allConcepts = await getConcepts()
    if (!concept) throw new Error('Concept not found')
    return { concept, allEvents, allConcepts }
  },
  component: ConceptDetailPage,
})

function ConceptDetailPage() {
  const { concept, allEvents, allConcepts } = Route.useLoaderData()

  const relatedEvents = allEvents.filter((e) => concept.relatedEvents.includes(e.id))
  const relatedConcepts = allConcepts.filter((c) => concept.relatedConcepts.includes(c.id))

  return (
    <div className="min-h-screen pt-20 pb-16">
      <div className="max-w-3xl mx-auto px-4">
        <div className="mb-10">
          <h1 className="text-4xl font-bold text-white mb-2">{concept.title}</h1>
          {concept.fullName && (
            <p className="text-lg text-chronicle-muted">{concept.fullName}</p>
          )}
        </div>

        <div className="p-5 rounded-lg border border-chronicle-accent/30 bg-chronicle-accent/5 mb-8">
          <p className="text-white font-medium">{concept.oneLiner}</p>
        </div>

        {concept.beginnerExplanation && (
          <div className="mb-8">
            <h2 className="text-lg font-semibold text-white mb-2">新人解释</h2>
            <p className="text-chronicle-text leading-relaxed">{concept.beginnerExplanation}</p>
          </div>
        )}

        {concept.whyItMatters && (
          <div className="mb-8">
            <h2 className="text-lg font-semibold text-white mb-2">为什么重要</h2>
            <p className="text-chronicle-text leading-relaxed">{concept.whyItMatters}</p>
          </div>
        )}

        {concept.commonMisunderstandings.length > 0 && (
          <div className="mb-8">
            <h2 className="text-lg font-semibold text-white mb-2">常见误解</h2>
            <ul className="space-y-2">
              {concept.commonMisunderstandings.map((m, i) => (
                <li key={i} className="text-sm text-chronicle-muted pl-4 border-l-2 border-chronicle-accent/30">⚠️ {m}</li>
              ))}
            </ul>
          </div>
        )}

        {relatedEvents.length > 0 && (
          <div className="mb-8">
            <h2 className="text-lg font-semibold text-white mb-3">相关事件</h2>
            <div className="grid grid-cols-2 gap-3">
              {relatedEvents.map((re) => (
                <Link
                  key={re.id}
                  to="/events/$slug"
                  params={{ slug: re.slug }}
                  className="p-3 rounded-lg border border-chronicle-border bg-chronicle-surface/30 hover:border-chronicle-accent/30 hover:bg-chronicle-surface transition-all"
                >
                  <div className="text-xs text-chronicle-muted mb-1">{re.date}</div>
                  <div className="text-sm text-white font-medium">{re.title}</div>
                </Link>
              ))}
            </div>
          </div>
        )}

        {relatedConcepts.length > 0 && (
          <div className="mb-8">
            <h2 className="text-lg font-semibold text-white mb-3">相关概念</h2>
            <div className="flex flex-wrap gap-2">
              {relatedConcepts.map((rc) => (
                <Link
                  key={rc.id}
                  to="/concepts/$slug"
                  params={{ slug: rc.slug }}
                  className="concept-tag"
                >
                  {rc.title}
                </Link>
              ))}
            </div>
          </div>
        )}
      </div>
    </div>
  )
}
