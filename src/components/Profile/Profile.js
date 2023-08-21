import { Button, Card, CardContent } from '@mui/material'
import React, { useEffect, useState } from 'react'
import { Gettoken, Removetoken } from '../Api/StoreToken/StoreToken'
import { useNavigate } from 'react-router-dom'
import { useContext } from 'react'
import './profile.css'
import sanu from '../../images/sanu.jpg'
import { Context } from '../../App';
import { Grid } from '@mui/material'

import { createTheme, ThemeProvider } from '@mui/material/styles';
import { Logged_user } from '../Api/axios'
import ChangePass from '../signup/ForgetPassword/ChangePasssword'


export default function Profile() {
  const theme = createTheme({
    palette: {
      primary: {
        main: '#FFA500'
      }
    },
  });
const user_details={
  name:'',
  email:''
}
const [user,setuser]=useState(user_details);


const handle_loggeduser=async()=>{
  const token=Gettoken();
  if (token) {
    const res=await Logged_user(token);
    // console.log(res.data.user.name);
    setuser({
      name:res.data.user.name,
      email:res.data.user.email,
    })
    
  }
  else{
    console.log('error');
  }

}
useEffect(()=>{
  handle_loggeduser();
  
  },[])

  const context = useContext(Context);
  const navigate = useNavigate();
  const handleclick = () => {
    Removetoken('access_token');
    Removetoken('refresh_token');
    context.setauthenticated(false);
    navigate('/home');
  }
  return (
    <div>
    <ThemeProvider theme={theme}>
      <Grid container spacing={2}>
        <Grid item xs={12} sm={6}>

      <Card style={{ width: '90%', margin: "5% auto" }} >
      <div className='upper'>
          <img  src={sanu} alt='' height='100px' width='100px' />
      </div>
      <CardContent style={{ textAlign: 'center' }}  >
     

          <h3> {user.name}</h3>
          
          <h4>Email:</h4>
          <h5>{user.email}</h5>
         

          <Button color='primary' variant='contained' sx={{color:'white'}} onClick={handleclick}>Logout</Button>
          </CardContent>
          </Card>
        </Grid>

        <Grid item xs={12} sm={6}>
          <ChangePass/>
        </Grid>

      </Grid>
      </ThemeProvider>
    </div>
  )
}
