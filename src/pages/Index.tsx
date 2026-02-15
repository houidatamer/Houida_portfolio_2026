import { Link } from "react-router-dom";
import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import Parallax from "@/components/Parallax";
import heroLanding from "@/assets/instta post 3.png";
import heroMv1 from "@/assets/Reflet.png";
import heroMv2 from "@/assets/out_of_my_way.jpg";
import heroCgi from "@/assets/on the ground.png";
import hero3d from "@/assets/0003.png";
import heroMotion from "@/assets/dominique.png";
import heroCommercials from "@/assets/microsoft.png";

const projects = [
  { title: "Reflet", category: "Music Video", image: heroMv1, path: "/work/music-video-1" },
  { title: "Out of my way", category: "Music Video", image: heroMv2, path: "/work/music-video-2" },
  { title: "Echoes of Stone", category: "CGI / VFX", image: heroCgi, path: "/work/cgi-vfx" },
  { title: "Abstract", category: "3D Artwork", image: hero3d, path: "/work/3d-artwork" },
  { title: "Visual Motion", category: "Motion Design", image: heroMotion, path: "/work/motion-design" },
  { title: "Advertising", category: "Commercials", image: heroCommercials, path: "/work/commercials" },
];

const Index = () => {
  const heroRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: heroRef,
    offset: ["start start", "end start"],
  });
  const heroY = useTransform(scrollYProgress, [0, 1], [0, 200]);
  const heroScale = useTransform(scrollYProgress, [0, 1], [1, 1.15]);
  const heroOpacity = useTransform(scrollYProgress, [0, 0.8], [1, 0]);

  return (
    <div className="min-h-screen bg-background grain-overlay">
      {/* Hero */}
      <section ref={heroRef} className="relative h-screen flex items-center justify-center overflow-hidden">
        <motion.img
          src={heroLanding}
          alt="Portfolio hero"
          className="absolute inset-0 w-full h-full object-cover"
          style={{ y: heroY, scale: heroScale }}
        />
        <div className="absolute inset-0 bg-background/60" />
        <div className="absolute inset-0 hero-overlay" />
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, ease: "easeOut" }}
          style={{ opacity: heroOpacity }}
          className="relative z-10 text-center px-6"
        >
          <h1 className="font-heading text-5xl md:text-7xl lg:text-8xl font-bold text-foreground leading-none">
            Creative<span className="text-gradient-gold">.</span>
          </h1>
          <p className="mt-4 text-muted-foreground font-body text-sm md:text-base tracking-[0.3em] uppercase">
            3D Artist — CGI — Motion Designer
          </p>
          <motion.div
            initial={{ width: 0 }}
            animate={{ width: "4rem" }}
            transition={{ delay: 0.8, duration: 0.8 }}
            className="h-px bg-primary mx-auto mt-8"
          />
        </motion.div>
      </section>

      {/* Projects Grid */}
      <section className="max-w-7xl mx-auto px-4 md:px-10 py-20">
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="text-xs tracking-[0.4em] uppercase text-muted-foreground font-heading mb-10"
        >
          Selected Work
        </motion.p>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-6">
          {projects.map((project, i) => (
            <motion.div
              key={project.path}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1, duration: 0.6 }}
            >
              <Link to={project.path} className="group block relative overflow-hidden rounded-sm">
                <Parallax speed={0.15}>
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full aspect-[16/10] object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                </Parallax>
                <div className="absolute inset-0 bg-background/40 group-hover:bg-background/20 transition-colors duration-500" />
                <div className="absolute bottom-5 left-5 z-10">
                  <p className="text-xs tracking-widest uppercase text-muted-foreground font-heading">
                    {project.category}
                  </p>
                  <h3 className="font-heading text-xl md:text-2xl font-semibold text-foreground mt-1">
                    {project.title}
                  </h3>
                </div>
              </Link>
            </motion.div>
          ))}
        </div>
      </section>
    </div>
  );
};

export default Index;
