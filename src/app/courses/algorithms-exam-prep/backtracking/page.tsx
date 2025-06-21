'use client'

import { motion } from 'framer-motion'
import { Brain, ChevronRight, AlertCircle, CheckCircle, Lightbulb, ArrowLeft } from 'lucide-react'
import Link from 'next/link'
import { PageWrapper } from '../../../../components/layout/PageWrapper'
import { Badge } from '../../../../components/ui/Badge'
import { MathDisplay, MathSymbols, AlgorithmBlock } from '../../../../components/ui/MathDisplay'
import { ExamSolution } from '../../../../components/ui/AlgorithmComponents'

const { Sub, ForAll, In, Neq } = MathSymbols

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

      {/* Exam Format */}
      <section className="px-6 py-12">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-2xl font-display font-bold text-white mb-6">
            Exam Format & Expectations
          </h2>

          <div className="bg-slate-900/50 rounded-xl p-6 border border-slate-800">
            <p className="text-gray-300 mb-4">
              Backtracking questions typically give you an algorithm and ask you to:
            </p>
            <ol className="space-y-3 list-decimal list-inside text-gray-300">
              <li><strong className="text-white">Determine output values</strong> - What does the algorithm return for specific inputs?</li>
              <li><strong className="text-white">Write mathematical statement</strong> - Formally describe what the algorithm computes</li>
              <li><strong className="text-white">State preconditions</strong> - When is the input valid?</li>
            </ol>
            <div className="mt-6 p-4 bg-blue-500/10 rounded-lg border border-blue-500/30">
              <p className="text-sm text-blue-300">
                <strong>Key:</strong> The mathematical statement should be precise. Use set notation, 
                quantifiers (<ForAll />, <MathSymbols.Exists />), and formal definitions.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Complete Example with Solution */}
      <section className="px-6 py-12 border-t border-slate-800">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-2xl font-display font-bold text-white mb-6">
            Past Exam Example: N-Queens Counting (2024 Resit)
          </h2>

          <div className="bg-slate-900/50 rounded-xl p-6 border border-slate-800 mb-6">
            <h3 className="text-lg font-semibold text-white mb-4">Given Algorithm:</h3>
            
            <AlgorithmBlock title="countQueens(n, row, positions)">
{`if row = n:
    return 1
    
count = 0
for col in 0..n-1:
    if isSafe(positions, row, col):
        positions[row] = col
        count = count + countQueens(n, row + 1, positions)
        
return count`}
            </AlgorithmBlock>

            <div className="mt-6">
              <h4 className="font-semibold text-white mb-2">Question 1a: What is countQueens(4, 0, [])?</h4>
              <p className="text-gray-400">Determine the exact output value.</p>
            </div>

            <ExamSolution score="3/3 points">
              <p><strong>Answer:</strong> countQueens(4, 0, []) = <MathDisplay>2</MathDisplay></p>
              
              <p className="text-sm text-gray-400">
                <strong>Reasoning:</strong> For n=4, there are exactly 2 valid N-queens placements:
              </p>
              <div className="grid grid-cols-2 gap-4 my-3">
                <div className="bg-slate-800/50 rounded p-3 font-mono text-xs">
                  <div>Solution 1:</div>
                  <div>. Q . .</div>
                  <div>. . . Q</div>
                  <div>Q . . .</div>
                  <div>. . Q .</div>
                </div>
                <div className="bg-slate-800/50 rounded p-3 font-mono text-xs">
                  <div>Solution 2:</div>
                  <div>. . Q .</div>
                  <div>Q . . .</div>
                  <div>. . . Q</div>
                  <div>. Q . .</div>
                </div>
              </div>
            </ExamSolution>

            <div className="mt-8">
              <h4 className="font-semibold text-white mb-2">Question 1b: Mathematical Statement</h4>
              <p className="text-gray-400">Write a formal mathematical statement describing what countQueens(n, 0, []) computes.</p>
            </div>

            <ExamSolution score="7/7 points">
              <p><strong>Mathematical Statement:</strong></p>
              
              <MathDisplay block>
                {"Let countQueens(n, 0, []) = |{Q ∈ P"}<Sub base="n" sub="" />{" | Q is a valid n-queens placement}|"}
              </MathDisplay>
              
              <p>where:</p>
              <ul className="space-y-2 ml-4 text-sm">
                <li>• P<Sub base="n" sub="" /> = {"{"} permutations of (0,1,...,n-1) {"}"}</li>
                <li>• A placement Q = (q<Sub base="0" sub="" />, q<Sub base="1" sub="" />, ..., q<Sub base="n-1" sub="" />) is valid if:</li>
                <li className="ml-4">- q<Sub base="i" sub="" /> represents the column of the queen in row i</li>
                <li className="ml-4">- <ForAll />i,j <In /> {"{"}0,...,n-1{"}"}, i <Neq /> j: queens at (i,q<Sub base="i" sub="" />) and (j,q<Sub base="j" sub="" />) don't attack</li>
                <li className="ml-4">- No two queens share a diagonal: |i-j| <Neq /> |q<Sub base="i" sub="" />-q<Sub base="j" sub="" />|</li>
              </ul>
              
              <p className="mt-4 text-sm text-gray-400">
                <strong>Note:</strong> The algorithm counts the number of ways to place n non-attacking queens 
                on an n×n chessboard, where each row and column contains exactly one queen.
              </p>
            </ExamSolution>
          </div>
        </div>
      </section>

      {/* Another Example */}
      <section className="px-6 py-12 border-t border-slate-800">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-2xl font-display font-bold text-white mb-6">
            Pattern: Permutation Generation
          </h2>

          <div className="bg-yellow-500/10 rounded-xl p-6 border border-yellow-500/30">
            <h3 className="font-semibold text-yellow-400 mb-3">Common Pattern</h3>
            <p className="text-gray-300 mb-4">
              Many backtracking algorithms generate permutations. For a function generateAll(A):
            </p>
            <MathDisplay block>
              generateAll(A) = {"{"} all permutations of elements in A {"}"}
            </MathDisplay>
            <p className="text-sm text-gray-400 mt-3">
              Formally: generateAll(A) = {"{"} p : A → A | p is a bijection {"}"}
            </p>
          </div>

          <div className="mt-6 bg-slate-900/50 rounded-xl p-6 border border-slate-800">
            <h4 className="font-semibold text-white mb-2">Example: Permutation Counter</h4>
            <AlgorithmBlock>
{`function countPerms(A, used, k):
    if k = |A|:
        return 1
    count = 0
    for i in 0..|A|-1:
        if not used[i]:
            used[i] = true
            count += countPerms(A, used, k+1)
            used[i] = false
    return count`}
            </AlgorithmBlock>
            
            <div className="mt-4 p-4 bg-green-500/10 rounded-lg border border-green-500/30">
              <p className="text-sm text-green-400">
                <strong>Answer:</strong> countPerms(A, [false,...,false], 0) = |A|!
              </p>
              <p className="mt-2 text-sm text-gray-400">
                <strong>Answer:</strong> generateAll(A) computes all permutations of A
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Key Tips */}
      <section className="px-6 py-12 border-t border-slate-800">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-2xl font-display font-bold text-white mb-6">
            Exam Strategy & Tips
          </h2>

          <div className="grid md:grid-cols-2 gap-6">
            <div className="bg-green-500/10 rounded-xl p-6 border border-green-500/30">
              <h3 className="font-semibold text-green-400 mb-3">Do This ✓</h3>
              <ul className="space-y-2 text-sm text-gray-300">
                <li>• Trace the algorithm with a small example first</li>
                <li>• Use proper set notation: {"{"}x <In /> S | P(x){"}"}</li>
                <li>• Define all variables clearly</li>
                <li>• State preconditions: "for all n <MathSymbols.Geq /> 1"</li>
                <li>• Be precise about what's being counted/found</li>
              </ul>
            </div>

            <div className="bg-red-500/10 rounded-xl p-6 border border-red-500/30">
              <h3 className="font-semibold text-red-400 mb-3">Avoid This ✗</h3>
              <ul className="space-y-2 text-sm text-gray-300">
                <li>• Don't describe HOW the algorithm works</li>
                <li>• Don't use informal language</li>
                <li>• Don't forget edge cases (n=0, empty input)</li>
                <li>• Don't mix implementation with specification</li>
                <li>• Don't use ambiguous notation</li>
              </ul>
            </div>
          </div>

          <div className="mt-6 p-4 bg-yellow-500/10 rounded-lg border border-yellow-500/30">
            <div className="flex items-start gap-2">
              <Lightbulb className="w-5 h-5 text-yellow-400 flex-shrink-0 mt-0.5" />
              <p className="text-sm text-gray-300">
                <strong className="text-yellow-400">Pro tip:</strong> The mathematical statement is usually worth 
                70% of the points. Spend time making it precise and complete.
              </p>
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
