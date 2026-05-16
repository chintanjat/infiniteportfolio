/* Island content components — presentational only. */

const Hero = () => (
  <div className="card hero">
    <div className="eyebrow">
      <span className="dot" /> <span>Available · Q3 2026</span>
      <span style={{marginLeft:'auto'}}>CJ · PORTFOLIO · v4.2</span>
    </div>
    <h1>
      Chintan<br/>
      <span className="ital">Jat</span>
      <span style={{fontFamily:'var(--f-mono)',fontSize:18,verticalAlign:'super',marginLeft:12,color:'var(--ink-3)',letterSpacing:'0.1em'}}>/ CJ</span>
    </h1>
    <p className="tag">
      Creative Designer crafting immersive <em>digital experiences</em> in the void.
    </p>
    <div className="meta-row">
      <div>Based in<strong>Pune, IN</strong></div>
      <div>Working<strong>Globally, remote</strong></div>
      <div>Focus<strong>Fintech · Legaltech · Ops</strong></div>
    </div>
  </div>
);

const SectionHead = ({num, h1, em}) => (
  <div className="section-head">
    <div className="num">{num}</div>
    <h2>{h1} <em>{em}</em></h2>
    <div className="rule" />
  </div>
);

const About = () => (
  <div className="card about">
    <h3>Ten years in, still chasing the click.</h3>
    <p>
      I'm Chintan — a creative designer who builds interfaces for people who don't have time to read them. I spend most of my weeks with fintech ops teams, legal reviewers and field verifiers. The work is unglamorous. I like it that way.
    </p>
    <p>
      I care about the first fifteen seconds of a workflow, the sentence a user tells a coworker afterwards, and the audit trail no one sees. Shortcuts and hotkeys are a love language. Pan anywhere with <span className="kbd">drag</span>, zoom with <span className="kbd">scroll</span>, jump with <span className="kbd">1–5</span>.
    </p>
  </div>
);

const Sticky = () => (
  <div className="sticky">
    "Good design is a quiet victory — you only hear about it when it breaks."
    <span className="attrib">— Pinned above my desk</span>
  </div>
);

const Stats = () => (
  <div className="card stats">
    <div>
      <div className="s-num"><em>24</em></div>
      <div className="s-lab">Products shipped</div>
    </div>
    <div>
      <div className="s-num">6<em>yrs</em></div>
      <div className="s-lab">Deep in fintech</div>
    </div>
    <div>
      <div className="s-num">120k<em>+</em></div>
      <div className="s-lab">Daily end users</div>
    </div>
    <div>
      <div className="s-num"><em>3</em></div>
      <div className="s-lab">Detailed case studies below</div>
    </div>
  </div>
);

const Photo = () => (
  <div className="card photo-frame">
    <div className="ph">PORTRAIT · PLACEHOLDER</div>
    <div className="caption">Chintan, mid-deadline</div>
  </div>
);

const Tools = () => (
  <div className="card tools">
    <h4>Tools of the trade</h4>
    <ul>
      <li className="accent">Figma</li>
      <li className="accent">Protopie</li>
      <li>Framer</li>
      <li>After Effects</li>
      <li>Rive</li>
      <li>HTML / CSS</li>
      <li>Notion</li>
      <li>FigJam</li>
      <li>Maze</li>
      <li>Dovetail</li>
      <li className="accent">Claude</li>
    </ul>
  </div>
);

const ProjectCard = ({ project, onOpen }) => (
  <div className="card project" onClick={() => onOpen(project.id)}>
    <div className="thumb">
      <div className="ph">{project.thumbLabel}</div>
      <div className="badge">{project.code} · {project.name}</div>
    </div>
    <div className="body">
      <div className="tags">
        {project.tags.map(t => <span key={t} className="tag">{t}</span>)}
      </div>
      <h4>{project.title.split(',')[0]}, <em>{project.title.split(',').slice(1).join(',').trim()}</em></h4>
      <p className="desc">{project.summary}</p>
      <span className="cta">Read case study <span>→</span></span>
    </div>
  </div>
);

