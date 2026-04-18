# BizzBot Products Card Implementation Plan

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:subagent-driven-development (recommended) or superpowers:executing-plans to implement this plan task-by-task. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** Add `BizzBot` as the strongest secondary project card in the `Products` section while keeping `SubEasy` as the flagship project.

**Architecture:** Keep the current flagship `SubEasy` block intact, then replace the flat compact-project row with a bento-style secondary projects area. `BizzBot` gets a dedicated accent card driven by translation content and local image assets, while the three existing projects remain compact supporting cards.

**Tech Stack:** Next.js App Router, React 19, TypeScript, Framer Motion, Next Image, built-in Node test runner

---

### Task 1: Add a failing regression test for the BizzBot case integration

**Files:**
- Create: `tests/products-bizzbot.test.mjs`
- Verify: `src/components/sections/Products.tsx`
- Verify: `src/translations/index.ts`

- [ ] **Step 1: Write the failing test**

```javascript
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
  assert.match(productsSource, /bizzbot-offer\\.png/);
  assert.match(productsSource, /bizzbot-chat\\.jpg/);
  assert.match(productsSource, /bizzbot-logo\\.png/);
});
```

- [ ] **Step 2: Run the test to verify it fails**

Run: `node --test tests/products-bizzbot.test.mjs`

Expected: FAIL because the `BizzBot` copy and image references are not present in the current implementation.

- [ ] **Step 3: Keep the test as the regression target for implementation**

No production changes yet. The failing test defines the target state for the `Products` section.

### Task 2: Add the BizzBot visual assets to the portfolio project

**Files:**
- Create: `public/bizzbot-chat.jpg`
- Create: `public/bizzbot-logo.png`
- Create: `public/bizzbot-offer.png`

- [ ] **Step 1: Copy the provided source assets into `public` with ASCII-safe names**

Run:

```bash
cp '/Users/byarto/Desktop/IMG_5417.jpg' '/Users/byarto/Desktop/vibe/byArto landing/byarto-portfolio/public/bizzbot-chat.jpg'
cp '/Users/byarto/Desktop/logo bizzbot.png' '/Users/byarto/Desktop/vibe/byArto landing/byarto-portfolio/public/bizzbot-logo.png'
cp '/Users/byarto/Desktop/Снимок экрана 2026-04-18 в 16.01.39.png' '/Users/byarto/Desktop/vibe/byArto landing/byarto-portfolio/public/bizzbot-offer.png'
```

- [ ] **Step 2: Verify the files exist**

Run: `ls -la public/bizzbot-*`

Expected: all three assets are present and readable from the project `public` directory.

### Task 3: Add BizzBot copy to translations

**Files:**
- Modify: `src/translations/index.ts`
- Verify: `tests/products-bizzbot.test.mjs`

- [ ] **Step 1: Add English and Russian `BizzBot` content under `products`**

Add a structured translation object with:

```typescript
bizzbot: {
  tag: 'B2B SaaS',
  role: 'Co-founder & CTO',
  title: 'BizzBot',
  subtitle: 'AI assistant for salons and studios',
  description: '...',
  highlights: ['...', '...', '...'],
  primaryCta: 'Visit site',
  secondaryCta: 'Open demo bot',
  chips: ['Telegram', 'WhatsApp', 'MAX', 'FastAPI', 'Claude API'],
}
```

- [ ] **Step 2: Keep the existing `compact` project content intact**

Do not move `SubEasy` data or remove the current compact project entries.

### Task 4: Rebuild the secondary projects layout in `Products`

**Files:**
- Modify: `src/components/sections/Products.tsx`
- Verify: `src/translations/index.ts`
- Verify: `public/bizzbot-chat.jpg`
- Verify: `public/bizzbot-logo.png`
- Verify: `public/bizzbot-offer.png`

- [ ] **Step 1: Add a dedicated data source for the BizzBot accent card**

Read translation content from `t.products.bizzbot` and keep the current `compact` mapping for the other projects.

- [ ] **Step 2: Replace the single compact-project row with a bento-style secondary area**

Implement a layout where:

```tsx
<div className="grid grid-cols-1 xl:grid-cols-[1.35fr_0.95fr] gap-4">
  <BizzBotAccentCard />
  <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-1 gap-4">
    {compactProjects.map(...)}
  </div>
</div>
```

- [ ] **Step 3: Build the BizzBot accent card in the existing visual language**

Use:

```tsx
<Image src="/bizzbot-offer.png" ... />
<Image src="/bizzbot-chat.jpg" ... />
<Image src="/bizzbot-logo.png" ... />
```

Include:
- logo marker
- role line
- short product description
- highlight bullets
- chip row
- primary and secondary links

- [ ] **Step 4: Keep the rest of the compact cards visually subordinate**

Do not redesign them into another featured system. Preserve the current hover language and supporting-case feel.

### Task 5: Verify the regression target and production checks

**Files:**
- Verify: `tests/products-bizzbot.test.mjs`
- Verify: `src/components/sections/Products.tsx`
- Verify: `src/translations/index.ts`

- [ ] **Step 1: Run the regression test**

Run: `node --test tests/products-bizzbot.test.mjs`

Expected: PASS

- [ ] **Step 2: Run lint**

Run: `npm run lint`

Expected: PASS with exit code 0

- [ ] **Step 3: Run a production build**

Run: `npm run build`

Expected: PASS with exit code 0
