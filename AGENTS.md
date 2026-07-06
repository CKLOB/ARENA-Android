# ARENA-Android

Android client built with Expo SDK 57 (expo-router) + React Native 0.86 + React 19 + TypeScript + NativeWind.
Server state via TanStack Query, client state via Zustand, schema validation via Zod, storage via MMKV/SecureStore.

> **Expo HAS CHANGED.** Read the exact versioned docs at https://docs.expo.dev/versions/v57.0.0/ before writing any code.

## Commands

| Task               | Command                           |
| ------------------ | --------------------------------- |
| Dev server         | `npm start`                       |
| Run on Android     | `npm run android`                 |
| Lint               | `npm run lint`                    |
| Format             | `npm run format` / `format:check` |
| Type check         | `npm run typecheck`               |
| Unit tests (watch) | `npm run test`                    |
| Unit tests (CI)    | `npm run test:ci` (single run)    |
| E2E (Maestro)      | `npm run e2e:android`             |

- Node >= 22, path alias `@/*` → `./src/*` (plus `@/assets/*` → `./assets/*`)
- The pre-commit hook (husky) runs ESLint/Prettier via lint-staged automatically; commit-msg runs commitlint.

## Project Structure

```
src/
├── app/         # expo-router file-based routes (screens live here)
├── components/  # Reusable components (components/ui: generic UI primitives)
├── constants/   # Design tokens, constants (theme.ts)
├── hooks/       # Shared hooks (use-theme, use-color-scheme, ...)
├── lib/         # Core modules (http, i18n, storage, sentry, query-client, env)
├── locales/     # i18n resources (ko/en)
└── types/       # Global type declarations
```

### Placement rules

1. Screens are expo-router route files in `src/app/`. Keep route files focused on screen composition — extract reusable pieces into `components/`.
2. Domain-agnostic UI primitives (button, collapsible, themed text) go to `components/ui/`; app-specific composites go to `components/`.
3. Cross-cutting logic (API client, storage, i18n) lives in `lib/`; never duplicate it inside components.
4. Platform-specific implementations use file suffixes (`*.web.tsx`, `*.android.tsx`) next to the default file.
5. Always use the `@/` alias for cross-directory imports; relative paths only within the same directory.
6. Environment variables are read only through `lib/env.ts` (Zod-validated) — never access `process.env` elsewhere.

## Commit Convention

Format: `type: 짧은 한글 설명` — a single short subject line in Korean, nothing else (no body, no trailers). Split changes into logical units.

- Types: `feat` `fix` `refactor` `style` `test` `docs` `ci` `chore`
- Examples: `feat: 로그인 폼 추가`, `fix: CI 액션 버전 최신화`

**Never push unless the user explicitly asks.** Committing autonomously is fine.

## PR Convention

- Base branch: `develop` (fall back to `main` if absent)
- **The PR template is mandatory**: always read `.github/PULL_REQUEST_TEMPLATE.md` and follow its structure exactly, written in Korean. Fill every applicable section; delete sections that don't apply. (If the template file doesn't exist yet, use the structure in the `/pr` skill.)
- Before opening a PR, verify locally: `npm run lint`, `npm run format:check`, `npm run typecheck`, `npm run test:ci`.

## Testing

- Unit tests live in a colocated `__tests__/` directory or next to their target file as `*.test.ts(x)`
- Jest (`jest-expo` preset) + React Native Testing Library
- E2E flows live in `.maestro/` and run with Maestro (`npm run e2e:android`)

## Rules

Detailed conventions live in `.claude/rules/` and load automatically per file pattern:

- `typescript.md` — strict typing rules (no `any`, no `as`, no `enum`, ...)
- `react-native.md` — component structure, expo-router/RN idioms
- `styling.md` — theme token usage, no hardcoded values
- `testing.md` — Jest/Testing Library and Maestro conventions
