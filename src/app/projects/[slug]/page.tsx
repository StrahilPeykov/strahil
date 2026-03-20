import { notFound } from 'next/navigation'
import { ProjectTemplate } from '../../../components/templates/ProjectTemplate'
import { getProject, getAllProjects } from '../../../lib/projects'
import type { Metadata } from 'next'

interface PageProps {
  params: { slug: string }
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const project = await getProject(params.slug)
  
  if (!project) {
    return {}
  }

  return {
    title: `${project.title} - Project Case Study`,
    description: project.description,
    openGraph: {
      title: project.title,
      description: project.description,
      type: 'article',
      images: [
        {
          url: '/icons/android-chrome-512x512.png',
          width: 512,
          height: 512,
          alt: project.title,
        },
      ],
    },
  }
}

export async function generateStaticParams() {
  const projects = await getAllProjects()
  
  return projects.map((project) => ({
    slug: project.slug,
  }))
}

export default async function ProjectPage({ params }: PageProps) {
  const project = await getProject(params.slug)
  
  if (!project) {
    notFound()
  }

  return <ProjectTemplate project={project} />
}
