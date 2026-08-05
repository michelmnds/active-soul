/* eslint-disable react/prop-types */
export function Section({ children, className = "", id, tone = "white", contained = true }) {
  const toneClass = tone === "tint" ? "bg-brand-50" : "bg-white";

  return (
    <section id={id} className={`scroll-mt-24 py-16 sm:py-20 lg:py-28 ${toneClass} ${className}`}>
      {contained ? <div className="container">{children}</div> : children}
    </section>
  );
}
