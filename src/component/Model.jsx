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
                <video autoPlay muted height="400px" width="260px">
                  <source src={modelData.videoLink} type="video/mp4" />
                </video>
              </div>
            </div>

            <div className="col-sm-7 p-2 modelData">
              <h3 className="text-white">{modelData.name}</h3>
              <p className="text-white mt-2">
                Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                Similique dolorum modi mollitia accusamus odio blanditiis fugit,
                consectetur eaque eos? Doloremque distinctio vitae ipsa fugiat
                quas laboriosam consectetur aliquam earum. Atque! Laudantium
                numquam quos placeat et ab adipisci necessitatibus hic aliquam
                maiores quae doloremque sed doloribus qui quidem laborum
                corporis, vel consectetur dolorem ratione ipsa veniam
                voluptatibus sint? Doloremque, at unde?
              </p>

              <button className="btn bg-primary text-white modelBtn">
                Instagram
              </button>
              <button className="btn bg-primary text-white mx-3 modelBtn">
                Facebook
              </button>
              <button className="btn bg-primary text-white modelBtn">
                Youtube
              </button>
            </div>
          </div>
        </div>
      </Modal>
    </div>
  );
};

export default Model;
