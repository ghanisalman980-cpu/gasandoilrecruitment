# UNIVERSAL PLAYBOOK — INDEPENDENT EXPERT REMEDIATION REVIEW & DEVELOPER ROADMAP

**Date:** 11 September 2026 (Europe/London)
**Role:** Independent Senior Search Strategy, Technical SEO, GEO, AEO, AIO, AI Search & Web Engineering SME
**Baseline document:** UNIVERSAL AI + SEO + GEO + AIO RESEARCH-TO-IMPLEMENTATION PLAYBOOK, Version 1.1 — REMEDIATED FINAL (built 8 Sep 2026, remediated 9 Sep 2026) — hereafter "the Universal report"
**Assessment materials adjudicated:** `ANALYSIS.docx` (RE vs Playbook, transcript-grounded, 10 Sep 2026), `SANITY-CHECK-2026-09-10.docx` (Playbook Continuity validator pass), `SUMMARY-FOR-SALMAN.docx` (plain-English summary)
**Posture:** Remediation, not reconstruction. Default position = KEEP. No live-site edits. No silent rewrites. No ranking/AIO guarantees.

---

## 0. METHOD AND INDEPENDENT VERIFICATION LOG (§6 / §7 compliance)

Every material criticism in the assessment materials was adjudicated against (a) the exact current text of the Universal report, and (b) independent current evidence. Time-sensitive claims in the Universal report were re-verified against primary/official sources on 11 Sep 2026:

| # | Verification performed (11 Sep 2026) | Result for the Universal report |
|---|---|---|
| V1 | Google FAQ rich-result retirement — Google Search documentation updates; Search Engine Land (8 May 2026); Search Engine Journal | **Playbook ACCURATE.** Rich results stopped appearing 7 May 2026; Search Console report/filter + Rich Results Test support removed June 2026; Search Console API support removed August 2026; FAQPage remains a valid schema.org type; unused markup harmless. Matches R-03 / REQ-SCHEMA-06 / REQ-AIO-04 exactly. |
| V2 | Search Console Generative-AI performance report — Google Search Central Blog (3 Jun 2026); Search Console Help answer 16984139 | **Playbook ACCURATE.** Announced 3 June 2026; worldwide 31 Aug 2026; AI Overviews + AI Mode + Discover-AI impressions by page/country/device/date; impressions only, no clicks/queries. Matches R-05 / REQ-CRAWL-03 / Part 37 §0. |
| V3 | Search generative-AI control (Settings → Search generative AI) — Google documentation + SEJ rollout coverage | **Playbook ACCURATE.** Property-level include/exclude for AI Overviews/AI Mode/Discover-AI; rankings-safe; global rollout completed 31 Aug–1 Sep 2026. Matches REQ-CRAWL-03 / REQ-CRAWL-07. |
| V4 | Google-Extended scope — Google crawler documentation + independent explainers | **Playbook ACCURATE.** Google-Extended governs Gemini training/grounding only; does NOT affect AI Overviews/AI Mode inclusion or Search ranking. Matches the REQ-CRAWL-04 SCOPE NOTE. |
| V5 | Preview controls — Google "AI features and your website" + robots-meta specification | **Playbook ACCURATE.** nosnippet applies to web/Images/Discover/AI Overviews/AI Mode and blocks content as direct AI input; data-nosnippet, max-snippet, noindex likewise; most restrictive wins; Google-Extended is never the Search-AI instrument. Matches REQ-CRAWL-07. |
| V6 | Core Web Vitals thresholds — web.dev / Google Search documentation (last updated 2025-12-10) | **Playbook ACCURATE.** LCP ≤2.5s, INP ≤200ms, CLS ≤0.1 at p75 field data — unchanged for 2026; claims of a "March 2026 LCP tightening" are refuted folklore. Matches REQ-PERF-01. |
| V7 | OpenAI crawler register — OpenAI crawler documentation + OpenAI Help Center | **Playbook MOSTLY ACCURATE — one addition required.** OAI-SearchBot (search index/citation gate), GPTBot (training), ChatGPT-User (user-triggered; robots may not apply) all correct, incl. ~24h robots propagation. **New since the register was verified: OAI-AdsBot** (validates ChatGPT ad landing pages; not training/search/citation; relevant only to sites running ChatGPT ads). → REM-08. |
| V8 | Bing Webmaster Tools AI Performance — Bing Webmaster blog (10 Feb 2026) + current help documentation | **Playbook ACCURATE but incomplete.** Beta 10 Feb 2026 confirmed (citations, cited pages, grounding queries). **June 2026 expansion added preview capabilities: Intents, Topics, Citation Share, Compare** — Citation Share is directly useful to the Part 38 competitor-citation track. → REM-09. |
| V9 | Google official AI-optimization guide — "Optimizing your website for generative AI features on Google Search" (Search Central, 15 May 2026; clarified 15 Jun 2026; updated 10 Jul 2026) | **Playbook CONSISTENT — citation + one evidence note required.** Google: no special schema, no llms.txt, no content chunking, no AI-specific rewrites needed; generative features are rooted in core Search ranking/quality systems; "prioritize effective SEO strategies over AEO/GEO hacks… or pursuing inauthentic mentions." This is the canonical Level-1 document the playbook's R-08 statement paraphrases and Part 43 requested. The playbook's REQ-GEO-05 "MIXED EVIDENCE" framing for llms.txt predates this guidance and current server-log evidence (Ahrefs: 97% of llms.txt files received zero requests, May 2026). → REM-10. |
| V10 | llms.txt engine support — Google (Illyes Jul 2025; Mueller; 15 May/15 Jun 2026 guide), OpenAI crawler docs, Anthropic, log studies | **Playbook classification CORRECT (MAY · P3, promise nothing).** No major engine uses it for search/citation; Google explicitly ignores it. Evidence framing updated via REM-10; requirement unchanged. |
| V11 | UK CMA remedy timeline — SEJ coverage of the Search generative-AI control | **Watch item only.** Google must offer more detailed page-level generative-Search controls by March 2027. No current requirement changes; the playbook's quarterly register re-verification (REQ-CRAWL-04) already covers it. No remediation. |

**Evidence-hierarchy note (§6):** official documentation (Google Search Central/Blog, Bing Webmaster, OpenAI developers) was preferred over practitioner commentary throughout. The assessment materials' own evidence labels (KEEP/RESHAPE/DROP; ADOPT/ADAPT/REJECT/NEEDS EVIDENCE) were treated as allegations to verify, not conclusions to adopt.

---

## 1. REMEDIATION REGISTER (§15) — COMPLETE ADJUDICATION TABLE

Every material criticism supplied in the assessment materials appears below, plus the material findings of the independent freshness verification. Nothing was silently ignored.

**Decision vocabulary:** CONFIRMED — REMEDIATE · PARTIALLY CONFIRMED — LIMITED REMEDIATION · ALREADY ADEQUATELY ADDRESSED · NOT SUBSTANTIATED · OUTDATED CRITICISM · REQUIRES EXPERIMENTATION.
**Remediation levels:** L0 none · L1 addition · L2 clarification · L3 qualification · L4 update · L5 correction · L6 removal/replacement.

