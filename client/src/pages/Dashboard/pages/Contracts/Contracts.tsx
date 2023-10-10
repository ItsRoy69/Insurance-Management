import "./Contracts.css";
import Box from "@mui/material/Box";
import Drawer from "../../AppDrawer";
import useDocumentTitle from "../../../../hook/useDocumentTitle";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import * as React from "react";
import { useLocation } from "react-router-dom";
import { useEffect, useState } from "react";
import Axios from "axios";

let contracts = [];
const Contracts = () => {
  useDocumentTitle("User Panel - Insurance Partners - Insurance Policies");
  const { state } = useLocation();
  const { user_type, user_email, user_id } = state;
  const [data, setData] = useState(false);

  useEffect(() => {
    Axios.post("http://localhost:3001/contracts").then((response) => {
      contracts = [];
      response.data.forEach((transData) => {
        contracts.push(transData);
        setData(true);
      });
    });
    console.log(contracts);
  }, []);

  return (
    <div>
      <Box sx={{ display: "flex" }}>
        <Drawer user_type={user_type} user_email={user_email} user_id={user_id} />
      </Box>
      <div className="transactions-wrapper">
        <TableContainer className="table-container" component={Paper}>
          <Table sx={{ minWidth: 650 }} aria-label="simple table">
            <TableHead className="table-head">
              <TableRow>
                <TableCell className="table-cell" align="center">
                  <p>Insurance Status</p>
                </TableCell>
                <TableCell className="table-cell" align="center">
                  <p>Insurance Type</p>
                </TableCell>
                <TableCell className="table-cell" align="center">
                  <p>Transaction Number</p>
                </TableCell>
                <TableCell className="table-cell" align="center">
                  <p>Branch Code</p>
                </TableCell>
                <TableCell className="table-cell" align="center">
                  <p>Customer Number</p>
                </TableCell>
                <TableCell className="table-cell" align="center">
                  <p>Insurance Number</p>
                </TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {contracts.map((contract) => (
                <TableRow
                  key={contract.contract_id}
                  sx={{
                    "&:last-child td, &:last-child th": {
                      border: 0
                    }
                  }}
                >
                  <TableCell align="center">{contract.contract_status == "pending" ? <p className={contract.contract_status}>Pending Approval</p> : <p className={contract.contract_status}>Approved</p>}</TableCell>
                  <TableCell align="center">{contract.insurance_id == 1 ? <p>Auto Insurance</p> : contract.insurance_id == 2 ? <p>Fire Insurance</p> : <p>Life Insurance</p>}</TableCell>
                  <TableCell align="center">
                    <p>{contract.transaction_id}</p>
                  </TableCell>
                  <TableCell align="center">
                    <p>{contract.branch_id}</p>
                  </TableCell>
                  <TableCell align="center">
                    <p>{contract.client_id}</p>
                  </TableCell>
                  <TableCell align="center">
                    <p>{contract.contract_id}</p>
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>
      </div>
    </div>
  );
};
export default Contracts;
