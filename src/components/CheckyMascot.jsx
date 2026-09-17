import React, { useState } from "react";
import { Sparkles, ShieldCheck, Zap, Check } from "lucide-react";

/**
 * Web Audio API synthesized forensic sound effect
 * Generates an ultra-crisp high-tech confirmation chirp without needing external mp3 files.
 */
function playForensicChime() {
  try {
    const AudioCtx = window.AudioContext || window.webkitAudioContext;
    if (!AudioCtx) return;
    const ctx = new AudioCtx();
    
    // Primary chime
    const osc1 = ctx.createOscillator();
    const gain1 = ctx.createGain();
    osc1.type = "sine";
    osc1.frequency.setValueAtTime(880, ctx.currentTime); // A5
    osc1.frequency.exponentialRampToValueAtTime(1760, ctx.currentTime + 0.15); // A6
    gain1.gain.setValueAtTime(0.12, ctx.currentTime);
    gain1.gain.exponentialRampToValueAtTime(0.001, ctx.currentTime + 0.35);

    osc1.connect(gain1);
    gain1.connect(ctx.destination);
    osc1.start();
    osc1.stop(ctx.currentTime + 0.35);

    // Harmonic laser shimmer
    const osc2 = ctx.createOscillator();
    const gain2 = ctx.createGain();
    osc2.type = "triangle";
    osc2.frequency.setValueAtTime(1320, ctx.currentTime + 0.05);
    osc2.frequency.exponentialRampToValueAtTime(2640, ctx.currentTime + 0.25);
    gain2.gain.setValueAtTime(0.06, ctx.currentTime + 0.05);
    gain2.gain.exponentialRampToValueAtTime(0.001, ctx.currentTime + 0.35);

    osc2.connect(gain2);
    gain2.connect(ctx.destination);
    osc2.start(ctx.currentTime + 0.05);
    osc2.stop(ctx.currentTime + 0.35);
  } catch {
    // AudioContext may be restricted by browser autoplay policy until user gesture
  }
}

/**
 * Checky - The Forensic Sentinel Drone Mascot
 */
export default function CheckyMascot({
  size = "md",
  showSpeech = true,
  speechText = "¡Hola! Soy Checky. Arrastra el láser pericial para ver cómo blindo esta foto en 12ms.",
  onTriggerScan = null,
  isScanning = false,
  className = "",
}) {
  const [clicked, setClicked] = useState(false);
  const [speechDismissed, setSpeechDismissed] = useState(false);

  const sizeClasses = {
    sm: "w-16 h-16 sm:w-20 sm:h-20",
    md: "w-24 h-24 sm:w-28 sm:h-28",
    lg: "w-32 h-32 sm:w-40 sm:h-40",
    hero: "w-36 h-36 sm:w-48 sm:h-48",
  };

  const handleClick = () => {
    setClicked(true);
    playForensicChime();
    if (onTriggerScan) {
      onTriggerScan();
    }
    setTimeout(() => setClicked(false), 800);
  };

  return (
    <div className={`relative inline-flex flex-col items-center group select-none ${className}`}>
      {/* Speech Bubble (Callout) */}
      {showSpeech && !speechDismissed && (
        <div
          className="relative mb-3 w-auto max-w-[320px] sm:max-w-sm px-4 py-2.5 rounded-2xl bg-white/95 backdrop-blur-md border border-cyan-200/90 shadow-lg shadow-cyan-900/10 text-xs text-slate-700 animate-fade-in z-20 cursor-pointer hover:border-cyan-400 transition-all transform hover:-translate-y-0.5"
          onClick={handleClick}
        >
          <div className="flex items-start gap-2.5">
            <span className="flex-shrink-0 mt-1 w-2 h-2 rounded-full bg-cyan-500 animate-ping" />
            <div className="flex-1">
              <div className="flex items-center justify-between gap-2 mb-0.5">
                <strong className="text-[11px] font-extrabold text-blue-900 font-heading uppercase tracking-wider flex items-center gap-1.5 whitespace-nowrap">
                  <Sparkles className="w-3.5 h-3.5 text-cyan-500" />
                  Checky • Centinela Pericial
                </strong>
                <button
                  type="button"
                  onClick={(e) => {
                    e.stopPropagation();
                    setSpeechDismissed(true);
                  }}
                  className="text-slate-400 hover:text-slate-600 text-[10px] px-1"
                  title="Ocultar mensaje"
                >
                  ✕
                </button>
              </div>
              <p className="text-[11px] leading-relaxed text-slate-600 font-medium">
                {isScanning ? (
                  <span className="text-blue-600 font-semibold flex items-center gap-1">
                    <Zap className="w-3 h-3 animate-spin text-amber-500 flex-shrink-0" />
                    <span>Calculando SHA-256 y sellando con TSA...</span>
                  </span>
                ) : (
                  speechText
                )}
              </p>
            </div>
          </div>

          {/* Speech Bubble Tail */}
          <div className="absolute -bottom-2 left-1/2 -translate-x-1/2 w-3 h-3 bg-white border-r border-b border-cyan-200/90 rotate-45" />
        </div>
      )}


      {/* Checky Character Container */}
      <div
        onClick={handleClick}
        className="relative cursor-pointer transition-transform duration-300 active:scale-95 group"
        title="¡Haz clic en Checky para activar una inspección pericial!"
      >
        {/* Soft Ambient Anti-Gravity Cyan Glow */}
        <div
          className={`absolute -inset-2 rounded-full bg-gradient-to-t from-cyan-400/40 via-blue-500/20 to-transparent blur-xl pointer-events-none transition-all duration-300 ${
            clicked || isScanning ? "opacity-100 scale-125" : "opacity-60 group-hover:opacity-90"
          }`}
        />

        {/* Mascot PNG Render with Levitating Animation */}
        <div className={`relative ${sizeClasses[size] || sizeClasses.md} animate-drone-hover`}>
          <img
            src="/checky.png"
            alt="Checky - Centinela Pericial de CheckIt"
            className={`w-full h-full object-contain filter drop-shadow-[0_12px_24px_rgba(2,132,199,0.28)] transition-all duration-300 ${
              clicked ? "scale-110 rotate-3" : "group-hover:scale-105"
            }`}
            draggable={false}
          />

          {/* Holographic scanning laser arc on click / scan */}
          {(clicked || isScanning) && (
            <div className="absolute inset-0 rounded-full border-2 border-cyan-400 animate-ping pointer-events-none opacity-80" />
          )}
        </div>

        {/* Small Floating Interactive Badge underneath */}
        <div className="mt-1 flex items-center justify-center">
          <span className="inline-flex items-center gap-1 px-2.5 py-0.5 rounded-full bg-white/90 backdrop-blur-sm border border-cyan-200 text-[10px] font-bold font-mono text-cyan-950 shadow-xs group-hover:border-cyan-400 group-hover:text-blue-600 transition-colors">
            <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse" />
            <span>Checky v2.4</span>
          </span>
        </div>
      </div>
    </div>
  );
}
