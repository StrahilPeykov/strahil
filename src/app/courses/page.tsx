'use client'

import { motion } from 'framer-motion'
import { GraduationCap, Clock, Users, Star, ArrowRight, CheckCircle, BookOpen, Award, Zap } from 'lucide-react'
import { PageWrapper } from '../../components/layout/PageWrapper'
import { Badge } from '../../components/ui/Badge'
import Link from 'next/link'

const courses = [
  {
    id: 'algorithms-exam-prep',
    title: 'Algorithms Exam Preparation',
    subtitle: 'Master all 8 exercise types for your algorithms exam',
    description: 'Comprehensive exam preparation covering all exercise types with real past exam questions and detailed solutions.',
    longDescription: 'Prepare for your algorithms exam with focused practice on all 8 exercise types. Based on analysis of past exams, with full solutions and explanations for each type of problem you\'ll encounter.',
    image: '/images/courses/algorithms.jpg',
    gradient: 'from-blue-500 to-cyan-500',
    duration: '4 weeks',
    lessons: 8,
    students: 0,
    rating: 0,
    level: 'University',
    price: 'Free',
    status: 'published',
    topics: [
      'Backtracking',
      'Greedy Choice Lemma',
      'Dynamic Programming',
      'Network Flow',
      'Shortest-Path Algorithms',
      'Flow Theory',
      'NP-Completeness',
      'NP-Hardness Proofs'
    ],
    outcomes: [
      'Master all 8 exercise types',
      'Understand exam patterns',
      'Write formal proofs correctly',
      'Achieve top marks'
    ],
    link: '/courses/algorithms-exam-prep'
  },
  {
    id: 'web-security-fundamentals',
    title: 'Web Security Fundamentals',
    subtitle: 'Build secure applications from the ground up',
    description: 'Learn to identify and prevent common web vulnerabilities. Build applications that are secure by design.',
    longDescription: 'Comprehensive security course covering OWASP Top 10, secure coding practices, and real-world attack scenarios. Learn to think like an attacker to better defend your applications.',
    image: '/images/courses/security.jpg',
    gradient: 'from-red-500 to-orange-500',
    duration: '6 weeks',
    lessons: 36,
    students: 892,
    rating: 4.8,
    level: 'Beginner',
    price: '$49',
    status: 'published',
    topics: [
      'OWASP Top 10',
      'Authentication & Authorization',
      'XSS & CSRF Prevention',
      'SQL Injection',
      'Secure APIs',
      'Cryptography Basics'
    ],
    outcomes: [
      'Identify security vulnerabilities',
      'Implement secure authentication',
      'Protect against common attacks',
      'Security best practices'
    ],
    link: '/courses/web-security-fundamentals'
  },
  {
    id: 'system-design-interview',
    title: 'System Design Interview Prep',
    subtitle: 'Ace your next system design interview',
    description: 'From basics to advanced patterns, learn how to design scalable systems and excel in technical interviews.',
    longDescription: 'Prepare for system design interviews at top tech companies. Learn to design systems like URL shorteners, social networks, and distributed databases.',
    image: '/images/courses/system-design.jpg',
    gradient: 'from-purple-500 to-pink-500',
    duration: '10 weeks',
    lessons: 60,
    students: 2156,
    rating: 4.9,
    level: 'Advanced',
    price: '$99',
    status: 'coming-soon',
    launchDate: 'March 2024',
    topics: [
      'Scalability Principles',
      'Load Balancing',
      'Caching Strategies',
      'Database Design',
      'Microservices',
      'Real-world Examples'
    ],
    outcomes: [
      'Design scalable systems',
      'Estimate capacity requirements',
      'Choose right technologies',
      'Communicate effectively'
    ],
    link: '/courses/system-design-interview'
  }
]

