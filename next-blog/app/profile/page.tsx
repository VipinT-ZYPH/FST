"use client";

import { signOut, useSession } from "@/app/lib/auth-client";
import { useRouter } from "next/navigation";

export default function ProfilePage() {
  const { data: session, isPending } = useSession();
  const router = useRouter();

  if (isPending) {
    return (
      <div className="flex min-h-screen items-center justify-center bg-gray-50">
        <p className="text-gray-500">Loading profile...</p>
      </div>
    );
  }

  if (!session) {
    // Middleware should catch this, but just in case
    router.push("/auth-demo");
    return null;
  }

  return (
    <div className="flex min-h-screen flex-col items-center justify-center bg-gray-50 p-4">
      <div className="w-full max-w-md space-y-8 rounded-xl bg-white p-8 shadow-lg">
        <div className="text-center">
          <h1 className="text-3xl font-bold text-gray-900">Your Profile</h1>
        </div>

        <div className="space-y-6 pt-4">
          <div className="flex flex-col items-center space-y-4">
            <div className="flex h-20 w-20 items-center justify-center overflow-hidden rounded-full bg-blue-100 text-2xl font-bold text-blue-600">
              {session.user.image ? (
                <img src={session.user.image} alt="User Avatar" className="h-full w-full object-cover" />
              ) : (
                session.user.name?.charAt(0).toUpperCase() || "?"
              )}
            </div>
            <div className="text-center">
              <p className="text-xl font-semibold text-gray-900">{session.user.name}</p>
              <p className="text-sm text-gray-500">{session.user.email}</p>
            </div>
          </div>

          <div className="rounded-lg bg-gray-50 p-4">
            <div className="space-y-2 text-sm">
              <div className="flex justify-between border-b border-gray-200 pb-2">
                <span className="font-medium text-gray-600">User ID</span>
                <span className="font-mono text-gray-900">{session.user.id}</span>
              </div>
              <div className="flex justify-between pt-2">
                <span className="font-medium text-gray-600">Session Expiry</span>
                <span className="text-gray-900">
                  {new Date(session.session.expiresAt).toLocaleString()}
                </span>
              </div>
            </div>
          </div>

          <button
            onClick={async () => {
              await signOut({
                fetchOptions: {
                  onSuccess: () => {
                    router.push("/auth-demo");
                  },
                },
              });
            }}
            className="w-full rounded-lg bg-red-600 px-4 py-3 text-sm font-semibold text-white transition-colors hover:bg-red-700"
          >
            Sign Out
          </button>
        </div>
      </div>
    </div>
  );
}
