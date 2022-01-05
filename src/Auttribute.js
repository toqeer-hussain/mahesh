import { Button } from "@mui/material";
import React from "react";
import Section2 from "./Section2";
import Sections1 from "./Sections1";

export default function Auttribute() {
  return (
    <div>
      <div style={{ marginTop: "20px", marginBottom: "20px" }}>
        <Sections1 />
      </div>
      <Section2 />
      <div
        style={{ textAlign: "right", marginRight: "55px", marginTop: "15px" }}
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
