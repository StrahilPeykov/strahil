'use client'

import { motion } from 'framer-motion'
import { BookOpen, AlertCircle, CheckCircle, GitBranch, ChevronRight, Zap, XCircle } from 'lucide-react'
import Link from 'next/link'
import { PageWrapper } from '../../../../components/layout/PageWrapper'

interface ClassificationCardProps {
  problem: string
  classification: string
  reasoning: string
}

function ClassificationCard({ problem, classification, reasoning }: ClassificationCardProps) {
  const isPoly = classification === 'Polynomial'
  
  return (
    <div className={`p-4 border rounded-lg ${
      isPoly 
        ? 'bg-green-500/10 border-green-500/30' 
        : 'bg-red-500/10 border-red-500/30'
    }`}>
      <div className="flex items-start justify-between mb-2">
        <h4 className="font-semibold text-white">{problem}</h4>
        {isPoly ? (
          <CheckCircle className="w-5 h-5 text-green-400" />
        ) : (
          <XCircle className="w-5 h-5 text-red-400" />
        )}
      </div>
      <p className={`text-sm mb-2 ${isPoly ? 'text-green-400' : 'text-red-400'}`}>
        {classification}
      </p>
      <p className="text-sm text-gray-400">{reasoning}</p>
    </div>
  )
}

