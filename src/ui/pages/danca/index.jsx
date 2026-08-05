import { useParams } from "react-router-dom";
import { dances } from "@/content/dances";
import { useDocumentTitle } from "@/hooks";
import { DetailLayout } from "@/ui/pages/components";
import { NotFoundPage } from "@/ui/pages/not-found";

export function DancePage() {
  const { id } = useParams();
  const dance = dances.find((item) => item.id === Number(id));
  useDocumentTitle(dance?.name ?? "Dança não encontrada");

  if (!dance) return <NotFoundPage />;
  return <DetailLayout item={dance} backTo="/dancas" backLabel="Todas as danças" category="Dança" />;
}
