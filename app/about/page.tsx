import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "About",
  description: "A short bio: who Strahil Peykov is, and what he's into.",
  alternates: { canonical: "/about" },
};

export default function About() {
  return (
    <div className="space-y-6">
      <h1 className="font-mono text-xl">About</h1>
      <div className="prose">
        <p>
          I&apos;m Strahil Peykov, born in Burgas, Bulgaria on 29 March 2002. I
          finished the School of Mathematics and Natural Sciences in Burgas, then
          moved to Eindhoven in 2021 for a Computer Science &amp; Engineering
          bachelor&apos;s, which I graduated in 2024.
        </p>
        <p>Outside work, I&apos;m into gaming, music, philosophy, and politics.</p>
      </div>
    </div>
  );
}
