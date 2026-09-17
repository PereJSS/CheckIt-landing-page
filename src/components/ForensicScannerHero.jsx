import React, { useState, useRef, useEffect } from "react";
import {
  ShieldAlert,
  ShieldCheck,
  Zap,
  Sliders,
  Sparkles,
  Lock,
  Clock,
  MapPin,
  CheckCircle2,
  FileCheck2,
  Play,
  RotateCcw,
  Maximize2
} from "lucide-react";
import CheckyMascot from "./CheckyMascot";

export default function ForensicScannerHero({ onCertifyAction }) {
  const [sliderPosition, setSliderPosition] = useState(55); // percentage (0 to 100)
  const [isDragging, setIsDragging] = useState(false);
  const [isAutoScanning, setIsAutoScanning] = useState(false);
  const [scanHash, setScanHash] = useState("9f86d081884c7d659a2feaa0c55ad015a3bf4f1b2b0b822cd15d6c15b0f00a08");
  const containerRef = useRef(null);

  // Handle dragging slider
  const handlePointerMove = (e) => {
    if (!isDragging || !containerRef.current) return;
    const rect = containerRef.current.getBoundingClientRect();
    const clientX = e.touches ? e.touches[0].clientX : e.clientX;
    const offsetX = Math.max(0, Math.min(rect.width, clientX - rect.left));
    const percent = Math.round((offsetX / rect.width) * 100);
    setSliderPosition(percent);
  };

  const handlePointerDown = () => {
    setIsDragging(true);
  };

  const handlePointerUp = () => {
    setIsDragging(false);
  };

  useEffect(() => {
    window.addEventListener("pointerup", handlePointerUp);
    window.addEventListener("pointermove", handlePointerMove);
    return () => {
      window.removeEventListener("pointerup", handlePointerUp);
      window.removeEventListener("pointermove", handlePointerMove);
    };
  }, [isDragging]);

  // Automated Laser Sweep
  const triggerAutoScan = () => {
    setIsAutoScanning(true);
    setSliderPosition(10);

    // Randomize SHA-256 to simulate real in situ hashing
    const chars = "0123456789abcdef";
    let newHash = "";
    for (let i = 0; i < 64; i++) {
      newHash += chars[Math.floor(Math.random() * chars.length)];
    }
    setScanHash(newHash);

    let start = 10;
    const interval = setInterval(() => {
      start += 3;
      if (start >= 88) {
        clearInterval(interval);
        setSliderPosition(88);
        setIsAutoScanning(false);
      } else {
        setSliderPosition(start);
      }
    }, 35);
  };

  return (
    <div className="relative w-full max-w-5xl mx-auto mt-10 z-20">
      {/* Decorative Top Accent with Checky Greeting */}
      <div className="flex flex-col sm:flex-row items-center justify-between gap-3 mb-4 px-2">
        <div className="flex items-center gap-3">
          <div className="px-3.5 py-1.5 rounded-full bg-blue-50/90 border border-blue-200/90 text-[11px] font-heading font-extrabold text-blue-900 tracking-wider flex items-center gap-2 shadow-xs whitespace-nowrap flex-shrink-0">
            <span className="w-2 h-2 rounded-full bg-blue-600 animate-pulse" />
            <span>ESCANEO FORENSE EN TIEMPO REAL</span>
          </div>
          <span className="text-xs text-slate-500 hidden md:inline-block leading-relaxed">
            Desliza el haz pericial para comparar una foto común frente a la prueba pericial inalterable.
          </span>
        </div>

        {/* Quick Action Buttons */}
        <div className="flex items-center gap-2 flex-shrink-0">
          <button
            onClick={triggerAutoScan}
            disabled={isAutoScanning}
            className="inline-flex items-center gap-2 px-4 py-2 rounded-xl bg-gradient-to-r from-blue-600 to-cyan-600 hover:from-blue-700 hover:to-cyan-700 text-white text-xs font-semibold shadow-md shadow-blue-600/20 hover:shadow-lg transition-all active:scale-95 disabled:opacity-50 whitespace-nowrap flex-shrink-0"
          >
            <Sparkles className="w-3.5 h-3.5 text-cyan-200" />
            <span>{isAutoScanning ? "Escaneando..." : "Escanear con Checky"}</span>
          </button>
          <button
            onClick={() => setSliderPosition(sliderPosition > 50 ? 15 : 85)}
            className="p-2 text-slate-600 hover:text-blue-600 hover:bg-white rounded-lg border border-slate-200 transition-all text-xs flex-shrink-0"
            title="Alternar vista"
          >
            <RotateCcw className="w-3.5 h-3.5" />
          </button>
        </div>
      </div>


      {/* Main Forensic Comparison Console Frame */}
      <div className="relative rounded-3xl p-3 sm:p-5 bg-gradient-to-b from-slate-900/90 via-slate-900 to-slate-950 border-2 border-slate-700/80 shadow-2xl overflow-hidden backdrop-blur-xl">
        {/* Subtle Console Background Glow */}
        <div className="absolute top-0 left-1/4 w-96 h-32 bg-blue-500/15 blur-3xl pointer-events-none" />
        <div className="absolute bottom-0 right-1/4 w-96 h-32 bg-cyan-500/15 blur-3xl pointer-events-none" />

        {/* Interactive Viewport Container */}
        <div
          ref={containerRef}
          onPointerDown={handlePointerDown}
          className="relative w-full h-[360px] sm:h-[460px] lg:h-[500px] rounded-2xl overflow-hidden cursor-ew-resize select-none bg-slate-950 border border-slate-800"
        >
          {/* ── BASE LAYER (LEFT): UNPROTECTED RAW PHOTO ── */}
          <div className="absolute inset-0 w-full h-full">
            <img
              src="/checkout_room.png"
              alt="Inspección Común sin CheckIt"
              className="w-full h-full object-cover filter brightness-[0.88] contrast-[0.95]"
              draggable={false}
            />

            {/* Red Alert HUD: Vulnerability Badges */}
            <div className="absolute top-4 left-4 z-10 max-w-[240px] sm:max-w-xs p-3 rounded-2xl bg-slate-950/80 backdrop-blur-md border border-rose-500/50 shadow-xl text-left pointer-events-none">
              <div className="flex items-center gap-2 mb-1">
                <ShieldAlert className="w-4 h-4 text-rose-400" />
                <span className="text-[11px] font-bold text-rose-300 uppercase tracking-wider font-mono">
                  Foto Común (Sin Custodia)
                </span>
              </div>
              <p className="text-[11px] text-slate-300 leading-tight">
                Metadatos EXIF modificables. Sin sello temporal TSA ni geolocalización protegida.
              </p>
              <div className="mt-2 inline-flex items-center gap-1.5 px-2 py-0.5 rounded-md bg-rose-500/20 text-rose-300 text-[10px] font-mono font-semibold">
                <span>✕ Desestimable en juicio</span>
              </div>
            </div>
          </div>

          {/* ── OVERLAY LAYER (RIGHT): CHECKIT CRYPTOGRAPHICALLY SEALED FORENSIC PROOF ── */}
          <div
            className="absolute inset-0 w-full h-full overflow-hidden pointer-events-none"
            style={{
              clipPath: `polygon(${sliderPosition}% 0, 100% 0, 100% 100%, ${sliderPosition}% 100%)`,
            }}
          >
            {/* Same room or checkin comparison with forensic enhancements */}
            <img
              src="/checkout_room.png"
              alt="Inspección Sellada con CheckIt"
              className="w-full h-full object-cover filter brightness-[0.98] contrast-[1.05]"
              draggable={false}
            />

            {/* Forensic Inspection Grid Overlay */}
            <div
              className="absolute inset-0 pointer-events-none opacity-30"
              style={{
                backgroundImage: `
                  linear-gradient(to right, rgba(6, 182, 212, 0.4) 1px, transparent 1px),
                  linear-gradient(to bottom, rgba(6, 182, 212, 0.4) 1px, transparent 1px)
                `,
                backgroundSize: "40px 40px",
              }}
            />

            {/* Cryptographic Green/Cyan Protected HUD */}
            <div className="absolute top-4 right-4 z-10 max-w-[270px] sm:max-w-sm p-3.5 rounded-2xl bg-slate-950/85 backdrop-blur-md border border-cyan-400/60 shadow-2xl text-right pointer-events-none">
              <div className="flex items-center justify-end gap-2 mb-1.5">
                <span className="text-[11px] font-extrabold text-cyan-300 uppercase tracking-wider font-mono">
                  Expediente Pericial CheckIt
                </span>
                <ShieldCheck className="w-4 h-4 text-cyan-400" />
              </div>

              <div className="space-y-1 text-[11px] font-mono text-slate-300">
                <div className="flex items-center justify-end gap-1.5 text-emerald-400">
                  <CheckCircle2 className="w-3.5 h-3.5" />
                  <span className="font-bold">100% Inalterable (eIDAS & Ley 59/2003)</span>
                </div>
                <div className="flex items-center justify-end gap-1.5 text-cyan-200">
                  <Lock className="w-3 h-3 text-cyan-400" />
                  <span className="truncate max-w-[210px]">SHA-256: {scanHash.slice(0, 18)}...</span>
                </div>
                <div className="flex items-center justify-end gap-1.5 text-slate-400">
                  <Clock className="w-3 h-3 text-cyan-400" />
                  <span>TSA RFC 3161 • 14:22:08 UTC</span>
                </div>
                <div className="flex items-center justify-end gap-1.5 text-slate-400">
                  <MapPin className="w-3 h-3 text-cyan-400" />
                  <span>GPS: 40.4530°N, 3.6883°W (±2m)</span>
                </div>
              </div>
            </div>

            {/* 3D Embossed Cryptographic Seal Stamp in Bottom Right */}
            <div className="absolute bottom-5 right-5 z-20 flex items-center gap-3 p-2.5 rounded-2xl bg-slate-900/90 backdrop-blur-md border border-cyan-400/50 shadow-2xl animate-fade-in pointer-events-none">
              <img
                src="/crypto_seal.png"
                alt="Sello Notarial CheckIt"
                className="w-14 h-14 sm:w-16 sm:h-16 object-contain filter drop-shadow-[0_0_16px_rgba(6,182,212,0.6)] animate-pulse"
              />
              <div className="text-left">
                <span className="text-[10px] uppercase font-bold text-cyan-400 font-mono block">
                  SELLO NOTARIAL DIGITAL
                </span>
                <span className="text-xs font-extrabold text-white font-heading block">
                  Certificado Dictamen X.509
                </span>
                <span className="text-[10px] text-emerald-400 font-mono block">
                  ✓ Válido ante Juzgado y Aseguradora
                </span>
              </div>
            </div>
          </div>

          {/* ── DRAGGABLE FORENSIC LASER SCANNER DIVIDER LINE ── */}
          <div
            className="absolute top-0 bottom-0 z-30 pointer-events-none"
            style={{ left: `${sliderPosition}%` }}
          >
            {/* The Glowing Cyan Laser Line */}
            <div className="w-[3px] h-full bg-gradient-to-b from-cyan-300 via-blue-400 to-cyan-300 shadow-[0_0_15px_#22d3ee,0_0_30px_#0284c7]" />

            {/* Top & Bottom Laser Emitters */}
            <div className="absolute -top-1 -left-[5px] w-3 h-3 rounded-full bg-white shadow-[0_0_10px_#38bdf8]" />
            <div className="absolute -bottom-1 -left-[5px] w-3 h-3 rounded-full bg-white shadow-[0_0_10px_#38bdf8]" />

            {/* Draggable Center Handle */}
            <div
              className={`absolute top-1/2 -translate-y-1/2 -left-5 w-10 h-10 rounded-full bg-gradient-to-tr from-blue-600 to-cyan-400 p-0.5 shadow-2xl cursor-ew-resize flex items-center justify-center transform transition-transform ${
                isDragging ? "scale-115 ring-4 ring-cyan-400/40" : "hover:scale-110"
              }`}
            >
              <div className="w-full h-full rounded-full bg-slate-950 flex items-center justify-center text-cyan-300">
                <Sliders className="w-4 h-4" />
              </div>
            </div>
          </div>
        </div>

        {/* Console Bottom Bar with Real-Time Hash & Checky Mascot Companion */}
        <div className="mt-4 pt-3 border-t border-slate-800 flex flex-col sm:flex-row items-center justify-between gap-3 text-xs">
          {/* Live Hash String */}
          <div className="flex items-center gap-2 text-slate-400 font-mono overflow-hidden max-w-full">
            <span className="px-2 py-0.5 rounded bg-slate-800 text-[10px] font-bold text-cyan-400 flex-shrink-0">
              HASH SHA-256:
            </span>
            <span className="text-[11px] text-slate-300 truncate font-mono tracking-tight">
              {scanHash}
            </span>
          </div>

          {/* Interactive Checky Mascot Prompt */}
          <div className="flex items-center gap-3">
            <span className="text-[11px] text-slate-400 hidden sm:inline-block">
              ¿Quieres probar con tu propia foto?
            </span>
            <a
              href="#simulador"
              className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-xl bg-cyan-500/10 hover:bg-cyan-500/20 text-cyan-300 border border-cyan-400/30 text-xs font-semibold transition-all hover:scale-105 whitespace-nowrap flex-shrink-0"
            >
              <Zap className="w-3.5 h-3.5 text-cyan-400" />
              <span>Abrir Certificador en Vivo</span>
            </a>

          </div>
        </div>
      </div>
    </div>
  );
}
