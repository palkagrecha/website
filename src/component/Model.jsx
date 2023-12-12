import React from "react";
import Modal from "react-modal";

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
