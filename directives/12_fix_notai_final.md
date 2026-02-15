# Directive: Finalize Notai Navigation
Goal
Configure the specific menu links for the "Notai" page and ensure scrolling works.

## Step 1: Force Update Configuration
Update `lib/navbar-config.ts` to ensure the `notai` key is defined and valid.

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
  // SPECIFIC CONFIG FOR NOTAI
  notai: {
    links: [
      { label: 'Problemi', href: '#problems' },
      { label: 'Protocollo', href: '#protocol' },
      { label: 'Data Room', href: '#data-room' }
    ],
    cta: { label: 'Richiedi Audit', href: '#contact' }
  },
  // Ensure other keys exist (preserving existing config if possible, or using placeholders if needed)
  imprese: { links: [ { label: 'Come Funziona', href: '#how-it-works' }, { label: 'Stato Slot', href: '#status-board' } ], cta: { label: 'Candidati Ora', href: '#contact' } },
  privati: { links: [ { label: 'Il Tuo Percorso', href: '#path-selection' }, { label: 'Analisi Rischi', href: '#risks' }, { label: 'Costi Reali', href: '#costs' } ], cta: { label: 'Attiva Protocollo', href: '#contact' } },
  agenzie: { links: [ { label: 'I 3 Incubi', href: '#pain-points' }, { label: 'Rogito Blindato', href: '#protocol' } ], cta: { label: 'Diventa Partner', href: '#contact' } },
  amministratori: { links: [ { label: 'Scudo Penale', href: '#solution' }, { label: 'Diagnosi', href: '#diagnosis' } ], cta: { label: 'Richiedi Supporto', href: '#contact' } },
  commerciali: { links: [ { label: 'Normative', href: '#requirements' }, { label: 'Timeline', href: '#timeline' } ], cta: { label: 'Analisi Preliminare', href: '#contact' } },
  attivita: { links: [], cta: { label: 'Contattaci', href: '#' } } // Fallback/Extra
};
```

## Step 2: Add ID Tags to NotaiView
Edit `components/services/views/NotaiView.tsx` to match the links above.

- "Problemi" Link: Find the section discussing "Perché gli atti saltano" (Dossier Incompleto, etc.) and add `id="problems"` to the main wrapper div.
- "Protocollo" Link: Find the section "Il Protocollo Apex" and add `id="protocol"`.
- "Data Room" Link: Find the dark section with the "Data Room Completa" image/card and add `id="data-room"`.
- "Richiedi Audit" Link: Find the Contact Form section at the bottom and add `id="contact"`.

## Step 3: Verify Page Props
Open `app/services/[slug]/page.tsx` and ensure the Navbar line is exactly:
`<Navbar variant={slug} />`
