export default function Home() {
  return (
    <main style={{ minHeight: "100vh", padding: "48px 24px", background: "#f4f7f9", color: "#102a43", fontFamily: "Arial, sans-serif" }}>
      <section style={{ maxWidth: "900px", margin: "0 auto" }}>
        <p style={{ margin: 0, color: "#627d98", fontSize: "12px", fontWeight: 700, letterSpacing: "1.8px" }}>
          NEXT.JS EDGE AUTH LAB
        </p>
        <h1 style={{ maxWidth: "680px", margin: "16px 0 12px", fontSize: "clamp(36px, 7vw, 68px)", lineHeight: 1.02 }}>
          Sign in as any role.
        </h1>
        <p style={{ maxWidth: "600px", margin: 0, color: "#486581", fontSize: "18px", lineHeight: 1.6 }}>
          Choose an identity to issue a signed JWT session and test the middleware permission boundaries.
        </p>

        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(220px, 1fr))", gap: "16px", marginTop: "40px" }}>
          <a href="/login" style={{ display: "block", padding: "24px", borderRadius: "10px", background: "#b42318", color: "#ffffff", textDecoration: "none" }}>
            <strong style={{ display: "block", fontSize: "20px" }}>ADMIN</strong>
            <span style={{ display: "block", marginTop: "10px", opacity: 0.9 }}>Full access to admin and dashboard.</span>
            <span style={{ display: "block", marginTop: "24px", fontWeight: 700 }}>Choose role -&gt;</span>
          </a>
          <a href="/login" style={{ display: "block", padding: "24px", borderRadius: "10px", background: "#1769aa", color: "#ffffff", textDecoration: "none" }}>
            <strong style={{ display: "block", fontSize: "20px" }}>USER</strong>
            <span style={{ display: "block", marginTop: "10px", opacity: 0.9 }}>Dashboard access without admin clearance.</span>
            <span style={{ display: "block", marginTop: "24px", fontWeight: 700 }}>Choose role -&gt;</span>
          </a>
          <a href="/login" style={{ display: "block", padding: "24px", borderRadius: "10px", background: "#52606d", color: "#ffffff", textDecoration: "none" }}>
            <strong style={{ display: "block", fontSize: "20px" }}>GUEST</strong>
            <span style={{ display: "block", marginTop: "10px", opacity: 0.9 }}>Public access with protected routes blocked.</span>
            <span style={{ display: "block", marginTop: "24px", fontWeight: 700 }}>Choose role -&gt;</span>
          </a>
        </div>

        <a href="/login" style={{ display: "inline-block", marginTop: "24px", color: "#1769aa", fontWeight: 700 }}>
          Open role control center -&gt;
        </a>
      </section>
    </main>
  );
}
