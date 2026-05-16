# lyriem-landing

Static marketing site for [lyriem.com](https://lyriem.com).

## Structure

```
index.html              # home — hero, calculator, FAQ, footer CTA
about.html              # company / mission
for-makers.html         # freelancer-facing page
for-initiators.html     # client-facing page
how-it-works.html       # platform walkthrough
lyriem-shared.css       # styles shared across all pages except index.html
lyriem-shared.js        # nav + reveal + accordion logic for shared pages
assets/                 # images, favicon, hero photo
CNAME                   # GitHub Pages custom domain
```

## Deployment

The `main` branch is served by GitHub Pages at the apex domain
(`lyriem.com`, set via `CNAME`). Pushing to `main` deploys.
