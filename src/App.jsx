import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./pages/Home";

import NowShowing from "./pages/NowShowingSam";
import ComingSoon from "./pages/ComingSoonSam";
import Header from "./componets/Header";
import Footer from "./componets/Footer";
import CinemaLocation from "./footerFils/CinemaLocation";
import ShowTime from "./footerFils/ShowTime";
import PageBanna from "./componets/PageBanner";
import AboutUs from "./footerFils/AboutUs";
import Movies from "./footerFils/Movies";
import MovieDetails from "./footerFils/MovieDetails";
import BookTickets from "./footerFils/BookTickets";
import Services from "./footerFils/Services";

const App = () => {
  return (
    <div>
      <BrowserRouter>
      <Header/>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/nowshowingsam" element={<NowShowing/>} />
          <Route path='/comingsoonsam' element={<ComingSoon/>} />
          <Route path="/cinemalocation" element={<CinemaLocation/>}/>
          <Route path="/showtime" element={<ShowTime/>}/>
          <Route path="/pagebanner" element={<PageBanna/>}/>
          <Route path="/about us" element={<AboutUs/>}/>    
          <Route path="/movies" element={<Movies/>}/> 
          <Route path="/movie details" element={<MovieDetails/>}/>
          <Route path="/book tickets" element={<BookTickets/>}/>
          <Route path="services" element={<Services/>}/>

        </Routes>
        <Footer/>
      </BrowserRouter>
    </div>
  );
};

export default App;
