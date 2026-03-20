import { useEffect } from "react";
import { useParams, Link } from "wouter";
import { ArrowLeft, Calendar, Clock } from "lucide-react";
import { Navigation } from "@/components/Navigation";
import { Footer } from "@/components/Footer";
import { getBlogBySlug, blogPosts } from "@/lib/blogData";
import { updatePageMeta, restoreDefaultMeta } from "@/lib/seoUtils";

function BlogJsonLd({ post }: { post: ReturnType<typeof getBlogBySlug> }) {
  if (!post) return null;

  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "BlogPosting",
    "headline": post.title,
    "description": post.metaDescription,
    "datePublished": post.date,
    "dateModified": post.date,
    "author": {
      "@type": "Organization",
      "name": "Mumma's Kitchen",
      "url": "https://mummas-kitchen.replit.app",
    },
    "publisher": {
      "@type": "Organization",
      "name": "Mumma's Kitchen",
    },
    "mainEntityOfPage": {
      "@type": "WebPage",
      "@id": `https://mummas-kitchen.replit.app/blog/${post.slug}`,
    },
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
    />
  );
}

export default function BlogPost() {
  const params = useParams<{ slug: string }>();
  const post = getBlogBySlug(params.slug || "");

  useEffect(() => {
    window.scrollTo(0, 0);
    if (post) {
      updatePageMeta({
        title: post.metaTitle,
        description: post.metaDescription,
        ogTitle: post.title,
        ogDescription: post.metaDescription,
        ogUrl: `https://mummas-kitchen.replit.app/blog/${post.slug}`,
      });
    }
    return () => restoreDefaultMeta();
  }, [post]);

  if (!post) {
    return (
      <main className="min-h-screen bg-[#2D1F15]">
        <Navigation />
        <div className="pt-40 sm:pt-48 pb-16 text-center">
          <h1 className="font-serif text-3xl text-white mb-4">Blog Post Not Found</h1>
          <p className="text-amber-200/60 mb-8">The article you're looking for doesn't exist.</p>
          <Link href="/blog" className="text-amber-400 hover:text-amber-300 transition-colors" data-testid="link-back-to-blog">
            &larr; Back to Blog
          </Link>
        </div>
        <Footer />
      </main>
    );
  }

  const currentIndex = blogPosts.findIndex((p) => p.slug === post.slug);
  const relatedPosts = blogPosts.filter((_, i) => i !== currentIndex);

  return (
    <main className="min-h-screen bg-[#2D1F15]">
      <Navigation />
      <BlogJsonLd post={post} />

      <article className="pt-40 sm:pt-48 pb-16 sm:pb-24" data-testid={`blog-article-${post.slug}`}>
        <div className="max-w-3xl mx-auto px-4 sm:px-6">
          <Link href="/blog" className="inline-flex items-center gap-2 text-sm text-amber-400 hover:text-amber-300 transition-colors mb-8" data-testid="link-back-to-blog">
            <ArrowLeft className="w-4 h-4" />
            Back to Blog
          </Link>

          <header className="mb-10 sm:mb-14">
            <div className="flex items-center gap-4 text-xs text-amber-300/50 mb-4">
              <span className="flex items-center gap-1.5">
                <Calendar className="w-3.5 h-3.5" />
                {new Date(post.date).toLocaleDateString("en-IN", { year: "numeric", month: "long", day: "numeric" })}
              </span>
              <span className="flex items-center gap-1.5">
                <Clock className="w-3.5 h-3.5" />
                {post.readTime}
              </span>
            </div>
            <h1 className="font-serif text-3xl sm:text-4xl md:text-5xl text-white leading-[1.1]">
              {post.title}
            </h1>
          </header>

          <div className="space-y-10 sm:space-y-12">
            {post.sections.map((section, i) => (
              <section key={i} className="space-y-4">
                {section.heading && (
                  <h2 className="font-serif text-xl sm:text-2xl text-amber-100">
                    {section.heading}
                  </h2>
                )}
                {section.content.map((paragraph, j) => {
                  const withLinks = paragraph
                    .replace(
                      /full range of (natural )?pickles|full range of pickles|Browse our full range of pickles|our collection of handmade pickles|check out our full range of natural pickles|Explore our collection of handmade pickles/gi,
                      '<a href="/#products" class="text-amber-400 hover:text-amber-300 underline underline-offset-2 transition-colors">$&</a>'
                    )
                    .replace(
                      /place your order/gi,
                      '<a href="/#contact" class="text-amber-400 hover:text-amber-300 underline underline-offset-2 transition-colors">$&</a>'
                    );
                  return (
                    <p
                      key={j}
                      className="text-amber-200/70 leading-relaxed"
                      dangerouslySetInnerHTML={{ __html: withLinks }}
                    />
                  );
                })}
                {section.list && (
                  <ul className="space-y-2 ml-1">
                    {section.list.map((item, k) => (
                      <li key={k} className="flex items-start gap-3 text-sm text-amber-200/60">
                        <span className="w-1.5 h-1.5 rounded-full bg-amber-400 mt-2 flex-shrink-0" />
                        {item}
                      </li>
                    ))}
                  </ul>
                )}
              </section>
            ))}
          </div>

          <div className="mt-12 sm:mt-16 pt-8 sm:pt-10 border-t border-amber-700/20">
            <a
              href="https://wa.me/917261930217?text=Hi%2C%20I%20would%20like%20to%20place%20an%20order%20for%20pickles"
              target="_blank"
              rel="noopener noreferrer"
              data-testid="blog-cta-whatsapp"
              className="group inline-flex items-center justify-center gap-3 bg-[#25D366] text-white px-6 sm:px-8 py-3 sm:py-4 text-sm sm:text-base font-semibold tracking-[0.05em] uppercase rounded-lg transition-opacity hover:opacity-90"
            >
              <svg className="h-5 w-5" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
              </svg>
              Order Pickles on WhatsApp
            </a>
          </div>

          {relatedPosts.length > 0 && (
            <div className="mt-12 sm:mt-16 pt-8 sm:pt-10 border-t border-amber-700/20">
              <h3 className="font-serif text-xl text-white mb-6">More from Our Blog</h3>
              <div className="grid sm:grid-cols-2 gap-4">
                {relatedPosts.map((related) => (
                  <Link
                    key={related.slug}
                    href={`/blog/${related.slug}`}
                    data-testid={`blog-related-${related.slug}`}
                  >
                    <div className="group bg-amber-950/40 border border-amber-700/20 p-5 rounded-lg hover:border-amber-600/40 transition-all cursor-pointer">
                      <h4 className="font-serif text-base text-white group-hover:text-amber-400 transition-colors mb-2 leading-snug">
                        {related.title}
                      </h4>
                      <p className="text-xs text-amber-300/50">{related.readTime}</p>
                    </div>
                  </Link>
                ))}
              </div>
            </div>
          )}
        </div>
      </article>

      <Footer />
    </main>
  );
}
