import React, { ReactNode } from 'react'
import { CheckCircle } from 'lucide-react'

// Type definitions
interface ExamSolutionProps {
  children: ReactNode
  score?: string
}

interface RecurrenceBoxProps {
  children: ReactNode
}

interface NetworkDiagramProps {
  children: ReactNode
}

interface ProblemCardProps {
  problem: string
  classification: string
  isPolynomial: boolean
}

interface ProofBoxProps {
  title: string
  children: ReactNode
}

// Exam solution component
export function ExamSolution({ children, score = "10/10" }: ExamSolutionProps) {
  return (
    <div className="mt-6 bg-green-500/5 border border-green-500/20 rounded-xl p-6">
      <div className="flex items-center gap-2 mb-4">
        <CheckCircle className="w-5 h-5 text-green-400" />
        <span className="text-green-400 font-semibold">Full Solution</span>
        <span className="text-xs text-gray-500">({score})</span>
      </div>
      <div className="space-y-4 text-gray-300">{children}</div>
    </div>
  )
}

// Recurrence box component
export function RecurrenceBox({ children }: RecurrenceBoxProps) {
  return (
    <div className="bg-purple-500/10 border border-purple-500/30 rounded-xl p-6 my-4">
      <div className="font-semibold text-purple-400 mb-3">Recurrence Relation:</div>
      <div className="text-gray-200 font-mono text-sm space-y-2">{children}</div>
    </div>
  )
}

// Network diagram component
export function NetworkDiagram({ children }: NetworkDiagramProps) {
  return (
    <div className="bg-slate-900/50 rounded-xl p-6 border border-slate-800 my-4">
      <div className="font-mono text-sm space-y-1">
        {children}
      </div>
    </div>
  )
}

// Problem card component
export function ProblemCard({ problem, classification, isPolynomial }: ProblemCardProps) {
  return (
    <div className={`p-4 rounded-lg border ${
      isPolynomial 
        ? 'bg-green-500/10 border-green-500/30' 
        : 'bg-red-500/10 border-red-500/30'
    }`}>
      <div className="flex items-start justify-between mb-2">
        <h4 className="font-semibold text-white">{problem}</h4>
        {isPolynomial ? (
          <CheckCircle className="w-5 h-5 text-green-400 flex-shrink-0" />
        ) : (
          <span className="w-5 h-5 text-red-400 flex-shrink-0">✗</span>
        )}
      </div>
      <p className={`text-sm font-semibold mb-1 ${
        isPolynomial ? 'text-green-400' : 'text-red-400'
      }`}>
        {classification}
      </p>
    </div>
  )
}

// Proof box component
export function ProofBox({ title, children }: ProofBoxProps) {
  return (
    <div className="bg-purple-500/10 rounded-xl p-6 border border-purple-500/30 my-4">
      <div className="font-semibold text-purple-400 mb-3">{title}</div>
      <div className="space-y-3 text-sm">{children}</div>
    </div>
  )
}