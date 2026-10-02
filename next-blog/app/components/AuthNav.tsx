"use client";

import Link from "next/link";
import { useSession } from "@/app/lib/auth-client";

export default function AuthNav() {
  const { data: session, isPending } = useSession();

  if (isPending) {
    return <span className="text-sky-400 opacity-50">Loading...</span>;
  }

  if (session) {
    return (
      <Link href="/profile" className="text-sky-400 font-semibold">
        Profile
      </Link>
    );
  }

  return (
    <Link href="/auth-demo" className="text-sky-400 font-semibold">
      Sign In
    </Link>
  );
}
