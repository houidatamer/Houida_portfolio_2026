import { motion } from "framer-motion";
import portraitImg from "@/assets/upscale.png";

const skills = [
  "3D Modeling & Sculpting",
  "CGI & VFX",
  "Motion Design",
  "Video Editing",
  "Color Grading",
  "Compositing",
  "Art Direction",
];

const About = () => {
  return (
    <div className="min-h-screen bg-background px-6 md:px-10">
      <div className="max-w-4xl mx-auto pt-32 pb-20">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
        >
          <p className="text-xs tracking-[0.4em] uppercase text-muted-foreground font-heading mb-4">
            About
          </p>
          <h1 className="font-heading text-4xl md:text-6xl font-bold text-foreground leading-tight mb-8">
            Crafting Worlds<br />
            <span className="text-gradient-gold">Frame by Frame</span>
          </h1>

          <div className="grid md:grid-cols-2 gap-12 mt-12">
            {/* Portrait */}
            <div className="aspect-[3/4] rounded-sm overflow-hidden bg-secondary">
              <img
                src={portraitImg}
                alt="Portrait"
                className="w-full h-full object-cover"
              />
            </div>

            <div className="space-y-6 font-body">
              <p className="text-foreground/80 text-sm leading-relaxed">
                A multidisciplinary digital artist with a background in Audiovisual & Media production. 
                Specializing in 3D visualization, CGI, VFX, and motion design — creating immersive visual 
                experiences that blur the line between reality and imagination.
              </p>
              <p className="text-foreground/80 text-sm leading-relaxed">
                My work is driven by a deep fascination with cinematic storytelling, cutting-edge technology, 
                and the emotional power of visual art. Every project is an opportunity to push creative 
                boundaries and deliver something that resonates.
              </p>

              <div className="pt-6">
                <p className="text-xs tracking-[0.3em] uppercase text-muted-foreground font-heading mb-4">
                  Core Skills
                </p>
                <div className="flex flex-wrap gap-2">
                  {skills.map((skill) => (
                    <span
                      key={skill}
                      className="px-3 py-1.5 bg-secondary text-secondary-foreground text-xs font-heading tracking-wider rounded-sm"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>

              <div className="pt-6">
                <p className="text-xs tracking-[0.3em] uppercase text-muted-foreground font-heading mb-3">
                  Vision
                </p>
                <p className="text-foreground/80 text-sm leading-relaxed italic">
                  "To create visual experiences that transcend the screen — where art meets technology 
                  and every pixel tells a story."
                </p>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default About;
