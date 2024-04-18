import React, { useState } from "react";
import { Link } from "react-router-dom";
import ChevronLeft from "../asset/icons/chevron-left";
import ChevronRight from "../asset/icons/chevron-right";
import { register } from "swiper/element/bundle";

register();

const Header = () => {
  return (
    <swiper-container loop="true" autoplay-delay="5000">
      {[0, 1, 2, 3, 4].map((i) => (
        <swiper-slide>
          <div className="flex items-center head_bg justify-center w-[calc(100vw-120px)] px-5 mx-auto rounded-xl mb-5 mt-6 h-[calc(100vh-80px)] text-white text-center">
            <button
              onClick={() => 1}
              className="flex items-center justify-center text-white bg-black/50 rounded-full p-4"
            >
              <ChevronLeft />
            </button>
            <div className="w-full px-10 flex flex-col items-start">
              <h1 className="text-5xl leading-tight font-bold mb-10 text-left">
                Promoting sustainable human capital development in Africa
                through technology
              </h1>

              <Link
                to="get-in-touch"
                className="px-10 py-4 font-semibold text-xl hover:bg-primary_blue-200 bg-primary_blue-100 text-white duration-500"
              >
                Get involved
              </Link>
            </div>

            <button className="flex items-center justify-center text-white bg-black/50 rounded-full p-4">
              <ChevronRight />
            </button>
          </div>
        </swiper-slide>
      ))}
    </swiper-container>
  );
};

export default Header;
