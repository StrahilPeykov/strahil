'use client'

import { motion } from 'framer-motion'
import { Code, ChevronRight, AlertCircle, CheckCircle, Lightbulb, ArrowLeft } from 'lucide-react'
import Link from 'next/link'
import { PageWrapper } from '../../../../components/layout/PageWrapper'
import { Badge } from '../../../../components/ui/Badge'
import { MathDisplay, MathSymbols, AlgorithmBlock } from '../../../../components/ui/MathDisplay'
import { ExamSolution, RecurrenceBox } from '../../../../components/ui/AlgorithmComponents'

const { Sub, Leq, In, EmptySet, Neq } = MathSymbols

export default function DynamicProgrammingPage() {
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
            <div className="w-12 h-12 bg-purple-500/10 rounded-lg flex items-center justify-center text-purple-400">
              <Code className="w-6 h-6" />
            </div>
            <div>
              <p className="text-sm text-gray-500">Exercise 3</p>
              <h1 className="text-3xl font-display font-bold text-white">Dynamic Programming</h1>
            </div>
          </div>

          <div className="flex flex-wrap gap-3">
            <Badge variant="purple">Algorithm Design</Badge>
            <Badge variant="blue">Recurrence Relations</Badge>
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
              Dynamic Programming questions typically ask you to:
            </p>
            <ol className="space-y-3 list-decimal list-inside text-gray-300">
              <li><strong className="text-white">Define subproblems</strong> - What does T[i] represent?</li>
              <li><strong className="text-white">Write recurrence relation</strong> - How to compute T[i] from smaller subproblems</li>
              <li><strong className="text-white">State base cases</strong> - When does the recursion stop?</li>
              <li><strong className="text-white">Explain the algorithm</strong> - One sentence description</li>
            </ol>
          </div>
        </div>
      </section>

      {/* Complete Example 1: Activity Selection */}
      <section className="px-6 py-12 border-t border-slate-800">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-2xl font-display font-bold text-white mb-6">
            Past Exam Example: Weighted Activity Selection (2024)
          </h2>

          <div className="bg-slate-900/50 rounded-xl p-6 border border-slate-800 mb-6">
            <h3 className="text-lg font-semibold text-white mb-4">Problem:</h3>
            <p className="text-gray-400 mb-4">
              Given activities A = {"{"} a<Sub base="1" sub="" />, ..., a<Sub base="n" sub="" /> {"}"} where each activity a<Sub base="i" sub="" /> has:
            </p>
            <ul className="list-disc list-inside text-gray-400 mb-4 space-y-1">
              <li>Start time s(a<Sub base="i" sub="" />)</li>
              <li>Finish time f(a<Sub base="i" sub="" />)</li>
              <li>Profit p(a<Sub base="i" sub="" />)</li>
            </ul>
            <p className="text-gray-400 mb-4">
              Activities are sorted by finish time: f(a<Sub base="1" sub="" />) <Leq /> f(a<Sub base="2" sub="" />) <Leq /> ... <Leq /> f(a<Sub base="n" sub="" />)
            </p>

            <p className="text-gray-400 mb-4">
              <strong>Subproblem:</strong> For 1 <Leq /> i <Leq /> n, let T[i] = maximum profit using activities from {"{"}a<Sub base="1" sub="" />,...,a<Sub base="i" sub="" />{"}"} 
              that <strong>must include</strong> a<Sub base="i" sub="" />.
            </p>

            <div className="border-t border-slate-700 pt-4">
              <p className="font-semibold text-gray-300 mb-2">Give recursive formula for T[i]</p>
            </div>

            <ExamSolution score="10/10">
              <p className="mb-3">First, define the helper set:</p>
              <MathDisplay block>
                endsBefore(a<Sub base="i" sub="" />) = {"{"} a<Sub base="j" sub="" /> <In /> A | f(a<Sub base="j" sub="" />) {"<"} s(a<Sub base="i" sub="" />) {"}"}
              </MathDisplay>
              <p className="text-sm text-gray-400 mb-4">(activities that finish before a<Sub base="i" sub="" /> starts)</p>

              <RecurrenceBox>
                <div><strong>Base case:</strong> If endsBefore(a<Sub base="i" sub="" />) = <EmptySet />:</div>
                <MathDisplay block>T[i] = p(a<Sub base="i" sub="" />)</MathDisplay>
                
                <div className="mt-4"><strong>Recurrence:</strong> If endsBefore(a<Sub base="i" sub="" />) <Neq /> <EmptySet />:</div>
                <MathDisplay block>
                  T[i] = p(a<Sub base="i" sub="" />) + max<Sub base="" sub="a_j ∈ endsBefore(a_i)" /> {"{"} T[j] {"}"}
                </MathDisplay>
              </RecurrenceBox>

              <div className="mt-4 p-4 bg-blue-500/10 rounded-lg border border-blue-500/30">
                <p className="text-sm text-blue-300">
                  <strong>Explanation:</strong> Since we must include a<Sub base="i" sub="" />, we get profit p(a<Sub base="i" sub="" />).
                  We can also include the best compatible predecessor a<Sub base="j" sub="" /> that ends before a<Sub base="i" sub="" /> starts.
                  If no activity can precede a<Sub base="i" sub="" />, then T[i] = p(a<Sub base="i" sub="" />).
                </p>
              </div>
            </ExamSolution>
          </div>
        </div>
      </section>

      {/* Complete Example 2: Word Breaking */}
      <section className="px-6 py-12 border-t border-slate-800">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-2xl font-display font-bold text-white mb-6">
            Example: Optimal Word Breaking (2023 Resit)
          </h2>

          <div className="bg-slate-900/50 rounded-xl p-6 border border-slate-800 mb-6">
            <h3 className="text-lg font-semibold text-white mb-4">Problem:</h3>
            <p className="text-gray-400 mb-4">
              Given a string X = x<Sub base="1" sub="" />x<Sub base="2" sub="" />...x<Sub base="n" sub="" /> of n characters. 
              We have a function score(x<Sub base="i" sub="" />...x<Sub base="j" sub="" />) that returns the score of substring 
              x<Sub base="i" sub="" />...x<Sub base="j" sub="" /> as a potential word.
              Goal: Split X into words to maximize total score.
            </p>
            
            <div className="bg-slate-800/50 rounded-lg p-4 mb-4">
              <p className="text-sm text-gray-400">Example: "meetateight"</p>
              <p className="text-sm font-mono text-gray-300">
                score("meet") = 10, score("at") = 3, score("eight") = 2<br/>
                Split: "meet at eight" → total score = 15
              </p>
            </div>

            <p className="text-gray-400 mb-4">
              <strong>Subproblem:</strong> For 0 <Leq /> i <Leq /> n, let T[i] = maximum total score for splitting x<Sub base="1" sub="" />...x<Sub base="i" sub="" />
            </p>

            <div className="border-t border-slate-700 pt-4">
              <p className="font-semibold text-gray-300 mb-2">Question 3a: Give recursive formula for T[i]</p>
            </div>

            <ExamSolution score="7/7">
              <RecurrenceBox>
                <div><strong>Base case:</strong> T[0] = 0</div>
                <div className="text-gray-500 text-xs mt-1">(empty prefix has score 0)</div>
                
                <div className="mt-4"><strong>Recurrence:</strong> For i {">"} 0:</div>
                <MathDisplay block>
                  T[i] = max<Sub base="" sub="1≤j≤i" /> {"{"} T[j-1] + score(x<Sub base="j" sub="" />x<Sub base="j+1" sub="" />...x<Sub base="i" sub="" />) {"}"}
                </MathDisplay>
              </RecurrenceBox>

              <div className="mt-4 p-4 bg-blue-500/10 rounded-lg border border-blue-500/30">
                <p className="text-sm text-blue-300">
                  <strong>Explanation:</strong> To find the best split of x<Sub base="1" sub="" />...x<Sub base="i" sub="" />, 
                  we try every possible last word x<Sub base="j" sub="" />...x<Sub base="i" sub="" /> (for j = 1 to i).
                  The total score is the score of this last word plus the optimal score for the remaining prefix x<Sub base="1" sub="" />...x<Sub base="j-1" sub="" />.
                </p>
              </div>
            </ExamSolution>

            <div className="mt-8 border-t border-slate-700 pt-4">
              <p className="font-semibold text-gray-300 mb-2">Question 3b: Algorithm to find the maximum score</p>
            </div>

            <ExamSolution score="3/3">
              <AlgorithmBlock title="Word Breaking Algorithm">
{`T[0] = 0
for i = 1 to n:
    T[i] = -∞
    for j = 1 to i:
        T[i] = max(T[i], T[j-1] + score(X[j..i]))
        
return T[n]`}
              </AlgorithmBlock>
              
              <p className="text-sm text-gray-400 mt-2">
                <strong>Time complexity:</strong> O(n²) assuming score() runs in O(1)
              </p>
            </ExamSolution>
          </div>
        </div>
      </section>

      {/* Key Patterns */}
      <section className="px-6 py-12 border-t border-slate-800">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-2xl font-display font-bold text-white mb-6">
            Common DP Patterns
          </h2>

          <div className="grid md:grid-cols-2 gap-6">
            <div className="bg-blue-500/10 rounded-xl p-6 border border-blue-500/30">
              <h3 className="font-semibold text-blue-400 mb-3">Linear DP</h3>
              <p className="text-sm text-gray-300 mb-3">T[i] depends on T[j] for j {"<"} i</p>
              <ul className="space-y-2 text-sm text-gray-300">
                <li>• Longest increasing subsequence</li>
                <li>• Word breaking</li>
                <li>• Activity selection</li>
                <li>• Maximum subarray sum</li>
              </ul>
            </div>

            <div className="bg-purple-500/10 rounded-xl p-6 border border-purple-500/30">
              <h3 className="font-semibold text-purple-400 mb-3">2D DP</h3>
              <p className="text-sm text-gray-300 mb-3">T[i,j] depends on smaller subarrays</p>
              <ul className="space-y-2 text-sm text-gray-300">
                <li>• Edit distance</li>
                <li>• Matrix chain multiplication</li>
                <li>• Knapsack problem</li>
                <li>• Longest common subsequence</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Grading Rubric */}
      <section className="px-6 py-12 border-t border-slate-800">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-2xl font-display font-bold text-white mb-6">
            Grading Rubric
          </h2>

          <div className="grid md:grid-cols-2 gap-6">
            <div className="bg-green-500/10 rounded-xl p-6 border border-green-500/30">
              <h3 className="font-semibold text-green-400 mb-3">Point Breakdown</h3>
              <ol className="space-y-2 text-sm text-gray-300">
                <li className="flex items-start gap-3">
                  <span className="flex-shrink-0 w-6 h-6 bg-green-500/20 rounded-full flex items-center justify-center text-xs font-semibold text-green-400">1</span>
                  <div>
                    <p className="font-medium text-white">Define subproblem (2-3 pts)</p>
                    <p className="text-sm text-gray-400">Clear definition of T[i]</p>
                  </div>
                </li>
                <li className="flex items-start gap-3">
                  <span className="flex-shrink-0 w-6 h-6 bg-green-500/20 rounded-full flex items-center justify-center text-xs font-semibold text-green-400">2</span>
                  <div>
                    <p className="font-medium text-white">Base case (1-2 pts)</p>
                    <p className="text-sm text-gray-400">T[0] or smallest subproblem</p>
                  </div>
                </li>
                <li className="flex items-start gap-3">
                  <span className="flex-shrink-0 w-6 h-6 bg-green-500/20 rounded-full flex items-center justify-center text-xs font-semibold text-green-400">3</span>
                  <div>
                    <p className="font-medium text-white">Recurrence (3-4 pts)</p>
                    <p className="text-sm text-gray-400">Correct recursive formula</p>
                  </div>
                </li>
                <li className="flex items-start gap-3">
                  <span className="flex-shrink-0 w-6 h-6 bg-green-500/20 rounded-full flex items-center justify-center text-xs font-semibold text-green-400">4</span>
                  <div>
                    <p className="font-medium text-white">Algorithm (2 pts)</p>
                    <p className="text-sm text-gray-400">Implementation if asked</p>
                  </div>
                </li>
                <li className="flex items-start gap-3">
                  <span className="flex-shrink-0 w-6 h-6 bg-green-500/20 rounded-full flex items-center justify-center text-xs font-semibold text-green-400">5</span>
                  <div>
                    <p className="font-medium text-white">Explain in one sentence</p>
                    <p className="text-sm text-gray-400">"We try all possible..."</p>
                  </div>
                </li>
              </ol>
            </div>

            <div className="bg-red-500/10 rounded-xl p-6 border border-red-500/30">
              <h3 className="font-semibold text-red-400 mb-3">Common Mistakes</h3>
              <ul className="space-y-2 text-sm text-gray-300">
                <li>• <strong>Wrong subproblem:</strong> Missing information in state</li>
                <li>• <strong>Index errors:</strong> Off-by-one, accessing T[-1]</li>
                <li>• <strong>Missing cases:</strong> Forgetting "do nothing" option</li>
                <li>• <strong>No explanation:</strong> Just formula without reasoning</li>
                <li>• <strong>Wrong direction:</strong> max vs min confusion</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Navigation */}
      <section className="px-6 py-12 border-t border-slate-800">
        <div className="max-w-4xl mx-auto flex justify-between">
          <Link
            href="/courses/algorithms-exam-prep/greedy-choice"
            className="flex items-center gap-2 text-gray-400 hover:text-purple-400 transition-colors"
          >
            <ArrowLeft className="w-4 h-4" />
            Previous: Greedy Choice
          </Link>
          <Link
            href="/courses/algorithms-exam-prep/flow-algorithms"
            className="flex items-center gap-2 text-purple-400 hover:text-purple-300 transition-colors"
          >
            Next: Flow Algorithms
            <ChevronRight className="w-4 h-4" />
          </Link>
        </div>
      </section>
    </PageWrapper>
  )
}
