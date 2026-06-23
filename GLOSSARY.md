# Glossary

## ADR
Architecture Decision Record — a short document capturing one significant architectural decision: its context, the options considered, the choice made, and the consequences.

## ADT
Admission/Discharge/Transfer — a class of HL7v2 message types describing patient movement events in a hospital (e.g. ADT^A01 admit, ADT^A03 discharge).

## BAA
Business Associate Agreement — a HIPAA-required contract between a covered entity and any vendor that creates, receives, maintains, or transmits PHI on its behalf.

## Bulk Data
The FHIR `$export` operation that exports all matching resources as NDJSON files to object storage asynchronously — used for analytics at scale instead of per-resource REST queries.

## C4 model
A hierarchical diagramming approach (Context → Container → Component → Code) for visualising software architecture at different levels of detail.

## CAQH
Council for Affordable Quality Healthcare — a non-profit maintaining provider credentialing data and standards used by payers.

## CDS Hooks
A standard for integrating Clinical Decision Support into EHR workflows via webhooks fired at clinical events.

## CMS
Centers for Medicare & Medicaid Services — the US federal agency whose regulations (e.g. the Interoperability and Patient Access Rule) drive FHIR adoption.

## Covered entity
Under HIPAA, a health plan, healthcare clearinghouse, or healthcare provider that electronically transmits health information for covered transactions.

## DICOM
Digital Imaging and Communications in Medicine — the standard for representing, storing, and transmitting medical images and their metadata.

## DICOMweb
DICOM's web-native RESTful transport (DICOM Part 18): STOW-RS (store), QIDO-RS (query), WADO-RS (retrieve).

## EHR
Electronic Health Record — software providers use to manage patient clinical records (Epic, Oracle Health/Cerner, MEDITECH).

## EMR
Electronic Medical Record — the records within a single practice; often used interchangeably with EHR.

## ePHI
Electronic Protected Health Information — PHI in electronic form; the focus of the HIPAA Security Rule.

## Expert Determination
A HIPAA de-identification method in which a qualified statistician certifies that re-identification risk is very small.

## FHIR
Fast Healthcare Interoperability Resources — an HL7 standard for representing and exchanging health data via a RESTful HTTP API. FHIR R4 is the current normative release.

## GAMP 5
Good Automated Manufacturing Practice (ISPE) — a risk-based framework for validating computerized systems in regulated life science; Second Edition published 2022.

## GxP
The family of FDA/EMA "Good Practice" quality regulations (GMP, GLP, GCP, GDP) governing regulated pharma, lab, clinical, and distribution processes.

## HAPI FHIR
An open-source Java FHIR server and client library, widely used for development and self-hosted FHIR deployments.

## HealthLake
AWS's managed FHIR R4 data store (HIPAA-eligible; REST API and Bulk Data export).

## HealthOmics
AWS's managed genomics service: purpose-built sequence/reference/variant/annotation stores plus a workflow engine.

## HIE
Health Information Exchange — a network that facilitates sharing of patient records between healthcare organisations (e.g. CommonWell, Carequality).

## HIPAA
Health Insurance Portability and Accountability Act — US federal law (1996) establishing the Privacy, Security, and Breach Notification Rules for protecting PHI.

## HITECH
Health Information Technology for Economic and Clinical Health Act (2009) — strengthened HIPAA enforcement and breach notification.

## HITRUST
A certifiable security framework (HITRUST CSF) that harmonises HIPAA, NIST, ISO 27001, and others into one auditable control set; assessment tiers e1, i1, r2.

## HL7
Health Level Seven International — the standards organisation behind HL7v2, FHIR, and C-CDA.

## HL7v2
HL7 Version 2 — the pipe-delimited, segment-based messaging standard still dominant for real-time clinical event feeds in hospitals.

## IaC
Infrastructure as Code — defining and provisioning infrastructure with declarative config (Terraform, CDK, Pulumi) rather than manual operations.

## ICD-10-CM
International Classification of Diseases, 10th Revision, Clinical Modification — the US diagnosis coding standard for billing and claims.

## Implementation Guide
A FHIR specification (IG) that constrains base FHIR for a use case, defining required fields and code systems (e.g. US Core, SMART on FHIR, Da Vinci).

## IRB
Institutional Review Board — a committee that reviews research involving human subjects for ethics, consent, and privacy.

## LIMS
Laboratory Information Management System — software for managing samples, workflows, and instrument data in clinical and research labs.

## LOINC
Logical Observation Identifiers Names and Codes — the standard vocabulary for lab tests, vital signs, and clinical observations.

## MADR
Markdown Architectural Decision Records — a structured Markdown format for writing ADRs in version control.

## MLLP
Minimal Lower Layer Protocol — the TCP transport that frames HL7v2 messages between systems.

