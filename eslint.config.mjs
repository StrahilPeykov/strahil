import { dirname } from 'path'
import { fileURLToPath } from 'url'
import { FlatCompat } from '@eslint/eslintrc'

const __filename = fileURLToPath(import.meta.url)
const __dirname = dirname(__filename)

const compat = new FlatCompat({
  baseDirectory: __dirname,
})

const eslintConfig = [
  {
    ignores: [
      '.next/**',
      '.contentlayer/**',
      'node_modules/**',
      'out/**',
      'build/**',
      'coverage/**',
    ],
  },
  ...compat.extends('next/core-web-vitals'),
  {
    files: ['src/content/**/*.{ts,tsx,js,jsx,mdx}'],
    rules: {
      'react/no-unescaped-entities': 'off',
      '@typescript-eslint/no-unused-vars': 'off',
    },
  },
  {
    files: [
      'src/app/about/page.tsx',
      'src/app/contact/page.tsx',
      'src/app/cookies/page.tsx',
      'src/app/cv/page.tsx',
      'src/app/health/page.tsx',
      'src/app/not-found.tsx',
      'src/app/play/page.tsx',
      'src/app/privacy/page.tsx',
      'src/app/projects/page.tsx',
      'src/app/terms/page.tsx',
      'src/app/tools/youtube-transcript-search/page.tsx',
      'src/app/tue-secret/page.tsx',
      'src/components/features/contact/ContactCTA.tsx',
      'src/components/features/porfolio/FeaturedProjects.tsx',
    ],
    rules: {
      'react/no-unescaped-entities': 'off',
    },
  },
]

export default eslintConfig
