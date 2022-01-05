import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap-icons/font/bootstrap-icons.css";
export default function MyBreadcrumb() {
  return (
    <div style={{ paddingLeft: "50px", paddingTop: "15px" }} className=" ml-5">
      <nav aria-label="breadcrumb">
        <ol class="breadcrumb">
          <li class="breadcrumb-item ">
            <a href="#">Home</a>
          </li>
          <li class="breadcrumb-item bi-chevron-right">
            <a href="#">Library</a>
          </li>
          <li
            class="breadcrumb-item active bi-chevron-right"
            aria-current="page"
          >
            Data
          </li>
        </ol>
      </nav>
    </div>
  );
}
