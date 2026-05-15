---
name: The System Monitor
description: A high-density, terminal-first developer portfolio with live telemetry.
colors:
  primary: "#27c93f"
  secondary: "#ffbd2e"
  neutral-bg: "#0c0c0c"
  neutral-surface: "#111111"
  neutral-layer: "#1a1a1a"
  neutral-border: "#333333"
  text-primary: "#ffffff"
  text-muted: "#d4d4d4"
  text-dim: "#888888"
typography:
  display:
    fontFamily: "JetBrains Mono, monospace"
    fontSize: "clamp(1.875rem, 5vw, 3.75rem)"
    fontWeight: 700
    lineHeight: 1.1
  body:
    fontFamily: "JetBrains Mono, monospace"
    fontSize: "0.875rem"
    fontWeight: 400
    lineHeight: 1.6
  label:
    fontFamily: "JetBrains Mono, monospace"
    fontSize: "0.75rem"
    fontWeight: 700
    letterSpacing: "0.1em"
rounded:
  sm: "2px"
  none: "0px"
spacing:
  xs: "4px"
  sm: "8px"
  md: "16px"
  lg: "32px"
components:
  button-primary:
    backgroundColor: "transparent"
    textColor: "{colors.primary}"
    rounded: "{rounded.none}"
    padding: "8px 24px"
  card-base:
    backgroundColor: "{colors.neutral-surface}"
    rounded: "{rounded.none}"
    padding: "24px"
---

# Design System: The System Monitor

## 1. Overview

**Creative North Star: "The System Monitor"**

This system represents a live diagnostic interface for a high-performance server. It is a dark, tactile environment where code, status, and telemetry are the primary citizens. The aesthetic is explicitly developer-centric, favoring information density and functional precision over decorative flourishes.

The system explicitly rejects "AI slop" aesthetics—soft gradients, floating generic cards, and rounded SaaS-lite templates are prohibited. Instead, it embraces the raw materials of computing: rigid grids, terminal prompts, and status daemons.

**Key Characteristics:**
- **Terminal-First:** Monospaced typography and command-line affordances drive the interface.
- **High-Density:** Information is packed precisely, using borders and tonal layering to create structure.
- **Reactive:** Every element responds to interaction with sharp, functional state changes.

## 2. Colors

The palette is derived from classic CRT monitors and terminal environments, anchored by a vibrant success green and cautious yellow.

### Primary
- **Binary Green** (#27c93f): The color of success, online status, and active prompts. Used for primary accents and high-signal data.

### Secondary
- **Caution Yellow** (#ffbd2e): Used for category headings and highlighting technical specifics (e.g., skill tags).

### Neutral
- **Obsidian Background** (#0c0c0c): The base of the system.
- **Layer 1 Surface** (#111111): Used for cards and containers.
- **Layer 2 Surface** (#1a1a1a): Used for interactive surfaces like inputs and navigation bars.
- **System Border** (#333333): The primary structural element for defining sections and grids.

**The One Voice Rule.** The primary Binary Green accent is used on ≤10% of any given screen. Its rarity preserves its signal strength.

## 3. Typography

The system uses a single, robust monospaced font family for all roles, reinforcing the terminal aesthetic.

**Display & Body Font:** JetBrains Mono (with monospace fallback)

**Character:** Technical, precise, and authoritative. The use of a single font stack forces a hierarchy built on size, weight, and color contrast.

### Hierarchy
- **Display** (700, clamp(1.875rem, 5vw, 3.75rem), 1.1): Hero headlines and major section titles.
- **Headline** (700, 1.25rem, 1.4): Sub-sections and card titles.
- **Body** (400, 0.875rem, 1.6): Standard descriptive text and documentation.
- **Label** (700, 0.75rem, 0.1em, Uppercase): Meta-data, system statuses, and category markers.

**The Prefix Rule.** Interactive elements or section headers often lead with `❯`, `./`, or `//` to indicate command intent or file-system structure.

## 4. Elevation

The system uses Tonal Layering rather than drop shadows. Depth is conveyed through background shifts and border treatments.

**The Flat-By-Default Rule.** Surfaces are flat and defined by borders. Shadows are prohibited. Depth is achieved by moving from the base Obsidian (#0c0c0c) to Layer 1 (#111111) and Layer 2 (#1a1a1a) surfaces.

## 5. Components

### Buttons
- **Shape:** Sharp (0px radius)
- **Primary:** Bordered treatment with Binary Green (#27c93f). Padding (8px 24px).
- **Hover / Focus:** Solid background fill of the accent color with inverted text.

### Cards / Containers
- **Corner Style:** Sharp (0px)
- **Background:** Layer 1 Surface (#111111).
- **Border:** System Border (#333333).
- **Internal Padding:** 24px (md/lg scale).

### Inputs
- **Style:** Background Layer 2 (#1a1a1a), Border System (#333333).
- **Focus:** Border shifts to Binary Green (#27c93f).

## 6. Do's and Don'ts

### Do:
- **Do** use monospaced fonts for all text elements.
- **Do** use `❯` or `./` to prefix interactive links and headers.
- **Do** define structure using 1px borders (#333333).
- **Do** use Binary Green (#27c93f) for active status indicators.

### Don't:
- **Don't** use border-radius greater than 2px.
- **Don't** use drop shadows or blur effects (except for limited backdrop-blur on nav).
- **Don't** use soft gradients or pastel color palettes.
- **Don't** use generic proportional fonts like Inter or Roboto.
- **Don't** use rounded "SaaS-lite" template patterns.
