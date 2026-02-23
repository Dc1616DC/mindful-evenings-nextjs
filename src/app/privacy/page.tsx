import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Privacy Policy | Mindful Evenings",
  description: "Mindful Evenings privacy policy. How we collect, use, and protect your personal information.",
  alternates: { canonical: "https://evenings.chase-wellness.com/privacy" },
};

export default function PrivacyPage() {
  return (
    <>
      <section style={{ padding: "5rem 1.5rem 2rem", background: "#0a0a1f" }}>
        <div className="section-container" style={{ maxWidth: 780 }}>
          <h1 style={{ fontSize: "clamp(1.75rem, 3.5vw, 2.5rem)", fontWeight: 800, color: "white", marginBottom: "0.5rem" }}>Privacy Policy</h1>
          <p style={{ color: "#64748b", fontSize: "0.875rem", marginBottom: "2rem" }}>Last updated: January 1, 2026</p>
          <div className="prose">
            <p>Mindful Evenings ("we," "our," or "us") is committed to protecting your privacy. This Privacy Policy explains how we collect, use, disclose, and safeguard your information when you use our website and application.</p>
            <h2>Information We Collect</h2>
            <p>We collect information you provide directly to us, such as when you create an account, use our check-in tool, or contact us. This may include your email address, check-in responses, and usage preferences.</p>
            <h2>How We Use Your Information</h2>
            <ul>
              <li>To provide and improve our services</li>
              <li>To send you weekly insights (with your consent)</li>
              <li>To analyze patterns and provide personalized insights (Premium)</li>
              <li>To respond to your questions and support requests</li>
            </ul>
            <h2>Information Sharing</h2>
            <p>We do not sell, trade, or otherwise transfer your personal information to third parties. We may share information with trusted service providers who assist us in operating our service (such as Stripe for payment processing), subject to confidentiality agreements.</p>
            <h2>Data Security</h2>
            <p>We implement appropriate security measures to protect your information. However, no method of transmission over the internet is 100% secure.</p>
            <h2>Cookies</h2>
            <p>We use cookies and similar tracking technologies to improve your experience. You can control cookie settings through your browser.</p>
            <h2>Analytics</h2>
            <p>We use Google Analytics (GA4) to understand how visitors use our site. This data is anonymized and used only to improve the user experience.</p>
            <h2>Your Rights</h2>
            <p>You have the right to access, correct, or delete your personal information. Contact us at any time to exercise these rights.</p>
            <h2>Contact Us</h2>
            <p>If you have questions about this Privacy Policy, please contact us through our <a href="/contact">contact page</a>.</p>
          </div>
        </div>
      </section>
    </>
  );
}
