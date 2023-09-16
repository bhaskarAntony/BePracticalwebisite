import React from 'react'
import '../styles/social-icons.css'
import facebook from '../images/facebook.gif'
import instagram from '../images/instagram.gif'
import linkedin from '../images/linkedin.gif'
import twitter from '../images/twitter.gif'
import whatsapp from '../images/whatsapp.gif'

function Socialicons() {
  return (
    <div className="social-icon-container-back text-center">
        <span className="fs-1 text-black d-block mb-3">Follow On</span>
        <div className='social-container'>
        <div className="icon">
            <img src={facebook} alt="" />
        </div>
        <div className="icon">
            <img src={instagram} alt="" />
        </div>
        <div className="icon">
            <img src={linkedin} alt="" />
        </div>
        <div className="icon">
            <img src={twitter} alt="" />
        </div>
        <div className="icon">
            <img src={whatsapp} alt="" />
        </div>
    </div>
    </div>
  )
}

export default Socialicons
