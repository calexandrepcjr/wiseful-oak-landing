import { motion } from "framer-motion";
import { HeartPulse, Landmark, Truck, ShoppingCart } from "lucide-react";

const domains = [
  { icon: HeartPulse, name: "Healthcare", description: "Patient systems, compliance, medical data platforms" },
  { icon: Landmark, name: "Finance", description: "Trading systems, payment infrastructure, fintech" },
  { icon: Truck, name: "Logistics", description: "Supply chain, fleet management, real-time tracking" },
  { icon: ShoppingCart, name: "eCommerce", description: "Marketplaces, checkout flows, inventory systems" },
];

const DomainsSection = () => {
  return (
    <section id="domains" className="py-24 md:py-32 bg-background">
      <div className="max-w-6xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <p className="font-body text-sm uppercase tracking-[0.25em] text-accent mb-3">
            Expertise
          </p>
          <h2 className="font-display text-3xl md:text-4xl font-bold text-foreground">
            Industry Domains
          </h2>
        </motion.div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {domains.map((domain, i) => (
            <motion.div
              key={domain.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="text-center p-8 rounded-xl bg-card shadow-card hover:shadow-elevated transition-shadow"
            >
              <div className="w-14 h-14 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-4">
                <domain.icon className="w-7 h-7 text-primary" />
              </div>
              <h3 className="font-display text-lg font-semibold text-foreground mb-2">
                {domain.name}
              </h3>
              <p className="font-body text-sm text-muted-foreground">
                {domain.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default DomainsSection;
