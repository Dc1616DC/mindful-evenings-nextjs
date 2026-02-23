import type { Metadata } from "next";
import "./globals.css";
import Nav from "@/components/Nav";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  title: "Mindful Evenings | Understand Your Evening Eating Patterns",
  description:
    "Free 2-minute check-in by RD Dan Chase. Understand what's driving your 9 PM cravings using Intuitive Eating and ACT. No guilt, no restriction.",
  metadataBase: new URL("https://evenings.chase-wellness.com"),
  openGraph: {
    siteName: "Mindful Evenings",
    type: "website",
    locale: "en_US",
  },
  twitter: {
    card: "summary_large_image",
  },
  robots: {
    index: true,
    follow: true,
  },
  verification: {
    google: undefined,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        {/* Google Analytics */}
        <script
          async
          src="https://www.googletagmanager.com/gtag/js?id=G-E9T5605HDH"
        />
        <script
          dangerouslySetInnerHTML={{
            __html: `
              window.dataLayer = window.dataLayer || [];
              function gtag(){dataLayer.push(arguments);}
              gtag('js', new Date());
              gtag('config', 'G-E9T5605HDH');
            `,
          }}
        />
      </head>
      <body style={{ backgroundColor: "#0a0a1f", color: "white", margin: 0 }}>
        <Nav />
        <main style={{ paddingTop: 64 }}>
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}
