import React from "react";
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
import DropDown from "./DropDown";
import AddIcon from "@mui/icons-material/Add";

import EditIcon from "@mui/icons-material/Edit";
import DeleteIcon from "@mui/icons-material/Delete";
import CachedIcon from "@mui/icons-material/Cached";
import RemoveIcon from "@mui/icons-material/Remove";
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
  createData("Frozen yoghurt", 159),
  createData("Ice cream sandwich", 237),
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
        <h2 style={{ marginLeft: "15px" }}>Assign the Audit Form to Auditor</h2>
      </div>
      <div>
        <div
          style={{
            display: "flex",
            marginBottom: "25px",
            alignItems: "center",
          }}
        >
          <div style={{ display: "flex", flexGrow: 1 }}>
            <TextField
              id="outlined-basic"
              label="Name"
              variant="outlined"
              fullWidth
              style={{ marginLeft: "10px" }}
            />
            <DropDown data={currencies} label="Customer" />
          </div>

          <div style={{ textAlign: "right" }}>
            <div
              style={{
                padding: "10px",

                backgroundColor: "#800000",
                marginLeft: "15px",
                display: "inline-block",
              }}
            >
              <RemoveIcon fontSize="large" style={{ fill: "white" }} />
            </div>
          </div>
        </div>
        <div
          style={{
            display: "flex",
            marginBottom: "25px",
            alignItems: "center",
          }}
        >
          <div style={{ display: "flex", flexGrow: 1 }}>
            <TextField
              id="outlined-basic"
              label="Name"
              variant="outlined"
              fullWidth
              style={{ marginLeft: "10px" }}
            />
            <DropDown data={currencies} label="Customer" />
          </div>

          <div style={{ textAlign: "right" }}>
            <div
              style={{
                padding: "10px",

                backgroundColor: "#800000",
                marginLeft: "15px",
                display: "inline-block",
              }}
            >
              <RemoveIcon fontSize="large" style={{ fill: "white" }} />
            </div>
          </div>
        </div>
        <div
          style={{
            display: "flex",
            marginBottom: "25px",
            alignItems: "center",
          }}
        >
          <div style={{ display: "flex", flexGrow: 1 }}>
            <TextField
              id="outlined-basic"
              label="Name"
              variant="outlined"
              fullWidth
              style={{ marginLeft: "10px" }}
            />
            <DropDown data={currencies} label="Customer" />
          </div>

          <div style={{ textAlign: "right" }}>
            <div
              style={{
                padding: "10px",

                backgroundColor: "#800000",
                marginLeft: "15px",
                display: "inline-block",
              }}
            >
              <AddIcon fontSize="large" style={{ fill: "white" }} />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default function Configration() {
  return (
    <div>
      <div
        style={{
          display: "flex",
          marginTop: "15px",
          alignItems: "center",
          marginBottom: "25px",
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
      <div
        style={{
          marginLeft: "55px",
          // marginRight: "55px",
          // display: "flex",
          // alignItems: "center",
          // justifyContent: "center",
        }}
      >
        <div style={{ display: "flex", marginBottom: "25px" }}>
          <DropDown data={currencies} label="Company" />
          <DropDown data={currencies} label="Customer" />
        </div>
        <div style={{ display: "flex", marginBottom: "25px" }}>
          <DropDown data={currencies} label="Company" />
          <DropDown data={currencies} label="Customer" />
        </div>
        <div style={{ display: "flex" }}>
          <div style={{ flex: "0.5" }}>
            <TextField
              id="outlined-basic"
              label="Name"
              variant="outlined"
              fullWidth
              style={{ marginLeft: "10px" }}
            />

            <div style={{ textAlign: "right" }}>
              <div
                style={{
                  padding: "10px",
                  marginTop: "10px",
                  backgroundColor: "#800000",
                  marginLeft: "15px",
                  display: "inline-block",
                }}
              >
                <AddIcon fontSize="large" style={{ fill: "white" }} />
              </div>
            </div>
          </div>
          <div style={{ display: "flex", flex: "0.5" }}>
            <div
              style={{
                marginBottom: "20px",

                paddingLeft: "24px",
              }}
            >
              <TableContainer component={Paper}>
                <Table aria-label="simple table">
                  <TableHead>
                    <TableRow>
                      <TableCell style={{ fontWeight: "bold" }}>
                        {" "}
                        Parmament Added
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
                      <TableCell style={{ fontWeight: "bold" }}>
                        Dimension
                      </TableCell>
                      <TableCell align="left" style={{ fontWeight: "bold" }}>
                        Field Name
                      </TableCell>
                      <TableCell></TableCell>
                      <TableCell></TableCell>
                      <TableCell></TableCell>
                    </TableRow>
                  </TableHead>
                  <TableBody>
                    {rows.map((row) => (
                      <TableRow
                        key={row.name}
                        sx={{
                          "&:last-child td, &:last-child th": { border: 0 },
                        }}
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
        </div>
      </div>
      <Section2 />
      <div
        style={{
          textAlign: "right",

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
