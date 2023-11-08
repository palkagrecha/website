import React from "react";
import { BsInstagram } from "react-icons/bs";
import { BsFacebook } from "react-icons/bs";

const Footer = () => {
  return (
    <>
      <div className="footeer">
        <div className="row text-center text-white">
          <div className="foot position-relative">
            <div className="companyName">
              <p>
                <b>ar@biancagarutti.com</b>
              </p>
            </div>
            <div className="position-absolute bottom-0 end-0 me-3 mb-3 bg-primary pt-2 pb-2 rounded-2">
              <div className="socialLogo">
              <BsInstagram color="white" fontSize={40} />
            </div>
            <div className="socialLogo mt-3">
              <BsFacebook color="white" fontSize={40} />
            </div>
            <div className="socialLogo mt-3">
              <BsFacebook color="white" fontSize={40} />
            </div>
            <div className="socialLogo mt-3">
              <BsFacebook color="white" fontSize={40} />
            </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Footer;
