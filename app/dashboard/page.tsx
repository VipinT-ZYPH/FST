import { headers } from "next/headers";
import Link from "next/link";

export default async function DashboardPage() {
  const currentRole = (await headers()).get("x-user-role");

  return (
    <main style={{ maxWidth: "700px", margin: "64px auto", padding: "32px", fontFamily: "Arial, sans-serif", border: "1px solid #bcccdc", borderRadius: "12px", background: "#f0f4f8" }}>
      <p style={{ margin: 0, color: "#627d98", fontSize: "12px", letterSpacing: "1.5px" }}>PROTECTED ROUTE / USER</p>
      <h1 style={{ color: "#102a43", marginBottom: "8px" }}>Standard user dashboard</h1>
      <p style={{ color: "#334e68" }}>Access granted. Verified role: <strong>{currentRole}</strong></p>
      <nav style={{ display: "flex", gap: "18px", marginTop: "28px" }}>
        <Link href="/admin" style={{ color: "#b42318" }}>Attempt /admin</Link>
        <Link href="/login" style={{ color: "#1769aa" }}>Switch role</Link>
      </nav>
    </main>
  );
}