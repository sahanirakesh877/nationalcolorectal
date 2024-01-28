import React from "react";
import services from "../data/serviceData";
import { Link, useLocation } from "react-router-dom";
import { FaArrowRight } from "react-icons/fa6";

const Services = () => {
  const location = useLocation();
  const isHomePage = location.pathname === "/";
  const limitedServices = isHomePage ? services.slice(0, 6) : services;

  return (
    <>
      <div className="container pt-20 mx-auto overflow-hidden">
        <h1 className="text-3xl text-blue-900 text-center text-primary font-semibold dark:text-blue-400">
          Service <span>We Provide</span>
        </h1>
      </div>

      <div className="container mx-auto pb-[70px] pt-10 grid lg:grid-cols-3 sm:grid-cols-1 sm:px-10 gap-8 px-4">
        {limitedServices.map((service) => (
          <div key={service.id}>
            <Link to={`/services/${service.id}`}>
              <div className="shadow-xl p-2 text-center rounded bg-gray-50">
                <img src={service.image} alt="Loading..." className="h-48 w-full" />
                <h3 className="text-2xl font-semibold   py-2 text-blue-900 dark:text-blue-400">{service.title}</h3>
                <p
                  className="text-gray-700"
                  dangerouslySetInnerHTML={{ __html: service.description.substring(0, 100) }}
                />
                <p className="py-3  items-center flex gap-2 justify-center text-red-900">
                  {" "}
                  View More{" "}
                  <span>
                    <FaArrowRight />
                  </span>
                </p>
              </div>
            </Link>
          </div>
        ))}
      </div>

      {isHomePage && (
        <p className="w-full flex justify-center py-3 ">
          <Link to="/services">
            <button className="flex items-center justify-center text-blue-900 font-semibold hover:text-blue-700 text-sm md:text-base">
              VIEW ALL SERVICES{" "}
              <span className="ml-1">
                <FaArrowRight />
              </span>
            </button>
          </Link>
        </p>
      )}
    </>
  );
};

export default Services;
