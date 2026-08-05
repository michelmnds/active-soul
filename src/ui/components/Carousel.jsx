/* eslint-disable react/prop-types */
import { useEffect, useRef, useState } from "react";
import Autoplay from "embla-carousel-autoplay";
import useEmblaCarousel from "embla-carousel-react";
import { LuChevronLeft, LuChevronRight } from "react-icons/lu";

export function Carousel({ images, alt = "", className = "" }) {
  const autoplay = useRef(Autoplay({ delay: 3500, stopOnInteraction: false, stopOnMouseEnter: true }));
  const hasControls = images.length > 1;
  const [viewportRef, emblaApi] = useEmblaCarousel(
    { loop: hasControls },
    hasControls ? [autoplay.current] : [],
  );
  const [selectedIndex, setSelectedIndex] = useState(0);

  useEffect(() => {
    if (!emblaApi) return undefined;
    const onSelect = () => setSelectedIndex(emblaApi.selectedScrollSnap());
    onSelect();
    emblaApi.on("select", onSelect);
    emblaApi.on("reInit", onSelect);
    return () => {
      emblaApi.off("select", onSelect);
      emblaApi.off("reInit", onSelect);
    };
  }, [emblaApi]);

  return (
    <div className={`relative overflow-hidden rounded-card bg-brand-100 ${className}`}>
      <div ref={viewportRef} className="overflow-hidden">
        <div className="flex touch-pan-y">
          {images.map((image, index) => (
            <div className="min-w-0 flex-[0_0_100%]" key={image}>
              <img src={image} alt={alt ? `${alt} ${index + 1}` : ""} className="aspect-[4/3] h-full w-full object-cover" loading="lazy" />
            </div>
          ))}
        </div>
      </div>
      {hasControls && (
        <>
          <button className="absolute left-3 top-1/2 grid size-11 -translate-y-1/2 place-items-center rounded-full bg-white/95 text-brand-950 shadow-soft transition hover:bg-white" onClick={() => emblaApi?.scrollPrev()} aria-label="Imagem anterior" type="button">
            <LuChevronLeft aria-hidden />
          </button>
          <button className="absolute right-3 top-1/2 grid size-11 -translate-y-1/2 place-items-center rounded-full bg-white/95 text-brand-950 shadow-soft transition hover:bg-white" onClick={() => emblaApi?.scrollNext()} aria-label="Imagem seguinte" type="button">
            <LuChevronRight aria-hidden />
          </button>
          <div className="absolute bottom-4 left-1/2 flex -translate-x-1/2 gap-2" aria-label="Selecionar imagem">
            {images.map((image, index) => (
              <button
                key={image}
                className={`size-2.5 rounded-full ring-1 ring-white ${selectedIndex === index ? "bg-accent" : "bg-white/70"}`}
                onClick={() => emblaApi?.scrollTo(index)}
                aria-label={`Ver imagem ${index + 1}`}
                aria-current={selectedIndex === index ? "true" : undefined}
                type="button"
              />
            ))}
          </div>
        </>
      )}
    </div>
  );
}
