import { BrowserMockup } from "@/components/site/BrowserMockup";
import { PhoneMockup } from "@/components/site/PhoneMockup";
import { cn } from "@/lib/utils";

type ProductPreviewProps = {
  phoneTitle: string;
  phoneSubtitle: string;
  phoneRows: { label: string; value: string; status?: string }[];
  phoneCaption: string;
  browserTitle: string;
  browserSubtitle: string;
  browserColumns: string[];
  browserRows: string[][];
  browserCaption: string;
  className?: string;
};

export function ProductPreview({
  phoneTitle,
  phoneSubtitle,
  phoneRows,
  phoneCaption,
  browserTitle,
  browserSubtitle,
  browserColumns,
  browserRows,
  browserCaption,
  className,
}: ProductPreviewProps) {
  return (
    <div
      className={cn(
        "grid items-end gap-6 lg:grid-cols-[minmax(0,240px)_1fr] lg:gap-8",
        className,
      )}
    >
      <PhoneMockup
        title={phoneTitle}
        subtitle={phoneSubtitle}
        rows={phoneRows}
        caption={phoneCaption}
        className="justify-self-center lg:justify-self-start"
      />
      <BrowserMockup
        title={browserTitle}
        subtitle={browserSubtitle}
        columns={browserColumns}
        rows={browserRows}
        caption={browserCaption}
      />
    </div>
  );
}
