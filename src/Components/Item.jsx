import React from "react";

const Item = ({ item, galery }) => {
  return (
    <>
      {/* <Paper
        className={`${
          galery ? "h-[370px]" : " md:h-[672px]"
        } w-5/6 mx-auto sm:w-4/6 md:mx-0 md:w-[400px] rounded-br-3xl border `}
        style={{
          boxShadow: "0px 16px 16px rgba(0, 0, 0, 0.16)",
          borderRadius: `${galery ? "0" : "32px 0px"}`,
        }}
      >
        <img
          src={galery ? item : item.img}
          alt={galery ? "galery image" : item.name}
          className="w-full md:w-[400px] h-[370px]"
        />
        <h2 className="font-[600] text-[24px] mb-[40px] text-center">
          {!galery && item.name}
        </h2>
        <p className="font-[400] text-[18px] md:text-[24px] mx-[15px] md:mx-[23px]">
          {!galery && item.testimony}
        </p>
      </Paper> */}
    </>
  );
};

export default Item;
