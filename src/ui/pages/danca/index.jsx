import { Navigate, useParams } from "react-router-dom";
import { dances } from "@/content/dances";
import { useDocumentTitle } from "@/hooks";
import { DetailLayout } from "@/ui/pages/components";

export function DancePage() {
  const { id } = useParams();
  const dance = dances.find((item) => item.id === Number(id));
  useDocumentTitle(dance?.name ?? "Dança não encontrada");

  if (!dance) return <Navigate to="/pagina-nao-encontrada" replace />;
  return <DetailLayout item={dance} backTo="/dancas" backLabel="Todas as danças" category="Dança" />;
}
