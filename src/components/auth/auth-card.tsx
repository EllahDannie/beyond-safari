import type { ReactNode } from "react";
import Image from "next/image";

export function AuthCard({
  title,
  subtitle,
  children,
  footer,
}: {
  title: string;
  subtitle: string;
  children: ReactNode;
  footer: ReactNode;
}) {
  return (
    <main className="min-h-screen px-4 py-10">
      <div className="mx-auto max-w-md">
        <div className="mb-6 flex justify-center">
          <Image
            src="/logos/logo.jpg"
            alt="Beyond Safari Logo"
            width={80}
            height={80}
            className="rounded-lg"
          />
          
        </div>
        <section className="rounded-lg border border-slate-200 bg-white p-6 shadow-sm">
          <h1 className="text-2xl font-bold text-slate-950">{title}</h1>
          <p className="mt-2 text-sm leading-6 text-slate-600">{subtitle}</p>
          <div className="mt-6">{children}</div>
        </section>
        <div className="mt-6 text-center text-sm text-slate-600">{footer}</div>
      </div>
    </main>
  );
}
