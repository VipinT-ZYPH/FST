import Link from "next/link";

export default function UnauthorizedPage() {
  return (
    <main style={{ maxWidth: "520px", margin: "80px auto", padding: "32px", textAlign: "center", fontFamily: "Arial, sans-serif" }}>
      <p style={{ margin: 0, color: "#b42318", fontSize: "64px", fontWeight: 700 }}>403</p>
      <h1 style={{ color: "#102a43" }}>Insufficient clearance</h1>
      <p style={{ color: "#627d98", lineHeight: 1.6 }}>Middleware intercepted this request because the verified token does not contain the required ADMIN permission.</p>
      <Link href="/login" style={{ display: "inline-block", marginTop: "16px", padding: "10px 16px", background: "#102a43", color: "#ffffff", borderRadius: "6px", textDecoration: "none" }}>Return to role selector</Link>
    </main>
  );
}