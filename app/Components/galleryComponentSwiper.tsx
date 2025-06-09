"use client";

import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import Image from "next/image";
import { Autoplay } from "swiper/modules";

export default function GallerySwiper({ images }: { images: string[] }) {
  return (
    <Swiper
      modules={[Autoplay]}
      spaceBetween={10}
      slidesPerView={1}
      autoplay={{
        delay: 1000,
        disableOnInteraction: false,
      }}
      loop={true}
      speed={1000}
      grabCursor={true}
    >
      {images.map((src, index) => (
        <SwiperSlide key={index} className="w-full flex justify-center items-center">
          <div className="relative w-full aspect-[1/1] sm:aspect-[4/3] overflow-hidden">
            <Image
              src={src}
              alt={`Gallery image ${index + 1}`}
              fill
              className="object-contain rounded fade-in"
              sizes="(max-width: 640px) 100vw, (max-width: 1024px) 80vw, 60vw"
              priority
            />
          </div>
        </SwiperSlide>
      ))}
    </Swiper>
  );
}
