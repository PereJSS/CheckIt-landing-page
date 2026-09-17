# CheckIt — Landing Page Enterprise B2B

> **Inmutabilidad y Validez Legal en Cada Inspección B2B.**  
> Plataforma tecnológica que transforma las fotografías de entrada, salida y siniestros en **pruebas periciales legalmente inalterables** para aseguradoras, gestoras de patrimonio, despachos jurídicos y constructoras.

[![Vercel App](https://img.shields.io/badge/App_en_Producción-pfm--check--it.vercel.app-blue?style=for-the-badge&logo=vercel)](https://pfm-check-it.vercel.app/login)
[![GitHub Repo](https://img.shields.io/badge/GitHub-CheckIt--landing--page-181717?style=for-the-badge&logo=github)](https://github.com/PereJSS/CheckIt-landing-page)
[![Legal Compliance](https://img.shields.io/badge/Compliance-eIDAS%20%7C%20Ley%2059%2F2003-emerald?style=for-the-badge&logo=shield)](https://pfm-check-it.vercel.app/login)
[![React 19](https://img.shields.io/badge/React-19.2-61DAFB?style=for-the-badge&logo=react)](https://react.dev/)
[![Vite](https://img.shields.io/badge/Vite-8.3-646CFF?style=for-the-badge&logo=vite)](https://vitejs.dev/)
[![Tailwind CSS v4](https://img.shields.io/badge/Tailwind_CSS-v4-38B2AC?style=for-the-badge&logo=tailwind-css)](https://tailwindcss.com/)

---

## 🎯 ¿Qué es CheckIt?

El 40% de los partes con fotos enviadas por WhatsApp o correo se desestiman en siniestros y disputas contractuales por falta de trazabilidad temporal y por la facilidad de editar los metadatos EXIF.

**CheckIt** resuelve esta vulnerabilidad actuando como un **notario digital automatizado**:
1. **Captura in situ sin intermediación**: La fotografía se sella criptográficamente desde el sensor de la cámara móvil.
2. **Sello Temporal Notarial RFC 3161 (TSA)**: Certificación de fecha y hora inmutables por una autoridad de tiempo oficial.
3. **Firma Pericial Cualificada X.509**: Garantía de integridad que invalida cualquier intento de alteración de píxeles o recorte.
4. **Dictamen Pericial PDF con QR Judicial**: Documento vinculante emitido en segundos con valor de prueba documental plena ante tribunales y reaseguradoras.

---

## 🌟 Características de la Landing Page

Esta landing page ha sido desarrollada con un estándar estético y funcional de nivel enterprise, incorporando elementos 3D, micro-interacciones y componentes interactivos avanzados:

### 1. Command Center Hero & HUD Forense
- Visualizador en tiempo real con reloj sincronizado en CET.
- Simulador de manipulación en vivo que demuestra la reacción de la firma X.509 al detectar alteraciones.
- Fondo ambiental 3D con retícula en perspectiva y esferas reflectantes de cromo y cristal líquido.

### 2. Escáner Forense Interactivo (`ForensicScannerHero.jsx`)
- Simulación interactiva de análisis forense digital.
- Inspección de capas criptográficas (Hash SHA-256, estampa TSA, certificado pericial y geolocalización blindada).

### 3. Demostración 3D Sincronizada con Vídeo (`#showcase-video`)
- Reproductor de vídeo integrado con barra de progreso reactiva.
- Navegación interactiva por 7 capítulos de la cadena de custodia (Activo 3D, Campo, Criptografía, Auditoría, TSA, Dictamen y Red B2B).
- Controles de reproducción, silenciado y reinicio fluido.

### 4. Product Tour Interactivo Multi-Rol (`#tour-producto`)
- **Para el Gestor (Panel Web)**: Monitorización centralizada de expedientes en tiempo real con descarga de PDF en 1 clic.
- **Para el Técnico (PWA Móvil)**: Modo 100% offline para sótanos y garajes, y cámara con modo *Ghosting* para superponer encuadres de check-in vs check-out.
- **Para el Peritaje (Dictamen Jurídico)**: Estructura oficial del informe pericial con QR de verificación pública.

### 5. Calculadora de ROI B2B Adaptativa por Sectores (`#calculadora-roi`)
Herramienta de amortización dinámica que adapta tanto los sliders y magnitudes económicas como los textos explicativos a la realidad de 4 industrias:
- **Seguros & Peritajes**: Detección de fraude de preexistencias, vulnerabilidades EXIF en WhatsApp y sobrepagos defensivos evitables.
- **Legal & Despachos**: Prevención de impugnaciones judiciales (arts. 326 y 384 LEC), reducción de sobrecostes por actas notariales presenciales y valor probatorio pleno.
- **Inmobiliario & SOCIMIs**: Recuperación del 100% de fianzas legítimas, cámara ghosting para antes/después idéntico y eliminación de reparaciones imputadas al propietario.
- **Construcción & Obras**: Bitácora criptográfica previa al sellado de pladur/forjados, delimitación de responsabilidades entre gremios y liberación ágil de certificaciones de pago.

### 6. Simulador Visual de Certificación Notarial (`#simulador`)
- Prueba en vivo con casos precargados (filtración de agua, cerradura forzada, grieta estructural) o subiendo cualquier imagen desde el dispositivo del usuario.
- Generación visual instantánea del certificado con hash SHA-256, sello TSA y dictamen pericial emitido.

### 7. Asistente Interactivo Checky (`CheckyMascot.jsx`)
- Mascota animada con expresiones dinámicas, tips periciales y atajos rápidos a las diferentes secciones de la plataforma.

---

## 🛠️ Stack Tecnológico

| Capa | Tecnología | Descripción |
| :--- | :--- | :--- |
| **Framework** | React 19.2 | Renderizado reactivo de última generación y hooks de estado |
| **Tooling** | Vite 8.3 | Bundler ultra-rápido con Hot Module Replacement (HMR) |
| **Estilos** | Tailwind CSS v4 + Vanilla CSS | Sistema de diseño de alta gama con variables HSL, gradientes y glassmorphism 3D |
| **Iconografía** | Lucide React | Iconos vectoriales limpios y coherentes |
| **Legal Tech** | RFC 3161 TSA / X.509 / SHA-256 | Protocolos criptográficos y estándares de firma digital probatoria |

---

## 🚀 Instalación y Puesta en Marcha

### Prerrequisitos
- **Node.js**: v18.0.0 o superior
- **npm**: v9.0.0 o superior

### 1. Clonar o acceder al proyecto
```bash
git clone https://github.com/PereJSS/CheckIt-landing-page.git
cd CheckIt-landing-page
```

### 2. Instalar dependencias
```bash
npm install
```

### 3. Iniciar el servidor de desarrollo
```bash
npm run dev
```
La aplicación se abrirá en `http://localhost:5173`.

### 4. Compilar para producción
```bash
npm run build
```
Los archivos optimizados se generarán en la carpeta `dist/`.

### 5. Previsualizar la compilación de producción
```bash
npm run preview
```

---

## 📂 Estructura del Proyecto

```text
checkit-landing/
├── public/                     # Recursos estáticos públicos (vídeos, iconos, favicons)
│   ├── video-bg.mp4            # Vídeo 3D de arquitectura pericial
│   └── ...
├── src/
│   ├── components/             # Componentes modulares
│   │   ├── CheckItLogo.jsx     # Logo oficial y emblema con variantes de brillo
│   │   ├── CheckyMascot.jsx    # Mascota interactiva con consejos contextuales
│   │   └── ForensicScannerHero.jsx # Escáner forense digital de evidencias
│   ├── assets/                 # Recursos multimedia importables
│   ├── App.jsx                 # Componente raíz
│   ├── LandingPage.jsx         # Página principal completa con todas las secciones
│   ├── index.css               # Tokens de diseño, efectos de cristal y perspectiva 3D
│   └── main.jsx                # Punto de entrada de React
├── index.html                  # HTML5 base con metaetiquetas SEO y fuentes de Google
├── package.json                # Dependencias y scripts del proyecto
├── vite.config.js              # Configuración de Vite con soporte para React y Tailwind v4
└── README.md                   # Documentación del proyecto
```

---

## ⚖️ Marco Legal y Normativo

CheckIt ha sido concebido para cumplir estrictamente con los estándares probatorios de la Unión Europea y el ordenamiento jurídico español:
- **Reglamento (UE) Nº 910/2014 (eIDAS)**: Servicios de confianza para transacciones electrónicas.
- **Ley 59/2003 y Ley 6/2020**: Firma electrónica y valor probatorio pleno equivalente al documento público.
- **Ley de Enjuiciamiento Civil (LEC)**: Inversión de la carga de la prueba en sala (arts. 326, 384 y concordantes).
- **RFC 3161**: Estándar de sellado de tiempo de Autoridades de Certificación Notarial (TSA).

---

## 🌐 Enlaces de Interés

- **Repositorio de la Landing Page (GitHub)**: [https://github.com/PereJSS/CheckIt-landing-page](https://github.com/PereJSS/CheckIt-landing-page)
- **Aplicación en Producción (Vercel)**: [https://pfm-check-it.vercel.app/login](https://pfm-check-it.vercel.app/login)
- **Repositorio de la App Core (PFM-CheckIt)**: [https://github.com/PereJSS/PFM-CheckIt](https://github.com/PereJSS/PFM-CheckIt)
