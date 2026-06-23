# Contributing

The **Health & Life Science Solution Bootcamp** is proprietary (see [LICENSE](LICENSE)).
Contributions are by invitation, and corrections are welcome.

> **Before contributing**, please reach out — the materials are all-rights-reserved, so
> contributions are accepted under a contributor agreement. Contact: Dmitry Shirokov ·
> dmansh@gmail.com · [github.com/anothernoise](https://github.com/anothernoise).

## Ways to contribute

- **Corrections.** Regulations, cloud services, and standards change; fixes to stale facts
  are very welcome — cite a primary source.
- **Fix or expand a chapter.** Some chapters are outlines marked `> **Status:** outline`.
  Filling one in following the chapter template is high-value.
- **Add a lab.** Labs live in companion ("spoke") repos (public starter + private solution).
  Reach out to propose one before building, so we can agree on scope and which Part it fits.

## Chapter template

Every chapter under `docs/` follows the same structure:

```
# Title
## Learning objectives   (3–5 bullets, "After this chapter you will be able to…")
## Content               (the body; use Mermaid for diagrams)
## Diagram               (optional if already inline)
## Lab                   (link to the companion repo, if any)
## Check yourself        (3–5 questions)
## Further reading        (primary sources, not blog spam)
```

## Local preview

```bash
npm ci
npm run serve   # http://localhost:4000
```

Run `npm run build` before opening a PR to confirm the book builds cleanly.

## Style

- Write for an engineer who is smart but new to the domain. Define jargon on first use.
- Prefer **primary sources** (FDA, ONC, HL7, cloud vendor docs) over secondary blogs.
- Diagrams: Mermaid, kept simple. A diagram that needs a legend is too complex.
- Keep claims about regulations accurate and dated; this is a bootcamp people may rely on.
- New term? Add it to the root `GLOSSARY.md` (`## Term` + one-line definition) — Honkit
  auto-links every defined term throughout the book.

## License

The materials are proprietary — all rights reserved (see [LICENSE](LICENSE)). By
contributing, you assign your contribution to the author under the project's contributor
terms. Ask before contributing.
