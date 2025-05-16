'use client'
import dynamic from 'next/dynamic'

const Map = dynamic(() => import('@/app/Components/map'), { ssr: false })

export default function LocationPage() {
  return (
    <div style={{ marginTop: '10px', width: '100%' }} className="text-center">
      <h2 className="text-center text-2xl"><strong>Our location</strong></h2>
      <p className="text-center text-xl">
        Find us on address <strong>Suhač 6B, Sinj, Hrvatska</strong>
      </p>
      <Map />
    </div>
  )
}