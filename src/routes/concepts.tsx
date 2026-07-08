import { createFileRoute, Link } from '@tanstack/react-router'
import { getConcepts, getEvents } from '~/lib/data'
import { ConceptCard } from '~/components/ConceptCard'
import { useState } from 'react'

export const Route = createFileRoute('/concepts')({
  loader: async () => {
    const concepts = await getConcepts()
    const events = await getEvents()
    return { concepts, events }
  },
  component: ConceptsPage,
})

const difficultyFilters = ['全部', 'beginner', 'intermediate', 'advanced', 'evaluation', 'engineering']

const difficultyLabels: Record<string, string> = {
  '全部': '全部',
  beginner: '入门',
  intermediate: '进阶',
  advanced: '技术',
  evaluation: '评测',
  engineering: '工程',
}

function ConceptsPage() {
  const { concepts } = Route.useLoaderData()
  const [filter, setFilter] = useState('全部')

  const filtered = filter === '全部' ? concepts : concepts.filter((c) => c.difficulty === filter)

  return (
    <div className="min-h-screen pt-20 pb-16">
      <div className="max-w-5xl mx-auto px-4">
        <div className="mb-10 text-center">
          <h1 className="text-4xl font-bold text-white mb-3">概念词典</h1>
          <p className="text-chronicle-muted">理解 AI 世界的关键概念</p>
        </div>

        <div className="flex items-center gap-2 mb-8 justify-center">
          {difficultyFilters.map((opt) => (
            <button
              key={opt}
              onClick={() => setFilter(opt)}
              className={`px-3 py-1.5 text-xs rounded-full border transition-colors ${
                filter === opt
                  ? 'bg-chronicle-accent text-white border-chronicle-accent'
                  : 'border-chronicle-border text-chronicle-muted hover:text-white hover:border-chronicle-accent/50'
              }`}
            >
              {difficultyLabels[opt]}
            </button>
          ))}
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {filtered.map((c) => (
            <ConceptCard key={c.id} concept={c} />
          ))}
        </div>
      </div>
    </div>
  )
}
