'use client'

import { motion } from 'framer-motion'
import { Target, ChevronRight, AlertCircle, CheckCircle, Lightbulb, ArrowLeft } from 'lucide-react'
import Link from 'next/link'
import { PageWrapper } from '../../../../components/layout/PageWrapper'
import { Badge } from '../../../../components/ui/Badge'
import { CodeBlock } from '../../../../components/ui/CodeBlock'

const examples = [
  {
    year: '2024 Resit',
    problem: 'Biathlon',
    description: 'Minimize total event duration with swimming and running constraints',
    lemma: 'Let P_i* be a participant whose running time is maximum. Then there is an optimal schedule in which P_i* swims first.',
    insight: 'Put slowest runner first so they start running earliest'
  },
  {
    year: '2024',
    problem: 'Number Merging',
    description: 'Merge numbers to minimize total cost where cost = sum of merged values',
    lemma: 'Let x_i, x_j be two integers such that x_i + x_j is minimal. Then there is an optimal merge sequence starting with merging x_i and x_j.',
    insight: 'Always merge the two smallest numbers first'
  },
  {
    year: '2023 Resit',
    problem: 'Assigning Oars to Rowers',
    description: 'Assign oars to minimize total difference from preferences',
    lemma: 'Let R_i* prefer the longest oar and O_j* be the longest oar. Then there is an optimal assignment where R_i* gets O_j*.',
    insight: 'Match longest preference with longest oar'
  },
  {
    year: '2023',
    problem: 'Minimum Maximum Lateness',
    description: 'Schedule tasks to minimize the maximum deadline violation',
    lemma: 'Let X_i* be a task with the smallest deadline. Then there is an optimal schedule in which X_i* is executed first.',
    insight: 'Earliest deadline first (EDF) strategy'
  },
  {
    year: '2022',
    problem: 'Hiking Schedule',
    description: 'Maximize total rating of hikes with availability constraints',
    lemma: 'Let H_i* be a hike with maximum rating. Then there is an optimal schedule where H_i* is done on day d_i* (when it becomes available).',
    insight: 'Do highest-rated hikes as soon as possible'
  }
]

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

      {/* Key Concepts */}
      <section className="px-6 py-12">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-2xl font-display font-bold text-white mb-6">
            What You Need to Know
          </h2>

          <div className="bg-slate-900/50 rounded-xl p-6 border border-slate-800 mb-8">
            <p className="text-gray-300 mb-4">
              Greedy choice lemma questions require you to:
            </p>
            <div className="space-y-3">
              <div className="flex items-start gap-3">
                <CheckCircle className="w-5 h-5 text-green-400 flex-shrink-0 mt-0.5" />
                <div>
                  <p className="text-white font-medium">Identify an optimal first choice</p>
                  <p className="text-sm text-gray-400">Which element can always be chosen first in some optimal solution?</p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <CheckCircle className="w-5 h-5 text-green-400 flex-shrink-0 mt-0.5" />
                <div>
                  <p className="text-white font-medium">State the lemma mathematically</p>
                  <p className="text-sm text-gray-400">Formal statement: "Let ... Then there exists an optimal solution where ..."</p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <CheckCircle className="w-5 h-5 text-green-400 flex-shrink-0 mt-0.5" />
                <div>
                  <p className="text-white font-medium">NO PROOF REQUIRED</p>
                  <p className="text-sm text-gray-400">Just state the lemma correctly - no need to prove it works!</p>
                </div>
              </div>
            </div>
          </div>

          <div className="bg-green-500/10 rounded-xl p-6 border border-green-500/30">
            <div className="flex items-start gap-3">
              <Lightbulb className="w-5 h-5 text-green-400 flex-shrink-0 mt-0.5" />
              <div>
                <p className="text-green-400 font-semibold mb-2">Key Insight</p>
                <p className="text-sm text-gray-300">
                  The greedy choice is usually the "extreme" element in some sense: 
                  smallest, largest, earliest, latest, etc. Think about what property 
                  makes one choice "dominate" others.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Lemma Template */}
      <section className="px-6 py-12 border-t border-slate-800">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-2xl font-display font-bold text-white mb-6">
            Standard Lemma Format
          </h2>

          <div className="bg-slate-900/50 rounded-xl p-6 border border-slate-800">
            <h3 className="text-lg font-semibold text-white mb-4">Template</h3>
            <CodeBlock language="text">
{`Let [element] be a [thing] such that [property].
Then there exists an optimal [solution type] in which [element] is [placed/chosen/scheduled] [where/when].`}
            </CodeBlock>

            <div className="mt-6 space-y-4">
              <div>
                <h4 className="font-medium text-purple-400 mb-2">Part 1: Identify the element</h4>
                <p className="text-sm text-gray-400">
                  Describe which specific item/task/person you're selecting based on some extremal property.
                </p>
              </div>
              <div>
                <h4 className="font-medium text-purple-400 mb-2">Part 2: State the property</h4>
                <p className="text-sm text-gray-400">
                  What makes this element special? Usually it's maximum, minimum, earliest, etc.
                </p>
              </div>
              <div>
                <h4 className="font-medium text-purple-400 mb-2">Part 3: Claim existence</h4>
                <p className="text-sm text-gray-400">
                  "There exists an optimal solution" - not ALL optimal solutions, just at least one!
                </p>
              </div>
              <div>
                <h4 className="font-medium text-purple-400 mb-2">Part 4: Specify placement</h4>
                <p className="text-sm text-gray-400">
                  Where/when is this element placed in the optimal solution?
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Common Patterns */}
      <section className="px-6 py-12 border-t border-slate-800">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-2xl font-display font-bold text-white mb-6">
            Common Greedy Patterns
          </h2>

          <div className="grid md:grid-cols-2 gap-6">
            <div className="bg-blue-500/10 rounded-lg p-6 border border-blue-500/30">
              <h3 className="font-semibold text-blue-400 mb-3">Scheduling Problems</h3>
              <ul className="space-y-2 text-sm text-gray-300">
                <li>• <strong>Earliest deadline first:</strong> Minimize lateness</li>
                <li>• <strong>Shortest job first:</strong> Minimize average completion</li>
                <li>• <strong>Highest weight/deadline ratio:</strong> Maximize weighted completion</li>
              </ul>
            </div>

            <div className="bg-purple-500/10 rounded-lg p-6 border border-purple-500/30">
              <h3 className="font-semibold text-purple-400 mb-3">Selection Problems</h3>
              <ul className="space-y-2 text-sm text-gray-300">
                <li>• <strong>Maximum value:</strong> When no constraints conflict</li>
                <li>• <strong>Best ratio:</strong> Value per unit cost/weight</li>
                <li>• <strong>Earliest finishing:</strong> Activity selection</li>
              </ul>
            </div>

            <div className="bg-green-500/10 rounded-lg p-6 border border-green-500/30">
              <h3 className="font-semibold text-green-400 mb-3">Matching Problems</h3>
              <ul className="space-y-2 text-sm text-gray-300">
                <li>• <strong>Largest with largest:</strong> Often minimizes differences</li>
                <li>• <strong>Nearest neighbor:</strong> For distance minimization</li>
                <li>• <strong>Most constrained first:</strong> Avoid conflicts</li>
              </ul>
            </div>

            <div className="bg-pink-500/10 rounded-lg p-6 border border-pink-500/30">
              <h3 className="font-semibold text-pink-400 mb-3">Merging/Building</h3>
              <ul className="space-y-2 text-sm text-gray-300">
                <li>• <strong>Merge smallest:</strong> Huffman coding pattern</li>
                <li>• <strong>Add to smallest:</strong> Load balancing</li>
                <li>• <strong>Connect nearest:</strong> MST problems</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Detailed Examples */}
      <section className="px-6 py-12 border-t border-slate-800">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-2xl font-display font-bold text-white mb-6">
            Past Exam Examples Analyzed
          </h2>

          <div className="space-y-6">
            {examples.map((example, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="bg-slate-900/50 rounded-xl p-6 border border-slate-800"
              >
                <div className="flex items-start justify-between mb-4">
                  <div>
                    <Badge variant="purple" size="sm" className="mb-2">{example.year}</Badge>
                    <h3 className="text-xl font-semibold text-white">{example.problem}</h3>
                  </div>
                </div>
                
                <p className="text-gray-400 mb-4">{example.description}</p>
                
                <div className="bg-slate-800/50 rounded-lg p-4 mb-4">
                  <p className="text-sm font-mono text-gray-300">{example.lemma}</p>
                </div>
                
                <div className="flex items-start gap-2">
                  <Lightbulb className="w-4 h-4 text-yellow-400 flex-shrink-0 mt-0.5" />
                  <p className="text-sm text-gray-400">
                    <span className="text-yellow-400 font-medium">Insight:</span> {example.insight}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Tips and Warnings */}
      <section className="px-6 py-12 border-t border-slate-800">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-2xl font-display font-bold text-white mb-6">
            Exam Tips & Common Mistakes
          </h2>

          <div className="grid md:grid-cols-2 gap-6">
            <div className="space-y-4">
              <div className="bg-green-500/10 rounded-xl p-6 border border-green-500/30">
                <h3 className="font-semibold text-green-400 mb-3">Do This ✓</h3>
                <ul className="space-y-2 text-sm text-gray-300">
                  <li>• Think about extremal properties first</li>
                  <li>• Consider what you're optimizing (min/max)</li>
                  <li>• State "there exists" not "all"</li>
                  <li>• Be precise about ties (e.g., "a task" vs "the task")</li>
                  <li>• Keep the lemma simple and clear</li>
                </ul>
              </div>

              <div className="bg-yellow-500/10 rounded-xl p-6 border border-yellow-500/30">
                <h3 className="font-semibold text-yellow-400 mb-3">Watch Out ⚠️</h3>
                <ul className="space-y-2 text-sm text-gray-300">
                  <li>• The obvious choice isn't always right</li>
                  <li>• Sometimes you need to think backwards</li>
                  <li>• Consider if order matters (schedule vs selection)</li>
                  <li>• Check if your lemma handles edge cases</li>
                </ul>
              </div>
            </div>

            <div className="space-y-4">
              <div className="bg-red-500/10 rounded-xl p-6 border border-red-500/30">
                <h3 className="font-semibold text-red-400 mb-3">Avoid This ✗</h3>
                <ul className="space-y-2 text-sm text-gray-300">
                  <li>• Don't try to prove the lemma</li>
                  <li>• Don't describe the algorithm</li>
                  <li>• Don't say "the optimal solution" (use "an")</li>
                  <li>• Don't forget to specify the property clearly</li>
                  <li>• Don't make it more complex than needed</li>
                </ul>
              </div>

              <div className="bg-blue-500/10 rounded-xl p-6 border border-blue-500/30">
                <h3 className="font-semibold text-blue-400 mb-3">Quick Check ✓</h3>
                <p className="text-sm text-gray-300 mb-2">Your lemma should answer:</p>
                <ul className="space-y-1 text-sm text-gray-400">
                  <li>1. What element do we choose?</li>
                  <li>2. What property does it have?</li>
                  <li>3. Where does it go in the solution?</li>
                  <li>4. Is it clear and unambiguous?</li>
                </ul>
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