function CourseCard({ course, index }: { course: typeof courses[0], index: number }) {
  const isComingSoon = course.status === 'coming-soon'

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: index * 0.1 }}
      className="group relative"
    >
      <Link href={course.link}>
        <div className="relative h-full bg-slate-900/50 backdrop-blur-sm border border-slate-800 rounded-2xl overflow-hidden hover:border-purple-500/30 transition-all duration-300">
          {/* Background gradient */}
          <div className={`absolute inset-0 bg-gradient-to-br ${course.gradient} opacity-0 group-hover:opacity-10 transition-opacity duration-500`} />
          
          {/* Image placeholder */}
          <div className={`h-48 bg-gradient-to-br ${course.gradient} opacity-20 relative overflow-hidden`}>
            <div className="absolute inset-0 bg-slate-900/50" />
            <div className="absolute inset-0 flex items-center justify-center">
              <GraduationCap className="w-20 h-20 text-white/30" />
            </div>
            
            {/* Status badge */}
            <div className="absolute top-4 right-4">
              {isComingSoon ? (
                <Badge variant="warning" size="sm">Coming Soon</Badge>
              ) : (
                <Badge variant="success" size="sm">{course.price}</Badge>
              )}
            </div>
            
            {/* Level badge */}
            <div className="absolute top-4 left-4">
              <Badge variant="purple" size="sm">{course.level}</Badge>
            </div>
          </div>
          
          {/* Content */}
          <div className="p-6">
            <h3 className="text-xl font-semibold text-white mb-1 group-hover:text-transparent group-hover:bg-gradient-to-r group-hover:from-blue-400 group-hover:to-purple-400 group-hover:bg-clip-text transition-all">
              {course.title}
            </h3>
            <p className="text-sm text-purple-400 mb-3">{course.subtitle}</p>
            <p className="text-gray-400 text-sm mb-4 line-clamp-2">
              {course.description}
            </p>
            
            {/* Stats */}
            <div className="grid grid-cols-2 gap-4 mb-4">
              <div className="flex items-center gap-2 text-sm text-gray-500">
                <Clock className="w-4 h-4" />
                <span>{course.duration}</span>
              </div>
              <div className="flex items-center gap-2 text-sm text-gray-500">
                <BookOpen className="w-4 h-4" />
                <span>{course.lessons} lessons</span>
              </div>
              <div className="flex items-center gap-2 text-sm text-gray-500">
                <Users className="w-4 h-4" />
                <span>{course.students.toLocaleString()}</span>
              </div>
              <div className="flex items-center gap-2 text-sm text-gray-500">
                <Star className="w-4 h-4 text-yellow-400" />
                <span>{course.rating}</span>
              </div>
            </div>
            
            {/* CTA */}
            <div className="flex items-center justify-between">
              <span className="text-lg font-semibold text-white">
                {isComingSoon ? course.launchDate : course.price}
              </span>
              <span className="flex items-center gap-1 text-purple-400 group-hover:gap-2 transition-all">
                {isComingSoon ? 'Get notified' : 'View course'}
                <ArrowRight className="w-4 h-4" />
              </span>
            </div>
          </div>
        </div>
      </Link>
    </motion.div>
  )
}

