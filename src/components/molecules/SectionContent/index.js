import {
  Img2,
  Img3,
  Img4,
  Img5,
  Img6,
  Img7,
  Img8,
  Img9,
  Img10,
} from "assets/source/image";
import React from "react";

const index = () => {
  const lists = [
    {
      image: Img2,
      name: "image-2",
    },
    {
      image: Img3,
      name: "image-3",
    },
    {
      image: Img4,
      name: "image-4",
    },
    {
      image: Img5,
      name: "image-5",
    },
    {
      image: Img6,
      name: "image-6",
    },
    {
      image: Img7,
      name: "image-7",
    },
    {
      image: Img8,
      name: "image-8",
    },
    {
      image: Img9,
      name: "image-9",
    },
    {
      image: Img10,
      name: "image-10",
    },
  ];

  return (
    <section className="my-0 my-lg-4">
      <div className="container">
        <div className="row">
          {lists ? (
            lists.map((list, index) => {
              return (
                <div className="col-6 col-lg-4 mb-4" key={`image-${index}`}>
                  <div className="wrapper position-relative mb-3 mb-lg-0">
                    <figure className="m-0">
                      <img
                        className="img-fluid w-100 h-image-300px"
                        src={list.image}
                        alt={list.name}
                      />
                    </figure>
                  </div>
                </div>
              );
            })
          ) : (
            <h2 className="text-center">No List in this section</h2>
          )}
        </div>
      </div>
    </section>
  );
};

export default index;
