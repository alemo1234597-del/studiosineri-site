# Directive: Custom Navigation for Commerciali Page
Goal
Implement the user's specific menu links ("Problematiche", "Attività", "Metodo") for the Commerciali service.

Step 1: Update Navbar Config
Open `lib/navbar-config.ts` and update the `commerciali` (and `attivita`) object to this EXACT configuration:

```typescript
// Update both keys to be safe
commerciali: {
  links: [
    { label: 'Problematiche', href: '#problems' },
    { label: 'Attività', href: '#sectors' },
    { label: 'Metodo', href: '#method' }
  ],
  cta: { label: 'Analisi Preliminare', href: '#contact' }
},
attivita: {
  links: [
    { label: 'Problematiche', href: '#problems' },
    { label: 'Attività', href: '#sectors' },
    { label: 'Metodo', href: '#method' }
  ],
  cta: { label: 'Analisi Preliminare', href: '#contact' }
},
```

Step 2: Add IDs to CommercialiView
Open `components/services/views/CommercialiView.tsx` (or `AttivitaView.tsx` if that is the active one) and add these IDs:

1. "Problematiche" Target:
   - Find the section titled "L'AFFITTO A VUOTO" (or containing "Bagno Fuori Norma", "Canna Fumaria").
   - Add `id="problems"` to the main container.

2. "Attività" Target:
   - Find the section titled "SCEGLI IL TUO SETTORE" (containing the cards for Food & Horeca, Retail, etc.).
   - Add `id="sectors"` to the main container.

3. "Metodo" Target:
   - Find the section titled "BUSINESS KEY TIMELINE" (or "Protocollo Apex").
   - Add `id="method"` to the main container.
