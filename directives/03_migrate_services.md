# Directive 03: Migrate Service Pages

## Goal
Migrate 6 raw HTML service pages into the Next.js application, enforcing the **Space Grotesk** font and **#E05D3A** primary color. Remove conflicting styles and integrate the content into the `app/` directory as individual pages.

## Input Files
Located in `.tmp/services_raw/`:
1.  `imprese.html` -> `app/imprese/page.tsx`
2.  `privati.html` -> `app/privati/page.tsx`
3.  `notai.html` -> `app/notai/page.tsx`
4.  `amministratori.html` -> `app/amministratori/page.tsx`
5.  `commerciali.html` -> `app/commerciali/page.tsx`
6.  `agenzia.html` -> `app/agenzie/page.tsx` (Note plural/singular mismatch, will standardize to `agenzie` or `agenzia` based on content, chosen: `agenzie` for "Agenzie Immobiliari")

## Migration Rules

### 1. Typography & Colors (Crucial & Non-Negotiable)
-   **Font**: MUST use `Space Grotesk` (via `font-space` class or global sans).
    -   *Action*: Remove any `<link>` to fonts like *Inter*, *Public Sans*, *Outfit*, etc. from the raw HTML.
    -   *Action*: Remove `font-display`, `font-sans`, `font-mono` classes from the raw HTML unless they map to our Space Grotesk config.
-   **Primary Color**: MUST be `#E05D3A`.
    -   *Action*: Search/Replace `#FF5A36`, `#ff5a36`, `orange-500`, `bg-red-500` (if used as primary) with `bg-primary`, `text-primary`, `border-primary` or the exact hex if needed in arbitrary values.
    -   *Action*: Ensure `tailwind.config.ts` has `primary: '#E05D3A'`. (Already done in step 02, verify).

### 2. Layout Structure
-   **Navbar**: Use the project's `<Navbar />` component.
    -   *Action*: Remove the `<nav>` or `<header>` from the raw HTML.
    -   *Action*: Ensure the new page is wrapped in the root layout (Next.js does this automatically, just don't duplicate the nav).
-   **Footer**: Use the project's `<Footer />` component.
    -   *Action*: Remove the `<footer>` from the raw HTML.

### 3. Component Extraction
-   **Hero Section**:
    -   Each page has a unique Hero.
    -   *Strategy*: Create a specific Hero component for each page if complex (e.g., `app/imprese/_components/HeroImprese.tsx`) OR inline it if it's one-off. Given the visual richness, inlining in the page component is often easier for maintenance unless strictly reusable.
-   **Interactive Elements**:
    -   Scripts (e.g., vanilla JS for tabs, sliders) MUST be converted to **React useState/useEffect**.
    -   *Example*: The "Protocollo Step" or "Sector Switcher" often found in these raw files.
-   **Icons**:
    -   Raw HTML uses `Material Symbols` or `Google Material Icons`.
    -   *Action*: Replace with `lucide-react` icons where possible, or keep the CDN link in `layout.tsx` if strictly necessary (but prefer Lucide for consistency). *Decision*: Try to map to Lucide. If too many, keep the Material Symbols link in the root layout for now to save time, but ensure no conflict.

### 4. Implementation Steps (Per Page)
1.  **Analyze**: Read the `.html` file.
2.  **Scaffold**: Create `app/[slug]/page.tsx`.
3.  **Clean**: Paste HTML, convert `class` -> `className`, close self-closing tags (`<img />`, `<br />`, `<input />`).
4.  **Purge**: Remove `<html>`, `<head>`, `<body>`.
5.  **Refactor**:
    -   Replace Navbar/Footer.
    -   Fix Font/Colors.
    -   Convert styles to Tailwind classes if strictly inline.
    -   Implement interactivity (Tabs, Carousels) with React.
6.  **Verify**: Build and check the page.

## Deliverables
-   6 operational pages in the `app/` directory.
-   Consistent look and feel across the site.
