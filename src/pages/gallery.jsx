'use client'
import { useState } from 'react'
import Head from 'next/head'
import Link from 'next/link'
import Image from 'next/image'

import { AuthLayout } from '@/components/AuthLayout'
import { Input } from '@/components/Input'
import { Logo } from '@/components/Logo'
import { Header } from '@/components/Header'
import { Footer } from '@/components/Footer1'

import { ButtonLink } from '@/components/Button'
import { Container } from '@/components/Cointainer1'
import { SectionHeading } from '@/components/SectionHeading'
import abstractBackgroundImage from '@/images/resources/abstract-background.png'
import discordImage from '@/images/resources/discord.svg'
import figmaImage from '@/images/resources/figma.svg'
import videoPlayerImage from '@/images/resources/video-player.svg'
import img1 from '@/images/gallery/1 (1).jpeg'
import img2 from '@/images/gallery/1 (2).jpeg'
import img3 from '@/images/gallery/1 (3).jpeg'
import img4 from '@/images/gallery/1 (4).jpeg'
import img5 from '@/images/gallery/1 (5).jpeg'
import img6 from '@/images/gallery/1 (6).jpeg'
import img7 from '@/images/gallery/1 (7).jpeg'
let imgs1 = '/images/image.png'
let imgs2 = '/images/image1.png'
let imgs3 = '/images/image2.png'
let imgs5 = '/images/image4.png'
let imgs6 = '/images/image5.png'
let imgs7 = '/images/image6.png'
let imgs8 = '/images/image7.png'
let imgs9 = '/images/image8.png'
let imgs10 = '/images/image9.png'
let imgs11 = '/images/image10.png'
let imgs12 = '/images/image11.png'
let imgs13 = '/images/image12.png'
let imgs14 = '/images/image13.png'
let imgs15 = '/images/image14.png'
let imgs16 = '/images/image15.png'
let imgs17 = '/images/image16.png'
let imgs18 = '/images/image17.png'
let imgs19 = '/images/image18.png'
let imgs20 = '/images/image19.png'
let imgs21 = '/images/image20.png'
let imgs22 = '/images/image21.png'
let imgs23 = '/images/ML1.jpg'
let imgs24 = '/images/ML2.jpg'
let imgs25 = '/images/ML3.jpg'
let imgs26 = '/images/ML4.jpg'

// Define image resources with proper metadata
const resources = [
  { id: 1, src: img1, alt: 'Gallery Image 1' },
  { id: 2, src: img2, alt: 'Gallery Image 2' },
  { id: 3, src: img3, alt: 'Gallery Image 3' },
  { id: 4, src: img4, alt: 'Gallery Image 4' },
  { id: 5, src: img5, alt: 'Gallery Image 5' },
  { id: 6, src: img6, alt: 'Gallery Image 6' },
  { id: 7, src: img7, alt: 'Gallery Image 7' },
  { id: 8, src: imgs1, alt: 'Gallery Image 8', useLayout: true },
  { id: 9, src: imgs2, alt: 'Gallery Image 9', useLayout: true },
  { id: 10, src: imgs3, alt: 'Gallery Image 10', useLayout: true },
  { id: 12, src: imgs5, alt: 'Gallery Image 12', useLayout: true },
  { id: 13, src: imgs6, alt: 'Gallery Image 13', useLayout: true },
  { id: 14, src: imgs7, alt: 'Gallery Image 14', useLayout: true },
  { id: 15, src: imgs8, alt: 'Gallery Image 15', useLayout: true },
  { id: 16, src: imgs9, alt: 'Gallery Image 16', useLayout: true },
  { id: 17, src: imgs10, alt: 'Gallery Image 17', useLayout: true },
  { id: 18, src: imgs11, alt: 'Gallery Image 18', useLayout: true },
  { id: 19, src: imgs12, alt: 'Gallery Image 19', useLayout: true },
  { id: 20, src: imgs13, alt: 'Gallery Image 20', useLayout: true },
  { id: 21, src: imgs14, alt: 'Gallery Image 21', useLayout: true },
  { id: 22, src: imgs15, alt: 'Gallery Image 22', useLayout: true },
  { id: 23, src: imgs16, alt: 'Gallery Image 23', useLayout: true },
  { id: 24, src: imgs17, alt: 'Gallery Image 24', useLayout: true },
  { id: 25, src: imgs18, alt: 'Gallery Image 25', useLayout: true },
  { id: 26, src: imgs19, alt: 'Gallery Image 26', useLayout: true },
  { id: 27, src: imgs20, alt: 'Gallery Image 27', useLayout: true },
  { id: 28, src: imgs21, alt: 'Gallery Image 28', useLayout: true },
  { id: 29, src: imgs22, alt: 'Gallery Image 29', useLayout: true },
  { id: 30, src: imgs23, alt: 'Gallery Image 30', useLayout: true },
  { id: 31, src: imgs24, alt: 'Gallery Image 31', useLayout: true },
  { id: 32, src: imgs25, alt: 'Gallery Image 32', useLayout: true },
  { id: 33, src: imgs26, alt: 'Gallery Image 33', useLayout: true },
]

