---
paths:
  - 'src/**/*.{tsx,css}'
---

# Styling Rules (NativeWind + Theme Tokens)

- Two sanctioned styling paths: NativeWind utility classes (`className`) or `StyleSheet.create` — never inline object literals in `style` for static styles.
- Colors, spacing, and fonts come from the design tokens in `src/constants/theme.ts` (and Tailwind theme config) — never hardcode hex colors or magic pixel values (`#ff0000`, `13`). Add a token instead.
- Reusable visual patterns become `components/ui` components, not copy-pasted class strings or style objects.
- Support light/dark mode: use the `use-theme`/`use-color-scheme` hooks (or NativeWind `dark:` variant) when styling new UI — never assume a single scheme.
- Prefer `gap` over margins between siblings.
- Class order follows Prettier/ESLint output — don't hand-sort or fight the formatter.
