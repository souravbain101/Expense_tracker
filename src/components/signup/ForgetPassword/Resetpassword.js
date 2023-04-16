
import { Card,Alert,Button,CardContent, Grid, TextField, Box} from '@mui/material'
import { useState } from 'react';
import React from 'react'
import { createTheme, ThemeProvider } from '@mui/material/styles';
import { useNavigate } from 'react-router-dom';


export default function Resetpassword() {

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
          
           
            password:data.get('password'),
            confirm_password:data.get('Confirm_Password'),
          
        }
        if (actualData.password && actualData.confirm_password) {
         if (actualData.password===actualData.confirm_password) {
          if (actualData.password.length<8) {
            seterror({status:true,msg:'Password must be 8 character',type:'error'})
          }
          else{
            
          seterror({status:true,msg:'Reset Password successfully,Redirecting to Login page.',type:'success'})
          document.getElementById('Reset-form').reset();
          console.log(actualData);

          setTimeout(()=>{
            navigate('/')
          },4000)
          
         
         
          
          
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
