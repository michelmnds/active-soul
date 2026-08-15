import { team } from "@/content/team";
import { useDocumentTitle } from "@/hooks";
import { Section, SectionHeading } from "@/ui/components";
import { PageHero } from "@/ui/pages/components";

const BACKGROUND_IMAGE_URL = "/images/y4pRzvQ.webp";

export function TeamPage() {
  useDocumentTitle("Equipa");
  return (
    <>
      <PageHero
        eyebrow="Pessoas que inspiram"
        title="Uma equipa com alma"
        description="Profissionais que ensinam com rigor, criatividade e uma energia que se sente em cada aula."
        image={BACKGROUND_IMAGE_URL}
      />
      <Section>
        <SectionHeading
          eyebrow="Conhece-nos"
          title="Quem dá vida ao estúdio"
          lede="Do palco ao treino, reunimos diferentes experiências em torno da mesma paixão."
        />
        <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
          {team.map((member) => (
            <article
              key={member.id}
              className="overflow-hidden rounded-card bg-white shadow-soft"
            >
              <div className="aspect-[4/5] overflow-hidden bg-brand-100">
                <img
                  src={member.image}
                  alt={member.name}
                  className="h-full w-full object-cover transition-transform duration-700 hover:scale-105"
                  loading="lazy"
                />
              </div>
              <div className="p-5">
                <h2 className="text-lg font-semibold text-brand-950">
                  {member.name}
                </h2>
                <p className="mt-2 whitespace-pre-line text-sm leading-6 text-brand-700">
                  {member.modality}
                </p>
              </div>
            </article>
          ))}
        </div>
      </Section>
    </>
  );
}
