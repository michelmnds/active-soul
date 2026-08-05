/* eslint-disable react/prop-types */
import { useState } from "react";

export function PackSelect({ service }) {
  const [selectedPackId, setSelectedPackId] = useState(service.packs[0].id);
  const selectedPack = service.packs.find((pack) => pack.id === selectedPackId);

  return (
    <div className="mt-8 space-y-7">
      <div>
        <p className="mb-3 text-lg font-semibold text-brand-950">{service.priceNote}</p>
        <label className="mb-2 block text-sm font-medium text-brand-800" htmlFor="pack-select">Escolha um pack</label>
        <select id="pack-select" value={selectedPackId} onChange={(event) => setSelectedPackId(Number(event.target.value))} className="min-h-12 w-full rounded-xl border border-brand-300 bg-white px-4 text-brand-950 shadow-soft sm:max-w-md">
          {service.packs.map((pack) => <option key={pack.id} value={pack.id}>{pack.name}</option>)}
        </select>
      </div>
      <div className="rounded-card bg-brand-50 p-6">
        <h2 className="text-title font-semibold text-brand-950">{selectedPack.name}</h2>
        <ul className="mt-5 space-y-3 text-sm leading-6 text-brand-800">
          {selectedPack.includes.map((item) => <li key={item} className="flex gap-3 before:mt-2 before:size-1.5 before:shrink-0 before:rounded-full before:bg-accent">{item}</li>)}
        </ul>
        {selectedPack.extra && <p className="mt-5 text-sm leading-6 text-brand-700">{selectedPack.extra}</p>}
      </div>
      <div>
        <h2 className="text-lg font-semibold text-brand-950">Opções extra</h2>
        <ul className="mt-4 grid gap-3 sm:grid-cols-2">
          {service.paidExtras.map((item) => <li key={item} className="rounded-xl border border-brand-200 p-4 text-sm leading-6 text-brand-800">{item}</li>)}
        </ul>
      </div>
      <details className="rounded-card border border-brand-200 p-5">
        <summary className="cursor-pointer font-semibold text-brand-950">Normas para todos os packs</summary>
        <ul className="mt-4 space-y-3 text-sm leading-6 text-brand-700">
          {service.terms.map((term) => <li key={term}>{term}</li>)}
        </ul>
      </details>
    </div>
  );
}
