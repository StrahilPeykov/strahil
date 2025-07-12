'use client'

import { useState, useEffect } from 'react'
import { motion } from 'framer-motion'
import { GraduationCap, Calendar, TrendingUp, Brain, Pill, Award, Clock, Target, Zap } from 'lucide-react'
import { Metadata } from 'next'
import { PageWrapper } from '../../components/layout/PageWrapper'

// Course data converted from your Python file
const courses = [
  // Basic courses Y1
  { name: "USE basic: ethics and history of technology", code: "0SAB0", date: "2022-06-30", grade: 8, credits: 5 },
  { name: "Data analytics for engineers", code: "2IAB0", date: "2024-04-15", grade: 6, credits: 5 },
  { name: "Calculus variant 2", code: "2WBB0", date: "2022-01-24", grade: 6, credits: 5 },
  { name: "Industrial ecology to circular economy", code: "0SV20", date: "2025-04-14", grade: 8, credits: 5 },

  // Major Y1
  { name: "Computer systems", code: "2IC30", date: "2022-07-05", grade: 6, credits: 5 },
  { name: "DBL Embedded Systems", code: "2IO75", date: "2022-07-01", grade: 7, credits: 5 },
  { name: "Programming", code: "2IP90", date: "2021-11-02", grade: 8, credits: 5 },
  { name: "Logic and set theory", code: "2IT60", date: "2022-11-10", grade: 6, credits: 5 },
  { name: "Intro discrete structures", code: "2IT80", date: "2022-04-20", grade: 6, credits: 5 },
  { name: "Data Structures", code: "2IL50", date: "2025-04-16", grade: 6, credits: 5 },

  // Basic Y2
  { name: "Engineering design", code: "4WBB0", date: "2022-11-07", grade: 7, credits: 5 },

  // Major Y2
  { name: "Automata, Language Theory & Complexity", code: "2IT90", date: "2025-02-07", grade: 6, credits: 5 },
  { name: "Datamodelling and databases", code: "2ID50", date: "2024-04-09", grade: 6, credits: 5 },
  { name: "Programming methods", code: "2IPC0", date: "2024-04-10", grade: 6, credits: 5 },
  { name: "Software specification", code: "2IX20", date: "2023-04-12", grade: 7, credits: 5 },
  { name: "Linear algebra & applications", code: "2DBI00", date: "2023-06-30", grade: 8, credits: 5 },

  // Major Y2 elective
  { name: "DBL App development", code: "2IS70", date: "2023-04-23", grade: 9, credits: 5 },

  // Major Y3
  { name: "Probability and Statistics", code: "2DI90", date: "2024-11-07", grade: 7, credits: 5 },
  { name: "Data mining & machine learning", code: "2IIG0", date: "2024-01-31", grade: 8, credits: 5 },
  { name: "Operating systems", code: "2INC0", date: "2025-04-10", grade: 8, credits: 5 },
  { name: "Algorithms", code: "2ILC0", date: "2025-06-27", grade: 7, credits: 5 },

  // SEP
  { name: "Software Engineering Project", code: "2IPE0", date: "2025-07-04", grade: 8, credits: 10 },

  // Electives & trajectory
  { name: "Applied Logic", code: "2ITX0", date: "2022-04-22", grade: 6, credits: 5 },
  { name: "Provable programming", code: "2ITB0", date: "2024-04-12", grade: 6, credits: 5 },
  { name: "Data-intensive systems & apps", code: "2ID70", date: "2024-06-27", grade: 8, credits: 5 },
  { name: "Design for games & play II", code: "DZC20", date: "2025-01-30", grade: 8, credits: 5 },
  { name: "Design < > research", code: "DDB100", date: "2025-01-31", grade: 7, credits: 5 },
  { name: "Entrepreneurship in action", code: "1ZK40", date: "2025-03-27", grade: 7, credits: 10 },
  { name: "Creative programming", code: "DBB100", date: "2025-04-10", grade: 10, credits: 5 },
  { name: "Lab on Offensive Computer Security", code: "2IC80", date: "2025-06-26", grade: 9, credits: 5 },
  { name: "Intercultural design", code: "DCB210", date: "2025-06-26", grade: 7, credits: 5 },
  { name: "ID Green – sustainability", code: "DDB180", date: "2025-06-26", grade: 7, credits: 5 },
  { name: "Designing business processes", code: "1JZK40", date: "2025-07-01", grade: 7, credits: 5 },
  { name: "Security", code: "2IRR40", date: "2025-06-24", grade: 7, credits: 5 },
]

