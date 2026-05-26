import { CollectionConfig } from 'payload'
import { lexicalEditor } from '@payloadcms/richtext-lexical'

export const Posts: CollectionConfig = {
  slug: 'posts',
  admin: {
    useAsTitle: 'title', // Uses the title field for the entry name in the UI
  },
  fields: [
    {
      name: 'title',
      type: 'text',
      required: true,
    },
    {
      name: 'content',
      type: 'richText', // This tells Payload it's a rich text field
      editor: lexicalEditor({}),
      // The lexicalEditor will inherit from your global configuration
    },
  ],
}
