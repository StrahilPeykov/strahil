'use client'

import { motion, AnimatePresence } from 'framer-motion'
import { Dumbbell, TrendingUp, Target, Calendar, Clock, Zap, Trophy, Heart, Activity, BarChart3, Mountain, Timer, Award, ChevronRight, Code2, Users, Palette, BookOpenCheck } from 'lucide-react'
import { PageWrapper } from '../../components/layout/PageWrapper'
import { Badge } from '../../components/ui/Badge'
import Link from 'next/link'
import { useRef, useState } from 'react'

const workoutStats = {
  currentBodyFat: 21,
  targetBodyFat: 15,
  currentWeight: 75,
  vo2Max: 50
}

const personalRecords = [
  { exercise: 'Deadlift', weight: '160kg', reps: 1, date: '2025-01-15' },
  { exercise: 'Squat', weight: '140kg', reps: 1, date: '2025-01-08' },
  { exercise: 'Bench Press', weight: '110kg', reps: 1, date: '2025-01-10' },
  { exercise: 'Incline Barbell Press', weight: '90kg', reps: 5, date: '2025-01-05' },
  { exercise: 'Hack Squat', weight: '200kg', reps: 8, date: '2024-12-20' },
  { exercise: 'Lat Pulldown', weight: '80kg', reps: 10, date: '2024-12-15' }
]

const trainingPhilosophy = [
  {
    title: 'Sustainable Body Composition',
    description: 'Targeting 15-20% body fat while slowly building muscle',
    icon: Target,
    color: 'text-blue-400'
  },
  {
    title: 'Bodybuilding Foundation',
    description: 'Strength and hypertrophy split for balanced development',
    icon: TrendingUp,
    color: 'text-purple-400'
  },
  {
    title: 'Progressive Overload',
    description: 'Last set to failure, consistent weight progression',
    icon: Activity,
    color: 'text-pink-400'
  },
  {
    title: 'Recovery Integration',
    description: 'Zone 2 cardio and planned rest days for longevity',
    icon: Heart,
    color: 'text-green-400'
  }
]

const weeklySchedule = [
  { day: 'Monday', focus: 'Upper (Strength) + Zone 2 Cardio', type: 'strength' },
  { day: 'Tuesday', focus: 'Lower (Strength)', type: 'strength' },
  { day: 'Wednesday', focus: 'Rest Day + Zone 2 Cardio', type: 'recovery' },
  { day: 'Thursday', focus: 'Push (Hypertrophy) + Zone 2 Cardio', type: 'hypertrophy' },
  { day: 'Friday', focus: 'Pull (Hypertrophy) + HIIT', type: 'hypertrophy' },
  { day: 'Saturday', focus: 'Legs (Hypertrophy) + Zone 2 Cardio', type: 'hypertrophy' },
  { day: 'Sunday', focus: 'Rest Day + Light Activity', type: 'rest' }
]

const progressData = [
  { month: 'Oct', deadlift: 140, squat: 120, bench: 95 },
  { month: 'Nov', deadlift: 145, squat: 125, bench: 100 },
  { month: 'Dec', deadlift: 155, squat: 135, bench: 105 },
  { month: 'Jan', deadlift: 160, squat: 140, bench: 110 }
]

