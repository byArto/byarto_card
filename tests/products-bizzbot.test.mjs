import test from 'node:test';
import assert from 'node:assert/strict';
import fs from 'node:fs';
import path from 'node:path';

const root = process.cwd();
const productsPath = path.join(root, 'src/components/sections/Products.tsx');
const translationsPath = path.join(root, 'src/translations/index.ts');

test('products section includes the BizzBot accent card content and assets', () => {
  const productsSource = fs.readFileSync(productsPath, 'utf8');
  const translationsSource = fs.readFileSync(translationsPath, 'utf8');

  assert.match(translationsSource, /BizzBot/);
  assert.match(translationsSource, /Co-founder & CTO/);
  assert.match(productsSource, /bizzbot-offer\.png/);
  assert.match(productsSource, /bizzbot-chat\.jpg/);
  assert.match(productsSource, /bizzbot-logo\.png/);
});
