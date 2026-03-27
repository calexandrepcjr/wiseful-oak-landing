import { motion } from "framer-motion";
import { Mail, Linkedin, MapPin } from "lucide-react";

const ContactSection = () => {
  return (
    <section id="contact" className="py-24 md:py-32 bg-card">
      <div className="max-w-3xl mx-auto px-6 text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <p className="font-body text-sm uppercase tracking-[0.25em] text-accent mb-3">
            Let's Talk
          </p>
          <h2 className="font-display text-3xl md:text-4xl font-bold text-foreground mb-6">
            Ready to Build Something{" "}
            <span className="italic font-medium">Exceptional</span>?
          </h2>
          <p className="font-body text-muted-foreground leading-relaxed mb-10 max-w-xl mx-auto">
            Whether you need a fractional CTO, a full architecture review, or
            hands-on engineering support — let's start with a conversation.
          </p>

          <div className="flex flex-col sm:flex-row gap-6 justify-center items-center mb-12">
            <a
              href="mailto:wisefuloaksystems@pm.me"
              className="flex items-center gap-3 px-6 py-3 rounded-md bg-primary text-primary-foreground font-body font-semibold hover:opacity-90 transition-opacity"
            >
              <Mail className="w-5 h-5" />
              Get in Touch
            </a>
            <a
              href="https://www.linkedin.com/in/carlos-alexandre-pires-de-carvalho-junior-04110033/"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-3 px-6 py-3 rounded-md border border-border text-foreground font-body font-medium hover:bg-muted transition-colors"
            >
              <Linkedin className="w-5 h-5" />
              Connect on LinkedIn
            </a>
          </div>

          <div className="flex items-center justify-center gap-2 text-muted-foreground font-body text-sm">
            <MapPin className="w-4 h-4" />
            <span>São Paulo, Brazil · Serving clients worldwide</span>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default ContactSection;
