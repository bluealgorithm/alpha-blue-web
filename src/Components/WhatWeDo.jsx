export default function WhatWeDo() {
  const items = [
    {
      icon: "🔨",
      title: "Capacity Building",
      description:
        "We focus on capacity building, providing comprehensive training and skill development programs to individuals, enabling them to thrive in a rapidly evolving technological landscape.",
    },
    {
      icon: "💎",
      title: "Financing",
      description:
        "We facilitate financing opportunities to support budding entrepreneurs and innovators in transforming their ideas into impactful ventures.",
    },
    {
      icon: "📢",
      title: "Policy Advocacy",
      description:
        "We actively engage in advocacy efforts, championing policies that foster an environment conducive to technological innovation and entrepreneurial growth.",
    },
  ];
  return (
    <div className="w-full mt-16 bg-black py-14 px-8">
      <h1 className="font-bold text-[30px] text-white md:text-[40px] text-center">
        What{" "}
        <span className="bg-primary_blue-200 text-white w-fit mx-auto -rotate-12 rounded-xl px-2 py-1">
          We Do
        </span>
      </h1>

      <div className="flex flex-wrap mt-3 rounded-xl py-10 px-4">
        {items.map((item) => (
          <div className="w-full mx-auto md:w-1/2 lg:w-1/3 px-8 py-6">
            <p className="flex items-center text-primary_blue-100 justify-center mb-4 h-14 w-14 rounded-full bg-slate-200">
              {item.icon}
            </p>
            <h3 className="text-lg font-semibold text-white">{item.title}</h3>
            <p className="text-gray-200 leading-relaxed font-[410] mt-4">
              {item.description}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
}