## MONAI
Medical Open Network for AI — an open-source PyTorch framework for medical imaging deep learning, co-developed by NVIDIA.

## MRN
Medical Record Number — the unique patient identifier assigned by a healthcare organisation; one of the 18 HIPAA identifiers.

## NFR
Non-Functional Requirement — a requirement specifying how well a system performs (availability, latency, security, cost, compliance); drives most architecture.

## NIST
National Institute of Standards and Technology — US agency publishing cybersecurity frameworks and HIPAA Security Rule guidance (SP 800-66).

## OMOP CDM
Observational Medical Outcomes Partnership Common Data Model — a standardised schema for observational health data enabling cross-institution analytics; maintained by OHDSI (current v5.4).

## ONC
Office of the National Coordinator for Health IT — the US agency regulating certified EHR technology; § 170.315(g)(10) requires a SMART on FHIR API.

## Parabricks
NVIDIA's GPU-accelerated suite for genomics secondary analysis (e.g. GATK germline workflows) — orders of magnitude faster than CPU.

## PHI
Protected Health Information — individually identifiable health information held by a covered entity or business associate; HIPAA defines 18 identifiers.

## PHIPA
Personal Health Information Protection Act — Ontario's health-specific privacy law in Canada.

## PIPEDA
Personal Information Protection and Electronic Documents Act — Canada's federal private-sector privacy law.

## PII
Personally Identifiable Information — information that can identify an individual; PHI is the health-data subset.

## RPO
Recovery Point Objective — the maximum acceptable data loss measured in time; drives backup frequency.

## RTO
Recovery Time Objective — the maximum acceptable time to restore a system after a failure.

## RWD
Real-World Data — health data collected outside clinical trials (EHRs, claims, registries, wearables).

## RWE
Real-World Evidence — clinical evidence about a product's use, benefits, or risks derived from analysing RWD.

## Safe Harbor
A HIPAA de-identification method: remove all 18 specified identifiers and the data is no longer PHI.

## SaMD
Software as a Medical Device — software intended for a medical purpose without being part of a hardware device; FDA-regulated.

## SMART on FHIR
A standard for launching healthcare apps in an EHR context using OAuth2 authorisation and FHIR data access (current: SMART App Launch v2.2.0).

## SNOMED CT
Systematized Nomenclature of Medicine — Clinical Terms — a comprehensive clinical terminology for diagnoses, findings, and procedures.

## SOC 2
System and Organization Controls 2 — an auditing standard for service organisations covering security, availability, confidentiality, and privacy.

## TCO
Total Cost of Ownership — the full lifetime cost of a system: build + run + opportunity cost.

## TEFCA
Trusted Exchange Framework and Common Agreement — the US framework for nationwide health information exchange interoperability.

## TOGAF
The Open Group Architecture Framework — an enterprise architecture methodology.

## Unity Catalog
Databricks' unified governance layer for data and AI assets: column/row-level access control, masking, lineage, and audit.

## US Core
The FHIR Implementation Guide defining the minimum data elements and profiles for US interoperability; required for ONC-certified EHRs.

## WAF
Well-Architected Framework — cloud-provider frameworks (AWS/GCP/Azure) for reviewing a design across security, reliability, performance, cost, operations, and sustainability pillars.

## WGS
Whole Genome Sequencing — determining the complete DNA sequence of a genome; ~100 GB of raw data per sample at 30× coverage.

## 21 CFR Part 11
The FDA regulation governing electronic records and electronic signatures in regulated industries, requiring audit trails, validation, and access controls.

## 42 CFR Part 2
US federal regulation giving stricter confidentiality protection to substance-use-disorder treatment records than HIPAA.

## BioNeMo
NVIDIA's generative-AI platform for drug discovery and computational biology (protein structure, molecular generation).

## CCPA
California Consumer Privacy Act (as amended by the CPRA) — California's consumer privacy law; can apply to health data outside HIPAA.

## Clara
NVIDIA's healthcare platform brand spanning its imaging, genomics (Parabricks), and medical-device (Holoscan) SDKs.

## EHDS
European Health Data Space — an EU regulation (in force 2025, phased) creating a common framework for primary and secondary use of health data across the EU, using FHIR-based exchange.

## Holoscan
NVIDIA's platform for real-time, low-latency edge AI on streaming medical-device data (surgical video, ultrasound).

## NIM
NVIDIA Inference Microservices — containerized, optimized model-serving you self-host, keeping data inside your own boundary.

## NVIDIA AI Enterprise
NVIDIA's supported software runtime for deploying its AI/HLS stack consistently across cloud GPUs and on-prem DGX/HGX systems.

## Quebec Law 25
Quebec's modernized private-sector privacy law, introducing GDPR-like obligations (consent, breach reporting, privacy impact assessments).
