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
import DesktopDatePicker from "@mui/lab/DesktopDatePicker";
import EditIcon from "@mui/icons-material/Edit";
import DeleteIcon from "@mui/icons-material/Delete";
import CachedIcon from "@mui/icons-material/Cached";
import RemoveIcon from "@mui/icons-material/Remove";
import MyDateField from "./MyDateField";

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
  createData("Frozen yoghurt", 159, 455, 1245, 6.0),
  createData("Ice cream sandwich", 237, 4513, 458, 12, 4.0),
];

function Section3() {
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
          3
        </Avatar>
        <h2 style={{ marginLeft: "15px" }}>Set Target to Auditor</h2>
      </div>
      <div>
        <div style={{ display: "flex", justifyContent: "space-between" }}>
          <DropDown
            data={currencies}
            label="Author Name"
            full
            style={{ width: "280px" }}
          />
          <MyDateField label="Start Month" />
          <MyDateField label="End Month" />
        </div>
        <div
          style={{
            marginTop: "15px",
            display: "flex",
            alignItems: "center",
          }}
        >
          <TextField
            id="outlined-basic"
            label="Name"
            variant="outlined"
            style={{ width: "280px" }}
          />
          <div style={{ textAlign: "right", flexGrow: 1 }}>
            <Button
              variant="contained"
              style={{ marginLeft: "10px", backgroundColor: "#800000" }}
            >
              Set Target
            </Button>
          </div>
        </div>
      </div>
      <div>
        <div
          style={{
            marginBottom: "20px",
            marginTop: "20px",
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
                  <TableCell></TableCell> <TableCell></TableCell>
                  <TableCell>
                    <CachedIcon />
                  </TableCell>
                </TableRow>
                <TableRow>
                  <TableCell></TableCell>
                  <TableCell style={{ fontWeight: "bold" }}>
                    Author Name
                  </TableCell>
                  <TableCell align="left" style={{ fontWeight: "bold" }}>
                    Start Month
                  </TableCell>
                  <TableCell align="left" style={{ fontWeight: "bold" }}>
                    {" "}
                    End Month
                  </TableCell>
                  <TableCell align="left" style={{ fontWeight: "bold" }}>
                    {" "}
                    Audit Target
                  </TableCell>
                  <TableCell align="left" style={{ fontWeight: "bold" }}>
                    {" "}
                    Last Mondified
                  </TableCell>
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
                      {row.carbs}
                    </TableCell>
                    <TableCell align="left" style={{ fontWeight: "bold" }}>
                      {row.protein}
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
        <div style={{ textAlign: "right", flexGrow: 1, marginBottom: "15px" }}>
          <Button
            variant="contained"
            style={{ marginLeft: "10px", backgroundColor: "#800000" }}
          >
            Submit
          </Button>
        </div>
      </div>
    </div>
  );
}

function Section2() {
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
          2
        </Avatar>
        <h2 style={{ marginLeft: "15px" }}>Criteria of Randomizer</h2>
      </div>
      <div style={{ marginLeft: "55px" }}>
        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            marginTop: "25px",
          }}
        >
          <DropDown data={currencies} label="Company" />
          <DropDown data={currencies} label="Customer" />
          <DropDown data={currencies} label="Customer" />
          <DropDown data={currencies} label="Customer" />
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
        <div>
          <div
            style={{
              marginBottom: "20px",
              marginTop: "20px",
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
  );
}

export default function Governance() {
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
        <h2 style={{ marginLeft: "15px" }}>Calculate Sample fontSize</h2>
      </div>
      <div style={{ marginLeft: "55px", width: "330px" }}>
        <FormControlLabel
          control={<Switch defaultChecked size="large" />}
          label="Sample Size Calcaulte Manual Size"
        />
        <TextField
          id="outlined-basic"
          label="Name"
          variant="outlined"
          fullWidth
          style={{ marginTop: "10px" }}
        />
      </div>
      <Section2 />
      <Section3 />
    </div>
  );
}
