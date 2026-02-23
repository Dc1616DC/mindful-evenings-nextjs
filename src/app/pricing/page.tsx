import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Pricing | Mindful Evenings — Free to Start",
  description: "Start free with 3 check-ins per week. Upgrade to Premium ($5.99/mo) for unlimited check-ins, AI insights, and pattern tracking.",
  alternates: { canonical: "https://evenings.chase-wellness.com/pricing" },
};

export default function PricingPage() {
  return (
    <>
      <section style={{ padding: "5rem 1.5rem", background: "linear-gradient(180deg, #0a0a1f 0%, #0f0a2e 100%)", textAlign: "center" }}>
        <div className="section-container">
          <p style={{ color: "#8b5cf6", fontSize: "0.8rem", fontWeight: 700, letterSpacing: "0.12em", textTransform: "uppercase", marginBottom: "0.75rem" }}>SIMPLE PRICING</p>
          <h1 style={{ fontSize: "clamp(2rem, 4vw, 3rem)", fontWeight: 800, color: "white", marginBottom: "1rem" }}>
            Invest in understanding, not <span style={{ color: "#8b5cf6" }}>restriction</span>
          </h1>
          <p style={{ color: "#94a3b8", maxWidth: 500, margin: "0 auto 3rem", lineHeight: 1.7 }}>
            Start free, upgrade when you're ready for deeper insights. Cancel anytime, no questions asked.
          </p>

          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))", gap: "1.5rem", maxWidth: 720, margin: "0 auto 2rem" }}>
            {/* Free */}
            <div className="card" style={{ textAlign: "left" }}>
              <h2 style={{ color: "white", fontWeight: 700, fontSize: "1.3rem", marginBottom: "0.5rem" }}>Free</h2>
              <div style={{ display: "flex", alignItems: "baseline", gap: "0.25rem", marginBottom: "0.5rem" }}>
                <span style={{ fontSize: "3.5rem", fontWeight: 800, color: "white" }}>$0</span>
                <span style={{ color: "#64748b" }}>/forever</span>
              </div>
              <p style={{ color: "#64748b", fontSize: "0.875rem", marginBottom: "1.5rem" }}>Start understanding your evenings</p>
              <ul style={{ listStyle: "none", padding: 0, marginBottom: "2rem" }}>
                {["3 check-ins per week", "Basic craving insights", "Activity suggestions", "Values exploration"].map(f => (
                  <li key={f} style={{ color: "#94a3b8", padding: "0.5rem 0", display: "flex", gap: "0.5rem", borderBottom: "1px solid rgba(139,92,246,0.1)", fontSize: "0.9rem" }}>
                    <span style={{ color: "#8b5cf6", flexShrink: 0 }}>✓</span> {f}
                  </li>
                ))}
              </ul>
              <a href="https://app.chase-wellness.com" target="_blank" rel="noopener noreferrer" style={{ display: "block", padding: "0.8rem", border: "1px solid rgba(139,92,246,0.4)", borderRadius: 9999, color: "white", textDecoration: "none", fontWeight: 600, textAlign: "center" }}>
                Get Started Free
              </a>
            </div>

            {/* Premium */}
            <div className="card" style={{ textAlign: "left", borderColor: "#8b5cf6", position: "relative" }}>
              <div style={{ position: "absolute", top: -12, left: "50%", transform: "translateX(-50%)", background: "linear-gradient(135deg, #7c3aed, #ec4899)", padding: "0.25rem 1rem", borderRadius: 9999, fontSize: "0.75rem", fontWeight: 700, color: "white", whiteSpace: "nowrap" }}>
                Most Popular
              </div>
              <h2 style={{ color: "white", fontWeight: 700, fontSize: "1.3rem", marginBottom: "0.5rem" }}>Premium</h2>
              <div style={{ display: "flex", alignItems: "baseline", gap: "0.25rem", marginBottom: "0.5rem" }}>
                <span style={{ fontSize: "3.5rem", fontWeight: 800, color: "white" }}>$5.99</span>
                <span style={{ color: "#64748b" }}>/month</span>
              </div>
              <p style={{ color: "#64748b", fontSize: "0.875rem", marginBottom: "1.5rem" }}>For deeper insight into your patterns</p>
              <ul style={{ listStyle: "none", padding: 0, marginBottom: "2rem" }}>
                {["Unlimited check-ins", "AI-powered pattern insights", "Weekly reflection summaries", "Values tracking over time", "Personal craving journal", "Priority support"].map(f => (
                  <li key={f} style={{ color: "#94a3b8", padding: "0.5rem 0", display: "flex", gap: "0.5rem", borderBottom: "1px solid rgba(139,92,246,0.1)", fontSize: "0.9rem" }}>
                    <span style={{ color: "#8b5cf6", flexShrink: 0 }}>✓</span> {f}
                  </li>
                ))}
              </ul>
              <a href="https://app.chase-wellness.com" target="_blank" rel="noopener noreferrer" className="btn-primary" style={{ display: "block", textAlign: "center" }}>
                Get Started
              </a>
            </div>
          </div>
          <p style={{ color: "#475569", fontSize: "0.85rem" }}>🔒 Secure payment via Stripe · Cancel anytime · No questions asked</p>
        </div>
      </section>

      <section style={{ padding: "4rem 1.5rem", background: "#0a0a1f" }}>
        <div className="section-container" style={{ maxWidth: 700, textAlign: "center" }}>
          <h2 style={{ fontSize: "1.5rem", fontWeight: 800, color: "white", marginBottom: "1.5rem" }}>Frequently Asked Pricing Questions</h2>
          {[
            { q: "Is there really a free plan?", a: "Yes, completely free. You get 3 check-ins per week, access to activity suggestions, and the core values exploration — forever, no credit card needed." },
            { q: "What happens if I cancel?", a: "Cancel anytime from your account settings. You'll keep access until the end of your billing period, then drop back to the free plan automatically." },
            { q: "Can I switch between plans?", a: "Absolutely. Upgrade or downgrade anytime. Your data and history stay safe regardless of which plan you're on." },
            { q: "Is my payment information secure?", a: "Yes. All payments are processed through Stripe, a PCI-compliant payment processor. We never store your card details." },
          ].map(faq => (
            <div key={faq.q} style={{ textAlign: "left", borderBottom: "1px solid rgba(139,92,246,0.15)", padding: "1.25rem 0" }}>
              <h3 style={{ color: "white", fontWeight: 600, marginBottom: "0.5rem", fontSize: "0.95rem" }}>{faq.q}</h3>
              <p style={{ color: "#94a3b8", fontSize: "0.875rem", lineHeight: 1.7 }}>{faq.a}</p>
            </div>
          ))}
        </div>
      </section>
    </>
  );
}
