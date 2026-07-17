import type { LegalSection } from "@/lib/i18n/content/legal-types";

type LegalDocumentSectionProps = {
  section: LegalSection;
};

export function LegalDocumentSection({ section }: LegalDocumentSectionProps) {
  return (
    <section>
      <h2 className="text-lg font-semibold text-white">{section.title}</h2>
      {section.body && (
        <p className="mt-2 leading-relaxed text-neutral-grey">{section.body}</p>
      )}
      {section.items && section.items.length > 0 && (
        <ul className="mt-2 list-inside list-disc space-y-1.5 leading-relaxed text-neutral-grey">
          {section.items.map((item) => (
            <li key={item}>{item}</li>
          ))}
        </ul>
      )}
    </section>
  );
}
