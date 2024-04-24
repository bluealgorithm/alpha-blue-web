import React from "react";
import peakfieldLogo from "../asset/images/peakfield.png";
import platecLogo from "../asset/images/platec.png";
import krpLogo from "../asset/images/krp.png";
import afrilabsLogo from "../asset/images/afrilabs.png";
import sosLogo from "../asset/images/sos.png";
import westgateLogo from "../asset/images/westgate.png";
const Partners = () => {
  const partners = [
    {
      name: "Afrilabs",
      logo: afrilabsLogo,
    },
    {
      name: "Peakfield Academy",
      logo: peakfieldLogo,
    },
    {
      name: "SOS Children's Villages",
      logo: sosLogo,
    },
    {
      name: "Westgate",
      logo: westgateLogo,
    },
    {
      name: "Kaneng Rwang Pam Foundation",
      logo: krpLogo,
    },
    {
      name: "Plateau State Association of Tech Companies",
      logo: platecLogo,
    },
  ];
  return (
    <div className="h-[260px] md:h-[360px] mt-10">
      <h1 className="font-[600] text-[30px] md:text-[40px] text-center">
        Our Partners
      </h1>

      {/* <div className="flex relative overflow-x-hidden">
        <div className="flex items-centerwhitespace-nowrap marquee space-x-16 mt-5 justify-center">
          {partners.map((partner) => (
            <img
              src={partner.logo}
              key={partner.name}
              title={partner.name}
              alt={partner.name}
              className="h-20 hover:grayscale-0 grayscale cursor-pointer"
            />
          ))}
        </div>

        <div className="flex items-center whitespace-nowrap marquee2 space-x-16 mt-5 justify-center">
          {partners.map((partner) => (
            <img
              src={partner.logo}
              key={partner.name}
              title={partner.name}
              alt={partner.name}
              className="h-20 hover:grayscale-0 grayscale cursor-pointer"
            />
          ))}
        </div>
      </div> */}
      <marquee behavior="scroll" direction="left" scrollamount="5">
        <div className="flex space-x-14 mx-auto py-12">
          {partners.map((partner) => (
            <img
              src={partner.logo}
              key={partner.name}
              title={partner.name}
              alt={partner.name}
              className="h-20 hover:grayscale-0 grayscale cursor-pointer"
            />
          ))}
        </div>
      </marquee>
    </div>
  );
};

export default Partners;
