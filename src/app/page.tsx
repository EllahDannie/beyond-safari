import Image from "next/image";
import { Button } from "@/components/ui/button";

export default function Home() {
  return (
    <div className="min-h-screen">
      
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
          <div className="absolute inset-0 from-slate-950/75 via-slate-950/35 to-transparent" />
          <div className="relative mx-auto flex min-h-[calc(100vh-4rem)] max-w-7xl items-center px-4 py-16 sm:px-6 lg:px-8">
            <div className="max-w-2xl text-white">
              <p className="mb-4 inline-flex rounded-lg bg-white/15 px-3 py-1 text-sm font-semibold backdrop-blur">
                Verified local experiences across East Africa
              </p>
              <h1 className="text-5xl font-bold leading-tight sm:text-6xl">Beyond Safari: <span className="text-shadow-amber-800">Discover Africa</span></h1>
              <p className="mt-5 max-w-xl text-lg leading-8 text-stone-100">
                Book wildlife drives, coastal escapes, cultural walks, and host-led adventures with transparent
                pricing and trusted local operators.
              </p>
              
              <div className="text-slate-100 gap-6">
                <Button className="mt-8 w-fit" href="/signup" variant="primary">Register Now</Button>
                <Button className="mt-8 w-fit" href="/login" variant="primary">Log In</Button>
                
              </div>
            </div>
          </div>
        </section>

      </main>
  
    </div>
  );
}
