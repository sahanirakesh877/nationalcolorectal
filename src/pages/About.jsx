import React from "react";

const About = () => {
  return (
    <>
      <section className="overflow-hidden  lg:pt-[120px] lg:pb-[20px] px-4 bg-gray-200">
        <div className="container mx-auto">
          <div className="flex flex-wrap items-center justify-between -mx-4">
            {/* LEFT SIDE OF ABOUT */}
            
            <div className="w-full px-4 lg:w-1/2 xl:w-5/12">
              <div className="mt-10 lg:mt-0">
                <span className="block mb-4 text-xl text-blue-700 font-semibold  uppercase   ">
                  about us
                </span>
                <h2 className="mb-5 text-2xl font-bold text-blue-900 sm:text-[40px]/[48px]">
                  Make our patients happy by giving services.
                </h2>
                <p className="mb-5 text-base  text-body-color dark:text-dark-6">
                Welcome to [Colorectal Surgeon's   ], where compassionate care meets surgical excellence in the field of colorectal surgery. Driven by a commitment to our patients' well-being, we take pride in providing comprehensive and personalized solutions for all colorectal health concerns.
                </p>
                <p className="mb-8 text-base text-body-color dark:text-dark-6">
                [Colorectal Surgeon's  ] is committed to a patient-centric approach, where open communication and collaboration between our team and patients are prioritized. We believe in empowering our patients with knowledge, involving them in the decision-making process, and providing comprehensive support throughout their healthcare journey.
                </p>
                <a className="inline-flex bg-red-600 items-center justify-center py-2 mb-2 text-base font-medium text-center text-[#ffffff] border border-transparent  rounded-md px-7 bg-primary hover:bg-opacity-90">
                  Get Started
                </a>
              </div>
            </div>

            {/* RIGHJT SIDE OF ABOUT */}
            <div className="w-full px-4 lg:w-6/12">
              <div className="flex items-center -mx-3 sm:-mx-4">
                <div className="w-full px-3 sm:px-4 xl:w-1/2">
                  <div className="py-3 sm:py-4">
                    <img
                      src="https://img.freepik.com/premium-photo/stethoscope-object-book-backgrouund_488220-64272.jpg"
                      alt=""
                      className="w-full rounded-2xl hover:scale-105"
                    />
                  </div>
                  <div className="py-3 sm:py-4">
                    <img
                  
                      src='https://img.freepik.com/free-photo/syringe-pills-stethoscope-heart-shape-with-bandage-medical-scalpel-scissor-cotton-gauze-bandage-blue-background_23-2148050536.jpg?w=826&t=st=1706193266~exp=1706193866~hmac=777130d29a92f7326c41fad7576f72551f3c4791316fb6397108452d92069c4d'
                      alt=""
                      className="w-full rounded-2xl hover:scale-105"
                    />
                  </div>
                </div>
                <div className="w-full px-3 sm:px-4 xl:w-1/2">
                  <div className="relative z-10 my-4">
                    <img
                       src="https://img.freepik.com/free-vector/medicical-elements-background_1268-1363.jpg?w=740&t=st=1706193218~exp=1706193818~hmac=106a1f61bd656c5c9039d3a7a08d09f18ac328400fc44d0d6fb193026125f7a8"
                      alt=""
                      className="w-full rounded-2xl hover:scale-105"
                    />
                  </div>
                </div>
              </div>
            </div>
           
          </div>
        </div>
      </section>
    </>
  );
};

export default About;
