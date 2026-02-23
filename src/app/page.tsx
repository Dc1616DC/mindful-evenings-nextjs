import type { Metadata } from "next";
import Link from "next/link";
import { SITE_URL } from "@/lib/content";
import NewsletterForm from "@/components/NewsletterForm";

export const metadata: Metadata = {
  title: "Mindful Evenings | Understand Your Evening Eating Patterns",
  description:
    "Free 2-minute check-in by RD Dan Chase. Understand what's driving your 9 PM cravings using Intuitive Eating and ACT. No guilt, no restriction.",
  alternates: {
    canonical: `${SITE_URL}/`,
  },
  openGraph: {
    title: "Mindful Evenings | Understand Your Evening Eating Patterns",
    description:
      "Free 2-minute check-in by RD Dan Chase. Understand what's driving your 9 PM cravings using Intuitive Eating and ACT. No guilt, no restriction.",
    url: `${SITE_URL}/`,
    type: "website",
  },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "WebSite",
  name: "Mindful Evenings",
  url: SITE_URL,
  description:
    "Free 2-minute evening check-in by Registered Dietitian Dan Chase. Built on Intuitive Eating and ACT principles.",
  author: {
    "@type": "Person",
    name: "Dan Chase, RD",
    jobTitle: "Registered Dietitian",
  },
};

