import { Navigate, useParams } from "react-router-dom";
import { classes } from "@/content/classes";
import { useDocumentTitle } from "@/hooks";
import { DetailLayout } from "@/ui/pages/components";

export function ClassPage() {
  const { id } = useParams();
  const classItem = classes.find((item) => item.id === Number(id));
  useDocumentTitle(classItem?.name ?? "Aula não encontrada");

  if (!classItem) return <Navigate to="/pagina-nao-encontrada" replace />;
  return <DetailLayout item={classItem} backTo="/aulas" backLabel="Todas as aulas" category="Bem-estar" />;
}
