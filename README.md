# Anatomy of a Machine

A scroll-driven exploded view of a desktop computer. One continuous motion:
the tower turns, the panels peel off, and every part lifts out of the chassis
in sequence, ending as a labelled exploded plate.

**The doc is `~/Documents/Anatomy-of-a-Machine.html`** — one self-contained file.
No network, no CDN, no assets. Open it with a double-click or:

    google-chrome ~/Documents/Anatomy-of-a-Machine.html

## What's in it

12 chapters, each with a fact panel and a spec table:

| # | Chapter | Part |
|---|---------|------|
| 00 | A Box of Sand | the intact machine |
| 01 | Tempered Glass | side panel |
| 02 | The Chassis | steel shell |
| 03 | Moving Air | four 120 mm fans |
| 04 | The Supply | PSU — **power dies here; the RGB goes out and the fans spin down** |
| 05 | Trapped Charge | SSD + M.2 |
| 06 | The Graphics Card | GPU |
| 07 | Leaking Memory | 4 × DDR5 |
| 08 | The Heatpipe Tower | CPU cooler |
| 09 | The Processor | CPU, macro |
| 10 | Twelve Layers | motherboard |
| 11 | Fifteen Parts | the exploded plate, with leader lines |

Nothing is modelled by hand — the case, board, GPU, cooler, PSU, fans, cables and
every texture (PCB traces, hex mesh, fan grilles, stickers) are generated in code
from real ATX dimensions: 305 × 244 mm board, 20.32 mm slot pitch, 120 mm fans.

## Working on it

Sources live here; the shipped file is built by concatenation.

    src/index.html     shell, CSS, HUD markup
    src/app.js         scene, choreography, camera, HUD driver
    vendor/three.core.js  three.js r160 with its export statement rewritten
    fonts/             Inter + JetBrains Mono (latin subset, variable)
    build.js           inlines all of the above into one HTML file

    node build.js      → dist/ and ~/Documents/Anatomy-of-a-Machine.html

Two gotchas that cost time, so they are worth remembering:

* `String.replace` with a payload containing `$'` splices in the text after the
  match. `build.js` uses replacer *functions* for that reason.
* three.js declares top-level `clamp`, `lerp`, `smoothstep`… so the app is
  wrapped in an IIFE at build time to avoid redeclaration.

## URL parameters

    ?t=0.62            jump straight to that point in the scroll
    ?t=0.62&lock=1     freeze there and ignore scrolling (used for screenshots)

`shots.sh 0.2 0.6 …` renders those frames headlessly via Chrome + SwiftShader.

## Behaviour

* Real document scroll — wheel, trackpad, touch, space, Page Up/Down, Home/End
  all work. Position is damped so the motion stays continuous.
* Honours `prefers-reduced-motion` (drops the scroll damping and the parallax).
* Responsive: the fact panel moves below the model under 820 px and the camera
  pulls back on narrow viewports instead of widening the lens.
* Falls back to a plain message if WebGL is unavailable.

## Third-party

Vendored, not fetched at runtime:

* **three.js r160** — `vendor/three.core.js`, MIT, © three.js authors. Unmodified
  except for the final `export { … }` statement, rewritten to `const THREE = { … }`
  so it can be inlined as a plain script. The licence header is intact at the top.
* **Inter** and **JetBrains Mono** — `fonts/`, SIL Open Font License 1.1,
  latin variable subsets from @fontsource.

Everything else in `src/` is original.
