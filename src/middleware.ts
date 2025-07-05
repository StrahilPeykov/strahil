import { NextResponse } from 'next/server'
import type { NextRequest } from 'next/server'

// Simple in-memory rate limiting (for production, use Redis)
const rateLimitMap = new Map<string, { count: number; resetTime: number }>()

const RATE_LIMIT_WINDOW = 60 * 1000 // 1 minute
const MAX_REQUESTS = 5 // 5 requests per minute for forms

export function middleware(request: NextRequest) {
  // Only apply to API routes
  if (request.nextUrl.pathname.startsWith('/api/')) {
    const ip = request.ip ?? request.headers.get('x-forwarded-for') ?? 'anonymous'
    const now = Date.now()
    
    // Clean up old entries
    for (const [key, value] of rateLimitMap.entries()) {
      if (value.resetTime < now) {
        rateLimitMap.delete(key)
      }
    }
    
    const userLimit = rateLimitMap.get(ip)
    
    if (userLimit) {
      if (userLimit.resetTime > now) {
        if (userLimit.count >= MAX_REQUESTS) {
          return new NextResponse('Too Many Requests', { status: 429 })
        }
        userLimit.count++
      } else {
        rateLimitMap.set(ip, { count: 1, resetTime: now + RATE_LIMIT_WINDOW })
      }
    } else {
      rateLimitMap.set(ip, { count: 1, resetTime: now + RATE_LIMIT_WINDOW })
    }
  }
  
  return NextResponse.next()
}

export const config = {
  matcher: '/api/:path*',
}