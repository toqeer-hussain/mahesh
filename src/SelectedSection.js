import { Button } from "@mui/material";
import React from "react";
import Assign from "./Assign";
import AuditSection1 from "./AuditSection1";
import Auttribute from "./Auttribute";
import Configration from "./Configration";
import Governance from "./Governance";

let tabs = [
  <Auttribute />,
  <AuditSection1 />,
  <Assign />,
  <Configration />,
  <Governance />,
];

export default function SelectedSection({ open }) {
  return (
    <div style={{ marginLeft: "20px" }}>
      <div>{tabs[open]}</div>
    </div>
  );
}
