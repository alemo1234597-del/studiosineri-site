# Directive: Fix Amministratori Navigation (Custom Request)
Goal
Update the Navbar configuration and Page IDs specifically for the Amministratori service.

Step 1: Update Navbar Configuration
Open `lib/navbar-config.ts` and update only the `amministratori` object to look like this:

```typescript
amministratori: {
  links: [
    { label: 'Servizi', href: '#shield' },      // User requested "Servizi" linking to the solution
    { label: 'Diagnosi', href: '#diagnosis' }
  ],
  cta: { label: 'Richiedi Supporto', href: '#contact' }
},
```

Step 2: Add IDs to AmministratoriView
Open `components/services/views/AmministratoriView.tsx`:

- Find the section "La Nostra Soluzione Integrata" (or where "Scudo Penale" is mentioned).
  - Add `id="shield"` to the main container `<div>` of this section. (Note: Remove any conflicting IDs if present).

- Find the section "Diagnosi Tecnica Gratuita" (Look for the PDF/Report icon).
  - Add `id="diagnosis"` to the main container `<div>`.

- Find the Contact Form section at the bottom.
  - Add `id="contact"` to the main container `<div>`.
