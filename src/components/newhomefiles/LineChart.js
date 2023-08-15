// import { CardContent,Card } from '@mui/material';
import React, { useEffect } from 'react';
import {  LineChart,Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';
import { useState } from 'react';
import { Gettoken } from '../Api/StoreToken/StoreToken';
import { FetchDashData } from '../Api/axios';


  export default function Linechart() {
   
    const data = [
      
      
    ];

    const[myData,setData]=useState(data);

    const GetData=async()=>{
     
      const res=await FetchDashData(Gettoken());
      // console.log(res.data);
      
     setData(res.data);
    }
   

    useEffect(()=>{
      GetData();
    },[])
    
  
    
      
      return (
       
        <ResponsiveContainer width="100%" height="100%">
          <LineChart
            width={700}
            height={200}
            data={myData}
            margin={{
              top: 6,
              right: 30,
              left: 20,
              bottom: 5,
            }}
          >
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="name" />
            <YAxis />
            <Tooltip />
            <Legend />
            <Line type="monotone" dataKey="Food & Drinks" stroke="#8884d8" activeDot={{ r: 8 }} />
            <Line type="monotone" dataKey="Rents" stroke="#82ca9d" />
            <Line type="monotone" dataKey="Entertainment" stroke="#867a5d" />
          </LineChart>
        </ResponsiveContainer>
        
      );
    }
  