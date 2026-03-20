import { MapPin, Navigation, ExternalLink } from "lucide-react";
import { Button } from "@/components/ui/button";

const FULL_ADDRESS = "No. F-1, Block A, Delux Apartments, next to Kamat Complex, Tonca Caranzalem, Goa 403002";
const GOOGLE_MAPS_QUERY = encodeURIComponent("Delux Apartments, Tonca Caranzalem, Panaji, Goa 403002");
const GOOGLE_MAPS_LINK = `https://www.google.com/maps/search/?api=1&query=${GOOGLE_MAPS_QUERY}`;
const GOOGLE_MAPS_EMBED = `https://www.google.com/maps?q=${GOOGLE_MAPS_QUERY}&output=embed`;

export function DirectionsSection() {
  return (
    <section id="directions" className="py-16 sm:py-24 bg-[#1A1A18] relative" data-testid="section-directions" aria-label="Directions and Location">
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-amber-600/30 to-transparent" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <div className="mb-10 sm:mb-16">
          <p className="text-[11px] font-bold tracking-[0.3em] uppercase text-amber-400 mb-4">Find Us</p>
          <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl lg:text-6xl text-white leading-[1.05] max-w-4xl">
            Visit Our Kitchen
          </h2>
        </div>

        <div className="grid lg:grid-cols-2 gap-8 lg:gap-12">
          <div className="flex flex-col justify-center">
            <div className="flex items-start gap-4 mb-8">
              <div className="w-12 h-12 sm:w-14 sm:h-14 rounded-full bg-amber-600 flex items-center justify-center flex-shrink-0">
                <MapPin className="w-6 h-6 text-white" />
              </div>
              <div>
                <p className="text-xs font-semibold tracking-[0.15em] uppercase text-amber-300/60 mb-2">Our Address</p>
                <p className="text-lg sm:text-xl font-semibold text-white leading-relaxed" data-testid="text-address">
                  {FULL_ADDRESS}
                </p>
              </div>
            </div>

            <div className="flex items-start gap-4 mb-8">
              <div className="w-12 h-12 sm:w-14 sm:h-14 rounded-full bg-amber-900/60 border border-amber-600/30 flex items-center justify-center flex-shrink-0">
                <Navigation className="w-5 h-5 text-amber-400" />
              </div>
              <div>
                <p className="text-xs font-semibold tracking-[0.15em] uppercase text-amber-300/60 mb-2">Landmark</p>
                <p className="text-sm sm:text-base text-amber-200/70 leading-relaxed">
                  Next to Kamat Complex, Tonca-Caranzalem road. Easily accessible from Panaji city centre (5 min drive).
                </p>
              </div>
            </div>

            <a
              href={GOOGLE_MAPS_LINK}
              target="_blank"
              rel="noopener noreferrer"
              data-testid="button-get-directions"
              className="inline-flex"
            >
              <Button className="bg-amber-600 hover:bg-amber-700 text-white px-6 sm:px-8 h-12 text-sm sm:text-base gap-2">
                <ExternalLink className="w-4 h-4" />
                Get Directions on Google Maps
              </Button>
            </a>
          </div>

          <div className="rounded-lg overflow-hidden border border-amber-700/20 h-[300px] sm:h-[400px]" data-testid="map-embed">
            <iframe
              src={GOOGLE_MAPS_EMBED}
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="Mumma's Kitchen Location - Tonca Caranzalem, Goa"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
