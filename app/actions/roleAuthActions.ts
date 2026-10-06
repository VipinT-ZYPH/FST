"use server";

import { cookies } from "next/headers";
import { redirect } from "next/navigation";
import { signRoleToken, type UserRole } from "@/app/lib/auth-token";

const DEMO_USERS: Array<{
  email: string;
  password: string;
  role: Exclude<UserRole, "GUEST">;
  userId: string;
}> = [
  {
    email: "admin@example.com",
    password: "admin123",
    role: "ADMIN",
    userId: "usr_admin_123",
  },
  {
    email: "user@example.com",
    password: "user123",
    role: "USER",
    userId: "usr_user_123",
  },
];

function getRedirectPath(value: FormDataEntryValue | null) {
  if (typeof value !== "string" || !value.startsWith("/") || value.startsWith("//")) {
    return null;
  }

  return value;
}

export async function loginAction(formData: FormData) {
  const email = String(formData.get("email") || "").trim().toLowerCase();
  const password = String(formData.get("password") || "");
  const redirectPath = getRedirectPath(formData.get("redirect"));

  if (email === "guest@example.com" && password === "guest123") {
    const cookieStore = await cookies();
    cookieStore.delete("session_role_token");
    redirect("/?login=guest");
  }

  const account = DEMO_USERS.find(
    (candidate) => candidate.email === email && candidate.password === password,
  );

  if (!account) {
    const errorUrl = new URL("/login", "http://localhost");
    errorUrl.searchParams.set("error", "invalid");
    if (redirectPath) {
      errorUrl.searchParams.set("redirect", redirectPath);
    }
    redirect(`${errorUrl.pathname}${errorUrl.search}`);
  }

  const cookieStore = await cookies();

  const token = await signRoleToken({
    userId: account.userId,
    email: account.email,
    role: account.role,
  });

  cookieStore.set("session_role_token", token, {
    httpOnly: true,
    secure: process.env.NODE_ENV === "production",
    sameSite: "lax",
    path: "/",
    maxAge: 7200,
  });

  redirect(redirectPath || (account.role === "ADMIN" ? "/admin" : "/dashboard"));
}