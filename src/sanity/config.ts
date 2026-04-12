import { defineConfig } from 'sanity'
import { structureTool } from 'sanity/structure'
import { visionTool } from '@sanity/vision'
import { schema } from './schemaTypes'
import { projectId, dataset, apiVersion } from './env'

export default defineConfig({
  name: 'gildasattachi-studio',
  title: 'Gildas Attachi — Studio',
  basePath: '/studio',
  projectId,
  dataset,
  apiVersion,
  schema,
  plugins: [
    structureTool(),
    visionTool(),
  ],
})
