import { useState } from "react";
import { LuMaximize2 } from "react-icons/lu";
import { landing } from "@/content/landing";
import { Lightbox, Section, SectionHeading } from "@/ui/components";

export function Timetable() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <Section>
      <div className="grid items-center gap-10 lg:grid-cols-[.75fr_1.25fr] lg:gap-16">
        <div>
          <SectionHeading
            eyebrow="Planeia a semana"
            title={landing.timetable.title}
            lede="Consulta o horário completo e encontra a aula certa para ti."
          />
        </div>
        <button
          className="group relative overflow-hidden rounded-card bg-brand-100 shadow-card"
          onClick={() => setIsOpen(true)}
          aria-label={`Ampliar ${landing.timetable.title}`}
          type="button"
        >
          <img
            src={landing.timetable.image}
            alt={landing.timetable.title}
            width={landing.timetable.width}
            height={landing.timetable.height}
            className="h-auto w-full transition-transform duration-500 group-hover:scale-[1.02]"
            loading="lazy"
          />
          <span className="absolute bottom-4 right-4 grid size-11 place-items-center rounded-full bg-white text-brand-950 shadow-card">
            <LuMaximize2 aria-hidden />
          </span>
        </button>
      </div>
      <Lightbox
        isOpen={isOpen}
        onClose={() => setIsOpen(false)}
        image={landing.timetable.image}
        alt={landing.timetable.title}
        width={landing.timetable.width}
        height={landing.timetable.height}
      />
    </Section>
  );
}
