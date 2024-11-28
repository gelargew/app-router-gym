import Image from 'next/image'
import Link from 'next/link'

const photoDetails = {
  '1': {
    title: 'Sunset',
    src: '/sunset.jpg',
    description: 'Breathtaking sunset over the ocean',
    details: 'Captured during a summer evening on the west coast.'
  },
  '2': {
    title: 'Mountain',
    src: '/mountain.jpg',
    description: 'Majestic mountain landscape at dawn',
    details: 'Photographed in the Rocky Mountains during early morning light.'
  },
  '3': {
    title: 'Ocean',
    src: '/ocean.jpg',
    description: 'Serene blue ocean with gentle waves',
    details: 'A tranquil view of the Pacific Ocean from a secluded beach.'
  }
}

export default async function PhotoDetailPage({ params }: { params: Promise<{ id: string }> }) {
  const { id } = await params
  const photo = photoDetails[id as keyof typeof photoDetails]

  if (!photo) {
    return <div>Photo not found</div>
  }

  return (
    <div className="container mx-auto px-4 py-8 max-w-4xl">
      <Link
        href="/photos"
        className="text-blue-600 hover:underline mb-4 inline-block"
      >
        ← Back to Gallery
      </Link>

      <div className="bg-white shadow-lg rounded-xl overflow-hidden">
        <Image
          src={photo.src}
          alt={photo.title}
          width={1200}
          height={800}
          className="w-full h-auto object-cover"
        />

        <div className="p-6">
          <h1 className="text-3xl font-bold mb-4">{photo.title}</h1>
          <p className="text-gray-600 mb-4">{photo.description}</p>
          <p className="text-gray-500">{photo.details}</p>
        </div>
      </div>
    </div>
  )
}