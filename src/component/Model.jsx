import React from "react";
import Modal from "react-modal";
import { Helmet } from "react-helmet";

const Model = ({ open, setOpen, modelData }) => {
  const customStyles = {
    content: {
      top: "20%",
      width: "60%",
      margin: "auto",
      backgroundColor: "#21272F",
      borderRadius: "20px",
    },
  };
  return (
    <div>
      <>
        <Helmet>
          <meta
            name="description"
            content={
              modelData?.point
                ? modelData?.point?.length < 1
                  ? "Augmented Reality Effect by Pal Kagrecha"
                  : modelData?.point[0]
                : ` Deliver awe-inspiring Augmented Reality effects to your audience.
          Elevate engagement and captivate users with our cutting-edge AR
          solutions. Transform reality seamlessly `
            }
          />

          <meta
            property="og:url"
            content="https://pal-portfolio.vercel.app/project"
          />
          <meta
            property="og:image"
            itemprop="video"
            content={modelData?.videoLink}
          />
          <meta name="author" content={modelData?.through} />
          <title>
            {modelData?.name
              ? modelData?.name
              : " Projects - Immerse Yourself in VR Excellence"}
          </title>
          <link
            rel="canonical"
            href="https://pal-portfolio.vercel.app/project"
          />
        </Helmet>
      </>
      <Modal
        id="modelHeight"
        isOpen={open}
        style={customStyles}
        onRequestClose={() => setOpen(false)}
      >
        <div className="container-fluid g-0 p-0 mt-2">
          <div className="row g-0 p-0 d-flex justify-content-between">
            <div className="col-sm-4 g-0 p-0" id="at575px">
              <div className="row   g-0 p-0 modelVideo">
                <video autoPlay muted loop>
                  <source src={modelData.videoLink} type="video/mp4" />
                </video>
              </div>
            </div>

            <div className="col-sm-7 p-2 modelData text-center">
              <h3 className="text-white">{modelData?.name}</h3>
              <p className="text-white">
                {modelData?.through ? modelData?.through : "by @palkagrecha"}
              </p>

              <div className="text-white mt-2">
                <ul>
                  {modelData?.point?.map((x, i) => (
                    <li>
                      <p className="text-white">{x}</p>
                    </li>
                  ))}
                </ul>
              </div>

              <button className="btn bg-primary text-white modelBtn m-auto">
                TRY IT OUT
              </button>
            </div>
          </div>
        </div>
      </Modal>
    </div>
  );
};

export default Model;
