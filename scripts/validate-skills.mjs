import { existsSync, readFileSync, readdirSync, statSync } from 'node:fs';
import { join } from 'node:path';

const root = process.cwd();
const errors = [];

const skillDirs = readdirSync(root).filter((entry) => {
  if (entry.startsWith('.')) return false;
  const dir = join(root, entry);
  return statSync(dir).isDirectory() && existsSync(join(dir, 'SKILL.md'));
});

if (skillDirs.length === 0) {
  errors.push('no skill folders found at repo root');
}

const readme = readFileSync(join(root, 'README.md'), 'utf8');

for (const dir of skillDirs) {
  const skillMd = readFileSync(join(root, dir, 'SKILL.md'), 'utf8');
  const fm = skillMd.match(/^---\r?\n([\s\S]*?)\r?\n---\r?\n/);
  if (!fm) {
    errors.push(`${dir}/SKILL.md: missing frontmatter block`);
    continue;
  }

  const field = (key) => fm[1].match(new RegExp(`^${key}:\\s*(.+)$`, 'm'))?.[1]?.trim();
  const name = field('name');
  const description = field('description');
  if (!name) errors.push(`${dir}/SKILL.md: missing frontmatter field "name"`);
  if (!description) errors.push(`${dir}/SKILL.md: missing frontmatter field "description"`);
  if (name && name !== dir) errors.push(`${dir}/SKILL.md: name "${name}" does not match folder name`);

  const openaiYamlPath = join(root, dir, 'agents', 'openai.yaml');
  if (!existsSync(openaiYamlPath)) {
    errors.push(`${dir}: missing agents/openai.yaml`);
  } else {
    const openaiYaml = readFileSync(openaiYamlPath, 'utf8');
    for (const key of ['display_name', 'short_description']) {
      if (!openaiYaml.includes(`${key}:`)) errors.push(`${dir}/agents/openai.yaml: missing ${key}`);
    }
    const userInvoked = /^disable-model-invocation:\s*true$/m.test(fm[1]);
    const implicitBlocked = /allow_implicit_invocation:\s*false/.test(openaiYaml);
    if (userInvoked !== implicitBlocked) {
      errors.push(`${dir}: disable-model-invocation and allow_implicit_invocation out of sync`);
    }
  }

  if (!readme.includes(`](${dir}/SKILL.md)`)) {
    errors.push(`README.md: no skill index entry linking ${dir}/SKILL.md`);
  }
}

if (errors.length > 0) {
  for (const e of errors) console.error(`FAIL ${e}`);
  process.exit(1);
}
console.log(`OK: ${skillDirs.length} skill(s) validated`);
