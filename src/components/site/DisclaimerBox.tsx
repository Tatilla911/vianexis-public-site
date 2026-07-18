import { cn } from "@/lib/utils";

type DisclaimerBoxProps = {
  title?: string;
  children: React.ReactNode;
  className?: string;
};

export function DisclaimerBox({
  title = "Fontos tudnivaló",
  children,
  className,
}: DisclaimerBoxProps) {
  return (
    <div
      className={cn(
        "rounded-md border border-gold-core/30 bg-gold-core/[0.06] p-5",
        className,
      )}
    >
      <p className="text-overline mb-2 text-gold-core">{title}</p>
      <div className="text-body text-neutral-grey">{children}</div>
    </div>
  );
}
