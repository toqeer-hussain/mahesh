import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap-icons/font/bootstrap-icons.css";
import "./NavBar.css";
export default function NavBar() {
  return (
    <div>
      <nav class="navbar " style={{ backgroundColor: "#800000" }}>
        <div class="container-fluid">
          <div className="d-flex">
            <i class="bi bi-list icon__class" style={{ fontSize: "40px" }}></i>
            <a class="navbar-brand" style={{ color: "black" }}>
              Quality Assurance
            </a>
          </div>

          <form class="d-flex ">
            <div class=" flex__item">
              <i
                class="bi bi-search  "
                style={{
                  backgroundColor: "white",

                  paddingLeft: "25px",
                  paddingRight: "5px",
                  justifyContent: "center",
                }}
              ></i>
              <input
                type="search"
                placeholder="Search"
                aria-label="Search"
                className="input__Search"
              />
            </div>

            <i
              class="bi bi-bell-fill icon__class"
              style={{ marginLeft: "25px" }}
            ></i>
            <i class="bi bi-person-circle icon__class"></i>
          </form>
        </div>
      </nav>
    </div>
  );
}
