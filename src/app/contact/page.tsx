import { FormField } from "@/components/form-field";
import { Button } from "@/components/ui/button";

export default function ContactPage() {
  return (
    <div className="min-h-screen bg-slate-50 px-4 py-8 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-6xl">
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-green-600">Contact Us</h1>
          <p className="mt-2 text-lg text-slate-600">
            Have questions or feedback? We would love to hear from you!
          </p>
        </div>

        <div className="grid gap-6 rounded-3xl border border-slate-200 bg-white p-6 shadow-sm lg:grid-cols-[1.1fr_0.9fr] lg:p-8">
          <div className="rounded-2xl border border-slate-200 bg-slate-50 p-6">
            <h2 className="text-xl font-semibold text-slate-900">Send us a message</h2>
            <div className="mt-6 grid gap-4">
              <FormField label="Name" placeholder="Enter your name" />
              <FormField label="Email" placeholder="Enter your email" />

              <label className="grid gap-2 text-sm font-medium text-slate-700">
                Topic
                <select className="min-h-11 rounded-lg border border-slate-300 bg-white px-3 text-slate-950">
                  <option>Booking help</option>
                  <option>General inquiry</option>
                  <option>Support</option>
                  <option>Partnership</option>
                </select>
              </label>

              <label className="grid gap-2 text-sm font-medium text-slate-700">
                Message
                <textarea
                  placeholder="Tell us how we can help..."
                  className="min-h-32 rounded-lg border border-slate-300 bg-white px-3 py-3 text-slate-950 placeholder:text-slate-400"
                />
              </label>

              <Button>Send Message</Button>
            </div>
          </div>

          <div className="rounded-2xl bg-emerald-950 p-6 text-white">
            <h2 className="text-xl font-semibold">Contact Information</h2>
            <p className="mt-2 text-sm leading-6 text-emerald-50">
              Feel free to reach out to us at any time.
            </p>
            <ul className="mt-6 space-y-3 text-sm text-emerald-50">
              <li>Email: contact@beyondsafari.com</li>
              <li>Phone: (123) 456-7890</li>
              <li>Twitter: @BeyondSafari</li>
              <li>Facebook: facebook.com/BeyondSafari</li>
              <li>Instagram: @BeyondSafari</li>
              <li>Address: 123 Safari Lane, Adventure City, Country</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}
