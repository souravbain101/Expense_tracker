import React from 'react'
import { Grid } from '@mui/material'
import Modal from '../signup/Modal'
import web from '../../images/expence.jpg'
import './HomeFront.css'

const HomeFront = () => {
  
  return (
    <div className='cont'>
      <section id="header" className='d-flex align-items-center'>
        <div className='container-fluid nav-bg'>
          <div className='row'>
            <div className='col-10- mx-auto'>
              <div className='row'>
              <div className='col-md-6 pt-5 pt-lg-0 order-2 order-lg-1 d-flex justify-content-center flex-column'>
                <h1 className='homeh1'>Econimizing</h1>
              
              <div className='mt-3'><Link to="/signup" className='btn-sign-up'>Sign Up</Link></div>
              <div className='mt-3'> <Link to="/signin" className='btn-sign-in'>Sign In</Link></div>
              </div>
              <div className='col-lg-6 order-1 order-lg-2 header-img'>
                <img src={web} className='img-fluid animated' alt='home img'/>
              </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

export default HomeFront