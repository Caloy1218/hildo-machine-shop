import { Shield, Clock, Award } from "lucide-react";

const highlights = [
  { icon: Clock, label: "Since 1996", desc: "Nearly three decades of expertise" },
  { icon: Shield, label: "Precision", desc: "Automotive-grade accuracy" },
  { icon: Award, label: "Trusted", desc: "Generations of loyal clients" },
];

const AboutSection = () => (
  <section id="about" className="section-padding bg-secondary/50">
    <div className="container mx-auto">
      <div className="text-center mb-14">
        <p className="text-accent font-medium tracking-[0.2em] uppercase text-sm mb-2">Our Story</p>
        <h2 className="font-display text-3xl md:text-4xl font-bold text-foreground">
          About Us
        </h2>
      </div>

      <div className="max-w-3xl mx-auto text-center mb-14">
        <p className="text-muted-foreground leading-relaxed mb-4">
          Founded in <span className="text-foreground font-semibold">1996</span> by{" "}
          <span className="text-foreground font-semibold">Herminigildo G. Panganiban</span>,
          Hildo Machine Shop and Engineering Works has been a trusted name in automotive machining
          and precision engineering for decades.
        </p>
        <p className="text-muted-foreground leading-relaxed">
          With a relentless commitment to quality, experience, and reliability, we serve a wide
          range of industries — from automotive repair shops to heavy industrial clients —
          ensuring every component meets the highest standards of precision and performance.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {highlights.map((h) => (
          <div key={h.label} className="card-industrial text-center">
            <div className="w-14 h-14 mx-auto mb-4 rounded-full bg-accent/10 flex items-center justify-center">
              <h.icon className="text-accent" size={24} />
            </div>
            <h3 className="font-display text-lg font-semibold text-foreground mb-1">{h.label}</h3>
            <p className="text-sm text-muted-foreground">{h.desc}</p>
          </div>
        ))}
      </div>
    </div>
  </section>
);

export default AboutSection;
