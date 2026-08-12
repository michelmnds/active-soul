import { useDocumentTitle } from "@/hooks";
import { Button } from "@/ui/components";

export function NotFoundPage() {
  useDocumentTitle("Página não encontrada");
  return (
    <section className="grid min-h-[65vh] place-items-center bg-brand-50 px-5 py-20 text-center">
      <div className="max-w-xl">
        <p className="text-eyebrow font-medium uppercase text-accent">Erro 404</p>
        <h1 className="mt-4 text-display-lg font-semibold text-brand-950">Este passo não estava na coreografia.</h1>
        <p className="mt-5 text-justify text-lg leading-8 text-brand-700">A página que procura não existe ou mudou de lugar.</p>
        <Button to="/" className="mt-8">Voltar ao início</Button>
      </div>
    </section>
  );
}
