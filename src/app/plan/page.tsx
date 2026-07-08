"use client";

import { useState } from "react";
import {
  ArrowRight,
  CalendarDays,
  CheckCircle2,
  Clock3,
  MapPin,
  Sparkles,
} from "lucide-react";
import { FormField } from "@/components/form-field";
import { Navbar } from "@/components/navbar";
import { Button } from "@/components/ui/button";
import { ExperienceCard } from "@/components/experience-card";
import { events, experiences } from "@/data/mock";
import { Footer } from "@/components/footer";

const preferenceOptions = ["Beaches", "Culture", "Adventure", "Food", "Wildlife", "Scenic"];

const itinerary = [
  {
    day: "Day 1",
    title: "Arrival in Diani",
    description: "Check in, enjoy a sunset walk, and book a private dinner by the sea.",
  },
  {
    day: "Day 2",
    title: "Coastal discovery",
    description: "Pair a beach morning with snorkeling, lunch by the reef, and a relaxed evening.",
  },
  {
    day: "Day 3",
    title: "Culture and craft stop",
    description: "Visit a local market, join a heritage experience, and close the day with music.",
  },
];

const initialForm = {
  name: "",
  email: "",
  phone: "",
  budget: "",
  destination: "Diani Beach",
  category: "Adventure",
  travellers: "Duo",
  dates: "Aug 14 - Aug 18",
};

