import React from "react";

function Blurblock({ width, height, rotate, top, bottom, left, right }) {
  console.log(width);
  return (
    <>
      <div
        className="hidden md:block"
        style={{
          width: `${width}`,
          height: `${height}`,
          filter: "blur(100px)",
          transform: `rotate(${rotate})`,
          backgroundImage:
            "linear-gradient(138deg, rgb(1, 148, 254) 12.62%, rgba(1, 148, 254, 0) 49.8%)",
          position: "absolute",
          top: `${top}`,
          bottom: `${bottom}`,
          left: `${left}`,
          right: `${right}`,
          zIndex: "-1",
        }}
      ></div>
      <div
        className="block md:hidden"
        style={{
          width: `calc(${width} / 1.5)`,
          height: `calc(${height} / 1.5)`,
          filter: "blur(100px)",
          transform: `rotate(${rotate})`,
          backgroundImage:
            "linear-gradient(138deg, rgb(1, 148, 254) 12.62%, rgba(1, 148, 254, 0) 49.8%)",
          position: "absolute",
          top: `${top}`,
          bottom: `${bottom}`,
          left: `${left}`,
          right: `${right}`,
          zIndex: "-1",
        }}
      ></div>
    </>
  );
}

export default Blurblock;
