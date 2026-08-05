import { dances } from "@/content/dances";
import { useDocumentTitle } from "@/hooks";
import { CollectionGrid, PageHero } from "@/ui/pages/components";

export function DancesPage() {
  useDocumentTitle("Dança");
  return (
    <>
      <PageHero eyebrow="Movimento com identidade" title="Dança para cada ritmo" description="Do primeiro passo ao palco, encontra uma modalidade que te desafia e te faz sentir em casa." image={dances[2].image} />
      <CollectionGrid items={dances} route="danca" />
    </>
  );
}