export default function NPClassificationExercise() {
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
          <h1 className="text-3xl font-display font-bold text-white">Exercise 7: NP-hard or Polynomial Time</h1>
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
              For each problem, determine if it's NP-hard or polynomial-time solvable. 
              Justify with either an algorithm (for poly-time) or a reduction from a known NP-hard problem.
            </p>
            
            <div className="p-4 bg-purple-500/10 border border-purple-500/30 rounded-lg mb-6">
              <div className="flex items-start gap-3">
                <AlertCircle className="w-5 h-5 text-purple-400 flex-shrink-0 mt-0.5" />
                <div>
                  <p className="text-sm text-purple-400 font-semibold mb-1">Known NP-hard Problems</p>
                  <p className="text-sm text-gray-300">
                    Circuit-SAT, Formula-SAT, 3-SAT, Maximum Clique, Minimum Vertex Cover, 
                    Maximum Independent Set, Hamiltonian Cycle, TSP, 3-Colorability, Subset Sum
                  </p>
                </div>
              </div>
            </div>
          </section>
          
          {/* Key Patterns */}
          <section className="mb-12">
            <h2 className="text-2xl font-display font-bold text-white mb-6">Recognition Patterns</h2>
            
            <div className="grid md:grid-cols-2 gap-4 mb-8">
              <div className="p-4 bg-green-500/10 border border-green-500/30 rounded-lg">
                <h3 className="text-lg font-semibold text-green-400 mb-3">Signs of Polynomial Time</h3>
                <ul className="space-y-2 text-sm text-gray-300">
                  <li>• Can be solved by greedy algorithm</li>
                  <li>• Reduces to matching/flow problem</li>
                  <li>• Fixed structure (e.g., trees, bipartite)</li>
                  <li>• Involves sorting or graph traversal</li>
                  <li>• Has optimal substructure for DP</li>
                </ul>
              </div>
              
              <div className="p-4 bg-red-500/10 border border-red-500/30 rounded-lg">
                <h3 className="text-lg font-semibold text-red-400 mb-3">Signs of NP-hardness</h3>
                <ul className="space-y-2 text-sm text-gray-300">
                  <li>• Subset selection with constraints</li>
                  <li>• Partition into equal parts</li>
                  <li>• Covering/packing problems</li>
                  <li>• General graph coloring</li>
                  <li>• "Minimum number of groups"</li>
                </ul>
              </div>
            </div>
          </section>
          
          {/* Common Problem Types */}
          <section className="mb-12">
            <h2 className="text-2xl font-display font-bold text-white mb-6">Common Problem Types</h2>
            
            <div className="space-y-6">
              <div>
                <h3 className="text-xl font-semibold text-white mb-4">Graph Problems</h3>
                <div className="grid gap-4">
                  <ClassificationCard
                    problem="Largest Connected Component"
                    classification="Polynomial"
                    reasoning="BFS/DFS to find components, O(V+E)"
                  />
                  
                  <ClassificationCard
                    problem="Minimum Vertex Cover"
                    classification="NP-hard"
                    reasoning="Classic NP-hard problem, even on general graphs"
                  />
                  
                  <ClassificationCard
                    problem="Maximum Matching (Bipartite)"
                    classification="Polynomial"
                    reasoning="Ford-Fulkerson on flow network, O(VE²)"
                  />
                  
                  <ClassificationCard
                    problem="Maximum Independent Set (Trees)"
                    classification="Polynomial"
                    reasoning="Dynamic programming on trees, O(V)"
                  />
                </div>
              </div>
              
              <div>
                <h3 className="text-xl font-semibold text-white mb-4">Special Graph Structures</h3>
                <div className="grid gap-4">
                  <ClassificationCard
                    problem="Independent Set in Joined Graphs"
                    classification="NP-hard"
                    reasoning="Reduce from general Independent Set by adding universal vertex"
                  />
                  
                  <ClassificationCard
                    problem="Partition Bipartite into Cliques"
                    classification="Polynomial"
                    reasoning="Cliques in bipartite ≤ size 2, becomes maximum matching"
                  />
                  
                  <ClassificationCard
                    problem="Maximum Redundant Edges"
                    classification="Polynomial"
                    reasoning="Find spanning tree, remove rest, O(V+E)"
                  />
                </div>
              </div>
            </div>
          </section>
          
          {/* Reduction Techniques */}
          <section className="mb-12">
            <h2 className="text-2xl font-display font-bold text-white mb-6">Common Reduction Techniques</h2>
            
            <div className="space-y-4">
              <div className="p-4 bg-slate-900/50 border border-slate-800 rounded-lg">
                <h3 className="text-lg font-semibold text-white mb-2">From 3-Colorability</h3>
                <p className="text-gray-400 text-sm mb-2">
                  Graph G is 3-colorable ⟺ Remove one color class to make it bipartite
                </p>
                <p className="text-sm text-gray-500">
                  Example: "Delete Independent Set to get Bipartite" is NP-hard
                </p>
              </div>
              
              <div className="p-4 bg-slate-900/50 border border-slate-800 rounded-lg">
                <h3 className="text-lg font-semibold text-white mb-2">From Subset Sum</h3>
                <p className="text-gray-400 text-sm mb-2">
                  Create items with weights = numbers, find subset summing to target
                </p>
                <p className="text-sm text-gray-500">
                  Example: "Distribute Cargo over Planes" with exact capacity constraints
                </p>
              </div>
              
              <div className="p-4 bg-slate-900/50 border border-slate-800 rounded-lg">
                <h3 className="text-lg font-semibold text-white mb-2">From Vertex Cover</h3>
                <p className="text-gray-400 text-sm mb-2">
                  Create auxiliary graph where vertex selection corresponds to edge coverage
                </p>
                <p className="text-sm text-gray-500">
                  Example: "Minimum Triangle Elimination" - add vertex for each edge
                </p>
              </div>
            </div>
          </section>
          
          {/* Quick Reference */}
          <section className="mb-12">
            <h2 className="text-2xl font-display font-bold text-white mb-6">Quick Decision Guide</h2>
            
            <div className="p-6 bg-blue-500/10 border border-blue-500/30 rounded-lg">
              <ol className="space-y-4 text-sm">
                <li className="flex gap-3">
                  <span className="text-blue-400 font-bold">1.</span>
                  <div>
                    <p className="text-gray-300 font-medium">Check for special structure</p>
                    <p className="text-gray-400">Tree? Bipartite? Fixed parameter? → Often polynomial</p>
                  </div>
                </li>
                <li className="flex gap-3">
                  <span className="text-blue-400 font-bold">2.</span>
                  <div>
                    <p className="text-gray-300 font-medium">Look for known algorithms</p>
                    <p className="text-gray-400">Matching? Flow? MST? Shortest path? → Polynomial</p>
                  </div>
                </li>
                <li className="flex gap-3">
                  <span className="text-blue-400 font-bold">3.</span>
                  <div>
                    <p className="text-gray-300 font-medium">Try simple reductions</p>
                    <p className="text-gray-400">Can you encode 3-SAT? Vertex Cover? → NP-hard</p>
                  </div>
                </li>
                <li className="flex gap-3">
                  <span className="text-blue-400 font-bold">4.</span>
                  <div>
                    <p className="text-gray-300 font-medium">Consider complement problems</p>
                    <p className="text-gray-400">Max Clique ⟺ Max Independent Set in complement graph</p>
                  </div>
                </li>
              </ol>
            </div>
          </section>
          
          {/* Example Answers */}
          <section className="mb-12">
            <h2 className="text-2xl font-display font-bold text-white mb-6">Model Answer Format</h2>
            
            <div className="p-4 bg-gray-800/50 rounded-lg font-mono text-sm">
              <p className="text-green-400"># Polynomial Time:</p>
              <p className="text-gray-300 mt-2">
                This is polynomial-time solvable using [algorithm].<br/>
                [Brief explanation of approach]<br/>
                Time complexity: O(...)
              </p>
              
              <p className="text-red-400 mt-6"># NP-hard:</p>
              <p className="text-gray-300 mt-2">
                This is NP-hard by reduction from [known NP-hard problem].<br/>
                Given instance I of [problem], construct instance I' as:<br/>
                [Construction details]<br/>
                Then I has solution ⟺ I' has solution because [reason].
              </p>
            </div>
          </section>
          
          {/* Tips */}
          <section>
            <div className="p-4 bg-yellow-500/10 border border-yellow-500/30 rounded-lg">
              <div className="flex items-start gap-3">
                <Zap className="w-5 h-5 text-yellow-400 flex-shrink-0 mt-0.5" />
                <div>
                  <p className="text-sm text-yellow-400 font-semibold mb-1">Exam Tips</p>
                  <ul className="text-sm text-gray-300 space-y-1">
                    <li>• Keep explanations concise but complete</li>
                    <li>• For poly-time: name the algorithm and state complexity</li>
                    <li>• For NP-hard: construct reduction explicitly</li>
                    <li>• When unsure, try both approaches quickly</li>
                    <li>• Remember: NP-hard ≠ no polynomial algorithm exists (unless P=NP)</li>
                  </ul>
                </div>
              </div>
            </div>
          </section>
        </motion.div>
      </div>
    </div>
    </PageWrapper>
  )
}
