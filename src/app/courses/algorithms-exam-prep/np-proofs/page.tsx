import { motion } from 'framer-motion'
import { FileText, ChevronRight, AlertCircle, CheckCircle, XCircle, ArrowLeft, Lightbulb } from 'lucide-react'
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

const ProofBox = ({ title, children }) => (
  <div className="bg-purple-500/10 rounded-xl p-6 border border-purple-500/30 my-4">
    <div className="font-semibold text-purple-400 mb-3">{title}</div>
    <div className="space-y-3 text-sm">{children}</div>
  </div>
)

export default function NPProofsPage() {
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
            <div className="w-12 h-12 bg-yellow-500/10 rounded-lg flex items-center justify-center text-yellow-400">
              <FileText className="w-6 h-6" />
            </div>
            <div>
              <p className="text-sm text-gray-500">Exercise 8</p>
              <h1 className="text-3xl font-display font-bold text-white">NP-Hardness Proofs</h1>
            </div>
          </div>

          <div className="flex flex-wrap gap-3">
            <Badge variant="error">Formal Proofs</Badge>
            <Badge variant="warning">Counterexamples</Badge>
            <Badge variant="error">Very Hard Difficulty</Badge>
          </div>
        </div>
      </section>

      {/* Exam Format */}
      <section className="px-6 py-12">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-2xl font-display font-bold text-white mb-6">
            Exam Format & Key Strategy
          </h2>

          <div className="bg-slate-900/50 rounded-xl p-6 border border-slate-800 mb-6">
            <p className="text-gray-300 mb-4">
              Given a reduction from an NP-complete problem, you must:
            </p>
            <ol className="space-y-2 list-decimal list-inside text-gray-300">
              <li><strong className="text-white">Understand the reduction</strong> - How is the new instance constructed?</li>
              <li><strong className="text-white">Prove one direction</strong> - Usually "If F satisfiable → G has property X"</li>
              <li><strong className="text-white">Write formal proof or counterexample</strong> - Full mathematical rigor required</li>
            </ol>
          </div>

          <div className="bg-yellow-500/10 rounded-xl p-6 border border-yellow-500/30">
            <div className="flex items-start gap-3">
              <AlertCircle className="w-5 h-5 text-yellow-400 flex-shrink-0 mt-0.5" />
              <div>
                <p className="text-yellow-400 font-semibold mb-2">Critical Point</p>
                <p className="text-sm text-gray-300">
                  The claim might be FALSE! Always check with small examples first. 
                  If you find a counterexample, that's the complete answer.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Complete Example: Graph Coloring (TRUE claim) */}
      <section className="px-6 py-12 border-t border-slate-800">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-2xl font-display font-bold text-white mb-6">
            Full Solution: Graph Coloring from 3-SAT (2024 Resit)
          </h2>

          <div className="bg-slate-900/50 rounded-xl p-6 border border-slate-800">
            <h3 className="text-lg font-semibold text-white mb-4">Reduction (Given):</h3>
            <p className="text-gray-400 mb-3">
              From 3-CNF formula F with n variables and m clauses, construct graph G:
            </p>
            <ul className="list-disc list-inside text-gray-400 mb-4 space-y-1 text-sm">
              <li>Variable vertices: t<Sub base="i" sub="" />, f<Sub base="i" sub="" />, d<Sub base="i" sub="" /> for each variable x<Sub base="i" sub="" /></li>
              <li>Clause vertices: c<Sub base="j" sub="" /> for each clause C<Sub base="j" sub="" /></li>
              <li>Edges: (t<Sub base="i" sub="" />, f<Sub base="i" sub="" />), dummy connections, clause-literal edges</li>
            </ul>

            <div className="bg-blue-500/10 rounded-lg p-4 mb-4 border border-blue-500/30">
              <p className="font-semibold text-blue-400 mb-2">Claim:</p>
              <p className="text-gray-300">
                If F has a satisfying assignment, then G is (n+1)-colorable.
              </p>
            </div>

            <ExamSolution score="10/10">
              <ProofBox title="Proof of Claim">
                <p>
                  <strong>Assume</strong> F is satisfiable. Let φ: {x<Sub base="1" sub="" />,...,x<Sub base="n" sub="" />} → {0,1} 
                  be a satisfying assignment.
                </p>

                <div className="bg-slate-800/50 rounded p-4">
                  <p className="font-semibold text-purple-300 mb-2">Define coloring κ: V → {1,2,...,n+1}:</p>
                  
                  <p className="mb-2"><strong>For variable vertices (i = 1,...,n):</strong></p>
                  <ul className="ml-4 space-y-1 text-sm">
                    <li>• κ(d<Sub base="i" sub="" />) = i</li>
                    <li>• If φ(x<Sub base="i" sub="" />) = 0: κ(t<Sub base="i" sub="" />) = n+1, κ(f<Sub base="i" sub="" />) = i</li>
                    <li>• If φ(x<Sub base="i" sub="" />) = 1: κ(t<Sub base="i" sub="" />) = i, κ(f<Sub base="i" sub="" />) = n+1</li>
                  </ul>
                  
                  <p className="mt-3 mb-2"><strong>For clause vertices:</strong></p>
                  <p className="ml-4 text-sm">
                    For c<Sub base="j" sub="" />: Let x<Sub base="i" sub="" /> be the first variable (smallest index) 
                    whose literal satisfies C<Sub base="j" sub="" /> under φ. Set κ(c<Sub base="j" sub="" />) = i.
                  </p>
                </div>

                <p className="mt-4 font-semibold">Verification that κ is proper:</p>
                
                <div className="space-y-3 text-sm">
                  <div>
                    <strong className="text-blue-300">1. Edges (t<Sub base="i" sub="" />, f<Sub base="i" sub="" />):</strong>
                    <p className="ml-4">One endpoint has color i, the other has color n+1 ⇒ different colors ✓</p>
                  </div>
                  
                  <div>
                    <strong className="text-green-300">2. Edges from d<Sub base="i" sub="" />:</strong>
                    <ul className="ml-4 space-y-1">
                      <li>• (d<Sub base="i" sub="" />, d<Sub base="ℓ" sub="" />): colors i vs ℓ where i ≠ ℓ ✓</li>
                      <li>• (d<Sub base="i" sub="" />, t<Sub base="ℓ" sub="" />): colors i vs ℓ or n+1, both ≠ i ✓</li>
                      <li>• (d<Sub base="i" sub="" />, f<Sub base="ℓ" sub="" />): colors i vs ℓ or n+1, both ≠ i ✓</li>
                    </ul>
                  </div>
                  
                  <div>
                    <strong className="text-purple-300">3. Edges (c<Sub base="j" sub="" />, t<Sub base="i" sub="" />):</strong>
                    <p className="ml-4">
                      Exist only when x<Sub base="i" sub="" /> ∉ C<Sub base="j" sub="" />. 
                      If φ(x<Sub base="i" sub="" />) = 0: colors n+1 vs i.
                      If φ(x<Sub base="i" sub="" />) = 1: Since x<Sub base="i" sub="" /> satisfies C<Sub base="j" sub="" /> 
                      but isn't the first, κ(c<Sub base="j" sub="" />) ≠ i ✓
                    </p>
                  </div>
                  
                  <div>
                    <strong className="text-yellow-300">4. Edges (c<Sub base="j" sub="" />, f<Sub base="i" sub="" />):</strong>
                    <p className="ml-4">Similar argument with ¬x<Sub base="i" sub="" /> ✓</p>
                  </div>
                </div>

                <p className="mt-4">
                  All edges connect vertices of different colors. Therefore G is (n+1)-colorable. □
                </p>
              </ProofBox>
            </ExamSolution>
          </div>
        </div>
      </section>

      {/* Complete Example: Partition into Cliques (FALSE claim) */}
      <section className="px-6 py-12 border-t border-slate-800">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-2xl font-display font-bold text-white mb-6">
            Full Solution: Partition into Cliques (2024)
          </h2>

          <div className="bg-slate-900/50 rounded-xl p-6 border border-slate-800">
            <h3 className="text-lg font-semibold text-white mb-4">Reduction (Given):</h3>
            <p className="text-gray-400 mb-3">
              From graph G = (V,E) for Minimum Vertex Cover, construct G' = (V',E'):
            </p>
            <ul className="list-disc list-inside text-gray-400 mb-4 space-y-1 text-sm">
              <li>For each edge e ∈ E, create vertex v<Sub base="e" sub="" /> in V'</li>
              <li>Connect v<Sub base="e" sub="" /> and v<Sub base="f" sub="" /> iff edges e and f share an endpoint in G</li>
            </ul>

            <div className="bg-blue-500/10 rounded-lg p-4 mb-4 border border-blue-500/30">
              <p className="font-semibold text-blue-400 mb-2">Claim:</p>
              <p className="text-gray-300">
                If G' can be partitioned into k cliques, then G has a vertex cover of size k.
              </p>
            </div>

            <ExamSolution score="10/10">
              <p className="font-semibold text-red-400 text-lg mb-4">The claim is FALSE</p>

              <ProofBox title="Counterexample">
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <p className="font-semibold text-gray-300 mb-2">Original graph G:</p>
                    <div className="bg-slate-800/50 rounded p-4">
                      <p className="text-sm font-mono">
                        Triangle with vertices {a,b,c}<br/>
                        Edges: e = (a,b), f = (b,c), g = (a,c)
                      </p>
                    </div>
                  </div>
                  
                  <div>
                    <p className="font-semibold text-gray-300 mb-2">Constructed graph G':</p>
                    <div className="bg-slate-800/50 rounded p-4">
                      <p className="text-sm font-mono">
                        Vertices: {v<Sub base="e" sub="" />, v<Sub base="f" sub="" />, v<Sub base="g" sub="" />}<br/>
                        Forms a triangle (all connected)
                      </p>
                    </div>
                  </div>
                </div>

                <div className="mt-4 grid md:grid-cols-2 gap-4">
                  <div className="bg-green-500/10 rounded p-4 border border-green-500/30">
                    <p className="font-semibold text-green-400 mb-2">G' property:</p>
                    <p className="text-sm">
                      Can be covered by k = 1 clique:<br/>
                      {v<Sub base="e" sub="" />, v<Sub base="f" sub="" />, v<Sub base="g" sub="" />}
                    </p>
                  </div>
                  
                  <div className="bg-red-500/10 rounded p-4 border border-red-500/30">
                    <p className="font-semibold text-red-400 mb-2">G property:</p>
                    <p className="text-sm">
                      Minimum vertex cover needs 2 vertices<br/>
                      (any 2 vertices cover all 3 edges)
                    </p>
                  </div>
                </div>

                <p className="mt-4 text-center font-semibold">
                  k = 1 but minimum vertex cover = 2 ⇒ Claim is false! ✗
                </p>
              </ProofBox>
            </ExamSolution>
          </div>
        </div>
      </section>

      {/* Complete Example: String Mixing */}
      <section className="px-6 py-12 border-t border-slate-800">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-2xl font-display font-bold text-white mb-6">
            Full Solution: Longest Common Subsequence (2023 Resit)
          </h2>

          <div className="bg-slate-900/50 rounded-xl p-6 border border-slate-800">
            <h3 className="text-lg font-semibold text-white mb-4">Reduction (Given):</h3>
            <p className="text-gray-400 mb-3">
              From graph G = (V,E) for Maximum Independent Set, construct k = m+1 sequences:
            </p>
            <ul className="list-disc list-inside text-gray-400 mb-4 space-y-1 text-sm">
              <li>S[0] = (1,2,...,n) - all vertices in order</li>
              <li>For each edge e<Sub base="j" sub="" /> = (v<Sub base="a" sub="" />,v<Sub base="b" sub="" />) with a < b:</li>
              <li className="ml-6">S[j] = (1,...,a-1,a+1,...,n,1,...,b-1,b+1,...,n)</li>
            </ul>

            <div className="bg-blue-500/10 rounded-lg p-4 mb-4 border border-blue-500/30">
              <p className="font-semibold text-blue-400 mb-2">Claim:</p>
              <p className="text-gray-300">
                If sequences have common subsequence of length r, then G has independent set of size r.
              </p>
            </div>

            <ExamSolution score="10/10">
              <p className="font-semibold text-green-400 text-lg mb-4">The claim is TRUE</p>

              <ProofBox title="Proof">
                <p>
                  Let T* be a common subsequence of all k sequences with |T*| = r.
                </p>

                <p>
                  <strong>Define:</strong> T = {v<Sub base="j" sub="" /> | integer j occurs in T*}
                </p>

                <div className="bg-slate-800/50 rounded p-4 my-3">
                  <p className="text-sm">
                    <strong>Key observation:</strong> Since S[0] = (1,2,...,n) with no repeats, 
                    each integer appears at most once in T*. Thus |T| = r.
                  </p>
                </div>

                <p className="font-semibold mb-2">Proof that T is independent:</p>
                
                <div className="bg-red-500/10 rounded p-4 border border-red-500/30">
                  <p className="text-sm mb-2">
                    <strong>Assume for contradiction:</strong> T is not independent.
                  </p>
                  <p className="text-sm">
                    Then ∃ v<Sub base="a" sub="" />, v<Sub base="b" sub="" /> ∈ T with (v<Sub base="a" sub="" />,v<Sub base="b" sub="" />) ∈ E and a < b.
                  </p>
                </div>

                <div className="mt-3 space-y-2 text-sm">
                  <p>Let e<Sub base="j" sub="" /> = (v<Sub base="a" sub="" />,v<Sub base="b" sub="" />). 
                     Look at sequence S[j]:</p>
                  <ul className="ml-4 space-y-1">
                    <li>• First half: 1,...,a-1,a+1,...,n (omits a)</li>
                    <li>• Second half: 1,...,b-1,b+1,...,n (omits b)</li>
                  </ul>
                  
                  <p className="mt-2">
                    Therefore (a,b) is NOT a subsequence of S[j] - only (b,a) can appear.
                  </p>
                  
                  <p>
                    But in T*, we have a before b (since S[0] orders them this way).
                    So T* contains (a,b) as a subsequence.
                  </p>
                  
                  <p className="text-red-300">
                    Contradiction: T* cannot be a subsequence of S[j] if it contains (a,b). ✗
                  </p>
                </div>

                <p className="mt-4">
                  Therefore T is an independent set of size r. □
                </p>
              </ProofBox>
            </ExamSolution>
          </div>
        </div>
      </section>

      {/* Proof Writing Guidelines */}
      <section className="px-6 py-12 border-t border-slate-800">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-2xl font-display font-bold text-white mb-6">
            How to Write Perfect Proofs
          </h2>

          <div className="grid md:grid-cols-2 gap-6">
            <div className="bg-green-500/10 rounded-xl p-6 border border-green-500/30">
              <h3 className="font-semibold text-green-400 mb-4">Structure for TRUE Claims</h3>
              <ol className="space-y-3 text-sm">
                <li>
                  <strong>1. State assumption</strong>
                  <p className="text-gray-400">"Assume F is satisfiable..."</p>
                </li>
                <li>
                  <strong>2. Introduce witness</strong>
                  <p className="text-gray-400">"Let φ be a satisfying assignment"</p>
                </li>
                <li>
                  <strong>3. Construct solution</strong>
                  <p className="text-gray-400">"We define [solution] as follows..."</p>
                </li>
                <li>
                  <strong>4. Verify all properties</strong>
                  <p className="text-gray-400">"Check each constraint..."</p>
                </li>
                <li>
                  <strong>5. Conclude</strong>
                  <p className="text-gray-400">"Therefore [claim holds] □"</p>
                </li>
              </ol>
            </div>

            <div className="bg-red-500/10 rounded-xl p-6 border border-red-500/30">
              <h3 className="font-semibold text-red-400 mb-4">Structure for FALSE Claims</h3>
              <ol className="space-y-3 text-sm">
                <li>
                  <strong>1. State claim is false</strong>
                  <p className="text-gray-400">"The claim is FALSE"</p>
                </li>
                <li>
                  <strong>2. Present instance</strong>
                  <p className="text-gray-400">"Consider graph G = ..."</p>
                </li>
                <li>
                  <strong>3. Show first property</strong>
                  <p className="text-gray-400">"F is satisfiable because..."</p>
                </li>
                <li>
                  <strong>4. Show second fails</strong>
                  <p className="text-gray-400">"But G does not have..."</p>
                </li>
                <li>
                  <strong>5. State contradiction</strong>
                  <p className="text-gray-400">"Since X but not Y, claim false"</p>
                </li>
              </ol>
            </div>
          </div>

          <div className="mt-6 space-y-4">
            <div className="bg-blue-500/10 rounded-xl p-6 border border-blue-500/30">
              <h3 className="font-semibold text-blue-400 mb-3">Proof by Contradiction</h3>
              <p className="text-sm text-gray-300">
                Often useful for independence/conflict properties:
              </p>
              <ul className="mt-2 space-y-1 text-sm text-gray-400">
                <li>• "Assume for contradiction that..."</li>
                <li>• "Then there exist u,v such that..."</li>
                <li>• "But this implies... contradiction!"</li>
              </ul>
            </div>

            <div className="bg-yellow-500/10 rounded-xl p-6 border border-yellow-500/30">
              <div className="flex items-start gap-3">
                <Lightbulb className="w-5 h-5 text-yellow-400 flex-shrink-0 mt-0.5" />
                <div>
                  <p className="text-yellow-400 font-semibold mb-2">Exam Strategy</p>
                  <ul className="space-y-1 text-sm text-gray-300">
                    <li>• Test claim on small examples first (triangle, K₄, path)</li>
                    <li>• If seems false, find simplest counterexample</li>
                    <li>• If seems true, construct solution systematically</li>
                    <li>• Always verify ALL constraints explicitly</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Common Pitfalls */}
      <section className="px-6 py-12 border-t border-slate-800">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-2xl font-display font-bold text-white mb-6">
            Common Mistakes to Avoid
          </h2>

          <div className="space-y-4">
            <div className="flex items-start gap-3 p-4 bg-red-500/10 rounded-lg border border-red-500/30">
              <XCircle className="w-5 h-5 text-red-400 flex-shrink-0 mt-0.5" />
              <div>
                <p className="font-semibold text-red-400">Assuming claim is true</p>
                <p className="text-sm text-gray-300">Always check! Many exam claims are false.</p>
              </div>
            </div>

            <div className="flex items-start gap-3 p-4 bg-red-500/10 rounded-lg border border-red-500/30">
              <XCircle className="w-5 h-5 text-red-400 flex-shrink-0 mt-0.5" />
              <div>
                <p className="font-semibold text-red-400">Vague construction</p>
                <p className="text-sm text-gray-300">Be explicit: "Set color(v) = ..." not "color appropriately"</p>
              </div>
            </div>

            <div className="flex items-start gap-3 p-4 bg-red-500/10 rounded-lg border border-red-500/30">
              <XCircle className="w-5 h-5 text-red-400 flex-shrink-0 mt-0.5" />
              <div>
                <p className="font-semibold text-red-400">Skipping verification</p>
                <p className="text-sm text-gray-300">Must check EVERY edge type, constraint, case</p>
              </div>
            </div>

            <div className="flex items-start gap-3 p-4 bg-red-500/10 rounded-lg border border-red-500/30">
              <XCircle className="w-5 h-5 text-red-400 flex-shrink-0 mt-0.5" />
              <div>
                <p className="font-semibold text-red-400">Complex counterexamples</p>
                <p className="text-sm text-gray-300">Triangle or K₄ usually suffice - keep it simple!</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Navigation */}
      <section className="px-6 py-12 border-t border-slate-800">
        <div className="max-w-4xl mx-auto flex justify-between">
          <Link
            href="/courses/algorithms-exam-prep/np-complexity"
            className="flex items-center gap-2 text-gray-400 hover:text-purple-400 transition-colors"
          >
            <ArrowLeft className="w-4 h-4" />
            Previous: NP-Complexity
          </Link>
          <Link
            href="/courses/algorithms-exam-prep"
            className="flex items-center gap-2 text-purple-400 hover:text-purple-300 transition-colors"
          >
            Back to Overview
            <ChevronRight className="w-4 h-4" />
          </Link>
        </div>
      </section>
    </PageWrapper>
  )
}
