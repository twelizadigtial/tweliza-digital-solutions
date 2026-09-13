import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "About Us | Luxury Web Studio & Digital Agency",
  description: "Learn about TWELIZA Digital Solutions — a luxury digital studio dedicated to engineering high-performance websites, 3D interactive web experiences, and brand identity systems.",
  alternates: {
    canonical: "/about",
  },
  openGraph: {
    title: "About TWELIZA Digital Solutions | Studio Vision & Story",
    description: "Learn how TWELIZA helps ambitious brands and businesses build a commanding digital presence.",
    url: "https://tweliza.com/about",
  },
};

export default function AboutLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
