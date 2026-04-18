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

  assert.match(productsSource, /data-subeasy-device-back/);
  assert.match(productsSource, /data-subeasy-device-front/);
  assert.match(productsSource, /data-subeasy-dynamic-island/);
  assert.match(productsSource, /subeasy-device-frame\.png/);
  assert.match(translationsSource, /BizzBot/);
  assert.match(translationsSource, /Co-founder & CTO/);
  assert.match(productsSource, /bizzbot-chat\.jpg/);
  assert.match(productsSource, /bizzbot-logo\.png/);
  assert.match(productsSource, /data-bizzbot-right-stack/);
  assert.match(productsSource, /data-bizzbot-chat-card/);
  assert.match(productsSource, /data-bizzbot-chat-stage/);
  assert.doesNotMatch(productsSource, /bizzbot-offer\.png/);
  assert.doesNotMatch(productsSource, /data-bizzbot-offer-card/);
});
