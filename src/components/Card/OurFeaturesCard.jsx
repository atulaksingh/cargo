import React from "react";

function OurFeaturesCard(props) {
  return (
    <>
      <div>
        <div className="text-start p-5">
          <img
            alt="img2"
            className=" my-5"
            src={props.img}
          />
          <div className="text-[17px] font-semibold pt-1 pb-3">
           
         
        
         {props.t1}                                                                           
          </div>
          <div className="text-[14px] leading-[24px] text-[#9b9b9b]">
        {props.t2}
          </div>
        </div>
      </div>
    </>
  );
}

export default OurFeaturesCard;
