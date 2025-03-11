import React from "react";
import { Route, Routes, BrowserRouter } from "react-router-dom";
import Header from "./Include/Header";
import Footer from "./Include/Footer";

import Home from "./Pages/Home";

const App = () => {
  return (
    <>
      <section className="">
        <div>
          <Header />
        </div>
        <BrowserRouter>
          <div>
            <Routes>              
              <Route path="/" element={<Home/>}/>
            </Routes>
          </div>
        </BrowserRouter>
        <div>
          <Footer/>
        </div>
      </section>
      
    </>
  );
};

export default App;
