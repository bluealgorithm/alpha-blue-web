import React from "react";

const WhoWeAre = () => {
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
    <div className="mt-12 py-14 px-8 flex flex-col justify-center items-center mx-auto bg-gradient-to-r from-primary_blue-200 to-primary_blue-100">
      <div className="max-w-5xl">
        <div className="space-y-8">
          <p className="text-xl font-medium text-white leading-normal">
            Alpha Blue Foundation (ABF) is a non-profit organization dedicated
            to driving sustainable development and economic growth across the
            African continent. Established with a vision for an economically
            empowered Africa propelled by technology, innovation, and
            entrepreneurial excellence.
          </p>

          <p className="text-xl font-medium text-white leading-normal">
            The Alpha Blue Foundation stands as a beacon of hope for Africa's
            social and economic development. ABF focuses on preparing
            individuals for the future of work, where technology plays a crucial
            role, and empowering them to thrive in the fast-paced digital
            landscape.
          </p>
        </div>

        <section className="flex flex-wrap mt-10 rounded-2xl bg-black/20">
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
};

export default WhoWeAre;
