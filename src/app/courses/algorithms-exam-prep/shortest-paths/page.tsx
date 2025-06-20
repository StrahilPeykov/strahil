'use client'

import { motion } from 'framer-motion'
import { BookOpen, AlertCircle, CheckCircle, Code, ChevronRight } from 'lucide-react'
import Link from 'next/link'
import { PageWrapper } from '../../../../components/layout/PageWrapper'

interface MathDisplayProps {
  children: React.ReactNode
  block?: boolean
}

function MathDisplay({ children, block = false }: MathDisplayProps) {
  return (
    <span className={`font-mono ${block ? 'block my-4 text-center' : 'inline'} text-blue-300`}>
      {children}
    </span>
  )
}

interface ExamExampleProps {
  year: string
  title: string
  children: React.ReactNode
}

function ExamExample({ year, title, children }: ExamExampleProps) {
  return (
    <div className="mb-8 p-6 bg-slate-900/50 border border-slate-800 rounded-xl">
      <div className="flex items-center gap-2 mb-4">
        <div className="px-3 py-1 bg-blue-500/20 text-blue-400 rounded-full text-sm font-semibold">
          {year} Exam
        </div>
        <h4 className="text-lg font-semibold text-white">{title}</h4>
      </div>
      {children}
    </div>
  )
}

interface SolutionProps {
  children: React.ReactNode
}

function Solution({ children }: SolutionProps) {
  return (
    <div className="mt-4 p-4 bg-green-500/10 border border-green-500/30 rounded-lg">
      <div className="flex items-start gap-2 mb-3">
        <CheckCircle className="w-5 h-5 text-green-400 flex-shrink-0 mt-0.5" />
        <span className="text-green-400 font-semibold">Solution</span>
      </div>
      <div className="text-gray-300">{children}</div>
    </div>
  )
}

