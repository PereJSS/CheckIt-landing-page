import React, { useState, useEffect, useRef } from "react";
import CheckItLogo, { CheckItEmblem } from "./components/CheckItLogo";
import CheckyMascot from "./components/CheckyMascot";
import ForensicScannerHero from "./components/ForensicScannerHero";
import {
  Shield,
  ShieldCheck,
  FileCheck,
  CheckCircle2,
  ArrowRight,
  UploadCloud,
  Sparkles,
  Building2,
  Smartphone,
  FileText,
  FileDown,
  Menu,
  X,
  ExternalLink,
  AlertTriangle,
  Clock,
  Database,
  Copy,
  Check,
  Eye,
  Zap,
  QrCode,
  Award,
  Scale,
  TrendingUp,
  Briefcase,
  Layers,
  ChevronRight,
  RefreshCw,
  SlidersHorizontal,
  Play,
  Pause,
  Volume2,
  VolumeX,
  RotateCcw,
  CheckCircle,
  Lock,
  Network,
  Calculator,
  MapPin,
  ShieldAlert
} from "lucide-react";


// Inline SVGs for brand icons
function GithubIcon({ className = "w-5 h-5" }) {
  return (
    <svg className={className} fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
      <path fillRule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.53 1.032 1.53 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" clipRule="evenodd" />
    </svg>
  );
}

function LinkedinIcon({ className = "w-5 h-5" }) {
  return (
    <svg className={className} fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
      <path d="M19 3a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h14m-.5 15.5v-5.3a3.26 3.26 0 0 0-3.26-3.26c-.85 0-1.84.52-2.28 1.3v-1.11h-2.79v8.37h2.79v-4.93c0-.77.62-1.4 1.39-1.4a1.4 1.4 0 0 1 1.4 1.4v4.93h2.75M6.88 8.56a1.68 1.68 0 0 0 1.68-1.68c0-.93-.75-1.69-1.68-1.69a1.69 1.69 0 0 0-1.69 1.69c0 .93.76 1.68 1.69 1.68m1.39 9.94v-8.37H5.5v8.37h2.77z" />
    </svg>
  );
}

// ── ROI Multi-Sector Configuration & Tailored Industry Data ──
const ROI_SECTORS = {
  seguros: {
    id: "seguros",
    name: "Seguros & Peritajes",
    shortName: "Seguros",
    badge: "Aseguradoras, Gabinetes Periciales y Tramitadores",
    icon: ShieldCheck,
    headline: "Neutraliza fraudes, partes con fotos manipuladas y sobrecostes en peritajes contradictorios.",
    sliderUnits: {
      label: "Siniestros peritados o tramitados al año:",
      min: 10,
      max: 2000,
      step: 10,
      defaultVal: 120,
      unitSingle: "siniestro",
      unitPlural: "siniestros",
      helper: "Expedientes de hogar, comunidades, comercio o autos gestionados por tu equipo.",
    },
    sliderDisputes: {
      label: "Siniestros con sospecha de fraude o disputa:",
      min: 1,
      max: 100,
      step: 1,
      defaultVal: 12,
      unitSingle: "siniestro conflictivo",
      unitPlural: "siniestros conflictivos",
      helper: "Casos donde el asegurado o reparador aporta fotos dudosas o fechas no verificadas.",
    },
    sliderCost: {
      label: "Coste medio por indemnización indebida o litigio:",
      min: 100,
      max: 5000,
      step: 50,
      defaultVal: 750,
      helper: "Importe abonado sin cobertura real o gasto en peritajes contradictorios por falta de prueba sólida.",
    },
    savingsSubtitle: "Indemnizaciones fraudulentas y peritajes contradictorios que dejas de perder gracias a la solidez probatoria de CheckIt.",
    savingsContextLabel: "Pérdidas por fraude y peritaje mitigadas:",
    lossesTitle: "Pérdidas típicas en el Sector Asegurador",
    losses: [
      {
        title: "Fraude de preexistencias y fotos recicladas",
        desc: "Asegurados que utilizan fotos tomadas semanas o meses antes del siniestro (o extraídas de internet) para simular daños recientes cubiertos por la póliza.",
        tag: "Fraude recurrente",
      },
      {
        title: "Fotos de WhatsApp con metadatos EXIF alterados",
        desc: "Las imágenes enviadas por chat pierden trazabilidad de origen y su fecha/hora EXIF se puede falsear en segundos con apps gratuitas, impidiendo verificar la cobertura temporal.",
        tag: "Vulnerabilidad EXIF",
      },
      {
        title: "Sobrepagos defensivos por falta de contra-peritaje fehaciente",
        desc: "Al carecer de una prueba inexpugnable, la aseguradora prefiere indemnizar 600€-1.500€ antes que asumir las costas procesales de un arbitraje o litigio prolongado.",
        tag: "Sobrepagos forzados",
      },
    ],
    solutionsTitle: "Soluciones que aporta CheckIt",
    solutions: [
      {
        title: "Sello Temporal Notarial RFC 3161 in situ",
        desc: "Fecha y hora oficiales emitidas por Autoridad de Sellado de Tiempo (TSA). Es técnicamente inviable simular que un siniestro ocurrió dentro del periodo de cobertura de la póliza.",
        tag: "Fecha cierta notarial",
      },
      {
        title: "Detección forense de manipulación y firma X.509",
        desc: "La evidencia se sella criptográficamente desde el sensor de la cámara. Cualquier recorte o edición de píxeles rompe inmediatamente el certificado pericial.",
        tag: "Integridad blindada",
      },
      {
        title: "Dictamen pericial PDF admitido sin contradicción",
        desc: "Emisión instantánea de informe con código QR de verificación pública aceptado de inmediato por reaseguradoras y juzgados sin necesidad de peritajes externos adicionales.",
        tag: "Resolución en 1 clic",
      },
    ],
  },
  legal: {
    id: "legal",
    name: "Legal & Despachos",
    shortName: "Legal",
    badge: "Abogados, Procuradores y Administradores Concursales",
    icon: Scale,
    headline: "Blinda tus demandas y defensas con prueba documental plena admitida en sala sin riesgo de tacha.",
    sliderUnits: {
      label: "Expedientes con carga probatoria al año:",
      min: 5,
      max: 300,
      step: 5,
      defaultVal: 25,
      unitSingle: "expediente",
      unitPlural: "expedientes",
      helper: "Procedimientos civiles, vicios ocultos, arrendamientos, reclamaciones de cantidad o daños.",
    },
    sliderDisputes: {
      label: "Pruebas fotográficas impugnadas por la contraria:",
      min: 1,
      max: 40,
      step: 1,
      defaultVal: 5,
      unitSingle: "prueba cuestionada",
      unitPlural: "pruebas cuestionadas",
      helper: "Incidentes donde la parte contraria tacha la validez o fecha de las fotos digitales aportadas.",
    },
    sliderCost: {
      label: "Coste medio por acta notarial o perito informático:",
      min: 150,
      max: 3000,
      step: 50,
      defaultVal: 450,
      helper: "Minutas extraordinarias de notaría de presencia, peritos informáticos judiciales o riesgo de condena en costas.",
    },
    savingsSubtitle: "Actas notariales presenciales, peritajes externos y riesgos de desestimación judicial que eliminas con CheckIt.",
    savingsContextLabel: "Costes procesales y periciales ahorrados:",
    lossesTitle: "Pérdidas típicas en Litigación y Ámbito Legal",
    losses: [
      {
        title: "Impugnación de pruebas digitales (Arts. 326 y 384 LEC)",
        desc: "La contraparte tacha pantallazos o fotos impresas alegando alterabilidad, obligando al cliente a contratar peritos informáticos de 800€-1.500€ para ratificar la prueba.",
        tag: "Tacha procesal",
      },
      {
        title: "Sobrecoste y demora de actas notariales de presencia",
        desc: "Desplazar a un notario para dar fe de humedades, obras o desahucios cuesta entre 250€ y 600€ por visita y demora la interposición de medidas cautelares urgentes varios días.",
        tag: "Lentitud notarial",
      },
      {
        title: "Riesgo de condena en costas por debilidad probatoria",
        desc: "Demandas de daños por incumplimiento o rescisión contractual se pierden si no se demuestra de manera fehaciente qué estado exacto existía en una fecha concreta.",
        tag: "Riesgo de costas",
      },
    ],
    solutionsTitle: "Soluciones que aporta CheckIt",
    solutions: [
      {
        title: "Fuerza Probatoria Plena (eIDAS & Ley 59/2003)",
        desc: "El dictamen incorpora firma electrónica cualificada y sello de tiempo de prestador de servicios de confianza cualificado, invirtiendo la carga de la prueba en sala.",
        tag: "Valor probatorio pleno",
      },
      {
        title: "QR de cotejo judicial directo para magistrados",
        desc: "El tribunal o el letrado de la administración de justicia puede escanear el QR del documento y verificar en tiempo real el hash SHA-256 sin requerir perito en sala.",
        tag: "Verificación judicial",
      },
      {
        title: "Sustitución ágil del acta notarial presencial",
        desc: "Cualquier técnico, letrado o perito levanta acta pericial certificada en campo en 2 minutos por un coste marginal (<3€), agilizando medidas cautelares en el mismo día.",
        tag: "Inmediatez en sala",
      },
    ],
  },
  inmobiliario: {
    id: "inmobiliario",
    name: "Inmobiliario & SOCIMIs",
    shortName: "Inmobiliario",
    badge: "Property Managers, Build-to-Rent y Gestoras de Patrimonio",
    icon: Building2,
    headline: "Recupera las fianzas legítimas y elimina las reparaciones que hoy asume el propietario.",
    sliderUnits: {
      label: "Número de unidades gestionadas:",
      min: 5,
      max: 500,
      step: 5,
      defaultVal: 40,
      unitSingle: "propiedad",
      unitPlural: "propiedades",
      helper: "Viviendas, locales u oficinas bajo contrato de arrendamiento o administración activa.",
    },
    sliderDisputes: {
      label: "Disputas de fianza o daños no reconocidos al año:",
      min: 1,
      max: 80,
      step: 1,
      defaultVal: 6,
      unitSingle: "conflicto de fianza",
      unitPlural: "conflictos de fianza",
      helper: "Check-outs donde el inquilino niega desperfectos o rechaza la retención de la fianza.",
    },
    sliderCost: {
      label: "Coste medio por desperfecto o reparación asumida:",
      min: 50,
      max: 2000,
      step: 25,
      defaultVal: 280,
      helper: "Pintura, parqué rayado, roturas o fontanería que el gestor acaba pagando por falta de prueba comparativa.",
    },
    savingsSubtitle: "Fianzas legítimas e indemnizaciones de inquilinos que dejas de perder gracias a las actas comparativas blindadas de CheckIt.",
    savingsContextLabel: "Fianzas y reparaciones recuperadas:",
    lossesTitle: "Pérdidas típicas en Gestión Inmobiliaria",
    losses: [
      {
        title: "El inquilino alega que 'ya estaba roto al entrar'",
        desc: "Sin un acta fotográfica sellada el día de entrega de llaves, los arbitrajes de consumo obligan a reintegrar la fianza íntegra y el propietario paga la reparación.",
        tag: "Fianzas perdidas",
      },
      {
        title: "Fotos de móvil dispersas en carpetas de WhatsApp",
        desc: "Las fotos del check-in se pierden en teléfonos de comerciales que rotan de empresa, resultando inencontrables a los 3 años cuando el contrato vence.",
        tag: "Desorganización",
      },
      {
        title: "Reparaciones de rotación asumidas por la propiedad",
        desc: "Las carteras de alquiler gastan anualmente miles de euros en puestas a punto que legalmente correspondían al arrendatario saliente por negligencia o mal uso.",
        tag: "Erosión de margen",
      },
    ],
    solutionsTitle: "Soluciones que aporta CheckIt",
    solutions: [
      {
        title: "Cámara Ghosting: Check-in vs Check-out idénticos",
        desc: "La app superpone la silueta semitransparente de la foto de entrada para repetir exactamente el mismo ángulo al salir, evidenciando el daño de forma indiscutible.",
        tag: "Mismo encuadre",
      },
      {
        title: "Anexo contractual certificado con hash SHA-256",
        desc: "El informe de entrega de llaves se estampa con sello temporal y se anexa digitalmente al contrato, blindando legalmente la posterior retención de fianza.",
        tag: "Blindaje contractual",
      },
      {
        title: "Cero fricción: cierre de disputas en 24 horas",
        desc: "Al presentar al inquilino saliente el dictamen con firma pericial y sello notarial, el 94% de las retenciones se aceptan de mutuo acuerdo sin arbitrajes.",
        tag: "Resolución inmediata",
      },
    ],
  },
  construccion: {
    id: "construccion",
    name: "Construcción & Obras",
    shortName: "Construcción",
    badge: "Promotoras, Constructoras y Direcciones Facultativas",
    icon: Briefcase,
    headline: "Certifica hitos de obra, vicios ocultos y remates sin disputas cruzadas entre subcontratas.",
    sliderUnits: {
      label: "Obras, proyectos o reformas al año:",
      min: 1,
      max: 100,
      step: 1,
      defaultVal: 12,
      unitSingle: "proyecto/obra",
      unitPlural: "proyectos/obras",
      helper: "Edificaciones, rehabilitaciones integrales o hitos de obra civil bajo supervisión.",
    },
    sliderDisputes: {
      label: "Desacuerdos con subcontratas o vicios por proyecto:",
      min: 1,
      max: 50,
      step: 1,
      defaultVal: 5,
      unitSingle: "desacuerdo de remate",
      unitPlural: "desacuerdos de remate",
      helper: "Disputas entre gremios sobre quién causó un desperfecto o retraso en la entrega de fase.",
    },
    sliderCost: {
      label: "Coste medio por retrabajo o penalización de obra:",
      min: 200,
      max: 8000,
      step: 100,
      defaultVal: 950,
      helper: "Coste de rehacer remates defectuosos, demoras de recepción provisional o reclamaciones de garantía decenal.",
    },
    savingsSubtitle: "Retrabajos cruzados entre gremios y penalizaciones por demora que eliminas mediante la bitácora criptográfica de CheckIt.",
    savingsContextLabel: "Sobrecostes y penalizaciones evitadas:",
    lossesTitle: "Pérdidas típicas en Obras y Construcción",
    losses: [
      {
        title: "Disputas cruzadas entre gremios y subcontratas",
        desc: "El instalador culpa al albañil y el albañil al pintor. Nadie asume el daño a los acabados y la constructora principal termina pagando la reparación de su bolsillo.",
        tag: "Conflicto entre gremios",
      },
      {
        title: "Instalaciones tapadas sin prueba previa al cierre",
        desc: "Una vez colocado el pladur o vertido el hormigón, una fuga o fisura desencadena peritajes destructivos al no existir prueba temporal del estado previo.",
        tag: "Vicio oculto",
      },
      {
        title: "Bloqueo de certificaciones y pagos bancarios",
        desc: "Discrepancias entre la dirección facultativa y el project manager sobre el avance real que congelan certificaciones de pago y dañan el flujo de caja de la obra.",
        tag: "Retención de pagos",
      },
    ],
    solutionsTitle: "Soluciones que aporta CheckIt",
    solutions: [
      {
        title: "Bitácora Criptográfica de Fases Ocultas",
        desc: "Registro fotográfico inmutable con coordenadas GPS y sello de tiempo justo antes del sellado de falsos techos, forjados e instalaciones bajo tubo.",
        tag: "Prueba pre-cerramiento",
      },
      {
        title: "Recepción de zona firmada por subcontratistas",
        desc: "Cada gremio inspecciona y firma en la app móvil el estado en el que recibe la zona de trabajo antes de iniciar su labor, delimitando responsabilidades.",
        tag: "Delimitación de culpa",
      },
      {
        title: "Liberación inmediata de certificaciones bancarias",
        desc: "Informes oficiales PDF con sello RFC 3161 que justifican documentalmente los hitos ejecutados ante promotores y entidades financieras sin demoras.",
        tag: "Liquidez sin demoras",
      },
    ],
  },
};

