# honkit-plugin-mermaid (local fork)

A vendored fork of [`honkit-plugin-mermaid`](https://www.npmjs.com/package/honkit-plugin-mermaid)
referenced from the root `package.json` as a `file:` dependency so it survives
`npm ci` in CI.

## Why this exists

The upstream plugin initializes Mermaid with `htmlLabels: true` (the default),
which renders flowchart node labels inside an HTML `<foreignObject>`. The bundled
Mermaid version mis-measures the height of multi-line (`<br/>`) labels, so the
lower lines get **clipped** — visible as cut-off text in node boxes.

The only change here is in `assets/mermaid-load.js`:

```js
mermaid.initialize({
  startOnLoad: false,
  flowchart: { htmlLabels: false, useMaxWidth: true },
  sequence:  { useMaxWidth: true }
})
```

`htmlLabels: false` forces SVG `<text>`/`<tspan>` rendering, which sizes
multi-line labels from their real bounding box — nothing is clipped.

## Updating

If you bump the bundled `assets/mermaid.min.js`, re-test multi-line labels and
keep `htmlLabels: false`. If you move to Mermaid v10+, the loader's
`mermaid.mermaidAPI.render` call must be rewritten to the async `mermaid.run` API.
