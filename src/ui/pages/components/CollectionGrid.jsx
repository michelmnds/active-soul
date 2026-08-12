/* eslint-disable react/prop-types */
import { MediaCard, Section } from "@/ui/components";

export function CollectionGrid({ items, route, titleField = "name", subtitleField = "modality", aspect = "portrait" }) {
  return (
    <Section>
      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
        {items.map((item) => (
          <MediaCard
            key={item.id}
            title={item[titleField]}
            subtitle={item[subtitleField]}
            image={item.image}
            to={`/${route}/${item.id}`}
            aspect={aspect}
          />
        ))}
      </div>
    </Section>
  );
}
