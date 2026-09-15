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
    slug: "gabo",
    number: "03",
    title: "GABO — Gobierno Abierto Bogotá",
    client: "Alcaldía de Bogotá",
    industry: "GovTech / Public Sector",
    role: "UX/UI Designer",
    platform: "Android mobile app",
    palette: { bg: "#8F1D16", accent: "#E43D30", ink: "#FDF3F2", soft: "#B02818" },
    variant: "mobile",
    tagline: "City services in every citizen's pocket.",
    challenge:
      "Bogotá needed a mobile channel that brings transparency, citizen participation and the district's aid programs together — and lets people complete city procedures without leaving home.",
    approach:
      "Organize the city's offer of procedures and services into clear, card-based mobile journeys — including SuperCADE Virtual access, public-service payments, petitions and account management.",
    result:
      "The GAB app: an iterative civic solution with SuperCADE Virtual access, district aid information and city procedures — published on Google Play. (Source: Google Play listing.)",
    snapshot: [
      { label: "Role", value: "UX/UI Designer" },
      { label: "Team", value: "Civic stakeholders, engineering" },
      { label: "Context", value: "Gobierno Abierto Bogotá (GAB) — open government initiative" },
      { label: "Platform", value: "Android application" },
      { label: "Tools", value: "Figma" },
      { label: "Methods", value: "Information Architecture, Interaction Design, Mobile UX, Human-Centered Design" },
      { label: "Constraints", value: "Broad public audience — clarity and accessibility over sophistication" },
    ],
    sections: [
      {
        type: "text",
        id: "context",
        label: "Context & Problem",
        title: "A city hall that fits in a pocket",
        body: [
          "Gobierno Abierto Bogotá promotes transparency, citizen participation and information about the aid the district offers — monetary transfers, exchangeable vouchers, school feeding, support for pregnant mothers. The challenge: bring that offer, plus the city's procedures and services, into a mobile experience any citizen can use.",
          "The app was conceived as an iterative solution that grows and strengthens permanently — so the structure had to welcome new services without breaking what already works.",
        ],
        statement: "A city service that requires a physical visit excludes the people who need it most.",
      },
      {
        type: "steps",
        id: "architecture",
        label: "Information Architecture",
        title: "One hub for the whole city",
        steps: [
          { name: "Before", detail: "Procedures, aid information and citizen attention were scattered across offices, phone lines and web pages." },
          { name: "Decision", detail: "A single mobile home organized by citizen tasks — manage from home, consult & pay, petitions, services offer. (Design decision.)" },
          { name: "After", detail: "A card-based hub with direct access to SuperCADE Virtual, public-service payments, 'Bogotá te escucha' petitions and RED CADE attention points." },
        ],
      },
      {
        type: "text",
        id: "interaction",
        label: "Interaction Design",
        title: "No citizen left at a dead end",
        body: [
          "The experience is built around direct task cards with icons and plain language. Assisted channels — chat, video call with an advisor and the 195 phone line — are always one tap away, so nobody gets stuck inside a procedure.",
          "Personal management ('Mi cuenta') is separated from general services, keeping citizen data in its own clear space.",
        ],
      },
      {
        type: "text",
        id: "ui-design",
        label: "UI Design",
        title: "Civic identity, readable by everyone",
        body: [
          "The interface carries the Gobierno Abierto de Bogotá identity — the GAB mark and the city's red — with large, high-contrast cards designed for the widest possible audience.",
          "Real screens from the published app are shown below in the product screens section.",
        ],
      },
      {
        type: "text",
        id: "impact",
        label: "Impact",
        title: "What changed",
        body: [
          "Qualitative outcome: city procedures, aid programs and citizen participation channels became reachable from a single mobile app, with assisted support built into the experience.",
          "The app is an iterative public product — usage figures belong to the district and are not claimed here.",
        ],
      },
    ],
    contribution: {
      mine: [
        "UX/UI design of the mobile app",
        "Information architecture of city services and procedures",
        "Interaction design of procedure, payment and petition flows",
        "Visual design aligned with the Gobierno Abierto identity",
      ],
      team: [
        "Engineering and app publication",
        "City service content and institutional stakeholders",
      ],
    },
    learnings: {
      learned:
        "Designing for 'everyone in a city' is the hardest brief there is — plain language and assisted channels mattered more than any visual decision.",
      differently:
        "Test earlier with citizens across age and literacy ranges; public services can't assume digital confidence.",
      next:
        "Explore proactive service patterns — the app notifying citizens about aid they qualify for, instead of waiting to be searched.",
    },
  },
  {
    slug: "321-ignition",
    number: "04",
    title: "321 Ignition — Overfuel",
    client: "321 Ignition (now Overfuel)",
    industry: "Automotive / SaaS",
    role: "UX/UI Designer",
    platform: "Mobile-first dealer website platform",
    palette: { bg: "#0A1224", accent: "#3B82F6", ink: "#E8EEFC", soft: "#12203C" },
    variant: "web",
    tagline: "Mobile-first websites built to sell cars.",
    challenge:
      "Dealership websites were slow and desktop-first while most car research was already happening on mobile — costing dealers leads before a customer ever reached the showroom.",
    approach:
      "Design mobile-first dealership experiences on the platform: inventory-first browsing, vehicle detail pages and integrated lead capture — credit pre-approval, trade-in offers, test-drive scheduling — plus a no-code CMS so dealerships edit content themselves.",
    result:
      "A mobile-first dealership website platform that evolved into Overfuel — today positioned on speed, local SEO, AI-enhanced inventory and rich analytics. (Source: overfuel.com.)",
    snapshot: [
      { label: "Role", value: "UX/UI Designer" },
      { label: "Team", value: "Product, engineering, dealership stakeholders" },
      { label: "Context", value: "Website platform for automotive dealerships" },
      { label: "Platform", value: "Mobile-first web platform + no-code CMS" },
      { label: "Tools", value: "Figma" },
      { label: "Methods", value: "Mobile-first UX, Information Architecture, Interaction Design, Conversion-oriented Design" },
      { label: "Constraints", value: "Performance-critical pages; content editable by non-technical dealership teams" },
    ],
    sections: [
      {
        type: "text",
        id: "context",
        label: "Context & Problem",
        title: "The website is the first showroom",
        body: [
          "Car buyers typically visit only one or two dealerships in person — most of the research happens online first, and most of it on a phone. A slow, desktop-first dealer website loses the customer before the conversation starts.",
          "The design challenge: make inventory browsing, vehicle detail and lead capture feel native on mobile — while keeping every page fast and every site editable by the dealership itself.",
        ],
        statement: "Over 70% of car research happens on a phone — the website is the first showroom. (Source: overfuel.com.)",
      },
      {
        type: "steps",
        id: "architecture",
        label: "Information Architecture",
        title: "Inventory first, everything else second",
        steps: [
          { name: "Before", detail: "Dealer sites buried inventory under generic marketing pages; finding a car took too many taps on mobile." },
          { name: "Decision", detail: "Inventory-first structure: search and body-style browsing on the home screen, vehicle detail one tap away. (Design decision.)" },
          { name: "After", detail: "Home → inventory → vehicle detail → lead action (credit, trade-in, test drive) as a short, thumb-friendly path." },
        ],
      },
      {
        type: "text",
        id: "interaction",
        label: "Interaction Design",
        title: "Lead capture without plugin chaos",
        body: [
          "Conversion paths were designed as native flows — credit pre-approval, secure online deposits, cash trade offers, test-drive and service scheduling, payment calculators — instead of disconnected third-party plugins.",
          "On the admin side, the no-code CMS lets dealership teams edit pages with blocks (layout, content, inventory, forms) — no developer required for a seasonal promotion.",
        ],
      },
      {
        type: "text",
        id: "ui-design",
        label: "UI Design",
        title: "Designed for thumbs, measured in seconds",
        body: [
          "Mobile-first UI with large touch targets, sticky actions and inventory-led layouts; performance treated as a design requirement, not an engineering afterthought.",
          "Real product screens — responsive website, mobile inventory, CMS and analytics — are shown in the product screens section below.",
        ],
      },
      {
        type: "text",
        id: "impact",
        label: "Impact",
        title: "What changed",
        body: [
          "Qualitative outcome: a mobile-first dealership website experience with integrated lead capture and self-service content management.",
          "The product later evolved into Overfuel; the performance metrics published at overfuel.com belong to the current platform and are not claimed here as personal results.",
        ],
      },
    ],
    contribution: {
      mine: [
        "UX/UI design of mobile-first dealership website experiences",
        "Information architecture for inventory and lead flows",
        "Interaction design for conversion paths",
        "Interface design for the no-code CMS experience",
      ],
      team: [
        "Platform engineering",
        "Product strategy and later evolution into Overfuel",
      ],
    },
    learnings: {
      learned:
        "Designing a platform means designing for two users at once — the car buyer and the dealership editor. The CMS experience is as much a product as the public site.",
      differently:
        "Involve dealership staff in CMS testing earlier; editors break assumptions that end users never touch.",
      next:
        "Explore how AI-assisted content (like vehicle descriptions) can be designed as a transparent, controllable tool rather than a black box.",
    },
  },
];


export const getFlagship = (slug) => FLAGSHIPS.find((p) => p.slug === slug);
