'use client'

import { motion } from 'framer-motion'
import { BookOpen, AlertCircle, CheckCircle, GitBranch, ChevronRight, Zap } from 'lucide-react'
import Link from 'next/link'
import { PageWrapper } from '../../../../components/layout/PageWrapper'

interface ExamExampleProps {
  year: string
  title: string
  children: React.ReactNode
}

function ExamExample({ year, title, children }: ExamExampleProps) {
  return (
    <div className="mb-8 p-6 bg-slate-900/50 border border-slate-800 rounded-xl">
      <div className="flex items-center gap-2 mb-4">
        <div className="px-3 py-1 bg-purple-500/20 text-purple-400 rounded-full text-sm font-semibold">
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

export default function FlowTheoryExercise() {
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
          <h1 className="text-3xl font-display font-bold text-white">Exercise 6: Flow Theory</h1>
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
              This exercise tests your understanding of maximum flow algorithms, flow-matching reductions, 
              and how to efficiently update flows when the network changes.
            </p>
            
            <div className="p-4 bg-purple-500/10 border border-purple-500/30 rounded-lg mb-6">
              <div className="flex items-start gap-3">
                <AlertCircle className="w-5 h-5 text-purple-400 flex-shrink-0 mt-0.5" />
                <div>
                  <p className="text-sm text-purple-400 font-semibold mb-1">Key Patterns</p>
                  <ul className="text-sm text-gray-300 space-y-1">
                    <li>• Building flow networks from matching problems</li>
                    <li>• Updating existing flows when edges are added</li>
                    <li>• Understanding residual networks and invariants</li>
                    <li>• Time complexity analysis of updates</li>
                  </ul>
                </div>
              </div>
            </div>
          </section>
          
          {/* Common Techniques */}
          <section className="mb-12">
            <h2 className="text-2xl font-display font-bold text-white mb-6">Key Concepts</h2>
            
            <div className="space-y-4">
              <div className="p-4 bg-slate-900/50 border border-slate-800 rounded-lg">
                <h3 className="text-lg font-semibold text-white mb-2">Flow-Matching Reduction</h3>
                <p className="text-gray-400 mb-3">Standard construction for bipartite matching:</p>
                <ol className="space-y-2 text-sm ml-4">
                  <li className="text-gray-300">1. Add source s with edges to all left vertices (capacity 1)</li>
                  <li className="text-gray-300">2. Add sink t with edges from all right vertices (capacity 1)</li>
                  <li className="text-gray-300">3. Original edges have capacity 1, directed L → R</li>
                  <li className="text-gray-300">4. Max flow value = size of maximum matching</li>
                </ol>
              </div>
              
              <div className="p-4 bg-slate-900/50 border border-slate-800 rounded-lg">
                <h3 className="text-lg font-semibold text-white mb-2">Residual Network Properties</h3>
                <div className="space-y-2 text-sm">
                  <p className="text-gray-400">For edge (u,v) with capacity c and flow f:</p>
                  <div className="ml-4 space-y-1">
                    <p className="text-gray-300">• Forward edge: residual capacity = c - f</p>
                    <p className="text-gray-300">• Backward edge: residual capacity = f</p>
                  </div>
                  <p className="text-gray-400 mt-3">Critical edge: minimum residual capacity on the path</p>
                </div>
              </div>
            </div>
          </section>
          
          {/* Past Exam Examples */}
          <section className="mb-12">
            <h2 className="text-2xl font-display font-bold text-white mb-6">Past Exam Examples</h2>
            
            <ExamExample year="2024" title="Edmonds-Karp vs Optimal">
              <div className="space-y-4 text-gray-400">
                <p>
                  Draw a flow network where Ford-Fulkerson can finish in 1 iteration with 
                  the right path choice, but Edmonds-Karp needs more than 1 iteration.
                </p>
              </div>
              
              <Solution>
                <div className="space-y-3">
                  <p className="font-semibold">Network:</p>
                  <div className="p-3 bg-slate-800/50 rounded font-mono text-sm">
                    <p>s → a (capacity 2)</p>
                    <p>a → b (capacity 2)</p>
                    <p>b → t (capacity 2)</p>
                    <p>a → t (capacity 1)</p>
                  </div>
                  
                  <div className="mt-4 space-y-3">
                    <div>
                      <p className="font-medium text-green-400">Optimal (1 iteration):</p>
                      <p className="text-sm ml-4">Path (s,a,b,t) with flow 2 → saturates s→a → done!</p>
                    </div>
                    
                    <div>
                      <p className="font-medium text-yellow-400">Edmonds-Karp (2 iterations):</p>
                      <p className="text-sm ml-4">
                        1. Shortest path (s,a,t) with flow 1<br/>
                        2. Then path (s,a,b,t) with flow 1
                      </p>
                    </div>
                  </div>
                </div>
              </Solution>
            </ExamExample>
            
            <ExamExample year="2023 Resit" title="Residual Network Properties">
              <div className="space-y-4 text-gray-400">
                <p>
                  Claim: "After Edmonds-Karp augments over path P, all edges of P 
                  disappear from the residual network."
                </p>
                <p className="font-semibold text-gray-300">True or false?</p>
              </div>
              
              <Solution>
                <div className="space-y-3">
                  <p className="font-semibold text-red-400">FALSE</p>
                  
                  <p>
                    The claim fails when some edges have leftover capacity after augmentation 
                    because they don't form the bottleneck.
                  </p>
                  
                  <p className="font-medium">Counterexample:</p>
                  <div className="p-3 bg-slate-800/50 rounded text-sm">
                    <p>Path: s → a → t</p>
                    <p>Capacities: s→a (5), a→t (3)</p>
                    <p>After augmenting by 3: s→a still has residual capacity 2</p>
                  </div>
                  
                  <p className="text-sm text-gray-400 mt-3">
                    Only critical edges (bottlenecks) disappear from the residual network.
                  </p>
                </div>
              </Solution>
            </ExamExample>
            
            <ExamExample year="2022" title="Cloud Computing Optimization">
              <div className="space-y-4 text-gray-400">
                <p>
                  You need to solve 50 max-flow problems. Cloud service charges €10 per 
                  computation. How to compute all 50 flows with only one cloud call?
                </p>
              </div>
              
              <Solution>
                <div className="space-y-3">
                  <p className="font-semibold">Construction of combined network G*:</p>
                  
                  <ol className="space-y-3 text-sm ml-4">
                    <li>
                      <span className="font-medium">1. Start with disjoint copies</span> of all 50 graphs
                    </li>
                    <li>
                      <span className="font-medium">2. Add super-source s*</span>
                      <ul className="ml-4 mt-1 text-gray-400">
                        <li>• Connect s* → sᵢ with capacity U = sum of all edge capacities</li>
                      </ul>
                    </li>
                    <li>
                      <span className="font-medium">3. Add super-sink t*</span>
                      <ul className="ml-4 mt-1 text-gray-400">
                        <li>• Connect tᵢ → t* with capacity U</li>
                      </ul>
                    </li>
                    <li>
                      <span className="font-medium">4. Compute max flow in G*</span>
                    </li>
                    <li>
                      <span className="font-medium">5. Extract individual flows:</span>
                      <span className="ml-2 text-gray-400">fᵢ(e) = f*(e) for edges in Gᵢ</span>
                    </li>
                  </ol>
                  
                  <p className="mt-4 text-sm text-blue-300">
                    Cost: €10 instead of €500!
                  </p>
                </div>
              </Solution>
            </ExamExample>
          </section>
          
          {/* Common Patterns */}
          <section className="mb-12">
            <h2 className="text-2xl font-display font-bold text-white mb-6">Common Patterns & Tips</h2>
            
            <div className="grid md:grid-cols-2 gap-4">
              <div className="p-4 bg-blue-500/10 border border-blue-500/30 rounded-lg">
                <Zap className="w-6 h-6 text-blue-400 mb-2" />
                <h3 className="font-semibold text-white mb-2">Incremental Updates</h3>
                <p className="text-sm text-gray-400">
                  When edges are added, use existing flow as starting point. 
                  Number of augmentations ≤ number of new edges.
                </p>
              </div>
              
              <div className="p-4 bg-purple-500/10 border border-purple-500/30 rounded-lg">
                <GitBranch className="w-6 h-6 text-purple-400 mb-2" />
                <h3 className="font-semibold text-white mb-2">Residual Networks</h3>
                <p className="text-sm text-gray-400">
                  Remember: forward edge capacity = c-f, backward = f. 
                  Only edges with positive residual capacity exist.
                </p>
              </div>
            </div>
            
            <div className="mt-6 p-4 bg-yellow-500/10 border border-yellow-500/30 rounded-lg">
              <div className="flex items-start gap-3">
                <AlertCircle className="w-5 h-5 text-yellow-400 flex-shrink-0 mt-0.5" />
                <div>
                  <p className="text-sm text-yellow-400 font-semibold mb-1">Exam Strategy</p>
                  <ul className="text-sm text-gray-300 space-y-1">
                    <li>• Always state max-flow min-cut theorem when relevant</li>
                    <li>• For "true/false" questions, simple counterexamples often work</li>
                    <li>• Time complexity: one Ford-Fulkerson iteration is O(|E|)</li>
                    <li>• Draw small examples to verify your understanding</li>
                  </ul>
                </div>
              </div>
            </div>
          </section>
          
          {/* Practice Checklist */}
          <section>
            <h2 className="text-2xl font-display font-bold text-white mb-6">Practice Checklist</h2>
            
            <div className="space-y-3">
              {[
                "Can convert bipartite matching to flow network",
                "Understand residual networks and critical edges",
                "Know how to update flows incrementally",
                "Can analyze Edmonds-Karp vs general Ford-Fulkerson",
                "Comfortable with flow network invariants"
              ].map((item: string, i: number) => (
                <label key={i} className="flex items-center gap-3 p-3 bg-slate-900/50 rounded-lg cursor-pointer hover:bg-slate-900/70 transition-colors">
                  <input type="checkbox" className="w-4 h-4 text-purple-500" />
                  <span className="text-gray-300">{item}</span>
                </label>
              ))}
            </div>
          </section>
        </motion.div>
      </div>
    </div>
    </PageWrapper>
  )
}