// Key events timeline
const timeline = [
  { date: "2021-09-01", event: "Started at TU/e", type: "start" as const, icon: GraduationCap },
  { date: "2024-07-01", event: "Should have graduated (3 years)", type: "missed" as const, icon: Target },
  { date: "2024-11-01", event: "ADHD Diagnosis", type: "diagnosis" as const, icon: Brain },
  { date: "2025-02-01", event: "Started Elvanse", type: "medication" as const, icon: Pill },
  { date: "2025-07-04", event: "Actually graduated!", type: "graduation" as const, icon: Award },
]

function getSemesterLabel(date: string) {
  const d = new Date(date)
  const startYear = d.getMonth() >= 8 ? d.getFullYear() : d.getFullYear() - 1
  const semester = (d.getMonth() >= 8 || d.getMonth() <= 1) ? 1 : 2
  return `${startYear}/${String(startYear + 1).slice(-2)}-S${semester}`
}

function ProgressChart() {
  const sortedCourses = [...courses].sort((a, b) => new Date(a.date).getTime() - new Date(b.date).getTime())
  
  // Calculate cumulative credits
  let cumulative = 0
  const progressData = sortedCourses.map(course => {
    cumulative += course.credits
    return {
      ...course,
      cumulativeCredits: cumulative,
      date: new Date(course.date)
    }
  })

  // Expected progress (30 credits per semester, starting Sept 2021)
  const startDate = new Date('2021-09-01')
  const expectedData = []
  for (let i = 0; i <= 8; i++) { // 4 years = 8 semesters
    const semesterDate = new Date(startDate)
    semesterDate.setMonth(startDate.getMonth() + i * 6)
    expectedData.push({
      date: semesterDate,
      expectedCredits: i * 30
    })
  }

  const maxCredits = Math.max(180, cumulative)

  return (
    <div className="bg-slate-900/50 rounded-xl p-6 border border-slate-800">
      <h3 className="text-xl font-semibold text-white mb-4 flex items-center gap-2">
        <TrendingUp className="w-5 h-5 text-blue-400" />
        Credits Progress Over Time
      </h3>
      
      <div className="relative h-80 w-full">
        <svg viewBox="0 0 800 300" className="w-full h-full">
          {/* Grid lines */}
          {[0, 30, 60, 90, 120, 150, 180].map(credits => (
            <g key={credits}>
              <line
                x1="50"
                y1={250 - (credits / maxCredits) * 200}
                x2="750"
                y2={250 - (credits / maxCredits) * 200}
                stroke="#334155"
                strokeWidth="1"
                strokeDasharray="5,5"
              />
              <text
                x="40"
                y={250 - (credits / maxCredits) * 200 + 5}
                fill="#64748b"
                fontSize="12"
                textAnchor="end"
              >
                {credits}
              </text>
            </g>
          ))}

          {/* Expected progress line */}
          <path
            d={`M 50,250 ${expectedData.map((d, i) => 
              `L ${50 + (i / (expectedData.length - 1)) * 700},${250 - (d.expectedCredits / maxCredits) * 200}`
            ).join(' ')}`}
            fill="none"
            stroke="#ef4444"
            strokeWidth="2"
            strokeDasharray="10,5"
          />

          {/* Actual progress line */}
          <path
            d={`M 50,250 ${progressData.map((d, i) => {
              const years = (d.date.getTime() - startDate.getTime()) / (365.25 * 24 * 60 * 60 * 1000)
              const x = 50 + (years / 4) * 700
              const y = 250 - (d.cumulativeCredits / maxCredits) * 200
              return `L ${x},${y}`
            }).join(' ')}`}
            fill="none"
            stroke="#22c55e"
            strokeWidth="3"
          />

          {/* Timeline events */}
          {timeline.map((event, i) => {
            const years = (new Date(event.date).getTime() - startDate.getTime()) / (365.25 * 24 * 60 * 60 * 1000)
            const x = 50 + (years / 4) * 700
            const colors: Record<string, string> = {
              start: '#3b82f6',
              missed: '#ef4444', 
              diagnosis: '#f59e0b',
              medication: '#8b5cf6',
              graduation: '#22c55e'
            }
            const color = colors[event.type] || colors.start
            
            return (
              <g key={i}>
                <line x1={x} y1="50" x2={x} y2="250" stroke={color} strokeWidth="2" opacity="0.7" />
                <circle cx={x} cy="30" r="4" fill={color} />
              </g>
            )
          })}
        </svg>
        
        {/* Legend */}
        <div className="absolute top-2 right-2 bg-slate-800/80 rounded p-2 text-xs">
          <div className="flex items-center gap-2 text-red-400">
            <div className="w-4 h-0.5 bg-red-400 border-dashed"></div>
            Expected (3 years)
          </div>
          <div className="flex items-center gap-2 text-green-400">
            <div className="w-4 h-0.5 bg-green-400"></div>
            Actual progress
          </div>
        </div>
      </div>
    </div>
  )
}

