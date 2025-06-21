import { motion } from 'framer-motion'
import { Target, ChevronRight, AlertCircle, CheckCircle, Lightbulb, ArrowLeft } from 'lucide-react'
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

const LemmaBox = ({ children }) => (
  <div className="bg-purple-500/10 border border-purple-500/30 rounded-xl p-6 my-4">
    <div className="font-semibold text-purple-400 mb-2">Greedy Choice Lemma:</div>
    <div className="text-gray-200 font-mono text-sm">{children}</div>
  </div>
)

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
            <Badge variant="success">Optimization</Badge>
            <Badge variant="purple">No Proof Required</Badge>
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
            <div className="flex items-start gap-3 mb-4">
              <AlertCircle className="w-5 h-5 text-yellow-400 flex-shrink-0 mt-0.5" />
              <div>
                <p className="text-yellow-400 font-semibold mb-1">Important: NO PROOF REQUIRED</p>
                <p className="text-gray-400 text-sm">You only need to state the lemma formally. No need to prove it works!</p>
              </div>
            </div>
            
            <p className="text-gray-300 mb-4">
              The greedy choice lemma identifies which element can be chosen first in some optimal solution:
            </p>
            
            <div className="bg-slate-800/50 rounded-lg p-4 font-mono text-sm">
              <p className="text-purple-300">Let [element] be a [thing] such that [extremal property].</p>
              <p className="text-purple-300">Then there exists an optimal [solution type] in which [element] is [placed where].</p>
            </div>
          </div>
        </div>
      </section>

      {/* Complete Examples with Solutions */}
      <section className="px-6 py-12 border-t border-slate-800">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-2xl font-display font-bold text-white mb-6">
            Past Exam Examples with Full Solutions
          </h2>

          {/* Example 1: Biathlon */}
          <div className="mb-10">
            <h3 className="text-xl font-semibold text-white mb-4">
              Example 1: Biathlon Scheduling (2024 Resit)
            </h3>
            
            <div className="bg-slate-900/50 rounded-xl p-6 border border-slate-800">
              <h4 className="font-semibold text-gray-300 mb-3">Problem Description:</h4>
              <p className="text-gray-400 mb-3">
                A biathlon with swimming (5km) and running (10km). Only one person can swim at a time,
                but any number can run simultaneously. For each participant P<Sub base="i" sub="" />:
              </p>
              <ul className="list-disc list-inside text-gray-400 mb-4 space-y-1">
                <li>S<Sub base="i" sub="" />: swimming time</li>
                <li>R<Sub base="i" sub="" />: running time</li>
              </ul>
              <p className="text-gray-400 mb-4">
                Goal: Find starting order that minimizes total event duration.
              </p>
              
              <div className="border-t border-slate-700 pt-4">
                <p className="font-semibold text-gray-300 mb-2">State the greedy choice lemma:</p>
              </div>

              <ExamSolution score="10/10">
                <LemmaBox>
                  Let P<Sub base="i*" sub="" /> be a participant whose running time is maximum, 
                  so that R<Sub base="i*" sub="" /> ≥ R<Sub base="j" sub="" /> for all j ∈ {1,...,n}.
                  Then there exists an optimal schedule for the biathlon in which participant 
                  P<Sub base="i*" sub="" /> is the first to swim.
                </LemmaBox>
                
                <div className="mt-4 p-4 bg-blue-500/10 rounded-lg border border-blue-500/30">
                  <p className="text-sm text-blue-300">
                    <strong>Intuition:</strong> Put the slowest runner first so they start running earliest,
                    minimizing the time from when the last person starts running to event completion.
                  </p>
                </div>
              </ExamSolution>
            </div>
          </div>

          {/* Example 2: Number Merging */}
          <div className="mb-10">
            <h3 className="text-xl font-semibold text-white mb-4">
              Example 2: Number Merging (2024)
            </h3>
            
            <div className="bg-slate-900/50 rounded-xl p-6 border border-slate-800">
              <h4 className="font-semibold text-gray-300 mb-3">Problem Description:</h4>
              <p className="text-gray-400 mb-3">
                Given n positive integers x<Sub base="1" sub="" />,...,x<Sub base="n" sub="" />. 
                A merge removes two integers and replaces them with their sum. 
                Cost of merge = sum of the two values. After n-1 merges, minimize total cost.
              </p>
              
              <div className="bg-slate-800/50 rounded-lg p-4 mb-4">
                <p className="text-sm text-gray-400 mb-2">Example with (7,8,9,10):</p>
                <p className="text-sm font-mono text-gray-300">
                  Merge 7,8 → 15 (cost 15)<br/>
                  Merge 9,10 → 19 (cost 19)<br/>
                  Merge 15,19 → 34 (cost 34)<br/>
                  Total: 68 (optimal)
                </p>
              </div>
              
              <div className="border-t border-slate-700 pt-4">
                <p className="font-semibold text-gray-300 mb-2">State the greedy choice lemma:</p>
              </div>

              <ExamSolution score="10/10">
                <LemmaBox>
                  Let x<Sub base="i" sub="" />, x<Sub base="j" sub="" /> with i ≠ j be two integers 
                  in the list such that x<Sub base="i" sub="" /> + x<Sub base="j" sub="" /> is minimal
                  (i.e., as small as possible among all pairs).
                  Then there exists an optimal merge sequence that starts by merging 
                  x<Sub base="i" sub="" /> and x<Sub base="j" sub="" />.
                </LemmaBox>
                
                <div className="mt-4 p-4 bg-blue-500/10 rounded-lg border border-blue-500/30">
                  <p className="text-sm text-blue-300">
                    <strong>Pattern:</strong> This is the Huffman coding pattern - always merge the two smallest elements.
                  </p>
                </div>
              </ExamSolution>
            </div>
          </div>

          {/* Example 3: Minimum Maximum Lateness */}
          <div className="mb-10">
            <h3 className="text-xl font-semibold text-white mb-4">
              Example 3: Minimum Maximum Lateness (2023)
            </h3>
            
            <div className="bg-slate-900/50 rounded-xl p-6 border border-slate-800">
              <h4 className="font-semibold text-gray-300 mb-3">Problem Description:</h4>
              <p className="text-gray-400 mb-3">
                Schedule n tasks X<Sub base="1" sub="" />,...,X<Sub base="n" sub="" /> where:
              </p>
              <ul className="list-disc list-inside text-gray-400 mb-4 space-y-1">
                <li>t<Sub base="i" sub="" />: time to complete task i</li>
                <li>d<Sub base="i" sub="" />: deadline for task i</li>
                <li>L<Sub base="i" sub="" /> = max(0, C<Sub base="i" sub="" /> - d<Sub base="i" sub="" />) where C<Sub base="i" sub="" /> is completion time</li>
              </ul>
              <p className="text-gray-400 mb-4">
                Goal: Minimize max{L<Sub base="1" sub="" />,...,L<Sub base="n" sub="" />}
              </p>
              
              <div className="border-t border-slate-700 pt-4">
                <p className="font-semibold text-gray-300 mb-2">State the greedy choice lemma:</p>
              </div>

              <ExamSolution score="10/10">
                <LemmaBox>
                  Let X<Sub base="i*" sub="" /> be a task with the smallest deadline, 
                  so that d<Sub base="i*" sub="" /> ≤ d<Sub base="j" sub="" /> for all j ∈ {1,...,n}.
                  Then there exists an optimal schedule in which task X<Sub base="i*" sub="" /> 
                  is executed first.
                </LemmaBox>
                
                <div className="mt-4 p-4 bg-blue-500/10 rounded-lg border border-blue-500/30">
                  <p className="text-sm text-blue-300">
                    <strong>Strategy:</strong> Earliest Deadline First (EDF) - always schedule the task with the earliest deadline.
                  </p>
                </div>
              </ExamSolution>
            </div>
          </div>
        </div>
      </section>

      {/* Common Patterns */}
      <section className="px-6 py-12 border-t border-slate-800">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-2xl font-display font-bold text-white mb-6">
            Common Greedy Patterns to Recognize
          </h2>

          <div className="grid md:grid-cols-2 gap-6">
            <div className="bg-blue-500/10 rounded-lg p-6 border border-blue-500/30">
              <h3 className="font-semibold text-blue-400 mb-3">Scheduling Problems</h3>
              <ul className="space-y-2 text-sm text-gray-300">
                <li>• <strong>Minimize lateness:</strong> Choose earliest deadline</li>
                <li>• <strong>Minimize completion:</strong> Choose shortest job</li>
                <li>• <strong>Maximize value:</strong> Choose best value/time ratio</li>
                <li>• <strong>Minimize idle time:</strong> Choose longest task</li>
              </ul>
            </div>

            <div className="bg-purple-500/10 rounded-lg p-6 border border-purple-500/30">
              <h3 className="font-semibold text-purple-400 mb-3">Selection Problems</h3>
              <ul className="space-y-2 text-sm text-gray-300">
                <li>• <strong>Activity selection:</strong> Choose earliest finish time</li>
                <li>• <strong>Knapsack (fractional):</strong> Choose best value/weight</li>
                <li>• <strong>Coin change:</strong> Choose largest denomination</li>
                <li>• <strong>Interval covering:</strong> Choose rightmost point</li>
              </ul>
            </div>

            <div className="bg-green-500/10 rounded-lg p-6 border border-green-500/30">
              <h3 className="font-semibold text-green-400 mb-3">Matching Problems</h3>
              <ul className="space-y-2 text-sm text-gray-300">
                <li>• <strong>Minimize difference:</strong> Match largest with largest</li>
                <li>• <strong>Load balancing:</strong> Assign to least loaded</li>
                <li>• <strong>Pairing:</strong> Match extremes together</li>
                <li>• <strong>Assignment:</strong> Choose most constrained first</li>
              </ul>
            </div>

            <div className="bg-pink-500/10 rounded-lg p-6 border border-pink-500/30">
              <h3 className="font-semibold text-pink-400 mb-3">Construction Problems</h3>
              <ul className="space-y-2 text-sm text-gray-300">
                <li>• <strong>Huffman coding:</strong> Merge two smallest</li>
                <li>• <strong>MST (Kruskal):</strong> Choose minimum edge</li>
                <li>• <strong>MST (Prim):</strong> Choose minimum cut edge</li>
                <li>• <strong>Shortest path:</strong> Choose minimum distance</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Key Formulation Tips */}
      <section className="px-6 py-12 border-t border-slate-800">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-2xl font-display font-bold text-white mb-6">
            How to Write Perfect Lemmas
          </h2>

          <div className="space-y-6">
            <div className="bg-slate-900/50 rounded-xl p-6 border border-slate-800">
              <h3 className="text-lg font-semibold text-white mb-4">Checklist for Full Marks:</h3>
              
              <div className="space-y-4">
                <div className="flex items-start gap-3">
                  <CheckCircle className="w-5 h-5 text-green-400 flex-shrink-0 mt-0.5" />
                  <div>
                    <p className="font-medium text-white">1. Identify the element</p>
                    <p className="text-sm text-gray-400">
                      "Let x<Sub base="i*" sub="" /> be a/an [element type]..."
                    </p>
                  </div>
                </div>
                
                <div className="flex items-start gap-3">
                  <CheckCircle className="w-5 h-5 text-green-400 flex-shrink-0 mt-0.5" />
                  <div>
                    <p className="font-medium text-white">2. State the extremal property</p>
                    <p className="text-sm text-gray-400">
                      "...such that [property] ≥/≤ [property] for all other elements"
                    </p>
                  </div>
                </div>
                
                <div className="flex items-start gap-3">
                  <CheckCircle className="w-5 h-5 text-green-400 flex-shrink-0 mt-0.5" />
                  <div>
                    <p className="font-medium text-white">3. Claim existence (not uniqueness)</p>
                    <p className="text-sm text-gray-400">
                      "Then there exists an optimal solution..." (not "the" optimal)
                    </p>
                  </div>
                </div>
                
                <div className="flex items-start gap-3">
                  <CheckCircle className="w-5 h-5 text-green-400 flex-shrink-0 mt-0.5" />
                  <div>
                    <p className="font-medium text-white">4. Specify the placement</p>
                    <p className="text-sm text-gray-400">
                      "...in which [element] is [scheduled first/chosen/assigned to...]"
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-yellow-500/10 rounded-xl p-6 border border-yellow-500/30">
              <div className="flex items-start gap-3">
                <Lightbulb className="w-5 h-5 text-yellow-400 flex-shrink-0 mt-0.5" />
                <div>
                  <p className="text-yellow-400 font-semibold mb-2">Common Mistakes to Avoid</p>
                  <ul className="space-y-1 text-sm text-gray-300">
                    <li>• Using "the optimal solution" instead of "an optimal solution"</li>
                    <li>• Being vague about ties: use "a task" not "the task" if multiple could be minimal</li>
                    <li>• Describing the algorithm instead of the choice</li>
                    <li>• Forgetting to specify where the element goes</li>
                  </ul>
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
