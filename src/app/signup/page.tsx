import Link from "next/link";
import { UserPlus } from "lucide-react";
import { AuthCard } from "@/components/auth/auth-card";
import { Button } from "@/components/ui/button";
import { FormField } from "@/components/form-field";

export default function SignupPage() {
  return (
    <AuthCard
      title="Create your account"
      subtitle="Choose traveler or business access after signup; the frontend is ready for Firebase auth roles."
      footer={
        <>
          Already have an account?{" "}
          <Link href="/login" className="font-semibold text-green-700">
            Log in
          </Link>
        </>
      }
    >
      <form className="grid gap-4">
        <FormField label="Full name" placeholder="Your name" />
        <FormField label="Email" type="email" placeholder="you@example.com" />
        <FormField label="Password" type="password" placeholder="Create a password" />
        <label className="grid gap-2 text-sm font-medium text-slate-700">
          Account type
          <select className="min-h-11 rounded-lg border border-slate-300 bg-white px-3 text-slate-950">
            <option>Traveler</option>
            <option>Business host</option>
          </select>
        </label>
        <Button href="/profile" className="w-full">
          <UserPlus size={18} />
          Sign up
        </Button>
      </form>
    </AuthCard>
  );
}
