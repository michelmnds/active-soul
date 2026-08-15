import { services } from "@/content/services";
import { useDocumentTitle } from "@/hooks";
import { CollectionGrid, PageHero } from "@/ui/pages/components";

export function ServicesPage() {
  useDocumentTitle("Serviços");
  return (
    <>
      <PageHero eyebrow="Criamos contigo" title="Serviços com movimento" description="Do palco aos eventos privados, das empresas às escolas, levamos a energia da dança, da música e da animação a qualquer ocasião, criando momentos autênticos e feitos à medida de cada evento." image={services[1].image} />
      <CollectionGrid items={services} route="servico" titleField="title" subtitleField="priceNote" aspect="landscape" />
    </>
  );
}
