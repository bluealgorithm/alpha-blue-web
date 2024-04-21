import React from "react";
// import sideImage from "../asset/images/contact_bnr.png";
import { Link } from "react-router-dom";

export default function Vision() {
  return (
    <div
      className={`min-h-[60vh] container bg-cover bg-center bg-no-repeat bg-[url("/public/asset/images/vision.jpg")] mx-auto rounded-3xl`}
    >
      <div className="min-h-[60vh] bg-gradient-to-r from-primary_blue-100 via-primary_blue-100/80 to-black/10 px-5 py-10 mt-14 rounded-3xl flex flex-col w-full">
        <div className="max-w-4xl p-10 flex flex-col my-auto">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="currentColor"
            className="inline-block w-24 h-24 rotate-180 text-white/10"
            viewBox="0 0 975.036 975.036"
          >
            <path d="M925.036 57.197h-304c-27.6 0-50 22.4-50 50v304c0 27.601 22.4 50 50 50h145.5c-1.9 79.601-20.4 143.3-55.4 191.2-27.6 37.8-69.399 69.1-125.3 93.8-25.7 11.3-36.8 41.7-24.8 67.101l36 76c11.6 24.399 40.3 35.1 65.1 24.399 66.2-28.6 122.101-64.8 167.7-108.8 55.601-53.7 93.7-114.3 114.3-181.9 20.601-67.6 30.9-159.8 30.9-276.8v-239c0-27.599-22.401-50-50-50zM106.036 913.497c65.4-28.5 121-64.699 166.9-108.6 56.1-53.7 94.4-114.1 115-181.2 20.6-67.1 30.899-159.6 30.899-277.5v-239c0-27.6-22.399-50-50-50h-304c-27.6 0-50 22.4-50 50v304c0 27.601 22.4 50 50 50h145.5c-1.9 79.601-20.4 143.3-55.4 191.2-27.6 37.8-69.4 69.1-125.3 93.8-25.7 11.3-36.8 41.7-24.8 67.101l35.9 75.8c11.601 24.399 40.501 35.2 65.301 24.399z" />
          </svg>

          <p className="text-3xl font-semibold text-white -mt-12 leading-snug">
            We envision an economically empowered Africa driven by the forces of
            technology, innovation, and entrepreneurial prowess
          </p>
          <Link
            to="get-in-touch"
            className="w-fit mt-8 px-10 py-4 font-semibold text-xl bg-primary_blue-200 text-white duration-500"
          >
            Get involved
          </Link>
        </div>
      </div>
    </div>
  );
}
