# Gas and Oil Recruitment — staging hub

Static HTML hub for [gasandoilrecruitment.com](https://www.gasandoilrecruitment.com/). **Noindex until the owner says go live. Do not attach the live domain.**

## Deploy (Cloudflare Pages)

- Framework preset: none
- Build command: empty
- Output directory: `/`
- Production branch: review via pull request, then merge to `main` when you want the staging Pages project to update

This repo is the staging project. Keep `robots.txt` as `Disallow: /` and `_headers` `X-Robots-Tag: noindex, nofollow` until go-live is explicitly authorised.

## URLs

Extensionless paths (`/about`, `/drilling-wells-leadership-saudi-arabia`, …). Each folder holds `index.html`. `_redirects` sends `.html` aliases and leftover `/careers` `/partners` `/employers` `/vacancies` to hub URLs with 308.

## Hub map

| Path | Role |
| --- | --- |
| `/` | British international recruiter into KSA / Riyadh |
| `/drilling-wells-leadership-saudi-arabia` | Primary money page — wells leadership |
| `/oil-and-gas-recruitment-saudi-arabia` | Senior/Western specialist, not the generic head term |
| `/project-epc-leadership-saudi-arabia` | Perm-led project / EPC leadership |
| `/mining-epcm-recruitment-saudi-arabia` | Mining engineer / EPCM vacancy intent |
| `/commissioning-startup-saudi-arabia` | Permanent commissioning only (secondary) |
| `/about` `/contact` | House and NAP |

Existing GCC markets (Dubai, Abu Dhabi, Bahrain, Qatar) are named once in the footer as service area. No city clone pages. Renewables held.

## Brand contacts (do not replace)

- (0044) 203 718 9976
- info@gasandoilrecruitment.com
- UK office (affiliation): Elmtree Court, Elm Tree Road, London NW8 9JT
- Malaysian office: 40A Jalan Melati 21, Taman Sri Melati, 68100 Batu Caves, Selangor
