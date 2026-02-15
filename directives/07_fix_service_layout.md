# Directive: Fix Missing Navbar & Footer on Service Pages

## Goal
Update `app/services/[slug]/page.tsx` to include the Navbar and Footer components, ensuring consistent navigation across the site.

## Execution Steps
Edit `app/services/[slug]/page.tsx`:

1.  Import `Navbar` from `@/components/layout/Navbar`.
2.  Import `Footer` from `@/components/layout/Footer`.
3.  Wrap the returned `ViewComponent` in a fragment or div that includes the Navbar at the top and Footer at the bottom.

## Required Code Structure
The return statement must look like this:

```typescript
return (
  <main className="bg-background-dark min-h-screen">
    <Navbar />
    <ViewComponent />
    <Footer />
  </main>
);
```
