import type { Metadata } from "next";
import Link from "next/link";
import PrintButton from "@/components/PrintButton";

export const metadata: Metadata = {
  title: "Kitchen Closing Agreement | Mindful Evenings",
  description: "A self-compassionate commitment to closing your kitchen at night. Print it out and put it on your fridge.",
  alternates: { canonical: "https://evenings.chase-wellness.com/resources/kitchen-closing-contract" },
};

export default function KitchenClosingContractPage() {
  return (
    <>
      <section style={{ padding: "4rem 1.5rem", background: "linear-gradient(180deg, #0a0a1f 0%, #0f0a2e 100%)", textAlign: "center" }}>
        <div className="section-container" style={{ maxWidth: 700 }}>
          <Link href="/resources" style={{ color: "#8b5cf6", fontSize: "0.85rem", textDecoration: "none", fontWeight: 600 }}>
            ← Back to Resources
          </Link>
          <div style={{ fontSize: "2.5rem", margin: "1.5rem 0 1rem" }}>🍳</div>
          <h1 style={{ fontSize: "clamp(1.75rem, 3.5vw, 2.5rem)", fontWeight: 800, color: "white", marginBottom: "1rem" }}>
            Kitchen Closing Agreement
          </h1>
          <p style={{ color: "#94a3b8", maxWidth: 520, margin: "0 auto", lineHeight: 1.7 }}>
            A self-compassionate commitment to closing your kitchen at night. This isn&apos;t about restriction — it&apos;s about creating a boundary with intention.
          </p>
        </div>
      </section>

      <section style={{ padding: "3rem 1.5rem", background: "#0a0a1f" }}>
        <div className="section-container" style={{ maxWidth: 650 }}>
          
          {/* The Contract */}
          <div className="card" id="contract" style={{ padding: "2.5rem", marginBottom: "2rem", background: "linear-gradient(135deg, #12122a 0%, #1a1a3a 100%)", border: "2px solid rgba(139, 92, 246, 0.3)" }}>
            <div style={{ textAlign: "center", marginBottom: "2rem" }}>
              <div style={{ fontSize: "1.5rem", marginBottom: "0.5rem" }}>🌙</div>
              <h2 style={{ color: "white", fontWeight: 800, fontSize: "1.4rem" }}>My Kitchen Closing Agreement</h2>
            </div>

            <div style={{ color: "#cbd5e1", lineHeight: 1.8, fontSize: "1rem" }}>
              <p style={{ marginBottom: "1.5rem" }}>
                I, <span style={{ borderBottom: "2px dotted rgba(139, 92, 246, 0.5)", padding: "0 1rem", color: "#a78bfa" }}>________________</span>, am choosing to close my kitchen at{" "}
                <span style={{ borderBottom: "2px dotted rgba(139, 92, 246, 0.5)", padding: "0 0.75rem", color: "#a78bfa" }}>____</span> each evening.
              </p>

              <p style={{ marginBottom: "1rem", fontWeight: 600, color: "white" }}>I understand that:</p>
              <ul style={{ padding: "0 0 0 1.5rem", marginBottom: "1.5rem" }}>
                <li style={{ marginBottom: "0.75rem", color: "#cbd5e1" }}>This is a <strong style={{ color: "#a78bfa" }}>gentle boundary</strong>, not a rigid rule</li>
                <li style={{ marginBottom: "0.75rem", color: "#cbd5e1" }}>When I feel drawn to the kitchen after closing time, I will <strong style={{ color: "#a78bfa" }}>pause for just 30 seconds</strong> before reacting</li>
                <li style={{ marginBottom: "0.75rem", color: "#cbd5e1" }}>During that pause, I will ask myself: <em style={{ color: "#94a3b8" }}>&quot;What am I actually feeling right now?&quot;</em></li>
                <li style={{ marginBottom: "0.75rem", color: "#cbd5e1" }}>If I eat after the kitchen closes, I won&apos;t beat myself up — I&apos;ll <strong style={{ color: "#a78bfa" }}>get curious</strong> about what happened and try again tomorrow</li>
                <li style={{ marginBottom: "0.75rem", color: "#cbd5e1" }}>This agreement is about <strong style={{ color: "#a78bfa" }}>understanding</strong>, not perfection</li>
              </ul>

              <p style={{ marginBottom: "1.5rem" }}>
                <strong style={{ color: "white" }}>Instead of eating after closing, I can:</strong>
              </p>
              <ul style={{ padding: "0 0 0 1.5rem", marginBottom: "2rem" }}>
                <li style={{ marginBottom: "0.5rem", color: "#94a3b8" }}>Take a short walk or stretch</li>
                <li style={{ marginBottom: "0.5rem", color: "#94a3b8" }}>Do a 2-minute breathing exercise</li>
                <li style={{ marginBottom: "0.5rem", color: "#94a3b8" }}>Journal about what I&apos;m feeling</li>
                <li style={{ marginBottom: "0.5rem", color: "#94a3b8" }}>Call or text someone I care about</li>
                <li style={{ marginBottom: "0.5rem", color: "#94a3b8" }}>Make a cup of herbal tea</li>
              </ul>

              <div style={{ display: "flex", justifyContent: "space-between", alignItems: "end", marginTop: "2rem", paddingTop: "1.5rem", borderTop: "1px solid rgba(139, 92, 246, 0.2)" }}>
                <div>
                  <p style={{ color: "#64748b", fontSize: "0.8rem", marginBottom: "0.25rem" }}>Signed</p>
                  <div style={{ borderBottom: "2px dotted rgba(139, 92, 246, 0.5)", width: "200px", height: "1.5rem" }} />
                </div>
                <div>
                  <p style={{ color: "#64748b", fontSize: "0.8rem", marginBottom: "0.25rem" }}>Date</p>
                  <div style={{ borderBottom: "2px dotted rgba(139, 92, 246, 0.5)", width: "120px", height: "1.5rem" }} />
                </div>
              </div>
            </div>
          </div>

          {/* Print button */}
          <div style={{ textAlign: "center", marginBottom: "3rem" }}>
            <PrintButton />
            <p style={{ color: "#64748b", fontSize: "0.8rem", marginTop: "0.75rem" }}>
              Print this out and put it on your fridge as a gentle daily reminder.
            </p>
          </div>

          {/* Tips */}
          <div className="card" style={{ padding: "1.5rem" }}>
            <h3 style={{ color: "white", fontWeight: 700, fontSize: "1rem", marginBottom: "1rem" }}>💡 Tips for Success</h3>
            <ul style={{ listStyle: "none", padding: 0, margin: 0 }}>
              {[
                "Pick a time that's realistic — not punishing. If you usually eat until 9 PM, don't set it at 7.",
                "Put it somewhere visible. The fridge, a bathroom mirror, your phone wallpaper.",
                "Review it weekly. Adjust the time if needed. This grows with you.",
                "Remember: breaking the agreement isn't failure. It's data. What happened? What did you need?",
              ].map((tip, i) => (
                <li key={i} style={{ padding: "0.75rem 0", borderBottom: i < 3 ? "1px solid rgba(139,92,246,0.1)" : "none", color: "#94a3b8", fontSize: "0.9rem", lineHeight: 1.6 }}>
                  <span style={{ color: "#8b5cf6", fontWeight: 600 }}>{i + 1}.</span> {tip}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>
    </>
  );
}
