import React from "react";

function LogoCard2() {
  return (
    <>
      <div className="bg-[#ff5e14] text-white">
          <div className="grid lg:grid-cols-2 lg:gap-0">
            <div className="">
              <img
                // style={{ width: "100%",height:"100%" }}
                alt="img5"
                className="w-full h-auto bg-contain"
                src="https://res.cloudinary.com/dt0j68vdr/image/upload/v1693289689/about_video_ejpqwq.jpg"
              />
            </div>
            <div className="flex py-20 lg:py-0">
              <div className="max-w-2xl mx-5 lg:m-auto ">
                <div className="text-[37px] leading-[50px] font-bold ">
                  Flexible Pricing Policy & Decades Of Experience!
                </div>

                <div className="text-[17px] leading-[26px] text-white font-medium py-6">
                  We believe that the services, offered by our company, should
                  satisfy the high expectations of our customers. We are
                  dedicated in creating added value for our customers by
                  implementing modern technology in our work. That is why the
                  desire of constant improvement is the driving force behind our
                  transportation business.
                </div>
                <div className="flex justify-start flex-wrap gap-7 lg:gap-28">
                  <div>
                    <div className="text-[35px] font-bold text-white">
                      3,214m
                    </div>
                    <div className="text-[14px] font-bold">
                      Clients Worldwide
                    </div>
                  </div>
                  <div>
                    <div className="text-[35px] font-bold text-white">
                      3,214m
                    </div>
                    <div className="text-[14px] font-bold">
                      Clients Worldwide
                    </div>
                  </div>
                  <div>
                    <div className="text-[35px] font-bold text-white">
                      3,214m
                    </div>
                    <div className="text-[14px] font-bold">
                      Clients Worldwide
                    </div>
                  </div>
                </div>

                <div className="text-[17px] leading-[26px] text-white font-medium py-6">
                  Providing the best transport and shipping services currently
                  available allover the world. Our skilled personnel, utilising
                  the latest communications, new tracking and processing
                  software, combined with decades of experience!
                </div>
                <div>
                    <img alt="sign" className="py-2" src="https://res.cloudinary.com/dt0j68vdr/image/upload/v1693297846/Signuture_tvb2wl.png" />
                </div>
              </div>
            </div>
          </div>
        </div>
    </>
  );
}

export default LogoCard2;
