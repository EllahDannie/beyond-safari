import Image from "next/image";
import { CalendarDays, Map, Search, ShieldCheck, Sparkles, Users } from "lucide-react";
import { Button } from "@/components/ui/button";
import { ExperienceCard } from "@/components/experience-card";
import { Footer } from "@/components/footer";
import { Navbar } from "@/components/navbar";
import { experiences } from "@/data/mock";

export default function Home() {
  const reviews = [
    {
      id: 1,
      name: "Nadia R.",
      location: "Maasai Mara",
      rating: 5,
      quote:
        "Everything felt seamless from booking to our sunrise game drive. The host made the whole trip feel personal.",
    },
    {
      id: 2,
      name: "James T.",
      location: "Diani Beach",
      rating: 5,
      quote:
        "We booked a coastal escape in minutes and loved the local recommendations. Super transparent pricing too.",
    },
    {
      id: 3,
      name: "Amina K.",
      location: "Nairobi",
      rating: 4,
      quote:
        "The cultural walk was thoughtful and well-paced. It was easy to discover a unique experience near the city.",
    },
    {
      id: 4,
      name: "Samuel O.",
      location: "Lake Nakuru",
      rating: 5,
      quote:
        "A polished experience with excellent communication and a truly memorable wildlife itinerary.",
    },
  ];

  return (
    <div className="min-h-screen">
      <Navbar />
      <main>
        <section className="relative min-h-[calc(100vh-4rem)] overflow-hidden">
          <Image
            src="/images/backgrounds/9-Shimoni-Island-Caves.jpg"
            alt="Shimonni Island Caves"
            fill
            priority
            sizes="100vw"
            className="absolute inset-0 h-full w-full object-cover"
          />
          <div className="absolute inset-0 bg-linear-to-r from-slate-950/75 via-slate-950/35 to-transparent" />
          <div className="relative mx-auto flex min-h-[calc(100vh-4rem)] max-w-7xl items-center px-4 py-16 sm:px-6 lg:px-8">
            <div className="max-w-2xl text-white">
              <h1 className="text-5xl font-bold leading-tight sm:text-6xl">DISCOVER AFRICA: <span className="text-green-600">BEYOND SAFARI</span> </h1>
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

        <section className="border-y border-slate-200 bg-green-950 py-12">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="flex flex-wrap items-center justify-between gap-4">
              <div>
                <h2 className="text-2xl font-bold text-taupe-100">Browse by category</h2>
                <p className="mt-2 text-slate-300">Fast paths into the main marketplace collections.</p>
              </div>
              <Button href="/signup" variant="secondary">
                Become a member
              </Button>
            </div>
          </div>
        </section>



        <section id="experiences" className="mx-auto max-w-7xl px-4 py-14 sm:px-6 lg:px-8">
          <div className="flex flex-wrap items-end justify-between gap-4">
            <div>
              <h2 className="text-3xl font-bold text-center text-green-800">Experiences</h2>
              <p className="mt-2 text-shadow-slate-950 text-center">Discover unique experiences curated for adventurers, travelers, and explorers.</p>
            </div>
            <Button href="/experiences" variant="secondary">View all</Button>
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
            <div className="relative min-h-80 overflow-hidden rounded-lg border border-white/10 bg-slate-900">
              <div className="absolute left-[16%] top-[22%] rounded-lg bg-white px-3 py-2 text-sm font-semibold text-slate-950 shadow-lg">
                Hells Gate
              </div>
            </div>
          </div>
        </section>
      </main>
      <section className="border-t border-slate-200 bg-green-950 py-14">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="flex flex-wrap items-end justify-between gap-4">
              <div>
                <h2 className="text-3xl font-bold text-taupe-100">Traveler reviews</h2>
                <p className="mt-2 text-slate-200">Loved by guests who want thoughtful, trusted adventure planning.</p>
              </div>
              <div className="rounded-full bg-emerald-100 px-4 py-2 text-sm font-semibold text-emerald-700">
                4.9/5 average rating
              </div>
            </div>
            <div className="mt-8 grid gap-6 md:grid-cols-2 xl:grid-cols-4">
              {reviews.map((review) => (
                <div key={review.id} className="rounded-xl border border-slate-200 bg-white p-5 shadow-sm">
                  <div className="flex items-center gap-1 text-amber-500">
                    {Array.from({ length: review.rating }).map((_, index) => (
                      <span key={index}>★</span>
                    ))}
                  </div>
                  <p className="mt-4 text-sm leading-6 text-slate-600">“{review.quote}”</p>
                  <div className="mt-5">
                    <p className="font-semibold text-slate-900">{review.name}</p>
                    <p className="text-sm text-slate-500">{review.location}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
      <Footer />
    </div>
  );
}
