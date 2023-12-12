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
import { Helmet } from "react-helmet";
const Home = () => {
  const navigate = useNavigate();
  let brandTitle1 = `
            Lore ipsum dolor, sit amet consectetur adipisicing elit. Alias, aut! Unde dolor corrupti excepturi tenetur reprehenderit delectus voluptatem ex, consectetur eligendi commodi odio ea debitis repudiandae sit harum corporis sequi?
  
  `;
  let brandTitle2 = `
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Alias, aut! Unde dolor corrupti excepturi tenetur reprehenderit delectus voluptatem ex, consectetur eligendi commodi odio ea debitis repudiandae sit harum corporis sequi?
  
  `;

  let BrandsLogo = [
    {
      imgUrl:
        "https://static.wixstatic.com/media/49687e_08081a6d7f2944b0afe36d7e48367aaf~mv2.png/v1/crop/x_0,y_49,w_1000,h_870/fill/w_120,h_104,al_c,q_85,usm_0.66_1.00_0.01,enc_auto/cea-1591638900-logos-cea-prancheta-1png.png",
      name: "Ca",
    },
    {
      imgUrl:
        "https://static.wixstatic.com/media/49687e_0bed3109710a437aa39540c99579b769~mv2.png/v1/fill/w_148,h_30,al_c,q_85,usm_0.66_1.00_0.01,enc_auto/Meta_Platforms_Inc__logo.png",
      name: "meta",
    },
    {
      imgUrl:
        "https://static.wixstatic.com/media/49687e_badc2658d12b4b25aa688050df392bfb~mv2.png/v1/crop/x_57,y_59,w_291,h_278/fill/w_135,h_127,al_c,q_85,usm_0.66_1.00_0.01,enc_auto/logo_tonica.png",
      name: "tomica",
    },
    {
      imgUrl:
        "https://static.wixstatic.com/media/49687e_d4b7dc0f06144b47a7b1ebbfaec4347e~mv2.png/v1/fill/w_176,h_42,al_c,q_85,usm_0.66_1.00_0.01,enc_auto/logo.png",
      name: "sempre",
    },
    {
      imgUrl:
        "https://static.wixstatic.com/media/49687e_7ef2dc57c1014186942228a9e425d970~mv2.png/v1/fill/w_153,h_59,al_c,q_85,usm_0.66_1.00_0.01,enc_auto/kay-logo.png",
      name: "kay",
    },
    {
      imgUrl:
        "https://static.wixstatic.com/media/49687e_ccdaff2cea7f47b3860a005b3c5b4bd4~mv2.png/v1/fill/w_200,h_200,al_c,q_85,usm_0.66_1.00_0.01,enc_auto/tvmorena%20(1).png",
      name: "morena",
    },
    {
      imgUrl:
        "https://static.wixstatic.com/media/49687e_dbf03803d30f453b9cbf2729dfc91666~mv2.png/v1/fill/w_157,h_92,al_c,q_85,usm_0.66_1.00_0.01,enc_auto/senac_logo_branco%20(1).png",
      name: "senax",
    },
    {
      imgUrl:
        "https://static.wixstatic.com/media/49687e_a0f0c6006937468aaac70c790b374587~mv2.png/v1/fill/w_210,h_144,al_c,q_85,usm_0.66_1.00_0.01,enc_auto/logo%20(1).png",
      name: "kitkat",
    },
    {
      imgUrl:
        "https://static.wixstatic.com/media/49687e_1be4f183ab5d408bbf7c80f0bfc878c5~mv2.png/v1/fill/w_233,h_47,al_c,q_85,usm_0.66_1.00_0.01,enc_auto/samsung-branco.png",
      name: "samsung",
    },
  ];

  let advancedLogo = [
    {
      imgUrl:
        "https://static.wixstatic.com/media/49687e_d60d35cd102f4965b601acde8c9b6122~mv2.png/v1/fill/w_248,h_248,al_c,q_85,usm_0.66_1.00_0.01,enc_auto/meta%20spark%20creator%20cert.png",
      name: "Ca",
    },
    {
      imgUrl:
        "https://static.wixstatic.com/media/49687e_8e028c51f88d429bb5cc1481d7d15925~mv2.png/v1/fill/w_193,h_248,al_c,q_85,usm_0.66_1.00_0.01,enc_auto/IMG_5222_PNG.png",
      name: "meta",
    },
    {
      imgUrl:
        "https://static.wixstatic.com/media/49687e_f8956150fc834bc1b438493a27bbebbd~mv2.jpeg/v1/fill/w_248,h_248,al_c,q_80,usm_0.66_1.00_0.01,enc_auto/WhatsApp%20Image%202023-05-21%20at%2011_27_46.jpeg",
      name: "tomica",
    },
  ];

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
      <section className="upper py-4">
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
                  UI / UX Designer and Graphics Designer
                  {/* <Typed
                    strings={["UI / UX Designer and Graphics Designer"]}
                    typeSpeed={40}
                    backSpeed={50}
                    loop
                  /> */}
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
                className="row responsiveDevice py-5 "
                id="responseAtId"
                style={{ height: "300px" }}
              ></div>
              <div className="row flex-wrap-reverse">
                <div className="hexagon-container">
                  <div className="clip_path">
                    <img src={Profile} alt="owner" id="owner" />
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
      <Brands1 title={brandTitle2} logo={advancedLogo} />
    </>
  );
};

export default Home;
