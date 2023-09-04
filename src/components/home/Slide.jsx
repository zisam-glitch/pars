import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import { Pagination } from "swiper";
const Bnr = () => {
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
          <div className="bg-gray-500 p-10">

          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="bg-gray-900 p-10" >

          </div>
        </SwiperSlide>
      </Swiper>
    </>
  );
};

export default Bnr;
