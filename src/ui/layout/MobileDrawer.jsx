/* eslint-disable react/prop-types */
import { useEffect, useRef } from "react";
import { createPortal } from "react-dom";
import { NavLink } from "react-router-dom";
import { LuX } from "react-icons/lu";
import { site } from "@/content/site";
import { Button } from "@/ui/components";

export function MobileDrawer({ isOpen, onClose }) {
  const closeButtonRef = useRef(null);
  const drawerRef = useRef(null);

  useEffect(() => {
    if (!isOpen) return undefined;
    const previousOverflow = document.body.style.overflow;
    const previousFocus = document.activeElement;
    document.body.style.overflow = "hidden";
    closeButtonRef.current?.focus();

    function handleKeyDown(event) {
      if (event.key === "Escape") onClose();
      if (event.key !== "Tab") return;

      const focusable = drawerRef.current?.querySelectorAll(
        'a[href], button:not([disabled]), [tabindex]:not([tabindex="-1"])',
      );
      if (!focusable?.length) return;
      const first = focusable[0];
      const last = focusable[focusable.length - 1];
      if (event.shiftKey && document.activeElement === first) {
        event.preventDefault();
        last.focus();
      } else if (!event.shiftKey && document.activeElement === last) {
        event.preventDefault();
        first.focus();
      }
    }

    document.addEventListener("keydown", handleKeyDown);
    return () => {
      document.body.style.overflow = previousOverflow;
      document.removeEventListener("keydown", handleKeyDown);
      previousFocus?.focus();
    };
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  return createPortal(
    <div className="fixed inset-0 z-[90] bg-brand-950/45 backdrop-blur-sm lg:hidden" onMouseDown={(event) => { if (event.target === event.currentTarget) onClose(); }} role="presentation">
      <aside id="mobile-navigation" ref={drawerRef} className="ml-auto flex h-full w-[min(88vw,24rem)] flex-col bg-white p-6 shadow-card" role="dialog" aria-modal="true" aria-label="Menu principal">
        <div className="flex items-center justify-between">
          <p className="font-semibold text-brand-950">Menu</p>
          <button ref={closeButtonRef} className="grid size-11 place-items-center rounded-full border border-brand-200 text-brand-950" onClick={onClose} aria-label="Fechar menu" type="button">
            <LuX className="text-xl" aria-hidden />
          </button>
        </div>
        <nav className="mt-10 flex flex-col" aria-label="Navegação móvel">
          {site.nav.map((item) => (
            <NavLink
              key={item.href}
              to={item.href}
              onClick={onClose}
              className={({ isActive }) => `border-b border-brand-100 py-4 text-lg font-medium transition ${isActive ? "text-accent" : "text-brand-950 hover:text-accent"}`}
            >
              {item.label}
            </NavLink>
          ))}
        </nav>
        <Button className="mt-auto" href={site.socials.whatsapp} target="_blank" rel="noreferrer">Marcar aula</Button>
      </aside>
    </div>,
    document.body,
  );
}
