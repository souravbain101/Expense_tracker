import React, { useState } from "react";
import Box from "@mui/material/Box";
import { Edit } from "@mui/icons-material";
import Typography from "@mui/material/Typography";
import Modal from "@mui/material/Modal";
import { Button, TextField, MenuItem } from "@mui/material";
import { DeleteExpenseData } from "../Api/axios";
import { Gettoken } from "../Api/StoreToken/StoreToken";
import "./em.css";
const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  bgcolor: "#FFFFFF",
  border: "2px solid orange",
  boxShadow: 24,
  p: 4,
};
const currencies = [
  {
    value: "INR",
    label: "₹ - INR",
  },
  {
    value: "USD",
    label: "$ - USD",
  },
  {
    value: "EUR",
    label: "€ - EUR",
  },
];
const categoryit = [
    {
      value: "Food & Drinks",
      label: "Food & Drinks",
    },
    {
      value: "Entertainment",
      label: "Entertainment",
    },
    {
      value: "Rents",
      label: "Rents",
    },
  ];
function EdModalpopup(props) {
  const [open, setOpen] = useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  const [Record, setRecord] = useState({ category: "", date: "", currency: "", amount: "" });
  
  const handlechange = (event) => {
    setRecord({ ...Record, [event.target.name]: event.target.value });
  };
  const handleEdit = async () => {
    console.log("edit");
    console.log(props.itemid.original);
    handleClose();
  };
  return (
    <div>
      <Edit onClick={handleOpen} />
      <Modal open={open} onClose={handleClose} aria-labelledby="modal-modal-title" aria-describedby="modal-modal-description">
        <Box sx={style} className="edtmdlbdy">

        <TextField required sx={{ mb: 3 }} fullWidth id="outlined-select-currency" select label="Category" defaultValue={props.itemid.original.category} >
            {categoryit.map((option) => (
              <MenuItem key={option.value} value={option.value}>
                {option.label}
              </MenuItem>
            ))}
          </TextField>

          <TextField required sx={{ mb: 3 }} fullWidth id="outlined-basic" type="date" label="Date" variant="outlined" value={props.itemid.original.date} />

          <TextField required sx={{ mb: 3 }} fullWidth id="outlined-select-currency" select label="Select" defaultValue={props.itemid.original.currency} helperText="Please select your currency">
            {currencies.map((option) => (
              <MenuItem key={option.value} value={option.value}>
                {option.label}
              </MenuItem>
            ))}
          </TextField>

          <TextField required sx={{ mb: 3 }} fullWidth id="outlined-basic" label="Amount" variant="outlined" value={props.itemid.original.amount} />
          <Typography sx={{ mb: 3 }} id="modal-modal-title" variant="h5" component="h2" className="fonty">
            Do you want to save the data ?
          </Typography>
          <div className="btw">
            <Button sx={{ bgcolor: "orange", mt: 1.5, ":hover": { bgcolor: "#AF5", color: "black" } }} variant="contained" onClick={handleEdit}>
              yes
            </Button>
            <Button sx={{ bgcolor: "orange", mt: 1.5, ":hover": { bgcolor: "#AF5", color: "black" } }} variant="contained" onClick={handleClose}>
              no
            </Button>
          </div>
        </Box>
      </Modal>
    </div>
  );
}

export default EdModalpopup;
