import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Contact Mindful Evenings | Get in Touch",
  description: "Questions about Mindful Evenings? Contact Dan Chase, RD for support, feedback, or partnership inquiries.",
  alternates: { canonical: "https://evenings.chase-wellness.com/contact" },
};

export default function ContactPage() {
  return (
    <>
      <section style={{ padding: "5rem 1.5rem", background: "linear-gradient(180deg, #0a0a1f 0%, #0f0a2e 100%)", textAlign: "center" }}>
        <div className="section-container">
          <h1 style={{ fontSize: "clamp(2rem, 4vw, 3rem)", fontWeight: 800, color: "white", marginBottom: "1rem" }}>Get in Touch</h1>
          <p style={{ color: "#94a3b8", maxWidth: 500, margin: "0 auto", lineHeight: 1.7 }}>
            Questions about Mindful Evenings? Feedback? Partnership ideas? We'd love to hear from you.
          </p>
        </div>
      </section>
      <section style={{ padding: "3rem 1.5rem 5rem", background: "#0a0a1f" }}>
        <div className="section-container" style={{ maxWidth: 620 }}>
          <div className="card" style={{ marginBottom: "2rem" }}>
            <h2 style={{ color: "white", fontWeight: 700, fontSize: "1.2rem", marginBottom: "1.5rem" }}>Send a Message</h2>
            <form style={{ display: "flex", flexDirection: "column", gap: "1.25rem" }}>
              <div>
                <label style={{ color: "#94a3b8", fontSize: "0.875rem", display: "block", marginBottom: "0.4rem" }}>Name</label>
                <input type="text" placeholder="Your name" style={{ width: "100%", padding: "0.75rem 1rem", borderRadius: 8, border: "1px solid rgba(139,92,246,0.2)", background: "rgba(139,92,246,0.05)", color: "white", outline: "none", fontSize: "0.9rem" }} />
              </div>
              <div>
                <label style={{ color: "#94a3b8", fontSize: "0.875rem", display: "block", marginBottom: "0.4rem" }}>Email</label>
                <input type="email" placeholder="your@email.com" style={{ width: "100%", padding: "0.75rem 1rem", borderRadius: 8, border: "1px solid rgba(139,92,246,0.2)", background: "rgba(139,92,246,0.05)", color: "white", outline: "none", fontSize: "0.9rem" }} />
              </div>
              <div>
                <label style={{ color: "#94a3b8", fontSize: "0.875rem", display: "block", marginBottom: "0.4rem" }}>Subject</label>
                <select style={{ width: "100%", padding: "0.75rem 1rem", borderRadius: 8, border: "1px solid rgba(139,92,246,0.2)", background: "#12122a", color: "white", outline: "none", fontSize: "0.9rem" }}>
                  <option>General question</option>
                  <option>Technical support</option>
                  <option>Partnership / press</option>
                  <option>Feedback</option>
                  <option>Other</option>
                </select>
              </div>
              <div>
                <label style={{ color: "#94a3b8", fontSize: "0.875rem", display: "block", marginBottom: "0.4rem" }}>Message</label>
                <textarea rows={5} placeholder="How can we help?" style={{ width: "100%", padding: "0.75rem 1rem", borderRadius: 8, border: "1px solid rgba(139,92,246,0.2)", background: "rgba(139,92,246,0.05)", color: "white", outline: "none", fontSize: "0.9rem", resize: "vertical" }} />
              </div>
              <button type="submit" className="btn-primary" style={{ alignSelf: "flex-start" }}>Send Message</button>
            </form>
          </div>
          <div style={{ textAlign: "center" }}>
            <p style={{ color: "#64748b", fontSize: "0.875rem" }}>We typically respond within 1–2 business days.</p>
          </div>
        </div>
      </section>
    </>
  );
}
