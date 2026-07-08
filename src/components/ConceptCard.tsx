import type { Concept } from '~/lib/data'
import { Link } from '@tanstack/react-router'

const difficultyLabels: Record<string, { label: string; color: string }> = {
  beginner: { label: '入门', color: 'bg-green-500/15 text-green-400 border-green-500/30' },
  intermediate: { label: '进阶', color: 'bg-blue-500/15 text-blue-400 border-blue-500/30' },
  advanced: { label: '技术', color: 'bg-purple-500/15 text-purple-400 border-purple-500/30' },
  evaluation: { label: '评测', color: 'bg-orange-500/15 text-orange-400 border-orange-500/30' },
  engineering: { label: '工程', color: 'bg-cyan-500/15 text-cyan-400 border-cyan-500/30' },
}

export function ConceptCard({ concept }: { concept: Concept }) {
  const diff = difficultyLabels[concept.difficulty] || difficultyLabels.intermediate

  return (
    <Link
      to="/concepts/$slug"
      params={{ slug: concept.slug }}
      className="p-5 rounded-lg border border-chronicle-border bg-chronicle-surface/50 hover:bg-chronicle-surface hover:border-chronicle-accent/30 transition-all duration-200 group"
    >
      <div className="flex items-center justify-between mb-2">
        <h3 className="font-semibold text-white group-hover:text-chronicle-accent-light transition-colors">
          {concept.title}
        </h3>
        <span className={`text-[10px] px-1.5 py-0.5 rounded border ${diff.color}`}>
          {diff.label}
        </span>
      </div>
      {concept.fullName && (
        <p className="text-xs text-chronicle-muted mb-1.5">{concept.fullName}</p>
      )}
      <p className="text-sm text-chronicle-muted line-clamp-2">{concept.oneLiner}</p>
    </Link>
  )
}
