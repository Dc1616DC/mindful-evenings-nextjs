import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { getAllSlugs, getPost, getAllPosts, SITE_URL } from "@/lib/content";
import MDXRenderer from "@/components/MDXRenderer";
import NewsletterForm from "@/components/NewsletterForm";

interface Props {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  const slugs = getAllSlugs("blog");
  return slugs.map((slug) => ({ slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const post = getPost("blog", slug);
  if (!post) return {};

  return {
    title: `${post.title} | Mindful Evenings Blog`,
    description: post.description,
    alternates: {
      canonical: `${SITE_URL}/blog/${slug}`,
    },
    openGraph: {
      title: `${post.title} | Mindful Evenings`,
      description: post.description,
      url: `${SITE_URL}/blog/${slug}`,
      type: "article",
      publishedTime: post.date,
      authors: ["Dan Chase, RD"],
    },
  };
}

export default async function BlogPostPage({ params }: Props) {
  const { slug } = await params;
  const post = getPost("blog", slug);
  if (!post) notFound();

  const allPosts = getAllPosts("blog");
  const related = allPosts
    .filter((p) => p.slug !== slug && p.category === post.category)
    .slice(0, 3);
  const fallbackRelated = allPosts.filter((p) => p.slug !== slug).slice(0, 3);
  const relatedPosts = related.length >= 2 ? related : fallbackRelated;

  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: post.title,
    description: post.description,
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
    datePublished: post.date,
    dateModified: post.date,
    url: `${SITE_URL}/blog/${slug}`,
    mainEntityOfPage: {
      "@type": "WebPage",
      "@id": `${SITE_URL}/blog/${slug}`,
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
            <Link href="/blog" style={{ color: "#64748b", textDecoration: "none" }}>Blog</Link>
            {" → "}
            <span style={{ color: "#94a3b8" }}>{post.title}</span>
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
          {/* Category badge */}
          <span className="category-badge" style={{ marginBottom: "1.25rem", display: "inline-block" }}>
            {post.category}
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
            {post.title}
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
            {post.description}
          </p>

          {/* Meta */}
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
            <span style={{ color: "#475569", fontSize: "0.82rem" }}>
              📅{" "}
              {new Date(post.date).toLocaleDateString("en-US", {
                month: "long",
                day: "numeric",
                year: "numeric",
              })}
            </span>
            <span style={{ color: "#475569", fontSize: "0.82rem" }}>⏱ {post.readTime}</span>
          </div>
        </div>
      </section>

      {/* Two-column layout with TOC sidebar */}
      <section style={{ padding: "2rem 1.5rem 4rem", background: "#0a0a1f" }}>
        <div
          className="section-container"
          style={{
            maxWidth: 1100,
            display: "grid",
            gridTemplateColumns: "1fr min(680px, 100%)",
            gap: "2rem",
            justifyContent: "center",
          }}
        >
          {/* Sidebar */}
          <aside
            style={{
              display: "none",
              position: "sticky",
              top: 80,
              alignSelf: "start",
              maxWidth: 240,
            }}
            className="article-sidebar"
          >
            <div className="card" style={{ padding: "1.25rem" }}>
              <h3 style={{ color: "white", fontWeight: 700, fontSize: "0.85rem", marginBottom: "0.75rem", textTransform: "uppercase", letterSpacing: "0.08em" }}>
                Quick Nav
              </h3>
              <Link href="/blog" style={{ color: "#8b5cf6", fontSize: "0.82rem", textDecoration: "none", display: "block", marginBottom: "0.5rem" }}>
                ← All Articles
              </Link>
              <a href={`#newsletter`} style={{ color: "#64748b", fontSize: "0.82rem", textDecoration: "none", display: "block", marginBottom: "0.5rem" }}>
                Newsletter
              </a>
              <a href="https://app.chase-wellness.com" target="_blank" rel="noopener noreferrer" className="btn-primary" style={{ display: "block", textAlign: "center", padding: "0.6rem 1rem", fontSize: "0.8rem", marginTop: "1rem" }}>
                Start Check-In
              </a>
            </div>
          </aside>

          {/* Article Content */}
          <div>
            <MDXRenderer content={post.content} />

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
                  Dan helps people build a peaceful relationship with food by understanding the emotions and patterns behind eating. He created Mindful Evenings to bring evidence-based, compassionate support to the moment it's needed most.
                </p>
                <Link href="/about" style={{ color: "#8b5cf6", fontSize: "0.82rem", textDecoration: "none", fontWeight: 600, marginTop: "0.5rem", display: "inline-block" }}>
                  Read full bio →
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Continue Reading */}
      {relatedPosts.length > 0 && (
        <section style={{ padding: "3rem 1.5rem", background: "#0f0a2e" }}>
          <div className="section-container">
            <h2 style={{ fontSize: "1.4rem", fontWeight: 800, color: "white", marginBottom: "1.75rem", textAlign: "center" }}>
              Continue Reading
            </h2>
            <div
              style={{
                display: "grid",
                gridTemplateColumns: "repeat(auto-fit, minmax(240px, 1fr))",
                gap: "1.25rem",
              }}
            >
              {relatedPosts.map((p) => (
                <Link key={p.slug} href={`/blog/${p.slug}`} style={{ textDecoration: "none" }}>
                  <div className="card" style={{ height: "100%" }}>
                    <span className="category-badge" style={{ marginBottom: "0.75rem", display: "inline-block", fontSize: "0.7rem" }}>
                      {p.category}
                    </span>
                    <h3 style={{ color: "white", fontWeight: 700, fontSize: "0.95rem", lineHeight: 1.35, marginBottom: "0.5rem" }}>
                      {p.title}
                    </h3>
                    <p style={{ color: "#64748b", fontSize: "0.78rem" }}>{p.readTime}</p>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* Newsletter CTA */}
      <section
        id="newsletter"
        style={{
          padding: "4rem 1.5rem",
          background: "#07071a",
          textAlign: "center",
        }}
        className="stars-bg"
      >
        <div className="section-container">
          <div style={{ fontSize: "2rem", marginBottom: "0.75rem" }}>🌙</div>
          <h2 style={{ fontSize: "1.5rem", fontWeight: 800, color: "white", marginBottom: "0.75rem" }}>
            Start understanding your evenings
          </h2>
          <p style={{ color: "#94a3b8", maxWidth: 440, margin: "0 auto 1.75rem", lineHeight: 1.7, fontSize: "0.9rem" }}>
            Weekly insights on emotional eating, evening cravings, and building a better relationship with food.
          </p>
          <NewsletterForm />
          <p style={{ color: "#64748b", fontSize: "0.8rem", marginTop: "1rem" }}>Join 28+ readers • No spam, ever</p>
        </div>
      </section>

      <style>{`
        @media (min-width: 960px) {
          .article-sidebar { display: block !important; }
        }
      `}</style>
    </>
  );
}
