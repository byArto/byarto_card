# Default Russian Language Implementation Plan

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:subagent-driven-development (recommended) or superpowers:executing-plans to implement this plan task-by-task. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** Make the portfolio open in Russian by default while keeping the existing EN/RU toggle available.

**Architecture:** Change only the language source of truth in `LangContext.tsx`. Add a small file-based regression test that checks the default context values and initial state are Russian, then verify the project still builds.

**Tech Stack:** Next.js App Router, React 19, TypeScript, Node test runner

---

### Task 1: Add a failing regression test for the default language

**Files:**
- Create: `tests/default-language.test.mjs`
- Verify: `src/contexts/LangContext.tsx`

- [ ] **Step 1: Write the failing test**
- [ ] **Step 2: Run `node --test tests/default-language.test.mjs` and confirm it fails**
- [ ] **Step 3: Use the failure as the implementation target**

### Task 2: Switch the initial language to Russian

**Files:**
- Modify: `src/contexts/LangContext.tsx`
- Test: `tests/default-language.test.mjs`

- [ ] **Step 1: Change the default context values from English to Russian**
- [ ] **Step 2: Change the initial `useState<Lang>` value from `en` to `ru`**
- [ ] **Step 3: Keep the existing manual EN/RU toggle behavior unchanged**

### Task 3: Verify the change

**Files:**
- Verify: `tests/default-language.test.mjs`
- Verify: `src/contexts/LangContext.tsx`

- [ ] **Step 1: Run `node --test tests/default-language.test.mjs`**
- [ ] **Step 2: Run `npm run build`**
- [ ] **Step 3: Commit and push the result**
