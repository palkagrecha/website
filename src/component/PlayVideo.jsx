import React from "react";
// import ReactPlayer from "react-player/lazy";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/effect-cube";
import "swiper/css/pagination";
import { EffectCube, Pagination } from "swiper/modules";

const PlayVideo = () => {
  // const arr = [1, 2, 3];
  return (
    <>
      <div className="homeSlider">
        <Swiper
          effect={"cube"}
          grabCursor={true}
          cubeEffect={{
            shadow: true,
            slideShadows: true,
            shadowOffset: 20,
            shadowScale: 0.94,
          }}
          pagination={true}
          modules={[EffectCube, Pagination]}
          className="mySwiper"
        >
          <SwiperSlide>
            <video autoPlay muted loop className="homeVideo">
              <source
                src="https://res.cloudinary.com/dxhvvxfqf/video/upload/v1702271189/Website%20Videos/Personal/Rollover_Donut_rgov9a.mp4"
                type="video/mp4"
              />
            </video>
          </SwiperSlide>

          <SwiperSlide>
            <video autoPlay muted loop className="homeVideo">
              <source
                src="https://res.cloudinary.com/dxhvvxfqf/video/upload/v1702271191/Website%20Videos/Personal/Mobility_of_Tomorrow_bohnao.mp4"
                type="video/mp4"
              />
            </video>
          </SwiperSlide>
          <SwiperSlide>
            <video autoPlay muted loop className="homeVideo">
              <source
                src="https://res.cloudinary.com/dxhvvxfqf/video/upload/v1702271190/Website%20Videos/Personal/VCRvibes_bj2nb2.mp4"
                type="video/mp4"
              />
            </video>
          </SwiperSlide>
        </Swiper>
      </div>
    </>
  );
};

export default PlayVideo;
