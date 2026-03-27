import { motion } from "framer-motion";
import { YEARS_OF_EXPERIENCE } from "@/lib/constants";

const AboutSection = () => {
  return (
    <section id="about" className="py-24 md:py-32 bg-card">
      <div className="max-w-5xl mx-auto px-6">
        <div className="grid md:grid-cols-2 gap-16 items-center">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
          >
            <p className="font-body text-sm uppercase tracking-[0.25em] text-accent mb-3">
              About
            </p>
            <h2 className="font-display text-3xl md:text-4xl font-bold text-foreground mb-6 leading-tight">
              {YEARS_OF_EXPERIENCE} Years of Building{" "}
              <span className="italic font-medium">What Matters</span>
            </h2>
            <div className="space-y-4 font-body text-muted-foreground leading-relaxed">
              <p>
                Wiseful Oak Systems is led by Carlos Alexandre, a seasoned
                Software Development Engineer with over {YEARS_OF_EXPERIENCE} years of experience
                delivering high-impact solutions across multiple industries.
              </p>
              <p>
                From founding engineering roles to complex enterprise systems,
                Carlos brings deep technical expertise paired with a passion for
                sustainable architecture and robust, maintainable code.
              </p>
              <p>
                Based in São Paulo, serving clients globally. Every engagement is
                treated as a partnership — deeply understanding your domain before
                writing a single line of code.
              </p>
            </div>
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
              { number: "4+", label: "Industry Verticals" },
              { number: "∞", label: "Commitment to Quality" },
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
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
