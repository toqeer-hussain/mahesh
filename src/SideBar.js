import React from "react";

let data = [
  { label: "Audit Console", icon: "bi bi-graph-up-arrow", active: true },
  { label: "Audit", icon: "bi bi-graph-up-arrow" },
  { label: "View Audit", icon: "bi bi-graph-up-arrow" },
  { label: "Reports", icon: "bi bi-graph-up-arrow" },
  { label: "Roles", icon: "bi bi-graph-up-arrow" },
];

export default function SideBar() {
  return (
    <div
      style={{
        // height: "100%",
        flex: 0.25,
      }}
    >
      <div
        style={{
          padding: "30px",

          height: "82vh",
        }}
      >
        <div
          style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            marginBottom: "50px",
            marginTop: "10px",
          }}
        >
          <i
            className="bi bi-person-circle"
            style={{ marginLeft: "0px" }}
            aria-hidden="true"
          ></i>
          <div style={{ marginLeft: "10px" }}>
            <div style={{ textAlign: "left", fontWeight: "700" }}>
              Quality Assurance
            </div>
            <div style={{ color: "rgba(128,128,128,0.5)" }}>
              Transaction Audit Report
            </div>
          </div>
        </div>
        <div>
          {data.map((item, index) => {
            return (
              <div
                key={index}
                style={{
                  backgroundColor: `${item.active && "rgba(128, 0, 0,0.3)"}`,
                  display: "flex",
                  padding: "5px",
                  borderRadius: "10px",
                }}
              >
                <i
                  className={item.icon}
                  style={{ marginLeft: "10px" }}
                  aria-hidden="true"
                ></i>
                <div
                  style={{
                    marginLeft: "10px",
                    fontWeight: `${item.active && "700"}`,
                  }}
                >
                  {item.label}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}
