import type { Metadata } from "next";
import { SERVICES_DATA } from "@/data/tweliza-data";

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const { slug } = await params;
  const service = SERVICES_DATA.find((s) => s.slug === slug);

  if (!service) {
    return {
      title: "Service Details",
      description: "TWELIZA Digital Solutions service capabilities.",
    };
  }

  return {
    title: `${service.title} | TWELIZA Digital Solutions`,
    description: service.description,
    alternates: {
      canonical: `/services/${service.slug}`,
    },
    openGraph: {
      title: `${service.title} | TWELIZA Services`,
      description: service.description,
      url: `https://tweliza.com/services/${service.slug}`,
      images: [service.image],
    },
  };
}

export default function DynamicServiceLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
