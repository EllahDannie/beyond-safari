import Image from "next/image";
import { notFound } from "next/navigation";
import { CalendarDays, Heart, MapPin, ShieldCheck, Star, Users } from "lucide-react";
import { Button } from "@/components/button";
import { Footer } from "@/components/footer";
import { Navbar } from "@/components/navbar";
import { experiences } from "@/data/mock";

export function generateStaticParams() {
  return experiences.map((experience) => ({ id: experience.id }));
}

export default async function ExperienceDetailPage({ params }: { params: Promise<{ id: string }> }) {
  const { id } = await params;
  const experience = experiences.find((item) => item.id === id);

  if (!experience) {
    notFound();
  }

  return (
    <div className="min-h-screen bg-stone-50">
      <Navbar />
      <main>
        <section className="grid min-h-[68vh] lg:grid-cols-2">
          <div className="relative min-h-96">
            <Image
              src={experience.image}
              alt={experience.title}
              fill
              priority
              sizes="(min-width: 1024px) 50vw, 100vw"
              className="absolute inset-0 h-full w-full object-cover"
            />
          </div>
          <div className="flex items-center px-4 py-10 sm:px-8 lg:px-14">
            <div className="max-w-xl">
              <p className="text-sm font-semibold text-teal-700">{experience.category}</p>
              <h1 className="mt-3 text-4xl font-bold leading-tight">{experience.title}</h1>
              <div className="mt-4 flex flex-wrap gap-4 text-sm text-slate-600">
                <span className="flex items-center gap-2">
                  <MapPin size={17} />
                  {experience.location}
                </span>
                <span className="flex items-center gap-2">
                  <Star size={17} className="fill-amber-400 text-amber-400" />
                  {experience.rating} ({experience.reviews} reviews)
                </span>
              </div>
              <p className="mt-6 text-lg leading-8 text-slate-700">{experience.description}</p>
              <div className="mt-6 flex flex-wrap gap-2">
                {experience.tags.map((tag) => (
                  <span key={tag} className="rounded-md bg-white px-3 py-2 text-sm font-medium text-slate-700 shadow-sm">
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </section>
        <section className="mx-auto grid max-w-7xl gap-8 px-4 py-12 sm:px-6 lg:grid-cols-[1fr_380px] lg:px-8">
          <div className="grid gap-6">
            <div className="rounded-lg border border-slate-200 bg-white p-6 shadow-sm">
              <h2 className="text-xl font-semibold">What to expect</h2>
              <div className="mt-5 grid gap-4 sm:grid-cols-3">
                <div>
                  <CalendarDays className="text-teal-700" />
                  <p className="mt-3 font-semibold">{experience.duration}</p>
                  <p className="text-sm text-slate-600">Flexible start times</p>
                </div>
                <div>
                  <Users className="text-teal-700" />
                  <p className="mt-3 font-semibold">Up to {experience.capacity}</p>
                  <p className="text-sm text-slate-600">Small group size</p>
                </div>
                <div>
                  <ShieldCheck className="text-teal-700" />
                  <p className="mt-3 font-semibold">Verified host</p>
                  <p className="text-sm text-slate-600">{experience.host}</p>
                </div>
              </div>
            </div>
            <div className="rounded-lg border border-slate-200 bg-white p-6 shadow-sm">
              <h2 className="text-xl font-semibold">Reviews</h2>
              <div className="mt-4 grid gap-4">
                {["Thoughtful guide, clear pickup, and a beautiful route.", "The host made the experience feel personal and well paced."].map(
                  (review) => (
                    <blockquote key={review} className="rounded-lg bg-stone-50 p-4 text-slate-700">
                      “{review}”
                    </blockquote>
                  ),
                )}
              </div>
            </div>
          </div>
          <aside className="h-fit rounded-lg border border-slate-200 bg-white p-6 shadow-sm">
            <div className="flex items-end justify-between">
              <p>
                <span className="text-3xl font-bold">${experience.price}</span>
                <span className="text-slate-500"> / person</span>
              </p>
              <button className="rounded-lg border border-slate-200 p-2 text-slate-600" aria-label="Save to wishlist">
                <Heart size={20} />
              </button>
            </div>
            <form className="mt-6 grid gap-4">
              <label className="grid gap-2 text-sm font-medium text-slate-700">
                Date
                <input type="date" className="min-h-11 rounded-lg border border-slate-300 px-3" />
              </label>
              <label className="grid gap-2 text-sm font-medium text-slate-700">
                Guests
                <input type="number" min="1" defaultValue="2" className="min-h-11 rounded-lg border border-slate-300 px-3" />
              </label>
              <Button>Book experience</Button>
              <Button variant="secondary">Start chat</Button>
            </form>
          </aside>
        </section>
      </main>
      <Footer />
    </div>
  );
}
