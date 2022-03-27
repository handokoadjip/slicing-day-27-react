import React from "react";
import { Link } from "react-router-dom";

const index = () => {
  return (
    <nav className="navbar navbar-expand-lg navbar-light px-4">
      <div className="container-fluid px-0 d-flex justify-content-between">
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div
          className="collapse navbar-collapse justify-content-center"
          id="navbarNav"
        >
          <ul className="navbar-nav text-uppercase border-bottom-2px">
            <li className="nav-item px-0 px-lg-4">
              <Link className="nav-link text-center" to="#">
                product
              </Link>
            </li>
            <li className="nav-item px-0 px-lg-4">
              <Link className="nav-link text-center" to="#">
                imprint
              </Link>
            </li>
            <li className="nav-item px-0 px-lg-4">
              <Link className="nav-link text-center" to="#">
                contact
              </Link>
            </li>
            <li className="nav-item px-0 px-lg-4">
              <Link className="nav-link text-center" to="#">
                cart
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default index;
