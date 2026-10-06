import { headers } from "next/headers";
import Link from "next/link";

export default async function AdminPage() {
  const currentRole = (await headers()).get("x-user-role");

  return (
    <main style={{ maxWidth: "700px", margin: "64px auto", padding: "32px", fontFamily: "Arial, sans-serif", border: "2px solid #e76f51", borderRadius: "12px", background: "#fff7f2" }}>
      <p style={{ margin: 0, color: "#b42318", fontSize: "12px", letterSpacing: "1.5px" }}>PROTECTED ROUTE / ADMIN</p>
      <h1 style={{ color: "#7c2d12", marginBottom: "8px" }}>Admin clearance terminal</h1>
      <p style={{ color: "#4a2c20" }}>Middleware validation passed. Verified role: <strong>{currentRole}</strong></p>
      <nav style={{ display: "flex", gap: "18px", marginTop: "28px" }}>
        <Link href="/dashboard" style={{ color: "#1769aa" }}>User dashboard</Link>
        <Link href="/login" style={{ color: "#1769aa" }}>Switch role</Link>
      </nav>
    </main>
  );
}