/* eslint-disable jsx-a11y/anchor-is-valid */
import React from "react";
import "../index.css";
function Navbar() {
  return (
    <div>
      <div className="container-fluid " >
        <nav class="navbar  navbar-expand-lg navbar-light bg-light ">
          <a class="navbar-brand logo" href="#">
            Brand Logo
          </a>
          <button
            class="navbar-toggler"
            type="button"
            data-toggle="collapse"
            data-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span class="navbar-toggler-icon"></span>
          </button>

          <div class="collapse navbar-collapse" id="navbarSupportedContent">
            <ul class="navbar-nav mr-auto">
              <li class="nav-item active">
                <a class="nav-link" href="#">
                  Home <span class="sr-only">(current)</span>
                </a>
              </li>
              <li class="nav-item ">
                <a class="nav-link" href="#">
                  Product <span class="sr-only">(current)</span>
                </a>
              </li>
              <li class="nav-item ">
                <a class="nav-link" href="#">
                  Pricing <span class="sr-only">(current)</span>
                </a>
              </li>
              <li class="nav-item">
                <a class="nav-link" href="#">
                  FAQ
                </a>
              </li>

              <li class="nav-item">
                <a class="nav-link " href="#">
                  Blog
                </a>
              </li>
            </ul>
            <div>
              {/* login logut btn here */}
              <button
                type="button "
                class="btn mr-2 bg-light"
                style={{ border: "none", color: "#3c4b64" }}
              >
                Log in
              </button>
              <button type="button" class="btn buttons">
                Sign Up
              </button>
            </div>
          </div>
        </nav>
      </div>
    </div>
  );
}

export default Navbar;
