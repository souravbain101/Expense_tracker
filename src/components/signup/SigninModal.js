
import * as React from 'react';
// import Backdrop from '@mui/material/Backdrop';
// import Box from '@mui/material/Box';
// import Modal from '@mui/material/Modal';
// import Fade from '@mui/material/Fade';
import Button from '@mui/material/Button';
// import Register from './Register';
import { FaSignInAlt } from "react-icons/fa";
//  import { AiOutlineClose } from "react-icons/ai";
import './SigninModal.css'
import { useNavigate } from 'react-router-dom';

// import Signin from './Signin';


// const style = {
//   position: 'absolute',
//   top: '50%',
//   left: '50%',
//   transform: 'translate(-50%, -50%)',
//   width: '40%',
//   bgcolor: 'transparent',
//   border: '2px solid #FFA500',
//   boxShadow: 24,
//   backdropFilter:'blur(8px)',
//   p: 2,
// };

export default function TransitionsModal() {
  const navigate=useNavigate();
  // const [open, setOpen] = React.useState(false);
  // const handleOpen = () => setOpen(true);
  // const handleClose = () => setOpen(false);

  const handlesignin=()=>{
    navigate("/signin");
  }

  return (
    <div>
        <Button className='secondary-button' onClick={handlesignin} style={{backgroundColor: "#00bfa5"}} sx={{ mr: 3,pr:'20px '}} variant="contained" color="primary">Sign in <FaSignInAlt/></Button>
      {/* <Modal
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
          <Box className ='lmodal' sx={style}>
          <Button onClick={handleClose} variant='outlined' sx={{color:'white',borderColor:'#FFA500'}} ><AiOutlineClose/></Button>
           <Signin/>
          </Box>
        </Fade>
      </Modal> */}
    </div>
  );
}