import React from "react";
// import ReactPlayer from "react-player/lazy";
import Model from "../component/Model";
import Dropdown from "react-bootstrap/Dropdown";
import DropdownButton from "react-bootstrap/DropdownButton";
import { useState } from "react";
import { Helmet } from "react-helmet";
import Swal from "sweetalert2";
import { arrData } from "../project.js";
const Project = () => {
  const [open, setOpen] = useState(false);
  const [modelData, setModelData] = useState({});

  const [arr, setArr] = useState(arrData);

  const handleOpen = (x) => {
    setModelData(x);
    setOpen(true);
  };

  const filterData = (data) => {
    console.log(data.type, data);
    if (data.type === "All") {
      console.log("instaAllClickIf", arr);

      const afterFilter = arrData.filter((x, i) => x.underType === data.name);
      console.log(data.type, afterFilter);
      setArr(afterFilter);
    } else {
      console.log("instaAllClickIfelse", arr);

      const afterFilter = arrData.filter(
        (x, i) => x.underType === data.name && x.type === data.type
      );
      console.log(data.type, afterFilter);
      setArr(afterFilter);
    }
  };
  if (arr.length < 1 || arr === "undefined") {
    Swal.fire("Comming Soon");
    setArr(arrData);
  }
  return (
    <>
      <div>
        <Helmet>
          <meta charSet="utf-8" />
          <meta
            name="description"
            content="Deliver awe-inspiring Augmented Reality effects to your audience. Elevate engagement and captivate users with our cutting-edge AR solutions. Transform reality seamlessly"
          />
          <meta
            name="title"
            content=" Pal Kagrecha Projects - Immerse Yourself in VR Excellence "
          ></meta>
          <meta
            name="keywords"
            content="Augmented Reality, AR experiences, Innovation, Digital Transformation, Pal Kagrecha, Expertise, Story, Values, Team, Technology"
          />
          <meta property="og:url" content="https://palkagrecha.com/project" />
          <meta
            property="og:image"
            itemprop="image"
            content="https://palkagrecha.com/static/media/PalKagrechaProfessionsalPicAbout.ef9ce083b56620892d96.jpg"
          />
          <meta name="author" content="Pal Kagrecha" />
          <title> Projects - Pal Kagrecha</title>
          <link
            rel="canonical"
            href="https://pal-portfolio.vercel.app/project"
          />
        </Helmet>
      </div>
      <Model open={open} setOpen={setOpen} modelData={modelData} />
      <section className="project py-5">
        <div className="container-fluid" id="headerProject">
          <div className="row ">
            <div className="row">
              <h1 className="text-light">
                <b>Augmented Reality Effect</b>
              </h1>
            </div>
            <div className="flex-row dropdown ">
              <DropdownButton
                id="dropdown-button-dark-example2"
                variant="secondary"
                title="All"
                className="mt-2"
                data-bs-theme="dark"
              >
                <Dropdown.Item
                  active
                  onClick={() => filterData({ name: "insta", type: "All" })}
                >
                  INSTA
                </Dropdown.Item>

                <Dropdown.Item
                  onClick={() => filterData({ name: "snap", type: "All" })}
                >
                  SNAP
                </Dropdown.Item>
              </DropdownButton>

              <DropdownButton
                id="dropdown-button-dark-example2"
                variant="secondary"
                title="Personal"
                className="mt-2"
                data-bs-theme="dark"
              >
                <Dropdown.Item
                  active
                  onClick={() =>
                    filterData({ name: "insta", type: "personal" })
                  }
                >
                  INSTA
                </Dropdown.Item>

                <Dropdown.Item
                  onClick={() => filterData({ name: "snap", type: "personal" })}
                >
                  SNAP
                </Dropdown.Item>
              </DropdownButton>
              <DropdownButton
                id="dropdown-button-dark-example2"
                variant="secondary"
                title="Client"
                className="mt-2"
                data-bs-theme="dark"
              >
                <Dropdown.Item
                  active
                  onClick={() => filterData({ name: "insta", type: "client" })}
                >
                  INSTA
                </Dropdown.Item>

                <Dropdown.Item
                  onClick={() => filterData({ name: "snap", type: "client" })}
                >
                  SNAP
                </Dropdown.Item>
              </DropdownButton>
              <DropdownButton
                id="dropdown-button-dark-example2"
                variant="secondary"
                title="Collab"
                className="mt-2"
                data-bs-theme="dark"
              >
                <Dropdown.Item
                  active
                  onClick={() => filterData({ name: "insta", type: "collab" })}
                >
                  INSTA
                </Dropdown.Item>

                <Dropdown.Item
                  onClick={() => filterData({ name: "snap", type: "collab" })}
                >
                  SNAP
                </Dropdown.Item>
              </DropdownButton>
            </div>
            <div className="project_list  mt-5  mx-0 p-0 ">
              {arr.map((x, i) => (
                <div
                  className="col-md-3  my-2  m-0 p-0 "
                  key={i}
                  onClick={() => handleOpen(x)}
                >
                  <div className="row playVideo_auto1 mx-0   p-2 ">
                    <video
                      autoPlay
                      playsinline={true}
                      muted
                      loop
                      width="300"
                      poster="https://www.shutterstock.com/image-vector/man-wearing-virtual-reality-glasses-600nw-790270129.jpg"
                      preload="auto"
                      className="projectVideo m-auto"
                      aria-label={
                        x.point.length < 1
                          ? "Augmented Reality Effect by Pal Kagrecha"
                          : x?.point[0]
                      }
                    >
                      <source src={x.videoLink} type="video/mp4" />
                    </video>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Project;