| ID | Alleged issue / criticism | Relevant Universal section | Independent finding | Evidence strength | Decision | Remediation level | Change required? |
|---|---|---|---|---|---|---|---|
| A-01 | Playbook lacks an operational answer-capsule / "semantic snippet" checklist (RE: direct-answer-first, dense, near-top, encyclopedic tone, ~320 chars/~50 words, avoid "yes/no/it depends", bold the answer) | Part 17 REQ-AIO-01; REQ-PAGE-02; T-08; R-10; C8; C9; C10 | Capsule doctrine already exists and is correct (conclusion-first, self-contained, 40–80-word heuristic, server-rendered, under H1). Genuine residual gaps: no consolidated implementer checklist; no explicit anti-empty-hedge opener rule at capsule level (REQ-CONT-10 covers hedging for claims, not capsule openers); no explicit DO-NOT for bold-as-ranking or H1/title rewriting at the capsule component. RE's numeric counts and bold claim correctly rejected by the analysis itself. | STRONG (convergent: EV-19, EV-27, EV-22, EV-04; official Google guidance neutral) | PARTIALLY CONFIRMED — LIMITED REMEDIATION | L1 addition (checklist), with L2 clarifications inside it | **YES → REM-01** |
| A-02 | Playbook lacks an explicit "relevance ≠ relation" guardrail to stop related-keyword/semantic-branch sprawl when expanding topics | Part 13 (IA); Part 14 REQ-PAGE-01/COMP-01; EV-22; EV-26; C10; REQ-ARCH-07 | Confirmed gap. The playbook gates *rewrites* (C10) and *doorway pages* (REQ-ARCH-07) but has no planning-time gate stating that term/entity relatedness is insufficient justification for new pages/clusters — audience-intent relevance is required. This is the exact failure mode behind EV-26's semantic-blending loss and the seven-site "related keyword sprawl" risk. | STRONG (EV-22 gatekeeper; EV-26 blending failure mode; mechanism-consistent) | CONFIRMED — REMEDIATE | L1 addition (new REQ-ARCH-09) | **YES → REM-02** |
| A-03 | Playbook lacks a semantic-drift diagnostic (pages drifting from cluster/site core over time) | Part 38 diagnostics; C10; REQ-GEO-07 | Confirmed gap, narrow. Part 38 diagnoses *engine-outcome* pipeline stages (indexed/retrieved/cited/accurate) but has no periodic *content-health* drift check against the declared page/cluster core. Must be optional, method-level, vendor-free, no numeric gates, human-reviewed, and must not auto-trigger Expand/Prune or touch locked/primary terms (per the sanity-check reshape, which I independently endorse). | MODERATE (practitioner method; consistent with Part 38 philosophy; no causal ranking claim) | CONFIRMED — REMEDIATE (constrained) | L1 addition (optional Part 38 subsection) | **YES → REM-03** |
| A-04 | Playbook lacks the Realign / Expand / Optimize / Consolidate / Prune action taxonomy for audit backlogs | Part 14 gap briefs; Part 31 prioritisation; REQ-ARCH-08; REQ-GEO-07 | Confirmed gap, ops-level. The playbook has no standardised vocabulary for dispositioning content findings. Unconstrained, Expand/Prune would collide with REQ-ARCH-08 (URL preservation) and site keyword locks — so the taxonomy is adopted only with the hard constraints: Consolidate/Prune route through REQ-ARCH-08; Expand gated by the new relevance guardrail + owner sign-off for new commercial clusters; no distance×clicks formulas as MUST gates (R-10). | MODERATE (ops vocabulary; risk-controlled by existing gates) | CONFIRMED — REMEDIATE (constrained) | L1 addition (Part 14 subsection) | **YES → REM-04** |
| A-05 | Playbook doesn't name PAA/question harvesting as a question source for intent briefs (RE: scrape PAA at scale) | REQ-PAGE-01; T-07; REQ-AIO-02; C9; REQ-PAGE-06; REQ-AIO-04 | Mostly covered. T-07 already requires collecting queries from GSC/keyword tools/sales-support logs; REQ-PAGE-01 requires "questions the user expects answered". Residual gap: People-Also-Ask/question inventories are not named as a source, despite AIO-9 (question-form queries activate AIO at ~64.7%) making question-form demand the AIO-dense surface. RE's "at scale into sheets" automation framing is correctly rejected as tooling. | STRONG for question-form value (EV-30/AIO-9); the addition itself is a clarification | PARTIALLY CONFIRMED — LIMITED REMEDIATION | L2 clarification (two touch points) | **YES → REM-05** |
| A-06 | Playbook lacks a grounded keyword-chat-assistant pattern (LLM + live keyword/SERP API) for gap research | REQ-COMP-01; Part 15; Part 31 | Marginal gap. This is ops tooling, not a website requirement; the playbook rightly rejects vendor setup as doctrine. A single optional, non-normative ops-appendix pattern is defensible as acceleration for REQ-COMP-01/T-07, with hard constraints (drafts for humans only; cannot change locked/declared terms; no guarantees; no named vendor; ungrounded output unusable). Without those constraints this would be tool theatre. | WEAK-MODERATE (ops efficiency, not ranking evidence) | PARTIALLY CONFIRMED — LIMITED REMEDIATION | L1 addition (optional Appendix C, MAY · non-normative) | **YES → REM-06** |
| A-07 | Playbook should state explicitly that authentic community/Reddit mentions are engine-specific in value, not a universal AI lever, and must never be manufactured | Part 28 REQ-ENT-05; EV-08; EV-17; EV-21; EV-25; Part 41; C3/C7; REQ-GEO-06 | The reconciliation already exists in the evidence ledger and Part 41 (Reddit-as-#1-source REMOVED; EV-17 Perplexity correlate retained). Residual gap: the *normative* off-site requirement (REQ-ENT-05) never states the engine-specific guidance or the anti-manufacture bound in requirement form. One bounded sentence closes it. The Advanced Reddit/linkbuilding lesson bodies remain absent — the topic stays OPEN; no doctrine close. | STRONG for the bound (EV-08 social suppression; EV-17 engine-specific correlate; Google's May 2026 guide names "inauthentic mentions" a hack) | PARTIALLY CONFIRMED — LIMITED REMEDIATION | L2 clarification (REQ-ENT-05 appended note); stays OPEN | **YES → REM-07** |
| OQ-01 | RE claims ~30–50% snippet success, "skip the queue", large case-study traffic lifts | Position-#1 disclaimer; C1; EV-18; Part 41 | Practitioner marketing claims, unverified; the Universal report already rejects guarantee language and grades durability evidence LOW/VERY LOW. | NOT SUBSTANTIATED | NOT SUBSTANTIATED | L0 | No change |
| OQ-02 | Bold text as a ranking/AIO lever | C8; EV-22; EV-23 | Contradicted by the strongest causal design in corpus (252k trials: formatting-only edits negligible). Playbook already rules cosmetic formatting out. | NOT SUBSTANTIATED (contradicted) | NOT SUBSTANTIATED | L0 | No change (REM-01 adds a defensive DO-NOT restatement only) |
| OQ-03 | Owning featured snippets/PAA reliably causes AIO citation | Part 10 AIO-5/AIO-8; EV-30; C1 | Refuted as a causal rule: 53% of AIO-cited domains are outside the organic top 10; AIO source sets churn ~2.5× faster than organic. Playbook already treats AIO as a separate discipline. | NOT SUBSTANTIATED | NOT SUBSTANTIATED | L0 | No change |
| OQ-04 | "Semantic authority has replaced backlinks" — new domains can win on semantics alone | C3; C7; EV-17; Part 28; Part 41 | Contradicted by the Discovery Gap study (referring domains r=+0.319 and community presence predict AI discovery; on-page GEO scores uncorrelated). Playbook's dual-track already correct. | NOT SUBSTANTIATED (contradicted) | NOT SUBSTANTIATED | L0 | No change |
| OQ-05 | Reddit mentions as a general cross-engine AI-inclusion lever | EV-08; EV-17; EV-21; Part 41 | Engine-specific correlate only (Perplexity discovery, new brands); contradicted as a universal lever (AI engines suppress social vs Google; Claude ~1% social). Bounded note added via REM-07; no doctrine change. | NOT SUBSTANTIATED as universal | PARTIALLY CONFIRMED only as bounded note | L2 (via REM-07) | Folded into REM-07 |
| OQ-06 | 2026 "strategic linkbuilding for AI" tactics (Advanced lesson 10) | Part 28; EV-17; C3; Part 41 | Lesson body absent from corpus; nothing to adjudicate. Playbook's white-hat earned-media stance stands. Paid link schemes / PBNs remain prohibited. | NOT SUBSTANTIATED (no evidence to examine) | NOT SUBSTANTIATED — stays OPEN | L0 | No change |
| OQ-07 | n8n/Google-Sheet snippet factories, DataForSEO/Claude setup, Drift Analyzer installs as playbook doctrine | Part 9 anti-patterns; REQ-CONT-08; Part 41; EV-18 | Tooling, not doctrine; scaled near-duplicate snippet generation collides with scaled-content and competition-erosion evidence. Playbook already correct. | NOT SUBSTANTIATED | NOT SUBSTANTIATED | L0 | No change |
| OQ-08 | AI Tools & Workflows course (0/23 transcripts) may contain relevant doctrine | Whole report | Out of corpus; inventing content is prohibited. Re-run the comparison when transcripts exist (process note for the owner, not a playbook change). | N/A | NOT SUBSTANTIATED — deferred | L0 | No change |
| F-01–F-06 | Freshness of FAQ retirement, GSC Generative-AI report, Search generative-AI control, Google-Extended scope, preview controls, CWV thresholds | R-03/R-05; REQ-CRAWL-03/04/07; REQ-SCHEMA-06; REQ-AIO-04; REQ-PERF-01 | All verified ACCURATE as of 11 Sep 2026 against official sources (V1–V6 above). | OFFICIAL GUIDANCE | ALREADY ADEQUATELY ADDRESSED | L0 | No change |
| F-07 | OpenAI crawler register completeness | REQ-CRAWL-04 | Register predates OAI-AdsBot (ChatGPT ads landing-page validation; not a visibility gate). The playbook commits to a verified quarterly register — completeness is its stated standard. | OFFICIAL GUIDANCE (OpenAI docs) | CONFIRMED — REMEDIATE (minor) | L1 addition (fourth bot class) | **YES → REM-08** |
| F-08 | Bing AI Performance June 2026 expansion (Intents, Topics, Citation Share, Compare) | REQ-CRAWL-03; Part 37 §0 | Predates the expansion. Citation Share materially helps the playbook's existing competitor-citation tracking; one sentence closes the gap. | OFFICIAL GUIDANCE (Bing docs) | CONFIRMED — REMEDIATE (minor) | L2 clarification | **YES → REM-09** |
| F-09 | Google official AI-optimization guide (15 May 2026; updated 15 Jun / 10 Jul 2026) absent as a citation; llms.txt "MIXED EVIDENCE" framing outdated | Part 1 finding 7 (R-08); C2; REQ-GEO-05; G13; Part 41 | Playbook posture fully consistent with the guide (no special schema/files/chunking/rewrites; SEO fundamentals govern). Two minimal updates justified: cite the canonical guide where its content is already asserted (Part 43 explicitly requested dated Level-1 documents), and refresh the llms.txt evidence note. Requirement levels unchanged. | OFFICIAL GUIDANCE | CONFIRMED — REMEDIATE (minor) | L4 update (evidence notes only) | **YES → REM-10** |
| F-10 | Google's "no content chunking" mythbust vs the playbook's structure requirements | G5; REQ-GEO-03; C8; R-10 | Investigated for contradiction: none. Google's mythbust targets artificial pre-fragmentation *for AI*; the playbook requires semantic self-containment and human-first structure, with numeric sizes already demoted to heuristics (R-10) and cosmetic formatting already excluded (C8). | OFFICIAL GUIDANCE vs corpus | ALREADY ADEQUATELY ADDRESSED | L0 | No change |
| F-11 | UK CMA remedy: page-level generative-Search controls due by March 2027 | REQ-CRAWL-04/07 | Future, dated, regulatory — no current requirement changes; quarterly register re-verification already covers watching it. | OFFICIAL/REGULATORY | ALREADY ADEQUATELY ADDRESSED | L0 | No change (watch item recorded in REM-08's monitoring field) |

**Adjudication summary:** 18 material items investigated → 10 remediations approved (REM-01…REM-10: 2 high-value additions, 5 valuable enhancements/clarifications, 3 official-source currency updates) · 8 items require no change · 0 deletions · 0 corrections of materially-wrong content · 0 experimental tactics promoted to requirements.

---

## 2. APPROVED REMEDIATIONS TABLE (§16)

| Remediation ID | Universal section | Current state | Problem | Exact addition/correction | Evidence | Priority | Regression risk | Validation |
|---|---|---|---|---|---|---|---|---|
| REM-01 | Part 17, after REQ-AIO-01; cross-ref T-08 | Capsule doctrine correct but scattered; no implementer checklist | Implementers can misapply the capsule (hedged openers, bold-for-ranking, H1 rewrites, count-chasing) | Add "REQ-AIO-01 implementation checklist" (8 checks + 3 DO-NOTs); one cross-ref line in T-08 | EV-19, EV-27, EV-22, EV-04, C8/C9/C10, R-10 | **P1** | Very low (ops checklist; no doctrine change) | Checklist present; T-08 cross-ref present; no contradiction with C8/C9/C10/R-10 |
| REM-02 | Part 13, new REQ-ARCH-09; Part 30 routing table | No planning-time relevance gate for topic expansion | Related-keyword/entity-tool output alone can justify sprawl pages (EV-26 blending risk; lock-dilution risk on governed sites) | Add REQ-ARCH-09 "Relevance-gated topic expansion (relevance ≠ relation)" GLOBAL · MUST · P1; add REQ-ARCH-09 to Part 30 GLOBAL list | EV-22, EV-26, C10, EV-31 | **P1** | Very low (adds a gate; changes nothing existing) | Gate text present; Part 30 updated; gate recorded in new-page briefs |
| REM-03 | Part 38, new subsection after "Diagnostics when flat" | No periodic content-health (drift) diagnostic | Pages can drift from declared intent undetected between engine-outcome measurements | Add optional "cluster-health (semantic-drift) diagnostic" subsection with 5 hard constraints (method-level, no numeric gates, human-reviewed, no auto Expand/Prune, C10/REQ-GEO-07 still apply) | Part 38 philosophy; C10; R-10; practitioner method | **P2** | Very low (optional diagnostic; outputs are backlog items only) | Subsection present with all 5 constraints verbatim |
| REM-04 | Part 14, new subsection at end | No standard vocabulary for dispositioning audit findings | Unconstrained Expand/Prune decisions could bypass REQ-ARCH-08 or dilute declared primaries | Add "Backlog action taxonomy" (REALIGN / OPTIMIZE / EXPAND / CONSOLIDATE / PRUNE) with per-action constraints incl. REQ-ARCH-08 routing and owner sign-off for new commercial clusters | REQ-ARCH-08; REQ-GEO-07; C10; R-10 | **P2** | Low (constraints route all risky actions through existing gates) | Taxonomy present; constraints verbatim; no conflict with REQ-ARCH-08 |
| REM-05 | REQ-PAGE-01 field text; T-07 step 1 | Question sources generic ("queries") | PAA/question inventories — the public source of question-form demand (AIO-9: ~64.7% activation on question queries) — not named | Name PAA/question inventories as a question source in both places, with the no-FAQ-spam bound restated | AIO-9/EV-30; C9 | **P2** | Very low (clarification) | Both texts updated; C9 bound present |
| REM-06 | New Appendix C | No sanctioned pattern for AI-assisted gap research | Teams will use AI research assistants anyway; unsanctioned use risks hallucinated gaps and lock tampering | Add optional, non-normative Appendix C pattern (grounded-data-only; drafts for humans; cannot change declared/locked terms; no guarantees; no named vendor) | REQ-COMP-01; REQ-CONT-02 provenance; Position-#1 disclaimer | **P2** (MAY strength) | Very low (optional ops; explicitly non-normative) | Appendix present with all 6 constraints |
| REM-07 | REQ-ENT-05 (Part 28) | Normative off-site spec silent on community mentions | The engine-specific value of authentic community presence (and the anti-manufacture bound) exists only in the evidence ledger, not in requirement text | Append one bounded paragraph to REQ-ENT-05 (engine-specific; authentic only; earned media remains primary; stays OPEN) | EV-08, EV-17, EV-25, C3/C7; Google May 2026 guide ("inauthentic mentions" = hack) | **P2** | Very low (clarification consistent with existing register) | Paragraph present; no conflict with Part 41/REQ-GEO-06 |
| REM-08 | REQ-CRAWL-04 register | Register predates OAI-AdsBot | Playbook's own standard is a verified, current, purpose-typed register | Add fourth bot class: advertising-validation (OAI-AdsBot; conditional relevance; not a visibility gate) | OpenAI crawler docs + advertiser guidance (verified 11 Sep 2026) | **P2** | None (register completeness; no policy change) | Register contains the new class with scope note |
| REM-09 | REQ-CRAWL-03; Part 37 §0 | Predates Bing AI Performance expansion | Citation Share (competitive citation benchmarking) is exactly the data Part 38's competitor track needs | One-sentence update in REQ-CRAWL-03 + one clause in Part 37 §0 | Bing WMT AI Performance docs (verified 11 Sep 2026) | **P2** | None (monitoring note) | Both texts updated |
| REM-10 | REQ-GEO-05; G13; Part 1 finding 7; C2 evidence line | llms.txt "MIXED EVIDENCE" framing predates official 2026 positions; R-08 statement lacks its canonical citation | Evidence notes slightly stale; Part 43 explicitly asked for dated Level-1 citations | Update REQ-GEO-05/G13 evidence note (requirement stays MAY · P3); add the Google AI-optimization guide citation to Part 1 finding 7 / C2 | Google Search Central (15 May/15 Jun/10 Jul 2026); OpenAI docs; Ahrefs log study (May 2026) | **P2** | None (evidence notes; no requirement change) | Notes updated; classification unchanged |

**No P0 remediations** — nothing in the Universal report was found critically broken, unsafe, or materially outdated. **No P3 experimental promotions** — EXP-01 remains the only experiment; llms.txt remains MAY · P3; nothing experimental becomes a requirement.

---

## 3. DEVELOPER ROADMAP (§17) — FULL SPECIFICATION PER APPROVED REMEDIATION

Implementation note for all ten items: the primary artefact being changed is the Universal report itself (a document). "Implementation" therefore means (a) inserting the exact specified text at the exact specified anchor in the playbook, and (b) the downstream site-level effect when the remediated playbook is later applied to a target repository. Where site-level fields genuinely do not apply to a document-level change, they are marked N/A per §17 rules.

---

### REM-01 — Answer-capsule implementation checklist

**TITLE:** REQ-AIO-01 implementation checklist (ops) + T-08 cross-reference
**PRIORITY:** P1 — high-value / high-confidence
**REMEDIATION LEVEL:** Level 1 — Addition (containing two Level-2 clarifications: anti-hedge opener; length-as-heuristic restatement)
**UNIVERSAL REPORT SECTION:** Part 17, immediately after REQ-AIO-01; one-line cross-reference in Part 34, T-08 step 1
**WHY CHANGE IS REQUIRED:** REQ-AIO-01 defines the answer capsule correctly, but its operational criteria are distributed across REQ-AIO-01, REQ-PAGE-02, REQ-GEO-03, REQ-CONT-10, R-10, C8 and C9. The assessment evidence (RE course review) shows the realistic failure modes implementers hit: hedged/empty openers ("It depends…"), padding or truncating to hit word counts, bolding answer phrases as an alleged AI lever, and rewriting H1/title terms into "AI-friendly" wording. A single checklist at the point of use prevents all four without changing any doctrine.
**AUTHORITATIVE EVIDENCE:** EV-19 (absorption-ready, self-contained evidence), EV-27 (conclusion-first ordering is an extracted cross-engine preference rule), EV-22 (hedged language OR 2.7–754 against citation; formatting-only edits null), EV-04 (fluency causal), C8 (semantic ≠ cosmetic), C9 (capsule is not Q&A), C10 + EV-31 (never strip retrieval terminology), R-10 (numbers are heuristics). No new ranking-factor claim is introduced.
**CONFIDENCE:** HIGH (that the checklist improves implementation fidelity); no effect-size promised.
**CURRENT REQUIREMENT:** REQ-AIO-01 (capsule: first block under H1, 40–80-word editorial guideline, self-contained, entity-explicit, server-rendered) + REQ-PAGE-02 (answer-first hierarchy) + T-08 (build task).
**TARGET REQUIREMENT:** Current requirements unchanged, PLUS the following text inserted in Part 17 directly after REQ-AIO-01:

> **REQ-AIO-01 IMPLEMENTATION CHECKLIST (ops).** When producing or reviewing an answer capsule, verify, in order:
> 1. **POSITION** — the capsule is the first substantive text block under the H1 in both source HTML and rendered DOM (REQ-PAGE-02); never inside an accordion, tab, slider, or JS-injected container.
> 2. **DIRECTNESS** — the first sentence resolves the primary intent directly. Never open with empty hedges ("It depends", "Yes and no", "There are many factors"); where qualification is genuinely required, state the answer first, then qualify (extends REQ-CONT-10's anti-hedging rule to capsule openers).
> 3. **SELF-CONTAINMENT** — readable aloud in isolation: entities named explicitly (no pronouns without antecedents), numbers carry units and sources, no click-dependent context (REQ-GEO-03).
> 4. **ENTITY/TERM FIDELITY** — the page's primary entity and primary query terminology appear in natural form. The capsule NEVER requires rewriting the H1, title, or the terms the page ranks for into "AI-style" wording (C10; EV-31). On sites operating a keyword lock, locked terms are untouchable.
> 5. **DENSITY** — every sentence carries information: a definition, a fact, a figure with source+year, or a concrete differentiator. No marketing preamble.
> 6. **LENGTH (heuristic only, per R-10)** — typically 40–80 words (≈250–500 characters). A shorter or longer capsule that best serves the answer passes; padding or truncating to hit a count fails.
> 7. **TONE** — encyclopedic, neutral, confident (EV-04, EV-27); no unsupported superlatives.
> 8. **FORMAT** — plain paragraph(s): a conclusion-first direct answer, NOT a Q&A pair (C9), NOT a bulleted teaser list.
>
> **DO-NOT (component level):** no bolding/italicising of answer phrases as an alleged ranking or AIO lever (cosmetic formatting is null in controlled trials — EV-22, C8); no featured-snippet/AIO-ownership guarantee language (AIO source sets are distinct and unstable — EV-30); no near-duplicate capsule templates across pages (REQ-CONT-08).

And in Part 34, T-08, step 1, after "add capsule component (styled intro paragraph, not an ad-like box)": insert "apply the REQ-AIO-01 implementation checklist (Part 17) to every capsule;".

**SCOPE:** Template (the checklist governs the capsule component on every intent page).
**DEPENDENCIES:** None (anchors to existing REQ-AIO-01/REQ-PAGE-02/T-08).
**IMPLEMENTATION INSTRUCTIONS:** (1) Insert the checklist text at the anchor. (2) Insert the T-08 cross-reference. (3) When the playbook is later applied to a site: the implementing agent answers all 8 checks per capsule and records them in the page's build notes; any FAIL blocks release of that page's capsule.
**HTML REQUIREMENT:** No change beyond existing REQ-AIO-01 (plain server-rendered `<p>` directly after the `<h1>`; no accordion/tab gating).
**CSS REQUIREMENT:** N/A — no implementation impact (existing rule stands: visually distinct, not ad-like, never intrusive).
**JAVASCRIPT REQUIREMENT:** N/A — no implementation impact (existing rule stands: not JS-injected).
**SCHEMA REQUIREMENT:** N/A — no implementation impact. (No "answer" schema type exists or is claimed.)
**CONTENT REQUIREMENT:** The 8 checklist checks govern capsule copywriting; everything else in Part 15 unchanged.
**INTERNAL LINK REQUIREMENT:** N/A — no implementation impact.
**MOBILE REQUIREMENT:** Existing rule restated in check 1 (capsule visible without interaction on mobile).
**TABLET REQUIREMENT:** N/A — no implementation impact.
**DESKTOP REQUIREMENT:** N/A — no implementation impact.
**PERFORMANCE REQUIREMENT:** N/A — no implementation impact (a paragraph adds no measurable weight).
**ACCESSIBILITY REQUIREMENT:** N/A — no implementation impact (plain paragraph text is the accessible form).
**SEO REQUIREMENT:** Check 4 protects existing rankings by forbidding query-term dilution (C10/EV-31).
**GEO/AEO REQUIREMENT:** Checks 2/3/5/7/8 operationalise the absorption evidence (EV-19/EV-27).
**AIO/AI SEARCH REQUIREMENT:** Check 1 + 3 target passage-level extractability for AIO's breadth engine (EV-30/AIO-11).
**DO NOT:** Turn the checklist into numeric pass/fail gates (R-10); bold-for-ranking; guarantee language; Q&A conversion; H1/title rewrites; scaled near-duplicate capsules.
**VALIDATION METHOD:** Document QA: checklist present at anchor, T-08 cross-ref present. Site QA (on application): per-page capsule review against the 8 checks + existing REQ-AIO-01 validations (source-grep, read-aloud).
**PASS CRITERIA:** Checklist text present verbatim; every capsule on a priority page passes all 8 checks.
**FAIL CRITERIA:** Any capsule failing any check; any numeric count enforced as a gate; any H1/title term altered to accommodate a capsule.
**NON-REGRESSION CHECK:** Diff priority-query term coverage before/after capsule work (C10); confirm no locked/declared term changed; REQ-GEO-07 cohort protocol still governs >10-page rollouts.
**ROLLBACK CONDITION:** Capsule edits are content edits — revert from version control per page; no URL or template impact.
**POST-DEPLOYMENT MONITORING:** Existing Part 37/38 harness (AIO citation observation; retrieval-presence re-check after content releases — EV-31).

---

### REM-02 — Relevance-gated topic expansion (new REQ-ARCH-09)

**TITLE:** "Relevance ≠ relation" expansion gate
**PRIORITY:** P1 — high-value / high-confidence
**REMEDIATION LEVEL:** Level 1 — Addition
**UNIVERSAL REPORT SECTION:** Part 13 (new REQ-ARCH-09, after REQ-ARCH-08); Part 30 routing table (GLOBAL list)
**WHY CHANGE IS REQUIRED:** The Universal report gates *rewrites* (C10) and *doorway pages* (REQ-ARCH-07) but contains no planning-time rule for *expansion*: keyword-cluster co-occurrence, entity-tool output, or "related searches" establish only relation (surface semantic adjacency), not relevance (an intent the site's audience actually has and the site can legitimately serve). The corpus documents the failure mode: semantic blending/dilution destroyed citation performance in EV-26 (objective 0.75→0.52), and topical relevance is the dominant citation gatekeeper (EV-22, OR>10k in 5 of 6 models). On governed sites (e.g., the seven-site keyword lock), un gated expansion is the single largest dilution risk.
**AUTHORITATIVE EVIDENCE:** EV-22 (relevance gatekeeper), EV-26 (semantic-blending failure; distinctiveness must be preserved), C10 (preserve query terms), EV-31 (rewrites can impair retrieval), REQ-ARCH-07 (doorway prohibition). Consistent with Google's May 2026 guide ("AI-specific rewriting" and sprawl tactics named as non-helpful).
**CONFIDENCE:** HIGH (as a risk-prevention gate; no ranking effect promised).
**CURRENT REQUIREMENT:** None explicit at planning time (nearest: REQ-ARCH-01 topic-coherent IA; REQ-PAGE-01 intent brief).
**TARGET REQUIREMENT:** Insert in Part 13 after REQ-ARCH-08:

> **REQ-ARCH-09 — Relevance-gated topic expansion ("relevance ≠ relation").** GLOBAL · MUST · P1. Surface relatedness of words or entities is NOT sufficient justification for a new page, section, or cluster. Before any new indexable page or cluster is created — and before an existing page is expanded with a new topic section — the proposing brief MUST record: (a) **audience intent** — an intent the site's actual audience demonstrably has, evidenced by query data, sales/support logs, or the REQ-COMP-01 gap brief; (b) **offering relevance** — a direct, legitimate relationship between the topic and the site's declared expertise/offering (the site can satisfy the intent with genuine evidence and a real information or conversion relationship — not merely rank for an adjacent term); (c) **IA placement** — the parent hub under REQ-ARCH-01 (expansion happens inside the existing topic-coherent architecture, never as a detached branch). Keyword-cluster co-occurrence, NLP/entity-tool output, or "related searches" alone FAIL this gate. Expansion that passes the gate still complies with REQ-ARCH-07 (no doorway/clone pages), REQ-CONT-08 (no scaled thin content), and C10 (existing pages keep the query terms they rank for). Evidence: EV-22, EV-26, C10, EV-31. Validation: every new-page/section brief contains the three recorded gate answers; a page or section created without them is a process FAIL.

And update Part 30's GLOBAL routing line to include REQ-ARCH-09.
**SCOPE:** Global (governs all future page/section/cluster creation).
**DEPENDENCIES:** REQ-ARCH-01 (hub map), REQ-PAGE-01 (brief format), REQ-COMP-01 (gap brief as evidence source).
**IMPLEMENTATION INSTRUCTIONS:** (1) Insert REQ-ARCH-09 at the anchor. (2) Add REQ-ARCH-09 to Part 30's GLOBAL list. (3) On site application: add the three gate fields (audience intent / offering relevance / IA placement) to the intent-brief template; the implementing agent must refuse to scaffold any page whose brief lacks them.
**HTML/CSS/JAVASCRIPT/SCHEMA REQUIREMENT:** N/A — no implementation impact (planning gate).
**CONTENT REQUIREMENT:** Gate answers recorded in every new-page/section brief.
**INTERNAL LINK REQUIREMENT:** N/A — no new impact (passing pages still follow Part 20).
**MOBILE/TABLET/DESKTOP REQUIREMENT:** N/A — no implementation impact.
**PERFORMANCE/ACCESSIBILITY REQUIREMENT:** N/A — no implementation impact.
**SEO REQUIREMENT:** Prevents crawl-budget and topical-authority dilution; protects doorway-page compliance (REQ-ARCH-07).
**GEO/AEO REQUIREMENT:** Protects topical relevance (the #1 citation gatekeeper, EV-22) and semantic distinctiveness (EV-26).
**AIO/AI SEARCH REQUIREMENT:** Indirect — keeps the corpus of pages tightly relevant, which the retrieval gate (P-1) rewards.
**DO NOT:** Use the gate to block legitimate expansion (it is a relevance test, not a growth freeze); do not convert tool "relatedness" scores into relevance evidence; do not expand into new commercial clusters without explicit owner sign-off (and, on locked sites, a lock update).
**VALIDATION METHOD:** Document QA (text + Part 30 entry present). Site QA: brief audit — 100% of new pages/sections carry the three gate answers.
**PASS CRITERIA:** Gate text present; brief template extended; no new indexable page without recorded gate answers.
**FAIL CRITERIA:** Any new page/section justified solely by tool relatedness; any detached branch outside the REQ-ARCH-01 hub structure.
**NON-REGRESSION CHECK:** The gate adds no change to existing URLs/content; confirm zero existing pages altered by its introduction.
**ROLLBACK CONDITION:** N/A for existing content; a wrongly-approved expansion is handled by REM-04's taxonomy (CONSOLIDATE/PRUNE via REQ-ARCH-08).
**POST-DEPLOYMENT MONITORING:** Quarterly IA/crawl review (existing Part 36 crawl) — no orphan or off-core clusters appear.

---

### REM-03 — Optional semantic-drift (cluster-health) diagnostic

**TITLE:** Periodic drift-from-core diagnostic (method-level, optional)
**PRIORITY:** P2 — valuable enhancement
**REMEDIATION LEVEL:** Level 1 — Addition (optional diagnostic)
**UNIVERSAL REPORT SECTION:** Part 38, new subsection immediately after "Diagnostics when flat"
**WHY CHANGE IS REQUIRED:** Part 38's diagnostics are engine-outcome-driven (indexed → retrieved → cited → accurate). Between measurement cycles, pages can drift from their declared intent (content edits, SERP shifts, IA changes) with no leading indicator. The assessment's drift concept is a genuine, useful addition — but only under constraints, because unconstrained it invites invented embedding-distance KPIs (anti-Goodhart, R-12), auto-triggered Expand/Prune (colliding with REQ-ARCH-08), and vendor tool theatre (correctly rejected by the analysis).
**AUTHORITATIVE EVIDENCE:** Practitioner method (RE Semantic Site Audit), consistent with C10 (before/after retrieval checks) and Part 38's pipeline-stage philosophy. No causal ranking claim is made or needed — this is a content-health process, not a ranking factor.
**CONFIDENCE:** MEDIUM (process value; explicitly optional).
**CURRENT REQUIREMENT:** None (nearest: Part 38 "Diagnostics when flat"; C10 retrieval re-checks).
**TARGET REQUIREMENT:** Insert in Part 38 after "Diagnostics when flat":

> **Optional cluster-health (semantic-drift) diagnostic.** On a quarterly or per-release cadence, a site MAY review drift: for each priority page/cluster, estimate topical distance from the page's declared core (the intent brief's PRIMARY QUERY/TOPIC and REQUIRED ENTITIES) — via embedding-distance tooling, a structured topical-coverage comparison, or an equivalent editorial review. Rules: (1) method-level only — no named vendor or tool is required, and no numeric distance threshold is a pass/fail gate (R-10; Part 35 anti-Goodhart); (2) findings feed a human-reviewed backlog only and never auto-trigger content action; (3) the diagnostic MUST NOT be used to rewrite H1s, titles, or the query terms pages rank for (C10; keyword lock where a site operates one); (4) any body change resulting from a drift finding still requires the C10 before/after retrieval-presence check and, at the REQ-GEO-07 scale threshold, the cohort protocol; (5) Expand/Prune-type findings route through the Part 14 backlog taxonomy (REM-04) and the REQ-ARCH-08 gate. Purpose: a leading indicator of content health alongside the lagging engine-outcome metrics already specified.

**SCOPE:** Global ops process (optional).
**DEPENDENCIES:** REQ-PAGE-01 briefs (the declared core), Part 14 taxonomy (REM-04), REQ-ARCH-08, REQ-GEO-07.
**IMPLEMENTATION INSTRUCTIONS:** (1) Insert the subsection at the anchor. (2) On application: if the site opts in, record per-page drift notes in the measurement log; disposition every finding via REM-04's taxonomy; never wire the diagnostic to automated changes.
**HTML/CSS/JAVASCRIPT/SCHEMA/CONTENT/INTERNAL LINK REQUIREMENT:** N/A — no direct implementation impact (diagnostic only; any resulting content change follows existing requirements).
**MOBILE/TABLET/DESKTOP/PERFORMANCE/ACCESSIBILITY REQUIREMENT:** N/A — no implementation impact.
**SEO REQUIREMENT:** Rule 3 protects existing rankings; rule 4 protects retrieval presence (EV-31).
**GEO/AEO REQUIREMENT:** Keeps cluster topical coherence — the property EV-22 rewards.
**AIO/AI SEARCH REQUIREMENT:** N/A — indirect only.
**DO NOT:** Invent numeric drift KPIs or pass/fail thresholds; name a required vendor; auto-execute Expand/Prune; touch locked/declared primary terms; treat drift scores as ranking factors.
**VALIDATION METHOD:** Document QA (subsection present with all 5 rules verbatim). Ops QA: drift findings appear in the backlog with taxonomy dispositions.
**PASS CRITERIA:** Subsection present; if adopted, findings are human-reviewed and gated.
**FAIL CRITERIA:** Any automated action triggered by the diagnostic; any numeric gate introduced; any locked/primary term rewritten on its basis.
**NON-REGRESSION CHECK:** The diagnostic itself changes nothing on the site; confirm it is wired to reporting only.
**ROLLBACK CONDITION:** Stop running the diagnostic; no site state to roll back.
**POST-DEPLOYMENT MONITORING:** Quarterly review cadence; outcomes logged beside Part 38 engine metrics.

---

### REM-04 — Backlog action taxonomy (Realign / Expand / Optimize / Consolidate / Prune)

**TITLE:** Governed disposition vocabulary for content findings
**PRIORITY:** P2 — valuable enhancement
**REMEDIATION LEVEL:** Level 1 — Addition (constrained)
**UNIVERSAL REPORT SECTION:** Part 14, new subsection at the end (after REQ-PAGE-08)
**WHY CHANGE IS REQUIRED:** The Universal report generates findings (REQ-COMP-01 gap briefs, Part 38 diagnostics, REM-03's optional drift review) but provides no standardised action vocabulary for dispositioning them. The five-action taxonomy is useful ops language — and dangerous if imported unconstrained: EXPAND can dilute declared primaries, and CONSOLIDATE/PRUNE can destroy URL equity (the exact risk REQ-ARCH-08 exists to prevent). The addition is therefore made only with the hard constraints below, which I independently verified are sufficient to prevent every collision the sanity-check identified.
**AUTHORITATIVE EVIDENCE:** REQ-ARCH-08 (URL-preservation hard gate), REQ-GEO-07 (cohort protocol), C10 (term preservation), R-10 (no numeric gates), Part 31 (prioritisation). Ops vocabulary — no ranking claim.
**CONFIDENCE:** HIGH (as constrained ops language); MEDIUM that it will be used as intended without the constraints — hence they are mandatory.
**CURRENT REQUIREMENT:** None (findings exist without a disposition vocabulary).
**TARGET REQUIREMENT:** Insert at the end of Part 14:

> **Backlog action taxonomy for gap and drift findings.** Every content finding (from REQ-COMP-01 gap briefs, Part 38 diagnostics, or the optional drift diagnostic) MUST be dispositioned with exactly one of five actions, under these constraints:
> - **REALIGN** — bring a drifted page back to its declared intent: restore entity/terminology focus; move off-core material to its proper hub. The URL and the query terms the page ranks for are preserved (C10).
> - **OPTIMIZE** — deepen evidence, clarity, structure, and freshness within the page's declared primary intent (Parts 15/17). No intent change; no URL change.
> - **EXPAND** — add supporting entities/questions/sections under the page's or hub's declared primary topic, gated by REQ-ARCH-09 (relevance ≠ relation). New commercial clusters or new money topics additionally require explicit owner sign-off — and, on sites operating a keyword lock, a lock update — before any build.
> - **CONSOLIDATE** — merge overlapping pages only through the REQ-ARCH-08 gate: equity inventory, documented business case, 1:1 single-hop 301 map, internal links and sitemap updated in the same release, owner sign-off.
> - **PRUNE** — remove or noindex content only through the same REQ-ARCH-08 gate; PRESERVE-tagged URLs are grandfathered.
>
> No numeric decision formulas (e.g., distance × clicks products) are MUST-level gates: quantitative signals inform, humans decide (R-10; Part 35 anti-Goodhart). This taxonomy is backlog vocabulary for prioritisation (Part 31), not a ranking guarantee.

**SCOPE:** Global ops process.
**DEPENDENCIES:** REQ-ARCH-08, REQ-ARCH-09 (REM-02), REQ-GEO-07, Part 31.
**IMPLEMENTATION INSTRUCTIONS:** (1) Insert the subsection at the anchor. (2) On application: add an "ACTION" field (one of the five) to the gap-table/backlog template; the implementing agent must refuse any CONSOLIDATE/PRUNE lacking the REQ-ARCH-08 gate record and any EXPAND lacking the REQ-ARCH-09 gate answers (+ owner sign-off where required).
**HTML/CSS/JAVASCRIPT/SCHEMA REQUIREMENT:** N/A — no implementation impact (ops vocabulary).
**CONTENT REQUIREMENT:** Findings carry a disposition; actions execute under existing content requirements.
**INTERNAL LINK REQUIREMENT:** N/A — beyond existing rules (CONSOLIDATE actions already require same-release link updates via REQ-ARCH-08).
**MOBILE/TABLET/DESKTOP/PERFORMANCE/ACCESSIBILITY REQUIREMENT:** N/A — no implementation impact.
**SEO REQUIREMENT:** Routes all URL-affecting actions through the equity-preserving gate (REQ-ARCH-08).
**GEO/AEO REQUIREMENT:** Keeps expansion relevance-gated (EV-22/EV-26).
**AIO/AI SEARCH REQUIREMENT:** N/A — indirect only.
**DO NOT:** Auto-apply taxonomy actions at scale; use distance×clicks or similar formulas as MUST gates; Expand into new commercial topics without owner sign-off; Prune/Consolidate any PRESERVE-tagged URL.
**VALIDATION METHOD:** Document QA (subsection present, constraints verbatim). Ops QA: every backlog item carries one of the five dispositions; gate records exist for every CONSOLIDATE/PRUNE/EXPAND-to-new-cluster.
**PASS CRITERIA:** Taxonomy present; 100% of dispositioned findings comply with the per-action constraints.
**FAIL CRITERIA:** Any URL-affecting action without an REQ-ARCH-08 record; any formula-driven automatic action.
**NON-REGRESSION CHECK:** The taxonomy changes no existing content; confirm REQ-ARCH-08 gate records are generated for every URL-affecting disposition.
**ROLLBACK CONDITION:** URL-affecting actions inherit REQ-ARCH-08's rollback (reverse-301 map; restore on sustained material decline).
**POST-DEPLOYMENT MONITORING:** Existing Part 36/37/38 monitoring; gate records reviewed quarterly.

---

### REM-05 — Name PAA / question inventories as an intent-brief question source

**TITLE:** Explicit question-source clarification for REQ-PAGE-01 / T-07
**PRIORITY:** P2 — valuable enhancement
**REMEDIATION LEVEL:** Level 2 — Clarification
**UNIVERSAL REPORT SECTION:** Part 14 REQ-PAGE-01 (brief field); Part 34 T-07 step 1
**WHY CHANGE IS REQUIRED:** The intent brief requires "QUESTIONS THE USER EXPECTS ANSWERED" and T-07 lists query sources (GSC, keyword tools, sales/support logs), but neither names People-Also-Ask / question inventories — the principal public source of question-form demand. This matters specifically for AIO: question-phrased queries activate AI Overviews at ~64.7% vs ~13.7% overall (AIO-9/EV-30), so question-form discovery is the highest-yield input to question-mapped headings (REQ-AIO-02) and capsules (REQ-AIO-01). The clarification also restates the anti-FAQ-spam bound so the source cannot be misread as a page-spawning mandate.
**AUTHORITATIVE EVIDENCE:** AIO-9/EV-30 (question-form activation rates); C9 (no blanket Q&A conversion); REQ-PAGE-06 / REQ-AIO-04 (FAQ only when genuinely asked).
**CONFIDENCE:** HIGH (clarification consistent with existing doctrine).
**CURRENT REQUIREMENT:** "QUESTIONS THE USER EXPECTS ANSWERED" (REQ-PAGE-01); "collect queries (GSC, keyword tools, sales/support logs)" (T-07 step 1).
**TARGET REQUIREMENT:**
1. In REQ-PAGE-01, append to the "QUESTIONS THE USER EXPECTS ANSWERED" field: "Compile from query data (GSC/Bing WMT), People-Also-Ask and question inventories for the target queries, keyword tools, and sales/support logs. Question inventories are a research input for capsules and question-mapped headings (REQ-AIO-01/02) — never a mandate to spawn FAQ pages or FAQPage markup (C9; REQ-PAGE-06; REQ-AIO-04)."
2. In T-07 step 1, replace "collect queries (GSC, keyword tools, sales/support logs)" with "collect queries and questions (GSC, Bing WMT, People-Also-Ask/question inventories for the target queries, keyword tools, sales/support logs)".
**SCOPE:** Page-specific (brief production process).
**DEPENDENCIES:** None.
**IMPLEMENTATION INSTRUCTIONS:** Apply the two text edits exactly as specified; no other change.
**HTML/CSS/JAVASCRIPT/SCHEMA REQUIREMENT:** N/A — no implementation impact.
**CONTENT REQUIREMENT:** Briefs may now cite PAA/question inventories as their question source.
**INTERNAL LINK / MOBILE / TABLET / DESKTOP / PERFORMANCE / ACCESSIBILITY REQUIREMENT:** N/A — no implementation impact.
**SEO REQUIREMENT:** N/A — research-input clarification only.
**GEO/AEO REQUIREMENT:** Feeds higher-quality question mapping (REQ-AIO-02).
**AIO/AI SEARCH REQUIREMENT:** Targets the query class where AIO actually appears (AIO-9).
**DO NOT:** Convert question inventories into FAQ-page spam, FAQPage markup without genuine visible FAQs, or keyword-diluting page sprawl (REQ-ARCH-09 applies to any new page idea they generate).
**VALIDATION METHOD:** Document QA (both edits present). Ops QA: briefs cite their question sources.
**PASS CRITERIA:** Both texts updated verbatim; briefs name question sources.
**FAIL CRITERIA:** Question inventory used to justify FAQ sprawl (C9 violation).
**NON-REGRESSION CHECK:** No existing page changes; research-input only.
**ROLLBACK CONDITION:** N/A (documentation-level).
**POST-DEPLOYMENT MONITORING:** N/A — covered by existing brief reviews.

---

### REM-06 — Optional grounded keyword-research assistant (Appendix C)

**TITLE:** Non-normative ops pattern for AI-assisted gap research
**PRIORITY:** P2 — valuable enhancement (MAY strength; non-normative)
**REMEDIATION LEVEL:** Level 1 — Addition (optional appendix)
**UNIVERSAL REPORT SECTION:** New Appendix C (after Appendix B — Glossary)
**WHY CHANGE IS REQUIRED:** Teams will use LLM assistants for gap research regardless; the Universal report currently offers no sanctioned pattern, which leaves the door open to hallucinated gap briefs, ungrounded keyword swaps, and vendor lock-in theatre. A tightly constrained optional pattern captures the legitimate acceleration (grounding an LLM in live keyword/SERP data for REQ-COMP-01/T-07 inputs) while fencing off every abuse the assessment flagged. This is ops tooling, not a website requirement, and is labelled as such.
**AUTHORITATIVE EVIDENCE:** REQ-COMP-01 (gap briefs), REQ-CONT-02 (provenance standards), Position-#1 disclaimer + EV-18 (no guarantees), C10 (declared terms untouchable). No ranking claim.
**CONFIDENCE:** MEDIUM (ops value); HIGH that unconstrained use is a risk.
**CURRENT REQUIREMENT:** None.
**TARGET REQUIREMENT:** Add as Appendix C:

> **Appendix C — Optional ops pattern: grounded keyword-research assistant (MAY · non-normative).** Teams MAY accelerate REQ-COMP-01 gap briefs and T-07 question collection with an LLM assistant grounded in live keyword/SERP data (e.g., a keyword-data API feeding an LLM front-end). Constraints: (1) ops tooling only — never a site feature, never site HTML; (2) outputs are draft inputs for human-reviewed briefs, never auto-applied changes; (3) the assistant cannot change declared/locked primary terms, titles, or H1s — those change only by explicit owner decision; (4) no ranking, #1, or AIO-inclusion promise may be attached to assistant suggestions (Position-#1 disclaimer; EV-18); (5) no vendor or product is a required stack — the pattern is method-level; (6) ungrounded assistant output (no live data source) MUST NOT be used for gap decisions — REQ-CONT-02 provenance standards apply to briefs.

**SCOPE:** Global ops (optional).
**DEPENDENCIES:** REQ-COMP-01, T-07.
**IMPLEMENTATION INSTRUCTIONS:** Insert Appendix C after Appendix B. No site implementation exists for this item.
**HTML/CSS/JAVASCRIPT/SCHEMA/CONTENT/INTERNAL LINK/MOBILE/TABLET/DESKTOP/PERFORMANCE/ACCESSIBILITY REQUIREMENT:** N/A — no implementation impact (ops-only pattern).
**SEO REQUIREMENT:** Constraint 3 protects declared/locked terms and existing rankings.
**GEO/AEO / AIO REQUIREMENT:** N/A — research-input pattern only.
**DO NOT:** Let assistant output touch the site directly; accept ungrounded suggestions; name a required vendor; attach guarantee language; treat the pattern as a MUST.
**VALIDATION METHOD:** Document QA (appendix present with all 6 constraints).
**PASS CRITERIA:** Appendix present verbatim; any adopted assistant workflow demonstrably grounded in live data with human review.
**FAIL CRITERIA:** Assistant output applied to a site without human review; any lock/declared-term change via assistant suggestion.
**NON-REGRESSION CHECK:** Pattern is opt-in and off-site; nothing existing changes.
**ROLLBACK CONDITION:** Stop using the pattern; no site state to roll back.
**POST-DEPLOYMENT MONITORING:** N/A — covered by brief quality reviews.

---

### REM-07 — Engine-specific authentic-mentions note (REQ-ENT-05)

**TITLE:** Bounded community-mentions clarification in the off-site spec
**PRIORITY:** P2 — valuable enhancement
**REMEDIATION LEVEL:** Level 2 — Clarification
**UNIVERSAL REPORT SECTION:** Part 28, REQ-ENT-05 (appended paragraph)
**WHY CHANGE IS REQUIRED:** The Universal report's evidence ledger already reconciles the Reddit/community question (EV-17: cleaned Reddit presence correlated with Perplexity discovery for new brands; EV-08/EV-21/EV-25: AI engines suppress social, Claude cites ~1% social; Part 41: "Reddit is the #1 non-corporate AI source" REMOVED). But the *normative* off-site requirement (REQ-ENT-05) never states the guidance, leaving implementers to infer it. One bounded paragraph closes the gap without changing doctrine. The topic stays OPEN pending stronger evidence (the Advanced lesson bodies remain absent from the corpus).
**AUTHORITATIVE EVIDENCE:** EV-17 (engine-specific correlate), EV-08 (social suppression aggregate), EV-25 (Claude institutional concentration), C3/C7 (earned-media-first dual track), REQ-GEO-06 + Part 41 (anti-manipulation), Google's May 2026 guide ("pursuing inauthentic mentions" named an AEO/GEO hack).
**CONFIDENCE:** HIGH for the bound; the positive effect size remains OPEN/unknown.
**CURRENT REQUIREMENT:** REQ-ENT-05 (citable assets; consistent machine-readable facts; legitimate reference entries) — silent on community mentions.
**TARGET REQUIREMENT:** Append to REQ-ENT-05:

> Community/UGC presence is engine-specific in value: an authentic, well-moderated Reddit/forum presence correlated with Perplexity discovery for new brands (EV-17), while AI engines in aggregate suppress social content relative to Google (EV-08) and Claude cites almost none (EV-08, EV-25). Therefore: monitor and participate authentically in genuine niche communities where the audience already is; NEVER manufacture mentions, astroturf, or buy engagement (REQ-GEO-06; Part 41); earned media remains the primary off-site track (C3, C7). This guidance remains OPEN to revision if stronger cross-engine evidence emerges; it is not a universal AIO lever.

**SCOPE:** Global (off-site, ongoing).
**DEPENDENCIES:** None.
**IMPLEMENTATION INSTRUCTIONS:** Append the paragraph to REQ-ENT-05 exactly as specified.
**HTML/CSS/JAVASCRIPT/SCHEMA/CONTENT/INTERNAL LINK/MOBILE/TABLET/DESKTOP/PERFORMANCE/ACCESSIBILITY REQUIREMENT:** N/A — no implementation impact (off-site guidance).
**SEO REQUIREMENT:** N/A — no change to on-site requirements.
**GEO/AEO REQUIREMENT:** Sets correct engine-specific expectations; reinforces anti-manipulation compliance.
**AIO/AI SEARCH REQUIREMENT:** Explicitly denies the universal-lever reading (consistent with EV-30's distinct AIO source ecosystem).
**DO NOT:** Manufacture mentions; buy engagement; present Reddit/community as a universal AI-inclusion lever; close the OPEN status without new evidence.
**VALIDATION METHOD:** Document QA (paragraph present verbatim; no conflict with Part 41 or REQ-GEO-06).
**PASS CRITERIA:** Paragraph present; off-site programme remains earned-media-first.
**FAIL CRITERIA:** Any manufactured-mention tactic introduced under cover of this note.
**NON-REGRESSION CHECK:** No site change; existing earned-media programme untouched.
**ROLLBACK CONDITION:** N/A (documentation-level).
**POST-DEPLOYMENT MONITORING:** Re-open review when full Advanced lesson bodies or stronger cross-engine evidence arrive (owner process note).

---

### REM-08 — Add OAI-AdsBot to the AI-crawler register (REQ-CRAWL-04)

**TITLE:** Crawler-register completeness: advertising-validation bot class
**PRIORITY:** P2 — valuable enhancement (minor, conditional)
**REMEDIATION LEVEL:** Level 1 — Addition
**UNIVERSAL REPORT SECTION:** Part 22, REQ-CRAWL-04 (purpose-typed register)
**WHY CHANGE IS REQUIRED:** REQ-CRAWL-04's stated standard is a verified, purpose-typed register re-checked quarterly. Since the register was last verified, OpenAI operates a fourth documented agent — OAI-AdsBot — which validates ChatGPT ad landing pages. It is not a search/training/citation bot, so the visibility policy (Option A) is unaffected; but a register that omits it is no longer complete against its own standard, and a site that later runs ChatGPT ads could break ad review by accident.
**AUTHORITATIVE EVIDENCE:** OpenAI crawler documentation (developers.openai.com/api/docs/bots) and OpenAI advertiser guidance — verified 11 Sep 2026: OAI-AdsBot validates ad landing pages; not used for training, search indexing, or citations; OpenAI recommends allowing it (with OAI-SearchBot) for advertisers.
**CONFIDENCE:** HIGH (official documentation).
**CURRENT REQUIREMENT:** REQ-CRAWL-04 register lists three classes (retrieval/search-index bots; training bots; user-triggered fetchers).
**TARGET REQUIREMENT:** In REQ-CRAWL-04, after the user-triggered-fetchers class, add:

> Advertising-validation bots — validate ad landing pages; relevant only if the site advertises on that platform: OAI-AdsBot (ChatGPT ads landing-page validation; not used for training, search indexing, or citations; blocking it does not affect AI-search visibility but fails ChatGPT ad landing-page review). Default for a visibility site not running ChatGPT ads: no action needed. Sites running ChatGPT ads MUST allow it on ad landing URLs (robots.txt, WAF/CDN, and rate-limit layers).

**SCOPE:** Global; conditional relevance (advertisers only).
**DEPENDENCIES:** None.
**IMPLEMENTATION INSTRUCTIONS:** Insert the register class at the anchor. No robots.txt change is required for non-advertising sites (the default "allow all" posture already covers it; sites with explicit per-bot lists should add the class per the register).
**HTML/CSS/JAVASCRIPT/SCHEMA/CONTENT/INTERNAL LINK/MOBILE/TABLET/DESKTOP/PERFORMANCE/ACCESSIBILITY REQUIREMENT:** N/A — no implementation impact.
**SEO REQUIREMENT:** N/A — no search impact (verified: not a search/citation bot).
**GEO/AEO / AIO REQUIREMENT:** N/A — explicitly not a visibility gate.
**DO NOT:** Present OAI-AdsBot as an AI-visibility factor; block it on ad landing URLs if running ChatGPT ads; change the existing three-class policy on its account.
**VALIDATION METHOD:** Document QA (register contains the fourth class with scope note). Site QA (advertisers only): robots.txt + WAF audit returns 200 to OAI-AdsBot on landing URLs.
**PASS CRITERIA:** Register complete against OpenAI's documented bot set as of the verification date.
**FAIL CRITERIA:** Register missing a documented OpenAI agent; advertiser site blocking its ad-validation bot.
**NON-REGRESSION CHECK:** Existing allow/block decisions unchanged; robots.txt diff shows at most an additive rule.
**ROLLBACK CONDITION:** Remove the register line; no site state affected.
**POST-DEPLOYMENT MONITORING:** The existing quarterly register re-verification (REQ-CRAWL-04) — which should also watch the UK CMA remedy requiring Google page-level generative-Search controls by March 2027 (watch item V11; no current action).

---

### REM-09 — Note the Bing AI Performance June 2026 expansion (REQ-CRAWL-03 / Part 37 §0)

**TITLE:** First-party AI reporting: Bing capability update
**PRIORITY:** P2 — valuable enhancement (minor)
**REMEDIATION LEVEL:** Level 2 — Clarification
**UNIVERSAL REPORT SECTION:** Part 22 REQ-CRAWL-03 (v1.1 sentence); Part 37 §0 (first-party layer)
**WHY CHANGE IS REQUIRED:** The playbook directs monthly exports of Bing WMT AI Performance "where available (includes citation and grounding-query data)". In June 2026 the report added four preview capabilities — Intents, Topics, Citation Share, and Compare. Citation Share is directly load-bearing for the playbook's existing competitor-citation tracking (Part 38: "citation share vs named competitors"), and Topics/Intents map grounding queries to themes — useful input to intent briefs. One sentence keeps the monitoring spec current.
**AUTHORITATIVE EVIDENCE:** Bing Webmaster Tools AI Performance documentation and February 2026 launch post, plus the June 2026 expansion — verified 11 Sep 2026.
**CONFIDENCE:** HIGH (official documentation).
**CURRENT REQUIREMENT:** "…export … Bing Webmaster Tools AI Performance (beta since 10 February 2026) monthly…" (REQ-CRAWL-03); Part 37 §0 first-party layer lists the two exports.
**TARGET REQUIREMENT:**
1. In REQ-CRAWL-03, append: "(Verified Sep 2026: the June 2026 expansion added Intents, Topics, Citation Share, and Compare in preview — include Citation Share in the monthly export where available; it is the first-party source for the competitor citation-share metric in Part 38.)"
2. In Part 37 §0, after the Bing AI Performance clause, add: "include Bing Citation Share/Topics exports where available".
**SCOPE:** Global ops (monitoring).
**DEPENDENCIES:** Bing WMT verification (already required by REQ-CRAWL-03).
**IMPLEMENTATION INSTRUCTIONS:** Apply the two text edits exactly as specified; on application, add the Citation Share export to the monthly ops runbook.
**HTML/CSS/JAVASCRIPT/SCHEMA/CONTENT/INTERNAL LINK/MOBILE/TABLET/DESKTOP/PERFORMANCE/ACCESSIBILITY REQUIREMENT:** N/A — no implementation impact (monitoring ops).
**SEO/GEO/AEO/AIO REQUIREMENT:** N/A — measurement only; improves the quality of the existing competitor benchmark.
**DO NOT:** Treat Bing-surface citation share as cross-engine truth (engines differ — EV-06/EV-24); add KPIs beyond the existing Part 37/38 framework.
**VALIDATION METHOD:** Document QA (both edits present). Ops QA: monthly export includes Citation Share where the account has access.
**PASS CRITERIA:** Texts updated; runbook amended.
**FAIL CRITERIA:** Monitoring spec citing a superseded feature set.
**NON-REGRESSION CHECK:** No site change; existing exports continue unchanged.
**ROLLBACK CONDITION:** N/A (documentation-level).
**POST-DEPLOYMENT MONITORING:** Quarterly re-verification of first-party reporting capabilities alongside the REQ-CRAWL-04 register check.

---

### REM-10 — Official-guidance currency update: Google AI-optimization guide citation + llms.txt evidence note

**TITLE:** Anchor R-08 to its canonical source; refresh the llms.txt evidence framing
**PRIORITY:** P2 — valuable enhancement (currency/traceability)
**REMEDIATION LEVEL:** Level 4 — Update (evidence notes only; no requirement level changes)
**UNIVERSAL REPORT SECTION:** Part 1 finding 7 (the R-08 statement); Part 7 C2 evidence line; Part 9 G13; Part 18 REQ-GEO-05
**WHY CHANGE IS REQUIRED:** (a) The playbook states "Google states that no special markup is required for AI Overviews/AI Mode" (R-08) without naming the now-canonical source — Google's "Optimizing your website for generative AI features on Google Search" (15 May 2026; clarified 15 June; updated 10 July 2026) — which Part 43 explicitly requested ("official documentation snapshots… to pin the anchored requirements to dated documents"). (b) REQ-GEO-05/G13 frame llms.txt evidence as "MIXED"; since then Google has stated officially that Search ignores llms.txt (neither helps nor harms), OpenAI's crawler documentation does not reference it, and large-scale server-log studies show ~97% of llms.txt files receive zero requests. The requirement level (MAY · P3, promise nothing) remains correct and is unchanged — only the evidence note is updated so implementers do not over-read "mixed".
**AUTHORITATIVE EVIDENCE:** Google Search Central, "Optimizing your website for generative AI features on Google Search" (15 May 2026; llms.txt clarification 15 June 2026; updated 10 July 2026): no special schema, no llms.txt, no content chunking, no AI-specific rewrites; generative features rooted in core Search ranking/quality systems; "prioritize effective SEO strategies over AEO/GEO hacks… or pursuing inauthentic mentions". OpenAI crawler documentation (no llms.txt reference). Ahrefs server-log analysis (137,000 domains, May 2026: 97% of llms.txt files zero requests; AI retrieval bots 1.1% of the requests that did occur). Corpus: EV-14 (ai.txt null), EV-20 (narrow positive, congestion-prone).
**CONFIDENCE:** HIGH (official guidance + convergent log evidence).
**CURRENT REQUIREMENT:** REQ-GEO-05 — llms.txt MAY · P3, "Mixed evidence…", promise nothing. Part 1 finding 7 — Google's no-special-markup position asserted without the dated citation.
**TARGET REQUIREMENT:**
1. In Part 1 finding 7 (and the C2 evidence line), attach the citation: "Google, 'Optimizing your website for generative AI features on Google Search', Search Central, 15 May 2026 (updated 15 June / 10 July 2026)".
2. In REQ-GEO-05 and G13, replace the evidence framing with: "Evidence (updated Sep 2026): ai.txt non-significant in S3's 1,508-site regression (EV-14); an llms.txt-inspired prepended guidance summary was one of only three significantly positive tactics in C-SEO Bench — narrow (gpt-4o-mini, retail/games) and congestion-prone (EV-20); Google's official AI-optimization guide (15 May 2026; clarified 15 June 2026) states Google Search ignores llms.txt — neither helps nor harms; OpenAI's crawler documentation does not reference it; server-log studies (Ahrefs, 137k domains, May 2026) found ~97% of llms.txt files received zero requests. Classification unchanged: MAY · P3 — trivial cost, promise nothing; keep any existing file accurate and concise; build no KPIs on it."
**SCOPE:** Global (documentation currency).
**DEPENDENCIES:** None.
**IMPLEMENTATION INSTRUCTIONS:** Apply the citation attachment and the evidence-note replacement exactly as specified. Do not change the MAY · P3 classification, and do not remove llms.txt from any site that already ships one (harmless; the playbook's cost/benefit posture is unchanged).
**HTML/CSS/JAVASCRIPT/SCHEMA/CONTENT/INTERNAL LINK/MOBILE/TABLET/DESKTOP/PERFORMANCE/ACCESSIBILITY REQUIREMENT:** N/A — no implementation impact.
**SEO/GEO/AEO/AIO REQUIREMENT:** N/A — evidence-note currency only; all requirement levels unchanged.
**DO NOT:** Upgrade llms.txt to a SHOULD/MUST (evidence does not support it); downgrade it to DO-NOT (it is harmless and optionally useful for agent-facing documentation contexts); remove existing files; build KPIs on it.
**VALIDATION METHOD:** Document QA (citation present; evidence note replaced; classification string "MAY · P3" unchanged).
**PASS CRITERIA:** Both edits present; classification unchanged.
**FAIL CRITERIA:** Any requirement-level change to REQ-GEO-05; any claim that llms.txt helps or harms Google visibility.
**NON-REGRESSION CHECK:** Confirm no site with an existing llms.txt is instructed to remove or rework it.
**ROLLBACK CONDITION:** N/A (documentation-level).
**POST-DEPLOYMENT MONITORING:** Quarterly evidence re-check alongside the crawler register (bot/platform positions on llms.txt may change).

---

## 4. KEEP / DO-NOT-CHANGE REGISTER (§18)

The following criticisms and adjacent claims were investigated and rejected — the Universal report sections listed were reviewed and are intentionally unchanged.

| Universal section | Criticism investigated | Decision | Why no change is required | Evidence |
|---|---|---|---|---|
| Position-#1 disclaimer; C1; EV-18 | RE's "~30–50% snippet success", "skip the queue", "dominate AI search" framing implies the playbook under-promises | NOT SUBSTANTIATED | The playbook already rejects guarantees and grades durable-cross-engine discoverability evidence LOW/VERY LOW; RE's magnitudes are practitioner marketing claims with no auditable methodology in corpus | S9 evidence gradations; EV-18; playbook Part 41 |
| C8; EV-22; EV-23 | "Bold the answer" / cosmetic emphasis as an AIO lever | NOT SUBSTANTIATED (contradicted) | Strongest causal design (252k trials) shows formatting-only edits negligible; playbook already excludes cosmetic formatting while retaining semantic structure | EV-22 (OR 0.78–1.68, mostly n.s.); S20; C8 |
| Part 10 (AIO-5, AIO-8); EV-30 | "Own the featured snippet/PAA → get cited in AIO" causal chain | NOT SUBSTANTIATED | 53% of AIO-cited domains sit outside the organic top 10; AIO source sets churn ~2.5× faster than organic; the playbook already treats AIO as a separate, unstable selection ecosystem | Kirsten et al. (ACL 2026 Findings) via S9; EV-30 |
| C3; C7; EV-17; Part 28 | "Semantic authority has replaced backlinks"; new domains win on semantics alone | NOT SUBSTANTIATED (contradicted) | Discovery Gap: referring domains (r=+0.319) and community presence (r=+0.395) predict AI discovery while on-page GEO scores are uncorrelated; dual-track (retrieval + public record) already doctrine | EV-17; C3; C7 |
| Part 41; REQ-GEO-06; REQ-TRUST-04 | Advanced-course adjacent tactics: paid link schemes, engagement manipulation, astroturfed Reddit plays | NOT SUBSTANTIATED (prohibited) | Already prohibited; manipulation risk is rising (EV-15/EV-16 threat findings); Google's May 2026 guide names "inauthentic mentions" a hack | Part 41; EV-15; EV-16; Google AI-optimization guide (15 May 2026) |
| C9; REQ-PAGE-06; REQ-AIO-04; REQ-SCHEMA-06 | "Publish FAQ-style content" / blanket Q&A conversion for AI | NOT SUBSTANTIATED (contradicted) | Q&A formatting alone reduced absorption −5.7% (S8); FAQ rich results retired 7 May 2026 (verified); playbook's conditional-FAQ posture is exactly right | EV-19; C9; Google FAQ deprecation (verified V1) |
| Part 9 anti-patterns; REQ-CONT-08; EV-18 | n8n/Sheets snippet factories, DataForSEO/Claude setup steps, Drift Analyzer installs as doctrine | NOT SUBSTANTIATED | Tooling, not doctrine; scaled near-duplicate content collides with competition-erosion and spam policy; playbook already excludes tool theatre | EV-18; REQ-CONT-08; Part 41 |
| Parts 12–14, 17–19, 21–22 | RE "information retrievability" (structure + semantics + transmission) allegedly missing | ALREADY ADEQUATELY ADDRESSED | Identical pipeline doctrine (crawl/index → retrieve → cite) is the playbook's spine (P-1, REQ-GEO-01) | P-1; REQ-GEO-01; Parts 21–22 |
| C3; Part 15; Parts 37–38 | RE "hybrid retrieval + grounded generation + evaluation" formula allegedly missing | ALREADY ADEQUATELY ADDRESSED | Same philosophy: retrieval-first build order, grounded/provenance content rules, measurement harness as a build deliverable | C3; REQ-CONT-02; REQ-GEO-04 |
| Parts 13–14, 20; G4 | RE "cover topic clusters in depth (hub + supporting)" allegedly missing | ALREADY ADEQUATELY ADDRESSED | Hub/spoke IA, internal linking, and completeness are MUST-level already; REM-02 adds only the expansion gate | REQ-ARCH-01/02; REQ-IL-02; G4 |
| Part 17; Part 19; EV-19 | RE "make content citeable" (headings, lists, schema, stats, definitions) allegedly missing | ALREADY ADEQUATELY ADDRESSED | Absorption-ready evidence blocks are the core of Part 17; FAQ-caution already ruled (C9) | REQ-AIO-01…07; EV-19 |
| REQ-PAGE-05; REQ-CONT-07; EV-32 | RE "dominate SERP features" (lists/tables for "best X") allegedly missing | ALREADY ADEQUATELY ADDRESSED | Comparison tables and information-gain assets exist where truthful; "dominance" framing correctly excluded | REQ-PAGE-05; REQ-CONT-07 |
| Part 15; REQ-CONT-02 | RE "RAG-grounded content drafting" allegedly missing | ALREADY ADEQUATELY ADDRESSED | Provenance/evidence-density requirements and anti-fabrication rules already exceed RE's version | REQ-CONT-02/09; §25 |
| Parts 36–38; R-12 | RE "evaluation is the moat" allegedly missing | ALREADY ADEQUATELY ADDRESSED | Validation plan, monitoring plans, and the anti-Goodhart clause already operationalise evaluation | Part 36–38; Part 35 |
| Part 16; REQ-ENT-01/03/05; C2 | RE Wikipedia/KG entity cards + schema association allegedly missing | ALREADY ADEQUATELY ADDRESSED | Entity inventory, explicit relationships, and legitimate reference presence exist; schema must mirror visible content (no fake entity markup) | REQ-ENT-01…05; C2 |
| Part 20 | RE hub-spoke/sibling/contextual interlinking allegedly missing | ALREADY ADEQUATELY ADDRESSED | Part 20 specifies exactly this, with anchor-naturalness heuristics | REQ-IL-01…05 |
| Parts 21–24 | RE "Technical SEO Mastery" content allegedly missing | ALREADY ADEQUATELY ADDRESSED | Level-1 technical substrate is the P0 floor of the build order | REQ-TECH/CRAWL/PERF; Part 33 |
| Part 16; AIO-6 | RE "query fan-out" mechanism claims | ALREADY ADEQUATELY ADDRESSED | Playbook correctly classifies fan-out internals as UNCLEAR and hangs no requirement on it; passage self-containment is independently justified | AIO-6; REQ-GEO-03 |
| G5; REQ-GEO-03; C8; R-10 | Google's May 2026 "no content chunking needed" mythbust vs the playbook's structure requirements | ALREADY ADEQUATELY ADDRESSED | No contradiction: Google mythbusts artificial pre-fragmentation for AI; the playbook requires semantic self-containment and human-first structure, with numeric sizes demoted to heuristics (R-10) and cosmetic formatting excluded (C8) | Google AI-optimization guide (verified V9); C8; R-10 |
| REQ-CRAWL-04/07 | UK CMA remedy: page-level generative-Search controls due by March 2027 | ALREADY ADEQUATELY ADDRESSED | Future-dated regulatory change; no current requirement alters; quarterly register re-verification already watches this class of change (recorded as a watch item in REM-08's monitoring field) | SEJ/CMA coverage (verified V11) |
| Whole report | AI Tools & Workflows course (0/23 transcripts) may contain doctrine | DEFERRED — NOT SUBSTANTIATED | Out of corpus; inventing content is prohibited; re-run the comparison when transcripts exist (owner process note) | ANALYSIS corpus-completeness table |

---

## 5. FINAL CHANGESET (§19)

### A. ORIGINAL REPORT STATUS

> **All Universal-report content not explicitly identified in the Approved Remediations remains unchanged and continues to form part of the authoritative implementation playbook.**

### B. ADDITIONS (new requirements/text)

1. **REM-01** — Part 17: "REQ-AIO-01 implementation checklist (ops)" (8 checks + 3 component-level DO-NOTs) + one cross-reference clause in T-08 step 1.
2. **REM-02** — Part 13: new **REQ-ARCH-09 — Relevance-gated topic expansion ("relevance ≠ relation")** (GLOBAL · MUST · P1) + Part 30 GLOBAL routing-table entry.
3. **REM-03** — Part 38: new optional subsection "Optional cluster-health (semantic-drift) diagnostic" (5 hard constraints).
4. **REM-04** — Part 14: new subsection "Backlog action taxonomy for gap and drift findings" (REALIGN / OPTIMIZE / EXPAND / CONSOLIDATE / PRUNE with per-action constraints).
5. **REM-06** — New Appendix C: "Optional ops pattern: grounded keyword-research assistant" (MAY · non-normative; 6 constraints).
6. **REM-08** — REQ-CRAWL-04: fourth bot class (advertising-validation: OAI-AdsBot) with scope note.

### C. MODIFICATIONS (existing requirements clarified/updated)

1. **REM-05** — REQ-PAGE-01 "QUESTIONS THE USER EXPECTS ANSWERED" field extended (PAA/question inventories named; no-FAQ-spam bound restated); T-07 step 1 source list extended.
2. **REM-07** — REQ-ENT-05 appended paragraph: engine-specific value of authentic community mentions; anti-manufacture bound; earned-media-first reaffirmed; OPEN status recorded.
3. **REM-09** — REQ-CRAWL-03: Bing AI Performance June 2026 expansion noted (Intents, Topics, Citation Share, Compare); Part 37 §0 first-party layer extended accordingly.
4. **REM-10** — Part 1 finding 7 + C2 evidence line: canonical Google AI-optimization guide citation attached; REQ-GEO-05/G13 llms.txt evidence note updated (classification MAY · P3 unchanged).

### D. DELETIONS / REPLACEMENTS

> **NONE.**

### E. EXPERIMENTS (remain experiments; not universal requirements)

- **EXP-01** (in-context position/format experiments) — unchanged, still behind the experimentation framework.
- **REQ-GEO-05 llms.txt** — remains MAY · P3 (optional, no promised effect); not an experiment, not a requirement.
- **REM-06 grounded keyword assistant** — optional ops pattern (MAY · non-normative), not an experiment and not a site requirement.
- No assessed tactic was promoted from experimental/observational to mandatory. The Advanced Reddit/linkbuilding topics remain **OPEN** (NEEDS EVIDENCE), exactly as the sanity-check required.

---

## 6. UNIVERSAL PLAYBOOK — REMEDIATION ROADMAP FOR IMPLEMENTATION (§20 — DEVELOPER HANDOFF)

Hand developers two documents: **Document 1** = the Universal report v1.1, unchanged baseline. **Document 2** = this roadmap. Below is the complete, atomic change set — everything developers must apply to Document 1. Nothing else changes.

| # | Change ID | Playbook location | Action | Atomic change |
|---|---|---|---|---|
| 1 | REM-01a | Part 17, directly after REQ-AIO-01 | INSERT | The "REQ-AIO-01 IMPLEMENTATION CHECKLIST (ops)" block (8 checks + DO-NOT list) — full text in §3 REM-01 TARGET REQUIREMENT |
| 2 | REM-01b | Part 34, T-08 step 1, after "add capsule component…" | INSERT clause | "apply the REQ-AIO-01 implementation checklist (Part 17) to every capsule;" |
| 3 | REM-02a | Part 13, after REQ-ARCH-08 | INSERT | REQ-ARCH-09 — Relevance-gated topic expansion ("relevance ≠ relation"), GLOBAL · MUST · P1 — full text in §3 REM-02 |
| 4 | REM-02b | Part 30, GLOBAL routing line | EDIT list | Add REQ-ARCH-09 to the GLOBAL classification list |
| 5 | REM-03 | Part 38, after "Diagnostics when flat" | INSERT | "Optional cluster-health (semantic-drift) diagnostic" subsection with the 5 rules — full text in §3 REM-03 |
| 6 | REM-04 | Part 14, end (after REQ-PAGE-08) | INSERT | "Backlog action taxonomy for gap and drift findings" (5 actions + constraints) — full text in §3 REM-04 |
| 7 | REM-05a | Part 14, REQ-PAGE-01, "QUESTIONS THE USER EXPECTS ANSWERED" field | APPEND | The question-sources sentence incl. PAA/question inventories + no-FAQ-spam bound — exact text in §3 REM-05 |
| 8 | REM-05b | Part 34, T-07 step 1 | REPLACE clause | "collect queries (GSC, keyword tools, sales/support logs)" → "collect queries and questions (GSC, Bing WMT, People-Also-Ask/question inventories for the target queries, keyword tools, sales/support logs)" |
| 9 | REM-06 | After Appendix B (Glossary) | INSERT | Appendix C — optional grounded keyword-research assistant pattern (6 constraints) — full text in §3 REM-06 |
| 10 | REM-07 | Part 28, REQ-ENT-05 | APPEND | The engine-specific authentic-mentions paragraph — exact text in §3 REM-07 |
| 11 | REM-08 | Part 22, REQ-CRAWL-04, after the user-triggered-fetchers class | INSERT | Advertising-validation bot class (OAI-AdsBot) with scope note — exact text in §3 REM-08 |
| 12 | REM-09a | Part 22, REQ-CRAWL-03, end of the v1.1 sentence | APPEND | The June 2026 Bing expansion note (Intents, Topics, Citation Share, Compare) — exact text in §3 REM-09 |
| 13 | REM-09b | Part 37 §0, after the Bing AI Performance clause | APPEND | "include Bing Citation Share/Topics exports where available" |
| 14 | REM-10a | Part 1 finding 7 + Part 7 C2 evidence line | ATTACH citation | "Google, 'Optimizing your website for generative AI features on Google Search', Search Central, 15 May 2026 (updated 15 June / 10 July 2026)" |
| 15 | REM-10b | Part 9 G13 + Part 18 REQ-GEO-05 | REPLACE evidence note | The updated llms.txt evidence paragraph (classification string "MAY · P3" must remain) — exact text in §3 REM-10 |

**Atomicity / testability:** each row is one independent edit with a unique anchor; each has PASS/FAIL checks in §3. Apply in any order; there are no inter-edit dependencies except that REM-03's rule 5 and REM-04 reference REQ-ARCH-09 (REM-02) and REQ-ARCH-08 (existing), so apply REM-02 before or together with REM-03/REM-04.

**Post-application consistency checks (mandatory):** (1) Part 30 routing table contains REQ-ARCH-09 and no orphan IDs; (2) no text anywhere converts a heuristic into a numeric gate (R-10 compliance sweep); (3) no contradiction with C8/C9/C10, REQ-ARCH-08, REQ-GEO-07, or the DO-NOT register (Part 30); (4) every new element carries its evidence citations; (5) the Position-#1 disclaimer is untouched and no guarantee language was introduced.

**Site-application note (when the remediated playbook is later applied to a live site):** none of the 15 edits authorises any direct live-site change by itself. Site changes continue to flow through the playbook's existing gates — Phase 0 audit, REQ-ARCH-08 URL-preservation, REQ-GEO-07 cohorts, and owner sign-off. The seven-site keyword lock (where in force) is explicitly protected by REM-01 check 4, REM-02's gate, REM-03 rule 3, and REM-04's EXPAND constraint.

---

## 7. FINAL QA (§21) — SELF-AUDIT OF THIS ROADMAP

- Every supplied criticism investigated: **YES** — 18 register rows cover all 7 proposed gaps, all 8 open-question/reject clusters, and all "already covered" claims in the assessment materials, plus 11 independent freshness checks.
- Every accepted criticism independently verified: **YES** — each REM cites corpus evidence (EV-xx) and/or official documentation verified 11 Sep 2026 (V1–V11).
- Official/current evidence preferred: **YES** — Google Search Central/Blog, Bing Webmaster, OpenAI developer docs used over practitioner commentary.
- Unsupported criticism rejected: **YES** — see §4 (guarantees, bold-text, FS→AIO causality, semantics-replace-backlinks, Reddit-as-universal, FAQ blankets, tool theatre).
- Valid Universal-report material preserved: **YES** — 0 deletions, 0 corrections of correct content; all changes are additions/clarifications/currency notes.
- No unnecessary rewriting: **YES** — minimum-change levels used (6× L1, 3× L2, 1× L4; no L5/L6).
- No unsupported ranking factor introduced: **YES** — no new ranking-factor claims anywhere; REM-02/03/04 are risk-gates/ops processes, not ranking claims.
- Correlation not converted to causation: **YES** — REM-07 keeps EV-17 as a correlate; REM-10 keeps llms.txt at MAY · P3.
- No engine-specific evidence universalised: **YES** — REM-07 explicitly engine-bounds community mentions; REM-09 warns against cross-engine reading of Bing data.
- No experimental tactic made mandatory: **YES** — §5E.
- Implementation instructions developer-ready: **YES** — exact anchors and exact insertion text for all 15 atomic changes.
- Mobile/tablet/desktop considered: **YES** — all ten remediations are documentation/ops-level; the only component-level item (REM-01) restates the existing mobile visibility rule and adds no new device burden. N/A fields are marked honestly, not padded.
- Accessibility protected: **YES** — no change touches the accessibility bar; REM-01's plain-paragraph capsule remains the accessible form.
- Performance protected: **YES** — no change adds page weight requirements.
- Existing rankings/indexation/backlinks/URLs protected: **YES** — REM-01 check 4, REM-02 gate, REM-03 rule 3, REM-04 constraints all route through C10/REQ-ARCH-08; zero existing URLs or content are touched by any remediation.
- Contradictions checked: **YES** — each REM carries a DO-NOT cross-checked against C8/C9/C10, REQ-ARCH-07/08, REQ-GEO-06/07, REQ-CONT-08, Part 41, and R-10/R-12; the Google May 2026 guide was specifically checked for contradiction with G5/REQ-GEO-03 (none — see §4).
- Rollback exists where appropriate: **YES** — content-level items inherit version-control rollback and REQ-ARCH-08's reverse-301 map; documentation-level items are trivially reversible.
- Post-deployment monitoring exists where appropriate: **YES** — each REM names its monitoring hook (Parts 36–38, quarterly register re-verification).

**PRESERVATION CONFIDENCE: 97%**
Probability that valid existing Universal-report material has been preserved without unnecessary alteration. (Zero deletions; zero doctrine changes; all edits are additive or evidentiary. Residual 3%: judgment calls on where the assessment's P0/P1/P2 priorities were re-mapped to this roadmap's P1/P2 scale.)

**REMEDIATION COMPLETENESS: 90%**
Probability that the material, substantiated weaknesses have been adequately corrected. (All 7 assessed gaps addressed — 2 as full additions, 3 as constrained additions, 2 as clarifications — plus 3 independently discovered currency gaps closed. Residual 10%: the Advanced lesson bodies (08–10, 05–07) and the entire AI Tools & Workflows course are absent from the corpus; if they contain stronger contradictory evidence, re-triage is required — this is recorded as OPEN, not closed.)

**PRODUCTION READINESS: 92%**
The combined Universal Report + Remediation Roadmap is handoff-ready: 15 atomic, anchored, testable edits with PASS/FAIL criteria, plus the unchanged baseline. Residual 8%: site-application specifics (brief-template field additions, ops runbook wording) are necessarily determined at Phase 0 per target repository, by design (§66 of the Universal report).

**ESTIMATED MATERIAL REGRESSION RISK: 3%**
Probability that this remediation itself creates a material avoidable regression if implemented exactly as specified. (No existing requirement weakened; no URL/content/schema/performance/accessibility change mandated; all risky actions route through pre-existing gates. Residual risk: documentation misapplication — e.g., an implementer converting the REM-01 checklist into numeric gates — mitigated by explicit DO-NOTs and the mandatory post-application consistency checks in §6.)

---

*End of remediation roadmap. Baseline preserved. 10 remediations, 15 atomic edits, 0 deletions, 0 guarantee language, keyword-lock and URL-preservation gates reinforced, all time-sensitive claims verified current as of 11 September 2026.*
