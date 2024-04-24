import React from "react";

const About = () => {
  return (
    <>
      <div className="w-full mt-16 text-white bg-primary_blue-100">
        <div className="container mx-auto py-24">
          <p className="font-semibold text-4xl leading-relaxed">
            <span className="rounded-xl px-2 py-1">
              Alpha Blue Foundation (ABF)
            </span>{" "}
            is a non-profit organization dedicated to driving{" "}
            <span className="bg-[#FAED34] text-black rounded-xl px-2 py-1">
              sustainable development and economic growth
            </span>{" "}
            across the African continent. Established with a vision for an
            economically empowered Africa propelled by technology, innovation,
            and{" "}
            <span className="bg-[#FAED34] text-black rounded-xl px-2 py-1">
              entrepreneurial excellence
            </span>
          </p>

          <button className="font-medium text-lg transition-all bg-transparent border hover:text-black hover:bg-white border-white mt-14 px-10 py-3">
            Read More
          </button>
        </div>
      </div>
    </>
  );
};

export default About;
