// src/app/fitness/page.tsx
'use client'

import { motion, AnimatePresence } from 'framer-motion'
import { Dumbbell, TrendingUp, Target, Calendar, Clock, Zap, Trophy, Heart, Activity, BarChart3, Mountain, Timer, Award, ChevronRight } from 'lucide-react'
import { PageWrapper } from '../../components/layout/PageWrapper'
import { Badge } from '../../components/ui/Badge'
import Link from 'next/link'
import { useState } from 'react'

const workoutStats = {
  currentStreak: 45,
  totalWorkouts: 312,
  personalRecords: 8,
  hoursTraining: 468
}

const personalRecords = [
  { exercise: 'Deadlift', weight: '180kg', reps: 1, date: '2024-01-15' },
  { exercise: 'Squat', weight: '140kg', reps: 1, date: '2024-01-08' },
  { exercise: 'Bench Press', weight: '100kg', reps: 1, date: '2023-12-20' },
  { exercise: 'Pull-ups', weight: 'BW+40kg', reps: 5, date: '2024-01-10' },
  { exercise: 'Muscle-up', weight: 'Bodyweight', reps: 8, date: '2023-11-15' },
  { exercise: 'Handstand', weight: 'Bodyweight', reps: '60s', date: '2023-10-05' }
]

const trainingPhilosophy = [
  {
    title: 'Consistency Over Perfection',
    description: 'Show up every day, even when you don\'t feel like it',
    icon: Calendar,
    color: 'text-blue-400'
  },
  {
    title: 'Progressive Overload',
    description: 'Small improvements compound into massive gains',
    icon: TrendingUp,
    color: 'text-purple-400'
  },
  {
    title: 'Mind-Muscle Connection',
    description: 'Training the body starts with training the mind',
    icon: Activity,
    color: 'text-pink-400'
  },
  {
    title: 'Recovery is Training',
    description: 'Rest days are when the magic happens',
    icon: Heart,
    color: 'text-green-400'
  }
]

const weeklySchedule = [
  { day: 'Monday', focus: 'Push (Chest, Shoulders, Triceps)', type: 'strength' },
  { day: 'Tuesday', focus: 'Pull (Back, Biceps)', type: 'strength' },
  { day: 'Wednesday', focus: 'Legs & Core', type: 'strength' },
  { day: 'Thursday', focus: 'Calisthenics & Skills', type: 'skills' },
  { day: 'Friday', focus: 'Full Body Power', type: 'power' },
  { day: 'Saturday', focus: 'Active Recovery (Yoga/Cardio)', type: 'recovery' },
  { day: 'Sunday', focus: 'Rest or Light Movement', type: 'rest' }
]

