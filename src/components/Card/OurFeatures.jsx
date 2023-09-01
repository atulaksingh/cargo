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

const data = [
  {
    img: "https://res.cloudinary.com/dt0j68vdr/image/upload/v1693561521/Trolley-Icon_lh6gap.png",
    t1: " Warehouse Storage                            ",
    t2: "Depending on your product, we provide warehouse activities.",
  },
  {
    img: "https://res.cloudinary.com/dt0j68vdr/image/upload/v1693561605/Security-Icon_efutrj.png",
    t1: "Security For Cargo                            ",
    t2: "High security requirements and are certified to local standards.",
  },
  {
    img: "https://res.cloudinary.com/dt0j68vdr/image/upload/v1693561712/Delivery-Icon_shyx1h.png",
    t1: "  Fast & Efficient Delivery                            ",
    t2: "We enhance our operations by relieving you of the worries.",
  },
  {
    img: "https://res.cloudinary.com/dt0j68vdr/image/upload/v1693208082/Wallet-Icon_1_wefnzz.png",
    t1: "  Transparent Pricing                                                        ",
    t2: "International supply chains involves challenging regulations..",
  },
  {
    img: "https://res.cloudinary.com/dt0j68vdr/image/upload/v1693561413/015-search_xbbijz.png",
    t1: " Real-Time Tracking                                                        ",
    t2: "Ensure customers’ supply chains are fully compliant by practices.",
  },
];

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
            <div className="px-3 xl:px-20 2xl:px-40 py-28">
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
                <div
                  className="nextE1 cursor-pointer hidden lg:block"
                  id="mtprev"
                >
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
                      {data.map((item, index) => (
                    <SwiperSlide>
                        <div key={index}>
                          <OurFeaturesCard
                            img={item.img}
                            t1={item.t1}
                            t2={item.t2}
                          />
                        </div>
                    </SwiperSlide>
                      ))}
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

              <div className="text-[25px] font-bold  text-[#9b9b9b] my-5">
                Working every day to earn our customers’ trust
                <a
                  href="https://www.google.com/"
                  className="text-white underline space-x-3 leading-[1.625] hover:text-[#cf2e2e] mx-2"
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
