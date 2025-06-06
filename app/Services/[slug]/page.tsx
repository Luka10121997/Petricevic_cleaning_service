import { services } from "@/app/services";
import { notFound } from "next/navigation";
import { getGalleryImages } from "@/app/helper/galleryImagesHelper";
import 'swiper/css';
import GallerySwiper from "@/app/Components/galleryComponentSwiper";
import { CheckCircleIcon } from "@heroicons/react/24/solid";
import RelatedServices from "../relatedServices";



interface PageProps {
  params: { slug: string };
}

export default async function ServicePage({ params }: PageProps) {
  const service = services.find((s) => s.slug === params.slug);
  if (!service) return notFound();

  const gallery = getGalleryImages(service.slug);

  return (
    <div className='bg-gradient-to-br from-white via-blue-50 to-green-50 background'>
      <div className="max-w-4xl mx-auto p-8">
        <h1 className="text-3xl font-bold mb-4 text-center sm:text-left">{service.title}</h1>
        <p className="text-gray-800 leading-relaxed mb-6">{service.description}</p>

        {/* Stylizirana kartica sa features i ikonama */}
        {service.features && service.features.length > 0 && (
          <div className="mt-8 bg-white shadow-md rounded-2xl p-6 border border-gray-100 card-animate">
            <h2 className="text-2xl font-semibold mb-4 text-gray-800">Što je uključeno</h2>
            <ul className="space-y-3">
              {service.features.map((feature, index) => {
                return (
                  <li key={index} className="flex items-center space-x-3 text-gray-700">
                    <CheckCircleIcon className="w-6 h-6 text-green-500 flex-shrink-0" />
                    <span className="text-lg">{feature}</span>
                  </li>
                );
              })}
            </ul>
          </div>
        )}

        {service.price && (
          <div className="mt-6 bg-white border border-gray-200 rounded-xl p-6 shadow-sm fade-in">
            <h3 className="text-lg font-semibold text-gray-700 mb-2">Cijena usluge</h3>
            <p className="text-3xl font-bold text-green-600">Već od {service.price} €</p>
            <p className="text-sm text-gray-500 mt-1">
              <br /> Cijena najviše ovisi o kvadraturi i još nekim dodatnim zahtjevima
            </p>
          </div>
        )}
        <div className="mt-12">
          {gallery.length > 0 && <GallerySwiper images={gallery} />}
        </div>
        <div>
          <RelatedServices params={{ slug: params.slug }} />
        </div>
      </div>
    </div>
  );
}
