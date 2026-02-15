# Directive: Complete Context-Aware Navigation for All Services

## Goal
Populate `lib/navbar-config.ts` for ALL 6 services and add matching `id` tags to the View components so scrolling works.

## Step 1: Update `lib/navbar-config.ts`
Replace the content with this complete configuration:

```typescript
export const NAV_CONFIG = {
  home: {
    links: [
      { label: 'Servizi', href: '#services' },
      { label: 'Progetti', href: '#projects' },
      { label: 'Chi Siamo', href: '#about' }
    ],
    cta: { label: 'Contattaci', href: '#contact' }
  },
  imprese: {
    links: [
      { label: 'Come Funziona', href: '#how-it-works' },
      { label: 'Stato Slot', href: '#status-board' }
    ],
    cta: { label: 'Candidati Ora', href: '#contact' }
  },
  notai: {
    links: [
      { label: 'Protocollo', href: '#protocol' },
      { label: 'Data Room', href: '#data-room' }
    ],
    cta: { label: 'Richiedi Audit', href: '#contact' }
  },
  privati: {
    links: [
      { label: 'Il Tuo Percorso', href: '#path-selection' },
      { label: 'Analisi Rischi', href: '#risks' },
      { label: 'Costi Reali', href: '#costs' }
    ],
    cta: { label: 'Attiva Protocollo', href: '#contact' }
  },
  agenzie: {
    links: [
      { label: 'I 3 Incubi', href: '#pain-points' },
      { label: 'Rogito Blindato', href: '#protocol' }
    ],
    cta: { label: 'Diventa Partner', href: '#contact' }
  },
  amministratori: {
    links: [
      { label: 'Scudo Penale', href: '#solution' },
      { label: 'Diagnosi', href: '#diagnosis' }
    ],
    cta: { label: 'Richiedi Supporto', href: '#contact' }
  },
  attivita: {
    links: [
      { label: 'Requisiti', href: '#requirements' },
      { label: 'Timeline', href: '#timeline' }
    ],
    cta: { label: 'Sopralluogo', href: '#contact' }
  },
  // Fallback for 'commerciali' if using separate slug
  commerciali: {
    links: [
      { label: 'Normative', href: '#requirements' },
      { label: 'Timeline', href: '#timeline' }
    ],
    cta: { label: 'Analisi Preliminare', href: '#contact' }
  }
};
```

## Step 2: Add IDs to View Components (CRITICAL)
You must edit each View component in `components/services/views/` to add the `id` attributes that match the config above.

**`NotaiView.tsx`:**
*   Add `id="protocol"` to the "Protocollo Apex" section.
*   Add `id="data-room"` to the "Data Room Completa" section.
*   Add `id="contact"` to the Form section.

**`PrivatiView.tsx`:**
*   Add `id="path-selection"` to the "Scegli il Tuo Percorso" section.
*   Add `id="risks"` to the "Vendere al Buio" section.
*   Add `id="costs"` to the comparison table.
*   Add `id="contact"` to the Form.

**`AgenzieView.tsx`:**
*   Add `id="pain-points"` to the "3 Incubi" grid.
*   Add `id="protocol"` to the "Protocollo Rogito Blindato" section.
*   Add `id="contact"` to the Form.

**`AmministratoriView.tsx`:**
*   Add `id="solution"` to the "Scudo Penale" section.
*   Add `id="diagnosis"` to the "Diagnosi Tecnica" section.

**`CommercialiView.tsx`:**
*   Add `id="requirements"` to the "Requisiti Critici" section.
*   Add `id="timeline"` to the "Business Key Timeline" section.
*   Add `id="contact"` to the Form.

## Step 3: Verify Slug Passing
Ensure `app/services/[slug]/page.tsx` passes the correct slug prop to the Navbar: `<Navbar variant={slug} />`.
