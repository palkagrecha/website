import React from "react";
import Modal from "react-modal";
import vr from "../images/check.mp4";

const Model = ({ open, setOpen }) => {
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
        isOpen={open}
        style={customStyles}
        onRequestClose={() => setOpen(false)}
      >
        <div className="container-fluid g-0 p-0 mt-2">
          <div className="row g-0 p-0 d-flex justify-content-between">
            <div className="col-3 g-0 p-0">
              <div className="row   g-0 p-0">
                <video
                  id="project_video"
                  height={350}
                  width={200}
                  loop
                  autoPlay
                  muted
                  src={vr}
                  type="video/mp4"
                ></video>
              </div>
            </div>

            <div className="col-8 p-2">
              <h3 className="text-white">MoonLight</h3>
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

              <button className="btn bg-primary text-white">Instagram</button>
              <button className="btn bg-primary text-white mx-3">
                Facebook
              </button>
              <button className="btn bg-primary text-white">Youtube</button>
            </div>
          </div>
        </div>
      </Modal>
    </div>
  );
};

export default Model;
