# Graph Report - .  (2026-05-15)

## Corpus Check
- 12 files · ~9,531 words
- Verdict: corpus is large enough that graph structure adds value.

## Summary
- 145 nodes · 183 edges · 22 communities (11 shown, 11 thin omitted)
- Extraction: 93% EXTRACTED · 7% INFERRED · 0% AMBIGUOUS · INFERRED: 13 edges (avg confidence: 0.87)
- Token cost: 0 input · 0 output

## Community Hubs (Navigation)
- [[_COMMUNITY_Portfolio Layout & Sections|Portfolio Layout & Sections]]
- [[_COMMUNITY_GitHub Telemetry & Contributions|GitHub Telemetry & Contributions]]
- [[_COMMUNITY_Firebase Auth & Deploy Controls|Firebase Auth & Deploy Controls]]
- [[_COMMUNITY_Firebase Firestore Data Management|Firebase Firestore Data Management]]
- [[_COMMUNITY_Live System Daemon (Footer)|Live System Daemon (Footer)]]
- [[_COMMUNITY_Project Record CRUD Logic|Project Record CRUD Logic]]
- [[_COMMUNITY_Navigation & Mobile Drawer|Navigation & Mobile Drawer]]
- [[_COMMUNITY_Contact Form Handling|Contact Form Handling]]
- [[_COMMUNITY_Skill Proficiency Logic|Skill Proficiency Logic]]
- [[_COMMUNITY_DOM Manipulation Utilities|DOM Manipulation Utilities]]
- [[_COMMUNITY_System Monitor Design System|System Monitor Design System]]
- [[_COMMUNITY_Build Configuration|Build Configuration]]
- [[_COMMUNITY_Community 12|Community 12]]
- [[_COMMUNITY_Community 13|Community 13]]
- [[_COMMUNITY_Community 14|Community 14]]
- [[_COMMUNITY_Community 15|Community 15]]
- [[_COMMUNITY_Community 16|Community 16]]
- [[_COMMUNITY_Community 17|Community 17]]
- [[_COMMUNITY_Community 19|Community 19]]
- [[_COMMUNITY_Community 20|Community 20]]
- [[_COMMUNITY_Community 21|Community 21]]

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

## Communities (22 total, 11 thin omitted)

### Community 0 - "Portfolio Layout & Sections"
Cohesion: 0.12
Nodes (23): About Section, Contact Section, Footer Component, Hero Section, Navbar Component, Project Card, projects, Skills Section (+15 more)

### Community 1 - "GitHub Telemetry & Contributions"
Cohesion: 0.22
Nodes (16): allContributions, colorToIntensity, currentYear, curWeek, days, el, firstDay, firstValidDay (+8 more)

### Community 2 - "Firebase Auth & Deploy Controls"
Cohesion: 0.17
Nodes (11): errorEl, githubBtn, provider, statusEl, deployBtn, errorText, saveBtn, statusText (+3 more)

### Community 3 - "Firebase Firestore Data Management"
Cohesion: 0.19
Nodes (10): firebase/auth, ./ProjectCard.astro, projectsCol, projectsQuery, staticProjects, auth, db, firebaseConfig (+2 more)

### Community 4 - "Live System Daemon (Footer)"
Cohesion: 0.19
Nodes (11): cpu, cpuStates, mem, memStates, ../styles/global.css, href, id, cursor (+3 more)

### Community 5 - "Project Record CRUD Logic"
Cohesion: 0.18
Nodes (11): cardTemplate, currentProjects, data, deleteProject(), emptyEl, fetchProjects(), loadingEl, modal (+3 more)

### Community 6 - "Navigation & Mobile Drawer"
Cohesion: 0.17
Nodes (7): backdrop, closeBtn, drawer, drawerLinks, lines, mobileDrawer, mobileLinks

### Community 7 - "Contact Form Handling"
Cohesion: 0.24
Nodes (9): form, formData, status, submitBtn, target, typingInterval, ../lib/firebase/config, ../components/Contact.astro (+1 more)

### Community 8 - "Skill Proficiency Logic"
Cohesion: 0.38
Nodes (6): backendSkills, bars, getProficiencyBar(), infraSkills, observer, ../components/Skills.astro

### Community 9 - "DOM Manipulation Utilities"
Cohesion: 0.5
Nodes (3): dom, els, { JSDOM }

## Knowledge Gaps
- **60 isolated node(s):** `isBuild`, `{ JSDOM }`, `dom`, `els`, `../components/About.astro` (+55 more)
  These have ≤1 connection - possible missing edges or undocumented components.
- **11 thin communities (<3 nodes) omitted from report** — run `graphify query` to explore isolated nodes.

## Suggested Questions
_Questions this graph is uniquely positioned to answer:_

- **Why does `projects` connect `Portfolio Layout & Sections` to `Firebase Firestore Data Management`?**
  _High betweenness centrality (0.223) - this node is a cross-community bridge._
- **Why does `../components/Projects.astro` connect `Firebase Firestore Data Management` to `Portfolio Layout & Sections`, `Firebase Auth & Deploy Controls`?**
  _High betweenness centrality (0.181) - this node is a cross-community bridge._
- **Why does `../components/Telemetry.astro` connect `GitHub Telemetry & Contributions` to `Firebase Auth & Deploy Controls`?**
  _High betweenness centrality (0.174) - this node is a cross-community bridge._
- **Are the 8 inferred relationships involving `Terminal Aesthetic` (e.g. with `projects` and `Hero Section`) actually correct?**
  _`Terminal Aesthetic` has 8 INFERRED edges - model-reasoned connections that need verification._
- **What connects `isBuild`, `{ JSDOM }`, `dom` to the rest of the system?**
  _60 weakly-connected nodes found - possible documentation gaps or missing edges._
- **Should `Portfolio Layout & Sections` be split into smaller, more focused modules?**
  _Cohesion score 0.12 - nodes in this community are weakly interconnected._