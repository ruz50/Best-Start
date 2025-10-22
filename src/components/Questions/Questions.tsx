"use client" 
import React from 'react'
import './Questions.css'

//// GSAP
import { useGSAP } from '@gsap/react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'


gsap.registerPlugin(ScrollTrigger)

const Questions = () => {
   useGSAP(() => {
    gsap.utils.toArray(".quest-parent").forEach((section) => {
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

  const questions = [
    'Խումբ 1',
    'Խումբ 2',
    'Խումբ 3',
    'Խումբ 4',
    'Խումբ 5',
    'Խումբ 6',
    'Խումբ 7',
    'Խումբ 8',
    'Խումբ 9',
    'Խումբ 10'
  ]
  return (
    <section className='quest-parent'>
        <h2 className='red sections-head'>Հարցեր</h2>
        <div className='questions'>
        {questions.map((question, idx) => (
          
            <div key={idx} className='questions-wrapper'><a href="/questions">{question}</a></div>
          
        
      ))}
        </div>
      
    </section>
  )
}

export default Questions
