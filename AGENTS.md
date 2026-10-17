<!-- BEGIN:nextjs-agent-rules -->

# This is NOT the Next.js you know

This version has breaking changes — APIs, conventions, and file structure may all differ from your training data. Read the relevant guide in `node_modules/next/dist/docs/` (resolved from this file's directory; in monorepos the `next` package may not be visible from the repo root) before writing any code. Heed deprecation notices.

This block is written and re-added by `next dev` — verify at `node_modules/next/dist/server/lib/generate-agent-files.js`. Removing it from a diff only re-creates the uncommitted change; committing it with your work keeps the tree clean.

<!-- END:nextjs-agent-rules -->

# Project: Bangla News (Next.js 16 + React 19)

Single Next.js app. No monorepo, no tests, no CI, no `opencode.json`.

## Commands

- `npm run dev` — dev server
- `npm run build` — production build (also the only typecheck-adjacent gate; there is no `typecheck` or `test` script)
- `npm run lint` — `eslint` (no extra flags in `package.json`)
- `npx tsc --noEmit` — manual typecheck

## Structure

- `src/app/` — App Router pages. Route groups: `(auth)/signin|signup|profile|updateuser`. Dynamic routes: `news/[newsId]`, `category/[categoryId]`. Auth handler: `src/app/api/auth/[...all]/route.ts` (`toNextJsHandler(auth)`).
- `src/lib/auth.ts` — server `betterAuth` + `mongodbAdapter` (db name `project_bangla_news`). `src/lib/auth-client.ts` — client.
- `src/proxy.ts` — route guard (this Next version uses `proxy.ts`, not `middleware.ts`). Matcher: `/profile`, `/news/:path`; unauthenticated redirects to `/`.
- `src/components/`, `src/type/newsDetails.ts`, path alias `@/*` → `./src/*` (`tsconfig.json`).

## Conventions / gotchas

- News data comes from external API `https://news-api-v2.vercel.app/api/news/...`, fetched directly in RSCs (see `src/app/page.tsx`). No local backend or mock layer.
- `next/image` hosts must be allowlisted in `next.config.ts` `images.remotePatterns` — add new hosts there or images break at build/runtime.
- Styling is Tailwind v4 (`@import "tailwindcss"; @plugin "daisyui";` in `src/app/globals.css`) + daisyUI; layout forces `data-theme="light"` and `Noto_Serif_Bengali` font. Use v4 syntax, not v3 `tailwind.config.js`.
- `reactCompiler: true` is on (`next.config.ts` + `babel-plugin-react-compiler`) — don't add manual `useMemo`/`useCallback` just for perf.
- `src/lib/auth-client.ts` quirk: named exports (`signIn`, `useSession`, …) come from a second bare `createAuthClient()` without `baseURL`, while `authClient` has the config. Prefer `authClient.signIn` / `authClient.useSession` or consolidate to one instance; bare imports may misbehave against a non-default `BETTER_AUTH_URL`.
- Env (`.env*`, gitignored — never commit): `BETTER_AUTH_SECRET`, `BETTER_AUTH_URL`, `BETTER_AUTH_MONGO_DB_URI`, `GOOGLE_CLIENT_ID`/`_SECRET`, `GITHUB_CLIENT_ID`/`_SECRET`. Dev/build needs Mongo reachable; auth/social login fails without them.
