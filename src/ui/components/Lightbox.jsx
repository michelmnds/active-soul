/* eslint-disable react/prop-types */
import { useEffect, useRef } from "react";
import { createPortal } from "react-dom";
import { LuX } from "react-icons/lu";

export function Lightbox({ isOpen, onClose, image, alt, width, height }) {
  const closeRef = useRef(null);

  useEffect(() => {
    if (!isOpen) return undefined;
    const previousOverflow = document.body.style.overflow;
    const previousFocus = document.activeElement;
    document.body.style.overflow = "hidden";
    closeRef.current?.focus();

    const handleKeyDown = (event) => {
      if (event.key === "Escape") onClose();
    };
    document.addEventListener("keydown", handleKeyDown);
    return () => {
      document.body.style.overflow = previousOverflow;
      document.removeEventListener("keydown", handleKeyDown);
      previousFocus?.focus();
    };
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  return createPortal(
    <div className="fixed inset-0 z-[100] grid place-items-center bg-brand-950/80 p-4" role="presentation" onMouseDown={(event) => { if (event.target === event.currentTarget) onClose(); }}>
      <div className="relative max-h-[92vh] max-w-6xl overflow-auto rounded-card bg-white p-3 shadow-card" role="dialog" aria-modal="true" aria-label={alt}>
        <button ref={closeRef} className="absolute right-5 top-5 z-10 grid size-11 place-items-center rounded-full bg-white text-brand-950 shadow-card" onClick={onClose} aria-label="Fechar imagem" type="button">
          <LuX aria-hidden />
        </button>
        <img src={image} alt={alt} width={width} height={height} className="h-auto max-h-[86vh] w-auto rounded-xl object-contain" />
      </div>
    </div>,
    document.body,
  );
}
