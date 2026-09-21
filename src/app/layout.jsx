import { Manrope } from "next/font/google";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { company } from "@/lib/site";
import "./globals.css";

const manrope = Manrope({
  subsets: ["latin"],
  variable: "--font-manrope",
  display: "swap",
});

/** @type {import('next').Metadata} */
export const metadata = {
  metadataBase: new URL("https://innovagesoft.com"),
  title: {
    default:
      "Innovage | Custom Software, Web & Mobile App Development in Canada",
    template: "%s | Innovage",
  },
  description:
    "Innovage builds custom software, SaaS platforms, websites and mobile apps around how your business works. Mississauga-based, 10+ years, 100+ projects delivered.",
  openGraph: {
    type: "website",
    locale: "en_CA",
    siteName: company.legalName,
    title: "Innovage | Custom Software, Web & Mobile App Development in Canada",
    description:
      "Custom software, SaaS platforms, websites and mobile apps built around how your business actually works.",
  },
  alternates: { canonical: "/" },
};

/** @type {import('next').Viewport} */
export const viewport = {
  themeColor: [
    { media: "(prefers-color-scheme: light)", color: "#ffffff" },
    { media: "(prefers-color-scheme: dark)", color: "#0d0a1a" },
  ],
};

/**
 * Runs synchronously during HTML parsing, before first paint:
 *  - restores the saved theme so there is no light-to-dark flash
 *  - marks the document as scripted, which is what arms the scroll reveals
 * See node_modules/next/dist/docs/01-app/02-guides/preventing-flash-before-hydration.md
 */
const headScript = `(function(){var d=document.documentElement;d.classList.add("js");try{var t=localStorage.getItem("theme");if(t==="light"||t==="dark")d.setAttribute("data-theme",t)}catch(e){}})()`;

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={manrope.variable} suppressHydrationWarning>
      <head>
        <script dangerouslySetInnerHTML={{ __html: headScript }} />
      </head>
      <body className="min-h-dvh font-sans antialiased">
        <a
          href="#main"
          className="sr-only focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:z-[100] focus:rounded-full focus:bg-accent focus:px-5 focus:py-2.5 focus:font-bold focus:text-btn-text"
        >
          Skip to content
        </a>
        <Header />
        <main id="main">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
