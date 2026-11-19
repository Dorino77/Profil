# Engineering Guidelines

You are working in a real production codebase that other people maintain. Write code the way a careful senior engineer would: understand what is already there, find the actual problem, and make the smallest change that solves it properly.

## How to work

- Read the surrounding code before changing it. Match its structure, naming, and style, even where you would have chosen differently.
- Do what was asked. If you notice something else worth fixing, mention it instead of doing it.
- Reuse what already exists (components, utilities, types) before writing something new.
- Keep the diff small. Do not touch unrelated files, refactor working code, remove existing functionality, or change an API contract without saying so first.
- Add a dependency only when the problem clearly needs one, and check package.json before you do.
- If a request is ambiguous or a decision has real consequences, ask. A quick question is cheaper than a wrong guess.

## Writing style

This applies to code comments, documentation, READMEs, UI text, commit messages, and your own replies.

- No em dashes. Use commas, periods, colons, or parentheses.
- No emojis or decorative symbols unless asked.
- Use plain, direct language. Skip the greeting, the recap, and the praise. Say what changed and why.
- Write a comment only to explain a non-obvious decision. Do not narrate what the code already says.
- Keep READMEs short and accurate. Leave out TODO and FIXME notes that nobody will act on.

## General code

- Choose the readable option over the clever one.
- Name things for what they are in this context.
- Add an abstraction when there is a second real use for it, not in anticipation of one.
- Keep functions short and single-purpose. Flatten nesting with early returns.
- Replace magic numbers and repeated string literals with named constants.
- Delete the unused imports, variables, and dead code your change leaves behind.
- Skip fallbacks and defensive checks for situations that cannot happen. Do handle real failures, especially at boundaries.

## JavaScript and TypeScript

- Use `const` by default and never `var`. Use `===` and `!==`.
- Prefer async/await over promise chains and nested callbacks.
- Use optional chaining and nullish coalescing where they make the code clearer.
- Avoid implicit type coercion.
- Prefer functions and modules over classes unless the project already uses classes.
- Use named exports, unless the framework or project requires default exports.

For TypeScript:

- Type public interfaces and complex data. Let inference handle the trivial cases.
- Do not use `any`. Use `unknown` when the type is truly uncertain, then narrow it.
- Do not use type assertions to silence a real type error. Fix the type.
- Use interfaces for extendable object shapes and type aliases for unions and compositions.
- Use discriminated unions for state that has several distinct modes.
- Define types next to the code that owns them. Share them only when needed, and do not duplicate them.

## React

- Use functional components and hooks, and follow the Rules of Hooks.
- Give each component one clear job. Extract a component when reuse or readability justifies it, not for a trivial fragment.
- Keep state close to where it is used. Do not store what you can derive during render.
- Use functional updates when the next state depends on the previous one.
- Prefer a single status value (or a discriminated union) over several booleans.
- Use `useEffect` to sync with external systems, not to compute values or copy state. Clean up subscriptions and listeners, and know why each dependency is listed.
- Reach for `useMemo` and `useCallback` only when there is a measured problem or a real need for stable references.
- Do not use global state or context for a local concern.
- Use stable keys. Do not use array indexes when items can be reordered, inserted, or removed.
- Use semantic HTML and correct accessibility attributes.

## Next.js

- Follow the existing routing setup and file conventions (`layout.tsx`, `page.tsx`, `loading.tsx`, `error.tsx`, `not-found.tsx`).
- Default to Server Components. Use `"use client"` only for browser APIs, event handlers, local interactive state, or client-side hooks, and keep the boundary as small as practical.
- Fetch data on the server where possible and avoid duplicate requests. Understand the caching and revalidation behavior before changing it.
- Keep server-only code and secret environment variables out of client modules.
- Handle loading, empty, and error states.
- Use `next/image`, `next/font`, and the Metadata API where they fit. Do not stuff pages with SEO keywords.
- Add optimizations such as dynamic imports only when they bring a real benefit.

## Backend and APIs

- Validate input at the boundaries: request params, request bodies, and responses from external APIs. Never trust user input.
- Handle errors explicitly. Log details internally and return safe messages to clients.
- Use appropriate HTTP status codes and keep response shapes consistent with the existing API.
- Keep secrets and configuration in environment variables, never in code.
- Avoid N+1 queries, fetch only the data you need, and paginate lists. Use a transaction when related writes must succeed or fail together.
- Do not add middleware or service and repository layers without a concrete need.
- Do not put mock data in production code.

## Styling and UI

- Use the existing styling approach, design tokens, CSS variables, and components. Do not mix styling systems without a reason.
- Do not redesign existing interfaces unless asked.
- Keep spacing, typography, and colors consistent with the rest of the app.
- Keep it restrained: no animation, gradient, shadow, or decoration without a functional purpose. Respect `prefers-reduced-motion`.
- Use semantic class names and remove styles you stop using.
- Make sure the result is accessible and responsive.

## Before you call it done

Run what the project already has: tests, lint, type checking, and a build when the change warrants it. Fix anything you broke. Do not edit tests just to make incorrect code pass.

Report only what you actually ran, and say plainly what you did not verify.

Then take a last look:

- Does this solve what was asked?
- Does it fit the existing architecture?
- Is there anything left that I can remove?
- Did I touch unrelated files?
- Is existing behavior preserved?

## The principle

Every decision should have a technical reason you could explain in a code review. Optimize for correctness, simplicity, readability, maintainability, consistency, and accessibility, not for the amount of code produced.
