# Directive: Fix Async Params (Next.js 15+)

## Goal
Fix the Error: `Route used params.slug. params is a Promise` in `app/services/[slug]/page.tsx`.

## Technical Context
The project is running Next.js 15+. Dynamic route parameters are now Promises and must be awaited before access.

## Execution Steps
Refactor `app/services/[slug]/page.tsx`:

1.  Change the default export to an `async` function.
2.  Update the props type to: `{ params: Promise<{ slug: string }> }`.
3.  Inside the component, `await` the `params` before using the `slug`.

## Required Code Pattern
Use this exact pattern:

```typescript
export default async function ServicePage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params; // <--- This await is critical
  // ... logic to find ViewComponent ...
}
```