const Timeline = () => {
  const { EXPERIENCE } = window.PORTFOLIO_DATA;
  return (
    <div className="card timeline">
      <h3>Experience</h3>
      <div className="sub">A selected timeline</div>
      <div className="tline">
        {EXPERIENCE.map((e, i) => (
          <div className="tline-item" key={i}>
            <div className="year">{e.year}</div>
            <div className="role">{e.role}</div>
            <div className="co">{e.co} — {e.note}</div>
          </div>
        ))}
      </div>
    </div>
  );
};

const Contact = () => (
  <div className="card contact">
    <h3>Say hi, <em>or something bigger.</em></h3>
    <p>I reply to every good email. If you have a problem worth untangling, send it over — even half-formed.</p>
    <div className="contact-links">
      <a className="clink" href="mailto:chintan@example.com">
        <span><span className="label">Email</span>chintan@example.com</span>
        <span className="arrow">↗</span>
      </a>
      <a className="clink" href="#">
        <span><span className="label">LinkedIn</span>/in/chintanjat</span>
        <span className="arrow">↗</span>
      </a>
      <a className="clink" href="#">
        <span><span className="label">Dribbble</span>@chintanjat</span>
        <span className="arrow">↗</span>
      </a>
      <a className="clink" href="#">
        <span><span className="label">Read.cv</span>/chintanjat</span>
        <span className="arrow">↗</span>
      </a>
      <a className="clink" href="#">
        <span><span className="label">X / Twitter</span>@chintan_jat</span>
        <span className="arrow">↗</span>
      </a>
      <a className="clink" href="#">
        <span><span className="label">Calendar</span>Book 20 min</span>
        <span className="arrow">↗</span>
      </a>
    </div>
  </div>
);

const Marquee = ({ text }) => (
  <div className="marquee">{text}</div>
);

/* ---------- Parakh case study — 16-section panel ---------- */

