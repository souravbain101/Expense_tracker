import React from 'react'
import { Grid } from '@mui/material'
import Modal from '../signup/Modal'
import web from '../../images/expence.jpg'
import './HomeFront.css'

const HomeFront = () => {
  
  return (
    <div  >

      
      <Grid container spacing={2} style={{width:'90%',margin:'8% auto'}}  >
     
      <Grid item sm={6} >
     <div style={{ width: 'fit-content',margin: 'auto'}}>
      <h1 style={{color:'#FFA500'}} >Econimizing</h1>
      <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. At, minima aliquam? Qui, quidem velit inventore aspernatur modi quaerat cumque. Expedita voluptates iste architecto quam sed? Aliquid totam unde corporis ut!</p>
      
      <div style={{margin:'2em 0 0 0',display:'flex'}} >
  
      <Modal/>
      <Modal/>
      
      
      </div>
      </div>
      </Grid>

      <Grid item sm={6}>
      
        <img className='homeimg' src={web} alt='' />
      
      </Grid>
    
    
      </Grid>


      
               
      
    </div>
  )
}

export default HomeFront