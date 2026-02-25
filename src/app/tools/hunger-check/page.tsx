"use client";

import { useState } from "react";
import Link from "next/link";

const questions = [
  {
    id: "lastAte",
    question: "When did you last eat?",
    options: [
      { label: "Less than 2 hours ago", value: "recent", physical: 0 },
      { label: "2–4 hours ago", value: "moderate", physical: 1 },
      { label: "More than 4 hours ago", value: "long", physical: 2 },
      { label: "I'm not sure / I skipped meals today", value: "skipped", physical: 2 },
    ],
  },
  {
    id: "onset",
    question: "Did the urge come on suddenly or gradually?",
    options: [
      { label: "Suddenly — like a switch flipped", value: "sudden", physical: 0 },
      { label: "Gradually — it's been building", value: "gradual", physical: 2 },
      { label: "It's kind of always there in the evening", value: "habitual", physical: 1 },
    ],
  },
  {
    id: "specific",
    question: "Are you craving something specific?",
    options: [
      { label: "Yes — I want one specific thing", value: "specific", physical: 0 },
      { label: "Not really — lots of things sound good", value: "general", physical: 2 },
      { label: "Nothing sounds good but I still want to eat", value: "nothing", physical: 0 },
    ],
  },
  {
    id: "feeling",
    question: "How are you feeling emotionally right now?",
    options: [
      { label: "Pretty good, actually", value: "good", physical: 1 },
      { label: "Stressed or anxious", value: "stressed", physical: 0 },
      { label: "Bored or restless", value: "bored", physical: 0 },
      { label: "Tired or drained", value: "tired", physical: 1 },
      { label: "Lonely or sad", value: "lonely", physical: 0 },
    ],
  },
];

type ResultType = "physical" | "emotional" | "mixed";

const results: Record<ResultType, { title: string; message: string; suggestion: string }> = {
  physical: {
    title: "This looks like physical hunger 🍽️",
    message: "Your body is likely telling you it needs fuel. That's not a failure — that's biology working correctly. If you've gone a while without eating or skipped meals today, your body is doing exactly what it should.",
    suggestion: "Honor it. Eat something satisfying — protein, fiber, something that actually fills you up. Then check in with yourself again in 30 minutes.",
  },
  emotional: {
    title: "This might be emotional hunger 💜",
    message: "The craving seems to be coming from something other than physical hunger. That's completely normal — especially in the evening when your emotional guard is down and the day's stress catches up.",
    suggestion: "Try this: name what you're feeling (bored? stressed? lonely?). Sometimes just identifying the emotion takes the edge off the craving. Then ask yourself — what do I actually need right now? It might be food. It might be rest, connection, or a change of scenery.",
  },
  mixed: {
    title: "It's a mix of both 🌙",
    message: "There are signs of both physical and emotional hunger here. That's the most common situation — and it's the hardest to untangle, because both are real and both deserve attention.",
    suggestion: "Start with the physical: eat something nourishing. Then check in again. If the urge is still there after eating, it's probably emotional — and that's okay. What else might you need tonight?",
  },
};

