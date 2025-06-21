'use client'

import { motion } from 'framer-motion'
import { GitBranch, ChevronRight, AlertCircle, CheckCircle, Zap, ArrowLeft } from 'lucide-react'
import Link from 'next/link'
import { PageWrapper } from '../../../../components/layout/PageWrapper'
import { Badge } from '../../../../components/ui/Badge'
import { MathDisplay, MathSymbols, AlgorithmBlock } from '../../../../components/ui/MathDisplay'
import { ExamSolution } from '../../../../components/ui/AlgorithmComponents'

const { Sub, Sup, In, ForAll, Exists, Leq, Geq, Sum, RightArrow } = MathSymbols

export default function FlowTheoryPage() {
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
            <div className="w-12 h-12 bg-pink-500/10 rounded-lg flex items-center justify-center text-pink-400">
              <GitBranch className="w-6 h-6" />
            </div>
            <div>
              <p className="text-sm text-gray-500">Exercise 6</p>
              <h1 className="text-3xl font-display font-bold text-white">Flow Theory</h1>
            </div>
          </div>

          <div className="flex flex-wrap gap-3">
            <Badge variant="pink">Maximum Flow</Badge>
            <Badge variant="purple">Flow-Matching Reductions</Badge>
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
              Flow Theory questions typically involve:
            </p>
            <ol className="space-y-3 list-decimal list-inside text-gray-300">
              <li><strong className="text-white">Max-flow min-cut theorem</strong> - Find minimum cut given maximum flow</li>
              <li><strong className="text-white">Flow conservation</strong> - Verify or compute flows at vertices</li>
              <li><strong className="text-white">Reduction to matching</strong> - Convert problems to bipartite matching</li>
              <li><strong className="text-white">Prove flow properties</strong> - Value, feasibility, optimality</li>
            </ol>
          </div>
        </div>
      </section>

      {/* Complete Example: Max-Flow Min-Cut */}
      <section className="px-6 py-12 border-t border-slate-800">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-2xl font-display font-bold text-white mb-6">
            Past Exam Example: Finding Minimum Cut (2024)
          </h2>

          <div className="bg-slate-900/50 rounded-xl p-6 border border-slate-800">
            <h3 className="text-lg font-semibold text-white mb-4">Problem:</h3>
            <p className="text-gray-400 mb-4">
              Given a flow network with maximum flow value 15. The final residual network G<Sub base="f*" sub="" /> is:
            </p>
            
            <div className="bg-slate-800/50 rounded-lg p-4 mb-4 font-mono text-sm">
              <div>s → a: 0 (saturated)</div>
              <div>s → b: 3</div>
              <div>a → c: 2</div>
              <div>b → c: 0 (saturated)</div>
              <div>b → d: 4</div>
              <div>c → t: 0 (saturated)</div>
              <div>d → t: 1</div>
              <div>(Plus backward edges)</div>
            </div>

            <div className="border-t border-slate-700 pt-4">
              <p className="font-semibold text-gray-300 mb-2">
                Find a minimum cut (S, T) and verify its capacity equals 15.
              </p>
            </div>

            <ExamSolution score="10/10">
              <p className="mb-3"><strong>Step 1:</strong> Find reachable vertices from s in G<Sub base="f*" sub="" />:</p>
              
              <div className="ml-4 mb-4">
                <p>• From s: Can reach b (residual capacity 3)</p>
                <p>• From b: Can reach d (residual capacity 4)</p>
                <p>• Cannot reach a (no edge from s)</p>
                <p>• Cannot reach c (no edge from b)</p>
                <p>• Cannot reach t (no path)</p>
              </div>
              
              <p className="mb-3"><strong>Step 2:</strong> Define the cut:</p>
              <div className="ml-4 mb-4">
                <p>S = {"{"} s, b, d {"}"} (reachable from s)</p>
                <p>T = {"{"} a, c, t {"}"} (not reachable)</p>
              </div>
              
              <p className="mb-3"><strong>Step 3:</strong> Find edges crossing the cut (S → T):</p>
              <div className="ml-4 mb-4">
                <p>• (s, a) with capacity c(s,a)</p>
                <p>• (b, c) with capacity c(b,c)</p>
                <p>• (d, t) with capacity c(d,t)</p>
              </div>
              
              <p className="mb-3"><strong>Step 4:</strong> Verify these edges are saturated:</p>
              <div className="ml-4 mb-4">
                <p>Since residual capacity is 0 for edges crossing S → T,</p>
                <p>they must be saturated in the maximum flow.</p>
              </div>
              
              <p className="mb-3"><strong>Step 5:</strong> Calculate cut capacity:</p>
              <MathDisplay block>
                c(S,T) = c(s,a) + c(b,c) + c(d,t) = 15
              </MathDisplay>
              
              <p className="mt-3 text-sm text-gray-400">
                By max-flow min-cut theorem: max flow = min cut = 15 ✓
              </p>
            </ExamSolution>
          </div>
        </div>
      </section>

      {/* Bipartite Matching Reduction */}
      <section className="px-6 py-12 border-t border-slate-800">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-2xl font-display font-bold text-white mb-6">
            Example: Reduction to Bipartite Matching
          </h2>

          <div className="bg-slate-900/50 rounded-xl p-6 border border-slate-800">
            <h3 className="text-lg font-semibold text-white mb-4">Problem: Task Assignment</h3>
            <p className="text-gray-400 mb-4">
              n workers and m tasks. Worker i can perform task j if (i,j) <In /> E.
              Each worker can do at most k tasks. Each task needs exactly one worker.
              Maximize number of completed tasks.
            </p>

            <div className="border-t border-slate-700 pt-4 mb-4">
              <p className="font-semibold text-gray-300 mb-2">
                Show how to reduce this to a max-flow problem.
              </p>
            </div>

            <ExamSolution score="10/10">
              <p className="mb-3"><strong>Construction:</strong></p>
              
              <ol className="space-y-3 list-decimal list-inside">
                <li>
                  <strong>Create vertices:</strong>
                  <ul className="ml-4 mt-1 space-y-1 text-sm">
                    <li>• Source s and sink t</li>
                    <li>• Vertex w<Sub base="i" sub="" /> for each worker i</li>
                    <li>• Vertex t<Sub base="j" sub="" /> for each task j</li>
                  </ul>
                </li>
                
                <li>
                  <strong>Add edges:</strong>
                  <ul className="ml-4 mt-1 space-y-1 text-sm">
                    <li>• (s, w<Sub base="i" sub="" />) with capacity k for each worker i</li>
                    <li>• (w<Sub base="i" sub="" />, t<Sub base="j" sub="" />) with capacity 1 if (i,j) <In /> E</li>
                    <li>• (t<Sub base="j" sub="" />, t) with capacity 1 for each task j</li>
                  </ul>
                </li>
                
                <li>
                  <strong>Correspondence:</strong>
                  <p className="ml-4 mt-1 text-sm">
                    Maximum flow = maximum number of tasks assigned
                  </p>
                </li>
              </ol>
              
              <div className="mt-4 p-4 bg-blue-500/10 rounded-lg border border-blue-500/30">
                <p className="text-sm text-blue-300">
                  <strong>Why it works:</strong> 
                  <ul className="mt-2 space-y-1">
                    <li>• Edge (s, w<Sub base="i" sub="" />) capacity k limits worker i to k tasks</li>
                    <li>• Edge (t<Sub base="j" sub="" />, t) capacity 1 ensures task j assigned once</li>
                    <li>• Unit capacities on matching edges ensure integral flow</li>
                  </ul>
                </p>
              </div>
            </ExamSolution>
          </div>
        </div>
      </section>

      {/* Key Theorems */}
      <section className="px-6 py-12 border-t border-slate-800">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-2xl font-display font-bold text-white mb-6">
            Key Theorems to Remember
          </h2>

          <div className="space-y-6">
            <div className="bg-blue-500/10 rounded-xl p-6 border border-blue-500/30">
              <h3 className="font-semibold text-blue-400 mb-3">Max-Flow Min-Cut Theorem</h3>
              <MathDisplay block>
                max {"{"} |f| : f is a flow {"}"} = min {"{"} c(S,T) : (S,T) is a cut {"}"}
              </MathDisplay>
              <p className="text-sm text-gray-300 mt-3">
                The maximum flow value equals the capacity of the minimum cut.
              </p>
            </div>

            <div className="bg-purple-500/10 rounded-xl p-6 border border-purple-500/30">
              <h3 className="font-semibold text-purple-400 mb-3">Flow Conservation</h3>
              <p className="text-gray-300 mb-2">For all v ≠ s,t:</p>
              <MathDisplay block>
                <Sum /><Sub base="u" sub="" /> f(u,v) = <Sum /><Sub base="w" sub="" /> f(v,w)
              </MathDisplay>
              <p className="text-sm text-gray-400 mt-2">Inflow equals outflow at every internal vertex.</p>
            </div>

            <div className="bg-green-500/10 rounded-xl p-6 border border-green-500/30">
              <h3 className="font-semibold text-green-400 mb-3">Integrality Theorem</h3>
              <p className="text-gray-300">
                If all capacities are integers, then there exists an integral maximum flow.
                Ford-Fulkerson will find it.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Common Reduction Patterns */}
      <section className="px-6 py-12 border-t border-slate-800">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-2xl font-display font-bold text-white mb-6">
            Common Reduction Patterns
          </h2>

          <div className="grid md:grid-cols-2 gap-6">
            <div className="bg-slate-900/50 rounded-xl p-6 border border-slate-800">
              <h3 className="font-semibold text-white mb-3">Vertex Capacities</h3>
              <p className="text-sm text-gray-300 mb-3">
                To model vertex capacity c(v):
              </p>
              <ol className="text-sm space-y-1 text-gray-400">
                <li>1. Split v into v<Sub base="in" sub="" /> and v<Sub base="out" sub="" /></li>
                <li>2. Add edge (v<Sub base="in" sub="" />, v<Sub base="out" sub="" />) with capacity c(v)</li>
                <li>3. Redirect all incoming edges to v<Sub base="in" sub="" /></li>
                <li>4. Redirect all outgoing edges from v<Sub base="out" sub="" /></li>
              </ol>
            </div>

            <div className="bg-slate-900/50 rounded-xl p-6 border border-slate-800">
              <h3 className="font-semibold text-white mb-3">Multiple Sources/Sinks</h3>
              <p className="text-sm text-gray-300 mb-3">
                For multiple sources s<Sub base="1" sub="" />,...,s<Sub base="k" sub="" />:
              </p>
              <ol className="text-sm space-y-1 text-gray-400">
                <li>1. Add super-source s</li>
                <li>2. Add edges (s, s<Sub base="i" sub="" />) with capacity ∞</li>
                <li>3. Similarly for multiple sinks</li>
              </ol>
            </div>
          </div>
        </div>
      </section>

      {/* Navigation */}
      <section className="px-6 py-12 border-t border-slate-800">
        <div className="max-w-4xl mx-auto flex justify-between">
          <Link
            href="/courses/algorithms-exam-prep/shortest-paths"
            className="flex items-center gap-2 text-gray-400 hover:text-purple-400 transition-colors"
          >
            <ArrowLeft className="w-4 h-4" />
            Previous: Shortest Paths
          </Link>
          <Link
            href="/courses/algorithms-exam-prep/np-complexity"
            className="flex items-center gap-2 text-purple-400 hover:text-purple-300 transition-colors"
          >
            Next: NP-Complexity
            <ChevronRight className="w-4 h-4" />
          </Link>
        </div>
      </section>
    </PageWrapper>
  )
}