export default function HomePage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      {/* Hero Section */}
      <section
        style={{
          position: "relative",
          minHeight: "100vh",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          overflow: "hidden",
          background: "linear-gradient(180deg, #0a0a1f 0%, #0f0a2e 50%, #0a0a1f 100%)",
        }}
        className="stars-bg"
      >
        {/* Moon orb top right */}
        <div
          style={{
            position: "absolute",
            top: -60,
            right: -60,
            width: 300,
            height: 300,
            borderRadius: "50%",
            background: "radial-gradient(circle, rgba(139, 92, 246, 0.25) 0%, transparent 70%)",
            pointerEvents: "none",
          }}
        />
        {/* Purple glow bottom left */}
        <div
          style={{
            position: "absolute",
            bottom: 100,
            left: -100,
            width: 400,
            height: 400,
            borderRadius: "50%",
            background: "radial-gradient(circle, rgba(124, 58, 237, 0.15) 0%, transparent 70%)",
            pointerEvents: "none",
          }}
        />

        <div
          style={{
            textAlign: "center",
            padding: "2rem 1.5rem",
            maxWidth: 780,
            position: "relative",
            zIndex: 1,
          }}
        >
          {/* Badge */}
          <div
            style={{
              display: "inline-block",
              padding: "0.35rem 1rem",
              borderRadius: 9999,
              border: "1px solid rgba(139, 92, 246, 0.4)",
              background: "rgba(139, 92, 246, 0.1)",
              color: "#a78bfa",
              fontSize: "0.8rem",
              fontWeight: 600,
              marginBottom: "1.75rem",
              letterSpacing: "0.03em",
            }}
          >
            Free tool from a Registered Dietitian
          </div>

          {/* H1 */}
          <h1
            style={{
              fontSize: "clamp(2.2rem, 5vw, 3.5rem)",
              fontWeight: 800,
              lineHeight: 1.15,
              marginBottom: "1.5rem",
              color: "white",
            }}
          >
            It&apos;s 9 PM. You&apos;re not hungry...{" "}
            <br />
            but you&apos;re standing in front of the fridge anyway.
          </h1>

          {/* Subtext */}
          <p
            style={{
              fontSize: "1.1rem",
              color: "#94a3b8",
              lineHeight: 1.7,
              marginBottom: "2.5rem",
              maxWidth: 600,
              margin: "0 auto 2.5rem",
            }}
          >
            A free 2-minute check-in that helps you figure out what&apos;s actually driving the
            craving — and what to do about it. No guilt. No rules. Just a better understanding of
            what&apos;s happening at 9 PM.
          </p>

          {/* CTA Buttons */}
          <div
            style={{
              display: "flex",
              gap: "1rem",
              justifyContent: "center",
              flexWrap: "wrap",
              marginBottom: "1.5rem",
            }}
          >
            <a
              href="https://app.chase-wellness.com"
              target="_blank"
              rel="noopener noreferrer"
              className="btn-primary"
            >
              Start Your Free Check-In →
            </a>
            <Link href="/#how-it-works" className="btn-secondary">
              Learn How It Works
            </Link>
          </div>

          <p style={{ color: "#475569", fontSize: "0.8rem" }}>
            Free to start · No credit card required · Built by a Registered Dietitian
          </p>
        </div>
      </section>

      {/* Credibility Bar */}
      <section
        style={{
          background: "rgba(15, 15, 46, 0.8)",
          borderTop: "1px solid rgba(139, 92, 246, 0.1)",
          borderBottom: "1px solid rgba(139, 92, 246, 0.1)",
          padding: "1.5rem",
          textAlign: "center",
        }}
      >
        <div style={{ display: "flex", alignItems: "center", justifyContent: "center", gap: "1rem" }}>
          <div
            style={{
              width: 48,
              height: 48,
              borderRadius: "50%",
              background: "linear-gradient(135deg, #7c3aed, #ec4899)",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              fontSize: "1.25rem",
              flexShrink: 0,
            }}
          >
            👨‍⚕️
          </div>
          <p style={{ color: "#94a3b8", fontSize: "0.9rem" }}>
            Created by{" "}
            <strong style={{ color: "white" }}>Dan Chase, RD</strong> — Registered Dietitian &amp; Certified Intuitive Eating Counselor
          </p>
        </div>
      </section>

      {/* How It Works */}
      <section
        id="how-it-works"
        style={{
          padding: "5rem 1.5rem",
          background: "#0a0a1f",
        }}
      >
        <div className="section-container">
          <div style={{ textAlign: "center", marginBottom: "3rem" }}>
            <p style={{ color: "#8b5cf6", fontSize: "0.8rem", fontWeight: 700, letterSpacing: "0.12em", textTransform: "uppercase", marginBottom: "0.75rem" }}>
              HOW IT WORKS
            </p>
            <h2 style={{ fontSize: "clamp(1.75rem, 3.5vw, 2.5rem)", fontWeight: 800, color: "white", marginBottom: "1rem" }}>
              From craving to clarity in{" "}
              <span className="gradient-text">2 minutes</span>
            </h2>
            <p style={{ color: "#94a3b8", maxWidth: 560, margin: "0 auto", lineHeight: 1.7 }}>
              A simple process that helps you understand what&apos;s behind the craving — so you can respond with awareness, not autopilot.
            </p>
          </div>

          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))",
              gap: "1.5rem",
              marginBottom: "3rem",
            }}
          >
            {[
              {
                num: "01",
                icon: "👁️",
                title: "Notice",
                text: "Open the app when a craving hits. No judgment, just awareness. We meet you exactly where you are.",
                sub: "That moment of pause? It's already doing the work.",
              },
              {
                num: "02",
                icon: "💡",
                title: "Understand",
                text: "A 2-minute check-in helps you identify what you actually need. We explore six core values together.",
                sub: "Rest · Connection · Accomplishment · Comfort · Play · Peace",
              },
              {
                num: "03",
                icon: "🌿",
                title: "Respond",
                text: "Choose your path: Explore Activities, Just Pause, or Eat Mindfully. All options are valid. All are yours.",
                sub: "Responding, not resisting. That's the difference.",
              },
            ].map((step) => (
              <div key={step.num} className="card" style={{ position: "relative" }}>
                <div style={{ color: "#2d2d6e", fontSize: "2rem", fontWeight: 800, marginBottom: "0.5rem" }}>
                  {step.num}
                </div>
                <div style={{ fontSize: "1.5rem", marginBottom: "0.75rem" }}>{step.icon}</div>
                <h3 style={{ fontSize: "1.1rem", fontWeight: 700, color: "white", marginBottom: "0.75rem" }}>
                  {step.title}
                </h3>
                <p style={{ color: "#94a3b8", lineHeight: 1.65, fontSize: "0.95rem", marginBottom: "0.75rem" }}>
                  {step.text}
                </p>
                <p style={{ color: "#6d6d9e", fontSize: "0.85rem", fontStyle: "italic" }}>{step.sub}</p>
              </div>
            ))}
          </div>

          <div style={{ textAlign: "center" }}>
            <a
              href="https://app.chase-wellness.com"
              target="_blank"
              rel="noopener noreferrer"
              className="btn-primary"
            >
              Try Your First Check-In
            </a>
            <p style={{ color: "#475569", fontSize: "0.8rem", marginTop: "0.75rem" }}>
              Takes 2 minutes. No account required to start.
            </p>
          </div>
        </div>
      </section>

      {/* Philosophy Section */}
      <section
        style={{
          padding: "5rem 1.5rem",
          background: "linear-gradient(180deg, #0f0a2e 0%, #0a0a1f 100%)",
          textAlign: "center",
        }}
      >
        <div className="section-container">
          <div style={{ marginBottom: "3rem" }}>
            <div style={{ fontSize: "3rem", color: "#3d2a8a", marginBottom: "1rem" }}>&ldquo;</div>
            <h2 style={{ fontSize: "clamp(1.75rem, 4vw, 2.75rem)", fontWeight: 800, color: "white", marginBottom: "1.25rem" }}>
              Cravings are{" "}
              <span style={{ color: "#8b5cf6" }}>data</span>, not enemies.
            </h2>
            <p style={{ color: "#94a3b8", maxWidth: 580, margin: "0 auto", lineHeight: 1.7 }}>
              Built on the principles of Intuitive Eating and Acceptance and Commitment Therapy (ACT). We&apos;re not here to control your behavior — we&apos;re here to help you understand it.
            </p>
          </div>

          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(auto-fit, minmax(250px, 1fr))",
              gap: "1.5rem",
            }}
          >
            {[
              {
                icon: "🔍",
                title: "We don't fight cravings",
                text: "We get curious about them. Every craving is carrying a message — our job is to listen.",
              },
              {
                icon: "🎯",
                title: "Not about restriction",
                text: "It's about understanding. When you know what you need, you can choose how to respond.",
              },
              {
                icon: "✅",
                title: "All paths are valid",
                text: "Sometimes you need rest. Sometimes you need snacks. Both are okay. Always.",
              },
            ].map((card) => (
              <div key={card.title} className="card" style={{ textAlign: "center" }}>
                <div
                  style={{
                    width: 52,
                    height: 52,
                    borderRadius: "50%",
                    background: "rgba(139, 92, 246, 0.15)",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    fontSize: "1.4rem",
                    margin: "0 auto 1rem",
                  }}
                >
                  {card.icon}
                </div>
                <h3 style={{ fontSize: "1rem", fontWeight: 700, color: "white", marginBottom: "0.6rem" }}>
                  {card.title}
                </h3>
                <p style={{ color: "#94a3b8", fontSize: "0.9rem", lineHeight: 1.65 }}>{card.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* About Preview */}
      <section style={{ padding: "5rem 1.5rem", background: "#0a0a1f" }}>
        <div className="section-container">
          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))",
              gap: "3rem",
              alignItems: "center",
            }}
          >
            {/* Photo placeholder */}
            <div style={{ textAlign: "center" }}>
              <div
                style={{
                  width: 220,
                  height: 220,
                  borderRadius: "50%",
                  background: "linear-gradient(135deg, #1e1b4b, #4c1d95)",
                  border: "3px solid rgba(139, 92, 246, 0.4)",
                  margin: "0 auto",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  fontSize: "4rem",
                }}
              >
                👨‍⚕️
              </div>
              <p style={{ color: "#8b5cf6", fontSize: "0.8rem", marginTop: "0.75rem", fontWeight: 600 }}>
                Registered Dietitian
              </p>
            </div>

            {/* Content */}
            <div>
              <p style={{ color: "#8b5cf6", fontSize: "0.8rem", fontWeight: 700, letterSpacing: "0.12em", textTransform: "uppercase", marginBottom: "0.75rem" }}>
                MEET THE CREATOR
              </p>
              <h2 style={{ fontSize: "clamp(1.5rem, 3vw, 2.25rem)", fontWeight: 800, color: "white", marginBottom: "1.25rem", lineHeight: 1.3 }}>
                Built by someone who&apos;s been on your side of the fridge
              </h2>
              <blockquote
                style={{
                  borderLeft: "3px solid #8b5cf6",
                  paddingLeft: "1.25rem",
                  marginBottom: "1.25rem",
                  color: "#a78bfa",
                  fontStyle: "italic",
                  fontSize: "0.95rem",
                  lineHeight: 1.7,
                }}
              >
                &ldquo;I built this because I watched clients struggle with the same pattern every night — not because they lacked anything, but because no one taught them to listen.&rdquo;
              </blockquote>
              <p style={{ color: "#94a3b8", lineHeight: 1.7, marginBottom: "1.5rem", fontSize: "0.95rem" }}>
                Dan Chase is a Registered Dietitian who specializes in helping people rebuild their relationship with food. After years of seeing the same evening eating patterns in his practice, he created Mindful Evenings to bring compassionate, evidence-based support to the moment it&apos;s needed most.
              </p>
              <div style={{ display: "flex", gap: "0.5rem", flexWrap: "wrap", marginBottom: "1.5rem" }}>
                {["Registered Dietitian (RD)", "Intuitive Eating Certified", "ACT Trained"].map((cred) => (
                  <span key={cred} className="category-badge">{cred}</span>
                ))}
              </div>
              <Link
                href="/about"
                style={{
                  color: "#8b5cf6",
                  textDecoration: "none",
                  fontWeight: 600,
                  fontSize: "0.9rem",
                  display: "inline-flex",
                  alignItems: "center",
                  gap: "0.3rem",
                }}
              >
                Read Dan&apos;s Full Story →
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Pricing Section */}
      <section style={{ padding: "5rem 1.5rem", background: "linear-gradient(180deg, #0f0a2e 0%, #0a0a1f 100%)" }}>
        <div className="section-container" style={{ textAlign: "center" }}>
          <p style={{ color: "#8b5cf6", fontSize: "0.8rem", fontWeight: 700, letterSpacing: "0.12em", textTransform: "uppercase", marginBottom: "0.75rem" }}>
            SIMPLE PRICING
          </p>
          <h2 style={{ fontSize: "clamp(1.75rem, 3.5vw, 2.5rem)", fontWeight: 800, marginBottom: "0.75rem" }}>
            Invest in understanding, not{" "}
            <span style={{ color: "#8b5cf6" }}>restriction</span>
          </h2>
          <p style={{ color: "#94a3b8", marginBottom: "3rem" }}>
            Start free, upgrade when you&apos;re ready for deeper insights. Cancel anytime.
          </p>

          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))",
              gap: "1.5rem",
              maxWidth: 700,
              margin: "0 auto 2rem",
            }}
          >
            {/* Free */}
            <div className="card">
              <h3 style={{ color: "white", fontWeight: 700, fontSize: "1.2rem", marginBottom: "0.5rem" }}>Free</h3>
              <div style={{ display: "flex", alignItems: "baseline", gap: "0.25rem", marginBottom: "0.25rem" }}>
                <span style={{ fontSize: "3rem", fontWeight: 800, color: "white" }}>$0</span>
              </div>
              <p style={{ color: "#64748b", fontSize: "0.85rem", marginBottom: "1.5rem" }}>
                Start understanding your evenings
              </p>
              <ul style={{ listStyle: "none", padding: 0, marginBottom: "1.5rem", textAlign: "left" }}>
                {["3 check-ins per week", "Basic craving insights", "Activity suggestions", "Values exploration"].map((f) => (
                  <li key={f} style={{ color: "#94a3b8", fontSize: "0.9rem", padding: "0.4rem 0", display: "flex", alignItems: "center", gap: "0.5rem" }}>
                    <span style={{ color: "#8b5cf6" }}>✓</span> {f}
                  </li>
                ))}
              </ul>
              <a
                href="https://app.chase-wellness.com"
                target="_blank"
                rel="noopener noreferrer"
                style={{
                  display: "block",
                  padding: "0.75rem",
                  border: "1px solid rgba(139, 92, 246, 0.4)",
                  borderRadius: 9999,
                  color: "white",
                  textDecoration: "none",
                  fontWeight: 600,
                  fontSize: "0.9rem",
                  textAlign: "center",
                }}
              >
                Get Started Free
              </a>
            </div>

            {/* Premium */}
            <div
              className="card"
              style={{
                borderColor: "#8b5cf6",
                position: "relative",
              }}
            >
              <div
                style={{
                  position: "absolute",
                  top: -12,
                  left: "50%",
                  transform: "translateX(-50%)",
                  background: "linear-gradient(135deg, #7c3aed, #ec4899)",
                  padding: "0.25rem 1rem",
                  borderRadius: 9999,
                  fontSize: "0.75rem",
                  fontWeight: 700,
                  color: "white",
                  whiteSpace: "nowrap",
                }}
              >
                Most Popular
              </div>
              <h3 style={{ color: "white", fontWeight: 700, fontSize: "1.2rem", marginBottom: "0.5rem" }}>Premium</h3>
              <div style={{ display: "flex", alignItems: "baseline", gap: "0.25rem", marginBottom: "0.25rem" }}>
                <span style={{ fontSize: "3rem", fontWeight: 800, color: "white" }}>$5.99</span>
                <span style={{ color: "#64748b", fontSize: "0.85rem" }}>/mo</span>
              </div>
              <p style={{ color: "#64748b", fontSize: "0.85rem", marginBottom: "1.5rem" }}>
                For deeper insight into your patterns
              </p>
              <ul style={{ listStyle: "none", padding: 0, marginBottom: "1.5rem", textAlign: "left" }}>
                {[
                  "Unlimited check-ins",
                  "AI-powered pattern insights",
                  "Weekly reflection summaries",
                  "Values tracking over time",
                  "Personal craving journal",
                  "Priority support",
                ].map((f) => (
                  <li key={f} style={{ color: "#94a3b8", fontSize: "0.9rem", padding: "0.4rem 0", display: "flex", alignItems: "center", gap: "0.5rem" }}>
                    <span style={{ color: "#8b5cf6" }}>✓</span> {f}
                  </li>
                ))}
              </ul>
              <a
                href="https://app.chase-wellness.com"
                target="_blank"
                rel="noopener noreferrer"
                className="btn-primary"
                style={{ display: "block", textAlign: "center" }}
              >
                Get Started
              </a>
            </div>
          </div>

          <p style={{ color: "#475569", fontSize: "0.8rem" }}>
            🔒 Secure payment via Stripe · Cancel anytime · No questions asked
          </p>
        </div>
      </section>

      {/* Newsletter Section */}
      <section
        style={{
          padding: "5rem 1.5rem",
          background: "#07071a",
          textAlign: "center",
          position: "relative",
          overflow: "hidden",
        }}
        className="stars-bg"
      >
        {/* Large moon orb */}
        <div
          style={{
            position: "absolute",
            bottom: -100,
            right: -100,
            width: 350,
            height: 350,
            borderRadius: "50%",
            background: "radial-gradient(circle, rgba(139, 92, 246, 0.2) 0%, transparent 70%)",
            pointerEvents: "none",
          }}
        />
        <div className="section-container" style={{ position: "relative", zIndex: 1 }}>
          <div style={{ fontSize: "2.5rem", marginBottom: "1rem" }}>🌙</div>
          <h2 style={{ fontSize: "clamp(1.5rem, 3vw, 2.25rem)", fontWeight: 800, color: "white", marginBottom: "1rem" }}>
            Start understanding your evenings
          </h2>
          <p style={{ color: "#94a3b8", maxWidth: 500, margin: "0 auto 2rem", lineHeight: 1.7 }}>
            Weekly insights on emotional eating, evening cravings, and building a better relationship with food.
          </p>
          <NewsletterForm />
          <p style={{ color: "#64748b", fontSize: "0.8rem", textAlign: "center", marginTop: "1rem" }}>Join 28+ readers • Unsubscribe anytime</p>
        </div>
      </section>
    </>
  );
}
