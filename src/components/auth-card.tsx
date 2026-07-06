import Link from "next/link";
import type { ReactNode } from "react";
import { Compass } from "lucide-react";

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
    <main className="min-h-screen bg-stone-50 px-4 py-10">
      <div className="mx-auto max-w-md">
        <Link href="/" className="mb-8 flex items-center justify-center gap-2 font-bold">
          <span className="grid size-9 place-items-center rounded-lg bg-teal-700 text-white">
            <Compass size={20} />
          </span>
          Beyond Safari
        </Link>
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
