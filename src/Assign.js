import React, { useState } from "react";

import SearchIcon from "@mui/icons-material/Search";
import { Box } from "@mui/system";
import DoneIcon from "@mui/icons-material/Done";
import {
  Avatar,
  Button,
  Checkbox,
  FormControlLabel,
  Radio,
  Paper,
  Switch,
  InputAdornment,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  TextField,
} from "@mui/material";
import AddIcon from "@mui/icons-material/Add";
import DropDown from "./DropDown";
import EditIcon from "@mui/icons-material/Edit";
import DeleteIcon from "@mui/icons-material/Delete";
import CachedIcon from "@mui/icons-material/Cached";
const currencies = [
  {
    value: "Choose your  Type",
    label: "Choose your  Type",
  },
  {
    value: "EUR",
    label: "€",
  },
  {
    value: "BTC",
    label: "฿",
  },
  {
    value: "JPY",
    label: "¥",
  },
];

function createData(name, calories, fat, carbs, protein) {
  return { name, calories, fat, carbs, protein };
}

const rows = [
  createData("Frozen yoghurt", 159, 6.0),
  createData("Ice cream sandwich", 237, 0.25),
];

function Section2() {
  return (
    <div>
      <div
        style={{
          display: "flex",
          marginTop: "15px",
          alignItems: "center",
        }}
      >
        <Avatar
          sx={{
            bgcolor: " red",
            width: 30,
            height: 30,
            backgroundColor: "#800000",
          }}
        >
          2
        </Avatar>
        <h2 style={{ marginLeft: "15px" }}>
          Assign the Audit Form to Associate
        </h2>
      </div>
      <div style={{ marginLeft: "55px", marginBottom: "15px" }}>
        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            marginTop: "25px",
          }}
        >
          <DropDown data={currencies} label="Company" />
          <DropDown data={currencies} label="Customer" />
        </div>
        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            marginTop: "25px",
          }}
        >
          <DropDown
            data={currencies}
            label="Company"
            full
            style={{ width: "425px", marginLeft: "8px" }}
          />
          <div style={{ textAlign: "right", marginTop: "25px" }}>
            <Button
              variant="contained"
              style={{ marginLeft: "10px", backgroundColor: "#800000" }}
            >
              Assign
            </Button>
          </div>
        </div>
      </div>

      <TableContainer component={Paper} style={{ marginBottom: "15px" }}>
        <Table aria-label="simple table">
          <TableHead>
            <TableRow>
              <TableCell style={{ fontWeight: "bold" }}>
                Auditor Assigned
              </TableCell>
              <TableCell></TableCell>
              <TableCell></TableCell>
              <TableCell></TableCell>
              <TableCell></TableCell>
              <TableCell>
                <CachedIcon />
              </TableCell>
            </TableRow>
            <TableRow>
              <TableCell></TableCell>
              <TableCell style={{ fontWeight: "bold" }}>Category</TableCell>
              <TableCell align="left" style={{ fontWeight: "bold" }}>
                Reporting
              </TableCell>
              <TableCell align="left" style={{ fontWeight: "bold" }}>
                Designation
              </TableCell>
              <TableCell></TableCell>
              <TableCell></TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {rows.map((row) => (
              <TableRow
                key={row.name}
                sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
              >
                <TableCell
                //   component="th"
                //   scope="row"
                //   style={{ fontWeight: "bold" }}
                >
                  <Checkbox />
                </TableCell>
                <TableCell
                  //   component="th"
                  //   scope="row"
                  style={{ fontWeight: "bold" }}
                >
                  {row.name}
                </TableCell>
                <TableCell align="left" style={{ fontWeight: "bold" }}>
                  {row.calories}
                </TableCell>
                <TableCell align="left" style={{ fontWeight: "bold" }}>
                  {row.fat}
                </TableCell>
                <TableCell align="left" style={{ fontWeight: "bold" }}>
                  <EditIcon />
                </TableCell>
                <TableCell align="left" style={{ fontWeight: "bold" }}>
                  <DeleteIcon />
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </div>
  );
}

function MyRadio() {
  const [value, setvalue] = useState(false);
  return (
    <div
      style={{
        boxShadow: "0 1px 6px 0 rgb(32 33 36 / 28%)",
        borderRadius: "15px",
        padding: "10px",
        paddingLeft: "20px",
        marginTop: "25px",
      }}
    >
      <Box sx={{ boxShadow: 3 }}>
        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
          }}
        >
          <h5 style={{ fontWeight: "bold" }}>Auditor Name First</h5>
          <Radio
            onClick={() => {
              let output = value ? false : true;
              setvalue(output);
            }}
            checked={value}
            checkedIcon={<DoneIcon />}
          />
        </div>
        <div>
          <span>User Customer </span> | <span>User Auditor</span> |{" "}
          <span>User</span>
        </div>
        <div>
          <span>User Customer </span> | <span>User Auditor</span> |{" "}
          <span>User</span>
        </div>
      </Box>
    </div>
  );
}

