import ProjectLayout from "@/components/ProjectLayout";
import heroImg from "@/assets/on the ground.png";
import shot1 from "@/assets/on the ground viewport.png";
import shot2 from "@/assets/paula.png";
import shot3 from "@/assets/statues + rust 2.png";

const CgiVfx = () => (
  <ProjectLayout
    pageClass="page-cgi"
    heroImage={heroImg}
    heroAlt="Horizon - CGI/VFX Short Film"
    title="Echoes of Stone"
    subtitle="CGI / VFX Short Film"
    supportImages={[
      { src: shot1, alt: "Wireframe breakdown" },
      { src: shot2, alt: "Compositing layers" },
      { src: shot3, alt: "Lighting pass" },
    ]}
    details={[
      { label: "Role", value: "VFX Supervisor / 3D Lead" },
      { label: "Tools", value: "Blender, After Effects, Photoshop, Substance Painter" },
      { label: "Year", value: "2025" },
      { label: "Duration", value: "8 min Short Film" },
    ]}
    description="Serving as VFX Supervisor and 3D Lead, I oversaw the visual effects development and execution, ensuring cohesion between on-set footage and digital enhancements.

I worked primarily on key statue sequences, designing and integrating procedural rust and mold effects to convey age, erosion, and environmental storytelling. The goal was to create organic surface decay that felt grounded, tactile, and narratively meaningful.

Tools: Blender, After Effects, Photoshop, Substance Painter"
  />
);

export default CgiVfx;
