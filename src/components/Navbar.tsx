import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { Menu, X } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

const projects = [
  { name: "Music Video I", path: "/work/music-video-1" },
  { name: "Music Video II", path: "/work/music-video-2" },
  { name: "CGI / VFX", path: "/work/cgi-vfx" },
  { name: "3D Artwork", path: "/work/3d-artwork" },
  { name: "Motion Design", path: "/work/motion-design" },
  { name: "Commercials", path: "/work/commercials" },
];

const Navbar = () => {
  const [workOpen, setWorkOpen] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const location = useLocation();

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 font-heading">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-5 md:px-10">
        <Link to="/" className="text-lg font-semibold tracking-wider text-foreground">
          STUDIO<span className="text-primary">.</span>
        </Link>

        {/* Desktop */}
        <div className="hidden items-center gap-10 md:flex">
          <div
            className="relative"
            onMouseEnter={() => setWorkOpen(true)}
            onMouseLeave={() => setWorkOpen(false)}
          >
            <button className="text-sm tracking-widest uppercase text-muted-foreground transition-colors hover:text-foreground">
              Work
            </button>
            <AnimatePresence>
              {workOpen && (
                <motion.div
                  initial={{ opacity: 0, y: 8 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: 8 }}
                  transition={{ duration: 0.2 }}
                  className="absolute left-0 top-full mt-2 w-52 rounded bg-card border border-border p-2 shadow-xl z-50"
                >
                  {projects.map((p) => (
                    <Link
                      key={p.path}
                      to={p.path}
                      className={`block rounded px-4 py-2.5 text-sm transition-colors hover:bg-secondary ${
                        location.pathname === p.path ? "text-primary" : "text-secondary-foreground"
                      }`}
                    >
                      {p.name}
                    </Link>
                  ))}
                </motion.div>
              )}
            </AnimatePresence>
          </div>
          <Link
            to="/about"
            className="text-sm tracking-widest uppercase text-muted-foreground transition-colors hover:text-foreground"
          >
            About
          </Link>
          <Link
            to="/contact"
            className="text-sm tracking-widest uppercase text-muted-foreground transition-colors hover:text-foreground"
          >
            Contact
          </Link>
        </div>

        {/* Mobile toggle */}
        <button
          className="md:hidden text-foreground"
          onClick={() => setMobileOpen(!mobileOpen)}
        >
          {mobileOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile menu */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden bg-card border-b border-border overflow-hidden"
          >
            <div className="px-6 py-4 space-y-1">
              <p className="text-xs tracking-widest uppercase text-muted-foreground mb-2">Work</p>
              {projects.map((p) => (
                <Link
                  key={p.path}
                  to={p.path}
                  onClick={() => setMobileOpen(false)}
                  className="block py-2 text-sm text-secondary-foreground hover:text-primary transition-colors"
                >
                  {p.name}
                </Link>
              ))}
              <div className="border-t border-border my-3" />
              <Link to="/about" onClick={() => setMobileOpen(false)} className="block py-2 text-sm text-secondary-foreground hover:text-primary">
                About
              </Link>
              <Link to="/contact" onClick={() => setMobileOpen(false)} className="block py-2 text-sm text-secondary-foreground hover:text-primary">
                Contact
              </Link>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

export default Navbar;
