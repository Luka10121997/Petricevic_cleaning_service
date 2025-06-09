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
          0: { slidesPerView: 1 },      // za sve manje od 640px
          640: { slidesPerView: 2 },
          1024: { slidesPerView: 5 },
        }}
      >
        {services.map((service, index) => (
          <SwiperSlide key={service.id}>
            <Link href={service.link}>
              <div className="bg-gray-100 p-6 h-full sm:h-60 rounded-2xl text-center sm:text-center shadow hover:bg-blue-400 hover:text-white duration-300">
                <div className="flex justify-center mb-4">{icons[index]()}</div>
                <h3 className="text-xl font-bold text-blue-800 mb-2 hover:text-white">{service.title}</h3>
                <p className="text-gray-700  hover:text-white">{service.description}</p>
              </div>
            </Link>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
}
