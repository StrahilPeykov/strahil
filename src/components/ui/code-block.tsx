interface CodeBlockProps {
  children: string
  language?: string
}

export function CodeBlock({ children, language = 'typescript' }: CodeBlockProps) {
  return (
    <pre className="bg-midnight-light border border-electric/10 rounded-lg p-4 overflow-x-auto">
      <code className="text-sm font-mono text-gray-300">
        {children}
      </code>
    </pre>
  )
}