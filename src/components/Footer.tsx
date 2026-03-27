import logoIcon from "@/assets/oak-logo.png";

const Footer = () => {
  return (
    <footer className="py-10 bg-primary">
      <div className="max-w-6xl mx-auto px-6 flex flex-col sm:flex-row items-center justify-between gap-4">
        <div className="flex items-center gap-3">
          <img src={logoIcon} alt="" width={24} height={24} className="brightness-200" />
          <span className="font-display text-sm font-medium text-primary-foreground/80">
            Wiseful Oak Systems LLC
          </span>
        </div>
        <p className="font-body text-xs text-primary-foreground/50">
          © {new Date().getFullYear()} Wiseful Oak Systems. All rights reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
