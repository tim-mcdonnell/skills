# skills

Agent skills for Claude Code, Codex, and any harness that follows the Agent Skills convention.
One folder per skill, each self-contained under `<skill-name>/SKILL.md`.

## Install

### With the skills CLI (Claude Code, Codex, Cursor, and others)

```sh
npx skills add tim-mcdonnell/skills        # all skills
npx skills add tim-mcdonnell/skills@dig    # a single skill by name
```

The installer copies editable skill files into your project or home directory.
Pull updates later with `npx skills update`.

### Manual

Clone the repo and symlink the skills you want into your harness's skills directory:

```sh
git clone https://github.com/tim-mcdonnell/skills
ln -s "$(pwd)/skills/dig" ~/.claude/skills/dig    # Claude Code
ln -s "$(pwd)/skills/dig" ~/.agents/skills/dig    # Codex and other agents
```

## Skills

Model-invoked (the agent can reach for these on its own; you can also invoke them by name):

- **[data-visualization](data-visualization/SKILL.md)** - Design, implement, and review charts, dashboards, and graph layouts with checks for data accuracy, accessibility, and rendering performance.

- **[dig](dig/SKILL.md)** - Answer a question from ground truth by cloning the relevant codebases into a shared cache and digging into their source. Built for "how does X actually implement this" and "could X integrate with Y" questions that docs and search cannot settle.

- **[evaluate-software-factories](evaluate-software-factories/SKILL.md)** - Evaluate one or more agentic development projects across 18 SDLC capabilities, with evidence for workflows, integrations, human handoffs, and limitations.

## License

[MIT](LICENSE)
