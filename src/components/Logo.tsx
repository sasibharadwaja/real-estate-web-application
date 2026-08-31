import React from "react";
import logoSrc from "../../assets/plotstorieslogo.png";

interface LogoProps {
  className?: string;
  height?: string | number;
}

export default function Logo({
  className = "",
  height = "2.5rem",
}: LogoProps) {
  return (
    <img
      src={logoSrc}
      alt="PlotStories"
      className={`${className} select-none object-contain`}
      style={{
        height,
        width: "auto",
      }}
      draggable={false}
    />
  );
}