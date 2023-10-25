import React from "react";
const PlayVideo = () => {
  const arr = [1, 2, 3];
  return (
    <>
      <div className="playVideo pt-5">
        <div className="container py-5">
          <div className="row d-flex justify-content-between">
            {arr.map((x, i) => (
              <div className="col-md-3 playVideo_auto" key={i}>
                <video
                  height={400}
                  width={200}
                  loop
                  autoPlay
                  muted
                  src="https://cdn.coverr.co/videos/coverr-palm-tree-landscape-3016/1080p.mp4"
                  type="video/mp4"
                >
                  {/* <source src={vr} type="video/mp4"></source> */}
                </video>
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default PlayVideo;
