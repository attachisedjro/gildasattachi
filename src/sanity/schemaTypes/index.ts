import { type SchemaTypeDefinition } from 'sanity'
import { article } from './article'
import { livre } from './livre'

export const schema: { types: SchemaTypeDefinition[] } = {
  types: [article, livre],
}
