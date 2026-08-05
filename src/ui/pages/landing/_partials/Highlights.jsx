import { landing } from "@/content/landing";
import { MediaCard, Section, SectionHeading } from "@/ui/components";

export function Highlights() {
  return (
    <Section>
      <SectionHeading eyebrow="O estúdio" title="Há mais do que uma forma de ativar a alma" lede="Encontra o espaço certo para dançar, cuidar do corpo, criar e viver momentos especiais." align="center" />
      <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
        {landing.tiles.map((tile) => <MediaCard key={tile.href} title={tile.title} subtitle={tile.subtitle} image={tile.image} to={tile.href} aspect="landscape" />)}
      </div>
    </Section>
  );
}
