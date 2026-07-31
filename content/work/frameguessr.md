---
title: FrameGuessr
year: 2025
weight: 25
role: Personal project
stack: [Next.js, TypeScript, Supabase]
url: https://frameguessr.strahil.dev
source: https://github.com/StrahilPeykov/frameguessr
summary: A daily movie and TV guessing game built with Next.js and Supabase.
---

A daily guessing game: each day there's one movie or TV show to identify,
revealed through progressive hints, the still image first, then a tagline, then
the year and genre, and you get three guesses.

Guesses are checked on the server, so the answer is never sent to the browser.
Requests to the external movie database go through two cache layers with retries
and backoff. The daily puzzle is keyed by date to avoid the server and browser
disagreeing about when a new day starts.

You can play without an account. That progress is kept in local storage and
merged into your account if you sign in later.

Built with Next.js and TypeScript, with Supabase for the database and auth, and
hosted on Vercel.
