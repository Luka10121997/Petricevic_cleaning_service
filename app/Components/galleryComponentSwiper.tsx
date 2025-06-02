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
      grabCursor={true}>
      {images.map((src, index) => (
        <SwiperSlide key={index}>
          <div className="relative w-full h-[400px] sm:h-[550px] md:h-[600px]">
            <Image
              src={src}
              alt={`Gallery image ${index + 1}`}
              fill
              className="object-cover rounded"
              sizes="(max-width: 768px) 100vw, 80vw"
            />
          </div>
        </SwiperSlide>
      ))}
    </Swiper>
  );
}
