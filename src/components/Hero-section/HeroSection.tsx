'use client'
import React, { useRef } from 'react'
import './HeroSection.css'
import gsap from 'gsap'
import { useGSAP } from '@gsap/react'
import SplitText from 'gsap/SplitText'

// Register GSAP plugin globally
gsap.registerPlugin(SplitText)

const HeroSection = () => {
  const container = useRef<HTMLHeadingElement>(null)

  useGSAP(() => {
    // Split text into characters
    const split = SplitText.create(container.current, {
      type: 'chars',
    })

    // Animate characters
    gsap.from(split.chars, {
      opacity: 0,
      y: 50,
      stagger: 0.03,
      duration: 1,
      ease: 'power4.out',
    })

    // Optional cleanup (if needed later): return () => split.revert()
  }, { scope: container })

  return (
    <section>
      <div>
        <div className='hero-section'>
        <h1 ref={container}>
          ՁԵՐ <span className='blue-txt'>ՎԱՐՈՐԴԱԿԱՆ</span>{' '}
          <span className='red-text'>ԻՐԱՎՈՒՆՔԸ</span> ՄԵՐ ՀԱՂԹԱՆԱԿՆ Է
        </h1>
        <img src='/hero-img-1.png' className='hero-img' />
      </div>
      </div>
      
    </section>
  )
}

export default HeroSection
