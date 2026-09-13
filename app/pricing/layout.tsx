import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Pricing & Packages | Web Design & Development Investment",
  description: "Transparent pricing for TWELIZA Digital Solutions web development, e-commerce, branding, and digital growth packages. Find the right investment tier for your business.",
  alternates: {
    canonical: "/pricing",
  },
  openGraph: {
    title: "TWELIZA Pricing & Signature Web Packages",
    description: "Explore transparent web design and custom software development packages tailored for businesses.",
    url: "https://tweliza.com/pricing",
  },
};

export default function PricingLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