function ProgressChart() {
  const maxWeight = 200
  
  return (
    <div className="relative h-64">
      <div className="absolute inset-0 grid grid-cols-4 gap-8">
        {progressData.map((data, index) => (
          <div key={data.month} className="relative">
            <motion.div
              className="absolute bottom-0 left-0 w-4 bg-gradient-to-t from-blue-500 to-blue-400 rounded-t"
              initial={{ height: 0 }}
              animate={{ height: `${(data.deadlift / maxWeight) * 100}%` }}
              transition={{ delay: index * 0.1, duration: 0.8 }}
            />
            <motion.div
              className="absolute bottom-0 left-6 w-4 bg-gradient-to-t from-purple-500 to-purple-400 rounded-t"
              initial={{ height: 0 }}
              animate={{ height: `${(data.squat / maxWeight) * 100}%` }}
              transition={{ delay: index * 0.1 + 0.1, duration: 0.8 }}
            />
            <motion.div
              className="absolute bottom-0 left-12 w-4 bg-gradient-to-t from-pink-500 to-pink-400 rounded-t"
              initial={{ height: 0 }}
              animate={{ height: `${(data.bench / maxWeight) * 100}%` }}
              transition={{ delay: index * 0.1 + 0.2, duration: 0.8 }}
            />
            <div className="absolute -bottom-8 left-0 right-0 text-center text-sm text-gray-500">
              {data.month}
            </div>
          </div>
        ))}
      </div>
      
      {/* Legend */}
      <div className="absolute top-0 right-0 flex gap-4 text-sm">
        <div className="flex items-center gap-2">
          <div className="w-3 h-3 bg-blue-500 rounded" />
          <span className="text-gray-400">Deadlift</span>
        </div>
        <div className="flex items-center gap-2">
          <div className="w-3 h-3 bg-purple-500 rounded" />
          <span className="text-gray-400">Squat</span>
        </div>
        <div className="flex items-center gap-2">
          <div className="w-3 h-3 bg-pink-500 rounded" />
          <span className="text-gray-400">Bench</span>
        </div>
      </div>
    </div>
  )
}

