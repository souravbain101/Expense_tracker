import React,{useState} from 'react'
import Table from './Table'
import Box from '@mui/material/Box';
import LinearIndeterminate from '../spinner/spinner';
function Show() {
  const [loading, setloading] = useState(false)
  return (<>
     {loading && <LinearIndeterminate/>}
    <Box sx={{ p: 3 }}>
    <Table setloading={setloading}/>
    </Box>
    </>
  )
}

export default Show