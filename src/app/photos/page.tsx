'use client'

import Link from 'next/link'
import Image from 'next/image'

const photos = [
  { id: '1', title: 'Sunset', src: '/sunset.jpg' },
  { id: '2', title: 'Mountain', src: '/mountain.jpg' },
  { id: '3', title: 'Ocean', src: '/ocean.jpg' }
]

export default function PhotosPage() {
  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-6">Photo Gallery</h1>
      <div className="grid grid-cols-3 gap-4">
        {photos.map((photo) => (
          <Link
            key={photo.id}
            href={`/photos/${photo.id}`}
            className="relative group"
          >
            <Image
              src={photo.src}
              alt={photo.title}
              width={400}
              height={300}
              className="w-full h-48 object-cover rounded-lg
                         group-hover:opacity-80 transition-opacity"
            />
            <div className="mt-2 text-center">
              <p className="font-medium">{photo.title}</p>
            </div>
          </Link>
        ))}
      </div>
    </div>
  )
}