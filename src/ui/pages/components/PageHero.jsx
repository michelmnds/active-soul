/* eslint-disable react/prop-types */
export function PageHero({ eyebrow, title, description, image }) {
  return (
    <section className="relative overflow-hidden bg-brand-100">
      <div className={`container grid min-h-[22rem] items-center gap-10 py-16 sm:py-20 ${image ? "lg:grid-cols-[1fr_.85fr]" : ""}`}>
        <div className="relative z-10 max-w-3xl">
          {eyebrow && <p className="text-eyebrow font-medium uppercase text-accent">{eyebrow}</p>}
          <h1 className="mt-4 text-display-lg font-semibold text-brand-950">{title}</h1>
          {description && <p className="mt-5 max-w-2xl text-lg leading-8 text-brand-700">{description}</p>}
        </div>
        {image && (
          <div className="relative h-64 overflow-hidden rounded-card shadow-card sm:h-80 lg:h-[26rem]">
            <img {...{ fetchpriority: "high" }} src={image} alt="" className="h-full w-full object-cover" />
          </div>
        )}
      </div>
      <svg className="absolute -bottom-px left-0 h-10 w-full text-white" viewBox="0 0 1440 80" preserveAspectRatio="none" aria-hidden>
        <path fill="currentColor" d="M0 48C230 94 480 2 742 31c238 27 433 69 698 14v35H0Z" />
      </svg>
    </section>
  );
}
