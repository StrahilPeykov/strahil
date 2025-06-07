export default function FontTest() {
  return (
    <div className="min-h-screen bg-midnight text-white p-8">
      <h1 className="font-display text-6xl font-bold mb-8">
        Space Grotesk Heading
      </h1>
      
      <p className="text-xl mb-8">
        This is Inter (default body font). The quick brown fox jumps over the lazy dog.
      </p>
      
      <pre className="font-mono bg-midnight-light p-4 rounded">
        <code>{`// This is JetBrains Mono
const greeting = "Hello, World!";
console.log(greeting);`}</code>
      </pre>
      
      <div className="mt-8 space-y-2">
        <p className="font-display text-2xl font-semibold">Space Grotesk Semibold</p>
        <p className="font-display text-2xl font-medium">Space Grotesk Medium</p>
        <p className="text-lg font-semibold">Inter Semibold</p>
        <p className="text-lg">Inter Regular</p>
        <p className="font-mono">JetBrains Mono Code Font</p>
      </div>
    </div>
  )
}