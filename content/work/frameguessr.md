---
title: FrameGuessr
year: 2025
weight: 25
role: Personal project
stack: [Next.js, TypeScript, Supabase]
url: https://frameguessr.strahil.dev
source: https://github.com/StrahilPeykov/frameguessr
summary: A daily movie-and-TV guessing game, one title a day revealed through progressive hints.
---

A daily guessing game: each day there's one movie or TV show to identify,
revealed through progressive hints, the still image first, then a tagline, then
the year and genre, and you get three guesses.

Most of the interesting work is in the parts that keep it honest and resilient:

- **Server-side answer checking.** Guesses are validated on the server against
  the day's answer, so the correct title never sits in the browser waiting to be
  read out of the page source.
- **Resilient data fetching.** Calls to the external movie database sit behind a
  two-tier cache with retries and backoff, so an upstream rate limit doesn't take
  down the day's puzzle.
- **Timezone-safe daily reset.** The puzzle is keyed by date string and rolled
  over client-side, which avoids the server and the browser disagreeing about
  what day it is.
- **No lost progress.** Play logged out and your history lives in local storage;
  sign in later and it merges into your account instead of being thrown away.

Built with Next.js and TypeScript, with Supabase for the database and auth, and
hosted on Vercel.
