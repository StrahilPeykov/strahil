"use client";

import { useState } from "react";

export function CopyEmail({ email }: { email: string }) {
  const [copied, setCopied] = useState(false);

  async function copy() {
    try {
      await navigator.clipboard.writeText(email);
      setCopied(true);
      setTimeout(() => setCopied(false), 1500);
    } catch {
      // clipboard blocked, fall back to revealing the address
      window.location.href = `mailto:${email}`;
    }
  }

  return (
    <button
      type="button"
      onClick={copy}
      className="relative inline-block font-mono hover:text-accent"
      title="Copy email address"
      aria-label={`Copy email address ${email}`}
    >
      {/* Invisible sizer reserves the email's width so swapping in "copied"
          can't shift the rest of the row. */}
      <span aria-hidden className="invisible">{email}</span>
      <span className="absolute inset-0 text-left">{copied ? "copied ✓" : email}</span>
    </button>
  );
}
