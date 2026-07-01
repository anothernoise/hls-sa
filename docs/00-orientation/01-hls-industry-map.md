# The HLS industry map

> _Last reviewed: 2026-06-28 — see the [freshness policy](../appendix/maintenance.md)._

## Learning objectives

After this chapter you will be able to:

- Name the major segments of health & life science and what each one buys technology for.
- Explain why "healthcare" and "life science" have different architectural centers of gravity.
- Identify who your stakeholders are likely to be in each segment.

## The segments

"Health & life science" is not one industry — it is a value chain with very different
buyers, data, and regulators at each stage.

```mermaid
flowchart LR
  subgraph LifeScience["Life science (discovery → product)"]
    Biotech["Biotech / Pharma<br/>drug discovery, trials"]
    CRO["CROs<br/>outsourced trial execution"]
    Medtech["Medtech / Devices<br/>instruments, SaMD"]
    Dx["Diagnostics / Genomics<br/>labs, sequencing"]
  end
  subgraph Healthcare["Healthcare delivery (care → payment)"]
    Providers["Providers<br/>hospitals, clinics, AMCs"]
    Payers["Payers<br/>insurers"]
    PBM["PBMs<br/>pharmacy benefits"]
    DigitalHealth["Digital health<br/>apps, telehealth"]
    PublicHealth["Public health<br/>CDC, state/provincial"]
  end
  Biotech --> CRO --> Dx --> Providers --> Payers --> PBM
  Medtech --> Providers
  DigitalHealth --> Providers
  Providers --> PublicHealth
```

### Life science

- **Biotech & pharma** — R&D and clinical trials. Data is experimental, longitudinal, and
  *regulated for integrity* (GxP, 21 CFR Part 11). Architectures center on data platforms,
  HPC/genomics, and trial systems. Cost of a wrong answer is measured in failed trials.
- **CROs (Contract Research Organizations)** — sponsors (pharma/biotech) outsource most trial
  execution to CROs (IQVIA, ICON, Parexel, LabCorp, Charles River): patient recruitment, site
  monitoring, data management, regulatory submissions. Over half of industry-sponsored trials
  now run through a CRO, and it's a $80B+ market — architecturally this means your trial-data
  platform usually has to integrate with an external CRO's EDC/systems, not just your own.
- **Medtech & devices** — physical instruments and **Software as a Medical Device (SaMD)**.
  Architectures center on edge/IoT, telemetry, and FDA-cleared software lifecycles.
- **Diagnostics & genomics** — high-throughput labs. Architectures center on **sequencing
  pipelines**, LIMS, and turning terabytes of reads into a clinical report.

### Healthcare delivery

- **Providers** (hospitals, health systems, clinics) — run on **EHRs** (Epic, Oracle Health/
  Cerner). Architectures center on **interoperability** (HL7v2, FHIR), integration engines,
  and analytics on top of clinical data. HIPAA is the dominant regulation.
  **Academic Medical Centers (AMCs)** are a hybrid worth naming separately — they are
  providers *and* life-science research institutions at once, so both regulatory worlds
  (HIPAA *and* GxP/IRB) apply inside the same organization.
- **Payers** (insurers) — claims, eligibility, actuarial models. Architectures center on
  large-scale data warehousing and increasingly FHIR (CMS mandates).
- **PBMs (Pharmacy Benefit Managers)** — a distinct segment from general payers: they
  administer the *drug* benefit specifically — real-time claims adjudication, formulary
  management, and rebate negotiation. See [Document & claims standards](../02-interoperability/09-cda-x12-claims.md)
  (NCPDP) and the [PBM claims-engine lab](https://github.com/anothernoise/hls-pbm-claims-aws).
- **Digital health** — apps, telehealth, remote monitoring. Cloud-native, fast-moving, but
  still HIPAA-bound the moment they touch PHI.
- **Public health agencies** (CDC, state/provincial health departments) — surveillance,
  mandated reporting (e.g. cancer registries — see [Oncology data](../02-interoperability/10-oncology-data.md)),
  and increasingly a **TEFCA**/FHIR exchange participant, not just a downstream report recipient.

Providers, payers, and public health agencies also connect through **Health Information
Exchanges (HIEs)** — regional or national networks that move data between organizations that
don't share a vendor; see [EHR integration](../08-integration/00-ehr-integration.md).

## Why the center of gravity differs

| Segment | Dominant data | Dominant regulator | Architect's first question |
| --- | --- | --- | --- |
| Pharma R&D | experimental, genomic | FDA (GxP / Part 11) | Is the data *trustworthy and traceable*? |
| Providers | clinical (EHR) | HHS/OCR (HIPAA) | Can systems *interoperate* safely? |
| Payers | claims, financial | CMS / state | Can we *scale* and *report*? |
| Medtech | telemetry, SaMD | FDA (510k / PMA) | Is the software *safe and validated*? |

A pattern that is excellent for a provider (a FHIR interoperability gateway) is irrelevant
to a pharma HPC pipeline. **Know which segment you are in before you reach for a pattern.**

## Stakeholders you will meet

- **Clinical / scientific** — physicians, nurses, bench scientists, bioinformaticians.
  They own the "is this correct and useful?" question.
- **Compliance / regulatory / privacy** — HIPAA security officers, GxP QA, IRB. They can
  stop a project; engage them on day one, not at launch.
- **IT / security** — the CISO and platform teams who will operate what you design.
- **Business** — the CFO who pays for it and the product owner who scoped it.

## Check yourself

1. A startup builds a sequencing-based cancer test sold to hospitals. Which segments does it
   touch, and which regulators apply?
2. Why is "interoperability" the provider architect's first concern but rarely the pharma R&D
   architect's?
3. Who can unilaterally stop your project, and when should you involve them?

## Further reading

- [ASTP/ONC: about interoperability](https://www.healthit.gov/topic/interoperability) — ONC was renamed **ASTP/ONC** (Assistant Secretary for Technology Policy/ONC) in a July 2024 HHS reorganization; you'll see both names in the wild.
- [FDA: device software functions and SaMD](https://www.fda.gov/medical-devices/digital-health-center-excellence)
- [CRO market & role overview](https://en.wikipedia.org/wiki/Contract_research_organization)
