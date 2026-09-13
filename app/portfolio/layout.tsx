import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Portfolio | 3D Interactive Websites & Web Development Work",
  description: "Browse TWELIZA Digital Solutions portfolio of 3D animated websites, e-commerce platforms, custom web applications, and digital brand experiences.",
  alternates: {
    canonical: "/portfolio",
  },
  openGraph: {
    title: "TWELIZA Portfolio | Featured 3D Web & E-Commerce Case Studies",
    description: "Explore real client web development case studies including Shoe Shop 3D, Aurel Coffee 3D, and custom enterprise systems.",
    url: "https://tweliza.com/portfolio",
  },
};

export default function PortfolioLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
