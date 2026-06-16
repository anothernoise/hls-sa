# Contributing

Thanks for helping improve the **Health & Life Science Solution Architect** handbook.

## Ways to contribute

- **Fix or expand a chapter.** Most chapters are outlines marked `> **Status:** outline`.
  Filling one in following the chapter template is the most valuable contribution.
- **Add a lab.** Labs live in companion ("spoke") repos. Open an issue to propose one
  before building, so we can agree on scope and which Part it belongs to.
- **Corrections.** Regulations and cloud services change; PRs that fix stale facts are
  very welcome — cite a source.

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
- Keep claims about regulations accurate and dated; this is a handbook people may rely on.

## License

By contributing you agree your content is licensed under [CC-BY-4.0](LICENSE).
