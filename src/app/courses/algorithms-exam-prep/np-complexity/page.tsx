import { motion } from 'framer-motion'
import { AlertCircle, ChevronRight, CheckCircle, XCircle, ArrowLeft, Lightbulb } from 'lucide-react'
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

const ProblemCard = ({ problem, classification, isPolynomial }) => (
  <div className={`p-4 rounded-lg border ${
    isPolynomial 
      ? 'bg-green-500/10 border-green-500/30' 
      : 'bg-red-500/10 border-red-500/30'
  }`}>
    <div className="flex items-start justify-between mb-2">
      <h4 className="font-semibold text-white">{problem}</h4>
      {isPolynomial ? (
        <CheckCircle className="w-5 h-5 text-green-400 flex-shrink-0" />
      ) : (
        <XCircle className="w-5 h-5 text-red-400 flex-shrink-0" />
      )}
    </div>
    <p className={`text-sm font-semibold mb-1 ${isPolynomial ? 'text-green-400' : 'text-red-400'}`}>
      {classification}
    </p>
  </div>
)

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
            <Badge variant="error">NP-hardness</Badge>
            <Badge variant="success">Polynomial Time</Badge>
            <Badge variant="error">Hard Difficulty</Badge>
          </div>
        </div>
      </section>

      {/* Exam Format */}
      <section className="px-6 py-12">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-2xl font-display font-bold text-white mb-6">
            Exam Format & Strategy
          </h2>

          <div className="bg-slate-900/50 rounded-xl p-6 border border-slate-800 mb-6">
            <p className="text-gray-300 mb-4">
              For each problem, determine if it's NP-hard or polynomial-time solvable:
            </p>
            <div className="grid md:grid-cols-2 gap-4">
              <div className="bg-green-500/10 rounded-lg p-4 border border-green-500/30">
                <p className="font-semibold text-green-400 mb-2">If Polynomial:</p>
                <p className="text-sm text-gray-300">Give algorithm + complexity</p>
              </div>
              <div className="bg-red-500/10 rounded-lg p-4 border border-red-500/30">
                <p className="font-semibold text-red-400 mb-2">If NP-hard:</p>
                <p className="text-sm text-gray-300">Reduce from known NP-hard problem</p>
              </div>
            </div>
          </div>

          <div className="bg-purple-500/10 rounded-xl p-6 border border-purple-500/30">
            <p className="text-purple-400 font-semibold mb-3">Known NP-hard Problems:</p>
            <p className="text-sm text-gray-300">
              Circuit-SAT, Formula-SAT, 3-SAT, Maximum Clique, Minimum Vertex Cover, 
              Maximum Independent Set, Hamiltonian Cycle, TSP, 3-Colorability, Subset Sum
            </p>
          </div>
        </div>
      </section>

      {/* Complete Example: Independent Set in Joined Graphs */}
      <section className="px-6 py-12 border-t border-slate-800">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-2xl font-display font-bold text-white mb-6">
            Full Solution: Independent Set in Joined Graphs
          </h2>

          <div className="bg-slate-900/50 rounded-xl p-6 border border-slate-800">
            <h3 className="text-lg font-semibold text-white mb-4">Problem:</h3>
            <p className="text-gray-400 mb-3">
              <strong>Input:</strong> Graph G = (V, E) with partition V = L ∪ R such that 
              ∀v ∈ L, ∀u ∈ R: (u,v) ∈ E<br/>
              <strong>Output:</strong> Maximum independent set in G
            </p>

            <ProblemCard 
              problem="Independent Set in Joined Graphs"
              classification="NP-hard"
              isPolynomial={false}
            />

            <ExamSolution score="10/10">
              <p className="font-semibold text-white mb-3">
                This problem is <span className="text-red-400">NP-hard</span> by reduction from Maximum Independent Set.
              </p>

              <div className="bg-red-500/10 rounded-xl p-6 border border-red-500/30">
                <p className="font-semibold text-red-400 mb-3">Reduction:</p>
                
                <p className="mb-3">
                  Given: Instance of Maximum Independent Set on graph G = (V, E)<br/>
                  Construct: Instance of Independent Set in Joined Graphs G' = (V', E')
                </p>

                <div className="bg-slate-800/50 rounded p-4 mb-4">
                  <p className="font-semibold mb-2">Construction:</p>
                  <ol className="space-y-2 text-sm">
                    <li>1. V' = V ∪ {r} where r is a new vertex</li>
                    <li>2. E' = E ∪ {(r,v) | v ∈ V}</li>
                    <li>3. Set L = V and R = {r}</li>
                  </ol>
                </div>

                <p className="font-semibold mb-2">Correctness:</p>
                <ul className="space-y-2 text-sm">
                  <li>• G' satisfies the joined property: every vertex in L is connected to r ∈ R ✓</li>
                  <li>• Any independent set in G' with size > 1 cannot contain r (it connects to all)</li>
                  <li>• Therefore, max independent set in G' \ {r} = max independent set in G</li>
                  <li>• G has independent set of size k ⟺ G' has independent set of size k</li>
                </ul>
              </div>

              <div className="mt-4 p-4 bg-yellow-500/10 rounded-lg border border-yellow-500/30">
                <p className="text-sm text-yellow-300">
                  <strong>Complexity:</strong> Reduction takes O(|V|) time, which is polynomial. ✓
                </p>
              </div>
            </ExamSolution>
          </div>
        </div>
      </section>

      {/* Complete Example: Partition Bipartite into Cliques */}
      <section className="px-6 py-12 border-t border-slate-800">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-2xl font-display font-bold text-white mb-6">
            Full Solution: Partition Bipartite into Cliques
          </h2>

          <div className="bg-slate-900/50 rounded-xl p-6 border border-slate-800">
            <h3 className="text-lg font-semibold text-white mb-4">Problem:</h3>
            <p className="text-gray-400 mb-3">
              <strong>Input:</strong> Bipartite graph G = (V, E) where V = L ∪ R<br/>
              <strong>Output:</strong> Partition V into minimum number of cliques
            </p>

            <ProblemCard 
              problem="Partition Bipartite into Cliques"
              classification="Polynomial Time"
              isPolynomial={true}
            />

            <ExamSolution score="10/10">
              <p className="font-semibold text-white mb-3">
                This problem is <span className="text-green-400">polynomial-time solvable</span> 
                by reduction to maximum matching.
              </p>

              <div className="bg-green-500/10 rounded-xl p-6 border border-green-500/30">
                <p className="font-semibold text-green-400 mb-3">Key Observation:</p>
                <p className="mb-3">
                  In a bipartite graph, every clique has size ≤ 2 (no triangles exist).
                </p>

                <div className="bg-slate-800/50 rounded p-4 mb-4">
                  <p className="font-semibold mb-2">Algorithm:</p>
                  <ol className="space-y-2 text-sm">
                    <li>1. Find maximum matching M in G using Ford-Fulkerson</li>
                    <li>2. For each edge (u,v) ∈ M: create clique {u,v}</li>
                    <li>3. For each unmatched vertex w: create singleton clique {w}</li>
                    <li>4. Return the collection of cliques</li>
                  </ol>
                </div>

                <p className="font-semibold mb-2">Why it's optimal:</p>
                <ul className="space-y-2 text-sm">
                  <li>• Total cliques = |M| + (|V| - 2|M|) = |V| - |M|</li>
                  <li>• To minimize cliques, we maximize |M|</li>
                  <li>• Maximum matching gives minimum partition</li>
                </ul>

                <div className="mt-4 p-4 bg-blue-500/10 rounded-lg border border-blue-500/30">
                  <p className="text-sm text-blue-300">
                    <strong>Time Complexity:</strong> O(|V||E|²) using Edmonds-Karp for bipartite matching
                  </p>
                </div>
              </div>
            </ExamSolution>
          </div>
        </div>
      </section>

      {/* Complete Example: Coverage by Three Cycles */}
      <section className="px-6 py-12 border-t border-slate-800">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-2xl font-display font-bold text-white mb-6">
            Full Solution: Coverage by Three Cycles
          </h2>

          <div className="bg-slate-900/50 rounded-xl p-6 border border-slate-800">
            <h3 className="text-lg font-semibold text-white mb-4">Problem:</h3>
            <p className="text-gray-400 mb-3">
              <strong>Input:</strong> Graph G = (V, E)<br/>
              <strong>Output:</strong> Three cycles C<Sub base="1" sub="" />, C<Sub base="2" sub="" />, C<Sub base="3" sub="" /> 
              where each v ∈ V is in exactly one cycle, or NO
            </p>

            <ProblemCard 
              problem="Coverage by Three Cycles"
              classification="NP-hard"
              isPolynomial={false}
            />

            <ExamSolution score="10/10">
              <p className="font-semibold text-white mb-3">
                This problem is <span className="text-red-400">NP-hard</span> by reduction from Hamiltonian Cycle.
              </p>

              <div className="bg-red-500/10 rounded-xl p-6 border border-red-500/30">
                <p className="font-semibold text-red-400 mb-3">Reduction:</p>
                
                <div className="bg-slate-800/50 rounded p-4 mb-4">
                  <p className="font-semibold mb-2">Construction:</p>
                  <p className="mb-2">Given graph G for Hamiltonian Cycle, create G':</p>
                  <ul className="space-y-1 text-sm">
                    <li>• G' = G<Sub base="1" sub="" /> ∪ G<Sub base="2" sub="" /> ∪ G<Sub base="3" sub="" /></li>
                    <li>• Three disjoint copies of G</li>
                    <li>• No edges between copies</li>
                  </ul>
                </div>

                <p className="font-semibold mb-2">Correctness:</p>
                <div className="grid md:grid-cols-2 gap-4 mt-3">
                  <div className="bg-slate-800/50 rounded p-3">
                    <p className="text-sm font-semibold text-blue-300 mb-2">Forward (⇒):</p>
                    <p className="text-sm">
                      If G has Hamiltonian cycle C, then G' can be covered by:
                      C<Sub base="1" sub="" /> in G<Sub base="1" sub="" />, 
                      C<Sub base="2" sub="" /> in G<Sub base="2" sub="" />, 
                      C<Sub base="3" sub="" /> in G<Sub base="3" sub="" />
                    </p>
                  </div>
                  <div className="bg-slate-800/50 rounded p-3">
                    <p className="text-sm font-semibold text-purple-300 mb-2">Backward (⇐):</p>
                    <p className="text-sm">
                      If G' has 3-cycle coverage, each copy must be covered by 
                      exactly one cycle (no cross-edges), so each is Hamiltonian
                    </p>
                  </div>
                </div>

                <div className="mt-4 p-4 bg-yellow-500/10 rounded-lg border border-yellow-500/30">
                  <p className="text-sm text-yellow-300">
                    <strong>Polynomial reduction:</strong> O(|V| + |E|) to create three copies ✓
                  </p>
                </div>
              </div>
            </ExamSolution>
          </div>
        </div>
      </section>

      {/* Recognition Patterns */}
      <section className="px-6 py-12 border-t border-slate-800">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-2xl font-display font-bold text-white mb-6">
            Quick Recognition Guide
          </h2>

          <div className="grid md:grid-cols-2 gap-6">
            <div className="bg-green-500/10 rounded-xl p-6 border border-green-500/30">
              <h3 className="font-semibold text-green-400 mb-4">Signs of Polynomial Time</h3>
              <div className="space-y-3">
                <div>
                  <p className="font-medium text-white">Matching/Flow Problems</p>
                  <p className="text-sm text-gray-400">Can often reduce to max flow</p>
                </div>
                <div>
                  <p className="font-medium text-white">Special Graph Structure</p>
                  <p className="text-sm text-gray-400">Trees, bipartite, planar often easier</p>
                </div>
                <div>
                  <p className="font-medium text-white">Fixed Parameters</p>
                  <p className="text-sm text-gray-400">k=2 or k=3 often poly, general k often NP-hard</p>
                </div>
                <div>
                  <p className="font-medium text-white">Greedy Works</p>
                  <p className="text-sm text-gray-400">If greedy gives optimal, usually poly</p>
                </div>
              </div>
            </div>

            <div className="bg-red-500/10 rounded-xl p-6 border border-red-500/30">
              <h3 className="font-semibold text-red-400 mb-4">Signs of NP-hardness</h3>
              <div className="space-y-3">
                <div>
                  <p className="font-medium text-white">Subset Selection</p>
                  <p className="text-sm text-gray-400">Choose k items with constraints</p>
                </div>
                <div>
                  <p className="font-medium text-white">Partition Problems</p>
                  <p className="text-sm text-gray-400">Split into equal/balanced parts</p>
                </div>
                <div>
                  <p className="font-medium text-white">Covering/Packing</p>
                  <p className="text-sm text-gray-400">Cover all with minimum, pack maximum</p>
                </div>
                <div>
                  <p className="font-medium text-white">General Graphs</p>
                  <p className="text-sm text-gray-400">No special structure to exploit</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Answer Templates */}
      <section className="px-6 py-12 border-t border-slate-800">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-2xl font-display font-bold text-white mb-6">
            Perfect Answer Templates
          </h2>

          <div className="space-y-6">
            <div className="bg-green-500/10 rounded-xl p-6 border border-green-500/30">
              <h3 className="font-semibold text-green-400 mb-3">Polynomial Time Template:</h3>
              <div className="bg-slate-800/50 rounded p-4 font-mono text-sm">
                <p>This problem is polynomial-time solvable.</p>
                <p className="mt-2">Algorithm: [Name the approach]</p>
                <p>1. [Step 1]</p>
                <p>2. [Step 2]</p>
                <p>...</p>
                <p className="mt-2">Time complexity: O(...)</p>
                <p className="mt-2">[Brief explanation why it works]</p>
              </div>
            </div>

            <div className="bg-red-500/10 rounded-xl p-6 border border-red-500/30">
              <h3 className="font-semibold text-red-400 mb-3">NP-hard Template:</h3>
              <div className="bg-slate-800/50 rounded p-4 font-mono text-sm">
                <p>This problem is NP-hard by reduction from [PROBLEM].</p>
                <p className="mt-2">Given: Instance I of [PROBLEM]</p>
                <p>Construct: Instance I' of our problem as follows:</p>
                <p>- [Construction step 1]</p>
                <p>- [Construction step 2]</p>
                <p className="mt-2">Correctness: I has solution ⟺ I' has solution</p>
                <p>- (⇒) [Forward direction]</p>
                <p>- (⇐) [Backward direction]</p>
                <p className="mt-2">The reduction takes polynomial time: O(...)</p>
              </div>
            </div>
          </div>

          <div className="mt-6 p-4 bg-yellow-500/10 rounded-lg border border-yellow-500/30">
            <div className="flex items-start gap-2">
              <Lightbulb className="w-5 h-5 text-yellow-400 flex-shrink-0 mt-0.5" />
              <p className="text-sm text-gray-300">
                <strong className="text-yellow-400">Exam tip:</strong> When unsure, try both approaches 
                for 1-2 minutes each. Often one direction becomes obviously impossible.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Common Reductions */}
      <section className="px-6 py-12 border-t border-slate-800">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-2xl font-display font-bold text-white mb-6">
            Common Reduction Patterns
          </h2>

          <div className="space-y-4">
            <div className="bg-slate-900/50 rounded-xl p-6 border border-slate-800">
              <h3 className="text-lg font-semibold text-white mb-4">Quick Reference:</h3>
              
              <div className="space-y-3">
                <div className="flex items-start gap-4">
                  <span className="text-purple-400 font-mono text-sm flex-shrink-0">3-COL →</span>
                  <p className="text-sm text-gray-300">
                    Problems about removing vertices to make bipartite (remove one color class)
                  </p>
                </div>
                
                <div className="flex items-start gap-4">
                  <span className="text-purple-400 font-mono text-sm flex-shrink-0">VC →</span>
                  <p className="text-sm text-gray-300">
                    Dominating set, edge covering, facility location problems
                  </p>
                </div>
                
                <div className="flex items-start gap-4">
                  <span className="text-purple-400 font-mono text-sm flex-shrink-0">IS →</span>
                  <p className="text-sm text-gray-300">
                    Clique (complement graph), sparse subgraph problems
                  </p>
                </div>
                
                <div className="flex items-start gap-4">
                  <span className="text-purple-400 font-mono text-sm flex-shrink-0">HAM →</span>
                  <p className="text-sm text-gray-300">
                    TSP, cycle covers, path problems
                  </p>
                </div>
                
                <div className="flex items-start gap-4">
                  <span className="text-purple-400 font-mono text-sm flex-shrink-0">3SAT →</span>
                  <p className="text-sm text-gray-300">
                    Most other problems (universal starting point)
                  </p>
                </div>
                
                <div className="flex items-start gap-4">
                  <span className="text-purple-400 font-mono text-sm flex-shrink-0">SS →</span>
                  <p className="text-sm text-gray-300">
                    Partition, knapsack variants, balancing problems
                  </p>
                </div>
              </div>
            </div>
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
