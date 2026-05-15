# Graph Report - .  (2026-05-15)

## Corpus Check
- 13 files · ~6,885 words
- Verdict: corpus is large enough that graph structure adds value.

## Summary
- 103 nodes · 121 edges · 21 communities (10 shown, 11 thin omitted)
- Extraction: 89% EXTRACTED · 11% INFERRED · 0% AMBIGUOUS · INFERRED: 13 edges (avg confidence: 0.87)
- Token cost: 0 input · 0 output

## Community Hubs (Navigation)
- [[_COMMUNITY_GitHub Telemetry & Contributions|GitHub Telemetry & Contributions]]
- [[_COMMUNITY_Portfolio Layout & Sections|Portfolio Layout & Sections]]
- [[_COMMUNITY_Live System Daemon (Footer)|Live System Daemon (Footer)]]
- [[_COMMUNITY_Hero & Project Architecture|Hero & Project Architecture]]
- [[_COMMUNITY_Navigation & Mobile Drawer|Navigation & Mobile Drawer]]
- [[_COMMUNITY_System Monitor Design System|System Monitor Design System]]
- [[_COMMUNITY_Skill Proficiency Logic|Skill Proficiency Logic]]
- [[_COMMUNITY_Contact Form Handling|Contact Form Handling]]
- [[_COMMUNITY_DOM Manipulation Utilities|DOM Manipulation Utilities]]
- [[_COMMUNITY_Build Configuration|Build Configuration]]
- [[_COMMUNITY_Documentation|Documentation]]
- [[_COMMUNITY_Resume Artifacts|Resume Artifacts]]
- [[_COMMUNITY_Community 12|Community 12]]
- [[_COMMUNITY_Community 13|Community 13]]
- [[_COMMUNITY_Community 14|Community 14]]
- [[_COMMUNITY_Community 15|Community 15]]
- [[_COMMUNITY_Community 16|Community 16]]
- [[_COMMUNITY_Community 18|Community 18]]
- [[_COMMUNITY_Community 19|Community 19]]
- [[_COMMUNITY_Community 20|Community 20]]

## God Nodes (most connected - your core abstractions)
1. `../components/Telemetry.astro` - 16 edges
2. `../layouts/Layout.astro` - 7 edges
3. `Home Page` - 7 edges
4. `Design System Specification` - 6 edges
5. `../components/Contact.astro` - 5 edges
6. `projects` - 5 edges
7. `Main Layout` - 5 edges
8. `../components/Skills.astro` - 4 edges
9. `Telemetry & GitHub Activity` - 4 edges
10. `../components/Hero.astro` - 3 edges

## Surprising Connections (you probably didn't know these)
- `The System Monitor` --rationale_for--> `Main Layout`  [INFERRED]
  DESIGN.md → src/layouts/Layout.astro
- `Matrix Selector Test` --semantically_similar_to--> `Telemetry & GitHub Activity`  [INFERRED] [semantically similar]
  scratch.js → src/components/Telemetry.astro
- `Telemetry Component` --implements--> `Show, Don't Tell Principle`  [INFERRED]
  src/components/Telemetry.astro → PRODUCT.md
- `Hero Section` --references--> `Resume PDF`  [EXTRACTED]
  src/components/Hero.astro → public/LEGASPI_RESUME.pdf
- `Contact Section` --references--> `Resume PDF`  [EXTRACTED]
  src/components/Contact.astro → public/LEGASPI_RESUME.pdf

## Hyperedges (group relationships)
- **Frontend Component Architecture** — layouts_layout, components_navbar, components_footer, components_hero, components_about, components_skills, components_projects, components_telemetry, components_contact [EXTRACTED 1.00]
- **System Monitor Design Language** — concept_the_system_monitor, concept_terminal_first, concept_high_craft, concept_the_machine_aesthetic, concept_tonal_layering [EXTRACTED 1.00]

## Communities (21 total, 11 thin omitted)

### Community 0 - "GitHub Telemetry & Contributions"
Cohesion: 0.22
Nodes (16): allContributions, colorToIntensity, currentYear, curWeek, days, el, firstDay, firstValidDay (+8 more)

### Community 1 - "Portfolio Layout & Sections"
Cohesion: 0.23
Nodes (14): About Section, Contact Section, Footer Component, Hero Section, Navbar Component, Skills Section, Telemetry & GitHub Activity, GitHub Integration (+6 more)

### Community 2 - "Live System Daemon (Footer)"
Cohesion: 0.18
Nodes (11): cpu, cpuStates, mem, memStates, ../styles/global.css, href, id, cursor (+3 more)

### Community 3 - "Hero & Project Architecture"
Cohesion: 0.22
Nodes (8): target, typingInterval, ./ProjectCard.astro, Project Card, projects, ../components/About.astro, ../components/Hero.astro, ../components/Projects.astro

### Community 4 - "Navigation & Mobile Drawer"
Cohesion: 0.25
Nodes (5): backdrop, closeBtn, drawer, drawerLinks, lines

### Community 5 - "System Monitor Design System"
Cohesion: 0.29
Nodes (7): High-Craft Design, Terminal-First Aesthetic, The Machine Aesthetic, The System Monitor, Tonal Layering, Design System Specification, Product Manifesto

### Community 6 - "Skill Proficiency Logic"
Cohesion: 0.38
Nodes (6): backendSkills, bars, getProficiencyBar(), infraSkills, observer, ../components/Skills.astro

### Community 7 - "Contact Form Handling"
Cohesion: 0.47
Nodes (5): form, formData, status, submitBtn, ../components/Contact.astro

### Community 8 - "DOM Manipulation Utilities"
Cohesion: 0.5
Nodes (3): dom, els, { JSDOM }

## Knowledge Gaps
- **39 isolated node(s):** `isBuild`, `{ JSDOM }`, `dom`, `els`, `../components/About.astro` (+34 more)
  These have ≤1 connection - possible missing edges or undocumented components.
- **11 thin communities (<3 nodes) omitted from report** — run `graphify query` to explore isolated nodes.

## Suggested Questions
_Questions this graph is uniquely positioned to answer:_

- **Why does `projects` connect `Hero & Project Architecture` to `Portfolio Layout & Sections`?**
  _High betweenness centrality (0.270) - this node is a cross-community bridge._
- **Why does `../layouts/Layout.astro` connect `Live System Daemon (Footer)` to `Hero & Project Architecture`?**
  _High betweenness centrality (0.261) - this node is a cross-community bridge._
- **Are the 8 inferred relationships involving `Terminal Aesthetic` (e.g. with `projects` and `Hero Section`) actually correct?**
  _`Terminal Aesthetic` has 8 INFERRED edges - model-reasoned connections that need verification._
- **What connects `isBuild`, `{ JSDOM }`, `dom` to the rest of the system?**
  _39 weakly-connected nodes found - possible documentation gaps or missing edges._