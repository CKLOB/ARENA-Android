---
paths:
  - 'src/**/*.tsx'
---

# React Native / Expo Rules

- Components are function declarations: `export function LoginForm() {}`. Default exports only where expo-router requires them (route files in `src/app/`).
- Component files are kebab-case (`login-form.tsx`); one component per file as a rule.
- Props: define a `Props` type per component (`type LoginFormProps = {...}`); destructure in the signature.
- Don't `useEffect` for derived state or data transformation — compute during render. Effects are for external system synchronization only.
- Server state goes through **TanStack Query** (`useQuery`/`useMutation`) via the shared `lib/http.ts` client — never `fetch`/`axios` inside `useEffect`. Client-only global state goes to **Zustand**.
- Validate external data (API responses, deep-link params, storage reads) with **Zod** schemas at the boundary; infer types via `z.infer` instead of hand-writing them.
- Navigation uses expo-router primitives (`Link`, `router`, typed routes) — never reach for bare `react-navigation` APIs directly.
- Images use `expo-image` (`Image`), not RN's built-in `Image`.
- Respect safe areas via `react-native-safe-area-context` (`SafeAreaView`, `useSafeAreaInsets`) instead of hardcoded paddings.
- Animations use `react-native-reanimated` (worklets) — avoid the legacy `Animated` API for new code.
- Platform forks: prefer `Platform.select`/`Platform.OS` for small differences, `*.web.tsx`/`*.android.tsx` file suffixes for diverging implementations.
- Avoid prop drilling more than 2 levels — restructure with composition (children) first, context only if that fails.
- Never use array index as `key` for dynamic lists.
- Long lists render with `FlatList` virtualization, never `ScrollView` + `map`.
