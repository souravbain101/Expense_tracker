
import { Card,Alert,Button,CardContent, Grid, TextField, Box} from '@mui/material'
import { useState } from 'react';
import React from 'react'
import { createTheme, ThemeProvider } from '@mui/material/styles';
import { useNavigate, useParams } from 'react-router-dom';
import { Reset_Password } from '../../Api/axios';


export default function Resetpassword() {

    const theme = createTheme({
        palette: {
          primary: {
            main: '#FFA500'
          }
        },
      });

      const{id,token}=useParams();
      const navigate=useNavigate();
      const[error,seterror]=useState({
        status:false,
        msg:"",
        type:""

      })
      const handlesubmit=async(e)=>{
        e.preventDefault();
        const data=new FormData(e.currentTarget);
        const actualData={
          
           
            password:data.get('password'),
            password_confirmation:data.get('Confirm_Password'),
          
        }
        if (actualData.password && actualData.password_confirmation) {
         if (actualData.password===actualData.password_confirmation) {
          if (actualData.password.length<8) {
            seterror({status:true,msg:'Password must be 8 character',type:'error'})
          }
          else{
            const res=await Reset_Password(actualData,id,token);
            console.log(res.data);
            if (res.data.status==='success') {
              
              seterror({status:true,msg:res.data.message,type:'success'})
              document.getElementById('Reset-form').reset();
              setTimeout(()=>{

                navigate('/')
                
              },4000)
            }
            if (res.data.status==='failed') {
              seterror({status:true,msg:res.data.message,type:'error'})
              document.getElementById('Reset-form').reset();
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
    <Box component='form' id='Reset-form' onSubmit={handlesubmit}>
     <Card className='sresponsive' style={{ width: '90%', margin: "5% auto" }}>
       <CardContent style={{ textAlign: 'center' }}>
       <h2  style={{ color: "#FFA500"  }}>Reset Password</h2>
           <Grid container spacing={2}>
           

          

           <Grid item xs={12}>
           <TextField color="primary" type='password' label='Password*' name='password' variant="outlined" fullWidth   />
           </Grid>

           <Grid item xs={12}>
           <TextField color="primary" type='password' label='Confirm Password*' name='Confirm_Password' variant="outlined" fullWidth   />
           </Grid>
           
           <Grid item xs={12} >
           <Button style={{width:'40%'}} type='submit' variant='contained' color='primary' sx={{color:'white'}}  >Reset</Button>
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
