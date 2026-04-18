import test from 'node:test';
import assert from 'node:assert/strict';
import fs from 'node:fs';
import path from 'node:path';

const root = process.cwd();
const langContextPath = path.join(root, 'src/contexts/LangContext.tsx');

test('language context defaults to Russian on first render', () => {
  const source = fs.readFileSync(langContextPath, 'utf8');

  assert.match(source, /lang:\s*'ru'/);
  assert.match(source, /t:\s*translations\.ru/);
  assert.match(source, /hf:\s*'var\(--font-heading-ru\)'/);
  assert.match(source, /useState<Lang>\('ru'\)/);
});
