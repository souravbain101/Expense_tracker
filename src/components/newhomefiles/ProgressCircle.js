import React, { useCallback } from "react";
import { PieChart, Pie, Cell } from "recharts";




export default function ProgressCircle(props) {
  

  const data =props.data.slice(0,-1);
   

 
  
  const COLORS = ["#0088FE", "#00C49F",  "#FF8042"];
  
  const RADIAN = Math.PI / 180;
  const renderCustomizedLabel = ({ cx, cy, midAngle, innerRadius, outerRadius, percent, index }) => {
    const radius = innerRadius + (outerRadius - innerRadius) * 0.5;
    const x = cx + radius * Math.cos(-midAngle * RADIAN);
    const y = cy + radius * Math.sin(-midAngle * RADIAN);
  
    return (
      <text x={x} y={y} fill="white" textAnchor={x > cx ? 'start' : 'end'} dominantBaseline="central">
        {`${(percent * 100).toFixed(0)}%`}
      </text>
    );
  };
 
  return (
    <div>
    
      <PieChart width={180} height={200}  >
      <Pie
        data={data}
        cx={80}
        cy={90}
        labelLine={false}
        label={renderCustomizedLabel}
        outerRadius={80}
        fill="#8884d8"
        dataKey="value"
      >
        {data.map((entry, index) => (
          <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
        ))}
      </Pie>
    </PieChart>
    </div>
  )
}
