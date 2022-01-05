import React from "react";
import TextField from "@mui/material/TextField";
import { Avatar } from "@mui/material";
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

export default function Sections1() {
  const [currency, setCurrency] = React.useState(currencies[0]);

  const handleChange = (event) => {
    setCurrency(event.target.value);
  };
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
            1
          </Avatar>
          <h2 style={{ marginLeft: "15px" }}>Enter a name and Audit Type</h2>
        </div>
        <div style={{ marginLeft: "55px", marginRight: "55px" }}>
          <TextField
            id="outlined-basic"
            label="Name"
            variant="outlined"
            fullWidth
          />
          <TextField
            id="outlined-select-currency-native"
            select
            fullWidth
            style={{ marginTop: "20px" }}
            label="Types"
            value={currency}
            onChange={handleChange}
            SelectProps={{
              native: true,
            }}
          >
            {currencies.map((option) => (
              <option key={option.value} value={option.value}>
                {option.label}
              </option>
            ))}
          </TextField>
        </div>
      </div>
    </div>
  );
}
