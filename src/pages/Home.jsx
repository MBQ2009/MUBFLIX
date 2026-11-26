import React from "react";
import Header from "../componets/Header";
import Footer from "../componets/Footer";
import Slider from "../componets/home/Slider";

import ComingSoon from "../componets/home/ComingSoon";
import NowShowing from "../componets/home/NowShowing";

const Home = () => {
  return (
    <div>
      <Slider />
      <NowShowing/> 
      <ComingSoon />
    </div>
  );
};

export default Home;
