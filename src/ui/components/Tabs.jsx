/* eslint-disable react/prop-types */
import { useRef, useState } from "react";

export function Tabs({ items, label }) {
  const [activeIndex, setActiveIndex] = useState(0);
  const tabRefs = useRef([]);

  function selectTab(index) {
    const nextIndex = (index + items.length) % items.length;
    setActiveIndex(nextIndex);
    tabRefs.current[nextIndex]?.focus();
  }

  function handleKeyDown(event, index) {
    if (event.key === "ArrowRight" || event.key === "ArrowDown") {
      event.preventDefault();
      selectTab(index + 1);
    }
    if (event.key === "ArrowLeft" || event.key === "ArrowUp") {
      event.preventDefault();
      selectTab(index - 1);
    }
    if (event.key === "Home") {
      event.preventDefault();
      selectTab(0);
    }
    if (event.key === "End") {
      event.preventDefault();
      selectTab(items.length - 1);
    }
  }

  return (
    <div>
      <div className="flex gap-2 overflow-x-auto pb-3" role="tablist" aria-label={label}>
        {items.map((item, index) => (
          <button
            key={item.id}
            ref={(element) => { tabRefs.current[index] = element; }}
            id={`tab-${item.id}`}
            role="tab"
            aria-selected={activeIndex === index}
            aria-controls={`panel-${item.id}`}
            tabIndex={activeIndex === index ? 0 : -1}
            className={`min-h-11 shrink-0 rounded-pill px-5 py-2.5 text-sm font-medium transition ${activeIndex === index ? "bg-accent text-white shadow-pill" : "bg-brand-100 text-brand-800 hover:bg-brand-200"}`}
            onClick={() => setActiveIndex(index)}
            onKeyDown={(event) => handleKeyDown(event, index)}
            type="button"
          >
            {item.label}
          </button>
        ))}
      </div>
      {items.map((item, index) => (
        <div key={item.id} id={`panel-${item.id}`} role="tabpanel" aria-labelledby={`tab-${item.id}`} hidden={activeIndex !== index} tabIndex="0" className="mt-5">
          {item.content}
        </div>
      ))}
    </div>
  );
}
