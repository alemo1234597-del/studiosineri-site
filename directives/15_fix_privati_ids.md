# Directive: Add Scroll Targets to Privati Page
Goal
Add `id` attributes to `components/services/views/PrivatiView.tsx` to match `lib/navbar-config.ts`.

Execution
Edit `components/services/views/PrivatiView.tsx`:

- Find "Scegli il Tuo Percorso" (the section with the Buyer/Seller cards).
  - Add `id="path"` to the main container.

- Find "Vendere al Buio" (the section with the red text/warning).
  - Add `id="risks"` to the container.

- Find "Imprevisto vs Costo Reale" (the comparison table section).
  - Add `id="comparison"` to the container.

- Find the Contact Form (bottom).
  - Add `id="contact"` to the container.
