import { NotesPageClient } from '../../components/features/notes/NotesPageClient'
import { getNoteListItems } from '../../lib/content'

export default async function NotesPage() {
  const notes = await getNoteListItems()
  return <NotesPageClient initialNotes={notes} />
}
