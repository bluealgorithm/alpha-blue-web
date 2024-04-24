import React from "react";
import { Link } from "react-router-dom";
import Nav from "../Components/Nav";
import coverImage from "../asset/images/scale-up.jpg";
import Contact from "../Components/Contact";
import Partners from "../Components/Partners";
import PageHeader from "../Components/PageHeader";
import Footer from "../Components/Footer";

const ScaleUpAfrica = () => {
  return (
    <>
      <Nav />
      <PageHeader
        title="Scale Up Africa"
        tagline="Empowering African Youths For Technology Careers And Entrepreneurship"
        coverImage={coverImage}
      />
      <section className="md:h-[408px] px-[20px] md:px-[80px] py-[56px] bg-white text-black">
        <h1 className="text-[20px] md:text-[40px] font-[600] leading-10 mb-[24px]">
          About Scale Up Africa
        </h1>
        <p className="mb-[16px]">
          Scale Up Africa is an initiative to empower Africans with digital tech
          skills, entrepreneurial and soft skills they need to transition into
          the technology industry, pilot their careers, and launch their
          startups as well as take advantage of the wide range of job
          opportunities accessible globally.{" "}
        </p>
        <p>
          Our core objective is to ensure that African youths desist from using
          the internet to promote and perpetuate fraudulent activities. By
          providing them with the necessary digital skills, we believe Africans
          can contribute to the growth of the technology ecosystem, identity,
          analyze gaps in various industries around the world, and use their
          skills to propose technological solutions.
        </p>
      </section>

      <section className="md:h-[744px] bg-primary_blue-100 text-white px-[20px] md:px-[80px] py-[56px]">
        <h1 className="text-[20px] md:text-[40px] font-[600] leading-10 my-[24px]">
          OUR GOALS
        </h1>
        <ul className="ml-[15px]" style={{ listStyleType: "circle" }}>
          <li className="mt-[16px] font-[400] text-[18px] md:text-[24px] leading-[32px]">
            <span className="mr-2">&#9654;</span>Equip African youths with the
            skills they need to become problem solvers and manufacturers of the
            continent’s technology.
          </li>
          <li className="mt-[16px] font-[400] text-[18px] md:text-[24px] leading-[32px]">
            <span className="mr-2">&#9654;</span>To equip youths with the skills
            that enable them to refrain from using the internet to promote and
            perpetuate fraudulent activities.
          </li>
          <li className="mt-[16px] font-[400] text-[18px] md:text-[24px] leading-[32px]">
            <span className="mr-2">&#9654;</span>To equip participants with
            skills that would qualify them for better job opportunities.
          </li>
          <li className="mt-[16px] font-[400] text-[18px] md:text-[24px] leading-[32px]">
            <span className="mr-2">&#9654;</span>To bridge the existing
            technological and economic growth gap.
          </li>
        </ul>
        <h1 className="mt-[40px] mb-[24px] text-[20px] md:text-[40px] font-[600] leading-10">
          CORE BENEFITS FOR PARTICIPANTS
        </h1>
        <ul className="ml-[15px] mb-[24px]" style={{ listStyleType: "circle" }}>
          <li className="mt-[16px] font-[400] text-[18px] md:text-[24px] leading-[32px]">
            <span className="mr-2">&#9654;</span>Access to 5 months internship
            opportunity.
          </li>
          <li className="mt-[16px] font-[400] text-[18px] md:text-[24px] leading-[32px]">
            <span className="mr-2">&#9654;</span>Seven months of intense
            capacity building in digital/software skill development and
            entrepreneurship.
          </li>
          <li className="mt-[16px] font-[400] text-[18px] md:text-[24px] leading-[32px]">
            <span className="mr-2">&#9654;</span>Internationally recognized
            certification.
          </li>
        </ul>
      </section>
      {/* <section className="pb-[30px] md:pb-[80px]">
        <h1 className="text-center md:text-left md:ml-[70px] font-[600] text-[20px] md:text-[40px] mt-[20px] md:mt-[56px] mb-[26px]">
          SCALE UP AFRICA TESTIMONIALS
        </h1> */}
      {/* <Slider /> */}
      {/* </section> */}
      {/* <section className=" pb-[20px] md:pb-[80px]"> */}
      {/* <h1 className="text-center md:text-left md:ml-[70px] font-[600] text-[20px] md:text-[40px] mb-[26px]">
          SCALE UP AFRICA GALLERY
        </h1> */}
      {/* <Slider gallery /> */}
      {/* </section> */}
      <Partners />
      <Contact />
      <Footer />
    </>
  );
};

export default ScaleUpAfrica;
