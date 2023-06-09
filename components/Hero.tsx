'use client'

import Image from 'next/image'
import { CustomButton } from './CustomButton'

export function Hero() {
  const handleScroll = () => {
    window.scrollTo({
      top: 800,
      behavior: 'smooth',
    })
  }

  return (
    <div className="hero">
      <div className="flex-1 pt-36 padding-x">
        <h1 className="hero__title">
          Find, book, or rent a cart - quickly and easily.
        </h1>
        <p className="hero__subtitle">
          Streamline your car rental experience with our effortless booking
          process.
        </p>
        <CustomButton
          title="Explore Cars"
          containerStyles="bg-primary-blue text-white rounded-full mt-10"
          handleClick={handleScroll}
        />
      </div>
      <div className="hero__image-container">
        <div className="hero__image">
          <Image
            src="/hero.png"
            alt="hero-image"
            fill
            className="object-contain"
          />
        </div>

        <div className="hero__image-overlay" />
      </div>
    </div>
  )
}
