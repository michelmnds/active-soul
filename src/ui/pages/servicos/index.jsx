import { services } from "@/content/services";
import { useDocumentTitle } from "@/hooks";
import { CollectionGrid, PageHero } from "@/ui/pages/components";

export function ServicesPage() {
  useDocumentTitle("Serviços");
  return (
    <>
      <PageHero eyebrow="Criamos consigo" title="Serviços com movimento" description="Do primeiro ensaio ao grande dia, desenhamos experiências memoráveis para pessoas, marcas e comunidades." image={services[1].image} />
      <CollectionGrid items={services} route="servico" titleField="title" subtitleField="priceNote" aspect="landscape" />
    </>
  );
}
