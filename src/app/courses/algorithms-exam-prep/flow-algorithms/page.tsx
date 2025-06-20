'use client'

import { motion } from 'framer-motion'
import { FileText, ChevronRight, AlertCircle, CheckCircle, Info, ArrowLeft, GitBranch } from 'lucide-react'
import Link from 'next/link'
import { PageWrapper } from '../../../../components/layout/PageWrapper'
import { Badge } from '../../../../components/ui/Badge'
import { CodeBlock } from '../../../../components/ui/CodeBlock'

const concepts = [
  {
    title: 'Augmenting Path',
    description: 'Path from s to t in residual network with positive capacity',
    key: 'Foundation of Ford-Fulkerson method'
  },
  {
    title: 'Residual Network',
    description: 'Shows remaining capacity and ability to "undo" flow',
    key: 'Forward edges: c(u,v) - f(u,v), Backward edges: f(v,u)'
  },
  {
    title: 'Critical Edge',
    description: 'Edge with minimum residual capacity on augmenting path',
    key: 'Determines bottleneck flow value'
  },
  {
    title: 'Edmonds-Karp',
    description: 'BFS to find shortest augmenting path (fewest edges)',
    key: 'Guarantees O(VE²) time complexity'
  }
]

const examples = [
  {
    year: '2024 Resit',
    task: 'First iteration of Edmonds-Karp',
    steps: [
      'Find shortest s-t path using BFS',
      'Identify all edges on the path',
      'Mark critical edges (minimum capacity)',
      'Note: Use forward edges only in first iteration'
    ]
  },
  {
    year: '2024',
    task: 'Maximum critical edges criterion',
    steps: [
      'Find all possible augmenting paths',
      'For each path, identify critical edges',
      'Choose path with most critical edges',
      'May differ from Edmonds-Karp choice'
    ]
  },
  {
    year: '2023 Resit',
    task: 'Residual network analysis',
    steps: [
      'Calculate residual capacities',
      'Forward edge: capacity - flow',
      'Backward edge: flow value',
      'Track inflow changes after augmentation'
    ]
  }
]

