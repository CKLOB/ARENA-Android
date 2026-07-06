---
paths:
  - '**/*.test.{ts,tsx}'
  - 'jest/**'
  - '.maestro/**'
---

# Testing Rules (Jest + React Native Testing Library + Maestro)

- Colocate tests in a `__tests__/` directory next to the target, or as `*.test.ts(x)` beside the file.
- Test user-visible behavior, not implementation details. Query by role/text (`getByRole`, `getByText`) — `testID` only when there's no accessible alternative.
- Use `userEvent` from `@testing-library/react-native` for interactions, not bare `fireEvent`, when the interaction has a userEvent equivalent.
- Structure: `describe` per component/function, `it` names state the expected behavior in plain English.
- Run with `npm run test:ci` (single run; `npm run test` for watch mode).
- New features and bug fixes ship with tests; a bug fix starts with a failing test that reproduces it.
- Components using TanStack Query get a fresh `QueryClient` per test (wrap with a test `QueryClientProvider`; disable retries).
- Native modules (MMKV, SecureStore, Sentry, ...) are mocked in `jest/` setup files — extend the existing mocks instead of ad-hoc `jest.mock` copies.
- E2E: Maestro flows live in `.maestro/*.yaml` and run with `npm run e2e:android`; keep flows short and screen-scoped.
