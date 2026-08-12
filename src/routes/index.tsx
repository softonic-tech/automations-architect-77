import { createFileRoute } from "@tanstack/react-router";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { FloatingCta } from "@/components/layout/FloatingCta";
import { Hero } from "@/components/home/Hero";
import { PlatformStrip } from "@/components/home/PlatformStrip";
import { Outcomes } from "@/components/home/Outcomes";
import { Services } from "@/components/home/Services";
import { Work } from "@/components/home/Work";
import { Process } from "@/components/home/Process";
import { AutomationDemo } from "@/components/home/AutomationDemo";
import { AutomationCommand } from "@/components/home/AutomationCommand";
import { TechStack } from "@/components/home/TechStack";
import { WhyMe } from "@/components/home/WhyMe";
import { About } from "@/components/home/About";
import { Testimonials } from "@/components/home/Testimonials";
import { Contact } from "@/components/home/Contact";

const title = "AI Automation Engineer | n8n, AI Agents & Business Automation";
const description =
  "AI automation engineer building n8n workflows, AI agents, CRM automation, voice assistants and custom business automation systems.";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title },
      { name: "description", content: description },
      { property: "og:title", content: title },
      { property: "og:description", content: description },
      { property: "og:type", content: "website" },
      { property: "og:url", content: "/" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
    links: [{ rel: "canonical", href: "/" }],
    scripts: [
      {
        type: "application/ld+json",
        children: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "ProfessionalService",
          name: "Autonoma Systems",
          description,
          areaServed: "Worldwide",
          serviceType: [
            "AI automation",
            "n8n workflow automation",
            "AI agents",
            "CRM automation",
            "AI voice agents",
            "Business process automation",
          ],
        }),
      },
    ],
  }),
  component: Index,
});

function Index() {
  return (
    <div className="min-h-screen">
      <Navbar />
      <main>
        <Hero />
        <PlatformStrip />
        <Outcomes />
        <Services />
        <AutomationCommand />
        <Work />
        <Process />
        <AutomationDemo />
        <TechStack />
        <WhyMe />
        <About />
        <Testimonials />
        <Contact />
      </main>
      <Footer />
      <FloatingCta />
    </div>
  );
}
