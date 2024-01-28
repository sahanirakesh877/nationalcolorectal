import React from "react";
import Plus from "./PlusAnimation";

const Hero = () => {
  return (
    <>
      <div className="relative bg-white pb-[110px] pt-[120px] bg-hero-pattern bg-cover min-h-[100vh] lg:pt-[150px] flex items-center overflow-hidden">
        <div className="flex flex-wrap h-full items-center justify-center mx-4 md:mx-8 lg:mx-16">

          {/* LEFT SIDE OF HERO SECTION */}
          <div className="w-full lg:w-6/12">
            <div className="hero-contents">
              <p className="uppercase bg-blue-50 text-blue-700 rounded-sm w-fit py-1 px-2 relative">
                your journey to digestive health starts here
                <span className="absolute -right-40 -top-10  ">
                  <Plus />
                </span>
              </p>
              <h1 className="mb-5 text-4xl font-bold !leading-[1.208] text-blue-900 sm:text-[42px] lg:text-[40px] xl:text-6xl z-10">
                Elevate Your Wellness
                <p className="block">A Colorectal Center of Excellence</p>
              </h1>
              <p className="mb-8 max-w-[480px] text-base text-body-color dark:text-dark-6 text-red-600">
                <button className="inline-flex items-center px-5 py-3 text-md font-medium text-center text-white bg-red-600 rounded-full hover:bg-blue-900 ">
                  Read More
                </button>
              </p>
            </div>
          </div>

          {/* RIGHT SIDE OF HERO SECTION */}
          <div className="w-full lg:w-6/12 mt-8 lg:mt-0">
            <div className="lg:ml-auto lg:text-right">
              <div className="relative inline-block pt-11 lg:pt-0">
                <img
                  src={"/heroImg.jpeg"}
                  alt="hero"
                  className="w-full h-auto lg:max-w-xl lg:h-full object-cover rounded-xl"
                />
              </div>
            </div>
          </div>

        </div>
      </div>
    </>
  );
};

export default Hero;
