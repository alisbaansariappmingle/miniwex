import React from 'react'
import { FaAmazonPay } from "react-icons/fa";
import { IoCreateOutline } from "react-icons/io5";
import { FiChrome } from "react-icons/fi";




const QuickEasySection = () => {
    const steps = [
        {
            title: "Pay 500",
            description: "Get started with a mini-website and digital visiting card instantly! Simply fill in your details, make a small payment, and secure your online presence effortlessly.",
            icon: <FaAmazonPay className="w-14 h-14 text-green-600" />,
        },
        {
            title: "Create",
            description: "Our system will automatically generate a stunning mini-website and a professional digital visiting card tailored to your details—ready to share and impress!",
            icon: <IoCreateOutline className="w-12 h-12 text-green-600" />,
        },
        {
            title: "Live",
            description: "Your digital identity is now live! Share your website and visiting card with clients, customers, and partners through a simple link or QR code.",
            icon: <FiChrome className="w-12 h-12 text-green-600" />,
        },
    ];
    return (
        <section className="text-center py-16 bg-white">
            <h4 className="text-sm font-semibold tracking-wide text-gray-600 ">
                HOW IT WORKS
            </h4>
            <h2 className="text-3xl font-bold text-black mt-2">Quick and Easy</h2>
            <div className="flex flex-col md:flex-row justify-center items-center gap-12 mt-10">
                {steps.map((step, index) => (
                    <div key={index} className="flex flex-col items-center w-full md:w-1/3">
                        <div className="relative flex items-center justify-center w-32 h-32 bg-green-100 rounded-full">
                            {step.icon}
                        </div>
                        <h3 className="mt-4 text-xl font-semibold">{step.title}</h3>
                        <p className="mt-2 text-gray-600 text-sm w-3/4 ">{step.description}</p>
                    </div>
                ))}
            </div>
        </section>
    )
}

export default QuickEasySection