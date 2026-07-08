import Link from "next/link";
import Image from "next/image";
import { Clock, MapPin, Star } from "lucide-react";
import type { Experience } from "@/types";

export function ExperienceCard({ experience }: { experience: Experience }) {
  return (
    <Link
      href={`/experiences/${experience.id}`}
      className="group overflow-hidden rounded-lg border border-slate-200 bg-white shadow-sm transition hover:-translate-y-1 hover:shadow-md"
    >
      <div className="aspect-4/3 overflow-hidden bg-slate-200">
        <Image
          src={experience.image}
          alt={experience.title}
          width={600}
          height={450}
          className="h-full w-full object-cover transition duration-300 group-hover:scale-105"
        />
      </div>
      <div className="p-4">
        <div className="flex items-center justify-between gap-3 text-sm text-slate-600">
          <span className="rounded-md bg-emerald-50 px-2 py-1 font-medium text-emerald-800">
            {experience.category}
          </span>
          <span className="flex items-center gap-1 font-medium text-slate-800">
            <Star size={15} className="fill-amber-400 text-amber-400" />
            {experience.rating}
          </span>
        </div>
        <h3 className="mt-3 line-clamp-2 text-lg font-semibold text-slate-950">{experience.title}</h3>
        <div className="mt-3 grid gap-2 text-sm text-slate-600">
          <span className="flex items-center gap-2">
            <MapPin size={16} />
            {experience.location}
          </span>
          <span className="flex items-center gap-2">
            <Clock size={16} />
            {experience.duration}
          </span>
        </div>
        <div className="mt-4 flex items-end justify-between">
          <p className="text-sm text-slate-500">
            from <span className="text-xl font-bold text-slate-950">${experience.price}</span>
          </p>
          <span className="text-sm font-semibold text-teal-700">View details</span>
        </div>
      </div>
    </Link>
  );
}
