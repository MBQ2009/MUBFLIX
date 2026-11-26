import React from "react";
import PageBanna from "../componets/PageBanner";
import OurMission from "./about/OurMission";
import OurPromise from "./about/OurPromise";
import OurStory from "./about/OurStory";
import WhoWeAre from "./about/WhoWeAre";
import WhyChooseUs from "./about/WhyChooseUs";
import OurVision from "./about/OurVision";
import { Col, Row } from "react-bootstrap";

const AboutUs = () => {
  return (
    <div>
      <PageBanna
        title="About Us"
        subtitle="Discover the magic of cinema"
        backgroundImage="https://images.unsplash.com/photo-1489599849927-2ee91cede3ba"
      />

      
      <WhoWeAre/>

<OurStory />
 
<div className="about-background">
  <Row className="g-3">
    <Col md={6}>
      <OurVision />
    </Col>

    <Col md={6}>
      <OurMission />
    </Col>
  </Row>
</div>


 <WhyChooseUs/>



      <OurPromise/>


      




     
    </div>
  );
};

export default AboutUs;
