import React from "react";

interface MadhuPortraitProps {
  className?: string;
}

export default function MadhuPortrait({ className = "" }: MadhuPortraitProps) {
  return (
    <svg
      viewBox="0 0 400 500"
      className={`${className} select-none w-full h-auto object-cover rounded-xl transition-all duration-500`}
      xmlns="http://www.w3.org/2000/svg"
      aria-label="Madhu Bharadwaja - Stylized Portrait"
    >
      <defs>
        {/* Soft fade-out mask to blend the bottom of the portrait seamlessly into pure black */}
        <linearGradient id="fadeMaskGrad" x1="0%" y1="0%" x2="0%" y2="100%">
          <stop offset="0%" stopColor="#ffffff" />
          <stop offset="72%" stopColor="#ffffff" />
          <stop offset="100%" stopColor="#000000" />
        </linearGradient>
        <mask id="bottomFadeMask">
          <rect width="400" height="500" fill="url(#fadeMaskGrad)" />
        </mask>

        {/* Skin gradient with warm tones */}
        <linearGradient id="skinTone" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#ffe3d1" />
          <stop offset="60%" stopColor="#ffd2b8" />
          <stop offset="100%" stopColor="#f3b593" />
        </linearGradient>

        {/* Skin shadow gradient */}
        <linearGradient id="skinShadow" x1="0%" y1="0%" x2="0%" y2="100%">
          <stop offset="0%" stopColor="#e6a480" />
          <stop offset="100%" stopColor="#cf8f6a" />
        </linearGradient>

        {/* Hair gradient for depth */}
        <linearGradient id="hairGrad" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#242528" />
          <stop offset="50%" stopColor="#121315" />
          <stop offset="100%" stopColor="#080809" />
        </linearGradient>

        {/* Navy Blue suit gradient */}
        <linearGradient id="suitGrad" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#2c364c" />
          <stop offset="40%" stopColor="#1e2536" />
          <stop offset="100%" stopColor="#121724" />
        </linearGradient>

        {/* Crimson tilak bindi gradient */}
        <linearGradient id="tilakGrad" x1="0%" y1="0%" x2="0%" y2="100%">
          <stop offset="0%" stopColor="#ff1a1a" />
          <stop offset="100%" stopColor="#990000" />
        </linearGradient>

        {/* Drop shadows for clean modern illustration layers */}
        <filter id="softShadow" x="-10%" y="-10%" width="120%" height="120%">
          <feDropShadow dx="0" dy="4" stdDeviation="6" floodColor="#000000" floodOpacity="0.15" />
        </filter>
        <filter id="tilakGlow" x="-20%" y="-20%" width="140%" height="140%">
          <feGaussianBlur stdDeviation="1.5" result="blur" />
          <feComposite in="SourceGraphic" in2="blur" operator="over" />
        </filter>
      </defs>

      {/* 1. Pure Solid Black Background */}
      <rect width="400" height="500" fill="#000000" />

      <g filter="url(#softShadow)" mask="url(#bottomFadeMask)">
        {/* 2. Neck and Shoulders structure */}
        {/* Neck */}
        <path d="M 170,320 L 230,320 L 225,250 L 175,250 Z" fill="url(#skinShadow)" />
        {/* Neck Shadow */}
        <path d="M 170,250 C 170,250 200,285 230,250 C 230,250 220,310 170,310 Z" fill="#cf8f6a" opacity="0.5" />

        {/* 3. Ears */}
        {/* Left Ear */}
        <path d="M 118,190 C 110,190 108,215 118,225 C 120,227 122,215 122,205 Z" fill="url(#skinTone)" />
        <path d="M 116,198 C 113,198 112,208 117,215" stroke="#cf8f6a" strokeWidth="1" fill="none" />
        
        {/* Right Ear */}
        <path d="M 282,190 C 290,190 292,215 282,225 C 280,227 278,215 278,205 Z" fill="url(#skinTone)" />
        <path d="M 284,198 C 287,198 288,208 283,215" stroke="#cf8f6a" strokeWidth="1" fill="none" />

        {/* 4. Face Shape */}
        <path d="M 120,175 C 120,105 280,105 280,175 C 280,230 260,265 200,265 C 140,265 120,230 120,175 Z" fill="url(#skinTone)" />

        {/* Cheek shading for 3D depth */}
        <path d="M 122,175 C 122,225 142,255 190,262 C 142,252 125,215 125,175 Z" fill="#cf8f6a" opacity="0.15" />
        <path d="M 278,175 C 278,225 258,255 210,262 C 258,252 275,215 275,175 Z" fill="#cf8f6a" opacity="0.1" />

        {/* 5. Hair (Sophisticated black combed hair - matching photo) */}
        {/* Base hair volume */}
        <path d="M 116,170 C 110,150 125,100 170,88 C 210,78 265,85 282,115 C 290,130 286,165 282,172 C 280,165 278,145 270,135 C 260,125 240,120 220,122 C 200,124 170,135 155,142 C 140,149 125,162 116,170 Z" fill="url(#hairGrad)" />
        {/* Hair front details / strands */}
        <path d="M 116,170 C 119,165 128,155 140,148 C 155,140 185,128 215,125 C 245,122 268,128 278,138 C 280,140 280,148 276,145 C 265,135 245,130 215,132 C 185,134 155,145 135,155 C 125,160 118,168 116,170 Z" fill="#3a3c42" />
        {/* Extra hair layer for matching the combed look in the photo */}
        <path d="M 140,105 C 170,92 210,90 250,100 C 265,105 275,115 280,125 C 275,110 260,100 240,95 C 205,90 170,95 140,105 Z" fill="#2d2f33" />

        {/* 6. Eyebrows (Neat, masculine, black) */}
        {/* Left Eyebrow */}
        <path d="M 135,165 C 145,158 165,158 175,165 C 165,161 145,161 135,165 Z" fill="#121315" stroke="#121315" strokeWidth="1.5" strokeLinecap="round" />
        {/* Right Eyebrow */}
        <path d="M 225,165 C 235,158 255,158 265,165 C 255,161 235,161 225,165 Z" fill="#121315" stroke="#121315" strokeWidth="1.5" strokeLinecap="round" />

        {/* 7. Eyes (Friendly, clear) */}
        {/* Left Eye */}
        <path d="M 142,176 C 148,172 158,172 164,176 C 158,180 148,180 142,176 Z" fill="#ffffff" stroke="#3a3c42" strokeWidth="1" />
        <circle cx="153" cy="176" r="3.5" fill="#1e2022" />
        <circle cx="154" cy="175" r="1" fill="#ffffff" /> {/* Catchlight */}

        {/* Right Eye */}
        <path d="M 236,176 C 242,172 252,172 258,176 C 252,180 242,180 236,176 Z" fill="#ffffff" stroke="#3a3c42" strokeWidth="1" />
        <circle cx="247" cy="176" r="3.5" fill="#1e2022" />
        <circle cx="248" cy="175" r="1" fill="#ffffff" /> {/* Catchlight */}

        {/* Nose Structure */}
        <path d="M 195,165 L 195,208 C 195,212 188,215 192,217 C 197,219 203,219 208,217 C 212,215 205,212 205,208 L 205,165 Z" fill="#cf8f6a" opacity="0.3" />
        <path d="M 194,212 C 197,215 203,215 206,212" stroke="#cf8f6a" strokeWidth="1.5" fill="none" strokeLinecap="round" />

        {/* 8. Distinguishing Crimson Red Tilak (Centered on Forehead) */}
        <circle cx="200" cy="148" r="4.5" fill="url(#tilakGrad)" filter="url(#tilakGlow)" />

        {/* 9. Mouth & Distinctive Mustache (Beautifully detailed black mustache matching photo) */}
        {/* Mouth backing line */}
        <path d="M 182,238 C 190,242 210,242 218,238" stroke="#b2714c" strokeWidth="1.5" fill="none" />
        
        {/* Smart, thick, clean black mustache */}
        <path d="M 172,232 C 180,224 196,223 200,228 C 204,223 220,224 228,232 C 232,236 226,240 221,236 C 215,231 206,230 200,233 C 194,230 185,231 179,236 C 174,240 168,236 172,232 Z" fill="#121315" />
        <path d="M 188,231 C 195,229 205,229 212,231" stroke="#252629" strokeWidth="1" fill="none" />

        {/* 10. Suit & Crisp White Collared Shirt */}
        {/* Base Suit shoulders */}
        <path d="M 70,500 L 330,500 L 320,360 C 310,340 270,325 245,320 L 155,320 C 130,325 90,340 80,360 Z" fill="url(#suitGrad)" />

        {/* Inner Shirt V-neck opening */}
        <path d="M 160,320 L 240,320 L 225,410 L 175,410 Z" fill="#ffffff" />
        {/* Shirt inner shading */}
        <path d="M 175,410 L 225,410 L 200,435 Z" fill="#e2e6ea" />

        {/* Smart shirt collar wings folding out */}
        {/* Left Collar */}
        <path d="M 162,320 L 180,370 L 200,328 Z" fill="#ffffff" stroke="#e2e6ea" strokeWidth="1" />
        {/* Right Collar */}
        <path d="M 238,320 L 220,370 L 200,328 Z" fill="#ffffff" stroke="#e2e6ea" strokeWidth="1" />

        {/* Tiny dark blazer button detail under collar on the shirt fold */}
        <circle cx="200" cy="380" r="3.5" fill="#1c202a" />
        <circle cx="200" cy="425" r="3.5" fill="#1c202a" />

        {/* Suit Lapels (Dark navy blue flaps) */}
        {/* Left Lapel */}
        <path d="M 155,320 L 132,385 L 180,480 L 180,350 Z" fill="#1e2536" stroke="#2c364c" strokeWidth="0.8" />
        {/* Right Lapel */}
        <path d="M 245,320 L 268,385 L 220,480 L 220,350 Z" fill="#1e2536" stroke="#2c364c" strokeWidth="0.8" />

        {/* Left Suit Shoulder seams and highlights */}
        <path d="M 80,360 L 135,320 L 155,320" stroke="#3b4866" strokeWidth="1" fill="none" opacity="0.4" />
        {/* Right Suit Shoulder seams and highlights */}
        <path d="M 320,360 L 265,320 L 245,320" stroke="#3b4866" strokeWidth="1" fill="none" opacity="0.4" />
      </g>
    </svg>
  );
}
