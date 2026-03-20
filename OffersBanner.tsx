import { useQuery } from "@tanstack/react-query";
import { Tag } from "lucide-react";
import type { Offer } from "@shared/schema";

export function OffersBanner() {
  const { data: offers } = useQuery<Offer[]>({
    queryKey: ["/api/offers"],
  });

  if (!offers || offers.length === 0) return null;

  return (
    <section className="bg-amber-600 text-white py-3 sm:py-4 relative overflow-hidden" data-testid="section-offers">
      <div className="absolute inset-0 bg-gradient-to-r from-amber-700/50 via-transparent to-amber-700/50" />
      <div className="max-w-7xl mx-auto px-4 sm:px-6 relative z-10">
        <div className="flex flex-col sm:flex-row items-center justify-center gap-3 sm:gap-6 text-center">
          {offers.map((offer) => (
            <div key={offer.id} className="flex items-center gap-2" data-testid={`offer-banner-${offer.id}`}>
              <Tag className="h-4 w-4 flex-shrink-0" />
              <span className="font-semibold text-sm">{offer.title}</span>
              <span className="text-amber-100/80 text-xs hidden sm:inline">- {offer.description}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
