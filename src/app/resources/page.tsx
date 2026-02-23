import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Evening Eating Resources | Mindful Evenings",
  description: "Free resources for understanding evening eating patterns. Guides, tools, and evidence-based strategies from RD Dan Chase.",
  alternates: { canonical: "https://evenings.chase-wellness.com/resources" },
};

export default function ResourcesPage() {
  return (
    <>
      <section style={{ padding: "5rem 1.5rem", background: "linear-gradient(180deg, #0a0a1f 0%, #0f0a2e 100%)", textAlign: "center" }}>
        <div className="section-container">
          <h1 style={{ fontSize: "clamp(2rem, 4vw, 3rem)", fontWeight: 800, color: "white", marginBottom: "1rem" }}>Evening Eating Resources</h1>
          <p style={{ color: "#94a3b8", maxWidth: 580, margin: "0 auto", lineHeight: 1.7 }}>
            Free guides, frameworks, and tools to help you understand and work with your evening eating patterns — not against them.
          </p>
        </div>
      </section>

      <section style={{ padding: "3rem 1.5rem 5rem", background: "#0a0a1f" }}>
        <div className="section-container">
          <h2 style={{ fontSize: "1.5rem", fontWeight: 800, color: "white", marginBottom: "1.5rem" }}>Core Frameworks</h2>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))", gap: "1.25rem", marginBottom: "3rem" }}>
            {[
              { icon: "🛑", title: "The HALT Framework", desc: "Are you Hungry, Angry, Lonely, or Tired? HALT is a simple self-check to identify the emotional state beneath a craving.", link: "/learn/halt-framework" },
              { icon: "🧠", title: "Intuitive Eating Basics", desc: "The 10 principles of Intuitive Eating, adapted for evening eating situations.", link: "/learn/what-is-emotional-eating" },
              { icon: "🌙", title: "The Evening Check-In", desc: "A structured 2-minute process for pausing with evening cravings and responding with intention.", link: "/check-in" },
              { icon: "📓", title: "Evening Journal Prompts", desc: "10 reflection questions to deepen self-awareness around evening eating patterns.", link: "/blog/evening-journal-prompts" },
              { icon: "🔬", title: "The Science of Evening Eating", desc: "Why your body and brain behave differently at night — circadian rhythms, cortisol, and appetite hormones.", link: "/learn/evening-eating-science" },
              { icon: "😴", title: "Sleep & Cravings Connection", desc: "How sleep quality directly impacts evening hunger, willpower, and emotional regulation.", link: "/blog/sleep-and-late-night-snacking" },
            ].map(r => (
              <Link key={r.title} href={r.link} style={{ textDecoration: "none" }}>
                <div className="card" style={{ height: "100%", cursor: "pointer" }}>
                  <div style={{ fontSize: "1.75rem", marginBottom: "0.75rem" }}>{r.icon}</div>
                  <h3 style={{ color: "white", fontWeight: 700, fontSize: "1rem", marginBottom: "0.5rem" }}>{r.title}</h3>
                  <p style={{ color: "#94a3b8", fontSize: "0.875rem", lineHeight: 1.65 }}>{r.desc}</p>
                  <p style={{ color: "#8b5cf6", fontSize: "0.8rem", marginTop: "0.75rem", fontWeight: 600 }}>Read more →</p>
                </div>
              </Link>
            ))}
          </div>

          <h2 style={{ fontSize: "1.5rem", fontWeight: 800, color: "white", marginBottom: "1.5rem" }}>Recommended Reading</h2>
          <div className="card" style={{ maxWidth: 700 }}>
            <ul style={{ listStyle: "none", padding: 0, margin: 0 }}>
              {[
                { title: "Intuitive Eating", author: "Evelyn Tribole & Elyse Resch", note: "The foundational book on making peace with food and your body." },
                { title: "The Binge Code", author: "Ali Kerr & Andrew Kerr", note: "Practical strategies for understanding and ending binge eating cycles." },
                { title: "Brain over Binge", author: "Kathryn Hansen", note: "A personal account with practical insights for breaking binge-restrict cycles." },
                { title: "Health at Every Size", author: "Lindo Bacon", note: "Evidence-based approach to health that doesn't center weight loss." },
              ].map(b => (
                <li key={b.title} style={{ padding: "1rem 0", borderBottom: "1px solid rgba(139,92,246,0.1)" }}>
                  <strong style={{ color: "white", display: "block", marginBottom: "0.25rem" }}>{b.title}</strong>
                  <span style={{ color: "#8b5cf6", fontSize: "0.85rem" }}>by {b.author}</span>
                  <p style={{ color: "#94a3b8", fontSize: "0.85rem", marginTop: "0.25rem" }}>{b.note}</p>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>
    </>
  );
}
