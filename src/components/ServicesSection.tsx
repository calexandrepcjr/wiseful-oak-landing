import { motion } from "framer-motion";
import { Code, Layers, Zap, Shield } from "lucide-react";

const services = [
  {
    icon: Layers,
    title: "Architecture & Design",
    description:
      "Sustainable, scalable system architectures tailored to your business domain. From microservices to event-driven systems.",
  },
  {
    icon: Code,
    title: "Full-Stack Development",
    description:
      "End-to-end engineering of robust applications using modern stacks. Clean code, tested, production-ready.",
  },
  {
    icon: Zap,
    title: "Technical Leadership",
    description:
      "Fractional CTO and tech lead services. Mentor your team, define standards, and accelerate delivery.",
  },
  {
    icon: Shield,
    title: "Legacy Modernization",
    description:
      "Transform aging systems into modern, maintainable platforms without disrupting your operations.",
  },
];

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, delay: i * 0.15 },
  }),
};

const ServicesSection = () => {
  return (
    <section id="services" className="py-24 md:py-32 bg-background">
      <div className="max-w-6xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <p className="font-body text-sm uppercase tracking-[0.25em] text-accent mb-3">
            What We Do
          </p>
          <h2 className="font-display text-3xl md:text-4xl font-bold text-foreground">
            Services
          </h2>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-8">
          {services.map((service, i) => (
            <motion.div
              key={service.title}
              custom={i}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={fadeUp}
              className="group p-8 rounded-xl bg-card shadow-card hover:shadow-elevated transition-shadow duration-300"
            >
              <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center mb-5 group-hover:bg-primary/20 transition-colors">
                <service.icon className="w-6 h-6 text-primary" />
              </div>
              <h3 className="font-display text-xl font-semibold text-foreground mb-3">
                {service.title}
              </h3>
              <p className="font-body text-muted-foreground leading-relaxed">
                {service.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
