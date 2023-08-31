import {
  Avatar,
  Button,
  DarkThemeToggle,
  Dropdown,
  Navbar,
} from "flowbite-react";
import React from "react";
import { useState } from "react";

function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
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
          <Navbar className="dark:bg-red-300-800 " fluid={true} rounded={true}>
            <Navbar.Brand>
              <img
                alt="logoimg"
                className="h-10 cursor-pointer"
                src="https://res.cloudinary.com/dt0j68vdr/image/upload/v1693279936/logo-dark_cisoso.png"
              />
            </Navbar.Brand>
            <div className="flex md:order-2 rounded-full bg-white">
              <Button
                // color={"dark  "}
                className="md:block hidden rounded-full bg-[#ff5e14]"
              >
                Sign In
              </Button>

              <Navbar.Toggle />
            </div>
            <Navbar.Collapse className=" w-full h-[320px] md:h-full mx-auto bg-white">
              <Navbar className="font-bold text-base mx-auto py-5 hover:text-[#ff5e14] transition-all delay-75 ease-in-out cursor-pointer">
                Home
              </Navbar>
              <Navbar className="font-bold text-base mx-auto py-5  hover:text-[#ff5e14] transition-all delay-75 ease-in-out cursor-pointer">
                About
              </Navbar>
              <Navbar className="font-bold text-base mx-auto py-5  hover:text-[#ff5e14] transition-all delay-75 ease-in-out cursor-pointer">
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
