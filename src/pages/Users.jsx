import React from "react";
import TeamCard from "../components/TeamCard";
import { Link, useLocation } from "react-router-dom";
import { user_data } from "../data/userData";
import { FaArrowRight } from "react-icons/fa";

const Users = () => {
  const location = useLocation();
  const isHome = location.pathname == "/";
  const limitedUsers = isHome ? user_data.slice(0, 3) : user_data;

  return (
    <div className={`mt-[74px] px-24   bg-gray-200 mb-14 ${isHome ? "" : "bg-gray-100 h-full"}`}>
   
       <div className="flex items-center mb-8 pt-2 text-3xl xl:text-3xl w-full justify-center font-bold text-blue-900 bg-clip-text text-center text-wrap">
       Specialist
      </div>
     

      <div className="grid place-items-center  grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12 sm:gap-16 md:gap-20 ">
        {limitedUsers.map((user, idx) => (
          <TeamCard key={idx} name={user.name} role={user.role} phone={user.phoneNo} />

        ))}
      </div>

      {isHome ? (
        <p className="w-full flex justify-center py-3 mt-7">
          <Link to="/our-team">
            <button className="flex items-center justify-center text-blue-900 font-semibold hover:text-blue-700 pb-8">
              VIEW ALL MEMBERS{" "}
              <span className="ml-1">
                <FaArrowRight />
              </span>
            </button>
          </Link>
        </p>
      ) : (
        <></>
      )}
    </div>
  );
};

export default Users;
