'use client'

import { motion, AnimatePresence } from 'framer-motion'
import { Camera, Video, Image as ImageIcon, Play, Maximize2, Download, Heart, Share2, Filter, Grid3x3, Columns, Square, Sparkles } from 'lucide-react'
import { PageWrapper } from '../../components/layout/PageWrapper'
import { Badge } from '../../components/ui/Badge'
import { useState, useCallback } from 'react'

const mediaItems = [
  {
    id: 1,
    type: 'image',
    title: 'Cosmic Workspace',
    category: 'Design',
    tags: ['UI/UX', 'Workspace', 'Dark Theme'],
    thumbnail: '/media/workspace-thumb.jpg',
    full: '/media/workspace-full.jpg',
    likes: 234,
    views: 1205,
    date: '2024-01-15',
    description: 'My cosmic-themed development workspace setup'
  },
  {
    id: 2,
    type: 'video',
    title: 'Building a Real-time Dashboard',
    category: 'Development',
    tags: ['React', 'WebSockets', 'Tutorial'],
    thumbnail: '/media/dashboard-thumb.jpg',
    duration: '12:34',
    likes: 567,
    views: 3420,
    date: '2024-01-10',
    description: 'Timelapse of building a real-time analytics dashboard'
  },
  {
    id: 3,
    type: 'image',
    title: 'Neural Network Visualization',
    category: 'AI/ML',
    tags: ['Machine Learning', 'Visualization', 'Data Science'],
    thumbnail: '/media/neural-thumb.jpg',
    full: '/media/neural-full.jpg',
    likes: 892,
    views: 4567,
    date: '2024-01-08',
    description: 'Interactive visualization of a deep neural network'
  },
  {
    id: 4,
    type: 'image',
    title: 'Complex Systems Map',
    category: 'Research',
    tags: ['Complex Systems', 'Networks', 'Academia'],
    thumbnail: '/media/systems-thumb.jpg',
    full: '/media/systems-full.jpg',
    likes: 145,
    views: 890,
    date: '2024-01-05',
    description: 'Mapping emergent behaviors in complex adaptive systems'
  },
  {
    id: 5,
    type: 'video',
    title: 'Code Review: Clean Architecture',
    category: 'Development',
    tags: ['Architecture', 'Best Practices', 'Code Review'],
    thumbnail: '/media/code-review-thumb.jpg',
    duration: '23:45',
    likes: 423,
    views: 2340,
    date: '2023-12-28',
    description: 'Deep dive into clean architecture principles'
  },
  {
    id: 6,
    type: 'image',
    title: 'Eindhoven Tech Meetup',
    category: 'Events',
    tags: ['Community', 'Networking', 'Tech Talk'],
    thumbnail: '/media/meetup-thumb.jpg',
    full: '/media/meetup-full.jpg',
    likes: 312,
    views: 1678,
    date: '2023-12-20',
    description: 'Speaking at the Eindhoven Tech Community meetup'
  },
  {
    id: 7,
    type: 'image',
    title: 'UI Component Library',
    category: 'Design',
    tags: ['Components', 'Design System', 'React'],
    thumbnail: '/media/components-thumb.jpg',
    full: '/media/components-full.jpg',
    likes: 678,
    views: 3890,
    date: '2023-12-15',
    description: 'Custom React component library with Tailwind'
  },
  {
    id: 8,
    type: 'video',
    title: 'From Idea to Production',
    category: 'Development',
    tags: ['DevOps', 'CI/CD', 'Deployment'],
    thumbnail: '/media/deployment-thumb.jpg',
    duration: '18:20',
    likes: 345,
    views: 2100,
    date: '2023-12-10',
    description: 'Complete deployment pipeline walkthrough'
  }
]

const categories = ['All', 'Design', 'Development', 'AI/ML', 'Research', 'Events']
const viewModes = [
  { id: 'grid', icon: Grid3x3, cols: 'grid-cols-1 md:grid-cols-2 lg:grid-cols-3' },
  { id: 'masonry', icon: Columns, cols: 'columns-1 md:columns-2 lg:columns-3' },
  { id: 'large', icon: Square, cols: 'grid-cols-1' }
]

