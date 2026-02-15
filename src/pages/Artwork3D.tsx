import ProjectLayout from "@/components/ProjectLayout";
import heroImg from "@/assets/0003.png";
import shot1 from "@/assets/abstract.png";
import shot2 from "@/assets/space render 2.png";
import shot3 from "@/assets/cellrender.jpg";

// shot3 has no import yet — using hero as fallback until you add one


const Artwork3D = () => (
  <ProjectLayout
    pageClass="page-art"
    heroImage={heroImg}
    heroAlt="Synthesis - 3D Artwork"
    title="Synthesis"
    subtitle="Personal 3D Artwork Collection"
    supportImages={[
      { src: shot1, alt: "Clay render" },
      { src: shot2, alt: "Detail close-up" },
      { src: shot3, alt: "Turntable still" },
    ]}
    details={[
      { label: "Medium", value: "Digital Sculpture / Hard Surface" },
      { label: "Tools", value: "ZBrush, Blender, Substance" },
      { label: "Year", value: "2023–2025" },
      { label: "Exhibition", value: "Digital Gallery" },
    ]}
    description="A personal exploration of form, material, and light. Each piece in this collection investigates the tension between organic and mechanical — blending biomechanical aesthetics with hyper-realistic rendering techniques to create sculptures that exist at the edge of reality."
  />
);

export default Artwork3D;
