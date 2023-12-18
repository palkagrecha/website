import React from "react";
import { SiTaichigraphics } from "react-icons/si";
import { SiBackendless } from "react-icons/si";
import { TbColorFilter } from "react-icons/tb";
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
                <TbColorFilter fontSize={70} color="aqua" />
              </div>
              <div className="row text-center my-2">
                <h5 className="service_title">Augmented Reality Effect</h5>
              </div>
              <div className="row text-center my-2">
                <div className="service_ds ">
                  <small>
                    Elevate your social media presence with captivating AR
                    effects designed for Instagram, Facebook, Snapchat, and
                    Messenger.
                  </small>
                </div>
              </div>
            </div>
            <div className="col-md-3 space_bw at575Div">
              <div className="row text-center my-2">
                <SiTaichigraphics fontSize={70} color="aqua" />
              </div>
              <div className="row text-center my-2">
                <h5 className="service_title">Augmented Reality Ads</h5>
              </div>
              <div className="row text-center my-2">
                <div className="service_ds ">
                  <small>
                    Boost your brand visibility with dynamic AR advertisements
                    tailored for Instagram, Facebook, and Snapchat.
                  </small>
                </div>
              </div>
            </div>
            <div className="col-md-3 space_bw at575Div">
              <div className="row text-center my-2">
                <SiBackendless fontSize={70} color="aqua" />
              </div>
              <div className="row text-center my-2">
                <h5 className="service_title">AR application & WebAR</h5>
              </div>
              <div className="row text-center my-2">
                <div className="service_ds ">
                  <small>
                    ransform your ideas into reality with our expertise in
                    developing cutting-edge AR applications for both Android and
                    iOS platforms.
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
