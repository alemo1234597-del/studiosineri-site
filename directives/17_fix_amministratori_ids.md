# Directive: Add Scroll Targets to Amministratori Page
Goal
Add `id` attributes to `components/services/views/AmministratoriView.tsx` so the Navbar links work.

Execution
Edit `components/services/views/AmministratoriView.tsx`:

- Find "Scudo Penale" (or the section mentioning "Responsabilità Penale" / "Coordinamento Sicurezza").
  - Add `id="shield"` to the main container.

- Find "Diagnosi Tecnica Gratuita" (the section with the report/pdf icon).
  - Add `id="diagnosis"` to the main container.

- Find the Contact Form ("Richiedi Supporto Tecnico").
  - Add `id="contact"` to the main container.
