import { motion } from 'framer-motion'
import { GitBranch, ChevronRight, AlertCircle, CheckCircle, Info, ArrowLeft } from 'lucide-react'
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

const NetworkDiagram = ({ children }) => (
  <div className="bg-slate-900/50 rounded-xl p-6 border border-slate-800 my-4">
    <div className="font-mono text-sm space-y-1">
      {children}
    </div>
  </div>
)

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
            <Badge variant="blue">Network Flow</Badge>
            <Badge variant="purple">Edmonds-Karp</Badge>
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
              Flow algorithm questions typically ask you to:
            </p>
            <ol className="space-y-3 list-decimal list-inside text-gray-300">
              <li><strong className="text-white">Find augmenting paths</strong> - Usually first iteration of Edmonds-Karp</li>
              <li><strong className="text-white">Identify critical edges</strong> - Edges with minimum residual capacity on path</li>
              <li><strong className="text-white">Analyze residual networks</strong> - Calculate residual capacities</li>
              <li><strong className="text-white">Track flow changes</strong> - How vertex inflows change after augmentation</li>
            </ol>
          </div>

          <div className="bg-cyan-500/10 rounded-xl p-6 border border-cyan-500/30">
            <div className="flex items-start gap-3">
              <Info className="w-5 h-5 text-cyan-400 flex-shrink-0 mt-0.5" />
              <div>
                <p className="text-cyan-400 font-semibold mb-2">Essential Formulas</p>
                <div className="space-y-2 text-sm">
                  <p>• <strong>Forward edge:</strong> c<Sub base="f" sub="" />(u,v) = c(u,v) - f(u,v)</p>
                  <p>• <strong>Backward edge:</strong> c<Sub base="f" sub="" />(v,u) = f(u,v)</p>
                  <p>• <strong>Critical edge:</strong> c<Sub base="f" sub="" />(e) = min{c<Sub base="f" sub="" />(e') | e' ∈ P}</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Complete Example: Edmonds-Karp */}
      <section className="px-6 py-12 border-t border-slate-800">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-2xl font-display font-bold text-white mb-6">
            Full Exam Solution: Edmonds-Karp First Iteration (2024 Resit)
          </h2>

          <div className="bg-slate-900/50 rounded-xl p-6 border border-slate-800">
            <h3 className="text-lg font-semibold text-white mb-4">Given Network:</h3>
            
            <NetworkDiagram>
              <div className="text-gray-400">Edges with capacities:</div>
              <div>s → a: 10</div>
              <div>s → b: 8</div>
              <div>a → b: 5</div>
              <div>a → c: 8</div>
              <div>b → c: 7</div>
              <div>b → t: 10</div>
              <div>c → t: 10</div>
            </NetworkDiagram>

            <div className="mt-6">
              <p className="font-semibold text-gray-300 mb-2">
                Which augmenting path would Edmonds-Karp use in the first iteration? 
                List edges and mark critical edges.
              </p>
            </div>

            <ExamSolution score="10/10">
              <div>
                <p className="font-semibold text-white mb-2">Step 1: Find shortest path using BFS</p>
                <p className="text-sm text-gray-400 mb-3">
                  Edmonds-Karp uses BFS to find path with minimum number of edges:
                </p>
                
                <div className="bg-slate-800/50 rounded p-4 mb-4">
                  <p className="font-mono text-sm">
                    BFS from s:<br/>
                    - Distance 0: {s}<br/>
                    - Distance 1: {a, b}<br/>
                    - Distance 2: {c, t}<br/>
                  </p>
                  <p className="text-sm text-blue-300 mt-2">
                    Shortest paths to t: s → b → t (2 edges)
                  </p>
                </div>
              </div>

              <div className="mt-4">
                <p className="font-semibold text-white mb-2">Step 2: Identify path and capacities</p>
                <p className="mb-2">Path: s → b → t</p>
                
                <table className="w-full text-sm">
                  <thead>
                    <tr className="border-b border-slate-700">
                      <th className="text-left py-2">Edge</th>
                      <th className="text-left py-2">Capacity</th>
                      <th className="text-left py-2">Critical?</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr className="border-b border-slate-800">
                      <td className="py-2 font-mono">(s,b)</td>
                      <td className="py-2">8</td>
                      <td className="py-2 text-green-400">✓ Critical</td>
                    </tr>
                    <tr>
                      <td className="py-2 font-mono">(b,t)</td>
                      <td className="py-2">10</td>
                      <td className="py-2 text-gray-500">✗</td>
                    </tr>
                  </tbody>
                </table>
                
                <p className="text-sm text-gray-400 mt-3">
                  Bottleneck capacity = min{8, 10} = 8
                </p>
              </div>

              <div className="mt-4 p-4 bg-yellow-500/10 rounded-lg border border-yellow-500/30">
                <p className="text-sm text-yellow-300">
                  <strong>Answer:</strong> Path s → b → t with critical edge (s,b)
                </p>
              </div>
            </ExamSolution>
          </div>
        </div>
      </section>

      {/* Complete Example: Residual Networks */}
      <section className="px-6 py-12 border-t border-slate-800">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-2xl font-display font-bold text-white mb-6">
            Full Exam Solution: Residual Network Analysis (2023 Resit)
          </h2>

          <div className="bg-slate-900/50 rounded-xl p-6 border border-slate-800">
            <h3 className="text-lg font-semibold text-white mb-4">Given Flow Network:</h3>
            
            <NetworkDiagram>
              <div className="text-gray-400">Edges showing flow/capacity:</div>
              <div>s → a: 4/5</div>
              <div>s → d: 0/5</div>
              <div>a → b: 3/4</div>
              <div>a → e: 3/3</div>
              <div>d → a: 2/3</div>
              <div>h → g: 2/3</div>
              <div>h → f: 1/4</div>
              <div>f → t: 4/6</div>
            </NetworkDiagram>

            <div className="mt-6">
              <p className="font-semibold text-gray-300 mb-2">
                Question 4a: List critical edges on path P: s → g ← h → f → t
              </p>
            </div>

            <ExamSolution score="5/5">
              <p className="font-semibold text-white mb-2">Calculate residual capacities:</p>
              
              <table className="w-full text-sm mb-4">
                <thead>
                  <tr className="border-b border-slate-700">
                    <th className="text-left py-2">Edge</th>
                    <th className="text-left py-2">Type</th>
                    <th className="text-left py-2">Residual Capacity</th>
                  </tr>
                </thead>
                <tbody>
                  <tr className="border-b border-slate-800">
                    <td className="py-2 font-mono">(s,g)</td>
                    <td className="py-2">Forward</td>
                    <td className="py-2">0/3 → c<Sub base="f" sub="" /> = 3</td>
                  </tr>
                  <tr className="border-b border-slate-800">
                    <td className="py-2 font-mono">(g,h)</td>
                    <td className="py-2 text-purple-400">Backward</td>
                    <td className="py-2">h→g has flow 2 → c<Sub base="f" sub="" /> = 2</td>
                  </tr>
                  <tr className="border-b border-slate-800">
                    <td className="py-2 font-mono">(h,f)</td>
                    <td className="py-2">Forward</td>
                    <td className="py-2">1/4 → c<Sub base="f" sub="" /> = 3</td>
                  </tr>
                  <tr>
                    <td className="py-2 font-mono">(f,t)</td>
                    <td className="py-2">Forward</td>
                    <td className="py-2">4/6 → c<Sub base="f" sub="" /> = 2</td>
                  </tr>
                </tbody>
              </table>

              <p className="text-sm text-gray-400 mb-2">
                Minimum residual capacity = min{3, 2, 3, 2} = 2
              </p>
              
              <div className="p-4 bg-green-500/10 rounded-lg border border-green-500/30">
                <p className="text-green-400 font-semibold">Critical edges: (g,h) and (f,t)</p>
                <p className="text-xs text-gray-400 mt-1">Both have residual capacity 2</p>
              </div>
            </ExamSolution>

            <div className="mt-8">
              <p className="font-semibold text-gray-300 mb-2">
                Question 4b: Which vertices have increased inflow after augmentation?
              </p>
            </div>

            <ExamSolution score="5/5">
              <p className="font-semibold text-white mb-2">Flow changes after augmenting by 2:</p>
              
              <div className="grid grid-cols-2 gap-4 mb-4">
                <div className="bg-slate-800/50 rounded p-4">
                  <p className="text-sm font-semibold text-gray-400 mb-2">Edge updates:</p>
                  <div className="text-sm font-mono space-y-1">
                    <div>s → g: 0 → 2</div>
                    <div>h → g: 2 → 0 (reversed)</div>
                    <div>h → f: 1 → 3</div>
                    <div>f → t: 4 → 6</div>
                  </div>
                </div>
                
                <div className="bg-slate-800/50 rounded p-4">
                  <p className="text-sm font-semibold text-gray-400 mb-2">Inflow changes:</p>
                  <div className="text-sm space-y-1">
                    <div>g: +2 -2 = 0 (no change)</div>
                    <div>h: 0 (only outgoing)</div>
                    <div className="text-green-400">f: +2 (increased)</div>
                    <div className="text-green-400">t: +2 (increased)</div>
                  </div>
                </div>
              </div>

              <div className="p-4 bg-yellow-500/10 rounded-lg border border-yellow-500/30">
                <p className="text-sm text-yellow-300">
                  <strong>Answer:</strong> Vertices f and t have increased inflow
                </p>
              </div>
            </ExamSolution>
          </div>
        </div>
      </section>

      {/* Alternative Selection Criteria */}
      <section className="px-6 py-12 border-t border-slate-800">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-2xl font-display font-bold text-white mb-6">
            Non-Standard Path Selection (Common Exam Variation)
          </h2>

          <div className="bg-slate-900/50 rounded-xl p-6 border border-slate-800">
            <h3 className="text-lg font-semibold text-white mb-4">Example: Maximum Critical Edges (2024)</h3>
            
            <p className="text-gray-400 mb-4">
              Instead of Edmonds-Karp, select path with maximum number of critical edges.
            </p>

            <div className="bg-purple-500/10 rounded-xl p-6 border border-purple-500/30">
              <p className="text-purple-400 font-semibold mb-3">Solution Approach:</p>
              <ol className="space-y-2 text-sm text-gray-300">
                <li>1. List ALL s-t paths in residual network</li>
                <li>2. For each path, calculate bottleneck capacity</li>
                <li>3. Count edges with capacity = bottleneck</li>
                <li>4. Choose path with most critical edges</li>
              </ol>
              
              <div className="mt-4 p-3 bg-slate-800/50 rounded">
                <p className="text-xs text-gray-400">
                  <strong>Tip:</strong> If multiple paths tie, state this clearly and pick any one
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Key Algorithms Reference */}
      <section className="px-6 py-12 border-t border-slate-800">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-2xl font-display font-bold text-white mb-6">
            Algorithm Quick Reference
          </h2>

          <div className="grid md:grid-cols-2 gap-6">
            <div className="bg-blue-500/10 rounded-xl p-6 border border-blue-500/30">
              <h3 className="font-semibold text-blue-400 mb-3">Edmonds-Karp</h3>
              <div className="text-sm space-y-2 text-gray-300">
                <p>1. Use BFS to find shortest augmenting path</p>
                <p>2. Calculate bottleneck capacity</p>
                <p>3. Augment flow along path</p>
                <p>4. Update residual network</p>
                <p className="text-xs text-gray-400 mt-2">Time: O(VE²)</p>
              </div>
            </div>

            <div className="bg-purple-500/10 rounded-xl p-6 border border-purple-500/30">
              <h3 className="font-semibold text-purple-400 mb-3">Residual Network Rules</h3>
              <div className="text-sm space-y-2 text-gray-300">
                <p><strong>Original edge (u,v):</strong></p>
                <p className="ml-4">• Forward: c-f if c>f</p>
                <p className="ml-4">• Backward: f if f>0</p>
                <p className="text-xs text-gray-400 mt-2">Both can exist simultaneously!</p>
              </div>
            </div>

            <div className="bg-green-500/10 rounded-xl p-6 border border-green-500/30">
              <h3 className="font-semibold text-green-400 mb-3">Finding Critical Edges</h3>
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
                <p>inflow(v) = Σ<Sub base="u" sub="" /> f(u,v)</p>
                <p className="mt-2">After augmentation:</p>
                <p>• Check each vertex on path</p>
                <p>• Account for reversed edges</p>
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
