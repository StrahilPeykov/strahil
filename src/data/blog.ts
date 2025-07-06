export interface Article {
  id: string
  title: string
  excerpt: string
  content?: string
  date: string
  readTime: string
  views?: number
  likes?: number
  comments?: number
  tags: string[]
  category: string
  featured: boolean
  gradient: string
  url: string
}

export const articles: Article[] = [
  {
    id: 'ai-illiterate-programmers',
    title: 'Is AI Creating a Generation of Illiterate Programmers?',
    excerpt: 'The double-edged sword of AI coding assistants: How tools meant to enhance productivity might be undermining fundamental programming skills.',
    date: '2025-01-15',
    readTime: '12 min',
    views: 15234,
    likes: 342,
    comments: 87,
    tags: ['AI', 'Programming', 'Education', 'Technology'],
    category: 'Technology',
    featured: true,
    gradient: 'from-red-500 to-orange-500',
    url: '/blog/ai-illiterate-programmers'
  },
  {
    id: 'stop-killing-games',
    title: 'The Stop Killing Games Movement: A Developer\'s Perspective',
    excerpt: 'When publishers shut down game servers, they\'re not just ending a service—they\'re destroying digital culture. Here\'s why the movement matters.',
    date: '2025-01-18',
    readTime: '10 min',
    views: 8456,
    likes: 234,
    comments: 56,
    tags: ['Gaming', 'Digital Rights', 'Preservation', 'Technology'],
    category: 'Gaming',
    featured: true,
    gradient: 'from-red-500 to-pink-500',
    url: '/blog/stop-killing-games'
  },
  {
    id: 'soham-parekh-drama',
    title: 'The Soham Parekh Saga: When Remote Work Goes Too Far',
    excerpt: 'A software engineer allegedly worked at multiple Silicon Valley startups simultaneously. What does this mean for the future of remote work?',
    date: '2025-01-20',
    readTime: '8 min',
    views: 12789,
    likes: 456,
    comments: 123,
    tags: ['Tech Industry', 'Remote Work', 'Ethics', 'Silicon Valley'],
    category: 'Industry',
    featured: false,
    gradient: 'from-purple-500 to-blue-500',
    url: '/blog/soham-parekh-drama'
  },
  {
    id: 'lab-leak-rational-analysis',
    title: 'The Lab Leak Theory: A Rational Analysis',
    excerpt: 'Moving beyond politics to examine the evidence and probability of COVID-19 origins. What we know, what we don\'t, and why it matters.',
    date: '2025-01-22',
    readTime: '15 min',
    views: 9876,
    likes: 234,
    comments: 345,
    tags: ['Science', 'COVID-19', 'Analysis', 'Public Health'],
    category: 'Science',
    featured: false,
    gradient: 'from-green-500 to-teal-500',
    url: '/blog/lab-leak-rational-analysis'
  },
  {
    id: 'projects-programmers-should-build',
    title: '7 Projects Every Programmer Should Build (But Won\'t)',
    excerpt: 'Beyond todo apps: challenging projects that actually teach you system design, algorithms, and real-world problem solving.',
    date: '2025-01-14',
    readTime: '10 min',
    views: 23456,
    likes: 678,
    comments: 89,
    tags: ['Programming', 'Learning', 'Projects', 'Career'],
    category: 'Development',
    featured: true,
    gradient: 'from-blue-500 to-purple-500',
    url: '/blog/projects-programmers-should-build'
  },
  {
    id: 'uni-stories-embedded-systems',
    title: 'That Time We Built a Disk-Sorting Robot at 3 AM',
    excerpt: 'Stories from university: How a malfunctioning Arduino, sleep deprivation, and creative problem-solving led to an unexpected solution.',
    date: '2025-01-10',
    readTime: '6 min',
    views: 5678,
    likes: 234,
    comments: 45,
    tags: ['University', 'Engineering', 'Stories', 'Robotics'],
    category: 'Personal',
    featured: false,
    gradient: 'from-orange-500 to-pink-500',
    url: '/blog/uni-stories-embedded-systems'
  },
  {
    id: 'future-of-ai-development',
    title: 'The Future of AI-Driven Development',
    excerpt: 'How machine learning is reshaping the developer experience and what it means for the future of software engineering.',
    date: '2024-01-15',
    readTime: '8 min',
    views: 12543,
    likes: 234,
    comments: 45,
    tags: ['AI', 'Development', 'Future Tech'],
    category: 'Technology',
    featured: true,
    gradient: 'from-blue-500 to-cyan-500',
    url: '/blog/ai-driven-development'
  },
  {
    id: 'building-for-scale',
    title: 'Building for Scale: Lessons from Production',
    excerpt: 'Real-world insights from scaling applications to millions of users. What works, what breaks, and what surprises.',
    date: '2023-12-20',
    readTime: '12 min',
    views: 8342,
    likes: 189,
    comments: 23,
    tags: ['Architecture', 'Performance', 'DevOps'],
    category: 'Engineering',
    featured: true,
    gradient: 'from-purple-500 to-pink-500',
    url: '/blog/building-for-scale'
  },
  {
    id: 'digital-minimalism-dev',
    title: 'The Art of Digital Minimalism in Development',
    excerpt: 'Finding beauty in simplicity and intentional design. How less code can mean more impact.',
    date: '2023-11-10',
    readTime: '6 min',
    views: 5678,
    likes: 167,
    comments: 19,
    tags: ['Design', 'Philosophy', 'Best Practices'],
    category: 'Thoughts',
    featured: false,
    gradient: 'from-green-500 to-teal-500',
    url: '/blog/digital-minimalism'
  }
]

export const featuredArticles = articles.filter(article => article.featured)
export const recentArticles = articles.slice(0, 5)