import React from "react";



function HeroCard(props) {
  console.log("sd",props)
  return (
    <div>
    
      <div className="relative ">
        <img
          src={props.img}
          alt="img"
          className="h-[38rem] sm:h-[42.2rem]  2xl:h-[56.8999rem] w-full object-cover object-center"
          // className="h-[28rem] lg:h-[30.2rem]  xl:h-[56.8999rem] w-full object-cover object-center"
        ></img>
        <div>
        {/* <div className=" absolute bg-red-500 bg-blend-saturation"></div> */}
          <div className="absolute top-60 sm:top-28 lg:top-40 2xl:top-80 mx-5 md:mx-28 lg:mx-40 xl:mx-60  2xl:mx-72">
            <div className="container mx-auto">
              <div className="grid grid-cols-12">
                <div className="col-span-12 lg:col-span-9 2xl:col-span-7">
                  <div className="text-white text-4xl sm:text-7xl lg:text-[80px] font-bold leading-[38px] sm:leading-[75px] lg:leading-[85px] py-7">
                    {props.tt1}
                  </div>
                  <div className="text-white text-sm sm:text-lg font-medium w-fit">
                   {props.tt2}
                  </div>
                  <div className="flex gap-4 sm:gap-10 my-8">
                    <div className="bg-[#ff5e14] text-white py-3.5 rounded-md font-bold text-sm px-8 sm:px-12 w-fit hover:text-[#ff5e14] hover:bg-white cursor-pointer transition-all delay-100">
                      Our  services
                    </div>
                    <div className="bg-white text-[#ff5e14] py-3.5 rounded-md font-bold text-sm px-8 sm:px-12 w-fit hover:text-white hover:bg-[#ff5e14] cursor-pointer transition-all delay-100">
                      Our  services
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default HeroCard;
