/* ── Pass-through root layout ──────────────────────────────────
   Next.js App Router requires `src/app/layout.tsx` to exist.
   All real HTML / body / providers live in `src/app/[locale]/layout.tsx`
   so that <html lang> reflects the actual locale and next-intl
   can wrap the tree per request.
─────────────────────────────────────────────────────────────── */
export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
