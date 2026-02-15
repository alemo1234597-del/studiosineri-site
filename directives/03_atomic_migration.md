# Directive 03: Atomic Service Migration

## Goal
Migrate the 6 raw HTML service files from `.tmp/services_raw/` into Next.js, strictly enforcing the "Apex Surveying" Design System (Glassmorphism, Safety Orange #E05D3A, Space Grotesk).

## Input Data
* **Source Content:** `.tmp/services_raw/*.html` (The text and data).
* **Style Source:** `app/globals.css` and `tailwind.config.ts`.

## Step 1: Create the UI Kit (The "Atoms")
Extract reusable components from the Homepage code (`components/home/*`) into a shared UI library (`components/ui/*`).
1.  **`components/ui/GlassPanel.tsx`**: Wrapper with `backdrop-blur-xl`, `border-white/10`, and dark bg.
2.  **`components/ui/SectionHeading.tsx`**: Layout for titles (Orange subtitle + White H2).
3.  **`components/ui/PrimaryButton.tsx`**: The "Liquid" orange button with glow.
4.  **`components/ui/CheckList.tsx`**: Standardized list with checkmarks.
5.  **`components/ui/FeatureCard.tsx`**: Standardized icon + text card.

## Step 2: Build the Service Views
Create specific views for each service in `components/services/views/`.
**CRITICAL:** Do NOT copy the raw CSS/Style tags from the HTML. Use the UI Kit atoms.
* **`components/services/views/ImpreseView.tsx`**:
    * Use `GlassPanel` for the "Status Board".
    * Use `SectionHeading` for the "Perché le Imprese Falliscono" section.
* **`components/services/views/NotaiView.tsx`**:
    * Use `GlassPanel` for the "Data Room" preview.
* **`components/services/views/PrivatiView.tsx`**:
    * Implement the Buyer/Seller toggle using standard React state.
* **`components/services/views/AgenzieView.tsx`**:
    * Rebuild the "Buyer/Seller" toggles or specific agency features.
* *(Repeat for Amministratori, Commerciali)*.

## Step 3: Dynamic Routing
1.  Create `app/services/[slug]/page.tsx`.
2.  Map the slugs:
    * `imprese` -> `<ImpreseView />`
    * `notai` -> `<NotaiView />`
    * `privati` -> `<PrivatiView />`
    * `amministratori` -> `<AmministratoriView />`
    * `commerciali` -> `<CommercialiView />`
    * `agenzie` -> `<AgenzieView />`

## Quality Control
* **Consistency:** All buttons must match the Homepage.
* **Dark Mode:** Force `bg-background-dark`.
* **Font:** ALL text must use Space Grotesk.
* **Color:** ALL primary accents must be #E05D3A.
* **Icons:** Replace all Google Material Symbols with `lucide-react`.
