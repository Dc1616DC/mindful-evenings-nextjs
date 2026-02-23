import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "About Dan Chase, RD | Mindful Evenings Creator",
  description: "Meet Dan Chase, Registered Dietitian and Certified Intuitive Eating Counselor. Why he built Mindful Evenings after years of seeing evening eating patterns.",
  alternates: { canonical: "https://evenings.chase-wellness.com/about" },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "Person",
  name: "Dan Chase",
  jobTitle: "Registered Dietitian",
  description: "Dan Chase, RD is a Registered Dietitian and Certified Intuitive Eating Counselor specializing in emotional eating and evening cravings.",
  url: "https://evenings.chase-wellness.com/about",
};

export default function AboutPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      <section style={{ padding: "5rem 1.5rem", background: "linear-gradient(180deg, #0a0a1f 0%, #0f0a2e 100%)", minHeight: "40vh", display: "flex", alignItems: "center" }}>
        <div className="section-container" style={{ textAlign: "center" }}>
          <p style={{ color: "#8b5cf6", fontSize: "0.8rem", fontWeight: 700, letterSpacing: "0.12em", textTransform: "uppercase", marginBottom: "0.75rem" }}>ABOUT</p>
          <h1 style={{ fontSize: "clamp(2rem, 4vw, 3rem)", fontWeight: 800, color: "white", marginBottom: "1rem" }}>
            About Dan Chase, RD
          </h1>
          <p style={{ color: "#94a3b8", maxWidth: 600, margin: "0 auto", lineHeight: 1.7 }}>
            Registered Dietitian, Certified Intuitive Eating Counselor, and the person who built this because he cared too much not to.
          </p>
        </div>
      </section>

      <section style={{ padding: "4rem 1.5rem", background: "#0a0a1f" }}>
        <div className="section-container">
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))", gap: "3rem", alignItems: "start" }}>
            <div>
              <div style={{ width: 250, height: 250, borderRadius: "50%", border: "3px solid rgba(139, 92, 246, 0.4)", margin: "0 auto 1.5rem", overflow: "hidden" }}>
                <img src="/dan-chase-headshot.webp" alt="Dan Chase, Registered Dietitian" style={{ width: "100%", height: "100%", objectFit: "cover", objectPosition: "center top" }} />
              </div>
              <div style={{ display: "flex", flexWrap: "wrap", gap: "0.5rem", justifyContent: "center", marginBottom: "1rem" }}>
                {["Registered Dietitian (RD)", "Intuitive Eating Certified", "ACT Trained"].map(c => (
                  <span key={c} className="category-badge">{c}</span>
                ))}
              </div>
            </div>
            <div>
              <h2 style={{ fontSize: "1.75rem", fontWeight: 800, color: "white", marginBottom: "1.25rem", lineHeight: 1.3 }}>
                "I built this because I watched clients struggle with the same pattern every night."
              </h2>
              <div style={{ color: "#94a3b8", lineHeight: 1.8, fontSize: "0.95rem" }}>
                <p style={{ marginBottom: "1.25rem" }}>
                  Dan Chase is a Registered Dietitian who has spent years working with people who feel stuck in a frustrating loop: doing well all day, then feeling out of control at night. He noticed this pattern so consistently in his clients that he knew something deeper was happening — something a standard meal plan couldn't fix.
                </p>
                <p style={{ marginBottom: "1.25rem" }}>
                  Drawing on his training in Intuitive Eating and Acceptance and Commitment Therapy (ACT), Dan built Mindful Evenings as a tool to meet people in that specific moment — not with rules, but with curiosity. The question isn't "how do I stop eating at night?" It's "what does this craving actually need?"
                </p>
                <p style={{ marginBottom: "1.25rem" }}>
                  Dan holds a degree in Nutrition and Dietetics and has completed advanced training in Intuitive Eating, ACT-based counseling approaches, and behavioral nutrition. He believes that every person has the wisdom to understand their own body — they just need the right tools to access it.
                </p>
                <p style={{ marginBottom: "1.25rem" }}>
                  "Most of my clients aren't struggling with food. They're struggling with unmet needs that food has become the answer to. When we address the actual need, everything shifts."
                </p>
                <p>
                  Outside of his clinical work, Dan writes about emotional eating, the science of evening cravings, and what it means to build a peaceful relationship with food. His blog and learn articles reflect the same philosophy that drives Mindful Evenings: compassion first, curiosity always.
                </p>
              </div>
              <div style={{ marginTop: "2rem", display: "flex", gap: "1rem", flexWrap: "wrap" }}>
                <a href="https://app.chase-wellness.com" target="_blank" rel="noopener noreferrer" className="btn-primary">Start Your Free Check-In</a>
                <Link href="/blog" className="btn-secondary">Read Dan's Blog</Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section style={{ padding: "4rem 1.5rem", background: "#0f0a2e" }}>
        <div className="section-container" style={{ textAlign: "center" }}>
          <h2 style={{ fontSize: "1.75rem", fontWeight: 800, color: "white", marginBottom: "2rem" }}>
            The Philosophy Behind Mindful Evenings
          </h2>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(220px, 1fr))", gap: "1.5rem" }}>
            {[
              { icon: "🧠", title: "Intuitive Eating", text: "Reject diet culture, honor hunger, make peace with food. Built on Evelyn Tribole & Elyse Resch's evidence-based framework." },
              { icon: "🌿", title: "ACT-Based", text: "Acceptance and Commitment Therapy helps you observe thoughts without being driven by them — perfect for craving moments." },
              { icon: "💜", title: "Self-Compassion First", text: "Research shows that self-criticism makes overeating worse, not better. We build awareness through kindness." },
              { icon: "📊", title: "Evidence-Based", text: "Every feature in Mindful Evenings is grounded in peer-reviewed research on emotional eating and behavior change." },
            ].map(p => (
              <div key={p.title} className="card" style={{ textAlign: "center" }}>
                <div style={{ fontSize: "2rem", marginBottom: "0.75rem" }}>{p.icon}</div>
                <h3 style={{ fontSize: "1rem", fontWeight: 700, color: "white", marginBottom: "0.5rem" }}>{p.title}</h3>
                <p style={{ color: "#94a3b8", fontSize: "0.875rem", lineHeight: 1.65 }}>{p.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
