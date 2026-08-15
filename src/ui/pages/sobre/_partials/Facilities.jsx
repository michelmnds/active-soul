import { useState } from "react";
import { LuExpand } from "react-icons/lu";
import { about } from "@/content/about";
import { Lightbox, Section, SectionHeading, Tabs } from "@/ui/components";

export function Facilities() {
  const [selectedFacility, setSelectedFacility] = useState(null);
  const items = about.facilities.map((facility) => ({
    ...facility,
    content: (
      <button
        className="group relative block w-full cursor-zoom-in rounded-card shadow-card focus-visible:outline-none focus-visible:ring-4 focus-visible:ring-accent/30"
        onClick={() => setSelectedFacility(facility)}
        aria-label={`Ver ${facility.label} em ecrã inteiro`}
        type="button"
      >
        <img
          src={facility.image}
          alt={facility.label}
          className="aspect-[16/8] w-full rounded-card object-cover"
          loading="lazy"
        />
        <span
          className="absolute right-4 top-4 grid size-11 place-items-center rounded-full bg-white/95 text-brand-950 shadow-soft transition group-hover:scale-105"
          aria-hidden
        >
          <LuExpand />
        </span>
      </button>
    ),
  }));

  return (
    <Section tone="tint">
      <SectionHeading
        eyebrow="Por dentro"
        title="Espaços para criar"
        lede="Ambientes versáteis, preparados para aulas, ensaios, eventos e brincadeira."
      />
      <div className="mt-10">
        <Tabs items={items} label="Espaços do Active Soul" />
      </div>
      <Lightbox
        isOpen={Boolean(selectedFacility)}
        onClose={() => setSelectedFacility(null)}
        image={selectedFacility?.image}
        alt={selectedFacility?.label}
      />
    </Section>
  );
}
