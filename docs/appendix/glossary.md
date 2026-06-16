# Glossary

Alphabetically sorted definitions of terms used throughout this handbook. See-also links point to the chapter where the term is covered in depth.

---

**ADR (Architecture Decision Record)** — A short document capturing one significant architectural decision: the context, the options considered, the choice made, and the consequences. Stored in `docs/adr/` alongside the code. See [C4 diagrams & ADRs](../01-foundations/02-c4-and-adrs.md).

**ADT (Admission/Discharge/Transfer)** — A class of HL7v2 message types describing patient movement events in a hospital. ADT^A01 = admit, ADT^A03 = discharge, ADT^A02 = transfer. See [HL7v2 messaging](../02-interoperability/00-hl7v2.md).

**BAA (Business Associate Agreement)** — A legal contract required by HIPAA between a covered entity and any vendor (business associate) that creates, receives, maintains, or transmits PHI on its behalf. Major cloud providers (AWS, GCP, Azure), Databricks, and Snowflake all offer BAAs. See [HIPAA](../03-compliance/00-hipaa.md).

**Bulk Data / $export** — A FHIR operation that exports all matching resources as NDJSON files to object storage asynchronously. Used for analytics at scale instead of per-resource REST queries. See [FHIR R4](../02-interoperability/01-fhir.md).

**C4 model** — A hierarchical diagramming approach (Context → Container → Component → Code) for visualising software architecture at different levels of detail. SAs primarily produce Level 1 and Level 2 diagrams. See [C4 diagrams & ADRs](../01-foundations/02-c4-and-adrs.md).

**CAQH (Council for Affordable Quality Healthcare)** — A non-profit that maintains provider credentialing data and industry standards used by payers for provider directory and credentialing workflows.

**CDM (Common Data Model)** — A standardised schema for representing clinical data to enable analytics across multiple data sources. The most widely used in HLS is the OMOP CDM. See [OMOP Common Data Model](../02-interoperability/04-omop-cdm.md).

**CDS Hooks** — A standard for integrating Clinical Decision Support into EHR workflows via webhooks. An EHR fires a hook (e.g., `patient-view`) at a clinical event; a CDS service returns a card (advice, link, or action) displayed to the clinician.

**CMS (Centers for Medicare & Medicaid Services)** — The US federal agency that administers Medicare, Medicaid, and the ACA marketplaces. CMS regulations (e.g., the Interoperability and Patient Access Rule) are a key driver of FHIR adoption.

**Covered entity** — Under HIPAA, a health plan, healthcare clearinghouse, or healthcare provider that electronically transmits health information in connection with covered transactions. See [HIPAA](../03-compliance/00-hipaa.md).

**DICOM (Digital Imaging and Communications in Medicine)** — The standard for representing, storing, and transmitting medical images (X-ray, MRI, CT). DICOM files include both pixel data and structured metadata. See [DICOM & medical imaging](../02-interoperability/02-dicom-imaging.md).

**EHR (Electronic Health Record)** — Software used by healthcare providers to manage patient clinical records. The major EHR vendors in the US are Epic, Oracle Health (Cerner), MEDITECH, and Allscripts. Distinct from an EMR (Electronic Medical Record), which is typically one provider's view; EHR implies cross-provider data sharing.

**EMR (Electronic Medical Record)** — See EHR. The terms are often used interchangeably, though EMR technically refers to the records within a single practice.

**ePHI (electronic Protected Health Information)** — PHI in electronic form. The HIPAA Security Rule applies specifically to ePHI. See PHI.

**Expert Determination** — One of two HIPAA-approved de-identification methods. A qualified statistician certifies that the risk of re-identifying individuals from the data is very small. The alternative is Safe Harbor. See [HIPAA](../03-compliance/00-hipaa.md).

**FHIR (Fast Healthcare Interoperability Resources)** — An HL7 standard for representing and exchanging health information via a RESTful HTTP API. FHIR R4 (2019) is the current normative release. See [FHIR R4](../02-interoperability/01-fhir.md).

**FR (Functional Requirement)** — A requirement that specifies *what* a system does (a behaviour or feature). Contrast with NFR (non-functional requirement). See [Architecture thinking](../01-foundations/00-architecture-thinking.md).

**GxP** — A collective term for the Good Practice guidelines regulated by the FDA and EMA for pharmaceutical manufacturing, laboratory, clinical, and distribution processes. Includes GMP (Good Manufacturing Practice), GLP (Good Laboratory Practice), and GCP (Good Clinical Practice). See [GxP & 21 CFR Part 11](../03-compliance/02-gxp-part11.md).

