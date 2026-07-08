import { CalendarCheck, Heart, MessageSquare, Star, User } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Footer } from "@/components/footer";
import { ExperienceCard } from "@/components/experience-card";
import { Navbar } from "@/components/navbar";
import { StatCard } from "@/components/stat-card";
import { bookings, experiences } from "@/data/mock";

export default function UserDashboardPage() {
  return (
    <div className="min-h-screen bg-stone-50">
      <Navbar profileHref="/user/profile" />
      <main className="mx-auto max-w-7xl px-4 py-8 sm:px-6 lg:px-8">
        <div className="flex flex-wrap items-center justify-between gap-4">
          <div>
            <p className="text-sm font-semibold text-teal-700">Traveler dashboard</p>
            <h1 className="mt-1 text-3xl font-bold">My trips</h1>
          </div>
          <Button>Update profile</Button>
        </div>
        <div className="mt-8 grid gap-4 md:grid-cols-4">
          <StatCard label="Bookings" value="3" detail="2 upcoming trips" icon={<CalendarCheck size={21} />} />
          <StatCard label="Wishlist" value="8" detail="Saved experiences" icon={<Heart size={21} />} />
          <StatCard label="Reviews" value="5" detail="Average rating 4.8" icon={<Star size={21} />} />
          <StatCard label="Messages" value="2" detail="Open host chats" icon={<MessageSquare size={21} />} />
        </div>
        <section className="mt-8 grid gap-6 lg:grid-cols-[1.5fr_0.8fr]">
          <div className="rounded-lg border border-slate-200 bg-white p-5 shadow-sm">
            <h2 className="text-xl font-semibold">Bookings</h2>
            <div className="mt-4 overflow-x-auto">
              <table className="w-full text-left text-sm">
                <thead className="border-b border-slate-200 text-slate-500">
                  <tr>
                    <th className="py-3">ID</th>
                    <th>Experience</th>
                    <th>Date</th>
                    <th>Guests</th>
                    <th>Status</th>
                    <th className="text-right">Amount</th>
                  </tr>
                </thead>
                <tbody>
                  {bookings.map((booking) => (
                    <tr key={booking.id} className="border-b border-slate-100">
                      <td className="py-4 font-semibold">{booking.id}</td>
                      <td>{booking.experience}</td>
                      <td>{booking.date}</td>
                      <td>{booking.guests}</td>
                      <td>
                        <span className="rounded-md bg-emerald-50 px-2 py-1 font-medium text-emerald-800">
                          {booking.status}
                        </span>
                      </td>
                      <td className="text-right font-semibold">${booking.amount}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
          <aside className="rounded-lg border border-slate-200 bg-white p-5 shadow-sm">
            <User className="text-teal-700" size={28} />
            <h2 className="mt-4 text-xl font-semibold">Profile</h2>
            <div className="mt-4 grid gap-3 text-sm text-slate-600">
              <p>
                <span className="font-semibold text-slate-900">Name:</span> Mika Traveler
              </p>
              <p>
                <span className="font-semibold text-slate-900">Email:</span> mika@example.com
              </p>
              <p>
                <span className="font-semibold text-slate-900">Preference:</span> Food and culture
              </p>
            </div>
          </aside>
        </section>
        <section className="mt-8">
          <h2 className="text-xl font-semibold">Wishlist</h2>
          <div className="mt-4 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {experiences.slice(0, 3).map((experience) => (
              <ExperienceCard key={experience.id} experience={experience} />
            ))}
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}
