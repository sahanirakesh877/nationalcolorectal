import React from "react";

const TeamCard = ({ name, role, phone }) => {
  return (
    <div className="pt-16 w-[16rem] relative ">
      <div className="w-36 h-36 absolute top-1 z-20 left-14 mx-auto transform-gpu transition-all overflow-hidden shadow-xl shadow-gray-200 rounded-full border  border-blue-600">
        <img
          src="https://img.freepik.com/premium-photo/photo-female-doctor-physician-medical-uniform-with-stethoscope-cross-arms-chest-smiling_812426-26424.jpg?size=626&ext=jpg"
          className="bg-cover hover:scale-110"
        />
      </div>

      <div
        className={`pt-20 shadow-2xl shadow-gray-100 rounded-xl text-center flex flex-col justify-center max-w-[16rem] border-2 hover:border-0 group relative overflow-hidden`}
      >
        <div className="absolute rounded-xl  inset-0 bg-gradient-to-b from-[#f9fbfd] to-[#b9cefc] translate-y-[105%] group-hover:translate-y-[0%] transition-transform duration-500" />

        <section className="z-10 text-blue-950">
          <h1 className={`text-md font-semibold  pt-3  `}>{name}</h1>
          <h1 className={`text-xl font-bold pt-2  text-green-900`}>{role}</h1>
          <div className="flex items-center justify-around pt-2">
            <h1 className={`text-sm font-bold `}>{phone}</h1>
          </div>
        </section>

        <div className="p-4 flex justify-center flex-col ">
          <div className=" z-10">
            <button className="bg-blue-800 w-full py-2 text-white z-10">
              Consult{" "}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TeamCard;
