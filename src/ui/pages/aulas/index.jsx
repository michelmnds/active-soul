import { classes } from "@/content/classes";
import { useDocumentTitle } from "@/hooks";
import { CollectionGrid, PageHero } from "@/ui/pages/components";

export function ClassesPage() {
  useDocumentTitle("Bem-estar");
  return (
    <>
      <PageHero eyebrow="Corpo e equilíbrio" title="Bem-estar" description="Aulas pensadas para fortalecer, cuidar e trazer mais energia ao teu dia." image={classes[2].image} />
      <CollectionGrid items={classes} route="aula" />
    </>
  );
}
