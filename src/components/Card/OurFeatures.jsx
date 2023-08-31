import React from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
// import './styles.css';

// import required modules
import { Pagination, Navigation } from "swiper/modules";
import OurFeaturesCard from "./OurFeaturesCard";
import { BsArrowLeft, BsArrowRight } from "react-icons/bs";

function OurFeatures() {
  // const navigationOptions = {
  //     nextEl: '.swiper-button-next',
  //     prevEl: '.swiper-button-prev',
  //   };
  return (
    <>
      <div>
        <div className="bg-black text-white text-center">
          <div className="container mx-auto">
            <div className="px-3 xl:px-20 2xl:px-40 py-40">
              <div className="py-5">
                <div className="text-[#cf2e2e] text-[14px] mb-5">
                  Our Features
                </div>
                <div className="text-[30px] leading-[1.625rem] font-semibold mb-5">
                  Why Choose Us!
                </div>
                <div className="text-[16px] text-[#9b9b9b] leading-[1.625rem] lg:w-[45%] mx-auto">
                  We continue to pursue that same vision in today's complex,
                  uncertain world, working every day to earn our customers’
                  trust!dfgdfg
                </div>
              </div>

              {/* //swiperSlide use// */}

              <div className="flex align-middle items-center gap-7">
                <div className="nextE1 cursor-pointer hidden lg:block" id="mtprev">
                  <BsArrowLeft size={30} />
                </div>

                <Swiper
                  slidesPerView={1}
                  spaceBetween={10}
                  navigation={{
                    prevEl: "#mtprev",
                    nextEl: "#mtnext",
                  }}
                  breakpoints={{
                    640: {
                      slidesPerView: 2,
                      spaceBetween: 20,
                      
                    },
                    768: {
                      slidesPerView: 3,
                      spaceBetween: 10,
                    },
                    1024: {
                      slidesPerView: 4,
                      spaceBetween: 10,
                    },
                  }}
                  modules={[Pagination, Navigation]}
                  className="mySwiper"
                >
                  <div
                    // style={{ marginLeft: "40px", marginRight: "40px" }}
                    className=""
                  >
                    <SwiperSlide>
                      {" "}
                      <div>
                        <OurFeaturesCard />
                      </div>{" "}
                    </SwiperSlide>
                    <SwiperSlide>
                      {" "}
                      <div>
                        <OurFeaturesCard />
                      </div>{" "}
                    </SwiperSlide>
                    <SwiperSlide>
                      {" "}
                      <div>
                        <OurFeaturesCard />
                      </div>{" "}
                    </SwiperSlide>
                    <SwiperSlide>
                      {" "}
                      <div>
                        <OurFeaturesCard />
                      </div>{" "}
                    </SwiperSlide>
                    <SwiperSlide>
                      {" "}
                      <div>
                        <OurFeaturesCard />
                      </div>{" "}
                    </SwiperSlide>
                    <SwiperSlide>
                      {" "}
                      <div>
                        <OurFeaturesCard />
                      </div>{" "}
                    </SwiperSlide>
                    <SwiperSlide>
                      {" "}
                      <div>
                        <OurFeaturesCard />
                      </div>{" "}
                    </SwiperSlide>
                    <SwiperSlide>
                      {" "}
                      <div>
                        <OurFeaturesCard />
                      </div>{" "}
                    </SwiperSlide>
                    <SwiperSlide>
                      {" "}
                      <div>
                        <OurFeaturesCard />
                      </div>{" "}
                    </SwiperSlide>
                  </div>
                </Swiper>

                <div id="mtnext" className="cursor-pointer hidden lg:block">
                  <BsArrowRight size={30} />
                </div>
              </div>
              {/* <div className="grid grid-cols-4 gap-7 my-24 ">
                <OurFeaturesCard />
                <OurFeaturesCard />
                <OurFeaturesCard />
                <OurFeaturesCard />
              </div> */}

              <div className="text-[14px] font-bold  text-[#9b9b9b] my-5">
                Working every day to earn our customers’ trust
                <a
                  href="https://www.google.com/"
                  className="text-white underline space-x-3 leading-[1.625] hover:text-[#cf2e2e]"
                >
                  Get Started
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default OurFeatures;
