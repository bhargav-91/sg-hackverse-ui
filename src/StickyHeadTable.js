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
  { id: "detector", label: "WatchDog Detector", minWidth: 10, align: "left" },
  {
    id: "whatItDetects",
    label: "What WatchDog Detects",
    minWidth: 100,
    align: "left",
    format: (value) => value.toLocaleString("en-US"),
  },
];

function createData(id, detector, whatItDetects, impact, confidence) {
  return { id, detector, whatItDetects, impact, confidence };
}

const rows = [
  createData(1, "abiencoderv2-array", "Storage abiencoderv2 array"),
  createData(2, "array-by-reference", "Modifying storage array by value"),
  createData(
    3,
    "incorrect-shift",
    "The order of parameters in a shift instruction is incorrect."
  ),
  createData(4, "multiple-constructors", "Multiple constructor schemes"),
  createData(5, "name-reused", "Contracts name reused"),
  createData(
    6,
    "public-mappings-nested",
    "Public mappings with nested variables"
  ),
  createData(7, "rtlo", "Right-To-Left-Override control character is used"),
  createData(8, "shadowing-state", "State variables shadowing"),
  createData(
    9,
    "suicidal",
    "Functions allowing anyone to destruct the contract"
  ),
  createData(10, "uninitialized-state", "Uninitialized state variables"),
  createData(11, "uninitialized-storage", "Uninitialized storage variables"),
  createData(12, "unprotected-upgrade", "Unprotected upgradeable contract"),
  createData(
    13,
    "arbitrary-send",
    "Functions that send Ether to arbitrary destinations"
  ),
  createData(14, "controlled-array-length", "Tainted array length assignment"),
  createData(
    15,
    "controlled-delegatecall",
    "Controlled delegatecall destination"
  ),
  createData(
    16,
    "delegatecall-loop",
    "Payable functions using delegatecall inside a loop"
  ),
  createData(17, "msg-value-loop", "msg.value inside a loop"),
  createData(
    18,
    "reentrancy-eth",
    "Reentrancy vulnerabilities (theft of ethers),"
  ),
  createData(19, "storage-array", "Signed storage integer array compiler bug"),
  createData(20, "unchecked-transfer", "Unchecked tokens transfer"),
  createData(21, "weak-prng", "Weak PRNG"),
  createData(22, "enum-conversion", "Detect dangerous enum conversion"),
  createData(23, "erc20-interface", "Incorrect ERC20 interfaces"),
  createData(24, "erc721-interface", "Incorrect ERC721 interfaces"),
  createData(25, "incorrect-equality", "Dangerous strict equalities"),
  createData(26, "locked-ether", "Contracts that lock ether"),
  createData(
    27,
    "mapping-deletion",
    "Deletion on mapping containing a structure"
  ),
  createData(
    28,
    "shadowing-abstract",
    "State variables shadowing from abstract contracts"
  ),
  createData(29, "tautology", "Tautology or contradiction"),
  createData(30, "write-after-write", "Unused write"),
  createData(31, "boolean-cst", "Misuse of Boolean constant"),
  createData(
    32,
    "constant-function-asm",
    "Constant functions using assembly code"
  ),
  createData(
    33,
    "constant-function-state",
    "Constant functions changing the state"
  ),
  createData(
    34,
    "divide-before-multiply",
    "Imprecise arithmetic operations order"
  ),
  createData(
    35,
    "reentrancy-no-eth",
    "Reentrancy vulnerabilities (no theft of ethers),"
  ),
  createData(36, "reused-constructor", "Reused base constructor"),
  createData(37, "tx-origin", "Dangerous usage of tx.origin"),
  createData(38, "unchecked-lowlevel", "Unchecked low-level calls"),
  createData(39, "unchecked-send", "Unchecked send"),
  createData(40, "uninitialized-local", "Uninitialized local variables"),
  createData(41, "unused-return", "Unused return values"),
  createData(
    42,
    "incorrect-modifier",
    "Modifiers that can return the default value"
  ),
  createData(43, "shadowing-builtin", "Built-in symbol shadowing"),
  createData(44, "shadowing-local", "Local variables shadowing"),
  createData(
    45,
    "uninitialized-fptr-cst",
    "Uninitialized function pointer calls in constructors"
  ),
  createData(
    46,
    "variable-scope",
    "Local variables used prior their declaration"
  ),
  createData(47, "void-cst", "Constructor called not implemented"),
  createData(48, "calls-loop", "Multiple calls in a loop"),
  createData(49, "events-access", "Missing Events Access Control"),
  createData(50, "events-maths", "Missing Events Arithmetic"),
  createData(51, "incorrect-unary", "Dangerous unary expressions"),
  createData(52, "missing-zero-check", "Missing Zero Address Validation"),
  createData(53, "reentrancy-benign", "Benign reentrancy vulnerabilities"),
  createData(
    54,
    "reentrancy-events",
    "Reentrancy vulnerabilities leading to out-of-order Events"
  ),
  createData(55, "timestamp", "Dangerous usage of block.timestamp"),
  createData(56, "assembly", "Assembly usage"),
  createData(57, "assert-state-change", "Assert state change"),
  createData(58, "boolean-equal", "Comparison to boolean constant"),
  createData(59, "deprecated-standards", "Deprecated Solidity Standards"),
  createData(60, "erc20-indexed", "Un-indexed ERC20 event parameters"),
  createData(
    61,
    "function-init-state",
    "Function initializing state variables"
  ),
  createData(62, "low-level-calls", "Low level calls"),
  createData(63, "missing-inheritance", "Missing inheritance"),
  createData(
    64,
    "naming-convention",
    "Conformity to Solidity naming conventions"
  ),
  createData(65, "pragma", "If different pragma directives are used"),
  createData(66, "redundant-statements", "Redundant statements"),
  createData(67, "solc-version", "Incorrect Solidity version"),
  createData(68, "unimplemented-functions", "Unimplemented functions"),
  createData(69, "unused-state", "Unused state variables"),
  createData(70, "costly-loop", "Costly operations in a loop"),
  createData(71, "dead-code", "Functions that are not used"),
  createData(
    72,
    "reentrancy-unlimited-gas",
    "Reentrancy vulnerabilities through send and transfer"
  ),
  createData(73, "similar-names", "Variable names are too similar"),
  createData(
    74,
    "too-many-digits",
    "Conformance to numeric notation best practices"
  ),
  createData(
    75,
    "constable-states",
    "State variables that could be declared constant"
  ),
  createData(
    76,
    "external-function",
    "Public function that could be declared external"
  ),
];

export default function StickyHeadTable() {
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
