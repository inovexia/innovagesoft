# Illustration credits

## unDraw

`src/components/ui/GrowthScene.jsx` is derived from **"Growth Analytics"** by
[unDraw](https://undraw.co), obtained from the MIT-licensed
[`undraw-svg`](https://www.npmjs.com/package/undraw-svg) package (v2.0.0).

unDraw's licence is permissive and requires no attribution — this file exists
so the provenance is recorded, not because it is required.

## What was changed

The original's fills were fixed hex values, so the figures would have
disappeared against this site's dark canvas. Each one was mapped to an
`--ill-*` custom property declared in `src/app/globals.css`, with a light and a
dark value, so the illustration follows the theme like everything else.

Roles were confirmed by rendering the SVG with each token set to a vivid test
colour, and again with each candidate element coloured individually — not by
reading the path data. Two of the original colours turned out to be shared
across unrelated parts, which is why there are more tokens than source hexes:

| Token | Light | Dark | Covers |
|---|---|---|---|
| `--ill-skin` | `#f0a79f` | `#f0a79f` | faces, necks, arms, hands |
| `--ill-body` | `#3b2e66` | `#afa1e2` | window title bar, his top |
| `--ill-ink` | `#241b40` | `#e2daf6` | both characters' trousers |
| `--ill-hair` | `#241b40` | `#52447f` | both characters' hair |
| `--ill-top` | `#6b5ba8` | `#c9bef0` | her top |
| `--ill-paper` | `#ffffff` | `#140f2b` | screen interior |
| `--ill-chart` | `#dcd0f7` | `#3a2f66` | area under the chart curve |
| `--ill-fill` | `#e9e2f9` | `#2c2450` | screen body, plant leaves |
| `--ill-fill-2` | `#f4f0fd` | `#221b40` | plant stem |
| `--ill-fill-3` | `#ece6fa` | `#292148` | minor surfaces |
| `--ill-line` | `#cec3ec` | `#3c3266` | floor hairlines |
| `--accent` | — | — | chart markers and stems, shoes |

Two deliberate exceptions:

- **Hair has its own token.** It originally shared a colour with the trousers,
  and that colour has to invert to stay visible on the dark canvas — which gave
  both characters white hair.
- **The three window dots keep a literal `#fff`**, because they sit on the
  coloured title bar in both modes.

## Swapping in a different scene

The `undraw-svg` package carries ~1,740 illustrations. To change the artwork,
run the same substitution against a new file; the token names stay the same, so
only `GrowthScene.jsx` changes. Verify roles by test-colouring rather than
guessing from path data — several colours are reused across unrelated parts.
