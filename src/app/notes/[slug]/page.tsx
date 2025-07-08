import { notFound } from 'next/navigation'
import { NoteTemplate } from '../../../components/templates/ContentTemplate'
import { getNote, getAllNotes } from '../../../lib/content'
import type { Metadata } from 'next'

interface PageProps {
  params: { slug: string }
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const note = await getNote(params.slug)
  
  if (!note) {
    return {}
  }

  return {
    title: note.title,
    description: note.excerpt,
    openGraph: {
      title: note.title,
      description: note.excerpt,
      type: 'article',
      publishedTime: note.date,
      authors: [note.author || 'Strahil Peykov'],
      tags: note.tags,
    },
  }
}

export async function generateStaticParams() {
  const notes = await getAllNotes()
  
  return notes.map((note) => ({
    slug: note.slug,
  }))
}

export default async function NotePage({ params }: PageProps) {
  const note = await getNote(params.slug)
  
  if (!note) {
    notFound()
  }

  // Use the specialized NoteTemplate (which uses ContentTemplate under the hood)
  return <NoteTemplate note={note} />
}