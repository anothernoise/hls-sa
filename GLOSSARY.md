# Glossary

## ADR
Architecture Decision Record — a short, versioned document capturing one significant architectural decision: its context, the options considered, the choice made, and the consequences. SAs keep ADRs in `docs/adr/` next to the code so future engineers know *why*, not just *what*. Ref: [Documenting architecture decisions](https://cognitect.com/blog/2011/11/15/documenting-architecture-decisions).

## ADT
Admission/Discharge/Transfer — the class of HL7v2 messages describing patient-movement events in a hospital (ADT^A01 admit, ADT^A02 transfer, ADT^A03 discharge). ADT feeds are the operational backbone of real-time clinical integration. Ref: [HL7 v2](https://www.hl7.org/implement/standards/product_brief.cfm?product_id=185).

## BAA
Business Associate Agreement — the HIPAA-required contract between a covered entity and any vendor (a "business associate") that creates, receives, maintains, or transmits PHI on its behalf. Cloud providers, Databricks, and Snowflake all sign BAAs; minimizing the number of vendors that touch PHI shrinks the "BAA surface." Ref: [HHS — Business Associates](https://www.hhs.gov/hipaa/for-professionals/privacy/guidance/business-associates/index.html).

## BioNeMo
NVIDIA's generative-AI platform for drug discovery and computational biology — protein structure prediction, molecular generation, and other biopharma models. Ref: [NVIDIA BioNeMo](https://www.nvidia.com/en-us/clara/bionemo/).

## Bulk Data
The FHIR `$export` operation that asynchronously exports many resources as NDJSON to object storage, bypassing per-resource REST overhead. It is the standard way to feed analytics, lakehouses, and ML training from a FHIR server. Ref: [FHIR Bulk Data Access](https://hl7.org/fhir/uv/bulkdata/).

## C4 model
A hierarchical diagramming approach (Context → Container → Component → Code) for describing software architecture at increasing zoom. SAs work primarily at Level 1 (Context) and Level 2 (Container). Ref: [c4model.com](https://c4model.com/).

## CA Baseline
The FHIR Canadian Baseline — the set of base FHIR profiles for Canada (the rough analogue of US Core), maintained by Canada Health Infoway to improve interoperability across provinces. Ref: [CA Baseline IG](https://build.fhir.org/ig/HL7-Canada/ca-baseline/).

## CAQH
Council for Affordable Quality Healthcare — a non-profit that maintains shared provider-credentialing data and operating standards used by payers. Ref: [caqh.org](https://www.caqh.org/).

## CCPA
California Consumer Privacy Act (as amended by the CPRA) — California's broad consumer-privacy law, which can apply to health data that falls outside HIPAA's scope. Ref: [California Privacy Protection Agency](https://cppa.ca.gov/).

## CDS Hooks
A standard for embedding Clinical Decision Support into EHR workflows: the EHR fires a "hook" at a clinical event (e.g. `patient-view`) and a service returns cards (advice, links, or actions) shown to the clinician. Ref: [cds-hooks.org](https://cds-hooks.org/).

## Claims adjudication
The real-time process a payer/PBM runs on a submitted claim — checking eligibility, applying formulary and pricing rules, running drug-utilization review, and computing the patient and plan responsibility — typically completing in under two seconds for pharmacy claims. Ref: [NCPDP](https://www.ncpdp.org/).

## Clara
NVIDIA's healthcare platform brand spanning its imaging, genomics (Parabricks), and medical-device (Holoscan) SDKs. Ref: [NVIDIA Clara](https://www.nvidia.com/en-us/clara/).

## CMS
Centers for Medicare & Medicaid Services — the US federal agency administering Medicare and Medicaid whose Interoperability and Patient Access rules are a primary driver of FHIR adoption. Ref: [cms.gov interoperability](https://www.cms.gov/priorities/key-initiatives/burden-reduction/interoperability).

## Covered entity
Under HIPAA, a health plan, healthcare clearinghouse, or healthcare provider that electronically transmits health information for covered transactions. Ref: [HHS — Covered Entities](https://www.hhs.gov/hipaa/for-professionals/covered-entities/index.html).

## Cures Act
The 21st Century Cures Act — US law that, among other things, prohibits "information blocking" and underpins ONC's API and interoperability requirements. Ref: [ONC — Cures Act](https://www.healthit.gov/topic/oncs-cures-act-final-rule).

## DICOM
Digital Imaging and Communications in Medicine — the standard for representing, storing, and transmitting medical images plus rich metadata (patient, study, acquisition). Ref: [dicomstandard.org](https://www.dicomstandard.org/).

## DICOMweb
DICOM's web-native RESTful transport (DICOM Part 18): STOW-RS (store), QIDO-RS (query metadata), WADO-RS (retrieve pixels). The right choice for cloud and browser-based imaging. Ref: [DICOMweb](https://www.dicomstandard.org/using/dicomweb).

## DUR
Drug Utilization Review — the safety checks a PBM applies during pharmacy claims adjudication (drug interactions, duplicate therapy, dosing, allergies) before approving a claim. Ref: [CMS — Drug Utilization Review](https://www.medicaid.gov/medicaid/prescription-drugs/drug-utilization-review/index.html).

## De Novo
The FDA premarket pathway for a novel low-to-moderate-risk device that has no predicate; it creates a new device classification. Ref: [FDA — De Novo](https://www.fda.gov/medical-devices/premarket-submissions-selecting-and-preparing-correct-submission/de-novo-classification-request).

## EHDS
European Health Data Space — an EU regulation (entered into force March 2025; implementing acts due ~2027; first primary-use categories ~2029) creating a common framework for primary use (patient access/portability) and secondary use (research, policy) of health data, using FHIR-based exchange. Ref: [EHDS](https://health.ec.europa.eu/ehealth-digital-health-and-care/european-health-data-space-regulation-ehds_en).

## FAVES
The ONC HTI-1 principle that decision-support/AI tools in certified health IT should be Fair, Appropriate, Valid, Effective, and Safe — with "source attributes" disclosed so users can judge this. Ref: [ONC HTI-1](https://www.healthit.gov/topic/laws-regulation-and-policy/health-data-technology-and-interoperability-certification-program).

## HTI-1
ONC's Health Data, Technology, and Interoperability "Algorithm Transparency" final rule (finalized 2023; certified-health-IT compliance from Jan 1, 2025) — introduces Predictive Decision Support Intervention transparency (source attributes, FAVES, risk management) and updates information blocking. Ref: [ONC HTI-1](https://www.healthit.gov/topic/laws-regulation-and-policy/health-data-technology-and-interoperability-certification-program).

## Predictive DSI
Predictive Decision Support Intervention — under ONC HTI-1, a model in certified health IT that produces a prediction, classification, or recommendation; subject to transparency (source attributes), FAVES, and intervention risk-management requirements. Ref: [ONC DSI criteria](https://www.healthit.gov/topic/laws-regulation-and-policy/health-data-technology-and-interoperability-certification-program).

## EHR
Electronic Health Record — the system of record clinicians use to manage patient records (Epic, Oracle Health/Cerner, MEDITECH). Modern EHRs expose FHIR APIs but still emit HL7v2. Ref: [HealthIT.gov — EHR](https://www.healthit.gov/faq/what-electronic-health-record-ehr).

## EMR
Electronic Medical Record — the records within a single practice; often used interchangeably with EHR, though EHR implies cross-provider sharing.

## ePHI
Electronic Protected Health Information — PHI in electronic form; the specific focus of the HIPAA Security Rule. See PHI.

## Expert Determination
One of two HIPAA de-identification methods: a qualified statistician documents that the re-identification risk is very small, allowing more useful detail to be retained than Safe Harbor. Ref: [HHS — De-identification](https://www.hhs.gov/hipaa/for-professionals/privacy/special-topics/de-identification/index.html).

## FHIR
Fast Healthcare Interoperability Resources — an HL7 standard for representing and exchanging health data as resources via a RESTful HTTP API. FHIR R4 (2019) is the current normative release and underpins modern interoperability mandates in the US and Canada. Ref: [hl7.org/fhir](https://hl7.org/fhir/).

## FHIRPath
A path-based expression language for navigating and extracting values from FHIR resources; the basis for defining columns in SQL-on-FHIR ViewDefinitions. Ref: [FHIRPath](https://hl7.org/fhirpath/).

## Formulary
A payer's or PBM's list of covered drugs, organized into tiers that determine coverage and patient cost-share; formulary rules are applied during claims adjudication. Ref: [NCPDP Formulary & Benefit standard](https://www.ncpdp.org/).

## GAMP 5
Good Automated Manufacturing Practice (ISPE) — the risk-based framework for validating computerized systems in regulated life science; the Second Edition (2022) embraces Agile, cloud, and the FDA's CSA approach. Ref: [ISPE GAMP 5](https://ispe.org/publications/guidance-documents/gamp-5-guide-2nd-edition).

## GDPR
General Data Protection Regulation — the EU's economy-wide data-protection law. Health data is a "special category" under Article 9, requiring both an Article 6 lawful basis and an Article 9 condition to process. Ref: [gdpr-info.eu](https://gdpr-info.eu/).

## GMLP
Good Machine Learning Practice — guiding principles (FDA, Health Canada, UK MHRA) for developing safe, effective AI/ML medical devices; they map closely onto disciplined MLOps. Ref: [FDA — GMLP](https://www.fda.gov/medical-devices/software-medical-device-samd/good-machine-learning-practice-medical-device-development-guiding-principles).

## GxP
The family of FDA/EMA "Good Practice" quality regulations (GMP, GLP, GCP, GDP) governing regulated pharma, lab, clinical, and distribution processes; the dominant compliance lens in pharma/biotech. Ref: [FDA — Good Manufacturing Practices](https://www.fda.gov/drugs/pharmaceutical-quality-resources/current-good-manufacturing-practice-cgmp-regulations).

## HAPI FHIR
An open-source Java FHIR server and client library widely used for development, testing, and self-hosted FHIR deployments; its public sandbox is handy for learning. Ref: [hapifhir.io](https://hapifhir.io/).

## Health Canada
Canada's federal health regulator; among other roles it licenses medical devices (Class I–IV) and requires MDSAP certification for Class II–IV device licences. Ref: [Health Canada — Medical Devices](https://www.canada.ca/en/health-canada/services/drugs-health-products/medical-devices.html).

## HealthLake
AWS's managed FHIR R4 data store — REST API, Bulk Data export, SMART on FHIR, and integrated analytics; HIPAA-eligible. Ref: [AWS HealthLake](https://aws.amazon.com/healthlake/).

## HealthOmics
AWS's managed genomics service: purpose-built sequence/reference/variant/annotation stores plus a workflow engine (Nextflow/WDL/CWL) with built-in provenance. Ref: [AWS HealthOmics](https://aws.amazon.com/healthomics/).

## HIE
Health Information Exchange — a network that enables sharing of patient records between healthcare organisations (e.g. CommonWell, Carequality). Ref: [HealthIT.gov — HIE](https://www.healthit.gov/topic/health-it-and-health-information-exchange-basics/what-hie).

## HIPAA
Health Insurance Portability and Accountability Act — the US federal law (1996) establishing the Privacy, Security, and Breach Notification Rules for protecting PHI. It sets a federal floor that state and sectoral laws can exceed. Ref: [HHS — HIPAA](https://www.hhs.gov/hipaa/index.html).

## HITECH
Health Information Technology for Economic and Clinical Health Act (2009) — strengthened HIPAA enforcement and breach-notification requirements and incentivized EHR adoption. Ref: [HHS — HITECH](https://www.hhs.gov/hipaa/for-professionals/special-topics/hitech-act-enforcement-interim-final-rule/index.html).

## HITRUST
A certifiable security framework (HITRUST CSF) that harmonises HIPAA, NIST, ISO 27001, and others into one auditable control set, with tiered assessments (e1, i1, r2). Often a precondition for selling to health systems. Ref: [HITRUST](https://hitrustalliance.net/).

## HL7
Health Level Seven International — the standards-development organisation behind HL7v2, FHIR, and C-CDA. Ref: [hl7.org](https://www.hl7.org/).

## HL7v2
HL7 Version 2 — the pipe-delimited, segment-based messaging standard (since 1987) still dominant for real-time clinical event feeds; transported over MLLP. Ref: [HL7 v2](https://www.hl7.org/implement/standards/product_brief.cfm?product_id=185).

## Holoscan
NVIDIA's platform for real-time, low-latency edge AI on streaming medical-device data (surgical video, ultrasound, endoscopy). Ref: [NVIDIA Holoscan](https://www.nvidia.com/en-us/clara/holoscan/).

## IaC
Infrastructure as Code — provisioning infrastructure from declarative configuration (Terraform, AWS CDK, Pulumi) rather than manual console steps; the basis for provable, uniform compliance controls. Ref: [Terraform](https://developer.hashicorp.com/terraform).

## ICD-10-CM
International Classification of Diseases, 10th Revision, Clinical Modification — the US diagnosis coding standard for billing and claims (the US has not yet adopted ICD-11). Ref: [CDC — ICD-10-CM](https://www.cdc.gov/nchs/icd/icd-10-cm.htm).

## Implementation Guide
A FHIR specification (IG) that constrains base FHIR for a use case — required fields, code systems, must-support elements (e.g. US Core, CA Baseline, SMART on FHIR, Da Vinci). Ref: [FHIR IG registry](https://fhir.org/guides/registry/).

## Information Blocking
A practice, prohibited under the 21st Century Cures Act, that is likely to interfere with the access, exchange, or use of electronic health information. Ref: [ONC — Information Blocking](https://www.healthit.gov/topic/information-blocking).

## IPS
International Patient Summary — an ISO/HL7 standardized minimal set of essential health data for unplanned/cross-border care; the basis for national summaries like Canada's PS-CA. Ref: [HL7 IPS](https://hl7.org/fhir/uv/ips/).

## IRB
Institutional Review Board — a committee that reviews research involving human subjects for ethics, informed consent, and privacy. Ref: [FDA — IRBs](https://www.fda.gov/about-fda/center-drug-evaluation-and-research-cder/institutional-review-boards-irbs-and-protection-human-subjects-clinical-trials).

## LIMS
Laboratory Information Management System — software for managing samples, workflows, QC, and instrument data in clinical and research labs.

## LOINC
Logical Observation Identifiers Names and Codes — the standard vocabulary for lab tests, vital signs, and clinical observations; used in FHIR `Observation.code`. Ref: [loinc.org](https://loinc.org/).

## MADR
Markdown Architectural Decision Records — a lightweight, structured Markdown format for ADRs stored in version control. Ref: [adr.github.io/madr](https://adr.github.io/madr/).

## MDSAP
Medical Device Single Audit Program — one ISO 13485 quality-system audit recognized by Canada, the US, Australia, Brazil, and Japan; required for Health Canada Class II–IV device licences. Ref: [FDA — MDSAP](https://www.fda.gov/medical-devices/cdrh-international-programs/medical-device-single-audit-program-mdsap).

## medallion
The bronze (raw, immutable) → silver (cleaned, conformed) → gold (analytics-ready, e.g. OMOP) layering pattern for refining data in a lakehouse. Ref: [Databricks — medallion](https://www.databricks.com/glossary/medallion-architecture).

## MLLP
Minimal Lower Layer Protocol — the TCP framing that wraps HL7v2 messages between systems; not natively receivable by a plain HTTP endpoint. Ref: [HL7 v2 / MLLP](https://www.hl7.org/implement/standards/product_brief.cfm?product_id=185).

## MLOps
The practice of reproducible model training, versioned artifacts, controlled deployment, and continuous monitoring (drift) for production ML; for clinical AI it also carries regulatory traceability. Ref: [Google — MLOps](https://cloud.google.com/architecture/mlops-continuous-delivery-and-automation-pipelines-in-machine-learning).

## MONAI
Medical Open Network for AI — an open-source PyTorch framework for medical-imaging deep learning (co-developed with NVIDIA); MONAI Deploy packages models for clinical use. Ref: [monai.io](https://monai.io/).

## MRN
Medical Record Number — the unique patient identifier assigned by a healthcare organisation; one of the 18 HIPAA Safe Harbor identifiers.

## NCPDP
National Council for Prescription Drug Programs — the standards body for pharmacy transactions; its Telecommunication (D.0) and Formulary & Benefit standards govern pharmacy claims and PBM messaging. Ref: [ncpdp.org](https://www.ncpdp.org/).

## NFR
Non-Functional Requirement — a measurable requirement for *how well* a system performs (availability, latency, security, cost, compliance); NFRs drive most architecture. Ref: [arc42 — quality requirements](https://docs.arc42.org/section-10/).

## NIM
NVIDIA Inference Microservices — containerized, optimized model-serving you self-host, so PHI never leaves your boundary to reach a third-party model API. Ref: [NVIDIA NIM](https://www.nvidia.com/en-us/ai/).

## NIST
National Institute of Standards and Technology — US agency publishing cybersecurity frameworks and HIPAA Security Rule implementation guidance (SP 800-66). Ref: [NIST CSF](https://www.nist.gov/cyberframework).

## NVIDIA AI Enterprise
NVIDIA's supported software runtime for deploying its AI/HLS stack consistently across cloud GPUs and on-prem DGX/HGX systems. Ref: [NVIDIA AI Enterprise](https://www.nvidia.com/en-us/data-center/products/ai-enterprise/).

## OMOP CDM
Observational Medical Outcomes Partnership Common Data Model — a standardised schema (current v5.4) for observational health data that enables cross-institution analytics and RWE; maintained by the OHDSI community. Ref: [OMOP CDM](https://ohdsi.github.io/CommonDataModel/).

## ONC
Office of the National Coordinator for Health IT (now ASTP/ONC) — the US agency regulating certified EHR technology; § 170.315(g)(10) requires a SMART on FHIR API. Ref: [healthit.gov](https://www.healthit.gov/).

## Parabricks
NVIDIA's GPU-accelerated suite for genomics secondary analysis (GATK, DeepVariant) — a 30× genome in well under an hour versus ~30 hours on CPU. Ref: [NVIDIA Parabricks](https://www.nvidia.com/en-us/clara/genomics/).

## PBM
Pharmacy Benefit Manager — an organisation that administers prescription-drug benefits for payers: it runs real-time claims adjudication, manages the formulary, negotiates rebates, and processes payments. Ref: [CMS — Part D](https://www.cms.gov/medicare/coverage/prescription-drug-coverage).

## PCCP
Predetermined Change Control Plan — an FDA-reviewed plan (final guidance Dec 2024) that pre-specifies permitted changes to an AI/ML device and how they're validated, so conforming changes ship without a new submission. Ref: [FDA — PCCP](https://www.fda.gov/regulatory-information/search-fda-guidance-documents/marketing-submission-recommendations-predetermined-change-control-plan-artificial-intelligence).

## PHI
Protected Health Information — individually identifiable health information held by a covered entity or business associate; HIPAA defines 18 identifiers whose presence makes data PHI. Ref: [HHS — PHI / de-identification](https://www.hhs.gov/hipaa/for-professionals/privacy/special-topics/de-identification/index.html).

## PHIPA
Personal Health Information Protection Act — Ontario's health-specific privacy law governing custodians of personal health information. Ref: [Ontario IPC — PHIPA](https://www.ipc.on.ca/en/health-individuals/health-privacy-ontario).

## PII
Personally Identifiable Information — information that can identify an individual; PHI is the health-data subset. GDPR and laws like CCPA govern PII broadly.

## PIPEDA
Personal Information Protection and Electronic Documents Act — Canada's federal private-sector privacy law for commercial collection, use, and disclosure of personal information. Ref: [OPC — PIPEDA](https://www.priv.gc.ca/en/privacy-topics/privacy-laws-in-canada/the-personal-information-protection-and-electronic-documents-act-pipeda/).

## PMA
Premarket Approval — the FDA's most rigorous pathway, for high-risk (Class III) devices, requiring clinical evidence of safety and effectiveness. Ref: [FDA — PMA](https://www.fda.gov/medical-devices/premarket-submissions-selecting-and-preparing-correct-submission/premarket-approval-pma).

## Prior Authorization
A payer/PBM requirement that certain drugs or services be approved before they are covered; a major source of administrative burden that FHIR-based APIs (CMS, Da Vinci) aim to streamline. Ref: [CMS — Prior Authorization](https://www.cms.gov/priorities/key-initiatives/burden-reduction/interoperability/policies-and-technology/electronic-prior-authorization).

## PS-CA
Pan-Canadian Patient Summary — Canada Health Infoway's FHIR specification (based on the International Patient Summary) for a standardized snapshot of a person's essential health information across care settings. Ref: [Infoway — PS-CA](https://www.infoway-inforoute.ca/en/component/edocman/resources/interoperability/patient-summary).

## Quebec Law 25
Quebec's modernized private-sector privacy law, introducing GDPR-like obligations (explicit consent, breach reporting, privacy impact assessments). Ref: [CAI Québec](https://www.cai.gouv.qc.ca/).

## RAG
Retrieval-Augmented Generation — grounding an LLM by retrieving relevant passages from a trusted corpus and adding them to the prompt, so answers are sourced and citable; the dominant safe pattern for clinical LLM use. Ref: [SMART Health IT](https://smarthealthit.org/).

## RPO
Recovery Point Objective — the maximum acceptable data loss measured in time; drives backup frequency. Ref: [AWS — RPO/RTO](https://docs.aws.amazon.com/whitepapers/latest/disaster-recovery-workloads-on-aws/disaster-recovery-options-in-the-cloud.html).

## RTO
Recovery Time Objective — the maximum acceptable time to restore a system after a failure. Ref: [AWS — RPO/RTO](https://docs.aws.amazon.com/whitepapers/latest/disaster-recovery-workloads-on-aws/disaster-recovery-options-in-the-cloud.html).

## RWD
Real-World Data — health data collected outside controlled trials (EHRs, claims, pharmacy, labs, registries, wearables). Ref: [FDA — RWE](https://www.fda.gov/science-research/science-and-research-special-topics/real-world-evidence).

## RWE
Real-World Evidence — clinical evidence about a product's use, benefits, or risks derived from analysing RWD; increasingly accepted for regulatory decisions when data and methods are credible. Ref: [FDA — RWE](https://www.fda.gov/science-research/science-and-research-special-topics/real-world-evidence).

## Safe Harbor
A HIPAA de-identification method: remove all 18 specified identifiers (and have no actual knowledge of residual re-identification risk) and the data is no longer PHI. Ref: [HHS — De-identification](https://www.hhs.gov/hipaa/for-professionals/privacy/special-topics/de-identification/index.html).

## SaMD
Software as a Medical Device — software intended for a medical purpose without being part of a hardware device; FDA/Health Canada-regulated. Ref: [FDA — SaMD](https://www.fda.gov/medical-devices/digital-health-center-excellence/software-medical-device-samd).

## SMART on FHIR
A standard for launching healthcare apps in an EHR context using OAuth2 authorisation and FHIR data access (current: SMART App Launch v2.2.0, with granular `cruds` scopes). Ref: [SMART App Launch](https://hl7.org/fhir/smart-app-launch/).

## SNOMED CT
Systematized Nomenclature of Medicine — Clinical Terms — a comprehensive clinical terminology for diagnoses, findings, and procedures; the OMOP standard for conditions. Ref: [snomed.org](https://www.snomed.org/).

## SOC 2
System and Organization Controls 2 — an auditing standard for service organisations across security, availability, confidentiality, and privacy; a common baseline trust signal. Ref: [AICPA — SOC 2](https://www.aicpa-cima.com/topic/audit-assurance/audit-and-assurance-greater-than-soc-2).

## SQL-on-FHIR
An HL7 specification (SQL on FHIR v2) for defining portable, tabular projections of FHIR data via ViewDefinitions, making FHIR far easier to query with standard analytic/SQL tools. Ref: [SQL on FHIR v2](https://sql-on-fhir.org/ig/).

## TCO
Total Cost of Ownership — the full lifetime cost of a system: build + run + opportunity cost; in HLS, run cost (managed FHIR, genomics, imaging egress) is the common surprise. Ref: [AWS — TCO](https://aws.amazon.com/tco-calculator/).

## TEFCA
Trusted Exchange Framework and Common Agreement — the US framework (now in production via Qualified Health Information Networks) for nationwide health information exchange, increasingly FHIR-based. Ref: [TEFCA / RCE](https://rce.sequoiaproject.org/).

## TOGAF
The Open Group Architecture Framework — an enterprise-architecture methodology relevant where formal EA governance exists. Ref: [TOGAF](https://www.opengroup.org/togaf).

## Tokenization
Replacing a patient's direct identifiers with an irreversible, consistent token so records about the same person can be linked across organisations without exposing PII — the engine behind RWD/RWE linkage (e.g. Datavant, HealthVerity). Ref: [Datavant — linkage](https://www.datavant.com/).

## Unity Catalog
Databricks' unified governance layer for data and AI assets: column/row-level access control, dynamic masking, lineage, and audit — key for PHI governance. Ref: [Unity Catalog](https://www.databricks.com/product/unity-catalog).

## US Core
The FHIR Implementation Guide defining the minimum data elements and profiles (aligned to USCDI) for US interoperability; required for ONC-certified EHRs. Ref: [US Core IG](https://www.hl7.org/fhir/us/core/).

## USCDI
United States Core Data for Interoperability — the standardized set of health data classes/elements EHRs must support; versions advance regularly (v5 in 2024, v6 in 2025). US Core implements USCDI in FHIR. Ref: [USCDI](https://www.healthit.gov/isp/united-states-core-data-interoperability-uscdi).

## ViewDefinition
The SQL-on-FHIR artifact that defines a single tabular view over one FHIR resource type using FHIRPath for columns, filters, and unnesting; runnable via `$viewdefinition-run`/`-export` to CSV/NDJSON/Parquet. Ref: [SQL on FHIR — ViewDefinition](https://sql-on-fhir.org/ig/).

## WAF
Well-Architected Framework — cloud-provider frameworks (AWS/GCP/Azure) for reviewing a design across security, reliability, performance, cost, operational excellence, and sustainability pillars. Ref: [AWS WAF](https://aws.amazon.com/architecture/well-architected/).

## WGS
Whole Genome Sequencing — determining the complete DNA sequence of a genome; ~100 GB of raw data per sample at 30× coverage. Ref: [GATK Best Practices](https://gatk.broadinstitute.org/hc/en-us/sections/360007226651-Best-Practices-Workflows).

## 21 CFR Part 11
The FDA regulation governing electronic records and electronic signatures in regulated industries, requiring audit trails, validation, and access controls. Ref: [21 CFR Part 11](https://www.ecfr.gov/current/title-21/chapter-I/subchapter-A/part-11).

## 42 CFR Part 2
US federal regulation giving stricter confidentiality protection to substance-use-disorder treatment records than HIPAA. Ref: [SAMHSA — 42 CFR Part 2](https://www.samhsa.gov/about-us/who-we-are/laws-regulations/confidentiality-regulations-faqs).

## 510(k)
The FDA premarket pathway for a device substantially equivalent to a legally-marketed predicate; the route most AI/ML devices take. Ref: [FDA — 510(k)](https://www.fda.gov/medical-devices/premarket-submissions-selecting-and-preparing-correct-submission/premarket-notification-510k).

## Apache Iceberg
An open table format that brings ACID transactions, schema/partition evolution, and time travel to data-lake files on object storage — well suited to large, append-heavy datasets like variant stores. Ref: [iceberg.apache.org](https://iceberg.apache.org/).

## C-CDA
Consolidated Clinical Document Architecture — an HL7 standard for structured clinical *documents* in XML (e.g. the Continuity of Care Document); widely used for transitions of care and HIE exchange, alongside FHIR. Ref: [HL7 C-CDA](https://www.hl7.org/implement/standards/product_brief.cfm?product_id=492).

## CMS-0057
The CMS Interoperability and Prior Authorization Final Rule (2024) — requires impacted payers to expand FHIR APIs (Patient/Provider/Payer-to-Payer access) and implement an electronic prior-authorization API, with major requirements phasing in around 2027. Ref: [CMS-0057-F](https://www.cms.gov/newsroom/fact-sheets/cms-interoperability-and-prior-authorization-final-rule-cms-0057-f).

## FHIR extension
The standard FHIR mechanism for adding data the base spec doesn't model — an `extension` with a canonical URL defining its meaning and type — so additions stay interoperable rather than proprietary. Ref: [FHIR extensibility](https://hl7.org/fhir/extensibility.html).

## FHIR profile
A `StructureDefinition` that constrains a FHIR resource for a use case (required elements, fixed cardinality, bound value sets, must-support); profiles can only narrow base FHIR, not loosen it. Ref: [FHIR profiling](https://hl7.org/fhir/profiling.html).

## S3 Tables
An AWS service providing fully managed Apache Iceberg tables in Amazon S3, with automatic compaction and table maintenance — Iceberg semantics without the operational overhead. Ref: [Amazon S3 Tables](https://aws.amazon.com/s3/features/tables/).

## TileDB
A storage engine based on sparse/dense multi-dimensional arrays; TileDB-VCF is purpose-built for genomic variant data with efficient cohort queries and incremental ingest. Ref: [TileDB-VCF](https://docs.tiledb.com/main/genomics).

## X12
The ASC X12 EDI standard for US healthcare administrative/financial transactions named by HIPAA — including 837 (claim), 835 (remittance), 270/271 (eligibility), 276/277 (claim status), and 278 (prior authorization). Ref: [x12.org](https://x12.org/).

## mCODE
minimal Common Oncology Data Elements — an HL7 FHIR Implementation Guide (driven by the CodeX accelerator) standardizing core cancer data: primary/secondary cancer conditions, TNM staging, tumor markers, cancer genomics, treatments, and disease status. Ref: [mCODE IG](https://hl7.org/fhir/us/mcode/).

## ICD-O-3
International Classification of Diseases for Oncology, 3rd edition — codes cancer **topography** (site) and **morphology** (histology/behavior); used by pathology and cancer registries, distinct from ICD-10. Ref: [WHO ICD-O](https://www.who.int/standards/classifications/other-classifications/international-classification-of-diseases-for-oncology).

## TNM staging
The AJCC/UICC cancer staging system — Tumor (T), Nodes (N), Metastasis (M) combined into a stage group; has clinical and pathologic variants and is part of USCDI. Ref: [AJCC](https://www.facs.org/quality-programs/cancer-programs/american-joint-committee-on-cancer/).

## NAACCR
North American Association of Central Cancer Registries — maintains the data dictionary and transmission standard for mandated reporting to central cancer registries (annual versions). Ref: [naaccr.org](https://www.naaccr.org/).

## GA4GH
Global Alliance for Genomics and Health — the body that publishes interoperable standards for sharing genomic data (VRS, Phenopackets, htsget, Beacon, DUO, Passports). Ref: [ga4gh.org](https://www.ga4gh.org/).

## VRS
GA4GH Variation Representation Specification — a computable, normalized way to represent and identify genetic variants so the same variant gets the same identifier across systems (federated matching). Ref: [vrs.ga4gh.org](https://vrs.ga4gh.org/).

## Phenopackets
A GA4GH standard packaging an individual's phenotype, disease, and genotype in a computable form; interoperates with FHIR for precision-medicine exchange. Ref: [Phenopackets](https://www.ga4gh.org/product/phenopackets/).

## Beacon
A GA4GH discovery API (v2) that answers whether a dataset contains a given variant or query without exposing record-level data — enabling federated discovery across genomic cohorts. Ref: [Beacon v2](https://docs.genomebeacons.org/).

## htsget
A GA4GH protocol for secure HTTP streaming of sequencing reads/variants (BAM/CRAM/VCF) by genomic region, so clients fetch only the data they need. Ref: [htsget](https://samtools.github.io/hts-specs/htsget.html).

## DUO
Data Use Ontology — a GA4GH standard for machine-readable encoding of a dataset's permitted uses/consent (e.g. disease-specific research only), enabling consent-aware data access. Ref: [DUO](https://www.ga4gh.org/product/data-use-ontology-duo/).

## Synthea
An open-source (MITRE, Apache-2.0) synthetic patient population simulator that generates realistic but entirely fictional lifelong health records, exported as FHIR/US Core, Bulk FHIR, C-CDA, and CSV — the standard PHI-free data source for labs and demos. Ref: [Synthea](https://synthetichealth.github.io/synthea/).

## FAIR
A set of data-stewardship principles — Findable, Accessible, Interoperable, Reusable — that is the north star for life-science data strategy and the prerequisite for AI-ready data. Ref: [GO FAIR](https://www.go-fair.org/fair-principles/).

## data mesh
A decentralized data-architecture approach where domain teams own their data as products on a shared self-serve platform, under federated governance — suited to large orgs with mature domains. Ref: [Data mesh principles](https://martinfowler.com/articles/data-mesh-principles.html).

## data fabric
An architecture that uses a metadata/virtualization layer to connect and access data across many disparate sources without first consolidating them — useful over hard-to-replace legacy systems.

## data product
A dataset treated as a product: with a clear owner, documented interface/contract, quality SLA, and consumers — the unit of a data mesh and a discipline usable in any architecture.

## CDO
Chief Data Officer — the executive who owns the organization's data vision, governance, and value strategy; the typical sponsor of an HLS/biotech data strategy.

## CRO
Contract Research Organization — a company (e.g. IQVIA, ICON, Parexel) that pharma/biotech sponsors outsource clinical-trial execution to: patient recruitment, site monitoring, data management, regulatory submissions. Over half of industry-sponsored trials now run through a CRO. Ref: [CRO overview](https://en.wikipedia.org/wiki/Contract_research_organization).

## AMC
Academic Medical Center — a hybrid provider-and-research institution (a teaching hospital tied to a university) where both HIPAA (care) and GxP/IRB (research) regulatory regimes apply within the same organization.

## CPHIMS
Certified Professional in Healthcare Information and Management Systems — a HIMSS credential validating broad healthcare-IT management knowledge. Ref: [HIMSS CPHIMS](https://www.himss.org/certification/cphims).

## ASTP/ONC
The Assistant Secretary for Technology Policy/Office of the National Coordinator for Health IT — ONC's name after a July 2024 HHS reorganization expanded its scope to technology, data, and AI policy; both "ONC" and "ASTP/ONC" appear in the wild. Ref: [ASTP/ONC](https://www.healthit.gov/).
