import { events as rawEvents, concepts as rawConcepts, companies as rawCompanies } from '../.velite'
import type { Event, Concept, Company } from '../.velite/types'

// Cast from velite types to our types
const _events: Event[] = rawEvents as unknown as Event[]
const _concepts: Concept[] = rawConcepts as unknown as Concept[]
const _companies: Company[] = rawCompanies as unknown as Company[]

export type { Event, Concept, Company }

export async function getEvents(): Promise<Event[]> {
  return _events
}

export async function getEventBySlug(slug: string): Promise<Event | undefined> {
  return _events.find((e) => e.slug === slug)
}

export async function getConcepts(): Promise<Concept[]> {
  return _concepts
}

export async function getConceptBySlug(slug: string): Promise<Concept | undefined> {
  return _concepts.find((c) => c.slug === slug)
}

export async function getCompanies(): Promise<Company[]> {
  return _companies
}

export async function getCompanyBySlug(slug: string): Promise<Company | undefined> {
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
