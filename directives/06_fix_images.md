# Directive: Configure Image Domains

## Goal
Fix the Invalid src prop error by allowing external image domains in the Next.js configuration.

## Execution Steps
Edit `next.config.ts` (or `next.config.mjs`):

1.  Locate the images configuration object.
2.  Add `remotePatterns` to allow the required domains.

## Required Configuration
Update the config to look like this:

```typescript
const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'images.unsplash.com',
      },
      {
        protocol: 'http',
        hostname: '*.googleusercontent.com',
      },
      {
        protocol: 'https',
        hostname: '*.googleusercontent.com',
      },
      {
        protocol: 'https',
        hostname: 'lh3.googleusercontent.com',
      }
    ],
  },
};
```
