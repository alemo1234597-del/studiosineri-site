# Directive: Rewrite Navbar for Dynamic Variants
Goal
Completely replace `components/layout/Navbar.tsx` to ensure it correctly reads the `variant` prop and loads the corresponding config.

## Step 1: Overwrite components/layout/Navbar.tsx
Replace the ENTIRE file with this code (fixing syntax errors and ensuring complete structure):

```typescript
'use client';
import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { NAV_CONFIG } from '@/lib/navbar-config';
import { Menu, X, ArrowRight, DraftingCompass } from 'lucide-react'; // Added DraftingCompass for Logo logic if needed, or stick to user provided
import { cn } from '@/lib/utils'; // Assuming cn is needed or just use template literals

interface NavbarProps {
  variant?: string;
}

export default function Navbar({ variant = 'home' }: NavbarProps) {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  // 1. Get the config for this variant, or fallback to home
  // We force lowercase to ensure matching (e.g. 'Notai' -> 'notai')
  const activeKey = variant.toLowerCase();
  const config = NAV_CONFIG[activeKey as keyof typeof NAV_CONFIG] || NAV_CONFIG.home;

  // DEBUG: Uncomment to see what's happening in console
  // console.log('Navbar Variant:', variant, 'Active Config:', config);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${ scrolled ? 'py-4 bg-[#020617]/80 backdrop-blur-md border-b border-white/5' : 'py-6 bg-transparent' }`}>
        <div className="container mx-auto px-6 flex items-center justify-between">
            {/* LOGO (Restored from previous version context if missing in snippet) */}
            <Link href="/" className="flex items-center gap-2 text-white hover:opacity-80 transition-opacity">
                <DraftingCompass className="w-6 h-6 text-primary" />
                <span className="font-bold tracking-tight text-lg">APEX</span>
            </Link>

            {/* DESKTOP LINKS */}
            <div className="hidden md:flex items-center gap-8">
            {config.links.map((link, idx) => (
                <Link
                key={idx}
                href={link.href}
                className="text-sm font-medium text-gray-300 hover:text-white transition-colors uppercase tracking-wider"
                >
                {link.label}
                </Link>
            ))}
            </div>

            {/* CTA BUTTON */}
            <div className="hidden md:block">
            <Link
                href={config.cta.href}
                className="px-6 py-2.5 bg-primary hover:bg-orange-600 text-white text-sm font-bold rounded-full transition-all flex items-center gap-2 shadow-[0_0_20px_rgba(224,93,58,0.3)] hover:shadow-[0_0_30px_rgba(224,93,58,0.5)]"
            >
                {config.cta.label}
                <ArrowRight className="w-4 h-4" />
            </Link>
            </div>

            {/* MOBILE MENU TOGGLE */}
            <button onClick={() => setIsOpen(!isOpen)} className="md:hidden text-white">
            {isOpen ? <X /> : <Menu />}
            </button>
        </div>

      {/* MOBILE MENU */}
      {isOpen && (
        <div className="absolute top-full left-0 right-0 bg-[#020617] border-b border-white/10 p-6 md:hidden flex flex-col gap-4 shadow-2xl">
          {config.links.map((link, idx) => (
            <Link
              key={idx}
              href={link.href}
              onClick={() => setIsOpen(false)}
              className="text-gray-300 hover:text-white py-2 block border-b border-white/5"
            >
              {link.label}
            </Link>
          ))}
          <Link
            href={config.cta.href}
            onClick={() => setIsOpen(false)}
            className="w-full py-3 bg-primary text-center text-white font-bold rounded mt-4"
          >
            {config.cta.label}
          </Link>
        </div>
      )}
    </nav>
  );
}
```

## Step 2: Verify Slug Passing in Page
Update `app/services/[slug]/page.tsx` to ensure it passes the prop correctly.

```typescript
// Inside the component...
return (
  <main className="bg-background-dark min-h-screen">
    {/* FORCE the variant to be the slug string */}
    <Navbar variant={slug} />
    <ViewComponent />
    <Footer />
  </main>
);
```
