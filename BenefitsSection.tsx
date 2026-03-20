import { Leaf, HeartHandshake, ShieldCheck, Sun } from "lucide-react";
import menuImg from "@assets/WhatsApp_Image_2026-03-03_at_10.19.05_AM_1772531259282.jpeg";

export function BenefitsSection() {
  const benefits = [
    {
      icon: <Leaf className="w-7 h-7" />,
      title: "100% Natural",
      description: "No artificial colors, flavors, or chemical preservatives. Pure nature in every bite."
    },
    {
      icon: <HeartHandshake className="w-7 h-7" />,
      title: "Handcrafted",
      description: "Made in small batches to ensure premium quality and authentic taste."
    },
    {
      icon: <ShieldCheck className="w-7 h-7" />,
      title: "Premium Spices",
      description: "Sourced locally from Goan markets for deep, rich traditional flavors."
    },
    {
      icon: <Sun className="w-7 h-7" />,
      title: "Sun-Dried",
      description: "Prepared using traditional sun-drying methods for perfect texture and preservation."
    }
  ];

  return (
    <section id="benefits" className="py-16 sm:py-24 bg-[#2D1F15] relative" data-testid="section-benefits" aria-label="Why Choose Mumma's Kitchen">
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-amber-600/30 to-transparent" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <div className="grid lg:grid-cols-2 gap-10 lg:gap-16 items-center">
          <div>
            <p className="text-[11px] font-bold tracking-[0.3em] uppercase text-amber-400 mb-4">Why Choose Us</p>
            <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl text-white mb-4">
              The Mumma's Kitchen Promise
            </h2>
            <div className="w-16 h-0.5 bg-amber-500 mb-10" />

            <div className="grid sm:grid-cols-2 gap-4 sm:gap-6">
              {benefits.map((benefit, index) => (
                <div
                  key={index}
                  data-testid={`benefit-card-${index}`}
                  className="p-5 sm:p-6 border border-amber-600/20 bg-amber-900/20"
                >
                  <div className="w-12 h-12 bg-amber-600/20 text-amber-400 flex items-center justify-center mb-4">
                    {benefit.icon}
                  </div>
                  <h3 className="font-serif text-lg font-medium text-white mb-2">
                    {benefit.title}
                  </h3>
                  <p className="text-sm text-amber-200/60 leading-relaxed">
                    {benefit.description}
                  </p>
                </div>
              ))}
            </div>
          </div>

          <div className="relative">
            <img
              src={menuImg}
              alt="Mumma's Kitchen full menu card"
              className="w-full shadow-2xl border-4 border-amber-600/10"
              loading="lazy"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
