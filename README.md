# Health & Life Science Solution Architect

**Read the book:** https://anothernoise.github.io/hls-sa/

> A course and reference-architecture handbook for engineers and data professionals
> moving into a **Solution Architect (SA)** role in healthcare, biotech, pharma, and medtech.

This book teaches two things at once:

1. **The SA craft** — how to turn ambiguous business problems into defensible technical
   designs, communicate trade-offs, and own a solution end-to-end.
2. **The health & life science (HLS) domain** — the data standards, regulations, and
   platform building blocks that make this industry different from everything else.

Every part pairs concepts with **hands-on labs** that live in companion repositories, so
you finish with a portfolio of working reference architectures, not just notes.

---

## Who this is for

You can already write code or build data pipelines. You are now expected to:

- design systems, not just implement tickets;
- reason about compliance (HIPAA, GxP, HITRUST) as a first-class requirement;
- speak fluently about clinical data (FHIR, HL7v2, DICOM, OMOP) and genomics;
- compare cloud platforms (AWS, GCP, Azure, Databricks, Snowflake) on their merits;
- defend an architecture to a CISO, a clinician, and a CFO in the same meeting.

If you are a seasoned architect new to healthcare, skip the SA-craft refreshers and go
straight to Parts 2, 3, and 7 — the domain layers.

## How to use this book

- Read **Module 0** and **Part 1** in order; they set up the vocabulary used everywhere else.
- After that, parts are largely independent — jump to what you need.
- Do the **labs**. Each links to a companion repo (a "spoke") you can clone and deploy.
- End with the **capstone** in Part 10: design a multi-cloud HLS platform from a brief.

## Prerequisites

- Comfort with one cloud provider and basic IaC (Terraform or CDK).
- Git, the command line, and one scripting language (Python is used in most labs).
- No prior healthcare knowledge required — that is what Parts 2–3 are for.

## Companion repositories (the "spokes")

| Lab | Repo | Used in |
| --- | --- | --- |
| Clinical RAG on GCP | [`RAGonGCP`](https://github.com/anothernoise/RAGonGCP) | Part 6 |
| Agentic AI on AWS | [`aws-health-agents`](https://github.com/anothernoise/aws-health-agents) | Part 6 |
| Genomics pipeline (nf-core) | [`RNASEQ`](https://github.com/anothernoise/RNASEQ) | Part 7 |
| FHIR interoperability | [`hls-fhir-interop`](https://github.com/anothernoise/hls-fhir-interop) | Part 2 |
| RWD lakehouse (OMOP) | [`hls-lakehouse-rwd`](https://github.com/anothernoise/hls-lakehouse-rwd) | Part 5 |

## License

Content is licensed under [CC-BY-4.0](LICENSE). Code samples in companion repos carry their
own licenses.
