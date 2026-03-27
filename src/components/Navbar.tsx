import { motion } from "framer-motion";
import logoIcon from "@/assets/oak-logo.png";

const navItems = ["Services", "About", "Domains", "Contact"];

const Navbar = () => {
  const scrollTo = (id: string) => {
    document.getElementById(id.toLowerCase())?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <motion.nav
      initial={{ y: -20, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6 }}
      className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-md border-b border-border"
    >
      <div className="max-w-6xl mx-auto px-6 py-4 flex items-center justify-between">
        <div className="flex items-center gap-3 cursor-pointer" onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}>
          <img src={logoIcon} alt="Wiseful Oak Systems" width={32} height={32} />
          <span className="font-display text-lg font-semibold text-foreground tracking-tight">
            Wiseful Oak Systems
          </span>
        </div>
        <div className="hidden md:flex items-center gap-8">
          {navItems.map((item) => (
            <button
              key={item}
              onClick={() => scrollTo(item)}
              className="font-body text-sm font-medium text-muted-foreground hover:text-foreground transition-colors"
            >
              {item}
            </button>
          ))}
          <button
            onClick={() => scrollTo("Contact")}
            className="px-5 py-2 rounded-md bg-primary text-primary-foreground font-body text-sm font-semibold hover:opacity-90 transition-opacity"
          >
            Get in Touch
          </button>
        </div>
      </div>
    </motion.nav>
  );
};

export default Navbar;
