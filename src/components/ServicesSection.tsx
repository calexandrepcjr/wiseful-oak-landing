import { motion } from "framer-motion";
import { RefreshCw, Code, Users, TrendingDown, ClipboardList, Crown } from "lucide-react";

const services = [
  {
    icon: RefreshCw,
    title: "Process Modernization",
    outcome: "Operational Efficiency",
    description:
      "Redesign outdated workflows and legacy processes into streamlined, modern operations — reducing friction and unlocking scalability across your organization.",
  },
  {
    icon: Code,
    title: "Software Development & Analysis",
    outcome: "Production-Ready Systems",
    description:
      "End-to-end engineering of new platforms and stabilization of existing ones. From architecture through deployment — clean, tested, and built to evolve.",
  },
  {
    icon: ClipboardList,
    title: "Requirements Engineering",
    outcome: "Clarity Before Code",
    description:
      "Translate business needs into precise technical specifications. We bridge the gap between stakeholders and engineering teams so nothing gets lost.",
  },
  {
    icon: Crown,
    title: "Fractional Executive Leadership",
    outcome: "Strategic Direction",
    description:
      "Experienced CTO-level guidance on a part-time basis. Structure your engineering organization, define standards, mentor teams, and accelerate delivery.",
  },
  {
    icon: TrendingDown,
    title: "Cost Reduction",
    outcome: "Sustainable Savings",
    description:
      "Identify and eliminate technical waste — from redundant infrastructure to inefficient processes. Optimize spend without sacrificing quality or velocity.",
  },
  {
    icon: Users,
    title: "Team Augmentation & Transition",
    outcome: "Full Independence",
    description:
      "Deploy a specialized squad to stabilize critical operations, then systematically transition ownership back to your internal teams. Zero lock-in by design.",
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

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
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
              <div className="flex items-start justify-between mb-5">
                <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center group-hover:bg-primary/20 transition-colors">
                  <service.icon className="w-6 h-6 text-primary" />
                </div>
                <span className="font-body text-xs uppercase tracking-widest text-accent">
                  {service.outcome}
                </span>
              </div>
              <h3 className="font-display text-xl font-semibold text-foreground mb-3">
                {service.title}
              </h3>
              <p className="font-body text-sm text-muted-foreground leading-relaxed">
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
