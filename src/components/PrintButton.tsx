'use client';

export default function PrintButton() {
  return (
    <button
      className="btn-primary"
      onClick={() => window.print()}
      style={{ fontSize: "1rem", padding: "0.85rem 2rem" }}
    >
      🖨️ Print Contract
    </button>
  );
}
