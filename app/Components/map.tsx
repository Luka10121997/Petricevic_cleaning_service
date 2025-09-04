'use client'
import React, { useEffect } from 'react'
import L from 'leaflet'
import 'leaflet/dist/leaflet.css'

delete ((L.Icon.Default.prototype as unknown) as Record<string, unknown>)._getIconUrl

L.Icon.Default.mergeOptions({
  iconRetinaUrl: '/leaflet/marker-icon-2x.png',
  iconUrl: '/leaflet/marker-icon.png',
  shadowUrl: '/leaflet/marker-shadow.png',
})

const Map = () => {
  useEffect(() => {
    const mapContainer = document.getElementById('map') as HTMLElement & { _leaflet_id?: number }
    if (mapContainer && mapContainer._leaflet_id) {
      mapContainer._leaflet_id = undefined
    }

    const lat = 43.730898
    const lon = 16.6375113
    const pozicija: [number, number] = [lat, lon]

    const map = L.map('map').setView(pozicija, 18)

    L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
      attribution:
        '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> sudionici',
      maxZoom: 19,
    }).addTo(map)

    const marker = L.marker(pozicija)
      .addTo(map)
      .bindPopup(`<b>Suhač 6B</b><br>Sinj, Hrvatska`)
      .openPopup()

    marker.on('click', () => {
      const googleMapsUrl = `https://www.google.com/maps/search/?api=1&query=${lat},${lon}`
      window.open(googleMapsUrl, '_blank')
    })
  }, [])

  return <div id="map" style={{ height: '400px', width: '100%', borderRadius: '10px' }}></div>
}

export default Map
