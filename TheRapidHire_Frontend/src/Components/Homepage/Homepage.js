import React from "react";
import Team from "../Team/Team";
import Header from "../Header/Header";
import Sliders from "../Sliders/Sliders";
import Story from "../Story/Story";
import LifeCycle from "../LifeCycle/LifyCycle";
import Features from "../Features/Features";
import Technology from "../Technology/Technology";
import Compony from "../Compony/Compony";
import Contact from "../Contact/Contact";
import Footer from "../Footer/Footer";
import Career from "../Career/Career";

const HomePage = () => {
  return (
    <div className="homepage">
      <Header />  
      <Sliders />
      <Story />
      <LifeCycle />
      <Technology />
      <Features />
      <Compony />
      <Team />
      {/* <Testimonial /> */}
      <Contact />
      <Footer />
    </div>
  );
};

export default HomePage;
