import { motion } from 'framer-motion'
import { Code, ChevronRight, AlertCircle, CheckCircle, Lightbulb, ArrowLeft } from 'lucide-react'
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

const RecurrenceBox = ({ children }) => (
  <div className="bg-purple-500/10 border border-purple-500/30 rounded-xl p-6 my-4">
    <div className="font-semibold text-purple-400 mb-3">Recurrence Relation:</div>
    <div className="text-gray-200 font-mono text-sm space-y-2">{children}</div>
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
            <Badge variant="purple">Recursive Formulas</Badge>
            <Badge variant="blue">Algorithm Design</Badge>
            <Badge variant="error">Hard Difficulty</Badge>
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
              Dynamic programming questions require you to:
            </p>
            <ol className="space-y-3 list-decimal list-inside text-gray-300">
              <li><strong className="text-white">Define subproblems clearly</strong> - What does T[i], T[i,j], etc. represent?</li>
              <li><strong className="text-white">Write recursive formula</strong> - Base cases and recurrence relation</li>
              <li><strong className="text-white">Explain the recurrence</strong> - Brief reasoning why it works</li>
              <li><strong className="text-white">Provide pseudocode</strong> - Bottom-up implementation (if asked)</li>
            </ol>
            
            <div className="mt-6 p-4 bg-red-500/10 rounded-lg border border-red-500/30">
              <p className="text-sm text-red-300">
                <strong>Critical:</strong> The subproblem definition is the most important part. 
                If you get this wrong, everything else falls apart!
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Complete Example: Text Recognition */}
      <section className="px-6 py-12 border-t border-slate-800">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-2xl font-display font-bold text-white mb-6">
            Full Exam Solution: Text Recognition (2024)
          </h2>

          <div className="bg-slate-900/50 rounded-xl p-6 border border-slate-800">
            <h3 className="text-lg font-semibold text-white mb-4">Problem Description:</h3>
            <p className="text-gray-400 mb-3">
              Given a string X = x<Sub base="1" sub="" />x<Sub base="2" sub="" />...x<Sub base="n" sub="" /> with spaces removed.
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
              <strong>Subproblem:</strong> For 0 ≤ i ≤ n, let T[i] = maximum total score for splitting x<Sub base="1" sub="" />...x<Sub base="i" sub="" />
            </p>

            <div className="border-t border-slate-700 pt-4">
              <p className="font-semibold text-gray-300 mb-2">Question 3a: Give recursive formula for T[i]</p>
            </div>

            <ExamSolution score="7/7">
              <RecurrenceBox>
                <div><strong>Base case:</strong> T[0] = 0</div>
                <div className="text-gray-500 text-xs mt-1">(empty prefix has score 0)</div>
                
                <div className="mt-4"><strong>Recurrence:</strong> For i > 0:</div>
                <MathDisplay block>
                  T[i] = max<Sub base="" sub="1≤j≤i" /> { T[j-1] + score(x<Sub base="j" sub="" />x<Sub base="j+1" sub="" />...x<Sub base="i" sub="" />) }
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

            <div className="border-t border-slate-700 pt-4 mt-8">
              <p className="font-semibold text-gray-300 mb-2">Question 3b: Write pseudocode to print optimal split</p>
            </div>

            <ExamSolution score="3/3">
              <AlgorithmBlock title="PrintSolution(X[1...n], T[0...n], i)">
{`if i == 0:
    return  // nothing to print
    
// Find j such that T[i] came from T[j-1] + score(X[j...i])
for j = 1 to i:
    if T[j-1] + score(X, j, i) == T[i]:
        // Recursively print the prefix solution
        if j-1 > 0:
            PrintSolution(X, T, j-1)
            print(' ')  // space between words
        
        // Print current word
        print(X[j...i])
        return`}
              </AlgorithmBlock>

              <p className="text-sm text-gray-400 mt-3">
                <strong>Note:</strong> The algorithm finds the first j that gives the optimal value. 
                We print the prefix solution first, then a space (if not the first word), then the current word.
              </p>
            </ExamSolution>
          </div>
        </div>
      </section>

      {/* Complete Example: Activity Selection with Profits */}
      <section className="px-6 py-12 border-t border-slate-800">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-2xl font-display font-bold text-white mb-6">
            Full Exam Solution: Activity Selection with Profits (2024 Resit)
          </h2>

          <div className="bg-slate-900/50 rounded-xl p-6 border border-slate-800">
            <h3 className="text-lg font-semibold text-white mb-4">Problem Description:</h3>
            <p className="text-gray-400 mb-3">
              Given n activities a<Sub base="1" sub="" />,...,a<Sub base="n" sub="" /> sorted by finish time where:
            </p>
            <ul className="list-disc list-inside text-gray-400 mb-4 space-y-1">
              <li>s(a<Sub base="i" sub="" />): start time</li>
              <li>f(a<Sub base="i" sub="" />): finish time (f(a<Sub base="1" sub="" />) < ... < f(a<Sub base="n" sub="" />))</li>
              <li>p(a<Sub base="i" sub="" />): profit</li>
            </ul>
            <p className="text-gray-400 mb-4">
              Goal: Select non-overlapping activities to maximize total profit.
            </p>

            <p className="text-gray-400 mb-4">
              <strong>Subproblem:</strong> For 1 ≤ i ≤ n, let T[i] = maximum profit using activities from {a<Sub base="1" sub="" />,...,a<Sub base="i" sub="" />} 
              that <strong>must include</strong> a<Sub base="i" sub="" />.
            </p>

            <div className="border-t border-slate-700 pt-4">
              <p className="font-semibold text-gray-300 mb-2">Give recursive formula for T[i]</p>
            </div>

            <ExamSolution score="10/10">
              <p className="mb-3">First, define the helper set:</p>
              <MathDisplay block>
                endsBefore(a<Sub base="i" sub="" />) = {a<Sub base="j" sub="" /> ∈ A | f(a<Sub base="j" sub="" />) < s(a<Sub base="i" sub="" />)}
              </MathDisplay>
              <p className="text-sm text-gray-400 mb-4">(activities that finish before a<Sub base="i" sub="" /> starts)</p>

              <RecurrenceBox>
                <div><strong>Base case:</strong> If endsBefore(a<Sub base="i" sub="" />) = ∅:</div>
                <MathDisplay block>T[i] = p(a<Sub base="i" sub="" />)</MathDisplay>
                
                <div className="mt-4"><strong>Recurrence:</strong> If endsBefore(a<Sub base="i" sub="" />) ≠ ∅:</div>
                <MathDisplay block>
                  T[i] = p(a<Sub base="i" sub="" />) + max<Sub base="" sub="a_j ∈ endsBefore(a_i)" /> { T[j] }
                </MathDisplay>
              </RecurrenceBox>

              <div className="mt-4 p-4 bg-blue-500/10 rounded-lg border border-blue-500/30">
                <p className="text-sm text-blue-300">
                  <strong>Explanation:</strong> Since we must include a<Sub base="i" sub="" />, we get profit p(a<Sub base="i" sub="" />).
                  We can also include the best compatible predecessor a<Sub base="j" sub="" /> that ends before a<Sub base="i" sub="" /> starts.
                  If no activity can precede a<Sub base="i" sub="" />, then T[i] = p(a<Sub base="i" sub="" />).
                </p>
              </div>

              <div className="mt-4 p-4 bg-yellow-500/10 rounded-lg border border-yellow-500/30">
                <p className="text-sm text-yellow-300">
                  <strong>Final answer:</strong> max<Sub base="" sub="1≤i≤n" /> { T[i] }
                </p>
                <p className="text-xs text-gray-400 mt-1">
                  (The optimal solution ends with some activity, so we take the best)
                </p>
              </div>
            </ExamSolution>
          </div>
        </div>
      </section>

      {/* Common DP Patterns */}
      <section className="px-6 py-12 border-t border-slate-800">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-2xl font-display font-bold text-white mb-6">
            Common DP Patterns & Templates
          </h2>

          <div className="grid md:grid-cols-2 gap-6">
            {/* Linear DP */}
            <div className="bg-blue-500/10 rounded-xl p-6 border border-blue-500/30">
              <h3 className="font-semibold text-blue-400 mb-3">Linear DP (1D)</h3>
              <p className="text-sm text-gray-400 mb-3">Process elements in sequence</p>
              <div className="bg-slate-800/50 rounded p-3 font-mono text-xs">
                <p>T[0] = base_value</p>
                <p className="mt-2">T[i] = best of:</p>
                <p className="ml-4">- include a[i]: f(a[i]) + T[j]</p>
                <p className="ml-4">- exclude a[i]: T[i-1]</p>
              </div>
              <p className="text-xs text-gray-500 mt-2">Examples: LIS, coin change, knapsack</p>
            </div>

            {/* Interval DP */}
            <div className="bg-purple-500/10 rounded-xl p-6 border border-purple-500/30">
              <h3 className="font-semibold text-purple-400 mb-3">Interval DP (2D)</h3>
              <p className="text-sm text-gray-400 mb-3">Process subarrays [i,j]</p>
              <div className="bg-slate-800/50 rounded p-3 font-mono text-xs">
                <p>T[i,i] = base_value</p>
                <p className="mt-2">T[i,j] = best over k:</p>
                <p className="ml-4">T[i,k] + T[k+1,j] + merge_cost</p>
              </div>
              <p className="text-xs text-gray-500 mt-2">Examples: matrix chain, palindrome partition</p>
            </div>

            {/* String DP */}
            <div className="bg-green-500/10 rounded-xl p-6 border border-green-500/30">
              <h3 className="font-semibold text-green-400 mb-3">String DP</h3>
              <p className="text-sm text-gray-400 mb-3">Compare/match strings</p>
              <div className="bg-slate-800/50 rounded p-3 font-mono text-xs">
                <p>T[0,j] = T[i,0] = base</p>
                <p className="mt-2">T[i,j] = </p>
                <p className="ml-4">if match: 1 + T[i-1,j-1]</p>
                <p className="ml-4">else: max(T[i-1,j], T[i,j-1])</p>
              </div>
              <p className="text-xs text-gray-500 mt-2">Examples: LCS, edit distance, alignment</p>
            </div>

            {/* Knapsack DP */}
            <div className="bg-pink-500/10 rounded-xl p-6 border border-pink-500/30">
              <h3 className="font-semibold text-pink-400 mb-3">Knapsack-style</h3>
              <p className="text-sm text-gray-400 mb-3">Track capacity constraints</p>
              <div className="bg-slate-800/50 rounded p-3 font-mono text-xs">
                <p>T[0,w] = 0</p>
                <p className="mt-2">T[i,w] = max:</p>
                <p className="ml-4">- take: v[i] + T[i-1,w-w[i]]</p>
                <p className="ml-4">- skip: T[i-1,w]</p>
              </div>
              <p className="text-xs text-gray-500 mt-2">Examples: 0/1 knapsack, subset sum</p>
            </div>
          </div>
        </div>
      </section>

      {/* Key Success Tips */}
      <section className="px-6 py-12 border-t border-slate-800">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-2xl font-display font-bold text-white mb-6">
            How to Score Full Marks
          </h2>

          <div className="space-y-6">
            <div className="bg-green-500/10 rounded-xl p-6 border border-green-500/30">
              <h3 className="font-semibold text-green-400 mb-4">Step-by-Step Approach</h3>
              <ol className="space-y-3">
                <li className="flex items-start gap-3">
                  <span className="flex-shrink-0 w-6 h-6 bg-green-500/20 rounded-full flex items-center justify-center text-xs font-semibold text-green-400">1</span>
                  <div>
                    <p className="font-medium text-white">Define subproblems precisely</p>
                    <p className="text-sm text-gray-400">T[i] = "the optimal value for..."</p>
                  </div>
                </li>
                <li className="flex items-start gap-3">
                  <span className="flex-shrink-0 w-6 h-6 bg-green-500/20 rounded-full flex items-center justify-center text-xs font-semibold text-green-400">2</span>
                  <div>
                    <p className="font-medium text-white">Identify all choices</p>
                    <p className="text-sm text-gray-400">What decisions lead to T[i]?</p>
                  </div>
                </li>
                <li className="flex items-start gap-3">
                  <span className="flex-shrink-0 w-6 h-6 bg-green-500/20 rounded-full flex items-center justify-center text-xs font-semibold text-green-400">3</span>
                  <div>
                    <p className="font-medium text-white">Write base cases</p>
                    <p className="text-sm text-gray-400">Usually T[0] = 0 or similar</p>
                  </div>
                </li>
                <li className="flex items-start gap-3">
                  <span className="flex-shrink-0 w-6 h-6 bg-green-500/20 rounded-full flex items-center justify-center text-xs font-semibold text-green-400">4</span>
                  <div>
                    <p className="font-medium text-white">Express recurrence clearly</p>
                    <p className="text-sm text-gray-400">Use max/min over all valid choices</p>
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
