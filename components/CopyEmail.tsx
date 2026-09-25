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
      className="relative inline-block hover:text-accent"
      title="Copy email address"
      aria-label={`Copy email address ${email}`}
    >
      {/* Invisible sizer reserves the email's width so swapping in "copied"
          can't shift the rest of the row. */}
      <span aria-hidden className="invisible">{email}</span>
      <span className="absolute inset-0 flex items-center text-left underline decoration-1 underline-offset-4">{copied ? "copied ✓" : email}</span>
      <span className="sr-only" role="status">{copied ? "Email address copied" : ""}</span>
    </button>
  );
}
