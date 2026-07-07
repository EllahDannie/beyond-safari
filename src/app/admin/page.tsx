import { AlertTriangle, CheckCircle2, FileText, Shield, Users } from "lucide-react";
import { Button } from "@/components/button";
import { Navbar } from "@/components/navbar";
import { StatCard } from "@/components/stat-card";
import { experiences } from "@/data/mock";

export default function AdminDashboardPage() {
  return (
    <div className="min-h-screen bg-stone-50">
      <Navbar />
      <main className="mx-auto max-w-7xl px-4 py-8 sm:px-6 lg:px-8">
        <div>
          <p className="text-sm font-semibold text-teal-700">Admin dashboard</p>
          <h1 className="mt-1 text-3xl font-bold">Platform oversight</h1>
        </div>
        <div className="mt-8 grid gap-4 md:grid-cols-4">
          <StatCard label="Users" value="12,480" detail="283 new this week" icon={<Users size={21} />} />
          <StatCard label="Approvals" value="17" detail="Listings awaiting review" icon={<CheckCircle2 size={21} />} />
          <StatCard label="Reports" value="6" detail="Open moderation cases" icon={<AlertTriangle size={21} />} />
          <StatCard label="Roles" value="4" detail="Traveler, business, admin, analyst" icon={<Shield size={21} />} />
        </div>
        <section className="mt-8 grid gap-6 lg:grid-cols-[1.1fr_0.9fr]">
          <div className="rounded-lg border border-slate-200 bg-white p-5 shadow-sm">
            <h2 className="text-xl font-semibold">Listing approval</h2>
            <div className="mt-4 grid gap-3">
              {experiences.map((experience) => (
                <div key={experience.id} className="grid gap-4 rounded-lg border border-slate-200 p-4 sm:grid-cols-[1fr_auto]">
                  <div>
                    <p className="font-semibold">{experience.title}</p>
                    <p className="mt-1 text-sm text-slate-600">
                      {experience.host} · {experience.location} · ${experience.price}
                    </p>
                  </div>
                  <div className="flex gap-2">
                    <Button variant="secondary">Reject</Button>
                    <Button>Approve</Button>
                  </div>
                </div>
              ))}
            </div>
          </div>
          <div className="rounded-lg border border-slate-200 bg-white p-5 shadow-sm">
            <FileText className="text-teal-700" size={28} />
            <h2 className="mt-4 text-xl font-semibold">Reports</h2>
            <div className="mt-4 grid gap-3 text-sm">
              {["Payment callback mismatch", "Duplicate business profile", "Review flagged for abuse"].map((report) => (
                <div key={report} className="rounded-lg bg-stone-50 p-4">
                  <p className="font-semibold">{report}</p>
                  <p className="mt-1 text-slate-600">Assigned to analyst queue</p>
                </div>
              ))}
            </div>
          </div>
        </section>
        <section className="mt-8 rounded-lg border border-slate-200 bg-white p-5 shadow-sm">
          <h2 className="text-xl font-semibold">User management</h2>
          <div className="mt-4 overflow-x-auto">
            <table className="w-full min-w-[640px] text-left text-sm">
              <thead className="border-b border-slate-200 text-slate-500">
                <tr>
                  <th className="py-3">Name</th>
                  <th>Email</th>
                  <th>Role</th>
                  <th>Status</th>
                  <th className="text-right">Action</th>
                </tr>
              </thead>
              <tbody>
                {[
                  ["Amina Traveler", "amina@example.com", "Traveler", "Active"],
                  ["Mara Plains Collective", "host@mara.co.ke", "Business", "Verified"],
                  ["Njeri Admin", "admin@beyondsafari.app", "Admin", "Active"],
                ].map(([name, email, role, status]) => (
                  <tr key={email} className="border-b border-slate-100">
                    <td className="py-4 font-semibold">{name}</td>
                    <td>{email}</td>
                    <td>{role}</td>
                    <td>{status}</td>
                    <td className="text-right">
                      <Button variant="secondary">Edit</Button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </section>
      </main>
    </div>
  );
}
