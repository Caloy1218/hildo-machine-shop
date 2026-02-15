import { Facebook, Instagram, Twitter } from "lucide-react";

const Footer = () => (
  <footer className="bg-card border-t border-border py-12 px-4">
    <div className="container mx-auto text-center">
      <h3 className="font-display text-lg font-bold text-foreground mb-2">
        Hildo Machine Shop &amp; Engineering Works
      </h3>
      <p className="text-sm text-muted-foreground mb-6">
        Founded by Herminigildo G. Panganiban · Established 1996
      </p>

      <div className="flex justify-center gap-4 mb-8">
        {[Facebook, Instagram, Twitter].map((Icon, i) => (
          <a
            key={i}
            href="#"
            className="w-10 h-10 rounded-full bg-secondary flex items-center justify-center text-muted-foreground hover:bg-accent hover:text-accent-foreground transition-colors"
          >
            <Icon size={16} />
          </a>
        ))}
      </div>

      <p className="text-xs text-muted-foreground">
        © {new Date().getFullYear()} Hildo Machine Shop &amp; Engineering Works. All rights reserved.
      </p>
    </div>
  </footer>
);

export default Footer;
