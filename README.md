# Gas and Oil Recruitment

Static HTML hub for [gasandoilrecruitment.com](https://www.gasandoilrecruitment.com/). Live / indexable.

## Deploy (Cloudflare Pages)

- Framework preset: none
- Build command: empty
- Output directory: `/`
- Production branch: `main` (Cloudflare Pages redeploys on merge)

## URLs

Extensionless paths (`/about`, `/drilling-wells-leadership-saudi-arabia`, …). Each folder holds `index.html`. `_redirects` keeps `.html` aliases as 308 and 301s retired Drupal/WordPress paths (plus trailing-slash and `/gasandoilrecruitment/` twins) onto hub URLs. Leftover `/partners` still 308s to `/about`. The retired generic O&G path `/oil-and-gas-recruitment-saudi-arabia` 301s to `/` (its `.html` alias stays 308).

Canonical, `og:url`, JSON-LD, `sitemap.xml` `<loc>` values, `robots.txt` `Sitemap:`, and `llms.txt` links use `https://www.gasandoilrecruitment.com/` (extensionless). Contact email stays `info@gasandoilrecruitment.com`. Office remains Headquarters — London (no Malaysia).

IndexNow key file is not in this repo yet — add after the custom domain is attached.

## Hub map (locked 3 Sep 2026)

| Path | Primary query |
| --- | --- |
| `/` | international recruitment agencies in saudi arabia |
| `/executive-recruitment-saudi-arabia` | executive recruitment saudi arabia |
| `/drilling-wells-leadership-saudi-arabia` | drilling superintendent recruitment saudi arabia |
| `/project-epc-leadership-saudi-arabia` | oil and gas project director recruitment saudi arabia |
| `/mining-epcm-recruitment-saudi-arabia` | mining engineer and EPCM recruitment Saudi Arabia |
| `/commissioning-startup-saudi-arabia` | commissioning manager recruitment saudi arabia (perm / staff only) |
| `/about` `/contact` | House and NAP |

Existing GCC markets (Dubai, Abu Dhabi, Bahrain, Qatar) are named once in the footer as service area. No city clone pages. Do not target the generic “oil and gas recruitment agencies in saudi arabia” head term.

## Brand contacts (do not replace)

- (0044) 203 318 2020
- info@gasandoilrecruitment.com
- Office: Headquarters — London, United Kingdom · Elmtree Court, Elm Tree Road, London NW8 9JT · Abarrane Limited
