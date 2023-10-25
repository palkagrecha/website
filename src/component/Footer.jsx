import React from "react";
import { BsInstagram } from "react-icons/bs";
import { BsFacebook } from "react-icons/bs";

const Footer = () => {
  return (
    <>
      <div className="footeer">
        <div className="row text-center text-white">
          <div className="foot">
            <div className="companyName">
              <p>
                <b>ar@biancagaruttid.com</b>
              </p>
            </div>
            <div className="socialLogo">
              <BsInstagram color="white" fontSize={40} />
            </div>
            <div className="socialLogo">
              <BsFacebook color="white" fontSize={40} />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Footer;
