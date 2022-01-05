import React from "react";
import MainContent from "./MainContent";
import SideBar from "./SideBar";

export default function SectionDesign() {
  return (
    <div style={{ display: "flex" }}>
      <SideBar />
      <MainContent />
    </div>
  );
}
