import React from "react";
import { BsInstagram } from "react-icons/bs";

import { FaSnapchatGhost, FaLinkedin, FaFacebook } from "react-icons/fa";

const Footer = () => {
  return (
    <>
      <div className="footeer ">
        <div className=" text-center text-white py-2">
          <div className="foot ">
            <div className="companyName">
              <p>
                <b>ar@biancagarutti.com</b>
              </p>
            </div>
            <div className="setLastBottom">
              <div className="socialLogo">
                <a href="https://www.instagram.com/pal.techxr/" target="blank">
                  <BsInstagram color="white" fontSize={20} />
                </a>
              </div>
              <div className="socialLogo mt-3">
                <a
                  href="https://www.snapchat.com/add/pal.kagrecha"
                  target="blank"
                >
                  <FaSnapchatGhost color="white" fontSize={20} />
                </a>
              </div>
              <div className="socialLogo mt-3">
                <a
                  href="https://www.linkedin.com/in/pal-kagrecha/"
                  target="blank"
                >
                  <FaLinkedin color="white" fontSize={20} />
                </a>
              </div>
              <div className="socialLogo mt-3">
                <a href="https://www.facebook.com/pal.kagrecha" target="blank">
                  <FaFacebook color="white" fontSize={20} />
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Footer;
