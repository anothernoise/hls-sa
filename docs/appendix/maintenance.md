# Maintenance & freshness

> _Last reviewed: 2026-06-28._

Health & life science is a fast-moving target: regulations phase in, cloud services rename, and standards version. This page is the bootcamp's **freshness policy** — how the material is kept current and what to re-check yourself before relying on a date-sensitive claim.

## Review policy

- Every chapter carries a **`Last reviewed: <date>`** line under its title.
- The whole book is reviewed at least **quarterly**, and **on any major regulatory or standards change** (a new FDA guidance, a CMS/ONC rule, a USCDI/FHIR version, an EHDS milestone).
- Regulatory and pricing specifics are **dated on purpose** — treat them as "true as of the review date" and confirm against the primary source (each chapter links them) before betting a design on them.
- See the [CHANGELOG](../../CHANGELOG.md) for what changed and when.

## Time-sensitive watchlist

These are the moving targets most likely to age. Re-check these before citing them:

| Topic | As of 2026-06-28 | Re-check |
| --- | --- | --- |
| **CMS-0057-F** (payer FHIR + prior-auth APIs) | Prior-auth ops from 2026; API compliance generally **Jan 1, 2027** | Each year through 2027 |
| **ONC HTI-1** (Predictive DSI / FAVES transparency) | In effect for certified health IT since **Jan 1, 2025**; **HTI-2** proposed | When HTI-2 finalizes |
| **USCDI** | v5 (2024), v6 (2025) — advances roughly yearly | Annually |
| **EHDS** | In force **Mar 2025**; implementing acts ~2027; primary-use categories ~**2029** | 2027, 2029 milestones |
| **FHIR version** | **R4** is the deployed/mandated standard; **R6** targeting ~2027 | When R6 normative |
| **FDA AI/ML** | PCCP final guidance (Dec 2024); CSA final (Sep 2025) | New FDA AI guidance |
| **TEFCA** | In production via QHINs; FHIR exchange rolling out | Periodically |
| **Cloud services** | Names/limits change (e.g. Azure AD→Entra, S3 Tables GA) | Each review |

## Reporting stale content

Spotted something out of date? The materials are proprietary (see the [LICENSE](../../LICENSE)) but corrections are very welcome — see [Contributing](../../CONTRIBUTING.md). Cite a primary source so the fix can be verified quickly.

## Last-reviewed by part

All parts were last reviewed **2026-06-28**. The most volatile parts (and the ones to re-check first) are:

- **Part 2 — Interoperability** (FHIR versions, US/CA profiles, CMS-0057, C-CDA/X12)
- **Part 3 — Compliance** (HIPAA/HITRUST/GxP, regional US/Canada/EU, EHDS, HTI-1)
- **Part 4 — Cloud platforms** (service names and capabilities shift frequently)
- **Part 6 — AI/ML** (FDA SaMD/PCCP/GMLP, ONC HTI-1)
