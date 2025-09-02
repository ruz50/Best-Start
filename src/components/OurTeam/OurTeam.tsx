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
    { id: 1, name: 'John Smith', img: '/slider-images/boy.png' },
    { id: 2, name: 'Lara Smith', img: '/slider-images/girl.png' },
    { id: 3, name: 'John Smith', img: '/slider-images/boy.png' },
    { id: 4, name: 'Lara Smith', img: '/slider-images/girl.png' },
    { id: 5, name: 'John Smith', img: '/slider-images/boy.png' },
    { id: 6, name: 'Lara Smith', img: '/slider-images/girl.png' },
    { id: 7, name: 'John Smith', img: '/slider-images/boy.png' },
    { id: 8, name: 'Lara Smith', img: '/slider-images/girl.png' }
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
        <p className='team-members'>{arrayTeam[activeIndex]?.name}</p>
        <Swiper
          modules={[Navigation]}
          spaceBetween={40}
          slidesPerView={5}
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
              slidesPerView: 5,
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
                  alt={member.name}
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
