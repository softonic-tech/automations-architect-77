export type Service = {
  index: string;
  title: string;
  summary: string;
  items: string[];
};

export const services: Service[] = [
  {
    index: "01",
    title: "AI Agents",
    summary:
      "Agents that read your business context, decide what to do next and take the action instead of drafting a suggestion.",
    items: [
      "Customer support agents",
      "Sales agents",
      "Knowledge base agents",
      "Internal AI assistants",
      "Autonomous business agents",
    ],
  },
  {
    index: "02",
    title: "Workflow Automation",
    summary:
      "Your tools stop being islands. Information moves between them on its own, with retries and logging when something fails.",
    items: ["n8n", "Zapier", "Make.com", "Webhooks", "REST & GraphQL APIs", "Custom orchestration"],
  },
  {
    index: "03",
    title: "AI Receptionists & Voice Agents",
    summary:
      "Every inbound conversation gets answered, qualified and recorded — including the ones that arrive after hours.",
    items: [
      "Call answering",
      "Lead qualification",
      "Appointment booking",
      "FAQ handling",
      "Call summaries",
      "Live-agent handoff",
    ],
  },
  {
    index: "04",
    title: "CRM & Sales Automation",
    summary:
      "The full lead lifecycle runs itself: capture, score, route, follow up and keep the pipeline accurate without manual data entry.",
    items: [
      "GoHighLevel",
      "HubSpot",
      "Lead routing",
      "Automated follow-ups",
      "Pipeline updates",
      "Opportunity management",
    ],
  },
  {
    index: "05",
    title: "Social Media Automation",
    summary:
      "Research, generation, approval, scheduling and engagement handled as one pipeline across every brand you run.",
    items: [
      "Content research",
      "AI copy & visuals",
      "Human approval steps",
      "Multi-platform publishing",
      "Comment & DM handling",
      "Performance reporting",
    ],
  },
  {
    index: "06",
    title: "Custom Automation Platforms",
    summary:
      "When a workflow is not enough: real software with a database, queues, dashboards and access control behind it.",
    items: [
      "Admin dashboards",
      "Databases & APIs",
      "Worker systems & queues",
      "Multi-account architecture",
      "Analytics",
      "Authentication",
    ],
  },
];

export const outcomes = [
  {
    title: "Automate Operations",
    body: "Replace repetitive administrative work with reliable workflows that run the same way every time.",
    kind: "ops" as const,
  },
  {
    title: "Convert More Leads",
    body: "Capture, qualify, follow up and route leads automatically — no lead waits for someone to notice it.",
    kind: "leads" as const,
  },
  {
    title: "Respond Instantly",
    body: "AI agents handle customer questions across chat, email, messaging and voice channels around the clock.",
    kind: "reply" as const,
  },
  {
    title: "Scale Efficiently",
    body: "Handle more customers without adding proportional headcount or more manual coordination.",
    kind: "scale" as const,
  },
];

export const processSteps = [
  {
    index: "01",
    title: "Understand",
    body: "Map the current workflow, where it breaks, who touches it and what the result should look like.",
  },
  {
    index: "02",
    title: "Architect",
    body: "Design the system: integrations, data structure, decision logic and failure paths.",
  },
  {
    index: "03",
    title: "Build",
    body: "Develop the workflows, agents, APIs and interfaces that make the system usable day to day.",
  },
  {
    index: "04",
    title: "Test",
    body: "Run edge cases, bad data, timeouts and retries against real business scenarios before launch.",
  },
  {
    index: "05",
    title: "Deploy & Optimize",
    body: "Ship it, watch real usage, then tune the logic and coverage as volume grows.",
  },
];

export const whyPoints = [
  {
    title: "Business-First Automation",
    body: "The system is designed around how your process actually works, not around whichever tool is trendy.",
  },
  {
    title: "Production-Ready Systems",
    body: "Validation, logging, retries and error handling are part of the build, not an afterthought.",
  },
  {
    title: "End-to-End Development",
    body: "Automation logic, APIs, databases, dashboards and frontends handled by one person who owns the result.",
  },
  {
    title: "Built to Scale",
    body: "Architectures that keep working when volume, brands, channels or team size increase.",
  },
];
