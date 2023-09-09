import React, { useContext } from 'react'
import {  Box, Button, Card, CardContent, Grid, TextField } from '@mui/material'
import { NavLink, useNavigate } from 'react-router-dom'
import './signin.css'
import { Storetoken } from '../Api/StoreToken/StoreToken'
import { createTheme, ThemeProvider } from '@mui/material/styles';
import { Login } from '../Api/axios';
import { Context } from '../../App';
import { toast, ToastContainer } from 'react-toastify';
import { FaKey } from 'react-icons/fa'

import "react-toastify/dist/ReactToastify.css";

export default function Signin() {
    const theme = createTheme({
        palette: {
          primary: {
            main: '#FFA500'
          }
        },
      });
      const context=useContext(Context);
      const navigate=useNavigate();
      // const[error,seterror]=useState({
      //   status:false,
      //   msg:"",
      //   type:""

      // })

      const handlesubmit=async(e)=>{
        e.preventDefault();
        const data=new FormData(e.currentTarget);
        const actualData={
            email:data.get('email'),
            password:data.get('password')
        }
        if (actualData.email && actualData.password) {
          if (actualData.password.length<8) {
            // seterror({status:true,msg:'Password must be 8 character',type:'error'})
           
            toast.warning("Password must be 8 character !", {
              position: toast.POSITION.TOP_CENTER
            });
      
          }
          else{
            
          
          // document.getElementById('login-form').reset();
          const res=await Login(actualData);
          if (res.data.status==="Success") {
            Storetoken('access_token',res.data.token.access_token);
            Storetoken('refresh_token',res.data.token.refresh_token);
            
            // seterror({status:true,msg:res.data.message,type:'success'})
            toast.success(res.data.message, {
              position: toast.POSITION.TOP_CENTER
            });
            setTimeout(()=>{
              context.setauthenticated(true);
              navigate('/dashboard')
            },3000)
          }
          if (res.data.status==="failed") {
            // seterror({status:true,msg:res.data.message,type:'error'})
            toast.error(res.data.message, {
              position: toast.POSITION.TOP_CENTER
            });
          }
          

          
         
         
          }
        }
        else{
          // seterror({status:true,msg:'All Fields are Required',type:'error'})
          toast.warning('All Fields are Required', {
            position: toast.POSITION.TOP_CENTER
          });
        }
        
        
      }
  return (
    <div>
    <ToastContainer/>
     <ThemeProvider theme={theme}>
     <Box component='form' id='login-form' onSubmit={handlesubmit}>
      <Card className='logresponsive' style={{   margin: "10% auto" }}>
        <CardContent style={{ textAlign: 'center' }}>
        <h2  style={{ color: "#FFA500"  }}><FaKey/>  Login</h2>
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

            {/* <Grid item xs={12}>
            {error.status?<Alert severity={error.type}>{error.msg}</Alert>:''}
            </Grid> */}
            
            
            </Grid>
        </CardContent>
      </Card>
      </Box>
      </ThemeProvider>
    </div>
  )
}
