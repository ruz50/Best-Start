"use client" 
import React from 'react'
import './Footer.css'
//// GSAP
import { useGSAP } from '@gsap/react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'


gsap.registerPlugin(ScrollTrigger)

const Footer = () => {

  useGSAP(() => {
    gsap.utils.toArray(".foot").forEach((section) => {
      const el = section as HTMLElement
      gsap.from(el, {
        opacity: 0,
        y: 80,
        duration: 1,
        ease: "power3.out",
        scrollTrigger: {
          trigger: el,
          start: "top 80%",
          toggleActions: "play none none reverse",
        },
      })
    })
  }, [])

  return (
    <footer className='foot'>
      <div className='footer-wrapper'>
        <div className='dsp-flex-gp'>
          <img src='/footer-logo.png' alt='best start logo' />

          <nav className='ftr-nav'>
            <a href='#abt-us'>Մեր մասին</a>
          </nav>
          <nav className='ftr-nav'>Հարցեր</nav>
          <nav className='ftr-nav'>Թեստեր</nav>
          <nav className='ftr-nav'>Կապ մեզ հետ</nav>
        </div>
      </div>
      <div className='footer-lst-wrapper'>
        <div>
          <div className='ftr-cntct-wrapper'>
            <img
              src='/location.png'
              alt='location of best start driving school'
            />
            <p>ք․ Երևան, Տիգրան Մեծի 46</p>
          </div>
          <div className='ftr-cntct-wrapper'>
            <img
              src='/number.png'
              alt='location of best start driving school'
            />
            <a href='tel:+374-99-14-14-55'>+374-99-14-14-55</a>
          </div>
          <div className='social-footer-icons'>
          <div className='ftr-cntct-wrapper'>
            <a href='https://www.facebook.com/share/16QPt9uAct/?mibextid=wwXIfr'>
              <img
                src='/facebook.png'
                alt='best start driving school social'
                className='facebook'
              />
            </a>
          </div>
           <div className='ftr-cntct-wrapper'>
            <a href='https://www.instagram.com/beststart_yerevan/'>
              <img
                src='/instagram.png'
                alt='best start driving school social'
                className='instagram'
              />
            </a>
          </div>
        
        </div>
        </div>

        <div>
          <div className='ftr-cntct-wrapper'>
            <img
              src='/location.png'
              alt='location of best start driving school'
            />
            <p>ք․ Վանաձոր, Տիգրան Մեծ 18</p>
          </div>
          <div className='ftr-cntct-wrapper'>
            <img
              src='/number.png'
              alt='location of best start driving school'
            />
            <a href='tel:+374-55-73-00-10'>+374-55-73-00-10</a>
          </div>
          <div className='ftr-cntct-wrapper'>
            <img
              src='/number.png'
              alt='location of best start driving school'
            />
            <a href='tel:+374-96-10-73-00'>+374-96-10-73-00</a>
          </div>
          <div className='social-footer-icons'>
          <div className='ftr-cntct-wrapper'>
            <a href='https://www.facebook.com/share/16QPt9uAct/?mibextid=wwXIfr'>
              <img
                src='/facebook.png'
                alt='best start driving school social'
                className='facebook'
              />
            </a>
          </div>
           <div className='ftr-cntct-wrapper'>
            <a href='https://www.instagram.com/beststart.avtodproc/'>
              <img
                src='/instagram.png'
                alt='best start driving school social'
                className='instagram'
              />
            </a>
          </div>
        
        </div>
        </div>

        
      </div>
    </footer>
  )
}

export default Footer
