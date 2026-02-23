import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "GLP-1 Evening Eating Support | Ozempic & Wegovy Night Cravings | Mindful Evenings",
  description: "GLP-1 medications are incredible at turning down physical hunger. But they don't touch the other reasons we eat. That's where Mindful Evenings comes in.",
  alternates: { canonical: "https://evenings.chase-wellness.com/glp1" },
  openGraph: {
    title: "GLP-1 Evening Eating Support | Mindful Evenings",
    description: "GLP-1 medications are incredible at turning down physical hunger. But they don't touch the other reasons we eat.",
    url: "https://evenings.chase-wellness.com/glp1",
  },
};

const faqItems = [
  {
    question: "Why do I still get evening cravings on Ozempic?",
    answer: "GLP-1 medications primarily reduce physical hunger signals. But evening eating is often driven by stress, boredom, habit, or emotional needs — none of which the medication addresses. That's why the cravings persist even when you're not physically hungry.",
  },
  {
    question: "Is it normal to not eat all day then binge at night on GLP-1s?",
    answer: "Extremely common. GLP-1 medications suppress appetite during the day, which can lead to under-eating. By evening, your body is genuinely hungry AND your emotional needs are unmet. It's not a character flaw — it's biology plus psychology.",
  },
  {
    question: "Should I increase my dose if I'm still hungry at night?",
    answer: "Not necessarily. Evening hunger on GLP-1s is often a nutrition timing issue, not a dose issue. If you're under-eating during the day, no dose will fix nighttime hunger. Talk to your prescriber, but also look at your daytime eating pattern first.",
  },
  {
    question: "Will evening cravings go away eventually on GLP-1 medications?",
    answer: "Physical hunger cravings often decrease significantly. But emotional and habitual eating patterns need separate attention. Building awareness of what's driving the craving — through tools like a simple check-in — is what actually shifts the pattern long-term.",
  },
];

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: faqItems.map((item) => ({
    "@type": "Question",
    name: item.question,
    acceptedAnswer: { "@type": "Answer", text: item.answer },
  })),
};