function SemesterBreakdown() {
  // Group by semester
  const semesterData = courses.reduce((acc, course) => {
    const semester = getSemesterLabel(course.date)
    if (!acc[semester]) {
      acc[semester] = { credits: 0, courses: [], avgGrade: 0 }
    }
    acc[semester].credits += course.credits
    acc[semester].courses.push(course)
    return acc
  }, {} as Record<string, { credits: number; courses: typeof courses; avgGrade: number }>)

  // Calculate average grades
  Object.keys(semesterData).forEach(sem => {
    const coursesInSem = semesterData[sem].courses
    semesterData[sem].avgGrade = coursesInSem.reduce((sum, c) => sum + c.grade, 0) / coursesInSem.length
  })

  const semesters = Object.keys(semesterData).sort()

  return (
    <div className="bg-slate-900/50 rounded-xl p-6 border border-slate-800">
      <h3 className="text-xl font-semibold text-white mb-4 flex items-center gap-2">
        <Calendar className="w-5 h-5 text-purple-400" />
        Semester Breakdown
      </h3>
      
      <div className="grid gap-3">
        {semesters.map(semester => {
          const data = semesterData[semester]
          const isLowCredits = data.credits < 20
          
          return (
            <div key={semester} className={`p-4 rounded-lg border ${
              isLowCredits ? 'border-red-500/30 bg-red-500/5' : 'border-slate-700 bg-slate-800/30'
            }`}>
              <div className="flex justify-between items-center">
                <div>
                  <h4 className="font-semibold text-white">{semester}</h4>
                  <p className="text-sm text-gray-400">{data.courses.length} courses</p>
                </div>
                <div className="text-right">
                  <div className="text-lg font-bold text-white">{data.credits} ECTS</div>
                  <div className="text-sm text-gray-400">Avg: {data.avgGrade.toFixed(1)}</div>
                </div>
              </div>
              
              {/* Progress bar showing credits vs 30 target */}
              <div className="mt-2">
                <div className="w-full bg-slate-700 rounded-full h-2">
                  <div 
                    className={`h-2 rounded-full ${
                      data.credits >= 30 ? 'bg-green-500' : 
                      data.credits >= 20 ? 'bg-yellow-500' : 'bg-red-500'
                    }`}
                    style={{ width: `${Math.min(100, (data.credits / 30) * 100)}%` }}
                  />
                </div>
                <div className="text-xs text-gray-500 mt-1">
                  {data.credits}/30 credits (target)
                </div>
              </div>
            </div>
          )
        })}
      </div>
    </div>
  )
}

function Timeline() {
  const [selectedEvent, setSelectedEvent] = useState<number | null>(null)

  return (
    <div className="bg-slate-900/50 rounded-xl p-6 border border-slate-800">
      <h3 className="text-xl font-semibold text-white mb-6 flex items-center gap-2">
        <Clock className="w-5 h-5 text-blue-400" />
        The Journey Timeline
      </h3>
      
      <div className="relative">
        {/* Timeline line */}
        <div className="absolute left-6 top-0 bottom-0 w-0.5 bg-slate-700"></div>
        
        <div className="space-y-8">
          {timeline.map((event, i) => {
            const Icon = event.icon
            const colors: Record<string, string> = {
              start: 'text-blue-400 bg-blue-500/20',
              missed: 'text-red-400 bg-red-500/20',
              diagnosis: 'text-yellow-400 bg-yellow-500/20',
              medication: 'text-purple-400 bg-purple-500/20',
              graduation: 'text-green-400 bg-green-500/20'
            }
            
            return (
              <motion.div
                key={i}
                className="relative flex items-center gap-4 cursor-pointer"
                onClick={() => setSelectedEvent(selectedEvent === i ? null : i)}
                whileHover={{ scale: 1.02 }}
              >
                {/* Timeline dot */}
                <div className={`relative z-10 w-12 h-12 rounded-full border-2 border-slate-800 ${colors[event.type] || colors.start} flex items-center justify-center`}>
                  <Icon className="w-6 h-6" />
                </div>
                
                {/* Content */}
                <div className="flex-1">
                  <h4 className="font-semibold text-white">{event.event}</h4>
                  <p className="text-sm text-gray-400">{new Date(event.date).toLocaleDateString()}</p>
                  
                  {selectedEvent === i && (
                    <motion.div
                      initial={{ opacity: 0, height: 0 }}
                      animate={{ opacity: 1, height: 'auto' }}
                      className="mt-2 text-sm text-gray-300"
                    >
                      {event.type === 'start' && "The beginning of an adventure that would take longer than expected..."}
                      {event.type === 'missed' && "Oops! Supposed to graduate here but only had ~90 credits. Time for year 4!"}
                      {event.type === 'diagnosis' && "Finally got diagnosed with ADHD after years of struggling. Everything started making sense."}
                      {event.type === 'medication' && "Started taking Elvanse (lisdexamfetamine). Game changer! 🚀"}
                      {event.type === 'graduation' && "Finally made it! 180 credits achieved after 4 years. Better late than never! 🎉"}
                    </motion.div>
                  )}
                </div>
              </motion.div>
            )
          })}
        </div>
      </div>
    </div>
  )
}

