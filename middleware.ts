import type { NextRequest } from "next/server";
import { NextResponse } from "next/server";
import { verifyRoleToken } from "./app/lib/auth-token";

export async function middleware(request: NextRequest) {
  const { pathname } = request.nextUrl;
  const token = request.cookies.get("session_role_token")?.value;
  const session = token ? await verifyRoleToken(token) : null;
  const userRole = session?.role ?? "GUEST";

  const isAdminRoute = pathname.startsWith("/admin");
  const isUserRoute = pathname.startsWith("/dashboard");

  if ((isAdminRoute || isUserRoute) && userRole === "GUEST") {
    const loginUrl = new URL("/login", request.url);
    loginUrl.searchParams.set("redirect", pathname);
    return NextResponse.redirect(loginUrl);
  }

  if (isAdminRoute && userRole !== "ADMIN") {
    return NextResponse.redirect(new URL("/unauthorized", request.url));
  }

  const requestHeaders = new Headers(request.headers);
  requestHeaders.set("x-user-role", userRole);

  if (session) {
    requestHeaders.set("x-user-id", session.userId);
  }

  return NextResponse.next({ request: { headers: requestHeaders } });
}

export const config = {
  matcher: ["/admin/:path*", "/dashboard/:path*", "/login"],
};