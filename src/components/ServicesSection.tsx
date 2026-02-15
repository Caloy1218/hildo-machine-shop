import {
  Cog, CircleDot, RotateCcw, Search, Wrench, Settings2,
  Layers, Box, Flame, Disc, AlignHorizontalSpaceBetween, Maximize, ArrowRightLeft, Package
} from "lucide-react";

const services = [
  { icon: Cog, name: "Automotive Machining", desc: "Complete engine machining solutions for all vehicle types." },
  { icon: CircleDot, name: "Boring & Honing", desc: "Precision cylinder boring and honing for perfect ring seal." },
  { icon: RotateCcw, name: "Crankshaft Grinding", desc: "Journal and pin grinding to factory-spec tolerances." },
  { icon: AlignHorizontalSpaceBetween, name: "Conrod Resizing & Bush Boring", desc: "Connecting rod reconditioning and gudgeon bush fitting." },
  { icon: Search, name: "Crack Detection", desc: "Non-destructive testing to identify hidden material defects." },
  { icon: Wrench, name: "Cylinder Head Repairs", desc: "Full cylinder head reconditioning and valve work." },
  { icon: Settings2, name: "Valve Seats & Inserts", desc: "Precision machining of valve seats and insert installation." },
  { icon: Box, name: "Cylinder Block Machining", desc: "Decking, sleeving, and block repair services." },
  { icon: Layers, name: "General Engineering", desc: "Custom fabrication and general machining services." },
  { icon: Flame, name: "Heat Treatment", desc: "Stress relieving and hardening for optimal material properties." },
  { icon: Disc, name: "Flywheel Grinding", desc: "Surface grinding to restore flywheel contact surfaces." },
  { icon: Maximize, name: "Line Honing", desc: "Main bearing bore alignment for perfect crankshaft fit." },
  { icon: ArrowRightLeft, name: "Surface Grinding & Milling", desc: "Flat surface finishing and precision milling operations." },
  { icon: Package, name: "Exchange Engines", desc: "Fully reconditioned exchange engines ready to install." },
];

const ServicesSection = () => (
  <section id="services" className="section-padding bg-secondary/50">
    <div className="container mx-auto">
      <div className="text-center mb-14">
        <p className="text-accent font-medium tracking-[0.2em] uppercase text-sm mb-2">What We Do</p>
        <h2 className="font-display text-3xl md:text-4xl font-bold text-foreground">
          Engineering Services
        </h2>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-5">
        {services.map((s) => (
          <div key={s.name} className="card-industrial group">
            <div className="w-10 h-10 mb-3 rounded-lg bg-accent/10 flex items-center justify-center group-hover:bg-accent/20 transition-colors">
              <s.icon className="text-accent" size={20} />
            </div>
            <h3 className="font-semibold text-sm text-foreground mb-1">{s.name}</h3>
            <p className="text-xs text-muted-foreground leading-relaxed">{s.desc}</p>
          </div>
        ))}
      </div>
    </div>
  </section>
);

export default ServicesSection;