**HAPI FHIR** — An open-source Java-based FHIR server and client library. Widely used for development, testing, and self-hosted FHIR deployments. The public sandbox at `hapi.fhir.org/baseR4` is useful for learning.

**HealthLake (AWS HealthLake)** — AWS's managed FHIR R4 data store. HIPAA-eligible, supports FHIR REST API and Bulk Data $export. See [AWS for HLS](../04-cloud-platforms/01-aws.md).

**HIE (Health Information Exchange)** — A network or organisation that facilitates the sharing of patient records between healthcare organisations in a region. Examples: CommonWell, Carequality, statewide HIEs.

**HIPAA (Health Insurance Portability and Accountability Act)** — US federal law (1996) establishing standards for protecting PHI. Comprises the Privacy Rule, Security Rule, and Breach Notification Rule. See [HIPAA](../03-compliance/00-hipaa.md).

**HITRUST CSF (Common Security Framework)** — A certifiable framework that harmonises HIPAA, NIST, ISO 27001, and other standards into a single, auditable control set. Widely used by health systems and payers as a third-party certification. See [HITRUST](../03-compliance/01-hitrust.md).

**HL7 (Health Level Seven International)** — The standards organisation that produces HL7v2, FHIR, C-CDA, and other healthcare interoperability standards.

**HITECH (Health Information Technology for Economic and Clinical Health Act)** — 2009 US law that strengthened HIPAA enforcement, expanded breach notification requirements, and created financial incentives for EHR adoption.

**IaC (Infrastructure as Code)** — The practice of defining and provisioning cloud infrastructure using declarative configuration files (Terraform, AWS CDK, Pulumi) rather than manual console operations.

**ICD-10 (International Classification of Diseases, 10th Revision)** — The WHO standard for classifying diagnoses and procedures. ICD-10-CM (Clinical Modification) is used in the US for diagnoses; ICD-10-PCS for inpatient procedures. See [Clinical terminologies](../02-interoperability/03-terminologies.md).

**IG (Implementation Guide)** — A FHIR specification that constrains the base FHIR standard for a specific use case, defining required fields, allowed code systems, and must-support elements. Examples: US Core, SMART on FHIR, Da Vinci PDex. See [FHIR R4](../02-interoperability/01-fhir.md).

**IRB (Institutional Review Board)** — A committee that reviews research involving human subjects to ensure ethical conduct, informed consent, and privacy protections. IRB approval is required before using patient data for research.

**LIMS (Laboratory Information Management System)** — Software used by clinical and research laboratories to manage samples, workflows, quality control, and instrument data. Relevant in both diagnostics (clinical labs) and life science (research labs).

**LOINC (Logical Observation Identifiers Names and Codes)** — A standardised vocabulary for identifying clinical observations, lab tests, and measurements. LOINC codes are the standard for FHIR Observation resources. Example: LOINC 8302-2 = body height. See [Clinical terminologies](../02-interoperability/03-terminologies.md).

**MADR (Markdown Architectural Decision Records)** — A structured format for writing ADRs as Markdown files, stored in version control alongside code. Recommended format for this handbook. See [C4 diagrams & ADRs](../01-foundations/02-c4-and-adrs.md).

**MLLP (Minimal Lower Layer Protocol)** — The transport protocol for HL7v2 messages over TCP/IP. Adds start-of-block and end-of-block framing characters around each message. See [HL7v2 messaging](../02-interoperability/00-hl7v2.md).

**MRN (Medical Record Number)** — The unique identifier assigned to a patient by a healthcare organisation. One of the 18 PHI identifiers under HIPAA Safe Harbor.

**NFR (Non-Functional Requirement)** — A requirement that specifies *how well* a system performs a function — availability, latency, security, cost, compliance. NFRs drive most architectural decisions. See [Architecture thinking](../01-foundations/00-architecture-thinking.md).

**NIST (National Institute of Standards and Technology)** — US federal agency that publishes cybersecurity frameworks and guidelines. NIST SP 800-66 provides HIPAA Security Rule implementation guidance; the NIST Cybersecurity Framework (CSF) is widely used in HLS.

**OMOP CDM (Observational Medical Outcomes Partnership Common Data Model)** — A standardised schema for representing observational health data (EHR, claims, registries) to enable cross-institution analytics and RWE studies. Maintained by OHDSI. See [OMOP Common Data Model](../02-interoperability/04-omop-cdm.md).

