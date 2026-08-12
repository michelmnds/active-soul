import { LuMapPin, LuPhone } from "react-icons/lu";
import { site } from "@/content/site";
import { Button, Section, SectionHeading } from "@/ui/components";

export function Contact() {
  return (
    <Section>
      <div className="grid items-stretch gap-8 lg:grid-cols-[.8fr_1.2fr]">
        <div className="rounded-card bg-brand-950 p-8 text-white lg:p-10">
          <SectionHeading eyebrow="Visite-nos" title="Todos os caminhos vão dar ao Active Soul" lede={site.address} className="[&_h2]:text-white [&_p:last-child]:!text-left [&_p:last-child]:text-brand-200" />
          <div className="mt-8 space-y-3 text-sm text-brand-100">
            {site.hours.map((hours) => <p key={hours}>{hours}</p>)}
          </div>
          <div className="mt-8 flex flex-wrap gap-3">
            <Button href={site.phoneHref}><LuPhone aria-hidden /> Ligar</Button>
            <Button href={site.mapsUrl} target="_blank" rel="noreferrer" variant="ghost"><LuMapPin aria-hidden /> Direções</Button>
          </div>
        </div>
        <a href={site.mapsUrl} target="_blank" rel="noreferrer" className="group relative min-h-80 overflow-hidden rounded-card bg-brand-100 shadow-card" aria-label="Abrir localização no Google Maps">
          <img src="/background.png" alt="Mapa da localização do Active Soul" className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105" loading="lazy" />
          <span className="absolute bottom-5 left-5 rounded-pill bg-white px-5 py-3 text-sm font-semibold text-brand-950 shadow-card">Active Soul · Ver no mapa</span>
        </a>
      </div>
    </Section>
  );
}
