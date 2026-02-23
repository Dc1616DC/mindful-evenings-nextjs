import type { Metadata } from "next";
import Link from "next/link";
import NewsletterForm from "@/components/NewsletterForm";

export const metadata: Metadata = {
  title: "Evening Eating Resources & Tools | Mindful Evenings",
  description: "Free resources for managing nighttime cravings — journal prompts, the HALT check-in, breathing exercises, and more. Tools, guides, and resources to support your journey.",
  alternates: { canonical: "https://evenings.chase-wellness.com/resources" },
};

export default function ResourcesPage() {
  return (
    <>
      <section style={{ padding: "5rem 1.5rem", background: "linear-gradient(180deg, #0a0a1f 0%, #0f0a2e 100%)", textAlign: "center" }}>
        <div className="section-container">
          <div style={{ fontSize: "2.5rem", marginBottom: "1rem" }}>📚</div>
          <h1 style={{ fontSize: "clamp(2rem, 4vw, 3rem)", fontWeight: 800, color: "white", marginBottom: "1rem" }}>Evening Eating Resources & Tools</h1>
          <p style={{ color: "#94a3b8", maxWidth: 580, margin: "0 auto", lineHeight: 1.7 }}>
            Tools, guides, and resources to support your journey — all free, no signup required.
          </p>
        </div>
      </section>

      {/* Free Downloads */}
      <section style={{ padding: "3rem 1.5rem", background: "#0a0a1f" }}>
        <div className="section-container">
          <p style={{ color: "#8b5cf6", fontSize: "0.8rem", fontWeight: 700, letterSpacing: "0.12em", textTransform: "uppercase", marginBottom: "0.75rem" }}>START HERE</p>
          <h2 style={{ fontSize: "1.5rem", fontWeight: 800, color: "white", marginBottom: "1.5rem" }}>Essential Reads</h2>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))", gap: "1.25rem", marginBottom: "3rem" }}>
            
            {/* Evening Eating Starter Guide */}
            <Link href="/learn/evening-eating-science" style={{ textDecoration: "none" }}>
              <div className="card" style={{ textAlign: "center", padding: "2rem 1.5rem", cursor: "pointer", height: "100%" }}>
                <div style={{ fontSize: "2.5rem", marginBottom: "1rem" }}>📖</div>
                <h3 style={{ color: "white", fontWeight: 700, fontSize: "1.1rem", marginBottom: "0.5rem" }}>The Science of Evening Eating</h3>
                <p style={{ color: "#94a3b8", fontSize: "0.875rem", lineHeight: 1.65, marginBottom: "1.25rem" }}>
                  Why your body and brain behave differently at night — circadian rhythms, cortisol, and appetite hormones explained. Start here to understand what&apos;s actually happening.
                </p>
                <p style={{ color: "#8b5cf6", fontSize: "0.85rem", fontWeight: 600 }}>Read the guide →</p>
              </div>
            </Link>

            {/* Evening Check-In */}
            <Link href="/check-in" style={{ textDecoration: "none" }}>
              <div className="card" style={{ textAlign: "center", padding: "2rem 1.5rem", cursor: "pointer", height: "100%" }}>
                <div style={{ fontSize: "2.5rem", marginBottom: "1rem" }}>✨</div>
                <h3 style={{ color: "white", fontWeight: 700, fontSize: "1.1rem", marginBottom: "0.5rem" }}>Evening Check-In Tool</h3>
                <p style={{ color: "#94a3b8", fontSize: "0.875rem", lineHeight: 1.65, marginBottom: "1.25rem" }}>
                  A free 2-minute guided check-in for those craving moments. Pause, understand what you&apos;re feeling, and respond with intention instead of autopilot.
                </p>
                <p style={{ color: "#8b5cf6", fontSize: "0.85rem", fontWeight: 600 }}>Start a check-in →</p>
              </div>
            </Link>

            {/* Values & Emotional Eating */}
            <Link href="/learn/what-is-emotional-eating" style={{ textDecoration: "none" }}>
              <div className="card" style={{ textAlign: "center", padding: "2rem 1.5rem", cursor: "pointer", height: "100%" }}>
                <div style={{ fontSize: "2.5rem", marginBottom: "1rem" }}>🧠</div>
                <h3 style={{ color: "white", fontWeight: 700, fontSize: "1.1rem", marginBottom: "0.5rem" }}>Understanding Emotional Eating</h3>
                <p style={{ color: "#94a3b8", fontSize: "0.875rem", lineHeight: 1.65, marginBottom: "1.25rem" }}>
                  What emotional eating actually is (and isn&apos;t), why willpower doesn&apos;t work, and how an ACT-based values approach changes everything.
                </p>
                <p style={{ color: "#8b5cf6", fontSize: "0.85rem", fontWeight: 600 }}>Learn more →</p>
              </div>
            </Link>
          </div>

          {/* Email signup */}
          <div className="card" style={{ maxWidth: 520, margin: "0 auto", textAlign: "center", padding: "2rem" }}>
            <h3 style={{ color: "white", fontWeight: 700, fontSize: "1rem", marginBottom: "0.5rem" }}>Get weekly evening eating insights</h3>
            <p style={{ color: "#94a3b8", fontSize: "0.85rem", marginBottom: "1.25rem" }}>
              Short, practical insights on evening eating — psychology, strategies, and new resources. Written by an RD who gets it.
            </p>
            <NewsletterForm />
          </div>
        </div>
      </section>

      {/* Core Frameworks */}
      <section style={{ padding: "3rem 1.5rem", background: "#0f0a2e" }}>
        <div className="section-container">
          <p style={{ color: "#8b5cf6", fontSize: "0.8rem", fontWeight: 700, letterSpacing: "0.12em", textTransform: "uppercase", marginBottom: "0.75rem" }}>LEARN</p>
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
        </div>
      </section>

      {/* Practical Tools */}
      <section style={{ padding: "3rem 1.5rem", background: "#0a0a1f" }}>
        <div className="section-container">
          <p style={{ color: "#8b5cf6", fontSize: "0.8rem", fontWeight: 700, letterSpacing: "0.12em", textTransform: "uppercase", marginBottom: "0.75rem" }}>TOOLS</p>
          <h2 style={{ fontSize: "1.5rem", fontWeight: 800, color: "white", marginBottom: "1.5rem" }}>Practical Tools</h2>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))", gap: "1.25rem", marginBottom: "3rem" }}>
            <Link href="/resources/kitchen-closing-contract" style={{ textDecoration: "none" }}>
              <div className="card" style={{ height: "100%", cursor: "pointer" }}>
                <div style={{ fontSize: "1.75rem", marginBottom: "0.75rem" }}>🍳</div>
                <h3 style={{ color: "white", fontWeight: 700, fontSize: "1rem", marginBottom: "0.5rem" }}>Kitchen Closing Agreement</h3>
                <p style={{ color: "#94a3b8", fontSize: "0.875rem", lineHeight: 1.65 }}>
                  A gentle boundary-setting tool. Choose your kitchen closing time and create a compassionate agreement with yourself about how to respond when drawn back after closing.
                </p>
                <p style={{ color: "#8b5cf6", fontSize: "0.8rem", marginTop: "0.75rem", fontWeight: 600 }}>Create your agreement →</p>
              </div>
            </Link>
            <Link href="/check-in" style={{ textDecoration: "none" }}>
              <div className="card" style={{ height: "100%", cursor: "pointer" }}>
                <div style={{ fontSize: "1.75rem", marginBottom: "0.75rem" }}>✨</div>
                <h3 style={{ color: "white", fontWeight: 700, fontSize: "1rem", marginBottom: "0.5rem" }}>Evening Check-In Tool</h3>
                <p style={{ color: "#94a3b8", fontSize: "0.875rem", lineHeight: 1.65 }}>
                  A 2-minute guided check-in to help you pause, understand what you&apos;re feeling, and respond with awareness instead of autopilot.
                </p>
                <p style={{ color: "#8b5cf6", fontSize: "0.8rem", marginTop: "0.75rem", fontWeight: 600 }}>Start a check-in →</p>
              </div>
            </Link>
            <div className="card" style={{ height: "100%" }}>
              <div style={{ fontSize: "1.75rem", marginBottom: "0.75rem" }}>📓</div>
              <h3 style={{ color: "white", fontWeight: 700, fontSize: "1rem", marginBottom: "0.5rem" }}>Personal Craving Journal</h3>
              <p style={{ color: "#94a3b8", fontSize: "0.875rem", lineHeight: 1.65 }}>
                Track your evening patterns over time. See what triggers cravings, what helps, and what you&apos;re really feeling beneath the urge.
              </p>
              <p style={{ color: "#64748b", fontSize: "0.8rem", marginTop: "0.75rem", fontWeight: 600 }}>Available with premium →</p>
            </div>
          </div>
        </div>
      </section>

      {/* Recommended Reading */}
      <section style={{ padding: "3rem 1.5rem", background: "#0f0a2e" }}>
        <div className="section-container">
          <p style={{ color: "#8b5cf6", fontSize: "0.8rem", fontWeight: 700, letterSpacing: "0.12em", textTransform: "uppercase", marginBottom: "0.75rem" }}>READING LIST</p>
          <h2 style={{ fontSize: "1.5rem", fontWeight: 800, color: "white", marginBottom: "1.5rem" }}>Recommended Reading</h2>
          <div className="card" style={{ maxWidth: 700 }}>
            <ul style={{ listStyle: "none", padding: 0, margin: 0 }}>
              {[
                { title: "Intuitive Eating", author: "Evelyn Tribole & Elyse Resch", note: "The foundational book on making peace with food and your body." },
                { title: "The Binge Code", author: "Ali Kerr & Andrew Kerr", note: "Practical strategies for understanding and ending binge eating cycles." },
                { title: "Brain over Binge", author: "Kathryn Hansen", note: "A personal account with practical insights for breaking binge-restrict cycles." },
                { title: "Health at Every Size", author: "Lindo Bacon", note: "Evidence-based approach to health that doesn't center weight loss." },
              ].map((b, i) => (
                <li key={b.title} style={{ padding: "1rem 0", borderBottom: i < 3 ? "1px solid rgba(139,92,246,0.1)" : "none" }}>
                  <strong style={{ color: "white", display: "block", marginBottom: "0.25rem" }}>📕 {b.title}</strong>
                  <span style={{ color: "#8b5cf6", fontSize: "0.85rem" }}>by {b.author}</span>
                  <p style={{ color: "#94a3b8", fontSize: "0.85rem", marginTop: "0.25rem" }}>{b.note}</p>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      {/* External Resources */}
      <section style={{ padding: "3rem 1.5rem", background: "#0a0a1f" }}>
        <div className="section-container">
          <p style={{ color: "#8b5cf6", fontSize: "0.8rem", fontWeight: 700, letterSpacing: "0.12em", textTransform: "uppercase", marginBottom: "0.75rem" }}>TRUSTED ORGANIZATIONS</p>
          <h2 style={{ fontSize: "1.5rem", fontWeight: 800, color: "white", marginBottom: "1.5rem" }}>External Resources We Trust</h2>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))", gap: "1.25rem" }}>
            <a href="https://www.intuitiveeating.org" target="_blank" rel="noopener noreferrer" style={{ textDecoration: "none" }}>
              <div className="card" style={{ height: "100%" }}>
                <h3 style={{ color: "white", fontWeight: 700, fontSize: "1rem", marginBottom: "0.5rem" }}>Intuitive Eating</h3>
                <p style={{ color: "#94a3b8", fontSize: "0.875rem", lineHeight: 1.65 }}>
                  The official resource for the Intuitive Eating framework by Tribole & Resch. Find certified counselors, research, and community.
                </p>
                <p style={{ color: "#8b5cf6", fontSize: "0.8rem", marginTop: "0.75rem", fontWeight: 600 }}>intuitiveeating.org ↗</p>
              </div>
            </a>
            <a href="https://www.nationaleatingdisorders.org" target="_blank" rel="noopener noreferrer" style={{ textDecoration: "none" }}>
              <div className="card" style={{ height: "100%" }}>
                <h3 style={{ color: "white", fontWeight: 700, fontSize: "1rem", marginBottom: "0.5rem" }}>National Eating Disorders Association</h3>
                <p style={{ color: "#94a3b8", fontSize: "0.875rem", lineHeight: 1.65 }}>
                  Support and resources for eating disorder recovery. If evening eating feels out of control, NEDA offers confidential screening and referrals.
                </p>
                <p style={{ color: "#8b5cf6", fontSize: "0.8rem", marginTop: "0.75rem", fontWeight: 600 }}>nationaleatingdisorders.org ↗</p>
              </div>
            </a>
            <a href="https://contextualscience.org/act" target="_blank" rel="noopener noreferrer" style={{ textDecoration: "none" }}>
              <div className="card" style={{ height: "100%" }}>
                <h3 style={{ color: "white", fontWeight: 700, fontSize: "1rem", marginBottom: "0.5rem" }}>ACT Resources</h3>
                <p style={{ color: "#94a3b8", fontSize: "0.875rem", lineHeight: 1.65 }}>
                  Resources on Acceptance and Commitment Therapy (ACT) — the psychological framework behind Mindful Evenings&apos; approach to cravings.
                </p>
                <p style={{ color: "#8b5cf6", fontSize: "0.8rem", marginTop: "0.75rem", fontWeight: 600 }}>contextualscience.org ↗</p>
              </div>
            </a>
          </div>
        </div>
      </section>

      {/* Disclaimer */}
      <section style={{ padding: "2rem 1.5rem", background: "#0f0a2e", textAlign: "center" }}>
        <div className="section-container" style={{ maxWidth: 600 }}>
          <p style={{ color: "#475569", fontSize: "0.8rem", lineHeight: 1.7 }}>
            <strong style={{ color: "#64748b" }}>Important:</strong> These resources are for informational and wellness purposes only. If you are experiencing an eating disorder or feel your relationship with food is causing significant distress, please reach out to a healthcare professional or contact <a href="https://www.nationaleatingdisorders.org" target="_blank" rel="noopener noreferrer" style={{ color: "#8b5cf6", textDecoration: "underline" }}>NEDA</a> for support.
          </p>
        </div>
      </section>
    </>
  );
}
