import React from 'react'
import './Footer.css'

const Footer = () => {
  return (
    <footer>
      <div className='footer-wrapper'>
        <div className='dsp-flex-gp'>
            <img src="/footer-logo.png" alt="best start logo" />
        
        <nav className='ftr-nav'><a href="#abt-us">Մեր մասին</a></nav>
        <nav className='ftr-nav'>Հարցեր</nav>
        <nav className='ftr-nav'>Թեստեր</nav>
        <nav className='ftr-nav'>Կապ մեզ հետ</nav>
        </div>
        </div>
        <div className='footer-lst-wrapper'>
            <div>
                <div className='ftr-cntct-wrapper'>
                    <img src="/location.png" alt="location of best start driving school"/>
                    <p>ք․ Երևան, Տիգրան Մեծի 46</p>
                </div>
                <div className='ftr-cntct-wrapper'>
                    <img src="/number.png" alt="location of best start driving school"/>
                    <a href='tel:+374-99-14-14-55'>+374-99-14-14-55</a>
                </div>
            </div>
            
                
            <div>
                <div className='ftr-cntct-wrapper'>
                    <img src="/location.png" alt="location of best start driving school"/>
                    <p>ք․ Երևան, Վաղարշյան 24/10</p>
                </div>
                <div className='ftr-cntct-wrapper'>
                    <img src="/number.png" alt="location of best start driving school"/>
                    <a href='tel:+374-99-73-74-44'>+374-99-73-74-44</a>
                </div>
            </div>


            <div>
                <div className='ftr-cntct-wrapper'>
                    <img src="/location.png" alt="location of best start driving school"/>
                    <p>ք․ Վանաձոր, Տիգրան Մեծ 18</p>
                </div>
                <div className='ftr-cntct-wrapper'>
                    <img src="/number.png" alt="location of best start driving school"/>
                    <a href='tel:+374-55-73-00-10'>+374-55-73-00-10</a>
                </div>
                <div className='ftr-cntct-wrapper'>
                    <img src="/number.png" alt="location of best start driving school"/>
                    <a href='tel:+374-96-10-73-00'>+374-96-10-73-00</a>
                </div>
            </div>
        </div>
      
    </footer>
  )
}

export default Footer
