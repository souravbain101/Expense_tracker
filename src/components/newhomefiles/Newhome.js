
import ProgressCircle from "./ProgressCircle"
import LineChart from "./LineChart";
import { tokens } from "./theme";
import { CardContent,Card, Grid, useTheme } from "@mui/material";
import {Typography,Box} from "@mui/material";
import React, { useEffect, useState } from 'react'
import './Newhome.css';
import { Gettoken } from "../Api/StoreToken/StoreToken";
import { Fetchlastmonthdata } from "../Api/axios";
import { FetchTransaction } from "../Api/axios";
// import { green } from "@mui/material/colors";




export default function Newhome() {
    const theme = useTheme();
    const colors = tokens(theme.palette.mode);
    
    useEffect(()=>{
      GetlastmonthsData();
      GetrecentTransaction();
    },[])

    
    // let data=[
    //   {"name":"",value:0}
    // ];
    const[mydata,setdata]=useState(null);
    const[Recentdata,setRecentdata]=useState(null);

    const GetlastmonthsData=async()=>{
      const res=await Fetchlastmonthdata(Gettoken());
      
      
      
      // console.log(res.data);
      // console.log(res.data);
      let data1=res.data[0];
      let data2=res.data[1];
      let data3=res.data[2];
      
      if (data1[3].month===0 ) {
        data1[3].month='No Data Found';
        
      }
      if(data2[3].month===0){
        data2[3].month='No Data Found';
      }
      
      if(data3[3].month===0){
        data3[3].month='No Data Found';
      }
      // console.log(data3[3].month)
      // console.log(data1[3]);
      setdata(res.data)
      
      
    }

    const GetrecentTransaction=async()=>{
      const res=await FetchTransaction(Gettoken());
      // console.log(res.data);
      setRecentdata(res.data)
    }
    

  return (
    <div>

    <div style={{margin:'0 1em 0 1em'}}>


    <Box  style={{margin:'1em 0 0 0'}} >
        <Typography className="title" fontWeight={600} fontSize={24}sx={{color:colors.orangeAccent[500]}}
        >Welcome To Your Home</Typography>
        
      </Box>

      <Grid container spacing={1} >

      {/* ?.length er mane holo prothome null thakle erron jate na dae kintu jokhon array
       chole asbe tokhon abar jate .length ta kaj kore and map ta start hobe. */}

      {mydata?.length && mydata.map((v,i)=><Grid key={i} item xs={12} sm={4}>
        <Card className="reshome" style={{margin:'1.5em 0 1em 0'}}>
            <CardContent  >
          <Grid container spacing={1}>
          <Grid item sm={12} className="piebox1">
          <div style={{color:'#ff9100',fontWeight:'bold'}} >{v[3]['month']}</div>
          <div>
          <ProgressCircle data={v}/>
          </div>
          </Grid>
          <Grid item sm={12} className="piebox">
          
            
          
          
          <h5  style={{color:"#0088FE",margin:"6px"}}>Food</h5>
          <h5  style={{color:"#00C49F",margin:"6px"}}>Rents</h5>
          <h5  style={{color:"#FF8042",margin:"6px"}}>Entertainment</h5>
          </Grid>
          </Grid>
            </CardContent>
        </Card>
        
      </Grid>)}

      

      <Grid  item xs={12} sm={8}>
      <Card className="reshome" >
        <CardContent >
        <Typography
                variant="h5"
                fontWeight="600"
                sx={{color:'#ff9100',marginBottom:'7px'}}
              >
                Visualization Of Expenses
              </Typography>
              {/* <Typography
                variant="h5"
                fontWeight="bold"
                color={colors.orangeAccent[500]}
              >
                $59,342.32
              </Typography> */}

              {/* <LineChart isHome={true} /> */}
              <Box height="250px">
            <LineChart isHome={true} />
          </Box>
        </CardContent>
      </Card>

      </Grid>

      <Grid   item xs={12} sm={4}>
      <Card className="reshome" >
        <CardContent >
        <Box style={{height:'50vh'}}>

        
            <Typography color={colors.grey[100]} variant="h5" fontWeight="600"
            //  borderBottom={`4px solid ${colors.primary[500]}`}
             sx={{color:'#66e16c',marginBottom:'9px',borderBottom:'4px solid #FFF7D4'}}
            >
              Recent Transactions
            </Typography>

            {Recentdata?.length && Recentdata.map((v,i)=> <Typography
                key={i}
                variant="h6"
                fontWeight="bold"
                fontSize={'1em'}
                margin='10px'
                color={'red'}
              >
                {i+1}.  -{v.amount} {v.currency} For {v.category}
              </Typography>)}

              {/* <Typography
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
              </Typography> */}
              </Box>
        </CardContent>
      </Card>
      </Grid>

     

      </Grid>


      </div>
    </div>
  )
}
