# Changelog

All notable changes to the **Health & Life Science Solution Bootcamp**. Dates are when the
change landed; see each chapter's `Last reviewed` line for content currency. See the
[freshness policy](docs/appendix/maintenance.md) for the review cadence.

## 2026-06-28 — Freshness pass

- **Added "Last reviewed" dates** to every chapter and a **freshness policy + time-sensitive
  watchlist** ([Maintenance & freshness](docs/appendix/maintenance.md)).
- **ONC HTI-1** (Predictive DSI, FAVES, source attributes, intervention risk management) added
  to MLOps & model governance, and flagged in the US regulation landscape.
- Updated date-sensitive regulatory facts: **CMS-0057** (prior-auth ops 2026; API compliance
  ~Jan 1, 2027), **EHDS** (in force Mar 2025; implementing acts ~2027; primary-use ~2029).
- **FHIR versions** note added (R4 deployed/mandated; R5 limited; R6 targeting ~2027).
- Glossary: added HTI-1, Predictive DSI, FAVES; refreshed EHDS.

## 2026-06-24 — Completion, FHIR deep-dive, more labs

- Filled all remaining chapters (Parts 5, 6, 8, 9, 10) — book reached zero stubs.
- Added FHIR interoperability deep-dive: US vs Canada profiles & regulation, SQL-on-FHIR,
  AI with FHIR; and Document & claims standards (C-CDA, X12, CMS-0057).
- Added genomics variant-store-on-AWS chapter.
- Enriched the glossary with extended descriptions + external reference links (~100 terms).
- New starter labs: `hls-imaging-ai`, `hls-pbm-claims-aws`, `hls-variant-store-aws`.
- Fixed Mermaid rendering: multi-line label clipping (`htmlLabels:false`) and the
  `&`-multi-node "Syntax error in graph" (unescape `&amp;`).

## 2026-06-23 — Rebrand to Bootcamp

- Renamed to **Health & Life Science Solution Bootcamp** (repo slug/URL unchanged).
- Native `GLOSSARY.md` auto-linking; proprietary "ask-first" license.
- Added NVIDIA and regional-compliance (US/Canada/EU) chapters; bootcamp-format guide;
  public-starter / private-solution lab model (private `hls-bootcamp-solutions` repo).

## 2026-06-16 — Core build-out

- Wrote Parts 2–4 (interoperability, compliance, cloud platforms), the on-premises/hybrid
  chapter, and Part 7 (genomics).

## 2026-06-15 — Initial scaffold

- Honkit book engine, GitHub Pages deploy, full curriculum outline (Module 0 + Parts 1–10),
  Module 0 and Part 1 first chapters; companion spoke repos wired in.
