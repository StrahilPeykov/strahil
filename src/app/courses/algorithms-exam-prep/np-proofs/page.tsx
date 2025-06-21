'use client'

import { motion } from 'framer-motion'
import { FileText, ChevronRight, AlertCircle, CheckCircle, XCircle, ArrowLeft, Lightbulb } from 'lucide-react'
import Link from 'next/link'
import { PageWrapper } from '../../../../components/layout/PageWrapper'
import { Badge } from '../../../../components/ui/Badge'
import { MathDisplay, MathSymbols, AlgorithmBlock } from '../../../../components/ui/MathDisplay'
import { ExamSolution, ProofBox } from '../../../../components/ui/AlgorithmComponents'

const { Sum, Sub, Sup, In, ForAll, Exists, Leq, Geq, RightArrow, LeftRightArrow } = MathSymbols

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
            Exam Format & Expectations
          </h2>

          <div className="bg-slate-900/50 rounded-xl p-6 border border-slate-800">
            <p className="text-gray-300 mb-4">
              NP-hardness proof questions typically ask you to:
            </p>
            <ol className="space-y-3 list-decimal list-inside text-gray-300">
              <li><strong className="text-white">Prove a statement is true</strong> - Usually about NP-hardness</li>
              <li><strong className="text-white">Disprove with counterexample</strong> - Show the statement is false</li>
              <li><strong className="text-white">Analyze special cases</strong> - When does a hard problem become easy?</li>
            </ol>
            <div className="mt-6 p-4 bg-red-500/10 rounded-lg border border-red-500/30">
              <p className="text-sm text-red-300">
                <strong>Warning:</strong> This is often the hardest exercise. 
                Focus on finding small counterexamples or using standard proof techniques.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Proof Techniques */}
      <section className="px-6 py-12 border-t border-slate-800">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-2xl font-display font-bold text-white mb-6">
            Standard Proof Techniques
          </h2>

          <div className="grid md:grid-cols-2 gap-6">
            <div className="bg-blue-500/10 rounded-xl p-6 border border-blue-500/30">
              <h3 className="font-semibold text-blue-400 mb-3">Proving NP-Hardness</h3>
              <ol className="space-y-2 text-sm text-gray-300">
                <li>1. Start with known NP-hard problem A</li>
                <li>2. Show reduction: A <Leq /><Sub base="p" sub="" /> B</li>
                <li>3. Given instance of A, construct instance of B</li>
                <li>4. Prove: A has solution <LeftRightArrow /> B has solution</li>
                <li>5. Show reduction is polynomial time</li>
              </ol>
            </div>

            <div className="bg-red-500/10 rounded-xl p-6 border border-red-500/30">
              <h3 className="font-semibold text-red-400 mb-3">Finding Counterexamples</h3>
              <ol className="space-y-2 text-sm text-gray-300">
                <li>1. Look for small instances (3-5 vertices)</li>
                <li>2. Try edge cases (empty graph, complete graph)</li>
                <li>3. Check special structures (star, path, cycle)</li>
                <li>4. Verify your example carefully</li>
                <li>5. Show why the statement fails</li>
              </ol>
            </div>
          </div>
        </div>
      </section>

      {/* Complete Example 1: Proving NP-Hardness */}
      <section className="px-6 py-12 border-t border-slate-800">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-2xl font-display font-bold text-white mb-6">
            Past Exam Example: Weighted Vertex Cover (2024)
          </h2>

          <div className="bg-slate-900/50 rounded-xl p-6 border border-slate-800">
            <h3 className="text-lg font-semibold text-white mb-4">Statement:</h3>
            <p className="text-gray-400 mb-4">
              "WEIGHTED-VERTEX-COVER is NP-hard: Given graph G = (V,E), vertex weights w: V → ℕ, 
              and integer k, does G have a vertex cover of total weight <Leq /> k?"
            </p>
            
            <p className="font-semibold text-gray-300 mb-2">
              Prove this statement is TRUE.
            </p>

            <ExamSolution score="10/10">
              <p className="font-semibold text-white mb-3">
                Proof by reduction from VERTEX-COVER (known NP-complete):
              </p>

              <ProofBox title="Reduction">
                <p>Given instance of VERTEX-COVER: Graph G = (V,E) and integer k.</p>
                <p>Question: Does G have a vertex cover of size <Leq /> k?</p>
              </ProofBox>

              <p className="mt-4 mb-2"><strong>Construction:</strong></p>
              <ul className="ml-4 space-y-2">
                <li>• Use the same graph G</li>
                <li>• Set w(v) = 1 for all v <In /> V</li>
                <li>• Use the same k</li>
              </ul>

              <p className="mt-4 mb-2"><strong>Correctness:</strong></p>
              <p className="ml-4 mb-3">
                G has vertex cover S of size <Leq /> k
              </p>
              <MathDisplay block className="ml-4 mb-3">
                <LeftRightArrow /> |S| <Leq /> k
              </MathDisplay>
              <MathDisplay block className="ml-4 mb-3">
                <LeftRightArrow /> <Sum /><Sub base="v∈S" sub="" /> w(v) = <Sum /><Sub base="v∈S" sub="" /> 1 = |S| <Leq /> k
              </MathDisplay>
              <p className="ml-4">
                <LeftRightArrow /> G has weighted vertex cover of weight <Leq /> k
              </p>

              <p className="mt-4">
                <strong>Time complexity:</strong> O(|V|) to assign weights. Polynomial. ✓
              </p>

              <p className="mt-4 text-sm text-gray-400">
                Since VERTEX-COVER is NP-complete, WEIGHTED-VERTEX-COVER is NP-hard.
              </p>
            </ExamSolution>
          </div>
        </div>
      </section>

      {/* Complete Example 2: Counterexample */}
      <section className="px-6 py-12 border-t border-slate-800">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-2xl font-display font-bold text-white mb-6">
            Example: Finding a Counterexample (2023)
          </h2>

          <div className="bg-slate-900/50 rounded-xl p-6 border border-slate-800">
            <h3 className="text-lg font-semibold text-white mb-4">Statement:</h3>
            <p className="text-gray-400 mb-4">
              "If a graph G has a Hamiltonian path, then removing any vertex from G 
              leaves a graph with a Hamiltonian path."
            </p>
            
            <p className="font-semibold text-gray-300 mb-2">
              Prove this statement is FALSE by giving a counterexample.
            </p>

            <ExamSolution score="10/10">
              <p className="font-semibold text-white mb-3">Counterexample:</p>
              
              <div className="bg-slate-800/50 rounded-lg p-4 mb-4">
                <p className="mb-2">Consider the path graph P<Sub base="4" sub="" /> with vertices {"{"}a, b, c, d{"}"}:</p>
                <div className="text-center font-mono my-3">
                  a — b — c — d
                </div>
              </div>

              <p className="mb-3">
                <strong>1. G has a Hamiltonian path:</strong> a → b → c → d ✓
              </p>

              <p className="mb-3">
                <strong>2. Remove vertex b:</strong>
              </p>
              <div className="ml-4 mb-3">
                <p>Resulting graph G' has vertices {"{"}a, c, d{"}"} with edges:</p>
                <div className="text-center font-mono my-2">
                  a   c — d
                </div>
                <p className="text-sm text-gray-400">(no edge between a and c)</p>
              </div>

              <p className="mb-3">
                <strong>3. G' has NO Hamiltonian path:</strong>
              </p>
              <ul className="ml-4 space-y-1">
                <li>• To visit all vertices, must include a</li>
                <li>• But a has degree 0 in G'</li>
                <li>• So a must be endpoint of any Hamiltonian path</li>
                <li>• But can't reach both c and d from a</li>
              </ul>

              <p className="mt-4 text-sm text-gray-400">
                Therefore, the statement is FALSE. Removing vertex b from P<Sub base="4" sub="" /> 
                creates a graph with no Hamiltonian path. ✗
              </p>
            </ExamSolution>
          </div>
        </div>
      </section>

      {/* Common Statement Types */}
      <section className="px-6 py-12 border-t border-slate-800">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-2xl font-display font-bold text-white mb-6">
            Common Statement Types
          </h2>

          <div className="space-y-6">
            <div className="bg-slate-900/50 rounded-xl p-6 border border-slate-800">
              <h3 className="font-semibold text-white mb-3">Type 1: Special Cases</h3>
              <p className="text-gray-300 mb-2">
                "Problem X remains NP-hard even when restricted to graphs with property Y"
              </p>
              <div className="mt-3 text-sm text-gray-400">
                <strong>Approach:</strong> Reduce from general case, ensuring construction has property Y.
              </div>
            </div>

            <div className="bg-slate-900/50 rounded-xl p-6 border border-slate-800">
              <h3 className="font-semibold text-white mb-3">Type 2: Algorithm Claims</h3>
              <p className="text-gray-300 mb-2">
                "This greedy/simple algorithm solves NP-hard problem X"
              </p>
              <div className="mt-3 text-sm text-gray-400">
                <strong>Approach:</strong> Almost always FALSE. Find small counterexample.
              </div>
            </div>

            <div className="bg-slate-900/50 rounded-xl p-6 border border-slate-800">
              <h3 className="font-semibold text-white mb-3">Type 3: Structural Properties</h3>
              <p className="text-gray-300 mb-2">
                "If graph has property A, then it has property B"
              </p>
              <div className="mt-3 text-sm text-gray-400">
                <strong>Approach:</strong> Try standard graphs (path, cycle, star, complete).
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Tips for Success */}
      <section className="px-6 py-12 border-t border-slate-800">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-2xl font-display font-bold text-white mb-6">
            Strategies for Success
          </h2>

          <div className="grid md:grid-cols-2 gap-6">
            <div className="bg-green-500/10 rounded-xl p-6 border border-green-500/30">
              <h3 className="font-semibold text-green-400 mb-3">Quick Checks</h3>
              <ul className="space-y-2 text-sm text-gray-300">
                <li>• If it claims P = NP, it's FALSE</li>
                <li>• If it claims easy algorithm for NP-hard, it's FALSE</li>
                <li>• Check small graphs first (n <Leq /> 5)</li>
                <li>• Draw your examples clearly</li>
                <li>• Verify edge cases</li>
              </ul>
            </div>

            <div className="bg-yellow-500/10 rounded-xl p-6 border border-yellow-500/30">
              <h3 className="font-semibold text-yellow-400 mb-3">Time Management</h3>
              <ul className="space-y-2 text-sm text-gray-300">
                <li>• Spend max 20 minutes here</li>
                <li>• If stuck, try the opposite (true → false)</li>
                <li>• Small counterexamples = full points</li>
                <li>• Don't overcomplicate proofs</li>
                <li>• Move on if completely stuck</li>
              </ul>
            </div>
          </div>

          <div className="mt-6 p-4 bg-blue-500/10 rounded-lg border border-blue-500/30">
            <div className="flex items-start gap-2">
              <Lightbulb className="w-5 h-5 text-blue-400 flex-shrink-0 mt-0.5" />
              <div>
                <p className="text-sm text-blue-300 font-semibold mb-1">
                  Exam Tip
                </p>
                <p className="text-sm text-gray-300">
                  This exercise has high variance - sometimes easy, sometimes very hard.
                  Don't panic if you can't solve it immediately. Often, a simple 3-4 vertex 
                  counterexample is all you need.
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
            Back to Course Overview
            <ChevronRight className="w-4 h-4" />
          </Link>
        </div>
      </section>
    </PageWrapper>
  )
}