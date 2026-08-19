A scroll-driven exploded view of a desktop computer, in one file.

## Install

Download **Anatomy-of-a-Machine.html** below and open it. That is the whole
procedure. It runs from `file://`, offline, with no network access of any kind.

## What it does

Scrolling drives one continuous teardown across twelve chapters. The tower turns,
the glass panel slides off, the fans spin out, and the card, cooler and processor
follow, until every part hangs in space with a leader line and a name.

Halfway down, when the power supply comes out, the machine dies: the RGB fades,
the interior goes dark, and the fans spin down under their own inertia.

## What's inside

No models, no images, no CDN. Geometry is composed from three.js primitives using
real ATX dimensions (305 × 244 mm board, 20.32 mm slot pitch, 158.75 mm I/O
aperture), and every texture is drawn on a 2D canvas at load: PCB copper traces
with serpentine length-matching, hex mesh, fan grilles, product labels. Lighting is
a procedural studio environment through `PMREMGenerator` with ACES tone mapping.

three.js r160 and both typefaces are inlined into the file. There is no
`package.json`, no bundler and no npm install.

## Notes

* Real document scroll, so wheel, trackpad, touch, space, Page Up/Down, Home and
  End all work.
* Honours `prefers-reduced-motion`.
* Responsive, and falls back to a plain message where WebGL is unavailable.
* `?t=0.62` deep-links to a point in the scroll; add `&lock=1` to freeze it.

```
Anatomy-of-a-Machine.html
size    1464089 bytes
sha256  259ec17d8a63656595a781b0b6895f8b0e3265cc8515e6b73733e70f136852e6
```

Source is MIT. Bundled three.js is MIT; Inter and JetBrains Mono are SIL OFL 1.1.