export default function PlanPage() {
  const [form, setForm] = useState(initialForm);
  const [selectedPreference, setSelectedPreference] = useState("Adventure");

  const handleChange = (
    event: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>,
  ) => {
    const { name, value } = event.target;
    setForm((current) => ({ ...current, [name]: value }));
  };

  const summaryItems = [
    { label: "Traveler", value: form.name || "Your name" },
    { label: "Email", value: form.email || "your@email.com" },
    { label: "Budget", value: form.budget || "Flexible" },
    { label: "Destination", value: form.destination },
    { label: "Style", value: selectedPreference },
    { label: "Dates", value: form.dates },
  ];

  return (
    <div className="min-h-screen bg-green-950 px-4 py-8 sm:px-6 lg:px-8">
      <Navbar />
      <div className="mx-auto mt-8 flex max-w-7xl flex-col gap-8">
        <section className="rounded-4xl border border-emerald-100 bg-white/85 p-6 shadow-sm backdrop-blur sm:p-8">
          <div className="flex flex-col gap-6 lg:flex-row lg:items-end lg:justify-between">
            <div className="max-w-2xl">
              
              <h1 className="mt-4 text-3xl font-bold text-slate-950 sm:text-4xl">
                Plan Your Next Adventure
              </h1>
              <p className="mt-3 text-lg text-slate-600">
                Shape your journey with a quick trip brief, discover hand-picked experiences, and review a ready-to-share itinerary.
              </p>
            </div>
            <div className="flex flex-wrap gap-3">
              <div className="rounded-2xl border border-slate-200 bg-slate-50 px-4 py-3 text-sm text-slate-700">
                <p className="font-semibold text-slate-950">3 curated stops</p>
                <p>Recommended for your style</p>
              </div>
              <div className="rounded-2xl border border-slate-200 bg-slate-50 px-4 py-3 text-sm text-slate-700">
                <p className="font-semibold text-slate-950">Live summary</p>
                <p>Updates as you plan</p>
              </div>
            </div>
          </div>
        </section>

        <div className="grid gap-6 lg:grid-cols-[1.15fr_0.85fr]">
          <section className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm sm:p-8">
            <div className="flex items-center justify-between gap-3">
              <div>
                <h2 className="text-xl font-semibold text-slate-950">Trip info</h2>
                <p className="mt-1 text-sm text-slate-600">Tell us what kind of adventure you want.</p>
              </div>
              <div className="rounded-full bg-emerald-50 px-3 py-1 text-sm font-medium text-emerald-700">
                Tailored plan
              </div>
            </div>

            <div className="mt-6 grid gap-4 md:grid-cols-2">
              <FormField
                label="Name"
                name="name"
                value={form.name}
                onChange={handleChange}
                placeholder="Enter your name"
              />
              <FormField
                label="Email"
                type="email"
                name="email"
                value={form.email}
                onChange={handleChange}
                placeholder="Enter your email"
              />
              <FormField
                label="Phone"
                type="tel"
                name="phone"
                value={form.phone}
                onChange={handleChange}
                placeholder="Enter your phone number"
              />
              <FormField
                label="Budget"
                name="budget"
                value={form.budget}
                onChange={handleChange}
                placeholder="Enter your budget"
              />
              <FormField
                label="Destination"
                name="destination"
                value={form.destination}
                onChange={handleChange}
                placeholder="Enter your destination"
              />
              <label className="grid gap-2 text-sm font-medium text-slate-700">
                Category
                <select
                  name="category"
                  value={form.category}
                  onChange={handleChange}
                  className="min-h-11 rounded-lg border border-slate-300 bg-white px-3 text-slate-950"
                >
                  <option>Beaches</option>
                  <option>Historical Sites</option>
                  <option>Landscapes</option>
                  <option>Adventure</option>
                  <option>Food</option>
                  <option>Culture</option>
                  <option>Festivals</option>
                </select>
              </label>
              <label className="grid gap-2 text-sm font-medium text-slate-700">
                Number of travellers
                <select
                  name="travellers"
                  value={form.travellers}
                  onChange={handleChange}
                  className="min-h-11 rounded-lg border border-slate-300 bg-white px-3 text-slate-950"
                >
                  <option>Single</option>
                  <option>Duo</option>
                  <option>Trio</option>
                  <option>Groups of 5 or more</option>
                </select>
              </label>
              <FormField
                label="Travel dates"
                name="dates"
                value={form.dates}
                onChange={handleChange}
                placeholder="Enter your travel dates"
              />
            </div>

            <div className="mt-6">
              <div className="mb-3 flex items-center gap-2 text-sm font-semibold text-slate-700">
                <Sparkles size={16} className="text-emerald-600" />
                Preferences
              </div>
              <div className="flex flex-wrap gap-2">
                {preferenceOptions.map((option) => (
                  <button
                    key={option}
                    type="button"
                    onClick={() => setSelectedPreference(option)}
                    className={`rounded-full px-3 py-2 text-sm font-medium transition ${
                      selectedPreference === option
                        ? "bg-emerald-600 text-white"
                        : "bg-slate-100 text-slate-700 hover:bg-slate-200"
                    }`}
                  >
                    {option}
                  </button>
                ))}
              </div>
            </div>

            <Button className="mt-6 w-full justify-center bg-emerald-600 text-white hover:bg-emerald-700">
              Generate trip draft <ArrowRight size={16} />
            </Button>
          </section>

          <aside className="flex flex-col gap-6">
            <section className="rounded-3xl border border-slate-200 bg-slate-950 p-6 text-white shadow-sm">
              <div className="flex items-center justify-between gap-4">
                
                <div className="rounded-full bg-white/10 p-2">
                  <CalendarDays size={18} />
                </div>
              </div>

              <div className="mt-5 space-y-3">
                {summaryItems.map((item) => (
                  <div key={item.label} className="rounded-xl border border-white/10 bg-white/10 px-3 py-2">
                    <p className="text-xs uppercase tracking-wide text-slate-300">{item.label}</p>
                    <p className="mt-1 text-sm font-medium text-white">{item.value}</p>
                  </div>
                ))}
              </div>
            </section>

            <section className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm">
              <div className="flex items-center gap-2 text-sm font-semibold text-slate-700">
                <Sparkles size={16} className="text-emerald-600" />
                AI planner
              </div>
              <div className="mt-4 space-y-3 text-sm text-slate-600">
                <p className="rounded-xl bg-emerald-50 p-3 text-emerald-800">
                  “A 3-day coastal escape with a balance of relaxation, local culture, and one adventure activity.”
                </p>
                <div className="flex items-start gap-2 rounded-xl border border-slate-200 p-3">
                  <CheckCircle2 size={16} className="mt-0.5 text-emerald-600" />
                  <span>Best fit: beach mornings, food stops, and sunset experiences.</span>
                </div>
                <div className="flex items-start gap-2 rounded-xl border border-slate-200 p-3">
                  <CheckCircle2 size={16} className="mt-0.5 text-emerald-600" />
                  <span>Suggested budget: $250–$420 depending on lodging and transport.</span>
                </div>
              </div>
            </section>
          </aside>
        </div>

        <section className="rounded-[1.75rem] border-t border-slate-200 p-6 shadow-sm sm:p-8">
          <div className="flex items-center justify-between gap-3">
            <div>
              <h2 className="text-xl font-semibold text-white">Recommendedations</h2>
              <p className="mt-1 text-sm text-slate-200">A few standout options that match your travel style.</p>
            </div>
            <Button href="/experiences" variant="secondary" className="hidden sm:inline-flex">
              Browse all
            </Button>
          </div>
          <div className="mt-6 grid gap-6 md:grid-cols-2 xl:grid-cols-3">
            {experiences.slice(0, 3).map((experience) => (
              <ExperienceCard key={experience.id} experience={experience} />
            ))}
          </div>
        </section>

        <section className="grid gap-6 lg:grid-cols-[0.95fr_1.05fr]">
          <div className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm sm:p-8">
            <div className="flex items-center gap-2 text-sm font-semibold text-slate-700">
              <CalendarDays size={16} className="text-emerald-600" />
              Upcoming events
            </div>
            <div className="mt-5 space-y-4">
              {events.slice(0, 3).map((event) => (
                <div key={event.id} className="rounded-2xl border border-slate-200 bg-slate-50 p-4">
                  <div className="flex items-start justify-between gap-3">
                    <div>
                      <h3 className="font-semibold text-slate-950">{event.title}</h3>
                      <p className="mt-1 flex items-center gap-2 text-sm text-slate-600">
                        <MapPin size={14} />
                        {event.location}
                      </p>
                    </div>
                    <span className="rounded-full bg-white px-3 py-1 text-xs font-semibold text-slate-700">
                      {event.date}
                    </span>
                  </div>
                  <p className="mt-3 text-sm text-slate-600">{event.description}</p>
                </div>
              ))}
            </div>
          </div>

          <div className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm sm:p-8">
            <div className="flex items-center gap-2 text-sm font-semibold text-slate-700">
              <Clock3 size={16} className="text-emerald-600" />
              Suggested itinerary
            </div>
            <div className="mt-5 space-y-4">
              {itinerary.map((item) => (
                <div key={item.day} className="rounded-2xl border border-slate-200 bg-slate-50 p-4">
                  <div className="flex items-center gap-2">
                    <span className="rounded-full bg-emerald-600 px-2.5 py-1 text-xs font-semibold text-white">
                      {item.day}
                    </span>
                    <h3 className="font-semibold text-slate-950">{item.title}</h3>
                  </div>
                  <p className="mt-2 text-sm text-slate-600">{item.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>
      </div><br />
      <Footer />
    </div>

  );
}
