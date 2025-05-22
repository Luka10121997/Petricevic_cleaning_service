'use client';
import React from 'react'
import Image from 'next/image'
import { FaCertificate, FaTools, FaLeaf } from 'react-icons/fa'
import certificateImage from '@/app/Images/certificate.png'

const CertificateAndStuffPage = () => {
  return (
    <div>
      <h2 className="text-3xl font-bold text-center mb-12" style={{ color: 'rgb(19, 40, 126)' }}>
        Certifikati i oprema
      </h2>
      <div className="max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-10 text-center">
        {/* Certifikati */}
        <div className="p-6 bg-white rounded-2xl shadow-md hover:shadow-lg transition duration-300">
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
              className="rounded shadow"
              style={{ borderBottomLeftRadius: '45%', borderBottomRightRadius: '45%', borderTopLeftRadius: '45%', borderTopRightRadius: '45%' }}
            />
          </div>
        </div>
        {/* Oprema */}
        <div className="p-6 bg-white rounded-2xl shadow-md hover:shadow-lg transition duration-300">
          <FaTools className="mx-auto text-blue-600 mb-4" size={50} />
          <h3 className="text-xl font-semibold mb-2">Moderna oprema</h3>
          <p className="text-gray-700">
            Koristimo najnovije strojeve i alate za čišćenje, što nam omogućuje učinkovito i temeljito čišćenje.
          </p>
        </div>

        {/* Ekološki pristup */}
        <div className="p-6 bg-white rounded-2xl shadow-md hover:shadow-lg transition duration-300">
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