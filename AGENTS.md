# Skills repo

Public collection of agent skills: one folder per skill, `<skill-name>/SKILL.md` at the repo root.
No bucket subdirectories; revisit only if the collection outgrows a flat list.

## Invariants

- Frontmatter requires `name` and `description` as strings, and `name` must match the folder name.
- Every skill ships `agents/openai.yaml` beside its `SKILL.md`, carrying `interface.display_name` and `interface.short_description` for the Codex skill picker.
- A user-invoked skill (`disable-model-invocation: true`) also sets `policy.allow_implicit_invocation: false` in its `openai.yaml`; a skill is user-invoked in both harnesses or neither.
- Every skill has one linked entry in the README skill index, grouped by invocation mode; adding, renaming, or removing a skill updates the index in the same change.
- CI runs `node scripts/validate-skills.mjs` on every push and pull request; run it locally before committing.
- `CLAUDE.md` is a one-line shim pointing here; edit `AGENTS.md`, never `CLAUDE.md`.
- Research notes live in `docs/research/`.
- Skills stay generic for public consumption: no personal paths, model preferences, or private tooling.
