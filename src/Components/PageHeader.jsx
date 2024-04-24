import { Link } from "react-router-dom";

export default function PageHeader({ coverImage, title, tagline, position }) {
  return (
    <div
      style={{
        backgroundImage: `linear-gradient(to right, rgb(18 32 105), rgba(0, 0, 0, 0.5)), url(${coverImage})`,
        backgroundSize: "cover",
        backgroundPosition: position ? "center" : "top",
        backgroundRepeat: "no-repeat",
      }}
      className={`flex relative items-center justify-center w-[calc(100vw-120px)] px-5 mx-auto rounded-xl mb-5 mt-1 min-h-[calc(100vh-80px)] text-white`}
    >
      <div className="w-full px-8 flex flex-col items-center">
        <span className="text-base font-medium bg-white/5 backdrop-blur rounded-full px-6 py-1">
          {title}
        </span>
        <h1 className="text-5xl max-w-3xl leading-tight font-bold mb-10 mt-2 text-center">
          {tagline}
        </h1>

        <Link
          to="get-in-touch"
          className="px-10 py-4 font-semibold text-xl bg-primary_blue-200 text-white duration-500"
        >
          Contact Us
        </Link>
      </div>
    </div>
  );
}
