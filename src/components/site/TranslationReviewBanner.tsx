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
        "rounded-lg border border-amber-200 bg-amber-50 px-4 py-3 text-sm text-amber-950",
        className,
      )}
    >
      {notice}
    </div>
  );
}
