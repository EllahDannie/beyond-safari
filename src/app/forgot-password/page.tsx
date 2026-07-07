import Link from "next/link";
import { Mail } from "lucide-react";
import { AuthCard } from "@/components/auth-card";
import { Button } from "@/components/button";
import { FormField } from "@/components/form-field";

export default function ForgotPasswordPage() {
  return (
    <AuthCard
      title="Reset password"
      subtitle="Enter your email and Beyond Safari will send a secure reset link."
      footer={
        <Link href="/login" className="font-semibold text-teal-700">
          Return to login
        </Link>
      }
    >
      <form className="grid gap-4">
        <FormField label="Email" type="email" placeholder="you@example.com" />
        <Button className="w-full">
          <Mail size={18} />
          Send reset link
        </Button>
      </form>
    </AuthCard>
  );
}