export default function FlowAlgorithmsPage() {
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
            <div className="w-12 h-12 bg-cyan-500/10 rounded-lg flex items-center justify-center text-cyan-400">
              <GitBranch className="w-6 h-6" />
            </div>
            <div>
              <p className="text-sm text-gray-500">Exercise 4</p>
              <h1 className="text-3xl font-display font-bold text-white">Flow Algorithms</h1>
            </div>
          </div>

          <div className="flex flex-wrap gap-3">
            <Badge variant="blue">Network Flow</Badge>
            <Badge variant="purple">Edmonds-Karp</Badge>
            <Badge variant="warning">Medium Difficulty</Badge>
          </div>
        </div>
      </section>

      {/* Core Concepts */}
      <section className="px-6 py-12">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-2xl font-display font-bold text-white mb-6">
            Essential Concepts
          </h2>

          <div className="grid md:grid-cols-2 gap-4 mb-8">
            {concepts.map((concept, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.1 }}
                className="bg-slate-900/50 rounded-lg p-6 border border-slate-800"
              >
                <h3 className="font-semibold text-cyan-400 mb-2">{concept.title}</h3>
                <p className="text-sm text-gray-400 mb-3">{concept.description}</p>
                <p className="text-xs text-gray-500 italic">{concept.key}</p>
              </motion.div>
            ))}
          </div>

          <div className="bg-cyan-500/10 rounded-xl p-6 border border-cyan-500/30">
            <div className="flex items-start gap-3">
              <Info className="w-5 h-5 text-cyan-400 flex-shrink-0 mt-0.5" />
              <div>
                <p className="text-cyan-400 font-semibold mb-2">Key Insight</p>
                <p className="text-sm text-gray-300">
                  In exam problems, you'll typically work with the residual network. Remember:
                  Forward edges have capacity - flow, backward edges have flow value.
                  Critical edges are those with minimum residual capacity on the path.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Residual Network */}
      <section className="px-6 py-12 border-t border-slate-800">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-2xl font-display font-bold text-white mb-6">
            Understanding Residual Networks
          </h2>

          <div className="space-y-6">
            <div className="bg-slate-900/50 rounded-xl p-6 border border-slate-800">
              <h3 className="text-lg font-semibold text-white mb-4">Residual Capacity Rules</h3>
              <div className="space-y-4">
                <div className="bg-slate-800/50 rounded-lg p-4">
                  <p className="font-medium text-blue-400 mb-2">Forward Edge (u,v) exists in original:</p>
                  <CodeBlock language="text">
{`residual_capacity(u,v) = capacity(u,v) - flow(u,v)
Include edge if residual_capacity > 0`}
                  </CodeBlock>
                </div>
                <div className="bg-slate-800/50 rounded-lg p-4">
                  <p className="font-medium text-purple-400 mb-2">Backward Edge (u,v) is reverse of original (v,u):</p>
                  <CodeBlock language="text">
{`residual_capacity(u,v) = flow(v,u)
Include edge if flow(v,u) > 0`}
                  </CodeBlock>
                </div>
                <div className="bg-slate-800/50 rounded-lg p-4">
                  <p className="font-medium text-green-400 mb-2">Neither direction exists in original:</p>
                  <CodeBlock language="text">
{`residual_capacity(u,v) = 0
Do not include edge`}
                  </CodeBlock>
                </div>
              </div>
            </div>

            <div className="bg-yellow-500/10 rounded-xl p-6 border border-yellow-500/30">
              <h3 className="font-semibold text-yellow-400 mb-3">Common Exam Notation</h3>
              <p className="text-sm text-gray-300 mb-3">
                Edges often shown as <code className="text-yellow-400">flow/capacity</code>
              </p>
              <div className="space-y-2 text-sm">
                <p>• <code>3/5</code> means flow=3, capacity=5, residual=2</p>
                <p>• <code>0/4</code> means no flow yet, full capacity available</p>
                <p>• <code>5/5</code> means saturated edge, residual=0</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Edmonds-Karp Algorithm */}
      <section className="px-6 py-12 border-t border-slate-800">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-2xl font-display font-bold text-white mb-6">
            Edmonds-Karp Algorithm
          </h2>

          <div className="space-y-6">
            <div className="bg-slate-900/50 rounded-xl p-6 border border-slate-800">
              <h3 className="text-lg font-semibold text-white mb-4">Algorithm Steps</h3>
              <CodeBlock language="python">
{`def edmonds_karp(graph, source, sink):
    max_flow = 0
    
    while True:
        # 1. Find shortest augmenting path using BFS
        path = bfs_find_path(graph, source, sink)
        if not path:
            break
            
        # 2. Find minimum residual capacity (bottleneck)
        min_capacity = infinity
        critical_edges = []
        
        for i in range(len(path) - 1):
            u, v = path[i], path[i+1]
            capacity = residual_capacity(u, v)
            if capacity < min_capacity:
                min_capacity = capacity
                critical_edges = [(u, v)]
            elif capacity == min_capacity:
                critical_edges.append((u, v))
        
        # 3. Augment flow along path
        max_flow += min_capacity
        update_residual_network(path, min_capacity)
    
    return max_flow, critical_edges`}
              </CodeBlock>
            </div>

            <div className="bg-blue-500/10 rounded-xl p-6 border border-blue-500/30">
              <h3 className="font-semibold text-blue-400 mb-3">Finding Augmenting Paths</h3>
              <ul className="space-y-2 text-sm text-gray-300">
                <li>• Use BFS for shortest path (fewest edges)</li>
                <li>• Only follow edges with positive residual capacity</li>
                <li>• Path must go from source to sink</li>
                <li>• In first iteration, no backward edges exist yet</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Critical Edges */}
      <section className="px-6 py-12 border-t border-slate-800">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-2xl font-display font-bold text-white mb-6">
            Identifying Critical Edges
          </h2>

          <div className="bg-slate-900/50 rounded-xl p-6 border border-slate-800">
            <div className="space-y-4">
              <div>
                <h3 className="font-semibold text-white mb-2">Definition</h3>
                <p className="text-gray-400">
                  A critical edge on an augmenting path is one whose residual capacity equals 
                  the minimum residual capacity of all edges on that path.
                </p>
              </div>

              <div className="bg-purple-500/10 rounded-lg p-4 border border-purple-500/30">
                <p className="text-sm text-purple-400 font-medium mb-2">Example:</p>
                <p className="text-sm text-gray-300">
                  Path: s → a → b → t with residual capacities 5, 3, 7
                </p>
                <p className="text-sm text-gray-400 mt-1">
                  Minimum = 3, so edge (a,b) is critical
                </p>
              </div>

              <div className="mt-4">
                <h4 className="font-medium text-cyan-400 mb-2">Important Notes:</h4>
                <ul className="space-y-1 text-sm text-gray-400">
                  <li>• Multiple edges can be critical if they share the minimum capacity</li>
                  <li>• Critical edges become saturated after augmentation</li>
                  <li>• At least one critical edge disappears from residual network</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Past Exam Patterns */}
      <section className="px-6 py-12 border-t border-slate-800">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-2xl font-display font-bold text-white mb-6">
            Common Exam Questions
          </h2>

          <div className="space-y-6">
            {examples.map((example, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="bg-slate-900/50 rounded-xl p-6 border border-slate-800"
              >
                <Badge variant="purple" size="sm" className="mb-3">{example.year}</Badge>
                <h3 className="text-lg font-semibold text-white mb-3">{example.task}</h3>
                <div className="space-y-2">
                  {example.steps.map((step, j) => (
                    <div key={j} className="flex items-start gap-2">
                      <span className="text-cyan-400 mt-0.5">•</span>
                      <p className="text-sm text-gray-400">{step}</p>
                    </div>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Alternative Selection Criteria */}
      <section className="px-6 py-12 border-t border-slate-800">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-2xl font-display font-bold text-white mb-6">
            Alternative Path Selection
          </h2>

          <div className="bg-slate-900/50 rounded-xl p-6 border border-slate-800">
            <p className="text-gray-300 mb-4">
              Sometimes exams ask for different path selection criteria than Edmonds-Karp:
            </p>

            <div className="space-y-4">
              <div className="bg-blue-500/10 rounded-lg p-4 border border-blue-500/30">
                <h4 className="font-medium text-blue-400 mb-2">Maximum bottleneck capacity</h4>
                <p className="text-sm text-gray-400">
                  Find path where minimum edge capacity is as large as possible
                </p>
              </div>

              <div className="bg-purple-500/10 rounded-lg p-4 border border-purple-500/30">
                <h4 className="font-medium text-purple-400 mb-2">Maximum number of edges</h4>
                <p className="text-sm text-gray-400">
                  Choose longest simple path (opposite of Edmonds-Karp)
                </p>
              </div>

              <div className="bg-green-500/10 rounded-lg p-4 border border-green-500/30">
                <h4 className="font-medium text-green-400 mb-2">Maximum critical edges</h4>
                <p className="text-sm text-gray-400">
                  Path with most edges at minimum capacity
                </p>
              </div>
            </div>

            <div className="mt-6 p-4 bg-yellow-500/10 rounded-lg border border-yellow-500/30">
              <p className="text-sm text-yellow-400">
                💡 Always state clearly which path you chose and verify it meets the criterion!
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Inflow Analysis */}
      <section className="px-6 py-12 border-t border-slate-800">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-2xl font-display font-bold text-white mb-6">
            Vertex Inflow Analysis
          </h2>

          <div className="bg-slate-900/50 rounded-xl p-6 border border-slate-800">
            <h3 className="text-lg font-semibold text-white mb-4">Common Question Type</h3>
            <p className="text-gray-400 mb-4">
              "List all vertices whose inflow increases after augmentation"
            </p>

            <div className="bg-slate-800/50 rounded-lg p-4">
              <h4 className="font-medium text-cyan-400 mb-3">How to solve:</h4>
              <ol className="space-y-2 text-sm text-gray-300">
                <li>1. For each vertex, calculate: <code>inflow = Σ flow(u,v) for all u</code></li>
                <li>2. Apply augmentation along the given path</li>
                <li>3. Recalculate inflows</li>
                <li>4. List vertices where new inflow {'>'} old inflow</li>
              </ol>
            </div>

            <div className="mt-4 p-4 bg-blue-500/10 rounded-lg border border-blue-500/30">
              <p className="text-sm text-blue-400 font-medium mb-2">Key insight:</p>
              <p className="text-sm text-gray-300">
                Only vertices on the augmenting path (except source) can have increased inflow.
                Backward edges might decrease flow, which can affect inflow calculations.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Exam Tips */}
      <section className="px-6 py-12 border-t border-slate-800">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-2xl font-display font-bold text-white mb-6">
            Exam Strategy
          </h2>

          <div className="grid md:grid-cols-2 gap-6">
            <div className="bg-green-500/10 rounded-xl p-6 border border-green-500/30">
              <h3 className="font-semibold text-green-400 mb-3">Quick Checklist ✓</h3>
              <ul className="space-y-2 text-sm text-gray-300">
                <li>• Draw the residual network clearly</li>
                <li>• Mark flow/capacity on each edge</li>
                <li>• Use BFS for Edmonds-Karp (shortest path)</li>
                <li>• List path edges in order</li>
                <li>• Calculate bottleneck carefully</li>
                <li>• Mark ALL critical edges</li>
              </ul>
            </div>

            <div className="bg-red-500/10 rounded-xl p-6 border border-red-500/30">
              <h3 className="font-semibold text-red-400 mb-3">Common Mistakes ✗</h3>
              <ul className="space-y-2 text-sm text-gray-300">
                <li>• Using original network instead of residual</li>
                <li>• Forgetting backward edges exist</li>
                <li>• Wrong residual capacity calculation</li>
                <li>• Missing some critical edges</li>
                <li>• Not checking all paths for alternatives</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Navigation */}
      <section className="px-6 py-12 border-t border-slate-800">
        <div className="max-w-4xl mx-auto flex justify-between">
          <Link
            href="/courses/algorithms-exam-prep/dynamic-programming"
            className="flex items-center gap-2 text-gray-400 hover:text-purple-400 transition-colors"
          >
            <ArrowLeft className="w-4 h-4" />
            Previous: Dynamic Programming
          </Link>
          <Link
            href="/courses/algorithms-exam-prep/shortest-paths"
            className="flex items-center gap-2 text-purple-400 hover:text-purple-300 transition-colors"
          >
            Next: Shortest Paths
            <ChevronRight className="w-4 h-4" />
          </Link>
        </div>
      </section>
    </PageWrapper>
  )
}