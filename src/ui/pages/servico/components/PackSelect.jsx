/* eslint-disable react/prop-types */
import { useEffect, useRef, useState } from "react";
import { LuCheck, LuChevronDown } from "react-icons/lu";

export function PackSelect({ service }) {
  const [selectedPackId, setSelectedPackId] = useState(service.packs[0].id);
  const [isOpen, setIsOpen] = useState(false);
  const selectRef = useRef(null);
  const triggerRef = useRef(null);
  const optionRefs = useRef([]);
  const selectedPack = service.packs.find((pack) => pack.id === selectedPackId);

  useEffect(() => {
    if (!isOpen) return undefined;

    function handlePointerDown(event) {
      if (!selectRef.current?.contains(event.target)) setIsOpen(false);
    }

    document.addEventListener("pointerdown", handlePointerDown);
    return () => document.removeEventListener("pointerdown", handlePointerDown);
  }, [isOpen]);

  function focusOption(index) {
    optionRefs.current[(index + service.packs.length) % service.packs.length]?.focus();
  }

  function openSelect(index = service.packs.findIndex((pack) => pack.id === selectedPackId)) {
    setIsOpen(true);
    requestAnimationFrame(() => focusOption(index));
  }

  function selectPack(packId) {
    setSelectedPackId(packId);
    setIsOpen(false);
    triggerRef.current?.focus();
  }

  function handleTriggerKeyDown(event) {
    const selectedIndex = service.packs.findIndex((pack) => pack.id === selectedPackId);
    if (["Enter", " ", "ArrowDown", "ArrowUp"].includes(event.key)) {
      event.preventDefault();
      openSelect(event.key === "ArrowUp" ? selectedIndex - 1 : selectedIndex);
    }
  }

  function handleOptionKeyDown(event, index) {
    if (event.key === "ArrowDown") {
      event.preventDefault();
      focusOption(index + 1);
    }
    if (event.key === "ArrowUp") {
      event.preventDefault();
      focusOption(index - 1);
    }
    if (event.key === "Home") {
      event.preventDefault();
      focusOption(0);
    }
    if (event.key === "End") {
      event.preventDefault();
      focusOption(service.packs.length - 1);
    }
    if (event.key === "Escape") {
      event.preventDefault();
      setIsOpen(false);
      triggerRef.current?.focus();
    }
    if (event.key === "Tab") setIsOpen(false);
  }

  return (
    <div className="mt-8 space-y-7">
      <div>
        <p className="mb-3 text-lg font-semibold text-brand-950">{service.priceNote}</p>
        <p className="mb-2 text-sm font-medium text-brand-800" id="pack-select-label">Escolha um pack</p>
        <div className="relative w-full sm:max-w-md" ref={selectRef}>
          <button
            ref={triggerRef}
            className="flex min-h-12 w-full cursor-pointer items-center justify-between rounded-xl border border-brand-300 bg-white py-3 pl-4 pr-4 text-left text-brand-950 shadow-soft transition hover:border-accent focus-visible:outline-none focus-visible:ring-4 focus-visible:ring-accent/20"
            onClick={() => (isOpen ? setIsOpen(false) : openSelect())}
            onKeyDown={handleTriggerKeyDown}
            aria-labelledby="pack-select-label pack-select-value"
            aria-haspopup="listbox"
            aria-expanded={isOpen}
            aria-controls="pack-options"
            type="button"
          >
            <span id="pack-select-value">{selectedPack.name}</span>
            <LuChevronDown className={`ml-4 shrink-0 text-lg text-accent transition-transform ${isOpen ? "rotate-180" : ""}`} aria-hidden />
          </button>
          {isOpen && (
            <div className="absolute inset-x-0 top-full z-20 mt-2 overflow-hidden rounded-xl border border-brand-200 bg-white p-1.5 shadow-card" id="pack-options" role="listbox" aria-labelledby="pack-select-label">
              {service.packs.map((pack, index) => {
                const isSelected = pack.id === selectedPackId;
                return (
                  <button
                    key={pack.id}
                    ref={(element) => { optionRefs.current[index] = element; }}
                    className={`flex w-full cursor-pointer items-center justify-between gap-3 rounded-lg px-3.5 py-2.5 text-left transition focus-visible:outline-none ${isSelected ? "bg-accent-tint font-medium text-accent" : "text-brand-800 hover:bg-brand-50 focus:bg-brand-50"}`}
                    onClick={() => selectPack(pack.id)}
                    onKeyDown={(event) => handleOptionKeyDown(event, index)}
                    role="option"
                    aria-selected={isSelected}
                    type="button"
                  >
                    {pack.name}
                    {isSelected && <LuCheck className="shrink-0 text-lg" aria-hidden />}
                  </button>
                );
              })}
            </div>
          )}
        </div>
      </div>
      <div className="rounded-card bg-brand-50 p-6">
        <h2 className="text-title font-semibold text-brand-950">{selectedPack.name}</h2>
        <ul className="mt-5 space-y-3 text-justify text-sm leading-6 text-brand-800">
          {selectedPack.includes.map((item) => <li key={item} className="flex gap-3 before:mt-2 before:size-1.5 before:shrink-0 before:rounded-full before:bg-accent">{item}</li>)}
        </ul>
        {selectedPack.extra && <p className="mt-5 text-justify text-sm leading-6 text-brand-700">{selectedPack.extra}</p>}
      </div>
      <div>
        <h2 className="text-lg font-semibold text-brand-950">Opções extra</h2>
        <ul className="mt-4 grid gap-3 text-justify sm:grid-cols-2">
          {service.paidExtras.map((item) => <li key={item} className="rounded-xl border border-brand-200 p-4 text-sm leading-6 text-brand-800">{item}</li>)}
        </ul>
      </div>
      <details className="rounded-card border border-brand-200 p-5">
        <summary className="cursor-pointer font-semibold text-brand-950">Normas para todos os packs</summary>
        <ul className="mt-4 space-y-3 text-justify text-sm leading-6 text-brand-700">
          {service.terms.map((term) => <li key={term}>{term}</li>)}
        </ul>
      </details>
    </div>
  );
}
