import { CardContent, Grid, TextField, Card } from "@mui/material";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";
import React, { useState } from "react";
import AddIcon from "@mui/icons-material/Add";
import Fab from "@mui/material/Fab";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import "./AddRecord.css";

const theme = createTheme({
  palette: {
    primary: {
      main: "#FFA500",
    },
  },
});

export default function AddRecord() {
  const Exrecord = {
    category: "",
    date: "",
    currency: "",
    amount: "",
  };
  const [Record, setRecord] = useState(Exrecord);
  const handlechange = (event) => {
    setRecord({ ...Record, [event.target.name]: event.target.value });
  };
  const handleclick = () => {
    console.log(Record);
  };
  //  for neg value typed and neg value to be pasted

  const preventPasteNegative = (e) => {
    const clipboardData = e.clipboardData || window.clipboardData;
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
                <Fab color="primary" aria-label="add" onClick={handleclick}>
                  <AddIcon />
                </Fab>
              </Grid>
            </Grid>
          </CardContent>
        </Card>
      </ThemeProvider>
    </div>
  );
}
