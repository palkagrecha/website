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
                src="https://res.cloudinary.com/dxhvvxfqf/video/upload/f_auto:video,q_auto/v1/Website%20Videos/Personal/HennaARtPreview_vjqazs"
                type="video/mp4"
              />
            </video>
          </SwiperSlide>

          <SwiperSlide>
            <video autoPlay muted loop className="homeVideo">
              <source
                src="https://res.cloudinary.com/dxhvvxfqf/video/upload/v1702271005/Website%20Videos/Client/DiwaliRangoli_a0nz7k.mp4"
                type="video/mp4"
              />
            </video>
          </SwiperSlide>
          <SwiperSlide>
            <video autoPlay muted loop className="homeVideo">
              <source
                src="https://res.cloudinary.com/dxhvvxfqf/video/upload/v1702270995/Website%20Videos/Client/Review_A_Movie_Demo_Video_14s_fpcdbi.mp4"
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
