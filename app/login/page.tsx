import { loginAction } from "@/app/actions/roleAuthActions";

type LoginPageProps = {
  searchParams: Promise<{
    error?: string;
    redirect?: string;
  }>;
};

export default async function LoginPage({ searchParams }: LoginPageProps) {
  const params = await searchParams;
  const redirectPath = params.redirect || "";

  return (
    <main style={{ maxWidth: "560px", margin: "64px auto", padding: "32px", fontFamily: "Arial, sans-serif", border: "1px solid #d9e2ec", borderRadius: "12px", background: "#ffffff", boxShadow: "0 16px 40px rgba(16, 42, 67, 0.08)" }}>
      <p style={{ margin: 0, color: "#627d98", fontSize: "12px", letterSpacing: "1.5px" }}>EDGE AUTH LAB / LOGIN</p>
      <h1 style={{ margin: "12px 0 8px", color: "#102a43", fontSize: "32px" }}>Sign in to continue</h1>
      <p style={{ color: "#486581", lineHeight: 1.6 }}>Your email and password determine which role is placed in the signed session token.</p>

      {params.error === "invalid" && (
        <p style={{ padding: "12px", borderRadius: "6px", color: "#8a1c1c", background: "#fff1f0" }}>
          Invalid email or password. Use one of the demo accounts below.
        </p>
      )}

      <form action={loginAction} style={{ display: "grid", gap: "14px", marginTop: "24px" }}>
        <input type="hidden" name="redirect" value={redirectPath} />
        <label style={{ display: "grid", gap: "6px", color: "#243b53", fontWeight: 700 }}>
          Email
          <input name="email" type="email" required autoComplete="email" placeholder="you@example.com" style={{ padding: "12px", border: "1px solid #bcccdc", borderRadius: "6px", fontSize: "16px" }} />
        </label>
        <label style={{ display: "grid", gap: "6px", color: "#243b53", fontWeight: 700 }}>
          Password
          <input name="password" type="password" required autoComplete="current-password" placeholder="Enter password" style={{ padding: "12px", border: "1px solid #bcccdc", borderRadius: "6px", fontSize: "16px" }} />
        </label>
        <button type="submit" style={{ marginTop: "8px", padding: "13px", color: "#ffffff", background: "#1769aa", border: 0, borderRadius: "7px", fontSize: "16px", fontWeight: 700, cursor: "pointer" }}>
          Sign in
        </button>
      </form>

      <section style={{ marginTop: "30px", paddingTop: "20px", borderTop: "1px solid #d9e2ec" }}>
        <h2 style={{ margin: "0 0 10px", color: "#102a43", fontSize: "16px" }}>Demo accounts</h2>
        <p style={{ margin: "6px 0", color: "#486581" }}><strong>ADMIN:</strong> admin@example.com / admin123</p>
        <p style={{ margin: "6px 0", color: "#486581" }}><strong>USER:</strong> user@example.com / user123</p>
        <p style={{ margin: "6px 0", color: "#486581" }}><strong>GUEST:</strong> guest@example.com / guest123</p>
      </section>
    </main>
  );
}
