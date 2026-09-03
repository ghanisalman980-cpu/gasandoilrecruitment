# Gas and Oil Recruitment — staging hub

Static HTML hub for [gasandoilrecruitment.com](https://www.gasandoilrecruitment.com/). **Noindex until the owner says go live. Do not attach the live domain.**

## Deploy (Cloudflare Pages)

- Framework preset: none
- Build command: empty
- Output directory: `/`
- Production branch: review via pull request, then merge to `main` when you want the staging Pages project to update

This repo is the staging project. Keep `robots.txt` as `Disallow: /` and `_headers` `X-Robots-Tag: noindex, nofollow, nosnippet` until go-live is explicitly authorised.

## URLs

Extensionless paths (`/about`, `/drilling-wells-leadership-saudi-arabia`, …). Each folder holds `index.html`. `_redirects` sends `.html` aliases and leftover `/careers` `/partners` `/employers` `/vacancies` to hub URLs with 308. The retired generic O&G path `/oil-and-gas-recruitment-saudi-arabia` (and its `.html` alias) 308s to `/`.

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

- (0044) 203 718 9976
- info@gasandoilrecruitment.com
- London office: Elmtree Court, Elm Tree Road, London NW8 9JT · Abarrane Limited
