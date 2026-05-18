# Graph Report - .  (2026-05-17)

## Corpus Check
- 4 files · ~12,768 words
- Verdict: corpus is large enough that graph structure adds value.

## Summary
- 218 nodes · 281 edges · 27 communities (15 shown, 12 thin omitted)
- Extraction: 91% EXTRACTED · 9% INFERRED · 0% AMBIGUOUS · INFERRED: 24 edges (avg confidence: 0.91)
- Token cost: 0 input · 0 output

## Community Hubs (Navigation)
- [[_COMMUNITY_Skill Module Implementation|Skill Module Implementation]]
- [[_COMMUNITY_System Core & Admin Framework|System Core & Admin Framework]]
- [[_COMMUNITY_Firestore Data Integration|Firestore Data Integration]]
- [[_COMMUNITY_Telemetry & Dynamic Time Logic|Telemetry & Dynamic Time Logic]]
- [[_COMMUNITY_Package Configuration|Package Configuration]]
- [[_COMMUNITY_Visual Design Tokens|Visual Design Tokens]]
- [[_COMMUNITY_Application Layout & Identity|Application Layout & Identity]]
- [[_COMMUNITY_Design Narrative & Guidelines|Design Narrative & Guidelines]]
- [[_COMMUNITY_Navbar Navigation Logic|Navbar Navigation Logic]]
- [[_COMMUNITY_Backend & Admin Infrastructure|Backend & Admin Infrastructure]]
- [[_COMMUNITY_Admin Project Management|Admin Project Management]]
- [[_COMMUNITY_Admin Dashboard UI Controls|Admin Dashboard UI Controls]]
- [[_COMMUNITY_Global Styles & Page Footer|Global Styles & Page Footer]]
- [[_COMMUNITY_JSDOM Scratchpad|JSDOM Scratchpad]]
- [[_COMMUNITY_TypeScript Config|TypeScript Config]]
- [[_COMMUNITY_About & Education Logic|About & Education Logic]]
- [[_COMMUNITY_Principles & Telemetry Rationale|Principles & Telemetry Rationale]]
- [[_COMMUNITY_Design-Layout Mapping|Design-Layout Mapping]]
- [[_COMMUNITY_Build Configuration|Build Configuration]]
- [[_COMMUNITY_Astro System Configuration|Astro System Configuration]]
- [[_COMMUNITY_Matrix Selector Tests|Matrix Selector Tests]]
- [[_COMMUNITY_Footer Interface|Footer Interface]]
- [[_COMMUNITY_Project Card UI|Project Card UI]]
- [[_COMMUNITY_Project Documentation|Project Documentation]]
- [[_COMMUNITY_Favicon Asset|Favicon Asset]]
- [[_COMMUNITY_Astro Branding|Astro Branding]]
- [[_COMMUNITY_Background Illustration|Background Illustration]]

## God Nodes (most connected - your core abstractions)
1. `../components/Telemetry.astro` - 16 edges
2. `../../components/admin/ProjectManager.astro` - 15 edges
3. `../components/Hero.astro` - 10 edges
4. `../components/Skills.astro` - 10 edges
5. `getSystemConfig()` - 10 edges
6. `Firebase Client Initialization` - 10 edges
7. `../components/Projects.astro` - 9 edges
8. `../../components/admin/SkillManager.astro` - 8 edges
9. `../../components/admin/SystemDeployControl.astro` - 8 edges
10. `narrative` - 7 edges

## Surprising Connections (you probably didn't know these)
- `The System Monitor` --rationale_for--> `Main Layout`  [INFERRED]
  DESIGN.md → src/layouts/Layout.astro
- `getSystemConfig()` --shares_data_with--> `Firestore Document: system/config`  [INFERRED]
  src/lib/firebase/config.ts → /home/hyuse/Desktop/hyusecs.github.io/src/components/admin/SystemConfig.astro
- `Show, Don't Tell Principle` --rationale_for--> `Telemetry Component`  [INFERRED]
  PRODUCT.md → src/components/Telemetry.astro
- `Product Manifesto` --references--> `Design System Specification`  [INFERRED]
  PRODUCT.md → DESIGN.md
- `Firebase Client Initialization` --references--> `NPM Dependencies`  [INFERRED]
  src/lib/firebase/client.ts → package.json

## Hyperedges (group relationships)
- **Portfolio Section Structure** — components_hero_hero, components_about_about, components_skills_skills, components_projects_projects, components_telemetry_telemetry, components_contact_contact [EXTRACTED 1.00]
- **Admin Dashboard** — admin_loginterminal_astro, admin_projectmanager_astro, admin_skillmanager_astro, admin_systemconfig_astro, admin_systemdeploycontrol_astro, pages_admin_index_astro [INFERRED 0.95]
- **System Monitor Design Language** — concept_the_system_monitor, concept_terminal_first, concept_high_craft, concept_the_machine_aesthetic, concept_tonal_layering [EXTRACTED 1.00]
- **Skill Management and Display System** — components_skills, admin_skillmanager, concept_skill_lifecycle [INFERRED 0.95]

