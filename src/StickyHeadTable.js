import * as React from 'react'; 
import Paper from '@mui/material/Paper';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TablePagination from '@mui/material/TablePagination';
import TableRow from '@mui/material/TableRow';


const columns = [
  { id: 'id', label: 'Num', minWidth: 20},
  { id: 'detector', label: 'Detector', minWidth: 10 },
  {
    id: 'whatItDetects',
    label: 'What it Detects',
    minWidth: 100,
    align: 'center',
    format: (value) => value.toLocaleString('en-US'),
  },
  {
    id: 'impact',
    label: 'Impact',
    minWidth: 50,
    align: 'right',
    format: (value) => value.toLocaleString('en-US'),
  },
  {
    id: 'confidence',
    label: 'Confidence',
    minWidth: 50,
    align: 'right',
    format: (value) => value.toFixed(2),
  },
];

function createData(id, detector, whatItDetects, impact,confidence) {
  return { id, detector, whatItDetects, impact,confidence };
}

const rows = [
createData(1,'abiencoderv2-array','Storage abiencoderv2 array','High','High'),
createData(2,'array-by-reference','Modifying storage array by value','High','High'),
createData(3,'incorrect-shift','The order of parameters in a shift instruction is incorrect.','High','High'),
createData(4,'multiple-constructors','Multiple constructor schemes','High','High'),
createData(5,'name-reused','Contracts name reused','High','High'),
createData(6,'public-mappings-nested','Public mappings with nested variables','High','High'),
createData(7,'rtlo','Right-To-Left-Override control character is used','High','High'),
createData(8,'shadowing-state','State variables shadowing','High','High'),
createData(9,'suicidal','Functions allowing anyone to destruct the contract','High','High'),
createData(10,'uninitialized-state','Uninitialized state variables','High','High'),
createData(11,'uninitialized-storage','Uninitialized storage variables','High','High'),
createData(12,'unprotected-upgrade','Unprotected upgradeable contract','High','High'),
createData(13,'arbitrary-send','Functions that send Ether to arbitrary destinations','High','Medium'),
createData(14,'controlled-array-length','Tainted array length assignment','High','Medium'),
createData(15,'controlled-delegatecall','Controlled delegatecall destination','High','Medium'),
createData(16,'delegatecall-loop','Payable functions using delegatecall inside a loop','High','Medium'),
createData(17,'msg-value-loop','msg.value inside a loop','High','Medium'),
createData(18,'reentrancy-eth','Reentrancy vulnerabilities (theft of ethers),','High','Medium'),
createData(19,'storage-array','Signed storage integer array compiler bug','High','Medium'),
createData(20,'unchecked-transfer','Unchecked tokens transfer','High','Medium'),
createData(21,'weak-prng','Weak PRNG','High','Medium'),
createData(22,'enum-conversion','Detect dangerous enum conversion','Medium','High'),
createData(23,'erc20-interface','Incorrect ERC20 interfaces','Medium','High'),
createData(24,'erc721-interface','Incorrect ERC721 interfaces','Medium','High'),
createData(25,'incorrect-equality','Dangerous strict equalities','Medium','High'),
createData(26,'locked-ether','Contracts that lock ether','Medium','High'),
createData(27,'mapping-deletion','Deletion on mapping containing a structure','Medium','High'),
createData(28,'shadowing-abstract','State variables shadowing from abstract contracts','Medium','High'),
createData(29,'tautology','Tautology or contradiction','Medium','High'),
createData(30,'write-after-write','Unused write','Medium','High'),
createData(31,'boolean-cst','Misuse of Boolean constant','Medium','Medium'),
createData(32,'constant-function-asm','Constant functions using assembly code','Medium','Medium'),
createData(33,'constant-function-state','Constant functions changing the state','Medium','Medium'),
createData(34,'divide-before-multiply','Imprecise arithmetic operations order','Medium','Medium'),
createData(35,'reentrancy-no-eth','Reentrancy vulnerabilities (no theft of ethers),','Medium','Medium'),
createData(36,'reused-constructor','Reused base constructor','Medium','Medium'),
createData(37,'tx-origin','Dangerous usage of tx.origin','Medium','Medium'),
createData(38,'unchecked-lowlevel','Unchecked low-level calls','Medium','Medium'),
createData(39,'unchecked-send','Unchecked send','Medium','Medium'),
createData(40,'uninitialized-local','Uninitialized local variables','Medium','Medium'),
createData(41,'unused-return','Unused return values','Medium','Medium'),
createData(42,'incorrect-modifier','Modifiers that can return the default value','Low','High'),
createData(43,'shadowing-builtin','Built-in symbol shadowing','Low','High'),
createData(44,'shadowing-local','Local variables shadowing','Low','High'),
createData(45,'uninitialized-fptr-cst','Uninitialized function pointer calls in constructors','Low','High'),
createData(46,'variable-scope','Local variables used prior their declaration','Low','High'),
createData(47,'void-cst','Constructor called not implemented','Low','High'),
createData(48,'calls-loop','Multiple calls in a loop','Low','Medium'),
createData(49,'events-access','Missing Events Access Control','Low','Medium'),
createData(50,'events-maths','Missing Events Arithmetic','Low','Medium'),
createData(51,'incorrect-unary','Dangerous unary expressions','Low','Medium'),
createData(52,'missing-zero-check','Missing Zero Address Validation','Low','Medium'),
createData(53,'reentrancy-benign','Benign reentrancy vulnerabilities','Low','Medium'),
createData(54,'reentrancy-events','Reentrancy vulnerabilities leading to out-of-order Events','Low','Medium'),
createData(55,'timestamp','Dangerous usage of block.timestamp','Low','Medium'),
createData(56,'assembly','Assembly usage','Informational','High'),
createData(57,'assert-state-change','Assert state change','Informational','High'),
createData(58,'boolean-equal','Comparison to boolean constant','Informational','High'),
createData(59,'deprecated-standards','Deprecated Solidity Standards','Informational','High'),
createData(60,'erc20-indexed','Un-indexed ERC20 event parameters','Informational','High'),
createData(61,'function-init-state','Function initializing state variables','Informational','High'),
createData(62,'low-level-calls','Low level calls','Informational','High'),
createData(63,'missing-inheritance','Missing inheritance','Informational','High'),
createData(64,'naming-convention','Conformity to Solidity naming conventions','Informational','High'),
createData(65,'pragma','If different pragma directives are used','Informational','High'),
createData(66,'redundant-statements','Redundant statements','Informational','High'),
createData(67,'solc-version','Incorrect Solidity version','Informational','High'),
createData(68,'unimplemented-functions','Unimplemented functions','Informational','High'),
createData(69,'unused-state','Unused state variables','Informational','High'),
createData(70,'costly-loop','Costly operations in a loop','Informational','Medium'),
createData(71,'dead-code','Functions that are not used','Informational','Medium'),
createData(72,'reentrancy-unlimited-gas','Reentrancy vulnerabilities through send and transfer','Informational','Medium'),
createData(73,'similar-names','Variable names are too similar','Informational','Medium'),
createData(74,'too-many-digits','Conformance to numeric notation best practices','Informational','Medium'),
createData(75,'constable-states','State variables that could be declared constant','Optimization','High'),
createData(76,'external-function','Public function that could be declared external','Optimization','High')

    
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
    <Paper elevation={3} sx={{ width: '100%', overflow: 'hidden' }}>
      <TableContainer sx={{ maxHeight: 500 }} >
        <Table stickyHeader aria-label="sticky table" >
          <TableHead>
            <TableRow
              sx={{
                "& th": {
                  color: "rgba(255, 255, 255)",
                  backgroundColor: "#00838f"
                }
              }}>
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
                          {column.format && typeof value === 'number'
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
