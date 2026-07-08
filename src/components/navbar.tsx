import Link from "next/link";
import { Heart, Menu, Search, User } from "lucide-react";
import Image from "next/image";

type NavbarProps = {
  variant?: "default" | "admin";
  profileHref?: string;
};

export function Navbar({ variant = "default", profileHref }: NavbarProps) {
  const isAdmin = variant === "admin";

  const links = isAdmin
    ? [
        { href: "/admin", label: "Overview" },
        { href: "/admin/users", label: "Users" },
        { href: "/admin/approvals", label: "Approvals" },
        { href: "/admin/reports", label: "Reports" },
        { href: "/admin/roles", label: "Settings" },
      ]
    : [
        { href: "/", label: "Home" },
        { href: "/about", label: "About" },
        { href: "/experiences", label: "Experiences" },
        { href: "/events", label: "Events" },
        { href: "/plan", label: "Plan" },
        { href: "/contact", label: "Contact" },


      ]
    

  return (
    <header className="sticky top-0 z-30 border-b border-slate-200 bg-stone-50/95 backdrop-blur">
      <div className="mx-auto flex h-16 max-w-7xl items-center gap-4 px-4 sm:px-6 lg:px-8">
        <Link href={isAdmin ? "/admin" : "/"} className="flex items-center gap-2 font-bold text-slate-950">
          <Image src="/logos/logo.jpg" alt="Beyond Safari Logo" width={40} height={40} className="rounded-lg" />
          {isAdmin ? <span className="text-sm uppercase tracking-[0.25em] text-teal-700">Admin</span> : null}
        </Link>
        <nav className="ml-6 hidden items-center gap-5 text-md font-bold text-slate-950 md:flex">
          {links.map((link) => (
            <Link key={link.href} href={link.href}>
              {link.label}
            </Link>
          ))}
        </nav>

        <div className="ml-auto flex items-center gap-2">
          {!isAdmin ? (
            <>
              <div className="hidden w-full max-w-xs items-center gap-2 rounded-lg border border-slate-200 bg-white px-3 py-2 text-sm text-slate-500 lg:flex">
                <Search size={16} />
                Search destinations
              </div>
              <Link
                href="#wishlist"
                className="hidden rounded-lg p-2 text-slate-950 hover:bg-green-100 md:block"
                aria-label="Wishlist"
              >
                <Heart size={20} />
              </Link>
            </>
          ) : null}
          <Link
            href={isAdmin ? "/admin" : profileHref ?? "/user/profile"}
            className="rounded-lg p-2 text-slate-950 hover:bg-green-100"
            aria-label="Profile"
          >
            <User size={30} />
          </Link>
        </div>

        <button className="rounded-lg p-2 text-slate-950 hover:bg-green-100 md:hidden" aria-label="Menu">
          <Menu size={22} />
        </button>
      </div>
    </header>
  );
}
