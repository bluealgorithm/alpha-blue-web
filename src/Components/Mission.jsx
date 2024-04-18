import React from "react";
import sideImage from "../asset/images/contact_bnr.png";

export default function Mission() {
  return (
    <div className="h-[50vh] items-center flex flex-wrap">
      <p className="w-6/12 text-2xl px-10">
        We are on a mission to empower Africans with technological and
        entrepreneurial expertise, driving economic and human capital
        development across the continent
      </p>
      <img className="object-cover h-full w-6/12" src={sideImage} />
    </div>
  );
}
