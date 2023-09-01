import React from "react";

function HeroCard2() {
  return (
    <>
      <div>
        <div className="container mx-auto">
          <div className="  xl:px-40 py-28">
            <div className="grid tab:grid-cols-2">
              <div className="p-3">
                <div className="text-[#ff5e14] text-[14px] font-bold">
                  Real Solutions, Real Fast!
                </div>
                <div className="text-[#121c45] text-[33px] font-bold">
                  Delivering the Best Global Logistics Solutions.
                </div>
              </div>
              <div className="p-3">
                <div className="text-[#9b9b9b] text-[16px]">
                  Our global logistics expertise, advanced supply chain
                  technology & customized logistics solutions will help you
                  analyze, develop and implement successful supply chain
                  management strategies from end-to-end.
                </div>
              </div>
            </div>

            <div className="grid lg:grid-cols-3 gap-16 lg:gap-10 py-20 mx-3 sm:mx-0">
              <div className="p-7 text-center shadow-2xl rounded-lg">
                <img
                  alt="im1"
                  className="mx-auto py-8"
                  src="https://res.cloudinary.com/dt0j68vdr/image/upload/v1693204787/Airplane-Icon_bokmfe.png"
                />
                <div className="text-[20px] font-bold leading-[1.21] mb-2">
                  Air Freight
                </div>
                <div className="text-[14px] leading-[24px] text-[#9b9b9b] my-5">
                  We can arrange and provides with the comprehensive service in
                  the sphere of urgent, valuable, fragile or any cargoes
                  conscientious accelerated delivery by air.
                </div>
                <div className="text-[#121c45] py-3 w-fit px-7 mx-auto text-[14px] font-bold cursor-pointer bg-transparent hover:bg-[#ff6900] hover:text-white transition-all delay-100">
                  ReadMore
                </div>
              </div>
              <div className="p-7 text-center shadow-2xl rounded-lg">
                <img
                  alt="im1"
                  className="mx-auto py-8"
                  src="https://res.cloudinary.com/dt0j68vdr/image/upload/v1693562676/Ship-Icon_qcdfov.png"
                />
                <div className="text-[20px] font-bold leading-[1.21] mb-2">
                  Ocean Freight
                </div>
                <div className="text-[14px] leading-[24px] text-[#9b9b9b] my-5">
                  We provide reliable ocean freight services,
                  serving more than 5,000 ports across the globe 
                  at very reasonable prices for bulk shipments anywhere in the world.
                </div>
                <div className="text-[#121c45] py-3 w-fit px-7 mx-auto text-[14px] font-bold cursor-pointer bg-transparent hover:bg-[#ff6900] hover:text-white transition-all delay-100">
                  ReadMore
                </div>
              </div>
              <div className="p-7 text-center shadow-2xl rounded-lg">
                <img
                  alt="im1"
                  className="mx-auto py-8"
                  src="https://res.cloudinary.com/dt0j68vdr/image/upload/v1693562680/Truck-Icon_n4ziai.png"
                />
                <div className="text-[20px] font-bold leading-[1.21] mb-2">
                  Road Freight
                </div>
                <div className="text-[14px] leading-[24px] text-[#9b9b9b] my-5">
                  The fastest door to door delivery is now made possible
                  with our fleet of trucks at your disposal with 
                  options available for all shipment sizes.
                </div>
                <div className="text-[#121c45] py-3 w-fit px-7 mx-auto text-[14px] font-bold cursor-pointer bg-transparent hover:bg-[#ff6900] hover:text-white transition-all delay-100">
                  ReadMore
                </div>
              </div>
            </div>
            <div className="text-[25px] font-bold text-center text-[#9b9b9b]">
              Logistic & Transport Solutions Saves Your Time.
              <a
                href="https://www.google.com/"
                className="text-black underline space-x-3 leading-[1.625] hover:text-[#cf2e2e]"
              >
                {" "}
                Find your solution
              </a>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default HeroCard2;
