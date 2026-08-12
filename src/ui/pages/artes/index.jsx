import { arts } from "@/content/arts";
import { useDocumentTitle } from "@/hooks";
import { CollectionGrid, PageHero } from "@/ui/pages/components";

export function ArtsPage() {
  useDocumentTitle("Artes");
  return (
    <>
      <PageHero eyebrow="Expressão sem limites" title="Onde a arte ganha vida" description="Voz, interpretação e imaginação num espaço onde cada pessoa pode experimentar e criar." image={arts[2].image} />
      <CollectionGrid items={arts} route="arte" />
    </>
  );
}
