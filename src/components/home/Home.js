import React from 'react'
// import { GoSignIn } from "react-icons/go";
// import { FaSignInAlt } from "react-icons/fa";
// import {Link} from 'react-router-dom'
import {useTypewriter,Cursor} from 'react-simple-typewriter'
import SignupModal from '../signup/SignupModal.js'
import SigninModal from '../signup/SigninModal.js'

import './Home.css'
import introduction from'../../images/new.png'
import { Grid } from '@mui/material';
const Home = () => {

  const[text]=useTypewriter({
    words:['Us.','Economizing.'],
    loop:{},
  });
  
  
    return (
      
      
      <div className='home-text-section'>
      <Grid container spacing={2}>
      <Grid item sm={6} style={{paddingLeft:'1em'}}>
        <h1 className='primary-heading'>Start With <br/> <span style={{color:'black'}}>{text}</span><Cursor/></h1>
        <p className='primary-text' >Tracking your expenses is one of the basic ways to have control over your personal finance. However, most people find it too hectic to keep a check on their daily expenses.</p>
        <div className='button-div'>
     <SignupModal />
     <SigninModal/>
      </div>
      </Grid>
      <Grid item sm={6} >
      <div className='img-div'>
      <img src={introduction} alt='' className='updown-animation'/>
      </div>
      </Grid>
      </Grid>
    </div>
    
   
  )
}

export default Home