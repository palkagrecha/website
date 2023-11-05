import React from "react";
import ReactPlayer from "react-player/lazy";
import Model from "../component/Model";
import { useState } from "react";
const Project = () => {
  const [open, setOpen] = useState(false);
  const arr = [
    1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19,
  ];
  const handleOpen = () => {
    setOpen(true);
  };
  return (
    <>
      <Model open={open} setOpen={setOpen} />
      <section className="project py-5">
        <div className="container">
          <div className="row">
            <div className="row">
              <div className="filter_btn">
                <button className="btn">All</button>
                <button className="btn">Personal</button>
                <button className="btn">Client</button>
                <button className="btn">Collab</button>
              </div>
            </div>
            <div className="row project_list  mt-5 p-0">
              <div className="project_list  row d-flex justify-content-between">
                {arr.map((x, i) => (
                  <div className="col-md-3  my-2 " key={i} onClick={handleOpen}>
                    <div className="row playVideo_auto1 mx-1">
                      {/* <video
                        id="project_video"
                        height={400}
                        width={200}
                        loop
                        autoPlay
                        muted
                        src="https://cdn.coverr.co/videos/coverr-palm-tree-landscape-3016/1080p.mp4"
                        type="video/mp4"
                      ></video> */}
                      <ReactPlayer
                        url="https://www.youtube.com/watch?v=ysz5S6PUM-U"
                        height={350}
                        width={250}
                        style={{
                          border: "10px solid white",
                          borderRadius: "30px",
                          padding: 0,
                          margin: 0,
                        }}
                        playing={false}
                        onClick={(e) => e.stopPropagation()}
                      />
                    </div>
                    <div className="row nameProject text-center mt-3">
                      <h6>UX/Designer</h6>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Project;
