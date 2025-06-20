'use client'

import { motion } from 'framer-motion'
import { BookOpen, Clock, Target, CheckCircle, AlertCircle, FileText, Code, Brain, Trophy } from 'lucide-react'
import Link from 'next/link'
import { PageWrapper } from '../../../components/layout/PageWrapper'
import { Badge } from '../../../components/ui/Badge'

const examTopics = [
  {
    id: 'backtracking',
    number: 1,
    title: 'Backtracking',
    description: 'Mathematical statements and algorithm analysis for backtracking problems',
    difficulty: 'Medium',
    timeEstimate: '45 min',
    icon: Brain,
    color: 'text-blue-400',
    bgColor: 'bg-blue-500/10',
    borderColor: 'border-blue-500/30',
    topics: [
      'Determining correct output values',
      'Writing mathematical statements',
      'Algorithm analysis',
      'Preconditions and postconditions'
    ]
  },
  {
    id: 'greedy-choice',
    number: 2,
    title: 'Greedy Choice Lemma',
    description: 'Formulating greedy-choice lemmas for optimization problems',
    difficulty: 'Medium',
    timeEstimate: '30 min',
    icon: Target,
    color: 'text-green-400',
    bgColor: 'bg-green-500/10',
    borderColor: 'border-green-500/30',
    topics: [
      'Identifying optimal greedy choices',
      'Mathematical lemma formulation',
      'No proof required - just statements',
      'Common patterns and strategies'
    ]
  },
  {
    id: 'dynamic-programming',
    number: 3,
    title: 'Dynamic Programming',
    description: 'Recursive formulas and algorithm implementation',
    difficulty: 'Hard',
    timeEstimate: '60 min',
    icon: Code,
    color: 'text-purple-400',
    bgColor: 'bg-purple-500/10',
    borderColor: 'border-purple-500/30',
    topics: [
      'Defining subproblems',
      'Writing recursive formulas',
      'Base cases and step cases',
      'Pseudocode implementation'
    ]
  },
  {
    id: 'flow-algorithms',
    number: 4,
    title: 'Flow Algorithms',
    description: 'Edmonds-Karp and flow network analysis',
    difficulty: 'Medium',
    timeEstimate: '40 min',
    icon: FileText,
    color: 'text-cyan-400',
    bgColor: 'bg-cyan-500/10',
    borderColor: 'border-cyan-500/30',
    topics: [
      'Finding augmenting paths',
      'Identifying critical edges',
      'Residual networks',
      'Flow analysis'
    ]
  },
  {
    id: 'shortest-paths',
    number: 5,
    title: 'Shortest-Path Algorithms',
    description: 'Modifications to classic algorithms and proofs',
    difficulty: 'Hard',
    timeEstimate: '50 min',
    icon: Target,
    color: 'text-orange-400',
    bgColor: 'bg-orange-500/10',
    borderColor: 'border-orange-500/30',
    topics: [
      'Bellman-Ford modifications',
      'Dijkstra variations',
      'Johnson\'s algorithm',
      'Weight transformations'
    ]
  },
  {
    id: 'flow-theory',
    number: 6,
    title: 'Flow Theory',
    description: 'Maximum flow/matching and network modifications',
    difficulty: 'Medium',
    timeEstimate: '45 min',
    icon: Brain,
    color: 'text-pink-400',
    bgColor: 'bg-pink-500/10',
    borderColor: 'border-pink-500/30',
    topics: [
      'Flow-matching reductions',
      'Network modifications',
      'Ford-Fulkerson variants',
      'Residual network invariants'
    ]
  },
  {
    id: 'np-complexity',
    number: 7,
    title: 'NP-Complexity Classification',
    description: 'Determining if problems are NP-hard or polynomial',
    difficulty: 'Hard',
    timeEstimate: '55 min',
    icon: AlertCircle,
    color: 'text-red-400',
    bgColor: 'bg-red-500/10',
    borderColor: 'border-red-500/30',
    topics: [
      'Identifying polynomial algorithms',
      'NP-hardness reductions',
      'Common NP-hard problems',
      'Reduction techniques'
    ]
  },
  {
    id: 'np-proofs',
    number: 8,
    title: 'NP-Hardness Proofs',
    description: 'Formal proofs for NP-completeness reductions',
    difficulty: 'Very Hard',
    timeEstimate: '60 min',
    icon: FileText,
    color: 'text-yellow-400',
    bgColor: 'bg-yellow-500/10',
    borderColor: 'border-yellow-500/30',
    topics: [
      'Reduction construction',
      'Correctness proofs',
      'Both directions of equivalence',
      'Counter-examples'
    ]
  }
]

