# Mindful Evenings — Next.js Migration

## Goal
Rebuild evenings.chase-wellness.com as a Next.js app with full SSR/SSG for SEO. The current site is a Lovable-built React SPA that serves an empty `<div id="root"></div>` for every page — Google can't see any content.

## Critical Requirements
1. **Every page must be statically generated (SSG)** with full HTML content visible to curl/Googlebot
2. **Unique meta tags per page** — title, description, canonical, OG tags, Twitter cards
3. **JSON-LD structured data** on appropriate pages (Article for blog posts, FAQPage for FAQ, Person for about)
4. **Auto-generated sitemap.xml** and robots.txt
5. **Deploy to Vercel** — the owner already has a Vercel account
6. **Dark theme** matching the current design (deep navy/purple background, white text, purple accents)

## Design Reference
Screenshots of the current site are in this directory:
- `reference-homepage.jpg` — Full homepage design
- `reference-blog.jpg` — Blog listing page
- `reference-blogpost.jpg` — Individual blog post page

### Design System (from screenshots)
- **Background:** Deep navy/dark purple (#0a0a1a or similar)
- **Text:** White/light gray
- **Accent:** Purple/violet for links, buttons, and highlights (#8b5cf6 range)
- **CTA buttons:** Gradient purple-to-pink or solid purple with rounded corners
- **Cards:** Dark with subtle borders, slightly lighter than background
- **Typography:** Modern sans-serif, large headings with serif/display feel
- **Layout:** Clean, spacious, centered content with good whitespace
- **Nav:** Fixed top nav with logo left, links center, CTA button right
- **Footer:** 4-column layout (Brand, Product, Learn, Company)

### Brand Elements
- **Logo:** 🌙 Mindful Evenings
- **Tagline:** "Understanding your evening cravings through awareness, not restriction. Built on self-compassion."
- **Creator:** Dan Chase, RD — Registered Dietitian & Certified Intuitive Eating Counselor
- **App URL:** https://app.chase-wellness.com (external link for Check-In CTA)
- **GA4 ID:** G-E9T5605HDH

## Site Structure (30 pages from sitemap)

### Main Pages
- `/` — Homepage (hero + how it works + philosophy + about preview + pricing + newsletter)
- `/learn` — Learn hub page
- `/blog` — Blog listing with category filters
- `/about` — About Dan Chase
- `/pricing` — Free ($0) and Premium ($5.99/mo) tiers
- `/resources` — Resources page
- `/check-in` — Links to app.chase-wellness.com
- `/faq` — FAQ page
- `/contact` — Contact page
- `/privacy` — Privacy policy
- `/terms` — Terms of service

### Learn Articles (5)
- `/learn/what-is-emotional-eating`
- `/learn/cant-stop-eating-at-night`
- `/learn/halt-framework`
- `/learn/evening-eating-science`
- `/learn/boredom-eating`

### Blog Posts (14)
- `/blog/night-eating-syndrome`
- `/blog/boredom-nighttime-eating`
- `/blog/glp1-starving-at-night`
- `/blog/glp1-evening-cravings`
- `/blog/glp1-food-noise`
- `/blog/emotional-eating-after-work`
- `/blog/emotional-eating-or-real-hunger`
- `/blog/evening-journal-prompts`
- `/blog/halt-checkin-tool`
- `/blog/sleep-and-late-night-snacking`
- `/blog/stress-eating-cortisol`
- `/blog/eating-more-stressful-days`
- `/blog/things-to-do-instead-of-snacking`
- `/blog/cant-stop-eating-at-night-guide`

## Homepage Content Structure
(from DOM snapshot of current rendered page)

### Hero Section
- Badge: "Free tool from a Registered Dietitian"
- H1: "It's 9 PM. You're not hungry... but you're standing in front of the fridge anyway."
- Subtext: "A free 2-minute check-in that helps you figure out what's actually driving the craving — and what to do about it. No guilt. No rules. Just a better understanding of what's happening at 9 PM."
- CTA: "Start Your Free Check-In" → https://app.chase-wellness.com
- Secondary: "Learn How It Works"
- Small text: "Free to start • No credit card required • Built by a Registered Dietitian"

### Credibility Bar
- Dan Chase headshot
- "Created by Dan Chase, RD — Registered Dietitian & Certified Intuitive Eating Counselor"

### How It Works (3 steps)
- Section label: "How It Works"
- H2: "From craving to clarity in 2 minutes"
- Subtext: "A simple process that helps you understand what's behind the craving — so you can respond with awareness, not autopilot."
1. **Notice** — "Open the app when a craving hits. No judgment, just awareness. We meet you exactly where you are." / "That moment of pause? It's already doing the work."
2. **Understand** — "A 2-minute check-in helps you identify what you actually need. We explore six core values together." / "Rest • Connection • Accomplishment • Comfort • Play • Peace"
3. **Respond** — "Choose your path: Explore Activities, Just Pause, or Eat Mindfully. All options are valid. All are yours." / "Responding, not resisting. That's the difference."
- CTA: "Try Your First Check-In"

### Philosophy Section
- Quote: "Cravings are data, not enemies."
- Text: "Built on the principles of Intuitive Eating and Acceptance and Commitment Therapy (ACT). We're not here to control your behavior — we're here to help you understand it."
- Three cards:
  1. "We don't fight cravings" — "We get curious about them. Every craving is carrying a message — our job is to listen."
  2. "Not about restriction" — "It's about understanding. When you know what you need, you can choose how to respond."
  3. "All paths are valid" — "Sometimes you need rest. Sometimes you need snacks. Both are okay. Always."

### About Preview
- Section label: "Meet the Creator"
- H2: "Built by someone who's been on your side of the fridge"
- Quote: "I built this because I watched clients struggle with the same pattern every night — not because they lacked anything, but because no one taught them to listen."
- Bio text about Dan Chase, RD
- Credentials: Registered Dietitian (RD), Intuitive Eating Certified, ACT Trained
- Link: "Read Dan's Full Story" → /about

### Pricing Section
- Section label: "Simple Pricing"
- H2: "Invest in understanding, not restriction"
- Free tier: $0/forever — 3 check-ins/week, basic insights, activity suggestions, values exploration
- Premium: $5.99/mo — Unlimited check-ins, AI pattern insights, weekly reflections, values tracking, journal, priority support
- Note: "🔒 Secure payment via Stripe • Cancel anytime • No questions asked"

### Newsletter Section
- H2: "Start understanding your evenings"
- Text: "Weekly insights on emotional eating, evening cravings, and building a better relationship with food."
- Email input + Subscribe button

### Footer
- 4 columns: Brand description, Product links, Learn links, Company links
- "Built with 💜 self-compassion by Dan Chase, RD"
- "© 2026 Mindful Evenings. All rights reserved."

## SEO Meta Tags Per Page

### Homepage /
- Title: "Mindful Evenings | Understand Your Evening Eating Patterns"
- Description: "Free 2-minute check-in by RD Dan Chase. Understand what's driving your 9 PM cravings using Intuitive Eating and ACT. No guilt, no restriction."
- Canonical: https://evenings.chase-wellness.com/

### /learn
- Title: "Learn About Evening Eating | Mindful Evenings"
- Description: "Evidence-based articles on emotional eating, evening cravings, and building awareness. Written by Registered Dietitian Dan Chase."

### /blog
- Title: "The Evening Blog | Food, Feelings & the Space Between"
- Description: "Thoughts on evening eating, emotional hunger, and self-compassion. Research-backed insights from Registered Dietitian Dan Chase."

### /about
- Title: "About Dan Chase, RD | Mindful Evenings Creator"
- Description: "Meet Dan Chase, Registered Dietitian and Certified Intuitive Eating Counselor. Why he built Mindful Evenings after years of seeing evening eating patterns."

### /pricing
- Title: "Pricing | Mindful Evenings — Free to Start"
- Description: "Start free with 3 check-ins per week. Upgrade to Premium ($5.99/mo) for unlimited check-ins, AI insights, and pattern tracking."

### /faq
- Title: "FAQ | Mindful Evenings — Common Questions"
- Description: "Frequently asked questions about Mindful Evenings. How it works, who it's for, and how it's different from diet apps."

### /check-in
- Title: "Start Your Free Check-In | Mindful Evenings"
- Description: "Take a free 2-minute evening check-in. Understand your cravings with compassion, not restriction."

### /contact
- Title: "Contact Mindful Evenings | Get in Touch"
- Description: "Questions about Mindful Evenings? Contact Dan Chase, RD for support, feedback, or partnership inquiries."

### /resources
- Title: "Evening Eating Resources | Mindful Evenings"
- Description: "Free resources for understanding evening eating patterns. Guides, tools, and evidence-based strategies from RD Dan Chase."

### /privacy & /terms
- Title: "Privacy Policy | Mindful Evenings" / "Terms of Service | Mindful Evenings"
- Standard legal page descriptions

### Blog posts — generate from content:
- Title format: "[Post Title] | Mindful Evenings Blog"
- Description: First 155 chars of post content or custom excerpt
- JSON-LD Article schema with author Dan Chase, RD

### Learn articles — generate from content:
- Title format: "[Article Title] | Mindful Evenings"
- Description: Custom per article
- JSON-LD Article schema

## Technical Requirements

### Stack
- **Next.js 14+** (App Router)
- **TypeScript**
- **Tailwind CSS** for styling
- **MDX or markdown** for blog/learn content (makes it easy to add new posts)
- **next-sitemap** for auto-generated sitemap.xml
- **Vercel** deployment

### Blog/Learn Content
- Store blog posts and learn articles as MDX files in `/content/blog/` and `/content/learn/`
- Each MDX file has frontmatter: title, description, date, category, readTime, author
- Blog listing page reads all MDX files and renders cards with category filters
- Categories from current site: Mindset, Evening Patterns, Stress and Emotions, Self-Awareness, Tools, The Science, Practical Tips, GLP-1 Medications

### Content Migration
- You'll need to scrape or recreate the actual blog post and learn article content
- Visit each URL from the sitemap to get the full text content
- The current site renders content client-side, so you'll need to use a browser or the Lovable source

### Key Features to Replicate
1. Newsletter email signup (just the form UI — backend TBD)
2. Category filter tabs on blog page
3. "Continue Reading" related posts at bottom of blog posts
4. FAQ accordion/expandable sections
5. Smooth scroll animations (subtle, not overdone)
6. Mobile responsive (current site is responsive)
7. Reading time estimates on blog posts

### DO NOT include
- No authentication/login
- No actual payment processing (just link to app.chase-wellness.com)
- No database
- No backend API routes (content is all static)

## Verification
When complete, these should all pass:
```bash
# Every page should have unique titles
curl -s http://localhost:3000/ | grep '<title>'
curl -s http://localhost:3000/blog | grep '<title>'
curl -s http://localhost:3000/blog/night-eating-syndrome | grep '<title>'
# All should be DIFFERENT

# Every page should have full HTML content (not empty)
curl -s http://localhost:3000/blog/night-eating-syndrome | wc -c
# Should be >10KB (not 775 bytes like the current SPA)

# Sitemap should be auto-generated
curl -s http://localhost:3000/sitemap.xml

# JSON-LD should be present on blog posts
curl -s http://localhost:3000/blog/night-eating-syndrome | grep 'application/ld+json'
```

## Content Scraping Instructions
For each blog post and learn article, visit the URL in a browser and extract:
1. The full article text content
2. Category/tag
3. Published date
4. Read time
5. Any images used

Start with the homepage, main pages, then blog posts. The learn articles and blog posts are the most content-rich.

## Priority
1. Get the Next.js project scaffolded with the homepage looking right
2. Set up the blog/learn content system with MDX
3. Port all 30 pages with correct meta tags
4. Add JSON-LD structured data
5. Verify SSG output and SEO compliance
6. Deploy to Vercel preview URL for testing
