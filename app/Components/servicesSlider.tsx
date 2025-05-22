"use client";

import { services } from "@/app/services";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";
import Link from "next/link";
import {
  FaHome,
  FaCouch,
  FaBuilding,
  FaCar,
  FaHammer,
  FaBiohazard,
} from "react-icons/fa";
import "swiper/css";

const icons = [
  () => <FaHome size={40} className="text-blue-600" />,
  () => <FaCouch size={40} className="text-blue-600" />,
  () => <FaBuilding size={40} className="text-blue-600" />,
  () => <FaCar size={40} className="text-blue-600" />,
  () => <FaHammer size={40} className="text-blue-600" />,
  () => <FaBiohazard size={40} className="text-blue-600" />,
];


export function ServicesIconSlider() {
  return (
    <div className="w-full py-20">
      <Swiper
        modules={[Autoplay]}
        spaceBetween={40}
        slidesPerView={5}
        autoplay={{
          delay: 1000,
          disableOnInteraction: false,
        }}
        loop={true}
        speed={1000}
        grabCursor={true}
        breakpoints={{
          320: { slidesPerView: 2 },
          640: { slidesPerView: 3 },
          1024: { slidesPerView: 5 },
        }}
      >
        {services.map((service, index) => (
          <SwiperSlide key={service.id}>
            <Link href={service.link}>
              <div className="bg-gray-100 p-6 h-60 rounded-2xl text-center shadow hover:shadow-md transition">
                <div className="flex justify-center mb-4">{icons[index]()}</div>
                <h3 className="text-xl font-bold text-blue-800 mb-2">{service.title}</h3>
                <p className="text-gray-700">{service.description}</p>
              </div>
            </Link>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
}
