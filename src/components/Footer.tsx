"use client";
import Link from "next/link";
import NewsletterForm from "./NewsletterForm";

export default function Footer() {
  return (
    <footer
      style={{
        background: "#07071a",
        borderTop: "1px solid rgba(139, 92, 246, 0.15)",
        padding: "3rem 1.5rem 2rem",
        position: "relative",
        overflow: "hidden",
      }}
    >
      {/* Moon decoration */}
      <div
        style={{
          position: "absolute",
          bottom: -80,
          right: -80,
          width: 250,
          height: 250,
          borderRadius: "50%",
          background: "radial-gradient(circle, rgba(139, 92, 246, 0.15) 0%, transparent 70%)",
          pointerEvents: "none",
        }}
      />

      <div style={{ maxWidth: 1200, margin: "0 auto" }}>
        {/* 4-column grid */}
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(180px, 1fr))",
            gap: "2rem",
            marginBottom: "2.5rem",
          }}
        >
          {/* Brand */}
          <div>
            <div
              style={{
                display: "flex",
                alignItems: "center",
                gap: "0.5rem",
                marginBottom: "0.75rem",
                fontWeight: 700,
                fontSize: "1rem",
                color: "white",
              }}
            >
              <span style={{ fontSize: "1.2rem" }}>🌙</span>
              Mindful Evenings
            </div>
            <p style={{ color: "#64748b", fontSize: "0.875rem", lineHeight: 1.6, marginBottom: "1rem" }}>
              Understanding your evening cravings through awareness, not restriction. Built on self-compassion.
            </p>
          </div>

          {/* Product */}
          <div>
            <h4 style={{ color: "white", fontWeight: 600, marginBottom: "1rem", fontSize: "0.875rem" }}>
              Product
            </h4>
            <ul style={{ listStyle: "none", padding: 0, margin: 0 }}>
              {[
                { href: "/check-in", label: "Check In" },
                { href: "/#how-it-works", label: "How It Works" },
                { href: "/pricing", label: "Pricing" },
                { href: "/faq", label: "FAQ" },
              ].map((link) => (
                <li key={link.href} style={{ marginBottom: "0.5rem" }}>
                  <FooterLink href={link.href}>{link.label}</FooterLink>
                </li>
              ))}
            </ul>
          </div>

          {/* Learn */}
          <div>
            <h4 style={{ color: "white", fontWeight: 600, marginBottom: "1rem", fontSize: "0.875rem" }}>
              Learn
            </h4>
            <ul style={{ listStyle: "none", padding: 0, margin: 0 }}>
              {[
                { href: "/learn", label: "Learn" },
                { href: "/blog", label: "Blog" },
                { href: "/resources", label: "Resources" },
                { href: "/newsletter", label: "Newsletter" },
              ].map((link) => (
                <li key={link.href} style={{ marginBottom: "0.5rem" }}>
                  <FooterLink href={link.href}>{link.label}</FooterLink>
                </li>
              ))}
            </ul>
          </div>

          {/* Newsletter */}
          <div>
            <h4 style={{ color: "white", fontWeight: 600, marginBottom: "1rem", fontSize: "0.875rem" }}>
              Weekly Insights
            </h4>
            <p style={{ color: "#64748b", fontSize: "0.8rem", marginBottom: "1rem", lineHeight: 1.5 }}>
              Get practical tools for understanding your evening eating patterns.
            </p>
            <NewsletterForm compact />
          </div>
        </div>

        {/* Bottom bar */}
        <div
          style={{
            borderTop: "1px solid rgba(139, 92, 246, 0.1)",
            paddingTop: "1.5rem",
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            flexWrap: "wrap",
            gap: "1rem",
          }}
        >
          <p style={{ color: "#475569", fontSize: "0.8rem" }}>
            Built with 💜 self-compassion by Dan Chase, RD
          </p>
          <p style={{ color: "#475569", fontSize: "0.8rem" }}>
            © 2026 Mindful Evenings. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}

function FooterLink({ href, children }: { href: string; children: React.ReactNode }) {
  const isExternal = href.startsWith("http");
  const props = isExternal ? { target: "_blank", rel: "noopener noreferrer" } : {};

  return (
    <a
      href={href}
      {...props}
      style={{
        color: "#64748b",
        textDecoration: "none",
        fontSize: "0.875rem",
        transition: "color 0.2s",
      }}
      onMouseEnter={(e) => (e.currentTarget.style.color = "#a78bfa")}
      onMouseLeave={(e) => (e.currentTarget.style.color = "#64748b")}
    >
      {children}
    </a>
  );
}
