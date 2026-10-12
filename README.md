# Gas and Oil Recruitment

Static HTML site for **[gasandoilrecruitment.com](https://www.gasandoilrecruitment.com/)**: a UK-branded (London desk) executive and senior recruitment service placing Western oil, gas, energy and mining leaders with employers in Saudi Arabia (KSA / Riyadh). **Live and indexed.**

## Structure

| Path | Purpose |
|---|---|
| `/index.html` | Home: recruitment agencies in Saudi Arabia |
| `/executive-recruitment-saudi-arabia/` | Executive recruitment |
| `/drilling-wells-leadership-saudi-arabia/` | Drilling & wells leadership |
| `/project-epc-leadership-saudi-arabia/` | Project / EPC leadership |
| `/mining-epcm-recruitment-saudi-arabia/` | Mining & EPCM |
| `/commissioning-startup-saudi-arabia/` | Commissioning & start-up (permanent / staff only) |
| `/ar-sa/` | Arabic (RTL) page for KSA decision-makers, with Arabic contact section |
| `/about/`, `/contact/`, `/contact/sent/` | About, mandate form, form thank-you |
| `/privacy-policy/`, `/terms/`, `404.html` | Legal and error pages |
| `css/`, `js/` | Styles; `js/contact-triage.js` (contact-form triage) |
| `_headers`, `_redirects` | Cloudflare Pages headers and 301/308 redirects (legacy Drupal/WordPress paths, `.html` aliases) |
| `sitemap.xml`, `robots.txt`, `llms.txt`, IndexNow key `.txt` | Crawl/discovery files |
| `cc-consent.js`, `.well-known/security.txt` | Consent banner; security contact |

URLs use folder `index.html` with trailing slashes (`/about/`); canonicals, `og:url`, JSON-LD, sitemap and internal links all use `https://www.gasandoilrecruitment.com/…/`.

## Deploy

Cloudflare Pages, **Git-connected**. No build step (framework: none, output: `/`). Merging to `main` deploys production automatically; every other branch/PR gets a preview at `https://<branch>.gasandoilrecruitment.pages.dev`. Roll back from the Pages dashboard (Deployments → previous → Rollback) or by reverting the PR.

## Forms

The mandate form on `/contact/` posts to **FormSubmit** and lands on `/contact/sent/`. Don't change the form action or field names without a real test submission (owner approval needed).

## Consent, tracking and security

- **`cc-consent.js`** (self-hosted, loaded first in every `<head>`): cookie banner with equal-weight Accept/Reject, Google Consent Mode v2 **default denied**; GA4 runs cookieless until Accept; **WhatConverts call tracking loads only after Accept** (pages flagged `data-wc="1"`). "Cookie settings" link in the footer reopens it.
- **`_headers`**: `X-Content-Type-Options`, `Referrer-Policy`, `X-Frame-Options: DENY`, and a **`Content-Security-Policy-Report-Only`** policy (Google tag/Analytics, WhatConverts, FormSubmit, Cloudflare). Report-only: it does not block. If you add a third-party script, add its host to the CSP.
- **`.well-known/security.txt`**: security contact (renew `Expires` yearly).
- Never commit secrets, API keys or personal data.

## Brand facts (keep consistent)

London desk `+44 20 3318 2020` (`tel:+442033182020`); contact `info@gasandoilrecruitment.com`; office and other details as shown in the site footer. Locked page titles/H1s and the hub keyword map are not changed without owner sign-off.

## Contributing

All changes via **pull request to `main`** (no direct pushes). Check the PR's Cloudflare preview (pages 200, form action unchanged, consent banner, `/ar-sa/`) before merging. Squash-merge, then delete the branch.
