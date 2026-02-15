import ProjectLayout from "@/components/ProjectLayout";
import heroImg from "@/assets/out_of_my_way.jpg";
import shot1 from "@/assets/outofmyway_2.jpg";
import shot2 from "@/assets/outofmyway_3.jpg";
// import shot3 from "@/assets/your-image-3.jpg"; // uncomment when you have the image

// shot3 has no import yet — using hero as fallback until you add one
const shot3 = heroImg;

const MusicVideo2 = () => (
  <ProjectLayout
    pageClass="page-mv2"
    heroImage={heroImg}
    heroAlt="Out of my way - Music Video"
    title="Neon Pulse"
    subtitle="Music Video — Cyberpunk Futuristic"
    supportImages={[
      { src: shot1, alt: "Neon cityscape detail" },
      { src: shot2, alt: "Typography overlay" },
      { src: shot3, alt: "Texture close-up" },
    ]}
    details={[
      { label: "Role", value: "Creative Direction / 3D / Compositing, Editing" },
      { label: "Tools", value: "Ember gen, Blender, Davinci resolve, After effects" },
      { label: "Year", value: "2024" },
      { label: "Client", value: "Record Label" },
    ]}
    description="“Out of My Way” is a music video produced for an independent Moroccan artist as part of the album’s visual rollout.
For this project, I was involved in developing the artistic vision and handling the 3D compositing and editing, focusing on creating a dynamic and immersive visual experience that complements the track’s energy."
  />
);

export default MusicVideo2;
