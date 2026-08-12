import { useParams } from "react-router-dom";
import { classes } from "@/content/classes";
import { useDocumentTitle } from "@/hooks";
import { DetailLayout } from "@/ui/pages/components";
import { NotFoundPage } from "@/ui/pages/not-found";

export function ClassPage() {
  const { id } = useParams();
  const classItem = classes.find((item) => item.id === Number(id));
  useDocumentTitle(classItem?.name ?? "Aula não encontrada");

  if (!classItem) return <NotFoundPage />;
  return <DetailLayout item={classItem} backTo="/aulas" backLabel="Todas as aulas" category="Bem-estar" />;
}
