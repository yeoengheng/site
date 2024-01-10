import {defineConfig} from 'sanity'
import {deskTool} from 'sanity/desk'
// import {visionTool} from '@sanity/vision'
import {schemaTypes} from './schemas'

export default defineConfig({
  name: 'default',
  title: 'Site',

  projectId: 'f7r4njj1',
  dataset: 'production',
  basePath:'/studio',
  plugins: [deskTool()],

  schema: {
    types: schemaTypes,
  },
})
