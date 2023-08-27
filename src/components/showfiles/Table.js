import React, { useMemo, useState, useRef,useEffect } from "react";
import MaterialReactTable from "material-react-table";
import { FetchAllExpences} from "../Api/axios";
import { Gettoken } from "../Api/StoreToken/StoreToken";
import { useReactToPrint } from "react-to-print";
import "./Table.css";
import {  Box, Button, IconButton, Tooltip } from "@mui/material";
import Modalpopup from "./dltmodal"
import EdModalpopup from "./editmodal";
import LinearIndeterminate from "../spinner/spinner";
//nested data is ok, see accessorKeys in ColumnDef below
const Example = () => {

  const data = [];
  const [mydata, setMydata] = useState(data);
  const [deleted, setdeleted] = useState(false);
  const [edited, setedited] = useState(false);
  const [loading, setloading] = useState(false);

  const GelAllDatas = async () => {
    setloading(true)
    const res = await FetchAllExpences(Gettoken());
    setloading(false)
    setMydata(res.data)
    setdeleted(false)
    setedited(false)
  };

  useEffect(()=>{
    GelAllDatas();
  },[deleted,edited])
  
  // printing for pdf
  const componentRef = useRef();
  const handlePrint = useReactToPrint({
    content: () => componentRef.current,
  });

  // useEffect(() => {
  //   GelAllDatas();
  // }, []);

  //should be memoized or stable
  const columns = useMemo(
    () => [
      {
        accessorKey: "category", //access nested data with dot notation
        header: "Category",
      },
      {
        accessorKey: "date",
        header: "Date",
      },
      {
        accessorKey: "amount", //normal accessorKey
        header: "Amount",
      },
      {
        accessorKey: "currency",
        header: "Currency",
      },
    ],
    []
  );

  return (
    <>
      {loading && <LinearIndeterminate/>}
      <div ref={componentRef}>
        <MaterialReactTable
          columns={columns}
          data={mydata} //default
          enableColumnOrdering
          enableEditing
          renderRowActions={({ row }) => (
            <Box sx={{ display: "flex", gap: "1rem" }}>
              <Tooltip arrow placement="left" title="Edit">
                <IconButton >
                  <EdModalpopup itemid={row} setedited={setedited}/>
                </IconButton>
              </Tooltip>
              <Tooltip arrow placement="right" title="Delete">
                <IconButton color="error" >
                  <Modalpopup itemid={row} setdeleted={setdeleted}/>
                </IconButton>
              </Tooltip>
            </Box>
          )}
        />
      </div>
      <div className="align-right">
        <Button sx={{ bgcolor: "orange", mt: 1.5, ":hover": { bgcolor: "#AF5", color: "black" } }} variant="contained" color="success" onClick={handlePrint}>
          Download
        </Button>
      </div>
    </>
  );
};

export default Example;
