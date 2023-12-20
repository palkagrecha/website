import React from "react";
import { BsInstagram } from "react-icons/bs";
import { FaSnapchatGhost, FaLinkedin, FaFacebook } from "react-icons/fa";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <>
      <div className="footeer ">
        <div className=" text-center text-white py-2">
          <div className="foot ">
            <div className="companyName row">
              <p>
                <p>
                  Contact us:{" "}
                  <a href="mailto:work@palkagrecha.com">
                    📧 work@palkagrecha.com
                  </a>
                </p>
                <i className="text-center">
                  <a
                    href="https://vishal-portfolio-amber.vercel.app/"
                    className="meDeveloper"
                  >
                    All right Reserved &copy; Vishal Kumar 2023
                  </a>
                </i>
                <p className="text-center mt-3 navFooter">
                  <Link to="/about">About</Link>|
                  <Link to="/contact">Contact</Link>|
                  <Link to="/service">Service</Link>
                </p>
                <p className="d-flex justify-content-center " id="iconMobile">
                  <div className="space">
                    {" "}
                    <a
                      href="https://www.instagram.com/pal.techxr/"
                      target="blank"
                    >
                      <BsInstagram color="white" fontSize={20} />
                    </a>
                  </div>
                  <div className="space">
                    <a
                      href="https://www.linkedin.com/in/pal-kagrecha/"
                      target="blank"
                    >
                      <FaLinkedin color="white" fontSize={20} />
                    </a>
                  </div>
                  <div className="space">
                    <a
                      href="https://www.snapchat.com/add/pal.kagrecha"
                      target="blank"
                    >
                      <FaSnapchatGhost color="white" fontSize={20} />
                    </a>
                  </div>
                  <div className="space">
                    <FaFacebook color="white" fontSize={20} />
                  </div>
                </p>
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
