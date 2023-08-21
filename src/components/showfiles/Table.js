import React, { useEffect, useMemo, useState, useRef } from "react";
import MaterialReactTable from "material-react-table";
import { FetchAllExpences } from "../Api/axios";
import { Gettoken } from "../Api/StoreToken/StoreToken";
import { useReactToPrint } from "react-to-print";
import "./Table.css";
import { Delete, Edit } from "@mui/icons-material";
import { Box, Button, IconButton, Tooltip } from "@mui/material";

//nested data is ok, see accessorKeys in ColumnDef below
const Example = () => {
  const data = [];
  const [mydata, setMydata] = useState(data);
  const GelAllDatas = async () => {
    const res = await FetchAllExpences(Gettoken());
    setMydata(res.data);
    // console.log(res.data);
  };

  const handleSaveRowEdits = () => {
    console.log("handleSaveRowEdits");
  };
  const [createModalOpen, setCreateModalOpen] = useState(false);
  const handleCancelRowEdits = () => {
    console.log("handleCancelRowEdits");
    setCreateModalOpen(false);
  };
  const handleDeleteRow = () => {
    console.log("handleDeleteRow");
    setCreateModalOpen(false);
  };
  // printing for pdf
  const componentRef = useRef();
  const handlePrint = useReactToPrint({
    content: () => componentRef.current,
  });

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
        <MaterialReactTable
          columns={columns}
          data={mydata}
          editingMode="modal" //default
          enableColumnOrdering
          enableEditing
          onEditingRowSave={handleSaveRowEdits}
          onEditingRowCancel={handleCancelRowEdits}
          renderRowActions={({ row, table }) => (
            <Box sx={{ display: "flex", gap: "1rem" }}>
              <Tooltip arrow placement="left" title="Edit">
                <IconButton onClick={() => table.setEditingRow(row)}>
                  <Edit />
                </IconButton>
              </Tooltip>
              <Tooltip arrow placement="right" title="Delete">
                <IconButton color="error" onClick={() => handleDeleteRow(row)}>
                  <Delete />
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
