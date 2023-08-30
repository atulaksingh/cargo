import React from "react";

function Header() {
  return (
    <>
      <div className="container mx-auto">
        <div className="mx-40 flex justify-between py-4">
          <div>
            <img alt="logoimg"  className="h-10 cursor-pointer" src="https://res.cloudinary.com/dt0j68vdr/image/upload/v1693279936/logo-dark_cisoso.png" />
          </div>
          <div className="flex justify-between align-middle items-center gap-7 text-[15px] font-bold ">
            <div className="cursor-pointer hover:text-[#ff5e14] transition-all delay-75 ease-in-out">Home</div>
            <div className="cursor-pointer hover:text-[#ff5e14] transition-all delay-75 ease-in-out">Company</div>
            <div className="cursor-pointer hover:text-[#ff5e14] transition-all delay-75 ease-in-out">Services</div>
            <div className="cursor-pointer hover:text-[#ff5e14] transition-all delay-75 ease-in-out">Features </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Header;
