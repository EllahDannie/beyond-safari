import { BarChart3, CalendarClock, CircleDollarSign, Plus, Star } from "lucide-react";
import { Button } from "@/components/button";
import { FormField } from "@/components/form-field";
import { Navbar } from "@/components/navbar";
import { StatCard } from "@/components/stat-card";
import { bookings, experiences } from "@/data/mock";

export default function BusinessDashboardPage() {
  return (
    <div className="min-h-screen bg-stone-50">
      <Navbar />
      <main className="mx-auto max-w-7xl px-4 py-8 sm:px-6 lg:px-8">
        <div className="flex flex-wrap items-center justify-between gap-4">
          <div>
            <p className="text-sm font-semibold text-teal-700">Business dashboard</p>
            <h1 className="mt-1 text-3xl font-bold">Host operations</h1>
          </div>
          <Button>
            <Plus size={18} />
            New experience
          </Button>
        </div>
        <div className="mt-8 grid gap-4 md:grid-cols-4">
          <StatCard label="Revenue" value="$8,420" detail="Up 12% this month" icon={<CircleDollarSign size={21} />} />
          <StatCard label="Bookings" value="64" detail="18 pending action" icon={<CalendarClock size={21} />} />
          <StatCard label="Rating" value="4.86" detail="From 312 reviews" icon={<Star size={21} />} />
          <StatCard label="Conversion" value="7.4%" detail="Listing to booking" icon={<BarChart3 size={21} />} />
        </div>
        <section className="mt-8 grid gap-6 lg:grid-cols-[0.9fr_1.1fr]">
          <div className="rounded-lg border border-slate-200 bg-white p-5 shadow-sm">
            <h2 className="text-xl font-semibold">Create experience</h2>
            <form className="mt-5 grid gap-4">
              <FormField label="Title" placeholder="Experience title" />
              <FormField label="Location" placeholder="County or city" />
              <div className="grid gap-4 sm:grid-cols-2">
                <FormField label="Price" type="number" placeholder="120" />
                <FormField label="Capacity" type="number" placeholder="8" />
              </div>
              <label className="grid gap-2 text-sm font-medium text-slate-700">
                Description
                <textarea
                  className="min-h-28 rounded-lg border border-slate-300 bg-white px-3 py-2 text-slate-950"
                  placeholder="Describe the experience"
                />
              </label>
              <Button>Submit for approval</Button>
            </form>
          </div>
          <div className="rounded-lg border border-slate-200 bg-white p-5 shadow-sm">
            <h2 className="text-xl font-semibold">Booking management</h2>
            <div className="mt-4 grid gap-3">
              {bookings.map((booking) => (
                <div
                  key={booking.id}
                  className="flex flex-wrap items-center justify-between gap-3 rounded-lg border border-slate-200 p-4"
                >
                  <div>
                    <p className="font-semibold">{booking.experience}</p>
                    <p className="mt-1 text-sm text-slate-600">
                      {booking.date} · {booking.guests} guests · {booking.id}
                    </p>
                  </div>
                  <div className="flex gap-2">
                    <Button variant="secondary">Message</Button>
                    <Button>Manage</Button>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
        <section className="mt-8 rounded-lg border border-slate-200 bg-white p-5 shadow-sm">
          <h2 className="text-xl font-semibold">Analytics</h2>
          <div className="mt-5 grid gap-4 md:grid-cols-4">
            {experiences.map((experience) => (
              <div key={experience.id} className="rounded-lg bg-stone-50 p-4">
                <p className="text-sm font-medium text-slate-500">{experience.title}</p>
                <p className="mt-3 text-2xl font-bold">{experience.reviews}</p>
                <p className="text-sm text-slate-600">reviews · {experience.rating} rating</p>
              </div>
            ))}
          </div>
        </section>
      </main>
    </div>
  );
}
