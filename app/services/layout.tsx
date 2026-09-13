import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Services | Web Design, Development & UI/UX Capabilities",
  description: "Explore TWELIZA Digital Solutions services: Custom Web Development, UI/UX Design, E-Commerce Systems, 3D Interactive Web Experiences, Branding, and AI Growth Automation.",
  alternates: {
    canonical: "/services",
  },
  openGraph: {
    title: "TWELIZA Services | Web Design, Development & Digital Growth",
    description: "End-to-end web development, e-commerce, UI/UX design, and 3D web interactive solutions.",
    url: "https://tweliza.com/services",
  },
};

export default function ServicesLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
