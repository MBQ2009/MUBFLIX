import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./pages/Home";

import NowShowing from "./pages/NowShowingSam";
import ComingSoon from "./pages/ComingSoonSam";
import Header from "./componets/Header";
import Footer from "./componets/Footer";

const App = () => {
  return (
    <div>
      <BrowserRouter>
      <Header/>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/nowshowingsam" element={<NowShowing/>} />
          <Route path='/comingsoonsam' element={<ComingSoon/>} />




        </Routes>
        <Footer/>
      </BrowserRouter>
    </div>
  );
};

export default App;
