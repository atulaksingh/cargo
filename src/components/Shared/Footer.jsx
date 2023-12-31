import React from "react";
import { BiLogoFacebook } from "react-icons/bi";
import { BsInstagram } from "react-icons/bs";
import { BsTwitter } from "react-icons/bs";
function Footer() {
  return (
    <>
      <div className="bg-[#F9F9F9] ">
        <div className="container mx-auto">
          <div className="mx-5 xl:mx-40 flex flex-col lg:flex-row py-12 gap-5 xl:gap-16 lg:align-middle lg:items-center">
            <div>
              <h1 className="text-[17px] font-bold">Our Newsletter</h1>
              <p className="text-[14px] text-[#9b9b9b] leading-[1.625rem]">
                Sign up for industry alerts, news & insights
              </p>
            </div>
            <div className="flex flex-col lg:flex-row align-middle gap-4 lg:gap-0">
              <input
                className="appearance-none w-full   lg:w-60 bg-white text-gray-700 border hover:border-red-500 rounded py-3 px-3  leading-tight focus:outline-none focus:bg-white"
                id="grid-first-name"
                type="text"
                placeholder="Your Name"
              />
              <input
                className="appearance-none w-full  lg:w-60 bg-white text-gray-700 border hover:border-red-500 rounded py-3  px-3 leading-tight focus:outline-none focus:bg-white"
                id="grid-first-name"
                type="text"
                placeholder="Email"
              />
              <input
                type="submit"
                className="appearance-none  w-40 bg-red-500 text-white border py-3 lg:py-0 lg:mx-4 hover:border-white rounded  px-4  leading-tight   cursor-pointer"
              />
            </div>
            <div className="flex   align-middle items-center gap-5">
              <h1 className="border border-gray-500 py-3 px-3 cursor-pointer">
                <BiLogoFacebook size={20} />
              </h1>
              <h1 className="border border-gray-500 py-3 px-3 cursor-pointer">
                <BsInstagram size={20} />
              </h1>
              <h1 className="border border-gray-500 py-3 px-3 cursor-pointer">
                <BsTwitter size={20} />
              </h1>
            </div>
          </div>
        </div>
      </div>
      <div className="container lg:mx-auto">
        <div className="px-5 xl:px-40 py-20">
          <div className="grid grid-cols-12 gap-5">
            <div className="col-span-10 md:col-span-6 lg:col-span-4">
              <div>
                <img
                  alt="footerimg"
                  height={45}
                  width={45}
                  className=""
                  src="https://res.cloudinary.com/dt0j68vdr/image/upload/v1693214874/footer_2x_k3ihf7.png"
                />
                <div className="my-4">
                  <p className="text-[16px] leading-[24px] text-[#9b9b9b]">
                    Our global logistics expertise, advanced supply chain
                    technology & customized logistics solutions will help you
                    develop and implement successful supply.
                  </p>
                  <div className="text-[16px]">
                    <span className="text-[16px] leading-[24px] text-[#9b9b9b]">
                      Email:
                    </span>{" "}
                    info@cosmicaviation.in
                  </div>
                  <div className="text-[16px]">
                    {" "}
                    <span className="text-[16px] leading-[24px] text-[#9b9b9b]">
                      Phone:
                    </span>{" "}
                    +919756342747
                  </div>
                </div>
              </div>
            </div>
            <div className="col-span-6 lg:col-span-2">
              <div className="text-[17px] text-black font-bold">Who We Are</div>
              <div className="my-5">
                <div className="text-[#9b9b9b] text-[16px] py-1">About Us</div>
                <div className="text-[#9b9b9b] text-[16px] py-1">
                  Meet Our Team
                </div>
                <div className="text-[#9b9b9b] text-[16px] py-1">
                  New & Media
                </div>
                <div className="text-[#9b9b9b] text-[16px] py-1">
                  Case Studies
                </div>
                <div className="text-[#9b9b9b] text-[16px] py-1">Contacts</div>
                <div className="text-[#9b9b9b] text-[16px] py-1">Careers</div>
              </div>
            </div>
            <div className="col-span-6 lg:col-span-2">
              <div className="text-[17px] text-black font-bold">What We Do</div>
              <div className="my-5">
                <div className="text-[#9b9b9b] text-[16px] py-1">
                  Warehousing
                </div>
                <div className="text-[#9b9b9b] text-[16px] py-1">
                  Air Freight
                </div>
                <div className="text-[#9b9b9b] text-[16px] py-1">
                  Ocean Freight
                </div>
                <div className="text-[#9b9b9b] text-[16px] py-1">
                  Road Freight
                </div>
                <div className="text-[#9b9b9b] text-[16px] py-1">
                  Supply Chain
                </div>
                <div className="text-[#9b9b9b] text-[16px] py-1">Packaging</div>
              </div>
            </div>
            <div className="col-span-6 lg:col-span-2">
              <div className="text-[17px] text-black font-bold">
                Who We Serve
              </div>
              <div className="my-4">
                <div className="text-[#9b9b9b] text-[16px] py-1">
                  Retail & Consumer
                </div>
                <div className="text-[#9b9b9b] text-[16px] py-1">
                  Sciences & Healthcare
                </div>
                <div className="text-[#9b9b9b] text-[16px] py-1">
                  Industrial & Chemical
                </div>
                <div className="text-[#9b9b9b] text-[16px] py-1">
                  Power Generation
                </div>
                <div className="text-[#9b9b9b] text-[16px] py-1">
                  Food & Beverage
                </div>
                <div className="text-[#9b9b9b] text-[16px] py-1">Oil & Gas</div>
              </div>
            </div>
            <div className="col-span-6 lg:col-span-2">
              <div className="text-[17px] text-black font-bold">
                Quick Links
              </div>
              <div className="my-5">
                <div className="text-[#9b9b9b] text-[16px] py-1">
                  Request A Quote
                </div>
                <div className="text-[#9b9b9b] text-[16px] py-1">
                  Track & Trace
                </div>
                <div className="text-[#9b9b9b] text-[16px] py-1">
                  Find A Location
                </div>
                <div className="text-[#9b9b9b] text-[16px] py-1">
                  Global Agents
                </div>
                <div className="text-[#9b9b9b] text-[16px] py-1">
                  Help & FAQs
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="border-t border-gray-300 py-8">
        <div className="flex flex-wrap justify-between px-5 lg:px-40 xl:px-72">
          <div className="text-[13px] text-[#9b9b9b]">
            ©2023 Optime, with Love by
            <a
              href="j"
              className="text-[#ff5e14] hover:underline cursor-pointer"
            >
              cosmic.com
            </a>
          </div>
          <div className="text-[14px] text-[#9b9b9b]">
            Terms & Conditions Privacy Policy SitemapF
          </div>
        </div>
      </div>
    </>
  );
}

export default Footer;
