import { useEffect } from "react";
import { Link } from "wouter";
import { ArrowRight, ArrowLeft, Calendar, Clock } from "lucide-react";
import { Navigation } from "@/components/Navigation";
import { Footer } from "@/components/Footer";
import { blogPosts } from "@/lib/blogData";
import { updatePageMeta, restoreDefaultMeta } from "@/lib/seoUtils";

export default function Blog() {
  useEffect(() => {
    updatePageMeta({
      title: "Blog - Mumma's Kitchen | Authentic Goan Pickle Recipes & Tips",
      description: "Read our blog for Goan pickle recipes, gifting ideas, health benefits of homemade pickles, and traditional Goan cuisine tips from Mumma's Kitchen, Panaji.",
      ogTitle: "Blog - Mumma's Kitchen | Goan Pickle Recipes & Tips",
      ogDescription: "Goan pickle recipes, gifting ideas, health benefits of homemade pickles, and traditional cuisine tips from Mumma's Kitchen in Panaji, Goa.",
      ogUrl: "https://mummas-kitchen.replit.app/blog",
    });
    window.scrollTo(0, 0);
    return () => restoreDefaultMeta();
  }, []);

  return (
    <main className="min-h-screen bg-[#2D1F15]">
      <Navigation />

      <section className="pt-40 sm:pt-48 pb-16 sm:pb-24" aria-label="Blog Articles">
        <div className="max-w-4xl mx-auto px-4 sm:px-6">
          <a href="/" className="inline-flex items-center gap-2 text-sm text-amber-400 hover:text-amber-300 transition-colors mb-8" data-testid="link-blog-back-home">
            <ArrowLeft className="w-4 h-4" />
            Back to Home
          </a>

          <div className="mb-12 sm:mb-16">
            <p className="text-[11px] font-bold tracking-[0.3em] uppercase text-amber-400 mb-4">From Our Kitchen</p>
            <h1 className="font-serif text-3xl sm:text-4xl md:text-5xl text-white leading-[1.1]">
              Blog
            </h1>
            <p className="text-amber-200/60 mt-4 max-w-lg">
              Recipes, tips, and stories about authentic Goan pickles and cuisine.
            </p>
          </div>

          <div className="flex flex-col gap-6 sm:gap-8">
            {blogPosts.map((post) => (
              <Link
                key={post.slug}
                href={`/blog/${post.slug}`}
                data-testid={`blog-card-${post.slug}`}
              >
                <article className="group bg-amber-950/40 border border-amber-700/20 p-6 sm:p-8 rounded-lg hover:border-amber-600/40 transition-all duration-300 cursor-pointer">
                  <div className="flex items-center gap-4 text-xs text-amber-300/50 mb-3">
                    <span className="flex items-center gap-1.5">
                      <Calendar className="w-3.5 h-3.5" />
                      {new Date(post.date).toLocaleDateString("en-IN", { year: "numeric", month: "long", day: "numeric" })}
                    </span>
                    <span className="flex items-center gap-1.5">
                      <Clock className="w-3.5 h-3.5" />
                      {post.readTime}
                    </span>
                  </div>
                  <h2 className="font-serif text-xl sm:text-2xl text-white group-hover:text-amber-400 transition-colors mb-3" data-testid={`blog-title-${post.slug}`}>
                    {post.title}
                  </h2>
                  <p className="text-sm text-amber-200/60 leading-relaxed mb-4">
                    {post.excerpt}
                  </p>
                  <span className="inline-flex items-center gap-2 text-sm font-medium text-amber-400 group-hover:gap-3 transition-all">
                    Read More <ArrowRight className="w-4 h-4" />
                  </span>
                </article>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
