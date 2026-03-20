import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import heroJarsImg from "@assets/WhatsApp_Image_2026-03-03_at_10.20.14_AM_(1)_1772531259279.jpeg";
import spicesBgImg from "@assets/generated_images/goan_spices_bg.png";

export function HeroSection() {
  return (
    <section className="relative min-h-[100dvh] flex items-center pt-16 sm:pt-20 overflow-hidden bg-[#3D2B1F]" data-testid="section-hero" aria-label="Hero - Authentic Homemade Goan Pickles">
      <div className="absolute inset-0">
        <img
          src={spicesBgImg}
          alt=""
          className="w-full h-full object-cover opacity-40"
          aria-hidden="true"
        />
      </div>
      <div className="absolute inset-0 bg-gradient-to-br from-[#3D2B1F]/70 via-[#4A3228]/60 to-[#2D1F15]/75" />
      <div className="absolute top-0 right-0 w-[400px] sm:w-[600px] h-[400px] sm:h-[600px] bg-amber-900/20 rounded-full blur-[120px]" />
      <div className="absolute bottom-0 left-0 w-[300px] sm:w-[400px] h-[300px] sm:h-[400px] bg-yellow-900/15 rounded-full blur-[100px]" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 grid lg:grid-cols-2 gap-8 lg:gap-12 items-center relative z-10 py-8 sm:py-12">
        <div className="flex flex-col items-start gap-4 sm:gap-6 max-w-2xl">
          <div className="inline-flex items-center gap-2 px-3 sm:px-4 py-1.5 border border-amber-600/40 text-amber-300 text-xs sm:text-sm font-medium tracking-[0.2em] uppercase">
            <span className="w-2 h-2 rounded-full bg-amber-400 animate-pulse" />
            Handcrafted Since 2021
          </div>

          <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold leading-[1.1] text-white">
            Authentic <br />
            <span className="text-amber-400 italic font-serif">Homemade</span> <br />
            Goan Pickles
          </h1>

          <p className="text-base sm:text-lg text-amber-200/70 leading-relaxed max-w-lg">
            Taste the tradition of Goa with handcrafted spicy & sweet pickles made with generations of love.
            No preservatives, no shortcuts -- just pure Goan goodness delivered to your doorstep.
          </p>

          <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 mt-2 sm:mt-4 w-full sm:w-auto">
            <Button size="lg" className="bg-amber-600 hover:bg-amber-700 text-amber-50 px-6 sm:px-8 text-base h-12 sm:h-14 border border-amber-500/30 w-full sm:w-auto" asChild data-testid="button-view-menu">
              <a href="#products">
                View Our Menu <ArrowRight className="ml-2 w-5 h-5" />
              </a>
            </Button>
            <Button size="lg" variant="outline" className="border-amber-400/30 text-amber-200 hover:bg-amber-900/30 px-6 sm:px-8 text-base h-12 sm:h-14 w-full sm:w-auto" asChild data-testid="button-our-story">
              <a href="#story">Our Story</a>
            </Button>
          </div>
        </div>

        <div className="relative mx-auto w-full max-w-sm sm:max-w-md lg:max-w-none">
          <div className="aspect-[4/5] overflow-hidden shadow-2xl relative border-4 border-amber-700/30">
            <img
              src={heroJarsImg}
              alt="Mumma's Kitchen branded pickle jars"
              className="object-cover w-full h-full hover:scale-105 transition-transform duration-700"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent" />
          </div>

          <div className="absolute -bottom-4 -left-2 sm:-bottom-6 sm:-left-6 bg-[#3D2B1F] p-3 sm:p-4 border-2 border-amber-600/30 shadow-xl flex items-center gap-3 sm:gap-4">
            <div className="w-10 h-10 sm:w-12 sm:h-12 flex items-center justify-center text-amber-400 font-serif text-sm sm:text-lg font-bold border border-amber-600/30">
              100%
            </div>
            <div>
              <p className="font-bold text-xs sm:text-sm text-amber-100">Natural</p>
              <p className="text-[10px] sm:text-xs text-amber-300/60">No Preservatives</p>
            </div>
          </div>
        </div>
      </div>

      <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-amber-600/40 to-transparent" />
    </section>
  );
}
