'use client'

import { motion } from 'framer-motion'
import { BookOpen, AlertCircle, CheckCircle, FileText, ChevronRight, XCircle } from 'lucide-react'
import Link from 'next/link'
import { PageWrapper } from '../../../../components/layout/PageWrapper'

interface ProofStructureProps {
  title: string
  children: React.ReactNode
}

function ProofStructure({ title, children }: ProofStructureProps) {
  return (
    <div className="mb-6 p-4 bg-slate-900/50 border border-slate-800 rounded-lg">
      <h3 className="text-lg font-semibold text-white mb-3">{title}</h3>
      <div className="text-gray-400 text-sm space-y-2">{children}</div>
    </div>
  )
}

interface ExamExampleProps {
  year: string
  problem: string
  claim: string
  children: React.ReactNode
}

function ExamExample({ year, problem, claim, children }: ExamExampleProps) {
  return (
    <div className="mb-8 p-6 bg-slate-900/50 border border-slate-800 rounded-xl">
      <div className="flex items-center gap-2 mb-4">
        <div className="px-3 py-1 bg-pink-500/20 text-pink-400 rounded-full text-sm font-semibold">
          {year} Exam
        </div>
        <h4 className="text-lg font-semibold text-white">{problem}</h4>
      </div>
      <div className="mb-4 p-3 bg-blue-500/10 border border-blue-500/30 rounded">
        <p className="text-sm text-blue-400 font-semibold mb-1">Claim</p>
        <p className="text-sm text-gray-300">{claim}</p>
      </div>
      {children}
    </div>
  )
}

