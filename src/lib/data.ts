import type { Event, Concept, Company } from '../.velite/types'
import eventsData from '../.velite/events.json'
import conceptsData from '../.velite/concepts.json'
import companiesData from '../.velite/companies.json'

const _events: Event[] = eventsData as unknown as Event[]
const _concepts: Concept[] = conceptsData as unknown as Concept[]
const _companies: Company[] = companiesData as unknown as Company[]

export type { Event, Concept, Company }

export function getEvents(): Event[] {
  return _events
}

export function getEventBySlug(slug: string): Event | undefined {
  return _events.find((e) => e.slug === slug)
}

export function getConcepts(): Concept[] {
  return _concepts
}

export function getConceptBySlug(slug: string): Concept | undefined {
  return _concepts.find((c) => c.slug === slug)
}

export function getCompanies(): Company[] {
  return _companies
}

export function getCompanyBySlug(slug: string): Company | undefined {
  return _companies.find((c) => c.slug === slug)
}

export function getImportanceLabel(importance: string): string {
  const labels: Record<string, string> = { S: 'S 级 · 范式级', A: 'A 级 · 行业级', B: 'B 级 · 领域级', C: 'C 级 · 补充' }
  return labels[importance] || importance
}

export function getImportanceColor(importance: string): string {
  const colors: Record<string, string> = { S: 'bg-yellow-500/20 text-yellow-400 border-yellow-500/30', A: 'bg-indigo-500/20 text-indigo-400 border-indigo-500/30', B: 'bg-green-500/20 text-green-400 border-green-500/30', C: 'bg-slate-500/20 text-slate-400 border-slate-500/30' }
  return colors[importance] || colors.B
}

export function formatDate(dateStr: string, precision: string): string {
  if (precision === 'year') return dateStr
  if (precision === 'month') {
    const [y, m] = dateStr.split('-')
    return `${y} 年 ${parseInt(m)} 月`
  }
  const d = new Date(dateStr)
  return `${d.getFullYear()} 年 ${d.getMonth() + 1} 月 ${d.getDate()} 日`
}
