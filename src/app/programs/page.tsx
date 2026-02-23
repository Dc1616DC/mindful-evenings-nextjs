import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Programs | Mindful Evenings",
  description: "Explore Mindful Evenings programs designed to help you understand and transform your relationship with evening eating. Free tools, guided resources, and more.",
  alternates: { canonical: "https://evenings.chase-wellness.com/programs" },
  openGraph: {
    title: "Programs | Mindful Evenings",
    description: "Explore Mindful Evenings programs designed to help you understand and transform your relationship with evening eating.",
    url: "https://evenings.chase-wellness.com/programs",
  },
};

const programs = [
  {
    emoji: "🌙",
    title: "Free Evening Check-In",
    description: "A simple 2-minute check-in that helps you understand what's actually driving your evening cravings. No calorie counting. No food logging. Just awareness.",
    cta: "Start a Check-In",
    href: "https://app.chase-wellness.com",
    external: true,
    highlight: true,
  },
  {
    emoji: "📧",
    title: "7-Day Mindful Evening Reset",
    description: "A free email series that walks you through one small shift per day. By the end of the week, you'll have a completely different relationship with your evenings.",
    cta: "Join the Reset",
    href: "/newsletter",
    external: false,
  },
  {
    emoji: "📖",
    title: "Learn Library",
    description: "Deep dives into the science and psychology of evening eating. Understand why you eat at night, what emotional eating actually is, and how to work with your body instead of against it.",
    cta: "Explore Articles",
    href: "/learn",
    external: false,
  },
  {
    emoji: "✍️",
    title: "Blog",
    description: "Practical, evidence-based articles on everything from GLP-1 evening cravings to stress eating to what to do instead of snacking. Written by a registered dietitian who gets it.",
    cta: "Read the Blog",
    href: "/blog",
    external: false,
  },
  {
    emoji: "🧰",
    title: "Free Resources & Tools",
    description: "Downloadable guides, the Kitchen Closing Contract, recommended reading, and trusted external resources. Everything you need to build sustainable evening habits.",
    cta: "Browse Resources",
    href: "/resources",
    external: false,
  },
  {
    emoji: "🔍",
    title: "Am I Actually Hungry?",
    description: "A quick guided check-in to help you tell the difference between physical hunger and emotional hunger. Takes 60 seconds.",
    cta: "Try the Tool",
    href: "/tools/hunger-check",
    external: false,
  },
];

export default function ProgramsPage() {
  return (
    <>
      {/* Hero */}
      <section style={{ padding: "5rem 1.5rem 3rem", background: "linear-gradient(180deg, #0a0a1f 0%, #0f0a2e 100%)", minHeight: "35vh", display: "flex", alignItems: "center" }}>
        <div className="section-container" style={{ textAlign: "center" }}>
          <p style={{ color: "#8b5cf6", fontSize: "0.8rem", fontWeight: 700, letterSpacing: "0.12em", textTransform: "uppercase", marginBottom: "0.75rem" }}>PROGRAMS</p>
          <h1 style={{ fontSize: "clamp(2rem, 4vw, 3rem)", fontWeight: 800, color: "white", marginBottom: "1.25rem" }}>
            Everything Is Free
          </h1>
          <p style={{ color: "#94a3b8", maxWidth: 600, margin: "0 auto", lineHeight: 1.7 }}>
            Mindful Evenings isn't a diet program. It's a collection of tools built by a registered dietitian to help you understand what your evenings are actually about.
          </p>
        </div>
      </section>

      {/* Programs Grid */}
      <section style={{ padding: "4rem 1.5rem", background: "#0a0a1f" }}>
        <div className="section-container">
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(320px, 1fr))", gap: "1.5rem" }}>
            {programs.map((program) => (
              <div key={program.title} style={{ background: program.highlight ? "rgba(139, 92, 246, 0.12)" : "rgba(139, 92, 246, 0.06)", border: `1px solid ${program.highlight ? "rgba(139, 92, 246, 0.3)" : "rgba(139, 92, 246, 0.12)"}`, borderRadius: 16, padding: "2rem", display: "flex", flexDirection: "column" }}>
                <div style={{ fontSize: "2rem", marginBottom: "1rem" }}>{program.emoji}</div>
                <h2 style={{ color: "white", fontSize: "1.25rem", fontWeight: 700, marginBottom: "0.75rem" }}>{program.title}</h2>
                <p style={{ color: "#94a3b8", lineHeight: 1.7, fontSize: "0.9rem", flex: 1, marginBottom: "1.5rem" }}>{program.description}</p>
                {program.external ? (
                  <a href={program.href} target="_blank" rel="noopener noreferrer" className={program.highlight ? "btn-primary" : "btn-secondary"} style={{ textAlign: "center" }}>{program.cta}</a>
                ) : (
                  <Link href={program.href} className="btn-secondary" style={{ textAlign: "center" }}>{program.cta}</Link>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Not a Diet */}
      <section style={{ padding: "4rem 1.5rem", background: "#0f0a2e" }}>
        <div className="section-container" style={{ maxWidth: 720, textAlign: "center" }}>
          <h2 style={{ fontSize: "1.75rem", fontWeight: 800, color: "white", marginBottom: "1.5rem" }}>
            "Is this a diet program?"
          </h2>
          <div style={{ color: "#94a3b8", lineHeight: 1.8, fontSize: "0.95rem" }}>
            <p style={{ marginBottom: "1.25rem" }}>
              No. Mindful Evenings will never tell you what to eat, when to stop eating, or how many calories you should consume. There are no meal plans, no food rules, and no weigh-ins.
            </p>
            <p style={{ marginBottom: "1.25rem" }}>
              Instead, we help you understand <strong style={{ color: "white" }}>why</strong> you eat — especially in the evening. We believe that when you understand what's driving a craving, you can respond to what you actually need. Sometimes that's food. Sometimes it's rest, connection, or just permission to stop being productive.
            </p>
            <p>
              This is a <strong style={{ color: "white" }}>curiosity-based, compassion-first</strong> approach. We treat cravings as data, not enemies. And we believe you already have the wisdom to understand your own body — you just need the right tools to access it.
            </p>
          </div>
          <div style={{ marginTop: "2rem" }}>
            <a href="https://app.chase-wellness.com" target="_blank" rel="noopener noreferrer" className="btn-primary">Start Your Free Check-In</a>
          </div>
        </div>
      </section>
    </>
  );
}
