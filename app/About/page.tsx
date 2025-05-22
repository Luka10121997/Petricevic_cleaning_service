'use client';
import { Container, Flex, Section } from '@radix-ui/themes'
import Link from 'next/link'
import React from 'react'
import Image from 'next/image'
import menImage from '@/app/Images/men-cleaning.jpeg'
import Team from '../Components/cleaners';
import CertificateAndStuffPage from './certificateAndStuff';

const AboutPage = () => {
  return (
    <>
      <Section className='flex flex-col items-center justify-center h-screen aboutSection'>
        <Container>
          <Flex className='row'>
            <Flex className='col col-xs-12'>
              <div>
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
          <Flex direction='row' className='flex-container pt-10 w-600 h-1000'>
            <div className='ml-250 pt-15'>
              <Image src={menImage} alt='menImage' className='w-150 h-140 rounded-full' />
            </div>
            <Flex className='w-120 h-120'>
              <div className='pt-14'>
                <h1 className='text-3xl font-bold' style={{ color: 'rgb(19, 40, 126)' }}>The best cleaning service in city</h1>
              </div>
              <div className='pt-2 flex flex-wrap'>
                <p className='text-1xl font-Mulish'>
                  Mi smo servis za čišćenje Petričević otvoren 2024. godine. Mi kao mlada tvrtka pružamo najbolje iskustvo čišćenja sa profesionalnim, modernim strojevima i vrlo ljubaznim osobljem. Naši klijenti su jako zadovoljni i svugdje nas preporučuju.
                </p>
                <p className='text-1xl font-medium italic pt-2'>
                  Povežimo se i učinimo vaš dom, automobil ili stan sretnim i čistim mjestom.
                </p>
              </div>
            </Flex>
          </Flex>
        </Container>
      </Section>
      <Section className="bg-blue-50 dark:bg-gray-800 py-20 px-6 section">
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
      <Section style={{ borderTopRightRadius: '40%' }} className="bg-blue-50 dark:bg-gray-800 mt-1 py-10">
        <Container>
          <CertificateAndStuffPage />
        </Container>
      </Section>
      <Section className="py-16 bg-blue-50 dark:bg-gray-800">
        <Container>
          <Flex>
            <Team />
          </Flex>
        </Container>
      </Section>
    </>
  )
}

export default AboutPage