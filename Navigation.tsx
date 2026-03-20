import { useState, useEffect } from "react";
import { Menu, X, User, LogOut, Settings } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useAuth } from "@/hooks/use-auth";
import logoImg from "@assets/Without_BG_1772531259275.png";

export function Navigation() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const { user, isAuthenticated, isLoading } = useAuth();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { name: "Our Story", href: "#story" },
    { name: "Products", href: "#products" },
    { name: "Benefits", href: "#benefits" },
    { name: "Contact", href: "#contact" },
    { name: "Blog", href: "/blog" },
  ];

  return (
    <nav
      data-testid="navigation"
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? "bg-background/95 backdrop-blur-md border-b-2 traditional-border py-2 shadow-md"
          : "bg-transparent py-4"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 flex items-center justify-between">
        <a href="/" className="flex items-center gap-2 sm:gap-3 group" data-testid="link-home">
          <div className="h-[112px] w-[112px] sm:h-[144px] sm:w-[144px] rounded-full overflow-hidden flex-shrink-0">
            <img src={logoImg} alt="Mumma's Kitchen Logo" className="w-full h-[115%] object-cover object-top" />
          </div>
          <div className="hidden sm:flex flex-col">
            <span className={`font-serif text-lg sm:text-xl font-bold tracking-tight leading-tight ${isScrolled ? "text-primary" : ""}`} style={isScrolled ? undefined : { color: '#ffffff' }}>
              Mumma's Kitchen
            </span>
            <span className={`text-[10px] tracking-[0.25em] uppercase ${isScrolled ? "text-muted-foreground" : ""}`} style={isScrolled ? undefined : { color: 'rgba(255,255,255,0.6)' }}>Since 2021</span>
          </div>
        </a>

        <div className="hidden md:flex items-center gap-6 lg:gap-8">
          <div className="flex gap-4 lg:gap-6">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                data-testid={`link-nav-${link.name.toLowerCase().replace(/\s/g, '-')}`}
                className={`text-sm font-medium transition-colors ${isScrolled ? "text-foreground/80 hover:text-primary" : "hover:opacity-80"}`}
                style={isScrolled ? undefined : { color: 'rgba(255,255,255,0.9)' }}
              >
                {link.name}
              </a>
            ))}
          </div>
          <div className="flex items-center gap-2 lg:gap-3">
            {!isLoading && isAuthenticated && user ? (
              <div className="flex items-center gap-2 lg:gap-3">
                <div className={`flex items-center gap-2 text-sm ${isScrolled ? "text-muted-foreground" : ""}`} style={isScrolled ? undefined : { color: 'rgba(255,255,255,0.7)' }}>
                  {user.profileImageUrl ? (
                    <img src={user.profileImageUrl} alt="" className="h-8 w-8 rounded-full" />
                  ) : (
                    <User className="h-4 w-4" />
                  )}
                  <span className="hidden lg:inline">{user.firstName || user.email}</span>
                </div>
                <Button variant="outline" size="sm" asChild data-testid="link-admin">
                  <a href="/admin"><Settings className="h-4 w-4 mr-1" /> Admin</a>
                </Button>
                <Button variant="outline" size="sm" asChild data-testid="button-logout">
                  <a href="/api/logout"><LogOut className="h-4 w-4 mr-1" /> Logout</a>
                </Button>
              </div>
            ) : null}
            <Button asChild data-testid="button-order-now">
              <a href="#products">Order Now</a>
            </Button>
          </div>
        </div>

        <button
          className={`md:hidden p-2 ${isScrolled ? "text-foreground" : ""}`}
          style={isScrolled ? undefined : { color: '#ffffff' }}
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          data-testid="button-mobile-menu"
        >
          {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {isMobileMenuOpen && (
        <div className="md:hidden absolute top-full left-0 right-0 bg-background border-b-2 traditional-border shadow-lg py-4 px-4 sm:px-6 flex flex-col gap-3">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              data-testid={`link-mobile-nav-${link.name.toLowerCase().replace(/\s/g, '-')}`}
              className="text-base font-medium text-foreground py-2"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              {link.name}
            </a>
          ))}
          {!isLoading && isAuthenticated && user ? (
            <div className="flex flex-col gap-2 pt-2 border-t border-border">
              <span className="text-sm text-muted-foreground">{user.firstName || user.email}</span>
              <Button variant="outline" asChild>
                <a href="/admin" onClick={() => setIsMobileMenuOpen(false)} data-testid="link-mobile-admin">
                  <Settings className="h-4 w-4 mr-1" /> Admin Dashboard
                </a>
              </Button>
              <Button variant="outline" asChild>
                <a href="/api/logout" onClick={() => setIsMobileMenuOpen(false)}>
                  <LogOut className="h-4 w-4 mr-1" /> Logout
                </a>
              </Button>
            </div>
          ) : null}
          <Button asChild className="w-full mt-2">
            <a href="#products" onClick={() => setIsMobileMenuOpen(false)}>
              Order Now
            </a>
          </Button>
        </div>
      )}
    </nav>
  );
}
