/* eslint-disable react/prop-types */
import { useEffect, useRef, useState } from "react";
import Autoplay from "embla-carousel-autoplay";
import useEmblaCarousel from "embla-carousel-react";
import { LuChevronLeft, LuChevronRight, LuPause, LuPlay } from "react-icons/lu";

export function Carousel({ images, alt = "", className = "" }) {
  const prefersReducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
  const autoplay = useRef(Autoplay({ delay: 3500, stopOnInteraction: true, stopOnMouseEnter: true }));
  const hasControls = images.length > 1;
  const [viewportRef, emblaApi] = useEmblaCarousel(
    { loop: hasControls },
    hasControls && !prefersReducedMotion ? [autoplay.current] : [],
  );
  const [selectedIndex, setSelectedIndex] = useState(0);
  const [isPlaying, setIsPlaying] = useState(hasControls && !prefersReducedMotion);

  function stopAutoplay() {
    if (!prefersReducedMotion) autoplay.current.stop();
    setIsPlaying(false);
  }

  function toggleAutoplay() {
    if (isPlaying) {
      stopAutoplay();
    } else {
      autoplay.current.play();
      setIsPlaying(true);
    }
  }

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
    <div className={`relative overflow-hidden rounded-card bg-brand-100 ${className}`} role="region" aria-roledescription="carrossel" aria-label={alt || "Galeria de imagens"}>
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
          <button className="absolute left-3 top-1/2 grid size-11 -translate-y-1/2 place-items-center rounded-full bg-white/95 text-brand-950 shadow-soft transition hover:bg-white" onClick={() => { emblaApi?.scrollPrev(); stopAutoplay(); }} aria-label="Imagem anterior" type="button">
            <LuChevronLeft aria-hidden />
          </button>
          <button className="absolute right-3 top-1/2 grid size-11 -translate-y-1/2 place-items-center rounded-full bg-white/95 text-brand-950 shadow-soft transition hover:bg-white" onClick={() => { emblaApi?.scrollNext(); stopAutoplay(); }} aria-label="Imagem seguinte" type="button">
            <LuChevronRight aria-hidden />
          </button>
          {!prefersReducedMotion && (
            <button className="absolute right-3 top-3 grid size-11 place-items-center rounded-full bg-white/95 text-brand-950 shadow-soft" onClick={toggleAutoplay} aria-label={isPlaying ? "Pausar galeria" : "Reproduzir galeria"} aria-pressed={isPlaying} type="button">
              {isPlaying ? <LuPause aria-hidden /> : <LuPlay aria-hidden />}
            </button>
          )}
          <div className="absolute bottom-3 left-1/2 flex max-w-[75%] -translate-x-1/2 flex-wrap justify-center gap-0.5 rounded-pill bg-brand-950/30 px-2 py-1" aria-label="Selecionar imagem">
            {images.map((image, index) => (
              <button
                key={image}
                className="grid size-6 place-items-center rounded-full"
                onClick={() => { emblaApi?.scrollTo(index); stopAutoplay(); }}
                aria-label={`Ver imagem ${index + 1}`}
                aria-current={selectedIndex === index ? "true" : undefined}
                type="button"
              ><span className={`size-2.5 rounded-full ring-1 ring-white ${selectedIndex === index ? "bg-accent" : "bg-white/70"}`} /></button>
            ))}
          </div>
        </>
      )}
    </div>
  );
}
