export type Experience = {
  id: string;
  title: string;
  location: string;
  category: string;
  price: number;
  rating: number;
  reviews: number;
  duration: string;
  image: string;
  tags: string[];
  description: string;
  host: string;
  capacity: number;
};

export type Booking = {
  id: string;
  experience: string;
  date: string;
  guests: number;
  status: "Confirmed" | "Pending" | "Cancelled";
  amount: number;
};
