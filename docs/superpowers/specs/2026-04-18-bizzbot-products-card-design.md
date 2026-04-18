# BizzBot Products Card Design

Date: 2026-04-18
Status: Draft for review

## Context

The portfolio landing currently presents `SubEasy` as the flagship project in the `Products` section and follows it with a row of smaller compact case-study cards. A new project, `BizzBot`, needs to be integrated without competing with `SubEasy`.

`BizzBot` is a joint product, while `SubEasy` remains the author's personal flagship product. The integration should therefore give `BizzBot` clear visual weight as a strong B2B case, but keep it positioned as a second-level project in the same section.

## Goal

Add `BizzBot` to the `Products` section as the strongest non-flagship project while keeping the entire section visually consistent with the existing dark premium aesthetic of the landing.

## Approved Direction

- Keep `SubEasy` unchanged as the flagship card.
- Add `BizzBot` directly below `SubEasy` as the first and most prominent case in the secondary projects area.
- Do not promote `BizzBot` to a second hero block or separate section.
- Preserve the portfolio's overall visual language while introducing a localized `BizzBot` accent palette inspired by the live product landing.

## Layout

### Desktop

- Replace the current uniform 3-column compact-project grid with a more flexible bento-style grid.
- `BizzBot` occupies the first accent slot and spans more space than the remaining compact cards.
- The remaining existing projects stay visually subordinate and continue to read as compact supporting cases.

### Mobile

- `SubEasy` remains the first item in the section.
- `BizzBot` appears immediately after `SubEasy`.
- The `BizzBot` card becomes a full-width stacked card with image layers above or beside summary text depending on available width.

## Visual Design

- Keep the section background, border treatment, card radii, motion language, and premium dark look aligned with the existing landing.
- Introduce a warm `BizzBot` accent system based on the product branding:
  - deep graphite / charcoal base
  - sand / warm off-white surfaces
  - orange callout accent from the landing headline
- Avoid making the card look like a pasted screenshot block; the visuals must feel embedded into the portfolio design system.

## Card Composition

The `BizzBot` card should contain:

- top-left: `BizzBot` logo as the project marker
- main visual plane: landing hero screenshot
- secondary floating visual: Telegram dialogue screenshot
- text block:
  - project name: `BizzBot`
  - role line: `Co-founder & CTO`
  - short descriptor: B2B AI bot for salons and studios
  - summary focused on FAQ automation, booking assistance, confirmations, and reschedules
- metadata/tags:
  - `B2B SaaS`
  - `Telegram`
  - `WhatsApp`
  - `MAX`
  - `FastAPI`
  - `Claude API`

## Content Direction

### English

Use concise product-oriented language. The preferred message is:

`BizzBot is a B2B AI assistant for salons and studios that handles routine customer chats: common questions, booking assistance, visit confirmations, and reschedules. Complex cases are handed off to a human admin.`

Role line:

`Co-founder & CTO`

### Russian

Use concise and direct language aligned with the product site:

`BizzBot — B2B AI-ассистент для салонов и студий. Берёт на себя типовые вопросы, помогает с записью, подтверждает визиты и обрабатывает переносы. Сложные случаи передаёт администратору.`

Role line:

`Co-founder & CTO`

## Links

- Primary link: `https://bizzbot.ru`
- Secondary link: `https://t.me/BeautyProDemo_bot`

The card should support both links without creating CTA clutter. One clear primary action and one lightweight secondary action are sufficient.

## Source Assets

Use the following user-provided files:

- logo: `/Users/byarto/Desktop/logo bizzbot.png`
- bot dialogue screenshot: `/Users/byarto/Desktop/IMG_5417.jpg`
- landing hero screenshot: `/Users/byarto/Desktop/Снимок экрана 2026-04-18 в 16.01.39.png`

These assets should be copied into the project `public` directory during implementation with clean, ASCII-safe filenames.

## Implementation Scope

Implementation is limited to:

- updating project copy in `src/translations/index.ts`
- updating the `Products` section layout in `src/components/sections/Products.tsx`
- adding the required image assets to `public`
- preserving existing animation and responsive behavior patterns

## Non-Goals

- no new top-level section for `BizzBot`
- no redesign of the flagship `SubEasy` block
- no broader rebrand of the portfolio visual language
- no dedicated project detail page in this task

## Verification

After implementation, verify:

- `BizzBot` reads as the strongest secondary case, not the flagship
- the section still feels cohesive next to `SubEasy`
- the card works on both desktop and mobile widths
- screenshots remain readable and do not overpower the text
- both product links are functional
