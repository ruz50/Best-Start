'use client'
import React, { useState, useEffect } from 'react'
import CountUp from 'react-countup'
import './AboutUs.css'

const AboutUs = () => {

  return (
    <section id='abt-us'>
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
                  <span className='red-txt'>BestStart</span> ավտոդպրոցը
                  հիմնադրվել է 2018 թ․։
                </p>
                <p className='info-texts'>
                  Ցայսօր դպրոցն ունի մոտ{' '}
                  <span className='bld-txt'>5000 շրջանավարտ,</span> որոնք
                  հաջողությամբ հաղթահարել են քննությունները և ձեռք բերել
                  վարորդական վկայական։
                </p>
                <p className='info-texts'>
                  Ավտոդպրոցն ի սկզբանե հիմնադրվել է{' '}
                  <span className='bld-txt'>Վանաձորում,</span> (ներկայումս՝ երեք
                  մասնաճյուղ Վանաձորում)։{' '}
                </p>
                <p className='info-texts'>
                  Ժամանակի ընթացքում ընդլայնվել է ավտոդպրոցի գործունեությունը{' '}
                  <span className='bld-txt'>Երևանում։</span>
                </p>
                <p className='info-texts'>
                  2023թ․ բացվել է <span className='bld-txt'>Տիգրան Մեծ 46</span>{' '}
                  հասցում գտնվող մասնաճյուղը։
                </p>
                <p className='info-texts'>
                  2025թ մայիսից գործում է{' '}
                  <span className='bld-txt'>Վաղարշյան 24/10-ի</span>{' '}
                  մասնաճյուղը։
                </p>
              </div>
              <div className='img-wrapper'>
                <img src='/people-img.jpg' alt='' className='ppl-img' />
              </div>
            </div>
            <div className='dsp-flex mrg-tp gp-flex'>
              <div className='img-wrapper'>
                <img src='/people-img.jpg' alt='' className='ppl-img' />
              </div>
              <div>
                <p className='info-texts'>
                  2020 թ․ մասնակցել ենք{' '}
                  <span className='red-txt'>Iris business incubatar</span>{' '}
                  ակադեմիայի բիզնես զարգացման երկամյա դասընթացին։
                </p>
                <p className='info-texts'>
                  Արժանացել ենք ֆինանսավորման, որի շնորհիվ ձեռք ենք բերել
                  ավտովարման դասընթացի համար նախատեսված
                  <span className='bld-txt'>
                    սիմուլյատոր, որը Հայաստանում առկա է միայն մեր ավտոդպրոցում
                  </span>{' '}
                  (ձեռք ենք բերել Ռուսաստանի Դաշնությունից)։
                </p>
                <p className='info-texts'>
                  Սիմուլյատորն ունի նույն մեքենայի կառուցվածքը և համապատասխանում
                  է իրական վարմանը։
                </p>
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
