---
name: dig
description: Dig into source code for ground-truth answers by cloning the relevant codebases into a shared cache and reading them. Use when the user asks how a project actually implements something, whether an integration or extension is feasible (could X be a backend or provider for Y), or says to dig into or read the source of a codebase.
---

Answer from **ground truth**: the source code itself, at a known commit - not docs, search results, or write-ups.
A question about what is *possible* is answered by what the code allows - an interface to implement, a plugin seam, an existing provider to pattern-match against - not by whether anyone has done it yet.

## The clone cache

All clones live in `~/.cache/dig/<org>__<repo>`.
Never clone into the current project or a sibling directory.

1. Check the cache for clones last used more than 7 days ago (directory mtime).
   If any exist, ask the user once, multi-select, which to delete; skip silently when nothing is stale.
2. For each codebase the question touches, reuse the cached clone if present; otherwise `git clone --filter=blob:none` into the cache.
   Resolve the canonical repo URL yourself when only given a project name.
3. Fetch and fast-forward each clone, then `touch` its directory.
   Record the HEAD commit - citations depend on it.

Leave clones in place when done; follow-up questions reuse them.

## Digging

Restate each question as what must be true in the code for the answer to be yes, then go verify exactly that.
When several repos or questions are in play, fan out one read-only subagent per repo-and-question; each returns findings with file:line citations.

Done means every claim cites file:line at the recorded commit, and every feasibility answer names the concrete seam - interface, hook, config point - or shows why none exists.

## Findings

Write the findings to a single Markdown file, citing each claim as path:line at the recorded commit.
Save it where the repo already keeps such notes; if there is no convention, put it somewhere sensible and say where.
Then summarize the answer in chat.
