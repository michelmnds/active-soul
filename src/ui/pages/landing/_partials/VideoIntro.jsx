import { landing } from "@/content/landing";
import { Button, Section, SectionHeading } from "@/ui/components";

export function VideoIntro() {
  return (
    <Section tone="tint">
      <div className="grid items-center gap-10 lg:grid-cols-2 lg:gap-16">
        <div className="aspect-video overflow-hidden rounded-card bg-brand-200 shadow-card">
          <iframe src={landing.video.src} title="Conheça o Active Soul" className="h-full w-full" loading="lazy" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen />
        </div>
        <div>
          <SectionHeading eyebrow="Conheça-nos" title={landing.video.title} lede={landing.video.description} />
          <Button className="mt-8" href={landing.whatsapp} target="_blank" rel="noreferrer">Marcar aula experimental</Button>
        </div>
      </div>
    </Section>
  );
}
