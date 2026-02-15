import { motion } from "framer-motion";
import { Mail, Phone, Linkedin, Instagram, Download } from "lucide-react";

const links = [
  { icon: Mail, label: "Email", value: "tamerhouida@gmail.com", href: "mailto:hello@studio.com" },
  { icon: Phone, label: "Phone", value: "+33 7 81 59 99 59", href: "tel:+33600000000" },
  { icon: Linkedin, label: "LinkedIn", value: "https://www.linkedin.com/in/tamer-houida-7565aa16b/", href: "#" },
  { icon: Instagram, label: "Instagram", value: "https://www.instagram.com/houidatamer/", href: "#" },
];

const Contact = () => {
  return (
    <div className="min-h-screen bg-background flex items-center justify-center px-6">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7 }}
        className="max-w-lg w-full pt-24"
      >
        <h1 className="font-heading text-4xl md:text-5xl font-bold text-foreground mb-2">
          Get in Touch
        </h1>
        <p className="text-muted-foreground font-body text-sm mb-12">
          Open for freelance, collaborations, and creative projects.
        </p>

        <div className="space-y-6">
          {links.map((link) => (
            <a
              key={link.label}
              href={link.href}
              className="flex items-center gap-4 group"
            >
              <div className="w-10 h-10 rounded-sm bg-secondary flex items-center justify-center group-hover:bg-primary transition-colors duration-300">
                <link.icon size={18} className="text-muted-foreground group-hover:text-primary-foreground transition-colors" />
              </div>
              <div>
                <p className="text-xs tracking-widest uppercase text-muted-foreground font-heading">
                  {link.label}
                </p>
                <p className="text-sm text-foreground font-body">{link.value}</p>
              </div>
            </a>
          ))}
        </div>

        <div className="mt-12 pt-8 border-t border-border">
          <a
            href="/cv.pdf"
            download="Houida_CV.pdf"
            className="inline-flex items-center gap-3 px-6 py-3 bg-primary text-primary-foreground font-heading text-sm tracking-wider uppercase rounded-sm hover:opacity-90 transition-opacity"
          >
            <Download size={16} />
            Download CV
          </a>
        </div>
      </motion.div>
    </div>
  );
};

export default Contact;
