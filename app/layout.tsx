import type { Metadata } from "next";
import { Plus_Jakarta_Sans, JetBrains_Mono } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "@/context/theme-context";
import { WhatsAppFloatingButton } from "@/components/ui/whatsapp-button";
import { JsonLd } from "@/components/ui/json-ld";

const jakartaSans = Plus_Jakarta_Sans({
  variable: "--font-sans",
  subsets: ["latin"],
  display: "swap",
});

const jetbrainsMono = JetBrains_Mono({
  variable: "--font-mono",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://tweliza.com"),
  title: {
    default: "TWELIZA Digital Solutions | Web Design, Development & UI/UX Studio",
    template: "%s | TWELIZA Digital Solutions",
  },
  description: "TWELIZA Digital Solutions is a luxury web design, web development, and digital growth studio. We engineer high-performance websites, 3D interactive web experiences, e-commerce platforms, and UI/UX design systems.",
  keywords: [
    "TWELIZA",
    "TWELIZA Digital Solutions",
    "web design",
    "web development",
    "UI/UX design",
    "e-commerce development",
    "digital solutions",
    "freelance software development",
    "3D web development",
    "Next.js agency",
    "custom website design",
    "Sri Lanka digital agency",
    "creative studio"
  ],
  authors: [{ name: "TWELIZA Digital Solutions", url: "https://tweliza.com" }],
  creator: "TWELIZA Digital Solutions",
  publisher: "TWELIZA Digital Solutions",
  alternates: {
    canonical: "/",
  },
  openGraph: {
    title: "TWELIZA Digital Solutions | Web Design, Development & UI/UX Studio",
    description: "High-end digital studio building modern websites, 3D interactive web experiences, e-commerce platforms, and visual design systems.",
    url: "https://tweliza.com",
    siteName: "TWELIZA Digital Solutions",
    locale: "en_US",
    type: "website",
    images: [
      {
        url: "/images/projects/tweliza-digital-solutions.png",
        width: 1200,
        height: 630,
        alt: "TWELIZA Digital Solutions - Web Design, Development & UI/UX Studio",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "TWELIZA Digital Solutions | Web Design & Development Studio",
    description: "Modern web design, 3D interactive experiences, and digital growth solutions.",
    images: ["/images/projects/tweliza-digital-solutions.png"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning data-scroll-behavior="smooth" className="scroll-smooth">
      <body
        className={`${jakartaSans.variable} ${jetbrainsMono.variable} antialiased bg-slate-50 dark:bg-[#070913] text-slate-900 dark:text-slate-100 selection:bg-violet-500 selection:text-white min-h-screen transition-colors duration-300`}
      >
        <JsonLd />
        <ThemeProvider>
          {children}
          <WhatsAppFloatingButton />
        </ThemeProvider>
      </body>
    </html>
  );
}
