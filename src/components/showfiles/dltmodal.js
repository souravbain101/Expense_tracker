import React,{useState} from 'react'
import Box from '@mui/material/Box';
import { Delete } from "@mui/icons-material";
import Typography from '@mui/material/Typography';
import Modal from '@mui/material/Modal';
import { Button } from '@mui/material';
import {DeleteExpenseData} from "../Api/axios";
import { Gettoken } from "../Api/StoreToken/StoreToken";
import { toast, ToastContainer } from 'react-toastify';
import "react-toastify/dist/ReactToastify.css";
import "./dm.css";
const style = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    bgcolor: '#FFFFFF',
    border: '2px solid orange',
    boxShadow: 24,
    p: 2,
};
function Modalpopup(props) {
    const [open, setOpen] = useState(false);
    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);
    const handledelete=async()=>{
        const res=await DeleteExpenseData(props.itemid.original._id,Gettoken());
        props.setdeleted(true);  
        if (res.data.status==="success"){
            toast.success("Deleted Successfully ", {
                position: toast.POSITION.TOP_CENTER
              });
        }
        else{
            toast.error("Deletion Failed ", {
                position: toast.POSITION.TOP_CENTER
              });
        }     
        setOpen(false)
       
        
        
    }
    return (
        <div>
            <ToastContainer/>
            <Delete onClick={handleOpen}/>
            
            <Modal
                open={open}
                onClose={handleClose}
                aria-labelledby="modal-modal-title"
                aria-describedby="modal-modal-description"
            >
                <Box sx={style} className='dltmdlbdy'>
                    <Typography id="modal-modal-title" variant="h4" component="h2" className='fonty'>
                        Do you want to delete the data ?
                    </Typography>
                    <div className='btw'>
                    <Button sx={{ bgcolor: "orange", mt: 1.5,color: "black", ":hover": { bgcolor: "#AF5" } }} variant="contained" onClick={handledelete}>yes</Button>
                    <Button sx={{ bgcolor: "orange", mt: 1.5,color: "black", ":hover": { bgcolor: "#AF5", color: "black" } }} variant="contained" onClick={handleClose}>no</Button>
                    </div>
                </Box>
            </Modal>
        </div>
    )
}

export default Modalpopup;