export default function HealthPage() {
  const cardRef = useRef<HTMLDivElement>(null)

  return (
    <PageWrapper>
      <div ref={cardRef}>
        {/* Hero Section */}
        <section className="relative min-h-[70vh] flex items-center justify-center px-6 py-32 overflow-hidden">
          {/* Animated background */}
          <div className="absolute inset-0">
            <div className="absolute inset-0 bg-gradient-to-b from-blue-500/5 via-purple-500/5 to-transparent" />
            
            {/* Animated elements */}
            {[...Array(10)].map((_, i) => (
              <motion.div
                key={i}
                className="absolute"
                style={{
                  left: `${Math.random() * 100}%`,
                  top: `${Math.random() * 100}%`,
                }}
                animate={{
                  y: [0, -30, 0],
                  rotate: [0, 360],
                }}
                transition={{
                  duration: 10 + i * 2,
                  repeat: Infinity,
                  ease: "linear",
                }}
              >
                <Dumbbell className="w-8 h-8 text-purple-300 opacity-10" />
              </motion.div>
            ))}
          </div>
          
          <div className="relative z-10 max-w-4xl mx-auto text-center">
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5 }}
              className="mb-6"
            >
              <Dumbbell className="w-16 h-16 text-white mx-auto mb-6" />
            </motion.div>
            
            <div className="flex items-center gap-2 mb-4 justify-center">
              <Dumbbell className="w-5 h-5 text-white" />
              <span className="text-white font-mono text-sm">My Fitness</span>
            </div>
            
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 }}
              className="text-5xl lg:text-7xl font-display font-bold text-white mb-6"
            >
              Health &
              <span className="block">Performance</span>
            </motion.h1>
            
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="text-xl text-white/80 max-w-2xl mx-auto mb-8"
            >
              Balancing muscle growth with sustainable body composition. A structured approach 
              to bodybuilding with integrated cardio and long-term health optimization.
            </motion.p>
            
            {/* Quick Stats */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
              className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-3xl mx-auto"
            >
              <div className="text-center">
                <div className="text-3xl font-display font-bold text-white mb-1 flex items-center justify-center gap-1">
                  {workoutStats.currentBodyFat}%
                  <Target className="w-5 h-5 text-white" />
                </div>
                <div className="text-sm text-white/60">Body Fat</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-display font-bold text-white mb-1">
                  {workoutStats.vo2Max}
                </div>
                <div className="text-sm text-white/60">VO2 Max</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-display font-bold text-white mb-1">
                  75kg
                </div>
                <div className="text-sm text-white/60">Current Weight</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-display font-bold text-white mb-1">
                  5
                </div>
                <div className="text-sm text-white/60">Training Days</div>
              </div>
            </motion.div>
          </div>
        </section>
        
        {/* Training Philosophy */}
        <section className="px-6 py-24 border-t border-outline">
          <div className="max-w-6xl mx-auto">
            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
            >
              <h2 className="text-3xl lg:text-4xl font-display font-bold text-white text-center mb-12">
                Training Philosophy
              </h2>
              
              <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
                {trainingPhilosophy.map((principle, index) => {
                  const Icon = principle.icon
                  return (
                    <motion.div
                      key={principle.title}
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true }}
                      transition={{ delay: index * 0.1 }}
                      className="text-center"
                    >
                      <div className={`w-16 h-16 mx-auto mb-4 rounded-2xl bg-slate-900/50 flex items-center justify-center border border-slate-800`}>
                        <Icon className={`w-8 h-8 ${principle.color}`} />
                      </div>
                      <h3 className="text-lg font-semibold text-white mb-2">{principle.title}</h3>
                      <p className="text-sm text-gray-400">{principle.description}</p>
                    </motion.div>
                  )
                })}
              </div>
            </motion.div>
          </div>
        </section>
        
        {/* Progress Tracking */}
        <section className="px-6 py-24">
          <div className="max-w-6xl mx-auto">
            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
            >
              <div className="flex items-center gap-3 mb-12">
                <BarChart3 className="w-8 h-8 text-blue-400" />
                <h2 className="text-3xl font-display font-bold text-white">Progress Tracking</h2>
              </div>
              
              <div className="grid lg:grid-cols-2 gap-12">
                {/* Progress Chart */}
                <div className="bg-slate-900/50 backdrop-blur-sm border border-slate-800 rounded-2xl p-8">
                  <h3 className="text-xl font-semibold text-white mb-6">Big 3 Progress (kg)</h3>
                  <ProgressChart />
                  <div className="mt-4 text-center">
                    <p className="text-sm text-gray-500">
                      Current PRs: Deadlift 160kg • Squat 140kg • Bench 110kg
                    </p>
                  </div>
                </div>
                
                {/* Personal Records */}
                <div className="bg-slate-900/50 backdrop-blur-sm border border-slate-800 rounded-2xl p-8">
                  <h3 className="text-xl font-semibold text-white mb-6 flex items-center gap-2">
                    <Trophy className="w-6 h-6 text-yellow-400" />
                    Personal Records
                  </h3>
                  
                  <div className="space-y-3">
                    {personalRecords.slice(0, 4).map((pr, index) => (
                      <motion.div
                        key={pr.exercise}
                        initial={{ opacity: 0, x: 20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: index * 0.1 }}
                        className="flex items-center justify-between p-3 bg-slate-800/50 rounded-lg"
                      >
                        <div>
                          <h4 className="text-white font-medium">{pr.exercise}</h4>
                          <p className="text-sm text-gray-500">{pr.date}</p>
                        </div>
                        <div className="text-right">
                          <p className="text-lg font-semibold text-purple-400">{pr.weight}</p>
                          <p className="text-sm text-gray-500">{pr.reps} {typeof pr.reps === 'number' ? 'rep' : ''}</p>
                        </div>
                      </motion.div>
                    ))}
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </section>
        
        {/* Training Split */}
        <section className="px-6 py-24 border-t border-slate-800">
          <div className="max-w-6xl mx-auto">
            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
            >
              <div className="flex items-center gap-3 mb-12">
                <Calendar className="w-8 h-8 text-purple-400" />
                <h2 className="text-3xl font-display font-bold text-white">Weekly Training Split</h2>
              </div>
              
              <div className="grid gap-3">
                {weeklySchedule.map((day, index) => (
                  <motion.div
                    key={day.day}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.05 }}
                    className={`flex items-center justify-between p-4 rounded-xl border transition-all ${
                      day.type === 'rest' 
                        ? 'bg-slate-900/30 border-slate-800' 
                        : 'bg-slate-900/50 border-slate-800 hover:border-purple-500/30'
                    }`}
                  >
                    <div className="flex items-center gap-4">
                      <div className={`w-2 h-12 rounded-full ${
                        day.type === 'strength' ? 'bg-purple-500' :
                        day.type === 'hypertrophy' ? 'bg-blue-500' :
                        day.type === 'recovery' ? 'bg-green-500' :
                        'bg-gray-700'
                      }`} />
                      <div>
                        <h3 className="text-white font-medium">{day.day}</h3>
                        <p className="text-sm text-gray-400">{day.focus}</p>
                      </div>
                    </div>
                    
                    <Badge 
                      variant={
                        day.type === 'strength' ? 'purple' :
                        day.type === 'hypertrophy' ? 'blue' :
                        day.type === 'recovery' ? 'success' :
                        'default'
                      }
                      size="sm"
                    >
                      {day.type}
                    </Badge>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </div>
        </section>
        
        {/* Training Split Details */}
        <section className="px-6 py-24">
          <div className="max-w-6xl mx-auto">
            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
            >
              <h2 className="text-3xl lg:text-4xl font-display font-bold text-white mb-12 text-center">
                Current Program
              </h2>
              
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
                {/* Upper Strength */}
                <div className="bg-slate-900/50 backdrop-blur-sm border border-slate-800 rounded-xl p-6">
                  <h3 className="text-lg font-semibold text-white mb-4 flex items-center gap-2">
                    <Code2 className="w-5 h-5 text-blue-400" />
                    Upper (Strength)
                  </h3>
                  <div className="space-y-2 text-sm text-gray-300">
                    <div>• Incline Barbell Press</div>
                    <div>• Pec Deck</div>
                    <div>• Pull-ups</div>
                    <div>• High-cable Lateral Raise</div>
                    <div>• Pendlay Deficit Row</div>
                    <div>• Overhead Tricep Extension</div>
                    <div>• Cable Bicep Curl</div>
                  </div>
                </div>
                
                {/* Lower Strength */}
                <div className="bg-slate-900/50 backdrop-blur-sm border border-slate-800 rounded-xl p-6">
                  <h3 className="text-lg font-semibold text-white mb-4 flex items-center gap-2">
                    <Code2 className="w-5 h-5 text-purple-400" />
                    Lower (Strength)
                  </h3>
                  <div className="space-y-2 text-sm text-gray-300">
                    <div>• Leg Curl</div>
                    <div>• Hack Squat</div>
                    <div>• Barbell RDL</div>
                    <div>• Leg Extension</div>
                    <div>• Hack Squat Calf Raise</div>
                    <div>• Crunches on Machine</div>
                  </div>
                </div>
                
                {/* Push Hypertrophy */}
                <div className="bg-slate-900/50 backdrop-blur-sm border border-slate-800 rounded-xl p-6">
                  <h3 className="text-lg font-semibold text-white mb-4 flex items-center gap-2">
                    <Code2 className="w-5 h-5 text-green-400" />
                    Push (Hypertrophy)
                  </h3>
                  <div className="space-y-2 text-sm text-gray-300">
                    <div>• Bench Press</div>
                    <div>• DB Shoulder Press</div>
                    <div>• DB Flye</div>
                    <div>• High-cable Lateral Raise</div>
                    <div>• Overhead Tricep Extension</div>
                    <div>• Cable Tricep Kickback</div>
                    <div>• Leg Raises</div>
                  </div>
                </div>
                
                {/* Pull Hypertrophy */}
                <div className="bg-slate-900/50 backdrop-blur-sm border border-slate-800 rounded-xl p-6">
                  <h3 className="text-lg font-semibold text-white mb-4 flex items-center gap-2">
                    <Code2 className="w-5 h-5 text-pink-400" />
                    Pull (Hypertrophy)
                  </h3>
                  <div className="space-y-2 text-sm text-gray-300">
                    <div>• Lat Pulldown</div>
                    <div>• Chest-Supported DB Row</div>
                    <div>• Seated Cable Row</div>
                    <div>• Cable Rear Delt Flye</div>
                    <div>• Cable Shrug</div>
                    <div>• EZ-bar Cable Curl</div>
                    <div>• Preacher Curl</div>
                  </div>
                </div>
                
                {/* Legs Hypertrophy */}
                <div className="bg-slate-900/50 backdrop-blur-sm border border-slate-800 rounded-xl p-6">
                  <h3 className="text-lg font-semibold text-white mb-4 flex items-center gap-2">
                    <Code2 className="w-5 h-5 text-yellow-400" />
                    Legs (Hypertrophy)
                  </h3>
                  <div className="space-y-2 text-sm text-gray-300">
                    <div>• Leg Press</div>
                    <div>• Leg Curl</div>
                    <div>• DB Bulgarian Split Squats</div>
                    <div>• Leg Extension</div>
                    <div>• Machine Hip Adduction</div>
                    <div>• Machine Hip Abduction</div>
                    <div>• Hack Squat Calf Raise</div>
                  </div>
                </div>
                
                {/* Warm-up Protocol */}
                <div className="bg-slate-900/50 backdrop-blur-sm border border-slate-800 rounded-xl p-6">
                  <h3 className="text-lg font-semibold text-white mb-4 flex items-center gap-2">
                    <Code2 className="w-5 h-5 text-orange-400" />
                    Warm-up Protocol
                  </h3>
                  <div className="space-y-2 text-sm text-gray-300">
                    <div>• 5-10min light cardio</div>
                    <div>• 10 reps arm swings (each direction)</div>
                    <div>• 10 reps arm circles (each side)</div>
                    <div>• 15 reps cable external rotation</div>
                    <div>• Leg swings on leg days</div>
                    <div>• Exercise-specific warm-up sets</div>
                  </div>
                </div>
              </div>
              
              {/* Training Notes */}
              <div className="bg-gradient-to-r from-purple-500/10 to-blue-500/10 rounded-xl p-6 border border-purple-500/20">
                <h3 className="text-lg font-semibold text-white mb-3">Training Notes</h3>
                <ul className="space-y-2 text-gray-300 text-sm">
                  <li>• Early sets: Slightly easier RPE, building to working weight</li>
                  <li>• Last set: Pushed to failure on all exercises</li>
                  <li>• 1-4 exercise-specific warm-up sets per exercise</li>
                  <li>• Focus on progressive overload and form</li>
                  <li>• Integrated cardio on training days</li>
                </ul>
              </div>
            </motion.div>
          </div>
        </section>
        
        {/* Nutrition Section */}
        <section className="px-6 py-24 border-t border-slate-800">
          <div className="max-w-6xl mx-auto">
            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
            >
              <h2 className="text-3xl lg:text-4xl font-display font-bold text-white mb-12 text-center">
                Nutrition Strategy
              </h2>
              
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
                {/* Daily Macros */}
                <div className="bg-slate-900/50 backdrop-blur-sm border border-slate-800 rounded-xl p-6">
                  <h3 className="text-lg font-semibold text-white mb-4">Daily Targets</h3>
                  <div className="space-y-3">
                    <div className="flex justify-between">
                      <span className="text-gray-400">Calories</span>
                      <span className="text-white font-semibold">2,250</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-gray-400">Protein (30%)</span>
                      <span className="text-blue-400 font-semibold">170g</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-gray-400">Carbs (40%)</span>
                      <span className="text-green-400 font-semibold">230g</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-gray-400">Fat (30%)</span>
                      <span className="text-yellow-400 font-semibold">80g</span>
                    </div>
                  </div>
                  <div className="mt-4 pt-4 border-t border-slate-700">
                    <p className="text-xs text-gray-500">Slight cut: -0.3kg/week</p>
                  </div>
                </div>
                
                {/* Foods I Avoid */}
                <div className="bg-slate-900/50 backdrop-blur-sm border border-slate-800 rounded-xl p-6">
                  <h3 className="text-lg font-semibold text-white mb-4">Foods I Avoid</h3>
                  <div className="space-y-2 text-sm text-gray-300">
                    <div>• Added sugar (except fruits)</div>
                    <div>• Highly processed foods</div>
                    <div>• Fried foods & trans fats</div>
                    <div>• Pasta & bread</div>
                    <div>• Canola/corn/soybean oils</div>
                    <div>• High-fructose corn syrup</div>
                    <div>• Aspartame & artificial gums</div>
                    <div>• Alcohol</div>
                  </div>
                </div>
                
                {/* Supplements */}
                <div className="bg-slate-900/50 backdrop-blur-sm border border-slate-800 rounded-xl p-6">
                  <h3 className="text-lg font-semibold text-white mb-4">Supplement Stack</h3>
                  <div className="space-y-3 text-sm">
                    <div>
                      <div className="text-blue-400 font-medium">Morning</div>
                      <div className="text-gray-300">Vitamin K2 + D3</div>
                    </div>
                    <div>
                      <div className="text-green-400 font-medium">Lunch</div>
                      <div className="text-gray-300">Saffron + L-theanine</div>
                    </div>
                    <div>
                      <div className="text-orange-400 font-medium">Dinner</div>
                      <div className="text-gray-300">Omega-3 + Vitamin D3</div>
                    </div>
                    <div>
                      <div className="text-purple-400 font-medium">Before Bed</div>
                      <div className="text-gray-300">Magnesium complex + B6</div>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </section>
        
        {/* Health Metrics */}
        <section className="px-6 py-24">
          <div className="max-w-4xl mx-auto">
            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
            >
              <h2 className="text-3xl lg:text-4xl font-display font-bold text-white mb-12 text-center">
                Health Metrics
              </h2>
              
              <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6 mb-8">
                {/* Basic Stats */}
                <div className="bg-slate-900/50 backdrop-blur-sm border border-slate-800 rounded-xl p-4 text-center">
                  <div className="text-2xl font-bold text-blue-400 mb-1">23</div>
                  <div className="text-xs text-gray-500">Age</div>
                </div>
                <div className="bg-slate-900/50 backdrop-blur-sm border border-slate-800 rounded-xl p-4 text-center">
                  <div className="text-2xl font-bold text-green-400 mb-1">178cm</div>
                  <div className="text-xs text-gray-500">Height</div>
                </div>
                <div className="bg-slate-900/50 backdrop-blur-sm border border-slate-800 rounded-xl p-4 text-center">
                  <div className="text-2xl font-bold text-purple-400 mb-1">75kg</div>
                  <div className="text-xs text-gray-500">Weight</div>
                </div>
                <div className="bg-slate-900/50 backdrop-blur-sm border border-slate-800 rounded-xl p-4 text-center">
                  <div className="text-2xl font-bold text-yellow-400 mb-1">23</div>
                  <div className="text-xs text-gray-500">BMI</div>
                </div>
                <div className="bg-slate-900/50 backdrop-blur-sm border border-slate-800 rounded-xl p-4 text-center">
                  <div className="text-2xl font-bold text-pink-400 mb-1">21%</div>
                  <div className="text-xs text-gray-500">Body Fat</div>
                </div>
              </div>
              
              <div className="bg-slate-900/30 rounded-xl p-6 border border-slate-800">
                <h3 className="text-lg font-semibold text-white mb-4 flex items-center gap-2">
                  <Activity className="w-5 h-5 text-red-400" />
                  Whoop Recovery Metrics
                </h3>
                <div className="grid grid-cols-2 md:grid-cols-5 gap-6">
                  <div className="text-center">
                    <div className="text-xl font-bold text-blue-400 mb-1">60</div>
                    <div className="text-xs text-gray-500">RHR (bpm)</div>
                  </div>
                  <div className="text-center">
                    <div className="text-xl font-bold text-green-400 mb-1">40ms</div>
                    <div className="text-xs text-gray-500">HRV</div>
                  </div>
                  <div className="text-center">
                    <div className="text-xl font-bold text-purple-400 mb-1">15</div>
                    <div className="text-xs text-gray-500">Resp Rate</div>
                  </div>
                  <div className="text-center">
                    <div className="text-xl font-bold text-yellow-400 mb-1">95%</div>
                    <div className="text-xs text-gray-500">SpO2</div>
                  </div>
                  <div className="text-center">
                    <div className="text-xl font-bold text-pink-400 mb-1">34°</div>
                    <div className="text-xs text-gray-500">Skin Temp</div>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </section>
        
        {/* Health Habits */}
        <section className="px-6 py-24 border-t border-slate-800">
          <div className="max-w-6xl mx-auto">
            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
            >
              <h2 className="text-3xl lg:text-4xl font-display font-bold text-white mb-12 text-center">
                Daily Habits
              </h2>
              
              <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
                <div className="bg-slate-900/50 backdrop-blur-sm border border-slate-800 rounded-xl p-6">
                  <h3 className="text-lg font-semibold text-white mb-4 flex items-center gap-2">
                    <Users className="w-5 h-5 text-blue-400" />
                    Hair Care
                  </h3>
                  <div className="space-y-2 text-sm text-gray-300">
                    <div>• Wash 2x per week</div>
                    <div>• Shampoo roots only</div>
                    <div>• Conditioner on ends</div>
                    <div>• Cold water rinse</div>
                    <div>• Hair oil on ends</div>
                  </div>
                </div>
                
                <div className="bg-slate-900/50 backdrop-blur-sm border border-slate-800 rounded-xl p-6">
                  <h3 className="text-lg font-semibold text-white mb-4 flex items-center gap-2">
                    <Palette className="w-5 h-5 text-green-400" />
                    Skincare Goals
                  </h3>
                  <div className="space-y-2 text-sm text-gray-300">
                    <div>• AM: Cleanser + SPF 30</div>
                    <div>• PM: Retinol 2-3x/week</div>
                    <div>• Moisturizer with niacinamide</div>
                    <div>• Sunscreen prevents 24% aging</div>
                  </div>
                </div>
                
                <div className="bg-slate-900/50 backdrop-blur-sm border border-slate-800 rounded-xl p-6">
                  <h3 className="text-lg font-semibold text-white mb-4 flex items-center gap-2">
                    <BookOpenCheck className="w-5 h-5 text-purple-400" />
                    Dental Care
                  </h3>
                  <div className="space-y-2 text-sm text-gray-300">
                    <div>• Philips DiamondClean 2x daily</div>
                    <div>• Getting Waterpik soon</div>
                    <div>• Floss nightly (goal)</div>
                    <div>• Professional cleanings</div>
                  </div>
                </div>
                
                <div className="bg-slate-900/50 backdrop-blur-sm border border-slate-800 rounded-xl p-6">
                  <h3 className="text-lg font-semibold text-white mb-4 flex items-center gap-2">
                    <Activity className="w-5 h-5 text-red-400" />
                    Health Monitoring
                  </h3>
                  <div className="space-y-2 text-sm text-gray-300">
                    <div>• Lab panels every 6 months</div>
                    <div>• Fasting lipids & HbA1c</div>
                    <div>• 25-OH-D & ferritin</div>
                    <div>• Whoop daily tracking</div>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </section>
        
        {/* CTA Section */}
        <section className="px-6 py-24 border-t border-slate-800">
          <div className="max-w-4xl mx-auto text-center">
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
            >
              <Heart className="w-12 h-12 text-red-400 mx-auto mb-6" />
              <h2 className="text-3xl lg:text-4xl font-display font-bold text-white mb-6">
                Health is Wealth
              </h2>
              <p className="text-gray-400 mb-8 max-w-2xl mx-auto">
                Consistency beats perfection. Small daily habits compound into 
                long-term health and performance gains. The goal isn't to be perfect, 
                but to be slightly better each day.
              </p>
              <div className="flex justify-center gap-4">
                <a
                  href="https://instagram.com/strahil.peykov"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-purple-500 to-pink-500 text-white font-semibold rounded-full hover:scale-105 transition-transform"
                >
                  Follow my journey
                  <ChevronRight className="w-5 h-5" />
                </a>
                <Link
                  href="/contact"
                  className="inline-flex items-center gap-2 px-6 py-3 border-2 border-purple-500/30 text-purple-400 font-semibold rounded-full hover:bg-purple-500/10 hover:border-purple-500/50 transition-all"
                >
                  Let's connect
                </Link>
              </div>
              
              <div className="mt-12 text-sm text-gray-500">
                <p>Current goal: Maintain 75kg while reaching 15% body fat</p>
                <p className="mt-2">
                  <span className="text-purple-400">Training:</span> 5-day bodybuilding split + integrated cardio
                </p>
              </div>
            </motion.div>
          </div>
        </section>
      </div>
    </PageWrapper>
  )
}
