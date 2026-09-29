'use client';

import Link from 'next/link';
import { useState } from 'react';
import { signIn } from '@/app/lib/auth-client';

type Provider = 'github' | 'google';

export default function LoginPage() {
  const [loadingProvider, setLoadingProvider] = useState<Provider | null>(null);

  const handleSignIn = async (provider: Provider) => {
    setLoadingProvider(provider);
    await signIn.social({
      provider,
      callbackURL: '/',
    });
    setLoadingProvider(null);
  };

  return (
    <main className="flex min-h-[calc(100vh-4rem)] items-center justify-center bg-slate-50 px-6 py-12">
      <section className="w-full max-w-md rounded-2xl border border-slate-200 bg-white p-8 shadow-xl shadow-slate-200/60 sm:p-10">
        <div className="mb-8 text-center">
          <p className="mb-3 text-sm font-semibold uppercase tracking-[0.2em] text-sky-600">
            Welcome back
          </p>
          <h1 className="text-3xl font-bold tracking-tight text-slate-950">
            Sign in to continue
          </h1>
          <p className="mt-3 text-sm leading-6 text-slate-500">
            Use your Google or GitHub account to securely access your account.
          </p>
        </div>

        <div className="space-y-3">
          <button
            type="button"
            onClick={() => handleSignIn('github')}
            disabled={loadingProvider !== null}
            className="flex w-full items-center justify-center gap-3 rounded-lg bg-slate-950 px-4 py-3 text-sm font-semibold text-white transition hover:bg-slate-800 disabled:cursor-wait"
          >
            <span aria-hidden="true" className="text-base font-bold">GH</span>
            {loadingProvider === 'github' ? 'Connecting...' : 'Sign in with GitHub'}
          </button>

          <button
            type="button"
            onClick={() => handleSignIn('google')}
            disabled={loadingProvider !== null}
            className="flex w-full items-center justify-center gap-3 rounded-lg border border-slate-300 bg-white px-4 py-3 text-sm font-semibold text-slate-700 transition hover:bg-slate-50 disabled:cursor-wait"
          >
            <span aria-hidden="true" className="text-base font-bold text-blue-600">G</span>
            {loadingProvider === 'google' ? 'Connecting...' : 'Sign in with Google'}
          </button>
        </div>

        <p className="mt-8 text-center text-sm text-slate-500">
          <Link href="/" className="font-semibold text-sky-600 hover:text-sky-700">
            Return home
          </Link>
        </p>
      </section>
    </main>
  );
}