## Communities (27 total, 12 thin omitted)

### Community 0 - "Skill Module Implementation"
Cohesion: 0.12
Nodes (18): data, deleteSkill(), initialSkills, openModal(), allSkills, backendSkills, categoryIcons, frameworksSkills (+10 more)

### Community 1 - "System Core & Admin Framework"
Cohesion: 0.14
Nodes (19): Skill Manager Admin Component, Skill Fetching Logic, Initial Skill Seeding, LoginTerminal Component, ProjectManager Component, SkillManager Component, SystemConfig Component, SystemDeployControl Component (+11 more)

### Community 2 - "Firestore Data Integration"
Cohesion: 0.15
Nodes (18): heroTech, POSITIONS, primarySkills, q, projects, projectsCol, projectsQuery, auth (+10 more)

### Community 3 - "Telemetry & Dynamic Time Logic"
Cohesion: 0.11
Nodes (17): currentYear, currentYearDisplay, now, allContributions, colorToIntensity, curWeek, days, el (+9 more)

### Community 4 - "Package Configuration"
Cohesion: 0.13
Nodes (15): dependencies, firebase-tools, @tailwindcss/vite, engines, node, name, scripts, build (+7 more)

### Community 5 - "Visual Design Tokens"
Cohesion: 0.25
Nodes (14): displayName, purpose, neutral-bg, primary, secondary, extensions, colorMeta, motion (+6 more)

### Community 6 - "Application Layout & Identity"
Cohesion: 0.17
Nodes (12): Navbar Component, Dynamic Version Logic, High-Craft Design, Terminal-First Aesthetic, The Machine Aesthetic, The System Monitor, Tonal Layering, Design System Specification (+4 more)

### Community 7 - "Design Narrative & Guidelines"
Cohesion: 0.17
Nodes (11): components, generatedAt, narrative, donts, dos, keyCharacteristics, northStar, overview (+3 more)

### Community 8 - "Navbar Navigation Logic"
Cohesion: 0.24
Nodes (10): birthDate, closeDrawer, closeMenu(), mobileDrawer, mobileLinks, monthsOldStr, openMenu(), ../lib/firebase/config (+2 more)

### Community 9 - "Backend & Admin Infrastructure"
Cohesion: 0.2
Nodes (6): firebase/auth, Firestore DB, Firestore Collection: projects, Firestore Document: system/config, GitHub Actions Workflow, admin/index.astro

### Community 10 - "Admin Project Management"
Cohesion: 0.22
Nodes (11): cardTemplate, currentProjects, deleteProject(), emptyEl, fetchProjects(), loadingEl, modal, projectForm (+3 more)

### Community 11 - "Admin Dashboard UI Controls"
Cohesion: 0.2
Nodes (11): errorEl, githubBtn, provider, statusEl, deployBtn, errorText, saveBtn, statusText (+3 more)

### Community 12 - "Global Styles & Page Footer"
Cohesion: 0.18
Nodes (10): cpu, cpuStates, mem, memStates, ../styles/global.css, href, id, cursor (+2 more)

### Community 13 - "JSDOM Scratchpad"
Cohesion: 0.5
Nodes (3): dom, els, { JSDOM }

### Community 14 - "TypeScript Config"
Cohesion: 0.5
Nodes (3): exclude, extends, include

## Knowledge Gaps
- **112 isolated node(s):** `isBuild`, `extends`, `include`, `exclude`, `{ JSDOM }` (+107 more)
  These have ≤1 connection - possible missing edges or undocumented components.
- **12 thin communities (<3 nodes) omitted from report** — run `graphify query` to explore isolated nodes.

## Suggested Questions
_Questions this graph is uniquely positioned to answer:_

- **Why does `getSystemConfig()` connect `System Core & Admin Framework` to `Navbar Navigation Logic`, `Backend & Admin Infrastructure`, `Firestore Data Integration`, `Application Layout & Identity`?**
  _High betweenness centrality (0.138) - this node is a cross-community bridge._
- **Why does `../components/Telemetry.astro` connect `Telemetry & Dynamic Time Logic` to `Firestore Data Integration`?**
  _High betweenness centrality (0.100) - this node is a cross-community bridge._
- **Why does `../../layouts/Layout.astro` connect `Global Styles & Page Footer` to `Navbar Navigation Logic`, `Firestore Data Integration`?**
  _High betweenness centrality (0.075) - this node is a cross-community bridge._
- **What connects `isBuild`, `extends`, `include` to the rest of the system?**
  _112 weakly-connected nodes found - possible documentation gaps or missing edges._
- **Should `Skill Module Implementation` be split into smaller, more focused modules?**
  _Cohesion score 0.12 - nodes in this community are weakly interconnected._
- **Should `System Core & Admin Framework` be split into smaller, more focused modules?**
  _Cohesion score 0.14 - nodes in this community are weakly interconnected._
- **Should `Telemetry & Dynamic Time Logic` be split into smaller, more focused modules?**
  _Cohesion score 0.11 - nodes in this community are weakly interconnected._