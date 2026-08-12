/* eslint-disable react/prop-types */
import { LuQuote, LuStar } from "react-icons/lu";

export function TestimonialCard({ testimonial, className = "" }) {
  return (
    <article className={`rounded-card bg-white p-6 shadow-soft ${className}`}>
      <LuQuote className="text-3xl text-brand-300" aria-hidden />
      <p className="mt-4 text-justify text-sm leading-7 text-brand-800">“{testimonial.text}”</p>
      <div className="mt-6 flex items-center justify-between gap-3">
        <p className="font-semibold text-brand-950">{testimonial.name}</p>
        <span className="flex text-accent" aria-label={`${testimonial.rating} de 5 estrelas`}>
          {Array.from({ length: testimonial.rating }, (_, index) => <LuStar key={index} className="fill-current" aria-hidden />)}
        </span>
      </div>
    </article>
  );
}
