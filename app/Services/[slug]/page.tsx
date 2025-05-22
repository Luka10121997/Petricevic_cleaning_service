// app/services/[slug]/page.tsx

import { services } from "@/app/services";
import { notFound } from "next/navigation";

interface PageProps {
  params: { slug: string };
}

export async function generateStaticParams(): Promise<PageProps["params"][]> {
  return services.map((service) => ({ slug: service.slug }));
}

export default function ServicePage({ params }: PageProps) {
  const service = services.find((s) => s.slug === params.slug);

  if (!service) {
    return notFound();
  }

  return (
    <div className="max-w-3xl mx-auto p-8">
      <h1 className="text-3xl font-bold mb-4">{service.title}</h1>
      <p className="text-gray-700 leading-relaxed">{service.description}</p>
    </div>
  );
}
