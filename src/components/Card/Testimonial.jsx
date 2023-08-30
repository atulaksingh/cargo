import React from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

import "../../index.css";

// import required modules
import { Autoplay, Navigation, Pagination, History } from "swiper/modules";

function Testimonial() {
  return (
    <>
      <div className="py-28 text-center max-w-5xl mx-auto">
        {/* <div className="text-[14px] text-[#ff5e14] font-bold">
          What Peoples Say!
        </div>
        <div className="text-[33px] font-bold">Testimonials</div>
        <div className="border border-red-500 rounded-full inline-block p-1 my-7">
          <img
            alt="testimg"
            className="mx-auto rounded-full "
            src="https://res.cloudinary.com/dt0j68vdr/image/upload/v1693298229/testi_2_bedv6k.jpg"
          />
        </div>
        <p className="text-[21px] leading-[34px] font-semibold text-[#9b9b9b]">
          They are the best of the best, and expertly trained team members who
          take the extra step and go the extra mile, all to fulfill our
          dedicated promise to deliver innovative and dynamic solutions to our
          customers to fit the needs of a rapidly changing global environment.
        </p>
        <div className="my-7">
          <img
            alt="sign2"
            className="mx-auto "
            src="https://res.cloudinary.com/dt0j68vdr/image/upload/v1693298855/sign_2_yqra8i.png"
          />
          <div className="text-[12px] text-[#9b9b9b] font-[400]">
            The Move Inc
          </div>
        </div> */}

        <div>
          <Swiper
            spaceBetween={50}
            slidesPerView={1}
            navigation={true}
            pagination={true}
            autoplay={{
              delay: 2500,
              disableOnInteraction: false,
            }}
            history={{
              key: "slide",
            }}
            modules={[Autoplay, Navigation, Pagination, History]}
            className="mySwiper"
            breakpoints={{
          640: {
            slidesPerView: 1,
            spaceBetween: 20,
          },
          768: {
            slidesPerView: 1,
            spaceBetween: 40,
          },
          1024: {
            slidesPerView: 1,
            spaceBetween: 50,
          },
        }}
          >
            <SwiperSlide data-history="1" className="px-32">
              <div>
                <div className="text-[14px] text-[#ff5e14] font-bold">
                  What Peoples Say!
                </div>
                <div className="text-[33px] font-bold">Testimonials</div>
                <div className="border border-red-500 rounded-full inline-block p-1 my-7">
                  <img
                    alt="testimg"
                    className="mx-auto rounded-full "
                    src="https://res.cloudinary.com/dt0j68vdr/image/upload/v1693298229/testi_2_bedv6k.jpg"
                  />
                </div>
                <p
                  id="ttt"
                  className=" text-[21px] leading-[34px] font-semibold text-[#9b9b9b]"
                >
                  They are the best of the best, and expertly trained team
                  members who take the extra step and go the extra mile, all to
                  fulfill our dedicated promise to deliver innovative and
                  dynamic solutions to our customers to fit the needs of a
                  rapidly changing global environment.
                </p>
                <div className="my-7">
                  <img
                    alt="sign2"
                    className="mx-auto "
                    src="https://res.cloudinary.com/dt0j68vdr/image/upload/v1693298855/sign_2_yqra8i.png"
                  />
                  <div className="text-[12px] text-[#9b9b9b] font-[400]">
                    The Move Inc
                  </div>
                </div>
              </div>
            </SwiperSlide>
            <SwiperSlide data-history="1" className="px-32">
              <div className="text-[14px] text-[#ff5e14] font-bold">
                What Peoples Say!
              </div>
              <div className="text-[33px] font-bold">Testimonials</div>
              <div className="border border-red-500 rounded-full inline-block p-1 my-7">
                <img
                  alt="testimg"
                  className="mx-auto rounded-full "
                  src="https://res.cloudinary.com/dt0j68vdr/image/upload/v1693298229/testi_2_bedv6k.jpg"
                />
              </div>
              <p className="text-[21px] leading-[34px] font-semibold text-[#9b9b9b]">
                They are the best of the best, and expertly trained team members
                who take the extra step and go the extra mile, all to fulfill
                our dedicated promise to deliver innovative and dynamic
                solutions to our customers to fit the needs of a rapidly
                changing global environment.
              </p>
              <div className="my-7">
                <img
                  alt="sign2"
                  className="mx-auto "
                  src="https://res.cloudinary.com/dt0j68vdr/image/upload/v1693298855/sign_2_yqra8i.png"
                />
                <div className="text-[12px] text-[#9b9b9b] font-[400]">
                  The Move Inc
                </div>
              </div>
            </SwiperSlide>
            <SwiperSlide data-history="1" className="px-32">
              <div className="text-[14px] text-[#ff5e14] font-bold">
                What Peoples Say!
              </div>
              <div className="text-[33px] font-bold">Testimonials</div>
              <div className="border border-red-500 rounded-full inline-block p-1 my-7">
                <img
                  alt="testimg"
                  className="mx-auto rounded-full "
                  src="https://res.cloudinary.com/dt0j68vdr/image/upload/v1693298229/testi_2_bedv6k.jpg"
                />
              </div>
              <p className="text-[21px] leading-[34px] font-semibold text-[#9b9b9b]">
                They are the best of the best, and expertly trained team members
                who take the extra step and go the extra mile, all to fulfill
                our dedicated promise to deliver innovative and dynamic
                solutions to our customers to fit the needs of a rapidly
                changing global environment.
              </p>
              <div className="my-7">
                <img
                  alt="sign2"
                  className="mx-auto "
                  src="https://res.cloudinary.com/dt0j68vdr/image/upload/v1693298855/sign_2_yqra8i.png"
                />
                <div className="text-[12px] text-[#9b9b9b] font-[400]">
                  The Move Inc
                </div>
              </div>
            </SwiperSlide>
          </Swiper>
        </div>
      </div>
    </>
  );
}

export default Testimonial;
