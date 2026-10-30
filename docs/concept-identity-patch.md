# Concept identity patch — 30 October 2026

Base inspected: `50fb687173a80380186d1e6cb65debf024c7a431` on `master`.
Scope: documentation, project identity and clearly obsolete interface copy;
no service migration, full desktop redesign or production deployment.

## Changes

- Replaced upstream promotional badges, galleries, release/download claims and
  deployment buttons with the actual QuantumYield concept scope and repository scripts.
- Updated web/package/manifest and desktop display metadata. Preserved the Rust
  crate name, original author and bundle identifier pending a separate packaging review.
- Updated About, boot, demo entry, default guest name and simulated terminal copy.
  GitHub and Help launchers now point to this concept. Author contact, social and
  donation links are explicitly labelled as upstream; donation is no longer forced
  onto the desktop. Saved launcher names are mapped to their new labels.
- Replaced externally styled error/404 pages and fake restart progress with local
  Obsidian Platinum surfaces, actionable copy and the existing error reset callback.
- Preserved `LICENSE`, third-party source notices, the Win11React contributor
  credit, Microsoft non-affiliation notice and existing third-party product identities.
- Updated contribution and reporting documentation without inventing support
  addresses, service guarantees or a QuantumYield contributor agreement.

## External dependencies inspected

This is a source-level inventory of the relevant inherited integrations, not a
claim that the remote services are currently available or authorized for QYX.

| Source                                                                                  | External resource or identity                                                                                                             | Handling                                                                                                                                                                                                                                              |
| --------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `src/App.jsx`, `public/404.html`                                                        | `win11.blueedge.me/script.js`, `/style.css`, `/img/qr.png`; upstream issue tracker                                                        | Removed from these surfaces. The script simulated percentage progress, the stylesheet styled a blue error screen, and the QR image was decorative/navigation content. Local `concept.css`, a real retry control and concept issue links replace them. |
| `public/style.css`, `public/script.js`                                                  | Original local copies of error styling/progress code                                                                                      | Left as unused inherited files; no active error surface loads them.                                                                                                                                                                                   |
| `src/utils/apps.js`, `src/components/start/start.jsx`                                   | Upstream docs, repository, personal site, contact/social/donation links                                                                   | Concept Help/GitHub destinations updated; personal profile link removed; remaining author links explicitly labelled upstream.                                                                                                                         |
| `src/containers/applications/apps/about.jsx`                                            | Upstream license/support and Microsoft reference links                                                                                    | Concept license/issues links added; upstream credit and Microsoft notice retained.                                                                                                                                                                    |
| `src/containers/applications/apps/store.jsx`                                            | `raw.githubusercontent.com/win11react/store/main/store/index.json`, upstream store-submission docs                                        | Preserved as inherited code paths; the window identifies the Win11React catalogue. Remote catalogue entries may add further third-party origins.                                                                                                      |
| `src/actions/index.js`, `src/components/start/widget.jsx`                               | `github.win11react.com/api-cache/news.json`, Wikipedia API, MetaWeather images                                                            | Preserved; news/weather service replacement is separate work.                                                                                                                                                                                         |
| `src/components/login.js`, terminal `login`                                             | Firebase project `win11react`, `auth.win11react.com`                                                                                      | Preserved; terminal labels it as inherited external login. It is not QuantumYield authentication. Lock-screen entry is a local demo action.                                                                                                           |
| `src/containers/applications/apps/discord.jsx`                                          | Win11React Discord invites and WidgetBot channel                                                                                          | Preserved; the window and join link identify it as an upstream community.                                                                                                                                                                             |
| `public/react-pwa.js`                                                                   | Google Analytics property `G-QNW5K71MZ0`, Imgur easter-egg images                                                                         | Preserved; the script is loaded by `index.html`. Property ownership and continued use require review. This patch does not claim telemetry is disabled.                                                                                                |
| Browser, terminal, Spotify, settings and store assets                                   | Google/Bing/YouTube embeds, `ipapi.co`, `dev.saavn.me`, Saavn media, Wikimedia/Microsoft and other media origins                          | Preserved; third-party names/assets are not relabelled as QuantumYield originals. Embedded destinations and sample catalogue/media data can introduce additional hosts.                                                                               |
| `src/index.js.bak`                                                                      | Legacy Sentry endpoint                                                                                                                    | Backup file, not the active `src/index.jsx` entry; unchanged.                                                                                                                                                                                         |
| `.github/workflows/pr-preview.yml`, `cla.yml`                                           | External `win11bot` preview repositories, upstream preview domain and CLA                                                                 | Unchanged. Opening a PR triggers these `pull_request_target` workflows, even for a draft. Deliver the patch on a branch without opening a PR until the maintainer reviews automation.                                                                 |
| Deployment/release workflows, `.firebaserc`, `crowdin.yml`, `src-tauri/tauri.conf.json` | Upstream Firebase/Crowdin configuration, release labels, `blueedge.win11react` WinGet identity, `com.blueedgetechno.win11react` bundle ID | Unchanged identities except desktop display title/product name; no deployment or release validation claimed.                                                                                                                                          |
| `.github/FUNDING.yml`, `CODEOWNERS`, issue templates, `CODE_OF_CONDUCT.md`              | Inherited funding, reviewer, community and governance references                                                                          | Unchanged; maintainer ownership/contact policy needs a separate configuration review. These are not established QYX channels.                                                                                                                         |

