import heroBg from "@/assets/hero-bg.jpg";
import { ChevronDown } from "lucide-react";

const HeroSection = () => {
  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0">
        <img src={heroBg} alt="Machine shop" className="w-full h-full object-cover" />
        <div className="absolute inset-0 bg-hero-overlay" />
      </div>

      {/* Content */}
      <div className="relative z-10 container mx-auto text-center px-4">
        <p className="text-[#e87710] font-medium tracking-[0.3em] uppercase text-sm mb-4 animate-fade-up">
          Est. 1996
        </p>
        <h1 className="font-display text-4xl sm:text-5xl md:text-7xl font-bold text-white mb-6 animate-fade-up-delay-1 leading-tight">
          Hildo Machine Shop
          <br />
          <span className="text-gradient">&amp; Engineering Works</span>
        </h1>
        <p className="font-display text-lg md:text-2xl text-white/80 tracking-[0.15em] mb-4 animate-fade-up-delay-2">
          Precision. Power. Performance.
        </p>
        <p className="text-white/60 max-w-2xl mx-auto mb-10 animate-fade-up-delay-3 text-sm md:text-base">
          Trusted for decades in automotive machining and engineering services — delivering quality
          craftsmanship with cutting-edge equipment and unwavering expertise.
        </p>
        <a
          href="#machines"
          className="inline-flex items-center gap-2 px-8 py-4 bg-[#e87710] text-accent-foreground font-semibold rounded-lg hover:brightness-110 transition-all duration-300 animate-fade-up-delay-3"
          style={{ animation: "fadeUp 0.6s ease-out 0.6s forwards, pulse-glow 3s ease-in-out 1.2s infinite", opacity: 0 }}
        >
          View Our Machines
        </a>
      </div>

      {/* Scroll indicator */}
      <a
        href="#about"
        className="absolute bottom-8 left-1/2 -translate-x-1/2 text-white/50 animate-bounce"
      >
        <ChevronDown size={28} />
      </a>
    </section>
  );
};

export default HeroSection;
