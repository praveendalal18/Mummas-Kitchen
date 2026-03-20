import logoImg from "@assets/Without_BG_1772531259275.png";

export function Footer() {
  return (
    <footer className="bg-[#121210] text-amber-100/60 py-12 border-t border-amber-700/10" data-testid="footer">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <div className="flex flex-col md:flex-row items-center justify-between gap-8">
          
          <div className="flex items-center gap-3">
            <div className="h-40 w-40 rounded-full overflow-hidden flex-shrink-0">
              <img src={logoImg} alt="Mumma's Kitchen" className="w-full h-[115%] object-cover object-top" />
            </div>
            <div>
              <span className="font-serif text-xl font-bold text-amber-400 block leading-tight">
                Mumma's Kitchen
              </span>
              <p className="text-xs text-amber-200/40">
                Authentic Homemade Goan Pickles since 2021
              </p>
            </div>
          </div>

          <div className="flex gap-6 text-sm">
            <a href="#story" className="hover:text-amber-400 transition-colors">Our Story</a>
            <a href="#products" className="hover:text-amber-400 transition-colors">Products</a>
            <a href="#contact" className="hover:text-amber-400 transition-colors">Contact</a>
            <a href="/blog" className="hover:text-amber-400 transition-colors" data-testid="link-footer-blog">Blog</a>
          </div>

          <div className="text-sm text-center md:text-right text-amber-200/30">
            &copy; {new Date().getFullYear()} Mumma's Kitchen. <br className="md:hidden" />All rights reserved.
          </div>

        </div>
      </div>
    </footer>
  );
}
