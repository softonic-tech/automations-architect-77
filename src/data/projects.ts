export type Project = {
  slug: string;
  name: string;
  category: string;
  tagline: string;
  description: string;
  problem: string;
  solution: string;
  architecture: string[];
  flow: string[];
  features: string[];
  tech: string[];
  results: string[];
  visual:
    | "pipeline"
    | "crm"
    | "chat"
    | "whatsapp"
    | "table"
    | "social"
    | "tickets"
    | "graph"
    | "waveform"
    | "memory";
  featured?: boolean;
};

export const projects: Project[] = [
  {
    slug: "ai-social-media-content-engine",
    name: "AI Social Media Content Engine",
    category: "AI Content Automation",
    tagline: "Research, generate, approve and publish across brands — as one pipeline.",
    description:
      "A multi-brand social platform that researches topics, writes content, produces visuals, routes everything through human approval and publishes on schedule.",
    problem:
      "Running content for several brands meant repeating the same manual chain every week: research competitors, find trends, brainstorm, write, design, review, schedule, publish, report. Nothing was reusable and nothing scaled past a couple of accounts.",
    solution:
      "A content engine where every brand carries its own voice, knowledge base and posting rules. The pipeline runs end to end automatically and pauses only where a human decision genuinely matters — approval.",
    architecture: [
      "Brand workspace layer with isolated voice, tone and knowledge base per brand",
      "Research workers pulling competitor and trend signals on a schedule",
      "Generation layer for captions, hashtags, images and short video",
      "Approval queue with regeneration and edit history",
      "Publishing service with per-platform adapters, retries and rate-limit handling",
      "PostgreSQL for content state, Redis for queues and scheduling",
    ],
    flow: [
      "Competitor Research",
      "Trend Research",
      "AI Ideas",
      "Content Generation",
      "Image / Video",
      "Approval",
      "Scheduling",
      "Publishing",
      "Analytics",
    ],
    features: [
      "Multi-brand architecture",
      "Separate brand voices",
      "Per-brand knowledge bases",
      "AI caption generation",
      "Hashtag generation",
      "Image generation",
      "Video generation",
      "Human approval step",
      "Regeneration workflow",
      "Multi-platform publishing",
      "Error handling & automatic retries",
      "Full content history",
      "Scheduling engine",
      "Centralized admin system",
    ],
    tech: ["n8n", "OpenAI", "Gemini", "PostgreSQL", "Redis", "Social Media APIs"],
    results: [
      "Content production for multiple brands runs from one system",
      "Manual research and drafting time largely removed",
      "Every post keeps a traceable history from idea to publish",
      "Failed publishes retry instead of silently disappearing",
    ],
    visual: "pipeline",
    featured: true,
  },
  {
    slug: "ai-lead-to-revenue-platform",
    name: "AI Lead-to-Revenue Automation Platform",
    category: "Sales Automation",
    tagline: "Turn incoming leads into qualified opportunities without touching every contact.",
    description:
      "Leads arrive from any source, get validated, enriched and scored by AI, then move through personalized outreach and pipeline updates automatically.",
    problem:
      "Leads landed in several places, were entered by hand and often sat untouched for hours. Follow-up depended on whoever remembered, and pipeline data was never fully accurate.",
    solution:
      "A single capture endpoint feeding a qualification and outreach engine. Every lead is validated, deduplicated, scored, contacted with a personalized message and tracked through to a real pipeline stage.",
    architecture: [
      "Webhook capture endpoint accepting forms, ads and partner sources",
      "Validation and duplicate-detection layer before anything reaches the CRM",
      "Enrichment step attaching company and context data",
      "AI scoring service producing a qualification score and reason",
      "Outreach generator for email and SMS, personalized per lead",
      "Reply monitor with intent classification and pipeline sync",
    ],
    flow: [
      "Lead Capture",
      "Validation",
      "Enrichment",
      "AI Qualification",
      "CRM",
      "Personalized Outreach",
      "Customer Reply",
      "Intent Detection",
      "Follow-Up",
      "Sales Pipeline",
    ],
    features: [
      "Webhook lead capture",
      "Lead validation",
      "Duplicate detection",
      "CRM database sync",
      "AI lead scoring",
      "Personalized email generation",
      "SMS generation",
      "Reply monitoring",
      "AI intent classification",
      "Sales pipeline updates",
      "Follow-up task creation",
      "Sales team notifications",
    ],
    tech: ["n8n", "OpenAI", "HubSpot", "GoHighLevel", "PostgreSQL", "Twilio APIs"],
    results: [
      "Every lead receives a first response automatically",
      "Manual CRM data entry effectively removed",
      "Routing decisions are consistent and explainable",
      "Sales time shifts from admin to conversations",
    ],
    visual: "crm",
    featured: true,
  },
  {
    slug: "ai-receptionist-local-business",
    name: "AI Receptionist for Local Businesses",
    category: "AI Customer Experience",
    tagline: "Every call answered, qualified and booked — including at 11pm.",
    description:
      "An AI receptionist for service businesses that understands the service catalogue, qualifies callers, detects emergencies and books work into the calendar.",
    problem:
      "A home-service company lost jobs simply because nobody could pick up while on site. Voicemails were returned late, urgent calls were treated like routine ones and details were captured inconsistently.",
    solution:
      "A receptionist agent grounded in the company's real services, pricing rules and availability. It triages each conversation into emergency, booking, general question or existing customer and acts accordingly.",
    architecture: [
      "Telephony and chat entry points feeding one conversation service",
      "Business knowledge base covering services, coverage area and policies",
      "Intent and urgency classification with a hard escalation path",
      "Calendar availability engine with conflict checks",
      "CRM writeback with transcript, summary and captured details",
    ],
    flow: [
      "Incoming Customer",
      "AI Receptionist",
      "Triage",
      "Booking / Emergency / FAQ",
      "CRM & Calendar",
      "Follow-Up",
    ],
    features: [
      "Understands business services",
      "Answers customer questions",
      "Qualifies leads",
      "Detects emergencies",
      "Captures customer details",
      "Books appointments",
      "Escalates complex cases",
      "Updates CRM",
      "Sends follow-ups",
    ],
    tech: ["n8n", "OpenAI", "Voice APIs", "Google Calendar", "GoHighLevel"],
    results: [
      "Inbound enquiries are answered outside working hours",
      "Urgent jobs are separated from routine requests immediately",
      "Caller details are captured in a consistent structure",
      "Staff only handle conversations that need a human",
    ],
    visual: "chat",
    featured: true,
  },
  {
    slug: "whatsapp-clinic-booking-agent",
    name: "WhatsApp AI Clinic Booking Agent",
    category: "Conversational Automation",
    tagline: "Patients book, reschedule and cancel in the chat they already use.",
    description:
      "A WhatsApp assistant that manages the full appointment lifecycle against live calendar availability, with reminders and staff escalation.",
    problem:
      "Reception spent the day on the phone rearranging appointments. Double bookings happened, no-shows were common and after-hours requests waited until morning.",
    solution:
      "A conversational agent connected directly to the clinic calendar. It reads intent, checks live availability, locks the slot to prevent double booking and confirms in the same thread.",
    architecture: [
      "WhatsApp Business API webhook into a conversation state machine",
      "Intent detection for book, reschedule, cancel, question and escalate",
      "Availability engine with slot locking to prevent double booking",
      "Calendar write plus confirmation and reminder scheduling",
      "Handoff channel for staff when the request is clinical or unusual",
    ],
    flow: [
      "WhatsApp",
      "AI Intent Detection",
      "Availability Engine",
      "Calendar",
      "Confirmation",
      "Reminder",
    ],
    features: [
      "Book appointment",
      "Check live availability",
      "Prevent double booking",
      "Reschedule",
      "Cancel",
      "Answer common questions",
      "Appointment reminders",
      "Customer information capture",
      "Escalation to staff",
    ],
    tech: ["n8n", "WhatsApp Business API", "OpenAI", "Supabase", "Google Calendar"],
    results: [
      "Booking traffic moves off the phone line",
      "Double bookings prevented at the data layer",
      "Reminders sent without staff involvement",
      "Requests handled outside clinic hours",
    ],
    visual: "whatsapp",
    featured: true,
  },
  {
    slug: "amazon-product-intelligence",
    name: "Amazon Product Intelligence Automation",
    category: "E-commerce Automation",
    tagline: "A research engine that reviews thousands of products so a person doesn't.",
    description:
      "A product research platform that scrapes retailer catalogues, matches products to marketplace listings and filters them through profitability and competition rules.",
    problem:
      "Sourcing was a manual spreadsheet exercise: open a retailer, copy a product, search the marketplace, check sellers, estimate margin, repeat. Coverage was tiny and inconsistent.",
    solution:
      "A scheduled pipeline that handles the whole loop and outputs only the products that survive every rule, into a searchable opportunity database.",
    architecture: [
      "Scheduled scraping workers per retailer with polite rate limiting",
      "Extraction layer normalizing SKU, UPC, price and availability",
      "Matching service resolving retail products to marketplace listings",
      "Rules engine for seller counts, ratings, reviews, category and margin",
      "Opportunity database plus generated result sheets",
    ],
    flow: [
      "Retailer",
      "Product Scraper",
      "Product Matching",
      "Marketplace Data",
      "Seller Analysis",
      "Profit Rules",
      "Ranking Filters",
      "Opportunity Database",
    ],
    features: [
      "Automated retailer scraping",
      "Product information extraction",
      "SKU / UPC processing",
      "Product matching",
      "Marketplace data analysis",
      "Seller-count rules",
      "Rating filters",
      "Review filters",
      "Profit thresholds",
      "Category filtering",
      "Automated result sheets",
      "Scheduled research",
    ],
    tech: ["Node.js", "n8n", "PostgreSQL", "Marketplace APIs", "Google Sheets"],
    results: [
      "Research coverage no longer limited by working hours",
      "Consistent rules applied to every product",
      "Findings land in one reviewable database",
      "Repeat research runs on a schedule",
    ],
    visual: "table",
    featured: true,
  },
  {
    slug: "ai-customer-reply-automation",
    name: "AI Customer Reply Automation",
    category: "Customer Engagement",
    tagline: "Comments and DMs answered in context across social platforms.",
    description:
      "Incoming messages and comments on Facebook, Instagram and TikTok are answered with business-aware replies, with leads detected and logged.",
    problem:
      "Social inboxes filled faster than the team could clear them. Buying questions were buried under routine comments and genuine leads went cold.",
    solution:
      "A webhook-driven reply system that retrieves conversation history and business knowledge before answering, applies business rules, then logs everything to the CRM.",
    architecture: [
      "Platform webhooks normalized into one message schema",
      "Context retrieval over conversation history and business knowledge",
      "Response generation constrained by business rules and tone",
      "Lead detection and escalation routing",
      "Conversation logging and CRM synchronization",
    ],
    flow: [
      "New Message / Comment",
      "Webhook",
      "Context Retrieval",
      "AI Response",
      "Business Rules",
      "Reply",
      "CRM / Logging",
    ],
    features: [
      "Automated customer response",
      "Context-aware replies",
      "Business knowledge grounding",
      "Lead detection",
      "Escalation to humans",
      "Conversation logging",
      "CRM synchronization",
    ],
    tech: ["n8n", "Meta APIs", "TikTok API", "OpenAI", "Supabase"],
    results: [
      "Response times drop to seconds",
      "Buying intent is surfaced instead of buried",
      "Every conversation is logged and searchable",
    ],
    visual: "social",
  },
  {
    slug: "ai-support-ticket-intelligence",
    name: "AI Support Ticket Intelligence",
    category: "Customer Support",
    tagline: "Tickets classified, prioritized and routed before an agent opens them.",
    description:
      "An operations layer over the support desk that reads every incoming ticket, sets priority and sentiment, drafts a resolution and routes it to the right queue.",
    problem:
      "Triage consumed senior agents. Priority was inconsistent, angry customers waited in the same queue as routine questions and reporting was guesswork.",
    solution:
      "Every ticket passes through classification, priority and sentiment scoring, then gets a suggested resolution drawn from previous tickets and documentation.",
    architecture: [
      "Ingestion from helpdesk and email into a unified ticket record",
      "Classification and priority models with sentiment scoring",
      "Retrieval over documentation and resolved ticket history",
      "Routing rules per team, product area and severity",
      "Analytics layer for volume, sentiment and resolution trends",
    ],
    flow: [
      "Incoming Ticket",
      "Classification",
      "Priority Detection",
      "Sentiment",
      "Suggested Resolution",
      "Auto Routing",
      "Agent Assistance",
      "Analytics",
    ],
    features: [
      "Automatic classification",
      "Priority detection",
      "Sentiment scoring",
      "Suggested resolutions",
      "Auto routing",
      "Agent assistance panel",
      "Operations analytics",
    ],
    tech: ["Zendesk", "Gmail", "Slack", "OpenAI", "n8n"],
    results: [
      "Triage time removed from senior agents",
      "Urgent and unhappy customers surface first",
      "Support trends become measurable",
    ],
    visual: "tickets",
  },
  {
    slug: "linkedin-content-intelligence",
    name: "LinkedIn Content Intelligence Agent",
    category: "Data Automation",
    tagline: "Structured content research instead of manual tab-hopping.",
    description:
      "A research automation that collects permitted public post information, structures it and feeds downstream content and market research workflows.",
    problem:
      "Content and market research meant manually reading through feeds and pasting fragments into documents that were outdated within a week.",
    solution:
      "A collection and structuring pipeline that turns permitted public post data into a queryable research dataset, categorized and ready for downstream workflows.",
    architecture: [
      "Collection layer respecting platform permissions and rate limits",
      "Extraction into a structured record: title, URL, description, media",
      "Categorization and tagging pass",
      "Research store feeding content and analysis workflows",
    ],
    flow: [
      "Source Discovery",
      "Permitted Collection",
      "Extraction",
      "Categorization",
      "Research Store",
      "Downstream Workflows",
    ],
    features: [
      "Structured post extraction",
      "Title capture",
      "Post URL capture",
      "Description capture",
      "Media information",
      "Result storage",
      "Content categorization",
      "Feeds research workflows",
    ],
    tech: ["n8n", "Node.js", "PostgreSQL", "OpenAI"],
    results: [
      "Research output is structured rather than anecdotal",
      "Findings stay current on a schedule",
      "Downstream content workflows get real inputs",
    ],
    visual: "graph",
  },
  {
    slug: "crm-call-intelligence",
    name: "CRM Call Intelligence System",
    category: "Sales Operations",
    tagline: "Every call recorded, summarized and written back to the CRM.",
    description:
      "Outbound calls are captured, transcribed and summarized, with outcomes and dispositions pushed into the CRM and a reporting dashboard.",
    problem:
      "Call outcomes lived in reps' heads. CRM notes were thin or missing and managers had no reliable view of what was actually said.",
    solution:
      "A pipeline that syncs call data, transcribes recordings, produces a structured summary and disposition, then updates the CRM and reporting layer automatically.",
    architecture: [
      "Call platform sync pulling recordings and metadata",
      "Transcription service with speaker separation",
      "Summarization producing outcome, objections and next step",
      "CRM writeback with disposition and activity tracking",
      "Reporting dashboard over team activity and outcomes",
    ],
    flow: [
      "Outbound Call",
      "Call Platform",
      "Recording",
      "Transcript",
      "AI Summary",
      "Outcome",
      "CRM",
      "Reporting Dashboard",
    ],
    features: [
      "Call data synchronization",
      "Conversation history",
      "Transcripts",
      "AI summaries",
      "Dispositions",
      "Sales reporting",
      "Automatic CRM updates",
      "Team activity tracking",
    ],
    tech: ["n8n", "OpenAI", "HubSpot", "PostgreSQL", "Call APIs"],
    results: [
      "CRM notes are complete without rep effort",
      "Managers can review outcomes at a glance",
      "Coaching is based on what was actually said",
    ],
    visual: "waveform",
  },
  {
    slug: "ai-business-memory-engine",
    name: "AI Business Memory Engine",
    category: "Enterprise AI — Concept System",
    tagline: "One retrieval layer over everything the business already knows.",
    description:
      "A flagship concept system: business knowledge scattered across email, CRM, documents, support and meetings unified into a semantic memory an agent can act on.",
    problem:
      "The answer to most internal questions already exists somewhere — in an email thread, a CRM note, a document, a support ticket or a meeting recording. Finding it takes longer than redoing the work.",
    solution:
      "A processing and knowledge layer that normalizes every source into a retrievable memory, with an agent on top that answers questions and takes downstream business actions.",
    architecture: [
      "Connectors for email, CRM, documents, support and meeting transcripts",
      "Processing layer: cleaning, chunking, embedding and permissioning",
      "Knowledge layer with source attribution and freshness tracking",
      "Semantic retrieval service with access control per team",
      "Agent layer that answers, drafts and triggers business actions",
    ],
    flow: [
      "Business Data",
      "Data Processing",
      "Knowledge Layer",
      "Semantic Retrieval",
      "AI Agent",
      "Business Action",
    ],
    features: [
      "Answer internal questions",
      "Generate client responses",
      "Prepare summaries",
      "Retrieve customer history",
      "Suggest next actions",
      "Support sales teams",
      "Source attribution",
      "Permission-aware retrieval",
    ],
    tech: ["Node.js", "PostgreSQL", "pgvector", "OpenAI", "Claude", "n8n"],
    results: [
      "Institutional knowledge stops depending on individuals",
      "Answers arrive with a traceable source",
      "Onboarding and handovers become far cheaper",
    ],
    visual: "memory",
  },
];

export const featuredProjects = projects.filter((p) => p.featured);

export const conceptCards = [
  {
    title: "AI Appointment Setter",
    body: "Captures leads, qualifies them and books meetings straight into the calendar.",
  },
  {
    title: "AI Invoice Processing",
    body: "Reads invoices, validates the data, categorizes expenses and updates accounting.",
  },
  {
    title: "AI Email Operations Agent",
    body: "Classifies incoming email, drafts responses and routes tasks to the right owner.",
  },
  {
    title: "Automated Client Onboarding",
    body: "Turns a signed client into CRM records, tasks, folders, emails and workflows.",
  },
  {
    title: "Review Management",
    body: "Requests reviews at the right moment and routes negative feedback privately.",
  },
  {
    title: "AI Real Estate Lead Agent",
    body: "Qualifies property enquiries and schedules viewings without manual chasing.",
  },
  {
    title: "AI E-Commerce Support",
    body: "Handles product questions, order status and common post-purchase requests.",
  },
  {
    title: "AI Recruitment Assistant",
    body: "Screens applicants, categorizes candidates and coordinates interview scheduling.",
  },
];
