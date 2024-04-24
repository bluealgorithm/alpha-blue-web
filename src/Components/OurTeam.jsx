import bright from "../asset/images/bright.jpeg";
import oge from "../asset/images/oge.jpeg";
import chris from "../asset/images/chris.jpeg";

export default function OurTeam() {
  const members = [
    {
      name: "Bright Ogor",
      image: bright,
      role: "Director",
    },
    {
      name: "Ogechi Anyawu",
      image: oge,
      role: "Marketing",
    },
    {
      name: "Osezua C. Isibor",
      image: chris,
      role: "Manager",
    },
  ];
  return (
    <div className="mt-14 mb-6 container mx-auto">
      <h1 className="font-bold text-[30px] md:text-[40px] text-center">
        Meet{" "}
        <span className="bg-primary_blue-200 text-white w-fit mx-auto -rotate-12 rounded-xl px-2 py-1">
          Our Team
        </span>
      </h1>

      <div className="flex flex-wrap mt-8">
        {members.map((member) => (
          <div className="mx-auto w-full sm:w-[30rem] md:w-1/2 lg:w-1/3 py-4 px-8 h-[28rem]">
            <div
              style={{
                backgroundImage: `linear-gradient(to top, rgba(0, 0, 0, 1), rgba(0, 0, 0, 0)), url(${member.image})`,
                backgroundSize: "cover",
                backgroundPosition: "top",
                backgroundRepeat: "no-repeat",
              }}
              className="h-full p-5 flex flex-col justify-end"
            >
              <h3 className="text-xl font-semibold text-white">
                {member.name}
              </h3>
              <p className="text-gray-200">{member.role}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
