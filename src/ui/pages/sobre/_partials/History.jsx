import { about } from "@/content/about";
import { Section, SectionHeading } from "@/ui/components";

export function History() {
  return (
    <Section>
      <div className="grid gap-10 lg:grid-cols-[.75fr_1.25fr] lg:gap-16">
        <SectionHeading
          eyebrow="Desde 2022"
          title="Crescemos em Castelo Branco"
        />
        <div className="space-y-5 text-justify text-lg leading-8 text-brand-800">
          {about.history.map((paragraph) => (
            <p key={paragraph}>{paragraph}</p>
          ))}
        </div>
      </div>
    </Section>
  );
}
