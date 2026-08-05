import { LuArrowRight } from "react-icons/lu";
import { landing } from "@/content/landing";
import { Button } from "@/ui/components";

export function Hero() {
  return (
    <section className="relative overflow-hidden bg-brand-100">
      <div className="container grid min-h-[calc(100vh-5rem)] items-center gap-10 py-14 lg:grid-cols-[.95fr_1.05fr] lg:py-20">
        <div className="relative z-10 max-w-2xl">
          <p className="text-eyebrow font-medium uppercase text-accent">{landing.hero.eyebrow}</p>
          <h1 className="mt-5 text-display-lg font-semibold text-brand-950">{landing.hero.title}</h1>
          <p className="mt-6 max-w-xl text-lg leading-8 text-brand-700">{landing.hero.description}</p>
          <div className="mt-8 flex flex-wrap gap-3">
            <Button href={landing.whatsapp} target="_blank" rel="noreferrer">Marcar aula <LuArrowRight aria-hidden /></Button>
            <Button to="/dancas" variant="ghost">Explorar modalidades</Button>
          </div>
        </div>
        <div className="relative min-h-[25rem] lg:min-h-[38rem]">
          <div className="absolute inset-0 overflow-hidden rounded-[2.5rem_2.5rem_8rem_2.5rem] shadow-card">
            <img {...{ fetchpriority: "high" }} src={landing.hero.image} alt="Aula de dança no Active Soul" className="h-full w-full object-cover" />
          </div>
          <div className="absolute -bottom-5 -left-5 rounded-card bg-white p-5 shadow-card sm:p-6">
            <p className="text-3xl font-semibold text-accent">Desde 2022</p>
            <p className="mt-1 text-sm text-brand-700">a ativar Castelo Branco</p>
          </div>
        </div>
      </div>
      <svg className="absolute -bottom-px left-0 h-14 w-full text-white" viewBox="0 0 1440 100" preserveAspectRatio="none" aria-hidden>
        <path fill="currentColor" d="M0 40c241 72 465-14 716 15 266 31 444 50 724-20v65H0Z" />
      </svg>
    </section>
  );
}
