import React from "react";
import TextField from "@mui/material/TextField";
import { Avatar } from "@mui/material";
import DropDown from "./DropDown";
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

export default function Section2() {
  return (
    <div>
      <div>
        <div
          style={{
            display: "flex",

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
          <h2 style={{ marginLeft: "15px" }}>Set For Attribute</h2>
        </div>
        <div
          style={{
            marginLeft: "55px",
            marginRight: "55px",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <DropDown data={currencies} label="Company" />
          <DropDown data={currencies} label="Customer" />
        </div>
        <div
          style={{
            marginLeft: "55px",
            marginRight: "55px",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            marginTop: "15px",
          }}
        >
          <DropDown data={currencies} label="Process" />
          <DropDown data={currencies} label="Sub Process" />
        </div>
      </div>
    </div>
  );
}
