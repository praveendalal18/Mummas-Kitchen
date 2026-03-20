import generationsImg from "@assets/WhatsApp_Image_2026-03-03_at_10.20.15_AM_(1)_1772531259277.jpeg";
import turmericJarImg from "@assets/WhatsApp_Image_2026-03-03_at_10.20.14_AM_1772531259280.jpeg";

export function StorySection() {
  return (
    <section id="story" className="py-16 sm:py-24 bg-[#3D2B1F] relative" data-testid="section-story" aria-label="Our Story and Heritage">
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-amber-600/30 to-transparent" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <div className="grid md:grid-cols-2 gap-10 md:gap-16 items-center">

          <div className="relative order-2 md:order-1">
            <div className="grid grid-cols-2 gap-3 sm:gap-4">
              <img
                src={generationsImg}
                alt="Generations of Flavor - Traditional Goan pickle making"
                className="w-full aspect-[3/4] object-cover shadow-lg border-2 border-amber-600/20"
                loading="lazy"
              />
              <img
                src={turmericJarImg}
                alt="Traditional ceramic jar with turmeric and pickle"
                className="w-full aspect-[3/4] object-cover shadow-lg border-2 border-amber-600/20 mt-8"
                loading="lazy"
              />
            </div>
          </div>

          <div className="order-1 md:order-2">
            <p className="text-[11px] font-bold tracking-[0.3em] uppercase text-amber-400 mb-4">Our Heritage</p>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-serif mb-6 text-white">
              Generations of <br className="hidden md:block" /> Love in Every Jar
            </h2>

            <div className="w-16 h-0.5 bg-amber-500 mb-8" />

            <div className="space-y-5 text-amber-200/70 leading-relaxed">
              <p>
                Started in 2021, Mumma's Kitchen was born out of a desire to preserve and share the authentic,
                time-honored pickle recipes of Goa. What began in our humble family kitchen has now reached
                homes across the state.
              </p>
              <p>
                We believe that true flavor cannot be rushed. That's why we hand-select the freshest raw mangoes,
                bimblis, and spices from local Goan markets. Every batch is naturally fermented and preserved
                using traditional techniques passed down through generations.
              </p>
              <p className="font-medium text-amber-100/90 italic font-serif text-lg border-l-4 border-amber-500 pl-4">
                "No artificial colors. No chemical preservatives. Just pure, unadulterated Goan goodness
                that transports you back to your grandmother's dining table."
              </p>
            </div>

            <div className="grid grid-cols-3 gap-4 sm:gap-6 mt-10 pt-8 border-t border-amber-600/20">
              <div className="text-center">
                <span className="font-serif text-2xl sm:text-3xl text-amber-400 font-bold">5+</span>
                <p className="text-xs text-amber-200/50 mt-1 tracking-wide uppercase">Years</p>
              </div>
              <div className="text-center">
                <span className="font-serif text-2xl sm:text-3xl text-amber-400 font-bold">9</span>
                <p className="text-xs text-amber-200/50 mt-1 tracking-wide uppercase">Varieties</p>
              </div>
              <div className="text-center">
                <span className="font-serif text-2xl sm:text-3xl text-amber-400 font-bold">100%</span>
                <p className="text-xs text-amber-200/50 mt-1 tracking-wide uppercase">Natural</p>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
