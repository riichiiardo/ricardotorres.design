// Signature case studies. Content follows the brief's source-of-truth rules:
// qualitative descriptions and clearly labeled interpretations only — no invented metrics.

export const FLAGSHIPS = [
  {
    slug: "fundacion-santa-fe",
    number: "01",
    title: "Fundación Santa Fe de Bogotá",
    client: "Fundación Santa Fe de Bogotá",
    industry: "Healthcare",
    role: "UX/UI Project Lead — Digital Product Designer",
    platform: "Web, Mobile & Design System",
    palette: { bg: "#0C3B45", accent: "#35B6A6", ink: "#EAF4F2", soft: "#124B57" },
    variant: "ecosystem",
    tagline: "Designing consistency across a complex healthcare ecosystem.",
    challenge:
      "Patients needed to manage appointments, medical requests and diagnostic images from their phones — including searching for doctors by specialty and doing the same management for their family nucleus.",
    approach:
      "Design team leadership using UX methodologies — interviews, Design Thinking activities, prototyping and constant testing — with a strategy built on Design Sprint and Design Thinking, supported by a design system for consistency across products.",
    result:
      "A patient app covering appointments, payments, doctor search and family management, complemented by a web view for clinical-history consultation. (Qualitative outcome — Figma source narrative.)",
    snapshot: [
      { label: "Role", value: "UX/UI Project Lead" },
      { label: "Team", value: "Cross-functional product team — design, engineering, business" },
      { label: "Context", value: "Hospital group's digital product ecosystem" },
      { label: "Platform", value: "Web experiences, mobile applications, self-service flows" },
      { label: "Tools", value: "Figma, UXCam, Hotjar, Maze, Jira" },
      { label: "Methods", value: "UX Research, Usability Testing, Information Architecture, Design Systems, UX Analytics" },
      { label: "Constraints", value: "High-trust healthcare context — clarity and error prevention over novelty" },
    ],
    sections: [
      {
        type: "text",
        id: "context",
        label: "Context & Problem",
        title: "A healthcare ecosystem that had outgrown its interfaces",
        body: [
          "Fundación Santa Fe de Bogotá operates one of Colombia's most important healthcare services. Its digital presence spanned website experiences, mobile applications and patient self-service flows — each shaped at different moments by different needs.",
          "The people affected were patients trying to complete sensitive tasks — finding information, managing services, understanding next steps — often under stress. Internally, every product team solved similar problems differently, which made the experience inconsistent and expensive to evolve.",
        ],
        statement:
          "In healthcare, an unclear interface is not an inconvenience — it is a barrier between a person and the care they need.",
      },
      {
        type: "steps",
        id: "discovery",
        label: "Discovery",
        title: "Mapping the ecosystem before touching a screen",
        intro: "The discovery phase aligned business, design and technology around a shared picture of the current state.",
        steps: [
          { name: "Kickoff & Alignment", detail: "Stakeholder sessions to agree on goals, scope and what success should look like for patients and for the organization." },
          { name: "Ecosystem Mapping", detail: "Inventory of digital touchpoints — web, mobile, self-service — and how patients actually moved between them." },
          { name: "Pain-point Inventory", detail: "Collected recurring friction from existing experiences and support feedback into a shared, prioritized list." },
          { name: "Research Questions", detail: "Framed what we needed to learn: where do patients hesitate, where do they abandon, and why." },
          { name: "Opportunity Areas", detail: "Grouped findings into themes — self-service clarity, navigation consistency, reusable patterns." },
        ],
      },
      {
        type: "columns",
        id: "research",
        label: "Research",
        title: "Evidence from real behavior, not assumptions",
        columns: [
          {
            heading: "Usability Testing — Maze",
            body: "Remote tests on key self-service tasks showed where patients expected the next action to be — and where the interface sent a different signal. Qualitative finding: users hesitated at steps where the primary action was not visually dominant.",
          },
          {
            heading: "Behavior Analytics — UXCam & Hotjar",
            body: "Session recordings and heatmaps revealed repeated re-reading and backtracking on information-dense screens — a signal that hierarchy, not content volume, was the core issue. (Qualitative observation.)",
          },
          {
            heading: "Synthesis with the Team",
            body: "Findings were shared with business and engineering in working sessions, so prioritization was a joint decision rather than a design handoff.",
          },
        ],
      },
      {
        type: "insights",
        id: "synthesis",
        label: "Synthesis",
        title: "From observations to design principles",
        items: [
          {
            observation: "Patients hesitated when the next action competed with secondary content.",
            insight: "In high-stress contexts, people scan for one clear path — options read as obstacles.",
            opportunity: "Make the primary action unmissable at every step of self-service flows.",
            principle: "One screen, one decision.",
          },
          {
            observation: "Similar tasks looked and behaved differently across products.",
            insight: "Inconsistency forced users to relearn patterns they had already mastered elsewhere in the ecosystem.",
            opportunity: "A shared component and pattern library across web and mobile.",
            principle: "Design the system, not the screen.",
          },
          {
            observation: "Teams rebuilt similar UI repeatedly.",
            insight: "Without shared foundations, every new feature paid the same design and development cost again.",
            opportunity: "Tokens, components and documentation reusable by any product team.",
            principle: "Reuse is a feature.",
          },
        ],
      },
      {
        type: "steps",
        id: "architecture",
        label: "Information Architecture",
        title: "Reorganizing around patient tasks",
        intro: "The structure shifted from internal organization logic to the tasks patients actually arrive to complete.",
        steps: [
          { name: "Before", detail: "Navigation and flows mirrored internal service structures — clear to the organization, foreign to patients." },
          { name: "Decision", detail: "Regroup content and self-service actions around patient intents, validated against research findings. (Design decision.)" },
          { name: "After", detail: "Task-oriented journeys with shorter paths to the most frequent self-service actions." },
        ],
      },
      {
        type: "steps",
        id: "wireframes",
        label: "Wireframes",
        title: "From structure to testable flows",
        steps: [
          { name: "Sketch", detail: "Low-commitment explorations of self-service flows — many directions, fast discard." },
          { name: "Low-fidelity", detail: "Structure and hierarchy validated with the team before any visual design." },
          { name: "Mid-fidelity", detail: "Real content and realistic states introduced; edge cases surfaced early with engineering." },
          { name: "High-fidelity", detail: "Design-system-driven screens ready for prototyping and usability testing." },
        ],
      },
      {
        type: "text",
        id: "interaction",
        label: "Interaction Design",
        title: "Designing the states nobody sees in a mockup",
        body: [
          "Beyond the happy path: loading, error, empty and recovery states were designed explicitly — critical in flows where a failed action can mean a missed appointment or a repeated visit.",
          "Responsive behavior was defined as part of the system, so patterns degraded gracefully from desktop management views to mobile self-service.",
        ],
      },
      {
        type: "visual",
        id: "ui-visual",
        variant: "ecosystem",
      },
      {
        type: "text",
        id: "design-system",
        label: "Design System",
        title: "Why the system came before the screens",
        body: [
          "Color, typography, spacing, buttons, forms, cards and navigation were defined as tokens and components with documented states — so any team could assemble consistent experiences without redesigning fundamentals.",
          "The system was structured around the ecosystem's reality: multiple products, multiple teams, one patient. That is why consistency rules and usage guidance mattered as much as the components themselves.",
        ],
        images: ["/images/projects/design-system-colors.jpg", "/images/projects/design-system-typography.jpg"],
      },
      {
        type: "loop",
        id: "validation",
        label: "Validation & Iteration",
        title: "A loop, not a launch",
        steps: [
          { name: "Hypothesis", detail: "Clearer primary actions and task-oriented flows would reduce hesitation in self-service tasks." },
          { name: "Test", detail: "Maze usability tests on prototypes; UXCam and Hotjar monitoring on live experiences." },
          { name: "Observation", detail: "Validation observation: hesitation dropped where hierarchy was simplified; dense screens still triggered backtracking." },
          { name: "Decision", detail: "Split overloaded screens into focused steps; strengthened primary actions." },
          { name: "Iteration", detail: "Evidence-informed versions replaced opinion-driven debates — the final UI is a consequence of this loop." },
        ],
      },
      {
        type: "text",
        id: "impact",
        label: "Impact",
        title: "What changed",
        body: [
          "Qualitative outcomes: improved clarity in self-service journeys, stronger consistency across the product ecosystem, reusable components that reduced repeated design and development effort, and closer alignment between business, design and technology.",
          "No numerical results are claimed here — measurement frameworks were established, but documented figures are not reproduced in this portfolio.",
        ],
      },
    ],
    contribution: {
      mine: [
        "Discovery & stakeholder alignment",
        "UX research planning and usability testing (Maze, UXCam, Hotjar)",
        "Information architecture and user flows",
        "Interaction design and wireframing",
        "UI design and prototyping",
        "Design system definition and documentation",
        "Design leadership and delivery support",
      ],
      team: [
        "Engineering implementation and technical architecture",
        "Business requirements and organizational prioritization",
        "Content and clinical subject-matter input",
      ],
    },
    learnings: {
      learned:
        "A design system succeeds when it is adopted, not when it is documented — involving engineers in its definition mattered more than the component inventory itself.",
      differently:
        "Introduce analytics instrumentation earlier, so baseline behavior is captured before redesign decisions are made.",
      next:
        "Explore personalization of self-service journeys based on patient context, carefully balanced against privacy and trust.",
    },
  },
  {
    slug: "telefonica-movistar",
    number: "02",
    title: "Telefónica / Movistar",
    client: "Telefónica / Movistar",
    industry: "Telecommunications",
    role: "Digital Product Designer — Technical Project Management",
    platform: "Mobile app (field technicians) & Design System",
    palette: { bg: "#032F5E", accent: "#019DF4", ink: "#E9F4FE", soft: "#0A4178" },
    variant: "ops",
    tagline: "Operational UX for the people who connect homes.",
    challenge:
      "Technicians performing home internet and TV installations needed an internal mobile app that accurately reflects how the installation went and verifies that everything is in order within the contract.",
    approach:
      "Design flows that verify the viability and stability of Broadband, TV and IP Voice — HGU change tests, firmware registers, WiFi and service checks — as agile as possible, because the time a technician spends at the client's home is short.",
    result:
      "A mobile validation app for field installations — HGU change tests, service and WiFi verification — designed for speed and clarity on-site, consistent through a shared design system. (Qualitative outcome — Figma source narrative.)",
    snapshot: [
      { label: "Role", value: "Digital Product Designer & Technical Project Management" },
      { label: "Team", value: "Operations, field technicians, engineering, business stakeholders" },
      { label: "Context", value: "Home service installation and service validation operations" },
      { label: "Platform", value: "Operational web application" },
      { label: "Tools", value: "Figma, Jira, Azure DevOps, usability monitoring tools" },
      { label: "Methods", value: "Operational UX, Information Architecture, Design Systems, Usability Monitoring, Cross-functional Collaboration" },
      { label: "Constraints", value: "Field conditions: time pressure, variable connectivity, divided attention" },
    ],
    sections: [
      {
        type: "text",
        id: "context",
        label: "Context & Problem",
        title: "Software used standing in a hallway, not sitting at a desk",
        body: [
          "Field technicians installing and validating home services relied on a web application to execute and register their work. The workflow was operationally complex: multiple steps, validations and dependencies — performed under time pressure, often on-site with the customer watching.",
          "The design challenge was not aesthetic. Every ambiguous step created calls to support, repeated visits or incomplete registrations — operational cost hiding inside an interface problem.",
        ],
        statement: "In operational UX, the interface is part of the job — friction in the tool becomes friction in the service.",
      },
      {
        type: "steps",
        id: "discovery",
        label: "Discovery",
        title: "Following the real workflow, not the documented one",
        steps: [
          { name: "Kickoff", detail: "Aligned with operations and technology on scope: installation and service validation flows." },
          { name: "Workflow Exploration", detail: "Mapped the technician's actual sequence of tasks — including the workarounds the official process didn't describe." },
          { name: "Pain-point Inventory", detail: "Collected friction from field feedback and support patterns into a shared inventory." },
          { name: "Problem Framing", detail: "Reframed the work from 'redesign screens' to 'shorten and de-risk the technician's task sequence'." },
          { name: "Opportunity Areas", detail: "Step consolidation, clearer validation states, consistent patterns across the application." },
        ],
      },
      {
        type: "columns",
        id: "research",
        label: "Research",
        title: "Learning from the field",
        columns: [
          {
            heading: "Field Feedback",
            body: "Input from technicians and operations surfaced where the tool slowed the job: unclear validation states, steps that required information the technician didn't yet have, and screens dense with rarely used options. (Qualitative finding.)",
          },
          {
            heading: "Usability Monitoring",
            body: "Ongoing monitoring of the operational experience informed prioritization — the team could see which flows generated friction rather than guessing. (Qualitative observation.)",
          },
          {
            heading: "Business & Technology Alignment",
            body: "Operational constraints and technical dependencies were mapped with engineering early, so design proposals stayed implementable.",
          },
        ],
      },
      {
        type: "insights",
        id: "synthesis",
        label: "Synthesis",
        title: "What the field taught us",
        items: [
          {
            observation: "Technicians lost time confirming whether a step had actually registered.",
            insight: "Ambiguous system feedback forces double-checking — a hidden tax on every job.",
            opportunity: "Unmistakable success, pending and error states for every operational action.",
            principle: "The system must answer 'did it work?' instantly.",
          },
          {
            observation: "Screens presented every option at once, though each job uses a small subset.",
            insight: "Density designed for exceptions penalized the common case.",
            opportunity: "Progressive disclosure around the typical installation sequence.",
            principle: "Design for the 90% job, make the 10% reachable.",
          },
          {
            observation: "Different modules solved similar tasks differently.",
            insight: "Each inconsistency added training cost and error risk for rotating staff.",
            opportunity: "A shared design system for operational patterns.",
            principle: "One pattern, learned once, used everywhere.",
          },
        ],
      },
      {
        type: "steps",
        id: "architecture",
        label: "Information Architecture & Flows",
        title: "Rebuilding the task sequence",
        steps: [
          { name: "Before", detail: "Flows organized around system modules; technicians jumped between sections to complete one job." },
          { name: "Decision", detail: "Restructure around the job lifecycle: prepare, install, validate, register. (Design decision.)" },
          { name: "After", detail: "Guided task flows with explicit validation checkpoints and fewer context switches." },
        ],
      },
      {
        type: "text",
        id: "interaction",
        label: "Interaction Design",
        title: "States for real-world conditions",
        body: [
          "Operational interfaces live or die in their states: loading under poor connectivity, validation errors with clear recovery, and registration confirmations that leave no doubt.",
          "Interaction patterns were standardized so that a technician who learned one flow could predict every other.",
        ],
      },
      {
        type: "visual",
        id: "ui-visual",
        variant: "ops",
      },
      {
        type: "text",
        id: "design-system",
        label: "Design System",
        title: "Consistency as an operational tool",
        body: [
          "The design system covered components, forms, tables and status patterns used across the web application — with usage guidance so new modules inherited the same operational logic.",
          "It was structured this way because the product is a tool of trade: predictability reduces errors, training time and support load. The system's value is measured in smoother operations, not in component counts.",
        ],
      },
      {
        type: "loop",
        id: "validation",
        label: "Validation & Iteration",
        title: "Monitored usability, continuous refinement",
        steps: [
          { name: "Hypothesis", detail: "Task-oriented flows with explicit states would reduce friction in installation and validation." },
          { name: "Test", detail: "Review sessions with operational profiles; usability monitoring after releases." },
          { name: "Observation", detail: "Validation observation: guided flows reduced orientation problems; some validation messages still required clearer wording." },
          { name: "Decision", detail: "Refined feedback copy and state visibility in the most sensitive steps." },
          { name: "Iteration", detail: "Versioned improvements shipped with engineering through the agile cadence." },
        ],
      },
      {
        type: "text",
        id: "impact",
        label: "Impact",
        title: "What changed",
        body: [
          "Qualitative outcomes: clearer operational workflows for field installation and service validation, improved consistency across the web application through the design system, and stronger alignment between business, operations and technology.",
          "No invented figures: the value of this work is described through the workflows it clarified, not through unverified percentages.",
        ],
      },
    ],
    contribution: {
      mine: [
        "Technical project management and cross-functional coordination",
        "Operational workflow mapping and information architecture",
        "Interaction design for installation and validation flows",
        "Web application UI design",
        "Design system definition",
        "Usability monitoring and iteration",
        "Stakeholder management across business and technology",
      ],
      team: [
        "Engineering implementation",
        "Operations process ownership",
        "Field technician feedback and operational validation",
      ],
    },
    learnings: {
      learned:
        "Designing for field users changes every assumption — the 'user context' is not a slide, it is a hallway, a ladder and a waiting customer.",
      differently:
        "Shadow technicians on-site earlier; documented processes and real practice diverge more than any stakeholder session reveals.",
      next:
        "Explore offline-first patterns for low-connectivity scenarios, where operational tools are most fragile.",
    },
  },
  {
    slug: "secretaria-salud-ai",
    number: "03",
    title: "Secretaría Distrital de Salud",
    client: "Secretaría Distrital de Salud — Bogotá",
    industry: "Public Health / GovTech",
    role: "AI Product Designer — Data Visualization",
    platform: "Intranet + Power BI Integration",
    palette: { bg: "#101418", accent: "#3ECF8E", ink: "#E8F5EE", soft: "#1A2126" },
    variant: "dataviz",
    tagline: "Making AI-assisted epidemiology readable for decision-makers.",
    challenge:
      "AI-based measurement of COVID-19 cases and the interpretation of possible future outbreaks produced complex information that public health teams needed to read quickly and correctly.",
    approach:
      "Design an intranet experience, integrated with Power BI, that organizes model outputs into a clear information hierarchy — what is happening, what might happen, and what needs attention.",
    result:
      "A decision-support experience that translates AI outputs into interpretable, human-centered visualizations for health authorities. (Qualitative outcome.)",
    snapshot: [
      { label: "Role", value: "AI Product Designer — Data Visualization" },
      { label: "Team", value: "Data/analytics, public health stakeholders, technology" },
      { label: "Context", value: "COVID-19 case measurement and outbreak interpretation" },
      { label: "Platform", value: "Intranet experience integrated with Power BI" },
      { label: "Tools", value: "Figma, Power BI" },
      { label: "Methods", value: "AI Product Design, Data Visualization, Information Hierarchy, Human-Centered Design" },
      { label: "Constraints", value: "High-stakes interpretation — clarity and honest representation of model outputs" },
    ],
    sections: [
      {
        type: "text",
        id: "context",
        label: "Context & Problem",
        title: "When the data exists but the decision is still hard",
        body: [
          "The Secretaría Distrital de Salud worked with AI-based measurement of COVID-19 cases and models that interpreted possible future outbreaks. The information existed — but complex model outputs are not decisions.",
          "The people affected were health authorities and analysts who needed to understand the current situation and anticipate scenarios. The design challenge: present AI-generated information with enough hierarchy and context to support real decisions, without oversimplifying what the models actually say.",
        ],
        statement: "An AI model that people can't read is a decision-making risk, not an asset.",
      },
      {
        type: "steps",
        id: "discovery",
        label: "Discovery",
        title: "Understanding how decisions actually get made",
        steps: [
          { name: "Kickoff", detail: "Aligned with health and data stakeholders on what the intranet experience needed to answer." },
          { name: "Exploration", detail: "Understood the model outputs: case measurement, outbreak interpretation — and what each audience needed from them." },
          { name: "Pain-point Inventory", detail: "Complex information without hierarchy forces each reader to do their own interpretation work." },
          { name: "Problem Framing", detail: "From 'display the data' to 'support the reading of the data'." },
          { name: "Opportunity Areas", detail: "Information hierarchy, visual encoding, layered detail for different readers." },
        ],
      },
      {
        type: "columns",
        id: "research",
        label: "Research & Interpretation",
        title: "Designing for readers, not for dashboards",
        columns: [
          {
            heading: "Stakeholder Reading Needs",
            body: "Different readers needed different depths: an executive reading of the situation, and an analytical reading for teams working with the data. (Qualitative finding from stakeholder work.)",
          },
          {
            heading: "AI Output Interpretation",
            body: "Working with the data team to understand what the models produce — and what they don't — so the interface would represent uncertainty honestly rather than imply false precision. (Design decision.)",
          },
          {
            heading: "Power BI Context",
            body: "The experience integrated with Power BI, so the design worked with the platform's strengths instead of fighting its constraints.",
          },
        ],
      },
      {
        type: "insights",
        id: "synthesis",
        label: "Synthesis",
        title: "Principles for decision-support design",
        items: [
          {
            observation: "Readers scanned for 'what changed' before exploring 'why'.",
            insight: "Situation awareness precedes analysis — the interface must answer the first question in seconds.",
            opportunity: "A top layer that states the current situation before any detail.",
            principle: "Answer first, explain second.",
          },
          {
            observation: "Model projections risk being read as certainties.",
            insight: "Visual confidence implies statistical confidence — design can accidentally lie.",
            opportunity: "Visual treatment that distinguishes measured data from projected scenarios.",
            principle: "Make uncertainty visible, not alarming.",
          },
          {
            observation: "Dense dashboards pushed interpretation work onto the reader.",
            insight: "Every uncompared number requires the reader to hold context in memory.",
            opportunity: "Hierarchy and comparison built into the visualization itself.",
            principle: "The interface does the first pass of analysis.",
          },
        ],
      },
      {
        type: "steps",
        id: "architecture",
        label: "Information Architecture",
        title: "Layering complexity instead of removing it",
        steps: [
          { name: "Before", detail: "Information organized by data source; readers assembled their own picture." },
          { name: "Decision", detail: "Structure by questions: current situation → possible scenarios → supporting detail. (Design decision.)" },
          { name: "After", detail: "Layered experience — situational overview first, analytical depth on demand through the Power BI integration." },
        ],
      },
      {
        type: "text",
        id: "ui-design",
        label: "UI Design & Data Visualization",
        title: "Visual hierarchy as a public-health tool",
        body: [
          "Visualization choices prioritized correct reading: clear scales, restrained color reserved for meaning, and direct labeling over legends where possible.",
          "The interface was designed to be read in a meeting, not only explored alone — screens that support a narrative, not just an analysis.",
        ],
      },
      {
        type: "visual",
        id: "ui-visual",
        variant: "dataviz",
      },
      {
        type: "loop",
        id: "validation",
        label: "Validation & Iteration",
        title: "Reviewing the reading, not just the screens",
        steps: [
          { name: "Hypothesis", detail: "Question-oriented hierarchy would let stakeholders grasp the situation faster than source-oriented dashboards." },
          { name: "Test", detail: "Review sessions with stakeholder profiles using realistic scenarios." },
          { name: "Observation", detail: "Validation observation: the layered structure supported quick situational reading; some labels required domain refinement with health experts." },
          { name: "Decision", detail: "Terminology and reading order adjusted with subject-matter stakeholders." },
          { name: "Iteration", detail: "Progressive refinements kept the experience aligned with how the information is actually used." },
        ],
      },
      {
        type: "text",
        id: "impact",
        label: "Impact",
        title: "What changed",
        body: [
          "Qualitative outcomes: complex AI-generated information became readable for non-technical decision-makers; measured data and projections became visually distinguishable; and the intranet experience supported faster, better-grounded conversations about the public health situation.",
          "Impact is described qualitatively — no adoption or accuracy figures are claimed without documentation.",
        ],
      },
    ],
    contribution: {
      mine: [
        "AI product design and experience definition",
        "Information architecture and hierarchy",
        "Data visualization design",
        "Intranet UI design integrated with Power BI",
        "Stakeholder collaboration with health and data teams",
      ],
      team: [
        "AI/data modeling and measurement",
        "Power BI integration and platform engineering",
        "Public health subject-matter expertise",
      ],
    },
    learnings: {
      learned:
        "In AI products, the designer's job is partly epistemological: the interface decides what the model appears to know. That responsibility changes how you design every chart.",
      differently:
        "Involve end readers in low-fidelity stages — data visualization validated only with technical stakeholders optimizes for the wrong reader.",
      next:
        "Explore guided narratives on top of dashboards — interfaces that walk decision-makers through a situation, not just present it.",
    },
  },
  {
    slug: "secretaria-gobierno-voice",
    number: "04",
    title: "Secretaría Distrital de Gobierno",
    client: "Secretaría Distrital de Gobierno — Bogotá",
    industry: "GovTech / Civic Innovation",
    role: "Conversational UX Designer — Voice UX",
    platform: "Voice-enabled Web — Google Cloud Platform",
    palette: { bg: "#1B1437", accent: "#8B7CF6", ink: "#EFEBFF", soft: "#241B47" },
    variant: "voice",
    tagline: "A voice-first civic experience on Google Cloud Platform.",
    challenge:
      "Citizens needed to manage CVs and profiles through a digital experience — and the project explored voice and audio interaction from smartphones, computers and microphone-enabled devices as an alternative, more accessible model.",
    approach:
      "Design conversational flows, intents and voice interaction patterns integrated with Google Cloud Platform — treating conversation as an interface with its own architecture, states and failure modes.",
    result:
      "A voice-enabled experience concept designed around natural interaction, with defined conversational paths, fallbacks and recovery flows. (Qualitative outcome.)",
    snapshot: [
      { label: "Role", value: "Conversational UX Designer — Voice UX" },
      { label: "Team", value: "Engineering, cloud (GCP), civic stakeholders" },
      { label: "Context", value: "Citizen profile / CV management through voice and audio" },
      { label: "Platform", value: "Smartphones, computers and microphone-enabled devices" },
      { label: "Tools", value: "Figma, Google Cloud Platform" },
      { label: "Methods", value: "Conversational UX, Voice UX, Information Architecture, Interaction Flows, Human-Centered Design" },
      { label: "Constraints", value: "Speech is ambiguous — every intent needs a fallback, and every failure a graceful recovery" },
    ],
    sections: [
      {
        type: "text",
        id: "context",
        label: "Context & Problem",
        title: "Forms assume a keyboard. Citizens don't always have one.",
        body: [
          "Managing a CV or citizen profile digitally usually means forms: fields, validation, dropdowns. This project with the Secretaría Distrital de Gobierno explored a different model — voice and audio interaction from smartphones, computers and microphone-enabled devices, integrated with Google Cloud Platform.",
          "The design challenge was double: make profile management work as a conversation, and make that conversation robust — because speech is ambiguous, environments are noisy, and people don't speak in form fields.",
        ],
        statement: "In voice UX, the interface is a dialogue — and every dialogue can be misunderstood.",
      },
      {
        type: "steps",
        id: "discovery",
        label: "Discovery",
        title: "Framing conversation as an interface",
        steps: [
          { name: "Kickoff", detail: "Aligned on the opportunity: voice as an alternative interaction model for citizen profile management." },
          { name: "Exploration", detail: "Mapped which profile tasks translate well to speech — and which resist it (long lists, precise edits, review)." },
          { name: "Pain-point Inventory", detail: "Form-based flows exclude users with limited literacy, motor constraints or mobile-only contexts." },
          { name: "Problem Framing", detail: "Not 'add voice to a form' — design a conversational experience with its own logic." },
          { name: "Opportunity Areas", detail: "Guided voice flows, confirmation patterns, multimodal fallbacks." },
        ],
      },
      {
        type: "columns",
        id: "research",
        label: "Research & Framing",
        title: "How people actually talk to machines",
        columns: [
          {
            heading: "Conversational Expectations",
            body: "People phrase the same intent in many ways, interrupt themselves, and expect the system to confirm before acting. Design implication: intents must be generous, confirmations explicit. (Qualitative finding / design decision.)",
          },
          {
            heading: "Task Suitability",
            body: "Voice excels at guided, linear tasks; review and correction benefit from visual support. The flows were designed with that division of labor in mind.",
          },
          {
            heading: "Technical Collaboration",
            body: "Close work with the engineering side on Google Cloud Platform capabilities, so conversational design stayed within what the platform could reliably deliver.",
          },
        ],
      },
      {
        type: "insights",
        id: "synthesis",
        label: "Synthesis",
        title: "Principles for the conversational experience",
        items: [
          {
            observation: "Users can't see what's possible in a voice interface.",
            insight: "Discoverability must be spoken — the system has to offer options, not wait for commands.",
            opportunity: "Guided prompts that present the next sensible actions.",
            principle: "The conversation leads, the citizen follows.",
          },
          {
            observation: "Misrecognition is inevitable in real environments.",
            insight: "The quality of a voice product is measured by its recovery, not its ideal path.",
            opportunity: "Fallback logic and recovery flows designed as first-class paths.",
            principle: "Design for misunderstanding.",
          },
          {
            observation: "Sensitive profile changes by voice feel risky without confirmation.",
            insight: "Trust in conversational systems is built through explicit, skippable confirmation.",
            opportunity: "Read-back and confirm patterns before any write action.",
            principle: "Never act silently on speech.",
          },
        ],
      },
      {
        type: "steps",
        id: "interaction",
        label: "Interaction & Conversation Design",
        title: "Intents, paths and graceful failure",
        steps: [
          { name: "Intent Map", detail: "Defined the intents behind profile management — create, update, review, confirm — with their phrasing variations." },
          { name: "Conversational Paths", detail: "Main flows scripted as dialogues: prompts, user responses, system confirmations." },
          { name: "Fallback Logic", detail: "No-match and no-input paths with re-prompting strategies instead of dead ends." },
          { name: "Recovery", detail: "Misheard data? The system reads back, offers correction, and only then proceeds." },
          { name: "Alternative Flows", detail: "Multimodal support — voice drives, screen confirms — across smartphones and computers." },
        ],
      },
      {
        type: "visual",
        id: "ui-visual",
        variant: "voice",
      },
      {
        type: "text",
        id: "architecture",
        label: "Information Architecture",
        title: "Structure that survives being spoken",
        body: [
          "The profile's information architecture was reorganized for conversation: shallow structures, small decision points, and an order that matches how people describe themselves rather than how databases store them. (Design decision.)",
          "This IA work is what allowed the same experience to live across devices — the structure carries the logic; voice and screen are just its surfaces.",
        ],
      },
      {
        type: "loop",
        id: "validation",
        label: "Validation & Iteration",
        title: "Testing the dialogue",
        steps: [
          { name: "Hypothesis", detail: "Guided conversational flows with explicit confirmation would make profile management approachable through voice." },
          { name: "Test", detail: "Script walkthroughs and prototype reviews of the main conversational paths." },
          { name: "Observation", detail: "Validation observation: confirmations built trust but added length; frequent intents needed shorter paths." },
          { name: "Decision", detail: "Tiered confirmation — full read-back for critical changes, lightweight confirmation for low-risk edits." },
          { name: "Iteration", detail: "Prompts and flows refined iteratively with the technical team on GCP." },
        ],
      },
      {
        type: "text",
        id: "impact",
        label: "Impact",
        title: "What changed",
        body: [
          "Qualitative outcomes: an alternative interaction model for a civic service — designed with the rigor of visual UX: architecture, flows, states and failure modes — and a working alignment between conversational design and Google Cloud Platform engineering.",
          "The project demonstrates technology-forward design practice; usage figures are not claimed without documentation.",
        ],
      },
    ],
    contribution: {
      mine: [
        "Conversational UX and voice UX design",
        "Intent definition and conversational paths",
        "Fallback and recovery flow design",
        "Information architecture for voice interaction",
        "Interaction flows across devices",
        "Technical collaboration with GCP engineering",
      ],
      team: [
        "Google Cloud Platform integration and engineering",
        "Civic service definition and stakeholder input",
      ],
    },
    learnings: {
      learned:
        "Voice UX is interaction design with the visuals removed — every weakness in the flow logic becomes audible. It made me a stricter designer of paths and states everywhere else.",
      differently:
        "Prototype with real speech recognition earlier; written scripts hide the ambiguity that actual speech introduces.",
      next:
        "Explore multimodal patterns where voice initiates and screen completes — the strongest combination for complex civic tasks.",
    },
  },
];

export const getFlagship = (slug) => FLAGSHIPS.find((p) => p.slug === slug);
