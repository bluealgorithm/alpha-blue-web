import { Link } from "react-router-dom";
import facebook from "../asset/images/facebook.png";
import twitter from "../asset/images/twitter.png";
import linkedin from "../asset/images/linkedin.png";

export default function Footer() {
  return (
    <footer className="bg-primary_blue-100">
      <div className="pt-[56px] px-[20px] md:px-[80px] text-white text-center md:text-left">
        <div className="block md:flex md:justify-between">
          <div className="info md:max-w-[455px] mb-[15px] md:mb-0 mt-[56px]">
            <div className="mb-[24px]">
              <h4 className="mb-[8px] font-[600] text-[24px]">Address</h4>
              <p
                className="font-[400] text-[16px]"
                style={{ lineHeight: "24px" }}
              >
                Block 2, Suit 1, 2, 3, 1st Floor Kalwa Plaza, Zaramaganda
                Roundabout, Jos, Plateau State, Nigeria.
              </p>
            </div>
            <div className="mb-[24px]">
              <h4 className="mb-[8px] font-[600] text-[24px]">Email</h4>
              <p
                className="font-[400] text-[16px]"
                style={{ lineHeight: "24px" }}
              >
                alphabluefoundationjos@gmail.com
              </p>
            </div>
            <div className="mb-[24px]">
              <h4 className="mb-[8px] font-[600] text-[24px]">Phone Number</h4>
              <p
                className="font-[400] text-[16px]"
                style={{ lineHeight: "24px" }}
              >
                (+234) 811 519 0900
              </p>
            </div>
          </div>
          <div className="link mt-[56px]">
            <h4 className="mb-[8px] font-[600] text-[24px]">Links</h4>
            <ul>
              <li
                className="font-[400] text-[16px] mb-[8px]"
                style={{ lineHeight: "24px" }}
              >
                <Link to="/about-us">About Us</Link>
              </li>
              <li
                className="font-[400] text-[16px] mb-[8px]"
                style={{ lineHeight: "24px" }}
              >
                <Link to="/get-involved">Get Involved</Link>
              </li>
              <li
                className="font-[400] text-[16px] mb-[8px]"
                style={{ lineHeight: "24px" }}
              >
                <Link to="/get-in-touch">Contact Us</Link>
              </li>
            </ul>
          </div>
          <div className="link mt-[56px] flex flex-col">
            <h4 className="mb-[8px] font-[600] text-[24px]">Follow us</h4>
            <ul className="flex space-x-8 mx-auto">
              <li
                className="font-[400] text-[16px] mb-[8px]"
                style={{ lineHeight: "24px" }}
              >
                <Link to="/about-us">
                  <img src={linkedin} />
                </Link>
              </li>
              <li
                className="font-[400] text-[16px] mb-[8px]"
                style={{ lineHeight: "24px" }}
              >
                <Link to="/about-us">
                  <img src={facebook} />
                </Link>
              </li>
              <li
                className="font-[400] text-[16px] mb-[8px]"
                style={{ lineHeight: "24px" }}
              >
                <Link to="/about-us">
                  <img src={twitter} />
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </div>
      <div className="w-full border mt-8 border-white/10" />
      <div className="copy md:h-[80px] bg-primary_blue-100 px-[15px] md:px-[80px] py-[10px] border-white text-center text-white">
        <p className="font-[400] text-[16px] mt-[16px]">
          Copyright &copy; {new Date().getFullYear()} All rights reserved |
          Alpha Blue Foundation Powered by Blue Algorithm Technologies Ltd
        </p>
      </div>
    </footer>
  );
}
