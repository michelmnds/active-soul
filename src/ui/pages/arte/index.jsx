import { Navigate, useParams } from "react-router-dom";
import { arts } from "@/content/arts";
import { useDocumentTitle } from "@/hooks";
import { DetailLayout } from "@/ui/pages/components";

export function ArtPage() {
  const { id } = useParams();
  const art = arts.find((item) => item.id === Number(id));
  useDocumentTitle(art?.name ?? "Arte não encontrada");

  if (!art) return <Navigate to="/pagina-nao-encontrada" replace />;
  return <DetailLayout item={art} backTo="/artes" backLabel="Todas as artes" category="Artes" />;
}
