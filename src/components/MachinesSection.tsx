import { useState } from "react";
import { X } from "lucide-react";

interface Machine {
  name: string;
  description: string;
  emoji: string;
}

const machines: Machine[] = [
  { name: "Milling Machine", description: "Versatile cutting equipment for shaping metal surfaces with high precision using rotary cutters.", emoji: "⚙️" },
  { name: "Reboring Machine", description: "Restores worn engine cylinders to their original specifications with precise bore enlargement.", emoji: "🔩" },
  { name: "Honing Machine", description: "Produces a precision surface finish on cylinder bores for optimal ring sealing.", emoji: "🔧" },
  { name: "Crankshaft Grinding Machine", description: "Grinds crankshaft journals and pins to exact tolerances for smooth engine operation.", emoji: "⚡" },
  { name: "Hacksaw Machine", description: "Power-driven sawing equipment for cutting metal stock to required lengths.", emoji: "🪚" },
  { name: "Lathe Machine", description: "Shapes cylindrical workpieces by rotating them against precision cutting tools.", emoji: "🔄" },
  { name: "Valve Refacer Machine", description: "Resurfaces engine valves to ensure perfect sealing and optimal combustion.", emoji: "🛠️" },
  { name: "Welding Machine", description: "Joins metal components through controlled fusion for structural integrity.", emoji: "🔥" },
  { name: "Jigs, Support & Fixtures", description: "Custom-built holding devices that ensure accuracy and repeatability in machining operations.", emoji: "📐" },
  { name: "Post Drill Machine", description: "Floor-mounted drilling equipment for heavy-duty precision boring operations.", emoji: "🕳️" },
  { name: "Shaper Machine", description: "Creates flat surfaces and keyways through linear reciprocating cutting motion.", emoji: "📏" },
  { name: "Surface Grinding Machine", description: "Achieves ultra-smooth flat surfaces with abrasive wheel finishing.", emoji: "✨" },
  { name: "Manual Press Machine", description: "Applies controlled force for pressing, stamping, and forming metal parts.", emoji: "🏗️" },
];

const MachinesSection = () => {
  const [selected, setSelected] = useState<Machine | null>(null);

  return (
    <>
      <section id="machines" className="section-padding">
        <div className="container mx-auto">
          <div className="text-center mb-14">
            <p className="text-[#e87710] font-medium tracking-[0.2em] uppercase text-sm mb-2">Equipment</p>
            <h2 className="font-display text-3xl md:text-4xl font-bold text-foreground">
              Our Machines
            </h2>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-5">
            {machines.map((m) => (
              <button
                key={m.name}
                onClick={() => setSelected(m)}
                className="card-industrial text-left group cursor-pointer"
              >
                <div className="text-4xl mb-3">{m.emoji}</div>
                <h3 className="font-display text-sm font-semibold text-foreground group-hover:text-accent transition-colors">
                  {m.name}
                </h3>
                <p className="text-xs text-muted-foreground mt-1 line-clamp-2">{m.description}</p>
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Modal */}
      {selected && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center bg-foreground/60 backdrop-blur-sm p-4"
          onClick={() => setSelected(null)}
        >
          <div
            className="bg-card rounded-xl border border-border max-w-lg w-full p-8 relative animate-fade-up"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              onClick={() => setSelected(null)}
              className="absolute top-4 right-4 text-muted-foreground hover:text-foreground transition-colors"
              aria-label="Close"
            >
              <X size={20} />
            </button>
            <div className="text-6xl mb-5">{selected.emoji}</div>
            <h3 className="font-display text-xl font-bold text-foreground mb-3">{selected.name}</h3>
            <p className="text-muted-foreground leading-relaxed">{selected.description}</p>
          </div>
        </div>
      )}
    </>
  );
};

export default MachinesSection;
