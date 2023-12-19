import React from "react";
// import Typed from "react-typed";
import { useNavigate } from "react-router-dom";
import Profile from "../images/PalKagrechaProfessionsalPicHome.png";
import { BsInstagram } from "react-icons/bs";
import { TbWorldCancel } from "react-icons/tb";
import { FaSnapchatGhost } from "react-icons/fa";
import Service from "../component/Service";
import Brands1 from "../component/Brands1";
import PlayVideo from "../component/PlayVideo";
import Typewriter from "typewriter-effect";
import { BrandsLogo, brandTitle1 } from "../brand";

import { Helmet } from "react-helmet";
const Home = () => {
  const navigate = useNavigate();

  return (
    <>
      <div>
        <Helmet>
          <meta charSet="utf-8" />
          <meta
            name="description"
            content="Transform ideas into captivating AR experiences. Specialists in gaming, entertainment, education, and healthcare solutions. Explore immersive possibilities with over 3 years of expertise"
          />
          <meta
            name="keywords"
            content="AR solutions, gaming AR, entertainment experiences, education technology, healthcare applications"
          />
          <meta name="author" content="Pal Kagrecha" />
          <title> Pal Kagrecha - AR Developer</title>
        </Helmet>
      </div>
      <section className="upper py-5">
        <div className="container py-5  ">
          <div className="row flex-wrap-reverse ">
            <div className="col-sm-7" id="forsmallDevice">
              <div className="row flex-wrap-reverse">
                <h5 className="intro">
                  <span className="intro1">Hello, </span>
                  <span className="intro2">I&#39;m</span>
                </h5>
              </div>
              <div className="row my-1 flex-wrap-reverse">
                <h1 id="title">Pal Kagrecha</h1>
              </div>
              <div className="row subtitle my-1 flex-wrap-reverse">
                <h5>
                  <Typewriter
                    className="text-center"
                    options={{
                      strings: ["AR - Developer", "A Designer", "A Creator"],
                      autoStart: true,
                      loop: true,
                      cursor: "",
                      wrapperClassName: "typewriterpara",
                    }}
                  />
                </h5>
              </div>
              <div className="row my-2 flex-wrap-reverse atMobile">
                <div className="col-6 description">
                  <span>
                    AR developer with 3+ years' experience, pushing immersive
                    tech boundaries. Proven portfolio in gaming, entertainment,
                    education, and healthcare AR projects.
                  </span>
                </div>
              </div>
              <div className="row btn_set  my-4 px-2 flex-wrap-reverse">
                <button className="btn" onClick={() => navigate("/touch")}>
                  Let&#39;s Talk
                </button>
              </div>
            </div>

            <div className="col-sm-5 ">
              <div
                className="row responsiveDevice py-5"
                id="responseAtId"
                style={{ height: "300px" }}
              ></div>
              <div className="row flex-wrap-reverse ">
                <div className="hexagon-container " id="animationFloatMobile">
                  <div className="clip_path">
                    <div id="mobileFloat ">
                      <img src={Profile} alt="owner" id="owner" />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="row my-4  p-0 g-0 ">
            <div className="diamond">
              <div className="box_1">
                <span>Check out my</span>
              </div>
              <div className="diamondShape mx-2">
                <div className=" box_2">
                  <div className="">
                    <a
                      href="https://www.instagram.com/pal.techxr/"
                      target="blank"
                    >
                      <BsInstagram
                        className="social_media"
                        color="white"
                        fontSize={20}
                      />
                    </a>
                  </div>
                </div>
                <div className=" box_3">
                  <div>
                    <a
                      href="https://xrbazaar.co/creators/palkagrecha/"
                      target="blank"
                    >
                      <TbWorldCancel
                        className="social_media"
                        color="white"
                        fontSize={20}
                      />
                    </a>
                  </div>
                </div>
                <div className=" box_4">
                  <div>
                    <a
                      href="https://www.snapchat.com/add/pal.kagrecha"
                      target="blank"
                    >
                      <FaSnapchatGhost
                        className="social_media"
                        color="white"
                        fontSize={20}
                      />
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Service />
      <PlayVideo />
      <Brands1 title={brandTitle1} logo={BrandsLogo} />
      {/* <Brands1 title={brandTitle2} logo={advancedLogo} /> */}
    </>
  );
};

export default Home;
