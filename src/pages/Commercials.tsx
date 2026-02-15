import ProjectLayout from "@/components/ProjectLayout";
import heroImg from "@/assets/microsoft.png";
import shot1 from "@/assets/christmas.png";
import shot2 from "@/assets/dental.png";
import shot3 from "@/assets/magix.png";

// Each image is independent — change these to import different files later.



const Commercials = () => (
  <ProjectLayout
    pageClass="page-commercial"
    heroImage={heroImg}
    heroAlt="Luxe - Commercial Campaign"
    title="Advertising"
    subtitle="Commercial — Product CGI"
    supportImages={[
      { src: shot1, alt: "Product close-up" },
      { src: shot2, alt: "Campaign visual" },
      { src: shot3, alt: "Lighting breakdown" },
    ]}
    details={[
      { label: "Brand", value: "Various clients" },
      { label: "Objective", value: "TV ads — Digital & Print" },
      { label: "Tools", value: "Blender, After effects, Photoshop" },
      { label: "Year", value: "2022-2025" },
    ]}
    description="A selection of commercial projects developed for brands and clients across different platforms.

These works focus on translating strategic objectives into compelling visual storytelling — combining cinematic direction, motion design, and post-production workflows to deliver impactful and audience-driven results."
  />
);

export default Commercials;
