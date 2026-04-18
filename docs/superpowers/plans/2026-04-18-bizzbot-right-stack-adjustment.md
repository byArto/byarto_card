# BizzBot Right Stack Adjustment Implementation Plan

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:subagent-driven-development (recommended) or superpowers:executing-plans to implement this plan task-by-task. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** Make the right side of the `BizzBot` card readable by replacing the single screenshot stage with a vertical stack of two cards: offer/info on top and AI dialogue below.

**Architecture:** Keep the left column of the `BizzBot` card unchanged and refactor only the right visual column in `Products.tsx`. Use explicit `data-*` markers so the existing lightweight regression test can verify the stacked structure.

**Tech Stack:** Next.js App Router, React 19, TypeScript, Framer Motion, Next Image, Node test runner

---

### Task 1: Add a failing regression target for the stacked right column

**Files:**
- Modify: `tests/products-bizzbot.test.mjs`
- Verify: `src/components/sections/Products.tsx`

- [ ] **Step 1: Extend the test with the new structure markers**
- [ ] **Step 2: Run `node --test tests/products-bizzbot.test.mjs` and confirm it fails**
- [ ] **Step 3: Use those markers as the implementation target**

### Task 2: Refactor the `BizzBot` right column into two stacked cards

**Files:**
- Modify: `src/components/sections/Products.tsx`

- [ ] **Step 1: Keep the left text column unchanged**
- [ ] **Step 2: Replace the existing right screenshot stage with a vertical stack container**
- [ ] **Step 3: Build a top offer card using the landing screenshot and readable overlays**
- [ ] **Step 4: Build a bottom dialogue card using the Telegram chat screenshot**
- [ ] **Step 5: Keep the visual language aligned with the current premium dark palette**

### Task 3: Verify the result

**Files:**
- Verify: `tests/products-bizzbot.test.mjs`
- Verify: `src/components/sections/Products.tsx`

- [ ] **Step 1: Run `node --test tests/products-bizzbot.test.mjs`**
- [ ] **Step 2: Run `npm run build`**
- [ ] **Step 3: Run `npm run lint` and report whether any remaining failures are unrelated existing issues**
