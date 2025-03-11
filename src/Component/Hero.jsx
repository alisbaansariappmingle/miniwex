import { useEffect, useState, useRef } from 'react'
import vdo from "../assets/video.mp4";
import { BsWhatsapp } from "react-icons/bs";
import React from "react";
import { IoCreateOutline } from "react-icons/io5";
import { LuPhoneCall } from "react-icons/lu";
import men from "../assets/men.jpg";
import gsap from 'gsap';
import backgroundImage from "../assets/cardbg.jpg";

const Hero = () => {
    const [isOpen, setIsOpen] = useState(false);
    const handlePay = () => {
        setIsOpen(true);
    };

    const handleClosePay = () => {
        setIsOpen(false);
    };
    const container = useRef(null)
    useEffect(() => {
        gsap.from(container.current, {
            y: -20, // Start position (slightly above)

            duration: 1.5,
            ease: "power2.out",
        });

        // Auto up-down movement (yoyo effect)
        gsap.to(container.current, {
            y: 20, // Moves down by 20px
            duration: 2,
            repeat: -1, // Infinite animation
            yoyo: true, // Moves up and down
            ease: "power1.inOut",
        });
    }, []);
    return (
        <section className="relative w-full md:h-auto h-[190vh] flex overflow-hidden">
            {/* Full-width background image */}
            <div className="absolute inset-0 w-full   bg-gray-100">
                <video
                    autoPlay
                    loop
                    muted
                    playsInline
                    className="w-full h-full object-cover"
                >
                    <source src={vdo} type="video/mp4" />
                    Your browser does not support the video tag.
                </video>
            </div>

            {/* Content container */}
            <div className="px-0 md:px-6  pt-32 md:pt-32 relative z-10">
                <div className="flex-col md:flex-row items-center gap-x-15">
                    {/* Left side: Content card */}
                    <div className='max-sm:flex max-sm:justify-center max-sm:items-center '>
                        <div className="bg-cream-50 rounded-3xl p-8 md:p-12 max-w-[89%] md:max-w-3xl shadow-lg bg-amber-50">
                            <h1 className="text-4xl md:text-4xl font-bold text-gray-900 mb-6 leading-tight">
                                Your Business Your Identity - Live in Just 2 Minute
                            </h1>        
                            <p className="text-sm text-olive-700 mb-5 text-justify">
                                Get Your Own Mini Website, Digital Visiting Card & Payment Collection – Instantly!
                                <br />In today’s fast-paced world, having an online presence is a must for every business. But what if you could get your own mini website, digital visiting card, and payment collection system* – all within just 2 minutes? No coding, no technical skills, no hassle – just fill in your details and go live instantly!
                            </p>

                            <div className="flex flex-wrap gap-4 mb-10 ">
                                <a href="#" className=" md:text-sm text-[10px] whitespace-nowrap bg-yellow-400 hover:bg-yellow-500 text-gray-900 font-medium px-8 py-3 rounded-full transition duration-300">
                                    Create Your Mini Website and Visiting Card
                                </a>
                                {/* <a href="#" className="bg-green-50 border border-green-200 hover:bg-green-100 text-gray-800 font-medium px-8 py-3 rounded-full transition duration-300">
                        Our Services
                    </a> */}
                            </div>

                            <div className="grid grid-cols-2 md:grid-cols-3 gap-6 md:gap-5">
                                {["Services", "Gallery", "Payment Collection", "Digital Visiting Card", "Lead Form", "Address", "Call Button", "Whatsapp Button", "Social Media"].map((text, index) => (
                                    <div key={index} className="flex items-center gap-2 ">
                                        <div className="w-6 h-6 bg-green-600 rounded-full flex items-center justify-center">
                                            <svg className="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                                            </svg>
                                        </div>
                                        <span className="text-gray-700 text-[13px]">{text}</span>
                                    </div>
                                ))}
                            </div>
                        </div>

                        {/* Right side - Image */}
                        <div className="rounded-3xl flex mt-10 md:mt-5 justify-center p-5 md:p-5 pl-2  md:relative absolute md:bottom-0 bottom-0 md:right-5 right-12">
                            <div className="flex flex-col  md:flex-row gap-2  w-full">
                                {/* Call & WhatsApp Buttons in a Single Row on Mobile */}
                                <div className="flex flex-row sm:flex-row gap-6 sm:justify-center items-center w-full">
                                    <a href="tel:+923055356766" className="w-full sm:w-auto">
                                        <button className="text-xs flex items-center justify-center w-full sm:w-auto bg-orange-500 text-white px-4 py-3 rounded-full font-medium hover:shadow-lg transition duration-300">
                                            <LuPhoneCall size={20} className="mr-2" />
                                            Call Us
                                        </button>
                                    </a>
                                    <a href="https://wa.me/923055356766" target="_blank" rel="noopener noreferrer" className="w-full sm:w-auto">
                                        <button className="text-sm flex items-center justify-center w-full sm:w-auto bg-green-500 text-white px-6 py-3 rounded-full font-medium hover:shadow-lg transition duration-300 whitespace-nowrap">
                                            <BsWhatsapp size={20} className="mr-2" />
                                            WhatsApp Us 
                                        </button>
                                    </a>
                                </div>

                                {/* Create Your Mini Website Button in a Separate Row on Mobile */}
                                <div className="flex md:justify-start justify-center w-full">
                                    <a href="https://miniwebx.com/" className="w-full sm:w-auto">
                                        <button className="flex items-center justify-center w-full sm:w-auto bg-blue-500 text-white px-6 py-3 rounded-full font-medium hover:shadow-lg transition duration-300">
                                            <IoCreateOutline size={20} className="mr-2" />
                                            Create Your Mini Website
                                        </button>
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="flex rounded-3xl items-center -left-[50px] p-3 ">
                        <div className='pr-4 left-[0px] md:left-[-10px]'>
                            <div ref={container} className="bg-white static right-[-47%] md:absolute top-[250px] flex items-center  rounded-[30px] h-[230px] w-full md:w-[45%] shadow-lg p-6 "
                                style={{ background: `url(${backgroundImage})`, backgroundSize: "cover" }}>
                                <div className=" text-gray-700 w-full flex">
                                    <div className='text-sm'>
                                        <h1 className="text-md font-bold text-[#FF6900]">SRIRAM SINGH</h1>
                                        <h5 className="text-[12px] font-bold text-[#FF6900]">CEO & FOUNDER</h5>
                                        <div className="w-[79%] mt-[5px] h-[1px] bg-orange-500"></div>
                                        <p className="mt-[15px]">📞 +91 6203689042</p>
                                        <p className="mt-[8px]">📧 hello@optimizaum.com</p>
                                        <p className="mt-[8px] whitespace-nowrap">🌐 miniwebx.com</p>
                                        <p className="mt-[8px] ">📍Basement-2, A-40 Noida Sector-4, Uttar Pradesh 201301</p>
                                    </div>
                                    <div className="flex flex-col items-center justify-center">
                                        <div className="w-26 h-26 rounded-full -mr-3 ">
                                            <img src={men} alt="company name" className="border-[#FF6900] rounded-full w-full h-full object-cover" />
                                        </div>
                                        <h1 className=" text-center mt-[20px] text-[18px] ml-1 font-semibold text-[#FF6900]">MiniwebX</h1>
                                    </div>
                                </div>
                            </div>
                            {isOpen && <PayNow onPayClose={handleClosePay} />}
                        </div>
                    </div>
                </div>
            </div>



        </section >
    )
}

export default Hero