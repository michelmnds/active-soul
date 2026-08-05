import { useParams } from "react-router-dom";
import { arts } from "@/content/arts";
import { useDocumentTitle } from "@/hooks";
import { DetailLayout } from "@/ui/pages/components";
import { NotFoundPage } from "@/ui/pages/not-found";

export function ArtPage() {
  const { id } = useParams();
  const art = arts.find((item) => item.id === Number(id));
  useDocumentTitle(art?.name ?? "Arte não encontrada");

  if (!art) return <NotFoundPage />;
  return <DetailLayout item={art} backTo="/artes" backLabel="Todas as artes" category="Artes" />;
}
