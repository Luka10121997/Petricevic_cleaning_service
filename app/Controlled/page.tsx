'use client'

import { useState } from 'react'
import Image from 'next/image'

import { Swiper, SwiperClass, SwiperSlide } from 'swiper/react'
import { Autoplay } from 'swiper/modules'
import { images } from '@/app/image'
import { cn } from '@/app/lib/utils'

import 'swiper/css'

export default function ControlledPage() {
  const [swiper, setSwiper] = useState<SwiperClass>()
  const [showNavigation, setShowNavigation] = useState(false)


  return (
    <section className='relative min-h-screen bg-black py-12 text-black text-2xl imageSection'>
      <div className='container'>
        <div className='my-10'>
          <button onClick={() => setShowNavigation(open => !open)}>
            View All
          </button>
        </div>

        {/* navigation */}
        <nav className={cn('my-10', !showNavigation && 'hidden')}>
          <ul className='flex gap-4'>
            {images.map((image, index) => (
              <li key={index}>
                <button
                  onClick={() => {
                    swiper!.slideTo(index)
                    // setShowNavigation(false)
                  }}
                  className='relative block h-20 w-20 overflow-hidden rounded-lg'
                >
                  <Image
                    src={image.src}
                    alt={image.alt}
                    className='block h-full w-full object-cover'
                  />
                </button>
              </li>
            ))}
          </ul>
        </nav>

        {/* Main slides */}
        <Swiper
          spaceBetween={10}
          modules={[Autoplay]}
          autoplay={true}
          onSwiper={setSwiper}
          className='h-96 w-full rounded-lg'
        >
          {images.map((image, index) => (
            <SwiperSlide key={index}>
              <div className='flex h-full w-full items-center justify-center'>
                <Image
                  src={image.src}
                  alt={image.alt}
                  className='block h-full w-full object-cover'
                />
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  )
}