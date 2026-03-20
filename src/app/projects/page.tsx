import { ProjectsPageClient } from '../../components/features/porfolio/ProjectsPageClient'
import { getProjectListItems } from '../../lib/projects'

export default async function ProjectsPage() {
  const projects = await getProjectListItems()
  return <ProjectsPageClient initialProjects={projects} />
}
