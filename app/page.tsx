import Link from 'next/link'
import { ArrowRight } from 'lucide-react'

export default function Home() {
  return (
    <main className="min-h-screen bg-midnight dark">
      {/* Constellation Hero Section */}
      <section className="relative flex min-h-screen items-center justify-center overflow-hidden px-6">
        {/* Animated background dots */}
        <div className="absolute inset-0 opacity-20">
          {[...Array(50)].map((_, i) => (
            <div
              key={i}
              className="absolute h-1 w-1 animate-pulse rounded-full bg-electric"
              style={{
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`,
                animationDelay: `${Math.random() * 5}s`,
              }}
            />
          ))}
        </div>

        <div className="relative z-10 max-w-5xl text-center">
          <h1 className="mb-6 animate-fade-in font-display text-5xl font-bold tracking-tight text-white sm:text-7xl">
            Strahil Peykov
          </h1>
          <p className="mb-8 animate-fade-in text-lg text-gray-300 sm:text-xl" style={{ animationDelay: '0.1s' }}>
            Full-Stack Developer crafting digital experiences
          </p>
          
          {/* Navigation Links */}
          <nav className="flex flex-wrap justify-center gap-4 text-sm sm:text-base">
            {[
              { href: '/work', label: 'Work' },
              { href: '/ideas', label: 'Ideas' },
              { href: '/library', label: 'Library' },
              { href: '/media', label: 'Media' },
              { href: '/play', label: 'Play' },
              { href: '/fitness', label: 'Fitness' },
            ].map((link, i) => (
              <Link
                key={link.href}
                href={link.href}
                className="group animate-fade-in rounded-full border border-electric/20 bg-midnight-light px-6 py-3 text-gray-300 transition-all hover:border-electric hover:text-electric"
                style={{ animationDelay: `${0.2 + i * 0.05}s` }}
              >
                <span className="flex items-center gap-2">
                  {link.label}
                  <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
                </span>
              </Link>
            ))}
          </nav>
        </div>

        {/* Scroll indicator */}
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
          <div className="h-6 w-4 rounded-full border-2 border-electric/50">
            <div className="mx-auto mt-1 h-1.5 w-0.5 animate-pulse rounded-full bg-electric" />
          </div>
        </div>
      </section>
    </main>
  )
}