const ParakhCaseStudy = ({ project, onClose, onNext }) => {
  return (
    <div className="cs-overlay" onClick={onClose}>
      <div className="cs-panel" onClick={(e) => e.stopPropagation()}>
        <button className="cs-close" onClick={onClose} title="Close (Esc)">×</button>

        {/* S1 — Hero */}
        <div className="cs-hero">
          <div className="cs-eyebrow">
            <span>{project.code} · {project.name}</span>
            <span>{project.year}</span>
            <span>{project.audience}</span>
          </div>
          <h1>From 3 Days <em>to 2 Hours</em></h1>
          <p className="cs-lede">Redesigning legal verification for India's lending industry as a solo IC across 400+ branches and 510 external advocates.</p>
          <div className="cs-pill-row">
            <span className="cs-pill">Role <strong>Sole UX Designer (end-to-end IC)</strong></span>
            <span className="cs-pill">Team <strong>1 designer + 1 business SPOC. No PM, no dedicated dev team.</strong></span>
            <span className="cs-pill">Timeline <strong>[PLACEHOLDER — ADD DURATION]</strong></span>
            <span className="cs-pill">Domain <strong>B2B internal tooling + external vendor ecosystem</strong></span>
            <span className="cs-pill">Company <strong>Piramal Capital</strong></span>
            <span className="cs-pill">Tools <strong>Figma, Miro, Power BI</strong></span>
          </div>
          <div className="cs-ph ratio-16x9">[SCREENSHOT: Hero image — split before/after of SFDC vs. Parakh approver view]</div>
        </div>

        {/* S2 — TL;DR */}
        <div className="cs-section">
          <div className="cs-num">TL;DR</div>
          <h2>The <em>short version</em></h2>
          <div className="cs-grid3">
            <div className="cs-tile">
              <h4>Problem</h4>
              <p>Legal verification was a 3-day p75 bottleneck blocking loan disbursal. Approvers were buried in inconsistent 7-page reports from 510 external advocates across 400+ branches.</p>
            </div>
            <div className="cs-tile">
              <h4>Approach</h4>
              <p>Solo two-phase redesign. Phase 1 replaced the SFDC + email chain with a unified platform, shipped in one week. Phase 2 standardized the LSR format and templatized data entry so advocates capture only variable fields.</p>
            </div>
            <div className="cs-tile">
              <h4>Impact</h4>
              <p>TAT 3 days → ~2 hours (p75). Approver decision time cut to 15–20 minutes. ₹5 Cr annual licensing savings. 510 vendors onboarded onto a single format.</p>
            </div>
          </div>
        </div>

        {/* S3 — Context & Business Problem */}
        <div className="cs-section">
          <div className="cs-num">01 · Context</div>
          <h2>The <em>Business Problem</em></h2>
          <p>Piramal Capital's loan origination flow has a mandatory legal verification step — the LSR (Legal Search Report) — before disbursal. The work was distributed across 510 external advocates and coordinated by CPAs in 400+ branches, each producing reports in their own format.</p>
          <p>Reports were emailed to a CPA, who manually uploaded them into Salesforce for approver review. The resulting bottleneck averaged 3 days per case at p75 (sourced from Power BI analytics).</p>
          <p>At Piramal's loan volume, every day of delay translated directly to disbursal slippage and opportunity cost on locked capital. The stakeholder ask was simple: reduce legal verification TAT without compromising risk-assessment quality.</p>
          <div className="cs-ph ratio-16x9">[SCREENSHOT: Loan origination flow diagram with legal verification highlighted as the bottleneck step]</div>
        </div>

        {/* S4 — The User Problem */}
        <div className="cs-section">
          <div className="cs-num">02 · User Problem</div>
          <h2>Three Users, <em>One Broken Artifact</em></h2>
          <p>Three roles, three different pains, one shared root cause.</p>
          <div className="cs-grid3">
            <div className="cs-tile">
              <h4>Advocate (external)</h4>
              <p>Typing the same boilerplate sections across every case. No template, no shared format. 2–3 days per report.</p>
            </div>
            <div className="cs-tile">
              <h4>CPA (internal coordinator)</h4>
              <p>Acting as a manual email-to-SFDC relay. Receiving inconsistent report formats and extracting "important remarks" by hand.</p>
            </div>
            <div className="cs-tile">
              <h4>Approver (credit risk)</h4>
              <p>Reading 7-page free-form reports from 510 different advocates. Couldn't build pattern recognition because no two reports looked alike.</p>
            </div>
          </div>
          <div className="cs-closing">The highest-leverage pain wasn't speed — it was format chaos, which forced every approver to re-learn how to read every report.</div>
        </div>

        {/* S5 — My Role & Constraints */}
        <div className="cs-section">
          <div className="cs-num">03 · My Role</div>
          <h2>Solo IC on an <em>Org-Wide Systems Redesign</em></h2>
          <p>I ran this end-to-end as the only designer. No PM, no dedicated engineering team, no co-designers. One business SPOC facilitated stakeholder access; everything inside that door was mine.</p>
          <div className="cs-two-col">
            <div>
              <h5>Owned (solo)</h5>
              <ul>
                <li>Research design and execution</li>
                <li>All UX flows for advocate, CPA, and approver</li>
                <li>Stakeholder alignment workshops with Legal Head and senior counsel</li>
                <li>Tech feasibility validation with shared engineering resources</li>
                <li>Rollout sequencing across 400+ branches</li>
              </ul>
            </div>
            <div>
              <h5>Worked with</h5>
              <ul>
                <li>1 business SPOC who scheduled stakeholder access and removed political friction</li>
                <li>Engineering capacity that was borrowed, not dedicated</li>
              </ul>
              <h5>Constraints</h5>
              <ul>
                <li>No formal research budget — shadowed 3 CPAs in-branch + vendor calls</li>
                <li>Rollout across 400+ branches with no centralized training function</li>
                <li>Legacy SFDC integration had to be routed around, not removed</li>
              </ul>
            </div>
          </div>
          <div className="cs-ph ratio-16x9" style={{marginTop: 32}}>[SCREENSHOT: Stakeholder map — me at center, arrows to Legal Head, branch managers, CPAs, advocates, engineering, with SPOC as the broker]</div>
        </div>

        {/* S6 — Research */}
        <div className="cs-section">
          <div className="cs-num">04 · Research</div>
          <h2>What we <em>found</em></h2>
          <p>I had one week, no budget, and access to two channels: in-branch shadowing and vendor calls. I used both.</p>
          <div className="cs-grid2">
            <div className="cs-tile">
              <h4>Method</h4>
              <p>Contextual inquiry through in-branch shadowing, plus remote semi-structured interviews with advocates and legal leadership.</p>
            </div>
            <div className="cs-tile">
              <h4>Sample (1 week)</h4>
              <p>3 CPAs shadowed in-branch across their full workflow · 5–8 advocates interviewed via phone and video · Legal Head + 1 branch legal manager on decision criteria</p>
            </div>
          </div>
          <div className="cs-grid2">
            <div className="cs-tile">
              <h4>Baseline data</h4>
              <p>Power BI analytics established a p75 TAT of 3 days, broken down by step: advocate report creation, CPA upload, approver review.</p>
            </div>
            <div className="cs-tile">
              <h4>Key question driving the work</h4>
              <p>"Where do you re-do work that's already been done somewhere else in this flow?"</p>
            </div>
          </div>
          <div className="cs-big">What surprised me: advocates were typing data that CPAs had already entered upstream. The redundancy was invisible to everyone because no one had ever sat with both roles in the same week.<br/><span style={{fontFamily:'var(--f-mono)',fontStyle:'normal',fontSize:11,color:'var(--ink-3)',letterSpacing:'0.12em',textTransform:'uppercase'}}>— Research synthesis</span></div>
          <div className="cs-ph ratio-16x9">[SCREENSHOT: Research artifacts — shadowing notes excerpt, Power BI baseline chart, affinity-cluster sketch]</div>
        </div>

        {/* S7 — Synthesis & Insight */}
        <div className="cs-section">
          <div className="cs-num">05 · Synthesis</div>
          <h2>Three Insights That Drove <em>Every Decision</em></h2>
          <div className="cs-grid3">
            <div className="cs-tile">
              <h4>01 — The CPA's manual relay step was a symptom, not the disease</h4>
              <p>The real cost was the lack of a canonical structure. Eliminating CPA upload without fixing format would just push chaos forward.</p>
            </div>
            <div className="cs-tile">
              <h4>02 — ~70% of LSR content is static or pre-known</h4>
              <p>Boilerplate legal language and property data were already captured upstream by CPAs. Advocates were re-typing what we already had.</p>
            </div>
            <div className="cs-tile">
              <h4>03 — Approvers don't read reports — they hunt for 4–5 decision signals</h4>
              <p>The 7-page document was a search problem disguised as a reading problem.</p>
            </div>
          </div>
          <div className="cs-closing">Insight 02 was the unlock. Once I mapped which fields CPAs had already captured against what advocates were typing, the redesign wrote itself.</div>
        </div>

        {/* S8 — Reframing */}
        <div className="cs-section">
          <div className="cs-num">06 · Reframing</div>
          <h2>From Workflow Optimization <em>to Content Redesign</em></h2>
          <div className="cs-framing-blocks">
            <div className="cs-framing-block">
              <div className="cs-framing-label">Original framing</div>
              <p>"How might we reduce TAT in legal verification?"</p>
            </div>
            <div className="cs-framing-block highlight">
              <div className="cs-framing-label">Reframed (post-research)</div>
              <p>"How might we let advocates capture only the variable data, and let approvers see only the decision-critical signals?"</p>
            </div>
          </div>
          <div className="cs-metrics-tree">
            <h5>Success metrics defined upfront</h5>
            <div className="cs-metric-row">
              <span className="cs-metric-label">Primary</span>
              <span>Median LSR TAT per case (target: &lt;24h)</span>
            </div>
            <div className="cs-metric-row">
              <span className="cs-metric-label">Input</span>
              <span>Advocate report creation time, approver decision time, rework requests per case</span>
            </div>
            <div className="cs-metric-row">
              <span className="cs-metric-label">Guardrail</span>
              <span>Risk assessment quality — no increase in post-disbursal legal disputes</span>
            </div>
          </div>
        </div>

        {/* S9 — Ideation */}
        <div className="cs-section">
          <div className="cs-num">07 · Ideation</div>
          <h2>Ideation at <em>the Data Layer</em></h2>
          <p>The real ideation wasn't picking UI patterns — it was deciding what data lives where.</p>
          <div className="cs-grid3">
            <div className="cs-tile">
              <h4>Decision space 01 — Which fields to pre-fill</h4>
              <p>Mapped every field in the LSR against the SFDC schema. ~70% pre-fillable, 30% requiring advocate input.</p>
            </div>
            <div className="cs-tile">
              <h4>Decision space 02 — Which fields to surface to the approver</h4>
              <p>Worked with the Legal Head and senior counsel to identify the 4–5 fields that actually drive approval or rejection. These got top-of-page real estate.</p>
            </div>
            <div className="cs-tile">
              <h4>Decision space 03 — UI patterns for variable data entry</h4>
              <p>Tested 2–3 layouts with advocates during build. Settled on a single-column form with inline source-of-truth tags.</p>
            </div>
          </div>
          <div className="cs-ph ratio-16x9" style={{marginTop: 32}}>[SCREENSHOT: Field-mapping table — LSR fields on left, source (CPA / advocate / approver-only) on right]</div>
          <div className="cs-ph ratio-16x9">[SCREENSHOT: 2–3 UI variations side by side with the chosen layout marked]</div>
        </div>

        {/* S10 — Design Decisions & Trade-offs */}
        <div className="cs-section">
          <div className="cs-num">08 · Decisions</div>
          <h2>Decisions and <em>What I Gave Up</em></h2>
          <p>Three decisions defined the project. Each one cost something.</p>
          <div className="cs-tradeoff">
            <div className="cs-tradeoff-label">Decision 01 — Uniform LSR format vs. per-advocate flexibility</div>
            <div className="cs-tradeoff-grid">
              <div className="cs-tradeoff-col">
                <h5>Chose</h5>
                <p>A single standardized format across all 510 advocates.</p>
              </div>
              <div className="cs-tradeoff-col">
                <h5>Gave up</h5>
                <p>Legacy branch-specific report conventions that some senior approvers had built habits around.</p>
              </div>
            </div>
            <div className="cs-tradeoff-resolve">Resolved by co-designing the final format with the Legal Head and aligning approvers to the new structure before rollout.</div>
          </div>
          <div className="cs-tradeoff">
            <div className="cs-tradeoff-label">Decision 02 — Pre-fill CPA data vs. zero-trust re-verification</div>
            <div className="cs-tradeoff-grid">
              <div className="cs-tradeoff-col">
                <h5>Chose</h5>
                <p>Pre-fill with explicit visual tags showing "this field came from CPA — confirm or correct."</p>
              </div>
              <div className="cs-tradeoff-col">
                <h5>Gave up</h5>
                <p>Independent advocate verification of basic property data.</p>
              </div>
            </div>
            <div className="cs-tradeoff-resolve">Mitigated by source-of-truth tagging that makes every field's provenance visible.</div>
          </div>
          <div className="cs-tradeoff">
            <div className="cs-tradeoff-label">Decision 03 — Surface approval signal vs. neutral data view</div>
            <div className="cs-tradeoff-grid">
              <div className="cs-tradeoff-col">
                <h5>Chose</h5>
                <p>A "fields requiring attention" layer driven by rule logic derived from Legal Head interviews.</p>
              </div>
              <div className="cs-tradeoff-col">
                <h5>Gave up</h5>
                <p>A purely neutral information layout. Risk: anchoring bias.</p>
              </div>
            </div>
            <div className="cs-tradeoff-resolve">Mitigated by framing as "attention" not "verdict," with the full report one click away.</div>
          </div>
        </div>

        {/* S11 — Final Solution */}
        <div className="cs-section">
          <div className="cs-num">09 · Solution</div>
          <h2>Three Views, <em>One Connected System</em></h2>
          <p>The platform replaced an email chain and a Salesforce upload with a single coordinated workspace.</p>
          <div style={{marginTop: 32}}>
            <div className="cs-num" style={{marginBottom: 8}}>Advocate view</div>
            <p>Templatized report with pre-filled static sections — boilerplate plus CPA-captured property data. Advocate fills only variable fields (EC findings, encumbrances, observations) through a guided form with single-click inputs where possible.</p>
            <div className="cs-ph ratio-16x9">[SCREENSHOT: Advocate data entry screen with pre-fill markers visible]</div>
          </div>
          <div style={{marginTop: 32}}>
            <div className="cs-num" style={{marginBottom: 8}}>CPA view</div>
            <p>Upfront data entry with vendor auto-suggestion based on location, TAT history, and cost. The CPA's role shifts from email relay to intake.</p>
            <div className="cs-ph ratio-16x9">[SCREENSHOT: CPA case creation + vendor selection screen]</div>
          </div>
          <div style={{marginTop: 32}}>
            <div className="cs-num" style={{marginBottom: 8}}>Approver view</div>
            <p>Decision-critical fields surfaced at the top. Full report available on demand. System flags fields requiring attention based on rule-based logic.</p>
            <div className="cs-ph ratio-16x9">[SCREENSHOT: Approver case detail screen with attention flags visible]</div>
          </div>
        </div>

        {/* S12 — Validation */}
        <div className="cs-section">
          <div className="cs-num">10 · Validation</div>
          <h2>How we <em>validated</em></h2>
          <p>Without a formal user testing budget, validation happened iteratively through the build.</p>
          <div className="cs-grid3">
            <div className="cs-tile">
              <h4>Iterative design validation</h4>
              <p>Reviewed flows weekly with the business SPOC and Legal Head. Tested 2–3 UI variations with advocates before locking.</p>
            </div>
            <div className="cs-tile">
              <h4>Tech validation</h4>
              <p>Worked directly with engineering during build. Caught and fixed several integration issues pre-launch — data mapping edge cases and vendor login flows.</p>
            </div>
            <div className="cs-tile">
              <h4>Post-rollout adjustments</h4>
              <p>Some advocates didn't initially recognize that certain fields were pre-filled and were re-entering data. Fixed within the first rollout week by changing the visual treatment of pre-filled vs. blank fields.</p>
            </div>
          </div>
        </div>

        {/* S13 — Impact */}
        <div className="cs-section">
          <div className="cs-num">11 · Impact</div>
          <h2>What <em>shifted</em></h2>
          <div className="cs-outcomes four">
            <div className="cs-outcome">
              <div className="big"><em>3d→2h</em></div>
              <div className="lab">LSR TAT (p75), Power BI verified</div>
            </div>
            <div className="cs-outcome">
              <div className="big"><em>15–20m</em></div>
              <div className="lab">Approver decision time per case</div>
            </div>
            <div className="cs-outcome">
              <div className="big">₹<em>5 Cr</em></div>
              <div className="lab">Annual licensing savings</div>
            </div>
            <div className="cs-outcome">
              <div className="big"><em>510</em></div>
              <div className="lab">Vendors on a unified format</div>
            </div>
          </div>
          <div className="cs-breakdown">
            <h5>How the ₹5 Cr breaks down</h5>
            <ul>
              <li>400+ branches × 2 SFDC licenses (1 CPA + 1 Legal Manager per branch) — sunsetted</li>
              <li>510 vendor SFDC licenses avoided for future scaling</li>
              <li>Numbers verified against finance</li>
            </ul>
          </div>
          <div className="cs-big">"My team is no longer buried in inconsistent reports — they're empowered to make high-quality risk assessments faster. This is the benchmark for digital transformation for us."<br/><span style={{fontFamily:'var(--f-mono)',fontStyle:'normal',fontSize:11,color:'var(--ink-3)',letterSpacing:'0.12em',textTransform:'uppercase'}}>— Legal Head, Piramal Capital</span></div>
        </div>

        {/* S14 — What I'd Do Differently */}
        <div className="cs-section">
          <div className="cs-num">12 · Reflection</div>
          <h2>What I'd Do <em>Differently</em></h2>
          <div className="cs-grid3">
            <div className="cs-tile">
              <h4>01 — Pilot before scaling</h4>
              <p>I went from internal alignment to 510-vendor rollout without a structured pilot. I got lucky on adoption. Next time I'd run one branch for four weeks with measurable pre/post baselines.</p>
            </div>
            <div className="cs-tile">
              <h4>02 — Instrument earlier</h4>
              <p>I have outcome numbers but not enough input-metric telemetry to defend causality precisely. I'd push for analytics instrumentation in v1, not v2.</p>
            </div>
            <div className="cs-tile">
              <h4>03 — Spend less time on Phase 1</h4>
              <p>The one-week SFDC replacement was over-celebrated and didn't move the real needle. I should have used that political capital to start Phase 2 sooner.</p>
            </div>
          </div>
        </div>

        {/* S15 — What's Next */}
        <div className="cs-section">
          <div className="cs-num">13 · Roadmap</div>
          <h2>What's <em>Next</em></h2>
          <div className="cs-grid3">
            <div className="cs-tile">
              <h4>Now — OCR-based data capture</h4>
              <p>Eliminating the remaining CPA data entry step. Multilingual handwriting is the current blocker; multiple language coverage is improving rapidly.</p>
            </div>
            <div className="cs-tile">
              <h4>Next — Approver pattern intelligence</h4>
              <p>Moving from rule-based "fields requiring attention" to learned risk signals as decision data accumulates.</p>
            </div>
            <div className="cs-tile">
              <h4>Later — Industry consortium standard</h4>
              <p>The uniform LSR format is currently Piramal-only. There's a credible case for an industry standard across NBFCs.</p>
            </div>
          </div>
        </div>

        {/* S16 — Appendix */}
        <div className="cs-section">
          <div className="cs-num">14 · Appendix</div>
          <h2>Appendix</h2>
          <p>Available on request during deeper conversations.</p>
          <ul className="cs-appendix-list">
            <li>Full research synthesis and affinity map</li>
            <li>Field-overlap audit (CPA-captured data vs. advocate-typed fields)</li>
            <li>LSR format alignment workshop deck used with legal leadership</li>
            <li>Approver decision-signal logic spec</li>
            <li>Stakeholder map and influence strategy notes</li>
            <li>Vendor adoption tracking over rollout period</li>
          </ul>
        </div>

        <div className="cs-foot">
          <a onClick={onClose}><span>←</span> Back to canvas</a>
          <a onClick={onNext}>Next case study <span>→</span></a>
        </div>
      </div>
    </div>
  );
};

