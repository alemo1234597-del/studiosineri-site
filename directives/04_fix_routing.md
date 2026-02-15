# Directive: Fix Service Grid Routing

## Goal
Update `components/home/ServiceGrid.tsx` to use Dynamic Routing paths instead of Query Parameters.

## Context
Currently, the service cards link to `services?id=category`.
The new architecture uses `/services/[slug]`.

## Execution Steps
1.  **Edit `components/home/ServiceGrid.tsx`**:
    * Find all `<Link>` components.
    * Update the `href` attributes to point to the new slug structure:
        * `id=imprese` $\rightarrow$ `/services/imprese`
        * `id=privati` $\rightarrow$ `/services/privati`
        * `id=notai` $\rightarrow$ `/services/notai`
        * `id=amministratori` $\rightarrow$ `/services/amministratori`
        * `id=commerciali` $\rightarrow$ `/services/commerciali`
        * `id=attivita` $\rightarrow$ `/services/commerciali` (Correct mapping: 'commerciali' covers activities) or similar. *Wait, user said `id=commerciali` -> `/services/commerciali` AND `id=attivita` -> `/services/attivita`? Let's check the existing code and the user's specific mapping request.*
        * User request:
            * `id=imprese` $\rightarrow$ `/services/imprese`
            * `id=privati` $\rightarrow$ `/services/privati`
            * `id=notai` $\rightarrow$ `/services/notai`
            * `id=amministratori` $\rightarrow$ `/services/amministratori`
            * `id=commerciali` $\rightarrow$ `/services/commerciali`
            * `id=attivita` $\rightarrow$ `/services/attivita` (Ensure no accents in URL)
            * `id=agenzie` $\rightarrow$ `/services/agenzie`

    *Note: I need to verify if `attivita` is a valid slug in `app/services/[slug]/page.tsx`. In `app/services/[slug]/page.tsx`, the keys are: `imprese`, `privati`, `notai`, `amministratori`, `commerciali`, `agenzia` (singular). The user request lists `agenzie` (plural). I need to be careful here.*

2.  **Verify Slugs:**
    * Double-check that the slugs used in the `href` match the keys defined in `app/services/[slug]/page.tsx`.

3.  **Cleanup:**
    * If `app/services/page.tsx` (the old parent page) exists, DELETE it to avoid confusion. We only want `app/services/[slug]/page.tsx`.
