import type { Metadata } from "next";
import Link from "next/link";
import { getAllPosts, SITE_URL } from "@/lib/content";

export const metadata: Metadata = {
  title: "Learn About Evening Eating | Mindful Evenings",
  description:
    "Evidence-based articles on emotional eating, evening cravings, and building awareness. Written by Registered Dietitian Dan Chase.",
  alternates: {
    canonical: `${SITE_URL}/learn`,
  },
  openGraph: {
    title: "Learn About Evening Eating | Mindful Evenings",
    description:
      "Evidence-based articles on emotional eating, evening cravings, and building awareness. Written by Registered Dietitian Dan Chase.",
    url: `${SITE_URL}/learn`,
    type: "website",
  },
};

const iconMap: Record<string, string> = {
  "what-is-emotional-eating": "🧠",
  "cant-stop-eating-at-night": "🌙",
  "halt-framework": "🛑",
  "evening-eating-science": "🔬",
  "boredom-eating": "😴",
};

export default function LearnPage() {
  const articles = getAllPosts("learn");

  return (
    <>
      {/* Header */}
      <section
        style={{
          padding: "5rem 1.5rem 3rem",
          background: "linear-gradient(180deg, #0a0a1f 0%, #0f0a2e 100%)",
          textAlign: "center",
        }}
      >
        <div className="section-container">
          <p style={{ color: "#8b5cf6", fontSize: "0.8rem", fontWeight: 700, letterSpacing: "0.12em", textTransform: "uppercase", marginBottom: "0.75rem" }}>
            EVIDENCE-BASED GUIDES
          </p>
          <h1
            style={{
              fontSize: "clamp(2rem, 4vw, 3rem)",
              fontWeight: 800,
              color: "white",
              marginBottom: "1rem",
            }}
          >
            Learn About Evening Eating
          </h1>
          <p style={{ color: "#94a3b8", maxWidth: 560, margin: "0 auto", lineHeight: 1.7 }}>
            Evidence-based articles on emotional eating, evening cravings, and building awareness.
            Written by Registered Dietitian Dan Chase.
          </p>
        </div>
      </section>

      {/* Articles Grid */}
      <section style={{ padding: "3rem 1.5rem 5rem", background: "#0a0a1f" }}>
        <div className="section-container">
          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(auto-fit, minmax(320px, 1fr))",
              gap: "1.5rem",
            }}
          >
            {articles.map((article) => (
              <Link
                key={article.slug}
                href={`/learn/${article.slug}`}
                style={{ textDecoration: "none" }}
              >
                <article
                  className="card"
                  style={{ height: "100%", cursor: "pointer", padding: "2rem" }}
                >
                  <div
                    style={{
                      width: 56,
                      height: 56,
                      borderRadius: "50%",
                      background: "rgba(139, 92, 246, 0.15)",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      fontSize: "1.6rem",
                      marginBottom: "1.25rem",
                    }}
                  >
                    {iconMap[article.slug] ?? "📖"}
                  </div>

                  <span className="category-badge" style={{ marginBottom: "0.75rem", display: "inline-block" }}>
                    {article.category}
                  </span>

                  <h2
                    style={{
                      fontSize: "1.15rem",
                      fontWeight: 700,
                      color: "white",
                      marginBottom: "0.75rem",
                      lineHeight: 1.35,
                    }}
                  >
                    {article.title}
                  </h2>

                  <p
                    style={{
                      color: "#94a3b8",
                      fontSize: "0.9rem",
                      lineHeight: 1.65,
                      marginBottom: "1.25rem",
                    }}
                  >
                    {article.description}
                  </p>

                  <div
                    style={{
                      display: "flex",
                      justifyContent: "space-between",
                      alignItems: "center",
                      marginTop: "auto",
                    }}
                  >
                    <span style={{ color: "#475569", fontSize: "0.8rem" }}>
                      ⏱ {article.readTime}
                    </span>
                    <span style={{ color: "#8b5cf6", fontSize: "0.85rem", fontWeight: 600 }}>
                      Read →
                    </span>
                  </div>
                </article>
              </Link>
            ))}
          </div>

          {articles.length === 0 && (
            <p style={{ color: "#64748b", textAlign: "center", padding: "3rem 0" }}>
              Articles coming soon. Check back shortly.
            </p>
          )}

          {/* CTA box */}
          <div
            className="card"
            style={{
              marginTop: "3rem",
              textAlign: "center",
              padding: "2.5rem",
              background: "linear-gradient(135deg, rgba(124, 58, 237, 0.1) 0%, rgba(236, 72, 153, 0.1) 100%)",
              borderColor: "rgba(139, 92, 246, 0.3)",
            }}
          >
            <div style={{ fontSize: "2rem", marginBottom: "0.75rem" }}>🌙</div>
            <h2 style={{ fontSize: "1.3rem", fontWeight: 800, color: "white", marginBottom: "0.75rem" }}>
              Ready to put this into practice?
            </h2>
            <p style={{ color: "#94a3b8", marginBottom: "1.5rem", maxWidth: 450, margin: "0 auto 1.5rem" }}>
              The Mindful Evenings check-in brings these concepts to life in real time — when a craving hits, not just when you're reading about it.
            </p>
            <a
              href="https://app.chase-wellness.com"
              target="_blank"
              rel="noopener noreferrer"
              className="btn-primary"
            >
              Try Your Free Check-In →
            </a>
          </div>
        </div>
      </section>
    </>
  );
}
