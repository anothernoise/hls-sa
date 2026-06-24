# Health & Life Science Solution Bootcamp

**Read the book:** https://anothernoise.github.io/hls-sa/

> A hands-on **bootcamp** for engineers and data professionals moving into a
> **Solution Architect (SA)** role in healthcare, biotech, pharma, and medtech.

This is not just a handbook to read — it is a **bootcamp** built to take you from
"can build software" to "can own a health & life science solution architecture." It
braids three strands and proves them with graded, hands-on labs:

1. **The SA craft** — turn ambiguous business problems into defensible designs,
   communicate trade-offs, and own a solution end-to-end.
2. **The health & life science (HLS) domain** — the data standards, regulations, and
   platform building blocks that make this industry different from everything else.
3. **Hands-on delivery** — every module pairs concepts with labs you build and run, so
   you finish with a portfolio of working reference architectures.

---

## Who this is for

You can already write code or build data pipelines. By the end you will:

- design systems, not just implement tickets;
- treat compliance (HIPAA, GxP, HITRUST, PIPEDA, GDPR) as a first-class requirement;
- speak fluently about clinical data (FHIR, HL7v2, DICOM, OMOP) and genomics;
- compare platforms (AWS, GCP, Azure, Databricks, Snowflake, NVIDIA, on-prem/hybrid) on merit;
- defend an architecture to a CISO, a clinician, and a CFO in the same meeting.

## Bootcamp format

- **Modules.** Module 0 (orientation) plus ten parts, each a module. Read Module 0 and
  Part 1 first; Parts 2–3 (clinical data + compliance) are foundational; the rest build on them.
- **Pace.** Self-paced or cohort-paced. A typical cohort runs ~10–12 weeks (roughly one
  part per week); self-paced learners go faster or slower. Budget ~20 min per chapter to
  read and 1–3 hours per lab.
- **Labs.** Each module links a hands-on lab (see below). Labs are where the learning sticks.
- **Assessment.** Every chapter ends with *Check yourself* questions; each part has a lab
  deliverable; the bootcamp ends with a **capstone** (Part 10) — design a multi-cloud,
  multi-jurisdiction HLS platform from a brief.
- **Completion.** You "graduate" by completing the labs and the capstone, reviewed against
  the rubric in Part 10.

## How the labs work (public starter + private solution)

Labs follow a two-repo model:

- **Starter repos (public).** Each lab has an open, public repo with the architecture
  write-up, scaffolding, synthetic data, and step-by-step instructions. You fork or clone
  these and build the solution yourself. These are the "part of the course that is open."
- **Solution repos (private).** Full reference implementations, instructor notes, graded
  rubrics, and assessment answer keys live in **private** repositories, granted to enrolled
  participants. This is the "major part that is hidden," so the learning value of building
  it yourself is preserved.

| Lab | Starter repo (public) | Used in |
| --- | --- | --- |
| FHIR interoperability | [`hls-fhir-interop`](https://github.com/anothernoise/hls-fhir-interop) | Part 2 |
| RWD lakehouse (OMOP) | [`hls-lakehouse-rwd`](https://github.com/anothernoise/hls-lakehouse-rwd) | Part 5 |
| Clinical RAG on GCP | [`RAGonGCP`](https://github.com/anothernoise/RAGonGCP) | Part 6 |
| Agentic AI on AWS | [`aws-health-agents`](https://github.com/anothernoise/aws-health-agents) | Part 6 |
| Medical-imaging AI (MONAI) | [`hls-imaging-ai`](https://github.com/anothernoise/hls-imaging-ai) | Part 6 |
| Genomics pipeline (nf-core) | [`RNASEQ`](https://github.com/anothernoise/RNASEQ) | Part 7 |
| PBM claims engine on AWS | [`hls-pbm-claims-aws`](https://github.com/anothernoise/hls-pbm-claims-aws) | Part 5 / 8 |

> Solution repos and instructor materials are private. To request access (for a cohort,
> for teaching, or for any reuse of the materials), see **Licensing & access** below.

## Prerequisites

- Comfort with one cloud provider and basic IaC (Terraform or CDK).
- Git, the command line, and one scripting language (Python is used in most labs).
- No prior healthcare knowledge required — that is what Parts 2–3 are for.

## Setup

See [How to use this book](docs/00-orientation/00-how-to-use.md) for the toolkit, and
[Bootcamp format & labs](docs/00-orientation/03-bootcamp-format.md) for how the modules,
labs, and assessments fit together. Unfamiliar acronym? Every defined term is auto-linked
to the [Glossary](GLOSSARY.md).

## Licensing & access

The materials are **proprietary — all rights reserved** (see [LICENSE](LICENSE)). You may
read the published book for personal study. **To teach, train, redistribute, use
commercially, or otherwise reuse the materials — including access to the private solution
repositories — please ask first:**

- Dmitry Shirokov · dmansh@gmail.com · [github.com/anothernoise](https://github.com/anothernoise)

Code samples in companion repos may carry their own licenses; where a repo specifies one,
that license governs its code.
