import React from "react";
import { Link } from "react-router-dom";

const ServiceCard = (props) => {
  return (
    <div className="max-w-sm  bg-blue-50 border border-gray-200 rounded-lg shadow ">
      <div className="h-48    w-full mb-3">
        <img
          src={props.image}
          alt="..img loading"
          className=" rounded-tl-md rounded-tr-md w-full h-full object-cover"
        />
      </div>

      <div className="p-4">
        <Link  to="#">
          <h5 className="mb-2 text-2xl font-semibold tracking-tight text-blue-900 dark:text-white">
            {props.title}
          </h5>
        </Link>
        <p className="mb-3 font-normal text-gray-500 dark:text-gray-400">
          {props.description}. . .
        </p>
        <Link 
          to="#"
          className="inline-flex items-center text-blue-600 hover:underline"
        >
          See our guideline
          <svg
            className="w-3 h-3 ms-2.5 rtl:rotate-[270deg]"
            aria-hidden="true"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 18 18"
          >
            <path
              stroke="currentColor"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M15 11v4.833A1.166 1.166 0 0 1 13.833 17H2.167A1.167 1.167 0 0 1 1 15.833V4.167A1.166 1.166 0 0 1 2.167 3h4.618m4.447-2H17v5.768M9.111 8.889l7.778-7.778"
            />
          </svg>
        </Link>
      </div>
    </div>
  );
};

export default ServiceCard;
