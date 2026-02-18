import { useState, useEffect } from "react";
import { Menu, X, Sun, Moon } from "lucide-react";
import logo from "../assets/Hildo-Machine-shop-Icon-nobg-Photoroom.png";

const navLinks = [
  { label: "Home", href: "#home" },
  { label: "About", href: "#about" },
  { label: "Machines", href: "#machines" },
  { label: "Services", href: "#services" },
  { label: "Contact", href: "#contact" },
];

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [dark, setDark] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    document.documentElement.classList.toggle("dark", dark);
  }, [dark]);

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? "bg-background/95 backdrop-blur-md shadow-lg border-b border-border"
          : "bg-transparent"
      }`}
    >
      <div className="container mx-auto flex items-center justify-between py-4">
        <div className="container mx-auto flex items-center gap-2 -ml-10 ">
          <img
          src={logo}
          alt="Hildo Machine Shop Logo"
          className="h-16 w-auto object-contain"
        />
        <a 
          href="#home" 
          className="font-display text-lg font-bold tracking-wider text-[#e87710]"
        >
          HILDO<span>MachineShop</span>
        </a>

        </div>
        

        {/* Desktop */}
        <div className="hidden md:flex items-center gap-8">
          {navLinks.map((l) => (
            <a
              key={l.href}
              href={l.href}
              className="text-sm font-medium text-muted-foreground hover:text-accent transition-colors duration-200"
            >
              {l.label}
            </a>
          ))}
          <button
            onClick={() => setDark(!dark)}
            className="p-2 rounded-full bg-secondary text-secondary-foreground hover:bg-accent hover:text-accent-foreground transition-colors"
            aria-label="Toggle theme"
          >
            {dark ? <Sun size={16} /> : <Moon size={16} />}
          </button>
        </div>

        {/* Mobile */}
        <div className="flex items-center gap-3 md:hidden">
          <button
            onClick={() => setDark(!dark)}
            className="p-2 rounded-full bg-secondary text-secondary-foreground"
            aria-label="Toggle theme"
          >
            {dark ? <Sun size={16} /> : <Moon size={16} />}
          </button>
          <button onClick={() => setIsOpen(!isOpen)} className="text-foreground" aria-label="Menu">
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      {isOpen && (
        <div className="md:hidden bg-background/95 backdrop-blur-md border-b border-border animate-fade-up">
          <div className="container mx-auto py-4 flex flex-col gap-4">
            {navLinks.map((l) => (
              <a
                key={l.href}
                href={l.href}
                onClick={() => setIsOpen(false)}
                className="text-sm font-medium text-muted-foreground hover:text-accent transition-colors"
              >
                {l.label}
              </a>
            ))}
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
