import React from "react";

export default function Logo({ variant = "dark", className = "" }) {
  const nameColor = variant === "light" ? "text-white" : "text-emerald";
  const subColor = variant === "light" ? "text-blush" : "text-bubblegum";
  const stroke = variant === "light" ? "#E2CDC4" : "#3C583E";

  return (
    <div className={`flex items-center gap-3 ${className}`}>
      <svg viewBox="0 0 64 64" className="h-11 w-11 shrink-0" fill="none" aria-hidden="true">
        <g stroke={stroke} strokeWidth="1.7" strokeLinecap="round" fill="none">
          <path d="M32 42c0-6 4-10 9-10s8 3 8 8-4 8-9 8c-3 0-6-1-8-2" />
          <path d="M32 42c0-6-4-10-9-10s-8 3-8 8 4 8 9 8c3 0 6-1 8-2" />
          <path d="M32 42v8" />
          <path d="M28 50h8" />
        </g>
        <circle cx="32" cy="24" r="2.6" fill={variant === "light" ? "#BF8079" : "#BF8079"} />
      </svg>
      <div className="leading-none">
        <p className={`font-heading text-lg font-semibold tracking-wide ${nameColor}`}>
          Shirley Cástro
        </p>
        <p className={`font-body text-[10px] font-medium tracking-[0.32em] ${subColor} mt-1`}>
          PSICÓLOGA
        </p>
      </div>
    </div>
  );
}