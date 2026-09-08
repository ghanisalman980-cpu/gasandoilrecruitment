# UNIVERSAL AI + SEO + GEO + AIO RESEARCH-TO-IMPLEMENTATION PLAYBOOK

**Version:** 1.0
**Built:** 8 September 2026
**Corpus:** 19 supplied sources (3 uploaded PDFs, 16 URLs — 11 unique arXiv papers, 3 web articles, 1 arXiv HTML mirror, duplicates noted)
**Nature:** Generic, reusable, evidence-traceable implementation specification. Not tied to any website, CMS, framework, industry, or market.

> **Operating principle (§4 of the commissioning prompt):** every meaningful research finding travels the full chain SOURCE → EVIDENCE → CLAIM → CONFIDENCE → FINDING → SEO/GEO/AIO IMPLICATION → DECISION → WEBSITE REQUIREMENT → TECHNICAL/CONTENT IMPLEMENTATION → ATOMIC BUILD TASK → VALIDATION TEST → PASS/FAIL CRITERION. Nothing in this playbook stops at "research suggests X is important."

> **Position-#1 disclaimer (§2):** Position #1 in organic search and inclusion/citation in AI answers are the optimisation *targets*. No credible methodology can guarantee them: ranking and answer selection are controlled by external systems and change over time. This playbook builds the strongest evidence-supported website reasonably possible to *maximise the probability* of outperforming competing results.

---

<!-- PARTS 1-43 ASSEMBLED BELOW -->

## PART 1 — EXECUTIVE SUMMARY

**What this document is.** A universal, evidence-traceable specification that converts a 23-document research corpus (19 supplied + 4 supplementary arXiv papers pulled to close cited gaps) into concrete website implementation instructions for a coding/building AI. It is deliberately generic: every rule is framework-neutral, and every site-dependent decision is expressed as decision logic the implementing AI must execute after auditing the target repository.

**What the evidence actually supports — the ten load-bearing findings:**

