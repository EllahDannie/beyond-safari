import { Compass } from "lucide-react";

export function Footer() {
  return (
    <footer className="border-t border-slate-200 bg-white">
      <div className="mx-auto grid max-w-7xl gap-8 px-4 py-10 sm:px-6 md:grid-cols-4 lg:px-8">
        <div className="md:col-span-2">
          <div className="flex items-center gap-2 font-bold">
            <span className="grid size-9 place-items-center rounded-lg bg-teal-700 text-white">
              <Compass size={20} />
            </span>
            Beyond Safari
          </div>
          <p className="mt-4 max-w-md text-sm leading-6 text-slate-600">
            A marketplace for verified experiences, local businesses, and travelers looking for trips with context.
          </p>
        </div>
        <div>
          <h3 className="text-sm font-semibold">Company</h3>
          <div className="mt-3 grid gap-2 text-sm text-slate-600">
            <a href="#">About</a>
            <a href="#">Trust</a>
            <a href="#">Careers</a>
          </div>
        </div>
        <div>
          <h3 className="text-sm font-semibold">Support</h3>
          <div className="mt-3 grid gap-2 text-sm text-slate-600">
            <a href="#">Help center</a>
            <a href="#">Cancellation</a>
            <a href="#">Contact</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
