import { useParams } from "react-router-dom";
import { services } from "@/content/services";
import { useDocumentTitle } from "@/hooks";
import { Carousel } from "@/ui/components";
import { DetailLayout } from "@/ui/pages/components";
import { PackSelect } from "./components";
import { NotFoundPage } from "@/ui/pages/not-found";

export function ServicePage() {
  const { id } = useParams();
  const service = services.find((item) => item.id === Number(id));
  useDocumentTitle(service?.title ?? "Serviço não encontrado");

  if (!service) return <NotFoundPage />;

  return (
    <DetailLayout item={service} backTo="/servicos" backLabel="Todos os serviços" category="Serviços">
      {service.images && <Carousel images={service.images} alt={service.title} className="mt-8" />}
      {service.packs && <PackSelect service={service} />}
    </DetailLayout>
  );
}
