import React from "react";
import { Link } from "react-router-dom";

const index = () => {
  return (
    <footer>
      <div className="container">
        <div className="row align-items-center py-4">
          <div className="col-lg-12 d-flex justify-content-center">
            <div className="wrapper">
              <ul className="text-uppercase d-inline mp-0">
                <li className="d-inline">
                  <Link
                    className="nav-link fw-bold d-lg-inline d-block text-fade-2 text-center"
                    to="#"
                  >
                    Home
                  </Link>
                </li>
                <li className="d-inline">
                  <Link
                    className="nav-link fw-bold d-lg-inline d-block text-fade-2 text-center"
                    to="#"
                  >
                    Products
                  </Link>
                </li>
                <li className="d-inline">
                  <Link
                    className="nav-link fw-bold d-lg-inline d-block text-fade-2 text-center"
                    to="#"
                  >
                    Imprint
                  </Link>
                </li>
                <li className="d-inline">
                  <Link
                    className="nav-link fw-bold d-lg-inline d-block text-fade-2 text-center"
                    to="#"
                  >
                    Contact
                  </Link>
                </li>
                <li className="d-inline">
                  <Link
                    className="nav-link fw-bold d-lg-inline d-block text-fade-2 text-center"
                    to="#"
                  >
                    Cart
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </div>

        <div className="row align-items-center pt-3 pb-4">
          <div className="col-lg-12 d-flex justify-content-center">
            <div className="wrapper">
              <p className="m-0 fs-6 text-fade-3 text-center">
                Copyright &copy; KAMI
              </p>
            </div>
          </div>
        </div>

        <div className="row align-items-center py-5">
          <div className="col-lg-12 d-flex justify-content-center">
            <div className="wrapper">
              <Link
                className="fs-5 text-uppercase px-5 py-3 border border-secondary border-3"
                to="#"
              >
                back to site
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default index;
