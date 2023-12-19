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
            content="Explore the showcase of Pal Kagrecha projects featuring cutting-edge VR effects. Dive into a world where innovation meets virtual reality, experiencing the extraordinary outcomes of our expertise in crafting immersive and impactful applications."
          />
          <meta
            name="keywords"
            content="Augmented Reality, AR experiences, Innovation, Digital Transformation, Pal Kagrecha, Expertise, Story, Values, Team, Technology"
          />
          <meta name="author" content="Pal Kagrecha" />
          <title> Projects - Immerse Yourself in VR Excellence</title>
        </Helmet>
      </div>
      <Model open={open} setOpen={setOpen} modelData={modelData} />
      <section className="project py-5">
        <div className="container-fluid" id="headerProject">
          <div className="row ">
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
            <div className="project_list  mt-5   ">
              {arr.map((x, i) => (
                <div
                  className="col-md-3  my-2 "
                  key={i}
                  onClick={() => handleOpen(x)}
                >
                  <div className="row playVideo_auto1 mx-1">
                    <video
                      autoPlay
                      playsinline={true}
                      muted
                      loop
                      className="projectVideo"
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
