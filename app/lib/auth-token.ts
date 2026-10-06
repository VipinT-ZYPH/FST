import { jwtVerify, SignJWT } from "jose";

export type UserRole = "ADMIN" | "USER" | "GUEST";

export interface TokenPayload {
  userId: string;
  email: string;
  role: UserRole;
}

const SECRET = new TextEncoder().encode(
  process.env.JWT_SECRET ||
    "super-secure-multi-role-secret-key-32-chars-min",
);

export async function signRoleToken(payload: TokenPayload): Promise<string> {
  return new SignJWT({ ...payload })
    .setProtectedHeader({ alg: "HS256" })
    .setIssuedAt()
    .setExpirationTime("2h")
    .sign(SECRET);
}

export async function verifyRoleToken(
  token: string,
): Promise<TokenPayload | null> {
  try {
    const { payload } = await jwtVerify(token, SECRET);

    if (
      typeof payload.userId !== "string" ||
      typeof payload.email !== "string" ||
      !["ADMIN", "USER", "GUEST"].includes(payload.role as UserRole)
    ) {
      return null;
    }

    return payload as unknown as TokenPayload;
  } catch {
    return null;
  }
}