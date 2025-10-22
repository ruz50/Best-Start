"use client" 
import React from 'react'
import './Review.css'

//// GSAP
import { useGSAP } from '@gsap/react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'


gsap.registerPlugin(ScrollTrigger)

const Review = () => {
   useGSAP(() => {
    gsap.utils.toArray(".reviews").forEach((section) => {
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
    <section className='reviews'>
        <h2 className='sections-head'>Կարծիքներ</h2>
      <div className="review-wrapper">
        <div className="review">
            <p className='review-text'>Իմ խորհին շնորհակաությունն եմ հայտնում ինձ համար հարազատ դարձած Best Start ավտոդպրոցի լավագույն թիմին' տնօրեն Արաքսյա Սարգսյանին անհատական և բարեհամբույր վերաբերմունք դրսևորելու,ինչպես նաև ճկուն գրաֆիկ ապահովելու համար։</p>
            <p className='review-author'>Анна Оганнисян | Facebook</p>
        </div>
        <div className="review">
            <p className='review-text'>Այսօր հասա նպատակներիցս մեկին ու դրա համար շնորհակալ եմ Best Start ուսումնական կենտրոնի ողջ անձնակազմին հանձինս ընկեր ԱԼԻԿԻՆ։Շնորհակալ եմ Ձեզ ընկեր ԱԼԻԿ ջան ինձ հավատալու ու Ձեր մասնագիտական գիտելիքները ինձ փոխանցելու համար։</p>
            <p className='review-author'>Har Gog | Facebook</p>
        </div>
        <div className="review">
            <p className='review-text'>Ցանկանում եմ գնահատանքս հայտնել Best Start ավտոդպրոցին և հատկապես լավագույն հրահանգիչ ընկեր Ալիկին բարձր պրոֆեսիոնալիզմի, պատասխանատվության և անսահման համբերատարության համար։ Ձեր օգնությամբ ես ձեռք բերեցի ոչ միայն վարելու հմտություններ, այլ վստահորեն դարձա անվտանգ ու գրագետ վարորդ։</p>
            <p className='review-author'>Arpine Aslanyan | Facebook</p>
        </div>
      </div>
    </section>
  )
}

export default Review
