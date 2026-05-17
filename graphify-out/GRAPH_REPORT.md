# Graph Report - .  (2026-05-17)

## Corpus Check
- 33 files · ~12,270 words
- Verdict: corpus is large enough that graph structure adds value.

## Summary
- 221 nodes · 240 edges · 31 communities (15 shown, 16 thin omitted)
- Extraction: 92% EXTRACTED · 8% INFERRED · 0% AMBIGUOUS · INFERRED: 20 edges (avg confidence: 0.91)
- Token cost: 0 input · 0 output

## Community Hubs (Navigation)
- [[_COMMUNITY_Firebase Integration & Core Components|Firebase Integration & Core Components]]
- [[_COMMUNITY_Project Design & Narrative|Project Design & Narrative]]
- [[_COMMUNITY_Admin Dashboard & Resume|Admin Dashboard & Resume]]
- [[_COMMUNITY_Package Configuration|Package Configuration]]
- [[_COMMUNITY_Layout & Navigation|Layout & Navigation]]
- [[_COMMUNITY_GitHub Telemetry|GitHub Telemetry]]
- [[_COMMUNITY_Color Palette|Color Palette]]
- [[_COMMUNITY_Admin Authentication & Skill Management|Admin Authentication & Skill Management]]
- [[_COMMUNITY_Project Management Component|Project Management Component]]
- [[_COMMUNITY_System Deployment Control|System Deployment Control]]
- [[_COMMUNITY_Skills Component|Skills Component]]
- [[_COMMUNITY_JSDOM Scratchpad|JSDOM Scratchpad]]
- [[_COMMUNITY_TypeScript Configuration|TypeScript Configuration]]
- [[_COMMUNITY_Astro Configuration|Astro Configuration]]
- [[_COMMUNITY_Design System & Layout|Design System & Layout]]
- [[_COMMUNITY_Astro Dependency|Astro Dependency]]
- [[_COMMUNITY_Firebase Dependency|Firebase Dependency]]
- [[_COMMUNITY_TailwindCSS Dependency|TailwindCSS Dependency]]
- [[_COMMUNITY_Community 18|Community 18]]
- [[_COMMUNITY_Community 19|Community 19]]
- [[_COMMUNITY_Community 20|Community 20]]
- [[_COMMUNITY_Community 21|Community 21]]
- [[_COMMUNITY_Community 22|Community 22]]
- [[_COMMUNITY_Community 23|Community 23]]
- [[_COMMUNITY_Community 24|Community 24]]
- [[_COMMUNITY_Community 25|Community 25]]
- [[_COMMUNITY_Community 26|Community 26]]
- [[_COMMUNITY_Community 27|Community 27]]
- [[_COMMUNITY_Community 28|Community 28]]
- [[_COMMUNITY_Community 29|Community 29]]
- [[_COMMUNITY_Community 30|Community 30]]

## God Nodes (most connected - your core abstractions)
1. `../components/Telemetry.astro` - 16 edges
2. `../../components/admin/ProjectManager.astro` - 15 edges
3. `../components/Hero.astro` - 10 edges
4. `../components/Skills.astro` - 10 edges
5. `Firebase Client Initialization` - 10 edges
6. `../components/Projects.astro` - 9 edges
7. `../../components/admin/SkillManager.astro` - 8 edges
8. `../../components/admin/SystemDeployControl.astro` - 8 edges
9. `../../layouts/Layout.astro` - 8 edges
10. `narrative` - 7 edges

## Surprising Connections (you probably didn't know these)
- `The System Monitor` --rationale_for--> `Main Layout`  [INFERRED]
  DESIGN.md → src/layouts/Layout.astro
- `Show, Don't Tell Principle` --rationale_for--> `Telemetry Component`  [INFERRED]
  PRODUCT.md → src/components/Telemetry.astro
- `Product Manifesto` --references--> `Design System Specification`  [INFERRED]
  PRODUCT.md → DESIGN.md
- `Firebase Client Initialization` --references--> `NPM Dependencies`  [INFERRED]
  src/lib/firebase/client.ts → package.json
- `Contact Component` --references--> `Design System: The System Monitor`  [INFERRED]
  src/components/Contact.astro → DESIGN.json

## Hyperedges (group relationships)
- **Portfolio Section Structure** — components_hero_hero, components_about_about, components_skills_skills, components_projects_projects, components_telemetry_telemetry, components_contact_contact [EXTRACTED 1.00]
- **Admin Dashboard** — admin_loginterminal_astro, admin_projectmanager_astro, admin_skillmanager_astro, admin_systemconfig_astro, admin_systemdeploycontrol_astro, pages_admin_index_astro [INFERRED 0.95]
- **System Monitor Design Language** — concept_the_system_monitor, concept_terminal_first, concept_high_craft, concept_the_machine_aesthetic, concept_tonal_layering [EXTRACTED 1.00]
- **Admin Dashboard Components** — components_admin_loginterminal, components_admin_projectmanager, components_admin_skillmanager, components_admin_systemconfig, components_admin_systemdeploycontrol, pages_admin_index [INFERRED 0.95]

