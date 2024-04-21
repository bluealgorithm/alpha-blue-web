import React from "react";
import Nav from "../Components/Nav";
import Header from "../Components/Header";
// import About from "../Components/About";
// import Partners from "../Components/Partners";
import Contact from "../Components/Contact";
import FadeLeft from "../Components/Animation/FadeLeft";

const GetInvolved = () => {
  return (
    <div className="overflow-x-hidden">
      <FadeLeft>
        <Nav />
      </FadeLeft>
      <Header
        title="GET INVOLVED"
        content="Promoting sustainable human capital development in Africa through technology
"
        btn_txt="Contact Us"
        link="get-in-touch"
      />
      {/* <FadeIn>
        <Difference
          title="HOW TO GET INVOLVED"
          text1="Become a partner"
          text2="Become a volunteer"
          text3="Donate"
          img1={kcca}
          img2={scaleup}
          img3={state}
        />
      </FadeIn> */}
      <FadeLeft>
        <Contact />
      </FadeLeft>
    </div>
  );
};

export default GetInvolved;
