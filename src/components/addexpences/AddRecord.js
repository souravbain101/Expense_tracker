import { CardContent, Alert, Grid, TextField, Card, Box } from "@mui/material";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";
import React, { useState } from "react";
import AddIcon from "@mui/icons-material/Add";
import Fab from "@mui/material/Fab";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import "./AddRecord.css";
import { AddExpenseData } from "../Api/axios";
import { Gettoken } from "../Api/StoreToken/StoreToken";

const theme = createTheme({
  palette: {
    primary: {
      main: "#FFA500",
    },
  },
});

export default function AddRecord() {
  const [error, seterror] = useState({
    status: false,
    msg: "",
    type: "",
  });

  const [Record, setRecord] = useState({ category: "", date: "", currency: "", amount: "" });
  
  const handlechange = (event) => {
    setRecord({ ...Record, [event.target.name]: event.target.value });
  };
  function erroFunc(res) {
    if (res.data.status === "success") {
      seterror({ status: true, msg: res.data.message, type: "success" });
    } else if (res.data.status === "failed") {
      seterror({ status: true, msg: res.data.message, type: "error" });
    }
    setTimeout(() => {
      seterror({ status: false });
    }, 2000);
  }
  const handleclick = async (e) => {
    e.preventDefault();
    console.log(Record.date);
    // setRecord({ ...Record, [event.target.name]: event.target.value });
    if (Record.category !== "" && Record.data !== "" && Record.currency !== "" && Record.amount !== "") {
      const res = await AddExpenseData(Record,Gettoken());
      document.getElementById('signup_form').reset();
      erroFunc(res);
      e.target.value=""
    } else {
      seterror({ status: true, msg: "All Fields are Required", type: "error" });
      setTimeout(() => {
        seterror({ status: false });
      }, 1800);
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
      <ThemeProvider theme={theme}>
      <Box component='form' id='signup_form'>
        <Card style={{ width: "50%", margin: "10% auto" }} className="responsive">
          <CardContent style={{ textAlign: "center" }}>
            <h2 className="addexp" style={{ color: "#FFA500" }}>
              Add Expenses
            </h2>

            <Grid container spacing={2}>
              <Grid item xs={12}>
                <FormControl required fullWidth>
                  <InputLabel id="demo-select-small" style={{ background: "white" }}>
                    Category
                  </InputLabel>
                  <Select labelId="demo-select-small" id="demo-select-small" name="category" defaultValue="" onChange={handlechange}>
                    <MenuItem value={"Food & Drinks"}>Food & Drinks</MenuItem>
                    <MenuItem value={"Entertainment"}>Entertainment</MenuItem>
                    <MenuItem value={"Rents"}>Rents</MenuItem>
                  </Select>
                </FormControl>
              </Grid>

              <Grid item xs={12}>
                <TextField color="primary" type="date" name="date" variant="outlined" fullWidth required onChange={handlechange} />
              </Grid>

              <Grid item xs={12} sm={6}>
                <FormControl required fullWidth>
                  <InputLabel id="demo-select-small" style={{ background: "white" }}>
                    Currency
                  </InputLabel>
                  <Select labelId="demo-select-small" id="demo-select-small" name="currency" onChange={handlechange} defaultValue="">
                    <MenuItem value={"INR"}>INR</MenuItem>
                    <MenuItem value={"EUR"}>EUR</MenuItem>
                    <MenuItem value={"USD"}>USD</MenuItem>
                  </Select>
                </FormControl>
              </Grid>

              <Grid item xs={12} sm={6}>
                <TextField color="primary" type="number" label="Amount" name="amount" variant="outlined" fullWidth required onChange={handlechange} onPaste={preventPasteNegative} onKeyPress={preventMinus} />
              </Grid>

              <Grid item xs={12} sx={{ mt: "15px" }}>
                <Fab disabled={false} color="primary" aria-label="add" onClick={handleclick}>
                  <AddIcon />
                </Fab>
              </Grid>
              <Grid item xs={12}>
                {error.status ? <Alert severity={error.type}>{error.msg}</Alert> : ""}
              </Grid>
            </Grid>
          </CardContent>
        </Card>
        </Box>
      </ThemeProvider>
    </div>
  );
}
