import { Card,Alert,Button,CardContent, Grid, TextField, Box, FormControlLabel } from '@mui/material'
import { useState } from 'react';
import React from 'react'
import './signup.css'
import { createTheme, ThemeProvider } from '@mui/material/styles';
import Checkbox from '@mui/material/Checkbox';


export default function Signup() {
    const theme = createTheme({
        palette: {
          primary: {
            main: '#FFA500'
          }
        },
      });


      const[error,seterror]=useState({
        status:false,
        msg:"",
        type:""

      })
      const handlesubmit=(e)=>{
        e.preventDefault();
        const data=new FormData(e.currentTarget);
        const actualData={
            UserName:data.get('UserName'),
            email:data.get('email'),
            password:data.get('password'),
            confirm_password:data.get('Confirm_Password'),
            tc:data.get('tc'),
        }
        if (actualData.email && actualData.UserName && actualData.password && actualData.confirm_password && actualData.tc!==null) {
         if (actualData.password===actualData.confirm_password) {
          if (actualData.password.length<8) {
            seterror({status:true,msg:'Password must be 8 character',type:'error'})
          }
          else{
            
          seterror({status:true,msg:'Registration Success,Please Signin',type:'success'})
          document.getElementById('signup_form').reset();
         
          console.log(actualData);
          
          
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
            <TextField color="primary" type='text' label='User Name' name='UserName' variant="outlined" fullWidth   />
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
            <FormControlLabel control={<Checkbox value='agree' name='tc' id='tc'  />} label='Terms and Conditions'/>
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
