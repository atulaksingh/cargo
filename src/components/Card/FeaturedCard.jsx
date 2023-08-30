import React from "react";

function FeaturedCard() {
  return (
    <>
      <div className="container mx-auto">
        <div className="  xl:px-40 py-20">
          <div className="my-7 text-center">
            <div className="text-[#ff5e14] text-[14px] mb-5 font-bold">
              Latest Case Studies
            </div>
            <div className="text-[33px] leading-[1.625rem] font-bold mb-5">
              Featured Projects
            </div>
            <div className="text-[16px] text-[#9b9b9b] leading-[1.625rem] md:w-[70%] lg:w-[45%] mx-auto">
              We continue to pursue that same vision in today's complex,
              uncertain world, working every day to earn our customers’ trust!
            </div>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 py-10">
            <div className="p-4">
              <div className="relative">
                <img
                  alt="img3"
                  className=""
                  src="https://res.cloudinary.com/dt0j68vdr/image/upload/v1693211589/case5-600x585_lo45b1.jpg"
                />
                <div className="bg-[#ff5e14] text-white absolute bottom-0 left-6 py-0.5 px-2 w-fit ">
                  Analystics, optimization
                </div>
              </div>

              <div style={{marginTop:"13px",marginLeft:"20px",Right:"20px"}} className=" ">
                <div className="text-[20px] font-semibold leading-[28px] mb-2 hover:text-[#cf2e2e] transition-all delay-75 cursor-pointer">
                  Lane Pairing Analysis
                </div>
                <div className="text-[15px] leading-[25px] text-[#9b9b9b] my-3">
                  We can arrange and provides with the comprehensive service in
                  the sphere of urgent, valuable, fragile or any cargoes
                  conscientious accelerated delivery by air.
                </div>
                <div className="dj text-[#121c45]  text-left  text-[14px] font-bold cursor-pointer bg-transparent my-2">
                  ReadMore
                </div>
              </div>
            </div>
            <div className="p-4">
              <div className="relative">
                <img
                  alt="img3"
                  className=""
                  src="https://res.cloudinary.com/dt0j68vdr/image/upload/v1693211589/case5-600x585_lo45b1.jpg"
                />
                <div className="bg-[#ff5e14] text-white absolute bottom-0 left-6 py-0.5 px-2 w-fit ">
                  Analystics, optimization
                </div>
              </div>

              <div style={{marginTop:"13px",marginLeft:"20px",Right:"20px"}} className=" ">
                <div className="text-[20px] font-semibold leading-[28px] mb-2 hover:text-[#cf2e2e] transition-all delay-75 cursor-pointer">
                  Lane Pairing Analysis
                </div>
                <div className="text-[15px] leading-[25px] text-[#9b9b9b] my-3">
                  We can arrange and provides with the comprehensive service in
                  the sphere of urgent, valuable, fragile or any cargoes
                  conscientious accelerated delivery by air.
                </div>
                <div className="dj text-[#121c45]  text-left  text-[14px] font-bold cursor-pointer bg-transparent my-2">
                  ReadMore
                </div>
              </div>
            </div>
            <div className="p-4">
              <div className="relative">
                <img
                  alt="img3"
                  className=""
                  src="https://res.cloudinary.com/dt0j68vdr/image/upload/v1693211589/case5-600x585_lo45b1.jpg"
                />
                <div className="bg-[#ff5e14] text-white absolute bottom-0 left-6 py-0.5 px-2 w-fit ">
                  Analystics, optimization
                </div>
              </div>

              <div style={{marginTop:"13px",marginLeft:"20px",Right:"20px"}} className=" ">
                <div className="text-[20px] font-semibold leading-[28px] mb-2 hover:text-[#cf2e2e] transition-all delay-75 cursor-pointer">
                  Lane Pairing Analysis
                </div>
                <div className="text-[15px] leading-[25px] text-[#9b9b9b] my-3">
                  We can arrange and provides with the comprehensive service in
                  the sphere of urgent, valuable, fragile or any cargoes
                  conscientious accelerated delivery by air.
                </div>
                <div className="dj text-[#121c45]  text-left  text-[14px] font-bold cursor-pointer bg-transparent my-2">
                  ReadMore
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default FeaturedCard;
