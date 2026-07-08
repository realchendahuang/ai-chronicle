import { createFileRoute, Link } from '@tanstack/react-router'
import { getCompanies } from '~/lib/data'

export const Route = createFileRoute('/companies')({
  loader: async () => {
    const companies = await getCompanies()
    return { companies }
  },
  component: CompaniesPage,
})

function CompaniesPage() {
  const { companies } = Route.useLoaderData()

  return (
    <div className="min-h-screen pt-20 pb-16">
      <div className="max-w-5xl mx-auto px-4">
        <div className="mb-10 text-center">
          <h1 className="text-4xl font-bold text-white mb-3">行业玩家</h1>
          <p className="text-chronicle-muted">了解塑造 AI 行业的关键公司</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {companies.map((c) => (
            <div
              key={c.id}
              className="p-6 rounded-lg border border-chronicle-border bg-chronicle-surface/50 hover:bg-chronicle-surface transition-all"
            >
              <h3 className="font-semibold text-white text-lg mb-2">{c.name}</h3>
              <p className="text-sm text-chronicle-muted mb-3">{c.positioning}</p>
              <div className="flex items-center gap-2 text-xs text-chronicle-muted mb-3">
                <span>{c.region === 'cn' ? '🇨🇳 中国' : c.region === 'us' ? '🇺🇸 美国' : '🌍 全球'}</span>
                <span>· 成立于 {c.founded}</span>
              </div>
              {c.keyTopics.length > 0 && (
                <div className="flex flex-wrap gap-1">
                  {c.keyTopics.map((t) => (
                    <span key={t} className="text-[10px] px-1.5 py-0.5 rounded bg-chronicle-surface border border-chronicle-border text-chronicle-muted">
                      {t}
                    </span>
                  ))}
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}
