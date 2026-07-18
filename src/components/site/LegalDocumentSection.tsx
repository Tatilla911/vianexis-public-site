import type { LegalSection } from "@/lib/i18n/content/legal-types";

type LegalDocumentSectionProps = {
  section: LegalSection;
};

export function LegalDocumentSection({ section }: LegalDocumentSectionProps) {
  return (
    <section>
      <h2 className="text-card-title text-white">{section.title}</h2>
      {section.body && (
        <p className="text-body mt-3 text-neutral-grey">{section.body}</p>
      )}
      {section.items && section.items.length > 0 && (
        <ul className="text-body mt-3 list-inside list-disc space-y-2 text-neutral-grey">
          {section.items.map((item) => (
            <li key={item}>{item}</li>
          ))}
        </ul>
      )}
    </section>
  );
}
