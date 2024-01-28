import React from "react";
import { FaUserDoctor } from "react-icons/fa6";
import { BiPlusMedical } from "react-icons/bi";
import { FaStethoscope } from "react-icons/fa";
import { RiContactsFill } from "react-icons/ri";

const Feature = () => {
  return (
    <div className="bg-gray-200">
      <div className="container mx-auto overflow-hidden ">
        <div className="flex justify-center items-center">
          <div className="w-full max-w-[250px] h-fit bg-[#adadb1] ">
            <p className="flex justify-center py-4 text-5xl text-white">
              <FaUserDoctor />
            </p>
            <div className="text-center h-fit">
              <p className="text-white  pt-2 text-xl fs">Select Doctor</p>
              <p className="px-2 py-4 text-sm  styleClass">
                According to experience, specialty, and degree
              </p>
            </div>
          </div>

          <div className="w-full max-w-[250px] bg-violet-300  h-fit   ">
            <p className="flex justify-center py-4 text-5xl text-blue-700">
              <BiPlusMedical />
            </p>
            <div className="text-center ">
              <p className="text-white  pt-2 text-xl fs text-wrap"> Appointment</p>
              <p className="px-2 py-4 text-sm styleClass">
                Schedule  appointment to visit online
              </p>
            </div>
          </div>

          <div className="w-full max-w-[250px] bg-[#adadb1] ">
            <p className="flex justify-center py-4 text-5xl text-white ">
              <FaStethoscope />
            </p>
            <div className="text-center">
              <p className="text-white  pt-2 text-xl fs">We Offered</p>
              <p className="px-2 py-4 text-sm styleClass">
                According to experience, specialty, and degree
              </p>
            </div>
          </div>

          <div className="w-full max-w-[250px] bg-violet-300 ">
            <p className="flex justify-center py-4 text-5xl text-blue-700 ">
              <RiContactsFill />
            </p>
            <div className="text-center">
              <p className="text-white pt-2 text-xl fs">Contact Us</p>
              <p className="px-2 py-4 text-sm styleClass ">
                +977-9812345678
                <br />
                xyzasghd@gmail.com
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Feature;
