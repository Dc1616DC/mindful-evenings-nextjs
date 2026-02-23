"use client";

import Link from "next/link";
import { useState } from "react";

export default function Nav() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <nav
      style={{
        position: "fixed",
        top: 0,
        left: 0,
        right: 0,
        zIndex: 50,
        background: "rgba(10, 10, 31, 0.85)",
        backdropFilter: "blur(12px)",
        borderBottom: "1px solid rgba(139, 92, 246, 0.15)",
      }}
    >
      <div
        style={{
          maxWidth: 1200,
          margin: "0 auto",
          padding: "0 1.5rem",
          height: 64,
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
        }}
      >
        {/* Logo */}
        <Link
          href="/"
          style={{
            display: "flex",
            alignItems: "center",
            gap: "0.5rem",
            textDecoration: "none",
            color: "white",
            fontWeight: 700,
            fontSize: "1.1rem",
          }}
        >
          <span style={{ fontSize: "1.3rem" }}>🌙</span>
          <span>Mindful Evenings</span>
        </Link>

        {/* Desktop Links */}
        <div
          style={{
            display: "flex",
            alignItems: "center",
            gap: "2rem",
          }}
          className="desktop-nav"
        >
          <NavLink href="/check-in">Check In</NavLink>
          <NavLink href="/learn">Learn</NavLink>
          <NavLink href="/blog">Blog</NavLink>
          <NavLink href="/resources">Resources</NavLink>
          <NavLink href="/pricing">Pricing</NavLink>
          <NavLink href="/about">About</NavLink>
        </div>

        {/* CTA */}
        <div style={{ display: "flex", alignItems: "center", gap: "1rem" }}>
          <a
            href="https://app.chase-wellness.com"
            target="_blank"
            rel="noopener noreferrer"
            style={{
              padding: "0.5rem 1.25rem",
              background: "linear-gradient(135deg, #7c3aed 0%, #ec4899 100%)",
              color: "white",
              borderRadius: 9999,
              fontWeight: 600,
              fontSize: "0.875rem",
              textDecoration: "none",
              whiteSpace: "nowrap",
            }}
          >
            Start Check-In
          </a>

          {/* Mobile menu button */}
          <button
            onClick={() => setMenuOpen(!menuOpen)}
            style={{
              background: "none",
              border: "none",
              color: "white",
              cursor: "pointer",
              padding: "0.25rem",
              display: "none",
            }}
            className="mobile-menu-btn"
            aria-label="Toggle menu"
          >
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              {menuOpen ? (
                <path d="M18 6L6 18M6 6l12 12" />
              ) : (
                <path d="M3 12h18M3 6h18M3 18h18" />
              )}
            </svg>
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      {menuOpen && (
        <div
          style={{
            background: "rgba(10, 10, 31, 0.98)",
            borderTop: "1px solid rgba(139, 92, 246, 0.15)",
            padding: "1rem 1.5rem",
          }}
          className="mobile-menu"
        >
          {[
            { href: "/check-in", label: "Check In" },
            { href: "/learn", label: "Learn" },
            { href: "/blog", label: "Blog" },
            { href: "/resources", label: "Resources" },
            { href: "/pricing", label: "Pricing" },
            { href: "/about", label: "About" },
          ].map((link) => (
            <Link
              key={link.href}
              href={link.href}
              onClick={() => setMenuOpen(false)}
              style={{
                display: "block",
                padding: "0.75rem 0",
                color: "#94a3b8",
                textDecoration: "none",
                borderBottom: "1px solid rgba(139, 92, 246, 0.1)",
                fontWeight: 500,
              }}
            >
              {link.label}
            </Link>
          ))}
        </div>
      )}

      <style>{`
        @media (max-width: 768px) {
          .desktop-nav { display: none !important; }
          .mobile-menu-btn { display: block !important; }
        }
      `}</style>
    </nav>
  );
}

function NavLink({ href, children }: { href: string; children: React.ReactNode }) {
  return (
    <Link
      href={href}
      style={{
        color: "#94a3b8",
        textDecoration: "none",
        fontSize: "0.875rem",
        fontWeight: 500,
        transition: "color 0.2s",
      }}
      onMouseEnter={(e) => (e.currentTarget.style.color = "white")}
      onMouseLeave={(e) => (e.currentTarget.style.color = "#94a3b8")}
    >
      {children}
    </Link>
  );
}
