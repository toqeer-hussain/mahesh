import React, { Component } from "react";
import logo from "./logo.svg";
import "./App.css";
import NavBar from "./NavBar";
import MyBreadcrumb from "./MyBreadcrumb";
import SectionDesign from "./SectionDesign";

export default function App() {
  return (
    <div>
      <NavBar />
      <MyBreadcrumb />
      <SectionDesign />
    </div>
  );
}
