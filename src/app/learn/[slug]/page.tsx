import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { getAllSlugs, getPost, getAllPosts, SITE_URL } from "@/lib/content";
import MDXRenderer from "@/components/MDXRenderer";

interface Props {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  const slugs = getAllSlugs("learn");
  return slugs.map((slug) => ({ slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const article = getPost("learn", slug);
  if (!article) return {};

  return {
    title: `${article.title} | Mindful Evenings`,
    description: article.description,
    alternates: {
      canonical: `${SITE_URL}/learn/${slug}`,
    },
    openGraph: {
      title: `${article.title} | Mindful Evenings`,
      description: article.description,
      url: `${SITE_URL}/learn/${slug}`,
      type: "article",
      publishedTime: article.date,
      authors: ["Dan Chase, RD"],
    },
  };
}

export default async function LearnArticlePage({ params }: Props) {
  const { slug } = await params;
  const article = getPost("learn", slug);
  if (!article) notFound();

  const allArticles = getAllPosts("learn");
  const related = allArticles.filter((a) => a.slug !== slug).slice(0, 3);

  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: article.title,
    description: article.description,
    author: {
      "@type": "Person",
      name: "Dan Chase, RD",
      jobTitle: "Registered Dietitian",
      url: `${SITE_URL}/about`,
    },
    publisher: {
      "@type": "Organization",
      name: "Mindful Evenings",
      url: SITE_URL,
    },
    datePublished: article.date,
    dateModified: article.date,
    url: `${SITE_URL}/learn/${slug}`,
    mainEntityOfPage: {
      "@type": "WebPage",
      "@id": `${SITE_URL}/learn/${slug}`,
    },
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      {/* Breadcrumb */}
      <div
        style={{
          background: "#0a0a1f",
          padding: "1rem 1.5rem",
          borderBottom: "1px solid rgba(139, 92, 246, 0.1)",
        }}
      >
        <div className="section-container" style={{ maxWidth: 800 }}>
          <p style={{ color: "#64748b", fontSize: "0.8rem" }}>
            <Link href="/" style={{ color: "#64748b", textDecoration: "none" }}>Home</Link>
            {" → "}
            <Link href="/learn" style={{ color: "#64748b", textDecoration: "none" }}>Learn</Link>
            {" → "}
            <span style={{ color: "#94a3b8" }}>{article.title}</span>
          </p>
        </div>
      </div>

      {/* Article Header */}
      <section
        style={{
          padding: "3rem 1.5rem 2rem",
          background: "linear-gradient(180deg, #0a0a1f 0%, #0f0a2e 100%)",
        }}
      >
        <div className="section-container" style={{ maxWidth: 800 }}>
          <span className="category-badge" style={{ marginBottom: "1.25rem", display: "inline-block" }}>
            {article.category}
          </span>

          <h1
            style={{
              fontSize: "clamp(1.75rem, 3.5vw, 2.75rem)",
              fontWeight: 800,
              color: "white",
              lineHeight: 1.2,
              marginBottom: "1.25rem",
            }}
          >
            {article.title}
          </h1>

          <p
            style={{
              color: "#94a3b8",
              fontSize: "1.05rem",
              lineHeight: 1.6,
              marginBottom: "1.75rem",
              maxWidth: 680,
            }}
          >
            {article.description}
          </p>

          <div style={{ display: "flex", gap: "1.5rem", flexWrap: "wrap", alignItems: "center" }}>
            <div style={{ display: "flex", alignItems: "center", gap: "0.5rem" }}>
              <div
                style={{
                  width: 36,
                  height: 36,
                  borderRadius: "50%",
                  overflow: "hidden",
                  border: "2px solid rgba(139, 92, 246, 0.3)",
                  flexShrink: 0,
                }}
              >
                <img src="/dan-chase-headshot.webp" alt="Dan Chase, RD" style={{ width: "100%", height: "100%", objectFit: "cover", objectPosition: "center top" }} />
              </div>
              <div>
                <p style={{ color: "white", fontSize: "0.85rem", fontWeight: 600, marginBottom: "0.1rem" }}>
                  Dan Chase, RD
                </p>
                <p style={{ color: "#64748b", fontSize: "0.75rem" }}>Registered Dietitian</p>
              </div>
            </div>
            {article.date && (
              <span style={{ color: "#475569", fontSize: "0.82rem" }}>
                📅{" "}
                {new Date(article.date).toLocaleDateString("en-US", {
                  month: "long",
                  day: "numeric",
                  year: "numeric",
                })}
              </span>
            )}
            <span style={{ color: "#475569", fontSize: "0.82rem" }}>⏱ {article.readTime}</span>
          </div>
        </div>
      </section>

      {/* Content */}
      <section style={{ padding: "2rem 1.5rem 4rem", background: "#0a0a1f" }}>
        <div className="section-container" style={{ maxWidth: 780 }}>
          <MDXRenderer content={article.content} />

          {/* Author Bio */}
          <div
            className="card"
            style={{ marginTop: "3rem", display: "flex", gap: "1rem", alignItems: "flex-start" }}
          >
            <div
              style={{
                width: 56,
                height: 56,
                borderRadius: "50%",
                overflow: "hidden",
                border: "2px solid rgba(139, 92, 246, 0.3)",
                flexShrink: 0,
              }}
            >
              <img src="/dan-chase-headshot.webp" alt="Dan Chase, RD" style={{ width: "100%", height: "100%", objectFit: "cover", objectPosition: "center top" }} />
            </div>
            <div>
              <p style={{ color: "white", fontWeight: 700, marginBottom: "0.25rem" }}>Dan Chase, RD</p>
              <p style={{ color: "#8b5cf6", fontSize: "0.8rem", marginBottom: "0.5rem" }}>
                Registered Dietitian · Certified Intuitive Eating Counselor
              </p>
              <p style={{ color: "#94a3b8", fontSize: "0.875rem", lineHeight: 1.6 }}>
                Dan helps people build a peaceful relationship with food by understanding the emotions and patterns behind eating.
              </p>
              <Link href="/about" style={{ color: "#8b5cf6", fontSize: "0.82rem", textDecoration: "none", fontWeight: 600, marginTop: "0.5rem", display: "inline-block" }}>
                Read full bio →
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* More Articles */}
      {related.length > 0 && (
        <section style={{ padding: "3rem 1.5rem", background: "#0f0a2e" }}>
          <div className="section-container">
            <h2 style={{ fontSize: "1.4rem", fontWeight: 800, color: "white", marginBottom: "1.75rem", textAlign: "center" }}>
              More to Learn
            </h2>
            <div
              style={{
                display: "grid",
                gridTemplateColumns: "repeat(auto-fit, minmax(240px, 1fr))",
                gap: "1.25rem",
              }}
            >
              {related.map((a) => (
                <Link key={a.slug} href={`/learn/${a.slug}`} style={{ textDecoration: "none" }}>
                  <div className="card" style={{ height: "100%" }}>
                    <span className="category-badge" style={{ marginBottom: "0.75rem", display: "inline-block", fontSize: "0.7rem" }}>
                      {a.category}
                    </span>
                    <h3 style={{ color: "white", fontWeight: 700, fontSize: "0.95rem", lineHeight: 1.35, marginBottom: "0.5rem" }}>
                      {a.title}
                    </h3>
                    <p style={{ color: "#64748b", fontSize: "0.78rem" }}>{a.readTime}</p>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* Check-in CTA */}
      <section style={{ padding: "4rem 1.5rem", background: "#07071a", textAlign: "center" }} className="stars-bg">
        <div className="section-container">
          <div style={{ fontSize: "2rem", marginBottom: "0.75rem" }}>🌙</div>
          <h2 style={{ fontSize: "1.5rem", fontWeight: 800, color: "white", marginBottom: "0.75rem" }}>
            Ready to put this into practice?
          </h2>
          <p style={{ color: "#94a3b8", maxWidth: 440, margin: "0 auto 1.75rem", lineHeight: 1.7, fontSize: "0.9rem" }}>
            Use the free Mindful Evenings check-in to apply these concepts in real time.
          </p>
          <a href="https://app.chase-wellness.com" target="_blank" rel="noopener noreferrer" className="btn-primary">
            Start Your Free Check-In →
          </a>
        </div>
      </section>
    </>
  );
}
