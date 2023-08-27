import { CardContent, Grid, TextField, Card, Box } from "@mui/material";
import MenuItem from "@mui/material/MenuItem";
import React, { useState } from "react";
import AddIcon from "@mui/icons-material/Add";
import Fab from "@mui/material/Fab";
import "./AddRecord.css";
import { AddExpenseData } from "../Api/axios";
import { Gettoken } from "../Api/StoreToken/StoreToken";
import { toast, ToastContainer } from 'react-toastify';
import "react-toastify/dist/ReactToastify.css";

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
export default function AddRecord() {
  

  const [Record, setRecord] = useState({ category: "", date: "", currency: "", amount: "" });

  const handlechange = (event) => {
    setRecord({ ...Record, [event.target.name]: event.target.value });
  };
  function erroFunc(res) {
    if (res.data.status === "success") {
     
      toast.success(res.data.message, {
        position: toast.POSITION.TOP_CENTER,autoClose:1800
      });
    } else if (res.data.status === "failed") {
   
      toast.error(res.data.message, {
        position: toast.POSITION.TOP_CENTER,autoClose:1800
      });
    }
   
  }
  const handleclick = async (e) => {
    e.preventDefault();
    if (Record.category !== "" && Record.data !== "" && Record.currency !== "" && Record.amount !== "") {
      const res = await AddExpenseData(Record, Gettoken());
      setRecord({ category: "", date: "", currency: "", amount: "" });
      erroFunc(res);
    } else {
     
      toast.warning("All Fields are Required !", {
        position: toast.POSITION.TOP_CENTER,autoClose:1800
      });
      
    }
  };
  //  for neg value typed and neg value to be pasted

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
    <ToastContainer/>
      <Box component="form" id="signup_form">
        <Card style={{ width: "50%", margin: "10% auto" }} className="responsive">
          <CardContent style={{ textAlign: "center" }}>
            <h2 className="addexp" style={{ color: "#FFA500" }}>
              Add Expenses
            </h2>

            <Grid container spacing={2}>
              <Grid item xs={12}>
                <TextField required fullWidth id="outlined-select-currency" select label="Category" helperText="Please select category" value={Record.category} onChange={(e) => handlechange(e)} name="category">
                  {categoryit.map((option) => (
                    <MenuItem key={option.value} value={option.value}>
                      {option.label}
                    </MenuItem>
                  ))}
                </TextField>
              </Grid>

              <Grid item xs={12}>
              <TextField helperText="Please select date" fullWidth id="outlined-basic" type="date" variant="outlined" value={Record.date} onChange={(e) => handlechange(e)} name="date" />
              </Grid>

              <Grid item xs={12} sm={6}>
              <TextField required fullWidth id="outlined-select-currency" 
              label="Select" select defaultValue="Select" value={Record.currency} helperText="Please select your currency" onChange={(e) => handlechange(e)} name="currency">
              {currencies.map((option) => (
                <MenuItem key={option.value} value={option.value}>
                  {option.label}
                </MenuItem>
              ))}
            </TextField>
              </Grid>

              <Grid item xs={12} sm={6}>
              <TextField required fullWidth id="outlined-basic" label="Amount" variant="outlined" value={Record.amount} helperText="Please enter total amount" onChange={(e) => handlechange(e)} name="amount" onPaste={preventPasteNegative} onKeyPress={preventMinus} />
              </Grid>

              <Grid item xs={12} sx={{ mt: "15px" }}>
                <Fab disabled={false} sx={{ bgcolor: "orange", mt: 1.5, ":hover": { bgcolor: "#AF5", color: "black" } }} aria-label="add" onClick={handleclick}>
                  <AddIcon />
                </Fab>
              </Grid>
             
            </Grid>
          </CardContent>
        </Card>
      </Box>
    </div>
  );
}
