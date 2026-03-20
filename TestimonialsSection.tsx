import { Star } from "lucide-react";

const testimonials = [
  {
    name: "Priya Naik",
    location: "Panaji, Goa",
    rating: 5,
    text: "The stuffed pickle is absolutely divine! Reminds me of the pickles my grandmother used to make. Authentic Goan taste that you can't find anywhere else.",
  },
  {
    name: "Rohit Desai",
    location: "Mumbai",
    rating: 5,
    text: "Ordered the Raw Mango Pieces and Bimbli pickle -- both were incredible. Fresh, spicy, and full of flavour. Delivery to Mumbai was quick and well-packed.",
  },
  {
    name: "Anita Fernandes",
    location: "Margao, Goa",
    rating: 5,
    text: "Best homemade pickles in Goa! The Lemon Tangy pickle is my family's favourite. We order every month without fail. Truly homemade quality.",
  },
  {
    name: "Suresh Kamat",
    location: "Bangalore",
    rating: 5,
    text: "I'm a Goan living in Bangalore and these pickles are a taste of home. The Mango Jam is out of this world. Thank you Mumma's Kitchen!",
  },
  {
    name: "Deepa Prabhu",
    location: "Ponda, Goa",
    rating: 5,
    text: "The sweet Bimbli pickle is unlike anything I've tasted before. Perfect blend of sweet and tangy. My kids love it with their rice!",
  },
  {
    name: "Vishal Shetty",
    location: "Pune",
    rating: 5,
    text: "Courier delivery was well-packed and arrived fresh. The Water Pickle has that authentic Goan flavour. Already placed my second order!",
  },
];

export function TestimonialsSection() {
  return (
    <section id="testimonials" className="py-16 sm:py-24 bg-[#3D2B1F] relative" data-testid="section-testimonials" aria-label="Customer Testimonials and Reviews">
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-amber-600/30 to-transparent" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <div className="mb-10 sm:mb-16">
          <p className="text-[11px] font-bold tracking-[0.3em] uppercase text-amber-400 mb-4">What Our Customers Say</p>
          <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl lg:text-6xl text-white leading-[1.05] max-w-4xl">
            Loved by Pickle<br />Enthusiasts
          </h2>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
          {testimonials.map((t, i) => (
            <div
              key={i}
              data-testid={`testimonial-card-${i}`}
              className="bg-amber-950/40 border border-amber-700/20 p-5 sm:p-6 rounded-lg flex flex-col"
            >
              <div className="flex gap-1 mb-3">
                {Array.from({ length: t.rating }).map((_, si) => (
                  <Star key={si} className="w-4 h-4 fill-amber-400 text-amber-400" />
                ))}
              </div>
              <p className="text-sm text-amber-200/70 leading-relaxed flex-1 mb-4">"{t.text}"</p>
              <div className="pt-4 border-t border-amber-700/20">
                <p className="text-sm font-semibold text-amber-100">{t.name}</p>
                <p className="text-xs text-amber-300/50 mt-0.5">{t.location}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
