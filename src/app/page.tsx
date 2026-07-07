import Image from "next/image";
import { CalendarDays, Map, Search, ShieldCheck, Sparkles, Users } from "lucide-react";
import { Button } from "@/components/button";
import { ExperienceCard } from "@/components/experience-card";
import { Footer } from "@/components/footer";
import { Navbar } from "@/components/navbar";
import { categories, experiences } from "@/data/mock";

export default function Home() {
  return (
    <div className="min-h-screen">
      <Navbar />
      <main>
        <section className="relative min-h-[calc(100vh-4rem)] overflow-hidden">
          <Image
            src="https://images.unsplash.com/photo-1516026672322-bc52d61a55d5?auto=format&fit=crop&w=1800&q=85"
            alt="Safari landscape with wildlife at golden hour"
            fill
            priority
            sizes="100vw"
            className="absolute inset-0 h-full w-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-slate-950/75 via-slate-950/35 to-transparent" />
          <div className="relative mx-auto flex min-h-[calc(100vh-4rem)] max-w-7xl items-center px-4 py-16 sm:px-6 lg:px-8">
            <div className="max-w-2xl text-white">
              <p className="mb-4 inline-flex rounded-lg bg-white/15 px-3 py-1 text-sm font-semibold backdrop-blur">
                Verified local experiences across East Africa
              </p>
              <h1 className="text-5xl font-bold leading-tight sm:text-6xl">Beyond Safari</h1>
              <p className="mt-5 max-w-xl text-lg leading-8 text-stone-100">
                Book wildlife drives, coastal escapes, cultural walks, and host-led adventures with transparent
                pricing and trusted local operators.
              </p>
              <div className="mt-8 grid gap-3 rounded-lg bg-white p-3 text-slate-950 shadow-xl sm:grid-cols-[1fr_1fr_auto]">
                <label className="flex items-center gap-2 rounded-md border border-slate-200 px-3 py-2 text-sm">
                  <Search size={18} className="text-slate-500" />
                  <input className="w-full" placeholder="Destination or activity" />
                </label>
                <label className="flex items-center gap-2 rounded-md border border-slate-200 px-3 py-2 text-sm">
                  <CalendarDays size={18} className="text-slate-500" />
                  <input className="w-full" type="date" />
                </label>
                <Button>Search</Button>
              </div>
            </div>
          </div>
        </section>

        <section className="mx-auto max-w-7xl px-4 py-14 sm:px-6 lg:px-8">
          <div className="grid gap-4 md:grid-cols-3">
            {[
              ["Curated hosts", "Every listing is submitted by a verified business.", ShieldCheck],
              ["AI-ready discovery", "Data structures support recommendations and wishlists.", Sparkles],
              ["Traveler tools", "Bookings, reviews, and notifications live in one flow.", Users],
            ].map(([title, copy, Icon]) => (
              <div key={title as string} className="rounded-lg border border-slate-200 bg-white p-5 shadow-sm">
                <Icon className="text-teal-700" size={24} />
                <h2 className="mt-4 text-lg font-semibold">{title as string}</h2>
                <p className="mt-2 text-sm leading-6 text-slate-600">{copy as string}</p>
              </div>
            ))}
          </div>
        </section>

        <section className="border-y border-slate-200 bg-white py-12">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="flex flex-wrap items-center justify-between gap-4">
              <div>
                <h2 className="text-2xl font-bold">Browse by category</h2>
                <p className="mt-2 text-slate-600">Fast paths into the main marketplace collections.</p>
              </div>
              <Button href="/signup" variant="secondary">
                Become a member
              </Button>
            </div>
            <div className="mt-8 grid gap-3 sm:grid-cols-2 lg:grid-cols-5">
              {categories.map((category) => (
                <button
                  key={category.name}
                  className="flex items-center justify-between rounded-lg border border-slate-200 bg-stone-50 px-4 py-4 text-left transition hover:border-teal-700 hover:bg-teal-50"
                >
                  <span className="font-semibold">{category.name}</span>
                  <span className="text-sm text-slate-500">{category.count}</span>
                </button>
              ))}
            </div>
          </div>
        </section>

        <section id="experiences" className="mx-auto max-w-7xl px-4 py-14 sm:px-6 lg:px-8">
          <div className="flex flex-wrap items-end justify-between gap-4">
            <div>
              <h2 className="text-3xl font-bold">Featured experiences</h2>
              <p className="mt-2 text-slate-600">High-intent marketplace cards ready to connect to `/api/experiences`.</p>
            </div>
            <Button variant="secondary">View all</Button>
          </div>
          <div className="mt-8 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {experiences.map((experience) => (
              <ExperienceCard key={experience.id} experience={experience} />
            ))}
          </div>
        </section>

        <section id="map" className="bg-slate-950 py-14 text-white">
          <div className="mx-auto grid max-w-7xl gap-8 px-4 sm:px-6 lg:grid-cols-[0.9fr_1.1fr] lg:px-8">
            <div>
              <Map size={32} className="text-emerald-300" />
              <h2 className="mt-4 text-3xl font-bold">Interactive map preview</h2>
              <p className="mt-4 leading-7 text-slate-300">
                The map surface reserves space for provider pins, filters, and nearby recommendations. It is styled now
                and ready for Google Maps, Mapbox, or Firebase-backed geospatial results later.
              </p>
            </div>
            <div className="relative min-h-80 overflow-hidden rounded-lg border border-white/10 bg-[radial-gradient(circle_at_20%_20%,#14b8a6_0_2px,transparent_3px),linear-gradient(135deg,#334155,#0f172a)]">
              {experiences.map((experience, index) => (
                <div
                  key={experience.id}
                  className="absolute rounded-lg bg-white px-3 py-2 text-sm font-semibold text-slate-950 shadow-lg"
                  style={{
                    left: `${16 + index * 18}%`,
                    top: `${22 + (index % 2) * 32}%`,
                  }}
                >
                  {experience.location.split(",")[0]}
                </div>
              ))}
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}
