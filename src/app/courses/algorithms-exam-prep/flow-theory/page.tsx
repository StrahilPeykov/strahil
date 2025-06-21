import { motion } from 'framer-motion'
import { GitBranch, ChevronRight, AlertCircle, CheckCircle, Zap, ArrowLeft } from 'lucide-react'
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
            Exam Format & Key Concepts
          </h2>

          <div className="bg-slate-900/50 rounded-xl p-6 border border-slate-800 mb-6">
            <p className="text-gray-300 mb-4">
              Flow theory questions typically involve:
            </p>
            <ul className="space-y-2 text-gray-300">
              <li>• Building flow networks from matching problems</li>
              <li>• Updating existing flows when edges are added/removed</li>
              <li>• Understanding Ford-Fulkerson variants and complexity</li>
              <li>• True/false statements about flow properties</li>
            </ul>
          </div>

          <div className="bg-pink-500/10 rounded-xl p-6 border border-pink-500/30">
            <div className="flex items-start gap-3">
              <Zap className="w-5 h-5 text-pink-400 flex-shrink-0 mt-0.5" />
              <div>
                <p className="text-pink-400 font-semibold mb-2">Key Theorem</p>
                <MathDisplay block>
                  max flow = min cut = |maximum matching| (in bipartite graphs)
                </MathDisplay>
                <p className="text-sm text-gray-400 mt-2">
                  This connection is the foundation for most flow-matching reductions.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Complete Example: Incremental Flow Updates */}
      <section className="px-6 py-12 border-t border-slate-800">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-2xl font-display font-bold text-white mb-6">
            Full Exam Solution: Incremental Flow Updates (2024 Resit)
          </h2>

          <div className="bg-slate-900/50 rounded-xl p-6 border border-slate-800">
            <h3 className="text-lg font-semibold text-white mb-4">Problem:</h3>
            <p className="text-gray-400 mb-4">
              You have computed max flow f in network G. Now k new edges are added to get G'.
              How to compute max flow in G' efficiently?
            </p>

            <ExamSolution score="10/10">
              <div className="bg-purple-500/10 rounded-xl p-6 border border-purple-500/30 mb-4">
                <p className="font-semibold text-purple-400 mb-3">Algorithm:</p>
                <AlgorithmBlock>
{`1. Start with existing flow f from G
2. Initialize f(e) = 0 for all new edges e
3. Build residual network G'_f
4. Run Ford-Fulkerson from this starting point
5. Return the augmented flow`}
                </AlgorithmBlock>
              </div>

              <div className="mt-4">
                <p className="font-semibold text-white mb-2">Correctness:</p>
                <ul className="space-y-2 text-sm">
                  <li>• The existing flow f is still valid in G' (satisfies capacity and conservation)</li>
                  <li>• Ford-Fulkerson finds augmenting paths if they exist</li>
                  <li>• Starting from f instead of 0 saves iterations</li>
                </ul>
              </div>

              <div className="mt-4">
                <p className="font-semibold text-white mb-2">Time Complexity:</p>
                <div className="bg-slate-800/50 rounded p-4">
                  <p className="text-sm">
                    • Original max flow computation: O(|E|·|f*|)<br/>
                    • Incremental update: O(|E|·Δf) where Δf = increase in flow<br/>
                    • <strong className="text-green-400">Key insight:</strong> At most k augmenting paths needed (one per new edge)
                  </p>
                  <p className="text-sm text-yellow-300 mt-2">
                    Total: O(|E|·k) for the update phase
                  </p>
                </div>
              </div>
            </ExamSolution>
          </div>
        </div>
      </section>

      {/* Complete Example: Flow Network Construction */}
      <section className="px-6 py-12 border-t border-slate-800">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-2xl font-display font-bold text-white mb-6">
            Full Exam Solution: Bipartite Matching to Flow (2023)
          </h2>

          <div className="bg-slate-900/50 rounded-xl p-6 border border-slate-800">
            <h3 className="text-lg font-semibold text-white mb-4">Problem:</h3>
            <p className="text-gray-400 mb-4">
              Given bipartite graph G = (L ∪ R, E), construct flow network to find maximum matching.
            </p>

            <ExamSolution score="10/10">
              <div className="bg-blue-500/10 rounded-xl p-6 border border-blue-500/30 mb-4">
                <p className="font-semibold text-blue-400 mb-3">Construction:</p>
                <ol className="space-y-3 text-sm">
                  <li>
                    <strong>1. Add source s and sink t</strong>
                    <p className="ml-4 text-gray-400">Create new vertices s and t</p>
                  </li>
                  <li>
                    <strong>2. Connect source to left side</strong>
                    <p className="ml-4 text-gray-400">∀u ∈ L: add edge (s,u) with capacity 1</p>
                  </li>
                  <li>
                    <strong>3. Original edges</strong>
                    <p className="ml-4 text-gray-400">∀(u,v) ∈ E where u ∈ L, v ∈ R: add directed edge (u,v) with capacity 1</p>
                  </li>
                  <li>
                    <strong>4. Connect right side to sink</strong>
                    <p className="ml-4 text-gray-400">∀v ∈ R: add edge (v,t) with capacity 1</p>
                  </li>
                </ol>
              </div>

              <div className="grid md:grid-cols-2 gap-4 mt-4">
                <div className="bg-green-500/10 rounded-lg p-4 border border-green-500/30">
                  <p className="font-semibold text-green-400 mb-2">Why it works:</p>
                  <ul className="text-sm space-y-1">
                    <li>• Each vertex can match at most once (capacity 1)</li>
                    <li>• Flow paths correspond to matched edges</li>
                    <li>• Integer capacities → integer flow</li>
                  </ul>
                </div>
                
                <div className="bg-yellow-500/10 rounded-lg p-4 border border-yellow-500/30">
                  <p className="font-semibold text-yellow-400 mb-2">Complexity:</p>
                  <ul className="text-sm space-y-1">
                    <li>• Network has |V| + 2 vertices</li>
                    <li>• Network has |E| + |L| + |R| edges</li>
                    <li>• Max flow value ≤ min(|L|, |R|)</li>
                  </ul>
                </div>
              </div>

              <div className="mt-4 p-4 bg-purple-500/10 rounded-lg border border-purple-500/30">
                <p className="text-sm text-purple-300">
                  <strong>Theorem:</strong> Maximum flow value = size of maximum matching
                </p>
              </div>
            </ExamSolution>
          </div>
        </div>
      </section>

      {/* Complete Example: True/False Statements */}
      <section className="px-6 py-12 border-t border-slate-800">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-2xl font-display font-bold text-white mb-6">
            Full Exam Solution: Flow Properties (2024)
          </h2>

          <div className="bg-slate-900/50 rounded-xl p-6 border border-slate-800">
            <h3 className="text-lg font-semibold text-white mb-4">Statement:</h3>
            <p className="text-gray-400 mb-4">
              "In any execution of Ford-Fulkerson, once an edge becomes saturated (f(e) = c(e)), 
              it remains saturated in all subsequent iterations."
            </p>

            <p className="font-semibold text-gray-300 mb-2">True or False? Prove or give counterexample.</p>

            <ExamSolution score="10/10">
              <p className="font-semibold text-red-400 mb-3">FALSE</p>

              <div className="bg-red-500/10 rounded-xl p-6 border border-red-500/30 mb-4">
                <p className="font-semibold text-red-400 mb-3">Counterexample:</p>
                
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <p className="text-sm font-semibold text-gray-300 mb-2">Network:</p>
                    <div className="bg-slate-800/50 rounded p-3 font-mono text-xs">
                      <p>s → a: capacity 2</p>
                      <p>s → b: capacity 2</p>
                      <p>a → b: capacity 1</p>
                      <p>a → t: capacity 2</p>
                      <p>b → t: capacity 2</p>
                    </div>
                  </div>
                  
                  <div>
                    <p className="text-sm font-semibold text-gray-300 mb-2">Execution:</p>
                    <div className="text-sm space-y-2">
                      <p><strong>Iteration 1:</strong></p>
                      <p className="ml-4">Path s→a→b→t, flow 1</p>
                      <p className="ml-4 text-yellow-300">Edge (a,b) saturated ✓</p>
                      
                      <p className="mt-2"><strong>Iteration 2:</strong></p>
                      <p className="ml-4">Path s→b→a→t, flow 1</p>
                      <p className="ml-4 text-red-300">Uses backward edge (b,a)</p>
                      <p className="ml-4 text-red-300">Now f(a,b) = 0 ✗</p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="p-4 bg-blue-500/10 rounded-lg border border-blue-500/30">
                <p className="text-sm text-blue-300">
                  <strong>Key insight:</strong> Backward edges in the residual network allow flow to be 
                  "undone", so saturated edges can become unsaturated.
                </p>
              </div>
            </ExamSolution>
          </div>
        </div>
      </section>

      {/* Cloud Computing Example */}
      <section className="px-6 py-12 border-t border-slate-800">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-2xl font-display font-bold text-white mb-6">
            Full Exam Solution: Batch Flow Computation (2022)
          </h2>

          <div className="bg-slate-900/50 rounded-xl p-6 border border-slate-800">
            <h3 className="text-lg font-semibold text-white mb-4">Problem:</h3>
            <p className="text-gray-400 mb-4">
              You need to solve 50 max-flow problems. Cloud service charges €10 per computation.
              How to compute all 50 flows with only one cloud call?
            </p>

            <ExamSolution score="10/10">
              <div className="bg-purple-500/10 rounded-xl p-6 border border-purple-500/30 mb-4">
                <p className="font-semibold text-purple-400 mb-3">Construction of Combined Network G*:</p>
                
                <ol className="space-y-3 text-sm">
                  <li>
                    <strong>1. Start with disjoint union</strong>
                    <p className="ml-4 text-gray-400">
                      G* = G<Sub base="1" sub="" /> ∪ G<Sub base="2" sub="" /> ∪ ... ∪ G<Sub base="50" sub="" />
                    </p>
                  </li>
                  
                  <li>
                    <strong>2. Add super-source s*</strong>
                    <p className="ml-4 text-gray-400">
                      For each i: add edge (s*, s<Sub base="i" sub="" />) with capacity U<br/>
                      where U = Σ<Sub base="e∈G_i" sub="" /> c(e) (sum of all capacities in G<Sub base="i" sub="" />)
                    </p>
                  </li>
                  
                  <li>
                    <strong>3. Add super-sink t*</strong>
                    <p className="ml-4 text-gray-400">
                      For each i: add edge (t<Sub base="i" sub="" />, t*) with capacity U
                    </p>
                  </li>
                </ol>
              </div>

              <div className="mt-4">
                <p className="font-semibold text-white mb-2">Why it works:</p>
                <ul className="space-y-2 text-sm">
                  <li>
                    • <strong className="text-blue-400">Independence:</strong> Networks remain disjoint except at s* and t*
                  </li>
                  <li>
                    • <strong className="text-green-400">No bottleneck:</strong> U is large enough that s*→s<Sub base="i" sub="" /> never limits flow
                  </li>
                  <li>
                    • <strong className="text-purple-400">Preservation:</strong> Max flow from s<Sub base="i" sub="" /> to t<Sub base="i" sub="" /> unchanged
                  </li>
                </ul>
              </div>

              <div className="mt-4 bg-yellow-500/10 rounded-lg p-4 border border-yellow-500/30">
                <p className="font-semibold text-yellow-400 mb-2">Extraction:</p>
                <p className="text-sm">
                  After computing max flow f* in G*:
                </p>
                <p className="text-sm mt-2">
                  For each network i: f<Sub base="i" sub="" />(e) = f*(e) for all e ∈ E<Sub base="i" sub="" />
                </p>
              </div>

              <div className="mt-4 p-4 bg-green-500/10 rounded-lg border border-green-500/30">
                <p className="text-green-400 font-semibold">Cost savings: €10 instead of €500!</p>
              </div>
            </ExamSolution>
          </div>
        </div>
      </section>

      {/* Common Patterns */}
      <section className="px-6 py-12 border-t border-slate-800">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-2xl font-display font-bold text-white mb-6">
            Key Patterns & Techniques
          </h2>

          <div className="grid md:grid-cols-2 gap-6">
            <div className="bg-blue-500/10 rounded-xl p-6 border border-blue-500/30">
              <h3 className="font-semibold text-blue-400 mb-3">Flow-Matching Reduction</h3>
              <div className="text-sm space-y-2 text-gray-300">
                <p><strong>Standard construction:</strong></p>
                <ul className="ml-4 space-y-1">
                  <li>• Add s, t with capacity 1 edges</li>
                  <li>• Original edges get capacity 1</li>
                  <li>• Max flow = max matching size</li>
                </ul>
                <p className="text-xs text-gray-400 mt-2">
                  Works because integral flow → 0/1 flow → matching
                </p>
              </div>
            </div>

            <div className="bg-purple-500/10 rounded-xl p-6 border border-purple-500/30">
              <h3 className="font-semibold text-purple-400 mb-3">Incremental Updates</h3>
              <div className="text-sm space-y-2 text-gray-300">
                <p><strong>When graph changes:</strong></p>
                <ul className="ml-4 space-y-1">
                  <li>• Start with existing flow</li>
                  <li>• Only find new augmenting paths</li>
                  <li>• At most k paths for k changes</li>
                </ul>
                <p className="text-xs text-gray-400 mt-2">
                  Much faster than recomputing from scratch
                </p>
              </div>
            </div>

            <div className="bg-green-500/10 rounded-xl p-6 border border-green-500/30">
              <h3 className="font-semibold text-green-400 mb-3">True/False Tricks</h3>
              <div className="text-sm space-y-2 text-gray-300">
                <p><strong>Common counterexamples:</strong></p>
                <ul className="ml-4 space-y-1">
                  <li>• Diamond graph (multiple paths)</li>
                  <li>• Triangle (shows reversals)</li>
                  <li>• Linear chain (edge ordering)</li>
                </ul>
                <p className="text-xs text-gray-400 mt-2">
                  Simple graphs often suffice!
                </p>
              </div>
            </div>

            <div className="bg-pink-500/10 rounded-xl p-6 border border-pink-500/30">
              <h3 className="font-semibold text-pink-400 mb-3">Complexity Analysis</h3>
              <div className="text-sm space-y-2 text-gray-300">
                <p><strong>Key bounds:</strong></p>
                <ul className="ml-4 space-y-1">
                  <li>• Ford-Fulkerson: O(|E|·|f*|)</li>
                  <li>• Each iteration: O(|E|)</li>
                  <li>• Matching: |f*| ≤ min(|L|,|R|)</li>
                </ul>
                <p className="text-xs text-gray-400 mt-2">
                  Always state complexity in your answer
                </p>
              </div>
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
