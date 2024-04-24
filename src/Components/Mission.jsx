import React from "react";
import coverImage from "../asset/images/our-mission.jpg";

export default function Mission() {
  const programStats = [
    {
      name: "KCCA Participants",
      number: 2000,
    },
    {
      name: "Her Equity Participants",
      number: 500,
    },
    {
      name: "Scale Up Africa Participants",
      number: 100,
    },
    {
      name: "States Reached",
      number: 5,
    },
  ];

  return (
    <div className="min-h-[70vh] px-8 py-10 mt-12 flex flex-col justify-center items-center mx-auto bg-gradient-to-r from-primary_blue-200 to-primary_blue-100">
      <div className="max-w-5xl">
        <p className="text-3xl font-bold text-white leading-normal">
          We are on a mission to empower Africans with technological and
          entrepreneurial expertise, driving economic and human capital
          development across the continent
        </p>

        <section className="flex flex-wrap mt-8 rounded-2xl bg-black/20">
          {programStats.map((stat) => (
            <div className="w-3/12 flex flex-col">
              <div className="p-6 mx-auto text-center">
                <h3 className="text-5xl font-bold text-white">
                  {stat.number.toLocaleString("en-US")}
                </h3>
                <p className="text-sm mt-1 font-semibold text-gray-300">
                  {stat.name}
                </p>
              </div>
            </div>
          ))}
        </section>
      </div>
    </div>
  );
}
