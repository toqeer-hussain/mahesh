import { TextField } from "@mui/material";
import React from "react";

export default function DropDown({ data: currencies, label, full, ...props }) {
  const [currency, setCurrency] = React.useState(currencies[0]);

  const handleChange = (event) => {
    setCurrency(event.target.value);
  };
  return (
    <TextField
      id="outlined-select-currency-native"
      select
      fullWidth={!full && true}
      style={{ marginLeft: "10px" }}
      label={label}
      value={currency}
      onChange={handleChange}
      SelectProps={{
        native: true,
      }}
      {...props}
    >
      {currencies.map((option) => (
        <option key={option.value} value={option.value}>
          {option.label}
        </option>
      ))}
    </TextField>
  );
}
