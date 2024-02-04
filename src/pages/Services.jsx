import React from "react";
import services from "../data/serviceData";
import { Link, useLocation } from "react-router-dom";
import { FaArrowRight } from "react-icons/fa6";
import ServiceCard from "../components/ServiceCard";

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
                {limitedServices.map((item) => (
                    <Link key={item.id} to={`/services/${item.id}`}>
                        <ServiceCard
                            title={item.title}
                            description={item.description}
                            image={item.image}
                        />
                    </Link>
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
