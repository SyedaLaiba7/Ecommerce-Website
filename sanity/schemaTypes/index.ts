import { type SchemaTypeDefinition } from 'sanity'
import product from './product'
import category from './category'
import heroimages from './heroimages'

export const schema: { types: SchemaTypeDefinition[] } = {
  types: [product ,category ,heroimages
  ],
}
