export const site = {
  name: "Autonoma Systems",
  person: "AI Automation Engineer",
  tagline: "AI Automation Engineer & Full-Stack Automation Specialist",
  email: "hello@example.com",
  location: "Remote — Worldwide",
  socials: [
    { label: "LinkedIn", href: "#" },
    { label: "Fiverr", href: "#" },
    { label: "GitHub", href: "#" },
  ],
};

/** Edit these numbers freely. Only add figures you can verify. */
export const stats = [
  { value: 8, suffix: "+", label: "Years in software & automation" },
  { value: 20, suffix: "+", label: "Technology integrations" },
  { value: 6, suffix: "", label: "Automation domains covered" },
  { value: 24, suffix: "/7", label: "Systems running unattended" },
];

/**
 * Testimonials are intentionally empty until verified quotes exist.
 * Push objects shaped like the type below to render the carousel.
 */
export type Testimonial = {
  name: string;
  company: string;
  quote: string;
  platform?: string;
  avatar?: string;
  rating?: number;
};

export const testimonials: Testimonial[] = [];

export const platforms = [
  "n8n",
  "OpenAI",
  "Claude",
  "Gemini",
  "GoHighLevel",
  "HubSpot",
  "Zapier",
  "Make",
  "WhatsApp",
  "Meta",
  "Airtable",
  "Supabase",
  "PostgreSQL",
];

export const techGroups = [
  { group: "Automation", items: ["n8n", "Zapier", "Make"] },
  { group: "AI", items: ["OpenAI", "Claude", "Gemini"] },
  { group: "CRM", items: ["GoHighLevel", "HubSpot"] },
  { group: "Data", items: ["PostgreSQL", "Supabase", "Airtable", "Google Sheets"] },
  { group: "Communication", items: ["WhatsApp", "Gmail", "Slack", "Telegram"] },
  { group: "Development", items: ["Next.js", "React", "Node.js", "APIs", "Webhooks"] },
];

export const budgets = [
  "Under $500",
  "$500–$1,500",
  "$1,500–$3,000",
  "$3,000–$5,000",
  "$5,000+",
  "Not sure yet",
];
