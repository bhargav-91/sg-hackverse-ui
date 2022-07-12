import * as React from "react";
import { useEffect, useState } from "react";
import { DataGrid } from "@mui/x-data-grid";
import Chip from "@mui/material/Chip";
import WarningIcon from "@mui/material/Icon";
import CheckCircleIcon from "@mui/material/Icon";
import { red, blue } from "@mui/material/colors";
import { ConstructionOutlined } from "@mui/icons-material";
import _ from "lodash";

function getChipProps(params) {
  if (params.value === "RED") {
    return {
      icon: <WarningIcon style={{ fill: red[500] }} />,
      label: params.value,
      style: {
        borderColor: red[500],
      },
    };
  } else {
    return {
      icon: <CheckCircleIcon style={{ fill: blue[500] }} />,
      label: params.value,
      style: {
        borderColor: blue[500],
      },
    };
  }
}

export default function DataTable(props) {
  const [rowData, setRowData] = useState([]);
  const [columnData, setColumnData] = useState([]);
  let data = [];

  useEffect(() => {
    console.log("this is useEffect");
    console.log(props);
    if (!_.isEmpty(props.columnData)) {
      setColumnData([...props.columnData]);
    }
    if (!_.isEmpty(props.data)) {
      setRowData([...props.data]);
    }
  }, []);

  const columns = [
    {
      field: "id",
      headerName: "ID",
      width: 100,
      headerClassName: "app-theme--header",
    },
    {
      field: "file",
      headerName: "file",
      width: 130,
      headerClassName: "app-theme--header",
    },
    {
      field: "scan_name",
      headerName: "scan_name",
      width: 130,
      headerClassName: "app-theme--header",
    },
    {
      field: "detector",
      headerName: "detector",
      width: 100,
      headerClassName: "app-theme--header",
    },
    {
      field: "name",
      headerName: "name",
      width: 100,
      headerClassName: "app-theme--header",
    },
    {
      field: "description",
      headerName: "description",
      description: "This column has a value getter and is not sortable.",
      sortable: false,
      width: 70,
      headerClassName: "app-theme--header",
      valueGetter: (params) =>
        `${params.row.firstName || ""} ${params.row.lastName || ""}`,
    },
    {
      field: "line_number",
      headerName: "line_number",
      type: "number",
      width: 100,
      headerClassName: "app-theme--header",
    },
    {
      field: "impact",
      headerName: "impact",
      width: 140,
      headerClassName: "app-theme--header",
      renderCell: (params) => {
        return (
          <Chip variant="outlined" size="small" {...getChipProps(params)} />
        );
      },
    },
    {
      field: "staconfidencetus1",
      headerName: "confidence",
      width: 100,
      headerClassName: "app-theme--header",
    },
    {
      field: "contracts",
      headerName: "contracts",
      width: 100,
      headerClassName: "app-theme--header",
    },
    {
      field: "source",
      headerName: "source",
      width: 100,
      headerClassName: "app-theme--header",
    },
  ];

  return (
    <div style={{ height: 500, width: 1500 }}>
      <DataGrid
        rows={rowData}
        columns={columns}
        pageSize={5}
        rowsPerPageOptions={[5]}
        getRowId={(rowData) => rowData.id}
        sx={{
          boxShadow: 6,
          border: 1,
          "& .app-theme--header": {
            color: "rgba(255, 255, 255)",
            backgroundColor: "#00838f",
          },
          borderColor: "#1a237e",
          "& .MuiDataGrid-cell:hover": {
            color: "primary.main",
          },
        }}
      />
    </div>
  );
}
