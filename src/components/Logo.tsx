import React from "react";

interface LogoProps {
  className?: string;
  height?: string | number;
}

export default function Logo({ className = "", height = "2.5rem" }: LogoProps) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 460 180"
      className={`${className} select-none`}
      style={{ height, width: "auto" }}
      aria-label="PlotStories Logo"
    >
      <defs>
        {/* Circle linear gradient from soft silver-white to rich dark charcoal */}
        <linearGradient id="logoCircleGrad" x1="15%" y1="0%" x2="85%" y2="100%">
          <stop offset="0%" stopColor="#ffffff" />
          <stop offset="35%" stopColor="#dbe1e6" />
          <stop offset="70%" stopColor="#2c3035" />
          <stop offset="100%" stopColor="#080808" />
        </linearGradient>

        {/* Clip path to constrain the architectural drawings to the circle */}
        <clipPath id="logoCircleClip">
          <circle cx="100" cy="90" r="76" />
        </clipPath>
      </defs>

      {/* Main Gradient Circle */}
      <circle cx="100" cy="90" r="76" fill="url(#logoCircleGrad)" />

      {/* Exquisite Architectural Sketch inside the Circle */}
      <g clipPath="url(#logoCircleClip)">
        {/* Vertical/structural grid lines */}
        <g stroke="#ffffff" strokeWidth="0.6" opacity="0.35" fill="none">
          {/* Main vertical structure columns */}
          <path d="M 50,166 L 75,20" />
          <path d="M 75,166 L 95,20" />
          <path d="M 100,166 L 115,20" />
          <path d="M 125,166 L 135,20" />
          <path d="M 150,166 L 155,20" />

          {/* horizontal level indicators */}
          <line x1="20" y1="40" x2="180" y2="40" />
          <line x1="20" y1="65" x2="180" y2="65" />
          <line x1="20" y1="90" x2="180" y2="90" />
          <line x1="20" y1="115" x2="180" y2="115" />
          <line x1="20" y1="140" x2="180" y2="140" />
          
          {/* Structural bracing details (criss-cross diagonals) */}
          <path d="M 40,166 L 120,40 M 60,166 L 140,40 M 80,166 L 160,40" />
          <path d="M 160,166 L 80,40 M 140,166 L 60,40 M 120,166 L 40,40" />
        </g>

        {/* Detailed architectural skyscraper sketch overlays (as visible in original image) */}
        <g stroke="#ffffff" strokeWidth="0.8" opacity="0.6" fill="none">
          {/* CCTV-style or high-end architectural framework */}
          <path d="M 45,166 L 80,45 L 125,45 L 150,166" />
          <path d="M 55,166 L 85,60 L 120,60 L 140,166" />
          
          {/* Fine horizontal mullions */}
          <line x1="80" y1="45" x2="125" y2="45" strokeWidth="1.2" />
          <line x1="85" y1="60" x2="120" y2="60" />
          <line x1="88" y1="75" x2="116" y2="75" />
          <line x1="91" y1="90" x2="112" y2="90" />
          <line x1="94" y1="105" x2="108" y2="105" />
          
          {/* Additional architectural lines */}
          <path d="M 45,166 L 125,45" />
          <path d="M 150,166 L 80,45" />
        </g>
      </g>

      {/* "plot" Typography - lowercase, placed exactly inside the circle's right-middle area */}
      <text
        x="178"
        y="114"
        fill="#ffffff"
        fontFamily="'Space Grotesk', 'Inter', sans-serif"
        fontWeight="700"
        fontSize="74"
        letterSpacing="-0.04em"
        textAnchor="end"
      >
        plot
      </text>

      {/* "Stories" Typography - Capital S, starts right after the circle, colored with the silver/white theme */}
      <text
        x="185"
        y="114"
        fill="currentColor"
        fontFamily="'Space Grotesk', 'Inter', sans-serif"
        fontWeight="700"
        fontSize="74"
        letterSpacing="-0.02em"
        textAnchor="start"
      >
        Stories
      </text>
    </svg>
  );
}
