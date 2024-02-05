import React from "react";
import { BsWhatsapp, BsFacebook, BsInstagram, BsTwitter } from "react-icons/bs";

import logoImg from "/nccnepal.png";

const Footer = () => {
    return (
        <>
            <footer className=" bg-gradient-to-br from-[#f7fafd] via-[#f2f7fc] to-[#bddce9]">
                <div className=" w-full container mx-auto pl-4 pr-4  py-6 lg:py-8 ">
                    <div className="md:flex md:justify-between">
                        <div className="flex items-center mb-4 md:mb-0">
                            <img
                                src={logoImg}
                                alt="Logo"
                                className="h-14 w-auto ms-2"
                            />
                            <span className="text-blue-900 font-bold ps-5 text-[20px]">
                                National Colorectal
                                <span className="block -mt-2 text-[#ef1827]">
                                    Center
                                </span>
                            </span>
                        </div>
                        <div className="grid grid-cols-2 gap-8 sm:gap-6 sm:grid-cols-3">
                            <div>
                                <h2 className="mb-6 text-sm font-semibold text-[#ef1827] uppercase">
                                    Our Services
                                </h2>
                                <ul className="text-gray-600 font-medium">
                                    <li className="mb-1">
                                        <a
                                            href="https://flowbite.com/"
                                            className="hover:underline"
                                        >
                                            Surgeon
                                        </a>
                                    </li>
                                    <li className="mb-1">
                                        <a
                                            href="https://tailwindcss.com/"
                                            className="hover:underline"
                                        >
                                            Piles
                                        </a>
                                    </li>
                                    <li className="mb-1">
                                        <a
                                            href="https://tailwindcss.com/"
                                            className="hover:underline"
                                        >
                                            Fistula
                                        </a>
                                    </li>
                                    <li className="mb-1">
                                        <a
                                            href="https://tailwindcss.com/"
                                            className="hover:underline"
                                        >
                                            Haemorroids
                                        </a>
                                    </li>
                                </ul>
                            </div>

                            <div>
                                <h2 className="mb-6 text-sm font-semibold text-[#ef1827] uppercase">
                                    Follow us
                                </h2>
                                <ul className="text-gray-600  font-medium">
                                    <li className="mb-1 flex flex-row gap-2 items-center ">
                                        <BsFacebook className="text-blue-700" />
                                        <a
                                            href="https://facebook.com"
                                            className="hover:underline "
                                        >
                                            Facebook
                                        </a>
                                    </li>
                                    <li className="mb-1 flex flex-row gap-2 items-center">
                                        <BsInstagram className="text-red-700" />
                                        <a
                                            href="https://instagram.com"
                                            className="hover:underline "
                                        >
                                            Instagram
                                        </a>
                                    </li>
                                    <li className="mb-1 flex flex-row gap-2 items-center">
                                        <BsWhatsapp className="text-green-700" />{" "}
                                        <a
                                            href="https://whatsapp.com"
                                            className="hover:underline "
                                        >
                                            WhatsApp
                                        </a>
                                    </li>
                                    <li className="mb-1 flex flex-row gap-2 items-center">
                                        <BsTwitter className="text-blue-900" />
                                        <a
                                            href="https://viber.com"
                                            className="hover:underline "
                                        >
                                            Viber
                                        </a>
                                    </li>
                                </ul>
                            </div>

                            <div>
                                <h2 className="mb-6 text-sm font-semibold text-[#ef1827] uppercase ">
                                    Legal
                                </h2>
                                <ul className="text-gray-600 font-medium">
                                    <li className="mb-1">
                                        <a href="#" className="hover:underline">
                                            Privacy Policy
                                        </a>
                                    </li>
                                    <li className="mb-1">
                                        <a href="#" className="hover:underline">
                                            Terms &amp; Conditions
                                        </a>
                                    </li>

                                    <li className="mb-1">
                                        <a href="#" className="hover:underline">
                                            Terms &amp; Conditions
                                        </a>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                    <hr className="my-6 border-gray-400 sm:mx-auto  lg:my-8" />
                    <div className="sm:flex sm:items-center sm:justify-between">
                        <span className="text-sm text-gray-500 sm:text-center">
                            © 2024{" "}
                            <a href="https://.com/" className="hover:underline">
                                NationalColorectal Surgeon {""}
                            </a>
                            All Rights Reserved.
                        </span>
                        <div className="flex  sm:justify-center gap-8 sm:mt-0">
                            <BsWhatsapp className="text-blue-900 font-semibold text-md hover:scale-125 cursor-pointer" />
                            <BsFacebook className="text-blue-900 font-semibold text-md hover:scale-125 cursor-pointer" />
                            <BsInstagram className="text-blue-900 font-semibold text-md hover:scale-125 cursor-pointer" />
                            <BsTwitter className="text-blue-900 font-semibold text-md hover:scale-125 cursor-pointer" />
                        </div>
                    </div>
                </div>
            </footer>
        </>
    );
};

export default Footer;
