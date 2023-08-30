import React from "react";

function AchievedCard() {
  return (
    <>
      <div className="bg-[#F9F9F9]">
        <div className="pt-20">
          <div className="grid lg:grid-cols-2 gap-16 lg:gap-0">
            <div className="flex">
              <div className="max-w-xl mx-5  lg:m-auto ">
                <img
                  alt="img4"
                  src="https://res.cloudinary.com/dt0j68vdr/image/upload/v1693286346/Tag_Icon_o83mea.png"
                  className="mb-7"
                />
                <div className="text-[14px] text-[#ff5e14] font-bold my-2">Affordable Price, Certified Forwarders</div>
                <div className="text-[31px] md:text-[39px] leading-[40px] lg:leading-[52px] font-[700] my-5">
                  Safe, Reliable & Express Logistic Solutions That Saves Your
                  Time!
                </div>
                <div className="text-[15px] leading-[25px] text-[#9b9b9b] font-normal my-6">
                  We pride ourselves on providing the best transport and
                  shipping services available allover the world. Our skilled
                  personnel, utilising the latest communications, tracking and
                  processing software, combined with decades of the experience
                  through integrated supply chain.
                </div>
                <div className="bg-[#ff5e14] text-white py-3.5 border rounded-sm font-bold text-sm px-12 w-fit hover:border-[#ff5e14] hover:text-[#ff5e14] hover:bg-white cursor-pointer transition-all delay-100">
                Schedule An Appointment
                </div>
              </div>
            </div>
            <div>
                <img style={{width:"-webkit-fill-available"}} alt="img5" className="cover" src="https://res.cloudinary.com/dt0j68vdr/image/upload/v1693287036/services_man_qnvuc3.jpg" />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default AchievedCard;
