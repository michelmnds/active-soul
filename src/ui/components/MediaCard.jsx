/* eslint-disable react/prop-types */
import { Link } from "react-router-dom";
import { LuArrowUpRight } from "react-icons/lu";

export function MediaCard({
  title,
  subtitle,
  image,
  to,
  aspect = "portrait",
  dateLabel,
  priority = false,
}) {
  const aspectClass = aspect === "landscape" ? "aspect-[4/3]" : "aspect-[4/5]";

  return (
    <Link
      to={to}
      className="group block overflow-hidden rounded-card bg-white shadow-soft transition duration-300 hover:-translate-y-1 hover:shadow-card"
    >
      <div className={`relative overflow-hidden bg-brand-100 ${aspectClass}`}>
        <img
          src={image}
          alt=""
          className="h-full w-full object-cover transition-transform duration-700 ease-out group-hover:scale-105"
          loading={priority ? "eager" : "lazy"}
        />
        {dateLabel && (
          <span className="absolute left-4 top-4 rounded-pill bg-accent px-3 py-1.5 text-xs font-semibold uppercase tracking-wide text-white shadow-pill">
            {dateLabel}
          </span>
        )}
      </div>
      <div className="flex min-h-24 items-start justify-between gap-4 p-5">
        <div>
          <h3 className="text-lg font-semibold text-brand-950">{title}</h3>
          {subtitle && <p className="mt-1 text-sm leading-6 text-brand-700">{subtitle}</p>}
        </div>
        <LuArrowUpRight className="mt-1 shrink-0 text-xl text-accent transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5" aria-hidden />
      </div>
    </Link>
  );
}
