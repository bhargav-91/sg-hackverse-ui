import * as React from 'react';
import { DataGrid } from '@mui/x-data-grid';
import Chip from "@mui/material/Chip";
import WarningIcon from "@mui/material/Icon";
import CheckCircleIcon from "@mui/material/Icon";
import { red, blue } from "@mui/material/colors";

function getChipProps(params) {
    if (params.value === "RED") {
      return {
        icon: <WarningIcon style={{ fill: red[500] }} />,
        label: params.value,
        style: {
          borderColor: red[500]
        }
      };
    } else {
      return {
        icon: <CheckCircleIcon style={{ fill: blue[500] }} />,
        label: params.value,
        style: {
          borderColor: blue[500]
        }
      };
    }
  }

const columns = [
  { field: 'id', headerName: 'ID', width: 100 ,headerClassName: "app-theme--header"},
  { field: 'firstName', headerName: 'First name', width: 130 ,headerClassName: "app-theme--header"},
  { field: 'lastName', headerName: 'Last name', width: 130 ,headerClassName: "app-theme--header"},
  {
    field: 'age',
    headerName: 'Age',
    type: 'number',
    width: 100,
    headerClassName: "app-theme--header",
  },
  {
    field: 'fullName',
    headerName: 'Full name',
    description: 'This column has a value getter and is not sortable.',
    sortable: false,
    width: 170,
    headerClassName: "app-theme--header",
    valueGetter: (params) =>
      `${params.row.firstName || ''} ${params.row.lastName || ''}`,
  },
  { field: 'status', headerName: 'Test 1', width: 200   ,headerClassName: "app-theme--header", renderCell: (params) => {
    return <Chip variant="outlined" size="small" {...getChipProps(params)} />;
  }},
  { field: 'status1', headerName: 'Test 2', width: 200 ,headerClassName: "app-theme--header"},
  { field: 'status2', headerName: 'Test 3', width: 200 ,headerClassName: "app-theme--header"},
  { field: 'status3', headerName: 'Test 4', width: 200 ,headerClassName: "app-theme--header"},
];

const rows = [
  { id: 1, lastName: 'Snow', firstName: 'Jon', age: 35 , status: "RED"},
  { id: 2, lastName: 'Lannister', firstName: 'Cersei', age: 42 ,status: "GREEN"},
  { id: 3, lastName: 'Lannister', firstName: 'Jaime', age: 45 },
  { id: 4, lastName: 'Stark', firstName: 'Arya', age: 16 },
  { id: 5, lastName: 'Targaryen', firstName: 'Daenerys', age: null },
  { id: 6, lastName: 'Melisandre', firstName: null, age: 150 },
  { id: 7, lastName: 'Clifford', firstName: 'Ferrara', age: 44 },
  { id: 8, lastName: 'Frances', firstName: 'Rossini', age: 36 },
  { id: 9, lastName: 'Roxie', firstName: 'Harvey', age: 65 },
];

export default function DataTable() {
  return (
    <div style={{ height: 400, width: '100%' }}>

      <DataGrid
        rows={rows}
        columns={columns}
        pageSize ={5}
        rowsPerPageOptions={[5]}
        sx={{
            boxShadow: 6,
            border: 1,
            '& .app-theme--header': {
              color: "rgba(255, 255, 255)",
              backgroundColor: "#00838f"
              },
            borderColor: '#1a237e',
            '& .MuiDataGrid-cell:hover': {
              color: 'primary.main',
            },
        }}
      />
    </div>
  );
}
