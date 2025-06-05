'use client';
import { Container, Flex, Section } from '@radix-ui/themes'
import Link from 'next/link'
import React, { useEffect, useState } from 'react'
import Image from 'next/image'
import majaImage from '../../public/images/home/maja_cleaning.jpg'
import Team from '../Components/cleaners';
import CertificateAndStuffPage from './certificateAndStuff';

const AboutPage = () => {

  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsVisible(true);
    }, 300);
    return () => clearTimeout(timer);
  }, []);

  return (
    <>
      <Section className='flex flex-col items-center justify-center h-screen aboutSection'>
        <Container>
          <Flex className='row'>
            <Flex className='col col-xs-12'>
              <div className='text-center'>
                <h2 className='font-bold text-6xl text-center'>
                  About us
                </h2>
                <ol>
                  <li className='display: inline-block'>
                    <Link href='/' className='font-bold'>Home</Link>
                    <span>/</span>
                  </li>
                  <li className='display: inline-block'>
                    <span className='font-bold'>About</span>
                  </li>
                </ol>
              </div>
            </Flex>
          </Flex>
        </Container>
      </Section>
      <Section style={{ backgroundColor: "#eeeeee" }}>
        <Container>
          <Flex className="flex-container pt-10 flex-wrap items-center justify-center gap-8">
            <div
              className={`pt-4 transform transition-all duration-1000 ease-out ${isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-20'
                }`}
            >
              <Image
                src={majaImage}
                alt="majaImage"
                className="md:w-82 md:h-68 lg:w-[600px] lg:h-[570px] rounded-full"
              />
            </div>
            <Flex className="flex flex-col max-w-xl">
              <div className="pt-4 text-center sm:text-left">
                <h1 className="text-3xl font-bold text-[rgb(19,40,126)]">
                  The best cleaning service in city
                </h1>
              </div>
              <div className="pt-2 flex text-center sm:text-left flex-wrap">
                <p className="text-lg font-mulish">
                  Mi smo servis za čišćenje Petričević otvoren 2024. godine. Mi kao mlada tvrtka pružamo najbolje iskustvo čišćenja sa profesionalnim, modernim strojevima i vrlo ljubaznim osobljem. Naši klijenti su jako zadovoljni i svugdje nas preporučuju.
                </p>
                <p className="text-lg font-medium italic pt-2">
                  Povežimo se i učinimo vaš dom, automobil ili stan sretnim i čistim mjestom.
                </p>
              </div>
            </Flex>
          </Flex>
        </Container>
      </Section>
      <Section className="bg-blue-50 dark:bg-gray-800 py-20 px-6 section fade-in">
        <Container>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 max-w-6xl mx-auto">
            {/* Vizija */}
            <div className="bg-white dark:bg-gray-900 p-8 rounded-2xl shadow-md hover:shadow-lg transition duration-300">
              <div className="flex items-center gap-3 mb-4">
                <span className="text-blue-600 text-3xl">🌟</span>
                <h2 className="text-3xl md:text-4xl font-bold text-blue-900 dark:text-white">
                  Naša vizija
                </h2>
              </div>
              <p className="text-lg text-gray-800 dark:text-gray-300 leading-relaxed">
                Naša vizija je postati vodeća usluga čišćenja u Splitsko-dalmatinskoj županiji, poznata po profesionalnosti,
                povjerenju i izvanrednoj kvaliteti. Cilj nam je izgraditi dugoročne odnose s našim klijentima kroz pouzdanu i
                kvalitetnu uslugu, korištenje ekološki prihvatljivih sredstava i kontinuirano usavršavanje naših vještina.
              </p>
            </div>

            {/* Tajming i iskustvo */}
            <div className="bg-white dark:bg-gray-900 p-8 rounded-2xl shadow-md hover:shadow-lg transition duration-300">
              <div className="flex items-center gap-3 mb-4">
                <span className="text-blue-600 text-3xl">⏱️</span>
                <h2 className="text-3xl md:text-4xl font-bold text-blue-900 dark:text-white">
                  Tajming i iskustvo
                </h2>
              </div>
              <div className='pt-2 flex flex-wrap'>
                <p className="text-lg text-gray-800 dark:text-gray-300 leading-relaxed mb-4">
                  Iako smo osnovani 2024. godine, naš tim ima višegodišnje iskustvo u industriji čišćenja.
                  Ponosimo se brzim odzivom, fleksibilnošću i preciznošću.
                </p>
                <p className="text-lg text-gray-800 dark:text-gray-300 leading-relaxed">
                  Naš radni raspored je prilagodljiv — dostupni smo prema vašim potrebama, bilo radnim danima
                  ili vikendom. Naš cilj je učiniti proces čišćenja potpuno bezbrižnim i efikasnim.
                </p>
              </div>
            </div>
          </div>
        </Container>
      </Section>
      <Section style={{ borderTopRightRadius: '40%' }} className="bg-blue-50 dark:bg-gray-800 mt-1 py-10 fade-in">
        <Container>
          <CertificateAndStuffPage />
        </Container>
      </Section>
      <Section className="py-16 bg-blue-50 dark:bg-gray-800">
        <Container>
          <Flex direction={{ md: 'column' }} align={{ md: 'center' }}>
            <Team />
          </Flex>
        </Container>
      </Section>
    </>
  )
}

export default AboutPage