import { useState } from "react";
import { ArrowUpRight, Loader2 } from "lucide-react";
import { useProducts } from "@/hooks/use-products";
import { Button } from "@/components/ui/button";
import spicyImg from "@assets/WhatsApp_Image_2026-03-03_at_10.20.15_AM_1772531259278.jpeg";
import jarsImg from "@assets/WhatsApp_Image_2026-03-03_at_10.20.14_AM_(1)_1772531259279.jpeg";
import turmericImg from "@assets/WhatsApp_Image_2026-03-03_at_10.20.14_AM_1772531259280.jpeg";
import upiQrImg from "@assets/WhatsApp_Image_2026-03-03_at_2.23.56_PM_1772532302662.jpeg";

type Category = "spicy" | "sweet" | "other";

export function ProductsSection() {
  const [activeCategory, setActiveCategory] = useState<Category>("spicy");
  const { data: products, isLoading, error, refetch } = useProducts();

  const categories: { key: Category; label: string }[] = [
    { key: "spicy", label: "Spicy Pickles" },
    { key: "sweet", label: "Sweet Pickles" },
    { key: "other", label: "Other Items" },
  ];

  const filteredProducts = products?.filter((p) => p.category === activeCategory) || [];

  return (
    <section id="products" className="py-16 sm:py-24 bg-[#5C3A1E] text-amber-50 relative" data-testid="section-products" aria-label="Products Menu and Pricing">
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-amber-600/40 to-transparent" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6">

        <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-4 sm:gap-6 mb-10 sm:mb-16">
          <div>
            <p className="text-[11px] font-bold tracking-[0.3em] uppercase text-amber-400 mb-4">Our Menu</p>
            <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl lg:text-6xl text-white leading-[1.05]">
              Fresh Pickles,<br />Fair Prices
            </h2>
          </div>
          <p className="text-sm sm:text-base text-amber-200/60 max-w-md leading-relaxed">
            All prices are per kilogram. Order on WhatsApp for self-pickup, delivery, or courier across Goa & India.
          </p>
        </div>

        <div className="flex items-center gap-2 sm:gap-3 mb-8 sm:mb-12 flex-wrap">
          {categories.map((cat) => (
            <button
              key={cat.key}
              onClick={() => setActiveCategory(cat.key)}
              data-testid={`button-category-${cat.key}`}
              className={`px-4 sm:px-6 py-2.5 sm:py-3 text-[11px] sm:text-[12px] font-semibold tracking-[0.15em] uppercase transition-all duration-300 border ${
                activeCategory === cat.key
                  ? "bg-amber-600 text-amber-50 border-amber-500"
                  : "bg-transparent text-amber-200 border-amber-600/30 hover:border-amber-400"
              }`}
            >
              {cat.label}
            </button>
          ))}
        </div>

        {isLoading && (
          <div className="flex flex-col items-center justify-center py-20 text-amber-200/60">
            <Loader2 className="w-8 h-8 animate-spin mb-4 text-amber-400" />
            <p>Loading fresh menu...</p>
          </div>
        )}

        {error && (
          <div className="text-center py-12 bg-red-900/20 border border-red-500/30 max-w-xl mx-auto">
            <p className="text-red-300 font-medium">Failed to load products.</p>
            <p className="text-sm text-red-300/60 mt-2">Please try again in a moment.</p>
            <Button
              onClick={() => refetch()}
              className="mt-4 bg-amber-600 hover:bg-amber-700 text-white"
              data-testid="button-retry-products"
            >
              Try Again
            </Button>
          </div>
        )}

        {!isLoading && !error && (
          <div className="border-t border-amber-600/20">
            {filteredProducts.length === 0 ? (
              <div className="text-center py-12 text-amber-200/60">
                <p>No products found in this category yet.</p>
              </div>
            ) : (
              filteredProducts.map((product) => (
                <div
                  key={product.id}
                  data-testid={`product-item-${product.id}`}
                  className="group grid grid-cols-12 gap-2 sm:gap-4 py-5 sm:py-7 border-b border-amber-700/20 items-center hover:bg-amber-900/20 transition-colors duration-300 px-2 -mx-2"
                >
                  <div className="col-span-5 sm:col-span-4 lg:col-span-3">
                    <h3 className="font-serif text-base sm:text-xl lg:text-2xl text-amber-100 group-hover:text-amber-400 transition-colors duration-300">
                      {product.name}
                    </h3>
                  </div>
                  <div className="col-span-4 lg:col-span-5 hidden md:block">
                    <p className="text-sm text-amber-200/50 leading-relaxed">{product.description}</p>
                  </div>
                  <div className="col-span-2 hidden sm:flex">
                    <span
                      data-testid={`stock-badge-${product.id}`}
                      className={`px-2 py-0.5 text-[10px] font-semibold rounded-full whitespace-nowrap ${
                        product.stock === "Out of Stock"
                          ? "bg-red-900/40 text-red-300"
                          : product.stock === "Limited"
                          ? "bg-amber-900/40 text-amber-300"
                          : "bg-green-900/40 text-green-300"
                      }`}
                    >
                      {product.stock || "In Stock"}
                    </span>
                  </div>
                  <div className="col-span-4 sm:col-span-2 text-right">
                    <span className="font-serif text-lg sm:text-xl lg:text-2xl text-amber-100">
                      {"₹"}{product.price}
                    </span>
                    <span className="text-[10px] sm:text-[11px] tracking-wider uppercase text-amber-200/40 ml-1">/kg</span>
                  </div>
                  <div className="col-span-3 sm:col-span-1 flex justify-end">
                    <a
                      href={`https://wa.me/917261930217?text=Hi%2C%20I%20would%20like%20to%20order%20${encodeURIComponent(product.name)}`}
                      target="_blank"
                      rel="noopener noreferrer"
                      data-testid={`button-order-${product.id}`}
                      className={`p-2 border border-amber-600/30 text-amber-300/60 hover:text-amber-400 hover:border-amber-400 transition-colors duration-300 ${
                        product.stock === "Out of Stock" ? "opacity-40 pointer-events-none" : ""
                      }`}
                      aria-label={`Order ${product.name} on WhatsApp`}
                    >
                      <ArrowUpRight className="h-4 w-4" />
                    </a>
                  </div>
                  <div className="col-span-12 md:hidden">
                    <div className="flex items-center gap-2 mt-1">
                      <span
                        className={`sm:hidden px-2 py-0.5 text-[10px] font-semibold rounded-full ${
                          product.stock === "Out of Stock"
                            ? "bg-red-900/40 text-red-300"
                            : product.stock === "Limited"
                            ? "bg-amber-900/40 text-amber-300"
                            : "bg-green-900/40 text-green-300"
                        }`}
                      >
                        {product.stock || "In Stock"}
                      </span>
                      <p className="text-xs sm:text-sm text-amber-200/50">{product.description}</p>
                    </div>
                  </div>
                </div>
              ))
            )}
          </div>
        )}

        <div className="grid grid-cols-2 lg:grid-cols-3 gap-2 sm:gap-3 lg:gap-4 mt-12 sm:mt-16">
          <div className="aspect-[4/5] overflow-hidden col-span-1 border border-amber-700/30">
            <img src={jarsImg} alt="Mumma's Kitchen branded pickle jars" className="w-full h-full object-cover hover:scale-105 transition-transform duration-700" loading="lazy" />
          </div>
          <div className="aspect-[4/5] overflow-hidden col-span-1 border border-amber-700/30">
            <img src={spicyImg} alt="Spicy raw mango pickle pieces" className="w-full h-full object-cover hover:scale-105 transition-transform duration-700" loading="lazy" />
          </div>
          <div className="aspect-[4/5] overflow-hidden col-span-2 lg:col-span-1 border border-amber-700/30">
            <img src={turmericImg} alt="Traditional ceramic jar of pickle with turmeric" className="w-full h-full object-cover hover:scale-105 transition-transform duration-700" loading="lazy" />
          </div>
        </div>

        <div className="mt-12 sm:mt-16 pt-8 sm:pt-10 border-t border-amber-700/20">
          <p className="text-[11px] font-bold tracking-[0.3em] uppercase text-amber-400 mb-6">Delivery Information</p>
          <div className="grid sm:grid-cols-2 gap-x-8 gap-y-2 sm:gap-y-3 max-w-3xl">
            {[
              "Available across Goa and India",
              "Bulk orders to be placed 3\u20134 days prior",
              "Delivery in Panaji for prepaid orders above 1 kg",
              "Courier service available across Goa & India (extra charges apply)",
              "Follow storage guidelines for longer shelf life",
              "Strictly no return, exchange, or refund",
            ].map((info) => (
              <p key={info} className="text-xs sm:text-sm text-amber-200/50 flex items-start gap-3">
                <span className="w-1 h-1 rounded-full bg-amber-400 mt-2 flex-shrink-0" />
                {info}
              </p>
            ))}
          </div>
        </div>

        <div className="mt-12 sm:mt-16 pt-8 sm:pt-10 border-t border-amber-700/20" data-testid="section-payment">
          <p className="text-[11px] font-bold tracking-[0.3em] uppercase text-amber-400 mb-6">Payment Details (UPI)</p>
          <div className="grid sm:grid-cols-2 gap-6 sm:gap-8 max-w-2xl">
            <div className="bg-white rounded-lg p-4 sm:p-5 flex flex-col items-center" data-testid="payment-qr-code">
              <img
                src={upiQrImg}
                alt="Scan to pay via UPI - Veena Talaulikar"
                className="w-full max-w-[200px] sm:max-w-[240px] rounded"
                loading="lazy"
              />
              <p className="text-[11px] text-gray-500 mt-3 tracking-wide">Scan with any UPI app</p>
            </div>
            <div className="flex flex-col justify-center">
              <p className="text-amber-100 font-medium text-base sm:text-lg mb-4">Pay via UPI / Google Pay</p>
              <div className="space-y-3 text-sm text-amber-200/70">
                <p>UPI ID: <span className="text-amber-100 font-medium select-all">veenatalaulikar@okaxis</span></p>
                <div className="w-10 h-px bg-amber-600/30 my-1" />
                <p>Phone: <span className="text-amber-100 font-medium">+91 72619 30217</span></p>
                <p>Phone: <span className="text-amber-100 font-medium">+91 75072 58036</span></p>
              </div>
              <p className="text-xs text-amber-300/40 mt-6 italic">Prepaid orders only for delivery. Cash accepted for self-pickup.</p>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
}
