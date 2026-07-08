import Image from "next/image";
import { Footer } from "@/components/footer";
import { Navbar } from "@/components/navbar";

export default function About() {
  return (
    <div className="min-h-screen">
      <Navbar />
      <main>
        <section className="relative overflow-hidden bg-green-950 text-white">
          <div className="mx-auto flex min-h-[calc(100vh-4rem)] max-w-7xl flex-col items-center gap-8 px-4 py-16 sm:px-6 lg:flex-row lg:items-center lg:px-8">
            <div className="w-full max-w-2xl lg:w-1/2">
              <h4 className="text-sm font-semibold uppercase tracking-[0.3em] text-emerald-300">About Us</h4>
              <h1 className="mt-4 text-4xl font-bold leading-tight sm:text-5xl">
                Discover Africa: <span className="text-green-600">BEYOND SAFARI</span>
              </h1>
              <p className="mt-6 text-lg leading-8 text-emerald-50/90">
                Welcome to Beyond Safari, your gateway to exploring the diverse and captivating landscapes of Africa.
                Our platform is designed to connect you with unique experiences that go beyond the typical safari adventure.
                <br />
                The platform provides an ecosystem where users can discover, book, and share authentic experiences across the continent.
                From wildlife safaris in the Maasai Mara to cultural tours in Lamu, Beyond Safari offers a curated selection
                of activities that cater to every traveler interests. <br />
                Our mission is to promote sustainable tourism and support local communities by showcasing the rich cultural
                heritage and natural beauty of Africa. We collaborate with local guides, conservationists, and businesses to
                ensure that every experience is not only memorable but also responsible and impactful.
              </p>
            </div>

            <div className="w-full lg:w-1/2">
              <Image
                src="/images/14 waterfalls thika.jfif"
                alt="About Us"
                width={800}
                height={600}
                className="h-auto w-full rounded-2xl object-cover shadow-2xl"
              />
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}


