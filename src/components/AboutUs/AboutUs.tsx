'use client'
import React, { useState, useEffect } from 'react'
import CountUp from 'react-countup'
import './AboutUs.css'

//// GSAP
import { useGSAP } from '@gsap/react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'


gsap.registerPlugin(ScrollTrigger)

const AboutUs = () => {
  
useGSAP(() => {
  gsap.utils.toArray<HTMLElement>(".reveal").forEach((el) => {
    gsap.from(el, {
      opacity: 0,
      y: 50,
      duration: 0.6,
      ease: "power3.out",
      scrollTrigger: {
        trigger: el,
        start: "top 85%",
        toggleActions: "play none none reverse",
       
      },
    })
  })
}, [])



  return (
    <section id='abt-us' className="reveal">
      <div>
        <div className='about-us'>
          <h2 className='sections-head abt-head'>Մեր Մասին</h2>
          <div className='blue-section'>
            <div className='blue-section-wrapper'>
              <div>
                <div className='abt-us-numbers nmb-dsp-flex'>
                 <span>+</span> <CountUp end={5000} duration={3} />
                </div>
                <div className='nmb-text'>Շրջանավարտներ</div>
              </div>
              <div>
                <div className="abt-us-numbers">
        <CountUp end={15} duration={10} />
      </div>

                <div className='nmb-text'>Փորձառու մասնագետներ</div>
              </div>
              <div>
                 <div className='abt-us-numbers nmb-dsp-flex'>
                 <span>+</span> <CountUp end={7} duration={10} />
                </div>
                <div className='nmb-text'>Տարի ոլորտում</div>
              </div>
              <div>
                 <div className="abt-us-numbers">
        <CountUp end={5} duration={10} />
      </div>
                <div className='nmb-text'>Տարի ոլորտում</div>
              </div>
            </div>
          </div>
          <div className='info-section'>
            <div className='dsp-flex'>
              <div>
                <p className='info-texts'>
                  {' '}
                  <span className="blue-text">Best</span><span className='red-txt'>Start</span> ավտոդպրոցը
                  հիմնադրվել է 2018 թ․։
                </p>
                <p className='info-texts'>
                  Գործունեություն է ծավալում{' '}
                  <span className='bld-txt'>Երևանում և Վանաձորում։</span> 
                </p>
               
                <p className='info-texts'>
                  Այսօր դպրոցն ունի {' '}
                  <span className='bld-txt'>5000-ից ավել շրջանավարտ,{' '}</span>
                  որոնք հաջողությամբ հաղթահարել են քննությունները և ձեռք բերել վարորդական վկայական։
                </p>

                <p className='info-texts'>
                  Դպրոցը նաև ունի {' '}
                  <span className='bld-txt'>գործարանային ավտոմարզասարք{' '}</span>
                  նախատեսված ավտոդպրոցների համար։
                </p>
              </div>
              <div className='img-wrapper'>
                <img src='/illustrator.jpg' alt='' className='ppl-img' />
              </div>
            </div>
            
          </div>
          <div className='blue-section pdg-text'>
            <p className='fnt-style-italic'>
              Բացի առկա դասերից, գործում են նաև առցանց դասեր։
              <span className='mrg-top'>
                Դասերն անց են կացվում միջազգային ստանդարտներին համապատասխան
              </span>
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}

export default AboutUs
