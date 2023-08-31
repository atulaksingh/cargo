import { Button, Navbar } from "flowbite-react";
import React from "react";

function Header() {
  return (
    <>
      <div className="bg-white">
        <div className="container mx-auto bg-white">
          {/* <div className="mx-5 lg:mx-40 flex justify-between py-4">
          <div>
            <img alt="logoimg"  className="h-10 cursor-pointer" src="https://res.cloudinary.com/dt0j68vdr/image/upload/v1693279936/logo-dark_cisoso.png" />
          </div>
          <div className="hidden lg:block">
          <div className="flex justify-between align-middle items-center gap-7 text-[15px] font-bold ">
            <div className="cursor-pointer hover:text-[#ff5e14] transition-all delay-75 ease-in-out">Home</div>
            <div className="cursor-pointer hover:text-[#ff5e14] transition-all delay-75 ease-in-out">Company</div>
            <div className="cursor-pointer hover:text-[#ff5e14] transition-all delay-75 ease-in-out">Services</div>
            <div className="cursor-pointer hover:text-[#ff5e14] transition-all delay-75 ease-in-out">Features </div>
          </div>
          </div>
        </div> */}
          <Navbar className="dark:bg-white " fluid={true} rounded={true}>
            <Navbar.Brand className="dark:bg-white  ">
              <img
                alt="logoimg"
                className="h-10 cursor-pointer"
                src="https://res.cloudinary.com/dt0j68vdr/image/upload/v1693279936/logo-dark_cisoso.png"
              />
            </Navbar.Brand>
            <div className="flex md:order-2 rounded-full bg-white">
              <Button
                color={"light"}
                
                className="md:block hidden rounded-full bg-[#ff5e14]"
              >
                Contact Us
              </Button>
              <div >
              {/* <Navbar.Toggle color={"light"}  className="dark:bg-white" /> */}
              <Navbar.Toggle />
              </div>
            </div>
            <Navbar.Collapse className=" w-full mt-2 h-[320px] md:h-full mx-auto dark:bg-white">
              <Navbar className="font-bold text-base mx-auto py-5 dark:bg-white hover:text-[#ff5e14] transition-all delay-75 ease-in-out cursor-pointer">
                Home
              </Navbar>
              <Navbar className="font-bold text-base mx-auto py-5 dark:bg-white  hover:text-[#ff5e14] transition-all delay-75 ease-in-out cursor-pointer">
                About
              </Navbar>
              <Navbar className="font-bold text-base mx-auto py-5 dark:bg-white     hover:text-[#ff5e14] transition-all delay-75 ease-in-out cursor-pointer">
                Services
              </Navbar>

              <Button
                className="md:hidden block mx-auto my-5 rounded-full bg-[#ff5e14] text-white "
                color=""
              >
                Contact Us
              </Button>
            </Navbar.Collapse>
          </Navbar>
        </div>
      </div>
    </>
  );
}

export default Header;
