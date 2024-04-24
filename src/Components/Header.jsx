import React, { useRef, useState } from "react";
import { Link } from "react-router-dom";
import ChevronLeft from "../asset/icons/chevron-left";
import ChevronRight from "../asset/icons/chevron-right";
import { register } from "swiper/element/bundle";
import kccaCover from "../asset/images/kcca.jpg";
import herEquityCover from "../asset/images/her-equity.jpg";
import adcaCover from "../asset/images/adca.jpeg";
import alphaBlueCover from "../asset/images/alpha-blue.jpeg";
import talkTechCover from "../asset/images/talk-tech.jpeg";
import scaleUpCover from "../asset/images/scale-up.jpg";
import kitc from "../asset/images/kitc.jpg";

register();

const Header = () => {
  const slides = [
    {
      name: "Alpha Blue Foundation",
      tagline: "Innovation for Sustainable Growth in Africa",
      coverImage: alphaBlueCover,
    },
    {
      name: "Kids Code Club Africa (KCCA)",
      tagline: "Raising The Next African Digital Hero",
      coverImage: kccaCover,
    },
    {
      name: "Her Equity",
      tagline: "Bridging the Gender Gap in Tech",
      coverImage: herEquityCover,
    },
    {
      name: "Kids in Tech Conference and Hackathon",
      tagline: "Where Imagination Meets Innovation",
      coverImage: kitc,
    },
    {
      name: "African Digital Conference and Awards (ADCA)",
      tagline: "Recognizing African Tech Excellence",
      coverImage: adcaCover,
    },
    {
      name: "Scale Up Africa",
      tagline:
        "Empowering African Youths For Technology Careers And Entrepreneurship",
      coverImage: scaleUpCover,
    },
    {
      name: "Talk Tech Africa Magazine (TTM)",
      tagline: "Telling The African Digital Story",
      coverImage: talkTechCover,
      position: "center",
    },
  ];

  const swiperRef = useRef(null);

  return (
    <swiper-container loop="true" ref={swiperRef} autoplay-delay="20000">
      {slides.map((slide) => (
        <swiper-slide key={slide.name}>
          <div
            style={{
              backgroundImage: `linear-gradient(to right, rgb(18 32 105), rgba(0, 0, 0, 0.5)), url(${slide.coverImage})`,
              backgroundSize: "cover",
              backgroundPosition: slide.position ? "center" : "top",
              backgroundRepeat: "no-repeat",
            }}
            className={`flex relative items-center justify-center w-[calc(100vw-24px)] md:w-[calc(100vw-120px)] px-5 mx-auto rounded-xl mb-5 mt-1 min-h-[calc(100vh-80px)] text-white text-center`}
          >
            <button
              onClick={() => swiperRef.current.swiper.slidePrev()}
              className="flex items-center justify-center text-white bg-black/50 rounded-full p-4"
            >
              <ChevronLeft />
            </button>
            <div className="w-full px-8 flex flex-col items-start">
              <span className="text-base font-medium bg-white/5 backdrop-blur rounded-full px-6 py-1">
                {slide.name}
              </span>
              <h1 className="text-5xl max-w-3xl leading-tight font-bold mb-10 mt-2 text-left">
                {slide.tagline}
              </h1>

              <Link
                to="get-in-touch"
                className="px-10 py-4 font-semibold text-xl bg-primary_blue-200 text-white duration-500"
              >
                Get involved
              </Link>
            </div>

            <button
              onClick={() => swiperRef.current.swiper.slideNext()}
              className="flex items-center justify-center text-white bg-black/50 rounded-full p-4"
            >
              <ChevronRight />
            </button>
          </div>
        </swiper-slide>
      ))}
    </swiper-container>
  );
};

export default Header;
