import { about } from "@/content/about";
import { useDocumentTitle } from "@/hooks";
import { PageHero } from "@/ui/pages/components";
import { Contact, Facilities, History, ServicesTeaser, Testimonials } from "./_partials";

export function AboutPage() {
  useDocumentTitle("Sobre");
  return (
    <>
      <PageHero eyebrow="A nossa história" title="Um estúdio feito de pessoas" description="Cultura, exercício e criatividade encontram-se num espaço acolhedor no coração de Castelo Branco." image={about.facilities[0].image} />
      <History />
      <Facilities />
      <ServicesTeaser />
      <Testimonials />
      <Contact />
    </>
  );
}