export default function ShortestPathsExercise() {
  return (
    <PageWrapper>
    <div className="min-h-screen bg-slate-950 text-gray-300">
      {/* Header */}
      <div className="border-b border-slate-800">
        <div className="max-w-4xl mx-auto px-6 py-6">
          <Link href="/courses/algorithms-exam-prep" className="inline-flex items-center gap-2 text-gray-400 hover:text-blue-400 transition-colors mb-4">
            <ChevronRight className="w-4 h-4 rotate-180" />
            Back to course
          </Link>
          <h1 className="text-3xl font-display font-bold text-white">Exercise 5: Shortest-Path Algorithms</h1>
        </div>
      </div>
      
      {/* Content */}
      <div className="max-w-4xl mx-auto px-6 py-12">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          {/* Introduction */}
          <section className="mb-12">
            <div className="flex items-center gap-2 mb-4">
              <BookOpen className="w-5 h-5 text-purple-400" />
              <span className="text-purple-400 font-mono text-sm">Overview</span>
            </div>
            
            <p className="text-lg text-gray-400 mb-6">
              This exercise type focuses on modifying classic shortest-path algorithms (Bellman-Ford, Dijkstra, Johnson) 
              or their edge weights, then proving correctness or providing counterexamples.
            </p>
            
            <div className="p-4 bg-purple-500/10 border border-purple-500/30 rounded-lg mb-6">
              <div className="flex items-start gap-3">
                <AlertCircle className="w-5 h-5 text-purple-400 flex-shrink-0 mt-0.5" />
                <div>
                  <p className="text-sm text-purple-400 font-semibold mb-1">Key Pattern</p>
                  <p className="text-sm text-gray-300">
                    Most questions involve the "Big-C Technique": Choose C larger than any possible path weight 
                    so the high-order term dominates (e.g., for counting edges, traffic lights, etc.)
                  </p>
                </div>
              </div>
            </div>
          </section>
          
          {/* Common Techniques */}
          <section className="mb-12">
            <h2 className="text-2xl font-display font-bold text-white mb-6">Common Techniques</h2>
            
            <div className="space-y-4">
              <div className="p-4 bg-slate-900/50 border border-slate-800 rounded-lg">
                <h3 className="text-lg font-semibold text-white mb-2">1. The Big-C (T+1) Technique</h3>
                <p className="text-gray-400 mb-3">
                  When you need to minimize a primary criterion (like number of edges) and use a secondary criterion 
                  (like total weight) as a tiebreaker:
                </p>
                <div className="p-3 bg-slate-800/50 rounded font-mono text-sm">
                  <p className="text-blue-300">w'(e) = w(e) + C</p>
                  <p className="text-gray-500 mt-2">where C {'>'} sum of all original weights</p>
                </div>
              </div>
              
              <div className="p-4 bg-slate-900/50 border border-slate-800 rounded-lg">
                <h3 className="text-lg font-semibold text-white mb-2">2. Edge Ordering in Bellman-Ford</h3>
                <p className="text-gray-400">
                  The order of edge relaxation affects convergence speed:
                </p>
                <ul className="mt-3 space-y-2 text-sm">
                  <li className="flex items-start gap-2">
                    <span className="text-green-400">•</span>
                    <span className="text-gray-400">
                      <span className="text-gray-300 font-medium">Fast ordering:</span> Relax edges in topological order
                    </span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-red-400">•</span>
                    <span className="text-gray-400">
                      <span className="text-gray-300 font-medium">Slow ordering:</span> Relax edges backwards along shortest paths
                    </span>
                  </li>
                </ul>
              </div>
            </div>
          </section>
          
          {/* Past Exam Examples */}
          <section className="mb-12">
            <h2 className="text-2xl font-display font-bold text-white mb-6">Past Exam Examples</h2>
            
            <ExamExample year="2024" title="System Design with Minimum Edges">
              <div className="space-y-4 text-gray-400">
                <p>
                  <span className="font-semibold text-gray-300">Problem:</span> Find a path P from s to t such that:
                </p>
                <ol className="list-decimal list-inside space-y-2 ml-4">
                  <li>P uses as few edges as possible</li>
                  <li>Among all paths with minimum edges, P has the smallest total weight</li>
                </ol>
                
                <p className="mt-4">
                  <span className="font-semibold text-gray-300">Proposed algorithm:</span>
                </p>
                <div className="p-3 bg-slate-800/50 rounded mt-2 font-mono text-sm space-y-2">
                  <p>1. T = Σ<sub>e∈E</sub> w(e)</p>
                  <p>2. w'(e) = w(e) + T + 1 for every edge e</p>
                  <p>3. Run Dijkstra with weights w'</p>
                  <p>4. Output the resulting path P</p>
                </div>
              </div>
              
              <Solution>
                <div className="space-y-4">
                  <p className="font-semibold">The procedure is correct. Here's the proof:</p>
                  
                  <div className="space-y-3">
                    <p><span className="font-medium">1) P uses the fewest edges:</span></p>
                    <p className="ml-4">
                      Assume some path P' has fewer edges: |P'| {'<'} |P|. Then:
                    </p>
                    <div className="ml-8 p-3 bg-slate-800/50 rounded font-mono text-sm space-y-1">
                      <p>w'(P') = w(P') + |P'|·(T+1)</p>
                      <p className="ml-6">≤ T + |P'|·(T+1)</p>
                      <p className="ml-6">{'<'} (|P'|+1)·(T+1)</p>
                      <p className="ml-6">≤ |P|·(T+1) ≤ w'(P)</p>
                    </div>
                    <p className="ml-4">This contradicts P being minimum under w'.</p>
                    
                    <p className="mt-4"><span className="font-medium">2) Among shortest-edge paths, P has minimum weight:</span></p>
                    <p className="ml-4">
                      If P' has |P'| = |P| but w(P') {'<'} w(P), then w'(P') {'<'} w'(P), contradicting optimality.
                    </p>
                  </div>
                </div>
              </Solution>
            </ExamExample>
            
            <ExamExample year="2023" title="Minimizing Traffic Lights">
              <div className="space-y-4 text-gray-400">
                <p>
                  Alan wants to find a path that encounters minimum traffic lights. Among such paths, 
                  he wants the shortest one. Traffic lights are on edges E' ⊆ E.
                </p>
                <p className="font-semibold text-gray-300">Design new weights w'(e) for Dijkstra.</p>
              </div>
              
              <Solution>
                <div className="space-y-3">
                  <p className="font-semibold">Define weights:</p>
                  <div className="p-3 bg-slate-800/50 rounded font-mono text-sm space-y-2">
                    <p>w'(e) = w(e) if e ∉ E' (no traffic light)</p>
                    <p>w'(e) = w(e) + C if e ∈ E' (has traffic light)</p>
                    <p className="text-gray-500">where C = |V| × W (W = max edge weight)</p>
                  </div>
                  
                  <p className="mt-4"><span className="font-semibold">Recovery:</span> After Dijkstra returns distance d(h,w):</p>
                  <ul className="ml-4 space-y-1 text-sm">
                    <li>• Number of traffic lights: t = ⌊d(h,w) / C⌋</li>
                    <li>• Original path length: d(h,w) - t·C</li>
                  </ul>
                </div>
              </Solution>
            </ExamExample>
            
            <ExamExample year="2024 Resit" title="Edge Ordering Effects">
              <div className="space-y-4 text-gray-400">
                <p>
                  Design a graph where Bellman-Ford converges in 1 iteration with one edge ordering 
                  but needs 4+ iterations with another ordering.
                </p>
              </div>
              
              <Solution>
                <div className="space-y-3">
                  <p className="font-semibold">Graph: Linear chain s → a → b → c → t (all weights 1)</p>
                  
                  <div className="grid grid-cols-2 gap-4 mt-4">
                    <div className="p-3 bg-slate-800/50 rounded">
                      <p className="font-semibold text-green-400 mb-2">Fast ordering: (a,b,c,d)</p>
                      <p className="text-sm">Converges in 1 round</p>
                    </div>
                    <div className="p-3 bg-slate-800/50 rounded">
                      <p className="font-semibold text-red-400 mb-2">Slow ordering: (d,c,b,a)</p>
                      <p className="text-sm">Needs 4 rounds (d(t) still ∞ after round 3)</p>
                    </div>
                  </div>
                </div>
              </Solution>
            </ExamExample>
          </section>
          
          {/* Exam Strategy */}
          <section className="mb-12">
            <h2 className="text-2xl font-display font-bold text-white mb-6">Exam Strategy</h2>
            
            <div className="space-y-4">
              <div className="p-4 bg-blue-500/10 border border-blue-500/30 rounded-lg">
                <h3 className="text-lg font-semibold text-blue-400 mb-3">How to Approach These Problems</h3>
                <ol className="space-y-3 text-sm">
                  <li className="flex gap-3">
                    <span className="text-blue-400 font-semibold">1.</span>
                    <div>
                      <p className="text-gray-300 font-medium">Identify the optimization criteria</p>
                      <p className="text-gray-400">Primary (minimize edges) vs Secondary (minimize weight)</p>
                    </div>
                  </li>
                  <li className="flex gap-3">
                    <span className="text-blue-400 font-semibold">2.</span>
                    <div>
                      <p className="text-gray-300 font-medium">Choose appropriate C value</p>
                      <p className="text-gray-400">Usually C = |V|×W or C = sum of all weights + 1</p>
                    </div>
                  </li>
                  <li className="flex gap-3">
                    <span className="text-blue-400 font-semibold">3.</span>
                    <div>
                      <p className="text-gray-300 font-medium">Prove both directions if needed</p>
                      <p className="text-gray-400">Show primary criterion is optimized, then secondary</p>
                    </div>
                  </li>
                  <li className="flex gap-3">
                    <span className="text-blue-400 font-semibold">4.</span>
                    <div>
                      <p className="text-gray-300 font-medium">For counterexamples, use simple graphs</p>
                      <p className="text-gray-400">Linear chains or small cycles often work</p>
                    </div>
                  </li>
                </ol>
              </div>
              
              <div className="p-4 bg-yellow-500/10 border border-yellow-500/30 rounded-lg">
                <div className="flex items-start gap-3">
                  <AlertCircle className="w-5 h-5 text-yellow-400 flex-shrink-0 mt-0.5" />
                  <div>
                    <p className="text-sm text-yellow-400 font-semibold mb-1">Common Pitfalls</p>
                    <ul className="text-sm text-gray-300 space-y-1">
                      <li>• Forgetting to prove the secondary criterion</li>
                      <li>• Using C that's too small (must dominate all possible paths)</li>
                      <li>• Not explaining how to recover original values from modified distances</li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </section>
          
          {/* Practice Tips */}
          <section>
            <h2 className="text-2xl font-display font-bold text-white mb-6">Practice Tips</h2>
            
            <div className="grid md:grid-cols-2 gap-4">
              <div className="p-4 bg-slate-900/50 border border-slate-800 rounded-lg">
                <Code className="w-8 h-8 text-purple-400 mb-3" />
                <h3 className="font-semibold text-white mb-2">Master the Formulas</h3>
                <p className="text-sm text-gray-400">
                  Memorize the standard transformations: w'(e) = w(e) + C and how to choose C
                </p>
              </div>
              
              <div className="p-4 bg-slate-900/50 border border-slate-800 rounded-lg">
                <CheckCircle className="w-8 h-8 text-green-400 mb-3" />
                <h3 className="font-semibold text-white mb-2">Practice Proofs</h3>
                <p className="text-sm text-gray-400">
                  Write formal proofs showing both criteria are satisfied - this is where most points are
                </p>
              </div>
            </div>
          </section>
        </motion.div>
      </div>
    </div>
    </PageWrapper>
  )
}
