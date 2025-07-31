import type { ProjectData } from '../../components/templates/ProjectTemplate'

const projectData: ProjectData = {
  title: 'FrameGuessr',
  tagline: 'Daily Movie & TV Show Guessing Game with Cinematic Experience',
  description: 'A daily guessing game where players identify movies and TV shows from carefully curated stills, featuring progressive blur reduction, soundtrack hints, and social sharing.',
  icon: 'Film',
  badges: [
    { variant: 'warning' as const, label: "Daily Game" },
    { variant: 'purple' as const, label: "Entertainment" },
    { variant: 'success' as const, label: "Live" }
  ],
  links: {
    demo: 'https://frameguessr.com',
    live: 'https://frameguessr.com',
    github: 'https://github.com/StrahilPeykov/frameguessr'
  },
  details: {
    role: 'Full-Stack Developer & Designer',
    context: 'Personal Project',
    timeline: '2025',
    status: 'Live & Active'
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
      value: '99.9%',
      label: 'Uptime'
    }
  ],
  content: {
    overview: (
      <div className="space-y-4">
        <p className="text-gray-400">
          FrameGuessr combines the appeal of daily puzzle games like Wordle with cinema knowledge, 
          creating an engaging guessing game where players identify movies and TV shows from 
          progressively clearer image hints, enhanced with soundtrack previews and social sharing features.
        </p>
        <p className="text-gray-400">
          Built as a full-stack web application, FrameGuessr demonstrates advanced frontend interactions, 
          API integrations, database management, and user experience design, all wrapped in a cinema-themed 
          interface that makes film discovery fun and social.
        </p>
      </div>
    ),
    challenge: (
      <div className="space-y-4 text-gray-400">
        <p>
          Creating an engaging daily game required solving several technical and design challenges 
          while ensuring a smooth, accessible experience for film enthusiasts of all levels.
        </p>
        <ul className="space-y-2">
          <li className="flex items-start gap-2">
            <span className="w-2 h-2 bg-yellow-400 rounded-full mt-2 flex-shrink-0"></span>
            <span><strong>Progressive blur system</strong> that maintains visual appeal while providing fair difficulty scaling</span>
          </li>
          <li className="flex items-start gap-2">
            <span className="w-2 h-2 bg-yellow-400 rounded-full mt-2 flex-shrink-0"></span>
            <span><strong>Audio integration</strong> with copyright-compliant preview system via Deezer API</span>
          </li>
          <li className="flex items-start gap-2">
            <span className="w-2 h-2 bg-yellow-400 rounded-full mt-2 flex-shrink-0"></span>
            <span><strong>Intelligent search</strong> for movie/TV show identification with fuzzy matching</span>
          </li>
          <li className="flex items-start gap-2">
            <span className="w-2 h-2 bg-yellow-400 rounded-full mt-2 flex-shrink-0"></span>
            <span><strong>Daily challenge generation</strong> and result sharing without spoilers</span>
          </li>
          <li className="flex items-start gap-2">
            <span className="w-2 h-2 bg-yellow-400 rounded-full mt-2 flex-shrink-0"></span>
            <span><strong>Rate limiting and abuse prevention</strong> while maintaining smooth UX</span>
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
              <span className="text-xs px-2 py-1 bg-blue-500/10 text-blue-400 rounded">CSS Filters</span>
              <span className="text-xs px-2 py-1 bg-blue-500/10 text-blue-400 rounded">Image Processing</span>
            </div>
          </div>
          
          <div className="bg-slate-900/50 rounded-xl p-6 border border-slate-800">
            <h3 className="text-lg font-semibold text-white mb-3">Audio Integration</h3>
            <p className="text-gray-400 text-sm mb-4">
              Seamless soundtrack preview system using Deezer API with custom audio controls, 
              time-limited playback, and fallback handling.
            </p>
            <div className="flex flex-wrap gap-2">
              <span className="text-xs px-2 py-1 bg-purple-500/10 text-purple-400 rounded">Deezer API</span>
              <span className="text-xs px-2 py-1 bg-purple-500/10 text-purple-400 rounded">Web Audio</span>
            </div>
          </div>
          
          <div className="bg-slate-900/50 rounded-xl p-6 border border-slate-800">
            <h3 className="text-lg font-semibold text-white mb-3">Smart Search</h3>
            <p className="text-gray-400 text-sm mb-4">
              Real-time search with TMDB API integration, debounced queries, and intelligent 
              result ranking by popularity and relevance.
            </p>
            <div className="flex flex-wrap gap-2">
              <span className="text-xs px-2 py-1 bg-green-500/10 text-green-400 rounded">TMDB API</span>
              <span className="text-xs px-2 py-1 bg-green-500/10 text-green-400 rounded">Fuzzy Search</span>
            </div>
          </div>
          
          <div className="bg-slate-900/50 rounded-xl p-6 border border-slate-800">
            <h3 className="text-lg font-semibold text-white mb-3">Social Features</h3>
            <p className="text-gray-400 text-sm mb-4">
              Spoiler-free result sharing with visual indicators, daily challenge URLs, 
              and streak tracking for returning players.
            </p>
            <div className="flex flex-wrap gap-2">
              <span className="text-xs px-2 py-1 bg-yellow-500/10 text-yellow-400 rounded">Share API</span>
              <span className="text-xs px-2 py-1 bg-yellow-500/10 text-yellow-400 rounded">Local Storage</span>
            </div>
          </div>
        </div>
      </div>
    ),
    features: (
      <div className="space-y-4">
        <h3 className="text-lg font-semibold text-white mb-3">Core Features</h3>
        <ul className="space-y-3 text-gray-400">
          <li>• <strong>Daily Challenges:</strong> New movie/TV show every day with curated image selection</li>
          <li>• <strong>Three-Tier Hint System:</strong> Progressive blur reduction from heavily obscured to clear</li>
          <li>• <strong>Audio Hints:</strong> Soundtrack previews with time-limited playback controls</li>
          <li>• <strong>Smart Search:</strong> Real-time movie/TV show search with intelligent ranking</li>
          <li>• <strong>Historical Access:</strong> Play previous days' challenges with date navigation</li>
          <li>• <strong>Social Sharing:</strong> Spoiler-free result sharing with visual progress indicators</li>
          <li>• <strong>Responsive Design:</strong> Optimized experience across all device sizes</li>
          <li>• <strong>Performance Optimized:</strong> Edge functions, caching, and image optimization</li>
          <li>• <strong>Guess Validation:</strong> Server-side validation with comprehensive error handling</li>
          <li>• <strong>Rate Protection:</strong> Built-in rate limiting and abuse prevention</li>
        </ul>
      </div>
    ),
    implementation: (
      <div className="space-y-6">
        <div className="bg-slate-900/30 rounded-xl p-6 border border-slate-800">
          <h3 className="text-lg font-semibold text-white mb-3">System Architecture</h3>
          <pre className="text-sm text-gray-400 font-mono overflow-x-auto">
{`Frontend (Next.js 15)      Backend APIs               External Services
    │                          │                          │
    ├─ Game UI                ├─ /api/daily              ├─ TMDB API
    ├─ Search System          ├─ /api/search             ├─ Deezer API
    ├─ Audio Player           ├─ /api/audio              └─ Image CDN
    ├─ Share System           ├─ /api/guess
    └─ Date Navigation        └─ Rate Limiting

Database (Supabase)          Deployment
    │                          │
    ├─ Daily Movies           ├─ Vercel Edge
    ├─ User Progress          ├─ PostgreSQL
    └─ Analytics              └─ CDN Caching`}</pre>
        </div>
        
        <div>
          <h3 className="text-lg font-semibold text-white mb-3">Technical Highlights</h3>
          <ul className="space-y-2 text-gray-400">
            <li>• <strong>Custom Blur Algorithm:</strong> Three-level blur progression maintaining visual appeal</li>
            <li>• <strong>Audio Streaming:</strong> Seamless integration with Deezer API and fallback handling</li>
            <li>• <strong>Search Intelligence:</strong> Debounced queries with popularity-based ranking</li>
            <li>• <strong>Rate Limiting:</strong> Comprehensive API protection using Next.js middleware</li>
            <li>• <strong>Server Validation:</strong> Client-optimistic updates with server-side verification</li>
            <li>• <strong>Daily Generation:</strong> Automated content rotation with database management</li>
            <li>• <strong>Share System:</strong> Spoiler-free result encoding for social sharing</li>
            <li>• <strong>Performance:</strong> Edge functions, image optimization, and aggressive caching</li>
          </ul>
        </div>
      </div>
    ),
    results: (
      <div className="space-y-6">
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
        
        <div className="mt-8 p-6 bg-gradient-to-r from-yellow-500/10 to-orange-500/10 rounded-xl border border-yellow-500/20">
          <h3 className="text-lg font-semibold text-white mb-3">Project Impact</h3>
          <p className="text-gray-400">
            FrameGuessr demonstrates full-stack development capabilities through a production-ready 
            entertainment application. The project showcases API integration, real-time features, 
            database design, and user experience optimization - all delivered through a polished, 
            engaging interface that combines technical complexity with accessibility.
          </p>
        </div>
      </div>
    )
  }
}

export default projectData