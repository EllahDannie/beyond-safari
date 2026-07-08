

export function Footer() {
  return (
    <footer className="border-t border-slate-200 bg-green-950 text-slate-100">
      <div className="mx-auto grid max-w-7xl gap-8 px-4 py-10 sm:px-6 md:grid-cols-4 lg:px-8">
        <div className="md:row-span-3">
          <div className="flex items-center gap-2 font-bold">
            <img src="/logos/logo.jpg" alt="Beyond Safari Logo" className="h-10 w-10 rounded-lg" />
          </div>
        </div>
        <div>
          <h3 className="text-sm font-semibold">Company</h3>
          <div className="mt-3 grid gap-2 text-sm text-shadow-slate-950">
            <a href="#">Home</a>
            <a href="/about">About</a>
            <a href="/explore">Explore</a>
            <a href="/reviews">Reviews</a>
          </div>
        </div>
        <div>
          <h3 className="text-sm font-semibold">Support</h3>
          <div className="mt-3 grid gap-2 text-sm text-shadow-slate-950">
            <a href="#">Help</a>
            <a href="#">Terms</a>
          </div>
        </div>
        <div>
          <h3 className="text-sm font-semibold">Resources</h3>
          <div className="mt-3 grid gap-2 text-sm text-shadow-slate-950">
            <a href="#">FAQs</a>
            <a href="/contact">Contact</a>
          </div>
        </div>        
      </div>
      <div className="border-t border-slate-200 bg-green-950 text-slate-100">
        <div className="mx-auto max-w-7xl px-4 py-6 sm:px-6 lg:px-8">
          <p className="text-center text-sm text-shadow-slate-950">
            &copy; {new Date().getFullYear()} Beyond Safari. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}

