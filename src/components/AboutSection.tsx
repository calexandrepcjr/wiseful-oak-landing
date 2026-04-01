import { motion } from "framer-motion";
import { YEARS_OF_EXPERIENCE } from "@/lib/constants";

const AboutSection = () => {
  return (
    <section id="about" className="py-24 md:py-32 bg-card">
      <div className="max-w-5xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="mb-16"
        >
          <p className="font-body text-sm uppercase tracking-[0.25em] text-accent mb-3">
            About
          </p>
          <h2 className="font-display text-3xl md:text-4xl font-bold text-foreground mb-6 leading-tight">
            More Than a Software House —{" "}
            <span className="italic font-medium">Your Technology Branch</span>
          </h2>
          <p className="font-body text-lg text-muted-foreground leading-relaxed max-w-3xl">
            Wiseful Oak operates as an embedded technology partner within your business.
            We don't just build software — we solve your core problems and enable you to operate independently.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-16 items-start">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="space-y-5 font-body text-muted-foreground leading-relaxed"
          >
            <p>
              With over {YEARS_OF_EXPERIENCE} years of engineering experience, we engage either as
              individual experts or as a specialized squad — addressing critical issues,
              stabilizing operations, and transitioning ownership back to your internal teams.
            </p>
            <p>
              In practice, we cover the full spectrum: <strong className="text-foreground">process modernization</strong>,{" "}
              <strong className="text-foreground">cost reduction</strong>,{" "}
              <strong className="text-foreground">software development & analysis</strong>,{" "}
              <strong className="text-foreground">requirements engineering</strong>, and{" "}
              <strong className="text-foreground">fractional executive leadership</strong> — providing
              experienced technical guidance to structure your engineering organization.
            </p>
            <p>
              Since 2023 we serve U.S. clients directly, and in 2024 we established our LLC —
              positioning us to support businesses pursuing international expansion.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="space-y-6"
          >
            {[
              { number: YEARS_OF_EXPERIENCE, label: "Years of Engineering Experience" },
              { number: "≤4", label: "Lean, Specialized Team Members" },
              { number: "0", label: "Vendor Lock-in — Independence Is the Goal" },
            ].map((stat) => (
              <div
                key={stat.label}
                className="p-6 rounded-xl bg-background shadow-card"
              >
                <p className="font-display text-3xl font-bold text-gradient-gold mb-1">
                  {stat.number}
                </p>
                <p className="font-body text-sm text-muted-foreground">
                  {stat.label}
                </p>
              </div>
            ))}

            <div className="p-6 rounded-xl border border-accent/20 bg-accent/5">
              <p className="font-body text-sm text-foreground italic leading-relaxed">
                "The objective is not to create dependency, but to solve the client's core problems
                and enable them to operate independently. Over time, our role naturally shifts toward
                that of a strategic technical advisor."
              </p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
