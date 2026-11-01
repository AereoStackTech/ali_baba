import type { Metadata } from 'next';
import { Plus_Jakarta_Sans } from 'next/font/google';
import './globals.css';

const jakarta = Plus_Jakarta_Sans({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-jakarta',
});

export const metadata: Metadata = {
  title: 'Ali Baba Grill & Shawarma | Snack Populaire à Safi (1–50 MAD)',
  description: 'Independent portfolio concept for a popular neighborhood snack restaurant offering specialty shawarma, loaded sandwiches, traditional platters, and fast takeaway in Safi, Morocco.',
  openGraph: {
    title: 'Ali Baba Grill & Shawarma | Snack Populaire à Safi',
    description: 'Independent portfolio concept for a popular neighborhood snack restaurant offering specialty shawarma, loaded sandwiches, traditional platters, and fast takeaway in Safi, Morocco.',
    type: 'website',
    locale: 'fr_FR',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Ali Baba Grill & Shawarma | Snack Populaire à Safi',
    description: 'Independent portfolio concept for a popular neighborhood snack restaurant offering specialty shawarma, loaded sandwiches, traditional platters, and fast takeaway in Safi, Morocco.',
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="fr" className={jakarta.variable}>
      <body className="min-h-screen bg-[#0c0d10] text-stone-100 antialiased font-sans selection:bg-amber-500 selection:text-black" suppressHydrationWarning>
        {children}
      </body>
    </html>
  );
}
