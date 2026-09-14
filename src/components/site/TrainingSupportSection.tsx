import { getTrainingSupportCopy } from '@/lib/i18n/training-support-copy';
import type { Locale } from '@/lib/i18n/types';

/** Full training/onboarding-support block for public service/information pages. */
export function TrainingSupportSection({
  locale,
  className = '',
}: {
  locale: Locale;
  className?: string;
}) {
  const copy = getTrainingSupportCopy(locale);
  return (
    <div className={className}>
      <h2 className="text-section-title text-brand-ink">{copy.title}</h2>
      <div className="mt-4 space-y-3 text-body text-neutral-grey">
        {copy.paragraphs.map((paragraph) => (
          <p key={paragraph.slice(0, 48)}>{paragraph}</p>
        ))}
      </div>
    </div>
  );
}
