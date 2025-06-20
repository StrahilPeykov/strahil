'use client'

import { motion } from 'framer-motion'
import { Brain, ChevronRight, AlertCircle, CheckCircle, Code, FileText, ArrowLeft } from 'lucide-react'
import Link from 'next/link'
import { PageWrapper } from '../../../../components/layout/PageWrapper'
import { Badge } from '../../../../components/ui/Badge'
import { CodeBlock } from '../../../../components/ui/CodeBlock'

const examples = [
  {
    year: '2024 Resit',
    title: 'N-Queens Problem Variation',
    description: 'Determine correct output values for placing queens on a chessboard'
  },
  {
    year: '2024',
    title: 'Subset Sum with Constraints',
    description: 'Mathematical statement for subset generation algorithm'
  },
  {
    year: '2023 Resit',
    title: 'Graph Coloring',
    description: 'Analyze backtracking algorithm for vertex coloring'
  },
  {
    year: '2023',
    title: 'Permutation Generation',
    description: 'Write preconditions and postconditions'
  },
  {
    year: '2022',
    title: 'Hamiltonian Path',
    description: 'Mathematical statement for path existence'
  }
]

export default function BacktrackingPage() {
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
            <div className="w-12 h-12 bg-blue-500/10 rounded-lg flex items-center justify-center text-blue-400">
              <Brain className="w-6 h-6" />
            </div>
            <div>
              <p className="text-sm text-gray-500">Exercise 1</p>
              <h1 className="text-3xl font-display font-bold text-white">Backtracking</h1>
            </div>
          </div>

          <div className="flex flex-wrap gap-3">
            <Badge variant="blue">Algorithm Analysis</Badge>
            <Badge variant="purple">Mathematical Statements</Badge>
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
              In the exam, backtracking questions typically ask you to:
            </p>
            <div className="space-y-3">
              <div className="flex items-start gap-3">
                <CheckCircle className="w-5 h-5 text-green-400 flex-shrink-0 mt-0.5" />
                <div>
                  <p className="text-white font-medium">Determine correct output values</p>
                  <p className="text-sm text-gray-400">Given an algorithm, what should it return for specific inputs?</p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <CheckCircle className="w-5 h-5 text-green-400 flex-shrink-0 mt-0.5" />
                <div>
                  <p className="text-white font-medium">Write mathematical statements</p>
                  <p className="text-sm text-gray-400">Formally describe what the algorithm computes in terms of its inputs</p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <CheckCircle className="w-5 h-5 text-green-400 flex-shrink-0 mt-0.5" />
                <div>
                  <p className="text-white font-medium">Identify preconditions</p>
                  <p className="text-sm text-gray-400">What conditions must hold for the input to be valid?</p>
                </div>
              </div>
            </div>
          </div>

          <div className="bg-yellow-500/10 rounded-xl p-6 border border-yellow-500/30">
            <div className="flex items-start gap-3">
              <AlertCircle className="w-5 h-5 text-yellow-400 flex-shrink-0 mt-0.5" />
              <div>
                <p className="text-yellow-400 font-semibold mb-2">Exam Tip</p>
                <p className="text-sm text-gray-300">
                  The mathematical statement should capture <strong>exactly</strong> what the algorithm computes. 
                  Think: "If someone calls this algorithm with input X, what do they observe as output Y? 
                  How does Y depend on X?"
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* General Pattern */}
      <section className="px-6 py-12 border-t border-slate-800">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-2xl font-display font-bold text-white mb-6">
            General Backtracking Pattern
          </h2>

          <div className="space-y-6">
            <div>
              <h3 className="text-lg font-semibold text-white mb-3">Algorithm Structure</h3>
              <CodeBlock language="python">
{`def backtrack(state, choices):
    if is_complete(state):
        if is_valid(state):
            record_solution(state)
        return
    
    for choice in choices:
        if is_promising(state, choice):
            make_choice(state, choice)
            backtrack(state, remaining_choices)
            undo_choice(state, choice)`}
              </CodeBlock>
            </div>

            <div>
              <h3 className="text-lg font-semibold text-white mb-3">Key Components</h3>
              <div className="grid md:grid-cols-2 gap-4">
                <div className="bg-slate-900/50 rounded-lg p-4 border border-slate-800">
                  <h4 className="font-medium text-purple-400 mb-2">State Space</h4>
                  <p className="text-sm text-gray-400">
                    The partial solution being constructed. Could be a list, set, or other structure.
                  </p>
                </div>
                <div className="bg-slate-900/50 rounded-lg p-4 border border-slate-800">
                  <h4 className="font-medium text-purple-400 mb-2">Choice Points</h4>
                  <p className="text-sm text-gray-400">
                    Decisions made at each step. Order matters for efficiency but not correctness.
                  </p>
                </div>
                <div className="bg-slate-900/50 rounded-lg p-4 border border-slate-800">
                  <h4 className="font-medium text-purple-400 mb-2">Pruning</h4>
                  <p className="text-sm text-gray-400">
                    Early termination when a partial solution cannot lead to a valid complete solution.
                  </p>
                </div>
                <div className="bg-slate-900/50 rounded-lg p-4 border border-slate-800">
                  <h4 className="font-medium text-purple-400 mb-2">Solution Recording</h4>
                  <p className="text-sm text-gray-400">
                    How complete solutions are stored - could be counting, collecting, or finding optimal.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Mathematical Statements */}
      <section className="px-6 py-12 border-t border-slate-800">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-2xl font-display font-bold text-white mb-6">
            Writing Mathematical Statements
          </h2>

          <div className="space-y-6">
            <div className="bg-slate-900/50 rounded-xl p-6 border border-slate-800">
              <h3 className="text-lg font-semibold text-white mb-4">Template Structure</h3>
              <div className="space-y-4">
                <div>
                  <p className="text-sm text-gray-400 mb-2">For a counting algorithm:</p>
                  <CodeBlock language="text">
{`Let f(input) = the number of valid configurations that satisfy property P
where a configuration is valid if condition C holds.`}
                  </CodeBlock>
                </div>
                <div>
                  <p className="text-sm text-gray-400 mb-2">For a search algorithm:</p>
                  <CodeBlock language="text">
{`Let f(input) = { x ∈ S | P(x) holds }
where S is the search space and P is the property we're looking for.`}
                  </CodeBlock>
                </div>
                <div>
                  <p className="text-sm text-gray-400 mb-2">For an optimization algorithm:</p>
                  <CodeBlock language="text">
{`Let f(input) = arg max/min { g(x) | x ∈ S and C(x) holds }
where g is the objective function, S is the search space, and C is the constraint.`}
                  </CodeBlock>
                </div>
              </div>
            </div>

            <div className="bg-blue-500/10 rounded-xl p-6 border border-blue-500/30">
              <h3 className="text-lg font-semibold text-white mb-3">Example: N-Queens</h3>
              <p className="text-gray-300 mb-3">
                For an algorithm that counts valid N-queens placements:
              </p>
              <CodeBlock language="text">
{`Let countQueens(n) = |{ Q | Q is a valid placement of n queens on an n×n board }|
where a placement Q is valid if:
- Each row contains exactly one queen
- Each column contains exactly one queen  
- No two queens attack each other diagonally`}
              </CodeBlock>
            </div>
          </div>
        </div>
      </section>

      {/* Past Exam Examples */}
      <section className="px-6 py-12 border-t border-slate-800">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-2xl font-display font-bold text-white mb-6">
            Past Exam Examples
          </h2>

          <div className="space-y-4">
            {examples.map((example, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="bg-slate-900/50 rounded-lg p-4 border border-slate-800 hover:border-purple-500/30 transition-colors"
              >
                <div className="flex items-start justify-between">
                  <div>
                    <div className="flex items-center gap-3 mb-2">
                      <Badge variant="purple" size="sm">{example.year}</Badge>
                      <h3 className="font-semibold text-white">{example.title}</h3>
                    </div>
                    <p className="text-sm text-gray-400">{example.description}</p>
                  </div>
                  <ChevronRight className="w-5 h-5 text-gray-600 flex-shrink-0 mt-1" />
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Practice Strategy */}
      <section className="px-6 py-12 border-t border-slate-800">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-2xl font-display font-bold text-white mb-6">
            Exam Strategy
          </h2>

          <div className="grid md:grid-cols-2 gap-6">
            <div className="bg-green-500/10 rounded-xl p-6 border border-green-500/30">
              <h3 className="font-semibold text-green-400 mb-3">Do This ✓</h3>
              <ul className="space-y-2 text-sm text-gray-300">
                <li>• Start by tracing through the algorithm with a small example</li>
                <li>• Identify what the algorithm counts/finds/optimizes</li>
                <li>• Write the mathematical statement in set notation when possible</li>
                <li>• Check your statement against the example you traced</li>
                <li>• State preconditions clearly (e.g., "for all n ≥ 1")</li>
              </ul>
            </div>

            <div className="bg-red-500/10 rounded-xl p-6 border border-red-500/30">
              <h3 className="font-semibold text-red-400 mb-3">Avoid This ✗</h3>
              <ul className="space-y-2 text-sm text-gray-300">
                <li>• Don't describe HOW the algorithm works in the statement</li>
                <li>• Don't include implementation details</li>
                <li>• Don't forget edge cases in preconditions</li>
                <li>• Don't make the statement more complex than needed</li>
                <li>• Don't skip the mathematical notation - it's expected</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Navigation */}
      <section className="px-6 py-12 border-t border-slate-800">
        <div className="max-w-4xl mx-auto flex justify-between">
          <Link
            href="/courses/algorithms-exam-prep"
            className="flex items-center gap-2 text-gray-400 hover:text-purple-400 transition-colors"
          >
            <ArrowLeft className="w-4 h-4" />
            Back to overview
          </Link>
          <Link
            href="/courses/algorithms-exam-prep/greedy-choice"
            className="flex items-center gap-2 text-purple-400 hover:text-purple-300 transition-colors"
          >
            Next: Greedy Choice
            <ChevronRight className="w-4 h-4" />
          </Link>
        </div>
      </section>
    </PageWrapper>
  )
}