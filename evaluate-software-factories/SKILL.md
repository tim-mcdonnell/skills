---
name: evaluate-software-factories
description: Evaluate one or more coding-agent projects or software factory offerings across 18 SDLC capabilities, using source-backed workflow comparisons. Use when assessing a project's software factory fit or comparing agentic development offerings across the lifecycle.
---

# Evaluate software factories

Evaluate the projects named by the user against the 18 capabilities below as potential components of an agentic software factory.
Assess what each project currently provides, how it works, and what would be required to use it in practice.
Use qualitative findings with evidence, without numerical scores or maturity levels.
For one project, produce a standalone evaluation; for multiple projects, compare them using the same framework.
If no projects are named, ask for project names or URLs before investigating.

## Investigation

Resolve each project's official repository and documentation, and state the version, commit, or access date evaluated.
Identify its scope first: coding interface, agent runtime, orchestration platform, integrated delivery system, or another role.
Distinguish the open-source project from hosted products, paid tiers, plugins, and unreleased roadmap items.
Ask for clarification only if project identity cannot reasonably be resolved.

Read official documentation and inspect relevant source code when available.
For material capabilities, trace the trigger through execution to the output and identify the human handoffs.
Cite specific documentation sections or source files and line numbers, preferably using commit permalinks.
Treat marketing claims as claims until supported by implementation or demonstrated behavior.
Record source access limitations explicitly.

Separate project-provided workflows from capabilities supplied by an underlying model, coding agent, external service, or custom code.
For example, the ability to prompt a coding agent to write tests does not by itself establish a workflow for finding coverage gaps, running tests, and opening validated PRs.
Explain useful interactive workflows on their own merits; scheduled execution is not inherently evidence of better quality.

## Categories, capabilities, and reference questions

The following taxonomy and questions come from https://www.openhands.dev/agentic-sdlc-maturity.
Interpret each question as asking what the evaluated project enables, rather than asking about the user's current practices.

| Category | Capability | Reference question |
|---|---|---|
| Plan | Bug triage | How are incoming bug reports triaged? |
| Plan | Effort estimator | How do you estimate effort for upcoming work? |
| Plan | Feedback ingestion | How does customer feedback become planned work? |
| Design | Codebase mapper | How do you build understanding of the codebase before designing a change? |
| Design | Architecture reviewer | How are design docs and architecture proposals reviewed? |
| Design | Bug reproducer | How do you reproduce reported bugs before fixing them? |
| Implement | Ticket to PR | How does a ticket become a pull request? |
| Implement | Slack and GitHub bots | Can your team delegate dev work from chat or issue comments? |
| Implement | Code reviewer | How is code reviewed? |
| Test | Test coverage expander | How does your test coverage grow? |
| Test | QA automator | How are changes functionally verified (QA)? |
| Test | Load tester | How do you test performance under load? |
| Deploy | Deployment monitor | How are deployments watched? |
| Deploy | Release note generator | How are release notes and changelogs produced? |
| Deploy | Documentation manager | How do docs stay in sync with the code? |
| Observe | Log monitor | How are production logs monitored? |
| Observe | Anomaly detector | How do you catch anomalies in metrics and behaviour? |
| Observe | Error resolver | What happens when a new production error appears? |

## Required evaluation columns

For every project, cover all 18 capabilities using these columns.
Split the tables by category to keep them readable.

| Category | Capability | Supported workflow | Trigger | Required integrations | Human approvals and handoffs | Demonstrated results / evidence | Limitations |
|---|---|---|---|---|---|---|---|

Populate the columns as follows:

- Supported workflow: Describe the concrete inputs, actions, and outputs, and identify whether support is built in, supplied by a supported integration, achievable through generic agent interaction, or requires custom development.
- Trigger: Explain how work starts, such as a user prompt, CLI command, issue label, webhook, PR event, schedule, or monitoring event, and who configures it.
- Required integrations: Name the agent backend, repository host, issue tracker, chat service, CI system, browser/runtime, deployment platform, or observability service needed, distinguishing required dependencies from optional ones.
- Human approvals and handoffs: State where people must supply context, initiate steps, review results, approve actions, or recover failures; distinguish mandatory gates from configurable gates and describe unattended operation only where evidenced.
- Demonstrated results / evidence: Cite implementation, documentation, reproducible examples, or observed tests; state which kind of evidence supports the claim and what outcome was actually established.
- Limitations: Identify missing workflow stages, reliability constraints, environment restrictions, paid-tier requirements, and custom work needed, with confidence appropriate to the evidence.

Use "not found in the inspected sources" when evidence is absent, "explicitly unsupported" only when established, and "not tested" for behavior you did not execute.
Describe roadmap features separately from current functionality.
Where support is partial, specify exactly which stages are present and which remain external or manual.
Keep repeated integration details in a shared project note and refer to it from relevant rows.

## Deliverable

Start with a concise assessment of each project's role and practical fit in an agentic software factory.
Then provide the complete capability tables for each project, with inline citations.
For multiple projects, add a compact side-by-side table with the 18 capabilities as rows and projects as columns; use short factual descriptions of the differences.

Conclude with:

- The strongest supported workflows and the most consequential gaps for each project.
- Which projects substitute for one another and which could complement one another, including the integration work needed.
- A small set of concrete trial tasks to resolve the most important uncertainties, each with observable acceptance criteria.

Base recommendations on supported workflows and evidence, and state the use-case assumptions behind them.
Keep unknowns visible instead of treating them as confirmed absence.
The evaluation is complete when every project has all 18 capabilities accounted for and each material claim is cited or explicitly identified as unverified.
