import { about } from "@/content/about";
import { Section, SectionHeading } from "@/ui/components";
import { TestimonialCard } from "../components";

export function Testimonials() {
  return (
    <Section tone="tint">
      <SectionHeading eyebrow="A nossa comunidade" title="O que dizem sobre nós" align="center" />
      <div className="mt-12 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        {about.testimonials.map((testimonial, index) => <TestimonialCard key={testimonial.name} testimonial={testimonial} className={index >= 3 ? "hidden md:block" : ""} />)}
      </div>
    </Section>
  );
}
