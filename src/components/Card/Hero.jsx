import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import 'swiper/css/effect-fade';
import "swiper/css/navigation";
import "swiper/css/pagination";

// import './styles.css';

// import required modules
import {EffectFade, Autoplay, Navigation, Pagination, History } from "swiper/modules";

import HeroCard from "./HeroCard";
const data = [
  {
    img: "https://res.cloudinary.com/dt0j68vdr/image/upload/v1693218373/shutterstock_638769595_blqcef.jpg",
    t1: "Leading the way in Global Logistics",
    t2: "through integrated supply chain solution, we provide substainable competitive advantages to some of the largest companies all over the world",
  },
  {
    img: "https://res.cloudinary.com/dt0j68vdr/image/upload/v1693218375/shutterstock_757396009_atqymr.jpg",
    t1: " Fast, Certified & Flexible Solution.",
    t2: " Our on-time services helps us to provide quick solutions to our customers",
  },
  {
    img: "https://res.cloudinary.com/dt0j68vdr/image/upload/v1693305861/cj8oqm9jg00jkkvqp97qtfp0s-transportation-air-banner.0.438.4256.2394.max__sprw28.jpg",
    t1: " Affordable Price & Solution.",
    t2: " Staying ahead of the competition with our global affordable pricing",
  },
];

function Hero() {
  return (
    <>
      {/* <div>Hero</div> */}

      <Swiper
        spaceBetween={0}
        slidesPerView={1}
        effect={'fade'}
        navigation={true}
        pagination={false}
        // autoplay={{
        //   delay: 3500,
        //   disableOnInteraction: false,
        // }}
        history={{
          key: "slide",
        }}
        modules={[EffectFade,Navigation, Pagination, History, Autoplay]}
        className="mySwiper"
        breakpoints={{
          640: {
            slidesPerView: 1,
            spaceBetween: 0,
          },
          768: {
            slidesPerView: 1,
            spaceBetween: 0,
          },
          1024: {
            slidesPerView: 1,
            spaceBetween: 0,
          },
        }}
      >
        {data.map((item, index) => (
          <SwiperSlide data-history="1">
            <HeroCard img={item.img} tt1={item.t1} tt2={item.t2} />
          </SwiperSlide>
        ))}
 
      </Swiper>
    </>
  );
}

export default Hero;
