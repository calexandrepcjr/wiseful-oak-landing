import { motion } from "framer-motion";
import heroBg from "@/assets/hero-bg.jpg";

const HeroSection = () => {
  const scrollToContact = () => {
    document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" });
  };

  const scrollToServices = () => {
    document.getElementById("services")?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background image */}
      <div className="absolute inset-0">
        <img
          src={heroBg}
          alt=""
          width={1920}
          height={1080}
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-hero-gradient opacity-80" />
      </div>

      <div className="relative z-10 max-w-4xl mx-auto px-6 text-center">
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="font-body text-sm uppercase tracking-[0.3em] text-secondary mb-6"
        >
          Software Engineering Consultancy
        </motion.p>
        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="font-display text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-primary-foreground leading-[1.1] mb-6"
        >
          Engineering Solutions{" "}
          <span className="italic font-medium">Rooted</span> in
          <br />
          Deep Expertise
        </motion.h1>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.7 }}
          className="font-body text-lg md:text-xl text-primary-foreground/80 max-w-2xl mx-auto mb-10 leading-relaxed"
        >
          Over a decade of building sustainable architectures across healthcare,
          finance, logistics, and eCommerce. We turn complex challenges into
          elegant, high-impact systems.
        </motion.p>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.9 }}
          className="flex flex-col sm:flex-row gap-4 justify-center"
        >
          <button
            onClick={scrollToContact}
            className="px-8 py-3.5 rounded-md bg-secondary text-secondary-foreground font-body font-semibold text-base hover:opacity-90 transition-opacity"
          >
            Start a Conversation
          </button>
          <button
            onClick={scrollToServices}
            className="px-8 py-3.5 rounded-md border border-primary-foreground/30 text-primary-foreground font-body font-medium text-base hover:bg-primary-foreground/10 transition-colors"
          >
            Explore Services
          </button>
        </motion.div>
      </div>
    </section>
  );
};

export default HeroSection;