## Remaining asset dependencies

No verified official QYX master asset was present in the repository. A search for
`QYX_Curated_Transparent_PNGs.zip` and an alternate short query did not resolve the
archive; unrelated generated interface previews are not logo masters.

- Add approved light/platinum QuantumYield artwork and source provenance before
  replacing favicon/PWA/desktop icons or introducing a branded wordmark.
- Provide licensed Orbitron, Inter and JetBrains Mono webfont files if exact brand
  typography is required. Current CSS requests those families with system fallbacks
  and makes no new font-network requests.
- Review inherited wallpaper, onboarding art, application icons, sample media and
  executable icon rights/identity. Plain text replaces the boot mark; remaining
  Windows-style visuals are explicitly inherited.
- Choose the scope of any broader desktop adaptation separately. This patch does
  not implement the QYX ecosystem catalogue or migrate services.

## Validation

- Passed: changed JavaScript/JSX syntax transforms; changed JSON and Cargo TOML
  parsing; local Markdown link targets; translation-key coverage; diff whitespace
  check; formatting of changed supported files.
- Passed: `LICENSE`, `public/dycalendar.js` and `public/dycalendar.css` match the
  inspected base byte-for-byte. Lockfile comparison confirms only the two root
  project-name fields changed; dependency versions and integrity records are intact.
- Passed: fresh launcher defaults do not force the donation shortcut; existing
  desktop, pinned, taskbar and recent selections retain all five renamed entries.
  Concept Help/GitHub links and retained upstream destinations were checked in source.
- Passed: isolated React 18 / react-error-boundary checks exercise retry after a
  child render error, escaped error details, concept issue navigation, About
  attribution, dismissal/local preference/dispatch, and the first-visit disabled
  control. Redux/i18n were stubbed for these component checks; the full app was
  not mounted. The 404 page's local stylesheet and link targets were checked.
- Blocked: `npm ci --ignore-scripts --no-audit --no-fund` with Node 24.22.1 /
  npm 11.9.0 fails on the existing invalid package name `-`.
- Blocked: `npx npm@8.19.4 ci --ignore-scripts --no-audit --no-fund` gets HTTP 403
  downloading `color-name-1.1.4.tgz` from the npm registry in this environment.
  No dependency upgrades, lockfile regeneration or registry workarounds were made.
- Consequently, `npm run build` cannot find Vite. Full build, runtime integrations,
  Tauri packaging, deployment and remote-service availability remain unverified.
- Browser layout verification was also blocked: Chromium was absent and the
  Playwright download returned an invalid/truncated archive. Responsive CSS was
  reviewed, but no browser screenshot or end-to-end pass is claimed.

The patch is delivered on a branch. No PR was opened because the inherited
`pull_request_target` preview workflow attempts to create/publish a public
repository under `win11bot`; no deployment or workflow configuration was changed.
