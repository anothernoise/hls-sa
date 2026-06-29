# How to use this book

> _Last reviewed: 2026-06-28 — see the [freshness policy](../appendix/maintenance.md)._

## Learning objectives

After this chapter you will be able to:

- Explain what this book does and does not try to teach.
- Choose a reading path that fits your background.
- Set up the tooling you need to do the labs.

## What this book is

A **course** for becoming a Solution Architect (SA) in health & life science (HLS).
It is opinionated and practical: every concept exists to help you make a real design
decision on a real project. It is *not* an exam cram for a specific cloud certification,
though it will make those exams much easier.

The book braids three strands:

```mermaid
flowchart LR
  Craft["SA craft<br/>(design, trade-offs, comms)"] --> Solution
  Domain["HLS domain<br/>(FHIR, HIPAA, genomics)"] --> Solution
  Platforms["Cloud platforms<br/>(AWS/GCP/Azure/DBX/Snowflake)"] --> Solution
  Solution["A defensible solution architecture"]
```

You need all three. An architect who knows AWS cold but cannot read an HL7 message will
design the wrong thing confidently. One who knows clinical workflows but cannot reason
about cost or security will design something that never ships.

## Reading paths

| If you are… | Start at | Then |
| --- | --- | --- |
| An engineer new to architecture **and** healthcare | Module 0 → Part 1 | go in order |
| An experienced architect new to healthcare | Module 0 | jump to Parts 2, 3, 7 |
| A healthcare data person new to cloud/SA | Module 0 → Part 1 | then Part 4 |
| Here for a specific problem | the relevant Part | follow lab links |

## Set up your toolkit

You will get the most out of the labs with:

- A cloud account you can spend a little money in (AWS, GCP, **or** Azure — labs note which).
- **Terraform** ≥ 1.5 or **AWS CDK** for the IaC labs.
- **Python 3.11+** and **uv** (or `pip`) for the data/AI labs.
- **Docker** for running FHIR servers and pipelines locally.
- A **FHIR sandbox** — the public HAPI FHIR test server works for read-only exploration.

> **Cost guardrail.** Every lab includes a teardown step. Healthcare data services
> (managed FHIR stores, genomics engines) can be expensive if left running. Treat
> `terraform destroy` as part of finishing the lab, not an afterthought.

## How chapters are structured

Each chapter follows the same rhythm: **learning objectives → content → a diagram →
a lab → check-yourself questions → further reading.** When a chapter has a companion
repo, the **Lab** section links to it. Skim the objectives first; they tell you what
"done" looks like.

## Check yourself

1. Which of the three strands (craft, domain, platforms) is your current weakest, and
   which Part addresses it?
2. What is the cost guardrail rule, and why does it matter more in HLS than in a generic
   web app?
3. Which IaC tool will you use for the labs, and is it installed?

## Further reading

- [AWS Well-Architected Framework](https://aws.amazon.com/architecture/well-architected/)
- [The Open Group: role of the architect](https://www.opengroup.org/togaf)
