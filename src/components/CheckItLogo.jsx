import React from "react";

/**
 * CheckIt Proprietary Brand Emblem:
 * A distinctive geometric monogram combining the "C" of CheckIt with a precision
 * forensic checkmark and cryptographic laser refraction ring.
 */
export function CheckItEmblem({ className = "w-10 h-10", glow = true }) {
  return (
    <div className={`relative inline-flex items-center justify-center flex-shrink-0 ${className}`}>
      {glow && (
        <div className="absolute inset-0 rounded-2xl bg-gradient-to-tr from-blue-600/40 via-cyan-400/30 to-blue-500/40 blur-md pointer-events-none transform -scale-95 group-hover:scale-110 transition-transform duration-300" />
      )}
      <svg
        viewBox="0 0 48 48"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="w-full h-full relative z-10 drop-shadow-[0_4px_12px_rgba(37,99,235,0.3)] transition-transform duration-300 group-hover:scale-105"
      >
        <defs>
          <linearGradient id="checkit-grad-bg" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#1E40AF" />
            <stop offset="50%" stopColor="#2563EB" />
            <stop offset="100%" stopColor="#0284C7" />
          </linearGradient>
          <linearGradient id="checkit-grad-stroke" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#93C5FD" stopOpacity="0.9" />
            <stop offset="50%" stopColor="#38BDF8" stopOpacity="0.8" />
            <stop offset="100%" stopColor="#FFFFFF" stopOpacity="0.95" />
          </linearGradient>
          <linearGradient id="checkit-grad-check" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#67E8F9" />
            <stop offset="40%" stopColor="#FFFFFF" />
            <stop offset="100%" stopColor="#38BDF8" />
          </linearGradient>
          <filter id="checkit-inner-glow" x="-20%" y="-20%" width="140%" height="140%">
            <feGaussianBlur stdDeviation="1.5" result="blur" />
            <feComposite in2="SourceAlpha" operator="arithmetic" k2="-1" k3="1" result="shadowDiff" />
            <feFlood floodColor="#FFFFFF" floodOpacity="0.4" />
            <feComposite in2="shadowDiff" operator="in" />
            <feComposite in2="SourceGraphic" operator="over" />
          </filter>
        </defs>

        {/* Outer Faceted Rounded Bezel */}
        <rect
          x="3"
          y="3"
          width="42"
          height="42"
          rx="12"
          fill="url(#checkit-grad-bg)"
          stroke="url(#checkit-grad-stroke)"
          strokeWidth="1.5"
        />

        {/* Cryptographic Corner Nodes */}
        <circle cx="8" cy="8" r="1.2" fill="#BAE6FD" opacity="0.8" />
        <circle cx="40" cy="8" r="1.2" fill="#BAE6FD" opacity="0.8" />
        <circle cx="8" cy="40" r="1.2" fill="#BAE6FD" opacity="0.8" />
        <circle cx="40" cy="40" r="1.2" fill="#BAE6FD" opacity="0.8" />

        {/* Subtle Laser Scan Grid in the Background */}
        <path
          d="M12 24H36M24 12V36"
          stroke="#FFFFFF"
          strokeWidth="0.75"
          strokeDasharray="2 2"
          opacity="0.25"
        />

        {/* Outer Circular Monogram Track */}
        <circle
          cx="24"
          cy="24"
          r="15"
          stroke="#60A5FA"
          strokeWidth="1.2"
          strokeDasharray="1.5 2.5"
          opacity="0.5"
        />

        {/* The Signature "C" Arch (CheckIt Vault Monogram) */}
        <path
          d="M29 15.5C27.5 14.5 25.8 14 24 14C18.4772 14 14 18.4772 14 24C14 29.5228 18.4772 34 24 34C26 34 27.8 33.4 29.3 32.3"
          stroke="#FFFFFF"
          strokeWidth="3.2"
          strokeLinecap="round"
          filter="url(#checkit-inner-glow)"
        />

        {/* The Sharp Forensic Checkmark (Precision Refraction) */}
        <path
          d="M18.5 24.5L22.8 28.8L34 16.5"
          stroke="url(#checkit-grad-check)"
          strokeWidth="3.8"
          strokeLinecap="round"
          strokeLinejoin="round"
        />

        {/* Laser Spark Point at the checkmark tip */}
        <circle cx="34" cy="16.5" r="1.8" fill="#FFFFFF" />
        <circle cx="34" cy="16.5" r="3.2" fill="#67E8F9" opacity="0.5" />
      </svg>
    </div>
  );
}

/**
 * CheckIt Brand Header & Navbar Logo with Text
 */
export default function CheckItLogo({
  size = "md",
  showSubtitle = true,
  showBadge = true,
  className = "",
}) {
  const sizeMap = {
    sm: "w-8 h-8",
    md: "w-10 h-10",
    lg: "w-12 h-12",
  };

  return (
    <div className={`flex items-center gap-3 group select-none flex-shrink-0 ${className}`}>
      <CheckItEmblem className={sizeMap[size] || "w-10 h-10"} />
      <div className="flex flex-col flex-shrink-0">
        <div className="flex items-center gap-2 whitespace-nowrap">
          <span className="font-heading font-extrabold text-2xl text-slate-900 tracking-tight leading-none group-hover:text-blue-950 transition-colors">
            Check<span className="text-blue-600 bg-gradient-to-r from-blue-600 to-cyan-500 bg-clip-text text-transparent">It</span>
          </span>
          {showBadge && (
            <span className="text-[10px] uppercase font-bold px-2.5 py-0.5 rounded-full bg-blue-50/90 text-blue-700 border border-blue-200/80 font-mono shadow-xs whitespace-nowrap">
              Enterprise
            </span>
          )}
        </div>
        {showSubtitle && (
          <span className="text-[11px] text-slate-500 font-medium hidden 2xl:inline-block tracking-normal mt-0.5 whitespace-nowrap">
            Inmutabilidad y Validez Legal en Cada Inspección
          </span>
        )}
      </div>
    </div>

  );
}