export default function CoursesPage() {
  const featuredCourse = courses[0]

  return (
    <PageWrapper>
      {/* Hero Section */}
      <section className="relative min-h-[50vh] flex items-center justify-center px-6 py-24 overflow-hidden">
        <div className="absolute inset-0">
          <div className="absolute inset-0 bg-gradient-to-b from-purple-500/5 via-blue-500/5 to-transparent" />
        </div>
        
        <div className="relative z-10 max-w-4xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5 }}
            className="mb-6"
          >
            <GraduationCap className="w-16 h-16 text-purple-400 mx-auto mb-6" />
          </motion.div>
          
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-5xl lg:text-7xl font-display font-bold text-white mb-6"
          >
            Learn by
            <span className="block bg-gradient-to-r from-purple-400 to-blue-400 bg-clip-text text-transparent">
              Building
            </span>
          </motion.h1>
          
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="text-xl text-gray-400 max-w-2xl mx-auto"
          >
            Practical courses designed to help you master complex topics through 
            hands-on projects and real-world applications.
          </motion.p>
        </div>
      </section>
      
      {/* Featured Course */}
      <section className="px-6 py-16 border-y border-slate-800">
        <div className="max-w-6xl mx-auto">
          <div className="flex items-center gap-2 mb-8">
            <Zap className="w-5 h-5 text-yellow-400" />
            <span className="text-yellow-400 font-mono text-sm">Featured Course</span>
          </div>
          
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <Badge variant="purple" className="mb-4">{featuredCourse.level}</Badge>
              <h2 className="text-3xl lg:text-4xl font-display font-bold text-white mb-4">
                {featuredCourse.title}
              </h2>
              <p className="text-xl text-purple-400 mb-4">{featuredCourse.subtitle}</p>
              <p className="text-gray-400 mb-6">{featuredCourse.longDescription}</p>
              
              {/* What you'll learn */}
              <div className="mb-8">
                <h3 className="text-lg font-semibold text-white mb-4">What you'll learn:</h3>
                <div className="grid grid-cols-2 gap-3">
                  {featuredCourse.outcomes.map((outcome, i) => (
                    <div key={i} className="flex items-start gap-2">
                      <CheckCircle className="w-5 h-5 text-green-400 flex-shrink-0 mt-0.5" />
                      <span className="text-sm text-gray-300">{outcome}</span>
                    </div>
                  ))}
                </div>
              </div>
              
              <div className="flex items-center gap-4">
                <Link
                  href={featuredCourse.link}
                  className="inline-flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-purple-500 to-blue-500 text-white font-semibold rounded-full hover:scale-105 transition-transform"
                >
                  Start learning
                  <ArrowRight className="w-5 h-5" />
                </Link>
                <div className="text-sm text-gray-500">
                  <div className="flex items-center gap-4">
                    <span className="flex items-center gap-1">
                      <Users className="w-4 h-4" />
                      {featuredCourse.students.toLocaleString()} students
                    </span>
                    <span className="flex items-center gap-1">
                      <Star className="w-4 h-4 text-yellow-400" />
                      {featuredCourse.rating} rating
                    </span>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="relative">
              <div className={`absolute inset-0 bg-gradient-to-br ${featuredCourse.gradient} blur-3xl opacity-20`} />
              <div className={`relative bg-gradient-to-br ${featuredCourse.gradient} rounded-2xl p-8 bg-opacity-10 border border-purple-500/20`}>
                <h4 className="text-xl font-semibold text-white mb-4">Course Topics</h4>
                <div className="space-y-3">
                  {featuredCourse.topics.map((topic, i) => (
                    <div key={i} className="flex items-center gap-3">
                      <div className="w-8 h-8 rounded-full bg-purple-500/20 flex items-center justify-center text-sm font-semibold text-purple-400">
                        {i + 1}
                      </div>
                      <span className="text-gray-300">{topic}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      
      {/* All Courses */}
      <section className="px-6 py-16">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-display font-bold text-white mb-8">All Courses</h2>
          
          <div className="grid lg:grid-cols-3 gap-6">
            {courses.map((course, i) => (
              <CourseCard key={course.id} course={course} index={i} />
            ))}
          </div>
        </div>
      </section>
      
      {/* CTA */}
      <section className="px-6 py-16 border-t border-slate-800">
        <div className="max-w-4xl mx-auto text-center">
          <Award className="w-12 h-12 text-purple-400 mx-auto mb-6" />
          <h2 className="text-3xl font-display font-bold text-white mb-4">
            Can't find what you're looking for?
          </h2>
          <p className="text-gray-400 mb-8">
            I'm always creating new courses based on community feedback. 
            Let me know what topic you'd like to learn next!
          </p>
          <Link
            href="/contact"
            className="inline-flex items-center gap-2 px-8 py-4 border-2 border-purple-500/30 text-purple-400 font-semibold rounded-full hover:bg-purple-500/10 hover:border-purple-500/50 transition-all"
          >
            Request a course
          </Link>
        </div>
      </section>
    </PageWrapper>
  )
}
