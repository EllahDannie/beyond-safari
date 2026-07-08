import Link from "next/link";
import { LogIn } from "lucide-react";
import { AuthCard } from "@/components/auth/auth-card";
import { Button } from "@/components/ui/button";
import { FormField } from "@/components/form-field";

export default function LoginPage() {
  return (
    <AuthCard
      title="Welcome back"
      subtitle="Access bookings, wishlists, host tools, and admin workflows from one account."
      footer={
        <>
          New to Beyond Safari?{" "}
          <Link href="/signup" className="font-semibold text-teal-700">
            Create an account
          </Link>
        </>
      }
    >
      <form className="grid gap-4">
        <Button href="/profile" variant="secondary" className="flex items-center justify-center gap-2 rounded-lg border border-slate-300 bg-white px-4 py-3 text-sm font-semibold text-slate-700 shadow-sm transition hover:border-teal-600 hover:text-teal-700">
          <svg viewBox="0 0 24 24" className="h-5 w-5" aria-hidden="true">
            <path
              fill="#4285F4"
              d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09Z"
            />
            <path
              fill="#34A853"
              d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23Z"
            />
            <path
              fill="#FBBC05"
              d="M5.84 13.94c-.22-.66-.35-1.36-.35-2.08s.13-1.42.35-2.08V6.94H2.18A10.02 10.02 0 0 0 2 12c0 1.62.39 3.15 1.09 4.5l3.75-2.56Z"
            />
            <path
              fill="#EA4335"
              d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.5l3.66 2.84C6.71 7.31 9.14 5.38 12 5.38Z"
            />
          </svg>
          Continue with Google
        </Button>

        <div className="relative">
          <div className="absolute inset-0 flex items-center">
            <div className="w-full border-t border-slate-200" />
          </div>
          <div className="relative flex justify-center text-xs uppercase tracking-[0.2em] text-slate-400">
            <span className="bg-white px-2">or</span>
          </div>
        </div>

        <FormField label="Email" type="email" placeholder="you@example.com" />
        <FormField label="Password" type="password" placeholder="Enter your password" />
        <div className="flex items-center justify-between text-sm">
          <label className="flex items-center gap-2 text-slate-600">
            <input type="checkbox" className="size-4 rounded border-slate-300" />
            Remember me
          </label>
          <Link href="/forgot-password" className="font-semibold text-teal-700">
            Forgot password?
          </Link>
        </div>
        <Button href="/profile" className="w-full">
          <LogIn size={18} />
          Log in
        </Button>
      </form>
    </AuthCard>
  );
}
