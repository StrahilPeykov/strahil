'use client'

import { motion } from 'framer-motion'
import { Target, ChevronRight, AlertCircle, CheckCircle, Lightbulb, ArrowLeft } from 'lucide-react'
import Link from 'next/link'
import { PageWrapper } from '../../../../components/layout/PageWrapper'
import { Badge } from '../../../../components/ui/Badge'
import { MathDisplay, MathSymbols, AlgorithmBlock } from '../../../../components/ui/MathDisplay'
import { ExamSolution, ProofBox } from '../../../../components/ui/AlgorithmComponents'

const { Sub, Sup, Leq, Geq, ForAll, Exists, In, RightArrow } = MathSymbols

export default function GreedyChoicePage() {
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
              <Target className="w-6 h-6" />
            </div>
            <div>
              <p className="text-sm text-gray-500">Exercise 2</p>
              <h1 className="text-3xl font-display font-bold text-white">Greedy Choice Lemma</h1>
            </div>
          </div>

          <div className="flex flex-wrap gap-3">
            <Badge variant="green">Proofs</Badge>
            <Badge variant="purple">Algorithm Analysis</Badge>
            <Badge variant="success">Easy-Medium Difficulty</Badge>
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
              Greedy Choice questions typically ask you to:
            </p>
            <ol className="space-y-3 list-decimal list-inside text-gray-300">
              <li><strong className="text-white">State the greedy algorithm</strong> - What choice does it make at each step?</li>
              <li><strong className="text-white">Prove correctness</strong> - Show the greedy choice is always safe</li>
              <li><strong className="text-white">State and prove the lemma</strong> - Formalize the greedy choice property</li>
            </ol>
            <div className="mt-6 p-4 bg-green-500/10 rounded-lg border border-green-500/30">
              <p className="text-sm text-green-300">
                <strong>Key:</strong> The proof structure is usually: "Consider any optimal solution. 
                We can modify it to include the greedy choice without losing optimality."
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Complete Example: Interval Scheduling */}
      <section className="px-6 py-12 border-t border-slate-800">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-2xl font-display font-bold text-white mb-6">
            Past Exam Example: Interval Scheduling (2024)
          </h2>

          <div className="bg-slate-900/50 rounded-xl p-6 border border-slate-800 mb-6">
            <h3 className="text-lg font-semibold text-white mb-4">Problem:</h3>
            <p className="text-gray-400 mb-4">
              Given n intervals I = {"{"} I<Sub base="1" sub="" />, ..., I<Sub base="n" sub="" /> {"}"} where each interval I<Sub base="i" sub="" /> has:
            </p>
            <ul className="list-disc list-inside text-gray-400 mb-4 space-y-1">
              <li>Start time s(I<Sub base="i" sub="" />)</li>
              <li>Finish time f(I<Sub base="i" sub="" />)</li>
            </ul>
            <p className="text-gray-400 mb-4">
              Two intervals I<Sub base="i" sub="" /> and I<Sub base="j" sub="" /> are <strong>compatible</strong> if they don't overlap.
              Goal: Find a maximum-size subset of mutually compatible intervals.
            </p>

            <div className="border-t border-slate-700 pt-4">
              <p className="font-semibold text-gray-300 mb-2">Question 2a: State the greedy algorithm</p>
            </div>

            <ExamSolution score="3/3">
              <AlgorithmBlock title="Greedy Interval Scheduling">
{`1. Sort intervals by finish time: f(I_1) ≤ f(I_2) ≤ ... ≤ f(I_n)
2. S = ∅  // selected intervals
3. last_finish = -∞
4. for i = 1 to n:
5.     if s(I_i) ≥ last_finish:
6.         S = S ∪ {I_i}
7.         last_finish = f(I_i)
8. return S`}
              </AlgorithmBlock>
              
              <p className="text-sm text-gray-400 mt-3">
                <strong>Greedy choice:</strong> Always select the interval with the earliest finish time that doesn't conflict with already selected intervals.
              </p>
            </ExamSolution>

            <div className="mt-8 border-t border-slate-700 pt-4">
              <p className="font-semibold text-gray-300 mb-2">Question 2b: State and prove the Greedy Choice Lemma</p>
            </div>

            <ExamSolution score="7/7">
              <ProofBox title="Greedy Choice Lemma">
                <p><strong>Lemma:</strong> Let I be a set of intervals. Let I<Sub base="k" sub="" /> be the interval in I with the earliest finish time. 
                Then there exists an optimal solution that contains I<Sub base="k" sub="" />.</p>
              </ProofBox>

              <div className="mt-4">
                <p className="font-semibold text-white mb-2">Proof:</p>
                <ol className="space-y-3 list-decimal list-inside text-gray-300">
                  <li>Let OPT be any optimal solution.</li>
                  <li>If I<Sub base="k" sub="" /> <In /> OPT, we're done.</li>
                  <li>Otherwise, let I<Sub base="j" sub="" /> be the interval in OPT with the earliest finish time.</li>
                  <li>By definition of I<Sub base="k" sub="" />: f(I<Sub base="k" sub="" />) <Leq /> f(I<Sub base="j" sub="" />)</li>
                  <li>Consider OPT' = (OPT \ {"{"} I<Sub base="j" sub="" /> {"}"}) <MathSymbols.Union /> {"{"} I<Sub base="k" sub="" /> {"}"}</li>
                  <li>
                    <strong>Claim:</strong> OPT' is a valid solution.
                    <ul className="ml-4 mt-2 space-y-1 text-sm">
                      <li>• I<Sub base="k" sub="" /> doesn't conflict with any interval in OPT \ {"{"} I<Sub base="j" sub="" /> {"}"}</li>
                      <li>• Because f(I<Sub base="k" sub="" />) <Leq /> f(I<Sub base="j" sub="" />), and I<Sub base="j" sub="" /> didn't conflict with them</li>
                    </ul>
                  </li>
                  <li>|OPT'| = |OPT| <RightArrow /> OPT' is also optimal</li>
                  <li>OPT' contains I<Sub base="k" sub="" />. QED.</li>
                </ol>
              </div>
            </ExamSolution>
          </div>
        </div>
      </section>

      {/* Another Example: Fractional Knapsack */}
      <section className="px-6 py-12 border-t border-slate-800">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-2xl font-display font-bold text-white mb-6">
            Example: Fractional Knapsack (2023)
          </h2>

          <div className="bg-slate-900/50 rounded-xl p-6 border border-slate-800">
            <h3 className="text-lg font-semibold text-white mb-4">Problem:</h3>
            <p className="text-gray-400 mb-4">
              Given n items where item i has weight w<Sub base="i" sub="" /> and value v<Sub base="i" sub="" />.
              We have a knapsack of capacity W. We can take fractions of items.
              Goal: Maximize total value while respecting weight constraint.
            </p>

            <div className="bg-yellow-500/10 rounded-xl p-6 border border-yellow-500/30 my-6">
              <h4 className="font-semibold text-yellow-400 mb-2">Greedy Strategy</h4>
              <p className="text-gray-300">
                Sort items by value-to-weight ratio: v<Sub base="i" sub="" />/w<Sub base="i" sub="" /> in decreasing order.
                Take items in this order, taking as much as possible of each item.
              </p>
            </div>

            <ProofBox title="Key Insight for Proof">
              <p>If an optimal solution takes fraction x {"<"} 1 of the highest-ratio item,
              we can improve it by taking more of this item and less of lower-ratio items.</p>
              <p className="mt-2 text-sm">This exchange argument shows the greedy choice is safe.</p>
            </ProofBox>
          </div>
        </div>
      </section>

      {/* Common Proof Techniques */}
      <section className="px-6 py-12 border-t border-slate-800">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-2xl font-display font-bold text-white mb-6">
            Common Proof Techniques
          </h2>

          <div className="grid md:grid-cols-2 gap-6">
            <div className="bg-blue-500/10 rounded-xl p-6 border border-blue-500/30">
              <h3 className="font-semibold text-blue-400 mb-3">Exchange Argument</h3>
              <ol className="space-y-2 text-sm text-gray-300">
                <li>1. Take any optimal solution OPT</li>
                <li>2. If it contains greedy choice, done</li>
                <li>3. Otherwise, exchange to include greedy choice</li>
                <li>4. Show the exchange doesn't decrease quality</li>
                <li>5. Conclude greedy choice is safe</li>
              </ol>
            </div>

            <div className="bg-purple-500/10 rounded-xl p-6 border border-purple-500/30">
              <h3 className="font-semibold text-purple-400 mb-3">Staying Ahead</h3>
              <ol className="space-y-2 text-sm text-gray-300">
                <li>1. Show greedy is "ahead" at each step</li>
                <li>2. Define what "ahead" means precisely</li>
                <li>3. Prove by induction on steps</li>
                <li>4. Conclude greedy is optimal at end</li>
              </ol>
            </div>
          </div>

          <div className="mt-6 p-4 bg-green-500/10 rounded-lg border border-green-500/30">
            <div className="flex items-start gap-2">
              <CheckCircle className="w-5 h-5 text-green-400 flex-shrink-0 mt-0.5" />
              <div>
                <p className="text-sm text-green-300 font-semibold mb-1">
                  Exam Tip: Structure is Key
                </p>
                <p className="text-sm text-gray-300">
                  Always use numbered steps in your proof. State the lemma formally before proving it.
                  The structure often matters as much as the content for grading.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Key Tips */}
      <section className="px-6 py-12 border-t border-slate-800">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-2xl font-display font-bold text-white mb-6">
            How to Excel at Greedy Choice Problems
          </h2>

          <div className="space-y-6">
            <div className="bg-slate-900/50 rounded-xl p-6 border border-slate-800">
              <h3 className="font-semibold text-white mb-3">1. Identify the Greedy Choice</h3>
              <p className="text-gray-300 mb-2">Look for extremal properties:</p>
              <ul className="list-disc list-inside text-sm text-gray-400 space-y-1">
                <li>Earliest/latest finish time</li>
                <li>Highest/lowest ratio or density</li>
                <li>Shortest/longest duration</li>
                <li>Leftmost/rightmost position</li>
              </ul>
            </div>

            <div className="bg-slate-900/50 rounded-xl p-6 border border-slate-800">
              <h3 className="font-semibold text-white mb-3">2. State the Lemma Precisely</h3>
              <p className="text-gray-300">
                "<Exists /> an optimal solution that contains the greedy choice" 
                is different from "all optimal solutions contain the greedy choice"
              </p>
            </div>

            <div className="bg-slate-900/50 rounded-xl p-6 border border-slate-800">
              <h3 className="font-semibold text-white mb-3">3. Exchange Carefully</h3>
              <p className="text-gray-300">
                When exchanging elements, verify that:
              </p>
              <ul className="list-disc list-inside text-sm text-gray-400 space-y-1 mt-2">
                <li>The new solution is feasible</li>
                <li>The objective value doesn't decrease</li>
                <li>No constraints are violated</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Navigation */}
      <section className="px-6 py-12 border-t border-slate-800">
        <div className="max-w-4xl mx-auto flex justify-between">
          <Link
            href="/courses/algorithms-exam-prep/backtracking"
            className="flex items-center gap-2 text-gray-400 hover:text-purple-400 transition-colors"
          >
            <ArrowLeft className="w-4 h-4" />
            Previous: Backtracking
          </Link>
          <Link
            href="/courses/algorithms-exam-prep/dynamic-programming"
            className="flex items-center gap-2 text-purple-400 hover:text-purple-300 transition-colors"
          >
            Next: Dynamic Programming
            <ChevronRight className="w-4 h-4" />
          </Link>
        </div>
      </section>
    </PageWrapper>
  )
}
