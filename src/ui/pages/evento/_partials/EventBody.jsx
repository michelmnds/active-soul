/* eslint-disable react/prop-types */
import { LuCalendarDays, LuClock3, LuExternalLink, LuMapPin, LuMessageCircle } from "react-icons/lu";
import { site } from "@/content/site";
import { Button, Carousel, EmbedFrame, Section } from "@/ui/components";

export function EventBody({ event }) {
  return (
    <Section>
      <div className="mx-auto max-w-4xl">
        <div className="space-y-5 text-justify text-base leading-8 text-brand-800 sm:text-lg">
          {event.description.map((paragraph) => <p key={paragraph}>{paragraph}</p>)}
        </div>

        {event.cta && (
          <div className="mt-10 flex flex-col items-start gap-4 rounded-card bg-accent-tint p-6 sm:flex-row sm:items-center sm:justify-between">
            <p className="font-medium text-brand-950">{event.cta.text}</p>
            <Button href={event.cta.href} target="_blank" rel="noreferrer">{event.cta.label} <LuExternalLink aria-hidden /></Button>
          </div>
        )}

        {event.schedule.length > 0 && (
          <section className="mt-12" aria-labelledby="event-schedule">
            <h2 id="event-schedule" className="text-title font-semibold text-brand-950">Agenda</h2>
            <div className="mt-5 grid gap-3">
              {event.schedule.map((slot, index) => (
                <div key={`${slot.day}-${slot.time}-${index}`} className="grid gap-3 rounded-card border border-brand-200 p-5 text-sm text-brand-800 sm:grid-cols-3">
                  <span className="flex items-center gap-2"><LuCalendarDays className="text-accent" aria-hidden /> {slot.day}</span>
                  {slot.time && <span className="flex items-center gap-2"><LuClock3 className="text-accent" aria-hidden /> {slot.time}</span>}
                  {slot.location && <span className="flex items-center gap-2"><LuMapPin className="text-accent" aria-hidden /> {slot.location}</span>}
                </div>
              ))}
            </div>
          </section>
        )}

        {event.embed && <div className="mt-12"><EmbedFrame embed={event.embed} title={event.title} /></div>}
        {event.images && <Carousel images={event.images} alt={event.title} className="mt-12" />}

        <div className="mt-12 rounded-card bg-brand-950 p-7 text-white sm:flex sm:items-center sm:justify-between sm:gap-8">
          <div>
            <h2 className="text-title font-semibold">Queres saber mais?</h2>
            <p className="mt-2 text-justify text-sm leading-6 text-brand-200">Fala connosco diretamente pelo WhatsApp.</p>
          </div>
          <Button className="mt-5 shrink-0 sm:mt-0" href={site.socials.whatsapp} target="_blank" rel="noreferrer"><LuMessageCircle aria-hidden /> Contactar</Button>
        </div>
      </div>
    </Section>
  );
}
