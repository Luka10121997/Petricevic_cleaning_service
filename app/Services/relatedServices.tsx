import { services } from "@/app/services"; // ako je to tvoj data file
import Link from "next/link";

import React from 'react'
import getRelatedService from "../helper/relatedServiceHelper";

interface PageProps {
  params: { slug: string };
}

const RelatedServices = ({ params }: PageProps) => {

  const related = getRelatedService(params.slug, services);
  return (
    <section className="mt-12">
      <h2 className="text-2xl font-semibold mb-6">Ostale usluge</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 card-animate">
        {related.map((service) => (
          <Link href={service.link} key={service.id}>
            <div className="rounded-2xl border p-5 shadow-md hover:shadow-xl transition duration-300 bg-white hover:-translate-y-1 overflow-x-auto">
              <h3 className="text-lg font-bold mb-2">{service.title}</h3>
              <p className="text-sm text-gray-600 mb-3">{service.description}</p>
            </div>
          </Link>
        ))}
      </div>
    </section>
  );
}

export default RelatedServices