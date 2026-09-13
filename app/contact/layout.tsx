import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Contact Us | Start Your Web & Digital Project",
  description: "Get in touch with TWELIZA Digital Solutions to discuss your next web design, 3D web experience, e-commerce, or UI/UX project. Direct email twelizadigital@gmail.com or WhatsApp +94 74 226 9976.",
  alternates: {
    canonical: "/contact",
  },
  openGraph: {
    title: "Contact TWELIZA Digital Solutions | Project Inquiry",
    description: "Reach out to discuss your website or digital software requirements.",
    url: "https://tweliza.com/contact",
  },
};

export default function ContactLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
