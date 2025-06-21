import { motion } from 'framer-motion'
import { Route, ChevronRight, AlertCircle, CheckCircle, Zap, ArrowLeft } from 'lucide-react'
import Link from 'next/link'
import { PageWrapper } from '../../../../components/layout/PageWrapper'
import { Badge } from '../../../../components/ui/Badge'

// Mathematical notation components
const MathDisplay = ({ children, block = false, className = '' }) => (
  <span className={`${block ? 'block my-4 text-center' : 'inline'} font-mono text-blue-300 ${className}`}>
    {children}
  </span>
)

const Sub = ({ base, sub }) => (
  <span>{base}<sub className="text-xs">{sub}</sub></span>
)

const Sup = ({ base, sup }) => (
  <span>{base}<sup className="text-xs">{sup}</sup>
)

const ExamSolution = ({ children, score = "10/10" }) => (
  <div className="mt-6 bg-green-500/5 border border-green-500/20 rounded-xl p-6">
    <div className="flex items-center gap-2 mb-4">
      <CheckCircle className="w-5 h-5 text-green-400" />
      <span className="text-green-400 font-semibold">Full Solution</span>
      <span className="text-xs text-gray-500">({score})</span>
    </div>
    <div className="space-y-4 text-gray-300">{children}</div>
  </div>
)