export default function Assign() {
  return (
    <div>
      <div
        style={{
          display: "flex",
          marginTop: "15px",
          alignItems: "center",
        }}
      >
        <Avatar
          sx={{
            bgcolor: " red",
            width: 30,
            height: 30,
            backgroundColor: "#800000",
          }}
        >
          1
        </Avatar>
        <h2 style={{ marginLeft: "15px" }}>Assign the Audit Form to Auditor</h2>
      </div>
      <div style={{ display: "flex", marginLeft: "55px" }}>
        <div style={{ flex: "0.5" }}>
          <TextField
            label="Search "
            id="outlined-start-adornment"
            InputProps={{
              endAdornment: <SearchIcon />,
            }}
            fullWidth
          />
          <div>
            <MyRadio />
            <div style={{ textAlign: "right", marginTop: "25px" }}>
              <Button
                variant="contained"
                style={{ marginLeft: "10px", backgroundColor: "#800000" }}
              >
                Next
              </Button>
            </div>
          </div>
        </div>
        <div style={{ flex: "0.5", marginLeft: "15px" }}>
          <TableContainer component={Paper}>
            <Table aria-label="simple table">
              <TableHead>
                <TableRow>
                  <TableCell style={{ fontWeight: "bold" }}>
                    Auditor Assigned
                  </TableCell>
                  <TableCell></TableCell>
                  <TableCell></TableCell>
                  <TableCell></TableCell>
                  <TableCell></TableCell>
                  <TableCell>
                    <CachedIcon />
                  </TableCell>
                </TableRow>
                <TableRow>
                  <TableCell></TableCell>
                  <TableCell style={{ fontWeight: "bold" }}>Category</TableCell>
                  <TableCell align="left" style={{ fontWeight: "bold" }}>
                    Reporting
                  </TableCell>
                  <TableCell align="left" style={{ fontWeight: "bold" }}>
                    Designation
                  </TableCell>
                  <TableCell></TableCell>
                  <TableCell></TableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                {rows.map((row) => (
                  <TableRow
                    key={row.name}
                    sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
                  >
                    <TableCell
                    //   component="th"
                    //   scope="row"
                    //   style={{ fontWeight: "bold" }}
                    >
                      <Checkbox />
                    </TableCell>
                    <TableCell
                      //   component="th"
                      //   scope="row"
                      style={{ fontWeight: "bold" }}
                    >
                      {row.name}
                    </TableCell>
                    <TableCell align="left" style={{ fontWeight: "bold" }}>
                      {row.calories}
                    </TableCell>
                    <TableCell align="left" style={{ fontWeight: "bold" }}>
                      {row.fat}
                    </TableCell>
                    <TableCell align="left" style={{ fontWeight: "bold" }}>
                      <EditIcon />
                    </TableCell>
                    <TableCell align="left" style={{ fontWeight: "bold" }}>
                      <DeleteIcon />
                    </TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </TableContainer>
        </div>
      </div>
      <Section2 />
      <Section2 />
      <div
        style={{
          textAlign: "right",
          marginRight: "55px",
          marginTop: "15px",
          marginBottom: "15px",
        }}
      >
        <Button variant="contained" style={{ backgroundColor: "#800000" }}>
          Submit
        </Button>
        <Button
          variant="contained"
          style={{ marginLeft: "10px", backgroundColor: "#800000" }}
        >
          Next
        </Button>
      </div>
    </div>
  );
}