1. **Retrieval is the gate; citation is the bottleneck.** Generative engines are RAG pipelines (retrieve → rerank → synthesize → cite). Content that is never crawled, indexed, and retrieved is never cited (S6, S8, S9, S16). Traditional SEO foundations (crawlability, indexability, information architecture, performance) are therefore *prerequisites* for GEO/AIO, not competitors to them. The Discovery Gap study (S17) found on-page "GEO scores" uncorrelated with AI discovery, while classic authority signals (referring domains r=+0.319, community presence r=+0.395) predicted it.
2. **Organic rank ≠ AI citation.** AI engines cite a materially different domain set than Google's top 10: mean overlap 4.0% (GPT-4o), 11.1% (Gemini 2.5 Flash), 12.6% (Claude 4.5 Sonnet), 15.2% (Perplexity Sonar Pro); all pairwise differences p<0.001 over 1,000 queries (S16). AIO/GEO must be engineered as separate disciplines with separate validation.
3. **Content-side GEO tactics have real but conditional causal effects.** In the foundational controlled experiments (S6), adding citations, quotations, and statistics lifted generative visibility 30–40% (position-adjusted) and fluency/readability improvements 15–30%; keyword stuffing *reduced* visibility (~10% worse than baseline on Perplexity). Effects are domain-dependent and shrink when competitors adopt the same tactics (S19) and do not by themselves create organic discoverability (S9).
4. **Engines differ systematically — optimise for a portfolio, not one engine.** AI engines privilege earned/third-party media (51.2% aggregate vs Google's 40.7%) and suppress social content (12.5% vs 33.6%) (S16); Claude is the most earned-media-selective (1.1% social), Perplexity the most retrieval-dependent (S1), ChatGPT the most prior-reliant (S1, S16). No finding from one engine should be generalised to another without evidence.
5. **Freshness matters more in AI answers than in Google.** Median cited-content age: Claude 62.3 days, GPT-4o 79.8, Perplexity 90.4, Google 130.4 in consumer electronics; the gap widens to 148 vs 492.9 days (Claude vs Google) in automotive (S16). Dated, maintained, machine-readable content is an AIO/GEO requirement.
6. **Structure is citation infrastructure.** High-influence cited pages are longer, more structured, semantically aligned, and richer in extractable evidence — definitions, numerical facts, comparisons, procedural steps (S8); document structure at macro/meso/micro levels shapes citation behaviour (S21); semantic heading use (h2/h3) was associated with 2.3–3.3× higher odds of ChatGPT visibility (S3).
7. **Structured data is a visibility correlate worth implementing accurately.** FAQPage (OR≈13.3) and Product (OR≈4.1) JSON-LD were the strongest predictors of ChatGPT visibility in a 1,508-site controlled logistic regression (S3) — correlational, but convergent with Microsoft/Google statements that schema feeds their AI answers. Implement schema for factual accuracy and search eligibility first; treat AI-citation uplift as probable, not proven.
8. **Entity recognition is table stakes; discovery is earned.** LLMs recognised named products 99.4% (ChatGPT) / 94.3% (Perplexity) of the time but surfaced them in unprompted discovery queries only 3.3% / 8.3% (S17). 20% of the world's 80 largest brands were completely invisible in AI answers; 58% of brand mentions came from training data, not live retrieval (S1). Long-term AI visibility requires being present in the authoritative public record (reference sources, earned media, knowledge bases), not just on your own site.
9. **Manipulation exists and will be defended against.** Adversarial text sequences can hijack LLM recommendations (S18); as few as 250 poisoned documents can backdoor models up to 13B parameters (S15). These are *threat* findings: they justify engine-side defences and mean manipulative "GEO hacks" carry real, rising risk. This playbook mandates compliant, human-first implementations only.
10. **Nothing here is guaranteed, and measurement is part of the build.** The critical survey of 45 GEO studies (S9) finds the only reproducible levers are topical relevance and context presence/position; generic heuristics transfer poorly; run-to-run variability is high. Therefore the playbook ships a measurement harness (fixed prompt panels, multi-engine sampling, citation monitoring) as a first-class build requirement, not an afterthought.

**Corpus completeness:** B — SUBSTANTIALLY SUFFICIENT (see Part 4). The corpus is strong on GEO/AI-citation evidence and thinner on official search-engine documentation; Level-1 requirements are therefore anchored to stable, long-standing official guidance (Google Search Central, schema.org, W3C/WHATWG, web.dev Core Web Vitals thresholds) which is identified as such.

**How to use this document.** Parts 2–12 are the evidence base. Parts 13–30 are the normative specifications. Parts 31–34 convert specifications into prioritised, atomic build tasks. Part 35 is a self-contained prompt to hand to the website-building AI. Parts 36–39 define validation and monitoring. Parts 40–43 provide traceability, weak-claim dispositions, uncertainties, and missing information.

---

## PART 2 — SOURCE ACCESS REGISTER

Status labels per §6: FULLY ACCESSIBLE / PARTIALLY ACCESSIBLE / INACCESSIBLE / ACCESS REQUIRES AUTHENTICATION / ACCESS UNCERTAIN.

| ID | Source | Type | Reference | Author / Publisher | Date | Status | Tables/Figures | Relevance | Authority | Limitations |
|----|--------|------|-----------|--------------------|------|--------|----------------|-----------|-----------|-------------|
| S1 | Mind the Invisibility Gap: 80 Leading Global Brands in LLM Answers | Industry study (uploaded PDF) | `Mind_the_invisibity_gap_2352.pdf` | Niall Cook / Geometriqs (independent) | 2025 (data 2024–25; refs accessed 2025-11) | FULLY ACCESSIBLE | Text of tables captured; figures (charts) visible only as captions | HIGH — brand/entity AI visibility, platform differences, training-vs-retrieval split | L3–L4 | Synthetic prompt set; English-only; 80 mega-caps only; alias dictionary may undercount |
| S2 | SSRN deposit of S1 (SSRN 5698748) | Industry study (uploaded PDF) | `ssrn-5698748_9a93.pdf` | Niall Cook / SSRN | 2025 | FULLY ACCESSIBLE — **DUPLICATE of S1** (identical text) | as S1 | as S1 | L3–L4 | as S1 |
| S3 | The Impact of JSON-LD Metadata on ChatGPT Visibility | Academic working paper (uploaded PDF) | `5641050_f561.pdf` | Peter Schanbacher / Hochschule Furtwangen | 2025 | FULLY ACCESSIBLE | Tables 1–4 fully captured | HIGH — structured data ↔ ChatGPT visibility (n=1,508, logistic regression) | L3 | Observational/correlational; one sector (German real estate); pseudo-R²≈0.17; unobserved confounds acknowledged |
| S4 | Top 12 arXiv Papers for GEO in 2026 | Practitioner roundup (web article) | aeovision.ai/articles/top-arxiv-papers-for-generative-engine-optimization/ | AEO Vision content team | 2026 | FULLY ACCESSIBLE | n/a | MEDIUM — curated map of the GEO literature; secondary summaries of S6, S7, S13, S19, S20–S23 | L4–L5 | Vendor blog (sells measurement tooling); secondary reporting — claims verified against primary papers where in corpus |
| S5 | Four Engines. One Thousand Queries. The Toronto Audit | Trade-press research writeup (web article) | everything-pr.com/four-engines-one-thousand-queries-the-toronto-audit-of-how-ai-cites-the-web | EPR Editorial Team | 2026-06-17 | FULLY ACCESSIBLE | All data tables captured | HIGH — faithful, detailed secondary report of S16 with full numbers | L3 (as report of L2) | Secondary; depends on S16 for methodology |
| S6 | GEO: Generative Engine Optimization | Peer-reviewed conference paper (arXiv PDF) | arxiv.org/pdf/2311.09735 (supplied twice) | Aggarwal, Murahari, Rajpurohit, Kalyan, Narasimhan, Deshpande / KDD 2024 | v3 2024-06-28 | FULLY ACCESSIBLE (12 pp, all tables) | Tables 1–7 captured | FOUNDATIONAL — GEO methods, GEO-bench, visibility metrics, Perplexity validation | L2 | Simulated GE (GPT-3.5 + Google top-5); LLM-judged subjective metrics; 2024-era engines |
| S7 | Generative Engine Optimization: How to Dominate AI Search | Preprint (arXiv PDF) | export.arxiv.org/pdf/2509.08919v1 | Chen, Wang, Chen, Koudas / Univ. of Toronto | 2025-09 | FULLY ACCESSIBLE (27 pp) | Captured | HIGH — earned-media bias; AI-vs-Google source, freshness, diversity, paraphrase analysis | L2 (preprint) | Preprint; consumer-vertical focus |
| S8 | From Citation Selection to Citation Absorption | Preprint (arXiv PDF + HTML) | arxiv.org/pdf/2604.25707v2 ; arxiv.org/html/2604.25707v2 | Zhang Kai, He Xinyue, Yao Jingang | v2 2026-04-29 | FULLY ACCESSIBLE (PDF, 21 pp). HTML mirror: abstract page retrieved; full HTML timed out — redundant with PDF | Captured | HIGH — citation selection vs absorption framework; 602 prompts, 21,143 citations, 72 features; covers ChatGPT, Google AI Overview/Gemini, Perplexity | L2 (preprint) | Descriptive; single dataset (geo-citation-lab) |
| S9 | A Critical Survey of Generative Engine Optimization | Critical literature survey (arXiv PDF) | arxiv.org/pdf/2607.14035 | Olivier Martinez / Sciences Po | v. 2026-07-15 | FULLY ACCESSIBLE | Captured | HIGH — 45-study critical synthesis; evidence hierarchy; reproducibility limits; conflict resolution anchor | L2 (survey) | Survey, not new experiments; interpretive judgements are the author's |
| S10 | arXiv HTML mirror of S8 | HTML version | arxiv.org/html/2604.25707v2 | as S8 | as S8 | PARTIALLY ACCESSIBLE — full HTML fetch timed out twice; abstract page retrieved; content identical to S8 PDF | n/a | Redundant mirror | — | None material (PDF used) |
| S11 | Duplicate listing of S6 | — | arxiv.org/pdf/2311.09735 (second occurrence) | — | — | DUPLICATE of S6 | — | — | — | — |
| S12 | What Generative Search Engines Like and How to Optimize Web Content Cooperatively (AutoGEO) | Preprint (arXiv PDF) | arxiv.org/pdf/2510.11438 | Wu, Zhong, Kim, Xiong / CMU + Vody | v1 2025-10-13 | FULLY ACCESSIBLE (30 pp) | Captured | HIGH — automatically learned GE preference rules; cooperative (utility-preserving) rewrites; GEO-Bench + 2 new benchmarks | L2 (preprint, WIP) | Work-in-progress preprint; LLM-derived rules risk circularity |
| S13 | AI Answer Engine Citation Behavior (GEO-16 framework) | Preprint (arXiv PDF) | arxiv.org/pdf/2509.10762 | Kumar & Palkhouski | 2025-09 | FULLY ACCESSIBLE (7 pp) | Captured | HIGH — empirical page-level citation-readiness factors across engines | L2–L3 (preprint) | Framework study; effect sizes modest |
| S14 | Role-Augmented Intent-Driven G-SEO | Preprint (arXiv PDF) | arxiv.org/pdf/2508.11158 | Chen, Wu, Bao, Chen, Liao, Huang / USTC | 2025-08 | FULLY ACCESSIBLE (15 pp) | Captured | MEDIUM-HIGH — search-intent modelling as optimisation signal; G-EVAL 2.0 rubric; extends GEO dataset | L2 (preprint) | Simulated GSE; code "released upon acceptance" |
| S15 | A small number of samples can poison LLMs of any size | Lab research report (web article + linked paper) | anthropic.com/research/small-samples-poison | Souly, Rando, Chapman, Davies, et al. / Anthropic + UK AISI + Alan Turing Institute | 2025-10-09 | FULLY ACCESSIBLE | Figures as captions; data described in text | MEDIUM — threat-model evidence: ~250 docs backdoor 600M–13B models; justifies anti-manipulation posture | L2 | Narrow DoS backdoor only; ≤13B models; not a GEO technique |
| S16 | Navigating the Shift: Comparative Analysis of Web Search and Generative AI Response Generation | Peer-reviewed workshop paper (arXiv PDF) | arxiv.org/pdf/2601.16858 | Chen, Wang, Chen, Koudas / Univ. of Toronto; EDBT/ICDT 2026 workshops | 2026 (conf. March 2026) | FULLY ACCESSIBLE | Captured (see also S5's full table reproductions) | FOUNDATIONAL — 1,516 queries, 5 systems; domain overlap, source typology, freshness, pre-training-vs-retrieval perturbation | L2 | Consumer verticals; ranking-style queries; single time window |
| S17 | The Discovery Gap: LLM Discoverability of Product Hunt Startups | Academic study (arXiv PDF) | arxiv.org/pdf/2601.00912 | Amit Prakash Sharma / IIT Patna | 2025-12 | FULLY ACCESSIBLE (20 pp) | Captured | HIGH — recognition vs discovery gap (99.4% vs 3.3%); GEO score uncorrelated; referring domains & Reddit presence predict visibility | L2–L3 | Two models only (gpt-4o-mini, Perplexity sonar); startup/product niche |
| S18 | Manipulating Large Language Models to Increase Product Visibility | Preprint (arXiv PDF) | arxiv.org/pdf/2404.07981 | Kumar & Lakkaraju / Harvard | v2 2024-09-02 | FULLY ACCESSIBLE (13 pp) | Figures as captions; results described | MEDIUM-HIGH — proof that adversarial STS can hijack LLM recommendations → anti-manipulation rules | L2 | Fictitious catalogue; open models (Llama-2); attack, not a defence or a tactic to adopt |
| S19 | C-SEO Bench: Does Conversational SEO Work? | Peer-reviewed benchmark paper (arXiv PDF) | arxiv.org/pdf/2506.11097 | Puerto et al. / NeurIPS 2025 D&B | 2025-06 | FULLY ACCESSIBLE (13 pp) | Captured | HIGH — many conversational-SEO edits fail or backfire under multi-adopter competition; retrieval rank dominates surface rewrites | L2 | Benchmark setting; specific C-SEO method family |
| S20 | What Gets Cited: Competitive GEO in AI Answer Engines | Preprint (arXiv PDF, supplementary) | arxiv.org/pdf/2605.25517 | Vishwakarma, Kumar, Jamidar | 2026-05 | FULLY ACCESSIBLE (8 pp) | Captured | HIGH — controlled matched-pair citation factors: completeness, trust, readability, freshness, position | L2–L3 (preprint) | Simulated RAG setting |
| S21 | Structural Feature Engineering for GEO (GEO-SFE) | Preprint (arXiv PDF, supplementary) | arxiv.org/pdf/2603.29979 | Yu, Yang, Ding | 2026-03 | FULLY ACCESSIBLE (10 pp) | Captured | HIGH — macro/meso/micro document structure → citation behaviour | L2–L3 (preprint) | Structure-only lens |
| S22 | GEO at Scale: Measuring Brand Visibility Across AI Search Engines | Practitioner measurement paper (arXiv PDF, supplementary) | arxiv.org/pdf/2606.20065 | Kumar | 2026-06 | FULLY ACCESSIBLE (11 pp) | Captured | MEDIUM-HIGH — production measurement loop: fixed prompts, multi-engine sampling, share-of-voice | L3–L4 | Practitioner methodology |
| S23 | Authority Signals in Claude AI Health Citations | Descriptive study (arXiv PDF, supplementary) | arxiv.org/pdf/2605.23921 | Jacques, Datuowei, Quaye | 2026-05 | FULLY ACCESSIBLE (8 pp) | Captured | MEDIUM — institutional-authority concentration in Claude health citations | L3 | Single vertical (health), single engine |

**Audit notes.** Every supplied source was opened and read. No source required authentication. No source was silently omitted. Two supplied items were duplicates (S2≡S1; S11≡S6). One supplied item (S10) is an HTML mirror whose PDF twin (S8) was fully read. Four supplementary papers (S20–S23) were added because S4 cited them as load-bearing for implementation; they are marked as additions.

## PART 3 — SOURCE ACCESS FAILURES

| # | Affected source | Inaccessible material | Cause | Potential impact | Information likely missing | Action required from you |
|---|-----------------|-----------------------|-------|------------------|----------------------------|--------------------------|
| 1 | S10 (arxiv.org/html/2604.25707v2) | Full-text HTML rendering | Fetch timeout (arXiv throttling) | None material — the identical PDF (S8) was fully analysed | None (duplicate content) | None. If you specifically need the HTML variant verified, re-run later |
| 2 | All PDF sources | Figures/charts as images (charts in S1, S6, S16, S18) | PDF text extraction captures captions and surrounding text, not pixels | LOW — every figure's quantitative content was stated in adjacent text/tables | Exact curve shapes only | None |
| 3 | — | — | — | — | — | — |

No other failures. No source is INACCESSIBLE, AUTH-LOCKED, or UNCERTAIN.

## PART 4 — CORPUS COMPLETENESS ASSESSMENT

**Classification: B — SUBSTANTIALLY SUFFICIENT.**

The corpus supports robust conclusions and a full implementation specification for GEO, AIO-adjacent, and AI-answer-engine optimisation, and for the SEO foundations that gate them. Identifiable gaps:

1. **No Level-1 documents were supplied** (no Google Search Central, Bing Webmaster, schema.org, W3C, or web.dev documents). SEO/technical requirements in this playbook that rest on official guidance are marked `LEVEL-1 ANCHOR (stable official guidance)` and are limited to long-stable, well-documented norms (crawlability, indexability, canonicals, robots, sitemaps, structured-data validity, Core Web Vitals thresholds, WCAG). They are not derived from the corpus; they are the corpus-independent substrate the corpus itself presupposes (S3, S6, S9, S17 all assume retrieval/indexation).
2. **No direct Google AI Overviews primary study was supplied.** AIO findings are inferred from: S8 (which explicitly includes Google AI Overview/Gemini in its citation dataset), S16 (Gemini 2.5 Flash with Search grounding), S1 (Gemini as used in AI overviews), and convergent GEO evidence. AIO-specific claims are therefore tagged VALIDATED, PROVISIONAL, or HYPOTHESIS accordingly, and Part 37 ships an observational validation plan rather than deterministic tests.
3. **No site-specific inputs** (no GSC/Ahrefs exports, no crawl, no query list, no competitor set) — by design, since the playbook is universal. The decision logic for producing them is specified (Parts 13, 19, 31, 35).
4. **Engines studied are 2024–mid-2026 versions.** All AI-platform findings are classified CURRENT BUT EVOLVING (Part 5) and the monitoring plans (Parts 37–38) exist precisely because these systems drift.

Finding classes used throughout: **VALIDATED** (convergent evidence across ≥2 independent corpus sources, or one controlled study + official guidance), **PROVISIONAL** (single credible study, or consistent but correlational evidence), **HYPOTHESIS** (plausible, mechanism-supported, untested), **EXPERIMENTAL** (ship only behind the experimentation framework in §61/Part 31).

## PART 5 — SOURCE AUTHORITY / FRESHNESS ASSESSMENT

Authority tiers per §8. Freshness classes per §9: CURRENT / CURRENT BUT EVOLVING / UNCERTAIN / LEGACY / SUPERSEDED.

| ID | Authority tier | Why | Freshness | Notes |
|----|----------------|-----|-----------|-------|
| S6 | L2 (peer-reviewed, KDD 2024) | Controlled experiments, 10k-query benchmark, real-engine validation | CURRENT BUT EVOLVING | 2024 engines (GPT-3.5 sim, Perplexity); direction of findings corroborated by S9/S12/S19/S20 |
| S16 | L2 (peer-reviewed workshop, EDBT/ICDT 2026) | Largest multi-engine audit in corpus; 1,516 queries; bootstrap validation | CURRENT | 2026-era models; consumer verticals |
| S7 | L2 (preprint) | Large-scale comparative study | CURRENT | Preprint; check for published successor |
| S9 | L2 (critical survey) | 45 studies, explicit evidence hierarchy | CURRENT | Covers Nov 2023–Jul 2026 |
| S19 | L2 (NeurIPS 2025 D&B) | Benchmark with multi-adopter design | CURRENT | — |
| S12 | L2 (preprint, WIP) | Systematic rule induction + benchmarks | CURRENT | Work-in-progress |
| S8 | L2 (preprint) | 602 prompts × 3 platforms incl. Google AI Overview; 72 features | CURRENT | Descriptive |
| S14 | L2 (preprint) | Intent-driven optimisation + new eval rubric | CURRENT | — |
| S18 | L2 (preprint, Harvard) | Controlled adversarial experiments | CURRENT BUT EVOLVING | Defence-side relevance only |
| S15 | L2 (frontier-lab + national institutes) | 72 trained models, controlled poisoning | CURRENT | Security evidence, not ranking evidence |
| S17 | L2–L3 | 2,240 queries × 112 startups; correlational + controlled parts | CURRENT | Two engines only |
| S3 | L3 | n=1,508, multivariate regression, but observational | CURRENT | Single country/sector |
| S20 | L2–L3 (preprint) | Matched-pair controlled citation factors | CURRENT | Simulated RAG |
| S21 | L2–L3 (preprint) | Structure-focused experiments | CURRENT | — |
| S1/S2 | L3–L4 | Transparent method, public dataset, but synthetic prompts | CURRENT | Mega-caps only |
| S22 | L3–L4 | Practitioner measurement design | CURRENT | — |
| S23 | L3 | Descriptive single-vertical audit | CURRENT | Health only |
| S5 | L3 (secondary report of S16) | Faithful reproduction of primary numbers | CURRENT | Weighted as S16 |
| S4 | L4–L5 | Vendor roundup | CURRENT | Used only as literature map; claims verified against primaries |

**Freshness rules applied:** (a) no pre-2023 SEO folklore is imported; (b) every AI-platform number is treated as a point-in-time measurement of named model versions; (c) where 2026 sources (S9, S16) qualify 2024 findings (S6), the newer qualification wins (see Conflict C1).

## PART 6 — EVIDENCE LEDGER

Confidence scale per §10: VERY HIGH / HIGH / MEDIUM / LOW / SPECULATIVE. Causality scale per §11: CAUSATION / STRONG ASSOCIATION / CORRELATION / WEAK ASSOCIATION / PRACTITIONER OBSERVATION / HYPOTHESIS / SPECULATION. "Discipline relevance" uses SEO / GEO / AIO / ALL.

---

**EV-01 — Content-side GEO tactics causally lift generative visibility 30–40%.**
Source: S6. Claim: Adding citations from reliable sources, quotations, and statistics to page content increases visibility in generative-engine responses by 30–40% (position-adjusted word count) and 15–30% (subjective impression) vs unmodified content. Evidence: controlled content-intervention experiments on GEO-bench (10,000 queries, 9 datasets, 25 domains), 5 seeds; top methods Cite Sources / Quotation Addition / Statistics Addition; best +41% / +28% on the two metrics. Type: controlled experiment (CAUSATION, within the tested GE setup). Platform: simulated GE (GPT-3.5 + Google top-5 retrieval) + Perplexity.ai. Date: 2024. Authority L2. Freshness: CURRENT BUT EVOLVING. Discipline: GEO (primary), AIO (mechanism transfer, provisional). Device: none. Implementation relevance: content blocks must carry citable statistics, quotations, and source references. Confidence: HIGH (direction), MEDIUM (magnitude on 2026 engines). Contradicted/qualified by: S9 (gains conditional on already being retrieved; not discoverability), S19 (multi-adopter erosion). Limitations: simulated GE; LLM-judged metrics.

**EV-02 — Keyword stuffing reduces generative visibility.**
Source: S6. Claim: Keyword stuffing scored below baseline (e.g., ~10% worse than baseline on Perplexity.ai; 17.7–17.8 vs 19.3 baseline position-adjusted in simulation). Type: controlled experiment (CAUSATION). Platform: simulated GE + Perplexity. Confidence: HIGH. Discipline: GEO/AIO/SEO (anti-pattern). Implementation: DO-NOT rule. Limitations: as EV-01.

**EV-03 — GEO lifts lower-ranked sites most.**
Source: S6. Claim: When all sources are optimised, Cite Sources gave +115.1% visibility to the rank-5 source while the rank-1 source lost 30.3%; GEO partially democratises visibility. Type: controlled experiment. Confidence: MEDIUM-HIGH. Discipline: GEO. Implication: GEO is highest-leverage for sites that are not already dominant organically. Limitations: single simulated setup.

**EV-04 — Fluency/readability improvements lift generative visibility 15–30%.**
Source: S6. Claim: Fluency Optimisation and Easy-to-Understand rewrites produced significant visibility gains; best combination was Fluency + Statistics (>5.5% above any single method). Type: controlled experiment. Confidence: MEDIUM-HIGH. Discipline: GEO/AIO. Implementation: clarity editing is a citable-content requirement, not cosmetic.

**EV-05 — GEO tactic effectiveness is domain-dependent.**
Source: S6. Claim: e.g., Authoritative wins on debate/history; Cite Sources on facts/law & gov; Statistics Addition on law/gov/opinion; Quotation Addition on people & society/history. Type: controlled experiment. Confidence: HIGH (that variation exists), MEDIUM (specific mapping). Implication: per-page-type tactic selection, not one global rewrite rule.

**EV-06 — AI engines and Google cite materially different domains.**
Source: S16 (reported faithfully by S5). Claim: Mean domain overlap with Google top-10 across 1,000 ranking queries: GPT-4o 4.0% (median 0.0%), Gemini 2.5 Flash 11.1%, Claude 4.5 Sonnet 12.6%, Perplexity 15.2%; all pairwise differences p<0.001 (10,000-iteration bootstrap). Type: large-scale observational audit (STRONG ASSOCIATION). Platforms: Google, GPT-4o, Claude 4.5 Sonnet, Perplexity Sonar Pro, Gemini 2.5 Flash. Date: 2026. Confidence: HIGH. Discipline: GEO/AIO vs SEO separation. Implication: organic #1 neither guarantees nor is required for AI citation; separate measurement required. Limitations: ranking-style consumer queries.

**EV-07 — Niche queries do not make AI engines converge toward Google.**
Source: S16/S5. Claim: 216 entity-comparison queries (108 popular/108 niche): niche raised AI–Google overlap only 3–4pp (GPT-4o 1.3%→1.9%, n.s.); AI engines converged slightly toward *each other* (unique-domain ratio 74.2%→68.6%), relying on "concentrated, shared sources for niche entities." Confidence: HIGH. Implication: for niche topics, being inside the engine-preferred source set matters more than Google rank.

**EV-08 — AI engines privilege earned media and suppress social content.**
Source: S16/S5. Claim: 300 consumer-electronics queries: all-AI aggregate 36.3% brand / 12.5% social / 51.2% earned vs Google 25.7/33.6/40.7. Claude: 1.1% social overall, 85.9% earned on consideration queries, 0.0% social on transactional. GPT-4o: 77.9% earned on consideration, 60% brand on transactional. Gemini: brand-heavy (68.2% brand transactional). Perplexity: most balanced AI engine (38.7/11.4/49.9). Confidence: HIGH. Implication: off-site earned-media presence is a GEO requirement; on-site optimisation alone is insufficient (corroborated by S1, S7, S17).

**EV-09 — AI engines cite fresher content than Google.**
Source: S16/S5. Claim: median cited-page age (consumer electronics / automotive): Claude 62.3d/148.0d; GPT-4o 79.8d/162.2d; Perplexity 90.4d/216.6d; Google 130.4d/492.9d; date-extraction coverage reported (e.g., Claude CE 0.925). Confidence: HIGH. Implication: visible, machine-readable dates and substantive freshness updates are AIO/GEO requirements.

**EV-10 — For popular entities, pre-training priors dominate; for niche entities, retrieval dominates.**
Source: S16/S5. Claim: GPT-4o perturbation study — popular entities: Kendall τ 0.911 (1.000 under strict grounding); 16% of ranked entities absent from retrieved snippets (Infiniti 73% miss, Cadillac 58%); niche entities: snippet shuffle Δ4.15 vs 2.30, entity-swap Δ4.63 vs 2.60, τ collapses to 0.556, strict grounding stabilises (Δ0.46). Confidence: HIGH. Implication: unknown/niche brands can win via retrieval-optimised content; famous brands are defended via the public record. Decision logic: assess entity fame first (Part 16).

**EV-11 — Once retrieved, in-context position may matter less than presence.**
Source: S16/S5 (authors' observation). Claim: "Once a document is included within the model's context window… its absolute position within that context may be less critical for certain query types." Confidence: MEDIUM (bounded to query types tested). Implication: prioritise *being retrieved at all* over micro-position games.

**EV-12 — Brand visibility in AI answers is low, skewed, and partly training-data-bound.**
Source: S1/S2. Claim: 80 Forbes-Global-2000 brands × 250 prompts × 3 platforms × 2 modes (1,500 answers): mean visibility ≈4%; 16/80 (20%) completely invisible; tech 39.5% of mentions vs finance 2.9%/energy 1.8%; top-5 brands >50% of mentions; 58% of mentions from training-only mode, 42% from web-grounded; sentiment 68% positive/<1% negative. Type: structured audit (STRONG ASSOCIATION for representational bias; not traffic). Confidence: MEDIUM-HIGH. Implication: entity/brand presence in the authoritative public record (incl. reference works) is a long-lead GEO requirement; absence — not negativity — is the primary risk.

**EV-13 — Platforms differ in retrieval dependence.**
Source: S1/S2. Claim: ChatGPT broadest coverage (59/80 brands) and prior-reliant; Gemini largest web-grounding lift (+9 companies); Perplexity most retrieval-dependent (35→49 companies with web). Confidence: MEDIUM-HIGH. Implication: retrieval-optimised content buys the most on retrieval-centric engines (Perplexity, AI Overviews/AI Mode); training-data presence is slow-burn.

**EV-14 — FAQPage and Product JSON-LD strongly predict ChatGPT visibility (correlational).**
Source: S3. Claim: 1,508 German real-estate sites, logistic regression: FAQPage OR≈13.28 (p<0.001, marginal +26pp), Product OR≈4.06 (+14pp), mobile-optimised OR≈5.24, robots.txt OR≈3.44, h2 OR≈3.27, h3 OR≈2.28; faster load associated (418ms vs 623ms, p=0.014); Organization schema, ai.txt, h1-count, internal-link count NOT significant; XML sitemap negative (OR 0.56) — authors attribute to confounding. Type: observational regression (CORRELATION; confound-controlled). Confidence: MEDIUM. Implication: implement accurate FAQ/Product/Org schema + technical hygiene; do not read as proven causation. Limitations: one sector/country; pseudo-R²≈0.17.

**EV-15 — ~250 poisoned documents can backdoor LLMs regardless of scale.**
Source: S15. Claim: 250 malicious documents (≈420k tokens, 0.00016% of training tokens) reliably backdoored 600M–13B models (DoS/gibberish backdoor); absolute count, not percentage, drives success; 72 models trained. Type: controlled security experiment (CAUSATION). Confidence: HIGH (narrow backdoor). Implication: engines have strong incentives to deploy anti-poisoning defences; manipulative GEO tactics carry escalating detection risk → compliance rules (Part 41, DO-NOT list).

**EV-16 — Adversarial "strategic text sequences" can hijack LLM recommendations.**
Source: S18. Claim: GCG-optimised text on a product page moved a never-recommended product to top recommendation (200-eval distributions; robust under permutation when so optimised). Type: controlled attack (CAUSATION). Confidence: HIGH. Implication: DO-NOT — no hidden/adversarial text; also a warning that engines will filter such patterns. Never implement.

**EV-17 — Recognition ≠ discovery; classic authority signals predict AI discovery better than on-page "GEO scores".**
Source: S17. Claim: 112 Product Hunt startups × 2,240 queries: by-name recognition 99.4% (ChatGPT gpt-4o-mini) / 94.3% (Perplexity); discovery-style appearance 3.32% / 8.29%; GEO content scores uncorrelated with discovery; referring domains r=+0.319 (p<0.001), Product Hunt rank r=−0.286 (p=0.002), cleaned Reddit presence r=+0.395 (p=0.002) predicted Perplexity visibility. Type: observational + audit (CORRELATION). Confidence: MEDIUM. Implication: SEO foundations + off-site presence are prerequisites; on-page GEO is necessary-but-insufficient.

**EV-18 — Across 45 studies, only topical relevance and context presence/position are reproducible levers; heuristics transfer poorly; competition erodes gains; citation-rewrites can impair retrieval.**
Source: S9. Claim: foundational-paper gains are valid within fixed-context settings but "establish neither organic discoverability nor durable traffic effects"; commercial audits show low source overlap, high run-to-run variability, fidelity gaps; no reviewed technique shows stable longitudinal cross-platform causal effect on organic discoverability. Type: critical systematic survey. Confidence: HIGH (as a synthesis of the field's evidential limits). Implication: expectation-setting, experimentation framework, and measurement harness are mandatory parts of the build.

**EV-19 — Citation has two stages (selection vs absorption); high-influence pages are longer, structured, evidence-rich.**
Source: S8. Claim: geo-citation-lab (602 prompts; ChatGPT, Google AI Overview/Gemini, Perplexity; 21,143 search-layer citations; 18,151 fetched pages; 72 features): Perplexity/Google cite more sources; ChatGPT cites fewer but with higher average influence; high-influence pages are longer, more structured, semantically aligned, richer in definitions, numerical facts, comparisons, procedural steps. Type: large descriptive measurement (STRONG ASSOCIATION). Confidence: MEDIUM-HIGH. Discipline: GEO + AIO (dataset explicitly includes Google AI Overview). Implication: build "absorption-ready" evidence blocks (Part 17).

**EV-20 — Many conversational-SEO edits fail or backfire when competitors also adopt them; retrieval rank dominates surface rewrites.**
Source: S19 (C-SEO Bench, NeurIPS 2025 D&B; corroborated by S4's summary). Claim: across tasks/domains/multi-adopter settings, many popular C-SEO document edits are ineffective or harmful once multiple actors apply them; improving underlying retrieval ranking often matters more. Type: benchmark experiments (CAUSATION within benchmark). Confidence: HIGH. Implication: no "magic prompt HTML"; invest in retrieval eligibility + evidence quality.

**EV-21 — Earned-media bias vs Google is systematic across verticals/languages/paraphrases.**
Source: S7 (corroborated by S16's typology track and S1). Claim: AI search systems systematically favour earned (third-party authoritative) media over brand-owned and social content, unlike Google's more balanced mix; engines differ on freshness, domain diversity, and phrasing sensitivity. Confidence: HIGH (convergent with EV-08). Implication: digital-PR/earned-media strategy is part of GEO, expressed here as off-site requirements the site must support (press/insights pages, citable assets).

**EV-22 — Citation preference is driven by completeness, trust cues, readability, freshness, and competitive framing (controlled).**
Source: S20. Claim: matched-pair controlled comparisons in simulated RAG (order-counterbalanced, brand-anonymised, multi-LLM): completeness, evidence/trust, readability, freshness drive citation preference; citation is a bottleneck *after* retrieval. Confidence: MEDIUM-HIGH. Implication: answer blocks must be complete, self-contained, sourced, and current.

**EV-23 — Document structure (macro architecture, meso chunking, micro emphasis) shapes citation behaviour.**
Source: S21 (corroborated by S8's structure features and S3's h2/h3 odds ratios). Claim: GEO-SFE: macro document architecture, meso chunking/formatting, micro emphasis patterns influence whether/what generative engines cite. Confidence: MEDIUM-HIGH. Implication: semantic sectioning, scannable chunks, extractable answer blocks = citation infrastructure (Parts 14, 17, 23).

**EV-24 — GEO requires a fixed measurement loop: frozen prompt panels, multi-engine sampling, share-of-voice, re-measurement.**
Source: S22 (corroborated by S4, S9's reproducibility protocol, S1's monitoring advice). Claim: production GEO measurement = fixed prompt sets, repeated multi-engine sampling, mention/citation share vs competitors, scheduled re-measurement. Confidence: MEDIUM-HIGH. Implication: Parts 37–38 monitoring plans are build deliverables.

**EV-25 — Selective engines lean on institutional authority (health vertical).**
Source: S23. Claim: Claude's health citations concentrate heavily on established institutional sources. Confidence: MEDIUM (single vertical/engine). Implication: YMYL-adjacent sites need institutional-grade corroboration and citations; authority thresholds vary by engine and vertical.

**EV-26 — Intent-modelled optimisation beats single-aspect optimisation.**
Source: S14. Claim: Role-Augmented Intent-Driven G-SEO (reflective intent refinement across informational roles) significantly improved subjective impressions and objective content visibility over single-aspect baselines on an extended GEO dataset with G-EVAL 2.0 rubric. Confidence: MEDIUM. Implication: per-page intent analysis (Part 15) precedes content optimisation; different intents need different answer structures.

**EV-27 — Generative engines have learnable, domain-varying content preferences; cooperative rewrites can raise traction while preserving search utility.**
Source: S12 (AutoGEO). Claim: LLM-induced preference rules from tens of thousands of preference observations transfer into prompt-based and trained rewriters that improve traction on GEO-Bench + two real-query benchmarks while preserving utility; rules are domain-variant. Confidence: MEDIUM. Implication: supports EV-05 (domain-specific tactics) and the human-first constraint (optimisation must not degrade utility).

**EV-28 — LLM answers skew positive; absence is the risk.**
Source: S1/S2. Claim: 68% positive / 32% neutral / <1% negative brand mentions. Confidence: MEDIUM. Implication: monitoring should track presence/absence and accuracy, not only sentiment.

**EV-29 — AI Overviews can materially cut publisher CTR (demand-side stakes).**
Source: S1 citing Search Engine Land (Mail Online CTR −45% under AI Overviews) and YouGov (>50% users prefer AI summaries); Forrester: 73% of B2B buyers use AI tools in vendor research. Type: third-party reported metrics (PRACTITIONER OBSERVATION). Confidence: LOW-MEDIUM (single-site CTR case). Implication: stakes/justification only; not an implementation rule.

---

## PART 7 — CONFLICT REGISTER

**C1 — Do content-side GEO tactics work?**
Claims: S6 (yes, 30–40% causal lift in fixed-context GE) vs S19 (many edits fail/backfire under multi-adopter competition) vs S9 (gains conditional; no discoverability effect; heuristics transfer poorly).
Methodology: S6 controlled single-adopter experiments; S19 benchmark with multi-adopter settings; S9 synthesis of 45 studies. Authority: all L2. Freshness: S6 (2024) vs S19 (2025) vs S9 (2026-07) — newer qualifies older.
DECISION: Implement the human-first subset of GEO content tactics (citations, statistics, quotations, definitional clarity, fluency, structure) as MUST/SHOULD requirements, because they are also evidence-quality improvements for human readers, and S6 shows causal benefit when the source is already retrieved. Do NOT promise lift percentages; do NOT deploy manipulative or template-spam variants; measure via Parts 37–38.
RATIONALE: convergent direction (S6, S12, S14, S20, S21) + bounded expectations (S9, S19) + human-first alignment (§84).
EVIDENCE: EV-01, EV-04, EV-18, EV-20. CONFIDENCE: HIGH (direction), MEDIUM (magnitude).

**C2 — Does structured data cause AI citation?**
Claims: S3 (FAQPage OR≈13.3, Product OR≈4.1 — strongest predictors of ChatGPT visibility) vs S3's own caution + general search-industry position that schema is not a ranking factor; causation unproven.
DECISION: Implement accurate, visible-content-consistent JSON-LD (Organization, WebSite, WebPage, BreadcrumbList, Article/Service/Product/FAQPage where factually applicable) as MUST — justified independently by Level-1 search eligibility and machine comprehension — and treat AI-citation uplift as PROVISIONAL benefit. Never mark up invisible or inaccurate content.
RATIONALE: correlation is strong and mechanism-plausible (Microsoft/Google confirm schema use in AI answers), but S3 is observational; the requirement stands on Level-1 grounds even if the GEO effect is zero.
EVIDENCE: EV-14. CONFIDENCE: HIGH (implement schema), MEDIUM (schema→AI-citation causality).

**C3 — "Optimise for AI directly" vs "build the SEO foundation first".**
Claims: S17 (GEO scores uncorrelated with discovery; referring domains/Reddit predict; "build SEO foundation first") vs S6/S12/S14 (content optimisation lifts visibility once retrieved).
DECISION: Sequence the build: P0 crawlability/indexability/retrieval-eligibility first; content-side GEO second; off-site authority third (ongoing). These are complements at different pipeline stages (S9's multistage model), not substitutes.
EVIDENCE: EV-17, EV-01, EV-18. CONFIDENCE: HIGH.

**C4 — XML sitemaps: negative coefficient in S3 vs standard practice.**
Claims: S3 (sitemap presence negatively associated with ChatGPT visibility, OR 0.56) vs Level-1 guidance (sitemaps aid discovery).
DECISION: Keep and maintain XML sitemaps (MUST). S3's own authors attribute the coefficient to confounding (smaller/newer sites add sitemaps but lack reputation); it is not evidence of harm.
EVIDENCE: EV-14 + LEVEL-1 ANCHOR. CONFIDENCE: HIGH.

**C5 — Keyword-based optimisation.**
Claims: legacy SEO folklore (keywords drive visibility) vs S6 (keyword stuffing −10% vs baseline on Perplexity) and S19.
DECISION: DO-NOT keyword stuffing, anywhere. Write for intent and entity clarity; natural keyword coverage follows.
EVIDENCE: EV-02, EV-20. CONFIDENCE: HIGH.

**C6 — Does position within retrieved context matter?**
Claims: S6's position-adjusted metric implies position matters vs S16's observation that once in the window, absolute position may be less critical for certain query types.
DECISION: Optimise for retrieval + citation presence first (P0/P1); treat in-answer position as an observational metric, not an implementation target. No position-gaming tactics.
EVIDENCE: EV-11, EV-01. CONFIDENCE: MEDIUM. EXPERIMENT ALLOWED (Part 31, EXP-01).

**C7 — Is AI visibility mostly a training-data problem (slow) or a retrieval problem (fast)?**
Claims: S1 (58% of mentions from training-only mode) vs S16 niche-entity results (retrieval dominates for low-coverage entities) vs S17 (discovery via authority signals).
DECISION: Dual-track: (a) retrieval-track (fast, this playbook's on-site build) for niche/long-tail/entity-specific queries where the site has low prior coverage; (b) training-data track (slow, off-site: authoritative reference presence, earned media, knowledge bases) specified as off-site requirements in Part 28. Entity-fame assessment (Part 16) decides per-topic weighting.
EVIDENCE: EV-10, EV-12, EV-17. CONFIDENCE: HIGH (that both tracks exist), MEDIUM (relative weights per site).

## PART 8 — SEO FINDINGS

Traditional SEO is the substrate every AI-visibility outcome depends on: generative engines retrieve from search indices (S6's GE formulation; S9's pipeline model; S17's "SEO foundation first"). The corpus's SEO-relevant evidence:

1. **Crawlability/indexability are the hard gate (VALIDATED).** S3: robots.txt presence OR≈3.4 for ChatGPT visibility; mobile-optimised OR≈5.2; faster load (418 vs 623ms) associated. S17: referring domains predicted AI discovery. S9: GEO gains presuppose retrieval. → P0 requirements for crawlable HTML, correct status codes, canonicals, robots, sitemaps, internal links (Parts 21–22).
2. **Technical hygiene correlates with AI visibility (PROVISIONAL, correlational).** S3's significant factors (mobile, robots.txt, h2/h3 structure, load time, alt-text hygiene) are classic technical-SEO factors. Mechanism likely indirect (better sites get crawled, indexed, linked, and ingested more) — implement regardless; they are Level-1 anchored.
3. **Keyword-era tactics are dead weight (VALIDATED).** Keyword stuffing fails in GEs (EV-02) and is a search-spam risk. Exact-match anchor ratios, keyword density targets: REMOVE (Part 41).
4. **Content usefulness/completeness is the common denominator (VALIDATED).** S20 (completeness drives citation), S8 (high-influence pages longer/structured/evidence-rich), S14 (intent-modelled content wins), S6 (statistics/citations/quotes). Complete, intent-matched, evidence-bearing pages serve SEO, GEO, and AIO simultaneously.
5. **Freshness is a ranking and citation factor with engine-specific weight (VALIDATED for AI engines; CURRENT BUT EVOLVING for Google).** EV-09: AI engines' cited medians 62–217 days vs Google's 130–493 days. → visible dates, substantive update policy, date-aware schema (Part 15, 19).
6. **Site architecture must minimise crawl depth and orphaning (LEVEL-1 ANCHOR + corpus-consistent).** No corpus source re-tests architecture directly; requirements in Parts 13/20/22 rest on stable official guidance and are prerequisites for the retrieval gate (EV-17, EV-18).
7. **Performance is a visibility correlate (PROVISIONAL).** S3's load-time association + Level-1 Core Web Vitals guidance → Part 23 thresholds (LCP ≤2.5s, INP ≤200ms, CLS ≤0.1 at p75, mobile).
8. **Security/trust baseline (LEVEL-1 ANCHOR).** HTTPS, no mixed content, no intrusive interstitials — prerequisites; S15/S18 add the AI-era twist: expect engines to filter manipulative patterns.

## PART 9 — GEO FINDINGS

**Strongly supported GEO practices (VALIDATED — controlled or convergent evidence):**
- G1. Include **citations to reliable sources**, **quotations**, and **statistics** in content (EV-01: +30–40% position-adjusted visibility, causal in fixed-context GE).
- G2. **Fluency/readability optimisation** (EV-04: +15–30%, causal).
- G3. **Domain/intent-specific tactic selection** — no universal rewrite rule (EV-05, EV-26, EV-27).
- G4. **Completeness, trust cues, readability, freshness** as citation-preference factors post-retrieval (EV-22, controlled matched-pair).
- G5. **Structure as citation infrastructure**: macro architecture, meso chunking, micro emphasis; definitions, numerical facts, comparisons, procedural steps (EV-19, EV-23).
- G6. **Retrieval eligibility first**: crawlable, indexable, internally linked, authority-backed pages (EV-17, EV-18, EV-20).

**Plausible GEO practices (PROVISIONAL):**
- G7. Accurate JSON-LD (FAQPage/Product/Organization) as AI-visibility correlate (EV-14).
- G8. Visible publication/update dates + substantive freshness (EV-09; AI engines cite newer content).
- G9. Off-site earned-media presence as GEO lever (EV-08, EV-21) — on-site build must *support* it (citable assets, press/insights hub) but cannot substitute for it.
- G10. Entity clarity and consistent naming to aid machine disambiguation (EV-10, EV-12 mechanism).

**Experimental GEO practices (EXPERIMENT only):**
- G11. In-answer position optimisation (EV-11 conflict; C6).
- G12. Any "conversational SEO" surface rewrite without evidence value (EV-20 warns of backfire).
- G13. llms.txt / ai.txt-style files (S3 found ai.txt non-significant; no corpus evidence of effect) — MAY, low cost, no promised effect.

**GEO anti-patterns (DO NOT):** keyword stuffing (EV-02); adversarial/hidden text sequences (EV-16); scaled near-duplicate "GEO pages" (S9's competition-erosion + spam policy); fabricated statistics/quotations/citations (violates §25 and destroys the trust signals that drive citation — EV-22).

**GEO expectation setting (from S9, VALIDATED):** effects are stochastic, engine-specific, and non-permanent; run-to-run variability is high; no technique in the reviewed literature shows stable longitudinal cross-platform causal effect on organic discoverability. Hence the mandatory measurement harness (Parts 37–38).

## PART 10 — AIO / GOOGLE AI OVERVIEW FINDINGS

AIO is analysed separately per §16. Corpus evidence touching Google AI Overviews / Gemini-grounded search specifically:

- **AIO-1 (VALIDATED):** Google AI Overview is explicitly inside the citation-selection/absorption measurement frame (S8's dataset covers "ChatGPT, Google AI Overview/Gemini, and Perplexity"). High-influence pages in that dataset are longer, structured, definition/number/comparison/step-rich → the AIO extraction spec (Part 17) is built on these features. Signal class: **AI OVERVIEW VISIBILITY SIGNAL**.
- **AIO-2 (VALIDATED):** Gemini 2.5 Flash with Search grounding overlaps Google top-10 only 11.1% mean (EV-06) and is brand-heavy on transactional queries (68.2% brand citations) while tilting earned on consideration (67%) (EV-08). → AIO source selection ≠ organic ranking; brand-owned pages have a real AIO lane on transactional/brand queries. Signal class: **BOTH, intent-dependent**.
- **AIO-3 (PROVISIONAL):** Freshness: Gemini/AI-Overview-adjacent evidence (S1: Gemini largest web-grounding lift; S16: AI engines fresher than Google organic) → dated, maintained pages. Signal class: **AI OVERVIEW VISIBILITY SIGNAL** (weighting vs organic: UNCLEAR).
- **AIO-4 (PROVISIONAL):** Passage-level extractability — concise direct answers, definitional passages, Q&A structures, lists, tables (supported by EV-19/EV-23 structure findings + EV-14 FAQPage correlation). Signal class: **AI OVERVIEW VISIBILITY SIGNAL**.
- **AIO-5 (VALIDATED, negative):** Organic #1 does not guarantee AIO citation (EV-06; overlap medians 0–14.3% across engines). Do not assume ranking → inclusion. Signal class: **ORGANIC RANKING SIGNAL ≠ AI OVERVIEW VISIBILITY SIGNAL**.
- **AIO-6 (HYPOTHESIS):** Query fan-out/passage retrieval mechanics. The corpus contains no primary evidence on Google's internal fan-out; treated as UNCLEAR. No requirements are hung on it beyond passage-level self-containment (which is independently justified).
- **AIO-7 (VALIDATED):** AIO visibility is query-, user-, location-, device-, and time-variant (S9's variability findings; S16's intent-dependent source mix). → observational validation only (Part 37).

Every AIO recommendation in Part 17 carries: AIO EVIDENCE / AIO OBJECTIVE / PAGE COMPONENT / CONTENT REQUIREMENT / TECHNICAL REQUIREMENT / IMPLEMENTATION / VALIDATION / CONFIDENCE, per §17.

## PART 11 — OTHER AI ANSWER-ENGINE FINDINGS

Per-engine evidence summary (do NOT generalise across engines — §18):

| Engine | Corpus evidence | Practical consequence |
|--------|-----------------|------------------------|
| **ChatGPT (GPT-4o/4o-mini, search-enabled)** | Lowest Google overlap (4.0% mean, 0% median, EV-06); earned-tilted on consideration (77.9%), brand-collapsed on transactional (60%); broadest brand coverage from priors (S1); cites fewer sources but higher per-citation influence (S8); FAQPage/Product schema + technical hygiene correlate with visibility (S3) | Win via: evidence-rich authoritative pages + earned media + accurate schema; priors matter → long-term public-record presence |
| **Perplexity (Sonar Pro)** | Highest AI–Google overlap (15.2%) but still low; most retrieval-dependent (S1: 35→49 brands with web); most balanced source mix; referring domains + community presence predict visibility (S17); GEO tactics validated on it directly (S6: Quotation +22%, Statistics +37%) | Most "winnable" engine via on-site work: retrieval-optimised, fresh, structured, citable pages + classic authority |
| **Gemini / Google AI surfaces** | Brand-heavy (EV-08); biggest web-grounding lift (S1); freshness-sensitive (EV-09); included in S8's absorption dataset | Brand/transactional pages can win AIO lanes; keep Google organic strong (shared infra) |
| **Claude (4.5 Sonnet)** | Most selective: 1.1% social, 85.9% earned on consideration (EV-08); freshest citations (62.3d CE median, EV-09); institutional-authority concentration in health (S23); initially returned no links without explicit search prompting (S16 note) | Hardest engine: requires earned/institutional corroboration; on-site alone rarely sufficient |
| **Bing/Copilot** | Corpus-light. Only indirect evidence (S3 notes Microsoft confirms schema use in Copilot). UNCLEAR | Follow the universal spec; validate via Part 38 |
| **Cross-engine** | Low overlap everywhere (EV-06); engines converge toward shared concentrated sources on niche topics (EV-07); measurement must be multi-engine (EV-24) | Portfolio strategy; never single-engine tuning |

## PART 12 — UNIVERSAL SEO/GEO/AIO PRINCIPLES

These twelve principles are the compressed decision rules every specification below traces back to:

- **P-1. Retrieval is the gate.** If a page cannot be crawled, indexed, rendered, and retrieved, no content tactic matters. (EV-17, EV-18, S6 pipeline)
- **P-2. Citation is the bottleneck after retrieval.** Once retrieved, completeness, evidence, structure, trust, and freshness decide citation. (EV-19, EV-22)
- **P-3. Organic rank and AI citation are separate outcomes.** Engineer and measure them separately. (EV-06)
- **P-4. Evidence density wins.** Statistics, quotations, citations, definitions, comparisons, steps — real ones, never fabricated. (EV-01, EV-19)
- **P-5. Clarity is a ranking input.** Fluency and readability lifts are causal in GE settings. (EV-04)
- **P-6. Structure is infrastructure.** Semantic HTML, heading hierarchy, chunked sections, tables, lists — for humans, crawlers, and extractors alike. (EV-14, EV-23)
- **P-7. Freshness is machine-readable maintenance.** Visible dates + `datePublished`/`dateModified` + substantive updates. (EV-09)
- **P-8. Engines differ; build a portfolio.** No single-engine tuning; measure across engines. (EV-06, EV-13, EV-24)
- **P-9. On-site cannot do it all.** Earned media, reference presence, and community presence are GEO inputs; the site's job is to be citable and to host citable assets. (EV-08, EV-12, EV-17, EV-21)
- **P-10. Entity fame decides the lever.** Niche entities win through retrieval; famous entities defend through the public record. Assess per topic. (EV-10)
- **P-11. Never manipulate.** No hidden text, adversarial sequences, fabricated evidence, schema spam, or scaled near-duplicates. Engines are incentivised and increasingly able to defend. (EV-15, EV-16, EV-02)
- **P-12. Measure or it didn't happen.** Fixed prompt panels, multi-engine sampling, observational AIO/GEO validation, and regression QA are build deliverables. (EV-18, EV-24)

## PART 13 — SITE ARCHITECTURE SPECIFICATION

Evidence basis: P-1 (retrieval gate), EV-17 (authority/crawl foundations predict AI discovery), EV-14 (robots.txt/mobile/structure correlations), LEVEL-1 ANCHOR (stable official guidance). Requirement fields per §63: ID | classification | MUST/SHOULD/MAY/EXPERIMENT/DO-NOT | priority | evidence.

**REQ-ARCH-01 — Topic-coherent information architecture.** GLOBAL · MUST · P0. Organise the site into a shallow hierarchy of topic hubs: `Home → Hub (topic/service/category) → Spoke (specific intent page)`. Every indexable page MUST belong to exactly one primary hub and MUST be reachable via crawlable HTML links from its hub. Decision logic for the implementing AI: derive hubs from the site's primary query/entity clusters (§19 search-intent analysis), not from org-chart or CMS defaults. Evidence: EV-17, EV-18, LEVEL-1 ANCHOR. Validation: crawl (Screaming Frog or equivalent) — 100% of indexable pages reachable ≤3 clicks from home; zero orphan pages.

**REQ-ARCH-02 — Crawl depth ≤3 for priority pages.** GLOBAL · MUST · P1. Priority pages (money pages, hub pages, citable assets) MUST sit at crawl depth ≤3 from the homepage. Evidence: P-1 + LEVEL-1 ANCHOR. Validation: crawler depth report; PASS = no priority page >3.

**REQ-ARCH-03 — URL architecture.** GLOBAL · MUST · P1. URLs MUST be lowercase, hyphen-separated, human-readable, stable, and free of session/tracking parameters. One canonical form per document: enforce a single host (www vs non-www), single protocol (HTTPS), single trailing-slash policy; redirect all variants 301 to the canonical form. Keep paths short and descriptive of the page's primary entity/intent (`/hub/spoke/`). Evidence: LEVEL-1 ANCHOR; S4's RAG-paper note that stable URLs/titles act as "retrieval handles" (L4, supportive not load-bearing). Validation: crawl + HTTP checks — every variant 301s in ≤1 hop; no 200 duplicates; no redirect chains >1.

**REQ-ARCH-04 — Breadcrumbs on every non-home page.** TEMPLATE · MUST · P2. Visible breadcrumb trail reflecting the IA hierarchy, marked up with BreadcrumbList JSON-LD (Part 19). Evidence: LEVEL-1 ANCHOR; supports entity/relationship clarity (EV-23 structure). Validation: rendered-DOM check + Rich Results Test.

**REQ-ARCH-05 — Pagination & faceted navigation control.** CONDITIONAL (sites with listings/filters) · MUST · P1. Paginated series MUST be crawlable via plain `<a href>` links; faceted/filter URLs MUST be canonicalised or noindexed unless a facet combination has independent search demand (decision logic: check query data; if no demand → `noindex,follow` + canonical to the unfiltered page; if demand → create a static, curated landing URL). Avoid crawl traps: no infinite calendar/facet spaces. Evidence: LEVEL-1 ANCHOR; P-1 (crawl budget protects retrieval). Validation: crawl simulation; log-file spot check; PASS = no infinite URL space, no duplicate-content clusters.

**REQ-ARCH-06 — Localisation architecture (only when multi-region/language).** CONDITIONAL · MUST · P1. One language/region per URL; `hreflang` reciprocal annotations; x-default present; canonicals self-referential per locale. Evidence: LEVEL-1 ANCHOR. Validation: hreflang audit (reciprocity PASS).

**REQ-ARCH-07 — No doorway/clone pages.** GLOBAL · DO-NOT · P0. No near-duplicate location/keyword variant pages (§45, §54). Where similar pages are justified, each MUST carry ≥50% unique, locally-relevant, evidence-bearing content (rule of thumb; the hard rule is: each page must independently satisfy a distinct intent). Evidence: §55 anti-spam + EV-18 (scaled tactics erode). Validation: duplicate-content crawl (simhash/clustering) — no cluster of indexable pages with near-identical body content.

## PART 14 — PAGE ARCHITECTURE SPECIFICATION

Evidence basis: EV-19/EV-23 (structure→citation), EV-01/EV-22 (evidence blocks), EV-26 (intent-first), EV-14 (h2/h3), §22/§27 of the commissioning prompt.

**REQ-PAGE-01 — Intent-first page brief.** PAGE-SPECIFIC · MUST · P0. Before any page is built or edited, produce its intent brief: PRIMARY QUERY/TOPIC · PRIMARY INTENT (informational/commercial/transactional/navigational/local/comparison/definition/troubleshooting) · SECONDARY INTENTS · USER'S CORE PROBLEM · QUESTIONS THE USER EXPECTS ANSWERED · EXPECTED FORMAT & DEPTH · REQUIRED ENTITIES · SUPPORTING SUBTOPICS · CONVERSION INTENT · PAGE TYPE. The page's architecture MUST follow the brief. Evidence: EV-26 (intent-modelled optimisation beats single-aspect), EV-22. Validation: brief exists and page sections map 1:1 to expected questions.

**REQ-PAGE-02 — Answer-first information hierarchy.** TEMPLATE · MUST · P1. Each page MUST present its primary answer/offer early: H1 (primary topic) → concise introductory/answer block (the "answer capsule": 40–80 words that directly resolve the primary intent, self-contained, entity-explicit) → supporting sections in descending importance. Do not bury the primary answer below hero imagery, sliders, or marketing preamble. Evidence: EV-19 (absorption-ready pages), EV-23 (macro structure), EV-22 (completeness). Mobile: answer capsule visible without interaction (no accordions/tabs gating it). Validation: rendered DOM order check; PASS = answer capsule is the first substantive text under the H1 in both source and rendered HTML.

**REQ-PAGE-03 — Semantic sectioning.** TEMPLATE · MUST · P1. One `<h1>` per page stating the primary topic; `<h2>` for major sections; `<h3>` for subsections; never skip levels for styling; sections wrapped in `<section>`/`<article>` with headings, inside `<main>`; navigation in `<nav>`; supplementary content in `<aside>`; page header/footer in `<header>`/`<footer>`. Evidence: EV-14 (h2 OR≈3.3, h3 OR≈2.3 for ChatGPT visibility), EV-23, WCAG (LEVEL-1). Validation: heading-outline audit (no skips, single h1); landmark audit.

**REQ-PAGE-04 — Evidence blocks.** TEMPLATE · MUST (for informational/commercial pages) · P1. Every substantive claim section MUST carry at least one of: a specific statistic with named source, a quotation with attribution, a comparison, a concrete example, or first-party data — marked up as normal visible content (never hidden). Evidence: EV-01 (citations/quotes/statistics causal), EV-22 (trust/completeness), EV-19 (numerical facts/comparisons in high-influence pages). Validation: content audit per template; PASS = each `<h2>` section contains ≥1 evidence element or is explicitly presentational.

**REQ-PAGE-05 — Comparison tables where intent is comparative.** CONDITIONAL · SHOULD · P2. For comparison/"best/X vs Y" intents, include a real `<table>` (not divs) with `<th>` headers, comparing the relevant entities on decision-relevant attributes. Evidence: EV-19 (comparisons in high-influence pages), EV-23. Mobile: tables MUST NOT cause document-level horizontal overflow — wrap in a horizontally scrollable container (`overflow-x:auto` on a wrapper, `role="region" aria-label`) or reflow to cards. Validation: Part 36 table tests.

**REQ-PAGE-06 — FAQ sections only when justified.** CONDITIONAL · MAY · P2. Include an FAQ section only when real users demonstrably ask those questions (query data, support logs, sales calls). Each Q&A MUST be visible on the page and may be marked up FAQPage (Part 19). Never fabricate FAQs for schema. Evidence: EV-14 (FAQPage correlation) + §25 anti-fabrication. Validation: each FAQ traceable to a real query source.

**REQ-PAGE-07 — CTA placement without content obstruction.** TEMPLATE · MUST · P2. CTAs present above the fold and at logical decision points, but MUST NOT obscure primary content, MUST NOT be intrusive interstitials, and MUST NOT push the answer capsule down on mobile. Evidence: LEVEL-1 (page experience), §84 human-first. Validation: device QA matrix (Part 36).

**REQ-PAGE-08 — Related-content module.** TEMPLATE · SHOULD · P2. Each spoke page SHOULD end with a "related" module linking 3–6 contextually related pages (same hub or logical next-step intents) with descriptive anchors. Evidence: P-1 (internal discovery), EV-23. Validation: crawl — module links present and crawlable.

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

**REQ-CONT-09 — Claim-level provenance for YMYL/material claims.** CONDITIONAL · MUST · P1. Medical, legal, financial, scientific, technical, or otherwise material claims MUST cite authoritative sources (primary where practical), with visible attribution and dates where recency matters. Evidence: EV-22 (trust cues drive citation), EV-25 (selective engines lean on institutional authority), §52. Validation: provenance audit; PASS = 100% material claims sourced.

## PART 16 — ENTITY / SEMANTIC SPECIFICATION

Evidence basis: EV-10 (pre-training vs retrieval), EV-12 (invisibility gap), EV-17 (recognition vs discovery), §28.

**REQ-ENT-01 — Entity inventory and disambiguation.** GLOBAL · MUST · P1. Maintain an entity inventory: the organisation, its people, services/products, locations, and core topics — each with a canonical name, aliases, and a one-line definition. Use canonical names consistently across pages, schema, and metadata. Where a name is ambiguous (common word, acronym), disambiguate on first use per page. Evidence: EV-10 (models rely on priors for known entities; retrieval for niche), EV-12. Validation: naming-consistency lint across templates.

**REQ-ENT-02 — Entity home pages.** GLOBAL · MUST · P1. The organisation MUST have: an About page (who, what, where, leadership, history, contact), a Contact page (full NAP where applicable), and per-service/product entity pages. These are the machine-readable "entity ground truth" of the site. Evidence: EV-12 (content gaps → invisibility), §32. Validation: pages exist, are linked from main nav/footer, and are crawlable.

**REQ-ENT-03 — Explicit relationships.** TEMPLATE · SHOULD · P2. Express relationships explicitly in copy and schema: "X is a service of [Organisation]", "[Person] is [Role] at [Organisation]", "[Service] is available in [Place]". Use internal links and schema (`sameAs`, `about`, `mentions`, `provider`, `areaServed`) to make the graph explicit. NEVER manufacture entities or relationships (§28). Evidence: EV-10 mechanism + EV-23. Validation: schema graph check + content review.

**REQ-ENT-04 — Entity-fame decision logic (per §60).** PAGE-SPECIFIC · MUST · P2. For each priority topic, classify the site's entity as LOW-PRIOR (niche/unknown) or HIGH-PRIOR (well-known) using: branded search volume, knowledge-panel presence, reference-work presence. LOW-PRIOR → weight effort toward retrieval-track optimisation (Parts 17–18, 21–23) and off-site citation building. HIGH-PRIOR → weight toward accuracy/consistency of the public record and freshness. Evidence: EV-10, EV-17. Validation: classification recorded in the page brief.

**REQ-ENT-05 — Off-site entity presence (site-supported).** GLOBAL · SHOULD · P2 (off-site, ongoing). The site MUST support off-site entity building by publishing citable assets (original research, data, definitive guides, press-ready facts) and keeping organisation facts consistent and machine-readable. Where legitimate, maintain accurate Wikipedia/Wikidata/reference entries (only if notability criteria are genuinely met — never fabricate). Evidence: EV-12 (58% of mentions from training data; invisible brands lacked "ownable, high-authority explanations"), EV-08/EV-21 (earned media), EV-17 (referring domains, community presence). Validation: quarterly entity audit (Part 38).

## PART 17 — AIO CONTENT / EXTRACTION SPECIFICATION

Dedicated AIO spec per §17. Every entry: AIO EVIDENCE · AIO OBJECTIVE · PAGE COMPONENT · CONTENT REQUIREMENT · TECHNICAL REQUIREMENT · IMPLEMENTATION · VALIDATION · CONFIDENCE.

**REQ-AIO-01 — Answer capsules on intent pages.**
AIO EVIDENCE: EV-19 (high-influence pages in a dataset explicitly including Google AI Overview are structured, definition/fact/comparison/step-rich), EV-23, EV-04. AIO OBJECTIVE: make the primary answer extractable as a self-contained passage. PAGE COMPONENT: first content block under H1. CONTENT REQUIREMENT: 40–80 words, direct answer, entity-explicit, no pronouns without antecedents, no click-dependent context. TECHNICAL REQUIREMENT: plain server-rendered HTML paragraph(s) in source HTML (not JS-injected, not in an accordion). IMPLEMENTATION: add an "answer capsule" component to the page template directly after the H1. VALIDATION: source-HTML grep (capsule present pre-JS); extraction read-aloud test; observational AIO check (Part 37). CONFIDENCE: MEDIUM-HIGH (PROVISIONAL for AIO specifically; VALIDATED for GEO generally).

**REQ-AIO-02 — Question-mapped heading structure.**
AIO EVIDENCE: EV-23 (macro structure→citation), EV-14 (h2/h3 OR 3.3/2.3), EV-26 (intent-modelled content). AIO OBJECTIVE: let passage-level retrieval map headings to sub-queries. PAGE COMPONENT: all section headings. CONTENT REQUIREMENT: headings phrase the question/topic they answer ("How much does X cost?", "X vs Y: which is better for Z?") where natural; no clever-but-empty headings. TECHNICAL: semantic h2/h3 hierarchy (REQ-PAGE-03). IMPLEMENTATION: rewrite headings per the intent brief. VALIDATION: heading audit; each h2 maps to a question in the brief. CONFIDENCE: MEDIUM-HIGH.

**REQ-AIO-03 — Structured evidence formats.**
AIO EVIDENCE: EV-19 (definitions, numerical facts, comparisons, procedural steps), EV-01 (statistics/citations/quotes causal in GE). AIO OBJECTIVE: provide liftable units of evidence. PAGE COMPONENT: body sections. CONTENT REQUIREMENT: per section, at least one of: definition sentence, statistic with source+year, comparison (table or explicit "X vs Y" prose), ordered steps, attributed quotation. TECHNICAL: real `<table>`, `<ol>`, `<blockquote>`/`<q>` elements — not images of text. IMPLEMENTATION: content build per REQ-CONT-02/03. VALIDATION: per-section evidence audit. CONFIDENCE: HIGH (GEO), MEDIUM-HIGH (AIO).

**REQ-AIO-04 — FAQ block with FAQPage schema (when justified).**
AIO EVIDENCE: EV-14 (FAQPage OR≈13.3 for ChatGPT visibility — correlational), §17. AIO OBJECTIVE: Q&A-formatted content directly consumable by answer engines. PAGE COMPONENT: FAQ section + JSON-LD. CONTENT REQUIREMENT: real user questions, concise complete answers, visible on page. TECHNICAL: FAQPage JSON-LD matching visible content exactly. IMPLEMENTATION: per REQ-PAGE-06 + Part 19. VALIDATION: Rich Results Test; schema-visible-content diff. CONFIDENCE: MEDIUM (correlational).

**REQ-AIO-05 — Date signalling.**
AIO EVIDENCE: EV-09 (AI engines cite fresher content; Google organic oldest medians). AIO OBJECTIVE: make freshness machine-readable. PAGE COMPONENT: byline/date area + schema + sitemap. CONTENT: visible "Published/Last updated" dates on time-sensitive pages. TECHNICAL: `datePublished`/`dateModified` in Article/WebPage schema; sitemap `<lastmod>` consistent. IMPLEMENTATION: template + CMS fields; update only on substantive change. VALIDATION: three-way date consistency check. CONFIDENCE: MEDIUM-HIGH.

**REQ-AIO-06 — Author/provenance blocks.**
AIO EVIDENCE: EV-22 (trust cues), EV-25 (authority concentration on selective engines), §32/§52. AIO OBJECTIVE: give source-selection systems verifiable provenance. PAGE COMPONENT: author byline block + About linkage. CONTENT: real author name, role, genuine credentials, link to author/About page; organisation identity consistent with schema. TECHNICAL: `author` (Person) in Article schema with `sameAs` where real profiles exist. NEVER fabricate authors/expertise. IMPLEMENTATION: template component. VALIDATION: provenance audit. CONFIDENCE: MEDIUM.

**REQ-AIO-07 — Crawl/render parity for AIO content.**
AIO EVIDENCE: P-1; S16's note that engines retrieve via search infrastructure. AIO OBJECTIVE: guarantee the answer content exists in what crawlers/renderers see. PAGE COMPONENT: all primary content. TECHNICAL: primary content in initial HTML (SSR/SSG or static); no interaction-gating; no `display:none` on indexable primary content. IMPLEMENTATION: per Parts 21–22. VALIDATION: fetch-and-render diff (source vs rendered), Google Search Console URL Inspection screenshot. CONFIDENCE: HIGH.

**AIO signal classification summary (per §16):** Organic-ranking-only: backlinks/authority, crawl hygiene. AIO-visibility-weighted: answer capsules, passage self-containment, structured evidence formats, freshness signalling, FAQ structure. Both: semantic structure, content completeness, page experience, entity clarity. Unclear (no requirement hung on it): query fan-out internals, exact AIO source-rank thresholds.

## PART 18 — GEO / GENERATIVE RETRIEVAL SPECIFICATION

**REQ-GEO-01 — Retrieval-first build order.** GLOBAL · MUST · P0. Implement Parts 21–23 (crawl, index, render, performance) before content-side GEO. Evidence: EV-17, EV-18, EV-20, P-1. Validation: P0 checklist passes before P1 GEO tasks begin.

**REQ-GEO-02 — Citable-asset program.** GLOBAL · SHOULD · P1 (content program). Publish assets designed to be cited by engines and earned media: original research/data studies, definitive reference guides, statistics pages, glossaries/definitions, tools/calculators. Each asset: crawlable, dated, authored, evidence-dense, and internally linked from hubs. Evidence: EV-08/EV-21 (earned media is the AI engines' preferred source class), EV-12 (content gaps → invisibility), EV-19. Validation: asset exists per hub; Part 38 monitors citations to it.

**REQ-GEO-03 — Passage self-containment.** TEMPLATE · MUST · P1. Every section MUST make sense when extracted alone: entities named (not "it/this company"), numbers with units and sources, no dependence on preceding sections. Evidence: EV-19 (absorption), EV-23 (meso chunking), §51. Validation: extraction read-aloud test per section.

**REQ-GEO-04 — Multi-engine measurement harness.** GLOBAL · MUST · P1 (ops deliverable). Ship a fixed prompt panel (see Part 38): 30–100 buyer/category questions covering the site's intents; run monthly across ChatGPT, Perplexity, Gemini, Google AI Overviews/AI Mode, Copilot, Claude; log mentions, citations, cited URLs, competitors. Evidence: EV-24, EV-18 (variability → repeated measures). Validation: harness exists and first baseline recorded.

**REQ-GEO-05 — llms.txt (optional).** GLOBAL · MAY · P3. A concise `/llms.txt` pointing at key pages MAY be shipped; corpus evidence for effect is absent (S3's ai.txt: non-significant). Cost is trivial; promise nothing. Evidence: EV-14 (null result), S9 (no reviewed evidence). Validation: file serves 200 with valid Markdown. Classification: EXPERIMENTAL-MAY.

**REQ-GEO-06 — No adversarial optimisation.** GLOBAL · DO-NOT · P0. No hidden text, no prompt-injection strings, no STS-style token patterns, no cloaked LLM-only content, no fabricated quotations/statistics. Evidence: EV-15, EV-16, EV-02. Validation: code review + content diff vs rendered page.

## PART 19 — STRUCTURED DATA SPECIFICATION

Evidence basis: EV-14 (FAQPage OR≈13.3 / Product OR≈4.1 correlational), C2 decision (implement for Level-1 search eligibility + machine comprehension; AI uplift provisional), §29. All schema: JSON-LD, server-rendered, exactly consistent with visible content. NEVER misleading schema; NEVER schema for its own sake.

**REQ-SCHEMA-01 — Organization (site-wide).** GLOBAL · MUST · P1. One `Organization` (or `LocalBusiness` where a physical/local business) node on the homepage (or site-wide via `@id`), with: `name`, `url`, `logo`, `contactPoint` (real), `sameAs` (real official profiles only), `address` where factual. Stable `@id` (e.g., `https://example.com/#org`) referenced by all other nodes. Validation: Rich Results Test + Schema.org validator; PASS = valid, no fabricated fields.

**REQ-SCHEMA-02 — WebSite + WebPage.** GLOBAL · MUST · P2. `WebSite` (name, url, publisher→`#org`) on the homepage; `WebPage` (or `CollectionPage` for hubs) per page with `url` = canonical, `name` = title, `isPartOf` → WebSite, `breadcrumb` → BreadcrumbList, `datePublished`/`dateModified` where meaningful, `about`/`mentions` for primary entities. Validation: per-template schema audit.

**REQ-SCHEMA-03 — BreadcrumbList.** TEMPLATE · MUST · P2. On every non-home page, matching visible breadcrumbs (REQ-ARCH-04), `itemListElement` URLs = canonical 200 URLs. Validation: Rich Results Test.

**REQ-SCHEMA-04 — Article/BlogPosting.** CONDITIONAL (editorial content) · MUST · P1. For articles/guides: `headline`, `author` (Person, real), `datePublished`, `dateModified`, `image`, `publisher` → `#org`. Validation: RRT + date-consistency (REQ-AIO-05).

**REQ-SCHEMA-05 — Service / Product.** CONDITIONAL · MUST · P1. Service pages → `Service` (`provider` → `#org`, `areaServed`, `serviceType`, real `offers` if prices shown). Product pages → `Product` with real `offers` (price, currency, availability) and `aggregateRating`/`review` ONLY for genuine, on-page-visible reviews. Evidence: EV-14 (Product OR≈4.1). Validation: RRT; price/availability matches visible page.

**REQ-SCHEMA-06 — FAQPage.** CONDITIONAL · SHOULD · P2. Only on pages with a genuine visible FAQ section (REQ-PAGE-06); Q&A text must match visible content verbatim. Evidence: EV-14 (strongest correlate; correlational). Validation: RRT + verbatim match check.

**REQ-SCHEMA-07 — Person (authors/leadership).** CONDITIONAL · SHOULD · P2. Real people only: `name`, `jobTitle`, `worksFor` → `#org`, `sameAs` to real profiles. NEVER invented personas (§25). Validation: provenance audit.

**REQ-SCHEMA-08 — VideoObject/ImageObject/Event/Review/ItemList.** CONDITIONAL · MAY · P3. Only when the page genuinely contains that content and visible-content consistency holds. Validation: RRT per template.

**REQ-SCHEMA-09 — Graph integrity.** GLOBAL · MUST · P1. All nodes interlinked via stable `@id`s; all URLs canonical; no orphaned schema islands; no markup of content absent from the page. Validation: schema-graph crawl (e.g., Screaming Frog custom extraction + validator) — PASS = 0 errors, 0 invisible-content markup.

## PART 20 — INTERNAL LINKING SPECIFICATION

Evidence basis: P-1, EV-23, EV-17; §30. (Note: S3 found internal-link *count* non-significant for ChatGPT visibility — the requirement is justified by crawl/discovery Level-1 grounds, not by a claimed AI effect.)

**REQ-IL-01 — Crawlable HTML anchors.** GLOBAL · MUST · P0. All internal navigation via `<a href>` (not JS-only click handlers). Links present in initial HTML. Validation: crawl with JS disabled — full site reachable.

**REQ-IL-02 — Hub↔spoke linking.** TEMPLATE · MUST · P1. Every spoke links up to its hub (breadcrumb + in-copy where natural); every hub links down to all its spokes. Evidence: P-1. Validation: crawl — bidirectional coverage 100%.

**REQ-IL-03 — Contextual in-copy links.** TEMPLATE · SHOULD · P1. Within explanatory copy, link to logically related pages with descriptive anchors (entity/topic names, not "click here"). No repetitive exact-match anchor stuffing; vary naturally. Evidence: §30 + P-1. Validation: anchor-text audit — no generic anchors on priority links; no single anchor text >60% of links to a given page (naturalness heuristic, not a ranking rule).

**REQ-IL-04 — Orphan prevention.** GLOBAL · MUST · P1. Every indexable page receives ≥1 internal link from a crawled page. Validation: crawl vs sitemap diff — zero orphans.

**REQ-IL-05 — Footer/nav link discipline.** TEMPLATE · SHOULD · P2. Global nav exposes hubs; footer exposes entity pages (About, Contact) and key hubs. No sitewide keyword-stuffed footer link blocks. Validation: template review.

## PART 21 — TECHNICAL SEO SPECIFICATION

Evidence basis: LEVEL-1 ANCHOR throughout + EV-14 (robots.txt OR≈3.4, load time), P-1. §35 coverage.

**REQ-TECH-01 — Status codes & redirects.** GLOBAL · MUST · P0. Canonical URLs return 200; moved URLs 301 (single hop); removed URLs 404/410; no soft 404s (empty pages returning 200); no redirect chains/loops; no 302 for permanent moves. Validation: full crawl + HTTP audit; PASS = 0 chains, 0 soft-404, 0 5xx.

**REQ-TECH-02 — Canonicals.** GLOBAL · MUST · P0. Every indexable page: self-referential `<link rel="canonical">` (absolute URL, correct host/protocol/slash policy). Duplicates/variants canonicalise to the canonical. Canonicals MUST agree with sitemap URLs, internal links, hreflang, and schema URLs (§82 contradiction audit). Validation: cross-check crawl (canonical vs sitemap vs in-links) — 100% agreement.

**REQ-TECH-03 — Robots meta / X-Robots-Tag.** GLOBAL · MUST · P0. Indexable pages: no `noindex`. Non-indexable (thank-you, internal search, staging): `noindex,follow`. Never `noindex` a page you want cited by AI engines (AI retrieval rides search indices — P-1). Validation: crawl meta audit.

**REQ-TECH-04 — JavaScript/rendering.** CONDITIONAL · MUST · P0. Primary content, internal links, metadata, and schema MUST be present in the initial HTML response (static/SSR) or reliably rendered without interaction. No interaction-gated primary content; no JS-injected titles/canonicals as the only copy. Decision logic: if the stack is an SPA, implement SSR/SSG for content routes; do not adopt SSR "because SEO" where content is already server-rendered (§38). Validation: source-vs-rendered DOM diff (primary content identical); GSC URL Inspection render check.

**REQ-TECH-05 — URL parameter handling.** CONDITIONAL · MUST · P1. Parameters for tracking/sorting MUST NOT create indexable duplicates (canonical to clean URL; noindex where appropriate). Validation: parameter crawl test.

**REQ-TECH-06 — HTTPS & security.** GLOBAL · MUST · P0. HTTPS everywhere; valid certificate; no mixed content; HSTS where possible; no intrusive/deceptive scripts. Evidence: LEVEL-1 + EV-15/EV-16 (trust posture). Validation: mixed-content scan; SSL test.

**REQ-TECH-07 — Metadata uniqueness.** TEMPLATE · MUST · P1. Unique `<title>` and meta description per indexable page, intent-aligned (Part 24 rules). No boilerplate duplication at scale. Validation: crawl duplicate-metadata report = 0.

**REQ-TECH-08 — Image technical baseline.** TEMPLATE · MUST · P1. All content images: intrinsic dimensions set (width/height or aspect-ratio) to prevent CLS; descriptive `alt` (decorative images: empty alt); modern formats (AVIF/WebP with fallback); responsive `srcset`/`sizes`; lazy-load below-the-fold only — NEVER lazy-load the LCP/hero image (§82 contradiction rule). Evidence: EV-14 (alt-text hygiene correlate) + LEVEL-1. Validation: Lighthouse + CLS audit.

**REQ-TECH-09 — Video (when present).** CONDITIONAL · SHOULD · P2. Videos: transcript + captions (accessibility + machine comprehension), VideoObject schema, poster thumbnail with dimensions, facade/lazy embed (no autoplaying third-party iframe in the initial load). Evidence: §34 + LEVEL-1. Validation: a11y audit + performance test.

## PART 22 — CRAWLING / INDEXING SPECIFICATION

**REQ-CRAWL-01 — robots.txt.** GLOBAL · MUST · P0. Serve `/robots.txt` (200): allow all crawling of content and assets; disallow only true crawl traps (internal search results, admin, infinite spaces); NEVER block CSS/JS/assets needed for rendering; declare `Sitemap:` pointing at the sitemap index. Evidence: EV-14 (robots.txt OR≈3.4 — correlational but Level-1 sensible). Validation: robots tester; render check with blocked-resource report = 0.

**REQ-CRAWL-02 — XML sitemap(s).** GLOBAL · MUST · P1. Sitemap index + per-section sitemaps; ONLY canonical, indexable, 200 URLs; `<lastmod>` reflecting real content change (REQ-CONT-06); split at 50k URLs/50MB; image extensions where images matter. (C4: keep despite S3's confounded negative coefficient.) Validation: sitemap parse — 0 non-canonical/non-200/noindex URLs.

**REQ-CRAWL-03 — Index coverage monitoring.** GLOBAL · MUST · P1 (ops). GSC + Bing Webmaster Tools verified; index coverage reviewed post-launch and monthly; unexpected exclusions investigated. Evidence: P-1. Validation: accounts verified; baseline exported.

**REQ-CRAWL-04 — AI-crawler policy decision.** GLOBAL · DECISION REQUIRED · P1. Decide explicitly which AI crawlers (e.g., GPTBot, ClaudeBot, PerplexityBot, Google-Extended) are allowed in robots.txt. OPTIONS: A) Allow all (maximise training+retrieval presence — EV-12's 58% training-data share). B) Allow retrieval/search bots, block training bots (rights protection, slower training-data presence). C) Block all (maximum control, AI invisibility risk). SELECTED APPROACH: A by default for sites whose goal is visibility (this playbook's premise); document the decision; revisit quarterly. RATIONALE: blocking retrieval crawlers directly forfeits the citation channel (P-1). CONFIDENCE: HIGH that the decision must be explicit; MEDIUM on per-bot long-term consequences. IMPLEMENTATION: robots.txt groups per bot; log review. Validation: robots.txt audit + server-log bot verification.

**REQ-CRAWL-05 — IndexNow / ping (optional).** GLOBAL · MAY · P3. MAY support IndexNow for Bing-ecosystem freshness. Low cost; Bing-only. Validation: key file served; submission logs.

## PART 23 — PERFORMANCE / CORE WEB VITALS SPECIFICATION

Evidence basis: EV-14 (load-time association 418 vs 623ms), LEVEL-1 ANCHOR (web.dev thresholds). Targets are current authoritative thresholds, not invented scores (§39).

**REQ-PERF-01 — Core Web Vitals targets (p75, mobile, field data).** GLOBAL · MUST · P1. LCP ≤ 2.5s · INP ≤ 200ms · CLS ≤ 0.1 — measured at the 75th percentile on mobile field data (CrUX/RUM); lab (Lighthouse) used for debugging, not as the pass gate. Validation: PageSpeed Insights field data + RUM; PASS = all three "Good" for origin and priority templates.

**REQ-PERF-02 — LCP discipline.** TEMPLATE · MUST · P1. Identify the LCP element per template (usually hero image or H1 block): if image — preload it, `fetchpriority="high"`, never lazy-load it, size it correctly (responsive srcset), compress (AVIF/WebP). TTFB ≤ 800ms target via caching/CDN. Validation: Lighthouse LCP element audit + WebPageTest filmstrip.

**REQ-PERF-03 — Render-blocking & JS budget.** GLOBAL · SHOULD · P1. Critical CSS inlined or non-blocking; defer non-critical JS; code-split by route; third-party scripts audited (each must justify its cost; load async/defer; facade embeds). Target: ≤200KB compressed JS for content pages on first load (budget heuristic — adjust to stack, measure, don't worship). Validation: Lighthouse treemap; WebPageTest waterfall.

**REQ-PERF-04 — Layout stability.** TEMPLATE · MUST · P1. Reserve space for images/ads/embeds (dimensions or aspect-ratio); no content injection above existing content after load (banners, cookie bars must not shift layout — use reserved space); font-display: swap with size-adjusted fallbacks. Validation: CLS audit per template on mobile + desktop.

**REQ-PERF-05 — Caching/compression/CDN.** GLOBAL · SHOULD · P1. Static assets: long-cache immutable + fingerprinting; HTML: sensible short cache + revalidation; Brotli/gzip; CDN for static assets where the audience is geographically distributed. Validation: response-header audit; repeat-view test.

**REQ-PERF-06 — Fonts.** GLOBAL · SHOULD · P2. Self-host fonts; subset; `font-display: swap`; preload the primary font files; limit families/weights. Validation: waterfall audit.

## PART 24 — MOBILE SPECIFICATION

Evidence basis: EV-14 (mobile-optimised OR≈5.2 — the strongest non-schema correlate in S3), §40, LEVEL-1. Mobile is the primary test surface (Google indexes mobile-first; AI retrieval rides that index).

**REQ-MOB-01 — Viewport & fluid layout.** GLOBAL · MUST · P0. `<meta name="viewport" content="width=device-width, initial-scale=1">`; fluid layouts (no fixed pixel widths on containers); no document-level horizontal overflow at 320–480px widths. Validation: overflow test at 320/360/390/430px — PASS = `document.documentElement.scrollWidth <= window.innerWidth` on every template.

**REQ-MOB-02 — Content parity.** GLOBAL · MUST · P0. Mobile MUST contain the same primary content, headings, internal links, schema, and metadata as desktop. No mobile-only content hiding of indexable content (§82). Validation: DOM parity diff mobile vs desktop.

**REQ-MOB-03 — Touch targets & spacing.** GLOBAL · MUST · P1. Interactive elements ≥24×24 CSS px minimum (target 44–48px) with adequate separation; no hover-dependent primary information. Validation: a11y/mobile audit (Lighthouse tap targets).

**REQ-MOB-04 — Mobile navigation.** TEMPLATE · MUST · P1. Navigation collapses to an accessible disclosure pattern (button with `aria-expanded`, keyboard operable, focus managed); nav MUST NOT obscure content when open; sticky headers ≤ ~25% viewport height. Validation: device QA matrix.

**REQ-MOB-05 — Tables & wide media on mobile.** TEMPLATE · MUST · P1. Wide tables: wrapped in `overflow-x:auto` container with `role="region"` and accessible name, or reflowed; images/video fluid (`max-width:100%`); no fixed-width embeds. Validation: overflow tests per template.

**REQ-MOB-06 — Forms & CTAs on mobile.** TEMPLATE · MUST · P1. Inputs: correct `type`/`inputmode`/`autocomplete`; labels visible; errors inline; primary CTA reachable without excessive scrolling and never hidden behind sticky elements. Validation: manual form walkthrough on a real device or emulator.

**REQ-MOB-07 — No intrusive interstitials.** GLOBAL · MUST · P1. No full-screen interstitials blocking content on entry; consent banners compact and non-shifting. Evidence: LEVEL-1 page-experience. Validation: visual QA.

## PART 25 — TABLET SPECIFICATION

Per §41: tablet gets explicit treatment; do not assume tablet = desktop.

**REQ-TAB-01 — Portrait tablet (≈768px) state.** TEMPLATE · MUST · P2. Define explicitly per template: navigation state (hamburger vs full — decide by item count; if >5 top-level items, use the mobile disclosure pattern), grid columns (typically 2-up where desktop is 3–4-up), text measure (≤75 characters), image scaling, CTA visibility. Validation: QA at 768×1024 — no overflow, no cramped 4-col grids, nav operable by touch.

**REQ-TAB-02 — Landscape tablet (≈1024px) state.** TEMPLATE · MUST · P2. Verify desktop layout degrades gracefully: no half-empty mega-grids; sidebars stack or remain usable; tables fit or scroll-accessibly. Validation: QA at 1024×768 and 1180×820.

**REQ-TAB-03 — Touch parity.** GLOBAL · MUST · P2. All tablet interactions touch-operable (same rules as REQ-MOB-03); hover-only disclosures must have click/tap equivalents. Validation: touch walkthrough.

**REQ-TAB-04 — Breakpoint discipline.** GLOBAL · SHOULD · P2. Use the design system's existing breakpoints; add a tablet-specific rule only where a measured layout defect exists (§43: no arbitrary breakpoints). Validation: visual regression across 320/768/1024/1440px.

## PART 26 — DESKTOP SPECIFICATION

**REQ-DESK-01 — Reading measure.** TEMPLATE · MUST · P2. Body text column capped at ~65–75 characters (typically 600–760px depending on type scale); full-width text on large screens is a readability defect. Evidence: §42 + WCAG-adjacent readability practice. Validation: measure check at 1440px and 1920px.

**REQ-DESK-02 — Grid & whitespace.** TEMPLATE · SHOULD · P2. Multi-column layouts for comparison/card content; generous whitespace; no dead right-rail on ultra-wide (cap max content width, typically 1200–1400px, centered). Validation: visual QA at 1920/2560px.

**REQ-DESK-03 — Desktop navigation.** TEMPLATE · MUST · P2. All hubs reachable from primary nav; dropdowns keyboard- and screen-reader-operable (focus-visible, Esc closes, arrow keys where menu pattern used). Validation: keyboard walkthrough.

**REQ-DESK-04 — Desktop tables & media.** TEMPLATE · SHOULD · P3. Use available width for comparison tables (all columns visible without scroll at ≥1280px where feasible); figures with `<figcaption>`. Validation: visual QA.

## PART 27 — ACCESSIBILITY SPECIFICATION

WCAG 2.2 AA as the bar (LEVEL-1). §44: SEO must never degrade accessibility; the accessible implementation is usually the machine-readable one too (P-6).

**REQ-A11Y-01 — Landmarks & headings.** GLOBAL · MUST · P1. `header/nav/main/aside/footer` landmarks; one h1; logical heading order; skip link ("Skip to main content") as first focusable element. Validation: axe-core scan + manual landmark audit.

**REQ-A11Y-02 — Keyboard & focus.** GLOBAL · MUST · P1. All functionality keyboard-operable; visible focus states (never `outline:none` without replacement); logical tab order; focus trapped correctly in modals and returned on close. Validation: full keyboard walkthrough.

**REQ-A11Y-03 — Forms.** TEMPLATE · MUST · P1. Every input has a programmatically associated `<label>`; errors identified in text and linked to fields; required fields indicated; `autocomplete` on personal-data fields. Validation: axe + manual screen-reader pass (NVDA/VoiceOver) on the primary conversion form.

**REQ-A11Y-04 — Images & media.** GLOBAL · MUST · P1. Meaningful images: descriptive alt; decorative: `alt=""`; videos: captions + transcript; no autoplay with sound. Validation: alt audit + media check.

**REQ-A11Y-05 — Colour & contrast.** GLOBAL · MUST · P1. Text contrast ≥4.5:1 (large text ≥3:1); non-text UI ≥3:1; colour never the sole carrier of meaning. Validation: contrast audit.

**REQ-A11Y-06 — Motion & animation.** GLOBAL · SHOULD · P2. Respect `prefers-reduced-motion`; no parallax/auto-animating content that can't be paused. Validation: reduced-motion test.

**REQ-A11Y-07 — ARIA discipline.** GLOBAL · MUST · P1. Native semantic HTML first; ARIA only to fill gaps; no incorrect roles (wrong ARIA is worse than none). Validation: axe ARIA ruleset.

## PART 28 — TRUST / PROVENANCE SPECIFICATION

Evidence basis: EV-22 (trust cues drive citation), EV-25 (authority concentration), EV-12 (invisibility), §32, §52.

**REQ-TRUST-01 — Core trust pages.** GLOBAL · MUST · P1. About (organisation, leadership, history, what/where), Contact (real channels; NAP where local), Privacy Policy, Terms where applicable. Linked from footer on every page. Validation: pages exist, linked, crawlable.

**REQ-TRUST-02 — Editorial/source policy.** CONDITIONAL (content sites) · SHOULD · P2. Publish how content is produced: sourcing standards, corrections policy, review process, update policy. Evidence: EV-22 + §32. Validation: page exists and is linked from article template or About.

**REQ-TRUST-03 — Author transparency.** TEMPLATE · MUST (content pages) · P1. Real named authors with genuine credentials; author pages listing their articles; consistency with schema (REQ-SCHEMA-07). Never fabricate expertise. Validation: provenance audit.

**REQ-TRUST-04 — Review/rating integrity.** CONDITIONAL · MUST · P0. Only genuine, verifiable reviews; no review schema without visible reviews; no self-serving AggregateRating markup of own product reviews where guidelines prohibit. Validation: schema-vs-visible audit.

**REQ-TRUST-05 — Business identity consistency.** GLOBAL · MUST · P1. Name, address, phone, email identical across site, schema, and (where applicable) external listings. Evidence: EV-12 (entity consistency) + local Level-1. Validation: NAP consistency audit.

## PART 29 — COMPONENT-BY-COMPONENT SPECIFICATION

Per §56. Format: PURPOSE / SEO / GEO / AIO purposes · REQUIREMENT · LOCATION · CONTENT · HTML · SCHEMA · INTERNAL LINKS · DESKTOP / TABLET / MOBILE behaviour · PERFORMANCE · ACCESSIBILITY · BUILD INSTRUCTION · VALIDATION. (Condensed where a row is governed by an earlier REQ — cross-referenced, not duplicated.)

| Component | Purpose (SEO/GEO/AIO) | Key requirements (REQ refs) | Device behaviour | Validation |
|---|---|---|---|---|
| `<head>` | Metadata, canonical, schema entry | REQ-TECH-02/07, REQ-SCHEMA-01/02; title+description unique, intent-led; canonical absolute; JSON-LD server-rendered | Identical across devices (REQ-MOB-02) | Crawl meta audit; RRT |
| Header / logo | Identity, nav root | Logo links home; `header` landmark; org name visible | Desktop: full nav; Tablet: REQ-TAB-01; Mobile: disclosure nav (REQ-MOB-04) | Landmark + keyboard audit |
| Main nav | Hub discovery (P-1) | REQ-IL-01/05; `<nav aria-label>`; crawlable anchors | As header | Crawl + keyboard |
| Breadcrumbs | Hierarchy signal | REQ-ARCH-04 + REQ-SCHEMA-03 | All devices; may collapse middle items on mobile (keep first/last) | RRT + visual |
| Hero | Context, not obstruction | H1 present; no content-pushing; hero image = LCP rules (REQ-PERF-02) | Mobile: height ≤ ~60vh; answer capsule not displaced | Lighthouse LCP; visual |
| H1 | Primary topic statement | REQ-PAGE-03; one per page; matches intent brief | All | Heading audit |
| Answer capsule | AIO/GEO extraction block | REQ-AIO-01, REQ-PAGE-02; 40–80 words, self-contained, source HTML | All; never collapsed/gated | Source-grep + read-aloud |
| Body sections | Topical depth + evidence | REQ-CONT-01/02/03, REQ-PAGE-03/04; semantic sectioning | Mobile: no horizontal scroll; readable measure | Section audit |
| Evidence blocks | Citation drivers | REQ-PAGE-04, REQ-CONT-02; stats/quotes/citations/comparisons | Tables per REQ-PAGE-05 | Provenance audit |
| Comparison tables | Comparative intents | REQ-PAGE-05; real `<table>` | Desktop full; tablet/mobile scroll-region or reflow | Overflow tests |
| FAQ | Q&A extraction | REQ-PAGE-06 + REQ-SCHEMA-06; genuine questions only | All; accordions allowed ONLY if content is in DOM and visible to crawlers (no display:none on indexable FAQ answers — prefer open or details/summary) | RRT + DOM check |
| Author block | Provenance | REQ-AIO-06, REQ-TRUST-03 | All | Provenance audit |
| Sources/references | Claim provenance | REQ-CONT-09; external authoritative links where claims material | All | Link audit (no broken) |
| Related content | Internal discovery | REQ-PAGE-08, REQ-IL-03 | All | Crawl |
| Forms | Conversion | REQ-MOB-06, REQ-A11Y-03 | Mobile input modes; desktop multi-column where sensible | a11y + device walkthrough |
| CTAs | Conversion | REQ-PAGE-07, REQ-MOB-06/07 | Never obscure content; no entry interstitials | Device QA |
| Footer | Entity/trust links | REQ-IL-05, REQ-TRUST-01/05; NAP where local | All | Link + NAP audit |
| Scripts | Functionality without damage | REQ-PERF-03; async/defer; no content-injection shifts | All | Lighthouse, CLS |
| Styles | Presentation | REQ-PERF-03/04; critical CSS; no content hidden from crawlers | Breakpoints per REQ-TAB-04 | Visual regression |
| Images | Meaning + performance | REQ-TECH-08, REQ-A11Y-04 | srcset/sizes; LCP eager, rest lazy | Lighthouse + alt audit |
| Sitemap | Discovery | REQ-CRAWL-02 | n/a | Sitemap parse |
| robots.txt | Crawl policy | REQ-CRAWL-01/04 | n/a | Robots tester |

## PART 30 — GLOBAL / TEMPLATE / PAGE-SPECIFIC REQUIREMENTS

Classification index (per §63) — full text in Parts 13–29; this is the routing table the implementing AI uses to assign scope:

- **GLOBAL (site-wide, build once):** REQ-ARCH-01/02/03/07, REQ-CONT-02/04/08, REQ-ENT-01/02/05, REQ-GEO-01/02/04/05/06, REQ-SCHEMA-01/02/09, REQ-IL-01/04, REQ-TECH-01/02/03/06, REQ-CRAWL-01/02/03/04/05, REQ-PERF-01/03/05/06, REQ-MOB-01/02/03/07, REQ-TAB-03/04, REQ-A11Y-01/02/04/05/06/07, REQ-TRUST-01/05.
- **TEMPLATE (per page-type template):** REQ-ARCH-04, REQ-PAGE-02/03/04/07/08, REQ-CONT-05/06, REQ-ENT-03, REQ-AIO-01…07 (as template components), REQ-GEO-03, REQ-SCHEMA-03, REQ-IL-02/03/05, REQ-TECH-07/08, REQ-PERF-02/04, REQ-MOB-04/05/06, REQ-TAB-01/02, REQ-DESK-01/02/03/04, REQ-A11Y-03, REQ-TRUST-03.
- **PAGE-SPECIFIC (per page brief):** REQ-PAGE-01, REQ-CONT-01/07, REQ-ENT-04.
- **CONDITIONAL (only when the condition holds):** REQ-ARCH-05/06, REQ-PAGE-05/06, REQ-TECH-04/05/09, REQ-SCHEMA-04/05/06/07/08, REQ-CONT-09, REQ-TRUST-02/04.
- **DO-NOT register:** REQ-ARCH-07, REQ-CONT-08, REQ-GEO-06, keyword stuffing (EV-02), schema spam, fabricated anything, intrusive interstitials, lazy-loaded LCP, JS-only links/content, doorway pages.

## PART 31 — PRIORITISED REQUIREMENTS REGISTER

Scores per §62: SEO/GEO/AIO/USER impact, effort, confidence, risk-if-omitted on 1–10. **These are relative prioritisation scores, not guaranteed ranking-effect measurements** (no empirical per-requirement measurements exist in the corpus).

| Task | Requirement(s) | Pri | Class | SEO | GEO | AIO | USER | Effort | Conf | Risk if omitted |
|------|----------------|-----|-------|-----|-----|-----|------|--------|------|------------------|
| T-01 | REQ-TECH-01/02/03, REQ-CRAWL-01 | P0 | GLOBAL/MUST | 10 | 9 | 9 | 5 | 4 | 10 | 10 |
| T-02 | REQ-TECH-04, REQ-AIO-07 (render parity) | P0 | GLOBAL/MUST | 9 | 9 | 9 | 6 | 6 | 9 | 10 |
| T-03 | REQ-TECH-06 (HTTPS/security) | P0 | GLOBAL/MUST | 8 | 5 | 5 | 8 | 2 | 10 | 9 |
| T-04 | REQ-MOB-01/02 (viewport, parity, overflow) | P0 | GLOBAL/MUST | 9 | 7 | 7 | 9 | 4 | 9 | 9 |
| T-05 | REQ-ARCH-01/02/07 + REQ-IL-01/02/04 (IA + crawlable links + no orphans/doorways) | P0 | GLOBAL/MUST | 9 | 8 | 7 | 7 | 6 | 9 | 9 |
| T-06 | REQ-CONT-08 + REQ-GEO-06 (no thin/scaled/manipulative content) | P0 | GLOBAL/DO-NOT | 8 | 8 | 8 | 8 | 2 | 10 | 10 |
| T-07 | REQ-PAGE-01 (intent briefs) | P1 | PAGE/MUST | 8 | 8 | 8 | 8 | 3 | 9 | 7 |
| T-08 | REQ-PAGE-02/03 + REQ-AIO-01/02 (answer capsule + semantic sectioning) | P1 | TEMPLATE/MUST | 7 | 9 | 9 | 8 | 4 | 8 | 8 |
| T-09 | REQ-CONT-02/03/09 + REQ-PAGE-04 (evidence-dense, provenance) | P1 | GLOBAL/MUST | 7 | 10 | 9 | 8 | 6 | 8 | 8 |
| T-10 | REQ-SCHEMA-01/02/03/09 (+04/05/06/07 conditional) | P1 | GLOBAL/MUST | 7 | 7 | 7 | 3 | 4 | 9 | 6 |
| T-11 | REQ-CRAWL-02/03/04 (sitemap, GSC/BWT, AI-crawler policy) | P1 | GLOBAL/MUST | 8 | 8 | 8 | 2 | 2 | 9 | 7 |
| T-12 | REQ-PERF-01/02/04 (CWV: LCP/INP/CLS) | P1 | GLOBAL/MUST | 7 | 5 | 5 | 9 | 6 | 9 | 7 |
| T-13 | REQ-CONT-06 + REQ-AIO-05 (freshness/dates) | P1 | TEMPLATE/MUST | 6 | 8 | 8 | 6 | 3 | 8 | 6 |
| T-14 | REQ-ENT-01/02/03/04 (entity system) | P1 | GLOBAL/MUST | 6 | 8 | 7 | 5 | 4 | 7 | 7 |
| T-15 | REQ-TRUST-01/03/05 (trust pages, authors, NAP) | P1 | GLOBAL/MUST | 5 | 7 | 7 | 7 | 3 | 8 | 6 |
| T-16 | REQ-A11Y-01…07 (WCAG 2.2 AA core) | P1 | GLOBAL/MUST | 5 | 4 | 4 | 10 | 5 | 10 | 7 |
| T-17 | REQ-GEO-04 (measurement harness baseline) | P1 | GLOBAL/MUST | 2 | 9 | 9 | 2 | 3 | 8 | 8 |
| T-18 | REQ-CONT-04/05 (fluency pass, domain tactic weighting) | P1 | GLOBAL/MUST | 5 | 8 | 7 | 8 | 4 | 8 | 5 |
| T-19 | REQ-GEO-02 (citable-asset program) | P1 | GLOBAL/SHOULD | 6 | 9 | 8 | 6 | 8 | 7 | 7 |
| T-20 | REQ-MOB-03…07 + REQ-TAB-01…03 + REQ-DESK-01…03 (device depth) | P2 | TEMPLATE/MUST | 6 | 5 | 5 | 8 | 5 | 9 | 5 |
| T-21 | REQ-PAGE-05/06/08, REQ-IL-03 (tables, FAQ, related, contextual links) | P2 | TEMPLATE | 6 | 7 | 7 | 7 | 4 | 7 | 5 |
| T-22 | REQ-TECH-08/09 (media), REQ-PERF-03/05/06 | P2 | TEMPLATE/GLOBAL | 6 | 4 | 4 | 8 | 4 | 9 | 5 |
| T-23 | REQ-CONT-07 (information gain assets) | P2 | PAGE/SHOULD | 6 | 8 | 7 | 7 | 7 | 6 | 5 |
| T-24 | REQ-ARCH-05/06, REQ-TECH-05 (facets/params/i18n) | P2 | CONDITIONAL | 7 | 5 | 5 | 5 | 5 | 8 | 7 |
| T-25 | REQ-GEO-05 (llms.txt), REQ-CRAWL-05 (IndexNow), REQ-SCHEMA-08 | P3 | GLOBAL/MAY | 2 | 3 | 3 | 1 | 1 | 5 | 1 |
| EXP-01 | In-context position/format experiments (C6) | P3 | EXPERIMENT | 1 | 5 | 5 | 2 | 3 | 3 | 1 |

## PART 32 — DEPENDENCY MAP

Correct implementation order (§64). Downstream items MUST NOT start before upstream items pass validation.

```
PRE-BUILD REPOSITORY AUDIT (§65)
  └─► T-03 HTTPS/security baseline
  └─► T-01 status codes / canonicals / robots meta / robots.txt
        └─► T-11 sitemap + GSC/BWT verification + AI-crawler policy
        └─► T-02 render parity (content/links/meta/schema in initial HTML)
              └─► T-05 information architecture + crawlable internal links + orphan/doorway purge
                    └─► T-04 mobile viewport/parity/overflow (P0 device gate)
                          └─► T-07 intent briefs per page type
                                └─► T-08 page architecture: answer capsule + semantic sectioning
                                      └─► T-09 evidence-dense content + provenance
                                            └─► T-10 structured data graph (needs final URLs, breadcrumbs, dates, authors)
                                                  └─► T-13 freshness/date signalling (feeds schema + sitemap lastmod)
                                                        └─► T-14 entity system (names/relationships referenced by schema + copy)
                                                              └─► T-15 trust pages/authors/NAP
                                                                    └─► T-12 performance/CWV (after content+media exist)
                                                                          └─► T-16 accessibility pass (after templates stable)
                                                                                └─► T-17 GEO/AIO measurement harness baseline (pre-launch baseline!)
                                                                                      └─► T-18…T-25 optimisation layers, experiments last
```

Key dependency rules: canonical URLs before sitemap before schema URLs before breadcrumbs (one URL truth); content before schema (schema mirrors visible content); templates stable before a11y/perf passes; **baseline measurement before any GEO change ships** (otherwise no before/after).

## PART 33 — IMPLEMENTATION SEQUENCE

Phased plan for the implementing AI (each phase ends with its validation gate from Part 36):

- **Phase 0 — Audit (no changes).** §65 repository inspection; current-state audit (Part 66 gap table); record baseline: crawl, CWV lab/field, GSC exports, and the Part 37/38 AI-visibility baseline. DELIVERABLE: CURRENT-STATE vs TARGET-STATE gap table.
- **Phase 1 — P0 technical floor.** T-01, T-02, T-03, T-04, T-05, T-06. Gate: full crawl clean; render parity; mobile parity; no orphans; no manipulative patterns.
- **Phase 2 — Page system.** T-07, T-08, T-09. Gate: every priority template has intent brief, answer capsule, semantic sections, evidence blocks.
- **Phase 3 — Machine layer.** T-10, T-11, T-13, T-14, T-15. Gate: schema graph valid; sitemap/canonical/robots coherent; dates consistent; trust pages live.
- **Phase 4 — Experience layer.** T-12, T-16, T-20, T-21, T-22. Gate: CWV "Good" (field or lab proxy pre-field-data), axe clean, device matrix signed off.
- **Phase 5 — GEO/AIO programme.** T-17 (already baselined), T-18, T-19, T-23, T-25; EXP-01 only behind the experimentation framework. Gate: monitoring live; first monthly report scheduled.
- **Phase 6 — Post-implementation audit.** Part 39 QA prompt executed; PASS/FAIL report; regressions fixed; then re-baseline.

## PART 34 — ATOMIC BUILD TASKS

Full §67 structure for the critical-path tasks (T-01…T-17). T-18…T-25 inherit the same field set from their REQ definitions in Parts 13–29 (each REQ already carries objective, evidence, device, and validation fields); the implementing AI expands them using this same template. "CURRENT STATE" is intentionally not invented (§66) — the implementing AI fills it during Phase 0.

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
**EVIDENCE:** P-1; EV-06 (engines retrieve via search infra); REQ-AIO-07.
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
**OBJECTIVE:** Remove/prevent every §55 pattern: keyword stuffing, hidden text, cloaking, doorway pages, fake reviews/authors/locations, schema spam, link schemes, adversarial text.
**EVIDENCE:** EV-02, EV-15, EV-16, EV-18.
**CURRENT STATE:** _Phase 0_ · **TARGET STATE:** zero violations; a pre-merge checklist prevents new ones.
**DEPENDENCIES:** none. **FILES:** all templates/content; CI checklist.
**IMPLEMENTATION STEPS:** 1. audit content for stuffing/hidden text; 2. audit schema vs visible content; 3. verify every review/author/credential is real; 4. add the DO-NOT list to the repo's contribution checklist.
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
**IMPLEMENTATION STEPS:** 1. collect queries (GSC, keyword tools, sales/support logs); 2. classify intent per §50; 3. write brief per page; 4. map sections to expected questions.
**VALIDATION:** brief-to-section mapping review. **PASS:** every h2 maps to a brief question. **FAIL:** unmapped sections.
**CONFIDENCE:** HIGH.

---

**TASK ID:** T-08
**TITLE:** Answer capsule + semantic sectioning in page templates
**DISCIPLINE:** GEO/AIO/SEO/UX
**SCOPE:** TEMPLATE
**PRIORITY:** P1 · MUST
**OBJECTIVE:** Extractable primary answer + machine-readable section structure (REQ-PAGE-02/03, REQ-AIO-01/02).
**EVIDENCE:** EV-19, EV-23, EV-14, EV-04.
**CURRENT STATE:** _Phase 0_ · **TARGET STATE:** capsule component after H1; correct heading hierarchy; landmarks.
**DEPENDENCIES:** T-07. **FILES:** page templates, CSS.
**IMPLEMENTATION STEPS:** 1. add capsule component (styled intro paragraph, not an ad-like box); 2. rewrite headings to question/topic form per brief; 3. fix hierarchy/landmarks; 4. verify capsule in source HTML.
**HTML:** `<main><article><h1>…</h1><p class="answer-capsule">…</p><section><h2>…` etc.
**CSS:** capsule visually distinct but not intrusive; measure caps.
**MOBILE:** capsule first content under H1, never collapsed. **TABLET/DESKTOP:** same order.
**VALIDATION:** source-grep for capsule; heading-outline audit; read-aloud extraction test.
**PASS:** capsule present pre-JS on 100% priority pages; outline valid. **FAIL:** missing/JS-only capsule; skipped heading levels.
**DO NOT:** marketing slogans as capsules; accordion-gated capsules.
**CONFIDENCE:** HIGH (GEO), MEDIUM-HIGH (AIO transfer).

---

**TASK ID:** T-09
**TITLE:** Evidence-dense content build with claim-level provenance
**DISCIPLINE:** GEO/AIO/SEO content
**SCOPE:** GLOBAL (content pages)
**PRIORITY:** P1 · MUST
**OBJECTIVE:** Every substantive section carries real evidence (REQ-CONT-02/03/09, REQ-PAGE-04).
**EVIDENCE:** EV-01 (causal), EV-22, EV-19, EV-25.
**CURRENT STATE:** _Phase 0_ · **TARGET STATE:** per-section evidence elements; material claims cited; zero fabrications.
**DEPENDENCIES:** T-07, T-08. **FILES:** content files/CMS.
**IMPLEMENTATION STEPS:** 1. inventory claims per page; 2. attach statistic/quotation/citation/example per section (real, sourced, dated); 3. add references block where claims are material; 4. editorial fluency pass (T-18).
**HTML:** `<blockquote>`/`<q>` for quotes; `<table>` for comparisons; `<ol>` for steps; `<cite>` where apt.
**VALIDATION:** provenance audit; fabrication sweep; read-aloud extraction.
**PASS:** 100% material claims sourced; ≥1 evidence element per h2 section. **FAIL:** any fabricated or unsourced material claim.
**DO NOT:** invent statistics, quotes, case studies, or sources (§25); irrelevant external links as "trust paint" (§31).
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
**OBJECTIVE:** REQ-PERF-01/02/04 targets.
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
**EVIDENCE:** EV-09 (AI engines cite materially fresher content).
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
**OBJECTIVE:** REQ-A11Y-01…07.
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
**OBJECTIVE:** REQ-GEO-04: fixed prompt panel, multi-engine monthly sampling, citation logging; baseline recorded in Phase 0.
**EVIDENCE:** EV-24, EV-18 (variability → repeated measures), EV-06 (engines differ).
**CURRENT STATE:** _Phase 0_ · **TARGET STATE:** prompt panel (30–100 queries across intents), runbook, storage sheet/dashboard, first baseline logged.
**DEPENDENCIES:** T-07 (intent map). **FILES:** `measurement/` docs or ops tooling.
**IMPLEMENTATION STEPS:** 1. draft prompts from intent briefs (informational/comparison/transactional/brand); 2. fix engine list + settings (web-enabled modes); 3. run baseline; log answer text, cited domains/URLs, brand mentions, competitors; 4. schedule monthly re-run.
**VALIDATION:** baseline report exists with per-engine citation table.
**PASS:** reproducible runbook + baseline stored. **FAIL:** ad-hoc unrecorded prompting.
**DO NOT:** treat single observations as truth (variance is high — EV-18); change prompts mid-programme without versioning.
**CONFIDENCE:** HIGH (that measurement is necessary), n/a (effect).

## PART 35 — MASTER WEBSITE-BUILDING AI PROMPT

Self-contained prompt to hand to the coding/building AI (§85). It assumes repository access. It must not need to reinterpret the research.

---

> **MISSION**
> You are the implementing engineer for an evidence-based SEO + GEO + AIO optimisation programme. Your objective: maximise the probability that this website achieves the strongest attainable organic visibility (target: Position #1 where realistically attainable) and the strongest attainable inclusion/citation in AI-generated answers (Google AI Overviews/AI Mode, ChatGPT, Perplexity, Gemini, Copilot, Claude), across mobile, tablet, and desktop — while remaining compliant, factual, accessible, performant, and human-first. You cannot and must not promise #1 rankings or guaranteed AI citations; you build to maximise probability and you instrument measurement.
>
> **GOVERNING EVIDENCE (do not re-derive; apply):**
> 1. Retrieval gates everything: crawlable, indexable, server-rendered, internally linked pages are prerequisites for both search and AI citation.
> 2. Organic rank and AI citation are different outcomes (AI engines overlap Google top-10 by only ~4–15%). Build and measure both tracks separately.
> 3. Content-side GEO tactics with controlled evidence: add real citations, quotations, statistics; maximise fluency/clarity; structure content (headings, chunks, tables, steps, definitions). Keyword stuffing measurably hurts. Effects are domain-dependent, shrink under competitor adoption, and do not create discoverability by themselves.
> 4. AI engines favour earned/third-party sources and fresher content than Google; engines differ materially from each other. On-site work must make pages retrievable and citable; off-site authority is a parallel programme the site supports with citable assets.
> 5. Accurate JSON-LD (Organization/WebPage/Breadcrumb + Article/Service/Product/FAQ where factual) is required; FAQPage/Product schema showed the strongest correlation with ChatGPT visibility (OR≈13.3/4.1, correlational). Schema must mirror visible content exactly.
> 6. Never manipulate: no hidden/adversarial text, no fabricated evidence/authors/reviews/statistics, no doorway/scaled thin pages, no schema spam. LLM-poisoning and recommendation-hijacking research means engines actively defend against these.
> 7. AI visibility is stochastic and engine-specific: you will ship a measurement harness and treat all AI-visibility outcomes as observational, never deterministic.
>
> **PHASE 0 — REPOSITORY AUDIT (no changes).** Inspect: framework, routing, rendering model (SSR/SSG/CSR/hydration), templates/components/layouts, styling system and breakpoints, metadata generation, schema generation, content storage, image pipeline, scripts/third-parties, sitemap/robots generation, canonical handling, redirects, analytics/consent, deployment, tests. Run: full crawl; source-vs-rendered DOM diff; Lighthouse on key templates; mobile overflow test. Record the CURRENT-STATE vs TARGET-STATE gap table (requirement / current / target / gap / action / priority / evidence / validation). Do not begin mass changes before this table exists.
>
> **STACK ADAPTATION RULE (§59):** For every requirement below: implement using the existing framework, routing, components, styling conventions, metadata framework, build tools, and dependency strategy. Do not introduce new dependencies or rewrite working architecture unless the requirement cannot otherwise be correctly implemented. Do not guess the stack — inspect it.
>
> **BUILD PROGRAMME (execute in this order; each task's full spec is in the playbook's Part 34):**
> - P0 floor: T-01 canonical/redirects/robots; T-02 render parity; T-03 HTTPS; T-04 mobile viewport/parity/zero-overflow; T-05 IA + crawlable links + orphan/doorway purge; T-06 anti-manipulation sweep.
> - P1 page system: T-07 intent briefs; T-08 answer capsule + semantic sectioning; T-09 evidence-dense content with provenance.
> - P1 machine layer: T-10 schema graph; T-11 sitemap + consoles + AI-crawler policy; T-13 freshness/dates; T-14 entity system; T-15 trust layer.
> - P1/P2 experience: T-12 Core Web Vitals (LCP ≤2.5s, INP ≤200ms, CLS ≤0.1 p75 mobile); T-16 WCAG 2.2 AA; T-20 device depth (tablet portrait/landscape, desktop measure); T-21 tables/FAQ/related links; T-22 media/perf polish.
> - Programme: T-17 measurement harness FIRST (baseline before changes), then T-18 fluency/domain tactics, T-19 citable assets, T-23 information gain, T-25 optional cheap MAYs. Experiments (EXP-01) only via the experimentation framework (hypothesis/control/variant/metric/window/success/rollback).
>
> **NON-NEGOTIABLE CONTENT RULES:** answer capsule (40–80 self-contained words) directly under each priority page's H1 in server-rendered HTML; question-mapped heading hierarchy; per-section evidence element (statistic with named source+year, attributed quotation, comparison, steps, or first-party data); visible dates + datePublished/dateModified + sitemap lastmod consistency, updated only on substantive change; real authors and organisation identity; no fabricated anything.
>
> **DEVICE RULES:** mobile is primary (content parity, zero horizontal overflow at 320–430px, touch targets ≥24px, accessible disclosure nav, tables in labelled scroll regions); tablet explicitly tested at ~768px portrait and ~1024px landscape (nav state, grid behaviour, touch); desktop measure capped ~65–75ch, max content width, keyboard-operable nav.
>
> **PRESERVATION RULE (§70):** Before modifying any existing code, identify its current purpose, dependencies, and regression risk. Prefer targeted changes over rewrites. Never sacrifice functioning business logic, conversion flows, or accessibility for an optimisation. If a conflict arises, apply the human-first rule: usefulness/accuracy/accessibility/trust win unless strong evidence says otherwise.
>
> **VALIDATION (gate each phase; full plan in Part 36):** crawl clean (0 chains, 0 soft-404, 0 orphans, 100% self-canonical); render parity diff empty; schema validators pass with visible-content consistency; CWV "Good"; axe 0 critical/serious; device matrix signed off; sitemap/robots/canonical cross-agreement; provenance audit passes; measurement baseline stored.
>
> **DELIVERABLES PER PHASE:** gap table (P0 audit); working code per task; validation evidence per gate; final POST-IMPLEMENTATION PASS/FAIL REPORT (Part 39); updated measurement baseline.
>
> **WHAT NOT TO DO:** no guaranteed-ranking claims; no keyword stuffing; no hidden/adversarial text; no fabricated content or schema; no lazy-loaded LCP; no JS-only primary content or links; no doorway pages; no date-freshening without substance; no single-engine overfitting; no arbitrary breakpoints/character-count folklore.

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

**Content validation:** intent-brief mapping; provenance audit (every material claim sourced or first-party); fabrication sweep; freshness/date consistency (visible == schema == lastmod); readability pass sign-off.

## PART 37 — AIO MONITORING / VALIDATION PLAN

AIO visibility is observational, never deterministic (§75, EV-18, AIO-7).

**Setup:**
1. **Target query panel:** from intent briefs — 10–25 queries per priority page cluster spanning informational/comparison/transactional; version the panel (never edit silently; append).
2. **Observation protocol:** monthly (weekly during active campaigns); fixed location(s) and device classes (mobile + desktop); signed-out/clean sessions; record: whether an AI Overview appears, whether the site is cited, which URL, which passage was used, citation position/prominence, competitors cited, screenshot/archive.
3. **Log fields:** date · query · market/device · AIO present (Y/N) · site cited (Y/N) · cited URL · passage excerpt · competitor citations · notes.
4. **Variance discipline:** repeat each query ≥3 times across days before concluding anything (run-to-run variability, EV-18); report rates, not anecdotes.
5. **Change correlation:** annotate the log with ship dates of T-08/T-09/T-10/T-13 changes; look for citation-rate movement over ≥2 observation cycles; no single-observation conclusions.
6. **PASS/FAIL framing:** there is no deterministic pass. Programme-level success criterion (example): measurable increase in AIO citation rate on the target panel vs baseline over a quarter, holding the panel fixed. Absence of movement → diagnose via pipeline stage (retrieval? selection? absorption? — S8's two-stage frame) before changing tactics.

## PART 38 — GEO / AI CITATION MONITORING PLAN

Per §74: DIRECT TECHNICAL VALIDATION (Parts 36) vs OBSERVATIONAL VALIDATION (this part).

**Harness (T-17 build):**
1. **Prompt panel:** 30–100 fixed prompts covering: brand/entity queries, category discovery queries ("best X for Y"), informational questions the site's content answers, comparison queries, and (where relevant) local queries. Include competitor-name queries for context.
2. **Engines:** ChatGPT (web-enabled), Perplexity, Gemini, Google AI Overviews/AI Mode, Copilot, Claude (web-enabled). Record exact model/version and mode per run (engines drift — EV-18).
3. **Cadence:** monthly minimum; weekly during the first quarter post-launch.
4. **Metrics per engine per run:** brand mentioned (Y/N); site cited (Y/N); cited URL(s); share of panel with citation (citation rate); mention sentiment/accuracy; competitors cited; which content asset was used.
5. **Derived KPIs:** per-engine citation rate; cross-engine citation rate; citation share vs named competitors; trend vs baseline; referral traffic from AI surfaces where analytics can see it (e.g., perplexity.ai referrers).
6. **Diagnostics when flat:** classify failure by pipeline stage (S9): not indexed → fix Part 22; indexed but never retrieved → authority/intent match (Parts 13/15, off-site programme); retrieved but not cited → absorption features (Part 17: capsules, evidence blocks, structure, freshness); cited but wrong → accuracy/entity clarity (Part 16).
7. **Reporting:** one-page monthly scorecard; decisions recorded; experiments logged per the experimentation framework.

## PART 39 — POST-IMPLEMENTATION QA PROMPT

Hand this to the QA/building AI after implementation (§76):

> Audit the implemented site against every requirement in the playbook. Verify in order: (1) all P0 requirements; (2) all P1; (3) implemented P2; (4) P3/experiments separately. For each requirement produce PASS/FAIL with evidence (crawl export, validator output, screenshot, metric). Then verify cross-cutting: mobile (320–430px), tablet (768/1024 both orientations), desktop (1280–1920px); crawlability; indexability; canonicals; sitemaps; robots; schema (valid + visible-consistent); CWV (LCP/INP/CLS p75); accessibility (axe + keyboard + AT pass); metadata uniqueness; internal linking (0 orphans); content provenance; render parity; GEO structures (capsules, evidence blocks, self-contained passages); AIO structures (FAQ, dates, author blocks); and regressions vs the pre-build baseline (conversion flows, existing rankings, business logic). Confirm the contradiction audit passed: no SEO change harming accessibility; no perf change hiding content; no lazy-loaded LCP; no schema/content mismatch; no canonical/sitemap/robots conflict; no mobile-hidden indexable content; no JS-only links. Output: POST-IMPLEMENTATION PASS/FAIL REPORT listing every requirement, its evidence, and for every FAIL: severity, root cause, fix, and re-test date. Conclude with the re-baselined AI-visibility measurement (Parts 37–38) and the next monthly review date.

## PART 40 — TRACEABILITY MATRIX

SOURCE → EVIDENCE → FINDING → REQUIREMENT → TASK → VALIDATION (§77). Level-1 anchored requirements trace to stable official guidance rather than corpus sources (see Part 4, gap 1).

| Source | Evidence | Finding | Requirement(s) | Task(s) | Validation |
|--------|----------|---------|----------------|---------|------------|
| S6 (GEO, KDD'24) | EV-01, EV-02, EV-03, EV-04, EV-05 | G1, G2, G3; SEO-3 | REQ-CONT-02/03/04/05, REQ-PAGE-04, REQ-GEO-06 | T-09, T-18, T-06 | Provenance audit; read-aloud extraction; content audit |
| S16 (+S5 report) | EV-06…EV-11 | P-3, P-7, P-8, P-10; AIO-2/3/5/7 | REQ-CONT-06, REQ-AIO-05, REQ-GEO-04, REQ-ENT-04 | T-13, T-17, T-14 | Date-consistency check; monitoring logs |
| S7 (Dominate AI Search) | EV-21 | G9, P-9 | REQ-GEO-02, REQ-ENT-05 | T-19 | Asset-per-hub check; citation monitoring |
| S8 (Selection→Absorption) | EV-19 | G5, AIO-1, P-2, P-4 | REQ-AIO-01/02/03, REQ-GEO-03, REQ-PAGE-02/05 | T-08, T-09, T-21 | Source-grep; section audit; extraction test |
| S9 (Critical Survey) | EV-18 | G-expectations, P-12 | REQ-GEO-04/06, EXP-01 governance | T-17 | Harness exists; experiment register |
| S12 (AutoGEO) | EV-27 | G3, human-first constraint | REQ-CONT-05, §84 application | T-18 | Brief documents tactic choice |
| S13 (GEO-16) | EV-23 (with S21) | G5, P-6 | REQ-PAGE-03, REQ-AIO-02 | T-08 | Heading-outline audit |
| S14 (G-SEO intent) | EV-26 | intent-first | REQ-PAGE-01, REQ-CONT-01 | T-07 | Brief-to-section mapping |
| S15 (Anthropic poisoning) | EV-15 | P-11 | REQ-GEO-06, REQ-TECH-06 posture | T-06, T-03 | Compliance sweep |
| S17 (Discovery Gap) | EV-17 | P-1, P-9, C3 | REQ-GEO-01, REQ-ARCH-01, REQ-ENT-05 | T-01, T-05, T-19 | Crawl; authority monitoring |
| S18 (STS manipulation) | EV-16 | P-11 | REQ-GEO-06 | T-06 | Code/content review |
| S19 (C-SEO Bench) | EV-20 | G12, C1 | REQ-GEO-06, EXP governance | T-06, T-17 | Experiment register |
| S20 (What Gets Cited) | EV-22 | G4, P-2 | REQ-CONT-02/09, REQ-AIO-06, REQ-TRUST-* | T-09, T-15 | Provenance audit |
| S21 (GEO-SFE) | EV-23 | G5, P-6 | REQ-PAGE-03/05, REQ-GEO-03 | T-08, T-21 | Structure audit |
| S22 (GEO at Scale) | EV-24 | P-12 | REQ-GEO-04 | T-17 | Baseline report |
| S23 (Claude health authority) | EV-25 | vertical authority | REQ-CONT-09, REQ-TRUST-02 | T-09 | Provenance audit |
| S1/S2 (Invisibility Gap) | EV-12, EV-13, EV-28, EV-29 | P-9, P-10 | REQ-ENT-01/02/05, REQ-GEO-02/04 | T-14, T-19, T-17 | Entity audit; monitoring |
| S3 (JSON-LD ChatGPT) | EV-14 | G7, AIO-4, C2, C4 | REQ-SCHEMA-01…09, REQ-MOB-01, REQ-CRAWL-01/02, REQ-PAGE-03 | T-10, T-04, T-11, T-08 | RRT; device tests; sitemap parse |
| S4 (AEO Vision roundup) | EV-24 support; literature map | P-12 | REQ-GEO-04; corpus routing to S20–S23 | T-17 | — |
| LEVEL-1 ANCHOR (official guidance, stable) | — | SEO substrate | REQ-ARCH-*, REQ-TECH-*, REQ-CRAWL-*, REQ-PERF-*, REQ-MOB-*, REQ-A11Y-* | T-01…T-05, T-11, T-12, T-16, T-20, T-22 | Part 36 deterministic tests |

**Forward check (§78):** every material source finding maps to ≥1 requirement, or is dispositioned in Part 41/42. **Reverse check (§79):** every P0/P1 task cites EV-xx or LEVEL-1 ANCHOR above; none is evidence-free.

## PART 41 — UNSUPPORTED / WEAKLY SUPPORTED CLAIMS

Per §13/§80. Dispositions: REMOVE / DOWNGRADE / EXPERIMENT / RETAIN WITH WARNING.

| Claim (folklore or weak) | Why support is weak | Source quality | Decision |
|---|---|---|---|
| "Keyword stuffing/density improves AI visibility" | Directly refuted experimentally (−10% vs baseline on Perplexity) | S6 (L2), S19 (L2) | **REMOVE** (DO-NOT, T-06) |
| "GEO content edits guarantee discovery/traffic" | Gains are fixed-context-conditional; no stable longitudinal cross-platform effect on discoverability | S9 (L2 survey), S17 (L2–L3) | **REMOVE** as a claim; retain tactics with bounded expectations |
| "ai.txt / llms.txt drives AI visibility" | ai.txt non-significant in n=1,508 regression; no corpus evidence for llms.txt effect | S3 (L3), S9 | **DOWNGRADE** to MAY/P3 (REQ-GEO-05); zero promised effect |
| "XML sitemaps hurt AI visibility" | Confounded correlational coefficient; authors themselves reject causal reading | S3 (L3) | **REMOVE**; sitemaps retained (C4) |
| "Organization schema alone boosts AI visibility" | Non-significant in S3's regression | S3 (L3) | **RETAIN WITH WARNING**: implement for search/knowledge-panel eligibility (Level-1), not for a claimed AI effect |
| "Authoritative tone alone lifts GEO" | No significant improvement in S6 overall; domain-limited | S6 (L2) | **DOWNGRADE** to domain-conditional tactic (REQ-CONT-05) |
| "In-context position gaming" | Conflicting evidence (S6 metric vs S16 observation) | S6/S16 (L2) | **EXPERIMENT** only (EXP-01, C6) |
| "AI Overviews cite only top organic ranks" | Refuted: overlap medians 0–14.3% | S16 (L2) | **REMOVE** |
| "One engine's behaviour predicts another's" | Refuted: systematic cross-engine differences | S16, S1 (L2/L3) | **REMOVE**; portfolio rule P-8 |
| "Character-count metadata folklore (fixed title/description lengths as ranking rules)" | No corpus evidence; truncation is presentation, not ranking | — | **RETAIN WITH WARNING**: write intent-led unique titles/descriptions; avoid truncation for UX, not as a ranking factor (REQ-TECH-07) |
| "250-doc poisoning / STS as optimisation tactics" | They are attacks; engines are incentivised to defend; unethical | S15, S18 (L2) | **REMOVE** (DO-NOT, T-06) |
| "Mail Online −45% CTR ⇒ universal AIO traffic loss" | Single-site case, third-party report | S1 citing SEL (L4) | **RETAIN WITH WARNING** as stakes context only (EV-29); never as a prediction |

## PART 42 — REMAINING UNCERTAINTIES

1. **AIO internals.** No primary evidence on Google AI Overviews' source-selection thresholds, query fan-out mechanics, or passage-ranking weights. AIO requirements are built from convergent adjacent evidence (S8 includes AI Overview data; S16 covers Gemini grounding) — classified PROVISIONAL where noted. Treat Part 37 monitoring as the resolution mechanism.
2. **2026-engine magnitude of GEO tactics.** S6's effect sizes come from 2024-era engines; direction is corroborated (S12, S14, S20, S21), magnitude is not guaranteed on current engines (S9). Confidence labels reflect this.
3. **Causality of schema→AI citation.** Strong correlation (S3), plausible mechanism, no controlled causation in corpus. Mitigation: schema is justified independently on Level-1 grounds.
4. **Off-site weighting.** The corpus establishes that earned media/authority matter (EV-08, EV-17, EV-21) but cannot quantify how much vs on-site work for a given site. The entity-fame decision logic (REQ-ENT-04) plus monitoring resolves this per site over time.
5. **Bing/Copilot-specific behaviour.** Corpus-light (UNCLEAR). Universal spec applies; Part 38 includes Copilot in the panel to generate site-specific evidence.
6. **Vertical transfer.** Several studies are consumer-vertical (S16, S17, S3 real estate, S23 health). Domain-dependence of tactics is itself a validated finding (EV-05), so per-site measurement is mandatory rather than optional.
7. **Temporal drift.** All AI-platform findings are point-in-time. CURRENT BUT EVOLVING; quarterly re-validation of Parts 37–38 panels and engine list.

## PART 43 — MISSING INFORMATION / SOURCES REQUIRED

To raise the corpus from B (SUBSTANTIALLY SUFFICIENT) to A (SUFFICIENT), supply or authorise fetching:

1. **Official documentation snapshots** (Level-1): Google Search Central (AI features guidance, structured-data docs, search essentials), Bing Webmaster guidelines, schema.org release notes, current web.dev CWV thresholds — to pin the anchored requirements to dated documents rather than stable-knowledge assertion.
2. **A primary Google AI Overviews citation study** (large-scale, current) — to upgrade AIO findings from PROVISIONAL to VALIDATED.
3. **Site-specific inputs when applying this playbook** (§66): repository access, crawl export, GSC + Bing WMT exports, query/keyword data, competitor set, analytics, current CWV field data. Without these, CURRENT STATE columns and the gap table cannot be completed (they are intentionally blank here — inventing them is prohibited by §66).
4. **The site's entity-fame data** (branded volume, knowledge panel, reference presence) to execute REQ-ENT-04.
5. **Any vertical-specific GEO study** matching the site's industry, to refine REQ-CONT-05 tactic weighting.
6. **Access to the full text of S10's HTML variant** — not required (PDF twin fully analysed); listed for completeness only.

---

### Appendix A — Experimentation framework (§61) template

For any EXPERIMENT-class item (e.g., EXP-01): HYPOTHESIS · RATIONALE (evidence IDs) · PAGES AFFECTED · CONTROL · VARIANT · METRIC (e.g., panel citation rate, organic CTR, CWV) · OBSERVATION WINDOW (≥2 measurement cycles) · SUCCESS CRITERION (pre-registered) · ROLLBACK CONDITION. Never deploy speculative GEO/AIO tactics universally (§61); never let an experiment violate the DO-NOT register or accessibility/performance gates.

### Appendix B — Glossary

**SEO** traditional organic search optimisation · **GEO** generative engine optimisation (visibility inside AI-generated answers) · **AIO** AI Overview optimisation (Google AI Overviews and comparable AI search summaries) · **Answer capsule** the self-contained 40–80-word direct answer under the H1 · **Selection vs absorption** being chosen as a source vs actually shaping the answer (S8) · **Earned media** third-party authoritative coverage · **P0–P3** priority classes (§62) · **VALIDATED/PROVISIONAL/HYPOTHESIS/EXPERIMENTAL** evidence classes (Part 4).

*End of playbook. Traceability: every requirement carries evidence; every P0/P1 task cites its evidence; every material source finding is either implemented or dispositioned. Build order: Part 33. Hand-off: Part 35. QA: Part 39.*
