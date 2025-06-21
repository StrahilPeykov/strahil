'use client'

import { motion } from 'framer-motion'
import { GitBranch, ChevronRight, AlertCircle, CheckCircle, Info, ArrowLeft } from 'lucide-react'
import Link from 'next/link'
import { PageWrapper } from '../../../../components/layout/PageWrapper'
import { Badge } from '../../../../components/ui/Badge'
import { MathDisplay, MathSymbols, AlgorithmBlock } from '../../../../components/ui/MathDisplay'
import { ExamSolution, NetworkDiagram } from '../../../../components/ui/AlgorithmComponents'

const { Sub, Sup, In, RightArrow, Sum } = MathSymbols

export default function FlowAlgorithmsPage() {
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
            <div className="w-12 h-12 bg-cyan-500/10 rounded-lg flex items-center justify-center text-cyan-400">
              <GitBranch className="w-6 h-6" />
            </div>
            <div>
              <p className="text-sm text-gray-500">Exercise 4</p>
              <h1 className="text-3xl font-display font-bold text-white">Flow Algorithms</h1>
            </div>
          </div>

          <div className="flex flex-wrap gap-3">
            <Badge variant="cyan">Network Analysis</Badge>
            <Badge variant="purple">Algorithm Execution</Badge>
            <Badge variant="warning">Medium Difficulty</Badge>
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
              Flow algorithm questions typically ask you to:
            </p>
            <ol className="space-y-3 list-decimal list-inside text-gray-300">
              <li><strong className="text-white">Execute algorithm steps</strong> - Run Ford-Fulkerson or Edmonds-Karp</li>
              <li><strong className="text-white">Find augmenting paths</strong> - BFS for shortest path in residual network</li>
              <li><strong className="text-white">Identify critical edges</strong> - Which edges become saturated?</li>
              <li><strong className="text-white">Calculate flow changes</strong> - How does flow change after augmentation?</li>
            </ol>
          </div>
        </div>
      </section>

      {/* Complete Example: Edmonds-Karp */}
      <section className="px-6 py-12 border-t border-slate-800">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-2xl font-display font-bold text-white mb-6">
            Past Exam Example: Edmonds-Karp Execution (2024)
          </h2>

          <div className="bg-slate-900/50 rounded-xl p-6 border border-slate-800 mb-6">
            <h3 className="text-lg font-semibold text-white mb-4">Given Network:</h3>
            
            <NetworkDiagram>
              <div className="text-center mb-4">
                <span className="text-gray-400">s → a: 10 | s → b: 10 | a → b: 2 | a → t: 8 | b → t: 10</span>
              </div>
            </NetworkDiagram>

            <p className="text-gray-400 mb-4">
              Current flow f with value |f| = 10:
            </p>
            <ul className="list-disc list-inside text-gray-400 mb-4 space-y-1">
              <li>f(s,a) = 8, f(s,b) = 2</li>
              <li>f(a,b) = 0, f(a,t) = 8</li>
              <li>f(b,t) = 2</li>
            </ul>

            <div className="border-t border-slate-700 pt-4">
              <p className="font-semibold text-gray-300 mb-2">
                Question 4a: Find the shortest augmenting path in G<Sub base="f" sub="" />
              </p>
            </div>

            <ExamSolution score="4/4">
              <p className="mb-3"><strong>Step 1:</strong> Construct residual network G<Sub base="f" sub="" />:</p>
              
              <div className="bg-slate-800/50 rounded-lg p-4 mb-4 font-mono text-sm">
                <div>Residual capacities:</div>
                <div>• c<Sub base="f" sub="" />(s,a) = 10 - 8 = 2</div>
                <div>• c<Sub base="f" sub="" />(s,b) = 10 - 2 = 8</div>
                <div>• c<Sub base="f" sub="" />(a,b) = 2 - 0 = 2</div>
                <div>• c<Sub base="f" sub="" />(a,t) = 8 - 8 = 0 (no edge)</div>
                <div>• c<Sub base="f" sub="" />(b,t) = 10 - 2 = 8</div>
                <div>• c<Sub base="f" sub="" />(a,s) = 8 (backward)</div>
                <div>• c<Sub base="f" sub="" />(b,s) = 2 (backward)</div>
                <div>• c<Sub base="f" sub="" />(b,a) = 0 (no edge)</div>
                <div>• c<Sub base="f" sub="" />(t,a) = 8 (backward)</div>
                <div>• c<Sub base="f" sub="" />(t,b) = 2 (backward)</div>
              </div>

              <p className="mb-3"><strong>Step 2:</strong> Run BFS from s to t:</p>
              <p className="mb-2">Shortest augmenting path: s <RightArrow /> a <RightArrow /> b <RightArrow /> t</p>
              <p className="text-sm text-gray-400">Bottleneck capacity: min{"{"}2, 2, 8{"}"} = 2</p>
            </ExamSolution>

            <div className="mt-8 border-t border-slate-700 pt-4">
              <p className="font-semibold text-gray-300 mb-2">
                Question 4b: Which edges become critical after augmentation?
              </p>
            </div>

            <ExamSolution score="3/3">
              <p className="mb-3"><strong>Definition:</strong> An edge is critical if it becomes saturated (residual capacity = 0) after augmentation.</p>
              
              <p className="mb-2"><strong>After augmenting by 2 units along s → a → b → t:</strong></p>
              <ul className="list-disc list-inside space-y-1">
                <li>f'(s,a) = 8 + 2 = 10 <RightArrow /> c<Sub base="f'" sub="" />(s,a) = 0 ✓ <strong className="text-green-400">Critical</strong></li>
                <li>f'(a,b) = 0 + 2 = 2 <RightArrow /> c<Sub base="f'" sub="" />(a,b) = 0 ✓ <strong className="text-green-400">Critical</strong></li>
                <li>f'(b,t) = 2 + 2 = 4 <RightArrow /> c<Sub base="f'" sub="" />(b,t) = 6 ✗ Not critical</li>
              </ul>
              
              <p className="mt-3 text-sm text-gray-400">
                <strong>Answer:</strong> Edges (s,a) and (a,b) become critical.
              </p>
            </ExamSolution>

            <div className="mt-8 border-t border-slate-700 pt-4">
              <p className="font-semibold text-gray-300 mb-2">
                Question 4c: What is the new inflow at vertex b after augmentation?
              </p>
            </div>

            <ExamSolution score="3/3">
              <p className="mb-3"><strong>Definition:</strong> inflow(v) = <Sum /><Sub base="u" sub="" /> f(u,v)</p>
              
              <p className="mb-2"><strong>After augmentation:</strong></p>
              <ul className="list-disc list-inside space-y-1">
                <li>f'(s,b) = 2 (unchanged)</li>
                <li>f'(a,b) = 2 (increased from 0)</li>
              </ul>
              
              <p className="mt-3">
                inflow(b) = f'(s,b) + f'(a,b) = 2 + 2 = <strong className="text-green-400">4</strong>
              </p>
            </ExamSolution>
          </div>
        </div>
      </section>

      {/* Key Concepts */}
      <section className="px-6 py-12 border-t border-slate-800">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-2xl font-display font-bold text-white mb-6">
            Key Concepts to Master
          </h2>

          <div className="grid md:grid-cols-2 gap-6">
            <div className="bg-blue-500/10 rounded-xl p-6 border border-blue-500/30">
              <h3 className="font-semibold text-blue-400 mb-3">Residual Network</h3>
              <div className="text-sm space-y-2 text-gray-300">
                <p>For each edge (u,v) with capacity c and flow f:</p>
                <ul className="mt-2 space-y-1">
                  <li>• Forward: c<Sub base="f" sub="" />(u,v) = c(u,v) - f(u,v)</li>
                  <li>• Backward: c<Sub base="f" sub="" />(v,u) = f(u,v)</li>
                </ul>
                <p className="mt-2 text-gray-400">Only include edges with positive residual capacity!</p>
              </div>
            </div>

            <div className="bg-purple-500/10 rounded-xl p-6 border border-purple-500/30">
              <h3 className="font-semibold text-purple-400 mb-3">Critical Edges</h3>
              <ol className="text-sm space-y-1 text-gray-300">
                <li>1. Find all residual capacities on path</li>
                <li>2. Bottleneck = minimum capacity</li>
                <li>3. Critical = edges with capacity = bottleneck</li>
                <li>4. Can have multiple critical edges!</li>
              </ol>
            </div>

            <div className="bg-yellow-500/10 rounded-xl p-6 border border-yellow-500/30">
              <h3 className="font-semibold text-yellow-400 mb-3">Inflow Analysis</h3>
              <div className="text-sm space-y-1 text-gray-300">
                <p>inflow(v) = <Sum /><Sub base="u" sub="" /> f(u,v)</p>
                <p className="mt-2">After augmentation:</p>
                <p>• Check each vertex on path</p>
                <p>• Account for reversed edges</p>
              </div>
            </div>

            <div className="bg-green-500/10 rounded-xl p-6 border border-green-500/30">
              <h3 className="font-semibold text-green-400 mb-3">Algorithm Differences</h3>
              <div className="text-sm space-y-2 text-gray-300">
                <p><strong>Edmonds-Karp:</strong></p>
                <p className="ml-2">• Uses BFS for shortest path</p>
                <p className="ml-2">• O(VE²) time complexity</p>
                <p className="mt-2"><strong>Ford-Fulkerson:</strong></p>
                <p className="ml-2">• Any augmenting path</p>
                <p className="ml-2">• May not terminate with irrational capacities</p>
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

          <div className="grid md:grid-cols-2 gap-6">
            <div className="bg-red-500/10 rounded-xl p-6 border border-red-500/30">
              <h3 className="font-semibold text-red-400 mb-3">Calculation Errors</h3>
              <ul className="space-y-2 text-sm text-gray-300">
                <li>• Using original network instead of residual</li>
                <li>• Forgetting backward edges exist</li>
                <li>• Wrong residual capacity formula</li>
                <li>• Missing some critical edges</li>
              </ul>
            </div>

            <div className="bg-red-500/10 rounded-xl p-6 border border-red-500/30">
              <h3 className="font-semibold text-red-400 mb-3">Conceptual Errors</h3>
              <ul className="space-y-2 text-sm text-gray-300">
                <li>• Confusing flow value with edge flow</li>
                <li>• Not checking all paths for alternatives</li>
                <li>• Assuming unique shortest path</li>
                <li>• Forgetting capacity constraints</li>
              </ul>
            </div>
          </div>

          <div className="mt-6 p-4 bg-blue-500/10 rounded-lg border border-blue-500/30">
            <p className="text-sm text-blue-300">
              <strong>Pro tip:</strong> Always draw the residual network clearly. 
              Label each edge with its residual capacity. This prevents most errors.
            </p>
          </div>
        </div>
      </section>

      {/* Navigation */}
      <section className="px-6 py-12 border-t border-slate-800">
        <div className="max-w-4xl mx-auto flex justify-between">
          <Link
            href="/courses/algorithms-exam-prep/dynamic-programming"
            className="flex items-center gap-2 text-gray-400 hover:text-purple-400 transition-colors"
          >
            <ArrowLeft className="w-4 h-4" />
            Previous: Dynamic Programming
          </Link>
          <Link
            href="/courses/algorithms-exam-prep/shortest-paths"
            className="flex items-center gap-2 text-purple-400 hover:text-purple-300 transition-colors"
          >
            Next: Shortest Paths
            <ChevronRight className="w-4 h-4" />
          </Link>
        </div>
      </section>
    </PageWrapper>
  )
}
