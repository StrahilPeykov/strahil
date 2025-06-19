import { defineDocumentType, makeSource } from 'contentlayer/source-files'
import readingTime from 'reading-time'

export const CaseStudy = defineDocumentType(() => ({
  name: 'CaseStudy',
  filePathPattern: `work/**/*.mdx`,
  contentType: 'mdx',
  fields: {
    title: { type: 'string', required: true },
    description: { type: 'string', required: true },
    date: { type: 'date', required: true },
    tags: { type: 'list', of: { type: 'string' }, required: true },
    featured: { type: 'boolean', default: false },
    image: { type: 'string', required: false },
    client: { type: 'string', required: false },
    role: { type: 'string', required: false },
    duration: { type: 'string', required: false },
    // New SEO fields
    seoTitle: { type: 'string', required: false },
    seoDescription: { type: 'string', required: false },
    canonicalUrl: { type: 'string', required: false },
    author: { type: 'string', default: 'Strahil Peykov' },
  },
  computedFields: {
    url: {
      type: 'string',
      resolve: (post) => `/${post._raw.flattenedPath}`,
    },
    slug: {
      type: 'string',
      resolve: (post) => post._raw.flattenedPath.split('/').slice(1).join('/'),
    },
    readingTime: {
      type: 'json',
      resolve: (post) => readingTime(post.body.raw),
    },
  },
}))

export const Note = defineDocumentType(() => ({
  name: 'Note',
  filePathPattern: `ideas/**/*.mdx`,
  contentType: 'mdx',
  fields: {
    title: { type: 'string', required: true },
    description: { type: 'string', required: true },
    date: { type: 'date', required: true },
    updated: { type: 'date', required: false },
    tags: { type: 'list', of: { type: 'string' }, required: true },
    draft: { type: 'boolean', default: false },
  },
  computedFields: {
    url: {
      type: 'string',
      resolve: (post) => `/${post._raw.flattenedPath}`,
    },
    slug: {
      type: 'string',
      resolve: (post) => post._raw.flattenedPath.split('/').slice(1).join('/'),
    },
    readingTime: {
      type: 'json',
      resolve: (post) => readingTime(post.body.raw),
    },
  },
}))

export const LibraryNote = defineDocumentType(() => ({
  name: 'LibraryNote',
  filePathPattern: `library/**/*.mdx`,
  contentType: 'mdx',
  fields: {
    title: { type: 'string', required: true },
    description: { type: 'string', required: true },
    date: { type: 'date', required: true },
    course: { type: 'string', required: false },
    university: { type: 'string', required: false },
    tags: { type: 'list', of: { type: 'string' }, required: true },
  },
  computedFields: {
    url: {
      type: 'string',
      resolve: (post) => `/${post._raw.flattenedPath}`,
    },
    slug: {
      type: 'string',
      resolve: (post) => post._raw.flattenedPath.split('/').slice(1).join('/'),
    },
  },
}))

export default makeSource({
  contentDirPath: './content',
  documentTypes: [CaseStudy, Note, LibraryNote],
  mdx: {
    remarkPlugins: [],
    rehypePlugins: [],
  },
})