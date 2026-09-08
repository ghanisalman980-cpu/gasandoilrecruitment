# UNIVERSAL SEO + GEO + AIO RESEARCH-TO-IMPLEMENTATION PLAYBOOK

**FINAL CONSOLIDATED EDITION** — built by applying the *Final AIO GEO UNIVERSAL SEO PROMPT* (master prompt) to the complete supplied corpus of seven research/playbook documents.

**Version:** 2.0 (consolidated)
**Built:** 8 September 2026
**Corpus:** 8 supplied documents (1 master prompt + 7 research/playbook sources), which themselves synthesise ~25 underlying primary research sources (arXiv papers, peer-reviewed studies, industry audits) and stable Level-1 official guidance (Google Search Central, schema.org, W3C/WHATWG, WCAG, web.dev).
**Nature:** Generic, reusable, evidence-traceable implementation specification. Not tied to any website, CMS, framework, industry, or market. The deliverable is designed so a website-building AI can implement it directly against any repository.

> **Central operating principle (master prompt §4):** every meaningful research finding travels the full chain SOURCE → EVIDENCE → CLAIM → CONFIDENCE → FINDING → SEO/GEO/AIO IMPLICATION → DECISION → WEBSITE REQUIREMENT → TECHNICAL/CONTENT IMPLEMENTATION → ATOMIC BUILD TASK → VALIDATION TEST → PASS/FAIL CRITERION. Nothing in this playbook stops at "research suggests X is important."

> **Position-#1 disclaimer (master prompt §2):** Position #1 in organic search and inclusion/citation in AI answers are the optimisation *targets*. No credible methodology can guarantee them: ranking and answer selection are controlled by external systems and change over time. This playbook builds the strongest evidence-supported website reasonably possible to *maximise the probability* of outperforming competing results.

> **How this consolidation was produced.** Seven AI systems (the "UNIVERSAL" playbook, ChatGPT, Claude, Genspark, Perplexity ×2, Grok) independently executed the same master prompt against overlapping research corpora. This edition merges them: every source was access-audited (Part 2), duplicate underlying studies were de-duplicated so repeated citations do not inflate evidence weight, evidence entries were merged into one ledger (Part 6), disagreements between the seven executions were resolved in the Conflict Register (Part 7), and the strongest/most specific version of each requirement was retained. Where the seven executions converged, confidence was raised; where they diverged, the resolution is documented.

---

## PART 1 — EXECUTIVE SUMMARY

**What this document is.** A universal, evidence-traceable specification that converts the supplied research corpus into concrete website implementation instructions for a coding/building AI. It is deliberately generic: every rule is framework-neutral, and every site-dependent decision is expressed as decision logic the implementing AI must execute after auditing the target repository. It covers three distinct disciplines that must never be merged invisibly:

- **SEO** — traditional organic search optimisation (crawling, indexing, relevance, architecture, content quality, technical health, page experience, authority/trust).
- **GEO** — Generative Engine Optimisation: improving the probability that website information is discovered, understood, retrieved, synthesised, referenced, cited, attributed, and included in generative answers (ChatGPT, Perplexity, Gemini, Copilot, Claude-style retrieval).
- **AIO** — AI Overview Optimisation: optimisation specifically for Google AI Overviews and comparable AI-generated search-result summaries, analysed separately from general GEO. Good organic rankings do **not** guarantee AI Overview inclusion; good GEO does **not** guarantee organic rankings; inclusion in one AI system does **not** predict inclusion in another.

**The eight-stage visibility pipeline (consensus of all seven executions).** Treat visibility as a multi-stage systems problem, never a checklist of isolated tricks:

1. **Crawlability / renderability** — content must be technically accessible to crawlers, browsers, and retrieval systems.
2. **Indexability / canonical & entity resolution** — the correct URL and entity must be unambiguous.
3. **Retrieval competitiveness** — the page/passage must be strong enough to enter the candidate set for the query.
4. **Context selection** — a generative system must select the page/passage into its evidence context.
5. **Citation selection** — the system chooses to cite/attribute the source.
6. **Answer absorption** — the source's facts, evidence, wording, or structure actually shape the generated answer (distinct from being cited: ChatGPT cites ~6.9 sources/prompt with ~4.2× deeper per-citation influence; Google AIO attaches ~12 sources/prompt at shallow mean influence 0.058; Perplexity ~16).
7. **Prominence / representation** — the brand/entity/product must be represented accurately and materially.
8. **Human outcome** — visibility must ultimately be measured against clicks, leads, sales, subscriptions, or another site-specific objective.

Never optimise a downstream stage by degrading an upstream stage (e.g., an "AI-formatting" rewrite must never reduce topical relevance, retrieval competitiveness, readability, accessibility, or trust).

**The twelve load-bearing findings the build rests on** (full evidence trail in Part 6; confidence classes VALIDATED / PROVISIONAL / HYPOTHESIS / EXPERIMENTAL per Part 4):

