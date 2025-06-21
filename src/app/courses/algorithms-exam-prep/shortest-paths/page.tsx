'use client'

import { motion } from 'framer-motion'
import { Route, ChevronRight, AlertCircle, CheckCircle, Zap, ArrowLeft } from 'lucide-react'
import Link from 'next/link'
import { PageWrapper } from '../../../../components/layout/PageWrapper'
import { Badge } from '../../../../components/ui/Badge'
import { MathDisplay, MathSymbols, AlgorithmBlock } from '../../../../components/ui/MathDisplay'
import { ExamSolution } from '../../../../components/ui/AlgorithmComponents'

const { Sub, Sup, Sum, In, ForAll, Geq, Leq } = MathSymbols

export default function ShortestPathsPage() {
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
            <div className="w-12 h-12 bg-green-500/10 rounded-lg flex items-center justify-center text-green-400">
              <Route className="w-6 h-6" />
            </div>
            <div>
              <p className="text-sm text-gray-500">Exercise 5</p>
              <h1 className="text-3xl font-display font-bold text-white">Shortest-Path Algorithms</h1>
            </div>
          </div>

          <div className="flex flex-wrap gap-3">
            <Badge variant="green">Modified Weights</Badge>
            <Badge variant="purple">Algorithm Analysis</Badge>
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
              Shortest-path questions typically involve:
            </p>
            <ol className="space-y-3 list-decimal list-inside text-gray-300">
              <li><strong className="text-white">Modified weight functions</strong> - Prove/disprove algorithm correctness</li>
              <li><strong className="text-white">Special objectives</strong> - Minimize edges, then weight</li>
              <li><strong className="text-white">Algorithm modifications</strong> - Adapt Dijkstra/Bellman-Ford</li>
              <li><strong className="text-white">Correctness proofs</strong> - Show the modification works</li>
            </ol>
            <div className="mt-6 p-4 bg-green-500/10 rounded-lg border border-green-500/30">
              <p className="text-sm text-green-300">
                <strong>Key insight:</strong> Weight modifications often encode multiple objectives 
                into a single weight function.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Weight Modification Technique */}
      <section className="px-6 py-12 border-t border-slate-800">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-2xl font-display font-bold text-white mb-6">
            The Weight Modification Technique
          </h2>

          <div className="grid md:grid-cols-2 gap-6">
            <div className="bg-blue-500/10 rounded-xl p-6 border border-blue-500/30">
              <h3 className="font-semibold text-blue-400 mb-3">Linear Combination</h3>
              <p className="text-sm text-gray-300 mb-3">
                Combine two objectives with different priorities:
              </p>
              <MathDisplay block>
                w'(e) = α · primary(e) + secondary(e)
              </MathDisplay>
              <p className="text-sm text-gray-400 mt-2">
                Choose α large enough that primary objective dominates
              </p>
            </div>

            <div className="bg-purple-500/10 rounded-xl p-6 border border-purple-500/30">
              <h3 className="font-semibold text-purple-400 mb-3">The Big-C Technique</h3>
              <p className="text-sm text-gray-300 mb-3">
                Choose C larger than any possible path weight:
              </p>
              <MathDisplay block>
                w'(e) = w(e) + C
              </MathDisplay>
              <p className="text-sm text-gray-400 mt-2">
                where C {">"} sum of all original weights
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Complete Example: Minimum Edges */}
      <section className="px-6 py-12 border-t border-slate-800">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-2xl font-display font-bold text-white mb-6">
            Full Exam Solution: Minimum Edges with Tiebreaker (2024)
          </h2>

          <div className="bg-slate-900/50 rounded-xl p-6 border border-slate-800">
            <h3 className="text-lg font-semibold text-white mb-4">Problem:</h3>
            <p className="text-gray-400 mb-3">
              Find a path P from s to t such that:
            </p>
            <ol className="list-decimal list-inside text-gray-400 mb-4 space-y-1">
              <li>P uses as few edges as possible</li>
              <li>Among all paths with minimum edges, P has smallest total weight</li>
            </ol>

            <div className="bg-slate-800/50 rounded-lg p-4 mb-6">
              <p className="text-sm font-semibold text-gray-300 mb-2">Proposed Algorithm:</p>
              <AlgorithmBlock>
{`1. T = Σ w(e) for all e ∈ E
2. For every edge e: w'(e) = w(e) + T + 1
3. Run Dijkstra with weights w'
4. Output the resulting path P`}
              </AlgorithmBlock>
            </div>

            <p className="font-semibold text-gray-300 mb-2">
              Prove or disprove: This algorithm correctly solves the problem.
            </p>

            <ExamSolution score="10/10">
              <p className="font-semibold text-white">The algorithm is CORRECT.</p>
              
              <div className="mt-4">
                <p className="font-semibold mb-2">Proof:</p>
                
                <p className="mb-3">
                  <strong>1. Weight transformation analysis:</strong>
                </p>
                <p className="ml-4 mb-3">
                  For any path P with k edges and total original weight W:
                </p>
                <MathDisplay block className="ml-4 mb-3">
                  w'(P) = <Sum /><Sub base="e∈P" sub="" /> w'(e) = <Sum /><Sub base="e∈P" sub="" /> (w(e) + T + 1) = W + k(T + 1)
                </MathDisplay>
                
                <p className="mb-3">
                  <strong>2. Edge count dominates:</strong>
                </p>
                <p className="ml-4 mb-3">
                  Since T = <Sum /><Sub base="e∈E" sub="" /> w(e) and W <Leq /> T for any path:
                </p>
                <ul className="ml-8 space-y-1 mb-3">
                  <li>• If path P<Sub base="1" sub="" /> has k<Sub base="1" sub="" /> edges</li>
                  <li>• If path P<Sub base="2" sub="" /> has k<Sub base="2" sub="" /> edges with k<Sub base="1" sub="" /> {"<"} k<Sub base="2" sub="" /></li>
                  <li>• Then: w'(P<Sub base="1" sub="" />) {"<"} k<Sub base="1" sub="" />(T+1) + T {"<"} k<Sub base="2" sub="" />(T+1) {"<"} w'(P<Sub base="2" sub="" />)</li>
                </ul>
                
                <p className="mb-3">
                  <strong>3. Weight tiebreaking:</strong>
                </p>
                <p className="ml-4 mb-3">
                  For paths with the same number of edges k:
                </p>
                <p className="ml-8 mb-3">
                  w'(P<Sub base="1" sub="" />) {"<"} w'(P<Sub base="2" sub="" />) ⟺ W<Sub base="1" sub="" /> + k(T+1) {"<"} W<Sub base="2" sub="" /> + k(T+1) ⟺ W<Sub base="1" sub="" /> {"<"} W<Sub base="2" sub="" />
                </p>
                
                <p className="mb-3">
                  <strong>4. Conclusion:</strong>
                </p>
                <p className="ml-4">
                  Dijkstra minimizes w'(P), which ensures P has minimum edges first, 
                  then minimum weight among paths with that many edges. ✓
                </p>
              </div>
            </ExamSolution>
          </div>
        </div>
      </section>

      {/* Another Example: Bottleneck Shortest Path */}
      <section className="px-6 py-12 border-t border-slate-800">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-2xl font-display font-bold text-white mb-6">
            Example: Bottleneck Shortest Path
          </h2>

          <div className="bg-slate-900/50 rounded-xl p-6 border border-slate-800">
            <h3 className="text-lg font-semibold text-white mb-4">Problem:</h3>
            <p className="text-gray-400 mb-4">
              Find a path from s to t that minimizes the maximum edge weight on the path.
            </p>

            <div className="bg-yellow-500/10 rounded-xl p-6 border border-yellow-500/30 mb-6">
              <h4 className="font-semibold text-yellow-400 mb-2">Wrong Approach</h4>
              <p className="text-gray-300">
                Setting w'(e) = w(e)<Sup base="2" sup="" /> doesn't work! 
                Squaring doesn't preserve the bottleneck property.
              </p>
            </div>

            <div className="bg-green-500/10 rounded-xl p-6 border border-green-500/30">
              <h4 className="font-semibold text-green-400 mb-2">Correct Approach</h4>
              <p className="text-gray-300 mb-2">
                Can't solve with weight modification. Instead:
              </p>
              <ol className="list-decimal list-inside text-sm text-gray-300 space-y-1">
                <li>Binary search on the bottleneck value B</li>
                <li>For each B, use BFS on subgraph with edges <Leq /> B</li>
                <li>Find minimum B where path exists</li>
              </ol>
            </div>
          </div>
        </div>
      </section>

      {/* Common Patterns */}
      <section className="px-6 py-12 border-t border-slate-800">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-2xl font-display font-bold text-white mb-6">
            Common Weight Modification Patterns
          </h2>

          <div className="space-y-6">
            <div className="bg-slate-900/50 rounded-xl p-6 border border-slate-800">
              <h3 className="font-semibold text-white mb-3">
                Pattern 1: Minimize Primary, Then Secondary
              </h3>
              <MathDisplay block>
                w'(e) = primary(e) · C + secondary(e)
              </MathDisplay>
              <p className="text-sm text-gray-400 mt-2">
                where C {">"} max possible secondary cost
              </p>
            </div>

            <div className="bg-slate-900/50 rounded-xl p-6 border border-slate-800">
              <h3 className="font-semibold text-white mb-3">
                Pattern 2: Count + Weight
              </h3>
              <MathDisplay block>
                w'(e) = (T + 1) + w(e)
              </MathDisplay>
              <p className="text-sm text-gray-400 mt-2">
                Minimizes edge count, breaks ties by weight
              </p>
            </div>

            <div className="bg-slate-900/50 rounded-xl p-6 border border-slate-800">
              <h3 className="font-semibold text-white mb-3">
                Pattern 3: Lexicographic Ordering
              </h3>
              <MathDisplay block>
                w'(e) = C<Sup base="2" sup="" /> · metric1(e) + C · metric2(e) + metric3(e)
              </MathDisplay>
              <p className="text-sm text-gray-400 mt-2">
                Ensures strict priority ordering between metrics
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Tips Section */}
      <section className="px-6 py-12 border-t border-slate-800">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-2xl font-display font-bold text-white mb-6">
            Exam Strategy
          </h2>

          <div className="grid md:grid-cols-2 gap-6">
            <div className="bg-green-500/10 rounded-xl p-6 border border-green-500/30">
              <h3 className="font-semibold text-green-400 mb-3">Proving Correctness</h3>
              <ol className="space-y-2 text-sm text-gray-300">
                <li>1. Show how weights encode objectives</li>
                <li>2. Prove primary objective dominates</li>
                <li>3. Verify tiebreaking works correctly</li>
                <li>4. Conclude algorithm finds optimal path</li>
              </ol>
            </div>

            <div className="bg-red-500/10 rounded-xl p-6 border border-red-500/30">
              <h3 className="font-semibold text-red-400 mb-3">Finding Counterexamples</h3>
              <ol className="space-y-2 text-sm text-gray-300">
                <li>1. Look for small graphs (3-4 nodes)</li>
                <li>2. Try extreme weight values</li>
                <li>3. Check if objectives conflict</li>
                <li>4. Draw the example clearly</li>
              </ol>
            </div>
          </div>

          <div className="mt-6 p-4 bg-blue-500/10 rounded-lg border border-blue-500/30">
            <div className="flex items-start gap-2">
              <Zap className="w-5 h-5 text-blue-400 flex-shrink-0 mt-0.5" />
              <p className="text-sm text-gray-300">
                <strong className="text-blue-400">Quick check:</strong> If C isn't big enough 
                (e.g., C = max weight instead of sum), the algorithm usually fails. 
                This is a common source of counterexamples.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Navigation */}
      <section className="px-6 py-12 border-t border-slate-800">
        <div className="max-w-4xl mx-auto flex justify-between">
          <Link
            href="/courses/algorithms-exam-prep/flow-algorithms"
            className="flex items-center gap-2 text-gray-400 hover:text-purple-400 transition-colors"
          >
            <ArrowLeft className="w-4 h-4" />
            Previous: Flow Algorithms
          </Link>
          <Link
            href="/courses/algorithms-exam-prep/flow-theory"
            className="flex items-center gap-2 text-purple-400 hover:text-purple-300 transition-colors"
          >
            Next: Flow Theory
            <ChevronRight className="w-4 h-4" />
          </Link>
        </div>
      </section>
    </PageWrapper>
  )
}
