import React from "react";
// core version + navigation, pagination modules:
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";

// import required modules
import { Pagination } from "swiper/modules";
// import Swiper and modules styles
// import 'swiper/css';
import "swiper/css/navigation";
import "swiper/css/pagination";
import LogoCard2 from "./LogoCard2";
function LogoCard() {
  return (
    <>
      <div className="container mx-auto my-20">
        <div className="mx-5 lg:mx-40">
          <Swiper
            slidesPerView={1}
            spaceBetween={10}
            // pagination={{
            //   clickable: false,
            // }}
            breakpoints={{
              640: {
                slidesPerView: 2,
                spaceBetween: 20,
              },
              768: {
                slidesPerView: 4,
                spaceBetween: 40,
              },
              1024: {
                slidesPerView: 6,
                spaceBetween: 50,
              },
            }}
            modules={[Pagination]}
            className="mySwiper"
          >
            <SwiperSlide>
              <div className="">
                <img
                  alt="logo1"
                  className="bg-center cursor-pointer mx-auto bg-cover w-52"
                  src="https://res.cloudinary.com/dt0j68vdr/image/upload/v1693289959/partner01_ittn1r.png"
                />
              </div>
            </SwiperSlide>
            <SwiperSlide>
              {" "}
              <div>
                <img
                  alt="logo1"
                  className="bg-center  cursor-pointer mx-auto bg-cover w-52"
                  src="https://res.cloudinary.com/dt0j68vdr/image/upload/v1693289955/partner02_fcmqfa.png"
                />
              </div>
            </SwiperSlide>
            <SwiperSlide>
              {" "}
              <div>
                <img
                  alt="logo1"
                  className="-mt-3 cursor-pointer mx-auto bg-cover w-44 h-12"
                  src="https://res.cloudinary.com/dt0j68vdr/image/upload/v1693289952/partner03_em7i8l.png"
                />
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div>
                <img
                  alt="logo1"
                  className=" cursor-pointer mx-auto bg-cover w-52"
                  src="https://res.cloudinary.com/dt0j68vdr/image/upload/v1693289949/partner04_whkgyo.png"
                />
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div>
                <img
                  alt="logo1"
                  className=" cursor-pointer mx-auto bg-cover w-52"
                  src="https://res.cloudinary.com/dt0j68vdr/image/upload/v1693289943/partner05_ncikxm.png"
                />
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div>
                <img
                  alt="logo1"
                  className=" cursor-pointer mx-auto bg-cover w-48"
                  src="https://res.cloudinary.com/dt0j68vdr/image/upload/v1693289936/partner06_zucm1h.png"
                />
              </div>
            </SwiperSlide>
          </Swiper>
        </div>
      </div>

      <div><LogoCard2 /></div>
    </>
  );
}

export default LogoCard;