function Stats() {
  const totalCredits = courses.reduce((sum, course) => sum + course.credits, 0)
  const avgGrade = courses.reduce((sum, course) => sum + course.grade, 0) / courses.length
  const highestGrade = Math.max(...courses.map(c => c.grade))
  const coursesAfterMedication = courses.filter(c => new Date(c.date) >= new Date('2025-02-01'))
  const avgGradeAfterMeds = coursesAfterMedication.length > 0 
    ? coursesAfterMedication.reduce((sum, c) => sum + c.grade, 0) / coursesAfterMedication.length 
    : 0

  return (
    <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4">
      <div className="bg-slate-900/50 rounded-xl p-6 border border-slate-800 text-center">
        <div className="text-3xl font-bold text-green-400 mb-2">{totalCredits}</div>
        <div className="text-sm text-gray-400">Total ECTS Credits</div>
      </div>
      
      <div className="bg-slate-900/50 rounded-xl p-6 border border-slate-800 text-center">
        <div className="text-3xl font-bold text-blue-400 mb-2">{avgGrade.toFixed(1)}</div>
        <div className="text-sm text-gray-400">Average Grade</div>
      </div>
      
      <div className="bg-slate-900/50 rounded-xl p-6 border border-slate-800 text-center">
        <div className="text-3xl font-bold text-purple-400 mb-2">{highestGrade}</div>
        <div className="text-sm text-gray-400">Highest Grade</div>
      </div>
      
      <div className="bg-slate-900/50 rounded-xl p-6 border border-slate-800 text-center">
        <div className="text-3xl font-bold text-yellow-400 mb-2">
          {avgGradeAfterMeds > 0 ? `+${(avgGradeAfterMeds - avgGrade).toFixed(1)}` : '?'}
        </div>
        <div className="text-sm text-gray-400">Post-Medication Boost</div>
      </div>
    </div>
  )
}

function TUeSecretPage() {
  return (
    <div className="min-h-screen bg-slate-950 text-white p-6">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center mb-12"
        >
          <div className="flex items-center justify-center gap-3 mb-4">
            <GraduationCap className="w-8 h-8 text-blue-400" />
            <h1 className="text-4xl font-bold">My TU/e Journey</h1>
            <Zap className="w-8 h-8 text-yellow-400" />
          </div>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto">
            The epic tale of how a 3-year degree became a 4-year adventure, featuring plot twists, 
            ADHD diagnosis, magical medication, and eventual triumph! 🎓
          </p>
          <div className="mt-4 text-sm text-gray-500">
            🤫 This is a secret page. You found it!
          </div>
        </motion.div>

        {/* Stats */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1 }}
          className="mb-8"
        >
          <Stats />
        </motion.div>

        {/* Charts */}
        <div className="grid lg:grid-cols-2 gap-8 mb-8">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.2 }}
          >
            <ProgressChart />
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.3 }}
          >
            <SemesterBreakdown />
          </motion.div>
        </div>

        {/* Timeline */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4 }}
          className="mb-8"
        >
          <Timeline />
        </motion.div>

        {/* Fun footer */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5 }}
          className="text-center text-gray-500 text-sm"
        >
          <p>Built with React, love, and a healthy dose of ADHD hyperfocus 💊✨</p>
          <p className="mt-2">
            "The best time to plant a tree was 20 years ago. The second best time is now. 
            The third best time is after getting your ADHD diagnosis." - Ancient Proverb (probably)
          </p>
        </motion.div>
      </div>
    </div>
  )
}

export default function SecretPage() {
  return (
    <PageWrapper showHeader={false} showFooter={false}>
      <TUeSecretPage />
    </PageWrapper>
  )
}