import StatBox from "./homefiles/StatBox";
import LineChart from "./homefiles/LineChart";
import AttachMoneyIcon from '@mui/icons-material/AttachMoney';
import EqualizerIcon from '@mui/icons-material/Equalizer';
import AddToPhotosIcon from '@mui/icons-material/AddToPhotos';
import { tokens } from "./homefiles/theme";
import { CardContent,Card, Grid, useTheme } from "@mui/material";
import {Typography,Box} from "@mui/material";
import React from 'react'
import './Newhome.css';

export default function Newhome() {
    const theme = useTheme();
    const colors = tokens(theme.palette.mode);
  return (
    <div>

    <div style={{margin:'0 1em 0 1em'}}>


    <Box  style={{margin:'1em 0 0 0'}} >
        <Typography className="title" fontWeight={600} fontSize={24}sx={{color:colors.orangeAccent[500]}}
        >Welcome To Your Home</Typography>
        
      </Box>

      <Grid container spacing={1} >

      <Grid item xs={12} sm={4}>
        <Card className="reshome" style={{margin:'1.5em 0 1em 0'}}>
            <CardContent>
            <StatBox
            title="32,441"
            subtitle="Expenses"
            progress="0.30"
            increase="+5%"
            icon={
              <EqualizerIcon
                sx={{ color: colors.orangeAccent[600], fontSize: "20px" }}
              />
            }
          />
            </CardContent>
        </Card>
        
      </Grid>

      <Grid  item xs={12} sm={4}>
      <Card className="reshome" style={{margin:'1.5em 0 1em 0'}}>
            <CardContent>
            <StatBox
            title="32,441"
            subtitle="Expenses"
            progress="0.30"
            increase="+5%"
            icon={
              <EqualizerIcon
                sx={{ color: colors.orangeAccent[600], fontSize: "20px" }}
              />
            }
          />
            </CardContent>
        </Card>
      </Grid>

      <Grid  item xs={12} sm={4}>
      <Card className="reshome" style={{margin:'1.5em 0 1em 0'}}>
            <CardContent>
            <StatBox
            title="32,441"
            subtitle="Expenses"
            progress="0.30"
            increase="+5%"
            icon={
              <EqualizerIcon
                sx={{ color: colors.orangeAccent[600], fontSize: "20px" }}
              />
            }
          />
            </CardContent>
        </Card>
      </Grid>

      <Grid  item xs={12} sm={8}>
      <Card className="reshome" >
        <CardContent>
        <Typography
                variant="h5"
                fontWeight="600"
                color={colors.grey[100]}
              >
                Last Month
              </Typography>
              <Typography
                variant="h5"
                fontWeight="bold"
                color={colors.orangeAccent[500]}
              >
                $59,342.32
              </Typography>

              {/* <LineChart isHome={true} /> */}
              <Box height="250px">
            <LineChart isHome={true} />
          </Box>
        </CardContent>
      </Card>

      </Grid>

      <Grid  item xs={12} sm={4}>
      <Card className="reshome" >
        <CardContent>
        <Box style={{height:'250px'}}>

        
            <Typography color={colors.grey[100]} variant="h5" fontWeight="600"
             borderBottom={`4px solid ${colors.primary[500]}`}
            >
              Recent Transactions
            </Typography>

            <Typography
                variant="h5"
                fontWeight="bold"
                margin='5px'
                color={colors.orangeAccent[500]}
              >
                $59,342.32
              </Typography>

              <Typography
                variant="h5"
                fontWeight="bold"
                margin='5px'
                color={colors.orangeAccent[500]}
              >
                $59,342.32
              </Typography>
              <Typography
                variant="h5"
                fontWeight="bold"
                margin='5px'
                color={colors.orangeAccent[500]}
              >
                $59,342.32
              </Typography>
              </Box>
        </CardContent>
      </Card>
      </Grid>

     

      </Grid>


      </div>
    </div>
  )
}
