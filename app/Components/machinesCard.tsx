import Image from 'next/image'
import React from 'react'

interface MachinesCardProps {
  title: string
  description: string
  image: string
}

const MachinesCard = ({ title, description, image }: MachinesCardProps) => {
  return (
    <div className="rounded-xl overflow-hidden bg-white shadow-md hover:shadow-xl hover:-translate-y-2 hover:scale-[1.02] transition duration-300 ease-in-out">
      <div className="relative w-full aspect-[4/3]"> {/* Omjer slike 4:3 */}
        <Image
          src={image}
          alt={title}
          fill
          className="object-cover w-full h-full fade-in"
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
        />
      </div>
      <div className="p-5">
        <h3 className="text-2xl font-semibold text-blue-900">{title}</h3>
        <p className="mt-2 text-xl text-gray-700">{description}</p>
      </div>
    </div>
  )
}

export default MachinesCard
