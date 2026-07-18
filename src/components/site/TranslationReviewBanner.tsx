import { cn } from "@/lib/utils";

type TranslationReviewBannerProps = {
  notice: string;
  className?: string;
};

export function TranslationReviewBanner({
  notice,
  className,
}: TranslationReviewBannerProps) {
  return (
    <div
      role="status"
      className={cn(
        "rounded-md border border-gold-core/30 bg-gold-core/10 px-4 py-3 text-body-sm text-gold-pale",
        className,
      )}
    >
      {notice}
    </div>
  );
}
