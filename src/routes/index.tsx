import { createFileRoute, Link } from '@tanstack/react-router'
import { getEvents } from '~/lib/data'

export const Route = createFileRoute('/')({
  loader: async () => {
    const events = await getEvents()
    return { events }
  },
  component: HomePage,
})

function HomePage() {
  const { events } = Route.useLoaderData()

  const sEvents = events.filter((e) => e.importance === 'S')
  const latest = events.slice(-3).reverse()

  return (
    <div className="min-h-screen">
      {/* Hero */}
      <section className="pt-32 pb-20 px-4 text-center relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-chronicle-accent/5 to-transparent pointer-events-none" />
        <div className="max-w-3xl mx-auto relative">
          <h1 className="text-5xl md:text-6xl font-bold tracking-tight text-white mb-4">
            AI 行业编年史
          </h1>
          <p className="text-xl text-chronicle-muted mb-3">
            用关键事件理解 AI 的发展脉络
          </p>
          <p className="text-sm text-chronicle-muted/70 max-w-lg mx-auto mb-10">
            从 Transformer、ChatGPT、Copilot 到 Claude Code、Agent 和开源模型，<br />
            按时间线翻阅 AI 行业的关键事件，并学习背后的核心概念。
          </p>
          <div className="flex items-center justify-center gap-3">
            <Link
              to="/timeline"
              className="px-6 py-2.5 bg-chronicle-accent hover:bg-chronicle-accent-light text-white font-medium rounded-lg transition-colors"
            >
              进入时间轴
            </Link>
            <Link
              to="/concepts"
              className="px-6 py-2.5 border border-chronicle-border hover:border-chronicle-accent text-chronicle-text rounded-lg transition-colors"
            >
              学习概念
            </Link>
          </div>
        </div>
      </section>

      {/* S 级事件精选 */}
      <section className="max-w-5xl mx-auto px-4 py-16">
        <h2 className="text-2xl font-bold text-white mb-8 text-center">关键节点</h2>
        <div className="grid grid-cols-2 md:grid-cols-5 gap-3">
          {sEvents.map((e) => (
            <Link
              key={e.id}
              to="/events/$slug"
              params={{ slug: e.slug }}
              className="p-4 rounded-lg border border-chronicle-border bg-chronicle-surface/30 hover:bg-chronicle-surface hover:border-yellow-500/30 transition-all text-center group"
            >
              <div className="text-xs text-chronicle-muted mb-1">{e.date}</div>
              <div className="font-medium text-white text-sm group-hover:text-yellow-400 transition-colors line-clamp-2">
                {e.title}
              </div>
            </Link>
          ))}
        </div>
      </section>

      {/* Latest updates */}
      <section className="max-w-5xl mx-auto px-4 py-16">
        <h2 className="text-2xl font-bold text-white mb-8 text-center">最近事件</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          {latest.map((e) => (
            <Link
              key={e.id}
              to="/events/$slug"
              params={{ slug: e.slug }}
              className="p-5 rounded-lg border border-chronicle-border bg-chronicle-surface/50 hover:bg-chronicle-surface hover:border-chronicle-accent/30 transition-all group"
            >
              <div className="text-xs text-chronicle-muted mb-2">{e.date}</div>
              <h3 className="font-semibold text-white mb-2 group-hover:text-chronicle-accent-light transition-colors">
                {e.title}
              </h3>
              <p className="text-sm text-chronicle-muted line-clamp-2">{e.summary}</p>
            </Link>
          ))}
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-chronicle-border py-12 text-center text-sm text-chronicle-muted">
        <p className="text-white font-medium mb-1">AI Chronicle — AI 行业编年史</p>
        <p>用关键事件理解 AI 的发展脉络</p>
      </footer>
    </div>
  )
}
