import { motion } from "framer-motion";

interface ProjectDetail {
  label: string;
  value: string;
}

interface ProjectLayoutProps {
  pageClass?: string;
  heroImage: string;
  heroAlt: string;
  title: string;
  subtitle?: string;
  supportImages: { src: string; alt: string; className?: string }[];
  details: ProjectDetail[];
  description: string;
}

const stagger = {
  hidden: {},
  show: { transition: { staggerChildren: 0.15 } },
};

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  show: { opacity: 1, y: 0, transition: { duration: 0.7, ease: "easeOut" as const } },
};

const ProjectLayout = ({
  pageClass = "",
  heroImage,
  heroAlt,
  title,
  subtitle,
  supportImages,
  details,
  description,
}: ProjectLayoutProps) => {
  return (
    <div className={`min-h-screen bg-background grain-overlay ${pageClass}`}>
      <div className="pt-24 px-4 md:px-10 max-w-7xl mx-auto pb-20">
        <motion.div
          variants={stagger}
          initial="hidden"
          animate="show"
          className="space-y-10"
        >
          {/* Hero Section - 60% */}
          <motion.div variants={fadeUp} className="relative">
            <div className="relative overflow-hidden rounded-sm">
              <img
                src={heroImage}
                alt={heroAlt}
                className="w-full aspect-[16/9] object-cover"
                loading="eager"
              />
              <div className="absolute inset-0 hero-overlay" />
              <div className="absolute bottom-6 left-6 md:bottom-10 md:left-10 z-10">
                <h1 className="font-heading text-3xl md:text-5xl lg:text-6xl font-bold text-foreground leading-tight">
                  {title}
                </h1>
                {subtitle && (
                  <p className="mt-2 text-sm md:text-base text-muted-foreground font-body tracking-wide">
                    {subtitle}
                  </p>
                )}
              </div>
            </div>
          </motion.div>

          {/* Supporting Images - 30% */}
          <motion.div variants={fadeUp}>
            <div className="grid grid-cols-2 md:grid-cols-3 gap-3 md:gap-4">
              {supportImages.map((img, i) => (
                <motion.div
                  key={i}
                  variants={fadeUp}
                  className="overflow-hidden rounded-sm hover-lift"
                >
                  <img
                    src={img.src}
                    alt={img.alt}
                    className={`w-full aspect-[4/3] object-cover transition-transform duration-700 hover:scale-105 ${img.className || ""}`}
                    loading="lazy"
                  />
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Text Section - 10% */}
          <motion.div variants={fadeUp} className="max-w-2xl">
            <div className="h-px w-16 bg-primary mb-6 animate-reveal-line" />
            <p className="text-foreground/80 font-body text-sm md:text-base leading-relaxed mb-8">
              {description}
            </p>
            <div className="grid grid-cols-2 gap-x-10 gap-y-4">
              {details.map((d, i) => (
                <div key={i}>
                  <p className="text-xs tracking-widest uppercase text-muted-foreground font-heading">
                    {d.label}
                  </p>
                  <p className="text-sm text-foreground mt-1 font-body">{d.value}</p>
                </div>
              ))}
            </div>
          </motion.div>
        </motion.div>
      </div>
    </div>
  );
};

export default ProjectLayout;
