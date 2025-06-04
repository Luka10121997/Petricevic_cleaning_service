'use client';
import React from 'react';
import { FaCheckCircle } from 'react-icons/fa';
import { Container, Section } from '@radix-ui/themes';
import Link from 'next/link';
import { ServicesIconSlider } from '../Components/servicesSlider';




const ServicesPage = () => {
  return (
    <>
      {/* Hero sekcija */}
      <Section className="bg-blue-50 py-20 text-center pt-30">
        <h1 className="text-4xl font-bold text-blue-900">Naše usluge čišćenja</h1>
        <p className="text-gray-600 font-bold mt-4 text-lg">Čistoća u koju se možete pouzdati – dom, ured ili auto.</p>
      </Section>

      {/* Usluge */}
      <Section className="py-16 bg-gradient-to-b from-white via-gray-50 to-white">
        <Container>
          <ServicesIconSlider />
        </Container>
      </Section>

      {/* Zašto mi */}
      <Section className="bg-blue-100 py-16 fade-in">
        <Container>
          <h2 className="text-3xl font-bold text-center text-blue-900 mb-10">Zašto izabrati nas?</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6 max-w-6xl mx-auto text-center">
            <div>
              <FaCheckCircle size={40} className="mx-auto text-green-600 mb-2" />
              <p>Certificirani profesionalci</p>
            </div>
            <div>
              <FaCheckCircle size={40} className="mx-auto text-green-600 mb-2" />
              <p>Ekološka sredstva</p>
            </div>
            <div>
              <FaCheckCircle size={40} className="mx-auto text-green-600 mb-2" />
              <p>Fleksibilan raspored</p>
            </div>
            <div>
              <FaCheckCircle size={40} className="mx-auto text-green-600 mb-2" />
              <p>100% zadovoljstvo</p>
            </div>
          </div>
        </Container>
      </Section>

      {/* CTA */}
      <Section className="bg-blue-400 py-16 text-white text-center fade-in">
        <h2 className="text-3xl font-bold mb-4">Spremni za čisti prostor?</h2>
        <div className="flex flex-col items-center md:block">
          <p className="mb-6 text-lg">Kontaktirajte nas već danas i rezervirajte termin za čišćenje.</p>
          <div className="mt-4">
            <Link
              href="/Contact"
              className="inline-block bg-white text-blue-900 font-bold py-3 px-6 rounded-lg hover:bg-gray-100 transition"
            >
              Zatraži ponudu
            </Link>
          </div>
        </div>
      </Section>

    </>
  );
};

export default ServicesPage;
