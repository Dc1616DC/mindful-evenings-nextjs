import type { Metadata } from "next";
import Link from "next/link";
import { getAllPosts, BLOG_CATEGORIES, SITE_URL } from "@/lib/content";

export const metadata: Metadata = {
  title: "The Evening Blog | Food, Feelings & the Space Between",
  description:
    "Thoughts on evening eating, emotional hunger, and self-compassion. Research-backed insights from Registered Dietitian Dan Chase.",
  alternates: {
    canonical: `${SITE_URL}/blog`,
  },
  openGraph: {
    title: "The Evening Blog | Mindful Evenings",
    description:
      "Thoughts on evening eating, emotional hunger, and self-compassion. Research-backed insights from Registered Dietitian Dan Chase.",
    url: `${SITE_URL}/blog`,
    type: "website",
  },
};

export default function BlogPage() {
  const posts = getAllPosts("blog");

  const categoryColors: Record<string, string> = {
    "Mindset": "#8b5cf6",
    "Evening Patterns": "#06b6d4",
    "Stress and Emotions": "#f59e0b",
    "Self-Awareness": "#10b981",
    "Tools": "#3b82f6",
    "The Science": "#6366f1",
    "Practical Tips": "#14b8a6",
    "GLP-1 Medications": "#ec4899",
  };

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
          <h1
            style={{
              fontSize: "clamp(2rem, 4vw, 3rem)",
              fontWeight: 800,
              color: "white",
              marginBottom: "0.75rem",
            }}
          >
            The Evening Blog
          </h1>
          <p style={{ color: "#94a3b8", maxWidth: 500, margin: "0 auto", lineHeight: 1.7 }}>
            Thoughts on food, feelings, and the space between. Research-backed insights from a Registered Dietitian.
          </p>
        </div>
      </section>

      {/* Category Filters — static display (filtering would require client component) */}
      <section style={{ background: "#0a0a1f", padding: "1.5rem 1.5rem 0" }}>
        <div className="section-container">
          <div style={{ display: "flex", gap: "0.5rem", flexWrap: "wrap" }}>
            {BLOG_CATEGORIES.map((cat) => (
              <span
                key={cat}
                style={{
                  padding: "0.3rem 0.85rem",
                  borderRadius: 9999,
                  fontSize: "0.78rem",
                  fontWeight: 600,
                  cursor: "pointer",
                  background: cat === "All Posts" ? "#8b5cf6" : "rgba(139, 92, 246, 0.1)",
                  color: cat === "All Posts" ? "white" : "#a78bfa",
                  border: cat === "All Posts" ? "1px solid #8b5cf6" : "1px solid rgba(139, 92, 246, 0.25)",
                }}
              >
                {cat}
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* Blog Posts List */}
      <section style={{ padding: "2rem 1.5rem 5rem", background: "#0a0a1f" }}>
        <div className="section-container" style={{ maxWidth: 780 }}>
          {posts.map((post) => (
            <article
              key={post.slug}
              className="card"
              style={{
                marginBottom: "1.25rem",
                padding: "1.75rem",
              }}
            >
              {/* Category + Meta */}
              <div
                style={{
                  display: "flex",
                  alignItems: "center",
                  gap: "1rem",
                  marginBottom: "0.75rem",
                  flexWrap: "wrap",
                }}
              >
                <span
                  style={{
                    padding: "0.2rem 0.65rem",
                    borderRadius: 9999,
                    fontSize: "0.72rem",
                    fontWeight: 700,
                    background: `${categoryColors[post.category] ?? "#8b5cf6"}22`,
                    color: categoryColors[post.category] ?? "#a78bfa",
                    border: `1px solid ${categoryColors[post.category] ?? "#8b5cf6"}44`,
                    textTransform: "uppercase",
                    letterSpacing: "0.04em",
                  }}
                >
                  {post.category}
                </span>
                <span style={{ color: "#475569", fontSize: "0.8rem" }}>
                  📅{" "}
                  {new Date(post.date).toLocaleDateString("en-US", {
                    month: "long",
                    day: "numeric",
                    year: "numeric",
                  })}
                </span>
                <span style={{ color: "#475569", fontSize: "0.8rem" }}>
                  ⏱ {post.readTime}
                </span>
              </div>

              {/* Title */}
              <h2
                style={{
                  fontSize: "1.2rem",
                  fontWeight: 700,
                  color: "white",
                  marginBottom: "0.6rem",
                  lineHeight: 1.35,
                }}
              >
                <Link
                  href={`/blog/${post.slug}`}
                  style={{ textDecoration: "none", color: "inherit" }}
                >
                  {post.title}
                </Link>
              </h2>

              {/* Description */}
              <p
                style={{
                  color: "#94a3b8",
                  fontSize: "0.9rem",
                  lineHeight: 1.65,
                  marginBottom: "1rem",
                }}
              >
                {post.description}
              </p>

              {/* Read more */}
              <Link
                href={`/blog/${post.slug}`}
                style={{
                  color: "#8b5cf6",
                  textDecoration: "none",
                  fontSize: "0.85rem",
                  fontWeight: 600,
                  display: "inline-flex",
                  alignItems: "center",
                  gap: "0.25rem",
                }}
              >
                Read more →
              </Link>
            </article>
          ))}

          {posts.length === 0 && (
            <p style={{ color: "#64748b", textAlign: "center", padding: "3rem 0" }}>
              No posts yet. Check back soon.
            </p>
          )}
        </div>
      </section>
    </>
  );
}
