import React from 'react'
import { SiWhatsapp } from "react-icons/si";
import man from "../assets/man.jpg";

const BestOptionSection = () => {
  return (
    <section className="bg-[#f5f7ed] px-6 py-12 md:px-16 md:py-16 rounded-3xl">
            <div className="max-w-6xl mx-auto grid md:grid-cols-2 items-center gap-8">
                {/* Left Content */}
                <div>
                    <h4 className="text-sm  font-semibold text-gray-700 uppercase tracking-wider md:text-start text-center">
                        Who We Are <span className="text-green-600">〃</span>
                    </h4>
                    <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mt-2 md:text-start text-center">
                        About Us
                    </h2>
                    <p className="text-gray-600 mt-4 text-lg text-justify">
                        Welcome to <span className='font-bold'>MiniWeb X</span>, where creating a mini-website and digital visiting card takes just 5 minutes! Our platform is designed to help individuals, entrepreneurs, and businesses establish their online presence effortlessly. No coding, no technical skills—just fill in your details, and your website & digital card will be ready instantly!
                    </p>
                    <hr className="my-6 border-gray-300" />

                    {/* Bullet Points */}
                    <div className="space-y-3 ">
                        <div className="flex items-start gap-3">
                            <span className="text-green-600 text-xl">✔</span>
                            <p className="text-gray-700 text-lg ">
                                Fast & Affordable – A budget-friendly way to get online quickly.
                            </p>
                        </div>
                        <div className="flex items-start gap-3">
                            <span className="text-green-600 text-xl">✔</span>
                            <p className="text-gray-700 text-lg">
                                SEO & Sharing Ready – Easily share via QR codes, links, or WhatsApp.
                            </p>
                        </div>

                        <div className="flex items-start gap-3">
                            <span className="text-green-600 text-xl">✔</span>
                            <p className="text-gray-700 text-lg">
                                Mobile-Optimized – Looks great on all devices.
                            </p>
                        </div>
                        <div className="flex items-start gap-3">
                            <span className="text-green-600 text-xl">✔</span>
                            <p className="text-gray-700 text-lg">
                                Professional Templates – Choose from sleek and modern designs.
                            </p>
                        </div>
                        <div className="flex items-start gap-3">
                            <span className="text-green-600 text-xl">✔</span>
                            <p className="text-gray-700 text-lg">
                                No Coding Required – Simple and user-friendly platform for everyone.
                            </p>
                        </div>
                        <div className="flex items-start gap-3">
                            <span className="text-green-600 text-xl">✔</span>
                            <p className="text-gray-700 text-lg">
                                Instant Website & Digital Card – Get your digital identity in just 5 minutes.
                            </p>
                        </div>
                    </div>

                    {/* Learn More Button */}
                    <a href="https://wa.link/4hr32x justify-center text-center">
                        <button className="flex text-center mt-6 bg-green-600 hover:bg-yellow-500 text-black font-semibold py-3 px-6 rounded-full text-lg shadow-md">
                            <SiWhatsapp className='mt-1 mx-2 text-white' /> <p className='text-white'>Connect at Whatsapp</p>
                        </button>
                    </a>
                </div>
                {/* Right Image */}
                <div className="relative -order-1 md:order-1">
                    <img
                        src={man}
                        alt="Cleaning team"
                        className="rounded-3xl shadow-lg"
                    />
                </div>
            </div>
        </section>
  )
}

export default BestOptionSection