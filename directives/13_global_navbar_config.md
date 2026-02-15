# Directive: Global Navbar Configuration (All Services)
Goal
Populate `lib/navbar-config.ts` with the specific menu links for all 6 services, based on the approved designs.

Action
Overwrite `lib/navbar-config.ts` with this EXACT code:

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
  // 1. IMPRESE (Construction)
  imprese: {
    links: [
      { label: 'Come Funziona', href: '#how-it-works' }, // Links to "Come Funziona il Protocollo"
      { label: 'Stato Slot', href: '#status-board' }     // Links to the Table
    ],
    cta: { label: 'Candidati', href: '#contact' }
  },

  // 2. NOTAI (Notaries)
  notai: {
    links: [
      { label: 'Problemi', href: '#problems' },       // Links to "Perché gli atti saltano"
      { label: 'Protocollo', href: '#protocol' },     // Links to "Il Protocollo Apex"
      { label: 'Data Room', href: '#data-room' }      // Links to "Data Room Completa"
    ],
    cta: { label: 'Richiedi Audit', href: '#contact' }
  },

  // 3. PRIVATI (Private Individuals)
  privati: {
    links: [
      { label: 'Percorso', href: '#path' },           // Links to "Scegli il Tuo Percorso"
      { label: 'Rischi', href: '#risks' },            // Links to "Vendere al Buio"
      { label: 'Confronto', href: '#comparison' }     // Links to "Imprevisto vs Costo"
    ],
    cta: { label: 'Attiva Protocollo', href: '#contact' }
  },

  // 4. AGENZIE (Real Estate Agencies)
  agenzie: {
    links: [
      { label: 'Incubi', href: '#nightmares' },       // Links to "I 3 Incubi"
      { label: 'Protocollo', href: '#protocol' }      // Links to "Rogito Blindato"
    ],
    cta: { label: 'Diventa Partner', href: '#contact' }
  },

  // 5. AMMINISTRATORI (Condo Admins)
  amministratori: {
    links: [
      { label: 'Scudo Penale', href: '#shield' },     // Links to "Scudo Penale"
      { label: 'Diagnosi', href: '#diagnosis' }       // Links to "Diagnosi Tecnica"
    ],
    cta: { label: 'Richiedi Supporto', href: '#contact' }
  },

  // 6. ATTIVITÀ (Commercial/Retail)
  attivita: {
    links: [
      { label: 'Requisiti', href: '#requirements' },  // Links to "Requisiti Critici"
      { label: 'Timeline', href: '#timeline' }        // Links to "Business Key Timeline"
    ],
    cta: { label: 'Sopralluogo', href: '#contact' }
  },

  // Fallback for different slug spelling
  commerciali: {
    links: [
      { label: 'Requisiti', href: '#requirements' },
      { label: 'Timeline', href: '#timeline' }
    ],
    cta: { label: 'Sopralluogo', href: '#contact' }
  }
};
```
