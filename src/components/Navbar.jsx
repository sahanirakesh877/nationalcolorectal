import React, { useEffect, useState } from "react";
import { titles } from "../data/navData";
import { Link, useLocation } from "react-router-dom";
import HambergerMenu from "./Hmaburger";

import logoImg from "/nccnepal.png";

const Navbar = () => {
    const location = useLocation();
    const [scrolling, setScrolling] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            if (window.scrollY > 0) {
                setScrolling(true);
            } else {
                setScrolling(false);
            }
        };

        window.addEventListener("scroll", handleScroll);
        return () => {
            window.removeEventListener("scroll", handleScroll);
        };
    }, []);

    useEffect(() => {
        window.scrollTo(0, 0);
    }, [location.pathname]);

    function handleMouseHoverIn(title) {
        const hoverDocument = document.getElementById(`linkto${title}`);
        hoverDocument.classList.add("hoverAnim");
    }

    function handleMouseHoverOut(title) {
        const hoverDocument = document.getElementById(`linkto${title}`);
        hoverDocument.classList.remove("hoverAnim");
    }

    return (
        <>
            <nav
                className={`fixed top-0 z-[99]  shadow-md text-md overflow-hidden w-full flex justify-between items-center px-2 sm:px-14 py-2  ${
                    scrolling
                        ? "bg-white bg-opacity-70 backdrop-blur-lg shadow-gray-300 shadow-sm"
                        : "bg-transparent"
                }`}
            >
                <div className="flex gap-6 items-center">
                    <Link to="/">
                        <div className="flex items-center text-slate-600 group">
                            <img
                                src={logoImg}
                                alt="Logo"
                                className="h-14 w-auto group-hover:scale-110"
                            />
                            <span className="text-blue-800 font-bold text-[20px] md:hidden xl:block">
                                National Colorectal
                                <span className="text-[#ef1827] block -mt-2">
                                    Center
                                </span>
                            </span>
                        </div>
                    </Link>
                </div>
                <div className="hidden md:flex">
                    {titles.map((item, idx) => {
                        return (
                            <div key={idx}>
                                <Link to={`${item.path}`}>
                                    <button
                                        className={`px-3 py-1 bg-transparent relative ${
                                            location.pathname === item.path
                                                ? "text-[#ef1827] font-bold"
                                                : "text-blue-800"
                                        }`}
                                        id={`linkto${item.title}`}
                                        onMouseEnter={() =>
                                            handleMouseHoverIn(item.title)
                                        }
                                        onMouseLeave={() =>
                                            handleMouseHoverOut(item.title)
                                        }
                                    >
                                        {item.title}
                                    </button>
                                </Link>
                            </div>
                        );
                    })}
                </div>
                <HambergerMenu />
            </nav>
        </>
    );
};

export default Navbar;
