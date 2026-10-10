import { defineCollection, z } from 'astro:content';
import { glob } from 'astro/loaders';
const projects = defineCollection({
  loader: glob({ pattern: '**/*.md', base: './src/content/projects' }),
  schema: z.object({
    title: z.string(), shortTitle: z.string().optional(), year: z.number(), status: z.enum(['Completed','Ongoing','Planned']),
    type: z.string().default('Project'), summary: z.string(), tags: z.array(z.string()).default([]),
    image: z.string().optional(), github: z.string().url().optional(), report: z.string().url().optional(), featured: z.boolean().default(false)
  })
});
const notes = defineCollection({
  loader: glob({ pattern: '**/!(README).md', base: './src/content/notes' }),
  schema: z.object({ title:z.string(), date:z.coerce.date(), description:z.string(), tags:z.array(z.string()).default([]), draft:z.boolean().default(false) })
});
export const collections = { projects, notes };
