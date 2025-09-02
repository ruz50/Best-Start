import React from 'react'
import './Questions.css'

const Questions = () => {
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
        <div key={idx} className='questions-wrapper'>{question}</div>
      ))}
        </div>
      
    </section>
  )
}

export default Questions
