import React from "react";
import Nav from "../Components/Nav";
import Header from "../Components/Header";
import About from "../Components/About";
// import Mission_Vision from "../Components/Mission_Vision";
import Difference from "../Components/Difference";
import Partners from "../Components/Partners";
import Contact from "../Components/Contact";
import vision from "../asset/images/vision.png";
import mision_bnr from "../asset/images/mision_bnr.png";
import kcca from "../asset/images/difference_kcca.png";
import scaleup from "../asset/images/scaleup.png";
import state from "../asset/images/state.png";
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
      {/* <FadeLeft>
        <Mission_Vision
          title="OUR MISSION"
          content="Our mission is to empower Africans with digital tech skills that will promote a technologically thriving African society."
          img={vision}
        />
      </FadeLeft> */}
      {/* <FadeIn>
        <Mission_Vision
          title="OUR VISION"
          content="We envision an African society that is technologically developed, where poverty is at its minimal level and sustainable development, financial freedom, and economic prosperity."
          img={mision_bnr}
          second
        />
      </FadeIn> */}
      {/* <FadeLeft>
        <Difference />
      </FadeLeft> */}
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
