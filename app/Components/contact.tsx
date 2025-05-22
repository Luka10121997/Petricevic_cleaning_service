'use client';
import { FaMapMarkerAlt } from "react-icons/fa";
import { FaEnvelope, FaPhone } from "react-icons/fa6";

export default function Contact() {
  const cards = [
    {
      icon: <FaMapMarkerAlt className="text-3xl text-blue-600" />,
      title: 'Address',
      details: ['Suhač 6B , Sinj, Croatia'
      ],
    },
    {
      icon: <FaEnvelope className="text-3xl text-blue-600" />,
      title: 'Email Us',
      details: ['usluge.ciscenja.petricevic@gmail.com'],
    },
    {
      icon: <FaPhone className="text-3xl text-blue-600" />,
      title: 'Call Now',
      details: ['+385 993 790 170', '+385 957 210 020'],
    },
  ];

  return (
    <div className="flex items-center justify-center bg-white py-10">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 w-full max-w-6xl self-start pt-2">
        {cards.map((card, idx) => (
          <div
            key={idx}
            className="rounded-xl shadow-md p-8 text-center transition hover:shadow-xl" style={{ backgroundColor: "rgb(246, 250, 255)" }}
          >
            <div className="flex justify-center">
              <div className="bg-gray-100 p-4 rounded-full">
                {card.icon}
              </div>
            </div>
            <h3 className="text-lg font-semibold text-blue-900 mb-1">{card.title}</h3>
            {card.title === 'Call Now' ? (
              card.details.map((detail, i) => (
                <p key={i} className="text-sm text-gray-700">
                  <br />{detail} <br />
                </p>
              ))
            ) : (
              <p className="text-sm text-gray-700  whitespace-pre-line">
                <br />{card.details.join(' ')} <br />
              </p>
            )}
          </div>
        ))}
      </div>
    </div>
  );
}