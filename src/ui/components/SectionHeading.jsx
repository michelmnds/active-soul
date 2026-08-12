/* eslint-disable react/prop-types */
import { useReveal } from "@/hooks";

export function SectionHeading({ eyebrow, title, lede, align = "left", className = "" }) {
  const { ref, isVisible } = useReveal();
  const alignment = align === "center" ? "mx-auto items-center text-center" : "items-start";

  return (
    <div
      ref={ref}
      className={`flex max-w-3xl flex-col gap-4 ${alignment} ${isVisible ? "animate-reveal" : "opacity-0"} ${className}`}
    >
      {eyebrow && <p className="text-eyebrow font-medium uppercase text-accent">{eyebrow}</p>}
      <h2 className="text-display font-semibold text-brand-950">{title}</h2>
      {lede && <p className="max-w-2xl text-justify text-base leading-7 text-brand-700 sm:text-lg">{lede}</p>}
    </div>
  );
}
