import React, { useRef, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/swiper.min.css";
import "swiper/css/navigation";
import "swiper/css/pagination";

import { Navigation, Pagination, Mousewheel, Keyboard } from "swiper";
import { Button } from "@material-tailwind/react";
import { Link } from "gatsby";
import Energency from "./EmergencyHomeBanner"
import {
  BsFillCalendar2CheckFill,
  BsFillCalendarDateFill,
  BsExclamationCircleFill,
} from "react-icons/bs";
import MyModal from "./MyDialog";

export default function App() {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <>
      <Swiper
        cssMode={true}
        navigation={true}
        pagination={true}
        mousewheel={true}
        keyboard={true}
        modules={[Navigation, Pagination, Mousewheel, Keyboard]}
        className="mySwiper"
      >
        <SwiperSlide>
          <div className="hero-slide">
            <div className="content">
              <div className="right">
                <h3 className="tracking-[0.2em] uppercase bg-secondary text-white text-xs lg:text-sm px-3 py-2 inline-block rounded">
                  DENTAL PRACTICE
                </h3>
                <h2 className="text-3xl sm:text-4xl md:text-6xl text-primary font-semibold capitalize my-2">
                  <span className="inline-block bg-white my-1 px-3 py-2 rounded">
                    Exceptional Dentistry &
                  </span>
                  <br />
                  <span className="inline-block bg-white my-1 px-3 py-2 rounded">
                    Welcoming Service
                  </span>
                </h2>
                <div onClick={() => setIsOpen(!isOpen)}>
                  <Button
                    className="tracking-[0.2em] uppercase font-normal bg-primary mt-2 flex items-center text-xs"
                    variant="filled"
                    size="lg"
                  >
                    <BsFillCalendarDateFill className="mr-3 text-lg" />
                    Appointment
                  </Button>
                </div>
              </div>
            </div>
          </div>
          <MyModal isOpen={isOpen} setIsOpen={setIsOpen} />
        </SwiperSlide>
        <SwiperSlide>
          {" "}
          <div className="hero-slide1">
            <div className="content">
              <div className="right">
                <h3 className="tracking-[0.2em] uppercase bg-secondary text-white text-xs lg:text-sm px-3 py-2 inline-block rounded">
                  ACCESSIBLE SMILES
                </h3>
                <h2 className="text-3xl sm:text-4xl md:text-6xl text-primary font-semibold capitalize my-2">
                  <span className="inline-block bg-white my-1 px-3 py-2 rounded">
                    Making Private Dentistry
                  </span>
                  <br />
                  <span className="inline-block bg-white my-1 px-3 py-2 rounded">
                    More Affordable
                  </span>
                </h2>
                <a
                  href="https://uk.dentalhub.online/soe/new/Parish%20Dental?pid=UKDRP02"
                  target="_blank"
                >
                  <Button
                    className="tracking-[0.2em] uppercase font-normal bg-primary mt-2 flex items-center text-xs"
                    variant="filled"
                    size="lg"
                  >
                    <BsFillCalendar2CheckFill className="mr-3 text-lg" />
                    Book - £35
                  </Button>
                </a>
              </div>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          {" "}
          <div className="hero-slide2">
            <div className="content">
              <div className="right">
                <h3 className="tracking-[0.2em] uppercase bg-secondary text-white text-xs lg:text-sm px-3 py-2 inline-block rounded">
                FACIAL AESTHETICS
                </h3>
                <h2 className="text-3xl sm:text-4xl md:text-6xl text-primary font-semibold capitalize my-2">
                  <span className="inline-block bg-white my-1 px-3 py-2 rounded">
                    Rediscover Your
                    
                  </span>
                  <br />
                  <span className="inline-block bg-white my-1 px-3 py-2 rounded">
                  Youthful Radiance
                  </span>
                </h2>
                <Link to="/services/aesthetics">
                  <Button
                    className="tracking-[0.2em] uppercase font-normal bg-primary mt-2 flex items-center text-xs"
                    variant="filled"
                    size="lg"
                  >
                    <BsFillCalendarDateFill className="mr-3 text-lg" />
                    Learn More
                  </Button>
                </Link>
              </div>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide><Energency/></SwiperSlide>
      </Swiper>
    </>
  );
}
