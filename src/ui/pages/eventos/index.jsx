import { news } from "@/content/news";
import { useDocumentTitle } from "@/hooks";
import { PageHero } from "@/ui/pages/components";
import { EventsArchive, UpcomingEvents } from "./_partials";

export function EventsPage() {
  useDocumentTitle("Eventos");
  const today = new Date().toISOString().slice(0, 10);
  const sortedEvents = [...news].sort((a, b) => b.date.localeCompare(a.date));
  const upcomingEvents = sortedEvents
    .filter((event) => !event.schedule.length || event.date >= today)
    .sort((a, b) => a.date.localeCompare(b.date));
  const upcomingIds = new Set(upcomingEvents.map((event) => event.id));
  const archivedEvents = sortedEvents.filter((event) => !upcomingIds.has(event.id));

  return (
    <>
      <PageHero eyebrow="Em palco e pela cidade" title="Eventos Active Soul" description="Espetáculos, workshops e experiências que juntam movimento, criatividade e comunidade." image={news[0].image} />
      <UpcomingEvents events={upcomingEvents} />
      <EventsArchive events={archivedEvents} />
    </>
  );
}
