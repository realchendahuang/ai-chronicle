import { defineCollection, defineConfig, s } from 'velite'
import { join, resolve } from 'node:path'

const events = defineCollection({
  name: 'Event',
  pattern: 'events/**/*.md',
  schema: s.object({
    id: s.string(),
    title: s.string(),
    subtitle: s.string().optional(),
    date: s.string(),
    datePrecision: s.enum(['year', 'month', 'day']).default('day'),
    importance: s.enum(['S', 'A', 'B', 'C']).default('B'),
    eventType: s.array(s.string()).default([]),
    topics: s.array(s.string()).default([]),
    companies: s.array(s.string()).default([]),
    models: s.array(s.string()).default([]),
    products: s.array(s.string()).default([]),
    concepts: s.array(s.string()).default([]),
    people: s.array(s.string()).default([]),
    papers: s.array(s.string()).default([]),
    summary: s.string(),
    background: s.string().optional(),
    whatHappened: s.string().optional(),
    whyImportant: s.string().optional(),
    impact: s.object({
      user: s.string().optional(),
      developer: s.string().optional(),
      industry: s.string().optional(),
      product: s.string().optional(),
    }).optional(),
    beforeAfter: s.object({
      before: s.string().optional(),
      after: s.string().optional(),
    }).optional(),
    relatedEvents: s.array(s.string()).default([]),
    sources: s.array(s.object({
      title: s.string(),
      url: s.string(),
      publisher: s.string(),
      type: s.enum(['official', 'paper', 'archive', 'report']).default('official'),
    })).default([]),
    status: s.enum(['verified', 'draft', 'controversial', 'outdated']).default('verified'),
    slug: s.string(),
  }),
})

const concepts = defineCollection({
  name: 'Concept',
  pattern: 'concepts/**/*.md',
  schema: s.object({
    id: s.string(),
    title: s.string(),
    fullName: s.string().optional(),
    difficulty: s.enum(['beginner', 'intermediate', 'advanced', 'evaluation', 'engineering']).default('intermediate'),
    oneLiner: s.string(),
    beginnerExplanation: s.string().optional(),
    technicalExplanation: s.string().optional(),
    whyItMatters: s.string().optional(),
    relatedEvents: s.array(s.string()).default([]),
    relatedConcepts: s.array(s.string()).default([]),
    commonMisunderstandings: s.array(s.string()).default([]),
    slug: s.string(),
  }),
})

const companies = defineCollection({
  name: 'Company',
  pattern: 'companies/**/*.md',
  schema: s.object({
    id: s.string(),
    name: s.string(),
    founded: s.number().optional(),
    type: s.string().default('company'),
    region: s.string().default('global'),
    positioning: s.string(),
    keyTopics: s.array(s.string()).default([]),
    keyEvents: s.array(s.string()).default([]),
    models: s.array(s.string()).default([]),
    products: s.array(s.string()).default([]),
    relatedCompanies: s.array(s.string()).default([]),
    slug: s.string(),
  }),
})

const modelFamilies = defineCollection({
  name: 'ModelFamily',
  pattern: 'model-families/**/*.md',
  schema: s.object({
    id: s.string(),
    title: s.string(),
    titleEn: s.string(),
    company: s.string(),
    description: s.string(),
    descriptionEn: s.string(),
    latestModel: s.string(),
    latestModelEn: s.string(),
    updatedAt: s.string(),
    releases: s.array(s.object({
      name: s.string(),
      date: s.string(),
      datePrecision: s.enum(['year', 'month', 'day']).default('day'),
      status: s.enum(['current', 'legacy', 'preview', 'deprecated']).default('legacy'),
      summary: s.string(),
      summaryEn: s.string(),
      source: s.string(),
    })).default([]),
    slug: s.string(),
  }),
})

export default defineConfig({
  root: resolve(process.cwd(), 'content'),
  output: {
    data: resolve(process.cwd(), '.generated'),
    assets: resolve(process.cwd(), 'public/assets'),
    base: '/assets/',
    clean: true,
    name: '[name].json',
  },
  collections: { events, concepts, companies, modelFamilies },
})
