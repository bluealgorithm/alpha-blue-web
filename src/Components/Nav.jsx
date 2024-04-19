import React, { useState } from "react";
import logo from "../asset/images/logo.png";
import { Link } from "react-router-dom";
import { GrMenu } from "react-icons/gr";
import { MdKeyboardArrowDown } from "react-icons/md";
// import { FaArrowDown} from 'react-icons/fa'
import facebook from "../asset/images/facebook.png";
import linkedin from "../asset/images/linkedin.png";
import twitter from "../asset/images/twitter.png";
const Nav = () => {
  const [menu, setMenu] = useState(false);
  const [dropDown, setDropDown] = useState(false);
  const [initiativeDropDown, setinitiativeDropDown] = useState(false);
  const handleMenu = () => {
    if (menu) {
      setMenu(false);
    } else {
      setMenu(true);
    }
  };
  const handleInitiativeDropDown = () => {
    if (initiativeDropDown) {
      setinitiativeDropDown(false);
    } else {
      setinitiativeDropDown(true);
    }
  };
  const handleDropDown = () => {
    if (dropDown) {
      setDropDown(false);
    } else {
      setDropDown(true);
    }
    console.log(dropDown);
  };
  return (
    <nav>
      {/* <div className="top flex justify-end h-[56px] items-center font-primary bg-primary_blue-100 pr-[60px]">
        <img src={facebook} alt="facebook_icon" className="h-[24px] w-[24px]" />
        <img
          src={twitter}
          alt="twitter_icon"
          className="mx-[16px] h-[24px] w-[24px]"
        />
        <img src={linkedin} alt="linkedin_icon" className="h-[24px] w-[24px]" />
      </div> */}
      <div className="py-3 md:px-[60px] px-[18px] bg-white max-h-[104px] w-screen mb-1 md:flex md:items-center md:justify-between">
        <div className="flex justify-between items-center">
          <Link className="hover:text-text_primary duration-500" to="/">
            <img src={logo} className=" h-[44.16px]" alt="alpha blue logo" />
          </Link>
          <span className="text-3xl cursor-pointer mx-3 md:hidden block">
            <GrMenu onClick={handleMenu} />
          </span>
        </div>

        <ul
          className={`${
            menu ? "top-[160px] opacity-100 pb-6 z-10 h-screen" : "hidden"
          } md:justify-between mx-auto text-base md:flex md:items-center md:static absolute md:bg-transparent bg-white w-full left-0 md:w-auto md:py-0 py-4 md:pl-0 pl-7 font-normal`}
        >
          <li className="md:ml-[45px] md:mr-[27px] my-3 md:my-0">
            <Link className="hover:text-text_primary duration-500 " to="/">
              Home
            </Link>
          </li>
          <li className="md:mr-[27px] my-3 md:my-0">
            <Link
              className="hover:text-text_primary duration-500"
              to="/about-us"
            >
              About Us
            </Link>
          </li>
          <li
            className="md:mr-[30px] my-3 md:my-0 relative "
            onMouseEnter={handleInitiativeDropDown}
          >
            <span className="cursor-pointer flex items-center  ">
              <span className="mr-2">Our Initiative </span>{" "}
              <MdKeyboardArrowDown />
            </span>
            <ul
              className={`${
                initiativeDropDown
                  ? "top-[25px] opacity-100 pb-6 z-20 "
                  : "hidden"
              } absolute  bg-white left-0 py-4  px-4 font-normal min-w-[150px]`}
            >
              <li className="mb-3">
                <Link
                  className="hover:text-primary_blue-100 duration-500"
                  to="/our-initiative"
                >
                  Our Initiative
                </Link>
              </li>
              <li className="mb-3">
                <Link
                  className="hover:text-primary_blue-100 duration-500"
                  to="/kcca"
                >
                  KCCA
                </Link>
              </li>
              <li className="mb-3">
                <Link
                  className="hover:text-primary_blue-200 duration-500"
                  to="/scale-up-africa"
                >
                  SUA
                </Link>
              </li>
            </ul>
          </li>
          <li
            className="md: mr-[30px] my-3 md:my-0 relative "
            onMouseEnter={handleDropDown}
          >
            <span className="cursor-pointer flex items-center  ">
              <span className="mr-3">Get Involved</span> <MdKeyboardArrowDown />
            </span>
            <ul
              className={`${
                dropDown ? "top-[30px] opacity-100 pb-6 z-20 " : "hidden"
              } absolute  bg-white left-0 py-4  px-4 font-normal min-w-[150px]`}
            >
              <li className="mb-3">
                <Link
                  className="hover:text-primary_blue-200 duration-500"
                  to="/partner"
                >
                  Partner
                </Link>
              </li>
              <li className="mb-3">
                <Link
                  className="hover:text-primary_blue-200 duration-500"
                  to="/volunteer"
                >
                  Volunteer
                </Link>
              </li>
            </ul>
          </li>
        </ul>

        <ul>
          <li>
            <Link
              to="get-in-touch"
              className="px-8 py-3 font-medium text-base hover:bg-primary_blue-200 bg-primary_blue-100 text-white duration-500"
            >
              Contact Us
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Nav;
