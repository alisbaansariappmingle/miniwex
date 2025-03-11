import React from "react";

// import "../Pages/Home.css"
import Hero from "../Component/Hero";
import QuickEasySection from "../Component/QuickEasySection";
import BestOptionSection from "../Component/BestOptionSection"
const Home = () => {


    return (
        <div className="min-h-screen">

            <div className="font-sans text-gray-800">
                {/* <Header /> */}
                <Hero/>
                <QuickEasySection />
                <BestOptionSection />
            </div>

        </div>
    );
};

export default Home;
