import React from "react";
import { BsWhatsapp } from "react-icons/bs";
import { MdOutlineMarkEmailUnread } from "react-icons/md";
import { LuPhoneCall } from "react-icons/lu";
import { GrLocation } from "react-icons/gr";

const Footer = () => {
    return (
        <footer className="bg-black text-white py-6 px-4 ">
            <div className="flex flex-col md:flex-row items-start md:justify-center items-center gap-4">
                <div className="flex flex-col md:flex-row justify-center gap-4">
                    <div className="flex items-center space-x-2  md:border-r pr-4">
                        <LuPhoneCall className="text-gray-400 text-lg" />
                        <p className="text-sm">+91 6203689042</p>
                    </div>
                    <div className="flex items-center space-x-2 border-none md:border-r pr-4">
                        <BsWhatsapp className="text-gray-400 text-lg" />
                        <p className="text-sm">+91 6203689042</p>
                    </div>
                    <div className="flex items-center space-x-2">
                        <MdOutlineMarkEmailUnread className="text-gray-400 text-lg" />
                        <p className="text-sm">support@optimizaum.com</p>
                    </div>
                </div>
            </div>

            {/* Address Section */}
            <div className="flex  md:flex-row items-center items-start md:justify-center  text-left md:text-center mt-4 gap-2 md:gap-3 ">
                <GrLocation className="text-gray-500 text-lg" />
                <p className="text-sm text-xs md:font-thin ">
                    Address: Basement-2, A-40 Noida Sector-4, Uttar Pradesh 201301
                </p>
            </div>

            {/* Divider */}
            <div className="border-t border-gray-700 my-2"></div>
            <div className="text-center">
                <p className="text-gray-400 text-sm">© 2025 <a href="https://miniwebx.com" className="hover:text-yellow-500">MiniWebX</a>, Powered by
                    <a href="https://optimizaum.com/" className="text-yellow-500 font-semibold ml-1">Optimizaum.com</a>
                </p>
            </div>
        </footer>
    );
};

export default Footer;
