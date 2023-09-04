import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import { Pagination } from "swiper";
import Typewriter from "typewriter-effect";

function HeroSlide() {
  return (
    <>
    <Swiper
      slidesPerView={1}
      spaceBetween={0}
      pagination={{
        clickable: true,
      }}
      modules={[Pagination]}
      className="mySwiper"
    >
      <SwiperSlide>
        <div className="bg-gray-500">
            <p>ff</p>
        </div>
      </SwiperSlide>
      <SwiperSlide>
      <div className="bg-gray-900">
            <p>ff</p>
        </div>
      </SwiperSlide>
    </Swiper>
  </>
  );
}
export default HeroSlide;
