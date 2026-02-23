import type { Metadata } from "next";
import { SITE_URL } from "@/lib/content";
import FAQAccordion from "@/components/FAQAccordion";

export const metadata: Metadata = {
  title: "FAQ | Mindful Evenings — Common Questions",
  description:
    "Frequently asked questions about Mindful Evenings. How it works, who it's for, and how it's different from diet apps.",
  alternates: { canonical: `${SITE_URL}/faq` },
};

const faqItems = [
  { q: "What is Mindful Evenings?", a: "Mindful Evenings is a free tool created by Registered Dietitian Dan Chase to help you understand your evening cravings." },
  { q: "Who is this for?", a: "Mindful Evenings is for anyone who finds themselves eating at night in ways that feel automatic or disconnected." },
  { q: "Is this a diet app?", a: "Definitely not. Mindful Evenings is based on Intuitive Eating and ACT (Acceptance and Commitment Therapy) — not calories or restriction." },
  { q: "How does the check-in work?", a: "When you feel a craving, open the app for a quick 2-minute check-in that guides you to identify what you actually need and respond with intention." },
  { q: "What are the six core values?", a: "Rest, Connection, Accomplishment, Comfort, Play, and Peace. Cravings are often signals of unmet needs in one of these areas." },
  { q: "Is the free plan really free?", a: "Yes, completely free. No credit card required. 3 check-ins per week, core values framework, and activity suggestions — indefinitely." },
  { q: "What is included in Premium?", a: "Premium ($5.99/month) includes unlimited check-ins, AI-powered pattern insights, weekly reflection summaries, a personal craving journal, values tracking, and priority support." },
  { q: "Is my data private?", a: "Yes. Your check-in data is private and never sold or shared with third parties. See our Privacy Policy for full details." },
  { q: "Does this replace therapy or dietitian sessions?", a: "No. Mindful Evenings is a self-help tool, not therapy. If you are dealing with an eating disorder or significant mental health concerns, please seek professional support." },
  { q: "How is this different from other food apps?", a: "Most food apps focus on tracking, restriction, or accountability. Mindful Evenings is about understanding what's happening without judgment, so you can respond with intention rather than autopilot." },
  { q: "Can I cancel anytime?", a: "Yes, cancel anytime from your account settings. You keep access until the end of your billing period, then automatically move to the free plan." },
  { q: "What if I am not sure if this is right for me?", a: "The free plan is a great way to find out. No credit card, no commitment. Try a few check-ins and see if the approach resonates." },
];

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: faqItems.map(({ q, a }) => ({
    "@type": "Question",
    name: q,
    acceptedAnswer: { "@type": "Answer", text: a },
  })),
};

export default function FAQPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <section style={{ padding: "5rem 1.5rem 3rem", background: "linear-gradient(180deg, #0a0a1f 0%, #0f0a2e 100%)", textAlign: "center" }}>
        <div className="section-container">
          <h1 style={{ fontSize: "clamp(2rem, 4vw, 3rem)", fontWeight: 800, color: "white", marginBottom: "1rem" }}>
            Frequently Asked Questions
          </h1>
          <p style={{ color: "#94a3b8", maxWidth: 550, margin: "0 auto", lineHeight: 1.7 }}>
            Everything you need to know about Mindful Evenings — how it works, who it's for, and how
            it's different from diet apps.
          </p>
        </div>
      </section>
      <section style={{ padding: "2rem 1.5rem 5rem", background: "#0a0a1f" }}>
        <div className="section-container" style={{ maxWidth: 720 }}>
          <FAQAccordion />
          <div style={{ marginTop: "3rem", textAlign: "center" }}>
            <p style={{ color: "#94a3b8", marginBottom: "1rem" }}>Still have questions?</p>
            <a href="/contact" style={{ color: "#8b5cf6", textDecoration: "none", fontWeight: 600 }}>
              Contact us
            </a>
          </div>
        </div>
      </section>
    </>
  );
}
