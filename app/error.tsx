"use client";

export default function Error({ reset }: { error: Error; reset: () => void }) {
  return (
    <div className="space-y-4 py-10">
      <p className="font-mono text-sm text-muted">error</p>
      <h1 className="text-2xl">Something went wrong.</h1>
      <button
        type="button"
        onClick={reset}
        className="inline-block font-mono text-accent hover:underline"
      >
        try again
      </button>
    </div>
  );
}
