import React from "react";



function HeroCard(props) {
  console.log("sd",props)
  return (
    <div>
    
      <div className="relative ">
        <img
          src={props.img}
          alt="img"
          //   className="w-full h-[60rem] mx-auto "
          className="h-[56.8999rem] w-full object-cover object-center"
        ></img>
        <div>
          <div className="absolute top-64   mx-72">
            <div className="container mx-auto">
              <div className="grid grid-cols-12">
                <div className="col-span-7">
                  <div className="text-white text-[80px] font-bold leading-[85px] py-7">
                    {props.tt1}
                  </div>
                  <div className="text-white text-lg font-medium w-fit">
                   {props.tt2}
                  </div>
                  <div className="flex gap-10 my-8">
                    <div className="bg-[#ff5e14] text-white py-3.5 rounded-md font-bold text-sm px-12 w-fit hover:text-[#ff5e14] hover:bg-white cursor-pointer transition-all delay-100">
                      Our Serves
                    </div>
                    <div className="bg-white text-[#ff5e14] py-3.5 rounded-md font-bold text-sm px-12 w-fit hover:text-white hover:bg-[#ff5e14] cursor-pointer transition-all delay-100">
                      Our Serves
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
