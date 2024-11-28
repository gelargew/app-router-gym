'use client'

import Image from 'next/image'
import { useRouter } from 'next/navigation'
import { use } from 'react'

const photoDetails = {
  '1': {
    title: 'Sunset',
    src: '/sunset.jpg',
    description: 'Breathtaking sunset over the ocean'
  },
  '2': {
    title: 'Mountain',
    src: '/mountain.jpg',
    description: 'Majestic mountain landscape at dawn'
  },
  '3': {
    title: 'Ocean',
    src: '/ocean.jpg',
    description: 'Serene blue ocean with gentle waves'
  }
}

export default function PhotoModal({ params }: { params: Promise<{ id: string }> }) {
  const router = useRouter()
  const {id} = use(params)
  const photo = photoDetails[id as keyof typeof photoDetails]
  console.log('MODAL')

  if (!photo) {
    return null
  }

  const handleClose = () => {
    router.back() // Navigate back to previous page
  }

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center
                 bg-black/70 p-4"
      onClick={handleClose}
    >
      <div
        className="bg-white rounded-xl max-w-2xl w-full p-6 relative"
        onClick={(e) => e.stopPropagation()} // Prevent close when clicking modal
      >
        <button
          onClick={handleClose}
          className="absolute top-4 right-4 text-gray-600
                     hover:text-black transition"
        >
          ✕
        </button>

        <Image
          src={photo.src}
          alt={photo.title}
          width={800}
          height={600}
          className="w-full h-auto rounded-lg mb-4"
        />

        <div className="text-center">
          <h2 className="text-2xl font-bold mb-2">{photo.title}</h2>
          <p className="text-gray-600">{photo.description}</p>
        </div>
      </div>
    </div>
  )
}