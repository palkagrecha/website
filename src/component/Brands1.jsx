import React from "react";

const Brands1 = ({ title, logo }) => {
  console.log("logo", logo);
  return (
    <>
      <section className="brand1">
        <div className="container py-5">
          <div className="row mt-5">
            <div className="row brandTitle text-center d-flex justify-content-center">
              <div className="col-md-8">
                <p className="brand_Title">{title}</p>
              </div>
            </div>

            <div className=" my-5 row brand_logo d-flex justify-content-center align-items-center  m-0 p-0">
              {logo?.map((x, i) => (
                <div className="col-md-3 mt-1 ml-3 at575BrandLogo" key={i}>
                  <img
                    src={x.imgUrl}
                    alt={x.name}
                    loading="lazy"
                    height="150"
                    width="250"
                    title={x.title}
                  />
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Brands1;
