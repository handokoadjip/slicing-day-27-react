import { Img1 } from "assets/source/image";
import React from "react";

const index = () => {
  return (
    <section className="my-0 my-lg-4">
      <div className="container">
        <div className="row">
          <div className="col-lg-12">
            <div className="wrapper position-relative mb-3 mb-lg-0">
              <figure className="m-0">
                <img
                  className="img-fluid w-100 h-image-500px"
                  src={Img1}
                  alt="image-1"
                />
              </figure>
              <div className="position-absolute top-50 start-50 translate-middle p-5 w-lg-50 text-center card bg-muted border-0">
                <div className="card-body">
                  <h2 className="display-3 mb-3 text-uppercase fw-bold ls-8px">
                    kami
                  </h2>
                  <p className="fs-5 text-uppercase">design</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default index;
