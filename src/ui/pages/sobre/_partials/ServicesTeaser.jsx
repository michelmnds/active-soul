import { LuCalendarDays, LuHouse, LuUsers } from "react-icons/lu";
import { about } from "@/content/about";
import { Section, SectionHeading } from "@/ui/components";

const icons = { calendar: LuCalendarDays, home: LuHouse, users: LuUsers };

export function ServicesTeaser() {
  return (
    <Section>
      <SectionHeading eyebrow="Mais possibilidades" title="O estúdio adapta-se à sua ideia" align="center" />
      <div className="mt-12 grid gap-6 md:grid-cols-3">
        {about.services.map((service) => {
          const Icon = icons[service.icon];
          return (
            <article key={service.title} className="rounded-card border border-brand-200 bg-white p-7 text-center shadow-soft">
              <span className="mx-auto grid size-14 place-items-center rounded-full bg-accent-tint text-2xl text-accent"><Icon aria-hidden /></span>
              <h3 className="mt-5 text-lg font-semibold text-brand-950">{service.title}</h3>
              <p className="mt-3 text-sm leading-6 text-brand-700">{service.description}</p>
            </article>
          );
        })}
      </div>
    </Section>
  );
}
