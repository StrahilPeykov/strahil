'use client'

import { motion } from 'framer-motion'
import { Code, ChevronRight, AlertCircle, CheckCircle, Lightbulb, ArrowLeft, FileText } from 'lucide-react'
import Link from 'next/link'
import { PageWrapper } from '../../../../components/layout/PageWrapper'
import { Badge } from '../../../../components/ui/Badge'
import { CodeBlock } from '../../../../components/ui/CodeBlock'

const examples = [
  {
    year: '2024 Resit',
    problem: 'Activity Selection with Profits',
    description: 'Select non-overlapping activities to maximize total profit',
    subproblem: 'T[i] = maximum profit using first i activities, must include activity i',
    recurrence: 'T[i] = p(a_i) + max{T[j] | a_j ∈ endsBefore(a_i)}',
    keyInsight: 'Include current activity and find best compatible predecessor'
  },
  {
    year: '2024',
    problem: 'Text Recognition',
    description: 'Split string into words to maximize total score',
    subproblem: 'T[i] = maximum score for splitting first i characters',
    recurrence: 'T[i] = max{T[j-1] + score(x_j...x_i) | 1 ≤ j ≤ i}',
    keyInsight: 'Try all possible last words'
  },
  {
    year: '2023 Resit',
    problem: 'Tree Organization',
    description: 'Build binary tree minimizing cost based on subtree sums',
    subproblem: 'T[a,b] = minimum cost tree for elements x_a to x_b',
    recurrence: 'T[a,b] = min{T[a,k] + T[k+1,b] + (L-R)² | a ≤ k < b}',
    keyInsight: 'Try all split points for root'
  },
  {
    year: '2023',
    problem: 'Dividing the Loot',
    description: 'Split items into 3 equal-value sets',
    subproblem: 'T[i,x,y,z] = can we split first i items into sets with sums x,y,z?',
    recurrence: 'T[i,x,y,z] = T[i-1,x-p_i,y,z] ∨ T[i-1,x,y-p_i,z] ∨ T[i-1,x,y,z-p_i]',
    keyInsight: 'Item i goes to one of three thieves'
  },
  {
    year: '2022',
    problem: 'String Mixing',
    description: 'Check if string Z is a mix of strings X and Y',
    subproblem: 'T[i,j,k] = is z_1...z_k a mix of x_1...x_i and y_1...y_j?',
    recurrence: 'Multiple cases based on last character origin',
    keyInsight: 'Last character came from X or Y'
  }
]

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

      {/* Key Concepts */}
      <section className="px-6 py-12">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-2xl font-display font-bold text-white mb-6">
            What You Need to Master
          </h2>

          <div className="bg-slate-900/50 rounded-xl p-6 border border-slate-800 mb-8">
            <p className="text-gray-300 mb-4">
              Dynamic programming questions require you to:
            </p>
            <div className="space-y-3">
              <div className="flex items-start gap-3">
                <CheckCircle className="w-5 h-5 text-green-400 flex-shrink-0 mt-0.5" />
                <div>
                  <p className="text-white font-medium">Define subproblems clearly</p>
                  <p className="text-sm text-gray-400">What does T[i], T[i,j], or T[...] represent?</p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <CheckCircle className="w-5 h-5 text-green-400 flex-shrink-0 mt-0.5" />
                <div>
                  <p className="text-white font-medium">Write recursive formulas</p>
                  <p className="text-sm text-gray-400">Base cases and step cases with clear conditions</p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <CheckCircle className="w-5 h-5 text-green-400 flex-shrink-0 mt-0.5" />
                <div>
                  <p className="text-white font-medium">Provide pseudocode</p>
                  <p className="text-sm text-gray-400">Bottom-up implementation with proper initialization</p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <CheckCircle className="w-5 h-5 text-green-400 flex-shrink-0 mt-0.5" />
                <div>
                  <p className="text-white font-medium">Explain your approach</p>
                  <p className="text-sm text-gray-400">Brief reasoning for the recurrence relation</p>
                </div>
              </div>
            </div>
          </div>

          <div className="bg-purple-500/10 rounded-xl p-6 border border-purple-500/30">
            <div className="flex items-start gap-3">
              <AlertCircle className="w-5 h-5 text-purple-400 flex-shrink-0 mt-0.5" />
              <div>
                <p className="text-purple-400 font-semibold mb-2">Critical Point</p>
                <p className="text-sm text-gray-300">
                  The subproblem definition is THE MOST IMPORTANT part. If you get this wrong, 
                  everything else falls apart. Spend time understanding what information you need 
                  to track.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* DP Framework */}
      <section className="px-6 py-12 border-t border-slate-800">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-2xl font-display font-bold text-white mb-6">
            Dynamic Programming Framework
          </h2>

          <div className="space-y-6">
            <div className="bg-slate-900/50 rounded-xl p-6 border border-slate-800">
              <h3 className="text-lg font-semibold text-white mb-4">1. Define Subproblems</h3>
              <div className="space-y-3">
                <p className="text-gray-300">Common patterns:</p>
                <ul className="space-y-2 text-sm text-gray-400">
                  <li>• <strong>Prefix:</strong> T[i] = solution for first i elements</li>
                  <li>• <strong>Substring:</strong> T[i,j] = solution for elements i to j</li>
                  <li>• <strong>With constraints:</strong> T[i,k] = solution for first i elements with constraint k</li>
                  <li>• <strong>Multi-dimensional:</strong> T[i,j,k,...] = complex state tracking</li>
                </ul>
              </div>
            </div>

            <div className="bg-slate-900/50 rounded-xl p-6 border border-slate-800">
              <h3 className="text-lg font-semibold text-white mb-4">2. Write Recurrence</h3>
              <CodeBlock language="text">
{`Base case: T[0] = ... (or T[0,0] = ..., etc.)

Step case: T[i] = optimum over all valid choices {
    value from choice + T[smaller subproblem]
}`}
              </CodeBlock>
              <p className="text-sm text-gray-400 mt-3">
                The recurrence should express how to build solution for size i from smaller subproblems.
              </p>
            </div>

            <div className="bg-slate-900/50 rounded-xl p-6 border border-slate-800">
              <h3 className="text-lg font-semibold text-white mb-4">3. Implementation Pattern</h3>
              <CodeBlock language="python">
{`def solve_dp(input):
    # Initialize DP table
    T = create_table(dimensions)
    
    # Base cases
    T[0] = base_value
    
    # Fill table bottom-up
    for i in range(1, n+1):
        T[i] = compute_from_recurrence(T, i)
    
    # Return answer
    return T[n]  # or reconstruct solution`}
              </CodeBlock>
            </div>
          </div>
        </div>
      </section>

      {/* Common Patterns */}
      <section className="px-6 py-12 border-t border-slate-800">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-2xl font-display font-bold text-white mb-6">
            Common DP Patterns
          </h2>

          <div className="grid md:grid-cols-2 gap-6">
            <div className="bg-blue-500/10 rounded-xl p-6 border border-blue-500/30">
              <h3 className="font-semibold text-blue-400 mb-3">Linear DP</h3>
              <p className="text-sm text-gray-300 mb-3">Process elements in sequence</p>
              <CodeBlock language="text">
{`T[i] = best solution for a[1...i]
T[i] = max/min {
    include a[i]: f(a[i]) + T[j]
    exclude a[i]: T[i-1]
}`}
              </CodeBlock>
            </div>

            <div className="bg-purple-500/10 rounded-xl p-6 border border-purple-500/30">
              <h3 className="font-semibold text-purple-400 mb-3">Interval DP</h3>
              <p className="text-sm text-gray-300 mb-3">Process subarrays/substrings</p>
              <CodeBlock language="text">
{`T[i,j] = best for a[i...j]
T[i,j] = max/min {
    split at k: T[i,k] + T[k+1,j] + cost
}`}
              </CodeBlock>
            </div>

            <div className="bg-green-500/10 rounded-xl p-6 border border-green-500/30">
              <h3 className="font-semibold text-green-400 mb-3">Knapsack-style</h3>
              <p className="text-sm text-gray-300 mb-3">Track capacity/sum constraints</p>
              <CodeBlock language="text">
{`T[i,w] = best using items 1...i, capacity w
T[i,w] = max {
    take item i: v[i] + T[i-1,w-w[i]]
    skip item i: T[i-1,w]
}`}
              </CodeBlock>
            </div>

            <div className="bg-pink-500/10 rounded-xl p-6 border border-pink-500/30">
              <h3 className="font-semibold text-pink-400 mb-3">Boolean DP</h3>
              <p className="text-sm text-gray-300 mb-3">Check if something is possible</p>
              <CodeBlock language="text">
{`T[i,j,k] = can we achieve state (j,k) using first i items?
T[i,j,k] = T[i-1,j-x,k] OR 
           T[i-1,j,k-x] OR ...`}
              </CodeBlock>
            </div>
          </div>
        </div>
      </section>

      {/* Detailed Examples */}
      <section className="px-6 py-12 border-t border-slate-800">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-2xl font-display font-bold text-white mb-6">
            Past Exam Examples Explained
          </h2>

          <div className="space-y-8">
            {examples.map((example, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="bg-slate-900/50 rounded-xl p-6 border border-slate-800"
              >
                <div className="mb-4">
                  <Badge variant="purple" size="sm" className="mb-2">{example.year}</Badge>
                  <h3 className="text-xl font-semibold text-white">{example.problem}</h3>
                  <p className="text-gray-400 mt-1">{example.description}</p>
                </div>
                
                <div className="space-y-4">
                  <div className="bg-slate-800/50 rounded-lg p-4">
                    <p className="text-sm font-semibold text-purple-400 mb-1">Subproblem Definition:</p>
                    <p className="text-sm font-mono text-gray-300">{example.subproblem}</p>
                  </div>
                  
                  <div className="bg-slate-800/50 rounded-lg p-4">
                    <p className="text-sm font-semibold text-blue-400 mb-1">Recurrence:</p>
                    <p className="text-sm font-mono text-gray-300">{example.recurrence}</p>
                  </div>
                  
                  <div className="flex items-start gap-2">
                    <Lightbulb className="w-4 h-4 text-yellow-400 flex-shrink-0 mt-0.5" />
                    <p className="text-sm text-gray-400">
                      <span className="text-yellow-400 font-medium">Key insight:</span> {example.keyInsight}
                    </p>
                  </div>
                </div>
              </motion.div>
            ))}
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
              <h3 className="font-semibold text-red-400 mb-3">Wrong Subproblem ✗</h3>
              <ul className="space-y-2 text-sm text-gray-300">
                <li>• Missing necessary information in state</li>
                <li>• Subproblem doesn't decompose properly</li>
                <li>• Can't reconstruct solution from table</li>
                <li>• Ambiguous definition</li>
              </ul>
              <p className="text-xs text-gray-400 mt-3">
                Fix: Ask "what do I need to know to make the next decision?"
              </p>
            </div>

            <div className="bg-red-500/10 rounded-xl p-6 border border-red-500/30">
              <h3 className="font-semibold text-red-400 mb-3">Index Errors ✗</h3>
              <ul className="space-y-2 text-sm text-gray-300">
                <li>• Off-by-one in recurrence</li>
                <li>• Accessing negative indices</li>
                <li>• Wrong loop bounds</li>
                <li>• Forgetting base cases</li>
              </ul>
              <p className="text-xs text-gray-400 mt-3">
                Fix: Trace through small example by hand
              </p>
            </div>

            <div className="bg-red-500/10 rounded-xl p-6 border border-red-500/30">
              <h3 className="font-semibold text-red-400 mb-3">Incomplete Cases ✗</h3>
              <ul className="space-y-2 text-sm text-gray-300">
                <li>• Missing some choices in max/min</li>
                <li>• Forgetting "do nothing" option</li>
                <li>• Not handling all transitions</li>
                <li>• Wrong optimization direction</li>
              </ul>
              <p className="text-xs text-gray-400 mt-3">
                Fix: List all possible decisions explicitly
              </p>
            </div>

            <div className="bg-red-500/10 rounded-xl p-6 border border-red-500/30">
              <h3 className="font-semibold text-red-400 mb-3">No Explanation ✗</h3>
              <ul className="space-y-2 text-sm text-gray-300">
                <li>• Formula without reasoning</li>
                <li>• No intuition provided</li>
                <li>• Missing what optimum means</li>
                <li>• Unclear variable meanings</li>
              </ul>
              <p className="text-xs text-gray-400 mt-3">
                Fix: One sentence explaining the logic
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Step-by-Step Strategy */}
      <section className="px-6 py-12 border-t border-slate-800">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-2xl font-display font-bold text-white mb-6">
            Step-by-Step Exam Strategy
          </h2>

          <div className="bg-gradient-to-br from-purple-500/10 to-blue-500/10 rounded-xl p-8 border border-purple-500/20">
            <ol className="space-y-4">
              <li className="flex items-start gap-3">
                <span className="flex-shrink-0 w-8 h-8 bg-purple-500/20 rounded-full flex items-center justify-center text-sm font-semibold text-purple-400">1</span>
                <div>
                  <p className="font-medium text-white">Understand the problem</p>
                  <p className="text-sm text-gray-400">What are we optimizing? What are the constraints?</p>
                </div>
              </li>
              <li className="flex items-start gap-3">
                <span className="flex-shrink-0 w-8 h-8 bg-purple-500/20 rounded-full flex items-center justify-center text-sm font-semibold text-purple-400">2</span>
                <div>
                  <p className="font-medium text-white">Identify subproblems</p>
                  <p className="text-sm text-gray-400">What smaller problems help solve the big one?</p>
                </div>
              </li>
              <li className="flex items-start gap-3">
                <span className="flex-shrink-0 w-8 h-8 bg-purple-500/20 rounded-full flex items-center justify-center text-sm font-semibold text-purple-400">3</span>
                <div>
                  <p className="font-medium text-white">Define T[...] precisely</p>
                  <p className="text-sm text-gray-400">What exactly does each entry represent?</p>
                </div>
              </li>
              <li className="flex items-start gap-3">
                <span className="flex-shrink-0 w-8 h-8 bg-purple-500/20 rounded-full flex items-center justify-center text-sm font-semibold text-purple-400">4</span>
                <div>
                  <p className="font-medium text-white">Write base cases</p>
                  <p className="text-sm text-gray-400">What are the smallest/simplest subproblems?</p>
                </div>
              </li>
              <li className="flex items-start gap-3">
                <span className="flex-shrink-0 w-8 h-8 bg-purple-500/20 rounded-full flex items-center justify-center text-sm font-semibold text-purple-400">5</span>
                <div>
                  <p className="font-medium text-white">Derive recurrence</p>
                  <p className="text-sm text-gray-400">How do we combine smaller solutions?</p>
                </div>
              </li>
              <li className="flex items-start gap-3">
                <span className="flex-shrink-0 w-8 h-8 bg-purple-500/20 rounded-full flex items-center justify-center text-sm font-semibold text-purple-400">6</span>
                <div>
                  <p className="font-medium text-white">Verify on example</p>
                  <p className="text-sm text-gray-400">Trace through a small instance</p>
                </div>
              </li>
              <li className="flex items-start gap-3">
                <span className="flex-shrink-0 w-8 h-8 bg-purple-500/20 rounded-full flex items-center justify-center text-sm font-semibold text-purple-400">7</span>
                <div>
                  <p className="font-medium text-white">Write pseudocode</p>
                  <p className="text-sm text-gray-400">Bottom-up implementation with clear loops</p>
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