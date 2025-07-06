export interface IdeaPost {
  id: string
  title: string
  excerpt: string
  date: string
  readTime: string
  url: string
  featured: boolean
}

export const notes: IdeaPost[] = [
  {
    id: 'ai-driven-development',
    title: 'The Future of AI-Driven Development',
    excerpt: 'How machine learning is reshaping the developer experience',
    date: 'Jan 2024',
    readTime: '8 min',
    url: '/blog/ai-driven-development',
    featured: true
  },
  {
    id: 'building-for-scale',
    title: 'Building for Scale: Lessons from Production',
    excerpt: 'Real-world insights from scaling applications to millions',
    date: 'Dec 2023', 
    readTime: '12 min',
    url: '/blog/building-for-scale',
    featured: true
  },
  {
    id: 'digital-minimalism',
    title: 'The Art of Digital Minimalism',
    excerpt: 'Finding beauty in simplicity and intentional design',
    date: 'Nov 2023',
    readTime: '6 min', 
    url: '/blog/digital-minimalism',
    featured: true
  }
]

export const featuredNotes = notes.filter(idea => idea.featured)