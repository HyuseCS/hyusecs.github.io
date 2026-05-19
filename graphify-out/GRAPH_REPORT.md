# Graph Report - /home/hyuse/Desktop/hyusecs.github.io  (2026-05-19)

## Corpus Check
- 19 files · ~15,461 words
- Verdict: corpus is large enough that graph structure adds value.

## Summary
- 103 nodes · 111 edges · 12 communities (11 shown, 1 thin omitted)
- Extraction: 100% EXTRACTED · 0% INFERRED · 0% AMBIGUOUS
- Token cost: 0 input · 0 output

## Community Hubs (Navigation)
- [[_COMMUNITY_Astro Content Types|Astro Content Types]]
- [[_COMMUNITY_Telemetry Components|Telemetry Components]]
- [[_COMMUNITY_ProjectExperience Mgmt|Project/Experience Mgmt]]
- [[_COMMUNITY_About Section Logic|About Section Logic]]
- [[_COMMUNITY_Admin Core & Skills|Admin Core & Skills]]
- [[_COMMUNITY_Skills Section Logic|Skills Section Logic]]
- [[_COMMUNITY_Education Log Mgmt|Education Log Mgmt]]
- [[_COMMUNITY_Astro Settings Variables|Astro Settings Variables]]

## God Nodes (most connected - your core abstractions)
1. `../../components/admin/SkillManager.astro` - 8 edges
2. `../../components/admin/ContentManager.astro` - 5 edges
3. `render()` - 3 edges
4. `render()` - 3 edges
5. `load()` - 2 edges
6. `bindEvents()` - 2 edges
7. `load()` - 2 edges
8. `bindEvents()` - 2 edges
9. `_variables` - 2 edges
10. `now` - 1 edges

## Surprising Connections (you probably didn't know these)
- None detected - all connections are within the same source files.

## Communities (12 total, 1 thin omitted)

### Community 0 - "Astro Content Types"
Cohesion: 0.08
Nodes (23): AllValuesOf, CollectionEntry, CollectionKey, ContentConfig, DataEntryMap, ExtractCollectionFilterType, ExtractEntryFilterType, ExtractErrorType (+15 more)

### Community 1 - "Telemetry Components"
Cohesion: 0.12
Nodes (16): allContributions, colorToIntensity, countMatch, currentYear, curWeek, days, el, firstDay (+8 more)

### Community 2 - "Project/Experience Mgmt"
Cohesion: 0.18
Nodes (12): projects, projectsCol, projectsQuery, bindEvents(), expList, load(), render(), clone (+4 more)

### Community 3 - "About Section Logic"
Cohesion: 0.17
Nodes (10): allContent, configRef, contentCol, currentYear, currentYearDisplay, data, educations, experiences (+2 more)

### Community 4 - "Admin Core & Skills"
Cohesion: 0.17
Nodes (9): data, initialSkills, skillsCol, firebase/auth, ../../components/admin/LoginTerminal.astro, ../../components/admin/SystemConfig.astro, ../../components/admin/SystemDeployControl.astro, ../../layouts/Layout.astro (+1 more)

### Community 5 - "Skills Section Logic"
Cohesion: 0.20
Nodes (7): allSkills, categoryIcons, frameworksSkills, languagesSkills, skillsCol, skillsQuery, toolsSkills

### Community 6 - "Education Log Mgmt"
Cohesion: 0.60
Nodes (4): bindEvents(), eduList, load(), render()

## Knowledge Gaps
- **71 isolated node(s):** `now`, `currentYear`, `currentYearDisplay`, `ongoingProject`, `experiences` (+66 more)
  These have ≤1 connection - possible missing edges or undocumented components.
- **1 thin communities (<3 nodes) omitted from report** — run `graphify query` to explore isolated nodes.

## Suggested Questions
_Questions this graph is uniquely positioned to answer:_

- **Why does `../../components/admin/SkillManager.astro` connect `Admin Core & Skills` to `Project/Experience Mgmt`?**
  _High betweenness centrality (0.051) - this node is a cross-community bridge._
- **Why does `../../components/admin/ContentManager.astro` connect `Project/Experience Mgmt` to `Admin Core & Skills`, `Education Log Mgmt`?**
  _High betweenness centrality (0.011) - this node is a cross-community bridge._
- **What connects `now`, `currentYear`, `currentYearDisplay` to the rest of the system?**
  _71 weakly-connected nodes found - possible documentation gaps or missing edges._
- **Should `Astro Content Types` be split into smaller, more focused modules?**
  _Cohesion score 0.08333333333333333 - nodes in this community are weakly interconnected._
- **Should `Telemetry Components` be split into smaller, more focused modules?**
  _Cohesion score 0.11764705882352941 - nodes in this community are weakly interconnected._