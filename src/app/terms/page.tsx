import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Terms of Service | Mindful Evenings",
  description: "Mindful Evenings terms of service. Your rights and responsibilities when using our service.",
  alternates: { canonical: "https://evenings.chase-wellness.com/terms" },
};

export default function TermsPage() {
  return (
    <>
      <section style={{ padding: "5rem 1.5rem 2rem", background: "#0a0a1f" }}>
        <div className="section-container" style={{ maxWidth: 780 }}>
          <h1 style={{ fontSize: "clamp(1.75rem, 3.5vw, 2.5rem)", fontWeight: 800, color: "white", marginBottom: "0.5rem" }}>Terms of Service</h1>
          <p style={{ color: "#64748b", fontSize: "0.875rem", marginBottom: "2rem" }}>Last updated: January 1, 2026</p>
          <div className="prose">
            <p>By using Mindful Evenings, you agree to these Terms of Service. Please read them carefully.</p>
            <h2>Use of Service</h2>
            <p>Mindful Evenings is a self-help tool for building awareness around eating patterns. It is not a medical service and does not provide medical, psychiatric, or dietitian advice. Always consult qualified healthcare professionals for medical concerns.</p>
            <h2>Not a Medical Device</h2>
            <p>Mindful Evenings is not intended to diagnose, treat, cure, or prevent any disease or health condition. If you have or suspect an eating disorder or other medical condition, please seek professional help.</p>
            <h2>Account Responsibilities</h2>
            <p>You are responsible for maintaining the security of your account and for all activity that occurs under your account. You must provide accurate information when creating an account.</p>
            <h2>Subscription and Billing</h2>
            <p>Premium subscriptions are billed monthly. You may cancel at any time. Refunds are handled on a case-by-case basis — contact us if you have concerns.</p>
            <h2>Intellectual Property</h2>
            <p>All content on Mindful Evenings, including articles, tools, and design, is owned by Mindful Evenings and Dan Chase, RD. You may not reproduce or distribute our content without permission.</p>
            <h2>Limitation of Liability</h2>
            <p>To the maximum extent permitted by law, Mindful Evenings is not liable for any indirect, incidental, or consequential damages arising from your use of the service.</p>
            <h2>Changes to Terms</h2>
            <p>We may update these terms from time to time. Continued use of the service after changes constitutes acceptance of the new terms.</p>
            <h2>Contact</h2>
            <p>Questions about these terms? <a href="/contact">Contact us</a>.</p>
          </div>
        </div>
      </section>
    </>
  );
}
