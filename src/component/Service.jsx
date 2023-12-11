import React from "react";
import { RiComputerFill } from "react-icons/ri";
import { SiTaichigraphics } from "react-icons/si";
import { SiBackendless } from "react-icons/si";

const Service = () => {
  return (
    <>
      <section className="service py-5">
        <div className="container ">
          <div className="row ">
            <div className="row at575Heading">
              <h5 className="service_text">
                <span className="service_intro1">MY </span>
                <span className="service_intro2">Services</span>
              </h5>
            </div>
            <div className="row at575Heading">
              <h2 className="profession">What I Do</h2>
            </div>
          </div>

          <div className="row mt-5 service_provide d-flex justify-content-between">
            <div className="col-md-3 space_bw at575Div">
              <div className="row text-center my-2">
                <RiComputerFill fontSize={70} color="aqua" />
              </div>
              <div className="row text-center my-2">
                <h5 className="service_title">Augmented Reality</h5>
              </div>
              <div className="row text-center my-2">
                <div className="service_ds ">
                  <small>
                    Crafting captivating AR experiences for 3+ years. Elevate
                    gaming, entertainment, education, and healthcare projects
                    with expertise.
                  </small>
                </div>
              </div>
            </div>
            <div className="col-md-3 space_bw at575Div">
              <div className="row text-center my-2">
                <SiTaichigraphics fontSize={70} color="aqua" />
              </div>
              <div className="row text-center my-2">
                <h5 className="service_title">Web Development</h5>
              </div>
              <div className="row text-center my-2">
                <div className="service_ds ">
                  <small>
                    Boost your online presence with 3+ years of expert Web
                    Development. Let's create dynamic, responsive websites for
                    your digital success.
                  </small>
                </div>
              </div>
            </div>
            <div className="col-md-3 space_bw at575Div">
              <div className="row text-center my-2">
                <SiBackendless fontSize={70} color="aqua" />
              </div>
              <div className="row text-center my-2">
                <h5 className="service_title">App Development</h5>
              </div>
              <div className="row text-center my-2">
                <div className="service_ds ">
                  <small>
                    Crafting cutting-edge mobile apps for 3+ years. Elevate your
                    digital presence with our expert App Development solutions.
                  </small>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Service;
