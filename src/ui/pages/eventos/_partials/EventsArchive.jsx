/* eslint-disable react/prop-types */
import { formatDate } from "@/utils/formatDate";
import { MediaCard, Section, SectionHeading } from "@/ui/components";

export function EventsArchive({ events }) {
  const years = [...new Set(events.map((event) => event.date.slice(0, 4)))].sort((a, b) => b.localeCompare(a));

  return (
    <Section tone="tint">
      <SectionHeading eyebrow="Arquivo" title="Momentos que ficam" lede="Reveja espetáculos, workshops e encontros que fizeram parte da nossa história." />
      <div className="mt-12 space-y-16">
        {years.map((year) => (
          <section key={year} aria-labelledby={`year-${year}`}>
            <div className="mb-7 flex items-center gap-5">
              <h2 id={`year-${year}`} className="text-title font-semibold text-brand-950">{year}</h2>
              <div className="h-px flex-1 bg-brand-200" />
            </div>
            <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
              {events.filter((event) => event.date.startsWith(year)).map((event) => (
                <MediaCard key={event.id} title={event.name || event.title} subtitle={formatDate(event.date)} image={event.image} to={`/evento/${event.id}`} aspect="landscape" />
              ))}
            </div>
          </section>
        ))}
      </div>
    </Section>
  );
}
