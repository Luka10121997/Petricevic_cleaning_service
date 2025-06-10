'use client'
import dynamic from 'next/dynamic'

const Map = dynamic(() => import('@/app/Components/map'), { ssr: false })

export default function LocationPage() {
  return (
    <div style={{ marginTop: '10px', width: '100%' }} className="text-center">
      <h2 className="text-center text-2xl"><strong>Naša lokacija</strong></h2>
      <p className="text-center text-xl">
        Pronađite nas na adresi: <strong>Suhač 6B, Sinj, Hrvatska</strong>
      </p>
      <Map />
    </div>
  )
}