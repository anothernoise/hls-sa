# Summary

- [Introduction](README.md)

## Module 0 — Orientation

- [How to use this book](docs/00-orientation/00-how-to-use.md)
- [The HLS industry map](docs/00-orientation/01-hls-industry-map.md)
- [The SA operating model](docs/00-orientation/02-sa-operating-model.md)
- [Bootcamp format & labs](docs/00-orientation/03-bootcamp-format.md)
- [Health system operations, clinical workflows & care economics](docs/00-orientation/04-health-system-operations.md)

## Part 1 — Foundations of the SA role

- [Architecture thinking](docs/01-foundations/00-architecture-thinking.md)
- [Well-Architected frameworks](docs/01-foundations/01-well-architected.md)
- [C4 diagrams & ADRs](docs/01-foundations/02-c4-and-adrs.md)
- [Trade-offs, TCO & cost](docs/01-foundations/03-tradeoffs-tco.md)
- [The SA & SE skills matrix](docs/01-foundations/04-sa-se-skills-matrix.md)

## Part 2 — Healthcare data & interoperability

- [HL7v2 messaging](docs/02-interoperability/00-hl7v2.md)
- [FHIR R4](docs/02-interoperability/01-fhir.md)
- [DICOM & medical imaging](docs/02-interoperability/02-dicom-imaging.md)
- [Clinical terminologies](docs/02-interoperability/03-terminologies.md)
- [OMOP Common Data Model](docs/02-interoperability/04-omop-cdm.md)
- [SMART on FHIR](docs/02-interoperability/05-smart-on-fhir.md)
- [FHIR profiles & regulation: US & Canada](docs/02-interoperability/06-fhir-profiles-us-ca.md)
- [SQL-on-FHIR](docs/02-interoperability/07-sql-on-fhir.md)
- [AI with FHIR](docs/02-interoperability/08-ai-with-fhir.md)
- [Document & claims standards: C-CDA, X12 & prior auth](docs/02-interoperability/09-cda-x12-claims.md)
- [Oncology data](docs/02-interoperability/10-oncology-data.md)
- [Payer data & value-based care](docs/02-interoperability/11-payer-value-based-care.md)
- [Clinical trial technology](docs/02-interoperability/12-clinical-trial-tech.md)
- [Patient & provider identity matching](docs/02-interoperability/13-patient-provider-identity.md)
- [AI agents on FHIR](docs/02-interoperability/14-ai-agents-on-fhir.md)
- [FHIR version migration & compatibility: R4, R4B & R5](docs/02-interoperability/15-fhir-version-migration.md)
- [USCDI, information blocking & TEFCA: operational labs](docs/02-interoperability/16-uscdi-tefca-labs.md)
- [Canadian HLS architecture](docs/02-interoperability/17-canadian-hls-architecture.md)

## Part 3 — Compliance, security & privacy

- [HIPAA](docs/03-compliance/00-hipaa.md)
- [HITRUST](docs/03-compliance/01-hitrust.md)
- [GxP & 21 CFR Part 11](docs/03-compliance/02-gxp-part11.md)
- [GDPR & data residency](docs/03-compliance/03-gdpr-residency.md)
- [De-identification & consent](docs/03-compliance/04-deidentification-consent.md)
- [Regional compliance: US, Canada, Europe & APAC](docs/03-compliance/05-regional-compliance.md)
- [Which compliance regime applies? A decision guide](docs/03-compliance/06-compliance-decision-guide.md)
- [Behavioral health data architecture](docs/03-compliance/07-behavioral-health-data.md)
- [HITRUST evidence pack lab](docs/03-compliance/08-hitrust-evidence-lab.md)

## Part 4 — Cloud platforms for HLS

- [Capability map overview](docs/04-cloud-platforms/00-overview-capability-map.md)
- [AWS for HLS](docs/04-cloud-platforms/01-aws.md)
- [GCP for HLS](docs/04-cloud-platforms/02-gcp.md)
- [Azure for HLS](docs/04-cloud-platforms/03-azure.md)
- [Databricks for HLS](docs/04-cloud-platforms/04-databricks.md)
- [Snowflake for HLS](docs/04-cloud-platforms/05-snowflake.md)
- [On-premises & hybrid for HLS](docs/04-cloud-platforms/06-on-prem-hybrid.md)
- [NVIDIA for HLS](docs/04-cloud-platforms/07-nvidia.md)
- [Cloud portability & avoiding lock-in](docs/04-cloud-platforms/08-portability-lock-in.md)