**ONC (Office of the National Coordinator for Health Information Technology)** — US federal agency that coordinates HIT policy and regulates certified EHR technology. ONC § 170.315(g)(10) requires certified EHRs to expose a SMART on FHIR API. See [FHIR R4](../02-interoperability/01-fhir.md).

**PHI (Protected Health Information)** — Individually identifiable health information created, received, maintained, or transmitted by a covered entity or business associate. HIPAA defines 18 identifiers whose presence makes data PHI. See [HIPAA](../03-compliance/00-hipaa.md).

**PII (Personally Identifiable Information)** — Information that can identify a specific individual. PHI is a subset of PII focused on health data. GDPR and state privacy laws (CCPA) govern PII broadly; HIPAA governs PHI specifically.

**RPO (Recovery Point Objective)** — The maximum acceptable amount of data loss measured in time. An RPO of 1 hour means you can afford to lose up to 1 hour of data in a disaster. Drives backup frequency. See [Well-Architected frameworks](../01-foundations/01-well-architected.md).

**RTO (Recovery Time Objective)** — The maximum acceptable time to restore a system after a failure. An RTO of 4 hours means the system must be back up within 4 hours of an outage. See [Well-Architected frameworks](../01-foundations/01-well-architected.md).

**RWD (Real-World Data)** — Health data collected outside of traditional clinical trials — from EHRs, claims, patient registries, wearables, and other sources. Contrast with controlled trial data. See [Real-world data & evidence](../05-data-platforms/02-rwd-rwe.md).

**RWE (Real-World Evidence)** — Clinical evidence about the usage and potential benefits or risks of a medical product derived from analysis of RWD. Used for regulatory submissions, label expansions, and post-market surveillance.

**Safe Harbor** — One of two HIPAA-approved de-identification methods: remove all 18 PHI identifiers and the data is no longer PHI for HIPAA purposes. Contrast with Expert Determination. See [HIPAA](../03-compliance/00-hipaa.md).

**SaMD (Software as a Medical Device)** — Software intended to be used for a medical purpose without being part of a physical hardware medical device. Subject to FDA regulation (510(k) clearance or PMA). See [FDA SaMD & GMLP](../06-ai-ml/05-fda-samd.md).

**SMART on FHIR** — A standard for launching healthcare applications in the context of an EHR session, using OAuth2 for authorisation and FHIR for data access. Enables clinician-facing and patient-facing apps that integrate with certified EHRs. See [SMART on FHIR](../02-interoperability/05-smart-on-fhir.md).

**SNOMED CT (Systematized Nomenclature of Medicine — Clinical Terms)** — A comprehensive clinical terminology used for diagnoses, findings, procedures, and body structures in FHIR Condition and Procedure resources. See [Clinical terminologies](../02-interoperability/03-terminologies.md).

**SOC 2 (System and Organization Controls 2)** — An auditing standard for service organisations covering security, availability, processing integrity, confidentiality, and privacy. Many cloud vendors and HLS SaaS providers seek SOC 2 Type II certification as a baseline trust signal.

**TCO (Total Cost of Ownership)** — The full cost of a system over its lifetime: build cost + run cost + opportunity cost. See [Trade-offs, TCO & cost](../01-foundations/03-tradeoffs-tco.md).

**TOGAF (The Open Group Architecture Framework)** — An enterprise architecture methodology and framework. Relevant to SAs at large organisations where enterprise architecture governance exists.

**UC (Unity Catalog)** — Databricks' unified governance layer for data and AI assets on the Databricks Lakehouse Platform. Provides column-level access control, audit logs, and data lineage — important for PHI governance in OMOP and RWD workloads.

**US Core** — The FHIR Implementation Guide that defines the minimum data elements and profiles for interoperability in the US healthcare system. Required for ONC-certified EHR technology. See [FHIR R4](../02-interoperability/01-fhir.md).

**WAF (Well-Architected Framework)** — Cloud provider framework (AWS WAF, GCP WAF, Azure WAF) for evaluating whether a system is designed according to best practices across security, reliability, performance, cost, operational excellence, and sustainability pillars. See [Well-Architected frameworks](../01-foundations/01-well-architected.md).

**WGS (Whole Genome Sequencing)** — The laboratory process of determining the complete DNA sequence of an organism's genome. Produces 100–300 GB of raw data per sample. See [Sequencing pipelines](../07-genomics/00-sequencing-pipelines.md).

**21 CFR Part 11** — US FDA regulation governing electronic records and electronic signatures in FDA-regulated industries (pharma, biotech, medical devices). Requires audit trails, validation, and access controls for systems that produce regulated electronic records. See [GxP & 21 CFR Part 11](../03-compliance/02-gxp-part11.md).
