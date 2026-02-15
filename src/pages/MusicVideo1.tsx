import ProjectLayout from "@/components/ProjectLayout";
import heroImg from "@/assets/Reflet.png";
import shot1 from "@/assets/embergen.png";
import shot2 from "@/assets/reflet 2.jpg";
import shot3 from "@/assets/reflet 3.png";
// Use hero as fallback until reflet 2.jpg and reflet 3.jpg exist in src/assets





const MusicVideo1 = () => (
  <ProjectLayout
    pageClass="page-mv1"
    heroImage={heroImg}
    heroAlt="Reflet - Music Video"
    title="Reflet"
    subtitle="Music Video — Dark Cinematic"
    supportImages={[
      { src: shot1, alt: "3D Visuals", className: "object-contain bg-background/20" },
      { src: shot2, alt: "Grading" },
      { src: shot3, alt: "Compositing" },
    ]}
    details={[
      { label: "Role", value: "Direction / 3D / VFX / Editing" },
      { label: "Tools", value: "Blender, After Effects, DaVinci" },
      { label: "Year", value: "2024" },
      { label: "Client", value: "Independent Artist" },
    ]}
    description={`"Reflet" is a music video created for an independent Moroccan artist. The project is part of a larger visual series accompanying the album. On this production, I had the opportunity to contribute to the creative direction, 3D compositing, and editing, helping shape the visual identity and atmosphere of the piece.`}
  />
);

export default MusicVideo1;
