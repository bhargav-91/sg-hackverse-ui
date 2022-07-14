import * as React from "react";
import Paper from "@mui/material/Paper";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TablePagination from "@mui/material/TablePagination";
import TableRow from "@mui/material/TableRow";

const columns = [
  { id: "id", label: "ID", minWidth: 20, align: "left" },
  { id: "detector", label: "Regulatory ID", minWidth: 10, align: "left" },
  {
    id: "whatItDetects",
    label: "Regulatory Title",
    minWidth: 100,
    align: "left",
    format: (value) => value.toLocaleString("en-US"),
  },
];

function createData(id, detector, whatItDetects, impact, confidence) {
  return { id, detector, whatItDetects, impact, confidence };
}

const rows = [
  createData(1, "SWC-136", "Unencrypted Private Data On-Chain"),
  createData(2, "SWC-135", "Code With No Effects"),
  createData(3, "SWC-131", "Presence of unused variables"),
  createData(
    4,
    "SWC-133",
    "Hash Collisions With Multiple Variable Length Arguments"
  ),
  createData(5, "SWC-132", "Unexpected Ether balance"),
  createData(6, "SWC-131", "Presence of unused variables"),
  createData(7, "SWC-130", "Right-To-Left-Override control character (U+202E)"),
  createData(8, "SWC-129", "Typographical Error"),
  createData(10, "SWC-128", "DoS With Block Gas Limit"),
  createData(11, "SWC-127", "Arbitrary Jump with Function Type Variable"),
  createData(12, "SWC-126", "Insufficient Gas Griefing"),
  createData(13, "SWC-125", "Incorrect Inheritance Order"),
  createData(14, "SWC-124", "Write to Arbitrary Storage Location"),
  createData(15, "SWC-123", "Requirement Violation"),
  createData(16, "SWC-122", "Lack of Proper Signature Verification"),
  createData(17, "SWC-120", "Weak Sources of Randomness from Chain Attributes"),
  createData(18, "SWC-119", "Shadowing State Variables"),
  createData(19, "SWC-118", "Incorrect Constructor Name"),
  createData(20, "SWC-117", "Signature Malleability"),
  createData(21, "SWC-116", "Block values as a proxy for time"),
  createData(22, "SWC-115", "Authorization through tx.origin"),
  createData(23, "SWC-114", "Transaction Order Dependence"),
  createData(24, "SWC-113", "DoS with Failed Call"),
  createData(25, "SWC-112", "Delegatecall to Untrusted Callee"),
  createData(26, "SWC-111", "Use of Deprecated Solidity Functions"),
  createData(27, "SWC-110", "Assert Violation"),
  createData(28, "SWC-109", "Uninitialized Storage Pointer"),
  createData(29, "SWC-108", "State Variable Default Visibility"),
  createData(30, "SWC-107", "Reentrancy"),
  createData(31, "SWC-106", "Unprotected SELFDESTRUCT Instruction"),
  createData(32, "SWC-105", "Unprotected Ether Withdrawal"),
  createData(33, "SWC-104", "Unchecked Call Return Value"),
  createData(34, "SWC-103", "Floating Pragma"),
  createData(35, "SWC-102", "Outdated Compiler Version"),
  createData(36, "SWC-101", "Integer Overflow and Underflow"),
  createData(37, "SWC-100", "Function Default Visibility"),
];

export default function SWCRegistry() {
  const [page, setPage] = React.useState(0);
  const [rowsPerPage, setRowsPerPage] = React.useState(10);

  const handleChangePage = (event, newPage) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (event) => {
    setRowsPerPage(+event.target.value);
    setPage(0);
  };

  return (
    <Paper
      elevation={5}
      sx={{ width: "100%", overflow: "hidden", padding: 7, marginTop: 2 }}
    >
      <TableContainer sx={{ maxHeight: 500 }}>
        <Table stickyHeader aria-label="sticky table">
          <TableHead>
            <TableRow
              sx={{
                "& th": {
                  color: "rgba(255, 255, 255)",
                  backgroundColor: "#00838f",
                },
              }}
            >
              {columns.map((column) => (
                <TableCell
                  key={column.id}
                  align={column.align}
                  style={{ minWidth: column.minWidth }}
                >
                  {column.label}
                </TableCell>
              ))}
            </TableRow>
          </TableHead>
          <TableBody>
            {rows
              .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
              .map((row) => {
                return (
                  <TableRow hover role="checkbox" tabIndex={-1} key={row.code}>
                    {columns.map((column) => {
                      const value = row[column.id];
                      return (
                        <TableCell key={column.id} align={column.align}>
                          {column.format && typeof value === "number"
                            ? column.format(value)
                            : value}
                        </TableCell>
                      );
                    })}
                  </TableRow>
                );
              })}
          </TableBody>
        </Table>
      </TableContainer>
      <TablePagination
        rowsPerPageOptions={[10, 25, 100]}
        component="div"
        count={rows.length}
        rowsPerPage={rowsPerPage}
        page={page}
        onPageChange={handleChangePage}
        onRowsPerPageChange={handleChangeRowsPerPage}
      />
    </Paper>
  );
}
