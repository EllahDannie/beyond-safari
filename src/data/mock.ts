import type { Booking, Experience } from "@/types";

export const categories = [
  { name: "Wildlife", count: 42 },
  { name: "Culture", count: 31 },
  { name: "Coast", count: 18 },
  { name: "Adventure", count: 27 },
  { name: "Food", count: 14 },
];

export const experiences: Experience[] = [
  {
    id: "maasai-mara-sunrise",
    title: "Maasai Mara Sunrise Game Drive",
    location: "Narok County, Kenya",
    category: "Wildlife",
    price: 145,
    rating: 4.9,
    reviews: 184,
    duration: "6 hours",
    image:
      "https://images.unsplash.com/photo-1547970810-dc1eac37d174?auto=format&fit=crop&w=1200&q=80",
    tags: ["Big Five", "Photography", "Local guide"],
    description:
      "Track the early movement of lions, elephants, and plains wildlife with a certified Mara guide, picnic breakfast included.",
    host: "Mara Plains Collective",
    capacity: 6,
  },
  {
    id: "lamu-swahili-heritage",
    title: "Lamu Swahili Heritage Walk",
    location: "Lamu Old Town, Kenya",
    category: "Culture",
    price: 48,
    rating: 4.8,
    reviews: 96,
    duration: "3 hours",
    image:
      "https://images.unsplash.com/photo-1548013146-72479768bada?auto=format&fit=crop&w=1200&q=80",
    tags: ["UNESCO", "Architecture", "Food tasting"],
    description:
      "Explore carved doors, seafront markets, old mosques, and family-run food stops through the living history of Lamu.",
    host: "Lamu Story Guides",
    capacity: 10,
  },
  {
    id: "amboseli-elephant-hide",
    title: "Amboseli Elephant Hideout",
    location: "Kajiado County, Kenya",
    category: "Wildlife",
    price: 210,
    rating: 4.95,
    reviews: 121,
    duration: "Full day",
    image:
      "https://images.unsplash.com/photo-1516426122078-c23e76319801?auto=format&fit=crop&w=1200&q=80",
    tags: ["Elephants", "Kilimanjaro views", "Conservation"],
    description:
      "Spend a day near Amboseli's wetlands learning elephant behavior and conservation practices from field researchers.",
    host: "Savanna Research Camp",
    capacity: 8,
  },
  {
    id: "diani-reef-kayak",
    title: "Diani Reef Kayak and Snorkel",
    location: "Kwale County, Kenya",
    category: "Coast",
    price: 86,
    rating: 4.7,
    reviews: 73,
    duration: "4 hours",
    image:
      "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&w=1200&q=80",
    tags: ["Ocean", "Beginner friendly", "Marine life"],
    description:
      "Paddle calm reef channels, snorkel protected coral gardens, and return for a fresh coastal lunch.",
    host: "Diani Blue Guides",
    capacity: 12,
  },
];

export const bookings: Booking[] = [
  {
    id: "BK-1024",
    experience: "Maasai Mara Sunrise Game Drive",
    date: "2026-08-12",
    guests: 2,
    status: "Confirmed",
    amount: 290,
  },
  {
    id: "BK-1025",
    experience: "Lamu Swahili Heritage Walk",
    date: "2026-09-03",
    guests: 4,
    status: "Pending",
    amount: 192,
  },
  {
    id: "BK-1019",
    experience: "Diani Reef Kayak and Snorkel",
    date: "2026-06-18",
    guests: 1,
    status: "Cancelled",
    amount: 86,
  },
];