export default function GLP1Page() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />

      {/* Hero */}
      <section style={{ padding: "5rem 1.5rem 3rem", background: "linear-gradient(180deg, #0a0a1f 0%, #0f0a2e 100%)", minHeight: "45vh", display: "flex", alignItems: "center" }}>
        <div className="section-container" style={{ textAlign: "center" }}>
          <p style={{ color: "#8b5cf6", fontSize: "0.8rem", fontWeight: 700, letterSpacing: "0.12em", textTransform: "uppercase", marginBottom: "0.75rem" }}>GLP-1 EVENING SUPPORT</p>
          <h1 style={{ fontSize: "clamp(2rem, 4vw, 3rem)", fontWeight: 800, color: "white", marginBottom: "1.25rem", lineHeight: 1.2 }}>
            The GLP-1 Evening Survival Guide
          </h1>
          <p style={{ color: "#94a3b8", maxWidth: 650, margin: "0 auto", lineHeight: 1.7, fontSize: "1.1rem" }}>
            What to do when you're not hungry but standing in front of the fridge anyway.
          </p>
        </div>
      </section>

      {/* The Pattern */}
      <section style={{ padding: "4rem 1.5rem", background: "#0a0a1f" }}>
        <div className="section-container" style={{ maxWidth: 720 }}>
          <h2 style={{ fontSize: "1.75rem", fontWeight: 800, color: "white", marginBottom: "1.5rem" }}>
            Sound familiar?
          </h2>
          <div style={{ color: "#94a3b8", lineHeight: 1.8, fontSize: "0.95rem" }}>
            <p style={{ marginBottom: "1.25rem" }}>
              If you're on Ozempic, Wegovy, or Mounjaro and you've noticed this pattern — nothing sounds good during the day, maybe you skip breakfast entirely, pick at lunch... and then 8 PM rolls around and suddenly you could eat the entire contents of your refrigerator — you're not alone. Like, really not alone.
            </p>
            <p style={{ marginBottom: "1.25rem" }}>
              This is probably the most common thing I hear from my patients on GLP-1 medications. And the frustrating part is that nobody warned them it might happen.
            </p>
          </div>
        </div>
      </section>

      {/* How GLP-1s Work */}
      <section style={{ padding: "4rem 1.5rem", background: "#0f0a2e" }}>
        <div className="section-container" style={{ maxWidth: 720 }}>
          <h2 style={{ fontSize: "1.75rem", fontWeight: 800, color: "white", marginBottom: "1.5rem" }}>
            How GLP-1 medications actually work
          </h2>
          <p style={{ color: "#94a3b8", lineHeight: 1.8, fontSize: "0.95rem", marginBottom: "1.5rem" }}>
            GLP-1 medications work by mimicking a hormone your body naturally produces after eating. This hormone:
          </p>
          <ul style={{ color: "#94a3b8", lineHeight: 2, fontSize: "0.95rem", paddingLeft: "1.5rem" }}>
            <li>Slows down how fast food leaves your stomach</li>
            <li>Signals to your brain that you're satisfied</li>
            <li>Reduces "food noise" — that constant background chatter about what to eat next</li>
          </ul>
          <p style={{ color: "#94a3b8", lineHeight: 1.8, fontSize: "0.95rem", marginTop: "1.5rem" }}>
            For many people, it's life-changing. But here's what nobody talks about...
          </p>
        </div>
      </section>

      {/* Why Evenings Are Different */}
      <section style={{ padding: "4rem 1.5rem", background: "#0a0a1f" }}>
        <div className="section-container" style={{ maxWidth: 720 }}>
          <h2 style={{ fontSize: "1.75rem", fontWeight: 800, color: "white", marginBottom: "1.5rem" }}>
            Why evenings are different
          </h2>
          <div style={{ color: "#94a3b8", lineHeight: 1.8, fontSize: "0.95rem" }}>
            <p style={{ marginBottom: "1.25rem" }}>
              You've done everything right today. You barely thought about food, ate reasonable portions, felt in control. The medication is working.
            </p>
            <p style={{ marginBottom: "1.25rem" }}>
              Then 8 PM happens.
            </p>
            <p style={{ marginBottom: "1.25rem" }}>
              Suddenly you're in the kitchen. Opening the fridge. Closing it. Opening the pantry. And you have no idea why, because you're not even hungry. Not really.
            </p>
            <p style={{ marginBottom: "1.25rem" }}>
              If this sounds familiar, you're experiencing something most people on GLP-1 medications don't get warned about: <strong style={{ color: "white" }}>evening cravings are often the last thing to go.</strong>
            </p>
            <p style={{ marginBottom: "1.25rem" }}>
              Ozempic, Wegovy, and Mounjaro are incredibly effective at reducing physical hunger. But physical hunger is only one reason we eat. We also eat because we're:
            </p>
          </div>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(140px, 1fr))", gap: "1rem", marginTop: "1.5rem" }}>
            {["Bored", "Stressed", "Tired", "Lonely", "Overwhelmed", "Running on autopilot"].map((reason) => (
              <div key={reason} style={{ background: "rgba(139, 92, 246, 0.08)", border: "1px solid rgba(139, 92, 246, 0.15)", borderRadius: 12, padding: "1rem", textAlign: "center", color: "#c4b5fd", fontSize: "0.9rem", fontWeight: 600 }}>
                {reason}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* What Actually Helps */}
      <section style={{ padding: "4rem 1.5rem", background: "#0f0a2e" }}>
        <div className="section-container" style={{ maxWidth: 720 }}>
          <h2 style={{ fontSize: "1.75rem", fontWeight: 800, color: "white", marginBottom: "1.5rem" }}>
            What actually helps
          </h2>
          <div style={{ color: "#94a3b8", lineHeight: 1.8, fontSize: "0.95rem" }}>
            <p style={{ marginBottom: "1.25rem" }}>
              This is super common on GLP-1 medications. It's not a character flaw.
            </p>
            <p style={{ marginBottom: "1.25rem" }}>
              The fix is usually simpler than you think: <strong style={{ color: "white" }}>eat more during the day, plan for evening hunger instead of fighting it, and check in with yourself when the urge hits.</strong>
            </p>
            <p style={{ marginBottom: "1.25rem" }}>
              That last part is what Mindful Evenings is built for. A simple 2-minute check-in that helps you understand what's actually driving the craving — so you can respond to what you really need instead of standing in front of the fridge wondering what's wrong with you.
            </p>
            <p>
              Nothing is wrong with you. <strong style={{ color: "white" }}>You've got this.</strong>
            </p>
          </div>
          <div style={{ marginTop: "2rem", display: "flex", gap: "1rem", flexWrap: "wrap" }}>
            <a href="https://app.chase-wellness.com" target="_blank" rel="noopener noreferrer" className="btn-primary">Try a Free Check-In</a>
            <Link href="/blog/glp1-evening-cravings" className="btn-secondary">Read: Evening Cravings on GLP-1s</Link>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section style={{ padding: "4rem 1.5rem", background: "#0a0a1f" }}>
        <div className="section-container" style={{ maxWidth: 720 }}>
          <h2 style={{ fontSize: "1.75rem", fontWeight: 800, color: "white", marginBottom: "2rem", textAlign: "center" }}>
            Frequently Asked Questions
          </h2>
          <div style={{ display: "flex", flexDirection: "column", gap: "1.5rem" }}>
            {faqItems.map((item) => (
              <div key={item.question} style={{ background: "rgba(139, 92, 246, 0.08)", border: "1px solid rgba(139, 92, 246, 0.15)", borderRadius: 16, padding: "1.5rem" }}>
                <h3 style={{ color: "white", fontSize: "1rem", fontWeight: 700, marginBottom: "0.75rem" }}>{item.question}</h3>
                <p style={{ color: "#94a3b8", lineHeight: 1.7, fontSize: "0.9rem" }}>{item.answer}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Related Reading */}
      <section style={{ padding: "4rem 1.5rem", background: "#0f0a2e" }}>
        <div className="section-container" style={{ maxWidth: 720, textAlign: "center" }}>
          <h2 style={{ fontSize: "1.5rem", fontWeight: 800, color: "white", marginBottom: "2rem" }}>
            Keep Reading
          </h2>
          <div style={{ display: "flex", flexDirection: "column", gap: "1rem" }}>
            {[
              { href: "/blog/glp1-evening-cravings", title: "Evening Cravings on GLP-1s: What Your Medication Can't Fix" },
              { href: "/blog/glp1-food-noise", title: "GLP-1 Food Noise: When the Medication Quiets Your Hunger But Not Your Mind" },
              { href: "/blog/glp1-starving-at-night", title: "Starving at Night on GLP-1 Medication? Here's Why" },
            ].map((post) => (
              <Link key={post.href} href={post.href} style={{ display: "block", background: "rgba(139, 92, 246, 0.06)", border: "1px solid rgba(139, 92, 246, 0.12)", borderRadius: 12, padding: "1.25rem", color: "#c4b5fd", fontWeight: 600, textDecoration: "none", transition: "all 0.2s" }}>
                {post.title} →
              </Link>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