## Communities (31 total, 16 thin omitted)

### Community 0 - "Firebase Integration & Core Components"
Cohesion: 0.08
Nodes (24): displayName, purpose, neutral-bg, primary, secondary, displayName, purpose, extensions (+16 more)

### Community 1 - "Project Design & Narrative"
Cohesion: 0.13
Nodes (19): firebase/auth, heroTech, POSITIONS, primarySkills, q, projects, projectsCol, projectsQuery (+11 more)

### Community 2 - "Admin Dashboard & Resume"
Cohesion: 0.15
Nodes (8): Firebase Auth, Firestore DB, getSystemConfig, Firestore Collection: projects, Firestore Collection: skills, Firestore Document: system/config, GitHub Actions Workflow, admin/index.astro

### Community 3 - "Package Configuration"
Cohesion: 0.18
Nodes (18): LoginTerminal Component, ProjectManager Component, SkillManager Component, SystemConfig Component, SystemDeployControl Component, Contact Component, Hero Component, Navbar Component (+10 more)

### Community 4 - "Layout & Navigation"
Cohesion: 0.12
Nodes (14): cpu, cpuStates, mem, memStates, closeDrawer, mobileDrawer, mobileLinks, ../styles/global.css (+6 more)

### Community 5 - "GitHub Telemetry"
Cohesion: 0.12
Nodes (16): dependencies, astro, firebase, firebase-tools, tailwindcss, @tailwindcss/vite, engines, node (+8 more)

### Community 6 - "Color Palette"
Cohesion: 0.12
Nodes (16): allContributions, colorToIntensity, currentYear, curWeek, days, el, firstDay, firstValidDay (+8 more)

### Community 7 - "Admin Authentication & Skill Management"
Cohesion: 0.18
Nodes (11): errorEl, githubBtn, provider, statusEl, data, initialSkills, skillsCol, ../../lib/firebase/client (+3 more)

### Community 8 - "Project Management Component"
Cohesion: 0.18
Nodes (12): cardTemplate, currentProjects, data, deleteProject(), emptyEl, fetchProjects(), loadingEl, modal (+4 more)

### Community 9 - "System Deployment Control"
Cohesion: 0.17
Nodes (11): components, generatedAt, narrative, donts, dos, keyCharacteristics, northStar, overview (+3 more)

### Community 10 - "Skills Component"
Cohesion: 0.25
Nodes (8): deployBtn, errorEl, errorText, saveBtn, statusEl, statusText, storedPat, ../../components/admin/SystemDeployControl.astro

### Community 11 - "JSDOM Scratchpad"
Cohesion: 0.25
Nodes (7): allSkills, backendSkills, frontendSkills, infraSkills, skillsCol, skillsQuery, ../components/Skills.astro

### Community 12 - "TypeScript Configuration"
Cohesion: 0.33
Nodes (6): High-Craft Design, Terminal-First Aesthetic, The Machine Aesthetic, Tonal Layering, Design System Specification, Product Manifesto

### Community 13 - "Astro Configuration"
Cohesion: 0.5
Nodes (3): dom, els, { JSDOM }

### Community 14 - "Design System & Layout"
Cohesion: 0.5
Nodes (3): exclude, extends, include

## Knowledge Gaps
- **136 isolated node(s):** `isBuild`, `extends`, `include`, `exclude`, `{ JSDOM }` (+131 more)
  These have ≤1 connection - possible missing edges or undocumented components.
- **16 thin communities (<3 nodes) omitted from report** — run `graphify query` to explore isolated nodes.

## Suggested Questions
_Questions this graph is uniquely positioned to answer:_

- **Why does `getSystemConfig()` connect `Package Configuration` to `Project Design & Narrative`?**
  _High betweenness centrality (0.094) - this node is a cross-community bridge._
- **Why does `../../layouts/Layout.astro` connect `Layout & Navigation` to `Project Design & Narrative`, `Admin Authentication & Skill Management`?**
  _High betweenness centrality (0.075) - this node is a cross-community bridge._
- **Why does `../components/Telemetry.astro` connect `Color Palette` to `Project Design & Narrative`?**
  _High betweenness centrality (0.070) - this node is a cross-community bridge._
- **Are the 2 inferred relationships involving `Firebase Client Initialization` (e.g. with `getSystemConfig()` and `NPM Dependencies`) actually correct?**
  _`Firebase Client Initialization` has 2 INFERRED edges - model-reasoned connections that need verification._
- **What connects `isBuild`, `extends`, `include` to the rest of the system?**
  _136 weakly-connected nodes found - possible documentation gaps or missing edges._
- **Should `Firebase Integration & Core Components` be split into smaller, more focused modules?**
  _Cohesion score 0.08 - nodes in this community are weakly interconnected._
- **Should `Project Design & Narrative` be split into smaller, more focused modules?**
  _Cohesion score 0.13 - nodes in this community are weakly interconnected._