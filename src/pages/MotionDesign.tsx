import ProjectLayout from "@/components/ProjectLayout";
import heroImg from "@/assets/Dominique.png";
import shot1 from "@/assets/pigomath.png";
import shot2 from "@/assets/change2.png";
import shot3 from "@/assets/m3.png";

// shot3 has no import yet — using hero as fallback until you add one


const MotionDesign = () => (
  <ProjectLayout
    pageClass="page-motion"
    heroImage={heroImg}
    heroAlt="Kinetic - Motion Design"
    title="Visual Motion"
    subtitle="Motion Design & Animation"
    supportImages={[
      { src: shot1, alt: "Storyboard frame" },
      { src: shot2, alt: "Typography animation" },
      { src: shot3, alt: "Branding element" },
    ]}
    details={[
      { label: "Role", value: "Motion Designer / Animator" },
      { label: "Tools", value: "After Effects, Blender, Photoshop" },
      { label: "Year", value: "2024" },
      { label: "Style", value: "Kinetic Typography / Abstract" },
    ]}
    description="A curated selection of motion design works developed across different formats, including promotional content, digital campaigns, and experimental visuals.

These projects explore rhythm, typography, compositing, and dynamic transitions, with a focus on strong visual identity and precise timing.

From concept development to final delivery, I handled design, animation, and post-production, adapting each piece to its intended platform and audience."
  />
);

export default MotionDesign;