const examTips = [
  {
    title: 'Time Management',
    description: 'Allocate time based on exercise points. Don\'t spend too long on one problem.',
    icon: Clock
  },
  {
    title: 'Read Carefully',
    description: 'Pay attention to what\'s asked. Sometimes no proof is needed, just a statement.',
    icon: AlertCircle
  },
  {
    title: 'Show Your Work',
    description: 'Even partial solutions get points. Write down your reasoning process.',
    icon: FileText
  },
  {
    title: 'Practice Examples',
    description: 'Work through all past exam problems. Patterns often repeat.',
    icon: Brain
  }
]

function TopicCard({ topic, index }: { topic: typeof examTopics[0], index: number }) {
  const Icon = topic.icon

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: index * 0.1 }}
    >
      <Link href={`/courses/algorithms-exam-prep/${topic.id}`}>
        <div className={`group relative h-full ${topic.bgColor} backdrop-blur-sm border ${topic.borderColor} rounded-xl p-6 hover:scale-105 transition-all cursor-pointer`}>
          <div className="flex items-start justify-between mb-4">
            <div className={`w-12 h-12 ${topic.bgColor} rounded-lg flex items-center justify-center ${topic.color}`}>
              <Icon className="w-6 h-6" />
            </div>
            <Badge variant={
              topic.difficulty === 'Very Hard' ? 'error' : 
              topic.difficulty === 'Hard' ? 'warning' : 
              'purple'
            } size="sm">
              {topic.difficulty}
            </Badge>
          </div>

          <div className="mb-4">
            <h3 className={`text-lg font-semibold text-white mb-1 group-hover:${topic.color} transition-colors`}>
              {topic.number}. {topic.title}
            </h3>
            <p className="text-sm text-gray-400">
              {topic.description}
            </p>
          </div>

          <div className="space-y-2 mb-4">
            {topic.topics.map((item, i) => (
              <div key={i} className="flex items-center gap-2 text-xs text-gray-500">
                <CheckCircle className="w-3 h-3 text-green-400" />
                <span>{item}</span>
              </div>
            ))}
          </div>

          <div className="flex items-center justify-between text-xs text-gray-500">
            <span className="flex items-center gap-1">
              <Clock className="w-3 h-3" />
              {topic.timeEstimate}
            </span>
            <span className={`${topic.color} group-hover:underline`}>
              Start lesson →
            </span>
          </div>
        </div>
      </Link>
    </motion.div>
  )
}

