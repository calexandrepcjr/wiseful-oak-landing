import { motion } from "framer-motion";
import { useLocation, useNavigate } from "react-router-dom";
import logoIcon from "@/assets/oak-logo.png";

const navItems = ["Services", "About", "Domains", "Contact"];

const Navbar = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const isHome = location.pathname === "/";

  const goToSection = (id: string) => {
    const target = id.toLowerCase();
    if (isHome) {
      document.getElementById(target)?.scrollIntoView({ behavior: "smooth" });
    } else {
      navigate(`/#${target}`);
    }
  };

  return (
    <motion.nav
      initial={{ y: -20, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6 }}
      className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-md border-b border-border"
    >
      <div className="max-w-6xl mx-auto px-6 py-3 flex items-center justify-between">
        <button
          type="button"
          className="flex items-center gap-3 cursor-pointer"
          onClick={() => (isHome ? window.scrollTo({ top: 0, behavior: "smooth" }) : navigate("/"))}
        >
          <img src={logoIcon} alt="Wiseful Oak Systems" className="w-14 h-14 md:w-20 md:h-20 drop-shadow-lg" />
          <span className="font-display text-xl md:text-2xl font-semibold text-foreground tracking-tight">
            Wiseful Oak Systems
          </span>
        </button>
        <div className="hidden md:flex items-center gap-8">
          {navItems.map((item) => (
            <button
              key={item}
              onClick={() => goToSection(item)}
              className="font-body text-sm font-medium text-muted-foreground hover:text-foreground transition-colors"
            >
              {item}
            </button>
          ))}
          <button
            onClick={() => navigate("/news")}
            className="font-body text-sm font-medium text-muted-foreground hover:text-foreground transition-colors"
          >
            News
          </button>
          <button
            onClick={() => goToSection("Contact")}
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
