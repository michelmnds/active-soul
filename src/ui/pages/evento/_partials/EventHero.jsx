/* eslint-disable react/prop-types */
import { LuArrowLeft } from "react-icons/lu";
import { formatDate } from "@/utils/formatDate";
import { Button } from "@/ui/components";

export function EventHero({ event }) {
  return (
    <section className="bg-brand-100 py-10 sm:py-14 lg:py-20">
      <div className="container">
        <Button to="/eventos" variant="ghost" className="mb-8"><LuArrowLeft aria-hidden /> Todos os eventos</Button>
        <div className="grid items-center gap-10 lg:grid-cols-[.9fr_1.1fr] lg:gap-16">
          <div>
            <p className="text-eyebrow font-medium uppercase text-accent">{formatDate(event.date)}</p>
            <h1 className="mt-4 text-display-lg font-semibold text-brand-950">{event.title}</h1>
            {event.schedule[0]?.location && <p className="mt-5 text-lg text-brand-700">{event.schedule[0].location}</p>}
          </div>
          <div className="overflow-hidden rounded-card bg-brand-200 shadow-card">
            {/* eslint-disable-next-line react/no-unknown-property */}
            <img src={event.image} alt={event.title} className="aspect-[4/3] h-full w-full object-cover" fetchPriority="high" />
          </div>
        </div>
      </div>
    </section>
  );
}
