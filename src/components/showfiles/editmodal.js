import React, { useState, useEffect } from "react";
import Box from "@mui/material/Box";
import { Edit } from "@mui/icons-material";
import Typography from "@mui/material/Typography";
import Modal from "@mui/material/Modal";
import { Button, TextField, MenuItem } from "@mui/material";
import { EditExpenseData } from "../Api/axios";
import { Gettoken } from "../Api/StoreToken/StoreToken";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
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
  const handleOpen = () => {
    setOpen(true);
  };
  const handleClose = () => {
    setOpen(false);
  };

  const [Record, setRecord] = useState({ category: props.itemid.original.category, date: props.itemid.original.date, currency: props.itemid.original.currency, amount: props.itemid.original.amount });

  useEffect(() => {
    setRecord({ category: props.itemid.original.category, date: props.itemid.original.date, currency: props.itemid.original.currency, amount: props.itemid.original.amount });
  }, [props, open]);

  const handlechange = (event) => {
    setRecord({ ...Record, [event.target.name]: event.target.value });
  };
  const handleEdit = async () => {
    if (Record.amount !== "") {
      const res = await EditExpenseData(props.itemid.original._id, Record, Gettoken());
      props.setedited(true);
      if (res.data.status === "success") {
        toast.success(res.data.message, {
          position: toast.POSITION.TOP_CENTER,autoClose:1800
        });
      } else {
        toast.error(res.data.message, {
          position: toast.POSITION.TOP_CENTER,autoClose:1800
        });
      }
      handleClose();
    } else {
      toast.warning("Amount can't be empty !", {
        position: toast.POSITION.TOP_CENTER,autoClose:1800
      });
    }
  };
  const preventPasteNegative = (e) => {
    const clipboardData = e.clipboardData || e.clipboardData;
    const pastedData = parseFloat(clipboardData.getData("text"));

    if (pastedData < 0) {
      e.preventDefault();
    }
  };
  const preventMinus = (e) => {
    if (e.charCode < 48) {
      e.preventDefault();
    }
  };
  return (
    <div>
      <ToastContainer />
      <Edit onClick={handleOpen} />
      <Modal open={open} onClose={handleClose} aria-labelledby="modal-modal-title" aria-describedby="modal-modal-description">
        <Box sx={style} className="edtmdlbdy">
          <form>
            <TextField required sx={{ mb: 3 }} fullWidth id="outlined-select-currency" select label="Category" value={Record.category} onChange={(e) => handlechange(e)} name="category">
              {categoryit.map((option) => (
                <MenuItem key={option.value} value={option.value}>
                  {option.label}
                </MenuItem>
              ))}
            </TextField>

            <TextField required sx={{ mb: 3 }} fullWidth id="outlined-basic" type="date" label="Date" variant="outlined" value={Record.date} onChange={(e) => handlechange(e)} name="date" />

            <TextField required sx={{ mb: 3 }} fullWidth id="outlined-select-currency" select label="Select" defaultValue={Record.currency} helperText="Please select your currency" onChange={(e) => handlechange(e)} name="currency">
              {currencies.map((option) => (
                <MenuItem key={option.value} value={option.value}>
                  {option.label}
                </MenuItem>
              ))}
            </TextField>

            <TextField required sx={{ mb: 3 }} fullWidth id="outlined-basic" label="Amount" variant="outlined" value={Record.amount} onChange={(e) => handlechange(e)} name="amount" onPaste={preventPasteNegative} onKeyPress={preventMinus} />

            <Typography sx={{ mb: 3 }} id="modal-modal-title" variant="h5" component="h2" className="fonty">
              Do you want to save the data ?
            </Typography>
            <div className="bted">
              <Button sx={{ bgcolor: "orange", mt: 1.5, ":hover": { bgcolor: "#AF5", color: "black" } }} variant="contained" onClick={handleEdit}>
                yes
              </Button>
              <Button sx={{ bgcolor: "orange", mt: 1.5, ":hover": { bgcolor: "#AF5", color: "black" } }} variant="contained" onClick={handleClose}>
                no
              </Button>
            </div>
          </form>
        </Box>
      </Modal>
    </div>
  );
}

export default EdModalpopup;
