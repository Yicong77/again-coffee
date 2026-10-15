import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  metadataBase: new URL("https://morrow-coffee-jingan.shrewd-calf-1118.chatgpt.site"),
  title: "Again Coffee — Docklands, Melbourne",
  description:
    "Coffee, freshly made jaffles, and little joys at 6 Import Ln, Docklands.",
  openGraph: {
    title: "Again Coffee — Docklands, Melbourne",
    description: "Coffee, freshly made jaffles, and little joys at 6 Import Ln, Docklands.",
    type: "website",
    locale: "en_US",
    images: [
      {
        url: "/images/again-coffee-og.jpg",
        width: 1200,
        height: 630,
        alt: "Again Coffee — Coffee for slower days.",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Again Coffee — Docklands, Melbourne",
    description: "Coffee, freshly made jaffles, and little joys at 6 Import Ln, Docklands.",
    images: ["/images/again-coffee-og.jpg"],
  },
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