const progressData = [
  { month: 'Oct', deadlift: 160, squat: 120, bench: 85 },
  { month: 'Nov', deadlift: 165, squat: 125, bench: 90 },
  { month: 'Dec', deadlift: 170, squat: 130, bench: 95 },
  { month: 'Jan', deadlift: 180, squat: 140, bench: 100 }
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

export default function FitnessPage() {
  const [activeTab, setActiveTab] = useState<'strength' | 'skills' | 'cardio'>('strength')

  return (
    <PageWrapper>
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
            <Dumbbell className="w-16 h-16 text-purple-400 mx-auto mb-6" />
          </motion.div>
          
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-5xl lg:text-7xl font-display font-bold text-white mb-6"
          >
            Training
            <span className="block bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400 bg-clip-text text-transparent">
              Journey
            </span>
          </motion.h1>
          
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="text-xl text-gray-400 max-w-2xl mx-auto mb-8"
          >
            Building strength in code and iron. A developer's approach to fitness, 
            combining data-driven training with consistent progression.
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
                {workoutStats.currentStreak}
                <Zap className="w-5 h-5 text-yellow-400" />
              </div>
              <div className="text-sm text-gray-500">Day Streak</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-display font-bold text-purple-400 mb-1">
                {workoutStats.totalWorkouts}
              </div>
              <div className="text-sm text-gray-500">Workouts</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-display font-bold text-pink-400 mb-1">
                {workoutStats.personalRecords}
              </div>
              <div className="text-sm text-gray-500">PRs in 2024</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-display font-bold text-blue-400 mb-1">
                {workoutStats.hoursTraining}h
              </div>
              <div className="text-sm text-gray-500">Training Time</div>
            </div>
          </motion.div>
        </div>
      </section>
      
      {/* Training Philosophy */}
      <section className="px-6 py-24 border-t border-slate-800">
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
                      day.type === 'skills' ? 'bg-blue-500' :
                      day.type === 'power' ? 'bg-pink-500' :
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
                      day.type === 'skills' ? 'blue' :
                      day.type === 'power' ? 'pink' :
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
      
      {/* Training Highlights */}
      <section className="px-6 py-24">
        <div className="max-w-6xl mx-auto">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl lg:text-4xl font-display font-bold text-white text-center mb-12">
              Training Highlights
            </h2>
            
            {/* Tabs */}
            <div className="flex justify-center gap-2 mb-12">
              {(['strength', 'skills', 'cardio'] as const).map((tab) => (
                <button
                  key={tab}
                  onClick={() => setActiveTab(tab)}
                  className={`px-6 py-3 rounded-full font-medium capitalize transition-all ${
                    activeTab === tab
                      ? 'bg-gradient-to-r from-blue-500 to-purple-500 text-white'
                      : 'text-gray-400 hover:text-white hover:bg-slate-800'
                  }`}
                >
                  {tab}
                </button>
              ))}
            </div>
            
            {/* Content based on active tab */}
            <AnimatePresence mode="wait">
              {activeTab === 'strength' && (
                <motion.div
                  key="strength"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -20 }}
                  className="grid md:grid-cols-3 gap-6"
                >
                  <div className="bg-gradient-to-br from-purple-500/10 to-blue-500/10 rounded-2xl p-6 border border-purple-500/20">
                    <Dumbbell className="w-8 h-8 text-purple-400 mb-4" />
                    <h3 className="text-xl font-semibold text-white mb-2">Powerlifting Focus</h3>
                    <p className="text-gray-400 mb-4">Building raw strength through compound movements</p>
                    <ul className="space-y-2 text-sm text-gray-300">
                      <li>• 5/3/1 Programming</li>
                      <li>• Progressive Overload</li>
                      <li>• Accessory Work</li>
                    </ul>
                  </div>
                  
                  <div className="bg-gradient-to-br from-blue-500/10 to-cyan-500/10 rounded-2xl p-6 border border-blue-500/20">
                    <Target className="w-8 h-8 text-blue-400 mb-4" />
                    <h3 className="text-xl font-semibold text-white mb-2">Hypertrophy Blocks</h3>
                    <p className="text-gray-400 mb-4">Strategic muscle building phases</p>
                    <ul className="space-y-2 text-sm text-gray-300">
                      <li>• High Volume Training</li>
                      <li>• Mind-Muscle Connection</li>
                      <li>• Isolation Work</li>
                    </ul>
                  </div>
                  
                  <div className="bg-gradient-to-br from-pink-500/10 to-purple-500/10 rounded-2xl p-6 border border-pink-500/20">
                    <Timer className="w-8 h-8 text-pink-400 mb-4" />
                    <h3 className="text-xl font-semibold text-white mb-2">Recovery Protocol</h3>
                    <p className="text-gray-400 mb-4">Optimizing gains through smart recovery</p>
                    <ul className="space-y-2 text-sm text-gray-300">
                      <li>• Mobility Work</li>
                      <li>• Sleep Optimization</li>
                      <li>• Nutrition Timing</li>
                    </ul>
                  </div>
                </motion.div>
              )}
              
              {activeTab === 'skills' && (
                <motion.div
                  key="skills"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -20 }}
                  className="grid md:grid-cols-2 gap-6"
                >
                  <div className="bg-gradient-to-br from-blue-500/10 to-purple-500/10 rounded-2xl p-6 border border-blue-500/20">
                    <Mountain className="w-8 h-8 text-blue-400 mb-4" />
                    <h3 className="text-xl font-semibold text-white mb-2">Calisthenics Mastery</h3>
                    <p className="text-gray-400 mb-4">Bodyweight strength and control</p>
                    <div className="space-y-3">
                      <div className="flex items-center justify-between p-2 bg-slate-800/50 rounded">
                        <span className="text-sm text-gray-300">Muscle-ups</span>
                        <Badge variant="success" size="sm">Achieved</Badge>
                      </div>
                      <div className="flex items-center justify-between p-2 bg-slate-800/50 rounded">
                        <span className="text-sm text-gray-300">Front Lever</span>
                        <Badge variant="blue" size="sm">In Progress</Badge>
                      </div>
                      <div className="flex items-center justify-between p-2 bg-slate-800/50 rounded">
                        <span className="text-sm text-gray-300">Planche</span>
                        <Badge variant="default" size="sm">Next Goal</Badge>
                      </div>
                    </div>
                  </div>
                  
                  <div className="bg-gradient-to-br from-purple-500/10 to-pink-500/10 rounded-2xl p-6 border border-purple-500/20">
                    <Award className="w-8 h-8 text-purple-400 mb-4" />
                    <h3 className="text-xl font-semibold text-white mb-2">Movement Quality</h3>
                    <p className="text-gray-400 mb-4">Focus on perfect form and control</p>
                    <div className="space-y-3">
                      <div className="flex items-center justify-between p-2 bg-slate-800/50 rounded">
                        <span className="text-sm text-gray-300">Handstand</span>
                        <span className="text-sm text-purple-400">60s hold</span>
                      </div>
                      <div className="flex items-center justify-between p-2 bg-slate-800/50 rounded">
                        <span className="text-sm text-gray-300">L-sit</span>
                        <span className="text-sm text-purple-400">30s hold</span>
                      </div>
                      <div className="flex items-center justify-between p-2 bg-slate-800/50 rounded">
                        <span className="text-sm text-gray-300">Human Flag</span>
                        <span className="text-sm text-purple-400">5s hold</span>
                      </div>
                    </div>
                  </div>
                </motion.div>
              )}
              
              {activeTab === 'cardio' && (
                <motion.div
                  key="cardio"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -20 }}
                  className="text-center max-w-2xl mx-auto"
                >
                  <Activity className="w-16 h-16 text-green-400 mx-auto mb-6" />
                  <h3 className="text-2xl font-semibold text-white mb-4">Conditioning & Endurance</h3>
                  <p className="text-gray-400 mb-8">
                    Strategic cardio to support strength goals without compromising gains. 
                    Focus on low-impact activities and interval training.
                  </p>
                  
                  <div className="grid grid-cols-3 gap-4 text-center">
                    <div className="bg-slate-900/50 rounded-xl p-4">
                      <p className="text-2xl font-bold text-green-400 mb-1">3x</p>
                      <p className="text-sm text-gray-500">Weekly Sessions</p>
                    </div>
                    <div className="bg-slate-900/50 rounded-xl p-4">
                      <p className="text-2xl font-bold text-green-400 mb-1">20-30</p>
                      <p className="text-sm text-gray-500">Minutes</p>
                    </div>
                    <div className="bg-slate-900/50 rounded-xl p-4">
                      <p className="text-2xl font-bold text-green-400 mb-1">Zone 2</p>
                      <p className="text-sm text-gray-500">Heart Rate</p>
                    </div>
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </motion.div>
        </div>
      </section>
      
      {/* Call to Action */}
      <section className="px-6 py-24 border-t border-slate-800">
        <div className="max-w-4xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
          >
            <Heart className="w-12 h-12 text-red-400 mx-auto mb-6" />
            <h2 className="text-3xl lg:text-4xl font-display font-bold text-white mb-6">
              Join the Journey
            </h2>
            <p className="text-gray-400 mb-8 max-w-2xl mx-auto">
              Follow along on social media for daily training updates, form checks, 
              and the occasional gym fail. Let's grow stronger together!
            </p>
            <div className="flex justify-center gap-4">
              <a
                href="https://instagram.com/strahil.peykov"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-purple-500 to-pink-500 text-white font-semibold rounded-full hover:scale-105 transition-transform"
              >
                Follow on Instagram
                <ChevronRight className="w-5 h-5" />
              </a>
              <Link
                href="/contact"
                className="inline-flex items-center gap-2 px-6 py-3 border-2 border-purple-500/30 text-purple-400 font-semibold rounded-full hover:bg-purple-500/10 hover:border-purple-500/50 transition-all"
              >
                Train Together
              </Link>
            </div>
          </motion.div>
        </div>
      </section>
    </PageWrapper>
  )
}