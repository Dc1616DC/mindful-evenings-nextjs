import type { Metadata } from "next";
import { SITE_URL } from "@/lib/content";
import NewsletterForm from "@/components/NewsletterForm";

export const metadata: Metadata = {
  title: "Newsletter | Mindful Evenings",
  description: "Subscribe to weekly insights on emotional eating, evening cravings, and building a better relationship with food from Registered Dietitian Dan Chase.",
  alternates: { canonical: `${SITE_URL}/newsletter` },
};

export default function NewsletterPage() {
  return (
    <section style={{ padding: "5rem 1.5rem", background: "linear-gradient(180deg, #0a0a1f 0%, #0f0a2e 50%, #0a0a1f 100%)", minHeight: "80vh", display: "flex", alignItems: "center", textAlign: "center" }} className="stars-bg">
      <div className="section-container">
        <div style={{ fontSize: "2.5rem", marginBottom: "1rem" }}>🌙</div>
        <h1 style={{ fontSize: "clamp(2rem, 4vw, 3rem)", fontWeight: 800, color: "white", marginBottom: "1rem" }}>
          Start Understanding Your Evenings
        </h1>
        <p style={{ color: "#94a3b8", maxWidth: 520, margin: "0 auto 2rem", lineHeight: 1.7 }}>
          Weekly insights on emotional eating, evening cravings, and building a better relationship with food — delivered to your inbox by Registered Dietitian Dan Chase.
        </p>
        <NewsletterForm />
        <p style={{ color: "#64748b", fontSize: "0.8rem", textAlign: "center", marginTop: "1rem" }}>Join 28+ readers getting weekly insights</p>
        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(180px, 1fr))", gap: "1rem", maxWidth: 640, margin: "3rem auto 0" }}>
          {[
            { icon: "📊", title: "Evidence-Based", desc: "Grounded in nutrition science and behavioral psychology" },
            { icon: "💜", title: "Compassionate", desc: "No guilt, no rules — just understanding" },
            { icon: "🎯", title: "Actionable", desc: "Practical tools you can use right away" },
            { icon: "📅", title: "Weekly", desc: "One email per week, no more" },
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
