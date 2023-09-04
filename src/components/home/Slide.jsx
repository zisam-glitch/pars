import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import { Pagination } from "swiper";
const Bnraa = () => {
  return (
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
            <p>aa</p>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="bg-gray-900 p-10">
            <p>vv</p>
          </div>
        </SwiperSlide>
      </Swiper>
  );
};

export default Bnraa;