/* ---------- Case study panel ---------- */

const CaseStudy = ({ project, onClose, onNext }) => {
  React.useEffect(() => {
    const onKey = (e) => { if (e.key === 'Escape') onClose(); };
    window.addEventListener('keydown', onKey);
    return () => window.removeEventListener('keydown', onKey);
  }, [onClose]);

  if (project.id === 'parakh') {
    return <ParakhCaseStudy project={project} onClose={onClose} onNext={onNext} />;
  }

  return (
    <div className="cs-overlay" onClick={onClose}>
      <div className="cs-panel" onClick={(e) => e.stopPropagation()}>
        <button className="cs-close" onClick={onClose} title="Close (Esc)">×</button>

        <div className="cs-hero">
          <div className="cs-eyebrow">
            <span>{project.code} · {project.name}</span>
            <span>{project.year}</span>
            <span>{project.audience}</span>
          </div>
          <h1>
            {project.title.split(',')[0]}, <em>{project.title.split(',').slice(1).join(',').trim()}</em>
          </h1>
          <p className="cs-lede">{project.lede}</p>
          <div className="cs-meta">
            <div>Client<strong>{project.client}</strong></div>
            <div>Role<strong>{project.role}</strong></div>
            <div>Duration<strong>{project.duration}</strong></div>
            <div>Team<strong>{project.team}</strong></div>
          </div>
        </div>

        <div className="cs-section">
          <div className="cs-num">01 · Problem</div>
          <h2>What was <em>broken</em></h2>
          <p>{project.problem}</p>
          <div className="cs-ph short">PROBLEM DIAGRAM · PLACEHOLDER</div>
        </div>

        <div className="cs-section">
          <div className="cs-num">02 · Research</div>
          <h2>What we <em>learned</em></h2>
          <p>{project.research}</p>
          <div className="cs-grid2">
            <div className="cs-tile"><h4>Methods</h4><p>Contextual inquiry · Diary studies · Session replays · Stakeholder interviews</p></div>
            <div className="cs-tile"><h4>Artifacts</h4><p>Journey maps · Service blueprints · Opportunity matrix · Jobs-to-be-done</p></div>
          </div>
          <div className="cs-big">"{project.quote.replace(/^"|"$/g,'')}"<br/><span style={{fontFamily:'var(--f-mono)',fontStyle:'normal',fontSize:11,color:'var(--ink-3)',letterSpacing:'0.12em',textTransform:'uppercase'}}>— {project.quoteWho}</span></div>
        </div>

        <div className="cs-section">
          <div className="cs-num">03 · Design</div>
          <h2>How we <em>solved it</em></h2>
          <p>{project.design}</p>
          <div className="cs-ph tall">HERO DESIGN · PLACEHOLDER</div>
          <div className="cs-grid2">
            <div className="cs-ph short" style={{margin:0}}>FLOW 01</div>
            <div className="cs-ph short" style={{margin:0}}>FLOW 02</div>
          </div>
        </div>

        <div className="cs-section">
          <div className="cs-num">04 · Outcome</div>
          <h2>What <em>shifted</em></h2>
          <div className="cs-outcomes">
            {project.outcomes.map((o, i) => (
              <div key={i} className="cs-outcome">
                <div className="big"><em>{o.big}</em></div>
                <div className="lab">{o.lab}</div>
              </div>
            ))}
          </div>
          <p style={{marginTop:32}}>The numbers matter, but what I remember is the first week of rollout: agents stopped asking for the old version back, and a legal partner emailed to say she finished a report before coffee. That's the click.</p>
        </div>

        <div className="cs-foot">
          <a onClick={onClose}><span>←</span> Back to canvas</a>
          <a onClick={onNext}>Next case study <span>→</span></a>
        </div>
      </div>
    </div>
  );
};

Object.assign(window, { Hero, SectionHead, About, Sticky, Stats, Photo, Tools, ProjectCard, Timeline, Contact, Marquee, ParakhCaseStudy, CaseStudy });
