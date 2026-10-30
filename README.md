# QuantumYield Concept

A browser desktop concept in development by **QuantumYield**, derived from
[Win11React](https://github.com/blueedgetechno/win11React). This repository adapts
an existing React desktop simulation; it is not a production operating system or
evidence of released QuantumYield services.

## Current scope

The inherited implementation includes a desktop, launcher, taskbar, movable app
windows, settings, a simulated file explorer and terminal, and sample apps such
as Calculator, Notepad and Whiteboard. Some entries are placeholders, simulations
or embedded third-party sites. Presence in the launcher does not establish a
working integration. The lock-screen entry button opens the demo without
authenticating a user.

The QuantumYield adaptation currently establishes concept identity in project
metadata, About, startup, error recovery and documentation. The wider Windows-style
interface and inherited app assets remain under review. No wallet, custody,
payments, blockchain or AI service is claimed as implemented by this patch.

## Visual direction

The affected identity and status surfaces use **10 Obsidian Platinum**: near-black
and graphite surfaces, platinum text, fine neutral borders and restrained
champagne focus indicators. The intended typefaces are Orbitron, Inter and
JetBrains Mono; system fallbacks are used when those fonts are unavailable.

No verified official QYX logo master or font files are bundled by this change.
QuantumYield appears as plain concept text, not a reconstructed wordmark. Inherited
favicons, app icons, wallpapers and onboarding illustrations are not QuantumYield
original artwork. See [the dependency and asset record](docs/concept-identity-patch.md).

## Running locally

The web app uses React 18, Redux, Vite 3, SCSS and Tailwind. Its existing scripts are:

```sh
git clone https://github.com/nykeybanks/patent_2026.10.26_concept.git
cd patent_2026.10.26_concept
npm ci
npm start
```

Use the local URL printed by Vite. For a static build:

```sh
npm run build
```

Vite writes to `build/`. Existing root-relative resource paths, including the 404
page, assume hosting at a domain root; subdirectory hosting needs a separate path
review. These commands describe the repository scripts, not a verified deployment.
The inherited dependency tree currently fails installation with npm 11 because
of the package named `-`. See the [validation record](docs/concept-identity-patch.md#validation)
for the attempted npm 8 check and environment limitations.

Inherited workflows, Tauri packaging, Crowdin and hosting configuration still
refer to upstream services or release identities. They are not deployment
instructions for this concept. In particular, the PR preview workflow targets
the external `win11bot` account. Review those configurations before enabling
automation, opening a PR or publishing a build. No QuantumYield production URL,
Docker image, desktop release or package-manager distribution is established here.

## Dependencies and contributions

Some inherited apps use external resources, including the Win11React store and
news feed, Firebase login, Discord/WidgetBot, search, media and weather providers.
Their availability and ownership are not established for QuantumYield. The local
error and 404 screens do not require upstream scripts, styles or QR images.

Use this repository's [issues](https://github.com/nykeybanks/patent_2026.10.26_concept/issues)
for ordinary concept bugs and proposals. See [CONTRIBUTING.md](CONTRIBUTING.md),
[SECURITY.md](SECURITY.md) and the
[change/dependency record](docs/concept-identity-patch.md).

## Upstream credit and license

This concept is based on **Win11React**, created by **blueedgetechno**, with work
by **andrewstech** and the
[Win11React contributors](https://github.com/blueedgetechno/win11React/graphs/contributors).
The upstream project asks redistributors to credit its original GitHub page and
team; those credits are retained here and in the About screen.

The repository's [LICENSE](LICENSE) contains **CC0 1.0 Universal** and remains
unchanged. Existing third-party copyright and license notices, including the
dyCalendar MIT notices by Yusuf Shakeel, remain in their source files. Dependencies
and third-party assets retain their own notices and rights; they are not presented
as original QuantumYield intellectual property.

This project is not affiliated with Microsoft, is not Microsoft's operating system
and is not a Windows 365 cloud PC. Microsoft, Windows and other demonstrated
products retain their respective trademarks and ownership. The repository name
does not establish patent or trademark registration, ownership or clearance.
