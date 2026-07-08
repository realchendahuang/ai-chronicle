import { Link } from '@tanstack/react-router'

const navItems = [
  { to: '/', label: '首页' },
  { to: '/timeline', label: '时间轴' },
  { to: '/concepts', label: '概念' },
  { to: '/companies', label: '公司' },
]

export function NavBar() {
  return (
    <nav className="fixed top-0 left-0 right-0 z-50 border-b border-chronicle-border bg-chronicle-bg/80 backdrop-blur-md">
      <div className="max-w-6xl mx-auto px-4 h-14 flex items-center justify-between">
        <Link to="/" className="text-lg font-bold tracking-tight text-white hover:text-chronicle-accent-light transition-colors">
          AI Chronicle
        </Link>
        <div className="flex items-center gap-1">
          {navItems.map((item) => (
            <Link
              key={item.to}
              to={item.to}
              className="px-3 py-1.5 text-sm text-chronicle-muted hover:text-white transition-colors rounded-md hover:bg-chronicle-surface"
              activeProps={{ className: 'text-white bg-chronicle-surface' }}
            >
              {item.label}
            </Link>
          ))}
        </div>
      </div>
    </nav>
  )
}

export function Footer() {
  return (
    <footer className="border-t border-chronicle-border py-8 text-center text-sm text-chronicle-muted">
      <p>AI Chronicle — AI 行业编年史 · 用关键事件理解 AI 的发展脉络</p>
      <p className="mt-1">© 2026 AI Chronicle</p>
    </footer>
  )
}
