import SettingsIcon from "../asset/icons/settings";
import PowerIcon from "../asset/icons/power";
import ShieldIcon from "../asset/icons/shield";
import PeopleIcon from "../asset/icons/people";
import BadgeIcon from "../asset/icons/badge";
import LightBulbIcon from "../asset/icons/light-bulb";
import SyncIcon from "../asset/icons/sync";

export default function CoreValues() {
  const coreValues = [
    {
      icon: SettingsIcon,
      title: "Innovation",
      description:
        "Embrace creativity and encourage forward-thinking solutions to drive progress and advancement.",
    },
    {
      icon: PowerIcon,
      title: "Empowerment",
      description:
        "Empower individuals and communities to realize their potential through education, skills, and opportunities.",
    },
    {
      icon: SyncIcon,
      title: "Collaboration",
      description:
        "Foster a culture of collaboration, teamwork, and partnership to achieve common goals.",
    },
    {
      icon: ShieldIcon,
      title: "Integrity",
      description:
        "Uphold the highest standards of honesty, transparency, and ethical behavior in all endeavors.",
    },
    {
      icon: BadgeIcon,
      title: "Excellence",
      description:
        "Strive for excellence in all aspects of work, aiming for quality, efficiency, and continuous improvement.",
    },
    {
      icon: PeopleIcon,
      title: "Social Impact",
      description:
        "Strive to make a meaningful and positive impact on society, contributing to social welfare and development.",
    },
    {
      icon: LightBulbIcon,
      title: "Community Engagement",
      description:
        "Actively engage with and support local communities, promoting shared prosperity and mutual growth.",
    },
  ];

  return (
    <div className="mt-14 mb-6 container mx-auto">
      <h1 className="font-bold text-[30px] md:text-[40px] text-center">
        Our{" "}
        <span className="bg-primary_blue-200 text-white w-fit mx-auto -rotate-12 rounded-xl px-2 py-1">
          Core Values
        </span>
      </h1>

      <div className="flex flex-wrap mt-8">
        {coreValues.map((coreValue) => (
          <div className="w-full md:w-6/12 lg:w-4/12 px-4 py-6 mx-auto">
            <p className="flex items-center text-primary_blue-100 justify-center mb-4 h-14 w-14 rounded-full bg-slate-200">
              <coreValue.icon />
            </p>
            <h3 className="text-lg font-semibold">{coreValue.title}</h3>
            <p className="text-gray-800 font-[410] mt-2">
              {coreValue.description}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
}
