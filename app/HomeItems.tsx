'use client'
import { Container, Flex, Heading, Section, Text } from '@radix-ui/themes'
import React, { useEffect, useState } from 'react'
import homeImage from '@/app/Images/cleaning-service.jpeg'
import girlImage from '@/app/Images/girlCleaner.jpg'
import industrialCleanerImage from '@/app/Images/industrial-cleaning-service-floor-machine-260nw-2420639731.webp'
import friendlyImage from '@/app/Images/medium-shot-people-cleaning-building_23-2150454517.avif'
import Image from 'next/image';
import Link from 'next/link';
import IconRowAnimated from './Components/iconsAnimation'
import GallerySwiper from './Components/galleryComponentSwiper'
import Spinner from './Components/spinner'
import { ArrowRight } from 'lucide-react';


const HomeItems = () => {


  const [images, setImages] = useState<string[]>([]);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsVisible(true);
    }, 100); // mala pauza za glatki efekt
    return () => clearTimeout(timer);
  }, []);

  useEffect(() => {
    fetch('/api/gallery/home')
      .then(res => res.json())
      .then(data => setImages(data))
      .catch(err => console.error('Error fetching gallery images:', err));
  }, []);
  return (
    <>
      <Section className="flex flex-col-reverse lg:flex-row items-center justify-between px-6 py-20 lg:py-28 gap-10 max-w-7xl mx-auto">
        {/* Text Content */}
        <div className="text-center lg:text-left max-w-xl">
          <Heading className="text-3xl sm:text-4xl lg:text-6xl font-bold mb-6" style={{ color: 'rgb(19, 40, 126)' }}>
            Need Cleaning Service?
          </Heading>
          <Text className="text-lg lg:text-1xl font-bold" style={{ color: 'rgb(44, 49, 71)' }}>
            <ul className="text-left">
              <li>Mi smo certificirani obrt za čišćenje Petričević.</li>
              <li>Pružamo najbolje usluge čišćenja za vas, vašu tvrtku, vaš dom i vozila.</li>
            </ul>
          </Text>
          <div className="mt-8">
            <Link href="/About" className="btn-theme flex items-center gap-2 justify-center">
              <ArrowRight size={22} />
              Što nudimo
            </Link>
          </div>
        </div>
        {/* Image */}
        <div
          className={`w-full max-w-md lg:max-w-lg xl:max-w-xl flex justify-center transition-opacity duration-1000 
            ${isVisible ? 'opacity-100' : 'opacity-0'
            }`}
        >
          <Image
            src={homeImage}
            alt="home cleaner"
            className="object-cover w-full h-auto shadow-xl imageShape py-2"
          />
        </div>
      </Section>
      <Section className='flex flex-col items-center justify-center background'>
        <Container>
          <div className="mb-10 px-4 text-center">
            <p
              className="text-2xl break-words sm:text-3xl font-bold max-w-xs mx-auto"
              style={{ color: 'rgb(19, 40, 126)' }}
            >
              What can you expect from us?
            </p>
          </div>
          <Flex className='flex-container pt-10'>
            <div className='w-100 h-100 expectedResultsShape'>
              <div className='ml-30 pt-15'>
                <Image src={girlImage} alt='girlImage' className='w-50 h-50 imageExpectedResultsShape'></Image>
              </div>
              <div className='ml-30'>
                <h2 className='text-xl sm:text-2xl font-bold' style={{ color: 'rgb(19, 40, 126)' }}>Easy connecting</h2>
              </div>
            </div>
            <div className='w-100 h-100 expectedResultsShape'>
              <div className='ml-30 pt-15'>
                <Image src={industrialCleanerImage} alt='industrialCleanerImage' className='w-50 h-50 imageExpectedResultsShape'></Image>
              </div>
              <div className='ml-30'>
                <h2 className='text-xl sm:text-2xl font-bold' style={{ color: 'rgb(19, 40, 126)' }}>Get clean and fresh</h2>
              </div>
            </div>
            <div className='w-100 h-100 expectedResultsShape'>
              <div className='ml-30 pt-15'>
                <Image src={friendlyImage} alt='friendlyImage' className='w-50 h-50 imageExpectedResultsShape'></Image>
              </div>
              <div className='ml-30'>
                <h2 className='text-xl sm:text-2xl font-bold' style={{ color: 'rgb(19, 40, 126)' }}>Pleasant and friendly staff</h2>
              </div>
            </div>
          </Flex>
        </Container>
      </Section>
      <Section className='flex flex-col items-center justify-center'>
        <Container>
          <Flex direction='row' justify='between'>
            <Flex className='mt-3 text-center'>
              <Text className='text-2xl sm:text-3xl font-bold' style={{ color: 'rgb(19, 40, 126)' }}>
                What can we do for you?
              </Text>
            </Flex>
            {images.length > 0 ? (
              <div className="w-[90%] max-w-4xl mt-2">
                <GallerySwiper images={images} />
              </div>
            ) :
              <Spinner label='Images loading...' />
            }
          </Flex>
        </Container>
      </Section >
      <Section>
        <Container>
          <Flex direction='row'>
            <div className='mt-5 mb-4 text-center'>
              <Text className='text-2xl sm:text-3xl font-bold pb-7' style={{ color: 'rgb(19, 40, 126)' }}>
                Our targets !
              </Text>
            </div>
            <IconRowAnimated />
          </Flex>
        </Container>
      </Section>
    </>
  )
}

export default HomeItems
