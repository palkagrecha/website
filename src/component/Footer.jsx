import React from "react";
import { BsInstagram } from "react-icons/bs";
import { BsFacebook } from "react-icons/bs";

const Footer = () => {
  return (
    <>
      <div className="footeer ">
        <div className="row text-center text-white">
          <div className="foot position-relative">
            <div className="companyName">
              <p>
                <b>ar@biancagarutti.com</b>
              </p>
            </div>
            <div className="setLastBottom">
              <div className="socialLogo">
                <BsInstagram color="white" fontSize={20} />
              </div>
              <div className="socialLogo mt-3">
                <BsFacebook color="white" fontSize={20} />
              </div>
              <div className="socialLogo mt-3">
                <BsFacebook color="white" fontSize={20} />
              </div>
              <div className="socialLogo mt-3">
                <BsFacebook color="white" fontSize={20} />
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Footer;
