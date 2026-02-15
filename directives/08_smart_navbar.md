# Directive: Implement Context-Aware Navigation

## Goal
Refactor `Navbar.tsx` to display unique menu links and CTA buttons based on the current page (Home vs. Specific Service).

## Step 1: Define the Configuration
Create `lib/navbar-config.ts` exporting a `NAV_CONFIG` object.

*   **Keys**: `home`, `imprese`, `notai`, `privati`, etc.
*   **Value Structure**: `{ links: { label: string, href: string }[], cta: { label: string, href: string } }`

**Imprese Config:**
*   **Links**: "Come Funziona" (`#how-it-works`), "Stato Slot" (`#status-board`)
*   **CTA**: "Candidati" (`#contact`)

**Default Config**: Use generic links for other services for now.

## Step 2: Refactor Navbar Component
Update `components/layout/Navbar.tsx`:

*   Accept a prop: `variant?: string` (default to `'home'`).
*   Use the variant to look up data in `NAV_CONFIG`.
*   Render the specific links and CTA text.

## Step 3: Update Service Layout
Update `app/services/[slug]/page.tsx`:

*   Pass the slug as the `variant` to the `<Navbar />`.

## Step 4: Add Section IDs (Crucial for Scrolling)
Update `components/services/views/ImpreseView.tsx`:

*   Add `id="how-it-works"` to the Protocol section.
*   Add `id="status-board"` to the Status Table section.
*   Add `id="contact"` to the Form section.
