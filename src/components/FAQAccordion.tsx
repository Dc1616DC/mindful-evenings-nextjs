"use client";

import { useState } from "react";

const faqs = [
  { q: "What is Mindful Evenings?", a: "Mindful Evenings is a free tool created by Registered Dietitian Dan Chase to help you understand your evening cravings. Instead of fighting cravings or using willpower, it uses a quick 2-minute check-in to help you figure out what you actually need in that moment — rest, connection, comfort, or something else entirely." },
  { q: "Who is this for?", a: "Mindful Evenings is for anyone who finds themselves eating at night in ways that feel automatic or disconnected — standing in front of the fridge not quite sure why, eating past fullness, or using food to deal with stress or boredom. It's especially helpful for people who've tried diets and found them unhelpful or unsustainable." },
  { q: "Is this a diet app?", a: "Definitely not. Mindful Evenings doesn't track calories, restrict foods, or tell you what to eat. It's based on Intuitive Eating and ACT (Acceptance and Commitment Therapy) — approaches that build awareness and self-compassion rather than rules and restriction." },
  { q: "How does the check-in work?", a: "When you feel a craving, you open the app and do a quick 2-minute check-in. We guide you through a series of questions to help you identify what you might actually be experiencing — are you tired? Stressed? Bored? Lonely? From there, you can choose to explore activities that address the need, just pause with the craving, or eat mindfully. All options are valid." },
  { q: "What are the six core values?", a: "The six core values we explore are Rest, Connection, Accomplishment, Comfort, Play, and Peace. Research on emotional eating and ACT suggests that cravings are often signals of unmet needs in one of these areas. The check-in helps you identify which one might be at play." },
  { q: "Is the free plan really free?", a: "Yes, completely free. No credit card required. The free plan gives you 3 check-ins per week, access to the core values framework, and activity suggestions. You can use it indefinitely without paying anything." },
  { q: "What's included in Premium?", a: "Premium ($5.99/month) includes unlimited check-ins, AI-powered pattern insights that help you spot trends over time, weekly reflection summaries, a personal craving journal, values tracking, and priority support." },
  { q: "Is my data private?", a: "Yes. We take your privacy seriously. Your check-in data is private and never sold or shared with third parties. See our Privacy Policy for full details." },
  { q: "Does this replace therapy or dietitian sessions?", a: "No, and we're clear about that. Mindful Evenings is a self-help tool — it's not therapy and it's not a substitute for working with a professional if you have a clinical need. If you're dealing with an eating disorder or significant mental health concerns, please seek professional support." },
  { q: "How is this different from other food apps?", a: "Most food apps are about tracking, restriction, or accountability — which can increase anxiety and worsen emotional eating for many people. Mindful Evenings is the opposite: it's about understanding what's happening without judgment, so you can respond with intention rather than autopilot." },
  { q: "Can I cancel anytime?", a: "Yes, cancel anytime from your account settings. You keep access until the end of your billing period, then automatically move to the free plan." },
  { q: "What if I'm not sure if this is right for me?", a: "The free plan is a great way to find out. No credit card, no commitment. Try a few check-ins and see if the approach resonates with you." },
];

function FAQItem({ q, a }: { q: string; a: string }) {
  const [open, setOpen] = useState(false);
  return (
    <div style={{ borderBottom: "1px solid rgba(139,92,246,0.15)" }}>
      <button
        onClick={() => setOpen(!open)}
        style={{
          width: "100%",
          textAlign: "left",
          padding: "1.25rem 0",
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          cursor: "pointer",
          background: "none",
          border: "none",
          color: "white",
          fontSize: "0.95rem",
          fontWeight: 500,
        }}
      >
        <span>{q}</span>
        <span style={{ color: "#8b5cf6", flexShrink: 0, marginLeft: "1rem", fontSize: "1.25rem" }}>
          {open ? "−" : "+"}
        </span>
      </button>
      {open && (
        <p style={{ paddingBottom: "1.25rem", color: "#94a3b8", lineHeight: 1.7, fontSize: "0.9rem" }}>
          {a}
        </p>
      )}
    </div>
  );
}

export default function FAQAccordion() {
  return (
    <>
      {faqs.map((f) => (
        <FAQItem key={f.q} {...f} />
      ))}
    </>
  );
}

export { faqs };