## Part 5 — Data platforms & RWD/RWE

- [Lakehouse vs warehouse](docs/05-data-platforms/00-lakehouse-vs-warehouse.md)
- [OMOP on the cloud](docs/05-data-platforms/01-omop-on-cloud.md)
- [Real-world data & evidence](docs/05-data-platforms/02-rwd-rwe.md)
- [Governance & data contracts](docs/05-data-platforms/03-governance-contracts.md)
- [Data strategy in an HLS/biotech company](docs/05-data-platforms/04-data-strategy.md)
- [Data mesh in HLS](docs/05-data-platforms/05-data-mesh.md)
- [OHDSI end-to-end: from cohort to calibrated evidence](docs/05-data-platforms/06-ohdsi-study-package.md)

## Part 6 — AI/ML in health & life science

- [Clinical NLP](docs/06-ai-ml/00-clinical-nlp.md)
- [Medical imaging AI](docs/06-ai-ml/01-medical-imaging.md)
- [RAG over clinical corpora](docs/06-ai-ml/02-rag-clinical.md)
- [Agentic AI](docs/06-ai-ml/03-agentic-ai.md)
- [MLOps & model governance](docs/06-ai-ml/04-mlops-governance.md)
- [FDA SaMD & GMLP](docs/06-ai-ml/05-fda-samd.md)
- [EU AI Act & global AI regulation](docs/06-ai-ml/06-eu-ai-act.md)
- [Regulated AI artifacts: the concrete evidence package](docs/06-ai-ml/07-regulated-ai-artifacts.md)

## Part 7 — Genomics & bioinformatics architecture

- [Sequencing pipelines](docs/07-genomics/00-sequencing-pipelines.md)
- [AWS HealthOmics](docs/07-genomics/01-healthomics.md)
- [Variant stores & scale](docs/07-genomics/02-variant-stores.md)
- [Variant store on AWS: design & implementation](docs/07-genomics/03-variant-store-aws.md)
- [Genomics data standards & GA4GH](docs/07-genomics/04-genomics-data-standards.md)
- [Genomics workflow orchestration: engines, execution & acceleration](docs/07-genomics/05-workflow-orchestration.md)

## Part 8 — Integration & application patterns

- [EHR integration](docs/08-integration/00-ehr-integration.md)
- [Event-driven patterns](docs/08-integration/01-event-driven.md)
- [API management](docs/08-integration/02-api-management.md)
- [EHR migration & data conversion](docs/08-integration/03-ehr-migration.md)
- [Real-time streaming clinical analytics](docs/08-integration/04-realtime-streaming-analytics.md)
- [Laboratory Information System (LIS) architecture](docs/08-integration/05-lis-architecture.md)

## Part 9 — Reference architectures

- [Overview](docs/09-reference-architectures/00-overview.md)
- [FHIR interoperability platform](docs/09-reference-architectures/01-fhir-interop.md)
- [RWD lakehouse](docs/09-reference-architectures/02-lakehouse-rwd.md)
- [Clinical RAG](docs/09-reference-architectures/03-clinical-rag.md)
- [Agentic AI assistant](docs/09-reference-architectures/04-agentic-ai.md)
- [Genomics pipeline](docs/09-reference-architectures/05-genomics.md)

## Part 10 — The SA craft & capstone

- [Discovery & requirements](docs/10-sa-craft/00-discovery-requirements.md)
- [Stakeholder management](docs/10-sa-craft/01-stakeholders.md)
- [Security review](docs/10-sa-craft/02-security-review.md)
- [Capstone project](docs/10-sa-craft/03-capstone.md)
- [Capstone exemplar (worked example)](docs/10-sa-craft/04-capstone-exemplar.md)

## Appendix

- [Maintenance & freshness](docs/appendix/maintenance.md)
- [Changelog](CHANGELOG.md)
- [Contributing](CONTRIBUTING.md)

<!-- GLOSSARY.md (book root) is auto-detected by Honkit: it generates the
     Glossary page and auto-links every defined term throughout the book. -->
