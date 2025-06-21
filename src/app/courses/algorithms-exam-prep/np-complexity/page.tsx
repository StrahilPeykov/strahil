'use client'

import { motion } from 'framer-motion'
import { AlertCircle, ChevronRight, CheckCircle, XCircle, ArrowLeft, Lightbulb } from 'lucide-react'
import Link from 'next/link'
import { PageWrapper } from '../../../../components/layout/PageWrapper'
import { Badge } from '../../../../components/ui/Badge'
import { MathDisplay, MathSymbols, AlgorithmBlock } from '../../../../components/ui/MathDisplay'
import { ExamSolution, ProblemCard } from '../../../../components/ui/AlgorithmComponents'

const { Sub, Sup, In, ForAll, Exists, Leq, Geq } = MathSymbols

export default function NPComplexityPage() {
  return (
    <PageWrapper>
      {/* Header */}
      <section className="relative px-6 py-16 border-b border-slate-800">
        <div className="max-w-4xl mx-auto">
          <Link
            href="/courses/algorithms-exam-prep"
            className="inline-flex items-center gap-2 text-sm text-gray-400 hover:text-purple-400 mb-6 transition-colors"
          >
            <ArrowLeft className="w-4 h-4" />
            Back to course
          </Link>

          <div className="flex items-center gap-4 mb-6">
            <div className="w-12 h-12 bg-red-500/10 rounded-lg flex items-center justify-center text-red-400">
              <AlertCircle className="w-6 h-6" />
            </div>
            <div>
              <p className="text-sm text-gray-500">Exercise 7</p>
              <h1 className="text-3xl font-display font-bold text-white">NP-Complexity Classification</h1>
            </div>
          </div>

          <div className="flex flex-wrap gap-3">
            <Badge variant="error">Problem Classification</Badge>
            <Badge variant="purple">Decision Problems</Badge>
            <Badge variant="success">Easy Difficulty</Badge>
          </div>
        </div>
      </section>

      {/* Exam Format */}
      <section className="px-6 py-12">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-2xl font-display font-bold text-white mb-6">
            Exam Format & Expectations
          </h2>

          <div className="bg-slate-900/50 rounded-xl p-6 border border-slate-800">
            <p className="text-gray-300 mb-4">
              NP-Complexity classification questions ask you to:
            </p>
            <ol className="space-y-3 list-decimal list-inside text-gray-300">
              <li><strong className="text-white">Classify problems</strong> - Is it in P, NP-complete, or unknown?</li>
              <li><strong className="text-white">Justify your answer</strong> - Give algorithm or cite known result</li>
              <li><strong className="text-white">Recognize variations</strong> - How do constraints affect complexity?</li>
            </ol>
            <div className="mt-6 p-4 bg-green-500/10 rounded-lg border border-green-500/30">
              <p className="text-sm text-green-300">
                <strong>Good news:</strong> This is often the easiest exercise! 
                You just need to recognize problems and know their complexity.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Classification Guide */}
      <section className="px-6 py-12 border-t border-slate-800">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-2xl font-display font-bold text-white mb-6">
            Quick Classification Guide
          </h2>

          <div className="grid md:grid-cols-2 gap-6 mb-8">
            <div className="bg-green-500/10 rounded-xl p-6 border border-green-500/30">
              <h3 className="font-semibold text-green-400 mb-3">Problems in P</h3>
              <ul className="space-y-2 text-sm text-gray-300">
                <li>• Shortest Path (Dijkstra, Bellman-Ford)</li>
                <li>• Maximum Flow (Edmonds-Karp)</li>
                <li>• Bipartite Matching (Hungarian)</li>
                <li>• Minimum Spanning Tree (Kruskal, Prim)</li>
                <li>• 2-SAT (SCC algorithm)</li>
                <li>• Linear Programming (ellipsoid/interior point)</li>
              </ul>
            </div>

            <div className="bg-red-500/10 rounded-xl p-6 border border-red-500/30">
              <h3 className="font-semibold text-red-400 mb-3">NP-Complete Problems</h3>
              <ul className="space-y-2 text-sm text-gray-300">
                <li>• 3-SAT (but not 2-SAT!)</li>
                <li>• Traveling Salesman (TSP)</li>
                <li>• Knapsack (0/1 version)</li>
                <li>• Graph Coloring (k <Geq /> 3)</li>
                <li>• Hamiltonian Path/Cycle</li>
                <li>• Set Cover</li>
                <li>• Subset Sum</li>
                <li>• Clique, Independent Set, Vertex Cover</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Complete Example */}
      <section className="px-6 py-12 border-t border-slate-800">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-2xl font-display font-bold text-white mb-6">
            Past Exam Example: Problem Classification (2024)
          </h2>

          <div className="bg-slate-900/50 rounded-xl p-6 border border-slate-800">
            <h3 className="text-lg font-semibold text-white mb-4">
              Classify each problem as "in P" or "NP-complete":
            </h3>

            <div className="space-y-4">
              <ProblemCard 
                problem="Shortest path from s to t in a weighted graph"
                classification="In P"
                isPolynomial={true}
              />

              <ExamSolution score="2/2">
                <p><strong>Algorithm:</strong> Dijkstra's algorithm runs in O(V log V + E) with Fibonacci heaps.</p>
                <p className="text-sm text-gray-400">For negative weights: Bellman-Ford in O(VE).</p>
              </ExamSolution>

              <ProblemCard 
                problem="Does graph G have a Hamiltonian cycle?"
                classification="NP-complete"
                isPolynomial={false}
              />

              <ExamSolution score="2/2">
                <p>Known NP-complete problem. Part of Karp's 21 NP-complete problems.</p>
                <p className="text-sm text-gray-400">No polynomial algorithm known.</p>
              </ExamSolution>

              <ProblemCard 
                problem="Maximum matching in a bipartite graph"
                classification="In P"
                isPolynomial={true}
              />

              <ExamSolution score="2/2">
                <p><strong>Algorithm:</strong> Hungarian algorithm O(V³) or reduction to max flow.</p>
                <p className="text-sm text-gray-400">Also: Hopcroft-Karp in O(E√V).</p>
              </ExamSolution>

              <ProblemCard 
                problem="Can graph G be colored with 3 colors?"
                classification="NP-complete"
                isPolynomial={false}
              />

              <ExamSolution score="2/2">
                <p>3-COLORING is NP-complete (can reduce from 3-SAT).</p>
                <p className="text-sm text-gray-400">Note: 2-coloring is in P (check bipartiteness with BFS).</p>
              </ExamSolution>

              <ProblemCard 
                problem="Minimum spanning tree of a weighted graph"
                classification="In P"
                isPolynomial={true}
              />

              <ExamSolution score="2/2">
                <p><strong>Algorithms:</strong> Kruskal's O(E log E) or Prim's O(E + V log V).</p>
              </ExamSolution>
            </div>
          </div>
        </div>
      </section>

      {/* Important Variations */}
      <section className="px-6 py-12 border-t border-slate-800">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-2xl font-display font-bold text-white mb-6">
            Important Variations to Remember
          </h2>

          <div className="space-y-6">
            <div className="bg-yellow-500/10 rounded-xl p-6 border border-yellow-500/30">
              <h3 className="font-semibold text-yellow-400 mb-3">SAT Variants</h3>
              <div className="grid md:grid-cols-2 gap-4">
                <div>
                  <p className="text-green-400 font-semibold">2-SAT: In P ✓</p>
                  <p className="text-sm text-gray-300">Solve with SCC algorithm in O(n+m)</p>
                </div>
                <div>
                  <p className="text-red-400 font-semibold">3-SAT: NP-complete ✗</p>
                  <p className="text-sm text-gray-300">The canonical NP-complete problem</p>
                </div>
              </div>
            </div>

            <div className="bg-yellow-500/10 rounded-xl p-6 border border-yellow-500/30">
              <h3 className="font-semibold text-yellow-400 mb-3">Graph Coloring</h3>
              <div className="grid md:grid-cols-2 gap-4">
                <div>
                  <p className="text-green-400 font-semibold">2-coloring: In P ✓</p>
                  <p className="text-sm text-gray-300">Check if bipartite with BFS/DFS</p>
                </div>
                <div>
                  <p className="text-red-400 font-semibold">k-coloring (k <Geq /> 3): NP-complete ✗</p>
                  <p className="text-sm text-gray-300">Even 3-coloring is NP-complete</p>
                </div>
              </div>
            </div>

            <div className="bg-yellow-500/10 rounded-xl p-6 border border-yellow-500/30">
              <h3 className="font-semibold text-yellow-400 mb-3">Path Problems</h3>
              <div className="grid md:grid-cols-2 gap-4">
                <div>
                  <p className="text-green-400 font-semibold">Shortest Path: In P ✓</p>
                  <p className="text-sm text-gray-300">Dijkstra, Bellman-Ford, Floyd-Warshall</p>
                </div>
                <div>
                  <p className="text-red-400 font-semibold">Longest Path: NP-complete ✗</p>
                  <p className="text-sm text-gray-300">Reduces from Hamiltonian Path</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Tips for Success */}
      <section className="px-6 py-12 border-t border-slate-800">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-2xl font-display font-bold text-white mb-6">
            Tips for Maximum Points
          </h2>

          <div className="grid md:grid-cols-2 gap-6">
            <div className="bg-green-500/10 rounded-xl p-6 border border-green-500/30">
              <h3 className="font-semibold text-green-400 mb-3">For "In P" problems:</h3>
              <ol className="space-y-2 text-sm text-gray-300">
                <li>1. Name the specific algorithm</li>
                <li>2. State its time complexity</li>
                <li>3. Mention if there are multiple algorithms</li>
                <li>4. Be specific (e.g., "Dijkstra with Fibonacci heaps")</li>
              </ol>
            </div>

            <div className="bg-red-500/10 rounded-xl p-6 border border-red-500/30">
              <h3 className="font-semibold text-red-400 mb-3">For "NP-complete" problems:</h3>
              <ol className="space-y-2 text-sm text-gray-300">
                <li>1. State it's a known NP-complete problem</li>
                <li>2. Mention a possible reduction if you know one</li>
                <li>3. Don't confuse with similar P problems</li>
                <li>4. Note any special cases that ARE in P</li>
              </ol>
            </div>
          </div>

          <div className="mt-6 p-4 bg-blue-500/10 rounded-lg border border-blue-500/30">
            <div className="flex items-start gap-2">
              <Lightbulb className="w-5 h-5 text-blue-400 flex-shrink-0 mt-0.5" />
              <div>
                <p className="text-sm text-blue-300 font-semibold mb-1">
                  Exam Strategy
                </p>
                <p className="text-sm text-gray-300">
                  This is often a "free points" question if you've memorized the classifications.
                  Spend 5-10 minutes max here and save time for harder problems.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Common Mistakes */}
      <section className="px-6 py-12 border-t border-slate-800">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-2xl font-display font-bold text-white mb-6">
            Common Mistakes to Avoid
          </h2>

          <div className="bg-red-500/10 rounded-xl p-6 border border-red-500/30">
            <ul className="space-y-3 text-gray-300">
              <li className="flex items-start gap-2">
                <XCircle className="w-5 h-5 text-red-400 flex-shrink-0 mt-0.5" />
                <div>
                  <strong>Confusing 2-SAT with 3-SAT:</strong> 2-SAT is in P, 3-SAT is NP-complete!
                </div>
              </li>
              <li className="flex items-start gap-2">
                <XCircle className="w-5 h-5 text-red-400 flex-shrink-0 mt-0.5" />
                <div>
                  <strong>Forgetting special cases:</strong> 2-coloring is easy, 3-coloring is hard.
                </div>
              </li>
              <li className="flex items-start gap-2">
                <XCircle className="w-5 h-5 text-red-400 flex-shrink-0 mt-0.5" />
                <div>
                  <strong>Wrong algorithm names:</strong> It's "Dijkstra" not "Djikstra" or "Dijsktra".
                </div>
              </li>
              <li className="flex items-start gap-2">
                <XCircle className="w-5 h-5 text-red-400 flex-shrink-0 mt-0.5" />
                <div>
                  <strong>Vague justifications:</strong> Don't just say "use dynamic programming" - be specific!
                </div>
              </li>
            </ul>
          </div>
        </div>
      </section>

      {/* Navigation */}
      <section className="px-6 py-12 border-t border-slate-800">
        <div className="max-w-4xl mx-auto flex justify-between">
          <Link
            href="/courses/algorithms-exam-prep/flow-theory"
            className="flex items-center gap-2 text-gray-400 hover:text-purple-400 transition-colors"
          >
            <ArrowLeft className="w-4 h-4" />
            Previous: Flow Theory
          </Link>
          <Link
            href="/courses/algorithms-exam-prep/np-proofs"
            className="flex items-center gap-2 text-purple-400 hover:text-purple-300 transition-colors"
          >
            Next: NP-Hardness Proofs
            <ChevronRight className="w-4 h-4" />
          </Link>
        </div>
      </section>
    </PageWrapper>
  )
}
