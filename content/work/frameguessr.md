---
title: FrameGuessr
year: 2025
weight: 25
featured: true
role: Personal project
stack: [Next.js, TypeScript, Supabase]
url: https://frameguessr.strahil.dev
urlLabel: Play FrameGuessr
source: https://github.com/StrahilPeykov/frameguessr
sourceLabel: View source on GitHub
screenshots:
  - src: /work/frameguessr-round.webp
    alt: FrameGuessr showing a blurred film still, one remaining guess, and the year and genre clues.
    width: 1280
    height: 720
    caption: An archived puzzle after revealing the third clue. The still stays blurred; the year and genre help narrow the guess.
summary: Guess the movie or TV show from a still image, with a new puzzle each day.
overview: >-
  I built FrameGuessr, a daily movie and TV guessing game, from an idea by Ally.
  You get three guesses, starting with a blurred still and revealing more clues
  as you go. It works without an account, and previous puzzles are available
  in the archive.
---

The clues progress from the still image to a tagline, then the year and genre.

## Keeping the answer on the server

Guesses are checked on the server, so the answer is never sent to the browser.
Requests to the external movie database go through two cache layers with retries
and backoff. The daily puzzle is keyed by date to avoid the server and browser
disagreeing about when a new day starts.

You can play without an account. That progress is kept in local storage and
merged into your account if you sign in later.

Built with Next.js and TypeScript, with Supabase for the database and auth, and
hosted on Vercel.
