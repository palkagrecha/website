import React from "react";
import ReactPlayer from "react-player/lazy";

const PlayVideo = () => {
  const arr = [1, 2, 3];
  return (
    <>
      <div className="playVideo pt-5">
        <div className="container py-5">
          <div className="row d-flex justify-content-between flex-wrap-reverse">
            {arr.map((x, i) => (
              <div className="col-md-3 playVideo_auto" key={i}>
                <ReactPlayer
                  url="ttps://www.youtube.com/watch?v=LXb3EKWsInQ"
                  height={350}
                  width={250}
                  style={{
                    border: "10px solid white",
                    borderRadius: "30px",
                    padding: 0,
                    margin: "1vh",
                  }}
                  playing={true}
                />
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default PlayVideo;
