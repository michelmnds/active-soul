/* eslint-disable react/prop-types */
import { LuArrowLeft, LuMessageCircle } from "react-icons/lu";
import { site } from "@/content/site";
import { Button, Section } from "@/ui/components";

export function DetailLayout({ item, backTo, backLabel, category, children }) {
  return (
    <Section className="pt-10 sm:pt-14 lg:grid lg:min-h-[calc(100vh-5rem)] lg:place-items-center lg:!py-8 [&>div]:relative">
      <Button to={backTo} variant="ghost" className="mb-8 lg:absolute lg:-top-16 lg:mb-0">
        <LuArrowLeft aria-hidden /> {backLabel}
      </Button>
      <div className="grid items-start gap-10 lg:grid-cols-[minmax(0,.9fr)_minmax(0,1.1fr)] lg:items-center lg:gap-16">
        <div className="overflow-hidden rounded-card bg-brand-100 shadow-card lg:sticky lg:top-28 lg:aspect-[4/5]">
          <img
            {...{ fetchpriority: "high" }}
            src={item.image}
            alt={item.name ?? item.title}
            className="aspect-[4/5] h-full w-full object-cover"
          />
        </div>
        <article className="py-2 lg:py-0">
          <p className="text-eyebrow font-medium uppercase text-accent">
            {category}
          </p>
          <h1 className="mt-4 text-display font-semibold text-brand-950">
            {item.name ?? item.title}
          </h1>
          {item.modality && (
            <p className="mt-3 text-lg font-medium text-brand-700">
              {item.modality}
            </p>
          )}
          <div className="mt-8 space-y-4 text-justify text-base leading-8 text-brand-800">
            {item.description?.map((paragraph) => (
              <p key={paragraph}>{paragraph}</p>
            ))}
          </div>
          {children}
          <Button
            className="mt-9"
            href={site.socials.whatsapp}
            target="_blank"
            rel="noreferrer"
          >
            <LuMessageCircle aria-hidden /> Contactar
          </Button>
        </article>
      </div>
    </Section>
  );
}
