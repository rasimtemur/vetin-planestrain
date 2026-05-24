<img src="logo.svg" alt="Vetin Logo" height="60"/>

# Vetin | Plane Strain Analysis

**A browser-based computational tool for the analysis of two-dimensional strain states, principal strains, maximum shear strains, and strain transformations, with interactive Mohr's circle construction.**

[![License: MIT](https://img.shields.io/badge/License-MIT-blue.svg)](https://opensource.org/licenses/MIT)
[![PWA Ready](https://img.shields.io/badge/PWA-Ready-brightgreen.svg)](https://web.dev/progressive-web-apps/)
[![Languages](https://img.shields.io/badge/Languages-33-orange.svg)](#-multilingual-support)
[![Live Demo](https://img.shields.io/badge/🌐%20Live%20Demo-www.rasimtemur.com-389fb6.svg)](https://www.rasimtemur.com/vetin/planestrain/)

> Developed by **Assoc. Prof. Rasim Temür** · İstanbul University-Cerrahpaşa, Department of Civil Engineering  
> Part of the **Vetin** initiative for the digitisation of academic instruction tools.

---

## 📸 Screenshots

<p align="center">
  <b>Main Interface</b><br>
  <img src="screenshot-main.png" alt="Main Interface" width="800"/>
</p>

---

## 🌐 Online Access

> **[https://www.rasimtemur.com/vetin/planestrain/](https://www.rasimtemur.com/vetin/planestrain/)**

The application is accessible directly through a web browser without requiring any software installation, user registration, or server-side processing. All computations are performed client-side.

---

## 📋 Description

**Vetin Plane Strain Analysis** is an open-source, web-based software developed for educational use in the mechanics of materials and elasticity curricula. The application computes the complete two-dimensional strain state of a material point from the user-specified normal and shear strain components, and provides simultaneous graphical representations of the strain element, the principal strain element, the maximum shear strain element, the transformed strain element at an arbitrary inclination, and the corresponding **Mohr's circle**.

The software is intended to support both undergraduate instruction and self-directed learning by providing immediate, interactive visual feedback on the deformation of a material element under arbitrary plane strain conditions.

**Key properties of the application:**

- Operates entirely within the client browser; no server-side computation is required
- Functions offline as a **Progressive Web App (PWA)**, compatible with major desktop and mobile platforms
- User interface is localised in **33 languages**
- Supports **three sign-convention notations** for Mohr's circle (Engineering, Mathematical, Literature)
- Source code is freely distributed under the **MIT License**

---

## ⚙️ Functional Capabilities

### Input Parameters

The user specifies the in-plane strain components acting on the elementary material volume:

| Symbol | Quantity | Unit |
|--------|----------|------|
| **εₓ** | Normal strain along the x-axis | dimensionless (or με) |
| **εᵧ** | Normal strain along the y-axis | dimensionless (or με) |
| **γₓᵧ** | Engineering shear strain in the xy-plane | dimensionless (or μrad) |

### Computed Output

Upon specification of the strain state, the following quantities are computed and updated instantaneously:

**Principal Strains**
- ε<sub>1</sub>, ε<sub>2</sub> — principal normal strains
- φ<sub>p1</sub>, φ<sub>p2</sub> — orientations of the principal axes of strain

**Maximum Shear Strains**
- γ<sub>max</sub>, γ<sub>min</sub> — extreme in-plane shear strains
- ε<sub>ave</sub> — mean normal strain on the planes of maximum shear
- φ<sub>s1</sub>, φ<sub>s2</sub> — orientations of the planes of maximum shear

**Strain Transformation**
- ε<sub>x'</sub>, ε<sub>y'</sub>, γ<sub>x'y'</sub> — components on an axis system rotated by an arbitrary angle φ

### Mohr's Circle

A fully interactive Mohr's circle is constructed from the input strain state. The visualisation supports:

- **Step-by-step animated construction**, suitable for classroom demonstration
- **Three notation conventions** for the shear axis orientation:

| # | Notation | Description |
|---|----------|-------------|
| 1 | **Engineering (Structural)** | Shear axis directed downward; widely used in structural-engineering literature |
| 2 | **Mathematical (Theoretical)** | Shear axis directed upward; standard mathematical convention |
| 3 | **Literature** | Alternative convention encountered in classical mechanics-of-materials texts |

- Real-time correspondence between the strain element rotation and the position of the representative point on the circle
- Interactive **zoom**, **pan**, and **fit-to-screen** controls

### Graphical Strain Elements

Four synchronised graphical panels display the material element under different states:

| Panel | Contents |
|-------|----------|
| **Strain State** | Original deformed element with εₓ, εᵧ, γₓᵧ |
| **Principal Strains** | Rotated element aligned with the principal directions, displaying ε<sub>1</sub> and ε<sub>2</sub> |
| **Maximum Shear Strains** | Element rotated to the plane of maximum shear, displaying γ<sub>max</sub> together with the corresponding mean normal strain ε<sub>ave</sub> |
| **Transformed Strain** | Element rotated by the user-specified angle φ, displaying ε<sub>x'</sub>, ε<sub>y'</sub>, and γ<sub>x'y'</sub> |

Numerical values may be toggled on or off independently for each element.

### Interactive Rotation

The transformation angle φ may be adjusted via a numerical input or a continuous slider in the range −90° to +90°. The transformed-strain element and the corresponding point on Mohr's circle update simultaneously. An optional overlay superimposes the rotated (ε<sub>x'y'</sub>) configuration on the original strain element for direct comparison.

### Data Export

- **Vector Graphics Export** — Each diagram (strain element, principal element, shear element, transformed element, Mohr's circle) may be exported individually in scalable vector graphics (SVG) format, suitable for high-resolution publishing and lecture materials.

### Interface Options

- **Three display themes** — Light, Dark, and **Blueprint** (technical-drawing style)
- **Three page layouts** — Default (three-column), Grid, and Compact
- **Fullscreen mode** — Available independently for each panel
- **Responsive mobile interface** — Tabbed navigation optimised for handheld devices

---

## 🌐 Multilingual Support

The user interface is fully localised in **33 languages**. The active language is selectable at runtime and persisted across sessions via `localStorage`:

| Code | Language | Code | Language | Code | Language |
|------|----------|------|----------|------|----------|
| `tr` | 🇹🇷 Turkish | `en` | 🇬🇧 English | `de` | 🇩🇪 German |
| `fr` | 🇫🇷 French | `es` | 🇪🇸 Spanish | `it` | 🇮🇹 Italian |
| `pt` | 🇧🇷 Portuguese | `ru` | 🇷🇺 Russian | `ro` | 🇷🇴 Romanian |
| `bg` | 🇧🇬 Bulgarian | `el` | 🇬🇷 Greek | `sl` | 🇸🇮 Slovenian |
| `sq` | 🇦🇱 Albanian | `hy` | 🇦🇲 Armenian | `ka` | 🇬🇪 Georgian |
| `he` | 🇮🇱 Hebrew | `ar` | 🇸🇦 Arabic | `fa` | 🇮🇷 Persian |
| `ur` | 🇵🇰 Urdu | `hi` | 🇮🇳 Hindi | `bn` | 🇧🇩 Bengali |
| `ne` | 🇳🇵 Nepali | `dz` | 🇧🇹 Dzongkha | `my` | 🇲🇲 Burmese |
| `th` | 🇹🇭 Thai | `id` | 🇮🇩 Indonesian | `tl` | 🇵🇭 Filipino |
| `cn` | 🇨🇳 Chinese | `ja` | 🇯🇵 Japanese | `ko` | 🇰🇷 Korean |
| `uz` | 🇺🇿 Uzbek | `tg` | 🇹🇯 Tajik | `ky` | 🇰🇬 Kyrgyz |

---

## 🛠️ Technical Implementation

The application is implemented using standard web technologies without dependency on a JavaScript framework:

| Technology | Role |
|-----------|------|
| **HTML5 / CSS3 / JavaScript (ES6+)** | Core application architecture |
| **HTML5 Canvas API** | Rendering of Mohr's circle and strain elements |
| **SVG (Scalable Vector Graphics)** | Vector export of diagrams |
| **Service Worker API** | Offline caching and PWA functionality |
| **Web App Manifest** | Home screen installation support |
| **localStorage API** | Persistence of user preferences (language, theme, layout) |

---

## 📁 Project Structure

```
planestrain/
├── index.html              # Application entry point and HTML shell
├── manifest.json           # PWA manifest descriptor
├── sw.js                   # Service Worker (offline caching)
│
├── script.js               # Core computations, canvas drawing, UI logic
├── mobile.js               # Mobile-specific layout and tab navigation
│
├── translations.js         # Localisation string repository (33 languages)
│
├── style.css               # Base styles, themes (light / dark / blueprint), layouts
├── mobile.css              # Mobile viewport layout
│
├── logo.svg                # Application logotype
├── icon.svg                # Source vector icon
├── IUC.svg                 # İstanbul University-Cerrahpaşa logo
├── icon-192.png            # PWA icon (192 × 192 px)
└── icon-512.png            # PWA icon (512 × 512 px)
```

---

## 🚀 Deployment and Local Execution

### Online Access (Recommended)

The application is hosted and publicly accessible at:  
**[https://www.rasimtemur.com/vetin/planestrain/](https://www.rasimtemur.com/vetin/planestrain/)**

### Local Execution

As the application comprises static files only, it may be served locally using any HTTP server:

```bash
# Clone the repository
git clone https://github.com/rasimtemur/vetin-planestrain.git
cd vetin-planestrain

# Python 3 — built-in HTTP server
python -m http.server 8000

# Node.js — via npx
npx serve .
```

Navigate to `http://localhost:8000` in a web browser to launch the application.

### Installation as a Progressive Web App

On browsers supporting the PWA specification (Chromium-based browsers, Firefox, Safari on iOS), the application may be installed to the device home screen or desktop via the browser's **"Install"** or **"Add to Home Screen"** functionality, enabling offline access.

---

## 📖 Usage

1. **Enter the strain components** — Specify εₓ, εᵧ, and γₓᵧ in the left input panel.
2. **Read the principal results** — The principal strains (ε<sub>1</sub>, ε<sub>2</sub>) and their orientations (φ<sub>p1</sub>, φ<sub>p2</sub>) are displayed immediately.
3. **Read the maximum shear results** — The extreme shear strains (γ<sub>max</sub>, γ<sub>min</sub>), the mean normal strain (ε<sub>ave</sub>), and their orientations (φ<sub>s1</sub>, φ<sub>s2</sub>) are displayed beneath the principal results.
4. **Rotate the element** — Adjust the angle φ via the numerical input or the slider to investigate the transformed strain state at an arbitrary orientation.
5. **Construct Mohr's circle interactively** — Activate the *step-by-step* mode (▶) to follow the geometric construction of the circle, or allow the complete circle to be drawn directly. Switch among the three notation conventions via the buttons in the toolbar.
6. **Compare configurations** — Activate the *Show ε<sub>x'y'</sub>* toggle to overlay the rotated element on the original strain state.
7. **Export results** — Each diagram may be downloaded individually as an SVG file from the panel toolbar.

---

## 📐 Computational Methodology

The plane strain state is defined by the components εₓ, εᵧ, and γₓᵧ. From the rotational transformation of the strain tensor:

- **Principal strains** are obtained from

  ε<sub>1,2</sub> = (εₓ + εᵧ)/2 ± √[((εₓ − εᵧ)/2)² + (γₓᵧ/2)²]

- **Orientations of the principal axes** satisfy

  tan(2φ<sub>p</sub>) = γₓᵧ / (εₓ − εᵧ)

- **Maximum in-plane shear strain** is

  γ<sub>max</sub>/2 = √[((εₓ − εᵧ)/2)² + (γₓᵧ/2)²]

  with the corresponding axes rotated by 45° from the principal axes.

- **Mean normal strain** on the planes of maximum shear is

  ε<sub>ave</sub> = (εₓ + εᵧ)/2

- **Transformed strain components** on an axis system rotated by an angle φ are obtained from the standard strain-transformation equations:

  ε<sub>x'</sub> = (εₓ + εᵧ)/2 + (εₓ − εᵧ)/2 · cos(2φ) + (γₓᵧ/2) · sin(2φ)  
  ε<sub>y'</sub> = (εₓ + εᵧ)/2 − (εₓ − εᵧ)/2 · cos(2φ) − (γₓᵧ/2) · sin(2φ)  
  γ<sub>x'y'</sub>/2 = −(εₓ − εᵧ)/2 · sin(2φ) + (γₓᵧ/2) · cos(2φ)

- **Mohr's circle** is constructed in the (ε, γ/2) plane with centre at ((εₓ + εᵧ)/2, 0) and radius equal to γ<sub>max</sub>/2. Each rotation of the physical element by an angle φ corresponds to a rotation of 2φ along the circumference of the circle.

---

## 📜 License

This software is distributed under the **MIT License**.  
Full license terms are available in the [LICENSE](LICENSE) file.

---

## 👤 Developer

**Assoc. Prof. Rasim Temür**  
Department of Civil Engineering  
İstanbul University-Cerrahpaşa  
🌐 [rasimtemur.com](https://www.rasimtemur.com)

---

## 🔗 Vetin Project

Vetin is a collection of open-source, browser-based computational tools developed for use in civil and structural engineering education. Additional tools within the Vetin ecosystem are accessible at **[rasimtemur.com/vetin](https://www.rasimtemur.com/vetin)**.

---

<p align="center">
  <i>Developed in support of engineering education.</i><br>
  <a href="https://github.com/rasimtemur/vetin-planestrain">GitHub</a> ·
  <a href="https://opensource.org/licenses/MIT">MIT License</a> ·
  <a href="https://www.iuc.edu.tr">İstanbul University-Cerrahpaşa</a>
</p>
