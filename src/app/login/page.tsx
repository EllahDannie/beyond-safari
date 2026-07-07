import Link from "next/link";
import { LogIn } from "lucide-react";
import { AuthCard } from "@/components/auth-card";
import { Button } from "@/components/button";
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
        <Button className="w-full">
          <LogIn size={18} />
          Log in
        </Button>
      </form>
    </AuthCard>
  );
}
