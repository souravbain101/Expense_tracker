import React, { useState } from 'react'
import { Alert, Box, Button, Card, CardContent, Grid, TextField } from '@mui/material'
import { NavLink, useNavigate } from 'react-router-dom'
import './signin.css'

import { createTheme, ThemeProvider } from '@mui/material/styles';


export default function Signin() {
    const theme = createTheme({
        palette: {
          primary: {
            main: '#FFA500'
          }
        },
      });
      const navigate=useNavigate();
      const[error,seterror]=useState({
        status:false,
        msg:"",
        type:""

      })

      const handlesubmit=(e)=>{
        e.preventDefault();
        const data=new FormData(e.currentTarget);
        const actualData={
            email:data.get('email'),
            password:data.get('password')
        }
        if (actualData.email && actualData.password) {
          if (actualData.password.length<8) {
            seterror({status:true,msg:'Password must be 8 character',type:'error'})
          }
          else{
            
          seterror({status:true,msg:'Login Success',type:'success'})
          document.getElementById('login-form').reset();
          console.log(actualData);
          setTimeout(()=>{
            navigate('/Home')
          },4000)
         
          }
        }
        else{
          seterror({status:true,msg:'All Fields are Required',type:'error'})
        }
        
        
      }
  return (
    <div>
     <ThemeProvider theme={theme}>
     <Box component='form' id='login-form' onSubmit={handlesubmit}>
      <Card className='logresponsive' style={{ width:'90%',  margin: "5% auto" }}>
        <CardContent style={{ textAlign: 'center' }}>
        <h2  style={{ color: "#FFA500"  }}>Login</h2>
            <Grid container spacing={2}>
           

            <Grid item xs={12}>
            <TextField color="primary" label='Email' type='email' name='email' variant="outlined" fullWidth    />
            </Grid>

            <Grid item xs={12}>
            <TextField color="primary" type='password' label='Password' name='password' variant="outlined" fullWidth   />
            </Grid>

            <Grid item xs={12} style={{width:'60%'}}>
            <Button style={{width:'40%'}} type='submit' variant='contained' color='primary' sx={{color:'white'}} >Login</Button>
            </Grid>

            <Box sx={{m:'1em'}}>
            <NavLink to='/forgetpassword'>Forget Password ?</NavLink>
            </Box>

            <Grid item xs={12}>
            {error.status?<Alert severity={error.type}>{error.msg}</Alert>:''}
            </Grid>
            
            
            </Grid>
        </CardContent>
      </Card>
      </Box>
      </ThemeProvider>
    </div>
  )
}
