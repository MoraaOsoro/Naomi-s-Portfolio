import type { Metadata } from "next";
import { Fraunces, Inter } from "next/font/google";
import { person } from "@/lib/data";
import "./globals.css";

const sans = Inter({
  subsets: ["latin"],
  variable: "--font-sans",
  display: "swap",
});

const display = Fraunces({
  subsets: ["latin"],
  weight: ["400", "500", "600"],
  variable: "--font-display",
  display: "swap",
});

const title = `${person.name} — Business IT & Digital Solutions Professional`;
const description = person.positioning;

export const metadata: Metadata = {
  metadataBase: new URL(person.siteUrl),
  title: {
    default: title,
    template: `%s — ${person.name}`,
  },
  description,
  keywords: [
    "Naomi Moraa Osoro",
    "Business IT Professional",
    "Digital Solutions",
    "Power Platform",
    "PowerApps",
    "Power Automate",
    "Power BI",
    "ICT Support",
    "British American Tobacco",
    "Kenya",
  ],
  authors: [{ name: person.name }],
  creator: person.name,
  alternates: {
    canonical: "/",
  },
  openGraph: {
    type: "website",
    url: person.siteUrl,
    title,
    description,
    siteName: `${person.name} — Portfolio`,
    locale: "en_US",
  },
  twitter: {
    card: "summary_large_image",
    title,
    description,
  },
  robots: {
    index: true,
    follow: true,
  },
  icons: {
    icon: "/favicon.svg",
  },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "Person",
  name: person.name,
  jobTitle: person.role,
  description: person.positioning,
  email: `mailto:${person.email}`,
  telephone: person.phone,
  url: person.siteUrl,
  address: {
    "@type": "PostalAddress",
    addressLocality: "Nairobi",
    addressCountry: "KE",
  },
  sameAs: [person.linkedin],
  alumniOf: {
    "@type": "CollegeOrUniversity",
    name: "Mount Kenya University",
  },
  knowsAbout: [
    "Microsoft Power Platform",
    "PowerApps",
    "Power Automate",
    "Power BI",
    "ServiceNow",
    "SAP",
    "ICT Support",
    "Digital Transformation",
    "IT Audit & Compliance",
  ],
};

const themeInitScript = `
(function() {
  try {
    var stored = localStorage.getItem('theme');
    var prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
    var isDark = stored ? stored === 'dark' : prefersDark;
    if (isDark) document.documentElement.classList.add('dark');
  } catch (e) {}
})();
`;

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={`${sans.variable} ${display.variable}`} suppressHydrationWarning>
      <head>
        <script dangerouslySetInnerHTML={{ __html: themeInitScript }} />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body className="font-sans antialiased">
        <a
          href="#top"
          className="sr-only focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:z-[100] focus:rounded-full focus:bg-ink focus:px-4 focus:py-2 focus:text-sm focus:font-medium focus:text-paper"
        >
          Skip to content
        </a>
        {children}
      </body>
    </html>
  );
}
