import React from 'react'
import {Link} from 'react-router-dom'
import './footer.css'
import { FaFax } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import { AiFillYoutube } from "react-icons/ai";
import { AiFillTwitterCircle } from "react-icons/ai";
const Footer = () => {
  return (
    <div className='footer-container'>
        <section className='footer-subscription'>
        <p className='footer-sub-heading'>
            Are you looking for a new environment? Would you like to explore new context in life?
        </p>
        <div className="input-areas">
          <form >
            <input className='footer-input'
            name='email'
            type='email'
            placeholder='Your Email'
            />
            <button className='footer-btn'>save</button>
          </form>
        </div>
        </section>

        {/* footer links */}
        <div className="footer-link">
        <div className="footer-link-wrapper">
          <div className="footer-link-items">
            <h2>Catagories</h2>
            <Link to='/'>Buy & Sell</Link>
            <Link to='/'>Merchart</Link>
            <Link to='/'>Help & Support</Link>
          </div>

          <div className="footer-link-items">
            <h2>Social Media</h2>
            <Link to='/'>Instagram</Link>
            <Link to='/'>Linkedin</Link>
            <Link to='/'>YouTube</Link>
            <Link to='/'>Twitter</Link>
          </div>
        </div>
        </div>
        {/* social media section */}
        <section className='social-media'>
          <div className="social-media-wrap">
            <div className='footer-logo'>
           
              <Link to ='/' className='social-logo'><FaFax/> Economizing</Link> </div>
              {/*end of social media */}

              <small className='website-rights'>copyright @ 2023</small> {/*copyright area */}
              <div className="social-icons">
              
                <Link className='social-icon-link instagram' to='/'
                target='_blank'
                aria-label='instagram'>
                 <FaInstagram/>
                </Link>


                <Link className='social-icon-link linkedin' to='/'
                target='_blank'
                aria-label='linkedin'>
                 <FaLinkedin/>
                </Link>

                <Link className='social-icon-link youtube' to='/'
                target='_blank'
                aria-label='youtube'>
                 <AiFillYoutube/>
                </Link>

                <Link className='social-icon-link twitter' to='/'
                target='_blank'
                aria-label='twitter'>
                 <AiFillTwitterCircle/>
                </Link>
              </div>
          </div>
        </section>
    </div>
  )
}

export default Footer
