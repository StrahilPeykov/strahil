import { Film, Users, Gamepad2, Award, Zap, Music } from 'lucide-react'
import { Badge } from '../../components/ui/Badge'
import type { ProjectData } from '../../components/templates/ProjectTemplate'

const projectData: ProjectData = {
  title: 'FrameGuessr',
  tagline: 'Daily Movie & TV Show Guessing Game with Cinematic Experience',
  description: 'A daily guessing game where players identify movies and TV shows from carefully curated stills, featuring progressive blur reduction, soundtrack hints, and social sharing.',
  icon: 'Film',
  badges: [
    { variant: 'warning' as const, label: "Daily Game" },
    { variant: 'purple' as const, label: "Entertainment" }
  ],
  links: {
    live: 'https://frameguessr.com',
    github: 'https://github.com/StrahilPeykov/frameguessr'
  },
  details: {
    role: 'Full-Stack Developer & Designer',
    context: 'Personal Project',
    timeline: '2025',
    status: 'Live'
  },
  techStack: {
    categories: [
      {
        name: 'Frontend',
        technologies: ['Next.js 15', 'TypeScript', 'Tailwind CSS', 'React Context']
      },
      {
        name: 'Backend & APIs',
        technologies: ['Next.js API Routes', 'TMDB API', 'Deezer API', 'Supabase']
      },
      {
        name: 'Infrastructure',
        technologies: ['Vercel', 'PostgreSQL', 'Edge Functions', 'Rate Limiting']
      }
    ]
  },
  metrics: [
    {
      icon: 'Users',
      value: 'Daily',
      label: 'Active Players'
    },
    {
      icon: 'Gamepad2',
      value: '3-Level',
      label: 'Hint System'
    },
    {
      icon: 'Award',
      value: '100%',
      label: 'Uptime'
    }
  ],
  content: {
    overview: (
      <p className="text-gray-400">
        FrameGuessr combines the appeal of daily puzzle games like Wordle with cinema knowledge, 
        creating an engaging guessing game where players identify movies and TV shows from 
        progressively clearer image hints, enhanced with soundtrack previews and social sharing features.
      </p>
    ),
    challenge: (
      <div className="space-y-4 text-gray-400">
        <p>
          Creating an engaging daily game required solving several technical and design challenges 
          while ensuring a smooth, accessible experience for film enthusiasts of all levels.
        </p>
        <ul className="space-y-2">
          <li className="flex items-start gap-2">
            <Film className="w-5 h-5 text-yellow-400 flex-shrink-0 mt-0.5" />
            <span>Progressive blur system that maintains visual appeal while providing fair difficulty scaling</span>
          </li>
          <li className="flex items-start gap-2">
            <Music className="w-5 h-5 text-yellow-400 flex-shrink-0 mt-0.5" />
            <span>Integration of audio hints with copyright-compliant preview system via Deezer API</span>
          </li>
          <li className="flex items-start gap-2">
            <Users className="w-5 h-5 text-yellow-400 flex-shrink-0 mt-0.5" />
            <span>Intelligent search system for movie/TV show identification with fuzzy matching</span>
          </li>
          <li className="flex items-start gap-2">
            <Zap className="w-5 h-5 text-yellow-400 flex-shrink-0 mt-0.5" />
            <span>Daily challenge generation and result sharing without spoilers</span>
          </li>
        </ul>
      </div>
    ),
    solution: (
      <div className="space-y-6">
        <p className="text-gray-400 mb-6">
          I designed a sophisticated hint progression system combined with a clean, cinema-inspired 
          interface that makes the game accessible while maintaining engagement through multiple difficulty layers.
        </p>
        
        <div className="grid md:grid-cols-2 gap-6">
          <div className="bg-slate-900/50 rounded-xl p-6 border border-slate-800">
            <h3 className="text-lg font-semibold text-white mb-3">Progressive Blur System</h3>
            <p className="text-gray-400 text-sm mb-4">
              Custom CSS blur effects with three difficulty levels, maintaining image aesthetics 
              while providing fair progression from heavily obscured to clearly visible.
            </p>
            <div className="flex flex-wrap gap-2">
              <Badge variant="blue" size="sm">CSS Filters</Badge>
              <Badge variant="blue" size="sm">Image Processing</Badge>
            </div>
          </div>
          
          <div className="bg-slate-900/50 rounded-xl p-6 border border-slate-800">
            <h3 className="text-lg font-semibold text-white mb-3">Audio Integration</h3>
            <p className="text-gray-400 text-sm mb-4">
              Seamless soundtrack preview system using Deezer API with custom audio controls, 
              time-limited playback, and fallback handling.
            </p>
            <div className="flex flex-wrap gap-2">
              <Badge variant="purple" size="sm">Deezer API</Badge>
              <Badge variant="purple" size="sm">Web Audio</Badge>
            </div>
          </div>
          
          <div className="bg-slate-900/50 rounded-xl p-6 border border-slate-800">
            <h3 className="text-lg font-semibold text-white mb-3">Smart Search</h3>
            <p className="text-gray-400 text-sm mb-4">
              Real-time search with TMDB API integration, debounced queries, and intelligent 
              result ranking by popularity and relevance.
            </p>
            <div className="flex flex-wrap gap-2">
              <Badge variant="success" size="sm">TMDB API</Badge>
              <Badge variant="success" size="sm">Fuzzy Search</Badge>
            </div>
          </div>
          
          <div className="bg-slate-900/50 rounded-xl p-6 border border-slate-800">
            <h3 className="text-lg font-semibold text-white mb-3">Social Features</h3>
            <p className="text-gray-400 text-sm mb-4">
              Spoiler-free result sharing with visual indicators, daily challenge URLs, 
              and streak tracking for returning players.
            </p>
            <div className="flex flex-wrap gap-2">
              <Badge variant="warning" size="sm">Share API</Badge>
              <Badge variant="warning" size="sm">Local Storage</Badge>
            </div>
          </div>
        </div>
      </div>
    ),
    features: (
      <ul className="space-y-3 text-gray-400">
        <li>• <strong>Daily Challenges:</strong> New movie/TV show every day with curated image selection</li>
        <li>• <strong>Three-Tier Hint System:</strong> Progressive blur reduction from heavily obscured to clear</li>
        <li>• <strong>Audio Hints:</strong> Soundtrack previews with time-limited playback</li>
        <li>• <strong>Smart Search:</strong> Real-time movie/TV show search with intelligent ranking</li>
        <li>• <strong>Historical Access:</strong> Play previous days' challenges with date navigation</li>
        <li>• <strong>Social Sharing:</strong> Spoiler-free result sharing with visual progress indicators</li>
        <li>• <strong>Responsive Design:</strong> Optimized experience across all device sizes</li>
        <li>• <strong>Performance Optimized:</strong> Edge functions, caching, and image optimization</li>
      </ul>
    ),
    implementation: (
      <div className="space-y-4">
        <div className="bg-slate-900/30 rounded-xl p-6 border border-slate-800">
          <h3 className="text-lg font-semibold text-white mb-3">Architecture</h3>
          <pre className="text-sm text-gray-400 font-mono overflow-x-auto">
{`Frontend (Next.js 15)      Backend APIs
    │                          │
    ├─ Game UI                ├─ /api/daily
    ├─ Search System          ├─ /api/search  
    ├─ Audio Player           ├─ /api/audio
    ├─ Share System           ├─ /api/guess
    └─ Date Navigation        └─ Rate Limiting

External Services             Data Layer
    │                          │
    ├─ TMDB API               ├─ Supabase
    ├─ Deezer API             ├─ Daily Movies
    └─ Image CDN              └─ User Progress`}</pre>
        </div>
        
        <div>
          <h3 className="text-lg font-semibold text-white mb-3">Key Technical Achievements</h3>
          <ul className="space-y-2 text-gray-400">
            <li>• Custom blur progression algorithm maintaining visual appeal across all difficulty levels</li>
            <li>• Sophisticated audio streaming with fallback handling and cross-browser compatibility</li>
            <li>• Intelligent search debouncing and result caching for optimal user experience</li>
            <li>• Comprehensive rate limiting and API protection against abuse</li>
            <li>• Server-side validation with client-side optimistic updates</li>
            <li>• Daily challenge generation system with automatic content rotation</li>
          </ul>
        </div>
      </div>
    ),
    results: (
      <div className="grid md:grid-cols-3 gap-6">
        <div className="text-center">
          <div className="text-4xl font-bold text-yellow-400 mb-2">Live</div>
          <div className="text-gray-400">Production deployment with daily updates</div>
        </div>
        
        <div className="text-center">
          <div className="text-4xl font-bold text-orange-400 mb-2">Engaging</div>
          <div className="text-gray-400">Progressive hint system maintains challenge</div>
        </div>
        
        <div className="text-center">
          <div className="text-4xl font-bold text-red-400 mb-2">Social</div>
          <div className="text-gray-400">Spoiler-free sharing drives engagement</div>
        </div>
      </div>
    )
  }
}

export default projectData