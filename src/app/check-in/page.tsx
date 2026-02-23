import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Start Your Free Check-In | Mindful Evenings",
  description: "Take a free 2-minute evening check-in. Understand your cravings with compassion, not restriction.",
  alternates: { canonical: "https://evenings.chase-wellness.com/check-in" },
};

export default function CheckInPage() {
  return (
    <section style={{ padding: "5rem 1.5rem", background: "linear-gradient(180deg, #0a0a1f 0%, #0f0a2e 50%, #0a0a1f 100%)", minHeight: "80vh", display: "flex", alignItems: "center", textAlign: "center" }} className="stars-bg">
      <div className="section-container">
        <div style={{ fontSize: "3rem", marginBottom: "1rem" }}>🌙</div>
        <h1 style={{ fontSize: "clamp(2rem, 4vw, 3rem)", fontWeight: 800, color: "white", marginBottom: "1rem" }}>
          Start Your Free Check-In
        </h1>
        <p style={{ color: "#94a3b8", maxWidth: 520, margin: "0 auto 2rem", lineHeight: 1.7, fontSize: "1.05rem" }}>
          A free 2-minute check-in that helps you understand what's actually driving your evening craving — not with rules, but with curiosity and compassion.
        </p>
        <div style={{ display: "flex", gap: "1rem", justifyContent: "center", flexWrap: "wrap", marginBottom: "2rem" }}>
          <a href="https://app.chase-wellness.com" target="_blank" rel="noopener noreferrer" className="btn-primary" style={{ fontSize: "1.05rem", padding: "0.9rem 2rem" }}>
            Open the App →
          </a>
        </div>
        <p style={{ color: "#475569", fontSize: "0.8rem" }}>Free to start · No account required · Built by a Registered Dietitian</p>

        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(200px, 1fr))", gap: "1rem", maxWidth: 700, margin: "3rem auto 0" }}>
          {[
            { icon: "⏱️", title: "2 Minutes", desc: "Quick enough for any craving moment" },
            { icon: "💜", title: "No Judgment", desc: "All responses are valid and welcomed" },
            { icon: "🎯", title: "Personalized", desc: "Meets you where you are right now" },
            { icon: "🆓", title: "Free to Start", desc: "No credit card, no commitment needed" },
          ].map(f => (
            <div key={f.title} className="card" style={{ textAlign: "center" }}>
              <div style={{ fontSize: "1.5rem", marginBottom: "0.5rem" }}>{f.icon}</div>
              <h3 style={{ color: "white", fontWeight: 700, fontSize: "0.9rem", marginBottom: "0.3rem" }}>{f.title}</h3>
              <p style={{ color: "#94a3b8", fontSize: "0.8rem" }}>{f.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
