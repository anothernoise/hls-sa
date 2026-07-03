# Capstone project

> _Last reviewed: 2026-06-28 — see the [freshness policy](../appendix/maintenance.md)._

## Learning objectives

After this chapter you will be able to:

- Integrate everything in this bootcamp into one defensible architecture.
- Produce the full SA deliverable for a realistic, multi-jurisdiction brief.
- Defend your design against a rubric covering correctness, compliance, cost, and clarity.

## The brief

> **You are the Solution Architect** for a growing digital-health company. It runs a
> patient-facing app and a clinician portal, integrates with hospital EHRs, and wants to
> use its data for AI features and real-world-evidence partnerships. It operates in the
> **United States and Canada** and is expanding into the **EU**. Design the end-to-end
> platform.

The brief deliberately spans the whole bootcamp: clinical data + interoperability, multi-jurisdiction compliance, a cloud/hybrid platform, a data/RWD layer, an AI feature, and the SA craft to tie it together and defend it.

## What to deliver

Produce the SA deliverable set (the structure from [Part 9](../09-reference-architectures/00-overview.md)):

1. **Requirements summary** — problem, scope, stakeholders, FRs, and measurable [NFRs](../01-foundations/00-architecture-thinking.md) (use the [discovery](./00-discovery-requirements.md) template).
2. **Context & container diagrams** — [C4](../01-foundations/02-c4-and-adrs.md) L1 and L2.
3. **Key ADRs** — at least three significant, hard-to-reverse decisions with trade-offs.
4. **Compliance mapping** — controls mapped to **HIPAA, PIPEDA/PHIPA, and GDPR/EHDS** with **data-residency** per jurisdiction (see [regional compliance](../03-compliance/05-regional-compliance.md)).
5. **Cost model** — a back-of-envelope [TCO](../01-foundations/03-tradeoffs-tco.md) for build and run.
6. **Security review pack** — threat model + control checklist ([security review](./02-security-review.md)).
7. **Stakeholder brief** — one-paragraph framings for a clinician, a CISO, and a CFO ([stakeholders](./01-stakeholders.md)).

## Design questions you must answer

- **Interoperability:** how do you ingest from EHRs (HL7v2/FHIR) and expose patient/clinician access ([SMART](../02-interoperability/05-smart-on-fhir.md))?
- **Jurisdiction & residency:** where does each population's data live, and how do you prevent hidden cross-border hops (logs, backups, model APIs)?
- **Platform:** which cloud(s), and where does on-prem/hybrid fit ([capability map](../04-cloud-platforms/00-overview-capability-map.md), [on-prem & hybrid](../04-cloud-platforms/06-on-prem-hybrid.md))?
- **Data & RWE:** how do you model the data ([OMOP](../05-data-platforms/01-omop-on-cloud.md)) and enable a partnership without moving PHI (tokenization / clean rooms)?
- **AI feature:** pick one (clinical [RAG](../06-ai-ml/02-rag-clinical.md), an [agent](../06-ai-ml/03-agentic-ai.md), or imaging/NLP) and keep PHI in-boundary; if it informs care, address [SaMD](../06-ai-ml/05-fda-samd.md).
- **The SA call:** name your dominant quality attribute and the biggest trade-off you made, and defend it.

## Rubric

| Dimension | What "good" looks like |
| --- | --- |
| **Correctness** | The design actually solves the brief; data flows make sense end to end |
| **Compliance** | All three jurisdictions addressed; residency handled; controls mapped, not hand-waved |
| **Trade-offs** | Decisions are explicit, with alternatives considered (real ADRs) |
| **Cost** | A credible TCO with the main HLS cost drivers identified |
| **Communication** | A clinician, CISO, and CFO could each understand their part |

You "graduate" by passing this review (see [Bootcamp format](../00-orientation/03-bootcamp-format.md)). There is no single right answer — there is a *defensible* one, and the defense is the point.

> **Draft your own submission before reading the [capstone exemplar](./04-capstone-exemplar.md).** It's a complete worked example against this exact brief and rubric — useful for calibration, not for copying.

## Check yourself

1. What is your dominant quality attribute for this brief, and what did you trade for it?
2. For each of the US, Canada, and EU, where does that population's data reside and why?
3. Which one AI feature did you choose, and how does it keep PHI in-boundary?

## Further reading

- [Reference architectures](../09-reference-architectures/00-overview.md) — worked exemplars
- [Discovery & requirements](./00-discovery-requirements.md) · [Security review](./02-security-review.md)
