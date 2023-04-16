
import * as React from 'react';
import Backdrop from '@mui/material/Backdrop';
import Box from '@mui/material/Box';
import Modal from '@mui/material/Modal';
import Fade from '@mui/material/Fade';
import Button from '@mui/material/Button';
// import Register from './Register';
import { FaSignInAlt } from "react-icons/fa";
 import { AiOutlineClose } from "react-icons/ai";
import './SignupModal.css'
import Signup from './Signup';


const style = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: '40%',
  bgcolor: 'transparent',
  border: '2px solid #FFA500',
  boxShadow: 24,
  backdropFilter:'blur(8px)',
  p: 2,
};

export default function TransitionsModal() {
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  return (
    <div>
        <Button className='secondary-button' onClick={handleOpen} style={{backgroundColor: "#00bfa5"}} sx={{ mr: 3 }} variant="contained" color="primary">Sign up<FaSignInAlt/></Button>
      <Modal
        open={open}
        onClose={handleClose}
        closeAfterTransition
        slots={{ backdrop: Backdrop }}
        slotProps={{
          backdrop: {
            timeout: 500,
          },
        }}
        
      >
      
        <Fade in={open}>
          <Box className ='smodal' sx={style}>
          <Button onClick={handleClose} variant='outlined' sx={{color:'white',borderColor:'#FFA500'}} ><AiOutlineClose/></Button>
           <Signup/>
          </Box>
        </Fade>
      </Modal>
    </div>
  );
}