import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";

export async function middleware(request: NextRequest) {
  // Check session using Better Auth API
  const response = await fetch(`${request.nextUrl.origin}/api/auth/get-session`, {
    headers: {
      cookie: request.headers.get("cookie") || "",
    },
  });
  
  const session = await response.json().catch(() => null);

  // If there's no active session, redirect to the login demo page
  if (!session) {
    return NextResponse.redirect(new URL("/auth-demo", request.url));
  }

  return NextResponse.next();
}

export const config = {
  matcher: [
    /*
     * Match all request paths except for the ones starting with:
     * - api (API routes, including auth callbacks)
     * - _next/static (static files)
     * - _next/image (image optimization files)
     * - favicon.ico, sitemap.xml, robots.txt (metadata files)
     * - auth-demo (our login page)
     */
    "/((?!api|_next/static|_next/image|favicon.ico|sitemap.xml|robots.txt|auth-demo).*)",
  ],
};
