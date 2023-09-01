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
            <div className="lg:max-w-lg xl:max-w-xl 2xl:max-w-3xl mx-5 lg:m-auto ">
              <div className="">
                <div className="text-[32px] xl:text-[37px] leading-[40px]  xl:leading-[50px] font-bold ">
                  Flexible Pricing Policy & Decades Of Experience!
                </div>

                <div className="text-[17px] leading-[26px] text-white font-medium py-6">
                  We believe that the services, offered by our company, should
                  satisfy the high expectations of our customers. We are
                  dedicated in creating added value for our customers by
                  implementing modern technology
                </div>
                <div className="flex justify-start flex-col  lg:flex-row gap-7 lg:gap-14 2xl:gap-28">
                  <div>
                    <div className="text-[35px] font-bold text-white">
                      3,351m
                    </div>
                    <div className="text-[14px] font-bold">
                      Clients Worldwide
                    </div>
                  </div>
                  <div>
                    <div className="text-[35px] font-bold text-white">
                      5,254m
                    </div>
                    <div className="text-[14px] font-bold">
                      Delivered Goods
                    </div>
                  </div>
                  <div>
                    <div className="text-[35px] font-bold text-white">
                      7,525m
                    </div>
                    <div className="text-[14px] font-bold">
                      Miles Driven
                    </div>
                  </div>
                </div>

                <div className="text-[17px] leading-[26px] text-white font-medium py-6">
                  Providing the best transport and shipping services currently
                  available allover the world. Our skilled personnel, utilising
                  the latest communications, 
                </div>
                <div>
                  <img
                    alt="sign"
                    className="py-2"
                    src="https://res.cloudinary.com/dt0j68vdr/image/upload/v1693297846/Signuture_tvb2wl.png"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default LogoCard2;