export default function AlgorithmsExamPrepPage() {
  return (
    <PageWrapper>
      {/* Hero Section */}
      <section className="relative min-h-[40vh] flex items-center justify-center px-6 py-20 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-blue-500/5 via-purple-500/5 to-transparent" />
        
        <div className="relative z-10 max-w-4xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            className="mb-6"
          >
            <BookOpen className="w-16 h-16 text-blue-400 mx-auto mb-6" />
            <Badge variant="blue" className="mb-4">Free Course</Badge>
          </motion.div>
          
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-4xl lg:text-6xl font-display font-bold text-white mb-6"
          >
            Algorithms Exam
            <span className="block bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
              Mastery Course
            </span>
          </motion.h1>
          
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="text-xl text-gray-400 max-w-2xl mx-auto mb-8"
          >
            Complete preparation guide covering all 8 exam topics with real examples, 
            practice problems, and proven strategies to help you pass with confidence.
          </motion.p>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.3 }}
            className="flex flex-wrap gap-4 justify-center text-sm text-gray-500"
          >
            <span className="flex items-center gap-2">
              <Clock className="w-4 h-4" />
              8 comprehensive lessons
            </span>
            <span className="flex items-center gap-2">
              <FileText className="w-4 h-4" />
              48 practice problems
            </span>
            <span className="flex items-center gap-2">
              <Target className="w-4 h-4" />
              5 past exams analyzed
            </span>
          </motion.div>
        </div>
      </section>

      {/* Course Overview */}
      <section className="px-6 py-16 border-y border-slate-800">
        <div className="max-w-6xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-12">
            <div> 
              <div className="flex items-center gap-2 mb-4">
                <Trophy className="w-5 h-5 text-yellow-400" />
                <span className="text-yellow-400 font-mono text-sm">Exam-Focused Content</span>
              </div>
              
              <h2 className="text-4xl font-display font-bold text-white mb-4">
                Master All 8 Exercise Types
              </h2>
              
              <p className="text-xl text-gray-400 mb-6">
                Based on analysis of past exams, this course covers every type of exercise 
                you'll encounter, with real exam questions and detailed solutions.
              </p>
              
              <div className="grid grid-cols-2 gap-4 mb-8">
                <div className="flex items-center gap-3">
                  <Target className="w-5 h-5 text-green-400" />
                  <span className="text-gray-300">Exam patterns analyzed</span>
                </div>
                <div className="flex items-center gap-3">
                  <BookOpen className="w-5 h-5 text-blue-400" />
                  <span className="text-gray-300">Past exam solutions</span>
                </div>
                <div className="flex items-center gap-3">
                  <Clock className="w-5 h-5 text-purple-400" />
                  <span className="text-gray-300">Time management tips</span>
                </div>
                <div className="flex items-center gap-3">
                  <Trophy className="w-5 h-5 text-yellow-400" />
                  <span className="text-gray-300">Score maximization</span>
                </div>
              </div>
              
              <div className="p-4 bg-blue-500/10 border border-blue-500/30 rounded-lg">
                <div className="flex items-start gap-3">
                  <AlertCircle className="w-5 h-5 text-blue-400 flex-shrink-0 mt-0.5" />
                  <div>
                    <p className="text-sm text-blue-400 font-semibold mb-1">Pro Tip</p>
                    <p className="text-sm text-gray-300">
                      Focus on exercises 5-8 first — they're worth 50% of the exam and have 
                      clear patterns you can master quickly.
                    </p>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="relative">
              <div className="absolute inset-0 bg-gradient-to-br from-blue-500/20 to-cyan-500/20 blur-3xl" />
              <div className="relative bg-slate-900/50 backdrop-blur-sm border border-blue-500/20 rounded-2xl p-8">
                <h3 className="text-xl font-semibold text-white mb-6">Exam Structure</h3>
                <div className="space-y-4">
                  <div className="flex items-center justify-between">
                    <span className="text-gray-400">Total Exercises</span>
                    <span className="text-white font-semibold">8</span>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-gray-400">Time Limit</span>
                    <span className="text-white font-semibold">3 hours</span>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-gray-400">Points per Exercise</span>
                    <span className="text-white font-semibold">12.5</span>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-gray-400">Passing Grade</span>
                    <span className="text-white font-semibold">55/100</span>
                  </div>
                  <hr className="border-slate-700" />
                  <div className="pt-2">
                    <p className="text-sm text-gray-400 mb-2">Point Distribution:</p>
                    <div className="space-y-2">
                      <div className="flex items-center justify-between text-sm">
                        <span className="text-gray-500">Exercises 1-4</span>
                        <span className="text-gray-300">50 points</span>
                      </div>
                      <div className="flex items-center justify-between text-sm">
                        <span className="text-gray-500">Exercises 5-8</span>
                        <span className="text-gray-300">50 points</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Course Topics */}
      <section className="px-6 py-16">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-display font-bold text-white mb-8">
            Course Topics
          </h2>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {examTopics.map((topic, i) => (
              <TopicCard key={topic.id} topic={topic} index={i} />
            ))}
          </div>
        </div>
      </section>

      {/* Exam Tips */}
      <section className="px-6 py-16 border-t border-slate-800">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-display font-bold text-white mb-8 text-center">
            Exam Success Tips
          </h2>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {examTips.map((tip, i) => {
              const Icon = tip.icon
              return (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.1 }}
                  className="bg-slate-900/50 rounded-xl p-6 border border-slate-800"
                >
                  <Icon className="w-8 h-8 text-purple-400 mb-4" />
                  <h3 className="font-semibold text-white mb-2">{tip.title}</h3>
                  <p className="text-sm text-gray-400">{tip.description}</p>
                </motion.div>
              )
            })}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="px-6 py-16">
        <div className="max-w-4xl mx-auto text-center">
          <div className="bg-gradient-to-br from-blue-500/10 to-purple-500/10 rounded-2xl p-12 border border-purple-500/20">
            <h2 className="text-3xl font-display font-bold text-white mb-4">
              Ready to Master Algorithms?
            </h2>
            <p className="text-gray-400 mb-8">
              Start with any topic or follow the recommended order. 
              Each lesson includes examples from past exams.
            </p>
            <Link
              href="/courses/algorithms-exam-prep/backtracking"
              className="inline-flex items-center gap-2 px-8 py-4 bg-gradient-to-r from-blue-500 to-purple-500 text-white font-semibold rounded-full hover:scale-105 transition-transform"
            >
              Start with Backtracking
              <BookOpen className="w-5 h-5" />
            </Link>
          </div>
        </div>
      </section>
    </PageWrapper>
  )
}