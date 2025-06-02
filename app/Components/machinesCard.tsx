import Image from 'next/image'
import React from 'react'


interface MachinesCardProps {
  title: string
  description: string
  image: string
}
const MachinesCard = ({ title, description, image }: MachinesCardProps) => {
  return (
    <div className="rounded-xl overflow-hidden bg-white box:shadow hover:shadow-lg">
      <Image
        src={image}
        alt={title}
        width={400}
        height={300}
        className="w-full h-170 object-cover"
      />
      <div className='p-5'>
        <h3 className="text-xl font-semibold text-blue-900">{title}</h3>
        <p className="mt-2 text-gray-700">{description}</p>
      </div>
    </div>
  )
}

export default MachinesCard