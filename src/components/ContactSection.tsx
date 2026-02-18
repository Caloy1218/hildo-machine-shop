import { useState } from "react";
import { MapPin, Phone, Mail } from "lucide-react";
import emailjs from "@emailjs/browser";

const ContactSection = () => {
  const [form, setForm] = useState({ name: "", email: "", message: "" });


const handleSubmit = (e: React.FormEvent) => {
  e.preventDefault();

  emailjs.send(
    "service_sapfxyo",
    "template_a05lp8r",
    {
      from_name: form.name,
      from_email: form.email,
      message: form.message,
    },
    "Jm7e4faktz-OFZn8R"
  )
  .then(() => {
    alert("Message sent successfully!");
    setForm({ name: "", email: "", message: "" });
  })
  .catch((error) => {
    console.error("FAILED...", error);
    alert("Failed to send message.");
  });
};

  return (
    <section id="contact" className="section-padding">
      <div className="container mx-auto">
        <div className="text-center mb-14">
          <p className="text-[#e87710] font-medium tracking-[0.2em] uppercase text-sm mb-2">Get In Touch</p>
          <h2 className="font-display text-3xl md:text-4xl font-bold text-foreground">
            Contact Us
          </h2>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 max-w-5xl mx-auto">
          {/* Info */}
          <div className="space-y-8">
            <div>
              <h3 className="font-display text-lg font-semibold text-foreground mb-4">
                Hildo Machine Shop &amp; Engineering Works
              </h3>
              <p className="text-muted-foreground text-sm leading-relaxed mb-6">
                Reach out to us for all your machining and engineering needs. We're here to help with
                precision solutions tailored to your requirements.
              </p>
            </div>

            <div className="space-y-4">
              {[
                { icon: Phone, label: "Phone", value: "+63 XXX XXX XXXX" },
                { icon: Mail, label: "Email", value: "hildomachineshop@gmail.com" },
                { icon: MapPin, label: "Location", value: "National Highway, Homestead, Bambang, N.V" },
              ].map((item) => (
                <div key={item.label} className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-lg bg-accent/10 flex items-center justify-center shrink-0">
                    <item.icon className="text-accent" size={18} />
                  </div>
                  <div>
                    <p className="text-xs text-muted-foreground">{item.label}</p>
                    <p className="text-sm font-medium text-foreground">{item.value}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Form */}
          <form onSubmit={handleSubmit} className="space-y-5">
            <div>
              <label className="block text-sm font-medium text-foreground mb-1.5">Name</label>
              <input
                type="text"
                required
                maxLength={100}
                value={form.name}
                onChange={(e) => setForm({ ...form, name: e.target.value })}
                className="w-full px-4 py-3 rounded-lg bg-secondary border border-border text-foreground text-sm focus:outline-none focus:ring-2 focus:ring-accent transition-all"
                placeholder="Your name"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-foreground mb-1.5">Email</label>
              <input
                type="email"
                required
                maxLength={255}
                value={form.email}
                onChange={(e) => setForm({ ...form, email: e.target.value })}
                className="w-full px-4 py-3 rounded-lg bg-secondary border border-border text-foreground text-sm focus:outline-none focus:ring-2 focus:ring-accent transition-all"
                placeholder="your@email.com"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-foreground mb-1.5">Message</label>
              <textarea
                required
                maxLength={1000}
                rows={5}
                value={form.message}
                onChange={(e) => setForm({ ...form, message: e.target.value })}
                className="w-full px-4 py-3 rounded-lg bg-secondary border border-border text-foreground text-sm focus:outline-none focus:ring-2 focus:ring-accent transition-all resize-none"
                placeholder="How can we help you?"
              />
            </div>
            <button
              type="submit"
              className="w-full py-3 bg-[#e87710] text-accent-foreground font-semibold rounded-lg hover:brightness-110 transition-all duration-300"
            >
              Send Message
            </button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
