# Directive: FORCE Custom Navigation for Commerciali
Goal
Overwrite the Navbar Config and the View Component to ensure the specific menu items "Problematiche", "Attività", "Metodo" appear and work.

Step 1: Overwrite Navbar Config for Commerciali
Open `lib/navbar-config.ts`. Find the `commerciali` (and `attivita`) keys and REPLACE them with this exact block:

```typescript
  commerciali: {
    links: [
      { label: 'Problematiche', href: '#problems' },
      { label: 'Attività', href: '#sectors' },
      { label: 'Metodo', href: '#method' }
    ],
    cta: { label: 'Analisi Preliminare', href: '#contact' }
  },
  // We update 'attivita' too just in case the slug is different
  attivita: {
    links: [
      { label: 'Problematiche', href: '#problems' },
      { label: 'Attività', href: '#sectors' },
      { label: 'Metodo', href: '#method' }
    ],
    cta: { label: 'Analisi Preliminare', href: '#contact' }
  },
```

Step 2: Update the View Component
Open `components/services/views/CommercialiView.tsx`.

1. **Link 1: "Problematiche"**
   - Search for the section titled "L'AFFITTO A VUOTO".
   - Add `id="problems"` to its main container `<div>` (or section).

2. **Link 2: "Attività"**
   - Search for the section titled "SCEGLI IL TUO SETTORE" (Food & Horeca, Retail, etc.).
   - Add `id="sectors"` to its main container `<div>` (or section).

3. **Link 3: "Metodo"**
   - Search for the section titled "BUSINESS KEY TIMELINE".
   - Add `id="method"` to its main container `<div>` (or section).

4. **CTA**
   - Search for the form at the bottom.
   - Add `id="contact"` to the container.
