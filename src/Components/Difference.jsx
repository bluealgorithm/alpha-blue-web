import React from "react";
import Card from "./Card";
import FadeDown from "./Animation/FadeDown";
import FadeUp from "./Animation/FadeUp";
const Difference = () => {
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
    <>
      <div className="container mx-auto">
        <h1 className="font-[600] text-[20px] md:text-[40px] text-center mt-[20px] md:mt-[56px] mb-[30px] md:mb-[40px]">
          We are making a difference
        </h1>
        <section className="flex flex-wrap">
          {programStats.map((stat) => (
            <div className="w-3/12 flex flex-col">
              <div className="p-6">
                <h3 className="text-5xl font-bold">
                  {stat.number.toLocaleString("en-US")}
                </h3>
                <p className="text-base font-medium">{stat.name}</p>
              </div>
            </div>
          ))}
        </section>
      </div>
    </>
  );
};

export default Difference;
