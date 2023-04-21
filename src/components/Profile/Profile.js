import { Button, Card, CardContent } from '@mui/material'
import React from 'react'
import { Removetoken } from '../Api/StoreToken/StoreToken'
import { useNavigate } from 'react-router-dom'
import { useContext } from 'react'
import './profile.css'
import sanu from '../../images/sanu.jpg'
import { Context } from '../../App';
import { Grid } from '@mui/material'
import Resetpassword from '../signup/ForgetPassword/Resetpassword'
import { createTheme, ThemeProvider } from '@mui/material/styles';


export default function Profile() {
  const theme = createTheme({
    palette: {
      primary: {
        main: '#FFA500'
      }
    },
  });


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
     

          <h3>Anubrati Chakraborty</h3>
          <h4>Details</h4>
          <h4>Email:</h4>
          <h5>anu..@gmail.com</h5>
          <h4>Location:</h4>
          <h5>11/c chatra ,serampore</h5>

          <Button color='primary' variant='contained' sx={{color:'white'}} onClick={handleclick}>Logout</Button>
          </CardContent>
          </Card>
        </Grid>

        <Grid item xs={12} sm={6}>
          <Resetpassword />
        </Grid>

      </Grid>
      </ThemeProvider>
    </div>
  )
}