export default function NPHardnessProofsExercise() {
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
          <h1 className="text-3xl font-display font-bold text-white">Exercise 8: NP-hardness Proofs</h1>
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
              Given a reduction from an NP-complete problem, prove one direction of the equivalence 
              or provide a counterexample. These questions test your ability to write formal proofs 
              and construct counterexamples.
            </p>
            
            <div className="p-4 bg-purple-500/10 border border-purple-500/30 rounded-lg mb-6">
              <div className="flex items-start gap-3">
                <AlertCircle className="w-5 h-5 text-purple-400 flex-shrink-0 mt-0.5" />
                <div>
                  <p className="text-sm text-purple-400 font-semibold mb-1">Standard Format</p>
                  <p className="text-sm text-gray-300">
                    "F is satisfiable if and only if G has property X"<br/>
                    You prove: "If F is satisfiable, then G has property X"
                  </p>
                </div>
              </div>
            </div>
          </section>
          
          {/* Proof Structure */}
          <section className="mb-12">
            <h2 className="text-2xl font-display font-bold text-white mb-6">Standard Proof Structure</h2>
            
            <ProofStructure title="For Proving Claims TRUE">
              <p>1. <span className="text-gray-300 font-medium">Assume the hypothesis:</span> "Assume F is satisfiable"</p>
              <p>2. <span className="text-gray-300 font-medium">Use the assumption:</span> "Let φ be a satisfying assignment"</p>
              <p>3. <span className="text-gray-300 font-medium">Construct solution:</span> "We construct [solution for G] as follows..."</p>
              <p>4. <span className="text-gray-300 font-medium">Verify properties:</span> "We verify this satisfies all requirements..."</p>
              <p>5. <span className="text-gray-300 font-medium">Conclude:</span> "Therefore G has property X"</p>
            </ProofStructure>
            
            <ProofStructure title="For Proving Claims FALSE">
              <p>1. <span className="text-gray-300 font-medium">State it's false:</span> "The claim is false"</p>
              <p>2. <span className="text-gray-300 font-medium">Give counterexample:</span> "Consider the following instance..."</p>
              <p>3. <span className="text-gray-300 font-medium">Show first property holds:</span> "F is satisfiable because..."</p>
              <p>4. <span className="text-gray-300 font-medium">Show second property fails:</span> "But G does not have property X because..."</p>
            </ProofStructure>
          </section>
          
          {/* Examples */}
          <section className="mb-12">
            <h2 className="text-2xl font-display font-bold text-white mb-6">Past Exam Examples</h2>
            
            <ExamExample 
              year="2024 Resit" 
              problem="Graph Coloring from 3-SAT"
              claim="If F has a satisfying assignment, then G is (n+1)-colorable"
            >
              <div className="space-y-4">
                <div>
                  <p className="font-semibold text-green-400 mb-2">✓ Proof (Claim is TRUE)</p>
                  <div className="space-y-3 text-sm">
                    <p>
                      <span className="font-medium">Assume</span> F is satisfiable. 
                      Let φ: {'{x₁,...,xₙ}'} → {'{0,1}'} be a satisfying assignment.
                    </p>
                    
                    <p><span className="font-medium">Define coloring κ:</span></p>
                    <div className="ml-4 space-y-2">
                      <p>For each variable xᵢ:</p>
                      <ul className="ml-4 space-y-1 text-gray-400">
                        <li>• κ(dᵢ) = i</li>
                        <li>• If φ(xᵢ) = 0: κ(tᵢ) = n+1, κ(fᵢ) = i</li>
                        <li>• If φ(xᵢ) = 1: κ(tᵢ) = i, κ(fᵢ) = n+1</li>
                      </ul>
                      
                      <p className="mt-2">For each clause Cⱼ:</p>
                      <ul className="ml-4 text-gray-400">
                        <li>• Let xᵢ be first variable making Cⱼ true</li>
                        <li>• κ(cⱼ) = i</li>
                      </ul>
                    </div>
                    
                    <p><span className="font-medium">Verify all edges have different colors:</span></p>
                    <ul className="ml-4 space-y-1 text-gray-400">
                      <li>• (tᵢ,fᵢ): One has color i, other has n+1 ✓</li>
                      <li>• (dᵢ,dₗ), (dᵢ,tₗ), (dᵢ,fₗ): Different by construction ✓</li>
                      <li>• (cⱼ,tᵢ): Exists only if xᵢ ∉ Cⱼ, colors differ ✓</li>
                      <li>• (cⱼ,fᵢ): Exists only if ¬xᵢ ∉ Cⱼ, colors differ ✓</li>
                    </ul>
                    
                    <p className="text-gray-300">
                      Therefore G is (n+1)-colorable. □
                    </p>
                  </div>
                </div>
              </div>
            </ExamExample>
            
            <ExamExample 
              year="2024" 
              problem="Partition into Cliques"
              claim="If G' can be partitioned into k cliques, then G has a vertex cover of size k"
            >
              <div className="space-y-4">
                <div>
                  <p className="font-semibold text-red-400 mb-2">✗ Counterexample (Claim is FALSE)</p>
                  <div className="space-y-3 text-sm">
                    <p>Consider G = K₃ (triangle with edges e, f, g).</p>
                    
                    <p>The reduction creates G' with vertices v<sub>e</sub>, v<sub>f</sub>, v<sub>g</sub> forming a triangle.</p>
                    
                    <div className="grid grid-cols-2 gap-4 mt-4">
                      <div className="p-3 bg-green-500/10 rounded">
                        <p className="font-medium text-green-400 mb-1">G' property ✓</p>
                        <p className="text-gray-400">Can be covered by single clique {'{v'}ₑ, v<sub>f</sub>, v<sub>g</sub>{'}'}</p>
                        <p className="text-gray-300 mt-1">k = 1</p>
                      </div>
                      <div className="p-3 bg-red-500/10 rounded">
                        <p className="font-medium text-red-400 mb-1">G property ✗</p>
                        <p className="text-gray-400">Minimum vertex cover needs 2 vertices</p>
                        <p className="text-gray-300 mt-1">Size ≥ 2</p>
                      </div>
                    </div>
                    
                    <p className="text-gray-300 mt-4">
                      Since k = 1 but vertex cover size ≥ 2, the claim is false. □
                    </p>
                  </div>
                </div>
              </div>
            </ExamExample>
            
            <ExamExample 
              year="2023 Resit" 
              problem="Longest Common Subsequence"
              claim="If sequences have common subsequence of length r, then G has independent set of size r"
            >
              <div className="space-y-4">
                <div>
                  <p className="font-semibold text-green-400 mb-2">✓ Proof (Claim is TRUE)</p>
                  <div className="space-y-3 text-sm">
                    <p>
                      Let T* be a common subsequence of all sequences S[0],...,S[m] with |T*| = r.
                    </p>
                    
                    <p>
                      <span className="font-medium">Define</span> T = 
                    </p>
                    
                    <p>
                      Since S[0] = (1,2,...,n) with no repeats, each integer appears at most once in T*.
                      Thus |T| = r.
                    </p>
                    
                    <p className="font-medium">Proof that T is independent:</p>
                    <div className="ml-4 space-y-2 text-gray-400">
                      <p>Assume for contradiction that (vₐ,v<sub>b</sub>) ∈ E with a {'<'} b.</p>
                      <p>Then for edge eⱼ = (vₐ,v<sub>b</sub>), sequence S[j] omits a from first half and b from second half.</p>
                      <p>So (a,b) is not a subsequence of S[j].</p>
                      <p>But a,b both occur in T* with a before b (since S[0] is increasing).</p>
                      <p>This contradicts T* being a subsequence of S[j].</p>
                    </div>
                    
                    <p className="text-gray-300">
                      Therefore T is an independent set of size r. □
                    </p>
                  </div>
                </div>
              </div>
            </ExamExample>
          </section>
          
          {/* Common Techniques */}
          <section className="mb-12">
            <h2 className="text-2xl font-display font-bold text-white mb-6">Proof Techniques</h2>
            
            <div className="grid md:grid-cols-2 gap-4">
              <div className="p-4 bg-slate-900/50 border border-slate-800 rounded-lg">
                <FileText className="w-6 h-6 text-blue-400 mb-2" />
                <h3 className="font-semibold text-white mb-2">Construction Proofs</h3>
                <ul className="text-sm text-gray-400 space-y-1">
                  <li>• Define mapping explicitly</li>
                  <li>• Check all constraints</li>
                  <li>• Handle all cases systematically</li>
                </ul>
              </div>
              
              <div className="p-4 bg-slate-900/50 border border-slate-800 rounded-lg">
                <XCircle className="w-6 h-6 text-red-400 mb-2" />
                <h3 className="font-semibold text-white mb-2">Counterexamples</h3>
                <ul className="text-sm text-gray-400 space-y-1">
                  <li>• Keep them minimal</li>
                  <li>• Triangles often work</li>
                  <li>• Verify both properties explicitly</li>
                </ul>
              </div>
            </div>
          </section>
          
          {/* Writing Tips */}
          <section className="mb-12">
            <h2 className="text-2xl font-display font-bold text-white mb-6">Writing Tips</h2>
            
            <div className="p-4 bg-yellow-500/10 border border-yellow-500/30 rounded-lg">
              <div className="flex items-start gap-3">
                <AlertCircle className="w-5 h-5 text-yellow-400 flex-shrink-0 mt-0.5" />
                <div>
                  <p className="text-sm text-yellow-400 font-semibold mb-2">For Full Marks</p>
                  <ul className="text-sm text-gray-300 space-y-2">
                    <li>
                      <span className="font-medium">Be explicit:</span> State what you're constructing and why
                    </li>
                    <li>
                      <span className="font-medium">Check everything:</span> Verify all edges/constraints systematically
                    </li>
                    <li>
                      <span className="font-medium">Use given notation:</span> Stick to variable names from the problem
                    </li>
                    <li>
                      <span className="font-medium">Structure clearly:</span> Use paragraphs and spacing
                    </li>
                    <li>
                      <span className="font-medium">Conclude properly:</span> End with "Therefore..." or □
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </section>
          
          {/* Common Mistakes */}
          <section>
            <h2 className="text-2xl font-display font-bold text-white mb-6">Common Mistakes to Avoid</h2>
            
            <div className="space-y-3">
              {[
                "Assuming the claim is true without checking",
                "Not being explicit about the construction",
                "Skipping verification of edge cases",
                "Using unclear notation or changing variable names",
                "For counterexamples: making them too complex"
              ].map((mistake: string, i: number) => (
                <div key={i} className="flex items-start gap-3 p-3 bg-red-500/10 border border-red-500/30 rounded-lg">
                  <XCircle className="w-5 h-5 text-red-400 flex-shrink-0 mt-0.5" />
                  <p className="text-sm text-gray-300">{mistake}</p>
                </div>
              ))}
            </div>
          </section>
        </motion.div>
      </div>
    </div>
    </PageWrapper>
  )
}
