import Link from "next/link";

export default function NotFound() {
  return (
    <div className="space-y-4 py-10">
      <p className="font-mono text-sm text-muted">404</p>
      <h1 className="text-2xl">This page doesn&apos;t exist.</h1>
      <p className="text-muted">The page you&apos;re looking for moved, or never existed.</p>
      <Link href="/" className="inline-block font-mono text-accent hover:underline">
        ← back home
      </Link>
    </div>
  );
}