interface MediaItemProps {
  item: typeof mediaItems[0]
  viewMode: string
  onClick: () => void
}

function MediaItem({ item, viewMode, onClick }: MediaItemProps) {
  const [isHovered, setIsHovered] = useState(false)
  const isVideo = item.type === 'video'

  return (
    <motion.div
      layout
      initial={{ opacity: 0, scale: 0.9 }}
      animate={{ opacity: 1, scale: 1 }}
      exit={{ opacity: 0, scale: 0.9 }}
      whileHover={{ y: -4 }}
      className={`group relative cursor-pointer ${viewMode === 'masonry' ? 'break-inside-avoid mb-6' : ''}`}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      onClick={onClick}
    >
      <div className="relative overflow-hidden rounded-xl bg-slate-900/50 border border-slate-800 hover:border-purple-500/30 transition-all duration-300">
        {/* Thumbnail */}
        <div className={`relative ${viewMode === 'large' ? 'h-96' : viewMode === 'masonry' ? 'h-auto' : 'h-64'} bg-gradient-to-br from-blue-500/10 to-purple-500/10`}>
          {/* Placeholder for actual image */}
          <div className="absolute inset-0 flex items-center justify-center">
            {isVideo ? (
              <Video className="w-20 h-20 text-white/20" />
            ) : (
              <ImageIcon className="w-20 h-20 text-white/20" />
            )}
          </div>
          
          {/* Video duration */}
          {isVideo && item.duration && (
            <div className="absolute bottom-2 right-2 px-2 py-1 bg-black/80 rounded text-xs text-white">
              {item.duration}
            </div>
          )}
          
          {/* Play button for videos */}
          {isVideo && (
            <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
              <div className="w-16 h-16 bg-white/90 rounded-full flex items-center justify-center">
                <Play className="w-8 h-8 text-slate-900 ml-1" />
              </div>
            </div>
          )}
          
          {/* Hover overlay */}
          <AnimatePresence>
            {isHovered && (
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                className="absolute inset-0 bg-gradient-to-t from-slate-900 via-slate-900/50 to-transparent"
              >
                <div className="absolute bottom-4 left-4 right-4">
                  <p className="text-white text-sm line-clamp-2">{item.description}</p>
                </div>
                
                <div className="absolute top-4 right-4 flex gap-2">
                  <button className="p-2 bg-slate-900/80 backdrop-blur-sm rounded-lg hover:bg-slate-800 transition-colors">
                    <Maximize2 className="w-4 h-4 text-white" />
                  </button>
                  <button className="p-2 bg-slate-900/80 backdrop-blur-sm rounded-lg hover:bg-slate-800 transition-colors">
                    <Download className="w-4 h-4 text-white" />
                  </button>
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
        
        {/* Content */}
        <div className="p-4">
          {/* Title and category */}
          <div className="flex items-start justify-between gap-2 mb-2">
            <h3 className="font-semibold text-white group-hover:text-transparent group-hover:bg-gradient-to-r group-hover:from-blue-400 group-hover:to-purple-400 group-hover:bg-clip-text transition-all">
              {item.title}
            </h3>
            <Badge variant="purple" size="sm">
              {item.category}
            </Badge>
          </div>
          
          {/* Tags */}
          <div className="flex flex-wrap gap-2 mb-3">
            {item.tags.map((tag) => (
              <span key={tag} className="text-xs text-gray-500">
                #{tag.replace(/\s+/g, '')}
              </span>
            ))}
          </div>
          
          {/* Stats */}
          <div className="flex items-center gap-4 text-sm text-gray-500">
            <span className="flex items-center gap-1">
              <Heart className="w-3 h-3" />
              {item.likes}
            </span>
            <span className="flex items-center gap-1">
              <Camera className="w-3 h-3" />
              {item.views}
            </span>
            <span>{new Date(item.date).toLocaleDateString()}</span>
          </div>
        </div>
      </div>
    </motion.div>
  )
}

export default function MediaPage() {
  const [selectedCategory, setSelectedCategory] = useState('All')
  const [viewMode, setViewMode] = useState('grid')
  const [selectedItem, setSelectedItem] = useState<typeof mediaItems[0] | null>(null)
  const [isLightboxOpen, setIsLightboxOpen] = useState(false)

  const filteredItems = selectedCategory === 'All' 
    ? mediaItems 
    : mediaItems.filter(item => item.category === selectedCategory)

  const currentViewMode = viewModes.find(mode => mode.id === viewMode) || viewModes[0]

  const openLightbox = useCallback((item: typeof mediaItems[0]) => {
    setSelectedItem(item)
    setIsLightboxOpen(true)
  }, [])

  const closeLightbox = useCallback(() => {
    setIsLightboxOpen(false)
    setTimeout(() => setSelectedItem(null), 300)
  }, [])

  return (
    <PageWrapper>
      {/* Hero Section */}
      <section className="relative min-h-[50vh] flex items-center justify-center px-6 py-24 overflow-hidden">
        {/* Animated background */}
        <div className="absolute inset-0">
          <div className="absolute inset-0 bg-gradient-to-b from-purple-500/5 via-pink-500/5 to-transparent" />
          
          {/* Floating frames */}
          {[...Array(6)].map((_, i) => (
            <motion.div
              key={i}
              className="absolute border-2 border-purple-300/10 rounded-lg"
              style={{
                width: `${Math.random() * 200 + 100}px`,
                height: `${Math.random() * 150 + 100}px`,
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`,
              }}
              animate={{
                rotate: [0, 10, -10, 0],
                x: [0, 20, -20, 0],
                y: [0, -20, 20, 0],
              }}
              transition={{
                duration: 10 + i * 2,
                repeat: Infinity,
                ease: "easeInOut",
              }}
            />
          ))}
        </div>
        
        <div className="relative z-10 max-w-4xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5 }}
            className="mb-6"
          >
            <Camera className="w-16 h-16 text-purple-400 mx-auto mb-6" />
          </motion.div>
          
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-5xl lg:text-7xl font-display font-bold text-white mb-6"
          >
            Visual
            <span className="block bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
              Stories
            </span>
          </motion.h1>
          
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="text-xl text-gray-400 max-w-2xl mx-auto"
          >
            A collection of designs, demonstrations, and visual explorations 
            from my journey in tech and creativity.
          </motion.p>
        </div>
      </section>
      
      {/* Filters and View Options */}
      <section className="px-6 py-8 border-y border-slate-800 sticky top-20 z-30 bg-slate-950/90 backdrop-blur-xl">
        <div className="max-w-7xl mx-auto">
          <div className="flex items-center justify-between gap-4 flex-wrap">
            {/* Categories */}
            <div className="flex gap-2 overflow-x-auto no-scrollbar">
              {categories.map((category) => (
                <button
                  key={category}
                  onClick={() => setSelectedCategory(category)}
                  className={`px-4 py-2 rounded-full font-medium transition-all whitespace-nowrap ${
                    selectedCategory === category
                      ? 'bg-gradient-to-r from-purple-500 to-pink-500 text-white'
                      : 'text-gray-400 hover:text-white hover:bg-slate-800'
                  }`}
                >
                  {category}
                </button>
              ))}
            </div>
            
            {/* View modes */}
            <div className="flex items-center gap-2">
              <span className="text-gray-500 text-sm mr-2">View:</span>
              {viewModes.map((mode) => {
                const Icon = mode.icon
                return (
                  <button
                    key={mode.id}
                    onClick={() => setViewMode(mode.id)}
                    className={`p-2 rounded-lg transition-all ${
                      viewMode === mode.id
                        ? 'bg-purple-500/20 text-purple-400'
                        : 'text-gray-500 hover:text-white hover:bg-slate-800'
                    }`}
                    aria-label={`${mode.id} view`}
                  >
                    <Icon className="w-5 h-5" />
                  </button>
                )
              })}
            </div>
          </div>
          
          {/* Results count */}
          <div className="mt-4 text-sm text-gray-500">
            {filteredItems.length} items
          </div>
        </div>
      </section>
      
      {/* Media Grid */}
      <section className="px-6 py-16">
        <div className="max-w-7xl mx-auto">
          <div className={viewMode === 'masonry' ? currentViewMode.cols : `grid ${currentViewMode.cols} gap-6`}>
            <AnimatePresence mode="popLayout">
              {filteredItems.map((item) => (
                <MediaItem
                  key={item.id}
                  item={item}
                  viewMode={viewMode}
                  onClick={() => openLightbox(item)}
                />
              ))}
            </AnimatePresence>
          </div>
        </div>
      </section>
      
      {/* Lightbox */}
      <AnimatePresence>
        {isLightboxOpen && selectedItem && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/90 backdrop-blur-sm"
            onClick={closeLightbox}
          >
            <motion.div
              initial={{ scale: 0.9 }}
              animate={{ scale: 1 }}
              exit={{ scale: 0.9 }}
              className="relative max-w-5xl w-full"
              onClick={(e) => e.stopPropagation()}
            >
              {/* Close button */}
              <button
                onClick={closeLightbox}
                className="absolute -top-12 right-0 text-white/60 hover:text-white transition-colors"
              >
                <span className="text-sm">ESC</span>
              </button>
              
              {/* Media content */}
              <div className="bg-slate-900 rounded-xl overflow-hidden">
                {/* Media display area */}
                <div className="relative h-[70vh] bg-black flex items-center justify-center">
                  {selectedItem.type === 'video' ? (
                    <Video className="w-32 h-32 text-white/20" />
                  ) : (
                    <ImageIcon className="w-32 h-32 text-white/20" />
                  )}
                </div>
                
                {/* Info panel */}
                <div className="p-6">
                  <div className="flex items-start justify-between gap-4 mb-4">
                    <div>
                      <h2 className="text-2xl font-semibold text-white mb-2">{selectedItem.title}</h2>
                      <p className="text-gray-400">{selectedItem.description}</p>
                    </div>
                    <div className="flex gap-2">
                      <button className="p-2 bg-slate-800 rounded-lg hover:bg-slate-700 transition-colors">
                        <Heart className="w-5 h-5 text-white" />
                      </button>
                      <button className="p-2 bg-slate-800 rounded-lg hover:bg-slate-700 transition-colors">
                        <Share2 className="w-5 h-5 text-white" />
                      </button>
                      <button className="p-2 bg-slate-800 rounded-lg hover:bg-slate-700 transition-colors">
                        <Download className="w-5 h-5 text-white" />
                      </button>
                    </div>
                  </div>
                  
                  <div className="flex items-center gap-6 text-sm text-gray-500">
                    <span className="flex items-center gap-1">
                      <Heart className="w-4 h-4" />
                      {selectedItem.likes} likes
                    </span>
                    <span className="flex items-center gap-1">
                      <Camera className="w-4 h-4" />
                      {selectedItem.views} views
                    </span>
                    <span>{new Date(selectedItem.date).toLocaleDateString()}</span>
                  </div>
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
      
      {/* Upload CTA */}
      <section className="px-6 py-16 border-t border-slate-800">
        <div className="max-w-4xl mx-auto text-center">
          <Sparkles className="w-12 h-12 text-purple-400 mx-auto mb-4" />
          <h2 className="text-3xl font-display font-bold text-white mb-4">
            Behind the Scenes
          </h2>
          <p className="text-gray-400 mb-8">
            Want to see more of my creative process? Follow me on social media for daily updates and work-in-progress shots.
          </p>
          <div className="flex justify-center gap-4">
            <a
              href="https://instagram.com/strahil.peykov"
              target="_blank"
              rel="noopener noreferrer"
              className="px-6 py-3 bg-gradient-to-r from-purple-500 to-pink-500 text-white font-semibold rounded-full hover:scale-105 transition-transform"
            >
              Follow on Instagram
            </a>
            <a
              href="https://tiktok.com/@strahil.peykov"
              target="_blank"
              rel="noopener noreferrer"
              className="px-6 py-3 border-2 border-purple-500/30 text-purple-400 font-semibold rounded-full hover:bg-purple-500/10 hover:border-purple-500/50 transition-all"
            >
              TikTok
            </a>
          </div>
        </div>
      </section>
    </PageWrapper>
  )
}