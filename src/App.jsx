import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./pages/Home";

import NowShowing from "./pages/NowShowingSam";
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
import CommingSoonSam from "./footerFils/CommingSoonSam";
import ContactUs from "./pages/ContactUs";

const App = () => {
  return (
    <div>
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/nowshowingsam" element={<NowShowing />} />
          <Route path="/comingsoonsam" element={<CommingSoonSam />} />
          <Route path="/cinemalocation" element={<CinemaLocation />} />
          <Route path="/showtime" element={<ShowTime />} />
          <Route path="/pagebanner" element={<PageBanna />} />
          <Route path="/about us" element={<AboutUs />} />
          <Route path="/movies" element={<Movies />} />
          <Route path="/movie details" element={<MovieDetails />} />
          <Route path="/book tickets" element={<BookTickets />} />
          <Route path="services" element={<Services />} />
          <Route path="contactus" element={<ContactUs />} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </div>
  );
};

export default App;
