import React, { useEffect, useMemo, useState } from "react";
import MaterialReactTable from "material-react-table";
import { FetchAllExpences } from "../Api/axios";
import { Gettoken } from "../Api/StoreToken/StoreToken";
//nested data is ok, see accessorKeys in ColumnDef below
const Example = () => {
  const data = [];
  const [mydata, setMydata] = useState(data)
  const GelAllDatas = async () => {
    const res = await FetchAllExpences(Gettoken());
    setMydata(res.data);
    // console.log(res.data);
  };

  useEffect(() => {
    GelAllDatas();
  }, []);

  //should be memoized or stable
  const columns = useMemo(() => [
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

  return <MaterialReactTable columns={columns} data={mydata} />;
};

export default Example;
