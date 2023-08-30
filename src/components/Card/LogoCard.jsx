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
      <div className="container mx-auto py-10">
        <div className="mx-40">
          <Swiper
            slidesPerView={6}
            spaceBetween={10}
            pagination={{
              clickable: true,
            }}
            breakpoints={{
              "@0.00": {
                slidesPerView: 1,
                spaceBetween: 10,
              },
              "@0.75": {
                slidesPerView: 2,
                spaceBetween: 20,
              },
              "@1.00": {
                slidesPerView: 3,
                spaceBetween: 40,
              },
              "@1.50": {
                slidesPerView: 6,
                spaceBetween: 50,
              },
            }}
            modules={[Pagination]}
            className="mySwiper"
          >
          
            <SwiperSlide>
              <div>
                <img
                  alt="logo1"
                  className=" w-64 h-8 bg-contain bg-center cursor-pointer "
                  src="https://res.cloudinary.com/dt0j68vdr/image/upload/v1693289959/partner01_ittn1r.png"
                />
              </div>
            </SwiperSlide>
            <SwiperSlide>
              {" "}
              <div>
                <img
                  alt="logo1"
                  className=" w-64 h-8 bg-contain bg-center cursor-pointer "
                  src="https://res.cloudinary.com/dt0j68vdr/image/upload/v1693289955/partner02_fcmqfa.png"
                />
              </div>
            </SwiperSlide>
            <SwiperSlide>
              {" "}
              <div>
                <img
                  alt="logo1"
                  className=" w-64 h-8 bg-contain bg-center cursor-pointer"
                  src="https://res.cloudinary.com/dt0j68vdr/image/upload/v1693289952/partner03_em7i8l.png"
                />
              </div>
            </SwiperSlide>
            <SwiperSlide>
            <div>
                <img
                  alt="logo1"
                  className=" w-64 h-8 bg-contain bg-center cursor-pointer"
                  src="https://res.cloudinary.com/dt0j68vdr/image/upload/v1693289949/partner04_whkgyo.png"
                />
              </div>
            </SwiperSlide>
            <SwiperSlide>
            <div>
                <img
                  alt="logo1"
                  className=" w-64 h-8 bg-contain bg-center cursor-pointer"
                  src="https://res.cloudinary.com/dt0j68vdr/image/upload/v1693289943/partner05_ncikxm.png"
                />
              </div>
            </SwiperSlide>
            <SwiperSlide>
            <div>
                <img
                  alt="logo1"
                  className=" w-64 h-8 bg-contain bg-center cursor-pointer"
                  src="https://res.cloudinary.com/dt0j68vdr/image/upload/v1693289936/partner06_zucm1h.png"
                />
              </div>
            </SwiperSlide>
          </Swiper>
        </div>
      </div>

      <div>
        <LogoCard2 />
      </div>
    </>
  );
}

export default LogoCard;
