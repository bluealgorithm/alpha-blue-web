import React from "react";
import Nav from "../Components/Nav";
import Header from "../Components/Header";
import About from "../Components/About";
import Partners from "../Components/Partners";
import Contact from "../Components/Contact";
import FadeIn from "../Components/Animation/FadeIn";
import FadeLeft from "../Components/Animation/FadeLeft";
import Mission from "../Components/Mission";
import Vision from "../Components/Vision";

const Home = () => {
  return (
    <div className="overflow-x-hidden">
      <FadeLeft>
        <Nav />
      </FadeLeft>
      <Header
        title="Promoting sustainable human capital development in Africa through technology"
        btn_txt="Get Involved"
        link="get-involved"
      />
      <FadeIn>
        <About />
      </FadeIn>
      <Vision />
      <Mission />
      <FadeIn>
        <Partners />
      </FadeIn>
      <FadeLeft>
        <Contact />
      </FadeLeft>
    </div>
  );
};

export default Home;