1. **Retrieval is the gate; citation is the bottleneck.** Generative engines are RAG pipelines (retrieve → rerank → synthesise → cite). Content never crawled, indexed, and retrieved is never cited. Traditional SEO foundations are *prerequisites* for GEO/AIO, not competitors to them. On-page "GEO scores" were uncorrelated with AI discovery in the Discovery Gap study, while classic authority signals (referring domains r=+0.319, community presence r=+0.395) predicted it. (VALIDATED)
2. **Organic rank ≠ AI citation.** AI engines cite a materially different domain set than Google's top 10: mean overlap 4.0% (GPT-4o), 11.1% (Gemini 2.5 Flash), 12.6% (Claude 4.5 Sonnet), 15.2% (Perplexity Sonar Pro); all pairwise differences p<0.001 over 1,000+ queries. For Google AI Overviews specifically, 53% of cited domains do not appear in the organic top 10 and 27% are absent from the top 100. Engineer and measure SEO, GEO, and AIO as separate disciplines. (VALIDATED)
3. **Content-side GEO tactics have real but conditional causal effects — with hard boundaries.** Adding citations, quotations, and statistics lifted generative visibility 30–40% (position-adjusted) in the foundational controlled experiments; fluency/readability 15–30%; keyword stuffing *reduced* visibility. But the 45-study critical survey rejects "GEO boosts visibility 40%" as a general claim: gains are conditional on already being retrieved, only 3 of 54 C-SEO method-domain combinations were significantly positive under competition, and citation-oriented body rewrites can *impair upstream retrieval* (−9% top-20 presence in SAGEO Arena). The two most reproducible levers across 252,000 controlled trials are **topical relevance and retrieved/context position**. Build evidence-dense, clearly structured, retrieval-optimised pages; never sacrifice topical relevance for "AI formatting." (VALIDATED, bounded)
4. **Engines differ systematically — optimise for a portfolio, not one engine.** AI engines privilege earned/third-party media (51.2% aggregate vs Google's 40.7%) and suppress social content (12.5% vs 33.6%); Claude is the most earned-media-selective (1.1% social; 85.9% earned on consideration queries; 97.8% institutional sources in health), Perplexity the most retrieval-dependent and least quality-selective, ChatGPT the most prior-reliant yet the deepest absorber per citation, Gemini the most brand-heavy on transactional queries (68.2%). Cross-platform source overlap is only ~0.12 Jaccard. No finding from one engine generalises to another without evidence. (VALIDATED)
5. **Google AI Overviews are their own discipline with direct measurement evidence.** AIO activation is ~13.7% of trending queries overall but ~64.7% for question-phrased queries; AIO cites quality-filtered pages (mean GEO-16 score 0.687, 72% citation rate at that tier; strongest pillar correlations: Metadata & Freshness r=0.68, Semantic HTML r=0.65, Structured Data r=0.63); AIO source sets churn ~2.5× faster than organic (18% vs 45% two-month page overlap); AIO is a breadth engine (~12 citations/prompt, low per-source influence) — being cited ≠ shaping the answer; ~11% of AIO atomic claims were insufficiently supported by their citations, so exact, verifiable claim support is a differentiator. (VALIDATED/PROVISIONAL per item — see Part 10)
6. **Freshness matters more in AI answers than in Google.** Median cited-content age: Claude 62.3 days, GPT-4o 79.8, Perplexity 90.4, Google 130.4 (consumer electronics); the gap widens to 148 vs 492.9 days (Claude vs Google) in automotive. Dated, maintained, machine-readable content (`datePublished`/`dateModified`, visible dates, real `<lastmod>`) is an AIO/GEO requirement — but never cosmetic date-freshening. (VALIDATED)
7. **Structure is citation infrastructure — semantic structure, not cosmetic formatting.** High-influence cited pages are longer, more structured, and richer in extractable evidence — definitions (+57% influence), numerical facts (+62%), comparisons (+55%), procedural steps (+41%); h2/h3 usage carried 2.3–3.3× odds of ChatGPT visibility in a 1,508-site regression; structural engineering showed +17.3% citation improvement across 6 platforms. But purely cosmetic formatting edits were negligible in 252,000 controlled trials, and Q&A/FAQ formatting alone *reduced* absorption (−5.7%). The defensible line: heading hierarchy, chunked sections, tables/lists for genuinely structured data, conclusion-first answer blocks — yes; reformatting content into Q&A shapes or visual decoration for engines — no. (VALIDATED for semantic; REFUTED for cosmetic)
8. **Structured data is a visibility correlate worth implementing accurately.** FAQPage (OR≈13.3) and Product (OR≈4.1) JSON-LD were the strongest predictors of ChatGPT visibility in a controlled logistic regression — correlational, but convergent with Microsoft/Google statements that schema feeds their AI answers. Implement schema for factual accuracy and search eligibility first; treat AI-citation uplift as probable, not proven. Schema must mirror visible content exactly. (PROVISIONAL for AI effect; MUST on Level-1 grounds)
9. **Entity recognition is table stakes; discovery is earned.** LLMs recognised named products 99.4% (ChatGPT) / 94.3% (Perplexity) of the time but surfaced them in unprompted discovery queries only 3.3% / 8.3%. 20% of the world's 80 largest brands were completely invisible in AI answers; average brand visibility ~4%; 58% of brand mentions came from training data, not live retrieval. For popular entities, model priors dominate (Kendall τ=0.911 under perturbation); for niche entities, retrieval dominates (τ collapses to 0.556) — unknown brands can win fast through retrieval-optimised content; famous brands defend through the authoritative public record. (VALIDATED)
10. **Manipulation exists and will be defended against.** Adversarial text sequences can hijack LLM recommendations; as few as 250 poisoned documents can backdoor models up to 13B parameters. These are *threat* findings: engines are incentivised and increasingly able to filter manipulative patterns. This playbook mandates compliant, human-first implementations only and bans the entire adversarial class. (VALIDATED as risk)
11. **On-site cannot do it all.** Only ~2.9% of 149,912 measured citations pointed to the brand's own domain; ranked "best-X" listicles were the single most-cited format (21.0% of all citations); earned media is the AI engines' preferred source class. The site's job is to be citable and to host citable assets (original research, statistics pages, definitive guides, tools); off-site earned authority is a parallel programme the site supports but cannot substitute for. (VALIDATED)
12. **Nothing is guaranteed, and measurement is part of the build.** Evidence gradations from the 45-study survey: HIGH that retrieved content can causally alter its citation, that relevance/position dominate, and that engines differ and drift; MODERATE that extractable evidence/structure helps; LOW that any white-hat GEO durably improves organic discoverability cross-engine; VERY LOW that citations predict clicks/conversions. Day-to-day source overlap within one engine is only ~0.34–0.42 Jaccard, and 57.8% of ChatGPT repetitions never even activate web search — so this playbook ships a measurement harness (fixed prompt panels, ≥7–8 repetitions, multi-engine sampling, activation-rate denominators) as a first-class build requirement, not an afterthought. (VALIDATED)

**Corpus completeness:** B — SUBSTANTIALLY SUFFICIENT (Part 4). Strong on GEO/AI-citation evidence; thinner on official search-engine documentation, so Level-1 requirements are anchored to stable, long-standing official guidance and flagged as such.

**How to use this document.** Parts 2–12 are the evidence base. Parts 13–30 are the normative specifications. Parts 31–34 convert specifications into prioritised, atomic build tasks. Part 35 is a self-contained prompt to hand to the website-building AI. Parts 36–39 define validation and monitoring. Parts 40–43 provide traceability, weak-claim dispositions, uncertainties, and missing information.

---

## PART 2 — SOURCE ACCESS REGISTER

Status labels per master prompt §6: FULLY ACCESSIBLE / PARTIALLY ACCESSIBLE / INACCESSIBLE / ACCESS REQUIRES AUTHENTICATION / ACCESS UNCERTAIN.

### 2.1 Supplied corpus (D-series) — the documents this consolidation was built from

| ID | Source | Type | Author / Origin | Date | Status | Relevance | Authority | Limitations |
|----|--------|------|-----------------|------|--------|-----------|-----------|-------------|
| D1 | UNIVERSAL-SEO-GEO-AIO-PLAYBOOK.md | Completed 43-part playbook (Markdown, ~189K chars) | "UNIVERSAL" AI execution of the master prompt | 2026-09-08 | FULLY ACCESSIBLE | HIGH — most complete execution; 23-source register; 32-entry evidence ledger; 10 conflicts resolved | L2 synthesis | Single-agent synthesis; figures of underlying PDFs read as captions only |
| D2 | Chat GPT — Universal SEO/GEO/AIO Research-to-Implementation Playbook 2026.docx | Completed 43-part playbook (DOCX, ~83K chars extracted) | ChatGPT execution of the master prompt | 2026 | FULLY ACCESSIBLE (text + 30 tables extracted via python-docx) | HIGH — 8-stage pipeline model; 60 atomic tasks; decision rules & data structures appendix | L2 synthesis | DOCX text layer only; any embedded images not analysed (none material) |
| D3 | Claude — SEO-GEO-AIO-Playbook-v1.md | Completed 43-part playbook (Markdown, ~113K chars) | Claude execution of the master prompt | 2026 | FULLY ACCESSIBLE | HIGH — independent evidence weighting; L-series fetched Level-1 sources; distinct task granularity | L2 synthesis | Single-agent synthesis |
| D4 | Genspark — UNIVERSAL-SEO-GEO-AIO-PLAYBOOK.md | Completed 43-part playbook (Markdown, ~115K chars) | Genspark execution of the master prompt | 2026 | FULLY ACCESSIBLE | HIGH — independent conflict resolutions; condensed component matrix; 16 detailed tasks | L2 synthesis | Single-agent synthesis |
| D5 | Perplexity — Generative Engine Optimization Research Synthesis.docx | Research synthesis (DOCX, ~9.5K chars extracted) | Perplexity execution (research mode) | 2026 | FULLY ACCESSIBLE (text + 2 tables extracted) | HIGH — closest to raw evidence; quantified study results with CIs | L2/L3 synthesis | Compressed; not a full 43-part execution |
| D6 | Perplexity — GEO/AEO Practitioner Playbook.docx | Practitioner playbook (DOCX, ~8.6K chars extracted) | Perplexity execution (practitioner mode) | 2026 | FULLY ACCESSIBLE (text + 2 tables extracted) | HIGH — 5-phase operating system; 30-60-90 rollout; per-engine tactic table; action/priority matrix with odds ratios | L3 synthesis | Compressed; not a full 43-part execution |
| D7 | GRok bot — Final AI Universal SEO-GEO-AIO Implementation Playbook.docx | Completed implementation playbook (DOCX, ~226K chars extracted) | Grok execution of the master prompt | 2026 | FULLY ACCESSIBLE (text + 6 tables extracted) | HIGH — largest execution; extensive task detail | L2 synthesis | DOCX extraction appends tables out of reading order; figures not analysed |
| D8 | Final AIO GEO UNIVERSAL SEO PROMPT.docx | The governing master prompt (DOCX, ~44K chars extracted) | User-supplied specification | 2026 | FULLY ACCESSIBLE | GOVERNING SPEC — defines the 93-section operating rules and 43-part deliverable structure | — | — |

**Audit notes.** Every supplied document was opened and read in full (DOCX files via python-docx text/table extraction; Markdown files read directly). No supplied document required authentication. No supplied document was silently omitted. The seven executions overlap heavily in their underlying research corpora; Part 2.2 de-duplicates the underlying studies so that a paper cited by four playbooks is weighted once, not four times.

### 2.2 Underlying evidence corpus (S-series) — primary/secondary sources cited inside the D-series, de-duplicated

These sources were NOT supplied directly to this consolidation; they were accessed and analysed by the D-series executions (principally D1, which read them at full text; D2–D7 cite overlapping subsets). Their accessibility status is inherited from the D-series registers and noted below. Authority tiers per master prompt §8 (L1 primary/official → L5 opinion).

| ID | Source | Type / Reference | Author / Publisher | Date | Access (via D-series) | Authority | Freshness | Limitations |
|----|--------|------------------|--------------------|------|-----------------------|-----------|-----------|-------------|
| S01 | GEO: Generative Engine Optimization | Peer-reviewed conf. paper, arXiv:2311.09735 | Aggarwal et al. / KDD 2024 | v3 2024-06 | FULLY ACCESSIBLE (D1 read 12pp + tables) | L2 | CURRENT BUT EVOLVING | Simulated GE (GPT-3.5 + Google top-5); LLM-judged metrics; 2024-era engines |
| S02 | Navigating the Shift: Web Search vs Generative AI ("Toronto audit") | Peer-reviewed workshop paper, arXiv:2601.16858 | Chen, Wang, Chen, Koudas / Univ. of Toronto; EDBT/ICDT 2026 | 2026 | FULLY ACCESSIBLE | L2 | CURRENT | 1,516 queries; consumer verticals; single time window |
| S03 | Generative Engine Optimization: How to Dominate AI Search | Preprint, arXiv:2509.08919 | Chen et al. / Univ. of Toronto | 2025-09 | PARTIALLY ACCESSIBLE (full text; ~46 figures image-only) | L2 (preprint) | CURRENT | Vendor support disclosed (ktau.ai) — prescriptive sections down-weighted; descriptive stats only |
| S04 | From Citation Selection to Citation Absorption | Preprint, arXiv:2604.25707v2 | Zhang, He, Yao | v2 2026-04 | FULLY ACCESSIBLE (PDF; HTML mirror timed out — redundant) | L2 (preprint) | CURRENT | 602 prompts, 21,143 citations, 72 features; descriptive; single dataset |
| S05 | A Critical Survey of Generative Engine Optimization (45 studies) | Critical survey, arXiv:2607.14035 | Olivier Martinez / Sciences Po | 2026-07 | FULLY ACCESSIBLE | L2 (survey) | CURRENT | Single-author interpretive judgements |
| S06 | What Generative Search Engines Like (AutoGEO) | Preprint, arXiv:2510.11438 | Wu et al. / CMU | 2025-10 | FULLY ACCESSIBLE (30pp) | L2 (preprint, WIP) | CURRENT | LLM-derived rules risk circularity |
| S07 | AI Answer Engine Citation Behavior: GEO-16 in B2B SaaS | Preprint, arXiv:2509.10762 | Kumar & Palkhouski / UC Berkeley + Wrodium | 2025-09 | FULLY ACCESSIBLE (12pp) | L2–L3 | CURRENT | Observational; English B2B SaaS only; industry-affiliated; **includes direct Google AIO measurement (598 citations)** |
| S08 | Role-Augmented Intent-Driven G-SEO (RAID) | Preprint, arXiv:2508.11158 | Chen et al. / USTC | 2025-08 | FULLY ACCESSIBLE (15pp) | L2 (preprint) | CURRENT | Simulated GSE; no significance tests |
| S09 | A small number of samples can poison LLMs of any size | Lab research report | Anthropic + UK AISI + Alan Turing Institute | 2025-10 | FULLY ACCESSIBLE | L2 | CURRENT | Narrow DoS backdoor; ≤13B models; threat evidence, not a tactic |
| S10 | The Discovery Gap: LLM Discoverability of Product Hunt Startups | Academic study, arXiv:2601.00912 | A. P. Sharma / IIT Patna | 2025-12 | FULLY ACCESSIBLE (20pp) | L2–L3 | CURRENT | Two models only; startup niche; 2,240 queries × 112 startups |
| S11 | Manipulating LLMs to Increase Product Visibility | Preprint, arXiv:2404.07981 | Kumar & Lakkaraju / Harvard | v2 2024-09 | FULLY ACCESSIBLE (13pp) | L2 | CURRENT BUT EVOLVING | Adversarial attack research — defence-side relevance only |
| S12 | C-SEO Bench: Does Conversational SEO Work? | Peer-reviewed benchmark, arXiv:2506.11097 | Puerto et al. / NeurIPS 2025 D&B | 2025-06 | FULLY ACCESSIBLE (13pp) | L2 | CURRENT | >1,900 queries, 16,360 docs, 4 models; benchmark setting |
| S13 | Mind the Invisibility Gap: 80 Leading Global Brands in LLM Answers | Industry study (uploaded PDF + SSRN 5698748 duplicate) | Niall Cook / Geometriqs | ~2025-11 | FULLY ACCESSIBLE (duplicate de-weighted) | L3–L4 | CURRENT | Synthetic prompts; English-only; 80 mega-caps; no inferential stats |
| S14 | The Impact of JSON-LD Metadata on ChatGPT Visibility | Academic working paper (uploaded PDF) | Peter Schanbacher / Hochschule Furtwangen | 2025 | FULLY ACCESSIBLE (tables 1–4) | L3 | CURRENT | Observational; German real estate only (n=1,508); pseudo-R²≈0.17 |
| S15 | What Gets Cited: Competitive GEO in AI Answer Engines | Peer-reviewed (SIGIR '26), arXiv:2605.25517 | Vishwakarma, Kumar, Jamidar / Sprinklr | 2026-05 | FULLY ACCESSIBLE (5pp) | L2 | CURRENT | 252,000 controlled trials; two-document testbed; brand-anonymised |
| S16 | Structural Feature Engineering for GEO (GEO-SFE) | Preprint, arXiv:2603.29979 | Yu, Yang, Ding | 2026-03 | FULLY ACCESSIBLE (10pp) | L2–L3 | CURRENT | Structure-only lens; LLM-judged components |
| S17 | GEO at Scale: Brand Visibility Across AI Search Engines | Vendor white paper, arXiv:2606.20065 | Pratyush Kumar / Ranqo (equity declared) | 2026-06 | FULLY ACCESSIBLE (14pp) | L3–L4 | CURRENT | 102 brands, 102,025 responses, 149,912 citations; vendor-produced; observational |
| S18 | Authority Signals in Claude AI Health Citations | Descriptive study, arXiv:2605.23921 | Jacques, Datuowei, Quaye | 2026-05 | FULLY ACCESSIBLE (8pp) | L3 | CURRENT | Single vertical (health), single engine; 3,075 questions → 10,038 citations |
| S19 | Top 12 arXiv Papers for GEO in 2026 | Practitioner roundup | AEO Vision (vendor blog) | 2026 | FULLY ACCESSIBLE | L4–L5 | CURRENT | Literature map only; claims verified against primaries |
| S20 | Four Engines. One Thousand Queries. The Toronto Audit | Trade-press writeup | Everything PR editorial | 2026-06 | FULLY ACCESSIBLE | L3 (report of S02) | CURRENT | Secondary; weighted as S02 |
| S21 | Kirsten et al. — AIO domain overlap / churn study | Peer-reviewed (ACL 2026 Findings), catalogued by S05 | Kirsten et al. | 2026 | INDIRECT (via S05 catalogue) | L2 | CURRENT | 4,706 queries, US+DE; not directly read — values quoted via S05 |
| S22 | Xu et al. — AIO activation & claim-fidelity study | Research study, catalogued by S05 | Xu et al. | 2026 | INDIRECT (via S05 catalogue) | L2 | CURRENT | 55,393 trending queries; 98,020 atomic claims audited |
| S23 | Schulte et al. — AI-answer source stability / search-activation study | Research study, catalogued by S05 | Schulte et al. | 2025–26 | INDIRECT (via S05 catalogue) | L2 | CURRENT | Daily source Jaccard 0.34–0.42; repetition protocol |
| S24 | SAGEO Arena (retrieval-impairment arena) | Large arena study, catalogued by S05 | Kim et al. | 2026 | INDIRECT (via S05 catalogue) | L2 | CURRENT | 171,003 docs, 2,700 queries |
| S25 | Liu et al. — citation fidelity audit | Research study (2023), catalogued by S05 | Liu et al. | 2023 | INDIRECT (via S05 catalogue) | L2 | LEGACY-ADJACENT (still the fidelity baseline) | Only 51.5% of generated sentences fully supported |
| S26 | Pew / Search Engine Land (Mail Online CTR) / YouGov / Forrester | Third-party reported metrics | Various | 2024–26 | INDIRECT (quoted by S13/S03/S16) | L4 | CURRENT BUT EVOLVING | Stakes context only; never implementation rules |
| L1 | Level-1 official guidance (Google Search Central, Bing Webmaster, schema.org, W3C/WHATWG HTML, W3C/WAI WCAG 2.2, web.dev Core Web Vitals) | Official documentation | Google / Microsoft / W3C / WHATWG | current | NOT SUPPLIED AS DOCUMENTS — anchored as stable, long-standing official guidance; D3 (Claude) fetched a subset live (its "L-series") | L1 | CURRENT | Must be re-validated against current official docs at implementation time (Part 43) |

---

## PART 3 — SOURCE ACCESS FAILURES

| # | Affected source | Inaccessible material | Cause | Potential impact | Information likely missing | Action required |
|---|-----------------|-----------------------|-------|------------------|----------------------------|-----------------|
| 1 | S03 (arXiv:2509.08919) | ~46 figures (images) | PDF text extraction captures captions/prose, not pixels | LOW — quantitative content of figures was stated in adjacent text/tables | Exact curve shapes only | None |
| 2 | S04 HTML mirror (arxiv.org/html/2604.25707v2) | Full-text HTML rendering | Fetch timeout during D1's execution | None — identical PDF fully analysed | None (duplicate content) | None |
| 3 | S21–S25 (Kirsten, Xu, Schulte, SAGEO Arena, Liu) | Full primary texts | Catalogued by S05 (critical survey), not supplied directly | LOW-MODERATE — the specific values used here (53%/27% AIO overlap; 13.7%/64.7% activation; Jaccard 0.34–0.42; −9%/−16%/−6% retrieval impairment; 51.5% fidelity) are as reported by S05 and were cross-checked for consistency across D1–D7 | Full methodology detail | Optional: supply the five primary PDFs to upgrade these from INDIRECT to direct |
| 4 | L1 official documentation | Dated document snapshots | Not supplied as documents | LOW — anchored requirements are restricted to long-stable norms (crawlability, canonicals, robots, sitemaps, CWV thresholds, WCAG) | Current-day wording of official guidance | At implementation time, validate against current official docs (Part 43) |
| 5 | D2/D5/D6/D7 (DOCX sources) | Embedded images, if any | DOCX text/table extraction | None material — all quantitative content lived in text/tables, which were extracted | — | None |

No supplied source is INACCESSIBLE, AUTH-LOCKED, or UNCERTAIN. No source was silently omitted. Two supplied items inside the D-series corpora were duplicates (SSRN 5698748 ≡ Invisibility Gap PDF; a second listing of arXiv:2311.09735) and were de-weighted accordingly.

---

## PART 4 — CORPUS COMPLETENESS ASSESSMENT

**Classification: B — SUBSTANTIALLY SUFFICIENT.**

The corpus supports robust conclusions and a full implementation specification for GEO, AIO, and AI-answer-engine optimisation, and for the SEO foundations that gate them. Seven independent executions of the same master prompt converged on the same core findings (retrieval gate, organic≠AI citation, earned-media bias, freshness, semantic structure, schema correlation, entity-fame split, anti-manipulation, measurement harness), which materially raises confidence in the synthesis. Identifiable gaps:

1. **No Level-1 documents were supplied directly** (no Google Search Central, Bing Webmaster, schema.org, W3C, or web.dev documents). SEO/technical requirements resting on official guidance are marked `LEVEL-1 ANCHOR (stable official guidance)` and limited to long-stable, well-documented norms (crawlability, indexability, canonicals, robots, sitemaps, structured-data validity, Core Web Vitals thresholds, WCAG). They are the corpus-independent substrate the corpus itself presupposes. D3 (Claude) fetched a subset live; all Level-1 anchors must be re-validated at implementation time.
2. **Google AI Overviews evidence is present but partly indirect in authorship.** The corpus DOES contain direct AIO measurement: S07's GEO-16 audit includes Google AIO as a measured engine (598 citations, quality thresholds), S04's absorption dataset includes Google AI Overview/Gemini as a platform, and S05 catalogues two AIO-specific studies (S21 Kirsten — domain overlap/churn; S22 Xu — activation rates/claim fidelity). What remains missing is any *Google-authored* primary document on AIO source selection. AIO claims are tagged VALIDATED/PROVISIONAL accordingly (Part 10), and Part 37 ships an observational validation plan rather than deterministic tests.
3. **No site-specific inputs** (no GSC/Ahrefs exports, no crawl, no query list, no competitor set) — by design, since the playbook is universal. The decision logic for producing them is specified (Parts 13, 19, 31, 35).
4. **Engines studied are 2024–mid-2026 versions.** All AI-platform findings are classified CURRENT BUT EVOLVING (Part 5); the monitoring plans (Parts 37–38) exist precisely because these systems drift.
5. **Vertical skew.** Several studies are consumer-vertical (S02, S10, S14 real estate, S18 health, S07 B2B SaaS). Domain-dependence of tactics is itself a validated finding (EV-05), so per-site measurement is mandatory, not optional.

**Finding classes used throughout:** **VALIDATED** (convergent evidence across ≥2 independent sources, or one controlled study + official guidance) · **PROVISIONAL** (single credible study, or consistent but correlational evidence) · **HYPOTHESIS** (plausible, mechanism-supported, untested) · **EXPERIMENTAL** (ship only behind the experimentation framework, Part 31/Appendix A).

---

## PART 5 — SOURCE AUTHORITY / FRESHNESS ASSESSMENT

Authority tiers per master prompt §8; freshness classes per §9: CURRENT / CURRENT BUT EVOLVING / UNCERTAIN / LEGACY / SUPERSEDED.

| ID | Authority tier | Why | Freshness | Notes |
|----|----------------|-----|-----------|-------|
| S01 (GEO, KDD'24) | L2 peer-reviewed | Controlled experiments, 10k-query benchmark, real-engine validation | CURRENT BUT EVOLVING | 2024 engines; direction corroborated by S05/S06/S12/S15 |
| S02 (Toronto audit) | L2 peer-reviewed workshop | Largest multi-engine audit in corpus; 1,516 queries; bootstrap validation | CURRENT | 2026-era models; consumer verticals |
| S03 (Dominate AI Search) | L2 preprint | Large-scale comparative study | CURRENT | Vendor COI disclosed — descriptive findings convergent with S02; prescriptive sections down-weighted |
| S04 (Selection→Absorption) | L2 preprint | 602 prompts × 3 platforms incl. Google AIO; 72 features | CURRENT | Descriptive by design |
| S05 (Critical Survey) | L2 survey | 45 studies, explicit evidence hierarchy | CURRENT | Covers Nov 2023–Jul 2026; conflict-resolution anchor |
| S06 (AutoGEO) | L2 preprint (WIP) | Systematic rule induction + benchmarks | CURRENT | LLM-circularity risk |
| S07 (GEO-16) | L2–L3 preprint | 1,100 URLs, 1,702 citations, **Google AIO directly measured** | CURRENT | Observational; B2B SaaS |
| S08 (RAID G-SEO) | L2 preprint | Intent-driven optimisation + eval rubric | CURRENT | Simulated GSE |
| S09 (Anthropic poisoning) | L2 frontier-lab + national institutes | 72 trained models, controlled poisoning | CURRENT | Security evidence, not ranking evidence |
| S10 (Discovery Gap) | L2–L3 | 2,240 queries × 112 startups | CURRENT | Two engines only |
| S11 (STS manipulation) | L2 preprint (Harvard) | Controlled adversarial experiments | CURRENT BUT EVOLVING | Attack research — DO-NOT evidence |
| S12 (C-SEO Bench) | L2 peer-reviewed (NeurIPS'25 D&B) | Multi-adopter competitive benchmark | CURRENT | High corrective value |
| S13 (Invisibility Gap) | L3–L4 | Transparent method, public dataset, synthetic prompts | CURRENT | Mega-caps only |
| S14 (JSON-LD ChatGPT) | L3 | n=1,508 multivariate regression, observational | CURRENT | Single country/sector |
| S15 (What Gets Cited) | L2 peer-reviewed (SIGIR'26) | 252,000 controlled factorial trials, 6 LLMs, 18 factors | CURRENT | Two-document testbed; brand-anonymised |
| S16 (GEO-SFE) | L2–L3 preprint | Structure-focused experiments, 6 platforms | CURRENT | LLM-judged components |
| S17 (GEO at Scale) | L3–L4 vendor telemetry | 102 brands, 3,508 runs, 149,912 citations, 5 engines | CURRENT | Vendor-produced; observational |
| S18 (Claude health authority) | L3 | Human-verified stratified audit | CURRENT | Health only |
| S19 (AEO Vision) | L4–L5 | Vendor roundup | CURRENT | Literature map only |
| S20 (Everything PR) | L3 secondary | Faithful reproduction of S02 numbers | CURRENT | Weighted as S02 |
| S21–S25 | L2 (indirect) | Peer-reviewed/large-N, catalogued by S05 | CURRENT | Values as reported by S05 |
| S26 (Pew/SEL/YouGov/Forrester) | L4 | Third-party reported metrics | CURRENT BUT EVOLVING | Stakes context only |
| D1–D7 | L2–L3 syntheses | Independent executions of the master prompt | CURRENT | Convergence across executions raises confidence; divergence resolved in Part 7 |

**Freshness rules applied:** (a) no pre-2023 SEO folklore is imported; (b) every AI-platform number is treated as a point-in-time measurement of named model versions; (c) where 2026 sources (S05, S02) qualify 2024 findings (S01), the newer qualification wins (Conflict C1); (d) a secondary SEO article never overrides explicit current official guidance.

**Evidence weighting rules (consensus):** current official documentation overrides practitioner folklore · primary controlled research outranks industry interpretation · newer evidence narrows/supersedes older only when methodology is comparable or stronger · observational correlations do not establish causation · black-box AI-system percentages are snapshots, not permanent laws · adversarial-manipulation results are classified as risk/security evidence, never as tactics.

---

## PART 6 — EVIDENCE LEDGER

Confidence scale per §10: VERY HIGH / HIGH / MEDIUM / LOW / SPECULATIVE. Causality scale per §11: CAUSATION / STRONG ASSOCIATION / CORRELATION / WEAK ASSOCIATION / PRACTITIONER OBSERVATION / HYPOTHESIS / SPECULATION. Discipline relevance: SEO / GEO / AIO / ALL. "Corroboration" lists which supplied documents (D-series) independently carried the finding — convergence across independent executions is itself evidence of robustness.

---

**EV-01 — Content-side GEO tactics causally lift generative visibility 30–40%.**
Source: S01. Claim: adding citations from reliable sources, quotations, and statistics to page content increases visibility in generative-engine responses by 30–40% (position-adjusted word count) and 15–30% (subjective impression) vs unmodified content; best methods Cite Sources / Quotation Addition / Statistics Addition (best +41% / +28%); real-world validation on Perplexity.ai up to +37%. Evidence: controlled content-intervention experiments on GEO-bench (10,000 queries, 9 datasets, 25 domains), 5 seeds. Type: controlled experiment (CAUSATION, within the tested GE setup). Platform: simulated GE (GPT-3.5 + Google top-5) + Perplexity.ai. Date: 2024. Authority L2. Freshness: CURRENT BUT EVOLVING. Discipline: GEO (primary), AIO (mechanism transfer, provisional). Implementation relevance: content blocks must carry citable statistics, quotations, and source references. Confidence: HIGH (direction), MEDIUM (magnitude on 2026 engines). Qualified by: S05 (gains conditional on already being retrieved), S12 (multi-adopter erosion). Corroboration: D1, D2, D3, D4, D5, D6, D7 (universal).

**EV-02 — Keyword stuffing reduces generative visibility.**
Source: S01. Claim: keyword stuffing scored below baseline (~10% worse than baseline on Perplexity.ai; 17.7–17.8 vs 19.3 baseline position-adjusted in simulation). Type: controlled experiment (CAUSATION). Confidence: HIGH. Discipline: ALL (anti-pattern). Implementation: DO-NOT rule. Corroboration: D1, D2, D3, D4, D7.

**EV-03 — GEO lifts lower-ranked sources most.**
Source: S01. Claim: when all sources are optimised, Cite Sources gave +115.1% visibility to the rank-5 source while the rank-1 source lost 30.3%; GEO partially democratises visibility. Type: controlled experiment. Confidence: MEDIUM-HIGH. Implication: GEO is highest-leverage for sites not already dominant organically. Corroboration: D1, D2.

**EV-04 — Fluency/readability improvements lift generative visibility 15–30%.**
Source: S01 (confirmed as strongest heuristic baseline in S06). Claim: Fluency Optimisation and Easy-to-Understand rewrites produced significant visibility gains; best combination was Fluency + Statistics. Type: controlled experiment. Confidence: MEDIUM-HIGH. Discipline: GEO/AIO. Implementation: clarity editing is a citable-content requirement, not cosmetic. Corroboration: D1, D2, D4, D7.

**EV-05 — GEO tactic effectiveness is domain-dependent.**
Source: S01 (corroborated by S08, S06). Claim: e.g., Authoritative wins on debate/history; Cite Sources on facts/law & gov; Statistics Addition on law/gov/opinion; Quotation Addition on people & society/history. AutoGEO rule overlap: 78–84% across engines but only 35–40% across divergent domains. Confidence: HIGH (that variation exists), MEDIUM (specific mappings). Implication: per-page-type tactic selection, not one global rewrite rule. Corroboration: D1, D2, D5, D6.

**EV-06 — AI engines and Google cite materially different domains.**
Source: S02 (reported faithfully by S20). Claim: mean domain overlap with Google top-10 across 1,000+ ranking queries: GPT-4o 4.0% (median 0.0% — 0% median on over half of queries), Gemini 2.5 Flash 11.1%, Claude 4.5 Sonnet 12.6%, Perplexity 15.2%; all pairwise differences p<0.001 (10,000-iteration bootstrap). Type: large-scale observational audit (STRONG ASSOCIATION). Date: 2026. Confidence: HIGH. Discipline: GEO/AIO vs SEO separation. Implication: organic #1 neither guarantees nor is required for AI citation; separate measurement required. Corroboration: D1, D2, D5, D6, D7.

**EV-07 — Niche queries do not make AI engines converge toward Google.**
Source: S02. Claim: 216 entity-comparison queries: niche raised AI–Google overlap only 3–4pp (n.s.); AI engines converged slightly toward *each other* (unique-domain ratio 74.2%→68.6%), relying on concentrated shared sources for niche entities. Confidence: HIGH. Implication: for niche topics, being inside the engine-preferred source set matters more than Google rank. Corroboration: D1, D5.

**EV-08 — AI engines privilege earned media and suppress social content.**
Source: S02/S20. Claim: 300 consumer-electronics queries: all-AI aggregate 36.3% brand / 12.5% social / 51.2% earned vs Google 25.7/33.6/40.7. Claude: 1.1% social overall, 85.9% earned on consideration queries, 0.0% social on transactional. GPT-4o: 77.9% earned on consideration, 60% brand on transactional. Gemini: 68.2% brand on transactional. Perplexity: most balanced (38.7/11.4/49.9). Confidence: HIGH. Implication: off-site earned-media presence is a GEO requirement; on-site optimisation alone is insufficient. Corroboration: D1, D2, D5, D6, D7 (universal — one of the strongest cross-execution agreements).

**EV-09 — AI engines cite fresher content than Google.**
Source: S02. Claim: median cited-page age (consumer electronics / automotive): Claude 62.3d/148.0d; GPT-4o 79.8d/162.2d; Perplexity 90.4d/216.6d; Google 130.4d/492.9d. Confidence: HIGH. Implication: visible, machine-readable dates and substantive freshness updates are AIO/GEO requirements. Corroboration: D1, D2, D5, D6, D7 (universal).

**EV-10 — For popular entities, pre-training priors dominate; for niche entities, retrieval dominates.**
Source: S02. Claim: GPT-4o perturbation study — popular entities: Kendall τ 0.911 (1.000 under strict grounding); 16% of ranked entities absent from retrieved snippets (Infiniti 73% citation-miss rate, Cadillac 58%); niche entities: snippet shuffle Δ4.15 vs 2.30, entity-swap Δ4.63 vs 2.60, τ collapses to 0.556, strict grounding stabilises (Δ0.46). Confidence: HIGH. Implication: unknown/niche brands win via retrieval-optimised content; famous brands defend via the public record. Decision logic: assess entity fame first (Part 16). Corroboration: D1, D2, D5, D6.

**EV-11 — Once retrieved, in-context position may matter less than presence (bounded).**
Source: S02 (authors' observation). Claim: "Once a document is included within the model's context window… its absolute position within that context may be less critical for certain query types." Confidence: MEDIUM (bounded to query types tested). Resolved against S12/S15 in Conflict C6. Corroboration: D1, D2.

**EV-12 — Brand visibility in AI answers is low, skewed, and partly training-data-bound.**
Source: S13. Claim: 80 Forbes-Global-2000 brands × 250 prompts × 3 platforms × 2 modes (1,500 answers): mean visibility ≈4%; 16/80 (20%) completely invisible (incl. Saudi Aramco, ICBC, China Mobile); tech 39.5% of mentions vs finance 2.9%/energy 1.8%; top-5 brands >50% of mentions; 58% of mentions from training-only mode vs 42% web-grounded; sentiment 68% positive/<1% negative. Type: structured audit (STRONG ASSOCIATION for representational bias). Confidence: MEDIUM-HIGH. Implication: entity/brand presence in the authoritative public record (reference sources, earned media, knowledge bases) is a long-lead GEO requirement; absence — not negativity — is the primary risk. Corroboration: D1, D2, D5, D6, D7.

**EV-13 — Platforms differ in retrieval dependence and quality selectivity.**
Source: S13 + S07. Claim: ChatGPT broadest brand coverage (59/80) and prior-reliant; Gemini largest web-grounding lift (+9 companies); Perplexity most retrieval-dependent (35→49 with web). S07 adds quality-selectivity divergence (1,100 cited URLs, B2B SaaS): mean GEO-16 quality score of cited pages — Brave 0.727 (78% citation rate), **Google AIO 0.687 (72%)**, Perplexity 0.300 (45%). Confidence: MEDIUM-HIGH. Implication: retrieval-optimised content buys the most on retrieval-centric engines; quality thresholds buy the most on AIO/Brave; training-data presence is slow-burn. Corroboration: D1, D2, D5, D6.

**EV-14 — FAQPage and Product JSON-LD strongly predict ChatGPT visibility (correlational).**
Source: S14. Claim: 1,508 German real-estate sites, logistic regression: FAQPage OR≈13.28 (p<0.001, marginal +26pp), Product OR≈4.06 (+14pp), mobile-optimised OR≈5.24, robots.txt OR≈3.44, h2 OR≈3.27, h3 OR≈2.28; faster load associated (418ms vs 623ms, p=0.014); each 100ms delay reduces visibility probability; missing alt text small negative effect; Organization schema, ai.txt, h1-count, internal-link count NOT significant; XML sitemap negative (OR 0.56) — authors attribute to confounding. Type: observational regression (CORRELATION; confound-controlled). Confidence: MEDIUM. Implication: implement accurate FAQ/Product/Org schema + technical hygiene; do not read as proven causation. Corroboration: D1, D2, D5, D6, D7 (universal).

**EV-15 — ~250 poisoned documents can backdoor LLMs regardless of scale.**
Source: S09. Claim: 250 malicious documents (≈420k tokens, 0.00016% of training tokens) reliably backdoored 600M–13B models; absolute count, not percentage, drives success; 72 models trained. Type: controlled security experiment (CAUSATION). Confidence: HIGH (narrow backdoor). Implication: engines have strong incentives to deploy anti-poisoning defences; manipulative GEO tactics carry escalating detection risk → compliance rules. Corroboration: D1, D2, D5.

**EV-16 — Adversarial "strategic text sequences" can hijack LLM recommendations.**
Source: S11. Claim: GCG-optimised text on a product page moved a never-recommended product to top recommendation. Type: controlled attack (CAUSATION). Confidence: HIGH. Implication: DO-NOT — no hidden/adversarial text; engines will filter such patterns. Never implement. Corroboration: D1, D2, D5.

**EV-17 — Recognition ≠ discovery; classic authority signals predict AI discovery better than on-page "GEO scores".**
Source: S10. Claim: 112 Product Hunt startups × 2,240 queries: by-name recognition 99.4% (ChatGPT gpt-4o-mini) / 94.3% (Perplexity); discovery-style appearance 3.32% / 8.29%; GEO content scores uncorrelated with discovery; referring domains r=+0.319 (p<0.001), Product Hunt rank r=−0.286 (p=0.002), cleaned Reddit presence r=+0.395 (p=0.002) predicted Perplexity visibility. Type: observational + audit (CORRELATION). Confidence: MEDIUM. Implication: SEO foundations + off-site presence are prerequisites; on-page GEO is necessary-but-insufficient. Corroboration: D1, D2, D5, D6.

**EV-18 — Across 45 studies, only topical relevance and context presence/position are reproducible levers; heuristics transfer poorly; competition erodes gains; citation-rewrites can impair retrieval.**
Source: S05. Claim: foundational-paper gains are valid within fixed-context settings but "establish neither organic discoverability nor durable traffic effects"; no reviewed technique shows stable longitudinal cross-platform causal effect on organic discoverability. Supporting detail: C-SEO Bench 3/54 method-domain combos significantly positive, zero in QA; E-GEO 10/15 e-commerce heuristics neutral/negative; SAGEO Arena (171,003 docs, 2,700 queries): body-only optimisation −9% top-20 retrieval, −16% top-10 after reranking, −6% final citation; S15's 252k trials: relevance + position dominate, prices/recent dates help, formatting weak; S25 (Liu 2023): only 51.5% of generated sentences fully supported by their citations; S23 (Schulte): daily source Jaccard 0.34–0.42, 57.8% of ChatGPT repetitions never activate search, ≥7–8 repetitions needed; S21 (Kirsten, ACL 2026 Findings): 53% of AIO-cited domains outside organic top 10, 27% outside top 100, AIO 2-month page overlap 18% vs organic 45%; S22 (Xu): AIO activation 13.7% overall / 64.7% question-form (55,393 queries), ~11% of 98,020 AIO atomic claims insufficiently supported. Evidence gradations (S05 Table 5): HIGH — in-context content causally alters citation; relevance & position dominate; engines differ/drift; retrieved content is an attack surface. MODERATE — extractable evidence/structure helps; learned methods beat heuristics; competition erodes. LOW — white-hat GEO durably improves organic discoverability. VERY LOW — citations predict clicks/conversions. REJECTED as general claim — "GEO increases visibility by 40%." Confidence: HIGH (as a synthesis of the field's evidential limits). Implication: expectation-setting, experimentation framework, and measurement harness are mandatory parts of the build. Corroboration: D1, D2, D5, D6.

**EV-19 — Citation has two stages (selection vs absorption); high-influence pages are longer, structured, evidence-rich; Q&A formatting alone does NOT help.**
Source: S04. Claim: geo-citation-lab (602 prompts; ChatGPT, Google AI Overview/Gemini, Perplexity; 21,143 valid citations; 18,151 fetched pages; 72 features): search triggering near-universal (98.6–100%); citation breadth diverges from depth — mean citations/prompt: ChatGPT 6.88, Google AIO 12.06, Perplexity 16.35; mean per-citation influence: ChatGPT 0.271 vs Google 0.058 vs Perplexity 0.065 (ChatGPT cites ~2.4× fewer, absorbs ~4.2× deeper). High- vs low-influence pages: 1,943 vs 170 words (11.4×), 10.6 vs 0.85 headings (12.5×), list density 0.428 vs 0.048 (8.9×), answer-citation semantic similarity 0.570 vs 0.247. Strongest influence correlations: LLM relevance r=0.432, answer-citation embedding similarity r=0.356, content quality r=0.292. Evidence genres (present vs absent): code +76.9%, numbers/statistics +61.6%, definitions +57.3%, comparisons +55.3%, how-to +41.2%; **Q&A format −5.7% (negative)** — "The value comes from the evidence inside the page, not from the presence of question marks in headings." Domain types: encyclopedia highest influence (0.214); news selected often but absorbed shallowly (0.073). Source selection concentrated: official+news+vertical = 79–88% of citations; US ~83–87%, English ~83–95%; 27.1% of cited URLs in one audit were not even scrapable. Type: large descriptive measurement, deliberately non-causal (STRONG ASSOCIATION). Confidence: MEDIUM-HIGH. Discipline: GEO + AIO (Google AI Overview directly measured). Implication: build "absorption-ready" evidence blocks (Part 17); do NOT blanket-convert content to Q&A format (Conflict C9). Corroboration: D1, D2, D5.

**EV-20 — Most conversational-SEO edits fail or backfire; in-context (retrieval) position dominates surface rewrites by an order of magnitude.**
Source: S12 (C-SEO Bench, NeurIPS 2025 D&B — peer-reviewed; >1,900 queries, 16,360 documents, 4 models incl. o3/o4-mini; Wilcoxon + Holm–Bonferroni). Claim: only **3 of 54** method×domain×model cases showed significant positive gains (all on gpt-4o-mini: llms.txt-style LLM Guidance in Retail/Games; holistic Content Improvement in Retail); **zero** significant gains in any QA domain on any model; Statistics Addition was the *worst* tactic (negative in 19/24 settings); on Haiku 3.5 product recommendation 26/30 cases significantly negative. Placing the target document **first in the LLM context** beat every content tactic by an order of magnitude (+2.77 citation-rank gain in Retail vs best C-SEO +0.36; position 1 significant p=0.0000 in all 6 domains; positions 8–10 actively harmful). Gains per adopter decrease monotonically with adoption → congested, zero-sum. "C-SEO will not replace SEO, but will complement it." Type: benchmark experiments (CAUSATION within benchmark). Confidence: HIGH. Implication: retrieval rank is the primary lever; surface rewrites are weak and can backfire; no "magic prompt HTML." Corroboration: D1, D2, D5, D6, D7.

**EV-21 — Earned-media bias vs Google is systematic across verticals/languages; local and non-English AI visibility diverge even further.**
Source: S03 (corroborated by S02's typology track, S13, S17). Claim: AI search follows earned≫brand≫social where Google keeps a balanced mix — e.g., automotive Canada: Google 36.6% brand/22.8% social/40.6% earned → AI 69.1% earned/30.9% brand/**0% social**; consumer electronics US: AI 92.1% earned. Local-search AI/Google overlap is far lower than product categories (home cleaning 20.6%, dentists 11.9%, auto repair 2.5%, IT support 0.1%). GPT shows near-zero cross-language source overlap (swaps ecosystems by language); Claude reuses English authority domains across languages. Unbranded prompts still resolve to major brands 62.2% of the time (cola test). Secondary data cited by S03 (Pew): AI summaries on ~18% of observed Google queries; link CTR 8% with summary vs 15% without; ~1% of clicks inside the AI box; ~26% zero-click. Confidence: HIGH on direction (convergent with EV-08); MEDIUM on exact percentages (proprietary classifier, no significance tests, vendor-COI noted in Part 5). Implication: digital-PR/earned-media strategy is part of GEO; localise evidence and authority, not just copy; local/language markets need their own earned coverage. Corroboration: D1, D2, D5, D6.

**EV-22 — Four citation "gatekeepers" dominate controlled head-to-head competition: topical relevance, explicit price, recent timestamp, list position.**
Source: S15 (SIGIR '26, peer-reviewed). Claim: 252,000 trials, 6 LLMs, 18 factors, counterbalanced two-source RAG testbed with brand anonymisation: four gatekeepers unanimous across all 6 models with OR>100 — topical relevance (OR>10k in 5 models), explicit price present (OR 6.3–>10k), recent vs old timestamp (OR 14.4–>10k), first list position (OR 1,795–>10k). "Failing on any one can eliminate citation odds regardless of other content strengths." 11/18 factors significant in ≥4/6 models: keyword coverage of query terms (OR 9.4–40), missing specs (8.6–243), no comparisons (1.6–7.5), hedged vs confident language (2.7–754 against), claims without evidence (2.1–>10k against), internal contradictions (1.7–4.1 against), shallow coverage (4.0–1,480 against), weaker value proposition/social proof. **Formatting-only edits (structure, organisation) had negligible impact (OR 0.78–1.68, mostly n.s.) — "LLMs parse content regardless of visual organization."** Type: controlled factorial experiment (CAUSATION within testbed). Confidence: HIGH for gatekeepers; HIGH that cosmetic formatting alone is weak. Implication: content requirements for decision-critical facts (price/specs/dates), confident evidence-backed claims, internal consistency; the structure/formatting conflict is resolved in C8. Corroboration: D1, D2, D5.

**EV-23 — Semantic/structural engineering improves citations (+17.3%), with quantified structural targets — but see the formatting conflict (C8).**
Source: S16 (corroborated by S04's structure features and S14's h2/h3 odds ratios; contradicted in part by S15 — see C8). Claim: GEO-SFE structural optimisation across 200 GEO-bench articles × 6 platforms (Google SGE, Bing Chat, Perplexity, Phind, ChatGPT, Claude; 2,400 test cases): citation rate 45.0%→52.8% (+17.3%, p<0.001, Cohen's d=0.64); visibility +17.5%; subjective (G-Eval) +18.5%. Ablation: macro-structure 44.9% of gains, meso 39.7%, micro 15.4%. Quantified targets: heading depth 3–5 levels; paragraphs/chunks 150–300 words (>300 → 31% attention degradation mid-chunk; <150 → 23% citation-probability reduction); 25–35% of content in structured elements (lists/tables/code show 43% higher extraction accuracy than equivalent prose); emphasis on 5–10% of content; internal-link density 0.15–0.20 with avg path <3. Type: controlled evaluation with LLM-judged components. Confidence: MEDIUM (single study, LLM-judged, tension with S15's null formatting result). Implication: semantic sectioning, chunk sizing, and structured elements are citation infrastructure — but the defensible interpretation (C8) is that *semantic* structure helps while *cosmetic* formatting does not. Corroboration: D1, D2, D5.

**EV-24 — GEO requires a fixed measurement loop; production telemetry shows what engines actually cite.**
Source: S17 (vendor telemetry: 102 brands, 3,508 runs, 102,025 prompt responses, 149,912 citations, 5 engines, Mar–May 2026; corroborated by S19, S05's protocol, S13). Claims: (a) measurement = fixed prompts, multi-engine sampling, mention/citation share, re-measurement on 14–30-day cycles; (b) brand-stature ladder: day-1 unbranded visibility Tier-1 72.9% / Tier-2 43.6% / Tier-3 11.4% (~30pp per step, p=4.78×10⁻⁹); (c) branded recognition is 94–100% day-1 on every engine (refutes "6 months to AI visibility" folklore); (d) **only 2.9% of citations point to the brand's own domain**; corporate/third-party brand pages 75.2%; non-corporate: YouTube 4.2% > tech/business media 3.8% > Reddit/forums 3.3% > Wikipedia 2.6%; (e) **listicles are the single most-cited page format (35.7% of content citations = 21.0% of all citations)**; (f) mention behaviour near-binary (77.5% of brand×prompt×engine cells always- or never-mentioned; ≥3 runs settle middle cells); (g) sentiment is 6.7× noisier than mention and never settles negative (0.0% consistently negative cells); (h) cross-platform source overlap Jaccard ≈0.12. Confidence: MEDIUM-HIGH (large-N but vendor-produced, observational). Implication: Parts 37–38 monitoring plans; off-site/listicle/earned-media emphasis; don't over-read sentiment. Corroboration: D1, D2, D5.

**EV-25 — Selective engines lean on institutional authority; commercial sources break through only with maximal visible credibility markers.**
Source: S18 (Claude Sonnet 4.5, HealthSearchQA: 3,075 questions → 10,038 citations; human-verified stratified audit). Claim: established institutional sources = **97.8% of all citations** (medical institutions 36.5%, government 31.6%, professional associations 28.4%); top-10 organisations = 57.8% (Mayo Clinic alone 24.7%); commercial health information only 2.2%. Two-logic asymmetry: institutions cited "on name and authority alone" (median DA 95), while commercial sources that break through "wear every credibility badge" — 86.4% medical review statements, 82.5% schema markup, 71.8% comprehensive >1,500 words, 77.7% dated 2024–26. Sample-wide: 72.9% of cited pages had NO author attribution; median DA 92; 67.5% schema (JSON-LD predominant). Retrieval-layer dependence: Claude rides Brave Search — "citation behavior is not just a function of the model." Confidence: MEDIUM-HIGH (descriptive, single vertical/engine). Implication: YMYL sites face authority-gated citation; non-institutional sites need maximal visible quality signals; author bylines are NOT universally required (contradicts folklore — see Part 41). Corroboration: D1, D2.

**EV-26 — Intent-modelled optimisation beats single-aspect optimisation on subjective impression; quotations/statistics still win objective citation metrics.**
Source: S08 (RAID G-SEO; simulated GSE on GLM-4-9B, extended GEO-bench, G-EVAL 2.0; no significance tests). Claim: intent-driven role-augmented optimisation beat all 9 GEO baselines on subjective impression (+61.35% over the best baseline, quotation); but on objective position-adjusted citation metrics, quotation (26.20) and statistics (23.17) still beat RAID (15.79). Unique-word "distinctiveness" optimisation actively harmed visibility (−10.77 objective — worst method); simplification net-negative on objective metrics; >80% of effective optimisation operations targeted content quality (completeness/clarity). Failure mode: high semantic overlap with competing sources caused citation blending (objective 0.75→0.52) — semantic uniqueness must be preserved. Confidence: MEDIUM (single-LLM simulation, no significance testing). Implication: per-page intent analysis precedes content optimisation; keep quotation/statistics tactics for objective citation; preserve semantic distinctiveness vs competitors. Corroboration: D1, D2.

**EV-27 — Generative engines have learnable, partially-shared content preferences; the extracted rule set reads like good editorial practice.**
Source: S06 (AutoGEO, CMU; GEO-Bench + two new benchmarks; engines simulated with gemini-2.5-flash-lite / gpt-4o-mini / claude-3-haiku). Claim: learned preference-rule rewriters average +35.99% on GEO metrics while preserving answer utility (adversarial hijack/poisoning methods scored lower and degraded utility). Rule overlap: 78–84% across LLM engines but only 35–40% across divergent domains. Extracted common rules: cite credible sources/attribute authority; comprehensive coverage; factual accuracy/verifiability; neutral objective tone; logical structure (headings/lists/tables); clear concise language; up-to-date information; in-depth how/why explanation; **conclusion-first ordering**; single-topic focus; specific evidence (statistics, named examples); balanced viewpoints; self-contained content; actionable steps. E-commerce-unique: pros/cons, step-by-step, specs/model numbers, term definitions, non-exaggerated tone. GPT/Claude-shared: full accessibility without logins/paywalls. Confidence: MEDIUM (WIP preprint; simulated engines; LLM-circular evaluation). Implication: the content spec (Part 15) operationalises exactly these rules; conclusion-first ordering anchors the answer capsule (REQ-AIO-01); paywall/login gating is an AI-visibility cost (Part 22). Corroboration: D1, D2.

**EV-28 — LLM answers skew positive; absence is the risk.**
Source: S13. Claim: 68% positive / 32% neutral / <1% negative brand mentions. Confidence: MEDIUM. Implication: monitoring tracks presence/absence and accuracy, not only sentiment. Corroboration: D1, D2, D5, D6.

**EV-29 — AI Overviews can materially cut publisher CTR (demand-side stakes).**
Source: S13 citing Search Engine Land (Mail Online CTR −45% under AI Overviews) and YouGov (>50% users prefer AI summaries); Forrester: 73% of B2B buyers use AI tools in vendor research; S03 citing Pew (link CTR 8% with AI summary vs 15% without; ~26% zero-click; ~1% of clicks inside the AI box); S16 citing industry data (position-one organic CTR 28%→19%; zero-click >58%). Type: third-party reported metrics (PRACTITIONER OBSERVATION). Confidence: LOW-MEDIUM (directionally convergent). Implication: stakes/justification only; not an implementation rule. Corroboration: D1, D2, D5.

**EV-30 — DIRECT AIO EVIDENCE: AI Overviews draw from a different, unstable source ecosystem than organic Google.**
Source: S21 (Kirsten et al. 2026, ACL 2026 Findings, peer-reviewed) and S22 (Xu et al. 2026), both catalogued by S05; plus S07 and S04 measuring AIO directly. Claims: (a) 4,706 queries, US+Germany: **53% of domains cited by Google AIO do not appear in the organic top 10; 27% are absent from the top 100**; (b) AIO page overlap across two months is **18% vs 45% for organic** — AIO sources churn ~2.5× faster; temperature-0 reruns still flip 9–28% of decisions; minor paraphrases shift AIO sources more than classic results; (c) AIO activation: 13.7% of 55,393 trending queries overall but **64.7% for question-phrased queries** (51.5% in Grossman's representative sample — the difference is query-mix, not contradiction); (d) AIO cites quality-filtered pages: mean GEO-16 score 0.687 with 72% citation rate and 11.0/16 pillar hits (vs Perplexity 0.300/45%) — strongest pillar correlations: Metadata & Freshness r=0.68, Semantic HTML r=0.65, Structured Data r=0.63, Evidence & Citations r=0.61, Authority & Trust r=0.59, Internal Linking r=0.57 (all p<0.001); pages at G≥0.70 with ≥12 pillar hits achieved 78% cross-engine citation rate (S07); (e) AIO attaches many sources but each shapes the answer weakly (12.06 mean citations/prompt; mean influence 0.058 — S04); (f) ~11% of 98,020 AIO atomic claims were insufficiently supported by their citations (S22 via S05) — fidelity is a differentiator. Confidence: HIGH for (a)–(c) (peer-reviewed/large-N), MEDIUM for (d) (observational), MEDIUM-HIGH for (e). Implication: AIO requirements in Part 17 rest on direct AIO measurement, not only GEO analogy; AIO monitoring must use activation-rate denominators and repeated sampling (Part 37). Corroboration: D1, D2, D5, D6, D7.

**EV-31 — Citation-oriented body rewrites can impair upstream retrieval (total-effect warning).**
Source: S24 (SAGEO Arena, Kim et al. 2026), catalogued by S05. Claim: across 171,003 documents and 2,700 queries, body-only GEO optimisation **reduced** average top-20 retrieval presence ~9%, top-10 after reranking 16%, and final citation 6%. A rewrite can win once injected into context while making the page less retrievable upstream. Confidence: MEDIUM-HIGH (single large arena study, independently consistent with C-SEO Bench's position-dominance result). Implication: NEVER let "AI formatting" rewrites displace topical relevance/keyword coverage (the #1 gatekeeper, EV-22); all content tasks carry a DO-NOT against relevance-diluting rewrites; measure retrieval presence before/after any content optimisation (Part 38 diagnostics). Corroboration: D1, D2.

**EV-32 — Off-site reality check: engines overwhelmingly cite third parties, and listicles are the most-cited format.**
Source: S17. Claim: only **2.9% of 149,912 citations** pointed to the brand's own domain (corporate/third-party pages 75.2%); ranked "best-X" **listicles = 21.0% of all citations** (35.7% of content citations — the single most-cited format); YouTube 4.2% > tech/business media 3.8% > Reddit/forums 3.3% > Wikipedia 2.6%; brand-stature ladder Tier-1/2/3 = 72.9/43.6/11.4% day-1 unbranded visibility. Confidence: MEDIUM-HIGH (large-N vendor telemetry, observational). Implication: on-site optimisation is necessary but structurally insufficient; the site must (a) host citable assets, (b) support earned-media/listicle inclusion (Part 28 off-site requirements), and (c) for its own pages, match the formats engines cite (comparisons, ranked lists where genuinely justified). Corroboration: D1, D2, D5, D6.

**EV-33 — Practitioner measurement protocol: fixed prompt panels, multi-engine, intent-segmented, cadence-based.**
Source: D6 (Perplexity practitioner playbook), operationalising S12/S02/S13/S17. Claim: freeze 20–50 buyer-intent prompts per priority topic spanning informational/consideration/transactional intents; run weekly or monthly across ChatGPT, Perplexity, Claude, Gemini, and Google AI Overviews — never a single engine; track three metrics per prompt (mention rate, citation rate, source type of competitors cited); benchmark against the invisibility baseline (~4% average brand visibility; below that is a red flag); segment by intent because source composition shifts (Claude earned-media 86% on consideration vs brand share rising on transactional). Type: practitioner protocol built on L2 evidence. Confidence: HIGH (as measurement practice). Implication: folded into Parts 37–38 harness requirements. Corroboration: D5, D6, and consistent with D1/D2 monitoring parts.

**EV-34 — Phased rollout with re-measurement beats big-bang rewrites.**
Source: D6 (30-60-90 day rollout), convergent with D1's phased implementation sequence and D2's build order. Claim: Days 1–30 build the fixed prompt set, run baseline measurement across 5 engines, audit top money pages (schema, headings, freshness, load time); Days 31–60 implement FAQPage/Product schema and heading fixes on priority pages, launch earned-media outreach for 3–5 target topics, fix technical SEO gaps; Days 61–90 re-measure against baseline, compare citation-rate deltas by engine and intent, reallocate effort toward whichever lever showed the largest improvement. Type: practitioner framework (PRACTITIONER OBSERVATION on L2 base). Confidence: MEDIUM-HIGH. Implication: Part 33 implementation sequence + Part 38 re-measurement cadence. Corroboration: D1, D2, D6.

---

## PART 7 — CONFLICT REGISTER

Every material disagreement — between underlying studies AND between the seven D-series executions — resolved per master prompt §12. Format: conflicting claims → methodology/authority/freshness → DECISION / RATIONALE / EVIDENCE / CONFIDENCE.

**C1 — Do content-side GEO tactics work?**
Claims: S01 (yes, 30–40% causal lift in fixed-context GE) vs S12 (many edits fail/backfire under multi-adopter competition) vs S05 (gains conditional; no discoverability effect; heuristics transfer poorly). Methodology: S01 controlled single-adopter experiments; S12 benchmark with multi-adopter settings; S05 synthesis of 45 studies. Authority: all L2. Freshness: S01 (2024) vs S12 (2025) vs S05 (2026-07) — newer qualifies older.
DECISION: Implement the human-first subset of GEO content tactics (citations, statistics, quotations, definitional clarity, fluency, structure) as MUST/SHOULD requirements, because they are also evidence-quality improvements for human readers, and S01 shows causal benefit when the source is already retrieved. Do NOT promise lift percentages; do NOT deploy manipulative or template-spam variants; measure via Parts 37–38.
RATIONALE: convergent direction (S01, S06, S08, S15, S16) + bounded expectations (S05, S12) + human-first alignment (§84).
EVIDENCE: EV-01, EV-04, EV-18, EV-20. CONFIDENCE: HIGH (direction), MEDIUM (magnitude).

**C2 — Does structured data cause AI citation?**
Claims: S14 (FAQPage OR≈13.3, Product OR≈4.1 — strongest predictors of ChatGPT visibility) vs S14's own caution + the general position that schema is not a ranking factor; S17 vendor telemetry expects near-zero independent effect; S18 shows institutions cited without schema.
DECISION: Implement accurate, visible-content-consistent JSON-LD (Organization, WebSite, WebPage, BreadcrumbList, Article/Service/Product/FAQPage where factually applicable) as MUST — justified independently by Level-1 search eligibility and machine comprehension — and treat AI-citation uplift as PROVISIONAL benefit. Never mark up invisible or inaccurate content.
RATIONALE: correlation is strong and mechanism-plausible (Microsoft/Google confirm schema use in AI answers), but S14 is observational; the requirement stands on Level-1 grounds even if the GEO effect is zero.
EVIDENCE: EV-14. CONFIDENCE: HIGH (implement schema), MEDIUM (schema→AI-citation causality).

**C3 — "Optimise for AI directly" vs "build the SEO foundation first".**
Claims: S10 (GEO scores uncorrelated with discovery; referring domains/Reddit predict; "build SEO foundation first") vs S01/S06/S08 (content optimisation lifts visibility once retrieved).
DECISION: Sequence the build: P0 crawlability/indexability/retrieval-eligibility first; content-side GEO second; off-site authority third (ongoing). These are complements at different pipeline stages (S05's multistage model), not substitutes.
EVIDENCE: EV-17, EV-01, EV-18. CONFIDENCE: HIGH.

**C4 — XML sitemaps: negative coefficient in S14 vs standard practice.**
Claims: S14 (sitemap presence negatively associated with ChatGPT visibility, OR 0.56) vs Level-1 guidance (sitemaps aid discovery).
DECISION: Keep and maintain XML sitemaps (MUST). S14's own authors attribute the coefficient to confounding (smaller/newer sites add sitemaps but lack reputation); it is not evidence of harm.
EVIDENCE: EV-14 + LEVEL-1 ANCHOR. CONFIDENCE: HIGH.

**C5 — Keyword-based optimisation.**
Claims: legacy SEO folklore (keywords drive visibility) vs S01 (keyword stuffing −10% vs baseline on Perplexity) and S12.
DECISION: DO-NOT keyword stuffing, anywhere. Write for intent and entity clarity; natural keyword coverage follows. Note the nuance from S15: *keyword coverage of query terms* is a significant positive citation factor (OR 9.4–40) — the line is natural topical coverage (required) vs stuffing (banned).
EVIDENCE: EV-02, EV-20, EV-22. CONFIDENCE: HIGH.

**C6 — Does position matter?**
Claims: S02 observed that once a document is inside the context window, absolute position "may be less critical for certain query types" vs S12 (first in-context position beats every content tactic by an order of magnitude: +2.77 vs +0.36; positions 8–10 actively harmful) and S15 (list position is a unanimous gatekeeper, OR up to >10,000) and S05's synthesis ("topical relevance and context position are the most reproducible levers").
Resolution: S02's observation concerns *certain query types* (popular-entity rankings where priors dominate); S12/S15 measure the general citation setting. The weight of controlled evidence says **retrieval rank → in-context position is a first-class lever**; what remains non-actionable is gaming *position within the generated answer text*.
DECISION: (a) Treat retrieval ranking (classic SEO + topical relevance) as the primary controllable driver of in-context position — reinforces, not replaces, the retrieval-first build order (C3). (b) No answer-position gaming tactics. (c) In-answer prominence stays an observational metric only.
EVIDENCE: EV-20, EV-22, EV-11, EV-18. CONFIDENCE: HIGH for (a), MEDIUM for the residual query-type dependence. EXPERIMENT ALLOWED (EXP-01) only on answer-side prominence measurement.

**C7 — Is AI visibility mostly a training-data problem (slow) or a retrieval problem (fast)?**
Claims: S13 (58% of mentions from training-only mode) vs S02 niche-entity results (retrieval dominates for low-coverage entities) vs S10 (discovery via authority signals).
DECISION: Dual-track: (a) retrieval-track (fast, this playbook's on-site build) for niche/long-tail/entity-specific queries where the site has low prior coverage; (b) training-data track (slow, off-site: authoritative reference presence, earned media, knowledge bases) specified as off-site requirements in Part 28. Entity-fame assessment (Part 16) decides per-topic weighting.
EVIDENCE: EV-10, EV-12, EV-17. CONFIDENCE: HIGH (that both tracks exist), MEDIUM (relative weights per site).

**C8 — Does document structure/formatting drive citation?**
Claims: S16 (structural engineering +17.3% citations; macro/meso/micro ablation 44.9/39.7/15.4%) and S04 (high-influence pages: 12.5× more headings, 8.9× list density) and S14 (h2/h3 OR 3.3/2.3) vs S15 (formatting-only edits negligible: OR 0.78–1.68, mostly non-significant; "LLMs parse content regardless of visual organization") and S05 (formatting alone weak).
Methodology: S15 isolates single factors in counterbalanced pairs (strongest causal design); S16 optimises structure as a bundle with LLM-judged evaluation (more confounded); S04/S14 are observational.
DECISION: Distinguish **semantic structure** from **cosmetic formatting**. Implement as requirements: heading hierarchy, section chunking, tables/lists for genuinely structured data, conclusion-first answer blocks, evidence units (definitions/statistics/comparisons/steps) — supported by S04's absorption features, S07's Semantic-HTML pillar (r=0.65), S16, and S06's extracted rules. Do NOT implement formatting-for-formatting's-sake (bold-keyword density games, reorganisation without semantic gain, blanket Q&A conversion) — refuted or unsupported (S15, S05, S04's Q&A −5.7%).
RATIONALE: the strongest causal design (S15) nulls cosmetic formatting; convergent observational+experimental evidence supports semantic structure carrying extractable evidence.
EVIDENCE: EV-22, EV-23, EV-19, EV-14, EV-27. CONFIDENCE: HIGH for the semantic/cosmetic split; MEDIUM for S16's specific numeric targets (SHOULD-level heuristics, not guarantees).

**C9 — Should content be converted to Q&A/FAQ format for AI engines?**
Claims: S14 (FAQPage schema OR≈13.3 for ChatGPT visibility — correlational) vs S04 (Q&A-formatted pages show *lower* absorption, −5.7%: "The value comes from the evidence inside the page, not from the presence of question marks in headings") vs S05 (formatting weak) vs S15 (formatting negligible). The D-series executions split here: D5/D6's action table ranks "Add FAQPage JSON-LD" as Critical priority on the S14 correlation, while D1/D2 rule FAQ conditional-only.
DECISION: (a) FAQ *sections* remain CONDITIONAL-SHOULD — only for genuinely asked questions, with FAQPage schema mirroring visible content (justified by S14's correlation + Level-1 search eligibility). (b) DO NOT convert general content into Q&A shapes as an AI tactic. (c) The answer capsule (REQ-AIO-01) is justified by conclusion-first ordering (S06's extracted rules) and absorption features (S04) — NOT by Q&A formatting; it is a direct-answer paragraph, not a question-answer pair. The D5/D6 "Critical" priority is retained ONLY for pages that already have genuine Q&A content.
EVIDENCE: EV-14, EV-19, EV-18, EV-22, EV-27. CONFIDENCE: HIGH.

**C10 — Can GEO content rewrites harm search retrieval?**
Claims: S01/S06/S08 (content rewrites lift in-context visibility) vs S24 via S05 (body-only optimisation −9% top-20 retrieval, −16% top-10 reranked, −6% final citation) vs S12 (position dominates; statistics tactic negative in 19/24 settings).
DECISION: All content optimisation MUST preserve topical relevance and query-term coverage (the dominant gatekeepers — EV-22): rewrites add evidence, clarity, and structure; they never strip the terminology a retrieval system needs. No body-text rewrite ships without a before/after retrieval check on the page's priority queries (Part 38 diagnostics). Human-first rule (§84) is the backstop.
EVIDENCE: EV-31, EV-20, EV-22, EV-01. CONFIDENCE: HIGH.

**C11 — Is a composite "GEO score" a valid success metric?**
Claims: vendor tooling promotes GEO scores vs S10 (GEO content scores uncorrelated with discovery) vs S07 (GEO-16 score ≥0.70 + ≥12 pillar hits → 78% cross-engine citation rate).
DECISION: GEO-16-style pillar scores are useful as a *diagnostic checklist* during build (they encode real correlates: metadata/freshness, semantic HTML, structured data), but MUST NOT be used as the success metric. Success metrics are observational: mention rate, citation rate, absorption, referral traffic, conversion (Parts 37–38).
EVIDENCE: EV-17, EV-13, EV-33. CONFIDENCE: HIGH.

**C12 — Author bylines: universal requirement or not?**
Claims: E-E-A-T folklore (author bylines required for trust/AI citation) vs S18 (72.9% of Claude-cited health pages had NO author attribution; institutions cited with 100% no-attribution).
DECISION: Author transparency is REQUIRED for content pages where expertise materially matters (YMYL, advice, analysis) and for non-institutional sites seeking selective-engine citation (S18's "credibility badges" asymmetry); it is NOT a universal citation requirement for institutional/entity pages. Never fabricate authors.
EVIDENCE: EV-25, EV-22. CONFIDENCE: MEDIUM-HIGH.

**C13 — Reddit/community as an AI-citation channel.**
Claims: "Reddit is the #1 non-corporate AI citation source" (popular claim) vs S17 telemetry (YouTube 4.2% and editorial media 3.8% beat Reddit/forums 3.3%; Claude cites ~1% social) vs S10 (cleaned Reddit presence r=+0.395 predicted Perplexity visibility for startups).
DECISION: Community presence is a *discovery correlate for new/niche brands* (S10) and a modest citation source overall (S17); it is NOT the #1 channel and MUST NOT be gamed (astroturfing violates §55 and platform rules). Earn legitimate community presence; prioritise earned editorial media and reference presence above it.
EVIDENCE: EV-17, EV-32, EV-08. CONFIDENCE: MEDIUM-HIGH.

---

## PART 8 — SEO FINDINGS

Traditional SEO is the substrate every AI-visibility outcome depends on: generative engines retrieve from search indices (S01's GE formulation; S05's pipeline model; S10's "SEO foundation first"). The corpus's SEO-relevant findings:

1. **Crawlability/indexability are the hard gate (VALIDATED).** S14: robots.txt presence OR≈3.4 for ChatGPT visibility; mobile-optimised OR≈5.2; faster load (418 vs 623ms) associated. S10: referring domains predicted AI discovery. S05: GEO gains presuppose retrieval. → P0 requirements for crawlable HTML, correct status codes, canonicals, robots, sitemaps, internal links (Parts 21–22).
2. **Technical hygiene correlates with AI visibility (PROVISIONAL, correlational).** S14's significant factors (mobile, robots.txt, h2/h3 structure, load time, alt-text hygiene) are classic technical-SEO factors. Mechanism likely indirect (better sites get crawled, indexed, linked, and ingested more) — implement regardless; they are Level-1 anchored.
3. **Keyword-era tactics are dead weight (VALIDATED).** Keyword stuffing fails in GEs (EV-02) and is a search-spam risk. Exact-match anchor ratios, keyword density targets: REMOVE (Part 41). Natural query-term coverage remains a positive citation factor (EV-22) — the distinction is coverage vs stuffing (C5).
4. **Content usefulness/completeness is the common denominator (VALIDATED).** S15 (completeness drives citation), S04 (high-influence pages longer/structured/evidence-rich), S08 (intent-modelled content wins), S01 (statistics/citations/quotes). Complete, intent-matched, evidence-bearing pages serve SEO, GEO, and AIO simultaneously.
5. **Freshness is a ranking and citation factor with engine-specific weight (VALIDATED for AI engines; CURRENT BUT EVOLVING for Google).** EV-09: AI engines' cited medians 62–217 days vs Google's 130–493 days. → visible dates, substantive update policy, date-aware schema (Parts 15, 19).
6. **Site architecture must minimise crawl depth and orphaning (LEVEL-1 ANCHOR + corpus-consistent).** Requirements in Parts 13/20/22 rest on stable official guidance and are prerequisites for the retrieval gate (EV-17, EV-18).
7. **Performance is a visibility correlate (PROVISIONAL).** S14's load-time association + Level-1 Core Web Vitals guidance → Part 23 thresholds (LCP ≤2.5s, INP ≤200ms, CLS ≤0.1 at p75, mobile).
8. **Security/trust baseline (LEVEL-1 ANCHOR).** HTTPS, no mixed content, no intrusive interstitials — prerequisites; S09/S11 add the AI-era twist: expect engines to filter manipulative patterns.
9. **Organic rank remains commercially material AND is the retrieval substrate (VALIDATED).** Even where AI answers appear, organic retrieval feeds most AI pipelines; and AIO's own source set, while different (EV-30), is quality-filtered from the indexed web. SEO is therefore both an outcome channel and the upstream gate for GEO/AIO.

## PART 9 — GEO FINDINGS

GEO = improving the probability that website information is discovered, understood, retrieved, synthesised, referenced, cited, attributed, and included in generative answers. The corpus does NOT support a single "GEO ranking algorithm."

**Strongly supported GEO practices (VALIDATED — controlled or convergent evidence):**
- G0. **The four gatekeepers first** (EV-22, 252k controlled trials, unanimous across 6 LLMs): topical relevance to the query, explicit decision-critical facts (price/specs where applicable), recent machine-readable timestamps, and strong retrieval position. Failing any one can eliminate citation odds regardless of other strengths.
- G1. Include **citations to reliable sources**, **quotations**, and **statistics** in content (EV-01: +30–40% position-adjusted visibility, causal in fixed-context GE; still the strongest objective-metric tactics in S08's replication).
- G2. **Fluency/readability optimisation** (EV-04: +15–30%, causal; confirmed as strongest heuristic baseline in S06).
- G3. **Domain/intent-specific tactic selection** — no universal rewrite rule (EV-05, EV-26, EV-27: rule overlap 78–84% across engines but 35–40% across divergent domains).
- G4. **Completeness, evidence, confidence, consistency** as citation differentiators post-retrieval (EV-22: deep coverage OR up to 1,480; hedged language OR 2.7–754 against; unsupported claims and internal contradictions penalised).
- G5. **Semantic structure as citation infrastructure** (per C8): heading hierarchy, 150–300-word chunks, lists/tables for structured data (43% higher extraction accuracy, S16), definitions/statistics/comparisons/steps as evidence units (+41–62% influence, S04). NOT cosmetic formatting (null in S15).
- G6. **Retrieval eligibility and rank first**: crawlable, indexable, internally linked, authority-backed pages; in-context position 1–3 is worth an order of magnitude more than any content rewrite (EV-20, EV-17, EV-18).

**Plausible GEO practices (PROVISIONAL):**
- G7. Accurate JSON-LD (FAQPage/Product/Organization) as AI-visibility correlate (EV-14).
- G8. Visible publication/update dates + substantive freshness (EV-09).
- G9. Off-site earned-media presence as GEO lever (EV-08, EV-21, EV-32) — on-site build must *support* it (citable assets, press/insights hub) but cannot substitute for it.
- G10. Entity clarity and consistent naming to aid machine disambiguation (EV-10, EV-12 mechanism).

**Experimental GEO practices (EXPERIMENT only):**
- G11. In-answer prominence optimisation (C6: answer-side position is observational only).
- G12. Any "conversational SEO" surface rewrite without evidence value (EV-20: 3/54 significant; EV-31: can impair retrieval).
- G13. llms.txt / ai.txt-style files — MIXED EVIDENCE: ai.txt non-significant in S14's 1,508-site regression; an llms.txt-inspired prepended guidance summary was one of only 3 significantly positive tactics in C-SEO Bench (narrow: gpt-4o-mini, retail/games only, EV-20). MAY/P3, trivial cost, no promised effect (REQ-GEO-05).
- G14. S16's numeric structure targets (heading depth 3–5; 150–300-word chunks; 25–35% structured elements; 5–10% emphasis; link density 0.15–0.20) — SHOULD-level heuristics from one LLM-judged study (EV-23); adopt as design guidance, validate via the measurement harness.

**GEO anti-patterns (DO NOT):** keyword stuffing (EV-02); adversarial/hidden text sequences (EV-16); scaled near-duplicate "GEO pages" (S05's competition-erosion + spam policy); fabricated statistics/quotations/citations (violates §25 and destroys the trust signals that drive citation — EV-22).

**GEO expectation setting (from S05, VALIDATED):** effects are stochastic, engine-specific, and non-permanent; run-to-run variability is high; no technique in the reviewed literature shows stable longitudinal cross-platform causal effect on organic discoverability. Hence the mandatory measurement harness (Parts 37–38).

## PART 10 — AIO / GOOGLE AI OVERVIEW FINDINGS

AIO is analysed separately per §16. Corpus evidence touching Google AI Overviews / Gemini-grounded search specifically. Signal classes per §16: ORGANIC RANKING SIGNAL / AI OVERVIEW VISIBILITY SIGNAL / BOTH / UNCLEAR.

- **AIO-1 (VALIDATED):** Google AI Overview is explicitly inside the citation-selection/absorption measurement frame (S04's dataset covers "ChatGPT, Google AI Overview/Gemini, and Perplexity"). High-influence pages in that dataset are longer, structured, definition/number/comparison/step-rich → the AIO extraction spec (Part 17) is built on these features. Signal class: **AI OVERVIEW VISIBILITY SIGNAL**.
- **AIO-2 (VALIDATED):** Gemini 2.5 Flash with Search grounding overlaps Google top-10 only 11.1% mean (EV-06) and is brand-heavy on transactional queries (68.2% brand citations) while tilting earned on consideration (67%) (EV-08). → AIO source selection ≠ organic ranking; brand-owned pages have a real AIO lane on transactional/brand queries. Signal class: **BOTH, intent-dependent**.
- **AIO-3 (PROVISIONAL):** Freshness: Gemini/AI-Overview-adjacent evidence (S13: Gemini largest web-grounding lift; S02: AI engines fresher than Google organic) → dated, maintained pages. Signal class: **AI OVERVIEW VISIBILITY SIGNAL** (weighting vs organic: UNCLEAR).
- **AIO-4 (PROVISIONAL):** Passage-level extractability — concise direct answers, definitional passages, lists, tables (supported by EV-19/EV-23 structure findings + EV-14 FAQPage correlation). Signal class: **AI OVERVIEW VISIBILITY SIGNAL**.
- **AIO-5 (VALIDATED, negative):** Organic #1 does not guarantee AIO citation (EV-06; overlap medians 0–14.3% across engines). Do not assume ranking → inclusion. Signal class: **ORGANIC RANKING SIGNAL ≠ AI OVERVIEW VISIBILITY SIGNAL**.
- **AIO-6 (HYPOTHESIS):** Query fan-out/passage retrieval mechanics. The corpus contains no primary evidence on Google's internal fan-out; treated as UNCLEAR. No requirements are hung on it beyond passage-level self-containment (independently justified).
- **AIO-7 (VALIDATED):** AIO visibility is query-, user-, location-, device-, and time-variant (S05's variability findings; S02's intent-dependent source mix). → observational validation only (Part 37).
- **AIO-8 (VALIDATED — direct AIO measurement):** AIO draws from a different source ecosystem than organic Google: **53% of AIO-cited domains are outside the organic top 10; 27% are outside the top 100** (S21: 4,706 queries, US+DE). AIO source sets are unstable: 18% page overlap over two months vs 45% organic; temperature-0 reruns flip 9–28% of decisions; minor paraphrases shift AIO sources more than classic results. Signal class: **AI OVERVIEW VISIBILITY SIGNAL** — the strongest evidence yet that organic rank ≠ AIO citation.
- **AIO-9 (VALIDATED — activation):** AIO activation is query-form-dependent: ~13.7% of 55,393 trending queries overall but **~64.7% for question-phrased queries** (S22); 51.5% in Grossman's representative sample — the difference is query-mix, not contradiction. Implementation consequence: question-form intents are the AIO-dense surface → question-mapped headings and answer capsules target exactly the queries where AIO appears. Signal class: **AI OVERVIEW VISIBILITY SIGNAL**.
- **AIO-10 (PROVISIONAL — quality threshold):** AIO cites quality-filtered pages: mean GEO-16 score 0.687, 72% citation rate, 11.0/16 pillar hits among cited pages; strongest pillar correlations with citation: Metadata & Freshness r=0.68, Semantic HTML r=0.65, Structured Data r=0.63, Evidence & Citations r=0.61, Authority & Trust r=0.59, Internal Linking r=0.57 (all p<0.001); pages at G≥0.70 with ≥12 pillar hits hit a 78% cross-engine citation rate (S07; 1,100 URLs, B2B SaaS, observational). Signal class: **AI OVERVIEW VISIBILITY SIGNAL**. Directly anchors Parts 17/19/21/22 requirement priorities.
- **AIO-11 (VALIDATED — breadth vs influence):** AIO is a breadth engine: ~12.06 mean citations per prompt (max 37) with low per-source absorption (mean influence 0.058 vs ChatGPT 0.271) (S04). Being cited by AIO ≠ shaping the answer; absorption features (definitions, statistics, comparisons, steps, semantic alignment) decide influence. Signal class: **BOTH** (selection and absorption are separate outcomes — measure both, Part 37).
- **AIO-12 (VALIDATED — fidelity gap as opportunity):** ~11% of 98,020 AIO atomic claims were insufficiently supported by their citations (S22 via S05); only 51.5% of sentences fully supported in the foundational multi-engine fidelity audit (S25). Pages whose claims are exactly, verifiably supported give engines a lower-risk citation. Signal class: **AI OVERVIEW VISIBILITY SIGNAL** (provenance/spec accuracy, REQ-CONT-09).

Every AIO recommendation in Part 17 carries: AIO EVIDENCE / AIO OBJECTIVE / PAGE COMPONENT / CONTENT REQUIREMENT / TECHNICAL REQUIREMENT / IMPLEMENTATION / VALIDATION / CONFIDENCE, per §17.

## PART 11 — OTHER AI ANSWER-ENGINE FINDINGS

Per-engine evidence summary (do NOT generalise across engines — §18). Consolidated from all seven executions:

| Engine | Corpus evidence | Practical consequence |
|--------|-----------------|------------------------|
| **ChatGPT (GPT-4o/4o-mini, search-enabled)** | Lowest Google overlap (4.0% mean, 0% median, EV-06); earned-tilted on consideration (77.9%), brand-collapsed on transactional (60%); broadest brand coverage from priors (S13); cites fewer sources but higher per-citation influence (S04); 16% of ranked entities cited from memory with zero snippet support (EV-10); FAQPage/Product schema + technical hygiene correlate with visibility (S14); 57.8% of repetitions never activate web search (EV-18) | Win via: evidence-rich authoritative pages + earned media + accurate schema; priors matter → long-term public-record presence (Wikipedia/Wikidata, historical coverage) for established brands; fresh retrievable content for niche brands |
| **Perplexity (Sonar Pro)** | Highest AI–Google overlap (15.2%) but still low; most retrieval-dependent (S13: 35→49 brands with web); most balanced source mix; lowest quality selectivity (GEO-16 mean 0.300, 45% citation rate — S07); referring domains + community presence predict visibility (S10); GEO tactics validated on it directly (S01: Quotation +22%, Statistics +37%) | Most "winnable" engine via on-site work: retrieval-optimised, fresh, structured, citable pages + classic authority; technical SEO fundamentals matter disproportionately |
| **Gemini / Google AI surfaces** | Brand-heavy (68.2% brand on transactional, EV-08); biggest web-grounding lift (S13); freshness-sensitive (EV-09); included in S04's absorption dataset; closest to Google's balanced organic mix (26% brand/34% social/41% earned per D6) | Brand/transactional pages can win AIO lanes; keep Google organic strong (shared infrastructure); ensure presence in authoritative web sources (news, rankings, "best of" lists) |
| **Claude (4.5 Sonnet)** | Most selective: 1.1% social, 85.9% earned on consideration (EV-08); freshest citations (62.3d CE median, EV-09); institutional-authority concentration in health (97.8% — S18); rides Brave Search retrieval (S18); initially returned no links without explicit search prompting (S02 note) | Hardest engine: requires earned/institutional corroboration and recent publication dates; on-site alone rarely sufficient |
| **Bing/Copilot** | Corpus-light. Only indirect evidence (S14 notes Microsoft confirms schema use in Copilot). UNCLEAR | Apply the universal spec (robust SEO, structured data, machine-readable facts, IndexNow optional); validate with current official Microsoft guidance and observation |
| **Cross-engine** | Low overlap everywhere (EV-06); engines converge toward shared concentrated sources on niche topics (EV-07); cross-platform source overlap Jaccard ≈0.12 (EV-24); measurement must be multi-engine (EV-24, EV-33) | Portfolio strategy; never single-engine tuning; separate per-engine monitoring |

## PART 12 — UNIVERSAL SEO/GEO/AIO PRINCIPLES

These twelve principles are the compressed decision rules every specification below traces back to (consensus of all seven executions):

- **P-1. Retrieval is the gate.** If a page cannot be crawled, indexed, rendered, and retrieved, no content tactic matters. (EV-17, EV-18, S01 pipeline)
- **P-2. Citation is the bottleneck after retrieval.** Once retrieved, completeness, evidence, structure, trust, and freshness decide citation. (EV-19, EV-22)
- **P-3. Organic rank and AI citation are separate outcomes.** Engineer and measure them separately. (EV-06, EV-30)
- **P-4. Evidence density wins.** Statistics, quotations, citations, definitions, comparisons, steps — real ones, never fabricated. (EV-01, EV-19)
- **P-5. Clarity is a ranking input.** Fluency and readability lifts are causal in GE settings. (EV-04)
- **P-6. Structure is infrastructure.** Semantic HTML, heading hierarchy, chunked sections, tables, lists — for humans, crawlers, and extractors alike. (EV-14, EV-23)
- **P-7. Freshness is machine-readable maintenance.** Visible dates + `datePublished`/`dateModified` + substantive updates. (EV-09)
- **P-8. Engines differ; build a portfolio.** No single-engine tuning; measure across engines. (EV-06, EV-13, EV-24)
- **P-9. On-site cannot do it all.** Earned media, reference presence, and community presence are GEO inputs; the site's job is to be citable and to host citable assets. (EV-08, EV-12, EV-17, EV-21, EV-32)
- **P-10. Entity fame decides the lever.** Niche entities win through retrieval; famous entities defend through the public record. Assess per topic. (EV-10)
- **P-11. Never manipulate.** No hidden text, adversarial sequences, fabricated evidence, schema spam, or scaled near-duplicates. Engines are incentivised and increasingly able to defend. (EV-15, EV-16, EV-02)
- **P-12. Measure or it didn't happen.** Fixed prompt panels, multi-engine sampling, observational AIO/GEO validation, and regression QA are build deliverables. (EV-18, EV-24, EV-33)

Supporting human-first controls (master prompt §84): human-first accuracy outranks speculative optimisation · no recommendation is mandatory unless evidence strength and compliance justify it · every important recommendation traces to evidence or is explicitly labelled standards-based judgement · never confuse correlation with causation · never generalise one engine/vertical/language/intent to all · prefer visible semantic HTML over information locked in imagery/canvas/JS-only state · structured data describes true visible content · original evidence only where genuinely possessed · freshness is truthful maintenance, not date manipulation · off-site earned authority is a workstream, not an excuse for link spam · measure branded recognition, unbranded discovery, citations, absorption, referral traffic, and conversion separately · no "GEO score" replaces direct outcome measurement · every implementation passes mobile, tablet, desktop, accessibility, performance, and regression checks.

---

## PART 13 — SITE ARCHITECTURE SPECIFICATION

Evidence basis: P-1 (retrieval gate), EV-17 (authority/crawl foundations predict AI discovery), EV-14 (robots.txt/mobile/structure correlations), LEVEL-1 ANCHOR (stable official guidance). Requirement fields per §63: ID | classification | MUST/SHOULD/MAY/EXPERIMENT/DO-NOT | priority | evidence.

**REQ-ARCH-01 — Topic-coherent information architecture.** GLOBAL · MUST · P0. Organise the site into a shallow hierarchy of topic hubs: `Home → Hub (topic/service/category) → Spoke (specific intent page)`. Every indexable page MUST belong to exactly one primary hub and MUST be reachable via crawlable HTML links from its hub. Decision logic for the implementing AI: derive hubs from the site's primary query/entity clusters (§19 search-intent analysis), not from org-chart or CMS defaults. Do not force every website into a blog/category template — infer architecture from the site's actual entity model, query set, and user journeys. Evidence: EV-17, EV-18, LEVEL-1 ANCHOR. Validation: crawl (Screaming Frog or equivalent) — 100% of indexable pages reachable ≤3 clicks from home; zero orphan pages.

**REQ-ARCH-02 — Crawl depth ≤3 for priority pages.** GLOBAL · MUST · P1. Priority pages (money pages, hub pages, citable assets) MUST sit at crawl depth ≤3 from the homepage. Evidence: P-1 + LEVEL-1 ANCHOR. Validation: crawler depth report; PASS = no priority page >3.

**REQ-ARCH-03 — URL architecture.** GLOBAL · MUST · P1. URLs MUST be lowercase, hyphen-separated, human-readable, stable, and free of session/tracking parameters. One canonical form per document: enforce a single host (www vs non-www), single protocol (HTTPS), single trailing-slash policy; redirect all variants 301 to the canonical form. Keep paths short and descriptive of the page's primary entity/intent (`/hub/spoke/`). Preserve stable URLs — avoid unnecessary URL churn; if URLs must change, map one-to-one 301 redirects and update internal links/canonicals/sitemaps. Evidence: LEVEL-1 ANCHOR; stable URLs/titles act as retrieval handles. Validation: crawl + HTTP checks — every variant 301s in ≤1 hop; no 200 duplicates; no redirect chains >1.

**REQ-ARCH-04 — Breadcrumbs on every non-home page.** TEMPLATE · MUST · P2. Visible breadcrumb trail reflecting the IA hierarchy, marked up with BreadcrumbList JSON-LD (Part 19). Evidence: LEVEL-1 ANCHOR; supports entity/relationship clarity (EV-23 structure). Validation: rendered-DOM check + Rich Results Test.

**REQ-ARCH-05 — Pagination & faceted navigation control.** CONDITIONAL (sites with listings/filters) · MUST · P1. Paginated series MUST be crawlable via plain `<a href>` links; faceted/filter URLs MUST be canonicalised or noindexed unless a facet combination has independent search demand (decision logic: check query data; if no demand → `noindex,follow` + canonical to the unfiltered page; if demand → create a static, curated landing URL). Avoid crawl traps: no infinite calendar/facet spaces. Evidence: LEVEL-1 ANCHOR; P-1 (crawl budget protects retrieval). Validation: crawl simulation; log-file spot check; PASS = no infinite URL space, no duplicate-content clusters.

**REQ-ARCH-06 — Localisation architecture (only when multi-region/language).** CONDITIONAL · MUST · P1. One language/region per URL; `hreflang` reciprocal annotations; x-default present; canonicals self-referential per locale. Use language/region structure only after identifying local search intent and content ownership. Evidence: LEVEL-1 ANCHOR; EV-21 (language swaps source ecosystems — localisation is strategic, not just technical). Validation: hreflang audit (reciprocity PASS).

**REQ-ARCH-07 — No doorway/clone pages.** GLOBAL · DO-NOT · P0. No near-duplicate location/keyword variant pages (§45, §54). Where similar pages are justified, each MUST carry ≥50% unique, locally-relevant, evidence-bearing content (rule of thumb; the hard rule is: each page must independently satisfy a distinct intent). Evidence: §55 anti-spam + EV-18 (scaled tactics erode). Validation: duplicate-content crawl (simhash/clustering) — no cluster of indexable pages with near-identical body content.

**REQ-ARCH-08 — Local architecture (only when local intent exists).** CONDITIONAL · MUST · P1. Create location pages only where the site can provide real location/service evidence and materially distinct usefulness; differentiate service areas with genuine local evidence (projects, staff, testimonials, coverage detail) — never doorway-style keyword-swapped location pages. Evidence: §45 + EV-21 (local AI/Google overlap is exceptionally low — dentists 11.9%, auto repair 2.5% — so local pages need genuine local authority). Validation: per-location differentiation audit.

---

## PART 14 — PAGE ARCHITECTURE SPECIFICATION

Evidence basis: EV-19/EV-23 (structure→citation), EV-01/EV-22 (evidence blocks), EV-26 (intent-first), EV-14 (h2/h3), §22/§27 of the master prompt. No arbitrary universal template overrides search intent.

**REQ-PAGE-01 — Intent-first page brief.** PAGE-SPECIFIC · MUST · P0. Before any page is built or edited, produce its intent brief: PRIMARY QUERY/TOPIC · PRIMARY INTENT (informational/commercial/transactional/navigational/local/comparison/definition/troubleshooting/high-consideration/research) · SECONDARY INTENTS · USER'S CORE PROBLEM · QUESTIONS THE USER EXPECTS ANSWERED · EXPECTED CONTENT FORMAT & DEPTH · REQUIRED ENTITIES · SUPPORTING SUBTOPICS · CONVERSION INTENT · PAGE TYPE. The page's architecture MUST follow the brief. Evidence: EV-26 (intent-modelled optimisation beats single-aspect), EV-22. Validation: brief exists and page sections map 1:1 to expected questions.

**REQ-PAGE-02 — Answer-first information hierarchy.** TEMPLATE · MUST · P1. Each page MUST present its primary answer/offer early: H1 (primary topic) → concise introductory/answer block (the "answer capsule": 40–80 words that directly resolve the primary intent, self-contained, entity-explicit) → supporting sections in descending importance. Do not bury the primary answer below hero imagery, sliders, or marketing preamble. For transactional intent, expose product/service essentials immediately. Evidence: EV-19 (absorption-ready pages), EV-23 (macro structure), EV-22 (completeness). Mobile: answer capsule visible without interaction (no accordions/tabs gating it). Validation: rendered DOM order check; PASS = answer capsule is the first substantive text under the H1 in both source and rendered HTML.

**REQ-PAGE-03 — Semantic sectioning.** TEMPLATE · MUST · P1. One `<h1>` per page stating the primary topic; `<h2>` for major sections; `<h3>` for subsections; never skip levels for styling; sections wrapped in `<section>`/`<article>` with headings, inside `<main>`; navigation in `<nav>`; supplementary content in `<aside>`; page header/footer in `<header>`/`<footer>`. Heading level is chosen by content meaning, never by visual size. Evidence: EV-14 (h2 OR≈3.3, h3 OR≈2.3 for ChatGPT visibility), EV-23, WCAG (LEVEL-1). Validation: heading-outline audit (no skips, single h1); landmark audit.

**REQ-PAGE-04 — Evidence blocks.** TEMPLATE · MUST (for informational/commercial pages) · P1. Every substantive claim section MUST carry at least one of: a specific statistic with named source, a quotation with attribution, a comparison, a concrete example, or first-party data — marked up as normal visible content (never hidden). Evidence: EV-01 (citations/quotes/statistics causal), EV-22 (trust/completeness), EV-19 (numerical facts/comparisons in high-influence pages). Validation: content audit per template; PASS = each `<h2>` section contains ≥1 evidence element or is explicitly presentational.

**REQ-PAGE-05 — Comparison tables where intent is comparative.** CONDITIONAL · SHOULD · P2. For comparison/"best/X vs Y" intents, include a real `<table>` (not divs) with `<th>` headers, comparing the relevant entities on decision-relevant attributes. Evidence: EV-19 (comparisons in high-influence pages), EV-23, EV-32 (listicles/comparisons are the most-cited format). Mobile: tables MUST NOT cause document-level horizontal overflow — wrap in a horizontally scrollable container (`overflow-x:auto` on a wrapper, `role="region" aria-label`) or reflow to cards. Validation: Part 36 table tests.

**REQ-PAGE-06 — FAQ sections only when justified.** CONDITIONAL · MAY · P2. Include an FAQ section only when real users demonstrably ask those questions (query data, support logs, sales calls). Each Q&A MUST be visible on the page and may be marked up FAQPage (Part 19). Never fabricate FAQs for schema; never convert general content into Q&A shapes as an AI tactic (C9). Evidence: EV-14 (FAQPage correlation) + §25 anti-fabrication + EV-19 (Q&A format alone −5.7% absorption). Validation: each FAQ traceable to a real query source.

**REQ-PAGE-07 — CTA placement without content obstruction.** TEMPLATE · MUST · P2. CTAs present above the fold and at logical decision points, placed where they follow user intent, but MUST NOT obscure primary content, MUST NOT be intrusive interstitials, MUST NOT interrupt answer extraction, and MUST NOT push the answer capsule down on mobile. Evidence: LEVEL-1 (page experience), §84 human-first. Validation: device QA matrix (Part 36).

**REQ-PAGE-08 — Related-content module.** TEMPLATE · SHOULD · P2. Each spoke page SHOULD end with a "related" module linking 3–6 contextually related pages (same hub or logical next-step intents) with descriptive anchors. Evidence: P-1 (internal discovery), EV-23. Validation: crawl — module links present and crawlable.

**REQ-PAGE-09 — Above-the-fold composition.** TEMPLATE · MUST · P2. Above the fold: H1 + concise value/answer statement + essential proof or key facts + primary next action when commercial. Do not bury the actual answer beneath generic marketing copy; avoid oversized decorative heroes that push useful content below the fold. Evidence: EV-19, EV-22, LEVEL-1 page experience. Validation: viewport render check at mobile/tablet/desktop sizes.

---

## PART 15 — CONTENT SPECIFICATION

Evidence basis: EV-01, EV-04, EV-05, EV-09, EV-19, EV-22, EV-26, EV-27; §25–§27, §51–§54.

**REQ-CONT-01 — Micro-specification per section.** PAGE-SPECIFIC · MUST · P1. Every significant section is specified before writing with: SECTION PURPOSE · SEARCH INTENT · QUERY/QUESTION SERVED · HEADING LEVEL · PLACEMENT · REQUIRED SUBTOPICS · REQUIRED FACTS · REQUIRED ENTITIES · ANSWER FORMAT (paragraph/list/table/steps) · APPROXIMATE DEPTH (from intent, not word-count folklore) · EVIDENCE REQUIREMENT · CITATION REQUIREMENT · INTERNAL LINKS · EXTERNAL REFERENCES · AIO/GEO EXTRACTION CONSIDERATION · MOBILE PRESENTATION · CTA RELATIONSHIP (§27). Validation: section checklist sign-off.

**REQ-CONT-02 — Evidence-dense writing.** GLOBAL · MUST · P1. Content MUST include, where factually available: specific statistics (named source + year), direct quotations (attributed), citations to authoritative external sources for material claims, concrete examples, and original first-party detail (process, data, cases) where the business genuinely has it. NEVER fabricate experience, credentials, case studies, data, customers, reviews, tests, awards, or locations (§25). Evidence: EV-01 (causal), EV-22, EV-19. Validation: claim-by-claim provenance audit (Part 36); PASS = every material claim either cited or clearly first-party.

**REQ-CONT-03 — Direct-answer structures.** TEMPLATE · MUST · P1. For question-type intents, the section MUST open with a 1–3 sentence direct answer before elaboration (inverted pyramid). Definitions for definitional intents ("X is …" in the first sentence). Ordered steps for procedural intents. Evidence: EV-19 (definitions/steps in high-influence pages), EV-23, §51. Validation: extraction test — each answer block must be self-contained when read aloud in isolation.

**REQ-CONT-04 — Fluency and clarity pass.** GLOBAL · MUST · P1. All primary content passes a clarity edit: short sentences where possible, active voice, no jargon without definition, consistent terminology. Evidence: EV-04 (causal 15–30% in GE settings). Validation: readability check + editorial review; PASS = no section flagged incomprehensible by a non-specialist reviewer.

**REQ-CONT-05 — Domain-appropriate tactic weighting.** TEMPLATE · SHOULD · P2. Choose evidence emphasis by page domain/intent (EV-05): factual/legal/gov → statistics + citations; people/society/explanatory/history → quotations; debate/opinion → authoritative tone; how-to → steps. Decision logic: map page intent → tactic table; do not apply all tactics everywhere. Evidence: EV-05, EV-26, EV-27. Validation: brief documents chosen emphasis.

**REQ-CONT-06 — Freshness policy.** TEMPLATE · MUST · P1. Each page type declares: whether freshness matters (news/prices/regulations vs evergreen), update triggers, obsolete-info inventory, and visible date policy. Time-sensitive pages MUST show human-visible publication + updated dates and carry matching `datePublished`/`dateModified` in schema. NEVER update dates without substantive change (§53). Evidence: EV-09 (AI engines cite newer content; Claude CE median 62.3d vs Google 130.4d). Validation: date-consistency check (visible date == schema date == sitemap lastmod within tolerance).

**REQ-CONT-07 — Information gain.** PAGE-SPECIFIC · SHOULD · P2. Each priority page SHOULD offer at least one element competitors lack: original data, a calculator/tool, a comparison table, original photos/diagrams, expert commentary, a real case study, a downloadable dataset, or a unique synthesis. If none is honestly available, do not invent it — improve completeness and clarity instead. Evidence: §26 + EV-19 (evidence-rich pages), EV-22 (completeness). Validation: competitor diff audit (Part 36).

**REQ-CONT-08 — No scaled thin content.** GLOBAL · DO-NOT · P0. No programmatic near-duplicates, spun text, copied FAQs, or AI-generated pages without human review and genuine differentiation (§54). Where templated pages are legitimate (e.g., locations), each MUST meet the differentiation bar of REQ-ARCH-07. Evidence: EV-18 (competition erosion), §55. Validation: duplicate-content crawl.

**REQ-CONT-09 — Claim-level provenance for YMYL/material claims.** CONDITIONAL · MUST · P1. Medical, legal, financial, scientific, technical, or otherwise material claims MUST cite authoritative sources (primary where practical), with visible attribution and dates where recency matters. Evidence: EV-22 (trust cues drive citation), EV-25 (selective engines lean on institutional authority), AIO-12 (fidelity gap), §52. Validation: provenance audit; PASS = 100% material claims sourced.

**REQ-CONT-10 — Decision-critical facts explicit, confident, and consistent.** TEMPLATE · MUST · P1. Where a page serves a decision intent, the facts that drive decisions MUST appear as explicit text, not implied or image-only: prices/pricing basis (where the business model allows), specifications, availability, locations served, timeframes, and dates. Claims MUST be stated confidently when supported (no habitual hedging — hedged language carried OR 2.7–754 *against* citation in controlled trials), MUST carry evidence (unsupported claims penalised, OR 2.1–>10k against), and MUST be internally consistent across the page and site (contradictions penalised, OR 1.7–4.1 against). NEVER state a price/spec that isn't real (§25). Evidence: EV-22 (gatekeepers: explicit price OR 6.3–>10k; recency OR 14.4–>10k), EV-30 (fidelity gap). Validation: decision-fact checklist per template; consistency audit across pages.

**REQ-CONT-11 — Preserve topical relevance through every rewrite.** GLOBAL · MUST · P1. Any content optimisation MUST retain the terminology and query-term coverage a retrieval system needs (keyword coverage OR 9.4–40, EV-22); rewrites add evidence, clarity, and structure — they never strip relevance. Every body-text rewrite requires a before/after retrieval-presence check on the page's priority queries (EV-31). Validation: retrieval-presence diff in the monitoring harness; PASS = no priority query term dropped.

**REQ-CONT-12 — No vague superlatives; substantiate or remove.** GLOBAL · MUST · P2. Avoid unsubstantiated "best", "leading", "trusted" claims; either substantiate with evidence or remove. Maintain a claim register for high-impact factual/commercial claims. Evidence: EV-22 (unsupported claims penalised), §25. Validation: claim register audit; PASS = each claim substantiated or softened/removed.

---

## PART 16 — ENTITY / SEMANTIC SPECIFICATION

Evidence basis: EV-10 (pre-training vs retrieval), EV-12 (invisibility gap), EV-17 (recognition vs discovery), §28.

**REQ-ENT-01 — Entity inventory and disambiguation.** GLOBAL · MUST · P1. Maintain an entity inventory: the organisation, its people, services/products, locations, and core topics — each with a canonical name, aliases, and a one-line definition. Use canonical names consistently across pages, schema, metadata, navigation, and external profiles. Where a name is ambiguous (common word, acronym), disambiguate on first use per page. Use explicit entity names on first reference; do not rely on ambiguous pronouns or visual proximity to establish identity. Evidence: EV-10, EV-12. Validation: naming-consistency lint across templates.

**REQ-ENT-02 — Entity home pages.** GLOBAL · MUST · P1. The organisation MUST have: an About page (who, what, where, leadership, history, contact), a Contact page (full NAP where applicable), and per-service/product entity pages. These are the machine-readable "entity ground truth" of the site. Evidence: EV-12 (content gaps → invisibility), §32. Validation: pages exist, are linked from main nav/footer, and are crawlable.

**REQ-ENT-03 — Explicit relationships.** TEMPLATE · SHOULD · P2. Express relationships explicitly in copy and schema: "X is a service of [Organisation]", "[Person] is [Role] at [Organisation]", "[Service] is available in [Place]". Use internal links and schema (`sameAs`, `about`, `mentions`, `provider`, `areaServed`) to make the graph explicit. Use `sameAs` only for authoritative external profiles representing the same entity, not loosely related pages. NEVER manufacture entities or relationships (§28). Evidence: EV-10 mechanism + EV-23. Validation: schema graph check + content review.

**REQ-ENT-04 — Entity-fame decision logic (per §60).** PAGE-SPECIFIC · MUST · P2. For each priority topic, classify the site's entity as LOW-PRIOR (niche/unknown) or HIGH-PRIOR (well-known) using: branded search volume, knowledge-panel presence, reference-work presence. LOW-PRIOR → weight effort toward retrieval-track optimisation (Parts 17–18, 21–23) and off-site citation building. HIGH-PRIOR → weight toward accuracy/consistency of the public record and freshness. Evidence: EV-10, EV-17. Validation: classification recorded in the page brief.

**REQ-ENT-05 — Off-site entity presence (site-supported).** GLOBAL · SHOULD · P2 (off-site, ongoing). The site MUST support off-site entity building by publishing citable assets (original research, data, definitive guides, press-ready facts) and keeping organisation facts consistent and machine-readable. Where legitimate, maintain accurate Wikipedia/Wikidata/reference entries (only if notability criteria are genuinely met — never fabricate). Evidence: EV-12 (58% of mentions from training data), EV-08/EV-21 (earned media), EV-17 (referring domains, community presence), EV-32 (2.9% own-domain citations). Validation: quarterly entity audit (Part 38).

---

## PART 17 — AIO CONTENT / EXTRACTION SPECIFICATION

Dedicated AIO spec per §17. Every entry: AIO EVIDENCE · AIO OBJECTIVE · PAGE COMPONENT · CONTENT REQUIREMENT · TECHNICAL REQUIREMENT · IMPLEMENTATION · VALIDATION · CONFIDENCE.

**REQ-AIO-01 — Answer capsules on intent pages.**
AIO EVIDENCE: EV-19 (high-influence pages in a dataset explicitly including Google AI Overview are structured, definition/fact/comparison/step-rich), EV-27 (conclusion-first ordering is an extracted cross-engine preference rule), EV-30 (question-form queries activate AIO at ~64.7%), EV-23, EV-04. Note the C9 ruling: the capsule is a conclusion-first direct-answer paragraph, NOT a Q&A-formatted block (Q&A formatting alone reduced absorption −5.7% in S04). AIO OBJECTIVE: make the primary answer extractable as a self-contained passage. PAGE COMPONENT: first content block under H1. CONTENT REQUIREMENT: 40–80 words, direct answer first, entity-explicit, no pronouns without antecedents, no click-dependent context. TECHNICAL REQUIREMENT: plain server-rendered HTML paragraph(s) in source HTML (not JS-injected, not in an accordion). IMPLEMENTATION: add an "answer capsule" component to the page template directly after the H1. VALIDATION: source-HTML grep (capsule present pre-JS); extraction read-aloud test; observational AIO check (Part 37). CONFIDENCE: MEDIUM-HIGH (VALIDATED for GEO; PROVISIONAL-to-VALIDATED for AIO given EV-30's direct AIO measurement).

**REQ-AIO-02 — Question-mapped heading structure.**
AIO EVIDENCE: EV-23 (macro structure→citation), EV-14 (h2/h3 OR 3.3/2.3), EV-26 (intent-modelled content), EV-30 (question-form queries are the AIO-dense surface). AIO OBJECTIVE: let passage-level retrieval map headings to sub-queries. PAGE COMPONENT: all section headings. CONTENT REQUIREMENT: headings phrase the question/topic they answer ("How much does X cost?", "X vs Y: which is better for Z?") where natural; no clever-but-empty headings; no generic "Overview". TECHNICAL: semantic h2/h3 hierarchy (REQ-PAGE-03). IMPLEMENTATION: rewrite headings per the intent brief. VALIDATION: heading audit; each h2 maps to a question in the brief. CONFIDENCE: MEDIUM-HIGH.

**REQ-AIO-03 — Structured evidence formats.**
AIO EVIDENCE: EV-19 (definitions +57.3%, numerical facts +61.6%, comparisons +55.3%, procedural steps +41.2% influence), EV-01 (statistics/citations/quotes causal in GE). AIO OBJECTIVE: provide liftable units of evidence. PAGE COMPONENT: body sections. CONTENT REQUIREMENT: per section, at least one of: definition sentence, statistic with source+year, comparison (table or explicit "X vs Y" prose), ordered steps, attributed quotation. TECHNICAL: real `<table>`, `<ol>`, `<blockquote>`/`<q>` elements — not images of text. IMPLEMENTATION: content build per REQ-CONT-02/03. VALIDATION: per-section evidence audit. CONFIDENCE: HIGH (GEO), MEDIUM-HIGH (AIO).

**REQ-AIO-04 — FAQ block with FAQPage schema (when justified — narrow scope per C9).**
AIO EVIDENCE: EV-14 (FAQPage OR≈13.3 for ChatGPT visibility — correlational), tempered by EV-19 (Q&A formatting alone reduced absorption −5.7%) and C9. AIO OBJECTIVE: serve genuinely asked questions with complete answers; make them machine-readable. PAGE COMPONENT: FAQ section + JSON-LD. CONTENT REQUIREMENT: real user questions (from query data/support logs), concise complete self-contained answers, visible on page. TECHNICAL: FAQPage JSON-LD matching visible content verbatim; accordion UI acceptable ONLY if answers remain in the DOM and visible to crawlers (prefer `details/summary` or open rendering; no `display:none` on indexable FAQ answers). IMPLEMENTATION: per REQ-PAGE-06 + Part 19. DO NOT: convert general content into Q&A shapes; fabricate FAQs to obtain schema. VALIDATION: Rich Results Test; schema-visible-content diff; each FAQ traceable to a real query source. CONFIDENCE: MEDIUM (correlational; scope deliberately narrow).

**REQ-AIO-05 — Date signalling.**
AIO EVIDENCE: EV-09 (AI engines cite fresher content; Google organic oldest medians); S07's strongest AIO pillar is Metadata & Freshness (r=0.68). AIO OBJECTIVE: make freshness machine-readable. PAGE COMPONENT: byline/date area + schema + sitemap. CONTENT: visible "Published/Last updated" dates on time-sensitive pages. TECHNICAL: `datePublished`/`dateModified` in Article/WebPage schema; sitemap `<lastmod>` consistent. IMPLEMENTATION: template + CMS fields; update only on substantive change. VALIDATION: three-way date consistency check. CONFIDENCE: MEDIUM-HIGH.

**REQ-AIO-06 — Author/provenance blocks.**
AIO EVIDENCE: EV-22 (trust cues), EV-25 (authority concentration on selective engines; commercial break-through sources "wear every credibility badge"), §32/§52; bounded by C12 (bylines not universally required). AIO OBJECTIVE: give source-selection systems verifiable provenance. PAGE COMPONENT: author byline block + About linkage. CONTENT: real author name, role, genuine credentials, link to author/About page; organisation identity consistent with schema. TECHNICAL: `author` (Person) in Article schema with `sameAs` where real profiles exist. NEVER fabricate authors/expertise. IMPLEMENTATION: template component. VALIDATION: provenance audit. CONFIDENCE: MEDIUM.

**REQ-AIO-07 — Crawl/render parity for AIO content.**
AIO EVIDENCE: P-1; S02's note that engines retrieve via search infrastructure; S04 found 27.1% of cited URLs not even scrapable. AIO OBJECTIVE: guarantee the answer content exists in what crawlers/renderers see. PAGE COMPONENT: all primary content. TECHNICAL: primary content in initial HTML (SSR/SSG or static); no interaction-gating; no `display:none` on indexable primary content. IMPLEMENTATION: per Parts 21–22. VALIDATION: fetch-and-render diff (source vs rendered), Google Search Console URL Inspection screenshot. CONFIDENCE: HIGH.

**AIO signal classification summary (per §16):** Organic-ranking-only: backlinks/authority, crawl hygiene. AIO-visibility-weighted: answer capsules, passage self-containment, structured evidence formats, freshness signalling, FAQ structure (conditional). Both: semantic structure, content completeness, page experience, entity clarity. Unclear (no requirement hung on it): query fan-out internals, exact AIO source-rank thresholds.

---

## PART 18 — GEO / GENERATIVE RETRIEVAL SPECIFICATION

**REQ-GEO-01 — Retrieval-first build order.** GLOBAL · MUST · P0. Implement Parts 21–23 (crawl, index, render, performance) before content-side GEO. Evidence: EV-17, EV-18, EV-20, P-1. Validation: P0 checklist passes before P1 GEO tasks begin.

**REQ-GEO-02 — Citable-asset program.** GLOBAL · SHOULD · P1 (content program). Publish assets designed to be cited by engines and earned media: original research/data studies, definitive reference guides, statistics pages, glossaries/definitions, tools/calculators. Each asset: crawlable, dated, authored, evidence-dense, and internally linked from hubs. Where genuinely justified, publish ranked/listicle-style comparison content — the single most-cited format (EV-32) — but only with real methodology and real data. Evidence: EV-08/EV-21 (earned media is the AI engines' preferred source class), EV-12 (content gaps → invisibility), EV-19, EV-32. Validation: asset exists per hub; Part 38 monitors citations to it.

**REQ-GEO-03 — Passage self-containment.** TEMPLATE · MUST · P1. Every section MUST make sense when extracted alone: entities named (not "it/this company"), numbers with units and sources, no dependence on preceding sections. Evidence: EV-19 (absorption), EV-23 (meso chunking), §51. Validation: extraction read-aloud test per section.

**REQ-GEO-04 — Multi-engine measurement harness.** GLOBAL · MUST · P1 (ops deliverable). Ship a fixed prompt panel (see Part 38): 30–100 buyer/category questions covering the site's intents (D6's protocol: 20–50 per priority topic across informational/consideration/transactional); run monthly across ChatGPT, Perplexity, Gemini, Google AI Overviews/AI Mode, Copilot, Claude; log mentions, citations, cited URLs, competitors. Evidence: EV-24, EV-33, EV-18 (variability → repeated measures). Validation: harness exists and first baseline recorded.

**REQ-GEO-05 — llms.txt (optional).** GLOBAL · MAY · P3. A concise `/llms.txt` pointing at key pages MAY be shipped. Mixed evidence: S14 found ai.txt non-significant (n=1,508); an llms.txt-inspired prepended guidance summary was one of only three significantly positive tactics in C-SEO Bench — but narrow (gpt-4o-mini, retail/games only) and congestion-prone (EV-20). Cost is trivial; promise nothing. Evidence: EV-14 (null), EV-20 (narrow positive). Validation: file serves 200 with valid Markdown. Classification: EXPERIMENTAL-MAY.

**REQ-GEO-06 — No adversarial optimisation.** GLOBAL · DO-NOT · P0. No hidden text, no prompt-injection strings, no STS-style token patterns, no cloaked LLM-only content, no fabricated quotations/statistics/citations. Evidence: EV-15, EV-16, EV-02. Validation: code review + content diff vs rendered page.

**REQ-GEO-07 — Stage-separated measurement (selection vs absorption).** GLOBAL · MUST · P1. Track whether the URL appears as a source (citation selection) AND whether its facts materially appear in the answer (absorption) as separate metrics — they diverge (EV-19: ChatGPT cites fewer, absorbs deeper; AIO cites broadly, absorbs shallowly). Evidence: EV-19. Validation: monitoring log has both fields per observation.

**REQ-GEO-08 — Intent-aware source strategy.** GLOBAL · SHOULD · P1. For consideration queries prioritise independent validation (earned media, reviews, comparisons); for transactional queries ensure first-party details are precise and extractable (price, specs, availability); for informational queries prioritise definitional/evidence-rich content. Evidence: EV-08, EV-05, EV-33. Validation: intent-to-strategy mapping in briefs.

**REQ-GEO-09 — Localisation of evidence, not just copy.** CONDITIONAL (multi-market) · SHOULD · P2. Localise terminology, evidence, sources, and examples per market; translation alone is insufficient where the target market differs — GPT swaps source ecosystems by language (EV-21). Evidence: EV-21. Validation: locale content review — not mere machine translation.

**REQ-GEO-10 — Discovery KPI separation.** GLOBAL · MUST · P1. Track branded recognition and unbranded category discovery as different outcomes (99.4% recognition vs 3.3% discovery — EV-17). Evidence: EV-17, EV-12. Validation: monitoring panel contains separate branded/unbranded query groups.

---

## PART 19 — STRUCTURED DATA SPECIFICATION

Evidence basis: EV-14 (FAQPage OR≈13.3 / Product OR≈4.1 correlational), C2 decision (implement for Level-1 search eligibility + machine comprehension; AI uplift provisional), §29. All schema: JSON-LD, server-rendered, exactly consistent with visible content. NEVER misleading schema; NEVER schema for its own sake; never schema purely because it exists.

**REQ-SCHEMA-01 — Organization (site-wide).** GLOBAL · MUST · P1. One `Organization` (or `LocalBusiness` where a physical/local business) node on the homepage (or site-wide via `@id`), with: `name`, `url`, `logo`, `contactPoint` (real), `sameAs` (real official profiles only), `address` where factual. Stable `@id` (e.g., `https://example.com/#org`) referenced by all other nodes. Where the business has genuine identifiers, registered identity, or credentials, expose them consistently. Validation: Rich Results Test + Schema.org validator; PASS = valid, no fabricated fields.

**REQ-SCHEMA-02 — WebSite + WebPage.** GLOBAL · MUST · P2. `WebSite` (name, url, publisher→`#org`) on the homepage; `WebPage` (or `CollectionPage` for hubs) per page with `url` = canonical, `name` = title, `isPartOf` → WebSite, `breadcrumb` → BreadcrumbList, `datePublished`/`dateModified` where meaningful, `about`/`mentions` for primary entities. Validation: per-template schema audit.

**REQ-SCHEMA-03 — BreadcrumbList.** TEMPLATE · MUST · P2. On every non-home page, matching visible breadcrumbs (REQ-ARCH-04), `itemListElement` URLs = canonical 200 URLs; item names equal visible breadcrumb labels. Validation: Rich Results Test.

**REQ-SCHEMA-04 — Article/BlogPosting.** CONDITIONAL (editorial content) · MUST · P1. For articles/guides: `headline`, `author` (Person, real), `datePublished`, `dateModified`, `image`, `publisher` → `#org`. Validation: RRT + date-consistency (REQ-AIO-05).

**REQ-SCHEMA-05 — Service / Product.** CONDITIONAL · MUST · P1. Service pages → `Service` (`provider` → `#org`, `areaServed`, `serviceType`, real `offers` if prices shown). Product pages → `Product` with real `offers` (price, currency, availability) and `aggregateRating`/`review` ONLY for genuine, on-page-visible reviews. Values from the data source, never hard-coded. Evidence: EV-14 (Product OR≈4.1). Validation: RRT; price/availability matches visible page.

**REQ-SCHEMA-06 — FAQPage.** CONDITIONAL · SHOULD · P2. Only on pages with a genuine visible FAQ section (REQ-PAGE-06); Q&A text must match visible content verbatim. Evidence: EV-14 (strongest correlate; correlational). Validation: RRT + verbatim match check.

**REQ-SCHEMA-07 — Person (authors/leadership).** CONDITIONAL · SHOULD · P2. Real people only: `name`, `jobTitle`, `worksFor` → `#org`, `sameAs` to real profiles. NEVER invented personas (§25). Validation: provenance audit.

**REQ-SCHEMA-08 — VideoObject/ImageObject/Event/Review/ItemList.** CONDITIONAL · MAY · P3. Only when the page genuinely contains that content, current eligibility/policy supports the markup, and visible-content consistency holds. Validation: RRT per template.

**REQ-SCHEMA-09 — Graph integrity.** GLOBAL · MUST · P1. All nodes interlinked via stable `@id`s; all URLs canonical; no orphaned schema islands; no markup of content absent from the page. Validation: schema-graph crawl (custom extraction + validator) — PASS = 0 errors, 0 invisible-content markup.

---

## PART 20 — INTERNAL LINKING SPECIFICATION

Evidence basis: P-1, EV-23, EV-17; §30. (Note: S14 found internal-link *count* non-significant for ChatGPT visibility — the requirement is justified by crawl/discovery Level-1 grounds and S07's Internal-Linking pillar r=0.57, not by a claimed direct AI effect.)

**REQ-IL-01 — Crawlable HTML anchors.** GLOBAL · MUST · P0. All internal navigation via `<a href>` (not JS-only click handlers). Links present in initial HTML. Validation: crawl with JS disabled — full site reachable.

**REQ-IL-02 — Hub↔spoke linking.** TEMPLATE · MUST · P1. Every spoke links up to its hub (breadcrumb + in-copy where natural); every hub links down to all its spokes. Evidence: P-1. Validation: crawl — bidirectional coverage 100%.

**REQ-IL-03 — Contextual in-copy links.** TEMPLATE · SHOULD · P1. Within explanatory copy, link to logically related pages with descriptive anchors (entity/topic names, not "click here"). Link evidence claims to deeper methodology/source pages where that improves trust and context. No repetitive exact-match anchor stuffing; vary naturally. Avoid arbitrary exact-match ratios. Evidence: §30 + P-1. Validation: anchor-text audit — no generic anchors on priority links; no single anchor text >60% of links to a given page (naturalness heuristic, not a ranking rule).

**REQ-IL-04 — Orphan prevention.** GLOBAL · MUST · P1. Every indexable page receives ≥1 internal link from a crawled page. Validation: crawl vs sitemap diff — zero orphans.

**REQ-IL-05 — Footer/nav link discipline.** TEMPLATE · SHOULD · P2. Global nav exposes hubs; footer exposes entity pages (About, Contact) and key hubs. No sitewide keyword-stuffed footer link blocks or hidden internal-link clouds. Validation: template review.

**REQ-IL-06 — Link maintenance.** GLOBAL · SHOULD · P1. Run orphan, broken-link, redirect-chain, and excessive-depth checks after every architecture change. Validation: crawler reports clean.

---

## PART 21 — TECHNICAL SEO SPECIFICATION

Evidence basis: LEVEL-1 ANCHOR throughout + EV-14 (robots.txt OR≈3.4, load time), P-1. §35 coverage.

**REQ-TECH-01 — Status codes & redirects.** GLOBAL · MUST · P0. Canonical URLs return 200; moved URLs 301 (single hop); removed URLs truthful 404/410; no soft 404s (empty pages returning 200); no redirect chains/loops; no 302 for permanent moves. Validation: full crawl + HTTP audit; PASS = 0 chains, 0 soft-404, 0 5xx.

**REQ-TECH-02 — Canonicals.** GLOBAL · MUST · P0. Every indexable page: self-referential `<link rel="canonical">` (absolute URL, correct host/protocol/slash policy). Duplicates/variants canonicalise to the canonical. Canonicals MUST agree with sitemap URLs, internal links, hreflang, and schema URLs (§82 contradiction audit). Validation: cross-check crawl (canonical vs sitemap vs in-links) — 100% agreement.

**REQ-TECH-03 — Robots meta / X-Robots-Tag.** GLOBAL · MUST · P0. Indexable pages: no `noindex`. Non-indexable (thank-you, internal search, staging): `noindex,follow`. Never `noindex` a page you want cited by AI engines (AI retrieval rides search indices — P-1). Validation: crawl meta audit.

**REQ-TECH-04 — JavaScript/rendering.** CONDITIONAL · MUST · P0. Primary content, internal links, metadata, and schema MUST be present in the initial HTML response (static/SSR) or reliably rendered without interaction. No interaction-gated primary content; no JS-injected titles/canonicals as the only copy; detect content flashes/removal after hydration; SPA deep links must render server-side or via reliable fallback. Decision logic: if the stack is an SPA, implement SSR/SSG for content routes; do not adopt SSR "because SEO" where content is already server-rendered (§38). Validation: source-vs-rendered DOM diff (primary content identical); GSC URL Inspection render check.

**REQ-TECH-05 — URL parameter handling.** CONDITIONAL · MUST · P1. Parameters for tracking/sorting MUST NOT create indexable duplicates (canonical to clean URL; noindex where appropriate); prevent uncontrolled crawl spaces. Validation: parameter crawl test.

**REQ-TECH-06 — HTTPS & security.** GLOBAL · MUST · P0. HTTPS everywhere; valid certificate; no mixed content; HSTS where possible; secure forms and dependencies; no intrusive/deceptive scripts. Evidence: LEVEL-1 + EV-15/EV-16 (trust posture). Validation: mixed-content scan; SSL test.

**REQ-TECH-07 — Metadata uniqueness.** TEMPLATE · MUST · P1. Unique `<title>` and meta description per indexable page, intent-aligned (Part 24 rules). No boilerplate duplication at scale; no arbitrary character-count folklore as hard laws — avoid truncation for UX/CTR, not as a ranking rule. Validation: crawl duplicate-metadata report = 0.

**REQ-TECH-08 — Image technical baseline.** TEMPLATE · MUST · P1. All content images: intrinsic dimensions set (width/height or aspect-ratio) to prevent CLS; descriptive `alt` (decorative images: empty alt); modern formats (AVIF/WebP with fallback); responsive `srcset`/`sizes`; compression; lazy-load below-the-fold only — NEVER lazy-load the LCP/hero image (§82 contradiction rule). Evidence: EV-14 (alt-text hygiene correlate) + LEVEL-1. Validation: Lighthouse + CLS audit.

**REQ-TECH-09 — Video (when present).** CONDITIONAL · SHOULD · P2. Videos: transcript + captions (accessibility + machine comprehension), VideoObject schema where maintained truthfully, poster thumbnail with dimensions, facade/lazy embed (no autoplaying third-party iframe in the initial load). Evidence: §34 + LEVEL-1. Validation: a11y audit + performance test.

**REQ-TECH-10 — Title/H1/SERP presentation.** TEMPLATE · MUST · P1. `<title>` states the primary topic + brand where useful; H1 aligns with title intent (not necessarily identical); descriptions are unique, intent-led, non-spammy; dynamically generated metadata must be deduplicated by design. Validation: metadata audit against intent briefs.

---

## PART 22 — CRAWLING / INDEXING SPECIFICATION

**REQ-CRAWL-01 — robots.txt.** GLOBAL · MUST · P0. Serve `/robots.txt` (200): allow all crawling of content and assets; disallow only true crawl traps (internal search results, admin, infinite spaces); NEVER block CSS/JS/assets needed for rendering; declare `Sitemap:` pointing at the sitemap index. Evidence: EV-14 (robots.txt OR≈3.4 — correlational but Level-1 sensible). Validation: robots tester; render check with blocked-resource report = 0.

**REQ-CRAWL-02 — XML sitemap(s).** GLOBAL · MUST · P1. Sitemap index + per-section sitemaps; ONLY canonical, indexable, 200 URLs; `<lastmod>` reflecting real content change (REQ-CONT-06); split at 50k URLs/50MB; image extensions where images matter. (C4: keep despite S14's confounded negative coefficient.) Validation: sitemap parse — 0 non-canonical/non-200/noindex URLs.

**REQ-CRAWL-03 — Index coverage monitoring.** GLOBAL · MUST · P1 (ops). GSC + Bing Webmaster Tools verified; index coverage reviewed post-launch and monthly; unexpected exclusions investigated. After deployment, inspect search-console indexing/crawl anomalies rather than assuming technical validity equals actual indexing. Evidence: P-1. Validation: accounts verified; baseline exported.

**REQ-CRAWL-04 — AI-crawler policy decision.** GLOBAL · DECISION REQUIRED · P1. Decide explicitly which AI crawlers (e.g., GPTBot, ClaudeBot, PerplexityBot, Google-Extended) are allowed in robots.txt. OPTIONS: A) Allow all (maximise training+retrieval presence — EV-12's 58% training-data share). B) Allow retrieval/search bots, block training bots (rights protection, slower training-data presence). C) Block all (maximum control, AI invisibility risk). SELECTED APPROACH: A by default for sites whose goal is visibility (this playbook's premise); document the decision; revisit quarterly. RATIONALE: blocking retrieval crawlers directly forfeits the citation channel (P-1). CONFIDENCE: HIGH that the decision must be explicit; MEDIUM on per-bot long-term consequences. IMPLEMENTATION: robots.txt groups per bot; log review. Validation: robots.txt audit + server-log bot verification.

**REQ-CRAWL-05 — IndexNow / ping (optional).** GLOBAL · MAY · P3. MAY support IndexNow for Bing-ecosystem freshness. Low cost; Bing-only. Validation: key file served; submission logs.

**REQ-CRAWL-06 — Access gating is an AI-visibility cost.** CONDITIONAL · DECISION REQUIRED · P2. Content behind logins, hard paywalls, or JS-gated modals is invisible to most retrieval pipelines; AutoGEO's extracted cross-engine rules include "full accessibility without logins/paywalls" (EV-27), and S04 found 27.1% of cited URLs in one audit were not even scrapable. DECISION: where the business model permits, keep priority content freely crawlable; where paywalls exist, use standards-compliant flexible sampling (e.g., paywall structured data per Google guidance) and ensure the answer-capsule-level summary is crawlable. RATIONALE: retrieval gate (P-1). CONFIDENCE: MEDIUM-HIGH. Validation: fetch priority pages as an unauthenticated agent — primary content present.

**REQ-CRAWL-07 — URL-state vector testing.** GLOBAL · MUST · P1. Test server response, source HTML, rendered HTML, robots.txt, meta robots, canonical, hreflang, and structured data as ONE state vector per URL class; resolve contradictions before launch. Inventory every routable URL class and decide INDEX / NOINDEX / REDIRECT / BLOCK / REMOVE based on user value and duplication; prevent soft-404 and empty/thin dynamic states from being indexable. Validation: automated URL-state matrix.

---

## PART 23 — PERFORMANCE / CORE WEB VITALS SPECIFICATION

Evidence basis: EV-14 (load-time association 418 vs 623ms; each 100ms delay reduces visibility probability), LEVEL-1 ANCHOR (web.dev thresholds). Targets are current authoritative thresholds, not invented scores (§39); re-validate thresholds against current official Google documentation at implementation time.

**REQ-PERF-01 — Core Web Vitals targets (p75, mobile, field data).** GLOBAL · MUST · P1. LCP ≤ 2.5s · INP ≤ 200ms · CLS ≤ 0.1 — measured at the 75th percentile on mobile field data (CrUX/RUM); lab (Lighthouse) used for debugging, not as the pass gate. Validation: PageSpeed Insights field data + RUM; PASS = all three "Good" for origin and priority templates.

**REQ-PERF-02 — LCP discipline.** TEMPLATE · MUST · P1. Identify the LCP element per template (usually hero image or H1 block): if image — preload it, `fetchpriority="high"`, never lazy-load it, size it correctly (responsive srcset), compress (AVIF/WebP). TTFB ≤ 800ms target via caching/CDN. Validation: Lighthouse LCP element audit + WebPageTest filmstrip.

**REQ-PERF-03 — Render-blocking & JS budget.** GLOBAL · SHOULD · P1. Critical CSS inlined or non-blocking; defer non-critical JS; code-split by route; reduce main-thread blocking and unnecessary hydration; third-party scripts audited (each must justify its cost; load async/defer; facade embeds). Target: ≤200KB compressed JS for content pages on first load (budget heuristic — adjust to stack, measure, don't worship). Validation: Lighthouse treemap; WebPageTest waterfall.

**REQ-PERF-04 — Layout stability.** TEMPLATE · MUST · P1. Reserve space for images/ads/embeds (dimensions or aspect-ratio); no content injection above existing content after load (banners, cookie bars must not shift layout — use reserved space); font-display: swap with size-adjusted fallbacks. Validation: CLS audit per template on mobile + desktop.

**REQ-PERF-05 — Caching/compression/CDN.** GLOBAL · SHOULD · P1. Static assets: long-cache immutable + fingerprinting; HTML: sensible short cache + revalidation; Brotli/gzip; CDN for static assets where the audience is geographically distributed. Validation: response-header audit; repeat-view test.

**REQ-PERF-06 — Fonts.** GLOBAL · SHOULD · P2. Self-host fonts; subset; `font-display: swap`; preload the primary font files; limit families/weights. Validation: waterfall audit.

**REQ-PERF-07 — Performance never trades away content or accessibility.** GLOBAL · MUST · P1. Performance changes must preserve semantic content and accessibility; never chase lab scores by hiding content (§82). Validation: content parity + a11y re-check after every perf change.

---

## PART 24 — MOBILE SPECIFICATION

Evidence basis: EV-14 (mobile-optimised OR≈5.2 — the strongest non-schema correlate in S14), §40, LEVEL-1. Mobile is the primary test surface (Google indexes mobile-first; AI retrieval rides that index). Mobile is NOT an afterthought — every page/component is analysed on mobile.

**REQ-MOB-01 — Viewport & fluid layout.** GLOBAL · MUST · P0. `<meta name="viewport" content="width=device-width, initial-scale=1">`; fluid layouts (no fixed pixel widths on containers); no document-level horizontal overflow at 320–480px widths. Validation: overflow test at 320/360/390/430px — PASS = `document.documentElement.scrollWidth <= window.innerWidth` on every template.

**REQ-MOB-02 — Content parity.** GLOBAL · MUST · P0. Mobile MUST contain the same primary content, headings, internal links, schema, and metadata as desktop. No mobile-only content hiding of indexable content (§82). Validation: DOM parity diff mobile vs desktop.

**REQ-MOB-03 — Touch targets & spacing.** GLOBAL · MUST · P1. Interactive elements ≥24×24 CSS px minimum (target 44–48px) with adequate separation; no hover-dependent primary information. Validation: a11y/mobile audit (Lighthouse tap targets).

**REQ-MOB-04 — Mobile navigation.** TEMPLATE · MUST · P1. Navigation collapses to an accessible disclosure pattern (button with `aria-expanded`, keyboard operable, focus managed); nav MUST NOT obscure content when open; sticky headers ≤ ~25% viewport height; mobile menu retains crawlable link destinations. Validation: device QA matrix.

**REQ-MOB-05 — Tables & wide media on mobile.** TEMPLATE · MUST · P1. Wide tables: wrapped in `overflow-x:auto` container with `role="region"` and accessible name, or reflowed to an accessible stacked alternative; images/video fluid (`max-width:100%`); no fixed-width embeds. Validation: overflow tests per template.

**REQ-MOB-06 — Forms & CTAs on mobile.** TEMPLATE · MUST · P1. Inputs: correct `type`/`inputmode`/`autocomplete`; labels visible; errors inline; primary CTA reachable without excessive scrolling and never hidden behind sticky elements. Validation: manual form walkthrough on a real device or emulator.

**REQ-MOB-07 — No intrusive interstitials.** GLOBAL · MUST · P1. No full-screen interstitials blocking content on entry; consent banners compact and non-shifting. Evidence: LEVEL-1 page-experience. Validation: visual QA.

**REQ-MOB-08 — Slow-network/CPU resilience.** GLOBAL · SHOULD · P2. Test slow-network/CPU conditions because rendering failures can alter crawlability and user outcomes. Validation: throttled Lighthouse/WebPageTest run per template.

---

## PART 25 — TABLET SPECIFICATION

Per §41: tablet gets explicit treatment; do not assume tablet = desktop or enlarged mobile.

**REQ-TAB-01 — Portrait tablet (≈768px) state.** TEMPLATE · MUST · P2. Define explicitly per template: navigation state (hamburger vs full — decide by item count; if >5 top-level items, use the mobile disclosure pattern), grid columns (typically 2-up where desktop is 3–4-up), text measure (≤75 characters), image scaling, CTA visibility. Validation: QA at 768×1024 — no overflow, no cramped 4-col grids, nav operable by touch.

**REQ-TAB-02 — Landscape tablet (≈1024px) state.** TEMPLATE · MUST · P2. Verify desktop layout degrades gracefully: no half-empty mega-grids; sidebars stack or remain usable; tables fit or scroll-accessibly. Validation: QA at 1024×768 and 1180×820.

**REQ-TAB-03 — Touch parity.** GLOBAL · MUST · P2. All tablet interactions touch-operable (same rules as REQ-MOB-03); hover-only disclosures must have click/tap equivalents. Validation: touch walkthrough.

**REQ-TAB-04 — Breakpoint discipline.** GLOBAL · SHOULD · P2. Use the design system's existing breakpoints; add a tablet-specific rule only where a measured layout defect exists (§43: no arbitrary breakpoints); prevent breakpoint states that hide important content or create duplicate navigation semantics. Validation: visual regression across 320/768/1024/1440px.

---

## PART 26 — DESKTOP SPECIFICATION

**REQ-DESK-01 — Reading measure.** TEMPLATE · MUST · P2. Body text column capped at ~65–75 characters (typically 600–760px depending on type scale); full-width text on large screens is a readability defect. Evidence: §42 + WCAG-adjacent readability practice. Validation: measure check at 1440px and 1920px.

**REQ-DESK-02 — Grid & whitespace.** TEMPLATE · SHOULD · P2. Multi-column layouts for comparison/card content only when reading order remains semantically correct in DOM and on smaller breakpoints; generous whitespace; no dead right-rail on ultra-wide (cap max content width, typically 1200–1400px, centered). Validation: visual QA at 1920/2560px.

**REQ-DESK-03 — Desktop navigation.** TEMPLATE · MUST · P2. All hubs reachable from primary nav; dropdowns keyboard- and screen-reader-operable (focus-visible, Esc closes, arrow keys where menu pattern used). Validation: keyboard walkthrough.

**REQ-DESK-04 — Desktop tables & media.** TEMPLATE · SHOULD · P3. Use available width for comparison tables (all columns visible without scroll at ≥1280px where feasible); figures with `<figcaption>`; persistent sidebars/CTAs must not cover answer content or cause layout instability. Validation: visual QA + zoom test (readable at 100–200% zoom).

---

## PART 27 — ACCESSIBILITY SPECIFICATION

WCAG 2.2 AA as the bar (LEVEL-1). §44: SEO must never degrade accessibility; the accessible implementation is usually the machine-readable one too (P-6).

**REQ-A11Y-01 — Landmarks & headings.** GLOBAL · MUST · P1. `header/nav/main/aside/footer` landmarks; one h1; logical heading order (headings describe hierarchy, not visual size); skip link ("Skip to main content") as first focusable element. Validation: axe-core scan + manual landmark audit.

**REQ-A11Y-02 — Keyboard & focus.** GLOBAL · MUST · P1. All functionality keyboard-operable; visible focus states (never `outline:none` without replacement); logical tab order; focus trapped correctly in modals and returned on close. Validation: full keyboard walkthrough.

**REQ-A11Y-03 — Forms.** TEMPLATE · MUST · P1. Every input has a programmatically associated `<label>`; errors identified in text and linked to fields; required fields indicated; `autocomplete` on personal-data fields. Validation: axe + manual screen-reader pass (NVDA/VoiceOver) on the primary conversion form.

**REQ-A11Y-04 — Images & media.** GLOBAL · MUST · P1. Meaningful images: descriptive alt; decorative: `alt=""`; videos: captions + transcript; no autoplay with sound. Validation: alt audit + media check.

**REQ-A11Y-05 — Colour & contrast.** GLOBAL · MUST · P1. Text contrast ≥4.5:1 (large text ≥3:1); non-text UI ≥3:1; colour never the sole carrier of meaning. Validation: contrast audit.

**REQ-A11Y-06 — Motion & animation.** GLOBAL · SHOULD · P2. Respect `prefers-reduced-motion`; no parallax/auto-animating content that can't be paused. Validation: reduced-motion test.

**REQ-A11Y-07 — ARIA discipline.** GLOBAL · MUST · P1. Native semantic HTML first; ARIA only to fill gaps; no incorrect roles (wrong ARIA is worse than none). Validation: axe ARIA ruleset.

**REQ-A11Y-08 — Accessibility in regression QA.** GLOBAL · MUST · P1. Accessibility fixes are included in regression QA, not treated as optional polish. Validation: a11y checks in the per-phase gate (Part 36).

---

## PART 28 — TRUST / PROVENANCE SPECIFICATION

Evidence basis: EV-22 (trust cues drive citation), EV-25 (authority concentration), EV-12 (invisibility), §32, §52.

**REQ-TRUST-01 — Core trust pages.** GLOBAL · MUST · P1. About (organisation, leadership, history, what/where), Contact (real channels; NAP where local), Privacy Policy, Terms where applicable; editorial/source policy where content-driven (sourcing standards, corrections policy, review process, update policy). Linked from footer on every page. Validation: pages exist, linked, crawlable.

**REQ-TRUST-02 — Editorial/source policy.** CONDITIONAL (content sites) · SHOULD · P2. Publish how content is produced: sourcing standards, corrections policy, review process, update policy. Evidence: EV-22 + §32. Validation: page exists and is linked from article template or About.

**REQ-TRUST-03 — Author transparency.** TEMPLATE · MUST (content pages where expertise matters) · P1. Real named authors with genuine credentials; author pages listing their articles; consistency with schema (REQ-SCHEMA-07). Never fabricate expertise. Bounded by C12: not a universal citation requirement for institutional pages. Validation: provenance audit.

**REQ-TRUST-04 — Review/rating integrity.** CONDITIONAL · MUST · P0. Only genuine, verifiable reviews; no review schema without visible reviews; no self-serving AggregateRating markup of own product reviews where guidelines prohibit; never misleadingly present paid/owned material as independent earned media. Validation: schema-vs-visible audit.

**REQ-TRUST-05 — Business identity consistency.** GLOBAL · MUST · P1. Name, address, phone, email identical across site, schema, and (where applicable) external listings. Evidence: EV-12 (entity consistency) + local Level-1. Validation: NAP consistency audit.

**REQ-TRUST-06 — Off-site earned-authority programme (site-supported).** GLOBAL · SHOULD · P1 (off-site, ongoing). Operate a legitimate earned-media workstream: independent review sites, trade press, analyst coverage, digital PR for consideration-stage queries (Claude's earned-media share reaches ~86% there — EV-08); prioritised outreach/eligibility list; citable assets from REQ-GEO-02 as the landing targets. Do NOT rely on social/community platforms as the primary channel (AI engines cite social at ~1/3 Google's rate; Claude <2% — EV-08); do NOT fabricate coverage or use link schemes (§55). Evidence: EV-08, EV-21, EV-32, EV-33. Validation: earned-coverage log; citation monitoring (Part 38) tracks earned-source share.

---

## PART 29 — COMPONENT-BY-COMPONENT SPECIFICATION

Per §56. Each component carries: PURPOSE / SEO / GEO / AIO purposes · REQUIREMENT · LOCATION · CONTENT · HTML · SCHEMA · INTERNAL LINKS · DESKTOP / TABLET / MOBILE behaviour · PERFORMANCE · ACCESSIBILITY · BUILD INSTRUCTION · VALIDATION. Condensed matrix below; full field text lives in the cross-referenced REQs (not duplicated).

| Component | Purpose (SEO/GEO/AIO) | Key requirements (REQ refs) | Device behaviour | Validation |
|---|---|---|---|---|
| `<head>` | Metadata, canonical, schema entry | REQ-TECH-02/07/10, REQ-SCHEMA-01/02; title+description unique, intent-led; canonical absolute; JSON-LD server-rendered; viewport meta (REQ-MOB-01) | Identical across devices (REQ-MOB-02) | Crawl meta audit; RRT |
| Header / logo | Identity, nav root | Logo links home; `header` landmark; org name visible | Desktop: full nav; Tablet: REQ-TAB-01; Mobile: disclosure nav (REQ-MOB-04) | Landmark + keyboard audit |
| Main nav | Hub discovery (P-1) | REQ-IL-01/05; `<nav aria-label>`; crawlable anchors; no JS-only routing without href | As header | Crawl + keyboard |
| Mobile nav | Hub discovery on small screens | REQ-MOB-04; `aria-expanded`; focus managed; retains link destinations | Mobile/tablet portrait | Device QA + a11y |
| Breadcrumbs | Hierarchy signal | REQ-ARCH-04 + REQ-SCHEMA-03 | All devices; may collapse middle items on mobile (keep first/last) | RRT + visual |
| Hero | Context, not obstruction | REQ-PAGE-09; H1 present; no content-pushing; hero image = LCP rules (REQ-PERF-02) | Mobile: height ≤ ~60vh; answer capsule not displaced | Lighthouse LCP; visual |
| H1 | Primary topic statement | REQ-PAGE-03; one per page; matches intent brief | All | Heading audit |
| Answer capsule | AIO/GEO extraction block | REQ-AIO-01, REQ-PAGE-02; 40–80 words, self-contained, source HTML | All; never collapsed/gated | Source-grep + read-aloud |
| Introduction | Scope + intent confirmation | REQ-CONT-03; follows capsule; names primary entities | All | Extraction test |
| Body sections | Topical depth + evidence | REQ-CONT-01/02/03, REQ-PAGE-03/04; semantic sectioning; question-mapped headings (REQ-AIO-02) | Mobile: no horizontal scroll; readable measure | Section audit |
| Evidence blocks | Citation drivers | REQ-PAGE-04, REQ-CONT-02; stats/quotes/citations/comparisons adjacent to claims (AIO-02 evidence adjacency) | Tables per REQ-PAGE-05 | Provenance audit |
| Comparison tables | Comparative intents | REQ-PAGE-05; real `<table>` with `<th>`; evidence/notes adjacent | Desktop full; tablet/mobile scroll-region or reflow | Overflow tests |
| FAQ | Q&A extraction (conditional) | REQ-PAGE-06 + REQ-SCHEMA-06; genuine questions only | All; accordions allowed ONLY if content is in DOM and visible to crawlers (prefer open or details/summary) | RRT + DOM check |
| Service/product areas | Decision facts | REQ-CONT-10; explicit price/specs/availability/locations where real | All | Decision-fact checklist |
| Entity information | Disambiguation | REQ-ENT-01/02/03; consistent canonical naming | All | Naming lint |
| Author block | Provenance | REQ-AIO-06, REQ-TRUST-03; real identity/role/credentials; link to profile | All | Provenance audit |
| Sources/references | Claim provenance | REQ-CONT-09; human-readable source titles; external authoritative links where claims material; distinguish external evidence from first-party data | All | Link audit (no broken) |
| Related content | Internal discovery | REQ-PAGE-08, REQ-IL-03 | All | Crawl |
| Forms | Conversion | REQ-MOB-06, REQ-A11Y-03; accessible labels, privacy context, validation; no deceptive preselected choices | Mobile input modes; desktop multi-column where sensible | a11y + device walkthrough |
| CTAs | Conversion | REQ-PAGE-07, REQ-MOB-06/07 | Never obscure content; no entry interstitials | Device QA |
| Footer | Entity/trust links | REQ-IL-05, REQ-TRUST-01/05; NAP where local; no keyword-stuffed link grids | All | Link + NAP audit |
| Schema | Machine layer | REQ-SCHEMA-01…09; JSON-LD server-rendered; visible-content parity | Identical all devices | RRT + graph crawl |
| Scripts | Functionality without damage | REQ-PERF-03; async/defer; no content-injection shifts; no JS-only content/links | All | Lighthouse, CLS |
| Styles | Presentation | REQ-PERF-03/04; critical CSS; no content hidden from crawlers | Breakpoints per REQ-TAB-04 | Visual regression |
| Images | Meaning + performance | REQ-TECH-08, REQ-A11Y-04 | srcset/sizes; LCP eager, rest lazy | Lighthouse + alt audit |
| Video | Meaning + accessibility | REQ-TECH-09; transcripts/captions; facade embeds | All | a11y + perf |
| Sitemap | Discovery | REQ-CRAWL-02 | n/a | Sitemap parse |
| robots.txt | Crawl policy | REQ-CRAWL-01/04 | n/a | Robots tester |

---

## PART 30 — GLOBAL / TEMPLATE / PAGE-SPECIFIC REQUIREMENTS

Classification index (per §63) — the routing table the implementing AI uses to assign scope. Full text in Parts 13–29.

- **GLOBAL (site-wide, build once):** REQ-ARCH-01/02/03/07, REQ-CONT-02/04/08/11/12, REQ-ENT-01/02/05, REQ-GEO-01/02/04/05/06/07/08/10, REQ-SCHEMA-01/02/09, REQ-IL-01/04/06, REQ-TECH-01/02/03/06, REQ-CRAWL-01/02/03/04/05/06/07, REQ-PERF-01/03/05/06/07, REQ-MOB-01/02/03/07/08, REQ-TAB-03/04, REQ-A11Y-01/02/04/05/06/07/08, REQ-TRUST-01/05/06.
- **TEMPLATE (per page-type template):** REQ-ARCH-04, REQ-PAGE-02/03/04/07/08/09, REQ-CONT-05/06/10, REQ-ENT-03, REQ-AIO-01…07 (as template components), REQ-GEO-03, REQ-SCHEMA-03, REQ-IL-02/03/05, REQ-TECH-07/08/10, REQ-PERF-02/04, REQ-MOB-04/05/06, REQ-TAB-01/02, REQ-DESK-01/02/03/04, REQ-A11Y-03, REQ-TRUST-03.
- **PAGE-SPECIFIC (per page brief):** REQ-PAGE-01, REQ-CONT-01/07, REQ-ENT-04.
- **CONDITIONAL (only when the condition holds):** REQ-ARCH-05/06/08, REQ-PAGE-05/06, REQ-TECH-04/05/09, REQ-SCHEMA-04/05/06/07/08, REQ-CONT-09, REQ-TRUST-02/04, REQ-GEO-09.
- **DO-NOT register:** REQ-ARCH-07 (doorway pages), REQ-CONT-08 (scaled thin content), REQ-GEO-06 (adversarial optimisation), keyword stuffing (EV-02), schema spam, fabricated anything (§25), intrusive interstitials, lazy-loaded LCP, JS-only links/content, hidden text, cloaking, fake reviews/authors/locations, link schemes, parasite SEO, deceptive redirects, search-engine-only content, cosmetic date-freshening (§53), relevance-diluting "AI rewrites" (EV-31).

---

## PART 31 — PRIORITISED REQUIREMENTS REGISTER

Scores per §62: SEO/GEO/AIO/USER impact, effort, confidence, risk-if-omitted on 1–10. **These are relative prioritisation scores, not guaranteed ranking-effect measurements** (no empirical per-requirement measurements exist in the corpus).

| Task | Requirement(s) | Pri | Class | SEO | GEO | AIO | USER | Effort | Conf | Risk if omitted |
|------|----------------|-----|-------|-----|-----|-----|------|--------|------|------------------|
| T-01 | REQ-TECH-01/02/03, REQ-CRAWL-01/07 | P0 | GLOBAL/MUST | 10 | 9 | 9 | 5 | 4 | 10 | 10 |
| T-02 | REQ-TECH-04, REQ-AIO-07 (render parity) | P0 | GLOBAL/MUST | 9 | 9 | 9 | 6 | 6 | 9 | 10 |
| T-03 | REQ-TECH-06 (HTTPS/security) | P0 | GLOBAL/MUST | 8 | 5 | 5 | 8 | 2 | 10 | 9 |
| T-04 | REQ-MOB-01/02 (viewport, parity, overflow) | P0 | GLOBAL/MUST | 9 | 7 | 7 | 9 | 4 | 9 | 9 |
| T-05 | REQ-ARCH-01/02/07 + REQ-IL-01/02/04 (IA + crawlable links + no orphans/doorways) | P0 | GLOBAL/MUST | 9 | 8 | 7 | 7 | 6 | 9 | 9 |
| T-06 | REQ-CONT-08 + REQ-GEO-06 (no thin/scaled/manipulative content) | P0 | GLOBAL/DO-NOT | 8 | 8 | 8 | 8 | 2 | 10 | 10 |
| T-07 | REQ-PAGE-01 (intent briefs) | P1 | PAGE/MUST | 8 | 8 | 8 | 8 | 3 | 9 | 7 |
| T-08 | REQ-PAGE-02/03/09 + REQ-AIO-01/02 (answer capsule + semantic sectioning) | P1 | TEMPLATE/MUST | 7 | 9 | 9 | 8 | 4 | 8 | 8 |
| T-09 | REQ-CONT-02/03/09/10/11/12 + REQ-PAGE-04 (evidence-dense, provenance, gatekeeper facts) | P1 | GLOBAL/MUST | 7 | 10 | 9 | 8 | 6 | 8 | 8 |
| T-10 | REQ-SCHEMA-01/02/03/09 (+04/05/06/07 conditional) | P1 | GLOBAL/MUST | 7 | 7 | 7 | 3 | 4 | 9 | 6 |
| T-11 | REQ-CRAWL-02/03/04 (sitemap, GSC/BWT, AI-crawler policy) | P1 | GLOBAL/MUST | 8 | 8 | 8 | 2 | 2 | 9 | 7 |
| T-12 | REQ-PERF-01/02/04/07 (CWV: LCP/INP/CLS) | P1 | GLOBAL/MUST | 7 | 5 | 5 | 9 | 6 | 9 | 7 |
| T-13 | REQ-CONT-06 + REQ-AIO-05 (freshness/dates) | P1 | TEMPLATE/MUST | 6 | 8 | 8 | 6 | 3 | 8 | 6 |
| T-14 | REQ-ENT-01/02/03/04 (entity system) | P1 | GLOBAL/MUST | 6 | 8 | 7 | 5 | 4 | 7 | 7 |
| T-15 | REQ-TRUST-01/03/05 (trust pages, authors, NAP) | P1 | GLOBAL/MUST | 5 | 7 | 7 | 7 | 3 | 8 | 6 |
| T-16 | REQ-A11Y-01…08 (WCAG 2.2 AA core) | P1 | GLOBAL/MUST | 5 | 4 | 4 | 10 | 5 | 10 | 7 |
| T-17 | REQ-GEO-04/07/10 (measurement harness baseline) | P1 | GLOBAL/MUST | 2 | 9 | 9 | 2 | 3 | 8 | 8 |
| T-18 | REQ-CONT-04/05 (fluency pass, domain tactic weighting) | P1 | GLOBAL/MUST | 5 | 8 | 7 | 8 | 4 | 8 | 5 |
| T-19 | REQ-GEO-02 + REQ-TRUST-06 (citable-asset program + earned-authority backlog) | P1 | GLOBAL/SHOULD | 6 | 9 | 8 | 6 | 8 | 7 | 7 |
| T-20 | REQ-MOB-03…08 + REQ-TAB-01…04 + REQ-DESK-01…04 (device depth) | P2 | TEMPLATE/MUST | 6 | 5 | 5 | 8 | 5 | 9 | 5 |
| T-21 | REQ-PAGE-05/06/08, REQ-IL-03 (tables, FAQ, related, contextual links) | P2 | TEMPLATE | 6 | 7 | 7 | 7 | 4 | 7 | 5 |
| T-22 | REQ-TECH-08/09 (media), REQ-PERF-03/05/06 | P2 | TEMPLATE/GLOBAL | 6 | 4 | 4 | 8 | 4 | 9 | 5 |
| T-23 | REQ-CONT-07 (information gain assets) | P2 | PAGE/SHOULD | 6 | 8 | 7 | 7 | 7 | 6 | 5 |
| T-24 | REQ-ARCH-05/06/08, REQ-TECH-05, REQ-GEO-09 (facets/params/i18n/local) | P2 | CONDITIONAL | 7 | 5 | 5 | 5 | 5 | 8 | 7 |
| T-25 | REQ-GEO-05 (llms.txt), REQ-CRAWL-05 (IndexNow), REQ-SCHEMA-08 | P3 | GLOBAL/MAY | 2 | 3 | 3 | 1 | 1 | 5 | 1 |
| EXP-01 | In-context position/format experiments (C6) | P3 | EXPERIMENT | 1 | 5 | 5 | 2 | 3 | 3 | 1 |

---

## PART 32 — DEPENDENCY MAP

Correct implementation order (§64). Downstream items MUST NOT start before upstream items pass validation.

```
PRE-BUILD REPOSITORY AUDIT (§65)
  └─► T-03 HTTPS/security baseline
   └─► T-01 status codes / canonicals / robots meta / robots.txt / URL-state vector
        ├─► T-11 sitemap + GSC/BWT verification + AI-crawler policy
        └─► T-02 render parity (content/links/meta/schema in initial HTML)
              └─► T-05 information architecture + crawlable internal links + orphan/doorway purge
                    └─► T-04 mobile viewport/parity/overflow (P0 device gate)
                          └─► T-07 intent briefs per page type
                                └─► T-08 page architecture: answer capsule + semantic sectioning
                                      └─► T-09 evidence-dense content + provenance + gatekeeper facts
                                            └─► T-10 structured data graph (needs final URLs, breadcrumbs, dates, authors)
                                                  └─► T-13 freshness/date signalling (feeds schema + sitemap lastmod)
                                                        └─► T-14 entity system (names/relationships referenced by schema + copy)
                                                              └─► T-15 trust pages/authors/NAP
                                                                    └─► T-12 performance/CWV (after content+media exist)
                                                                          └─► T-16 accessibility pass (after templates stable)
                                                                                └─► T-17 GEO/AIO measurement harness baseline (pre-launch baseline!)
                                                                                      └─► T-18…T-25 optimisation layers, experiments last
```

Canonical dependency chain (§64 example, expanded): SITE ARCHITECTURE → URL ARCHITECTURE → ROUTING → CANONICALS → BREADCRUMBS → INTERNAL LINKS → SITEMAPS → STRUCTURED DATA URL REFERENCES.

Key dependency rules: canonical URLs before sitemap before schema URLs before breadcrumbs (one URL truth); content before schema (schema mirrors visible content); templates stable before a11y/perf passes; **baseline measurement before any GEO change ships** (otherwise no before/after).

---

## PART 33 — IMPLEMENTATION SEQUENCE

Phased plan for the implementing AI (each phase ends with its validation gate from Part 36). Aligned with D6's 30-60-90 practitioner rollout: Phase 0–1 ≈ days 1–30 (baseline + technical floor), Phases 2–3 ≈ days 31–60 (page system + machine layer + earned-media launch), Phases 4–6 ≈ days 61–90 (experience, GEO/AIO programme, re-measurement).

- **Phase 0 — Audit (no changes).** §65 repository inspection; current-state audit (§66 gap table); record baseline: crawl, CWV lab/field, GSC exports, current rankings, current AI citations, conversion metrics, and the Part 37/38 AI-visibility baseline. DELIVERABLE: CURRENT-STATE vs TARGET-STATE gap table (REQUIREMENT / CURRENT STATE / TARGET STATE / GAP / ACTION / PRIORITY / SOURCE-EVIDENCE / VALIDATION). Do not invent CURRENT STATE — inspect.
- **Phase 1 — P0 technical floor.** T-01, T-02, T-03, T-04, T-05, T-06. Gate: full crawl clean; render parity; mobile parity; no orphans; no manipulative patterns.
- **Phase 2 — Page system.** T-07, T-08, T-09. Gate: every priority template has intent brief, answer capsule, semantic sections, evidence blocks.
- **Phase 3 — Machine layer.** T-10, T-11, T-13, T-14, T-15. Gate: schema graph valid; sitemap/canonical/robots coherent; dates consistent; trust pages live. (Parallel: launch earned-media outreach backlog from T-19 — it has long lead times.)
- **Phase 4 — Experience layer.** T-12, T-16, T-20, T-21, T-22. Gate: CWV "Good" (field or lab proxy pre-field-data), axe clean, device matrix signed off.
- **Phase 5 — GEO/AIO programme.** T-17 (already baselined), T-18, T-19, T-23, T-25; EXP-01 only behind the experimentation framework. Gate: monitoring live; first monthly report scheduled.
- **Phase 6 — Post-implementation audit + re-measurement.** Part 39 QA prompt executed; PASS/FAIL report; regressions fixed; re-run the measurement panel against baseline; compare citation-rate deltas by engine and intent; reallocate effort toward whichever lever (on-page vs earned media vs engine-specific) showed the largest citation-rate improvement; then re-baseline.

Deploy in controlled batches where possible; monitor regressions; roll back changes that harm user/search outcomes (T-60-style rollback triggers per batch).

---

## PART 34 — ATOMIC BUILD TASKS

Full §67 structure for the critical-path tasks (T-01…T-17). T-18…T-25 and the QA/operations tasks inherit the same field set from their REQ definitions in Parts 13–29 (each REQ already carries objective, evidence, device, and validation fields); the implementing AI expands them using this same template. "CURRENT STATE" is intentionally not invented (§66) — the implementing AI fills it during Phase 0.

---

**TASK ID:** T-01
**TITLE:** Canonical crawlable-URL floor (status codes, redirects, canonicals, robots meta, robots.txt)
**DISCIPLINE:** SEO (gates GEO/AIO) — MULTIPLE
**SCOPE:** GLOBAL
**PRIORITY:** P0 · MUST
**OBJECTIVE:** Guarantee exactly one crawlable, indexable, canonical 200 URL per document.
**EVIDENCE:** P-1; EV-14 (robots.txt OR≈3.4); LEVEL-1 ANCHOR.
**RATIONALE:** AI retrieval rides search indices; canonical incoherence splits/dilutes retrieval eligibility.
**CURRENT STATE:** _fill in Phase 0 audit_
**TARGET STATE:** All variant URLs (http/https, www/non-www, slash policy, case, .html aliases) 301 in ≤1 hop to canonical; every indexable page self-canonical; no noindex on indexable content; robots.txt allows content+assets, disallows traps, declares sitemap.
**DEPENDENCIES:** Phase 0 audit.
**FILES / COMPONENTS:** server/CDN config (`_redirects`, `.htaccess`, nginx, or platform equivalent), base HTML template `<head>`, `robots.txt`.
**IMPLEMENTATION STEPS:**
1. Crawl the site; export all URLs with status, canonical, robots meta.
2. Decide the canonical form (host, protocol, trailing-slash policy); document it.
3. Implement 301 rules for every variant; eliminate chains/loops.
4. Add/verify self-referential absolute canonicals in the base template.
5. Remove stray `noindex`; add `noindex,follow` to non-indexable utility pages.
6. Write robots.txt per REQ-CRAWL-01.
**HTML REQUIREMENT:** `<link rel="canonical" href="https://<canonical-form>">` on every page.
**CSS REQUIREMENT:** none.
**JAVASCRIPT REQUIREMENT:** none (never JS-injected canonicals as the only copy).
**SCHEMA REQUIREMENT:** none here (URLs must match Part 19 graph).
**CONTENT REQUIREMENT:** none.
**INTERNAL LINK REQUIREMENT:** all internal links point to canonical 200 URLs.
**MOBILE/TABLET/DESKTOP REQUIREMENT:** identical behaviour on all devices.
**ACCESSIBILITY REQUIREMENT:** none.
**PERFORMANCE REQUIREMENT:** redirects ≤1 hop; no redirect for assets.
**DO NOT:** 302 permanent moves; canonicalise across languages; block CSS/JS in robots.txt; noindex paginated/facet pages that have demand (use REQ-ARCH-05 logic).
**VALIDATION:** re-crawl; HTTP header checks on a variant matrix; robots tester.
**PASS CRITERIA:** 0 chains/loops; 0 soft-404; 100% self-canonical indexable pages; robots.txt valid.
**FAIL CRITERIA:** any indexable URL canonicalising elsewhere; any variant returning 200; blocked render assets.
**ROLLBACK / REGRESSION RISK:** redirect map errors can take pages offline — stage and crawl before/after; keep a rollback copy of redirect config.
**CONFIDENCE:** VERY HIGH.

---

**TASK ID:** T-02
**TITLE:** Render parity — primary content, links, metadata, schema in initial HTML
**DISCIPLINE:** SEO/GEO/AIO — MULTIPLE
**SCOPE:** GLOBAL
**PRIORITY:** P0 · MUST
**OBJECTIVE:** Crawlers and AI retrievers see complete content without executing interactions.
**EVIDENCE:** P-1; EV-06 (engines retrieve via search infra); REQ-AIO-07; EV-19 (27.1% of cited URLs not scrapable).
**RATIONALE:** JS-gated content is invisible to a material share of retrieval pipelines.
**CURRENT STATE:** _Phase 0_
**TARGET STATE:** source HTML == rendered HTML for all primary content, internal links, title/meta/canonical, JSON-LD.
**DEPENDENCIES:** T-01.
**FILES / COMPONENTS:** page templates, routing/rendering layer, any client-side hydration boundaries.
**IMPLEMENTATION STEPS:**
1. Fetch each template with JS disabled; diff against rendered DOM.
2. Move primary content/metadata/schema to server render (SSR/SSG/static) where missing.
3. Replace JS-only navigation links with `<a href>`.
4. Remove interaction gates (click-to-reveal) from primary content; `details/summary` acceptable if content is in the DOM.
**HTML REQUIREMENT:** primary content present in initial response body.
**CSS REQUIREMENT:** no `display:none`/`visibility:hidden` on indexable primary content.
**JAVASCRIPT REQUIREMENT:** hydration must not remove/replace primary content; no JS errors blocking render.
**SCHEMA REQUIREMENT:** JSON-LD present in initial HTML.
**CONTENT REQUIREMENT:** none beyond parity.
**INTERNAL LINK REQUIREMENT:** anchors in initial HTML.
**MOBILE/TABLET/DESKTOP:** parity holds at all breakpoints.
**ACCESSIBILITY:** no regression (server-rendered content improves it).
**PERFORMANCE:** SSR must not push TTFB >800ms target (cache).
**DO NOT:** adopt SSR where content is already server-rendered "because SEO" (§38); cloaking (different content for bots vs users).
**VALIDATION:** curl vs headless-browser DOM diff per template; GSC URL Inspection on priority pages.
**PASS CRITERIA:** zero primary-content diffs; links crawlable with JS off.
**FAIL CRITERIA:** any primary text/link/meta absent from source HTML.
**ROLLBACK / REGRESSION RISK:** rendering changes can break app interactivity — feature-flag and test hydration.
**CONFIDENCE:** VERY HIGH.

---

**TASK ID:** T-03
**TITLE:** HTTPS and security baseline
**DISCIPLINE:** SEO/UX
**SCOPE:** GLOBAL
**PRIORITY:** P0 · MUST
**OBJECTIVE:** Secure, mixed-content-free delivery.
**EVIDENCE:** LEVEL-1 ANCHOR; EV-15/EV-16 (trust posture).
**CURRENT STATE:** _Phase 0_ · **TARGET STATE:** all URLs HTTPS; valid cert; http→https 301; no mixed content; HSTS where feasible.
**DEPENDENCIES:** none. **FILES:** server/CDN config, templates (absolute/asset URLs).
**IMPLEMENTATION STEPS:** 1. enforce https redirects; 2. fix mixed-content references (protocol-relative or https asset URLs); 3. verify cert chain; 4. add HSTS after verification.
**VALIDATION:** SSL test; mixed-content crawl. **PASS:** 0 mixed-content URLs; A-grade cert. **FAIL:** any http 200 or mixed content.
**DO NOT:** enable HSTS before all subdomains verified. **ROLLBACK RISK:** HSTS is sticky — stage it.
**CONFIDENCE:** VERY HIGH.

---

**TASK ID:** T-04
**TITLE:** Mobile P0 gate — viewport, content parity, zero horizontal overflow
**DISCIPLINE:** MOBILE/SEO/UX
**SCOPE:** GLOBAL
**PRIORITY:** P0 · MUST
**OBJECTIVE:** Mobile-first index receives complete, usable pages.
**EVIDENCE:** EV-14 (mobile OR≈5.2); LEVEL-1 mobile-first indexing.
**CURRENT STATE:** _Phase 0_ · **TARGET STATE:** REQ-MOB-01/02 satisfied on every template at 320–430px.
**DEPENDENCIES:** T-02. **FILES:** base CSS, templates, viewport meta.
**IMPLEMENTATION STEPS:** 1. set viewport meta; 2. replace fixed widths with fluid (`max-width`, `%`, `clamp()`); 3. fix every overflow source (tables, media, long URLs — `overflow-wrap`); 4. diff mobile vs desktop DOM for content parity.
**HTML:** viewport meta; semantic structure unchanged. **CSS:** fluid layout; `img,video{max-width:100%;height:auto}`; table wrappers `overflow-x:auto`. **JS:** none gating content.
**MOBILE:** this task. **TABLET/DESKTOP:** no regression (REQ-TAB/DESK later).
**VALIDATION:** overflow script at 320/360/390/430px on every template; parity diff.
**PASS:** no `scrollWidth > innerWidth`; parity diff empty. **FAIL:** any overflow or missing mobile content.
**DO NOT:** hide content on mobile to fix overflow; use separate m-dot site.
**ROLLBACK RISK:** CSS changes can break desktop — visual regression across breakpoints.
**CONFIDENCE:** VERY HIGH.

---

**TASK ID:** T-05
**TITLE:** Information architecture + crawlable internal linking + orphan/doorway purge
**DISCIPLINE:** SEO/GEO
**SCOPE:** GLOBAL
**PRIORITY:** P0 · MUST
**OBJECTIVE:** Every indexable page reachable, hierarchically placed, internally linked.
**EVIDENCE:** EV-17, EV-18, P-1, REQ-ARCH-01/02/07, REQ-IL-01/02/04.
**CURRENT STATE:** _Phase 0_ · **TARGET STATE:** hub/spoke IA live; depth ≤3 for priority pages; zero orphans; near-duplicate clusters resolved (consolidated, differentiated, or noindexed/removed).
**DEPENDENCIES:** T-01, T-02. **FILES:** nav template, hub templates, footer, content pages.
**IMPLEMENTATION STEPS:** 1. map query/entity clusters → hubs; 2. assign every page a primary hub; 3. build hub pages linking all spokes; 4. add breadcrumbs; 5. link orphans contextually; 6. consolidate doorway/duplicate pages (301 to strongest).
**HTML:** `<nav>`, `<a href>` links, breadcrumb markup. **SCHEMA:** BreadcrumbList (T-10 consumes).
**MOBILE/TABLET/DESKTOP:** nav transforms per REQ-MOB-04/TAB-01/DESK-03.
**VALIDATION:** crawl — depth report, orphan report, duplicate clusters.
**PASS:** 0 orphans; priority depth ≤3; 0 near-duplicate indexable clusters. **FAIL:** otherwise.
**DO NOT:** keyword-stuffed footer blocks; automated interlinking without editorial sense.
**ROLLBACK RISK:** URL moves need 301s (T-01 machinery).
**CONFIDENCE:** HIGH.

---

**TASK ID:** T-06
**TITLE:** Anti-spam / anti-manipulation enforcement sweep
**DISCIPLINE:** SEO/GEO compliance
**SCOPE:** GLOBAL
**PRIORITY:** P0 · DO-NOT enforcement
**OBJECTIVE:** Remove/prevent every §55 pattern: keyword stuffing, hidden text, cloaking, doorway pages, fake reviews/authors/locations, schema spam, link schemes, adversarial text, prompt-injection strings.
**EVIDENCE:** EV-02, EV-15, EV-16, EV-18.
**CURRENT STATE:** _Phase 0_ · **TARGET STATE:** zero violations; a pre-merge checklist prevents new ones.
**DEPENDENCIES:** none. **FILES:** all templates/content; CI checklist.
**IMPLEMENTATION STEPS:** 1. audit content for stuffing/hidden text; 2. audit schema vs visible content; 3. verify every review/author/credential is real; 4. scan templates for hidden keyword/AI instructions, cloaking, deceptive markup; 5. add the DO-NOT list to the repo's contribution checklist.
**VALIDATION:** manual + crawler text-vs-render diff; schema audit.
**PASS:** 0 violations. **FAIL:** any.
**CONFIDENCE:** VERY HIGH.

---

**TASK ID:** T-07
**TITLE:** Search-intent briefs for every page type and priority page
**DISCIPLINE:** SEO/GEO/AIO strategy
**SCOPE:** PAGE-SPECIFIC
**PRIORITY:** P1 · MUST
**OBJECTIVE:** Every page built against an explicit intent brief (REQ-PAGE-01 fields).
**EVIDENCE:** EV-26, EV-22.
**CURRENT STATE:** _Phase 0_ · **TARGET STATE:** briefs committed (e.g., `content-briefs/` or CMS fields) for 100% of priority pages.
**DEPENDENCIES:** T-05 (hub map). **FILES:** brief documents/CMS.
**IMPLEMENTATION STEPS:** 1. collect queries (GSC, keyword tools, sales/support logs); 2. classify intent per §50 (informational/commercial/transactional/navigational/local/comparison/definition/troubleshooting/high-consideration/research); 3. write brief per page; 4. map sections to expected questions.
**VALIDATION:** brief-to-section mapping review. **PASS:** every h2 maps to a brief question. **FAIL:** unmapped sections.
**CONFIDENCE:** HIGH.

---

**TASK ID:** T-08
**TITLE:** Answer capsule + semantic sectioning in page templates
**DISCIPLINE:** GEO/AIO/SEO/UX
**SCOPE:** TEMPLATE
**PRIORITY:** P1 · MUST
**OBJECTIVE:** Extractable primary answer + machine-readable section structure (REQ-PAGE-02/03/09, REQ-AIO-01/02).
**EVIDENCE:** EV-19, EV-23, EV-14, EV-04.
**CURRENT STATE:** _Phase 0_ · **TARGET STATE:** capsule component after H1; correct heading hierarchy; landmarks.
**DEPENDENCIES:** T-07. **FILES:** page templates, CSS.
**IMPLEMENTATION STEPS:** 1. add capsule component (styled intro paragraph, not an ad-like box); 2. rewrite headings to question/topic form per brief; 3. fix hierarchy/landmarks; 4. verify capsule in source HTML.
**HTML:** `<main><article><h1>…</h1><p class="answer-capsule">…</p><section><h2>…` etc.
**CSS:** capsule visually distinct but not intrusive; measure caps.
**MOBILE:** capsule first content under H1, never collapsed. **TABLET/DESKTOP:** same order.
**VALIDATION:** source-grep for capsule; heading-outline audit; read-aloud extraction test.
**PASS:** capsule present pre-JS on 100% priority pages; outline valid. **FAIL:** missing/JS-only capsule; skipped heading levels.
**DO NOT:** marketing slogans as capsules; accordion-gated capsules; Q&A-shaped conversion of general content (C9).
**CONFIDENCE:** HIGH (GEO), MEDIUM-HIGH (AIO transfer).

---

**TASK ID:** T-09
**TITLE:** Evidence-dense content build with claim-level provenance and gatekeeper facts
**DISCIPLINE:** GEO/AIO/SEO content
**SCOPE:** GLOBAL (content pages)
**PRIORITY:** P1 · MUST
**OBJECTIVE:** Every substantive section carries real evidence (REQ-CONT-02/03/09/10/11/12, REQ-PAGE-04) and every decision-intent page states decision-critical facts explicitly (price/specs/availability/dates where real).
**EVIDENCE:** EV-01 (causal), EV-22 (gatekeepers: relevance/price/recency/position; hedging and unsupported claims penalised), EV-19, EV-25, EV-31 (rewrites must not dilute topical relevance).
**CURRENT STATE:** _Phase 0_ · **TARGET STATE:** per-section evidence elements; material claims cited; zero fabrications.
**DEPENDENCIES:** T-07, T-08. **FILES:** content files/CMS.
**IMPLEMENTATION STEPS:** 1. inventory claims per page; 2. attach statistic/quotation/citation/example per section (real, sourced, dated); 3. add references block where claims are material; 4. add the gatekeeper pass: decision-critical facts explicit (price/specs/availability/dates where real), confident phrasing for supported claims, internal consistency check, topical relevance and query-term coverage preserved (never rewritten away); 5. editorial fluency pass (T-18).
**HTML:** `<blockquote>`/`<q>` for quotes; `<table>` for comparisons; `<ol>` for steps; `<cite>` where apt.
**VALIDATION:** provenance audit; fabrication sweep; read-aloud extraction; before/after retrieval-presence check on the page's priority queries (EV-31).
**PASS:** 100% material claims sourced; ≥1 evidence element per h2 section; decision facts explicit; no relevance dilution. **FAIL:** any fabricated or unsourced material claim; any priority query term dropped by a rewrite.
**DO NOT:** invent statistics, quotes, case studies, or sources (§25); irrelevant external links as "trust paint" (§31); hedge supported claims; reformat content into Q&A shapes as a tactic (C9).
**CONFIDENCE:** HIGH.

---

**TASK ID:** T-10
**TITLE:** Structured-data graph (Organization/WebSite/WebPage/Breadcrumb + conditional Article/Service/Product/FAQ/Person)
**DISCIPLINE:** SEO/GEO/AIO machine layer
**SCOPE:** GLOBAL + CONDITIONAL
**PRIORITY:** P1 · MUST
**OBJECTIVE:** Valid, visible-content-consistent JSON-LD graph with stable `@id`s (Part 19).
**EVIDENCE:** EV-14 (correlational), C2 decision, LEVEL-1.
**CURRENT STATE:** _Phase 0_ · **TARGET STATE:** REQ-SCHEMA-01…09 satisfied.
**DEPENDENCIES:** T-01 (URLs), T-05 (breadcrumbs), T-13 (dates), T-15 (authors/org facts).
**FILES:** base template `<head>`/schema partials.
**IMPLEMENTATION STEPS:** 1. define `@id` scheme; 2. implement global nodes; 3. implement per-template nodes; 4. wire dates/authors/breadcrumbs; 5. validate.
**VALIDATION:** Rich Results Test per template; Schema.org validator; graph crawl; visible-content diff.
**PASS:** 0 errors/warnings that indicate invalid data; 100% visible-content consistency. **FAIL:** markup of absent content; broken `@id` references.
**DO NOT:** FAQPage without visible FAQs; review markup on non-reviews; fabricated `sameAs`.
**CONFIDENCE:** HIGH (implement), MEDIUM (AI-citation effect).

---

**TASK ID:** T-11
**TITLE:** Sitemap + search-console verification + explicit AI-crawler policy
**DISCIPLINE:** SEO/GEO ops
**SCOPE:** GLOBAL
**PRIORITY:** P1 · MUST
**OBJECTIVE:** REQ-CRAWL-02/03/04 satisfied.
**EVIDENCE:** P-1, EV-12 (training-data share), C4.
**CURRENT STATE:** _Phase 0_ · **TARGET STATE:** clean sitemap index referenced in robots.txt; GSC+BWT verified; documented AI-crawler allow/block decision implemented.
**DEPENDENCIES:** T-01. **FILES:** sitemap generation, robots.txt.
**IMPLEMENTATION STEPS:** 1. generate sitemaps (canonical/200/indexable only, real lastmod); 2. reference in robots.txt; 3. verify GSC/BWT; 4. implement AI-crawler decision (default: allow — REQ-CRAWL-04).
**VALIDATION:** sitemap parse; console verification screenshots/logs.
**PASS:** 0 invalid sitemap URLs; consoles verified; policy documented. **FAIL:** otherwise.
**CONFIDENCE:** HIGH.

---

**TASK ID:** T-12
**TITLE:** Core Web Vitals to "Good" (LCP/INP/CLS, p75 mobile)
**DISCIPLINE:** PERFORMANCE/SEO/UX
**SCOPE:** GLOBAL
**PRIORITY:** P1 · MUST
**OBJECTIVE:** REQ-PERF-01/02/04/07 targets.
**EVIDENCE:** LEVEL-1 thresholds; EV-14 (speed correlate).
**CURRENT STATE:** _Phase 0 (lab + field)_ · **TARGET STATE:** LCP ≤2.5s, INP ≤200ms, CLS ≤0.1 at p75 mobile field data (lab proxy acceptable pre-traffic).
**DEPENDENCIES:** T-04, content/media present. **FILES:** templates, CSS/JS bundles, image pipeline, server caching.
**IMPLEMENTATION STEPS:** 1. identify LCP element per template; 2. preload/`fetchpriority=high`, size, compress it; never lazy-load it; 3. reserve all media/embed space; 4. defer/split JS; audit third parties; 5. caching/compression/CDN.
**VALIDATION:** Lighthouse per template; WebPageTest; CrUX/RUM when available.
**PASS:** all three metrics "Good" (or lab LCP ≤2.5s on throttled mobile pre-field). **FAIL:** any metric "Poor".
**DO NOT:** lazy-load hero/LCP; inject banners that shift layout; chase lab scores by hiding content (§82).
**CONFIDENCE:** HIGH.

---

**TASK ID:** T-13
**TITLE:** Freshness & date signalling system
**DISCIPLINE:** GEO/AIO/SEO content ops
**SCOPE:** TEMPLATE
**PRIORITY:** P1 · MUST
**OBJECTIVE:** REQ-CONT-06 + REQ-AIO-05: visible dates, schema dates, sitemap lastmod — all consistent, updated only on substantive change.
**EVIDENCE:** EV-09 (AI engines cite materially fresher content); EV-30 (Metadata & Freshness is the strongest AIO pillar, r=0.68).
**CURRENT STATE:** _Phase 0_ · **TARGET STATE:** date policy per page type; three-way consistency.
**DEPENDENCIES:** T-10 (schema), T-11 (sitemap). **FILES:** templates, CMS date fields, sitemap generator.
**IMPLEMENTATION STEPS:** 1. classify page types by freshness sensitivity; 2. render visible Published/Updated; 3. wire datePublished/dateModified; 4. lastmod from real change timestamp; 5. set update triggers (price/regulation/stat changes).
**VALIDATION:** consistency check across visible/schema/sitemap.
**PASS:** 100% consistent on dated pages. **FAIL:** mismatched or auto-bumped dates.
**DO NOT:** date-freshening without content change (§53).
**CONFIDENCE:** MEDIUM-HIGH.

---

**TASK ID:** T-14
**TITLE:** Entity system — inventory, entity home pages, explicit relationships, fame classification
**DISCIPLINE:** GEO/SEO semantic layer
**SCOPE:** GLOBAL
**PRIORITY:** P1 · MUST
**OBJECTIVE:** REQ-ENT-01…04.
**EVIDENCE:** EV-10, EV-12, EV-17.
**CURRENT STATE:** _Phase 0_ · **TARGET STATE:** entity inventory doc; About/Contact live and linked; consistent naming; per-topic fame classification recorded in briefs.
**DEPENDENCIES:** T-05. **FILES:** About/Contact pages, templates, inventory doc.
**IMPLEMENTATION STEPS:** 1. build entity inventory (canonical names, aliases, definitions); 2. build/upgrade About + Contact; 3. lint naming consistency; 4. classify entity fame per priority topic; 5. record retrieval-track vs public-record-track weighting per topic.
**VALIDATION:** naming lint; entity pages crawlable and linked; briefs contain classification.
**PASS/FAIL:** per checklist. **DO NOT:** manufacture entities/relationships.
**CONFIDENCE:** MEDIUM-HIGH.

---

**TASK ID:** T-15
**TITLE:** Trust & provenance layer — trust pages, real authors, identity consistency
**DISCIPLINE:** GEO/AIO trust
**SCOPE:** GLOBAL
**PRIORITY:** P1 · MUST
**OBJECTIVE:** REQ-TRUST-01/03/05 (+ REQ-AIO-06 author blocks).
**EVIDENCE:** EV-22, EV-25, EV-12.
**CURRENT STATE:** _Phase 0_ · **TARGET STATE:** About/Contact/Privacy live; real author system; NAP consistent; author blocks on content templates.
**DEPENDENCIES:** T-14. **FILES:** trust pages, author template, footer.
**IMPLEMENTATION STEPS:** 1. create/upgrade trust pages; 2. author pages + bylines (real people); 3. NAP audit and fix; 4. footer links.
**VALIDATION:** provenance + NAP audits. **PASS:** all real, consistent, linked. **FAIL:** any fabricated credential.
**CONFIDENCE:** MEDIUM-HIGH.

---

**TASK ID:** T-16
**TITLE:** WCAG 2.2 AA accessibility pass
**DISCIPLINE:** ACCESSIBILITY/UX
**SCOPE:** GLOBAL
**PRIORITY:** P1 · MUST
**OBJECTIVE:** REQ-A11Y-01…08.
**EVIDENCE:** LEVEL-1 (WCAG); §44/§84.
**CURRENT STATE:** _Phase 0_ · **TARGET STATE:** axe-core 0 critical/serious on all templates; keyboard/screen-reader walkthroughs pass.
**DEPENDENCIES:** templates stable (T-08). **FILES:** templates, CSS, JS components.
**IMPLEMENTATION STEPS:** landmarks/headings → keyboard/focus → forms → media → contrast → motion → ARIA fixes.
**VALIDATION:** axe + manual AT pass on key journeys. **PASS:** 0 critical/serious; journeys completable by keyboard. **FAIL:** otherwise.
**DO NOT:** ARIA band-aids over broken semantics; `outline:none` without replacement.
**CONFIDENCE:** VERY HIGH (as a quality bar; SEO/GEO benefit indirect).

---

**TASK ID:** T-17
**TITLE:** GEO/AIO measurement harness + pre-change baseline
**DISCIPLINE:** GEO/AIO measurement
**SCOPE:** GLOBAL
**PRIORITY:** P1 · MUST (before any GEO change ships)
**OBJECTIVE:** REQ-GEO-04/07/10: fixed prompt panel, multi-engine monthly sampling, citation logging; baseline recorded in Phase 0.
**EVIDENCE:** EV-24, EV-33, EV-18 (variability → repeated measures), EV-06 (engines differ).
**CURRENT STATE:** _Phase 0_ · **TARGET STATE:** prompt panel (30–100 queries across intents; 20–50 per priority topic per D6), runbook, storage sheet/dashboard, first baseline logged.
**DEPENDENCIES:** T-07 (intent map). **FILES:** `measurement/` docs or ops tooling.
**IMPLEMENTATION STEPS:** 1. draft prompts from intent briefs (informational/comparison/transactional/brand); 2. fix engine list + settings (web-enabled modes); 3. run baseline; log answer text, cited domains/URLs, brand mentions, competitors; 4. schedule monthly re-run.
**VALIDATION:** baseline report exists with per-engine citation table.
**PASS:** reproducible runbook + baseline stored. **FAIL:** ad-hoc unrecorded prompting.
**DO NOT:** treat single observations as truth (variance is high — EV-18); change prompts mid-programme without versioning; average engines into one "AI score" (REQ-GEO-10).
**CONFIDENCE:** HIGH (that measurement is necessary), n/a (effect).

---

### Condensed task register — T-18…T-25, QA/ops tasks, and experiments

Each inherits the full §67 field set from its REQ definitions; expand before building.

| Task | Title | Discipline | Scope | Pri | Objective (one line) | Key PASS criterion |
|------|-------|-----------|-------|-----|----------------------|--------------------|
| T-18 | Fluency pass + domain tactic weighting | GEO content | GLOBAL | P1 | Clarity edit on all primary content; per-domain evidence emphasis per REQ-CONT-05 | No section flagged incomprehensible; brief documents tactic choice |
| T-19 | Citable-asset program + earned-authority backlog | GEO off-site | GLOBAL | P1 | One citable asset per hub (original data/guide/stats/tool); prioritised legitimate outreach list (REQ-GEO-02, REQ-TRUST-06) | Asset live, dated, authored, linked from hub; outreach list is not a spam link list |
| T-20 | Device depth: tablet portrait/landscape + desktop measure | UX | TEMPLATE | P2 | REQ-TAB-01…04, REQ-DESK-01…04 satisfied | QA matrix signed at 768/1024/1440px |
| T-21 | Comparison tables, conditional FAQ, related-content modules | GEO/AIO/UX | TEMPLATE | P2 | REQ-PAGE-05/06/08 live where intent justifies | Tables accessible on mobile; FAQs traceable to real queries |
| T-22 | Media + performance polish | PERFORMANCE | TEMPLATE/GLOBAL | P2 | REQ-TECH-08/09, REQ-PERF-03/05/06 | Lighthouse media/perf audits clean |
| T-23 | Information-gain assets | CONTENT | PAGE | P2 | ≥1 legitimate differentiator per priority page (REQ-CONT-07) | Competitor diff audit shows unique value |
| T-24 | Facets/params/i18n/local conditional architecture | TECHNICAL | CONDITIONAL | P2 | REQ-ARCH-05/06/08, REQ-TECH-05, REQ-GEO-09 where applicable | No crawl traps; hreflang reciprocal; local pages differentiated |
| T-25 | Optional cheap MAYs: llms.txt, IndexNow, conditional schema extras | GEO/SEO ops | GLOBAL | P3 | REQ-GEO-05, REQ-CRAWL-05, REQ-SCHEMA-08 | Files serve 200; no promised effect documented |
| Q-01 | Schema parity test | QA | GLOBAL | P1 | Compare schema values with visible DOM (D2 T045) | No material mismatch |
| Q-02 | Source/rendered diff | QA | GLOBAL | P1 | Compare source and rendered metadata/content for client frameworks (D2 T046) | No destructive hydration or missing tags |
| Q-03 | Broken-link crawl | QA | GLOBAL | P1 | Crawl internal links and assets (D2 T047) | No material 4xx/5xx on user paths |
| Q-04 | Regression performance test | QA | GLOBAL | P1 | Compare pre/post key templates (D2 T048) | No unexplained CWV/performance regression |
| Q-05 | Accessibility regression | QA | GLOBAL | P1 | Automated + manual keyboard checks on changed components (D2 T049) | No new critical a11y defect |
| Q-06 | Post-deploy index check | MONITORING | GLOBAL | P1 | Check crawl/index/canonical state after deployment (D2 T050) | Expected canonical pages indexed/eligible |
| Q-07 | Repeated AI observation | MONITORING | GLOBAL | P1 | Run query panel repeatedly, never once (D2 T051; ≥7–8 repetitions per EV-18) | Trend data has dates/engine/query metadata |
| Q-08 | Competitor citation comparison | MONITORING | GLOBAL | P1 | Record domains/URLs cited alongside site (D2 T052) | Can identify citation gaps and source classes |
| Q-09 | Claim register validation | QA/TRUST | GLOBAL | P1 | High-impact claims substantiated or softened (D2 T054; REQ-CONT-12) | Each claim substantiated or removed |
| Q-10 | Information-gain review | QA/CONTENT | PAGE | P1 | Compare page vs top competing results for unique useful additions (D2 T055) | ≥1 legitimate differentiator where feasible |
| Q-11 | Single source of truth for entity data | DATA | GLOBAL | P1 | Centralise organization/contact/location/product identifiers (D2 T058) | Schema/page/footer values consistent |
| Q-12 | Deployment change log + rollback triggers | OPS | GLOBAL | P1 | Record SEO/GEO/AIO changes with dates; define rollback metrics per risky batch (D2 T059/T060) | Monitoring can correlate outcome with change; rollback path tested |
| EXP-01 | Engine-specific content experiment | EXPERIMENT | PAGE | P3 | Test one evidence-format hypothesis against baseline without changing other variables (C6, C10; D2 T041) | Predefined metric, window ≥2 cycles, rollback rule |

---

## PART 35 — MASTER WEBSITE-BUILDING AI PROMPT

Self-contained prompt to hand to the coding/building AI (§85). It assumes repository access. It must not need to reinterpret the research. Replace bracketed site-specific inputs where available. The AI must inspect the repository before making implementation decisions.

---

> **ROLE**
> You are the implementation AI for a website optimisation programme covering conventional SEO, Generative Engine Optimisation (GEO), Google AI Overview Optimisation (AIO), accessibility, performance, and responsive UX across mobile, tablet, and desktop.
>
> **PRIMARY OBJECTIVE**
> Maximise the probability that the website earns the highest sustainable organic visibility (target: Position #1 where realistically attainable) and the strongest legitimate AI-answer visibility possible (Google AI Overviews/AI Mode, ChatGPT, Perplexity, Gemini, Copilot, Claude) — while remaining compliant, factual, accessible, performant, responsive, secure, useful, trustworthy, technically robust, and human-first. Position #1 and AI citations are targets, not guarantees. Never claim guaranteed rankings or guaranteed inclusion.
>
> **NON-NEGOTIABLE OPERATING MODEL**
> Treat visibility as an eight-stage pipeline: 1) crawlability/renderability; 2) indexability/canonical and entity resolution; 3) retrieval competitiveness; 4) context selection; 5) citation selection; 6) answer absorption; 7) prominence/representation; 8) business outcome. Do not optimise a downstream stage by degrading an upstream stage. A rewrite intended to increase AI extractability must not reduce semantic relevance, retrieval competitiveness, readability, accessibility, or trust.
>
> **GOVERNING EVIDENCE (do not re-derive; apply):**
> 1. Retrieval gates everything: crawlable, indexable, server-rendered, internally linked pages are prerequisites for both search and AI citation.
> 2. Organic rank and AI citation are different outcomes (AI engines overlap Google top-10 by only ~4–15%; 53% of AIO-cited domains are outside the organic top 10). Build and measure both tracks separately.
> 3. Content-side GEO tactics with controlled evidence: add real citations, quotations, statistics; maximise fluency/clarity; structure content semantically (headings, chunks, tables, steps, definitions). Keyword stuffing measurably hurts. Effects are domain-dependent, shrink under competitor adoption, and do not create discoverability by themselves. Citation-oriented rewrites can impair upstream retrieval — preserve topical relevance and query-term coverage in every edit.
> 4. AI engines favour earned/third-party sources (51.2% vs Google's 40.7%) and fresher content than Google; engines differ materially from each other. On-site work makes pages retrievable and citable; off-site authority is a parallel programme the site supports with citable assets.
> 5. Accurate JSON-LD (Organization/WebPage/Breadcrumb + Article/Service/Product/FAQ where factual) is required; FAQPage/Product schema showed the strongest correlation with ChatGPT visibility (OR≈13.3/4.1, correlational). Schema must mirror visible content exactly.
> 6. Never manipulate: no hidden/adversarial text, no prompt-injection strings, no fabricated evidence/authors/reviews/statistics, no doorway/scaled thin pages, no schema spam. LLM-poisoning and recommendation-hijacking research means engines actively defend against these.
> 7. AI visibility is stochastic and engine-specific: ship a measurement harness and treat all AI-visibility outcomes as observational, never deterministic.
> 8. Prefer current official search-engine/web-standard documentation where implementation details have changed since this playbook was produced.
>
> **STEP 0 — REPOSITORY INSPECTION (no changes).** Before editing, identify: framework/runtime/version; package manager/build commands; routes and route generation; page templates/components/layouts; SSR/SSG/ISR/CSR/hybrid rendering per route class; metadata/canonical/robots generation; structured-data generation; sitemap/robots generation; navigation and internal-link components; content/data sources/CMS; image/font/script pipeline; styling system and breakpoints; analytics/consent; third-party services; deployment/hosting/CDN; tests/lint/typecheck; existing accessibility/performance tooling. Run: full crawl; source-vs-rendered DOM diff; Lighthouse on key templates; mobile overflow test. Output a CURRENT STATE MAP and the CURRENT-STATE vs TARGET-STATE gap table (requirement / current / target / gap / action / priority / evidence / validation) before substantial changes.
>
> **STACK ADAPTATION RULE (§59):** For every requirement: implement using the existing framework, routing, components, styling conventions, metadata framework, build tools, and dependency strategy. Do not introduce new dependencies or rewrite working architecture unless the requirement cannot otherwise be correctly implemented. Do not guess the stack — inspect it.
>
> **STEP 1 — URL / INDEX STATE.** For every route class decide INDEX, NOINDEX, REDIRECT, REMOVE, or BLOCK. Check status code, canonical, robots, sitemap inclusion, internal links, and rendering as one state vector. Resolve contradictions.
>
> **STEP 2 — INTENT AND ENTITY MAP.** For every intended indexable page define: PRIMARY QUERY/TOPIC · PRIMARY INTENT · SECONDARY INTENTS · CORE USER PROBLEM · QUESTIONS THE USER EXPECTS ANSWERED · EXPECTED CONTENT FORMAT · EXPECTED DEPTH · REQUIRED ENTITIES · SUPPORTING SUBTOPICS · CONVERSION INTENT · PAGE TYPE. Then map organization, products/services, locations, people, topics, evidence resources, and their relationships. Classify entity fame per priority topic (LOW-PRIOR → retrieval-track weighting; HIGH-PRIOR → public-record weighting).
>
> **STEP 3 — PAGE ARCHITECTURE.** For each page: H1 states the real topic/entity; direct scoped answer or offer summary early when intent warrants it; semantic H2/H3 sections; evidence, specifications, definitions, comparisons, procedures, limitations, and examples where relevant; evidence/qualification adjacent to material claims; author/reviewer/date/source provenance where relevant; FAQs only when genuine query intent supports them; CTAs without obscuring the answer.
>
> **STEP 4 — GEO/AIO EVIDENCE BLOCKS.** For high-value answerable sections, when natural, use: HEADING → DIRECT ANSWER (1–3 sentences, scoped) → EVIDENCE (statistic with source+year / attributed quotation / comparison / steps / first-party data) → QUALIFICATION (conditions, limitations, dates) → PROVENANCE (source/author/method where material) → OPTIONAL DEEPER LINK. Keep blocks human-readable. Do not produce robotic AI-only prose. Do not convert general content into Q&A shapes.
>
> **STEP 5 — SEMANTIC HTML.** Use native semantic HTML correctly: header, nav, main, article, section, aside, footer, headings, p, ul/ol, table/th/td/caption, figure/figcaption, a, button, label/input/textarea/select. Critical indexable navigation uses `<a href>`. Do not make styling dictate heading level.
>
> **STEP 6 — STRUCTURED DATA.** Add only schema types that accurately match visible content and current eligibility rules. JSON-LD server-rendered; stable `@id` graph; values match visible facts exactly. Never invent reviews, ratings, authors, locations, offers, prices, availability, or credentials. FAQ schema is conditional, never default.
>
> **STEP 7 — INTERNAL LINKING.** Eliminate orphan important pages. Link from relevant parent/hub/sibling/child pages with natural descriptive anchors. Use crawlable href links. Keep breadcrumbs/canonicals/sitemaps consistent. Remove broken links, redirect chains, and keyword-link clouds.
>
> **STEP 8 — PERFORMANCE.** Identify the real LCP per template. Do not lazy-load LCP media. Reserve media dimensions. Reduce unnecessary JS/hydration/third-party cost. Optimise images and caching. Targets: LCP ≤2.5s, INP ≤200ms, CLS ≤0.1 at p75 mobile field data; TTFB ≤800ms target. Validate current Core Web Vitals thresholds against current official Google guidance. Do not trade away content/accessibility for speed.
>
> **STEP 9 — DEVICE BEHAVIOUR.** MOBILE (primary): content/link/schema parity, no unintended horizontal overflow at 320–430px, touch targets ≥24px (target 44–48px), accessible disclosure nav, mobile-readable tables/forms, no answer-obscuring overlays. TABLET: test portrait (~768px) and landscape (~1024px) separately; prevent breakpoint hiding/overlap; touch-operable everything. DESKTOP: readable line length (~65–75ch), max content width, correct DOM order, zoom/keyboard support.
>
> **STEP 10 — ACCESSIBILITY.** WCAG 2.2 AA. Prefer native HTML to ARIA. Keyboard operability, visible focus, labels/errors, appropriate alt text, heading hierarchy, table semantics, captions/transcripts where needed, contrast ≥4.5:1 text / ≥3:1 non-text, `prefers-reduced-motion` respected, skip link. Never hide primary content from assistive technology. Accessibility fixes are part of regression QA, not optional polish.
>
> **STEP 11 — TRUST / PROVENANCE.** Genuine organization/contact identity, genuine people/credentials, truthful dates, primary/authoritative citations for material claims, transparent methodology for original studies/calculators/comparisons, clear contact/privacy/terms/returns policies as applicable. Remove unsupported superlatives or substantiate them.
>
> **STEP 12 — OFF-SITE GEO PLAN.** Do not fabricate links or coverage. Identify legitimate third-party review/media/institutional/community sources relevant to the query intent. Produce a prioritised earned-authority backlog separate from source-code tasks. Publish citable assets (original research, statistics pages, definitive guides, tools) as link/citation targets.
>
> **STEP 13 — MONITORING MODEL.** Separate: organic rank/traffic; branded recognition; unbranded AI discovery; citation selection; answer absorption/influence; AI referral traffic; conversion. Track ChatGPT, Gemini/AIO, Perplexity, Claude, and Copilot separately where available. Every observation records engine, model/surface if known, query, intent, location/language, device, timestamp, whether search/AIO triggered, cited URL, cited competitors, and answer passage.
>
> **STEP 14 — CHANGE FORMAT.** For every meaningful change output: REQUIREMENT ID · PRIORITY (P0/P1/P2/P3) · EVIDENCE BASIS · FILE PATH · COMPONENT/FUNCTION/TEMPLATE · CURRENT LOGIC · TARGET LOGIC · EXACT CHANGE · HTML REQUIREMENT · CSS REQUIREMENT · JAVASCRIPT REQUIREMENT · SCHEMA REQUIREMENT · CONTENT REQUIREMENT · INTERNAL LINK REQUIREMENT · MOBILE REQUIREMENT · TABLET REQUIREMENT · DESKTOP REQUIREMENT · ACCESSIBILITY REQUIREMENT · PERFORMANCE REQUIREMENT · DEPENDENCIES · DO NOT · VALIDATION · PASS CRITERIA · FAIL CRITERIA · ROLLBACK/REGRESSION RISK · CONFIDENCE.
>
> **STEP 15 — BUILD ORDER.** P0 crawl/index/render/canonical/compliance issues first (T-01…T-06). Then P1 intent/content/semantic/schema/internal-link/device/a11y/performance/trust issues (T-07…T-16). Then GEO/AIO evidence enhancements and observational measurement (T-17…T-19). P2/P3 experiments only after baseline technical/retrieval quality is stable. Never leave the repository with vague instructions such as "improve SEO" or "optimise for AI" — map every task to files.
>
> **STEP 16 — PRESERVATION RULE (§70).** Before modifying any existing code, identify its current purpose, dependencies, users/components affected, and regression risk. Prefer targeted changes over rewrites. Never sacrifice functioning business logic, conversion flows, or accessibility for an optimisation. If a conflict arises, apply the human-first rule: usefulness/accuracy/accessibility/trust win unless strong evidence says otherwise.
>
> **STEP 17 — VALIDATION.** Run build/typecheck/tests, crawl/HTTP checks, rendered HTML review, schema validation, sitemap/robots/canonical checks, broken-link tests, Lighthouse/field performance where available, accessibility checks, mobile/tablet/desktop QA, and post-deploy index checks. For GEO/AIO distinguish DIRECT TECHNICAL VALIDATION from OBSERVATIONAL VALIDATION. Never call one AI result deterministic proof.
>
> **STEP 18 — FINAL OUTPUT.** Produce: 1) current-state audit; 2) target-state architecture; 3) prioritised requirements; 4) atomic file-level tasks; 5) code changes; 6) validation results; 7) unresolved uncertainties; 8) post-deploy monitoring panel; 9) regression/rollback notes; 10) post-implementation PASS/FAIL report.
>
> **WHAT NOT TO DO:** no guaranteed-ranking claims; no keyword stuffing; no hidden/adversarial text or prompt injection; no fabricated content or schema; no lazy-loaded LCP; no JS-only primary content or links; no doorway pages; no date-freshening without substance; no single-engine overfitting; no arbitrary breakpoints or character-count folklore; no cosmetic Q&A conversion; no relevance-diluting rewrites; no new dependencies unless a requirement cannot otherwise be met.

---

## PART 36 — VALIDATION PLAN

Per §72–§73. Run per phase gate and in full at Part 39.

**Technical validation (direct, deterministic):**
1. **Crawl** (Screaming Frog/Sitebulb or open equivalent): status codes, redirect chains, canonicals, robots meta, orphan pages, duplicate titles/descriptions/H1s, duplicate content clusters, internal-link coverage, depth report. PASS: per task criteria.
2. **HTTP checks:** variant-URL matrix (http/https × www/non-www × slash/no-slash × case) → single-hop 301 to canonical; 404/410 behaviour; no soft 404s.
3. **Render tests:** source-vs-rendered DOM diff per template (primary content, links, meta, schema); blocked-resource report; JS error console check.
4. **Structured data:** Schema.org validator + Google Rich Results Test per template; schema-vs-visible-content diff; `@id` graph integrity.
5. **Sitemap/robots:** sitemap parse (canonical/200/indexable only, lastmod sanity); robots.txt tester; sitemap↔canonical↔in-link cross-agreement.
6. **Performance:** Lighthouse (mobile throttling) per template; WebPageTest waterfall/filmstrip; CrUX/PSI field data where available; RUM if traffic exists. PASS: CWV "Good" thresholds (LCP ≤2.5s, INP ≤200ms, CLS ≤0.1 p75).
7. **Accessibility:** axe-core automated (0 critical/serious) + manual keyboard walkthrough + screen-reader pass (NVDA/VoiceOver) on: home, one hub, one spoke, primary conversion form.
8. **Device matrix (§71):** every significant component tested on mobile (320/360/390/430px: visibility, readability, nav, touch, overflow, tables, images, forms, CTA, CLS, performance), tablet (768×1024 and 1024×768: nav state, grid, measure, images, forms, touch, tables, CTA, breakpoints, overflow), desktop (1280/1440/1920px: readability, widths, interactions, layouts, nav, media, forms, CTA, performance).
9. **Links:** broken-link crawl (internal + external), incl. anchors in content and references blocks.
10. **Security:** SSL Labs-style cert check; mixed-content scan; third-party script inventory.

**SEO validation (§73):** per priority page — crawlable, indexable, correct canonical, 200 status, unique intent-aligned title/description, single H1 matching brief, internal links present, in sitemap, schema valid, no duplication, renders without JS.

**Content validation:** intent-brief mapping; provenance audit (every material claim sourced or first-party); fabrication sweep; freshness/date consistency (visible == schema == lastmod); readability pass sign-off; decision-fact checklist (price/specs/availability/dates explicit where real).

**GEO validation (§74):** differentiate DIRECT TECHNICAL VALIDATION (all of the above) from OBSERVATIONAL VALIDATION (Parts 37–38). Where possible monitor: citations, source appearance, referral traffic, AI-search visibility, branded/entity references, query coverage. Do not claim deterministic GEO validation where none exists.

---

## PART 37 — AIO MONITORING / VALIDATION PLAN

AIO visibility is observational, never deterministic (§75, EV-18, AIO-7). AI Overviews vary by query, user, location, device, time, and experimentation; do not treat one observation as universal evidence.

**Setup:**
1. **Target query panel:** from intent briefs — 10–25 queries per priority page cluster spanning informational/comparison/transactional; skew toward question-phrased queries (AIO activation ~64.7% there vs ~13.7% overall — EV-30); version the panel (never edit silently; append).
2. **Observation protocol:** monthly minimum (weekly during active campaigns; AIO source sets churn fast — 18% page overlap over two months, EV-30); fixed location(s) and device classes (mobile + desktop); signed-out/clean sessions; record: whether an AI Overview appears, whether the site is cited, which URL, which passage was used, citation position/prominence, competitors cited, screenshot/archive.
3. **Log fields:** date · query · market/device · AIO present (Y/N) · site cited (Y/N) · cited URL · passage excerpt · competitor citations · notes.
4. **Variance discipline (evidence-calibrated):** repeat each query **≥7–8 times** across days before concluding anything (daily source Jaccard only 0.34–0.42 — EV-18); include **3–5 paraphrases** per target query (minor reformulations shift AIO sources materially); report rates with the **activation rate as denominator** (a "citation rate" without the query-mix description does not transport); report distributions, never single observations.
5. **Change correlation:** annotate the log with ship dates of T-08/T-09/T-10/T-13 changes; look for citation-rate movement over ≥2 observation cycles; no single-observation conclusions.
6. **Event separation:** distinguish "AIO appeared", "site cited", "site information absorbed", "site clicked/referral observed", and "conversion" as separate events (D2).
7. **PASS/FAIL framing:** there is no deterministic pass. Programme-level success criterion (example): measurable increase in AIO citation rate on the target panel vs baseline over a quarter, holding the panel fixed. Absence of movement → diagnose via pipeline stage (retrieval? selection? absorption? — S04's two-stage frame) before changing tactics. Do not interpret disappearance from one run as a penalty or one appearance as permanent success.

---

## PART 38 — GEO / AI CITATION MONITORING PLAN

Per §74: DIRECT TECHNICAL VALIDATION (Part 36) vs OBSERVATIONAL VALIDATION (this part).

**Harness (T-17 build):**
1. **Prompt panel:** 30–100 fixed prompts (D6 protocol: 20–50 buyer-intent prompts per priority topic) covering: brand/entity queries, category discovery queries ("best X for Y"), informational questions the site's content answers, comparison queries, and (where relevant) local queries. Include competitor-name queries for context. Create separate branded and unbranded query panels (REQ-GEO-10); create intent groups: informational, consideration/comparison, transactional, post-purchase/support where relevant.
2. **Engines:** ChatGPT (web-enabled), Perplexity, Gemini, Google AI Overviews/AI Mode, Copilot, Claude (web-enabled) — never a single engine, since citation behavior diverges sharply (EV-06, EV-33). Record exact model/version and mode per run (engines drift — EV-18).
3. **Cadence:** monthly minimum; weekly during the first quarter post-launch; re-measurement cycles of 14–30 days match observed engine drift (EV-24).
4. **Metrics per engine per run:** search/retrieval activated (Y/N — 57.8% of ChatGPT repetitions never activate web search; discarding no-search responses creates severe selection bias, so log activation explicitly: Pr(cited) = Pr(activation) × Pr(retrieved|active) × Pr(cited|retrieved), EV-18); brand mentioned (Y/N); site cited (Y/N); cited URL(s); citation rate; citation position; answer absorption (did the site's facts materially shape the answer?); mention accuracy; competitors cited; source class of citations (brand-owned/earned/social/institutional/marketplace); referral traffic; conversion; notes.
5. **Derived KPIs:** per-engine citation rate; cross-engine citation rate (expect low overlap — Jaccard ≈0.12 is normal, EV-24); citation share vs named competitors; trend vs baseline; referral traffic from AI surfaces where analytics can see it. **Sentiment handling:** mention sentiment is 6.7× noisier than mention and never settles negative (EV-24) — track accuracy/absence, do not KPI sentiment; ≥10 prompts per platform per brand before reading sentiment at all. **Near-binary note:** 77.5% of brand×prompt×engine cells are always- or never-mentioned (EV-24) — expect step changes, not gradual drift; ≥3 runs to settle a middle cell. **Invisibility benchmark:** even Forbes Global 2000 companies average ~4% visibility and 1 in 5 is entirely absent (EV-12) — treat any measurement below this as a red flag, not a normal state (D6).
6. **Diagnostics when flat:** classify failure by pipeline stage (S05): not indexed → fix Part 22; indexed but never retrieved → authority/intent match (Parts 13/15, off-site programme); retrieved but not cited → absorption features (Part 17: capsules, evidence blocks, structure, freshness); cited but wrong → accuracy/entity clarity (Part 16). After any content-optimisation release, re-check retrieval presence on priority queries first (EV-31: rewrites can impair retrieval). Escalate a "content gap" review for any brand/topic scoring down on invisibility — determine if the cause is lack of retrievable evidence (fixable via content/PR) or lack of pretraining-era presence (fixable via long-term authoritative coverage, Wikipedia, historical documentation) (D6).
7. **Governance:** treat any single content or PR change as a hypothesis — ship one change, re-measure, then iterate; do not rewrite an entire site based on one paper or one abstract (D6). Be skeptical of "magic prompt" or formatting hacks marketed as guaranteed GEO wins (EV-20). Revisit engine-specific weightings periodically, since model versions and retrieval behavior change over time. Keep a change log to reduce false attribution; use rolling trends rather than single-run snapshots.
8. **Reporting:** one-page monthly scorecard; decisions recorded; experiments logged per the experimentation framework.

---

## PART 39 — POST-IMPLEMENTATION QA PROMPT

Hand this to the QA/building AI after implementation (§76). Act as an independent SEO/GEO/AIO QA engineer — do not assume the implementation is correct because another AI produced it.

> Audit the implemented site against every requirement in the playbook. Verify in order: (1) all P0 requirements; (2) all P1; (3) implemented P2; (4) P3/experiments separately. For each requirement produce PASS/FAIL with evidence (crawl export, validator output, screenshot, metric). Then verify cross-cutting: mobile (320–430px), tablet (768/1024 both orientations), desktop (1280–1920px); crawlability; indexability; canonicals; sitemaps; robots; schema (valid + visible-consistent); CWV (LCP/INP/CLS p75); accessibility (axe + keyboard + AT pass); metadata uniqueness; internal linking (0 orphans); content provenance; render parity; GEO structures (capsules, evidence blocks, self-contained passages); AIO structures (FAQ, dates, author blocks); and regressions vs the pre-build baseline (conversion flows, existing rankings, business logic). Confirm the contradiction audit passed: no SEO change harming accessibility; no perf change hiding content; no lazy-loaded LCP; no schema/content mismatch; no canonical/sitemap/robots conflict; no mobile-hidden indexable content; no JS-only links.
>
> For every failure output: requirement/task ID, exact URL/file/component, observed state, expected state, severity, reproduction steps, evidence, fix, and regression risk.
>
> Then run the observational AI query panel. Record engine/query/time/location/device, whether search/AIO triggered, site citation, URL, apparent passage absorbed, competitor citations, and any referral/conversion evidence. Do not treat one observation as deterministic.
>
> Finish with POST-IMPLEMENTATION PASS/FAIL REPORT:
> - P0 PASS count / FAIL count
> - P1 PASS count / FAIL count
> - P2 experiment status
> - regression summary
> - unresolved uncertainty
> - rollback recommendation if necessary
> - the re-baselined AI-visibility measurement (Parts 37–38) and the next monthly review date.

---

## PART 40 — TRACEABILITY MATRIX

SOURCE → EVIDENCE → FINDING → REQUIREMENT → TASK → VALIDATION (§77). Level-1 anchored requirements trace to stable official guidance rather than corpus sources (Part 4, gap 1).

| Source | Evidence | Finding | Requirement(s) | Task(s) | Validation |
|--------|----------|---------|----------------|---------|------------|
| S01 (GEO, KDD'24) | EV-01…EV-05 | G1, G2, G3; SEO-3/4 | REQ-CONT-02/03/04/05, REQ-PAGE-04, REQ-GEO-06 | T-09, T-18, T-06 | Provenance audit; read-aloud extraction; content audit |
| S02 (+S20 report) | EV-06…EV-11 | P-3, P-7, P-8, P-10; AIO-2/3/5/7 | REQ-CONT-06, REQ-AIO-05, REQ-GEO-04, REQ-ENT-04 | T-13, T-17, T-14 | Date-consistency check; monitoring logs |
| S03 (Dominate AI Search) | EV-21 | G9, P-9 | REQ-GEO-02, REQ-ENT-05, REQ-GEO-09 | T-19, T-24 | Asset-per-hub check; citation monitoring |
| S04 (Selection→Absorption) | EV-19 | G5, AIO-1, P-2, P-4; REQ-GEO-07 | REQ-AIO-01/02/03, REQ-GEO-03, REQ-PAGE-02/05 | T-08, T-09, T-21 | Source-grep; section audit; extraction test |
| S05 (Critical Survey) | EV-18, EV-30, EV-31 | G-expectations, P-12, AIO-8/9/12 | REQ-GEO-04/06, EXP-01 governance, REQ-CONT-10/11, Part 37 protocol | T-17, T-09 | Harness exists; experiment register; monitoring protocol fields |
| S06 (AutoGEO) | EV-27 | G3, human-first constraint, paywall cost | REQ-CONT-05, REQ-CRAWL-06, §84 application | T-18, T-24 | Brief documents tactic choice; unauthenticated fetch test |
| S07 (GEO-16) | EV-13, EV-23 (with S16), EV-30(d) | G5, P-6, AIO-10 | REQ-PAGE-03, REQ-AIO-02, REQ-IL-*, REQ-SCHEMA-* | T-08, T-10 | Heading-outline audit; schema validation |
| S08 (RAID G-SEO) | EV-26 | intent-first; preserve semantic distinctiveness | REQ-PAGE-01, REQ-CONT-01 | T-07 | Brief-to-section mapping |
| S09 (Anthropic poisoning) | EV-15 | P-11 | REQ-GEO-06, REQ-TECH-06 posture | T-06, T-03 | Compliance sweep |
| S10 (Discovery Gap) | EV-17 | P-1, P-9, C3, C11 | REQ-GEO-01/10, REQ-ARCH-01, REQ-ENT-05 | T-01, T-05, T-19 | Crawl; authority monitoring |
| S11 (STS manipulation) | EV-16 | P-11 | REQ-GEO-06 | T-06 | Code/content review |
| S12 (C-SEO Bench) | EV-20 | G12, C1, C6 | REQ-GEO-06, EXP governance, REQ-GEO-05 (narrow) | T-06, T-17, T-25 | Experiment register |
| S13 (Invisibility Gap) | EV-12, EV-13, EV-28, EV-29 | P-9, P-10 | REQ-ENT-01/02/05, REQ-GEO-02/04 | T-14, T-19, T-17 | Entity audit; monitoring |
| S14 (JSON-LD ChatGPT) | EV-14 | G7, AIO-4, C2, C4 | REQ-SCHEMA-01…09, REQ-MOB-01, REQ-CRAWL-01/02, REQ-PAGE-03 | T-10, T-04, T-11, T-08 | RRT; device tests; sitemap parse |
| S15 (What Gets Cited) | EV-22 | G0, G4, P-2, C5, C8 | REQ-CONT-02/09/10/11/12, REQ-AIO-06, REQ-TRUST-* | T-09, T-15 | Provenance audit; decision-fact checklist |
| S16 (GEO-SFE) | EV-23 | G5, P-6, G14 | REQ-PAGE-03/05, REQ-GEO-03 | T-08, T-21 | Structure audit |
| S17 (GEO at Scale) | EV-24, EV-32 | P-12, P-9, C13 | REQ-GEO-02/04, REQ-ENT-05, REQ-TRUST-06 | T-17, T-19 | Baseline report; asset-per-hub check |
| S18 (Claude health authority) | EV-25 | vertical authority, C12 | REQ-CONT-09, REQ-TRUST-02/03 | T-09, T-15 | Provenance audit |
| S19 (AEO Vision roundup) | literature map | P-12 support | REQ-GEO-04; corpus routing to S15–S18 | T-17 | — |
| D5/D6 (Perplexity executions) | EV-33, EV-34 | measurement protocol; phased rollout | REQ-GEO-04/07/08/10, Part 33 phasing, Part 38 governance | T-17, T-19 | Harness runbook; monthly scorecard |
| LEVEL-1 ANCHOR (official guidance, stable) | — | SEO substrate | REQ-ARCH-*, REQ-TECH-*, REQ-CRAWL-*, REQ-PERF-*, REQ-MOB-*, REQ-A11Y-*, REQ-DESK-*, REQ-TAB-* | T-01…T-05, T-11, T-12, T-16, T-20, T-22 | Part 36 deterministic tests |

**Forward check (§78):** every material source finding maps to ≥1 requirement, or is dispositioned in Part 41/42. **Reverse check (§79):** every P0/P1 task cites EV-xx or LEVEL-1 ANCHOR above; none is evidence-free.

---

## PART 41 — UNSUPPORTED / WEAKLY SUPPORTED CLAIMS

Per §13/§80. Dispositions: REMOVE / DOWNGRADE / EXPERIMENT / RETAIN WITH WARNING. Consolidated across all seven executions:

| Claim (folklore or weak) | Why support is weak | Source quality | Decision |
|---|---|---|---|
| "Keyword stuffing/density improves AI visibility" | Directly refuted experimentally (−10% vs baseline on Perplexity) | S01 (L2), S12 (L2) | **REMOVE** (DO-NOT, T-06) |
| "GEO content edits guarantee discovery/traffic" | Gains are fixed-context-conditional; no stable longitudinal cross-platform effect on discoverability | S05 (L2 survey), S10 (L2–L3) | **REMOVE** as a claim; retain tactics with bounded expectations |
| "GEO increases visibility by 40%" (as a general claim) | Relative maximum on one position-weighted metric in a fixed-context simulator; explicitly rejected as a general claim by the 45-study survey | S05 (L2) re-reading S01 (L2) | **REMOVE** as a general claim; retain as bounded, conditional experimental result (EV-01) |
| "ai.txt / llms.txt drives AI visibility" | ai.txt non-significant in n=1,508 regression; llms.txt-style guidance positive only in 2 narrow C-SEO cells | S14 (L3), S12 (L2) | **DOWNGRADE** to MAY/P3 (REQ-GEO-05); zero promised effect |
| "XML sitemaps hurt AI visibility" | Confounded correlational coefficient; authors themselves reject causal reading | S14 (L3) | **REMOVE**; sitemaps retained (C4) |
| "Organization schema alone boosts AI visibility" | Non-significant in S14's regression | S14 (L3) | **RETAIN WITH WARNING**: implement for search/knowledge-panel eligibility (Level-1), not for a claimed AI effect |
| "Authoritative tone alone lifts GEO" | No significant improvement in S01 overall; domain-limited | S01 (L2) | **DOWNGRADE** to domain-conditional tactic (REQ-CONT-05) |
| "In-context position gaming" | Conflicting evidence (S01 metric vs S02 observation) | S01/S02 (L2) | **EXPERIMENT** only (EXP-01, C6) |
| "AI Overviews cite only top organic ranks" | Refuted: overlap medians 0–14.3%; 53% of AIO-cited domains outside top 10 | S02 (L2), S21 (L2) | **REMOVE** |
| "A #1 Google page will be cited by AI" | Low domain overlap and engine-specific sourcing contradict equivalence | S02 (L2) | **REMOVE** |
| "One engine's behaviour predicts another's" | Refuted: systematic cross-engine differences | S02, S13 (L2/L3) | **REMOVE**; portfolio rule P-8 |
| "One GEO score can predict AI discovery" | Discovery Gap found no such correlation in tested sample | S10 (L2–L3) | **REMOVE** as success metric; diagnostic use only (C11) |
| "Character-count metadata folklore (fixed title/description lengths as ranking rules)" | No corpus evidence; truncation is presentation, not ranking | — | **RETAIN WITH WARNING**: write intent-led unique titles/descriptions; avoid truncation for UX, not as a ranking factor (REQ-TECH-07) |
| "250-doc poisoning / STS as optimisation tactics" | They are attacks; engines are incentivised to defend; unethical | S09, S11 (L2) | **REMOVE** (DO-NOT, T-06) |
| "Mail Online −45% CTR ⇒ universal AIO traffic loss" | Single-site case, third-party report | S13 citing SEL (L4) | **RETAIN WITH WARNING** as stakes context only (EV-29); never as a prediction |
| "Add statistics/citations and citation rank improves" | Statistics tactic negative in 19/24 C-SEO Bench settings; only 3/54 method-domain cases significantly positive | S12 (L2, NeurIPS'25) | **RETAIN WITH WARNING**: evidence-dense content is kept for absorption/completeness grounds (EV-19, EV-22) and human readers — not as a citation-rank guarantee |
| "Convert content to Q&A/FAQ format for AI" / "LLMs prefer Q&A pages" | Q&A format −5.7% absorption (S04); formatting null (S15) | S04, S15 (L2) | **REMOVE** as a tactic; FAQ sections stay narrow and genuine (C9) |
| "FAQ schema → ChatGPT visibility increases 13×" | Correlation study; OR is not causal uplift and is sector/sample specific | S14 (L3) | **REMOVE** causal wording; retain valid schema as supported practice |
| "Cosmetic formatting/organisation drives citation" | Formatting-only edits OR 0.78–1.68, mostly non-significant, 252k trials | S15 (L2, SIGIR'26) | **REMOVE**; semantic structure retained (C8) |
| "Reddit/community is the #1 non-corporate AI citation source" | YouTube (4.2%) and editorial media (3.8%) beat Reddit (3.3%) in 149,912-citation telemetry; Claude cites ~1% social | S17 (L3–L4), S02 (L2) | **REMOVE** as a general claim; community presence still correlates with discovery for new brands (EV-17, C13) |
| "It takes ~6 months for AI engines to recognise a brand" | Established brands recognised day-1 at 94–100% when named | S17 (L3–L4) | **REMOVE** |
| "Author bylines are universally required for AI citation" | 72.9% of Claude-cited health pages had NO author attribution; institutions cited with 100% no-attribution | S18 (L3) | **RETAIN WITH WARNING**: author transparency kept for trust/YMYL and non-institutional sources (REQ-TRUST-03), not as a universal citation requirement (C12) |
| "Citations drive clicks/conversions/revenue" | Evidence graded VERY LOW; the one quasi-experiment's placebo non-significant (p=0.16) after platform-growth control | S05 (L2) | **RETAIN WITH WARNING**: GEO/AIO KPIs are visibility metrics; do not promise revenue attribution |
| "Schema markup is a proven AI-citation lever" | Correlational (S14); vendor telemetry expects near-zero independent effect (S17); institutions cited without it (S18) | S14/S17/S18 | **RETAIN WITH WARNING** (C2): implement for search eligibility + machine comprehension; AI effect provisional |
| "Backlinks are a direct ChatGPT ranking factor" | Earned sources/referring domains correlate in some studies, but direct algorithmic causation is unproven | S10/S02 (L2) | **RETAIN WITH WARNING**: retain authority strategy; ban causal claim |
| "Fresh date changes improve AI citations" | Evidence concerns genuinely newer content, not cosmetic date manipulation | S02 (L2) | **REMOVE** cosmetic tactic; retain substantive update process |
| "More schema is always better" | No evidence for volume; invalid/mismatched schema creates risk | — | **REMOVE** |
| "AI visibility can be guaranteed after implementation" | Black-box, stochastic external systems | S05 (L2) | **REMOVE**; optimise probability only |
| "Rewrite content conversationally for GEO" | C-SEO Bench shows competitive failure/harm for many interventions | S12 (L2) | **DOWNGRADE** to controlled experiment only |

---

## PART 42 — REMAINING UNCERTAINTIES

1. **AIO internals — partially resolved.** The corpus contains direct AIO measurement (EV-30: domain overlap, churn, activation rates; S07's AIO quality thresholds; S04's AIO breadth/absorption profile). Still unknown: Google's internal source-selection weights, query fan-out mechanics, and passage-ranking internals (no primary evidence anywhere in the corpus). AIO requirements are VALIDATED where EV-30 supports them, PROVISIONAL elsewhere; Part 37 monitoring remains the resolution mechanism.
2. **2026-engine magnitude of GEO tactics.** S01's effect sizes come from 2024-era engines; direction is corroborated (S06, S08, S15, S16), magnitude is not guaranteed on current engines (S05). Confidence labels reflect this.
3. **Causality of schema→AI citation.** Strong correlation (S14), plausible mechanism, no controlled causation in corpus. Mitigation: schema is justified independently on Level-1 grounds.
4. **Off-site weighting.** The corpus establishes that earned media/authority matter (EV-08, EV-17, EV-21, EV-32) but cannot quantify how much vs on-site work for a given site. The entity-fame decision logic (REQ-ENT-04) plus monitoring resolves this per site over time.
5. **Bing/Copilot-specific behaviour.** Corpus-light (UNCLEAR). Universal spec applies; Part 38 includes Copilot in the panel to generate site-specific evidence.
6. **Vertical transfer.** Several studies are consumer-vertical (S02, S10, S14 real estate, S18 health, S07 B2B SaaS). Domain-dependence of tactics is itself a validated finding (EV-05), so per-site measurement is mandatory rather than optional.
7. **Temporal drift.** All AI-platform findings are point-in-time. CURRENT BUT EVOLVING; quarterly re-validation of Parts 37–38 panels and engine list.
8. **Exact proprietary ranking/retrieval weights** used by each AI/search platform are not available; engine behaviours can change faster than academic publication cycles.
9. **Long-term relationship between AI citations and revenue/referral traffic** remains site- and surface-dependent; observed citation patterns vary by vertical, intent, language, model version, query wording, and retrieval mode.
10. **Model-pretraining effects** are inherently hard to influence quickly and may not reflect current public web evidence; some experimental GEO rewrite methods may work in narrow domains while failing competitively elsewhere.

---

## PART 43 — MISSING INFORMATION / SOURCES REQUIRED

No additional source is required to use this playbook as a research-derived universal framework. To raise the corpus from B (SUBSTANTIALLY SUFFICIENT) to A (SUFFICIENT), supply or authorise fetching:

1. **Official documentation snapshots** (Level-1): Google Search Central (AI features guidance, structured-data docs, search essentials, spam policies), Bing Webmaster guidelines (incl. IndexNow), schema.org release notes, current web.dev CWV thresholds, W3C/WAI WCAG 2.2, WHATWG/HTML — to pin the anchored requirements to dated documents rather than stable-knowledge assertion.
2. **A primary Google AI Overviews citation study** (large-scale, current) — to upgrade remaining PROVISIONAL AIO findings to VALIDATED.
3. **Primary texts of the S05-catalogued studies** (S21 Kirsten, S22 Xu, S23 Schulte, S24 SAGEO Arena, S25 Liu) — to upgrade them from INDIRECT to direct evidence.
4. **Site-specific inputs when applying this playbook** (§66): repository access, crawl export, GSC + Bing WMT exports, query/keyword data, competitor set, analytics, current CWV field data. Without these, CURRENT STATE columns and the gap table cannot be completed (they are intentionally blank here — inventing them is prohibited by §66).
5. **The site's entity-fame data** (branded volume, knowledge panel, reference presence) to execute REQ-ENT-04.
6. **Any vertical-specific GEO study** matching the site's industry, to refine REQ-CONT-05 tactic weighting.

Before applying this playbook to a real production repository, the implementation AI should retrieve and validate current official documentation for the exact technical features used, especially: Google Search Central (crawling/indexing, robots, canonicalisation, JavaScript SEO, structured data, spam policies, AI features/AI Overviews where documented, mobile and Core Web Vitals); Bing Webmaster/Microsoft guidance (crawling, IndexNow, structured data, Copilot/search surfaces); schema.org current vocabulary plus current search-engine eligibility documentation; W3C/WAI WCAG and WHATWG/HTML standards; framework-specific current documentation for SSR/SSG/metadata/routing/image optimisation and deployment.

---

### Appendix A — Experimentation framework (§61) template

For any EXPERIMENT-class item (e.g., EXP-01): HYPOTHESIS · RATIONALE (evidence IDs) · PAGES AFFECTED · CONTROL · VARIANT · METRIC (e.g., panel citation rate, organic CTR, CWV) · OBSERVATION WINDOW (≥2 measurement cycles) · SUCCESS CRITERION (pre-registered) · ROLLBACK CONDITION. Never deploy speculative GEO/AIO tactics universally (§61); never let an experiment violate the DO-NOT register or accessibility/performance gates.

### Appendix B — Decision rules & data structures

**B1. Page classification record**
`URL | page_type | primary_entity | primary_query | primary_intent | secondary_intents | index_state | canonical | locale | template | owner | update_cadence | schema_types | P0/P1 issues`

**B2. Evidence block record**
`page | section_heading | direct_answer | evidence_type | evidence_value/source | qualification | provenance | source_date | last_verified | related_link`

**B3. AI observation record**
`timestamp | engine | model/surface | query | intent | language | location | device | search_triggered | aio_present | cited | cited_url | citation_order | passage_match | answer_absorption | brand_mentioned | competitors | source_class | referral_traffic | conversion | notes`

**B4. Requirement object**
`requirement_id | evidence_ids | priority | scope | current_state | target_state | exact_change | files | dependencies | mobile | tablet | desktop | a11y | performance | validation | pass | fail | rollback | confidence`

**B5. Decision logic for uncertain recommendations**
Authoritative/primary, compliant evidence → implement at P0/P1 according to impact. Correlational evidence → use only for independently valid purposes and do not claim causation. Narrow or experimental evidence that could affect retrieval/UX → P2 controlled experiment. Deceptive, adversarial, hidden, or fabricated tactics → prohibit. Conflicting evidence → apply a context-specific rule only when methodology/context resolves the difference; otherwise declare uncertainty and define an experiment.

### Appendix C — Glossary

**SEO** traditional organic search optimisation · **GEO** generative engine optimisation (visibility inside AI-generated answers) · **AIO** AI Overview optimisation (Google AI Overviews and comparable AI search summaries) · **Answer capsule** the self-contained 40–80-word direct answer under the H1 · **Selection vs absorption** being chosen as a source vs actually shaping the answer (S04) · **Earned media** third-party authoritative coverage · **Gatekeepers** the four dominant controlled-trial citation factors: topical relevance, explicit decision-critical facts, recent timestamp, list position (S15) · **P0–P3** priority classes (§62) · **VALIDATED/PROVISIONAL/HYPOTHESIS/EXPERIMENTAL** evidence classes (Part 4) · **LEVEL-1 ANCHOR** requirement resting on stable official documentation rather than the research corpus.

---

*End of playbook. Traceability: every requirement carries evidence; every P0/P1 task cites its evidence; every material source finding is either implemented or dispositioned. Build order: Part 33. Hand-off: Part 35. QA: Part 39.*

