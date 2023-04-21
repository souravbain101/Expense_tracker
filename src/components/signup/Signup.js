import { Card,Alert,Button,CardContent, Grid, TextField, Box, FormControlLabel } from '@mui/material'
import { useState } from 'react';
import React from 'react'
import './signup.css'
import { createTheme, ThemeProvider } from '@mui/material/styles';
import Checkbox from '@mui/material/Checkbox';
import { register } from '../Api/axios';
// import { Storetoken } from '../Api/StoreToken/StoreToken';
// import { useNavigate } from 'react-router-dom';




export default function Signup() {
    const theme = createTheme({
        palette: {
          primary: {
            main: '#FFA500'
          }
        },
      });
      
      // const navigate=useNavigate();

      const[error,seterror]=useState({
        status:false,
        msg:"",
        type:""

      })
      const handlesubmit=async(e)=>{
        e.preventDefault();
        const data=new FormData(e.currentTarget);
        const actualData={
            name:data.get('name'),
            email:data.get('email'),
            password:data.get('password'),
            password_confirmation:data.get('Confirm_Password'),
            tc:data.get('tc'),
        }
        
        if (actualData.email && actualData.name && actualData.password && actualData.password_confirmation && actualData.tc!==null) {
         if (actualData.password===actualData.password_confirmation) {
          if (actualData.password.length<8) {
            seterror({status:true,msg:'Password must be 8 character',type:'error'})
          }
          else{         
          document.getElementById('signup_form').reset();
         
          const res=await register(actualData);
          
          if (res.data.status==='Success') {
            // console.log(res.data.token.access_token,res.data.token.refresh_token);
           
            
            
            seterror({status:true,msg:res.data.message,type:'success'})
            // setTimeout(()=>{
            //  navigate('/dashboard')
           
            // },3000)
          }
          if (res.data.status==='failed') {
            seterror({status:true,msg:res.data.message,type:'error'})
          }         
          }
         }
         else{
          seterror({status:true,msg:'Confirm Password does not match',type:'error'})
         }
        }
        else{
          seterror({status:true,msg:'All Fields are Required',type:'error'})
        }

      }


  return (
    <div>
     <ThemeProvider theme={theme}>
     <Box component='form' id='signup_form' onSubmit={handlesubmit}>
      <Card className='sresponsive' style={{ width: '90%', margin: "5% auto" }}>
        <CardContent style={{ textAlign: 'center' }}>
        <h2  style={{ color: "#FFA500"  }}>Register</h2>
            <Grid container spacing={2}>
            <Grid item xs={12}>
            <TextField color="primary" type='text' label='User Name' name='name' variant="outlined" fullWidth   />
            </Grid>

            <Grid item xs={12}>
            <TextField color="primary" label='Email' type='email' name='email' variant="outlined" fullWidth   />
            </Grid>

            <Grid item xs={12}>
            <TextField color="primary" type='password' label='Password' name='password' variant="outlined" fullWidth   />
            </Grid>

            <Grid item xs={12}>
            <TextField color="primary" type='password' label='Confirm Password' name='Confirm_Password' variant="outlined" fullWidth   />
            </Grid>
            <Grid item xs={12}>
            <FormControlLabel control={<Checkbox value='true' name='tc' id='tc'  />} label='Terms and Conditions'/>
            </Grid>
            <Grid item xs={12} >
            <Button style={{width:'40%'}} type='submit' variant='contained' color='primary' sx={{color:'white'}}  >Register</Button>
            </Grid>

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