const GalleryImage = ({ image, onClick }) => {
  return (
    <div className="relative h-48 overflow-hidden rounded-2xl shadow-lg transition-transform duration-300 hover:scale-105">
      <div className="absolute inset-0 flex items-center justify-center bg-[radial-gradient(#2C313D_35%,#000)]">
        {image.useLayout ? (
          <Image
            src={image.src}
            alt={image.alt}
            layout="fill"
            objectFit="cover"
          />
        ) : (
          <Image
            src={image.src}
            alt={image.alt}
            width={400}
            height={300}
            objectFit="cover"
          />
        )}
      </div>
    </div>
  )
}

export default function Gallery() {
  const [selectedImage, setSelectedImage] = useState(null)

  const handleImageClick = (image) => {
    setSelectedImage(image)
  }

  const handleClose = () => {
    setSelectedImage(null)
  }

  return (
    <>
      <Head>
        <title>Gallery - IEEE | Computational Intelligence Society</title>
      </Head>
      <Header />

      <section
        id="gallery"
        aria-labelledby="gallery-title"
        className="scroll-mt-8 py-8 sm:scroll-mt-32 sm:py-5 lg:py-8"
      >
        <Container>
          <p className="mt-2 flex justify-center font-display text-4xl font-medium tracking-tight text-slate-800">
            Event <span className="ml-2 text-sky-600"> Photos</span>
          </p>
        </Container>
        <Container size="lg" className="mt-16">
          <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {resources.map((image) => (
              <GalleryImage
                key={image.id}
                image={image}
                onClick={() => handleImageClick(image)}
              />
            ))}
          </div>
        </Container>
      </section>

      {/* Simple Image Viewer Modal */}
      {selectedImage && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-90"
          onClick={handleClose}
        >
          <div className="relative max-h-screen max-w-screen-xl p-4">
            <div
              className="flex h-full items-center justify-center"
              onClick={(e) => e.stopPropagation()}
            >
              <div className="relative h-full w-full">
                {selectedImage.useLayout ? (
                  <div className="relative h-full" style={{ height: '80vh' }}>
                    <Image
                      src={selectedImage.src}
                      alt={selectedImage.alt}
                      layout="fill"
                      objectFit="contain"
                      quality={100}
                    />
                  </div>
                ) : (
                  <Image
                    src={selectedImage.src}
                    alt={selectedImage.alt}
                    className="max-h-[80vh] w-auto"
                    width={800}
                    height={600}
                    objectFit="contain"
                    quality={100}
                  />
                )}
              </div>
            </div>
          </div>
        </div>
      )}

      <Footer />
    </>
  )
}
