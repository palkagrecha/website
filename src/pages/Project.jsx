import React from "react";
// import ReactPlayer from "react-player/lazy";
import Model from "../component/Model";
import Dropdown from "react-bootstrap/Dropdown";
import DropdownButton from "react-bootstrap/DropdownButton";
import { useState } from "react";
import { Helmet } from "react-helmet";
const Project = () => {
  const [open, setOpen] = useState(false);
  const [modelData, setModelData] = useState({});
  const arrData = [
    {
      name: "Vishal Kumar",
      type: "personal",
      underType: "insta",
      videoLink:
        "https://res.cloudinary.com/dxhvvxfqf/video/upload/v1702271191/Website%20Videos/Personal/Mobility_of_Tomorrow_bohnao.mp4",
    },
    {
      name: "Rahul Kumar",
      type: "personal",
      underType: "snap",
      videoLink:
        "https://res.cloudinary.com/dxhvvxfqf/video/upload/v1702271190/Website%20Videos/Personal/VCRvibes_bj2nb2.mp4",
    },

    {
      name: "Rahul Kumar",
      type: "personal",
      underType: "snap",
      videoLink:
        "https://res.cloudinary.com/dxhvvxfqf/video/upload/v1702271189/Website%20Videos/Personal/Rollover_Donut_rgov9a.mp4",
    },
    {
      name: "Rahul Kumar",
      type: "personal",
      underType: "snap",
      videoLink:
        "https://res.cloudinary.com/dxhvvxfqf/video/upload/v1702271188/Website%20Videos/Personal/World_Water_Day_bqxul0.mp4",
    },

    {
      name: "Rahul Kumar",
      type: "personal",
      underType: "snap",
      videoLink:
        "https://res.cloudinary.com/dxhvvxfqf/video/upload/v1702271181/Website%20Videos/Personal/Trippin_klgtxv.mp4",
    },
    {
      name: "ScreenSave",
      through: "by @palkagrecha",
      point: [
        "“Coinbase kicked off the Super Bowl with a simple ad featuring a QR code styled like the bouncing icon of a DVD screensaver.",
        "Well what if we could create our own screensave-errrr, using an AR Effect?",
        "When the user taps on the screen the bouncing mechanism starts. When it touches the user’s device border it changes its color.",
        "Just like how it used to be in the earlier DVD player’s screensaver.",
        "Users can add the media from their gallery as well. The dimensions of the plane will get adjusted according to the user’s smartphone dimensions or the media added by the users from the gallery.",
      ],
      type: "personal",
      underType: "snap",
      videoLink:
        "https://res.cloudinary.com/dxhvvxfqf/video/upload/v1702271177/Website%20Videos/Personal/ScreenSaver_xidbzk.mp4",
    },
    {
      name: "Rahul Kumar",
      type: "personal",
      underType: "snap",
      videoLink:
        "https://res.cloudinary.com/dxhvvxfqf/video/upload/v1702271174/Website%20Videos/Personal/Sci-fi_Cloak_psxksi.mp4",
    },
    {
      name: "Rahul Kumar",
      type: "personal",
      underType: "snap",
      videoLink:
        "https://res.cloudinary.com/dxhvvxfqf/video/upload/v1702271173/Website%20Videos/Personal/Happy_Navratri_lgxgvj.mp4",
    },
    {
      name: "shivam Kumar",
      type: "client",
      underType: "insta",
      videoLink:
        "https://res.cloudinary.com/dxhvvxfqf/video/upload/v1702271069/Website%20Videos/Client/AR_Game_Preview_ikr9el.mp4",
    },
    {
      name: "Roman Kumar",
      type: "client",
      underType: "insta",
      videoLink:
        "https://res.cloudinary.com/dxhvvxfqf/video/upload/v1702271017/Website%20Videos/Client/Gangaikonda_Temple_Lens_tg0rdj.mp4",
    },
    {
      name: "Rajeev Kumar",
      type: "client",
      underType: "insta",
      videoLink:
        "https://res.cloudinary.com/dxhvvxfqf/video/upload/v1702271008/Website%20Videos/Client/Gangaikonda_Temple_Lens_V2_un5di8.mp4",
    },
    {
      name: "Mohan Lal Kumar",
      type: "client",
      underType: "snap",
      videoLink:
        "https://res.cloudinary.com/dxhvvxfqf/video/upload/v1702271007/Website%20Videos/Client/WonderChef_hethln.mp4",
    },
    {
      name: "Mohan Lal Kumar",
      type: "client",
      underType: "insta",
      videoLink:
        "https://res.cloudinary.com/dxhvvxfqf/video/upload/v1702271005/Website%20Videos/Client/DiwaliRangoli_a0nz7k.mp4",
    },
    {
      name: "Uncharted Game",
      through: "by @palkagrecha",
      point: [
        "An immersive gaming experience created for the client SONY Pictures India, the top Hollywood Studio in India, for the recent movie “Uncharted”.",
        "This AR Gaming Effect was created in collaboration with Experiential Etc.",
        "The gaming experience starts by blowing a kiss.",
        "User need to tilt their head from side to side to collect the treasure coins and avoid from the stones (obstacles) at the same time.",
        "The user has 3 lifelines to collect the treasure and score highest.",
      ],
      type: "client",
      underType: "snap",
      videoLink:
        "https://res.cloudinary.com/dxhvvxfqf/video/upload/v1702270995/Website%20Videos/Client/UnchartedGame_qn0sam.mp4",
    },
    {
      name: "Review a Movie",
      through: "by @palkagrecha",
      point: [
        "This AR Effect was created in collaboration with [Meta India](https://www.instagram.com/metaindia/).",
        "Love watching cinema and talking about it?",
        "#ReviewAMovie on reels.",
        "Users can share their movie experience using this AR Effect which is created for an e-sports creators aka Triggered Insaan",
      ],
      type: "client",
      underType: "snap",
      videoLink:
        "https://res.cloudinary.com/dxhvvxfqf/video/upload/v1702270995/Website%20Videos/Client/Review_A_Movie_Demo_Video_14s_fpcdbi.mp4",
    },
    {
      name: "Ritu Kumar",
      type: "client",
      underType: "snap",
      videoLink:
        "https://res.cloudinary.com/dxhvvxfqf/video/upload/v1702270984/Website%20Videos/Client/MyWinterLookLens_qequqj.mp4",
    },
    {
      name: "Manish Kumar",
      type: "client",
      underType: "snap",
      videoLink:
        "https://res.cloudinary.com/dxhvvxfqf/video/upload/v1702270984/Website%20Videos/Client/MI_Jersey_Try-On_qvz4em.mp4",
    },
    {
      name: "Manish Kumar",
      type: "client",
      underType: "snap",
      videoLink:
        "https://res.cloudinary.com/dxhvvxfqf/video/upload/v1702270980/Website%20Videos/Client/Gulki_Fans_fz4qqk.mp4",
    },
    {
      name: "Manish Kumar",
      type: "client",
      underType: "snap",
      videoLink:
        "https://res.cloudinary.com/dxhvvxfqf/video/upload/v1702270977/Website%20Videos/Client/Be_a_Paraglider_fpqbqn.mp4",
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
                    <video autoPlay muted loop>
                      <source src={x.videoLink} type="video/mp4" />
                    </video>
                  </div>
                  {/* <div className="row nameProject text-center mt-3">
                    <h6>{x.name}</h6>

                    <span>
                      {x.type} / {x.underType}
                    </span>
                  </div> */}
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
