# Directive: Fix Navigation for Notai Page
Goal
Ensure the Navbar on `/services/notai` shows custom links and that scrolling works.

## Step 1: Enforce Config
Update `lib/navbar-config.ts` to ensure the `notai` key is exactly this:

```typescript
notai: {
  links: [
    { label: 'Problemi', href: '#problems' },
    { label: 'Protocollo', href: '#protocol' },
    { label: 'Data Room', href: '#data-room' }
  ],
  cta: { label: 'Richiedi Audit', href: '#contact' }
},
```

## Step 2: Tag the Sections (CRITICAL)
Edit `components/services/views/NotaiView.tsx`:

- Find the "Perché gli atti saltano" section wrapper and add `id="problems"`.
- Find the "Il Protocollo Apex" section wrapper and add `id="protocol"`.
- Find the "Data Room Completa" section wrapper and add `id="data-room"`.
- Find the Contact Form section and add `id="contact"`.

## Step 3: Verify Page Prop
Check `app/services/[slug]/page.tsx` to ensure it passes `<Navbar variant={slug} />`.
