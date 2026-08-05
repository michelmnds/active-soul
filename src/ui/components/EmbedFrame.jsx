/* eslint-disable react/prop-types */
import { LuExternalLink } from "react-icons/lu";
import { Button } from "./Button";

export function EmbedFrame({ embed, title }) {
  if (!embed) return null;

  if (embed.type === "instagram") {
    return (
      <div className="rounded-card bg-brand-50 p-6 text-center">
        <p className="mb-4 text-brand-700">Veja este momento no Instagram.</p>
        <Button href={embed.src} target="_blank" rel="noreferrer" variant="ghost">Abrir Instagram <LuExternalLink aria-hidden /></Button>
      </div>
    );
  }

  const src = embed.type === "facebook"
    ? `https://www.facebook.com/plugins/post.php?href=${encodeURIComponent(embed.src)}&show_text=true&width=750`
    : embed.src;

  return (
    <div className="aspect-video overflow-hidden rounded-card bg-brand-100 shadow-soft">
      <iframe src={src} title={title} className="h-full w-full" loading="lazy" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen />
    </div>
  );
}
