import type { Metadata, Viewport } from "next";
import { Geist, Inter, JetBrains_Mono } from "next/font/google";
import "./globals.css";
import { Navbar } from "@/components/layout/navbar";
import { Footer } from "@/components/layout/footer";
import { MotionProvider } from "@/components/animations/motion-provider";
import { SITE } from "@/lib/constants";
import { jsonLd, localBusinessSchema } from "@/lib/schema";

const geist = Geist({
  subsets: ["latin"],
  variable: "--font-geist",
  display: "swap",
});

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

const jetbrains = JetBrains_Mono({
  subsets: ["latin"],
  variable: "--font-jetbrains",
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL(SITE.url),
  title: {
    default: "Mecha Auto Spa | Premium Mobile Detailing in Rochester, MN",
    template: "%s | Mecha Auto Spa",
  },
  description: SITE.description,
  keywords: [
    "Rochester MN detailing",
    "mobile detailing Rochester",
    "ceramic coating Rochester MN",
    "paint correction Minnesota",
    "auto detailing Winona MN",
  ],
  openGraph: {
    type: "website",
    siteName: SITE.name,
    title: "Mecha Auto Spa | Premium Mobile Detailing in Rochester, MN",
    description: SITE.description,
    images: [{ url: "/images/mustang-hero.jpg", width: 1179, height: 1916 }],
  },
  twitter: {
    card: "summary_large_image",
  },
  robots: { index: true, follow: true },
};

export const viewport: Viewport = {
  themeColor: "#090909",
  colorScheme: "dark",
};

// GitHub Pages cannot set response headers, so the CSP ships as a meta tag
// (React hoists it into <head>). Everything is self-hosted; the only
// cross-origin request the site ever makes is the quote-form POST, whose
// origin is derived from constants so the policy tracks it automatically.
// 'unsafe-inline' script-src is required by Next's inline hydration scripts.
// Production-only: Next dev tooling needs eval and websockets.
const csp = [
  "default-src 'self'",
  "script-src 'self' 'unsafe-inline'",
  "style-src 'self' 'unsafe-inline'",
  "img-src 'self' data:",
  "font-src 'self'",
  `connect-src 'self'${
    SITE.quoteEndpoint ? ` ${new URL(SITE.quoteEndpoint).origin}` : ""
  }`,
  "object-src 'none'",
  "base-uri 'none'",
  "form-action 'self'",
  "frame-src 'none'",
].join("; ");

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="dark">
      <body
        className={`${geist.variable} ${inter.variable} ${jetbrains.variable} font-sans antialiased`}
      >
        {process.env.NODE_ENV === "production" && (
          <meta httpEquiv="Content-Security-Policy" content={csp} />
        )}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={jsonLd(localBusinessSchema())}
        />
        <MotionProvider>
          <a
            href="#main"
            className="sr-only focus:not-sr-only focus:fixed focus:top-4 focus:left-4 focus:z-[100] focus:rounded-lg focus:bg-primary focus:px-4 focus:py-2 focus:text-sm focus:font-medium focus:text-primary-foreground"
          >
            Skip to content
          </a>
          <Navbar />
          <main id="main">{children}</main>
          <Footer />
        </MotionProvider>
      </body>
    </html>
  );
}