export default function HungerCheckPage() {
  const [currentQ, setCurrentQ] = useState(0);
  const [answers, setAnswers] = useState<number[]>([]);
  const [showResult, setShowResult] = useState(false);

  const handleAnswer = (physicalScore: number) => {
    const newAnswers = [...answers, physicalScore];
    setAnswers(newAnswers);
    if (currentQ < questions.length - 1) {
      setCurrentQ(currentQ + 1);
    } else {
      setShowResult(true);
    }
  };

  const getResult = (): ResultType => {
    const total = answers.reduce((a, b) => a + b, 0);
    const max = questions.reduce((a, q) => a + Math.max(...q.options.map((o) => o.physical)), 0);
    const ratio = total / max;
    if (ratio >= 0.65) return "physical";
    if (ratio <= 0.35) return "emotional";
    return "mixed";
  };

  const reset = () => {
    setCurrentQ(0);
    setAnswers([]);
    setShowResult(false);
  };

  const result = showResult ? results[getResult()] : null;

  return (
    <>
      {/* SEO - client component can't export metadata, so use head tags */}
      <title>Am I Actually Hungry? | Free Hunger Check Tool | Mindful Evenings</title>
      <meta name="description" content="Is it physical hunger or emotional hunger? Learn the key differences and a simple check-in process to understand what your body actually needs." />
      <link rel="canonical" href="https://evenings.chase-wellness.com/tools/hunger-check" />

      {/* Hero */}
      <section style={{ padding: "5rem 1.5rem 2rem", background: "linear-gradient(180deg, #0a0a1f 0%, #0f0a2e 100%)", display: "flex", alignItems: "center" }}>
        <div className="section-container" style={{ textAlign: "center" }}>
          <p style={{ color: "#8b5cf6", fontSize: "0.8rem", fontWeight: 700, letterSpacing: "0.12em", textTransform: "uppercase", marginBottom: "0.75rem" }}>FREE TOOL</p>
          <h1 style={{ fontSize: "clamp(2rem, 4vw, 3rem)", fontWeight: 800, color: "white", marginBottom: "1rem" }}>
            Am I Actually Hungry?
          </h1>
          <p style={{ color: "#94a3b8", maxWidth: 550, margin: "0 auto", lineHeight: 1.7 }}>
            A quick check-in to help you understand what your body actually needs right now.
          </p>
        </div>
      </section>

      {/* Physical vs Emotional */}
      <section style={{ padding: "3rem 1.5rem", background: "#0a0a1f" }}>
        <div className="section-container" style={{ maxWidth: 720 }}>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))", gap: "1.5rem", marginBottom: "3rem" }}>
            <div style={{ background: "rgba(139, 92, 246, 0.08)", border: "1px solid rgba(139, 92, 246, 0.15)", borderRadius: 16, padding: "1.5rem" }}>
              <h3 style={{ color: "white", fontWeight: 700, marginBottom: "1rem" }}>Physical Hunger</h3>
              <ul style={{ color: "#94a3b8", lineHeight: 2, fontSize: "0.9rem", paddingLeft: "1.25rem" }}>
                <li>Develops gradually</li>
                <li>Can be satisfied by various foods</li>
                <li>Stops at satisfaction</li>
                <li>Doesn't come with guilt</li>
              </ul>
            </div>
            <div style={{ background: "rgba(139, 92, 246, 0.08)", border: "1px solid rgba(139, 92, 246, 0.15)", borderRadius: 16, padding: "1.5rem" }}>
              <h3 style={{ color: "white", fontWeight: 700, marginBottom: "1rem" }}>Emotional Hunger</h3>
              <ul style={{ color: "#94a3b8", lineHeight: 2, fontSize: "0.9rem", paddingLeft: "1.25rem" }}>
                <li>Comes on suddenly</li>
                <li>Craves specific foods</li>
                <li>Doesn't stop at fullness</li>
                <li>Often accompanied by guilt</li>
              </ul>
            </div>
          </div>

          {/* Interactive Tool */}
          <div style={{ background: "rgba(139, 92, 246, 0.06)", border: "1px solid rgba(139, 92, 246, 0.2)", borderRadius: 20, padding: "2.5rem 2rem", textAlign: "center", position: "relative", zIndex: 60 }}>
            {!showResult ? (
              <>
                <p style={{ color: "#8b5cf6", fontSize: "0.75rem", fontWeight: 700, letterSpacing: "0.1em", textTransform: "uppercase", marginBottom: "0.5rem" }}>
                  QUESTION {currentQ + 1} OF {questions.length}
                </p>
                <div style={{ width: "100%", height: 4, background: "rgba(139, 92, 246, 0.15)", borderRadius: 2, marginBottom: "2rem" }}>
                  <div style={{ width: `${((currentQ + 1) / questions.length) * 100}%`, height: "100%", background: "#8b5cf6", borderRadius: 2, transition: "width 0.3s ease" }} />
                </div>
                <h2 style={{ color: "white", fontSize: "1.35rem", fontWeight: 700, marginBottom: "2rem" }}>
                  {questions[currentQ].question}
                </h2>
                <div style={{ display: "flex", flexDirection: "column", gap: "0.75rem", maxWidth: 400, margin: "0 auto" }}>
                  {questions[currentQ].options.map((option) => (
                    <button
                      key={option.value}
                      onClick={() => handleAnswer(option.physical)}
                      style={{
                        background: "rgba(139, 92, 246, 0.1)",
                        border: "1px solid rgba(139, 92, 246, 0.25)",
                        borderRadius: 12,
                        padding: "1rem 1.25rem",
                        color: "#e2e8f0",
                        fontSize: "0.95rem",
                        cursor: "pointer",
                        transition: "all 0.2s",
                        textAlign: "left",
                        position: "relative",
                        zIndex: 70,
                      }}
                      onMouseOver={(e) => {
                        (e.target as HTMLButtonElement).style.background = "rgba(139, 92, 246, 0.2)";
                        (e.target as HTMLButtonElement).style.borderColor = "rgba(139, 92, 246, 0.5)";
                      }}
                      onMouseOut={(e) => {
                        (e.target as HTMLButtonElement).style.background = "rgba(139, 92, 246, 0.1)";
                        (e.target as HTMLButtonElement).style.borderColor = "rgba(139, 92, 246, 0.25)";
                      }}
                    >
                      {option.label}
                    </button>
                  ))}
                </div>
              </>
            ) : result ? (
              <>
                <h2 style={{ color: "white", fontSize: "1.5rem", fontWeight: 800, marginBottom: "1.25rem" }}>
                  {result.title}
                </h2>
                <p style={{ color: "#94a3b8", lineHeight: 1.8, fontSize: "0.95rem", marginBottom: "1.25rem", maxWidth: 520, margin: "0 auto 1.25rem" }}>
                  {result.message}
                </p>
                <div style={{ background: "rgba(139, 92, 246, 0.1)", borderRadius: 12, padding: "1.25rem", marginBottom: "2rem", maxWidth: 520, margin: "0 auto 2rem" }}>
                  <p style={{ color: "#c4b5fd", lineHeight: 1.7, fontSize: "0.9rem", fontStyle: "italic" }}>
                    💡 {result.suggestion}
                  </p>
                </div>
                <div style={{ display: "flex", gap: "1rem", justifyContent: "center", flexWrap: "wrap" }}>
                  <button onClick={reset} className="btn-secondary" style={{ cursor: "pointer", position: "relative", zIndex: 70 }}>
                    Try Again
                  </button>
                  <a href="https://app.chase-wellness.com" target="_blank" rel="noopener noreferrer" className="btn-primary" style={{ position: "relative", zIndex: 70 }}>
                    Full Evening Check-In
                  </a>
                </div>
              </>
            ) : null}
          </div>

          <p style={{ color: "#64748b", fontSize: "0.8rem", textAlign: "center", marginTop: "1.5rem", lineHeight: 1.6 }}>
            This tool is for self-reflection, not diagnosis. It's a starting point for understanding your patterns — not a replacement for professional support. If you're struggling with disordered eating, please reach out to <a href="https://www.nationaleatingdisorders.org" target="_blank" rel="noopener noreferrer" style={{ color: "#8b5cf6" }}>NEDA</a>.
          </p>
        </div>
      </section>

      {/* CTA */}
      <section style={{ padding: "4rem 1.5rem", background: "#0f0a2e", textAlign: "center" }}>
        <div className="section-container" style={{ maxWidth: 600 }}>
          <h2 style={{ fontSize: "1.5rem", fontWeight: 800, color: "white", marginBottom: "1rem" }}>
            Want a deeper check-in?
          </h2>
          <p style={{ color: "#94a3b8", lineHeight: 1.7, marginBottom: "2rem" }}>
            The full Mindful Evenings check-in goes beyond hunger — it helps you explore what you're feeling, what you need, and what might actually help tonight.
          </p>
          <div style={{ display: "flex", gap: "1rem", justifyContent: "center", flexWrap: "wrap" }}>
            <a href="https://app.chase-wellness.com" target="_blank" rel="noopener noreferrer" className="btn-primary">Start a Free Check-In</a>
            <Link href="/learn/what-is-emotional-eating" className="btn-secondary">Learn About Emotional Eating</Link>
          </div>
        </div>
      </section>
    </>
  );
}
