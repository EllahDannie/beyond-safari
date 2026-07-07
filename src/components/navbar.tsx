import Link from "next/link";
import { Compass, Heart, Menu, Search } from "lucide-react";
import { Button } from "@/components/button";

export function Navbar() {
  return (
    <header className="sticky top-0 z-30 border-b border-slate-200 bg-stone-50/95 backdrop-blur">
      <div className="mx-auto flex h-16 max-w-7xl items-center gap-4 px-4 sm:px-6 lg:px-8">
        <Link href="/" className="flex items-center gap-2 font-bold text-slate-950">
          <span className="grid size-9 place-items-center rounded-lg bg-teal-700 text-white">
            <Compass size={20} />
          </span>
          Beyond Safari
        </Link>
        <nav className="ml-6 hidden items-center gap-5 text-sm font-medium text-slate-700 md:flex">
          <Link href="/#experiences">Experiences</Link>
          <Link href="/#map">Map</Link>
          <Link href="/business">For hosts</Link>
          <Link href="/admin">Admin</Link>
        </nav>
        <div className="ml-auto hidden w-full max-w-xs items-center gap-2 rounded-lg border border-slate-200 bg-white px-3 py-2 text-sm text-slate-500 lg:flex">
          <Search size={16} />
          Search destinations
        </div>
        <Link
          href="/dashboard"
          className="ml-auto hidden rounded-lg p-2 text-slate-700 hover:bg-white md:block lg:ml-0"
          aria-label="Wishlist"
        >
          <Heart size={20} />
        </Link>
        <div className="hidden items-center gap-2 md:flex">
          <Button href="/login" variant="ghost">
            Log in
          </Button>
          <Button href="/signup">Sign up</Button>
        </div>
        <button className="ml-auto rounded-lg p-2 text-slate-700 hover:bg-white md:hidden" aria-label="Menu">
          <Menu size={22} />
        </button>
      </div>
    </header>
  );
}
