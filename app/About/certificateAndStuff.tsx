'use client';
import React from 'react'
import Image from 'next/image'
import { FaCertificate, FaTools, FaLeaf } from 'react-icons/fa'
import certificateImage from '@/app/Images/certificate.png'
import Link from 'next/link';

const CertificateAndStuffPage = () => {
  return (
    <div>
      <h2 className="text-2xl sm:text-3xl font-bold text-center mb-12" style={{ color: 'rgb(19, 40, 126)' }}>
        Certifikati i oprema
      </h2>
      <div className="max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-10 text-center">
        {/* Certifikati */}
        <div className="p-6 bg-white rounded-2xl shadow-md hover:shadow-xl transition duration-300">
          <FaCertificate className="mx-auto text-blue-600 mb-4" size={50} />
          <h3 className="text-xl font-semibold mb-2">Certifikati</h3>
          <p className="text-gray-700">
            Posjedujemo relevantne certifikate koji jamče profesionalnost i sigurnost naših usluga.
          </p>
          <div className="flex justify-center">
            <Image
              src={certificateImage}  // stavi stvarnu putanju do slike
              alt="certificateImage"
              width={200}
              height={150}
              className="rounded shadow transform transition-transform duration-300"
              style={{ borderBottomLeftRadius: '45%', borderBottomRightRadius: '45%', borderTopLeftRadius: '45%', borderTopRightRadius: '45%' }}
            />
          </div>
        </div>
        {/* Oprema */}
        <div className="p-6 bg-white rounded-2xl shadow-md hover:shadow-xl transition duration-300 flex flex-col items-center text-center">
          <FaTools className="text-blue-600 mb-4" size={50} />
          <h3 className="text-xl font-semibold mb-2 text-blue-900">Moderna oprema</h3>
          <p className="text-gray-700 mb-4">
            Koristimo najnovije strojeve i alate za čišćenje, što nam omogućuje učinkovito i temeljito čišćenje.
          </p>
          <Link
            href="/Stuff/"
            className="mt-auto inline-flex items-center gap-2 text-blue-700 hover:text-white border border-blue-600 hover:bg-blue-600 font-medium py-2 px-4 rounded-full transition-all duration-300">
            <span>Provjeri sve naše strojeve</span>
            <svg
              className="w-4 h-4"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
            </svg>
          </Link>
        </div>
        {/* Ekološki pristup */}
        <div className="p-6 bg-white rounded-2xl shadow-md hover:shadow-xl transition duration-300">
          <FaLeaf className="mx-auto text-green-600 mb-4" size={50} />
          <h3 className="text-xl font-semibold mb-2">Ekološki prihvatljivo</h3>
          <p className="text-gray-700">
            Koristimo ekološki prihvatljiva sredstva za čišćenje koja su sigurna za vas i okoliš.
          </p>
        </div>
      </div>
    </div>
  )
}

export default CertificateAndStuffPage