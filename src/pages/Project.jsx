import React from "react";
// import ReactPlayer from "react-player/lazy";
import Model from "../component/Model";
import Dropdown from "react-bootstrap/Dropdown";
import DropdownButton from "react-bootstrap/DropdownButton";
import { useState } from "react";
const Project = () => {
  const [open, setOpen] = useState(false);
  const [modelData, setModelData] = useState({});
  const arrData = [
    {
      name: "Vishal Kumar",
      type: "personal",
      underType: "insta",
      videoLink:
        "https://media.geeksforgeeks.org/wp-content/uploads/20190616234019/Canvas.move_.mp4",
    },
    {
      name: "Rahul Kumar",
      type: "collab",
      underType: "snap",
      videoLink:
        "https://media.geeksforgeeks.org/wp-content/uploads/20190616234019/Canvas.move_.mp4",
    },
    {
      name: "shivam Kumar",
      type: "client",
      underType: "insta",
      videoLink:
        "https://media.geeksforgeeks.org/wp-content/uploads/20190616234019/Canvas.move_.mp4",
    },
    {
      name: "Roman Kumar",
      type: "client",
      underType: "insta",
      videoLink:
        "https://media.geeksforgeeks.org/wp-content/uploads/20190616234019/Canvas.move_.mp4",
    },
    {
      name: "Rajeev Kumar",
      type: "client",
      underType: "insta",
      videoLink:
        "https://media.geeksforgeeks.org/wp-content/uploads/20190616234019/Canvas.move_.mp4",
    },
    {
      name: "Mohan Lal Kumar",
      type: "collab",
      underType: "snap",
      videoLink:
        "https://media.geeksforgeeks.org/wp-content/uploads/20190616234019/Canvas.move_.mp4",
    },
    {
      name: "Mohan Lal Kumar",
      type: "collab",
      underType: "insta",
      videoLink:
        "https://media.geeksforgeeks.org/wp-content/uploads/20190616234019/Canvas.move_.mp4",
    },
    {
      name: "Sohan Kumar",
      type: "collab",
      underType: "snap",
      videoLink:
        "https://media.geeksforgeeks.org/wp-content/uploads/20190616234019/Canvas.move_.mp4",
    },
    {
      name: "Ram babu Kumar",
      type: "collab",
      underType: "snap",
      videoLink:
        "https://media.geeksforgeeks.org/wp-content/uploads/20190616234019/Canvas.move_.mp4",
    },
    {
      name: "Ritu Kumar",
      type: "collab",
      underType: "snap",
      videoLink:
        "https://media.geeksforgeeks.org/wp-content/uploads/20190616234019/Canvas.move_.mp4",
    },
    {
      name: "Manish Kumar",
      type: "collab",
      underType: "snap",
      videoLink:
        "https://media.geeksforgeeks.org/wp-content/uploads/20190616234019/Canvas.move_.mp4",
    },
  ];

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

  return (
    <>
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
                    <video autoPlay muted height="400px" width="260px">
                      <source src={x.videoLink} type="video/mp4" />
                    </video>
                  </div>
                  <div className="row nameProject text-center mt-3">
                    <h6>{x.name}</h6>

                    <span>
                      {x.type} / {x.underType}
                    </span>
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
