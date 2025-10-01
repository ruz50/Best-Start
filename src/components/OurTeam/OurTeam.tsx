'use client'
import React, { useEffect, useState, useRef } from 'react'
import { Swiper, SwiperSlide } from 'swiper/react'
import { Navigation } from 'swiper/modules'
import 'swiper/css'
import 'swiper/css/navigation'
import './OurTeam.css'

const OurTeam = () => {
  const [activeIndex, setActiveIndex] = useState(0)
  const swiperHouseRef = useRef<any>(null)

  const arrayTeam = [
    { id: 1, img: '/slider-images/best-start-team-1.jpg' },
    { id: 2, img: '/slider-images/IMG_0560.jpg' },
    { id: 3, img: '/slider-images/best-start-team-members.jpg' },
    { id: 4, img: '/slider-images/IMG_0628.jpg' },
    { id: 5, img:'/slider-images/best-start-machines.jpg'}
    
  ]

  useEffect(() => {
    const swiperInstance = swiperHouseRef.current?.swiper
    if (!swiperInstance) return

    const handleSlideChange = () => {
      setActiveIndex(swiperInstance.realIndex)
    }

    swiperInstance.on('slideChange', handleSlideChange)

    return () => {
      swiperInstance.off('slideChange', handleSlideChange)
    }
  }, [])

  return (
    <section className='our-team'>
      <div className='our-team-wrapper'>
        <h2 className='sections-head'>Մեր Թիմը</h2>
        <Swiper
          modules={[Navigation]}
          spaceBetween={50}
          slidesPerView={3}
          centeredSlides={true}
          loop={true}
          className='our-team-swiper'
          ref={swiperHouseRef}
          breakpoints={{
            // < 960px → exactly 1 slide, centered
            0: {
              slidesPerView: 1,
              spaceBetween: 8,
              centeredSlides: true,
            },
            // ≥ 960px → your original desktop layout
            960: {
              slidesPerView: 3,
              spaceBetween: 0,
              centeredSlides: true, // keep center if you like it
            },
          }}
        >
          {arrayTeam.map((member, idx) => (
            <SwiperSlide key={idx}>
              <div
                className={`slide-content ${
                  activeIndex === idx ? 'active' : ''
                }`}
              >
                <img
                  src={member.img}
                  className='member-img'
                />
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  )
}

export default OurTeam
