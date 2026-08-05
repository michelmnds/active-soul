import { Navigate, useParams } from "react-router-dom";
import { news } from "@/content/news";
import { useDocumentTitle } from "@/hooks";
import { EventBody, EventHero } from "./_partials";

export function EventPage() {
  const { id } = useParams();
  const event = news.find((item) => item.id === Number(id));
  useDocumentTitle(event?.title ?? "Evento não encontrado");

  if (!event) return <Navigate to="/pagina-nao-encontrada" replace />;
  return <><EventHero event={event} /><EventBody event={event} /></>;
}
