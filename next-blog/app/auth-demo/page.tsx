'use client';

import { signIn, signOut, useSession } from '@/app/lib/auth-client';

export default function AuthDemoPage() {
  const { data: session, isPending } = useSession();

  const handleSignIn = async (provider: 'google' | 'github') => {
    await signIn.social({
      provider,
      callbackURL: '/auth-demo',
    });
  };

  const handleSignOut = async () => {
    await signOut({
      fetchOptions: {
        onSuccess: () => {
          window.location.reload();
        },
      },
    });
  };

  return (
    <div className="min-h-screen bg-slate-50 text-slate-900 p-6 sm:p-10 font-sans">
      <div className="max-w-xl mx-auto space-y-8">
        
        {/* Header */}
        <header className="border-b border-slate-200 pb-5">
          <div className="flex items-center gap-2 mb-2">
            <span className="px-2.5 py-0.5 rounded-full text-xs font-semibold bg-indigo-100 text-indigo-700">
              Experiment 7
            </span>
            <span className="text-xs text-slate-500 font-mono">
              Next.js 16 + Better Auth
            </span>
          </div>
          <h1 className="text-2xl sm:text-3xl font-bold tracking-tight text-slate-900">
            Social Authentication
          </h1>
          <p className="mt-1 text-sm text-slate-600">
            Secure OAuth 2.0 authentication using Google and GitHub identity providers.
          </p>
        </header>

        {/* State / Interactive Authentication Area */}
        <section className="bg-white rounded-xl border border-slate-200 shadow-sm p-6 sm:p-8">
          {isPending ? (
            <div className="text-center py-6 text-slate-500 text-sm">
              Verifying active session...
            </div>
          ) : session ? (
            /* Authenticated User Profile View */
            <div className="space-y-6">
              <div className="flex items-center gap-4">
                {session.user.image ? (
                  <img
                    src={session.user.image}
                    alt={session.user.name || 'User Avatar'}
                    className="w-14 h-14 rounded-full border border-slate-200 object-cover"
                  />
                ) : (
                  <div className="w-14 h-14 rounded-full bg-slate-200 flex items-center justify-center text-slate-600 font-bold">
                    {session.user.name?.charAt(0) || 'U'}
                  </div>
                )}
                <div>
                  <h2 className="text-lg font-semibold text-slate-900">
                    {session.user.name}
                  </h2>
                  <p className="text-sm text-slate-500">{session.user.email}</p>
                </div>
              </div>

              <div className="p-4 bg-slate-50 rounded-lg border border-slate-200 text-xs font-mono space-y-1">
                <p><strong>User ID:</strong> {session.user.id}</p>
                <p><strong>Session Expires:</strong> {new Date(session.session.expiresAt).toLocaleString()}</p>
              </div>

              <button
                onClick={handleSignOut}
                className="w-full py-2.5 bg-rose-600 hover:bg-rose-700 text-white text-sm font-semibold rounded-lg shadow transition cursor-pointer"
              >
                Sign Out
              </button>
            </div>
          ) : (
            /* Unauthenticated Action View */
            <div className="space-y-4">
              <h2 className="text-lg font-semibold text-slate-900 mb-1">
                Sign In to Your Account
              </h2>
              <p className="text-xs text-slate-500 mb-4">
                Select an OAuth provider to initiate identity verification.
              </p>

              <button
                onClick={() => handleSignIn('github')}
                className="w-full flex items-center justify-center gap-2 py-2.5 bg-slate-900 hover:bg-slate-800 text-white text-sm font-semibold rounded-lg shadow transition cursor-pointer"
              >
                Continue with GitHub
              </button>

              <button
                onClick={() => handleSignIn('google')}
                className="w-full flex items-center justify-center gap-2 py-2.5 bg-white hover:bg-slate-50 text-slate-700 border border-slate-300 text-sm font-semibold rounded-lg shadow-sm transition cursor-pointer"
              >
                Continue with Google
              </button>
            </div>
          )}
        </section>

      </div>
    </div>
  );
}
