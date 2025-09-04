"use client";

import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/autoplay";
import { Autoplay } from "swiper/modules";

import {
  FaHandsWash,
  FaSoap,
  FaTshirt,
  FaWindowRestore
} from "react-icons/fa";

const icons = [
  { id: 1, icon: <FaHandsWash />, label: "Hand Wash" },
  { id: 2, icon: <FaSoap />, label: "Soap" },
  { id: 3, icon: <FaTshirt />, label: "Laundry" },
  { id: 4, icon: <FaWindowRestore />, label: "Window Clean" },
  { id: 5, icon: <FaSoap />, label: "Extra" },
  { id: 6, icon: <FaTshirt />, label: "More" },
];

export default function IconSlider() {
  return (
    <div className="w-full py-10">
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
        {icons.map((item) => (
          <SwiperSlide key={item.id}>
            <div className="flex flex-col items-center text-gray-500 hover:text-blue-500 transition duration-300">
              <div className="text-4xl mb-2">{item.icon}</div>
              <span className="text-sm">{item.label}</span>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
}