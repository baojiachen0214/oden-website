# OdenMap website

Official bilingual product site: https://baojiachen0214.github.io/oden-website/

This public repository contains marketing pages and approved public imagery only. Do not add application sources, private documents, contact records, signing assets or App Store Connect logs.

## Pages and preferences

- `index.html`: product, native screenshots, upcoming 1.3 export workflow, Mac public beta and iPhone/iPad coming soon.
- `support.html`, `privacy.html`, `performance.html`: support, current privacy practices and clearly dated historical test records.
- First visit defaults to English. The header switches English/Chinese; `?lang=en` or `?lang=zh` provides a direct language link. Selection persists in local storage.
- Appearance defaults to the system and supports explicit Light/Dark choices. Screenshots follow the resolved appearance. No analytics, remote fonts or signup form.
- `styles.css` and `site.js` are shared by every page. No build or external runtime dependencies.

## Public beta

Invitation: https://testflight.apple.com/join/yeJwCNAr

Group: **OdenMap Public Beta**. Public recruitment limit: **5,000**. The website states that 1.2 is available and previews 1.3 without claiming that a pending build has been approved. macOS 14+, Apple Silicon and Intel. iOS/iPadOS are upcoming.

After changing build availability, verify the public invitation in a signed-out browser as well as App Store Connect. Never infer availability solely from the Approved label.

## Screenshots

`assets/{canvas,resources,writing,export}-{light,dark}.webp` were captured from the current OdenMap 1.3 native views on October 22, 2026, using an isolated, original illustrative research document. Light/dark were rendered by the app. Cropping removes excess canvas space/window chrome; there is no fabricated UI or recolouring. The resource prism is an original OdenMap marketing asset from the earlier artwork collection. No private user document is shown. Existing older assets remain for history but are no longer used by the landing page.

Keep screenshots paired between appearances. Provide actual dimensions and useful bilingual alt text; optimize WebP without making text illegible. The app-side fixture is maintained separately from this public repository.

## Preview and deploy

Run `python3 -m http.server 8765 --bind 127.0.0.1` in this folder, then open http://127.0.0.1:8765/. Check 320/375/390/430/768 px and desktop widths in both languages and appearances. Check appearance persistence, page navigation, full-size image dialogs, keyboard focus and the public invitation.

GitHub Pages publishes the repository root on `main` (`.nojekyll`). Commit reviewed changes, merge into `main`, push, and verify the Pages deployment and live pages. Public support is GitHub Issues; beta feedback can also be submitted through TestFlight.
