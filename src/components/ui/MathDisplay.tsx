import React from 'react'

// Mathematical notation components
export function MathDisplay({ children, block = false, className = '' }) {
  return (
    <span className={`
      ${block ? 'block my-4 text-center overflow-x-auto' : 'inline'} 
      font-mono text-blue-300 ${className}
    `}>
      {children}
    </span>
  )
}

// Common mathematical symbols as components
export const MathSymbols = {
  // Subscript notation
  Sub: ({ base, sub }) => (
    <span>
      {base}<sub className="text-xs">{sub}</sub>
    </span>
  ),
  
  // Superscript notation
  Sup: ({ base, sup }) => (
    <span>
      {base}<sup className="text-xs">{sup}</sup>
    </span>
  ),
  
  // Common symbols
  In: () => <span className="mx-1">∈</span>,
  NotIn: () => <span className="mx-1">∉</span>,
  Leq: () => <span className="mx-1">≤</span>,
  Geq: () => <span className="mx-1">≥</span>,
  Neq: () => <span className="mx-1">≠</span>,
  Infinity: () => <span className="mx-1">∞</span>,
  ForAll: () => <span className="mx-1">∀</span>,
  Exists: () => <span className="mx-1">∃</span>,
  RightArrow: () => <span className="mx-1">→</span>,
  LeftArrow: () => <span className="mx-1">←</span>,
  LeftRightArrow: () => <span className="mx-1">↔</span>,
  Union: () => <span className="mx-1">∪</span>,
  Intersection: () => <span className="mx-1">∩</span>,
  SubsetEq: () => <span className="mx-1">⊆</span>,
  EmptySet: () => <span className="mx-1">∅</span>,
  Sum: () => <span className="text-xl mx-1">Σ</span>,
  Theta: () => <span className="mx-1">Θ</span>,
}

// Algorithm display component with proper formatting
export function AlgorithmBlock({ title, children }) {
  return (
    <div className="my-6 bg-slate-900/50 rounded-xl border border-slate-800 overflow-hidden">
      {title && (
        <div className="px-4 py-2 bg-slate-800/50 border-b border-slate-800">
          <span className="text-sm font-semibold text-purple-400">{title}</span>
        </div>
      )}
      <div className="p-4 font-mono text-sm">
        <div className="space-y-1">
          {children}
        </div>
      </div>
    </div>
  )
}

// Line component for algorithms
export function AlgoLine({ indent = 0, children }) {
  return (
    <div style={{ paddingLeft: `${indent * 1.5}rem` }} className="text-gray-300">
      {children}
    </div>
  )
}

// Demo component showing usage
export default function MathNotationDemo() {
  const { Sub, Sup, In, Leq, RightArrow, Sum, ForAll } = MathSymbols
  
  return (
    <div className="p-8 bg-slate-950 text-gray-300 space-y-8">
      <h2 className="text-2xl font-bold text-white mb-4">Mathematical Notation Examples</h2>
      
      {/* Inline math examples */}
      <div>
        <h3 className="text-lg font-semibold text-purple-400 mb-2">Inline Math</h3>
        <p>
          Let <MathDisplay><Sub base="T" sub="i,j" /></MathDisplay> be the minimum cost for elements 
          <MathDisplay><Sub base="x" sub="a" /></MathDisplay> to <MathDisplay><Sub base="x" sub="b" /></MathDisplay>
          where <MathDisplay>a <Leq /> i <Leq /> j <Leq /> b</MathDisplay>.
        </p>
      </div>
      
      {/* Block math example */}
      <div>
        <h3 className="text-lg font-semibold text-purple-400 mb-2">Block Math</h3>
        <MathDisplay block>
          <Sub base="T" sub="i" /> = max <Sub base="(" sub="1≤j≤i" /> 
          {" { "}
          <Sub base="T" sub="j-1" /> + score(<Sub base="x" sub="j" />...<Sub base="x" sub="i" />)
          {" } "}
        </MathDisplay>
      </div>
      
      {/* Algorithm example */}
      <div>
        <h3 className="text-lg font-semibold text-purple-400 mb-2">Algorithm Format</h3>
        <AlgorithmBlock title="Edmonds-Karp Algorithm">
          <AlgoLine><strong>function</strong> EdmondsKarp(G, s, t):</AlgoLine>
          <AlgoLine indent={1}>maxFlow <RightArrow /> 0</AlgoLine>
          <AlgoLine indent={1}><strong>while</strong> path <RightArrow /> BFS(G, s, t):</AlgoLine>
          <AlgoLine indent={2}>bottleneck <RightArrow /> min{<Sub base="c" sub="f" />(e) | e <In /> path}</AlgoLine>
          <AlgoLine indent={2}>maxFlow <RightArrow /> maxFlow + bottleneck</AlgoLine>
          <AlgoLine indent={2}>UpdateResidual(G, path, bottleneck)</AlgoLine>
          <AlgoLine indent={1}><strong>return</strong> maxFlow</AlgoLine>
        </AlgorithmBlock>
      </div>
      
      {/* Complex formula */}
      <div>
        <h3 className="text-lg font-semibold text-purple-400 mb-2">Complex Formula</h3>
        <MathDisplay block>
          <Sum /><Sub base="(" sub="i=1" /><Sup base=")" sup="n" /> 
          {" "}
          <Sub base="w" sub="i" /> · <Sub base="x" sub="i" /> 
          {" ≤ W, where "}
          <Sub base="x" sub="i" /> <In /> {"{0,1}"} 
          {" "}
          <ForAll /> i
        </MathDisplay>
      </div>
    </div>
  )
}