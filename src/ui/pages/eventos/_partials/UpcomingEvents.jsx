/* eslint-disable react/prop-types */
import { formatDate } from "@/utils/formatDate";
import { MediaCard, Section, SectionHeading } from "@/ui/components";

export function UpcomingEvents({ events }) {
  if (!events.length) return null;

  return (
    <Section>
      <SectionHeading eyebrow="Agenda" title="Próximos eventos" lede="Encontros, espetáculos e experiências para viver connosco." />
      <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {events.map((event) => (
          <MediaCard key={event.id} title={event.name || event.title} subtitle={event.schedule[0]?.location} image={event.image} to={`/evento/${event.id}`} aspect="landscape" dateLabel={event.schedule.length ? formatDate(event.date, { short: true }) : "Agenda aberta"} />
        ))}
      </div>
    </Section>
  );
}
