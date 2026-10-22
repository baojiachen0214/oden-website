# OdenMap website

Official bilingual product site: https://baojiachen0214.github.io/oden-website/

This public repository contains marketing pages and approved public imagery only. Do not add application sources, private documents, contact records, signing assets or App Store Connect logs.

## Pages and preferences

- `index.html`: resource nodes, canvas/outline editing, formulas, tasks/calendar/reminders, presentation, migration, system integrations, upcoming 1.3 export workflow, public beta, iPhone/iPad coming soon, and the Oden ARC open-source companion.
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

## Open-source companion

[Oden ARC](https://github.com/baojiachen0214/oden-arc) is a separate public Agent Skill and Python toolkit. The landing page’s Open source section links to it; its English/Chinese introductions link back here. The OdenMap application remains closed source. Only companion code and documentation use MIT; the product icon is excluded.

Feature copy is checked against the current 1.3 help and implemented options: 12 export formats, native PDF/X and poster output, both editor views, resource preview behavior, scoped native task integrations and format-dependent imports. Historical performance notes remain qualified; the landing page makes no universal FPS or hardware speed promise.