export default function LandingPage() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  // Active view tab for the Product Tour section (Gestor / Operario / Informe)
  const [activeTourTab, setActiveTourTab] = useState("gestor");

  // ── Hero Interactive Live Inspection Terminal State ──
  const [heroLiveTime, setHeroLiveTime] = useState("");
  const [heroTamperActive, setHeroTamperActive] = useState(false);
  const [heroTamperStatus, setHeroTamperStatus] = useState("normal"); // 'normal' | 'tampering' | 'secured'

  useEffect(() => {
    const updateTime = () => {
      const now = new Date();
      const hours = String(now.getHours()).padStart(2, "0");
      const minutes = String(now.getMinutes()).padStart(2, "0");
      const seconds = String(now.getSeconds()).padStart(2, "0");
      setHeroLiveTime(`${hours}:${minutes}:${seconds} CET`);
    };
    updateTime();
    const interval = setInterval(updateTime, 1000);
    return () => clearInterval(interval);
  }, []);

  const triggerHeroTamperSimulation = () => {
    if (heroTamperActive) return;
    setHeroTamperActive(true);
    setHeroTamperStatus("tampering");
    setTimeout(() => {
      setHeroTamperStatus("secured");
      setTimeout(() => {
        setHeroTamperActive(false);
        setHeroTamperStatus("normal");
      }, 2400);
    }, 2000);
  };

  // ── Video Showcase State & Chapters (Synchronized with 3D Video) ──
  const videoRef = useRef(null);
  const [isVideoPlaying, setIsVideoPlaying] = useState(true);
  const [isVideoMuted, setIsVideoMuted] = useState(true);
  const [videoProgress, setVideoProgress] = useState(0);
  const [activeChapterIndex, setActiveChapterIndex] = useState(0);

  const videoChapters = [
    {
      id: "building",
      time: 0,
      title: "Activo Inmobiliario 3D",
      shortTitle: "Activo 3D",
      subtitle: "Asignación Digital",
      desc: "El inmueble se modela y asigna sobre la matriz geométrica del sistema con control de acceso perimetral.",
      icon: Building2,
      badge: "00:00 • Activo"
    },
    {
      id: "checklist",
      time: 1.8,
      title: "Inspección In Situ",
      shortTitle: "Inspección",
      subtitle: "Verificación de Daños",
      desc: "El operario captura las evidencias en campo con encuadre guiado y geolocalización verificada.",
      icon: Eye,
      badge: "00:02 • Campo"
    },
    {
      id: "hash",
      time: 3.2,
      title: "Criptografía SHA-256",
      shortTitle: "Hash SHA-256",
      subtitle: "Huella Digital Inmutable",
      desc: "Haces láser criptográficos sellan la huella hash de la imagen en el mismo milisegundo de la captura.",
      icon: Zap,
      badge: "00:03 • Hash"
    },
    {
      id: "padlock",
      time: 4.6,
      title: "Candado de Cristal & PDF",
      shortTitle: "Candado PDF",
      subtitle: "Blindaje Criptográfico",
      desc: "El informe de evidencias queda encapsulado dentro de un contenedor digital imposible de vulnerar.",
      icon: Lock,
      badge: "00:05 • Custodia"
    },
    {
      id: "timestamp",
      time: 5.8,
      title: "Sello Temporal RFC 3161",
      shortTitle: "Sello TSA",
      subtitle: "Autoridad Notarial TSA",
      desc: "Estampado de fecha y hora oficial inalterable que prueba ante cualquier tribunal cuándo ocurrió el siniestro.",
      icon: Clock,
      badge: "00:06 • Tiempo"
    },
    {
      id: "certificate",
      time: 7.2,
      title: "Dictamen Pericial X.509",
      shortTitle: "Dictamen Legal",
      subtitle: "Firma Jurídica Oficial",
      desc: "Emisión del certificado con sello pericial admitido de inmediato por aseguradoras y juzgados.",
      icon: Award,
      badge: "00:07 • Dictamen"
    },
    {
      id: "network",
      time: 8.6,
      title: "Red de Custodia Distribuida",
      shortTitle: "Red Custodia",
      subtitle: "Inmutabilidad en Cadena",
      desc: "Eslabones de cristal interconectan los activos en una cadena de bloques auditada e inviolable.",
      icon: Network,
      badge: "00:08 • Red B2B"
    }
  ];


  const handleTimeUpdate = () => {
    if (!videoRef.current) return;
    const current = videoRef.current.currentTime;
    const duration = videoRef.current.duration || 10;
    setVideoProgress((current / duration) * 100);

    for (let i = videoChapters.length - 1; i >= 0; i--) {
      if (current >= videoChapters[i].time - 0.25) {
        setActiveChapterIndex(i);
        break;
      }
    }
  };

  const jumpToChapter = (index) => {
    setActiveChapterIndex(index);
    if (videoRef.current) {
      videoRef.current.currentTime = videoChapters[index].time;
      videoRef.current.play();
      setIsVideoPlaying(true);
    }
  };

  const toggleVideoPlayback = () => {
    if (!videoRef.current) return;
    if (videoRef.current.paused) {
      videoRef.current.play();
      setIsVideoPlaying(true);
    } else {
      videoRef.current.pause();
      setIsVideoPlaying(false);
    }
  };

  const toggleVideoMute = () => {
    if (!videoRef.current) return;
    videoRef.current.muted = !videoRef.current.muted;
    setIsVideoMuted(videoRef.current.muted);
  };

  const restartVideo = () => {
    if (!videoRef.current) return;
    videoRef.current.currentTime = 0;
    videoRef.current.play();
    setIsVideoPlaying(true);
    setActiveChapterIndex(0);
  };

  // ── Simulator State: Visual Certification Machine ──
  const [selectedIncident, setSelectedIncident] = useState({
    id: "INC-8821",
    title: "Filtración en Techo de Oficina",
    zone: "Edificio Castellana 184 • Planta 3",
    date: "14 Septiembre 2026 • 11:42 CET",
    status: "100% Inalterable",
    inspector: "Carlos Méndez",
    imageTheme: "gotera",
    legalProof: "Aceptado por Aseguradora sin objeción",
  });

  const [isCertifying, setIsCertifying] = useState(false);
  const [customFileLoaded, setCustomFileLoaded] = useState(null);

  const triggerCertification = (sample) => {
    setIsCertifying(true);
    setTimeout(() => {
      setSelectedIncident(sample);
      setIsCertifying(false);
    }, 600);
  };

  const handleCustomUpload = (e) => {
    const file = e.target.files?.[0];
    if (!file) return;

    setIsCertifying(true);
    const objectUrl = URL.createObjectURL(file);
    setCustomFileLoaded(objectUrl);

    setTimeout(() => {
      setSelectedIncident({
        id: `INC-${Math.floor(1000 + Math.random() * 9000)}`,
        title: file.name.replace(/\.[^/.]+$/, ""),
        zone: "Ubicación Georreferenciada en Campo",
        date: "Hoy • " + new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }) + " CET",
        status: "Sello Notarial Emitido",
        inspector: "Técnico Certificado CheckIt",
        imageTheme: "custom",
        legalProof: "Huella y Sello Temporal Registrados",
      });
      setIsCertifying(false);
    }, 800);
  };

  const sampleIncidents = [
    {
      id: "INC-4029",
      title: "Filtración en Techo de Oficina",
      zone: "Torre Castellana 184 • Planta 3",
      date: "14 Sep 2026 • 11:42 CET",
      status: "100% Inalterable",
      inspector: "Carlos Méndez",
      imageTheme: "gotera",
      legalProof: "Aceptado por Aseguradora sin objeción",
    },
    {
      id: "INC-4030",
      title: "Cerradura de Acceso Forzada",
      zone: "Residencial Las Rozas • Portal B",
      date: "14 Sep 2026 • 09:15 CET",
      status: "100% Inalterable",
      inspector: "Elena Rubio",
      imageTheme: "cerradura",
      legalProof: "Validez Pericial para Atestado Policial",
    },
    {
      id: "INC-4031",
      title: "Grieta en Muro Estructural",
      zone: "Nave Logística Getafe • Bahía 4",
      date: "13 Sep 2026 • 17:30 CET",
      status: "100% Inalterable",
      inspector: "Carlos Méndez",
      imageTheme: "grieta",
      legalProof: "Garantía Decenal Bloqueada",
    },
  ];

  // ── ROI Interactive Multi-Sector Calculator State ──
  const [activeRoiSector, setActiveRoiSector] = useState("seguros");
  const currentRoiSector = ROI_SECTORS[activeRoiSector] || ROI_SECTORS.seguros;
  const ActiveSectorIcon = currentRoiSector.icon;

  const [roiUnits, setRoiUnits] = useState(ROI_SECTORS.seguros.sliderUnits.defaultVal);
  const [roiDisputes, setRoiDisputes] = useState(ROI_SECTORS.seguros.sliderDisputes.defaultVal);
  const [roiCost, setRoiCost] = useState(ROI_SECTORS.seguros.sliderCost.defaultVal);

  const handleSectorChange = (sectorId) => {
    setActiveRoiSector(sectorId);
    const sector = ROI_SECTORS[sectorId];
    if (sector) {
      setRoiUnits(sector.sliderUnits.defaultVal);
      setRoiDisputes(sector.sliderDisputes.defaultVal);
      setRoiCost(sector.sliderCost.defaultVal);
    }
  };

  const totalSaved = roiDisputes * roiCost;
  const estimatedPlatformCost = Math.max(24, roiUnits * 2.5 * 12);
  const paybackMultiplier = Math.max(1, Math.round(totalSaved / estimatedPlatformCost));

  return (
    <div className="min-h-screen text-slate-800 relative selection:bg-blue-600 selection:text-white overflow-hidden">
      
      {/* ── 3D AMBIENT PERSPECTIVE MATRIX BACKGROUND (MATCHING THE VIDEO DNA) ── */}
      <div className="fixed inset-0 pointer-events-none z-0 perspective-grid-container perspective-grid-ambient">
        {/* 3D Receding Floor Grid */}
        <div className="perspective-grid-floor" />

        {/* Floating 3D Chrome Spheres (Reflective Mirror Metal from Video) */}
        <div 
          className="sphere-chrome absolute w-14 h-14 top-24 left-[8%] opacity-85 animate-float-slow"
          style={{ filter: "blur(0.2px)" }}
        />
        <div 
          className="sphere-chrome absolute w-8 h-8 top-[38%] left-[4%] opacity-70 animate-float-reverse" 
          style={{ animationDelay: "1.5s" }}
        />
        <div 
          className="sphere-chrome absolute w-16 h-16 top-[18%] right-[7%] opacity-90 animate-float-medium"
          style={{ animationDelay: "0.8s" }}
        />
        <div 
          className="sphere-chrome absolute w-10 h-10 top-[52%] right-[11%] opacity-75 animate-float-slow" 
          style={{ animationDelay: "2.2s" }}
        />
        <div 
          className="sphere-chrome absolute w-6 h-6 bottom-32 left-[14%] opacity-60 animate-float-medium"
          style={{ animationDelay: "3s" }}
        />

        {/* Floating 3D Crystal Water-Drop Cyan Glass Spheres (From Video) */}
        <div 
          className="sphere-glass absolute w-12 h-12 top-[28%] left-[16%] opacity-90 animate-float-medium"
          style={{ animationDelay: "1s" }}
        />
        <div 
          className="sphere-glass absolute w-18 h-18 top-[44%] right-[5%] opacity-85 animate-float-reverse"
          style={{ animationDelay: "2s" }}
        />
        <div 
          className="sphere-glass absolute w-9 h-9 top-16 right-[24%] opacity-75 animate-float-slow"
          style={{ animationDelay: "3.5s" }}
        />
        <div 
          className="sphere-glass absolute w-11 h-11 bottom-44 right-[18%] opacity-80 animate-float-medium"
          style={{ animationDelay: "0.5s" }}
        />

        {/* Subtle Background Laser Connection Beams */}
        <div className="absolute top-[280px] left-[15%] w-[70%] laser-line-h opacity-40 pointer-events-none" />
        <div className="absolute top-[680px] left-[10%] w-[80%] laser-line-h opacity-25 pointer-events-none" />
      </div>

      {/* ── HEADER / NAVIGATION ── */}
      <header className="sticky top-0 z-50 glass-nav-3d transition-all duration-300">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-20 flex items-center justify-between">
          {/* Brand Logo */}
          <CheckItLogo size="md" />

          {/* Desktop Nav Links - Clean, Spacious & Uncluttered */}
          <nav className="hidden lg:flex items-center gap-6 xl:gap-8 text-sm font-medium text-slate-600">
            <a href="#problema-solucion" className="hover:text-blue-600 transition-colors py-1 whitespace-nowrap">
              Solución
            </a>
            <a href="#como-funciona" className="hover:text-blue-600 transition-colors py-1 whitespace-nowrap">
              Proceso
            </a>
            <a href="#forensic-scanner" className="hover:text-blue-600 transition-colors py-1 whitespace-nowrap">
              Escáner
            </a>
            <a href="#showcase-video" className="hover:text-blue-600 transition-colors py-1 whitespace-nowrap">
              Vídeo 3D
            </a>
            <a href="#calculadora-roi" className="hover:text-blue-600 transition-colors py-1 whitespace-nowrap">
              Calculadora
            </a>
          </nav>

          {/* Right Header CTAs - Compact, Balanced & Breathable */}
          <div className="hidden sm:flex items-center gap-2 xl:gap-3 flex-shrink-0">
            <a
              href="https://pfm-check-it.vercel.app/login"
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-1.5 px-3 py-1.5 text-xs font-bold text-blue-700 bg-blue-50/90 hover:bg-blue-100/90 rounded-xl border border-blue-200/80 transition-all whitespace-nowrap shadow-xs hover:shadow-sm"
              title="Abrir app en producción"
            >
              <ExternalLink className="w-3.5 h-3.5 text-blue-600 flex-shrink-0" />
              <span>Probar App</span>
            </a>

            <a
              href="https://github.com/PereJSS/CheckIt-landing-page"
              target="_blank"
              rel="noreferrer"
              className="p-1.5 text-slate-600 hover:text-slate-900 rounded-xl hover:bg-white/80 transition-colors border border-slate-200/80 shadow-xs flex-shrink-0"
              title="Repositorio en GitHub"
            >
              <GithubIcon className="w-4 h-4" />
            </a>

            <a
              href="#simulador"
              className="inline-flex items-center gap-1.5 px-3 py-1.5 text-xs sm:text-sm font-semibold text-white bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-700 hover:to-blue-800 rounded-xl shadow-md shadow-blue-600/25 hover:shadow-lg hover:shadow-blue-600/35 transition-all active:scale-[0.98] whitespace-nowrap border border-blue-400/30 flex-shrink-0"
            >
              <span>Simulador</span>
              <ArrowRight className="w-3.5 h-3.5 flex-shrink-0" />
            </a>
          </div>

          {/* Mobile hamburger menu */}
          <div className="lg:hidden flex items-center gap-2">
            <a
              href="https://pfm-check-it.vercel.app/login"
              target="_blank"
              rel="noreferrer"
              className="sm:hidden inline-flex items-center gap-1 px-2.5 py-1 text-xs font-bold text-blue-700 bg-blue-50 rounded-lg border border-blue-200"
            >
              <ExternalLink className="w-3 h-3" />
              <span>App</span>
            </a>
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 rounded-lg text-slate-600 hover:bg-slate-100"
              aria-label="Menú"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>

        {/* Mobile dropdown */}
        {mobileMenuOpen && (
          <div className="lg:hidden glass-panel-3d border-b border-slate-200 px-6 py-5 space-y-4">
            <a
              href="#forensic-scanner"
              onClick={() => setMobileMenuOpen(false)}
              className="block text-base font-semibold text-cyan-600"
            >
              Escáner Forense
            </a>
            <a
              href="#showcase-video"
              onClick={() => setMobileMenuOpen(false)}
              className="block text-base font-semibold text-blue-600"
            >
              Demostración 3D
            </a>
            <a
              href="#problema-solucion"
              onClick={() => setMobileMenuOpen(false)}
              className="block text-base font-medium text-slate-700 hover:text-blue-600"
            >
              Problema vs Solución
            </a>

            <a
              href="#como-funciona"
              onClick={() => setMobileMenuOpen(false)}
              className="block text-base font-medium text-slate-700 hover:text-blue-600"
            >
              ¿Cómo Funciona?
            </a>
            <a
              href="#tour-producto"
              onClick={() => setMobileMenuOpen(false)}
              className="block text-base font-medium text-slate-700 hover:text-blue-600"
            >
              El Producto
            </a>
            <a
              href="#calculadora-roi"
              onClick={() => setMobileMenuOpen(false)}
              className="block text-base font-medium text-slate-700 hover:text-blue-600"
            >
              Calculadora ROI
            </a>
            <a
              href="#simulador"
              onClick={() => setMobileMenuOpen(false)}
              className="block text-base font-medium text-blue-600 font-semibold"
            >
              Simulador en Vivo
            </a>
            <div className="pt-4 border-t border-slate-200 flex flex-col gap-3">
              <a
                href="https://pfm-check-it.vercel.app/login"
                target="_blank"
                rel="noreferrer"
                className="flex items-center justify-center gap-2 px-4 py-2.5 text-sm font-bold text-white bg-gradient-to-r from-blue-600 to-cyan-600 rounded-xl shadow-md whitespace-nowrap flex-shrink-0"
              >
                <ExternalLink className="w-4 h-4 flex-shrink-0" />
                <span>Probar App</span>
              </a>
              <a
                href="https://github.com/PereJSS/CheckIt-landing-page"
                target="_blank"
                rel="noreferrer"
                className="flex items-center justify-center gap-2 px-4 py-2.5 text-sm font-semibold text-slate-700 bg-white border border-slate-200 rounded-xl whitespace-nowrap flex-shrink-0"
              >
                <GithubIcon className="w-4 h-4 flex-shrink-0" />
                <span>Ver Proyecto en GitHub</span>
              </a>
              <a
                href="#simulador"
                onClick={() => setMobileMenuOpen(false)}
                className="flex items-center justify-center gap-2 px-4 py-2.5 text-sm font-semibold text-slate-800 bg-slate-100 hover:bg-slate-200 rounded-xl whitespace-nowrap flex-shrink-0"
              >
                <span>Simulador</span>
                <ArrowRight className="w-4 h-4 flex-shrink-0" />
              </a>
            </div>
          </div>
        )}
      </header>

      {/* ── 1. HERO SECTION (HIGH IMPACT 2-COLUMN COMMAND CENTER) ── */}
      <section className="relative pt-10 pb-16 md:pt-14 md:pb-24 overflow-hidden z-10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
          
          {/* Main 2-Column Hero Grid */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-8 items-center">
            
            {/* Left Column: Brand Statement, High-Converting CTAs & Direct Link to Vercel */}
            <div className="lg:col-span-7 space-y-6 text-left">
              
              {/* Live Deployment & Standards Badges */}
              <div className="flex flex-wrap items-center gap-2.5">
                <a
                  href="https://pfm-check-it.vercel.app/login"
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-emerald-500/10 hover:bg-emerald-500/20 border border-emerald-500/30 text-xs font-bold text-emerald-800 transition-all shadow-xs group whitespace-nowrap"
                >
                  <span className="relative flex h-2 w-2">
                    <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                    <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
                  </span>
                  <span>Plataforma en Producción • Activa</span>
                  <ExternalLink className="w-3 h-3 text-emerald-600 group-hover:translate-x-0.5 transition-transform" />
                </a>

                <div className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-blue-50/90 border border-blue-200/80 text-xs font-semibold text-blue-900 shadow-xs whitespace-nowrap">
                  <ShieldCheck className="w-3.5 h-3.5 text-blue-600" />
                  <span>eIDAS & Ley 59/2003</span>
                </div>
              </div>

              {/* Main Headline */}
              <h1 className="font-heading font-extrabold text-4xl sm:text-5xl xl:text-6xl text-slate-900 tracking-tight leading-[1.12]">
                Inmutabilidad y{" "}
                <span className="bg-gradient-to-r from-blue-600 via-sky-500 to-cyan-600 bg-clip-text text-transparent">
                  Validez Legal
                </span>{" "}
                en Cada Inspección B2B.
              </h1>

              {/* Subtitle */}
              <p className="text-base sm:text-lg text-slate-600 max-w-2xl leading-relaxed font-normal">
                La plataforma enterprise que transforma las fotografías de entrada, salida y siniestro en{" "}
                <strong className="font-semibold text-slate-900">pruebas periciales legalmente inalterables</strong>.
                Blindamos a socimis, gestoras de patrimonio y aseguradoras frente a fraudes y disputas de fianza.
              </p>

              {/* Action Buttons */}
              <div className="flex flex-wrap items-center gap-3.5 pt-1">
                {/* Primary Button: Direct to Deployed App */}
                <a
                  href="https://pfm-check-it.vercel.app/login"
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center justify-center gap-2.5 px-6 py-3.5 text-sm sm:text-base font-bold text-white bg-gradient-to-r from-blue-600 via-blue-600 to-cyan-600 hover:from-blue-700 hover:to-cyan-700 rounded-xl shadow-lg shadow-blue-600/30 hover:shadow-xl hover:shadow-blue-600/40 transition-all transform hover:-translate-y-0.5 active:translate-y-0 border border-cyan-300/30 whitespace-nowrap flex-shrink-0"
                >
                  <ExternalLink className="w-4 h-4 text-cyan-200 flex-shrink-0" />
                  <span>Probar App</span>
                  <ArrowRight className="w-4 h-4 flex-shrink-0" />
                </a>

                {/* Secondary Button: 3D Video Showcase */}
                <a
                  href="#showcase-video"
                  className="inline-flex items-center justify-center gap-2 px-5 py-3.5 text-sm font-semibold text-slate-700 bg-white hover:bg-slate-50 border border-slate-200/90 hover:border-blue-300 rounded-xl shadow-xs hover:shadow-md transition-all whitespace-nowrap flex-shrink-0"
                >
                  <Play className="w-4 h-4 text-blue-600 fill-blue-600 flex-shrink-0" />
                  <span>Demostración 3D</span>
                </a>

                {/* Tertiary Link: Laser Scanner Jump */}
                <a
                  href="#forensic-scanner"
                  className="inline-flex items-center justify-center gap-1.5 px-4 py-3.5 text-xs font-semibold text-cyan-700 hover:text-cyan-900 transition-colors whitespace-nowrap flex-shrink-0"
                >
                  <Zap className="w-3.5 h-3.5 text-cyan-600" />
                  <span>Escáner Forense ↓</span>
                </a>
              </div>

              {/* Feature Proofs Checklist */}
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 pt-4 border-t border-slate-200/70 text-xs text-slate-600">
                <div className="flex items-center gap-1.5 font-medium">
                  <span className="w-4 h-4 rounded-full bg-emerald-100 text-emerald-700 flex items-center justify-center text-[10px] font-bold">✓</span>
                  <span>SHA-256 en 12ms</span>
                </div>
                <div className="flex items-center gap-1.5 font-medium">
                  <span className="w-4 h-4 rounded-full bg-emerald-100 text-emerald-700 flex items-center justify-center text-[10px] font-bold">✓</span>
                  <span>Sello RFC 3161</span>
                </div>
                <div className="flex items-center gap-1.5 font-medium">
                  <span className="w-4 h-4 rounded-full bg-emerald-100 text-emerald-700 flex items-center justify-center text-[10px] font-bold">✓</span>
                  <span>100% Offline</span>
                </div>
                <div className="flex items-center gap-1.5 font-medium">
                  <span className="w-4 h-4 rounded-full bg-emerald-100 text-emerald-700 flex items-center justify-center text-[10px] font-bold">✓</span>
                  <span>Dictamen X.509</span>
                </div>
              </div>

            </div>

            {/* Right Column: Interactive 3D Inspection Terminal with Checky Mascot */}
            <div className="lg:col-span-5 relative">
              {/* Floating Checky Mascot perched on the top right */}
              <div className="absolute -top-12 -right-2 sm:-right-4 z-30 pointer-events-auto">
                <CheckyMascot
                  size="sm"
                  showSpeech={true}
                  speechText="¡Activo blindado! Haz clic en la tarjeta o prueba la app en vivo."
                />
              </div>

              {/* Terminal Frame */}
              <div className={`rounded-3xl p-4 sm:p-5 bg-gradient-to-b from-slate-900/95 via-slate-900 to-slate-950 border-2 transition-all duration-300 shadow-2xl relative overflow-hidden backdrop-blur-xl ${
                heroTamperStatus === "tampering"
                  ? "border-rose-500/80 shadow-rose-500/20 ring-4 ring-rose-500/30"
                  : heroTamperStatus === "secured"
                  ? "border-emerald-400/80 shadow-emerald-500/20 ring-4 ring-emerald-500/30"
                  : "border-slate-700/80 hover:border-cyan-500/50"
              }`}>
                {/* Background Ambient Glow */}
                <div className="absolute -top-10 -right-10 w-48 h-48 bg-blue-500/20 blur-3xl pointer-events-none" />
                <div className="absolute -bottom-10 -left-10 w-48 h-48 bg-cyan-500/20 blur-3xl pointer-events-none" />

                {/* Terminal Window Header Bar */}
                <div className="flex items-center justify-between pb-3 mb-3 border-b border-slate-800 text-xs">
                  <div className="flex items-center gap-2">
                    <div className="flex items-center gap-1.5">
                      <span className="w-2.5 h-2.5 rounded-full bg-rose-500/80 inline-block" />
                      <span className="w-2.5 h-2.5 rounded-full bg-amber-500/80 inline-block" />
                      <span className="w-2.5 h-2.5 rounded-full bg-emerald-500/80 inline-block" />
                    </div>
                    <span className="text-[11px] font-mono text-slate-400 truncate max-w-[170px] sm:max-w-[210px]">
                      pfm-check-it.vercel.app
                    </span>
                  </div>
                  <span className="px-2 py-0.5 rounded-full bg-emerald-500/20 text-emerald-300 text-[10px] font-mono font-bold flex items-center gap-1.5 border border-emerald-500/30">
                    <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
                    <span>EN VIVO</span>
                  </span>
                </div>

                {/* Evidence Image with Active Laser Scanning Line */}
                <div className="relative rounded-2xl overflow-hidden bg-slate-950 border border-slate-800 h-52 sm:h-60 group">
                  <img
                    src="/checkout_room.png"
                    alt="Evidencia Inmobiliaria CheckIt"
                    className="w-full h-full object-cover filter brightness-[0.92] contrast-[1.05]"
                  />

                  {/* Laser Scanning Line Animation */}
                  <div className="absolute inset-x-0 h-1 bg-gradient-to-r from-transparent via-cyan-400 to-transparent shadow-[0_0_12px_#22d3ee,0_0_24px_#38bdf8] animate-scan-sweep pointer-events-none" />

                  {/* Top Floating Badge on Image */}
                  <div className="absolute top-2.5 left-2.5 px-2.5 py-1 rounded-xl bg-slate-950/85 backdrop-blur-md border border-cyan-400/50 text-[11px] font-mono text-cyan-300 flex items-center gap-1.5 shadow-lg">
                    <MapPin className="w-3 h-3 text-cyan-400" />
                    <span>Paseo Castellana 184 • P3</span>
                  </div>

                  {/* Dynamic Clock Badge */}
                  <div className="absolute top-2.5 right-2.5 px-2.5 py-1 rounded-xl bg-slate-950/85 backdrop-blur-md border border-slate-700 text-[10px] font-mono text-slate-300 flex items-center gap-1.5 shadow-lg">
                    <Clock className="w-3 h-3 text-cyan-400" />
                    <span>{heroLiveTime || "20:45:00 CET"}</span>
                  </div>

                  {/* Tamper Alert HUD Overlay if triggered */}
                  {heroTamperStatus === "tampering" && (
                    <div className="absolute inset-0 bg-rose-950/85 backdrop-blur-xs flex flex-col items-center justify-center p-4 text-center animate-fade-in z-20">
                      <AlertTriangle className="w-8 h-8 text-rose-400 animate-bounce mb-2" />
                      <strong className="text-xs font-bold text-rose-200 uppercase tracking-wider font-mono">
                        ALERTA DE MANIPULACIÓN DETECTADA
                      </strong>
                      <p className="text-[11px] text-rose-300 mt-1 leading-tight">
                        Firma electrónica X.509 invalida la alteración. El documento legal original prevalece.
                      </p>
                    </div>
                  )}

                  {heroTamperStatus === "secured" && (
                    <div className="absolute inset-0 bg-emerald-950/85 backdrop-blur-xs flex flex-col items-center justify-center p-4 text-center animate-fade-in z-20">
                      <ShieldCheck className="w-8 h-8 text-emerald-400 mb-2" />
                      <strong className="text-xs font-bold text-emerald-200 uppercase tracking-wider font-mono">
                        INMUTABILIDAD RATIFICADA
                      </strong>
                      <p className="text-[11px] text-emerald-300 mt-1 leading-tight">
                        Hash SHA-256 contrastado con el sello notarial TSA RFC 3161 sin desviaciones.
                      </p>
                    </div>
                  )}

                  {/* Bottom Image Metadata HUD */}
                  <div className="absolute bottom-2.5 inset-x-2.5 p-2 rounded-xl bg-slate-950/90 backdrop-blur-md border border-slate-700/80 flex items-center justify-between text-[10px] font-mono text-slate-300">
                    <div className="flex items-center gap-1.5 text-cyan-300 truncate">
                      <Lock className="w-3 h-3 flex-shrink-0 text-cyan-400" />
                      <span className="truncate">SHA: 9f86d081884c7d65...</span>
                    </div>
                    <span className="text-emerald-400 font-bold flex-shrink-0">✓ Sellado</span>
                  </div>
                </div>

                {/* Card Controls & Details */}
                <div className="mt-3.5 space-y-2.5">
                  <div className="flex items-center justify-between text-xs text-slate-400 px-1">
                    <span className="font-mono text-[11px]">Expediente: #INC-8821</span>
                    <span className="text-emerald-400 text-[11px] font-bold flex items-center gap-1">
                      <CheckCircle2 className="w-3.5 h-3.5" />
                      <span>Firma Pericial X.509</span>
                    </span>
                  </div>

                  {/* Interactive Buttons on Terminal */}
                  <div className="grid grid-cols-2 gap-2 pt-1">
                    <button
                      type="button"
                      onClick={triggerHeroTamperSimulation}
                      disabled={heroTamperActive}
                      className="py-2.5 px-3 rounded-xl bg-slate-800 hover:bg-slate-700 text-slate-200 text-xs font-semibold border border-slate-700 hover:border-slate-600 transition-all flex items-center justify-center gap-1.5 active:scale-95 disabled:opacity-50 whitespace-nowrap"
                    >
                      <Sparkles className="w-3.5 h-3.5 text-amber-400 flex-shrink-0" />
                      <span>Simular Manipulación</span>
                    </button>

                    <a
                      href="https://pfm-check-it.vercel.app/login"
                      target="_blank"
                      rel="noreferrer"
                      className="py-2.5 px-3 rounded-xl bg-gradient-to-r from-blue-600 to-cyan-600 hover:from-blue-500 hover:to-cyan-500 text-white text-xs font-bold transition-all flex items-center justify-center gap-1.5 shadow-md shadow-blue-600/20 active:scale-95 whitespace-nowrap"
                    >
                      <ExternalLink className="w-3.5 h-3.5 text-cyan-200 flex-shrink-0" />
                      <span>Entrar a la App ↗</span>
                    </a>
                  </div>
                </div>
              </div>
            </div>

          </div>

          {/* Metric Highlights Ribbon (Full-Width Glass Deck) */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 max-w-5xl mx-auto mt-12 pt-8 border-t border-slate-200/80">
            <div className="p-4 rounded-2xl glass-card-3d border border-white/80 shadow-xs text-center">
              <span className="font-heading font-extrabold text-2xl sm:text-3xl text-blue-600 block">-85%</span>
              <span className="text-xs text-slate-500 font-medium whitespace-nowrap">Tiempo de peritaje</span>
            </div>
            <div className="p-4 rounded-2xl glass-card-3d border border-white/80 shadow-xs text-center">
              <span className="font-heading font-extrabold text-2xl sm:text-3xl text-emerald-600 block">0%</span>
              <span className="text-xs text-slate-500 font-medium whitespace-nowrap">Disputas desestimadas</span>
            </div>
            <div className="p-4 rounded-2xl glass-card-3d border border-white/80 shadow-xs text-center">
              <span className="font-heading font-extrabold text-2xl sm:text-3xl text-slate-900 block">100%</span>
              <span className="text-xs text-slate-500 font-medium whitespace-nowrap">Cobertura offline</span>
            </div>
            <div className="p-4 rounded-2xl glass-card-3d border border-white/80 shadow-xs text-center">
              <span className="font-heading font-extrabold text-2xl sm:text-3xl text-sky-600 block">1 Clic</span>
              <span className="text-xs text-slate-500 font-medium whitespace-nowrap">Dictamen PDF oficial</span>
            </div>
          </div>

          {/* ── SECTION 2: INTERACTIVE LIVE FORENSIC SCANNER ── */}
          <div id="forensic-scanner" className="mt-20 scroll-mt-24">
            <ForensicScannerHero />
          </div>


          {/* ── HERO VISUAL SHOWCASE: 3D VIDEO PLAYER WITH INTERACTIVE TIMELINE CHAPTERS ── */}
          <div id="showcase-video" className="mt-14 max-w-5xl mx-auto scroll-mt-24">
            <div className="glass-panel-3d rounded-3xl p-4 sm:p-6 border-2 border-white shadow-2xl relative overflow-hidden">
              {/* Window Header */}
              <div className="flex items-center justify-between pb-4 border-b border-slate-200/80 px-2">
                <div className="flex items-center gap-2">
                  <span className="w-3 h-3 rounded-full bg-rose-400 inline-block shadow-xs"></span>
                  <span className="w-3 h-3 rounded-full bg-amber-400 inline-block shadow-xs"></span>
                  <span className="w-3 h-3 rounded-full bg-emerald-400 inline-block shadow-xs"></span>
                  <span className="text-xs font-semibold text-slate-600 ml-2 hidden sm:inline-block font-mono">
                    CheckIt 3D Architecture • Expediente Notarial #EXP-2026-904
                  </span>
                </div>

                <div className="flex items-center gap-3">
                  <div className="flex items-center gap-2 text-xs font-semibold text-emerald-700 bg-emerald-50/90 px-3 py-1 rounded-full border border-emerald-200 shadow-xs">
                    <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600" />
                    <span>Sello Notarial Certificado</span>
                  </div>

                  {/* Playback Controls */}
                  <div className="flex items-center gap-1 bg-slate-100/90 p-1 rounded-xl border border-slate-200/80">
                    <button
                      onClick={toggleVideoPlayback}
                      className="p-1.5 text-slate-700 hover:text-blue-600 hover:bg-white rounded-lg transition-all"
                      title={isVideoPlaying ? "Pausar vídeo" : "Reproducir vídeo"}
                    >
                      {isVideoPlaying ? <Pause className="w-4 h-4" /> : <Play className="w-4 h-4 fill-current" />}
                    </button>
                    <button
                      onClick={toggleVideoMute}
                      className="p-1.5 text-slate-700 hover:text-blue-600 hover:bg-white rounded-lg transition-all"
                      title={isVideoMuted ? "Activar audio" : "Silenciar"}
                    >
                      {isVideoMuted ? <VolumeX className="w-4 h-4" /> : <Volume2 className="w-4 h-4" />}
                    </button>
                    <button
                      onClick={restartVideo}
                      className="p-1.5 text-slate-700 hover:text-blue-600 hover:bg-white rounded-lg transition-all"
                      title="Reiniciar desde el inicio"
                    >
                      <RotateCcw className="w-4 h-4" />
                    </button>
                  </div>
                </div>
              </div>

              {/* Video Player Container */}
              <div className="relative mt-4 rounded-2xl overflow-hidden border border-slate-200/80 bg-slate-900 shadow-inner group">
                <video
                  ref={videoRef}
                  src="/video-bg.mp4"
                  autoPlay
                  loop
                  muted={isVideoMuted}
                  playsInline
                  onTimeUpdate={handleTimeUpdate}
                  className="w-full h-auto max-h-[520px] object-cover mx-auto"
                />

                {/* Subtle Glass Overlay Watermark */}
                <div className="absolute top-4 left-4 pointer-events-none z-10 flex items-center gap-2 px-3 py-1.5 rounded-xl bg-white/75 backdrop-blur-md border border-white/80 text-xs font-semibold text-slate-800 shadow-sm">
                  <ShieldCheck className="w-4 h-4 text-blue-600" />
                  <span>Flujo Pericial 3D Inmutable</span>
                </div>

                {/* Video Progress Bar Line */}
                <div className="absolute bottom-0 left-0 right-0 h-1 bg-white/20 z-20">
                  <div 
                    className="h-full bg-gradient-to-r from-blue-500 to-sky-400 transition-all duration-100"
                    style={{ width: `${videoProgress}%` }}
                  />
                </div>
              </div>

              {/* Interactive Timeline Chapter Navigator (Connecting Video to Tech Value) */}
              <div className="mt-5 space-y-3">
                <div className="flex items-center justify-between">
                  <span className="text-xs font-bold text-slate-600 uppercase tracking-wider font-mono flex items-center gap-1.5">
                    <SlidersHorizontal className="w-3.5 h-3.5 text-blue-600" />
                    Capítulos de la Cadena de Custodia (Haz clic para explorar):
                  </span>
                  <span className="text-xs font-mono font-semibold text-blue-600 bg-blue-50 px-2.5 py-0.5 rounded-md border border-blue-200">
                    {videoChapters[activeChapterIndex]?.badge}
                  </span>
                </div>

                {/* Chapter Buttons Carousel */}
                <div className="grid grid-cols-2 sm:grid-cols-4 lg:grid-cols-7 gap-2">
                  {videoChapters.map((chapter, idx) => {
                    const Icon = chapter.icon;
                    const isActive = activeChapterIndex === idx;
                    return (
                      <button
                        key={chapter.id}
                        onClick={() => jumpToChapter(idx)}
                        className={`p-2.5 rounded-xl text-left transition-all border flex flex-col justify-between text-xs ${
                          isActive
                            ? "bg-blue-50/90 border-blue-500 text-blue-900 shadow-md ring-2 ring-blue-400/30"
                            : "bg-white/80 hover:bg-slate-50 border-slate-200/90 text-slate-700"
                        } ${idx === 6 ? "col-span-2 sm:col-span-2 lg:col-span-1" : ""}`}
                      >
                        <div className="flex items-center justify-between mb-1.5">
                          <Icon className={`w-4 h-4 ${isActive ? "text-blue-600" : "text-slate-400"}`} />
                          <span className="text-[10px] font-mono text-slate-400 font-semibold">0{idx + 1}</span>
                        </div>
                        <span className="font-bold text-[11px] leading-tight block whitespace-nowrap truncate">
                          {chapter.shortTitle || chapter.title}
                        </span>
                      </button>

                    );
                  })}
                </div>

                {/* Active Chapter Dynamic Explanation Box */}
                <div className="p-4 rounded-2xl bg-gradient-to-r from-blue-50/70 via-white to-sky-50/50 border border-blue-200/80 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 shadow-xs">
                  <div className="space-y-1">
                    <div className="flex items-center gap-2">
                      <span className="w-2 h-2 rounded-full bg-blue-600"></span>
                      <strong className="text-xs font-bold uppercase tracking-wider text-blue-900 font-heading">
                        {videoChapters[activeChapterIndex]?.title} — {videoChapters[activeChapterIndex]?.subtitle}
                      </strong>
                    </div>
                    <p className="text-xs text-slate-600 leading-relaxed max-w-2xl">
                      {videoChapters[activeChapterIndex]?.desc}
                    </p>
                  </div>

                  <a
                    href="#simulador"
                    className="inline-flex items-center gap-1.5 text-xs font-bold text-blue-600 hover:text-blue-700 bg-white px-3.5 py-2 rounded-xl border border-blue-200 shadow-xs whitespace-nowrap"
                  >
                    <span>Simular este paso</span>
                    <ChevronRight className="w-3.5 h-3.5" />
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── 2. SECCIÓN "EL PROBLEMA VS LA SOLUCIÓN" ── */}
      <section id="problema-solucion" className="py-20 relative z-10 scroll-mt-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <span className="text-xs uppercase font-bold tracking-widest text-blue-600 mb-2 block font-mono">
              El Valor de Negocio
            </span>
            <h2 className="font-heading font-extrabold text-3xl sm:text-4xl text-slate-900 tracking-tight mb-4">
              ¿Por qué las inspecciones tradicionales fallan?
            </h2>
            <p className="text-slate-600 text-base sm:text-lg leading-relaxed">
              El 40% de los partes con fotos enviadas por WhatsApp se desestiman en siniestros y disputas de fianza
              por falta de trazabilidad temporal y alterabilidad de los metadatos EXIF.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-stretch">
            {/* El Caos Tradicional (Vulnerable) */}
            <div className="rounded-3xl p-8 sm:p-10 bg-white/70 border-2 border-rose-200/80 flex flex-col justify-between relative overflow-hidden shadow-lg shadow-rose-500/5 backdrop-blur-xl">
              <div>
                <div className="flex items-center justify-between mb-6">
                  <div className="w-12 h-12 rounded-2xl bg-rose-50 border border-rose-200 text-rose-600 flex items-center justify-center shadow-xs">
                    <AlertTriangle className="w-6 h-6" />
                  </div>
                  <span className="px-3 py-1 rounded-full bg-rose-50 text-rose-700 text-xs font-bold uppercase tracking-wider font-mono border border-rose-200">
                    El Método Frágil
                  </span>
                </div>

                <h3 className="font-heading font-bold text-2xl text-slate-900 mb-3">
                  Inspección Convencional en Papel y Chat
                </h3>
                <p className="text-slate-600 text-sm leading-relaxed mb-8">
                  Flujos operativos vulnerables donde cualquier desacuerdo con inquilinos o aseguradoras se traduce en pérdidas económicas para el gestor.
                </p>

                <div className="space-y-4">
                  <div className="flex items-start gap-3.5 p-3.5 rounded-2xl bg-rose-50/50 border border-rose-200/60 shadow-xs">
                    <span className="w-6 h-6 rounded-full bg-rose-100 text-rose-700 flex items-center justify-center text-xs font-bold shrink-0 mt-0.5">
                      ✕
                    </span>
                    <div>
                      <strong className="text-slate-900 text-sm block">Fotos editables sin validez:</strong>
                      <span className="text-xs text-slate-600">
                        Cualquier persona puede editar la fecha y hora de una foto en su teléfono. Las aseguradoras las desestiman sistemáticamente.
                      </span>
                    </div>
                  </div>

                  <div className="flex items-start gap-3.5 p-3.5 rounded-2xl bg-rose-50/50 border border-rose-200/60 shadow-xs">
                    <span className="w-6 h-6 rounded-full bg-rose-100 text-rose-700 flex items-center justify-center text-xs font-bold shrink-0 mt-0.5">
                      ✕
                    </span>
                    <div>
                      <strong className="text-slate-900 text-sm block">Informes que tardan días:</strong>
                      <span className="text-xs text-slate-600">
                        El técnico vuelve a la oficina, redacta a mano y las reclamaciones de siniestro se demoran semanas.
                      </span>
                    </div>
                  </div>

                  <div className="flex items-start gap-3.5 p-3.5 rounded-2xl bg-rose-50/50 border border-rose-200/60 shadow-xs">
                    <span className="w-6 h-6 rounded-full bg-rose-100 text-rose-700 flex items-center justify-center text-xs font-bold shrink-0 mt-0.5">
                      ✕
                    </span>
                    <div>
                      <strong className="text-slate-900 text-sm block">Pérdida de datos en sótanos y garajes:</strong>
                      <span className="text-xs text-slate-600">
                        Si no hay cobertura de red en el inmueble, las apps tradicionales fallan y se pierden evidencias clave.
                      </span>
                    </div>
                  </div>
                </div>
              </div>

              <div className="mt-8 pt-6 border-t border-rose-200/70 text-xs font-semibold text-rose-700 flex items-center gap-2">
                <AlertTriangle className="w-4 h-4 shrink-0" />
                <span>Resultado: Pérdida económica por fianzas no cobradas y siniestros desestimados.</span>
              </div>
            </div>

            {/* El Estándar CheckIt (Protegido con Glassmorphism) */}
            <div className="rounded-3xl p-8 sm:p-10 glass-panel-3d border-2 border-blue-400/80 shadow-xl shadow-blue-600/10 flex flex-col justify-between relative overflow-hidden">
              <div className="absolute top-0 right-0 w-72 h-72 bg-blue-500/10 rounded-full blur-3xl pointer-events-none"></div>

              <div>
                <div className="flex items-center justify-between mb-6">
                  <div className="w-12 h-12 rounded-2xl bg-gradient-to-tr from-blue-600 to-sky-500 text-white flex items-center justify-center shadow-md shadow-blue-500/25 border border-white/80">
                    <ShieldCheck className="w-6 h-6 stroke-[2.4]" />
                  </div>
                  <span className="px-3.5 py-1 rounded-full bg-emerald-50 text-emerald-800 text-xs font-bold uppercase tracking-wider font-mono border border-emerald-200 shadow-xs">
                    El Estándar CheckIt
                  </span>
                </div>

                <h3 className="font-heading font-bold text-2xl text-slate-900 mb-3">
                  Notario Digital Automatizado B2B
                </h3>
                <p className="text-slate-600 text-sm leading-relaxed mb-8">
                  Cero disputas: cada fotografía y observación queda sellada in situ con plena fuerza probatoria y validez jurídica.
                </p>

                <div className="space-y-4">
                  <div className="flex items-start gap-3.5 p-3.5 rounded-2xl bg-white/90 border border-blue-200/80 shadow-xs">
                    <span className="w-6 h-6 rounded-full bg-emerald-100 text-emerald-700 flex items-center justify-center text-xs font-bold shrink-0 mt-0.5">
                      ✓
                    </span>
                    <div>
                      <strong className="text-slate-900 text-sm block">Sello de Fecha y Hora Inmutable (RFC 3161):</strong>
                      <span className="text-xs text-slate-600">
                        Certificado por una autoridad de tiempo oficial. Ninguna aseguradora o plataforma puede cuestionar cuándo se tomó la foto.
                      </span>
                    </div>
                  </div>

                  <div className="flex items-start gap-3.5 p-3.5 rounded-2xl bg-white/90 border border-blue-200/80 shadow-xs">
                    <span className="w-6 h-6 rounded-full bg-emerald-100 text-emerald-700 flex items-center justify-center text-xs font-bold shrink-0 mt-0.5">
                      ✓
                    </span>
                    <div>
                      <strong className="text-slate-900 text-sm block">Dictamen PDF Pericial Firmado al Instante:</strong>
                      <span className="text-xs text-slate-600">
                        En cuanto el operario finaliza la visita, el documento PDF firmado con certificado X.509 se emite automáticamente.
                      </span>
                    </div>
                  </div>

                  <div className="flex items-start gap-3.5 p-3.5 rounded-2xl bg-white/90 border border-blue-200/80 shadow-xs">
                    <span className="w-6 h-6 rounded-full bg-emerald-100 text-emerald-700 flex items-center justify-center text-xs font-bold shrink-0 mt-0.5">
                      ✓
                    </span>
                    <div>
                      <strong className="text-slate-900 text-sm block">Modo Offline-First Certificado:</strong>
                      <span className="text-xs text-slate-600">
                        Tecnología local segura: encripta y sella las fotos en memoria protegida y sincroniza al recuperar cobertura.
                      </span>
                    </div>
                  </div>
                </div>
              </div>

              <div className="mt-8 pt-6 border-t border-slate-200 text-xs font-semibold text-emerald-700 flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" />
                <span>Resultado: 100% de disputas ganadas y tranquilidad jurídica absoluta para tus activos.</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── 3. FLUJO DE TRABAJO EN 3 PASOS ── */}
      <section id="como-funciona" className="py-20 relative z-10 scroll-mt-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <span className="text-xs uppercase font-bold tracking-widest text-blue-600 mb-2 block font-mono">
              Simplicidad y Potencia
            </span>
            <h2 className="font-heading font-extrabold text-3xl sm:text-4xl text-slate-900 tracking-tight mb-4">
              ¿Cómo funciona CheckIt en el día a día?
            </h2>
            <p className="text-slate-600 text-base sm:text-lg leading-relaxed">
              Diseñado para que cualquier operario en campo y cualquier gestor en oficina lo dominen en 5 minutos.
            </p>
          </div>

          {/* Connected 3-Step Process Cards */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 relative">
            {/* Step 1 */}
            <div className="glass-card-3d rounded-3xl p-8 relative flex flex-col justify-between border border-white/90 shadow-sm">
              <div>
                <div className="flex items-center justify-between mb-6">
                  <div className="w-12 h-12 rounded-2xl bg-blue-50 border border-blue-200 text-blue-600 flex items-center justify-center font-heading font-extrabold text-lg shadow-xs">
                    1
                  </div>
                  <Building2 className="w-6 h-6 text-slate-400" />
                </div>

                <span className="text-xs font-bold uppercase tracking-wider text-blue-600 block mb-1 font-mono">
                  En Oficina
                </span>
                <h3 className="font-heading font-bold text-xl text-slate-900 mb-3">
                  Asignación con 1 Clic
                </h3>
                <p className="text-slate-600 text-sm leading-relaxed mb-6">
                  El gestor selecciona el inmueble y asigna la orden al operario correspondiente desde el panel central de control.
                </p>

                <div className="p-3.5 rounded-2xl bg-slate-50/80 border border-slate-200/70 text-xs space-y-2 text-slate-600">
                  <div className="flex items-center gap-2">
                    <Check className="w-3.5 h-3.5 text-emerald-600" />
                    <span>Control de accesos por propiedad</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Check className="w-3.5 h-3.5 text-emerald-600" />
                    <span>Notificación inmediata al técnico</span>
                  </div>
                </div>
              </div>

              <div className="mt-6 pt-4 border-t border-slate-100 text-xs font-semibold text-blue-600 flex items-center justify-between">
                <span>Panel Web Administrador</span>
                <ArrowRight className="w-4 h-4 hidden md:inline" />
              </div>
            </div>

            {/* Step 2 */}
            <div className="glass-card-3d rounded-3xl p-8 relative flex flex-col justify-between border border-white/90 shadow-sm">
              <div>
                <div className="flex items-center justify-between mb-6">
                  <div className="w-12 h-12 rounded-2xl bg-sky-50 border border-sky-200 text-sky-600 flex items-center justify-center font-heading font-extrabold text-lg shadow-xs">
                    2
                  </div>
                  <Smartphone className="w-6 h-6 text-slate-400" />
                </div>

                <span className="text-xs font-bold uppercase tracking-wider text-sky-600 block mb-1 font-mono">
                  En el Inmueble
                </span>
                <h3 className="font-heading font-bold text-xl text-slate-900 mb-3">
                  Captura Guiada & Sellado
                </h3>
                <p className="text-slate-600 text-sm leading-relaxed mb-6">
                  El operario realiza la revisión con el móvil. La app calcula el hash SHA-256 in situ y superpone la foto de check-in.
                </p>

                <div className="p-3.5 rounded-2xl bg-slate-50/80 border border-slate-200/70 text-xs space-y-2 text-slate-600">
                  <div className="flex items-center gap-2">
                    <Check className="w-3.5 h-3.5 text-emerald-600" />
                    <span>Resistente a pérdidas de señal</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Check className="w-3.5 h-3.5 text-emerald-600" />
                    <span>Blindaje digital antes de subir</span>
                  </div>
                </div>
              </div>

              <div className="mt-6 pt-4 border-t border-slate-100 text-xs font-semibold text-sky-600 flex items-center justify-between">
                <span>App Móvil de Campo</span>
                <ArrowRight className="w-4 h-4 hidden md:inline" />
              </div>
            </div>

            {/* Step 3 */}
            <div className="glass-card-3d rounded-3xl p-8 relative flex flex-col justify-between border border-white/90 shadow-sm">
              <div>
                <div className="flex items-center justify-between mb-6">
                  <div className="w-12 h-12 rounded-2xl bg-emerald-50 border border-emerald-200 text-emerald-600 flex items-center justify-center font-heading font-extrabold text-lg shadow-xs">
                    3
                  </div>
                  <Scale className="w-6 h-6 text-slate-400" />
                </div>

                <span className="text-xs font-bold uppercase tracking-wider text-emerald-600 block mb-1 font-mono">
                  Certificación Oficial
                </span>
                <h3 className="font-heading font-bold text-xl text-slate-900 mb-3">
                  Sello Notarial y Dictamen PDF
                </h3>
                <p className="text-slate-600 text-sm leading-relaxed mb-6">
                  El sistema estampa la firma digital pericial X.509 y el fechado RFC 3161, entregando un informe vinculante.
                </p>

                <div className="p-3.5 rounded-2xl bg-slate-50/80 border border-slate-200/70 text-xs space-y-2 text-slate-600">
                  <div className="flex items-center gap-2">
                    <Check className="w-3.5 h-3.5 text-emerald-600" />
                    <span>Sello visible en el PDF</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Check className="w-3.5 h-3.5 text-emerald-600" />
                    <span>Enlace QR de verificación pública</span>
                  </div>
                </div>
              </div>

              <div className="mt-6 pt-4 border-t border-slate-100 text-xs font-semibold text-emerald-600 flex items-center justify-between">
                <span>Documento Vinculante</span>
                <Award className="w-4 h-4" />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── 4. PRODUCT TOUR (MOCKUPS INTERACTIVOS) ── */}
      <section id="tour-producto" className="py-20 relative z-10 scroll-mt-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-14">
            <span className="text-xs uppercase font-bold tracking-widest text-blue-600 mb-2 block font-mono">
              Diseñado Para Personas y Equipos
            </span>
            <h2 className="font-heading font-extrabold text-3xl sm:text-4xl text-slate-900 tracking-tight mb-4">
              El Producto en Acción: Una Experiencia para Cada Rol
            </h2>
            <p className="text-slate-600 text-base sm:text-lg leading-relaxed">
              Explora cómo CheckIt se adapta a las necesidades específicas de la dirección, el operario técnico y los peritos de seguros.
            </p>

            {/* Interactive Tab Switcher */}
            <div className="mt-8 inline-flex flex-wrap justify-center p-1.5 rounded-2xl glass-panel-3d border border-slate-200/90 shadow-sm gap-2">
              <button
                onClick={() => setActiveTourTab("gestor")}
                className={`flex items-center gap-2 px-4 sm:px-5 py-2.5 rounded-xl text-xs sm:text-sm font-semibold transition-all whitespace-nowrap flex-shrink-0 ${
                  activeTourTab === "gestor"
                    ? "bg-blue-600 text-white shadow-md shadow-blue-600/25"
                    : "text-slate-600 hover:text-slate-900 hover:bg-white/60"
                }`}
              >
                <Building2 className="w-4 h-4 flex-shrink-0" />
                <span>Para el Gestor (Web)</span>
              </button>
              <button
                onClick={() => setActiveTourTab("operario")}
                className={`flex items-center gap-2 px-4 sm:px-5 py-2.5 rounded-xl text-xs sm:text-sm font-semibold transition-all whitespace-nowrap flex-shrink-0 ${
                  activeTourTab === "operario"
                    ? "bg-blue-600 text-white shadow-md shadow-blue-600/25"
                    : "text-slate-600 hover:text-slate-900 hover:bg-white/60"
                }`}
              >
                <Smartphone className="w-4 h-4 flex-shrink-0" />
                <span>Para el Técnico (Móvil)</span>
              </button>
              <button
                onClick={() => setActiveTourTab("informe")}
                className={`flex items-center gap-2 px-4 sm:px-5 py-2.5 rounded-xl text-xs sm:text-sm font-semibold transition-all whitespace-nowrap flex-shrink-0 ${
                  activeTourTab === "informe"
                    ? "bg-blue-600 text-white shadow-md shadow-blue-600/25"
                    : "text-slate-600 hover:text-slate-900 hover:bg-white/60"
                }`}
              >
                <Award className="w-4 h-4 flex-shrink-0" />
                <span>Para el Peritaje (PDF)</span>
              </button>
            </div>

          </div>

          {/* Tab 1: Vista Gestor */}
          {activeTourTab === "gestor" && (
            <div className="glass-panel-3d rounded-3xl p-6 sm:p-10 border border-white shadow-xl grid grid-cols-1 lg:grid-cols-12 gap-8 items-center animate-fade-in">
              <div className="lg:col-span-5 space-y-5">
                <div className="inline-flex items-center gap-1.5 text-xs font-bold text-blue-600 bg-blue-50 px-3 py-1 rounded-full border border-blue-200">
                  <Building2 className="w-3.5 h-3.5" />
                  <span>Panel Web para Gestores de Activos</span>
                </div>
                <h3 className="font-heading font-extrabold text-2xl sm:text-3xl text-slate-900 leading-tight">
                  Control Centralizado de Inmuebles e Inspecciones
                </h3>
                <p className="text-slate-600 text-sm leading-relaxed">
                  Visión panorámica de toda tu cartera de propiedades. Supervisa en tiempo real
                  el estado de cada orden sin tener que llamar al operario por teléfono.
                </p>

                <div className="space-y-3 text-sm text-slate-700">
                  <div className="flex items-center gap-3">
                    <span className="w-6 h-6 rounded-full bg-blue-100 text-blue-700 flex items-center justify-center text-xs font-bold">✓</span>
                    <span><strong>Actualización en tiempo real:</strong> Ves los cambios de estado al instante.</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <span className="w-6 h-6 rounded-full bg-blue-100 text-blue-700 flex items-center justify-center text-xs font-bold">✓</span>
                    <span><strong>Descarga de informes con 1 clic:</strong> PDF oficial firmado listo para enviar.</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <span className="w-6 h-6 rounded-full bg-blue-100 text-blue-700 flex items-center justify-center text-xs font-bold">✓</span>
                    <span><strong>Seguridad por pestaña:</strong> Sesión aislada que evita mezclar expedientes.</span>
                  </div>
                </div>
              </div>

              {/* Visual Mockup */}
              <div className="lg:col-span-7 bg-white/90 rounded-2xl border border-slate-200/90 p-5 shadow-lg space-y-4">
                <div className="flex items-center justify-between pb-3 border-b border-slate-100">
                  <div className="flex items-center gap-3">
                    <span className="text-xs font-bold text-slate-900">Panel de Inspecciones</span>
                    <span className="text-[11px] font-semibold text-blue-600 bg-blue-50 px-2 py-0.5 rounded">6 activas</span>
                  </div>
                  <span className="text-[11px] text-slate-400 font-mono">Última sync: hace 3s</span>
                </div>

                <div className="space-y-2.5">
                  <div className="p-3 rounded-xl bg-slate-50 border border-slate-200/80 flex items-center justify-between">
                    <div>
                      <span className="text-xs font-bold text-slate-900 block">Paseo Castellana 184</span>
                      <span className="text-[11px] text-slate-500">Inspector: Carlos Méndez</span>
                    </div>
                    <span className="text-xs font-semibold px-2.5 py-1 rounded-full bg-emerald-50 text-emerald-700 border border-emerald-200">
                      Completada • PDF Listo
                    </span>
                  </div>

                  <div className="p-3 rounded-xl bg-slate-50 border border-slate-200/80 flex items-center justify-between">
                    <div>
                      <span className="text-xs font-bold text-slate-900 block">Residencial Las Rozas, 12</span>
                      <span className="text-[11px] text-slate-500">Inspector: Elena Rubio</span>
                    </div>
                    <span className="text-xs font-semibold px-2.5 py-1 rounded-full bg-amber-50 text-amber-700 border border-amber-200">
                      En Curso (3 evidencias)
                    </span>
                  </div>

                  <div className="p-3 rounded-xl bg-slate-50 border border-slate-200/80 flex items-center justify-between">
                    <div>
                      <span className="text-xs font-bold text-slate-900 block">Nave Logística Getafe</span>
                      <span className="text-[11px] text-slate-500">Inspector: Carlos Méndez</span>
                    </div>
                    <span className="text-xs font-semibold px-2.5 py-1 rounded-full bg-slate-100 text-slate-600 border border-slate-200">
                      Pendiente de Visita
                    </span>
                  </div>
                </div>
              </div>
            </div>
          )}

          {/* Tab 2: Vista Operario */}
          {activeTourTab === "operario" && (
            <div className="glass-panel-3d rounded-3xl p-6 sm:p-10 border border-white shadow-xl grid grid-cols-1 lg:grid-cols-12 gap-8 items-center animate-fade-in">
              <div className="lg:col-span-5 space-y-5">
                <div className="inline-flex items-center gap-1.5 text-xs font-bold text-sky-600 bg-sky-50 px-3 py-1 rounded-full border border-sky-200">
                  <Smartphone className="w-3.5 h-3.5" />
                  <span>PWA Móvil para Técnicos de Campo</span>
                </div>
                <h3 className="font-heading font-extrabold text-2xl sm:text-3xl text-slate-900 leading-tight">
                  Diseñado para Operar en Zonas Sin Cobertura
                </h3>
                <p className="text-slate-600 text-sm leading-relaxed">
                  Botones táctiles grandes, flujo guiado paso a paso y total independencia de la conexión a internet.
                  El operario toma la foto y el sistema encripta y calcula el hash de inmediato.
                </p>

                <div className="space-y-3 text-sm text-slate-700">
                  <div className="flex items-center gap-3">
                    <span className="w-6 h-6 rounded-full bg-sky-100 text-sky-700 flex items-center justify-center text-xs font-bold">✓</span>
                    <span><strong>Modo 100% Offline:</strong> Guarda evidencias en memoria blindada.</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <span className="w-6 h-6 rounded-full bg-sky-100 text-sky-700 flex items-center justify-center text-xs font-bold">✓</span>
                    <span><strong>Cámara Ghosting:</strong> Superpone el encuadre de check-in vs check-out.</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <span className="w-6 h-6 rounded-full bg-sky-100 text-sky-700 flex items-center justify-center text-xs font-bold">✓</span>
                    <span><strong>Sellado In Situ:</strong> La foto no puede modificarse tras el clic.</span>
                  </div>
                </div>
              </div>

              {/* Mobile Phone Mockup */}
              <div className="lg:col-span-7 flex justify-center">
                <div className="w-72 sm:w-80 rounded-[2.5rem] p-3 bg-slate-900 shadow-2xl border-4 border-slate-700">
                  <div className="rounded-[2rem] bg-white overflow-hidden p-4 space-y-4">
                    <div className="flex items-center justify-between text-[10px] text-slate-400 font-semibold px-2">
                      <span>09:41</span>
                      <span className="text-emerald-600 font-bold">● Modo Offline Seguro</span>
                    </div>

                    <div className="space-y-1">
                      <span className="text-[10px] font-bold text-sky-600 uppercase tracking-wider">Paseo Castellana 184</span>
                      <h4 className="font-heading font-bold text-sm text-slate-900">Captura de Daño #04</h4>
                    </div>

                    <div className="h-44 rounded-xl bg-slate-800 flex flex-col items-center justify-center text-slate-300 relative overflow-hidden">
                      <Eye className="w-8 h-8 text-blue-400 mb-1" />
                      <span className="text-[11px] font-medium text-slate-200">Encuadre Criptográfico</span>
                      <span className="text-[9px] text-slate-400 mt-1">GPS & Timestamp activos</span>
                    </div>

                    <div className="space-y-2">
                      <button className="w-full py-3 px-4 rounded-xl bg-blue-600 text-white font-bold text-xs flex items-center justify-center gap-2 shadow-sm whitespace-nowrap flex-shrink-0">
                        <Smartphone className="w-4 h-4 flex-shrink-0" />
                        <span>Disparar y Sellar Hash</span>
                      </button>
                      <button className="w-full py-2.5 px-4 rounded-xl bg-slate-100 text-slate-700 font-semibold text-xs flex items-center justify-center whitespace-nowrap flex-shrink-0">
                        <span>Completar Inspección</span>
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          )}

          {/* Tab 3: Vista Informe Pericial */}
          {activeTourTab === "informe" && (
            <div className="glass-panel-3d rounded-3xl p-6 sm:p-10 border border-white shadow-xl grid grid-cols-1 lg:grid-cols-12 gap-8 items-center animate-fade-in">
              <div className="lg:col-span-5 space-y-5">
                <div className="inline-flex items-center gap-1.5 text-xs font-bold text-emerald-700 bg-emerald-50 px-3 py-1 rounded-full border border-emerald-200">
                  <Award className="w-3.5 h-3.5" />
                  <span>Informe Pericial Oficial</span>
                </div>
                <h3 className="font-heading font-extrabold text-2xl sm:text-3xl text-slate-900 leading-tight">
                  Validez Jurídica para Juzgados y Aseguradoras
                </h3>
                <p className="text-slate-600 text-sm leading-relaxed">
                  El entregable final es un dictamen pericial estructurado que incorpora una firma
                  digital visible con certificado corporativo X.509, sello de tiempo notarial RFC 3161 y código QR de auditoría pública.
                </p>

                <div className="space-y-3 text-sm text-slate-700">
                  <div className="flex items-center gap-3">
                    <span className="w-6 h-6 rounded-full bg-emerald-100 text-emerald-700 flex items-center justify-center text-xs font-bold">✓</span>
                    <span><strong>Inalterabilidad garantizada:</strong> Imposible modificar fotos o textos.</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <span className="w-6 h-6 rounded-full bg-emerald-100 text-emerald-700 flex items-center justify-center text-xs font-bold">✓</span>
                    <span><strong>Firma visible con sello:</strong> Reconocida por peritos de seguros.</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <span className="w-6 h-6 rounded-full bg-emerald-100 text-emerald-700 flex items-center justify-center text-xs font-bold">✓</span>
                    <span><strong>Auditoría abierta:</strong> Cualquier parte puede auditar el hash.</span>
                  </div>
                </div>
              </div>

              {/* Visual PDF Preview Mockup */}
              <div className="lg:col-span-7 bg-white rounded-2xl border-2 border-slate-300 p-6 shadow-xl space-y-4 max-w-lg mx-auto">
                <div className="flex items-center justify-between border-b pb-3">
                  <div className="flex items-center gap-2">
                    <div className="w-6 h-6 rounded bg-blue-600 text-white flex items-center justify-center font-bold text-xs">
                      C
                    </div>
                    <span className="font-heading font-extrabold text-xs text-slate-900 uppercase tracking-wider">
                      Dictamen Pericial Oficial
                    </span>
                  </div>
                  <span className="text-[10px] font-mono text-slate-400">Pág. 1 de 4</span>
                </div>

                <div className="space-y-2 text-xs">
                  <div className="p-2.5 rounded bg-slate-50 border border-slate-200">
                    <span className="text-[10px] text-slate-400 uppercase font-bold block">Inmueble Auditado:</span>
                    <strong className="text-slate-800">Paseo de la Castellana 184 • Madrid</strong>
                  </div>
                  <div className="p-2.5 rounded bg-slate-50 border border-slate-200">
                    <span className="text-[10px] text-slate-400 uppercase font-bold block">Conclusión Pericial:</span>
                    <span className="text-slate-700">Evidencias fotográficas selladas e inalteradas. Daño imputable a siniestro.</span>
                  </div>
                </div>

                <div className="p-3 rounded-xl border-2 border-dashed border-emerald-300 bg-emerald-50/50 flex items-center justify-between">
                  <div>
                    <span className="text-xs font-bold text-emerald-800 block">Sello Digital Notarial</span>
                    <span className="text-[10px] text-emerald-700">Certificado X.509 • Sello de Tiempo RFC 3161</span>
                  </div>
                  <ShieldCheck className="w-6 h-6 text-emerald-600" />
                </div>
              </div>
            </div>
          )}
        </div>
      </section>

      {/* ── 5. CALCULADORA DE ROI B2B ADAPTATIVA POR SECTOR ── */}
      <section id="calculadora-roi" className="py-20 relative z-10 scroll-mt-20">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-10">
            <span className="text-xs uppercase font-bold tracking-widest text-emerald-600 mb-2 block font-mono">
              Impacto en Tu Cuenta de Resultados
            </span>
            <h2 className="font-heading font-extrabold text-3xl sm:text-4xl text-slate-900 tracking-tight mb-4">
              Calculadora de Pérdidas Evitadas y ROI
            </h2>
            <p className="text-slate-600 text-base sm:text-lg leading-relaxed">
              Selecciona tu sector: adaptamos las variables numéricas, las pérdidas operativas típicas y las soluciones periciales que CheckIt activa para blindar tu balance.
            </p>
          </div>

          {/* Interactive Sector Selector Tabs */}
          <div className="flex flex-wrap items-center justify-center gap-2.5 sm:gap-3 mb-10">
            {Object.values(ROI_SECTORS).map((sector) => {
              const Icon = sector.icon;
              const isSelected = activeRoiSector === sector.id;
              return (
                <button
                  key={sector.id}
                  onClick={() => handleSectorChange(sector.id)}
                  className={`inline-flex items-center gap-2.5 px-4 sm:px-5 py-3 rounded-2xl text-xs sm:text-sm font-bold transition-all whitespace-nowrap cursor-pointer active:scale-95 shadow-xs ${
                    isSelected
                      ? "bg-gradient-to-r from-blue-600 via-blue-600 to-indigo-600 text-white shadow-lg shadow-blue-600/25 ring-2 ring-blue-400/40"
                      : "bg-white/90 hover:bg-white text-slate-700 hover:text-blue-600 border border-slate-200/90 hover:border-blue-300"
                  }`}
                >
                  <Icon className={`w-4 h-4 flex-shrink-0 ${isSelected ? "text-white" : "text-blue-600"}`} />
                  <span>{sector.name}</span>
                  {isSelected && (
                    <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse"></span>
                  )}
                </button>
              );
            })}
          </div>

          {/* Main Calculator Glass Deck */}
          <div className="glass-panel-3d rounded-3xl p-6 sm:p-10 border-2 border-white shadow-2xl space-y-8">
            {/* Sector Sub-header callout */}
            <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3 pb-6 border-b border-slate-200/80">
              <div>
                <div className="flex items-center gap-2 mb-1">
                  <span className="inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-full text-[11px] font-bold uppercase tracking-wider bg-blue-50 border border-blue-200 text-blue-800 font-mono">
                    <ActiveSectorIcon className="w-3.5 h-3.5 text-blue-600" />
                    <span>Sector Activo: {currentRoiSector.shortName}</span>
                  </span>
                  <span className="text-xs text-slate-400 font-medium hidden sm:inline">•</span>
                  <span className="text-xs text-slate-500 font-medium hidden sm:inline">{currentRoiSector.badge}</span>
                </div>
                <p className="text-sm font-semibold text-slate-800">
                  {currentRoiSector.headline}
                </p>
              </div>

              <span className="text-xs font-mono font-semibold text-emerald-700 bg-emerald-50 px-3 py-1 rounded-xl border border-emerald-200 whitespace-nowrap self-start sm:self-center">
                Algoritmo de Amortización Dinámica
              </span>
            </div>

            {/* Sliders Input & Savings Result Grid */}
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
              {/* Sliders Input Column */}
              <div className="lg:col-span-7 space-y-6">
                {/* Slider 1: Units */}
                <div className="space-y-2">
                  <div className="flex justify-between items-center text-sm font-semibold">
                    <span className="text-slate-700">{currentRoiSector.sliderUnits.label}</span>
                    <span className="text-blue-600 font-bold font-mono px-2.5 py-0.5 rounded-lg bg-blue-50 border border-blue-200">
                      {roiUnits} {roiUnits === 1 ? currentRoiSector.sliderUnits.unitSingle : currentRoiSector.sliderUnits.unitPlural}
                    </span>
                  </div>
                  <input
                    type="range"
                    min={currentRoiSector.sliderUnits.min}
                    max={currentRoiSector.sliderUnits.max}
                    step={currentRoiSector.sliderUnits.step}
                    value={roiUnits}
                    onChange={(e) => setRoiUnits(Number(e.target.value))}
                    className="w-full h-2 bg-slate-200 rounded-lg appearance-none cursor-pointer accent-blue-600"
                  />
                  <span className="text-[11px] text-slate-400 block">{currentRoiSector.sliderUnits.helper}</span>
                </div>

                {/* Slider 2: Disputes / Questioned claims */}
                <div className="space-y-2">
                  <div className="flex justify-between items-center text-sm font-semibold">
                    <span className="text-slate-700">{currentRoiSector.sliderDisputes.label}</span>
                    <span className="text-blue-600 font-bold font-mono px-2.5 py-0.5 rounded-lg bg-blue-50 border border-blue-200">
                      {roiDisputes} {roiDisputes === 1 ? currentRoiSector.sliderDisputes.unitSingle : currentRoiSector.sliderDisputes.unitPlural}
                    </span>
                  </div>
                  <input
                    type="range"
                    min={currentRoiSector.sliderDisputes.min}
                    max={currentRoiSector.sliderDisputes.max}
                    step={currentRoiSector.sliderDisputes.step}
                    value={roiDisputes}
                    onChange={(e) => setRoiDisputes(Number(e.target.value))}
                    className="w-full h-2 bg-slate-200 rounded-lg appearance-none cursor-pointer accent-blue-600"
                  />
                  <span className="text-[11px] text-slate-400 block">{currentRoiSector.sliderDisputes.helper}</span>
                </div>

                {/* Slider 3: Cost per dispute */}
                <div className="space-y-2">
                  <div className="flex justify-between items-center text-sm font-semibold">
                    <span className="text-slate-700">{currentRoiSector.sliderCost.label}</span>
                    <span className="text-blue-600 font-bold font-mono px-2.5 py-0.5 rounded-lg bg-blue-50 border border-blue-200">
                      {roiCost.toLocaleString("es-ES")}€
                    </span>
                  </div>
                  <input
                    type="range"
                    min={currentRoiSector.sliderCost.min}
                    max={currentRoiSector.sliderCost.max}
                    step={currentRoiSector.sliderCost.step}
                    value={roiCost}
                    onChange={(e) => setRoiCost(Number(e.target.value))}
                    className="w-full h-2 bg-slate-200 rounded-lg appearance-none cursor-pointer accent-blue-600"
                  />
                  <span className="text-[11px] text-slate-400 block">{currentRoiSector.sliderCost.helper}</span>
                </div>
              </div>

              {/* Savings Result Output Box */}
              <div className="lg:col-span-5 bg-gradient-to-br from-blue-900 via-blue-950 to-slate-900 text-white rounded-2xl p-7 space-y-6 shadow-xl border border-blue-500/30 text-center relative overflow-hidden">
                <div className="absolute top-0 right-0 w-32 h-32 bg-sky-400/10 rounded-full blur-2xl"></div>

                <div className="space-y-2">
                  <span className="text-xs uppercase font-mono font-bold tracking-wider text-emerald-400 block">
                    Ahorro Anual Estimado ({currentRoiSector.shortName})
                  </span>
                  <div className="text-4xl sm:text-5xl font-heading font-extrabold text-white tracking-tight">
                    {totalSaved.toLocaleString("es-ES")}€
                  </div>
                  <p className="text-xs text-slate-300 leading-relaxed">
                    {currentRoiSector.savingsSubtitle}
                  </p>
                </div>

                <div className="pt-4 border-t border-slate-700/80 space-y-2.5 text-xs">
                  <div className="flex justify-between text-slate-300">
                    <span>{currentRoiSector.savingsContextLabel}</span>
                    <strong className="text-white font-mono">{totalSaved.toLocaleString("es-ES")}€ / año</strong>
                  </div>
                  <div className="flex justify-between text-slate-300">
                    <span>Retorno de inversión:</span>
                    <span className="text-emerald-400 font-bold font-mono whitespace-nowrap">
                      Se amortiza {paybackMultiplier} {paybackMultiplier === 1 ? "vez" : "veces"} al año
                    </span>
                  </div>
                </div>

                <a
                  href="#simulador"
                  className="w-full inline-flex items-center justify-center gap-2 py-3.5 rounded-xl bg-blue-600 hover:bg-blue-500 text-white text-xs sm:text-sm font-bold transition-all shadow-md active:scale-95 whitespace-nowrap"
                >
                  <span>Probar Caso de {currentRoiSector.shortName}</span>
                  <ArrowRight className="w-4 h-4 flex-shrink-0" />
                </a>
              </div>
            </div>

            {/* ── Desglose Especializado por Sector: Pérdidas Típicas vs Solución CheckIt ── */}
            <div className="pt-8 border-t border-slate-200/80">
              <div className="text-center max-w-2xl mx-auto mb-8">
                <span className="text-xs uppercase font-mono font-bold tracking-wider text-blue-600 block mb-1">
                  Anatomía del Ahorro • Sector {currentRoiSector.name}
                </span>
                <h3 className="font-heading font-extrabold text-2xl text-slate-900">
                  ¿Qué pérdidas sufres hoy y cómo las neutraliza CheckIt?
                </h3>
                <p className="text-xs sm:text-sm text-slate-500 mt-1">
                  Ejemplos reales contrastados de la operativa diaria en {currentRoiSector.shortName.toLowerCase()}.
                </p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 items-stretch">
                {/* Pérdidas Típicas del Sector (Red / Warning) */}
                <div className="rounded-2xl p-6 bg-gradient-to-b from-rose-50/60 via-white to-rose-50/30 border-2 border-rose-200/80 shadow-xs flex flex-col justify-between">
                  <div>
                    <div className="flex items-center justify-between pb-3 mb-4 border-b border-rose-100">
                      <div className="flex items-center gap-2.5">
                        <div className="w-8 h-8 rounded-xl bg-rose-100 text-rose-600 flex items-center justify-center font-bold">
                          <AlertTriangle className="w-4 h-4" />
                        </div>
                        <strong className="text-sm font-bold text-rose-950 font-heading">
                          {currentRoiSector.lossesTitle}
                        </strong>
                      </div>
                      <span className="text-[10px] font-mono font-bold px-2 py-0.5 rounded-full bg-rose-100 text-rose-700">
                        Vulnerabilidades Actuales
                      </span>
                    </div>

                    <div className="space-y-3.5">
                      {currentRoiSector.losses.map((loss, idx) => (
                        <div key={idx} className="p-3.5 rounded-xl bg-white/90 border border-rose-100 shadow-2xs space-y-1">
                          <div className="flex items-center justify-between gap-2">
                            <span className="text-xs font-bold text-slate-900 flex items-center gap-1.5">
                              <span className="w-1.5 h-1.5 rounded-full bg-rose-500 shrink-0"></span>
                              {loss.title}
                            </span>
                            <span className="text-[10px] font-mono text-rose-700 bg-rose-50 px-2 py-0.5 rounded border border-rose-200/60 shrink-0 font-medium">
                              {loss.tag}
                            </span>
                          </div>
                          <p className="text-xs text-slate-600 leading-relaxed pl-3">
                            {loss.desc}
                          </p>
                        </div>
                      ))}
                    </div>
                  </div>

                  <div className="mt-5 pt-3 border-t border-rose-100 text-[11px] text-rose-700 font-semibold flex items-center gap-1.5">
                    <AlertTriangle className="w-3.5 h-3.5 shrink-0" />
                    <span>Sin una prueba digital certificada, estas disputas se asumen como pérdida directa de balance.</span>
                  </div>
                </div>

                {/* Soluciones que Aporta CheckIt (Emerald / Shield) */}
                <div className="rounded-2xl p-6 bg-gradient-to-b from-emerald-50/60 via-white to-cyan-50/30 border-2 border-emerald-300/80 shadow-xs flex flex-col justify-between">
                  <div>
                    <div className="flex items-center justify-between pb-3 mb-4 border-b border-emerald-100">
                      <div className="flex items-center gap-2.5">
                        <div className="w-8 h-8 rounded-xl bg-emerald-100 text-emerald-700 flex items-center justify-center font-bold">
                          <ShieldCheck className="w-4 h-4" />
                        </div>
                        <strong className="text-sm font-bold text-emerald-950 font-heading">
                          {currentRoiSector.solutionsTitle}
                        </strong>
                      </div>
                      <span className="text-[10px] font-mono font-bold px-2 py-0.5 rounded-full bg-emerald-100 text-emerald-800">
                        Blindaje Pericial CheckIt
                      </span>
                    </div>

                    <div className="space-y-3.5">
                      {currentRoiSector.solutions.map((sol, idx) => (
                        <div key={idx} className="p-3.5 rounded-xl bg-white/95 border border-emerald-200/70 shadow-2xs space-y-1">
                          <div className="flex items-center justify-between gap-2">
                            <span className="text-xs font-bold text-slate-900 flex items-center gap-1.5">
                              <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600 shrink-0" />
                              {sol.title}
                            </span>
                            <span className="text-[10px] font-mono text-emerald-700 bg-emerald-50 px-2 py-0.5 rounded border border-emerald-200/60 shrink-0 font-medium">
                              {sol.tag}
                            </span>
                          </div>
                          <p className="text-xs text-slate-600 leading-relaxed pl-5">
                            {sol.desc}
                          </p>
                        </div>
                      ))}
                    </div>
                  </div>

                  <div className="mt-5 pt-3 border-t border-emerald-100 text-[11px] text-emerald-800 font-semibold flex items-center justify-between">
                    <div className="flex items-center gap-1.5">
                      <Check className="w-3.5 h-3.5 text-emerald-600 shrink-0" />
                      <span>Firma cualificada eIDAS + RFC 3161 incorporada en cada dictamen.</span>
                    </div>
                    <span className="font-mono text-emerald-700 font-bold">100% Inalterable</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── 6. SIMULADOR VISUAL DE CERTIFICACIÓN NOTARIAL ── */}
      <section id="simulador" className="py-20 relative z-10 scroll-mt-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-14">
            <span className="text-xs uppercase font-bold tracking-widest text-emerald-600 mb-2 block font-mono">
              Pruébalo Tú Mismo en 1 Clic
            </span>
            <h2 className="font-heading font-extrabold text-3xl sm:text-4xl text-slate-900 tracking-tight mb-4">
              Simulador Visual de Certificación Notarial
            </h2>
            <p className="text-slate-600 text-base sm:text-lg leading-relaxed">
              Selecciona un caso de prueba o sube tu propia fotografía. Mira cómo CheckIt estampa
              instantáneamente el sello de inmutabilidad y emite el dictamen pericial.
            </p>
          </div>

          <div className="max-w-4xl mx-auto glass-panel-3d rounded-3xl p-6 sm:p-10 border border-white shadow-2xl">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
              {/* Left Column: Selector & Custom Upload */}
              <div className="lg:col-span-5 space-y-6">
                <div>
                  <label className="block text-xs font-bold uppercase text-slate-500 mb-3 tracking-wider font-mono">
                    1. Elige un caso de prueba o sube tu foto:
                  </label>

                  <div className="space-y-2.5">
                    {sampleIncidents.map((incident) => (
                      <button
                        key={incident.id}
                        onClick={() => triggerCertification(incident)}
                        className={`w-full text-left p-3.5 rounded-xl border transition-all flex items-center justify-between ${
                          selectedIncident.id === incident.id
                            ? "bg-blue-50/90 border-blue-400 text-blue-900 shadow-sm"
                            : "bg-white/80 hover:bg-slate-50 border-slate-200/90 text-slate-700"
                        }`}
                      >
                        <div>
                          <strong className="text-xs block font-bold">{incident.title}</strong>
                          <span className="text-[11px] text-slate-500">{incident.zone}</span>
                        </div>
                        {selectedIncident.id === incident.id && (
                          <CheckCircle2 className="w-4 h-4 text-blue-600 shrink-0" />
                        )}
                      </button>
                    ))}
                  </div>
                </div>

                {/* Custom File Upload Box */}
                <div>
                  <label className="block text-xs font-bold uppercase text-slate-500 mb-2 tracking-wider font-mono">
                    O prueba con tu propia imagen:
                  </label>
                  <label
                    htmlFor="interactive-file-upload"
                    className="flex flex-col items-center justify-center p-5 rounded-2xl border-2 border-dashed border-blue-300 hover:border-blue-500 bg-blue-50/30 hover:bg-blue-50/60 transition-all cursor-pointer group text-center"
                  >
                    <UploadCloud className="w-8 h-8 text-blue-500 group-hover:scale-110 transition-transform mb-2" />
                    <span className="text-xs font-bold text-slate-800">
                      Sube cualquier foto desde tu dispositivo
                    </span>
                    <span className="text-[11px] text-slate-500">JPG, PNG (calcula el hash en el acto)</span>
                    <input
                      id="interactive-file-upload"
                      type="file"
                      onChange={handleCustomUpload}
                      className="hidden"
                    />
                  </label>
                </div>
              </div>

              {/* Right Column: Visual Certificate Card */}
              <div className="lg:col-span-7">
                <div className="rounded-2xl p-6 bg-gradient-to-b from-white to-slate-50 border-2 border-emerald-300 shadow-lg relative overflow-hidden">
                  {/* Top Seal Header */}
                  <div className="flex items-center justify-between pb-4 border-b border-slate-200">
                    <div className="flex items-center gap-3">
                      <CheckItEmblem className="w-9 h-9" glow={false} />
                      <div>
                        <span className="text-xs font-extrabold text-slate-900 block font-heading">
                          CERTIFICADO OFICIAL CHECKIT
                        </span>
                        <span className="text-[10px] text-slate-500 font-mono">
                          EXPEDIENTE: {selectedIncident.id} • HASH SHA-256
                        </span>
                      </div>
                    </div>
                    <span className="px-3 py-1 rounded-full bg-emerald-100 text-emerald-800 text-xs font-bold font-mono border border-emerald-300 flex items-center gap-1.5 shadow-xs">
                      <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
                      <span>BLINDADO</span>
                    </span>
                  </div>

                  {/* Body Content with Animation State */}
                  <div className="py-5 space-y-4">
                    {isCertifying ? (
                      <div className="py-12 text-center space-y-3">
                        <RefreshCw className="w-8 h-8 text-blue-600 animate-spin mx-auto" />
                        <p className="text-xs font-bold text-slate-700">
                          Checky está calculando el Hash SHA-256 y estampando el Sello Notarial RFC 3161...
                        </p>
                      </div>
                    ) : (
                      <>
                        <div className="flex items-start justify-between gap-3">
                          <div>
                            <span className="text-[11px] text-slate-400 font-semibold uppercase block">
                              Incidencia Registrada:
                            </span>
                            <h4 className="font-heading font-bold text-base text-slate-900">
                              {selectedIncident.title}
                            </h4>
                            <p className="text-xs text-slate-500 mt-0.5">
                              {selectedIncident.zone}
                            </p>
                          </div>
                          <div className="w-14 h-14 rounded-xl bg-slate-100 border border-slate-200 flex items-center justify-center shrink-0 shadow-inner">
                            <QrCode className="w-8 h-8 text-slate-700" />
                          </div>
                        </div>

                        <div className="grid grid-cols-2 gap-3 p-3.5 rounded-xl bg-slate-50 border border-slate-200 text-xs">
                          <div>
                            <span className="text-[10px] text-slate-400 block font-medium">Fecha y Hora Certificada:</span>
                            <strong className="text-slate-800">{selectedIncident.date}</strong>
                          </div>
                          <div>
                            <span className="text-[10px] text-slate-400 block font-medium">Técnico Asignado:</span>
                            <strong className="text-slate-800">{selectedIncident.inspector}</strong>
                          </div>
                        </div>

                        {/* Stamp of Legal Validity with 3D Notary Seal */}
                        <div className="p-4 rounded-xl bg-gradient-to-r from-emerald-50 via-sky-50/50 to-blue-50/50 border border-emerald-200 flex items-center justify-between gap-3 shadow-xs">
                          <div className="flex items-center gap-3">
                            <div className="w-9 h-9 rounded-xl bg-emerald-600/15 border border-emerald-300 flex items-center justify-center shrink-0">
                              <CheckCircle2 className="w-5 h-5 text-emerald-600" />
                            </div>
                            <div className="text-xs">
                              <strong className="text-emerald-950 block font-bold text-xs sm:text-sm">
                                {selectedIncident.status}
                              </strong>
                              <span className="text-emerald-800 text-[11px] block">
                                {selectedIncident.legalProof}
                              </span>
                              <span className="text-[10px] text-slate-500 font-mono mt-0.5 block">
                                Verificado y blindado por Checky Bot • Licencia TSA #2026-X509
                              </span>
                            </div>
                          </div>
                          <img
                            src="/crypto_seal.png"
                            alt="Sello Criptográfico CheckIt"
                            className="w-14 h-14 object-contain filter drop-shadow-[0_0_12px_rgba(6,182,212,0.5)] animate-stamp-pop shrink-0 hidden sm:block"
                          />
                        </div>
                      </>
                    )}
                  </div>


                  {/* Bottom Footer Note */}
                  <div className="pt-3 border-t border-slate-200 flex items-center justify-between text-[11px] text-slate-500">
                    <span>Validez ante Juzgados y Aseguradoras</span>
                    <span className="font-semibold text-blue-600 font-mono">RFC 3161 Imparcial</span>
                  </div>

                  {/* Download Official Certificate Action */}
                  <button
                    onClick={() => {
                      alert(`Descargando dictamen pericial ${selectedIncident.id} con firma digital X.509 y sello de tiempo RFC 3161...`);
                    }}
                    className="w-full mt-4 py-3 px-4 rounded-xl bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-700 hover:to-blue-800 text-white font-bold text-xs flex items-center justify-center gap-2 shadow-md shadow-blue-600/25 hover:shadow-lg transition-all active:scale-[0.99] whitespace-nowrap flex-shrink-0"
                  >
                    <FileDown className="w-4 h-4 flex-shrink-0" />
                    <span>Descargar Dictamen Pericial Certificado (PDF)</span>
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── 7. SECTORES B2B (CASOS DE USO) ── */}
      <section className="py-20 relative z-10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-14">
            <span className="text-xs uppercase font-bold tracking-widest text-blue-600 mb-2 block font-mono">
              Mercado y Sectores B2B
            </span>
            <h2 className="font-heading font-extrabold text-3xl sm:text-4xl text-slate-900 tracking-tight mb-4">
              ¿Quién se beneficia de CheckIt?
            </h2>
            <p className="text-slate-600 text-base sm:text-lg leading-relaxed">
              Solución versátil para cualquier empresa que gestione activos físicos o tramite partes de siniestros.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="glass-card-3d rounded-2xl p-6 border border-white/80">
              <div className="w-10 h-10 rounded-xl bg-blue-50 text-blue-700 flex items-center justify-center mb-4 border border-blue-200">
                <Building2 className="w-5 h-5" />
              </div>
              <h3 className="font-heading font-bold text-slate-900 text-base mb-2">
                Socimis e Inmobiliarias
              </h3>
              <p className="text-xs text-slate-600 leading-relaxed">
                Auditorías en entradas y salidas de inquilinos para retener fianzas justificadas sin discusiones.
              </p>
            </div>

            <div className="glass-card-3d rounded-2xl p-6 border border-white/80">
              <div className="w-10 h-10 rounded-xl bg-emerald-50 text-emerald-700 flex items-center justify-center mb-4 border border-emerald-200">
                <ShieldCheck className="w-5 h-5" />
              </div>
              <h3 className="font-heading font-bold text-slate-900 text-base mb-2">
                Aseguradoras y Peritos
              </h3>
              <p className="text-xs text-slate-600 leading-relaxed">
                Pruebas irrefutables de siniestros para acelerar la indemnización y erradicar fraudes.
              </p>
            </div>

            <div className="glass-card-3d rounded-2xl p-6 border border-white/80">
              <div className="w-10 h-10 rounded-xl bg-sky-50 text-sky-700 flex items-center justify-center mb-4 border border-sky-200">
                <Layers className="w-5 h-5" />
              </div>
              <h3 className="font-heading font-bold text-slate-900 text-base mb-2">
                Constructoras y Reformas
              </h3>
              <p className="text-xs text-slate-600 leading-relaxed">
                Certificación de fin de obra y entrega de llaves protegida frente a reclamaciones posteriores.
              </p>
            </div>

            <div className="glass-card-3d rounded-2xl p-6 border border-white/80">
              <div className="w-10 h-10 rounded-xl bg-indigo-50 text-indigo-700 flex items-center justify-center mb-4 border border-indigo-200">
                <Briefcase className="w-5 h-5" />
              </div>
              <h3 className="font-heading font-bold text-slate-900 text-base mb-2">
                Gestión de Activos y Flotas
              </h3>
              <p className="text-xs text-slate-600 leading-relaxed">
                Trazabilidad fotográfica continua del estado de maquinaria, vehículos o naves industriales.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ── 8. FOOTER PROFESIONAL ── */}
      <footer className="relative bg-slate-900 text-slate-300 pt-20 pb-12 border-t border-slate-800 overflow-hidden z-10">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-5xl h-64 bg-blue-600/10 blur-3xl pointer-events-none"></div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          {/* Recruiter Callout Box */}
          <div className="rounded-3xl p-8 sm:p-12 mb-16 bg-slate-800/95 border border-slate-700/90 backdrop-blur-2xl shadow-2xl text-center max-w-4xl mx-auto">
            <span className="px-3.5 py-1.5 rounded-full bg-blue-500/20 text-blue-300 border border-blue-400/40 text-xs font-mono font-bold uppercase tracking-wider inline-block mb-5">
              Desarrollo Full-Stack & Visión de Producto
            </span>

            <h3 className="font-heading font-extrabold text-2xl sm:text-3xl lg:text-4xl text-white tracking-tight leading-snug mb-4">
              ¿Buscas un perfil capaz de diseñar productos robustos, intuitivos y orientados al negocio?
            </h3>

            <p className="text-slate-300 text-base sm:text-lg max-w-2xl mx-auto leading-relaxed mb-8 font-normal">
              CheckIt demuestra capacidad para transformar un reto técnico y legal complejo en una
              experiencia de usuario clara, moderna y de alto valor comercial para empresas.
            </p>

            <div className="flex flex-wrap items-center justify-center gap-4">
              <a
                href="https://pfm-check-it.vercel.app/login"
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-2.5 px-6 py-3.5 rounded-xl bg-gradient-to-r from-blue-500 to-cyan-500 hover:from-blue-600 hover:to-cyan-600 text-white font-bold transition-all shadow-lg shadow-cyan-500/25 active:scale-95 whitespace-nowrap flex-shrink-0"
              >
                <ExternalLink className="w-5 h-5 flex-shrink-0" />
                <span>Probar App</span>
              </a>

              <a
                href="https://www.linkedin.com/in/pere-joan-sancho-su%C3%B1er-68a13a3a4/"
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-2.5 px-6 py-3.5 rounded-xl bg-blue-600 hover:bg-blue-500 text-white font-semibold transition-all shadow-lg shadow-blue-600/30 active:scale-95 whitespace-nowrap flex-shrink-0"
              >
                <LinkedinIcon className="w-5 h-5 flex-shrink-0" />
                <span>Conectar en LinkedIn</span>
              </a>

              <a
                href="https://github.com/PereJSS"
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-2.5 px-6 py-3.5 rounded-xl bg-white text-slate-900 font-semibold hover:bg-slate-100 transition-all shadow-lg active:scale-95 whitespace-nowrap flex-shrink-0"
              >
                <GithubIcon className="w-5 h-5 flex-shrink-0" />
                <span>Perfil de GitHub</span>
              </a>

              <a
                href="https://github.com/PereJSS/CheckIt-landing-page"
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-2.5 px-6 py-3.5 rounded-xl bg-slate-800 hover:bg-slate-700 text-slate-200 font-semibold border border-slate-700 transition-all whitespace-nowrap flex-shrink-0"
              >
                <FileCheck className="w-5 h-5 text-blue-400 flex-shrink-0" />
                <span>Repositorio Landing Page</span>
              </a>
            </div>
          </div>

          {/* Bottom Footer Credits */}
          <div className="pt-8 border-t border-slate-800 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-slate-400">
            <div className="flex items-center gap-3">
              <CheckItEmblem className="w-7 h-7" glow={false} />
              <span className="font-heading font-bold text-white tracking-tight">
                CheckIt © 2026
              </span>
              <span className="text-slate-500">•</span>
              <span>Creado por Pere Joan Sancho Suñer</span>
              <span className="text-slate-500 hidden md:inline">•</span>
              <span className="hidden md:inline-flex items-center gap-1.5 text-cyan-400 font-mono text-[11px]">
                <span className="w-1.5 h-1.5 rounded-full bg-cyan-400 animate-pulse"></span>
                Centinela Checky Custodiando Activos
              </span>
            </div>


            <div className="flex items-center gap-4 text-slate-400 text-[11px]">
              <span>Plataforma B2B Enterprise</span>
              <span>•</span>
              <span>Inmutabilidad Probatoria</span>
              <span>•</span>
              <span>React 19 & Django</span>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
