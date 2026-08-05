import { useParams } from "react-router-dom";
import { news } from "@/content/news";
import { useDocumentTitle } from "@/hooks";
import { EventBody, EventHero } from "./_partials";
import { NotFoundPage } from "@/ui/pages/not-found";

export function EventPage() {
  const { id } = useParams();
  const event = news.find((item) => item.id === Number(id));
  useDocumentTitle(event?.title ?? "Evento não encontrado");

  if (!event) return <NotFoundPage />;
  return <><EventHero event={event} /><EventBody event={event} /></>;
}
