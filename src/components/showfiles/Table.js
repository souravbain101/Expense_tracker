import React, { useEffect, useMemo, useState, useRef } from "react";
import MaterialReactTable from "material-react-table";
import { FetchAllExpences } from "../Api/axios";
import { Gettoken } from "../Api/StoreToken/StoreToken";
import { useReactToPrint } from "react-to-print";

//nested data is ok, see accessorKeys in ColumnDef below
const Example = () => {
  const data = [];
  const [mydata, setMydata] = useState(data);
  const GelAllDatas = async () => {
    const res = await FetchAllExpences(Gettoken());
    setMydata(res.data);
    // console.log(res.data);

    // printing for pdf 
    const componentRef = useRef();
    const handlePrint = useReactToPrint({
      content: () => componentRef.current,
    });

  };

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

  return <>
    <MaterialReactTable columns={columns} data={mydata} />
      {/* <button onClick={handlePrint}>Print this out!</button> */}
  </>
  };

export default Example;
