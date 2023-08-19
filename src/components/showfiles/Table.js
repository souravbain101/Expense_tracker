import React, { useEffect, useMemo, useState, useRef } from "react";
import Button from "@mui/material/Button";
import MaterialReactTable from "material-react-table";
import { FetchAllExpences } from "../Api/axios";
import { Gettoken } from "../Api/StoreToken/StoreToken";
import { useReactToPrint } from "react-to-print";
import "./Table.css";

//nested data is ok, see accessorKeys in ColumnDef below
const Example = () => {
  const data = [];
  const [mydata, setMydata] = useState(data);
  const GelAllDatas = async () => {
    const res = await FetchAllExpences(Gettoken());
    setMydata(res.data);
    // console.log(res.data);
  };

  // printing for pdf
  const componentRef = useRef();
  const handlePrint = useReactToPrint({
    content: () => componentRef.current,
  });
  const handleSaveRow =({exitEditingMode})=>{
    console.log("gg")
    exitEditingMode();
  }

  useEffect(() => {
    GelAllDatas();
  }, []);

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
      <div ref={componentRef}>
        <MaterialReactTable columns={columns} data={mydata} enableEditing onEditingRowSave={handleSaveRow} />
      </div>
      <div className="align-right">
        <Button sx={{ bgcolor: "orange", mt: 1.5, ":hover": { bgcolor: "#AF5", color: "black" } }} variant="contained" color="success" onClick={handlePrint}>
          Download
        </Button>
      </div>
      {/* <button onClick={handlePrint}>Print this out!</button> */}
    </>
  );
};

export default Example;
