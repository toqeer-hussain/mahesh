import { Button } from "@mui/material";
import React, { useState } from "react";
import SelectedSection from "./SelectedSection";

let tabs = ["Attribute", "Audit Form", "Assign", "Configration", "Governance"];

export default function MainContent() {
  const [current, setcurrent] = useState(tabs[0]);
  console.log("tab number", tabs.indexOf(current));
  return (
    <div style={{ flex: 0.7 }}>
      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          width: "100%",
          alignItems: "center",
          marginLeft: "10px",
          marginRight: "10px",
        }}
      >
        <h2>Audit</h2>
        <div>
          <div class="btn-group" style={{ backgroundColor: "white" }}>
            <button
              type="button"
              class="btn dropdown-toggle"
              data-bs-toggle="dropdown"
              aria-expanded="false"
              style={{
                border: "1px solid black",
              }}
            >
              Right-aligned menu example
            </button>
            <ul class="dropdown-menu dropdown-menu-end">
              <li>
                <button class="dropdown-item" type="button">
                  Action
                </button>
              </li>
              <li>
                <button class="dropdown-item" type="button">
                  Another action
                </button>
              </li>
              <li>
                <button class="dropdown-item" type="button">
                  Something else here
                </button>
              </li>
            </ul>
          </div>
          <Button
            variant="contained"
            style={{ marginLeft: "10px", backgroundColor: "#800000" }}
          >
            Next
          </Button>
        </div>
      </div>
      <div
        style={{
          textAlign: "left",
          marginTop: "45px",
          paddingBottom: "7px",
          marginLeft: "15px",

          borderBottom: "1px solid brown",
        }}
      >
        {tabs.map((tab, index) => (
          <span
            style={{
              marginRight: "10px",
              padding: "10px",
              borderBottom: current == tab && "3px solid brown",
            }}
            key={index}
            onClick={() => setcurrent(tab)}
          >
            {tab}
          </span>
        ))}
      </div>
      <SelectedSection open={tabs.indexOf(current)} />
    </div>
  );
}