const AlgorithmBlock = ({ title, children }) => (
  <div className="my-6 bg-slate-900/50 rounded-xl border border-slate-800 overflow-hidden">
    {title && (
      <div className="px-4 py-2 bg-slate-800/50 border-b border-slate-800">
        <span className="text-sm font-semibold text-purple-400">{title}</span>
      </div>
    )}
    <pre className="p-4 font-mono text-sm text-gray-300 overflow-x-auto">
      <code>{children}</code>
    </pre>
  </div>
)

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
            <div className="w-12 h-12 bg-orange-500/10 rounded-lg flex items-center justify-center text-orange-400">
              <Route className="w-6 h-6" />
            </div>
            <div>
              <p className="text-sm text-gray-500">Exercise 5</p>
              <h1 className="text-3xl font-display font-bold text-white">Shortest-Path Algorithms</h1>
            </div>
          </div>

          <div className="flex flex-wrap gap-3">
            <Badge variant="blue">Algorithm Modifications</Badge>
            <Badge variant="purple">Proof Techniques</Badge>
            <Badge variant="error">Hard Difficulty</Badge>
          </div>
        </div>
      </section>

      {/* Exam Format */}
      <section className="px-6 py-12">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-2xl font-display font-bold text-white mb-6">
            Exam Format & Key Technique
          </h2>

          <div className="bg-slate-900/50 rounded-xl p-6 border border-slate-800 mb-6">
            <p className="text-gray-300 mb-4">
              These questions modify classic algorithms (Bellman-Ford, Dijkstra, Johnson) to optimize different criteria:
            </p>
            <ul className="space-y-2 text-gray-300">
              <li>• Minimize number of edges (primary) and total weight (secondary)</li>
              <li>• Count traffic lights or other edge properties</li>
              <li>• Prove the modification works or provide counterexample</li>
            </ul>
          </div>

          <div className="bg-orange-500/10 rounded-xl p-6 border border-orange-500/30">
            <div className="flex items-start gap-3">
              <Zap className="w-5 h-5 text-orange-400 flex-shrink-0 mt-0.5" />
              <div>
                <p className="text-orange-400 font-semibold mb-2">The Big-C Technique</p>
                <p className="text-sm text-gray-300 mb-3">
                  Choose C larger than any possible path weight so the high-order term dominates:
                </p>
                <MathDisplay block>
                  w'(e) = w(e) + C
                </MathDisplay>
                <p className="text-sm text-gray-400 mt-2">
                  where C > sum of all original weights (often C = |V| × W or C = T + 1)
                </p>
              </div>
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
              <p className="font-semibold text-white">The algorithm is CORRECT. Here's the proof:</p>

              <div className="mt-4">
                <p className="font-semibold text-blue-400 mb-2">Part 1: P uses minimum number of edges</p>
                
                <p className="mb-2">Assume for contradiction that some path P' has fewer edges: |P'| < |P|.</p>
                
                <div className="bg-slate-800/50 rounded p-4 mb-3 space-y-2">
                  <p>w'(P') = Σ<Sub base="e∈P'" sub="" /> w'(e)</p>
                  <p className="ml-6">= Σ<Sub base="e∈P'" sub="" /> (w(e) + T + 1)</p>
                  <p className="ml-6">= w(P') + |P'|·(T + 1)</p>
                  <p className="ml-6">≤ T + |P'|·(T + 1) <span className="text-gray-500">(since w(P') ≤ T)</span></p>
                  <p className="ml-6">< (|P'| + 1)·(T + 1)</p>
                  <p className="ml-6">≤ |P|·(T + 1)</p>
                  <p className="ml-6">≤ w'(P)</p>
                </div>
                
                <p className="text-sm text-gray-400">
                  This contradicts P being the shortest path under w'. Thus |P'| ≥ |P|.
                </p>
              </div>

              <div className="mt-6">
                <p className="font-semibold text-purple-400 mb-2">Part 2: Among minimum-edge paths, P has minimum weight</p>
                
                <p className="mb-2">
                  Let P' be another path with |P'| = |P| but w(P') < w(P).
                </p>
                
                <div className="bg-slate-800/50 rounded p-4 mb-3">
                  <p>w'(P') = w(P') + |P'|·(T + 1)</p>
                  <p className="ml-6">= w(P') + |P|·(T + 1)</p>
                  <p className="ml-6">< w(P) + |P|·(T + 1) = w'(P)</p>
                </div>
                
                <p className="text-sm text-gray-400">
                  This contradicts P being optimal under w'. Therefore w(P') ≥ w(P).
                </p>
              </div>

              <div className="mt-4 p-4 bg-green-500/10 rounded-lg border border-green-500/30">
                <p className="text-green-400 font-semibold">Conclusion:</p>
                <p className="text-sm">The algorithm correctly finds a path with minimum edges, breaking ties by minimum weight. ✓</p>
              </div>
            </ExamSolution>
          </div>
        </div>
      </section>

      {/* Complete Example: Traffic Lights */}
      <section className="px-6 py-12 border-t border-slate-800">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-2xl font-display font-bold text-white mb-6">
            Full Exam Solution: Minimizing Traffic Lights (2023)
          </h2>

          <div className="bg-slate-900/50 rounded-xl p-6 border border-slate-800">
            <h3 className="text-lg font-semibold text-white mb-4">Problem:</h3>
            <p className="text-gray-400 mb-3">
              Alan wants a path with minimum traffic lights. Among such paths, he wants the shortest.
              Traffic lights are on edges E' ⊆ E.
            </p>

            <p className="font-semibold text-gray-300 mb-2">
              Design new weights w'(e) for Dijkstra to solve this problem.
            </p>

            <ExamSolution score="10/10">
              <div className="bg-purple-500/10 rounded-xl p-6 border border-purple-500/30 mb-4">
                <p className="font-semibold text-purple-400 mb-3">Weight Transformation:</p>
                <div className="space-y-2">
                  <p>Let C = |V| × W where W = max{w(e) | e ∈ E}</p>
                  <p className="mt-3">For each edge e:</p>
                  <div className="ml-4 space-y-1">
                    <p>• If e ∉ E' (no traffic light): w'(e) = w(e)</p>
                    <p>• If e ∈ E' (has traffic light): w'(e) = w(e) + C</p>
                  </div>
                </div>
              </div>

              <div className="mt-4">
                <p className="font-semibold text-white mb-2">Why this works:</p>
                
                <ul className="space-y-3 text-sm">
                  <li>
                    <strong className="text-blue-400">1. Traffic lights dominate:</strong>
                    <p className="ml-4 text-gray-400">
                      Any path with k traffic lights has weight ≥ k·C, which exceeds any path 
                      with (k-1) lights since C > all possible path weights.
                    </p>
                  </li>
                  <li>
                    <strong className="text-purple-400">2. Original weights break ties:</strong>
                    <p className="ml-4 text-gray-400">
                      Among paths with equal traffic lights, the w(e) terms determine shortest.
                    </p>
                  </li>
                </ul>
              </div>

              <div className="mt-4 bg-yellow-500/10 rounded-lg p-4 border border-yellow-500/30">
                <p className="font-semibold text-yellow-400 mb-2">Recovery from Dijkstra output:</p>
                <p className="text-sm">
                  If d(s,t) = final distance, then:
                </p>
                <ul className="text-sm mt-2 space-y-1">
                  <li>• Number of traffic lights = ⌊d(s,t) / C⌋</li>
                  <li>• Original path length = d(s,t) mod C</li>
                </ul>
              </div>
            </ExamSolution>
          </div>
        </div>
      </section>

      {/* Edge Ordering in Bellman-Ford */}
      <section className="px-6 py-12 border-t border-slate-800">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-2xl font-display font-bold text-white mb-6">
            Bellman-Ford Edge Ordering Effects
          </h2>

          <div className="bg-slate-900/50 rounded-xl p-6 border border-slate-800">
            <h3 className="text-lg font-semibold text-white mb-4">Key Concept:</h3>
            <p className="text-gray-400 mb-4">
              The order of edge relaxation affects convergence speed, not correctness.
            </p>

            <div className="grid md:grid-cols-2 gap-6">
              <div className="bg-green-500/10 rounded-lg p-6 border border-green-500/30">
                <h4 className="font-semibold text-green-400 mb-3">Fast Ordering</h4>
                <p className="text-sm text-gray-300 mb-3">
                  Relax edges in topological order (when possible)
                </p>
                <div className="bg-slate-800/50 rounded p-3">
                  <p className="text-xs font-mono">
                    Graph: s → a → b → c → t<br/>
                    Order: (s,a), (a,b), (b,c), (c,t)<br/>
                    Result: Converges in 1 iteration
                  </p>
                </div>
              </div>

              <div className="bg-red-500/10 rounded-lg p-6 border border-red-500/30">
                <h4 className="font-semibold text-red-400 mb-3">Slow Ordering</h4>
                <p className="text-sm text-gray-300 mb-3">
                  Relax edges backwards along shortest paths
                </p>
                <div className="bg-slate-800/50 rounded p-3">
                  <p className="text-xs font-mono">
                    Graph: s → a → b → c → t<br/>
                    Order: (c,t), (b,c), (a,b), (s,a)<br/>
                    Result: Needs |V|-1 = 4 iterations
                  </p>
                </div>
              </div>
            </div>

            <div className="mt-6 p-4 bg-blue-500/10 rounded-lg border border-blue-500/30">
              <p className="text-sm text-blue-300">
                <strong>Exam tip:</strong> For "design a graph where..." questions, use a simple chain. 
                It's easy to analyze and clearly shows the difference.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Common Patterns */}
      <section className="px-6 py-12 border-t border-slate-800">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-2xl font-display font-bold text-white mb-6">
            Common Weight Transformations
          </h2>

          <div className="space-y-6">
            <div className="bg-slate-900/50 rounded-xl p-6 border border-slate-800">
              <h3 className="text-lg font-semibold text-white mb-4">Pattern Recognition:</h3>
              
              <table className="w-full">
                <thead>
                  <tr className="border-b border-slate-700">
                    <th className="text-left py-2 text-sm font-semibold text-gray-300">Objective</th>
                    <th className="text-left py-2 text-sm font-semibold text-gray-300">Transformation</th>
                    <th className="text-left py-2 text-sm font-semibold text-gray-300">C Value</th>
                  </tr>
                </thead>
                <tbody className="text-sm">
                  <tr className="border-b border-slate-800">
                    <td className="py-3 text-gray-400">Min edges, then weight</td>
                    <td className="py-3 font-mono text-blue-300">w'(e) = w(e) + C</td>
                    <td className="py-3 text-gray-400">C = T + 1</td>
                  </tr>
                  <tr className="border-b border-slate-800">
                    <td className="py-3 text-gray-400">Min special edges</td>
                    <td className="py-3 font-mono text-blue-300">w'(e) = w(e) + C·I(e)</td>
                    <td className="py-3 text-gray-400">C = |V|·W</td>
                  </tr>
                  <tr className="border-b border-slate-800">
                    <td className="py-3 text-gray-400">Max edges (counterex)</td>
                    <td className="py-3 font-mono text-blue-300">w'(e) = w(e) - C</td>
                    <td className="py-3 text-gray-400">Fails!</td>
                  </tr>
                  <tr>
                    <td className="py-3 text-gray-400">Two criteria</td>
                    <td className="py-3 font-mono text-blue-300">w'(e) = C₁·f₁(e) + f₂(e)</td>
                    <td className="py-3 text-gray-400">C₁ >> max f₂</td>
                  </tr>
                </tbody>
              </table>
            </div>

            <div className="bg-yellow-500/10 rounded-xl p-6 border border-yellow-500/30">
              <h3 className="font-semibold text-yellow-400 mb-3">Recovery Formulas:</h3>
              <div className="space-y-2 text-sm">
                <p>Given final distance d = d(s,t) from modified Dijkstra:</p>
                <ul className="mt-2 space-y-1 ml-4">
                  <li>• Primary criterion count: ⌊d / C⌋</li>
                  <li>• Secondary criterion value: d mod C</li>
                  <li>• Original path can be reconstructed from parent pointers</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Proof Techniques */}
      <section className="px-6 py-12 border-t border-slate-800">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-2xl font-display font-bold text-white mb-6">
            Proof Structure for Full Marks
          </h2>

          <div className="bg-gradient-to-br from-orange-500/10 to-red-500/10 rounded-xl p-8 border border-orange-500/20">
            <h3 className="font-semibold text-white mb-4">Standard Proof Template:</h3>
            
            <ol className="space-y-4">
              <li className="flex items-start gap-3">
                <span className="flex-shrink-0 w-8 h-8 bg-orange-500/20 rounded-full flex items-center justify-center text-sm font-semibold text-orange-400">1</span>
                <div>
                  <p className="font-medium text-white">State what you're proving</p>
                  <p className="text-sm text-gray-400">"We prove the algorithm finds a path minimizing X then Y"</p>
                </div>
              </li>
              
              <li className="flex items-start gap-3">
                <span className="flex-shrink-0 w-8 h-8 bg-orange-500/20 rounded-full flex items-center justify-center text-sm font-semibold text-orange-400">2</span>
                <div>
                  <p className="font-medium text-white">Prove primary criterion</p>
                  <p className="text-sm text-gray-400">"Assume P' has better primary value..."</p>
                  <p className="text-sm text-gray-400">"Show w'(P') < w'(P), contradiction"</p>
                </div>
              </li>
              
              <li className="flex items-start gap-3">
                <span className="flex-shrink-0 w-8 h-8 bg-orange-500/20 rounded-full flex items-center justify-center text-sm font-semibold text-orange-400">3</span>
                <div>
                  <p className="font-medium text-white">Prove secondary criterion</p>
                  <p className="text-sm text-gray-400">"Among paths with same primary, assume P' better..."</p>
                  <p className="text-sm text-gray-400">"Again show contradiction"</p>
                </div>
              </li>
              
              <li className="flex items-start gap-3">
                <span className="flex-shrink-0 w-8 h-8 bg-orange-500/20 rounded-full flex items-center justify-center text-sm font-semibold text-orange-400">4</span>
                <div>
                  <p className="font-medium text-white">Conclude</p>
                  <p className="text-sm text-gray-400">"Therefore the algorithm is correct"</p>
                </div>
              </li>
            </ol>
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