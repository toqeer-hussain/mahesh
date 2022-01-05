import {
  Avatar,
  Button,
  Checkbox,
  FormControlLabel,
  Paper,
  Switch,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  TextField,
} from "@mui/material";
import React from "react";
import AddIcon from "@mui/icons-material/Add";
import DropDown from "./DropDown";
import EditIcon from "@mui/icons-material/Edit";
import DeleteIcon from "@mui/icons-material/Delete";
import CachedIcon from "@mui/icons-material/Cached";

function createData(name, calories, fat, carbs, protein) {
  return { name, calories, fat, carbs, protein };
}

const rows = [
  createData("Frozen yoghurt", 159, 6.0),
  createData("Ice cream sandwich", 237, 0.25),
  createData("Eclair", 262, 16.0),
  createData("Cupcake", 305, 3.7),
  createData("Gingerbread", 356, 16.0),
];

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

function Section4() {
  return (
    <div>
      <div
        style={{
          display: "flex",
          marginTop: "25px",
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
          4
        </Avatar>
        <h2 style={{ marginLeft: "15px" }}>Markdown Reason Levels</h2>
      </div>
      <div>
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
            <TextField
              id="outlined-basic"
              label="Name"
              variant="outlined"
              fullWidth
              style={{ marginLeft: "10px" }}
            />
          </div>
          <div>
            <TextField
              id="outlined-basic"
              label="Name"
              variant="outlined"
              style={{ width: "292px" }}
            />
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

          <div style={{ display: "flex", marginTop: "15px" }}>
            <TextField
              id="outlined-basic"
              label="Name"
              variant="outlined"
              style={{ width: "292px" }}
            />

            <div style={{ flex: 1 }}>
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
        <div
          style={{
            marginTop: "25px",
            marginBottom: "20px",
            marginLeft: "55px",
          }}
        >
          <TableContainer component={Paper}>
            <Table sx={{ minWidth: 650 }} aria-label="simple table">
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
                  <TableCell style={{ fontWeight: "bold" }}>Category</TableCell>
                  <TableCell align="left" style={{ fontWeight: "bold" }}>
                    Category Description
                  </TableCell>
                  <TableCell align="left" style={{ fontWeight: "bold" }}>
                    Last Modified By
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
    </div>
  );
}

function Section3() {
  return (
    <div>
      <div
        style={{
          display: "flex",
          marginTop: "25px",
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
          3
        </Avatar>
        <h2 style={{ marginLeft: "15px" }}>options and Weightage</h2>
      </div>
      <div>
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
            <DropDown data={currencies} label="Customer" />
          </div>
          <div>
            <TextField
              id="outlined-basic"
              label="Name"
              variant="outlined"
              style={{ width: "292px" }}
            />
            <TextField
              id="outlined-basic"
              label="Name"
              variant="outlined"
              style={{ width: "280px", marginLeft: "8px" }}
            />
          </div>

          <div style={{ display: "flex", marginTop: "15px" }}>
            <TextField
              id="outlined-basic"
              label="Name"
              variant="outlined"
              style={{ width: "292px" }}
            />
            <TextField
              id="outlined-basic"
              label="Name"
              variant="outlined"
              style={{ width: "280px", marginLeft: "8px" }}
            />
            <div style={{ flex: 1, textAlign: "right" }}>
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
        <div
          style={{
            marginTop: "25px",
            marginBottom: "20px",
            marginLeft: "55px",
          }}
        >
          <TableContainer component={Paper}>
            <Table sx={{ minWidth: 650 }} aria-label="simple table">
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
                  <TableCell style={{ fontWeight: "bold" }}>Category</TableCell>
                  <TableCell align="left" style={{ fontWeight: "bold" }}>
                    Category Description
                  </TableCell>
                  <TableCell align="left" style={{ fontWeight: "bold" }}>
                    Last Modified By
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
    </div>
  );
}

function Section2() {
  return (
    <div>
      <div
        style={{
          display: "flex",
          marginTop: "25px",
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
        <h2 style={{ marginLeft: "15px" }}>Create Parameter</h2>
      </div>
      <div>
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
            <DropDown data={currencies} label="Category" />
            <TextField
              style={{ marginLeft: "15px" }}
              id="outlined-basic"
              label="Parameter Name"
              variant="outlined"
              placeholder="Enter Parameter Name"
              fullWidth
            />
          </div>
          <div style={{ display: "flex" }}>
            <div style={{ flex: 0.6 }}>
              <DropDown data={currencies} label="Paramter Description" />
            </div>
            <div style={{ display: "flex", flex: 0.4 }}>
              <div style={{ marginLeft: "15px" }}>
                <div>Category critical</div>
                <FormControlLabel
                  value="top"
                  control={<Switch color="primary" />}
                  label={""}
                  labelPlacement="top"
                />
              </div>
              <div style={{ marginLeft: "15px" }}>
                <div>Category critical</div>
                <FormControlLabel
                  value="top"
                  control={<Switch color="primary" />}
                  label=""
                  labelPlacement="top"
                />
              </div>
              <div
                style={{
                  padding: "10px",
                  backgroundColor: "#800000",
                  marginLeft: "30px",
                }}
              >
                <AddIcon fontSize="large" style={{ fill: "white" }} />
              </div>
            </div>
          </div>
        </div>
        <div
          style={{
            marginTop: "25px",
            marginBottom: "20px",
            marginLeft: "55px",
          }}
        >
          <TableContainer component={Paper}>
            <Table sx={{ minWidth: 650 }} aria-label="simple table">
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
                  <TableCell style={{ fontWeight: "bold" }}>Category</TableCell>
                  <TableCell align="left" style={{ fontWeight: "bold" }}>
                    Category Description
                  </TableCell>
                  <TableCell align="left" style={{ fontWeight: "bold" }}>
                    Last Modified By
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
    </div>
  );
}

export default function AuditSection1() {
  return (
    <div>
      <div
        style={{
          display: "flex",
          marginTop: "25px",
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
        <h2 style={{ marginLeft: "15px" }}>Create Categories</h2>
      </div>
      <div>
        <div
          style={{
            marginLeft: "55px",
            // marginRight: "55px",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <DropDown data={currencies} label="Company" />
          <DropDown data={currencies} label="Customer" />
          <div
            style={{
              padding: "10px",
              backgroundColor: "#800000",
              marginLeft: "15px",
            }}
          >
            <AddIcon fontSize="large" style={{ fill: "white" }} />
          </div>
        </div>
        <div
          style={{
            marginTop: "25px",
            marginBottom: "20px",
            marginLeft: "55px",
          }}
        >
          <TableContainer component={Paper}>
            <Table sx={{ minWidth: 650 }} aria-label="simple table">
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
                  <TableCell style={{ fontWeight: "bold" }}>Category</TableCell>
                  <TableCell align="left" style={{ fontWeight: "bold" }}>
                    Category Description
                  </TableCell>
                  <TableCell align="left" style={{ fontWeight: "bold" }}>
                    Last Modified By
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
      <Section3 />
      <Section4 />
      <div style={{ textAlign: "right", marginTop: "15px" }}>
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
