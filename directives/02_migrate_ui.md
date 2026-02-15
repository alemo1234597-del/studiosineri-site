# Directive: Migrate Homepage & Design System (v2)

## Goal
Port the provided `code.html` into the Next.js application, establishing the "Apex Surveying" design system (Colors, Fonts, UI).

## Input Data
* **Source:** `code.html` (User will provide content).
* **Visual Reference:** `screen.jpg`.

## Step 1: Design System Configuration (CRITICAL)
Before touching the UI, the Agent must configure `tailwind.config.ts` and `app/globals.css` to match the source HTML exactly:

1.  **Colors (from source script):**
    * `primary`: `#E05D3A` (Safety Orange)
    * `background-dark`: `#020617` (Midnight Navy)
    * `background-darker`: `#000205`
    * `glass-border`: `rgba(255, 255, 255, 0.06)`
2.  **Fonts:**
    * Install `Space Grotesk` using `next/font/google` in `app/layout.tsx`.
    * Variable name: `--font-space-grotesk`.
3.  **Custom CSS (Glassmorphism):**
    * Extract the `.glass-panel`, `.liquid-btn`, and `.neon-glow` classes from the HTML `<style>` block and move them into `app/globals.css` (using `@layer components`).

## Step 2: Component Architecture
Break `code.html` into these components:
1.  **`components/layout/Navbar.tsx`**: The floating glass navbar.
2.  **`components/home/Hero.tsx`**: The main section with the background image.
3.  **`components/home/ServiceGrid.tsx`**: The section with the 6 cards.
    * **Logic:** Each card must be a `<Link href="/services?id=CATEGORY_ID">`.
    * **Icons:** Map the "Material Symbols" to `lucide-react` equivalents (e.g., `engineering` -> `HardHat`, `gavel` -> `Gavel`).
4.  **`components/home/Founder.tsx`**: The section with Ing. Marco Rossi.
5.  **`components/home/Testimonials.tsx`**: The scrolling review section.

## Step 3: Execution
1.  **File Creation:** Create the components above.
2.  **Page Assembly:** Import all components into `app/page.tsx`.
3.  **Cleanup:** Ensure no `<script src="cdn.tailwindcss">` remains.

## User Action Required
* The Agent should ask the user to paste the raw content of `code.html` into a file named `.tmp/code.html` before processing.
