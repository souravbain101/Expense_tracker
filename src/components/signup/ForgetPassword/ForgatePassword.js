import React, { useState } from 'react'
import { Alert, Box, Button, Card, CardContent, Grid, TextField } from '@mui/material'



import { createTheme, ThemeProvider } from '@mui/material/styles';
import { Forget_Password } from '../../Api/axios';


export default function ForgatePassword() {
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

      const handlesubmit=async(e)=>{
        e.preventDefault();
        const data=new FormData(e.currentTarget);
        const actualData={
            email:data.get('email')
           
        }
        if (actualData.email) {
         
          const res=await Forget_Password(actualData);
          console.log(res.data);
          if (res.data.status==='success') {
            seterror({status:true,msg:res.data.message,type:'success'})
          document.getElementById('forgetpassword-form').reset();
          }
          if (res.data.status==='failed') {
            seterror({status:true,msg:res.data.message,type:'error'})
            
          }
         
          
          
        }
        else{
          seterror({status:true,msg:'Please Provide valid Email',type:'error'})
        }
        
        
      }
  return (
    <div>
      <ThemeProvider theme={theme}>
     <Box component='form' id='forgetpassword-form' onSubmit={handlesubmit}>
      <Card className='logresponsive' style={{ width:'90%',  margin: "5% auto" }}>
        <CardContent style={{ textAlign: 'center' }}>
        <h2  style={{ color: "#FFA500"  }}>Forget Password ?</h2>
            <Grid container spacing={2}>
           

            <Grid item xs={12}>
            <TextField color="primary" label='Email Address*' type='email' name='email' variant="outlined" fullWidth    />
            </Grid>

            

            <Grid item xs={12} style={{width:'60%'}}>
            <Button style={{width:'40%'}} type='submit' variant='contained' color='primary' sx={{color:'white'}} >Send</Button>
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
