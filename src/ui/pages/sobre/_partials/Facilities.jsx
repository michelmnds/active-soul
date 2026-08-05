import { about } from "@/content/about";
import { Section, SectionHeading, Tabs } from "@/ui/components";

export function Facilities() {
  const items = about.facilities.map((facility) => ({
    ...facility,
    content: <img src={facility.image} alt={facility.label} className="aspect-[16/8] w-full rounded-card object-cover shadow-card" loading="lazy" />,
  }));

  return (
    <Section tone="tint">
      <SectionHeading eyebrow="Por dentro" title="Espaços para criar e mover" lede="Cinco ambientes versáteis, preparados para aulas, ensaios, eventos e brincadeira." />
      <div className="mt-10"><Tabs items={items} label="Espaços do Active Soul" /></div>
    </Section>
  );
}
