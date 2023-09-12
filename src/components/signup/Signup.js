import { Card,Button,CardContent, Grid, TextField, Box } from '@mui/material'

import React from 'react'
import './signup.css'
import { createTheme, ThemeProvider } from '@mui/material/styles';

import { register } from '../Api/axios';
import { toast, ToastContainer } from 'react-toastify';
import "react-toastify/dist/ReactToastify.css";
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

      
      const handlesubmit=async(e)=>{
        e.preventDefault();
        const data=new FormData(e.currentTarget);
        const actualData={
            name:data.get('name'),
            email:data.get('email'),
            password:data.get('password'),
            password_confirmation:data.get('Confirm_Password'),
            
        }
        
        if (actualData.email && actualData.name && actualData.password && actualData.password_confirmation) {
         if (actualData.password===actualData.password_confirmation) {
          if (actualData.password.length<8) {
            // seterror({status:true,msg:'Password must be 8 character',type:'error'})
            toast.warning("Password must be 8 character !", {
              position: toast.POSITION.TOP_CENTER
            });
          }
          else{         
          document.getElementById('signup_form').reset();
          
          
         
          const res=await register(actualData);
          
          if (res.data.status==='Success') {
            // console.log(res.data.token.access_token,res.data.token.refresh_token);
           
            
            
            // seterror({status:true,msg:res.data.message,type:'success'})
            toast.success(res.data.message, {
              position: toast.POSITION.TOP_CENTER
            });
            // setTimeout(()=>{
            //  navigate('/dashboard')
           
            // },3000)
          }
          if (res.data.status==='failed') {
            // seterror({status:true,msg:res.data.message,type:'error'})
            toast.error(res.data.message, {
              position: toast.POSITION.TOP_CENTER
            });
          }         
          }
         }
         else{
          // seterror({status:true,msg:'Confirm Password does not match',type:'error'})
          toast.warning('Confirm Password does not match !', {
            position: toast.POSITION.TOP_CENTER
          });
         }
        }
        else{
          // seterror({status:true,msg:'All Fields are Required',type:'error'})
          toast.warning('All Fields are Required !', {
            position: toast.POSITION.TOP_CENTER
          });
        }

      }
      


  return (
    <>
    <ToastContainer className="custom-toast-container"/>
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
            
            <Grid item xs={12} >
            <Button style={{width:'80%'}} type='submit' variant='contained' color='primary' sx={{color:'white'}}  >Register</Button>
            </Grid>

           

            </Grid>
        </CardContent>
      </Card>
      </Box>
      </ThemeProvider>
    </div>
    </>
  )
}
