#!/usr/bin/env bash
# Publish the v1.0.0 release. Needs `gh auth login` first (deploy keys have no API access).
set -e
cd "$(dirname "$0")"
gh release create v1.0.0 \
  --repo AnthonyMorton-iwnl/anatomy-of-a-machine \
  --title "v1.0.0 — Anatomy of a Machine" \
  --notes-file .release-notes.md \
  --verify-tag \
  "dist/Anatomy-of-a-Machine.html#Anatomy-of-a-Machine.html (single file, open it in a browser)"
gh repo edit AnthonyMorton-iwnl/anatomy-of-a-machine \
  --description "A scroll-driven exploded view of a desktop computer. One self-contained HTML file: no models, no images, no CDN." \
  --add-topic three-js --add-topic webgl --add-topic scrollytelling \
  --add-topic data-visualization --add-topic procedural-generation \
  --add-topic single-file --add-topic exploded-view --add-topic creative-coding
gh release view v1.0.0 --repo AnthonyMorton-iwnl/anatomy-of-a-machine
